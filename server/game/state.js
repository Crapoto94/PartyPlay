// =====================================================================
//  GameState — l'état partagé de la partie (en mémoire + sauvegarde JSON).
//  Toute mutation passe par une méthode qui appelle this.touch() pour
//  notifier les clients connectés (SSE) et persister sur disque.
// =====================================================================

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { PacmanGame } from './pacman.js';
import { TetrisGame } from './tetris.js';
import { TronGame } from './tron.js';
import { Game2048 } from './game2048.js';
import { PongGame } from './pong.js';
import { NOTE_PALETTE, MELODY, MOSAIC_DEFAULT_WORD, pickMosaicWord,
  PIANO_KEYS_PER_PHONE, PIANO_BASE_MIDI, PIANO_MELODY, pianoNoteInfo,
  pianoDemoSeq, pianoKeyLayout } from '../data/collab.js';
import { PRIVACY_QUESTIONS, PRIVACY_LEVELS } from '../data/privacy.js';
import { CARTON_HAND_SIZE, CARTON_DEFAULT_ROUNDS } from '../data/carton.js';
import { cartonPools, CARTON_LEVELS } from '../store/carton.js';
import { defaultPlaylistsMap } from '../store/blindtests.js';
import { TTCQ_THEMES } from '../data/ttcq.js';

// Mélange (Fisher-Yates) — copie mélangée d'un tableau.
function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// Normalise un texte pour comparaison (accents/casse/espaces) — utilisé par les
// activités « Dessine-moi » et « Mosaïque ».
function normalize(s) {
  return (s || '').toString().toUpperCase().normalize('NFD')
    .replace(/[̀-ͯ]/g, '').replace(/[^A-Z0-9]/g, '');
}

// Détecte une URL de playlist Deezer et en extrait l'identifiant numérique.
//   https://www.deezer.com/fr/playlist/908622995  → "908622995"
//   deezer.com/playlist/908622995                 → "908622995"
// Renvoie null si ce n'est pas une playlist Deezer.
function deezerPlaylistId(url) {
  const s = (url || '').toString();
  if (!/deezer/i.test(s)) return null;
  const m = s.match(/playlist\/(\d+)/);
  return m ? m[1] : null;
}

// Extrait l'identifiant vidéo (11 car.) d'une URL YouTube (watch, youtu.be,
// embed, shorts) ou d'un id brut. Renvoie '' si rien de reconnaissable.
function extractYouTubeId(url) {
  const s = (url || '').toString().trim();
  if (!s) return '';
  const m = s.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  if (m) return m[1];
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
  return '';
}

// Mosaïque : répartit L lettres en n parts entières aussi égales que possible.
function mosaicSplit(L, n) {
  const base = Math.floor(L / n), rem = L % n;
  return Array.from({ length: n }, (_, i) => base + (i < rem ? 1 : 0));
}
// Lettres aléatoires (leurres des lignes incorrectes de la mosaïque).
function randLetters(k) {
  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let s = '';
  for (let i = 0; i < k; i++) s += A[Math.floor(Math.random() * 26)];
  return s;
}

export class GameState {
  // cfg : la config de l'événement (cf. eventStore). savePath : fichier save.json dédié.
  constructor(cfg, savePath) {
    this.listeners = new Set(); // callbacks SSE
    this.savePath = savePath;
    this.applyConfig(cfg);
    this.playlistTracks = {}; // { theme: [{id,title}] } collectés depuis la borne — survit au reset()
    this._autoAdvanceTimer = null; // timer interne non persisté
    this.reset(false);
    this.load();
    // Resynchronise la liste des joueurs avec la config (ajouts/retraits via l'admin)
    // tout en conservant l'état runtime restauré (vies/pièces/connexion).
    this.applyConfig(this.cfg);
    if (!this.playlistTracks || typeof this.playlistTracks !== 'object') this.playlistTracks = {};
  }

  // Applique (ou met à jour à chaud) la config de l'événement. Ne touche pas à
  // l'état runtime des joueurs (vies/scores) au-delà de la fusion nom/avatar.
  applyConfig(cfg) {
    this.cfg = cfg;
    this.eventId = cfg.id;
    // Si les joueurs existent déjà (partie en cours), on resynchronise les
    // métadonnées (nom/avatar/token) sans perdre vies/pièces/connexion.
    if (Array.isArray(this.players)) {
      const byId = new Map(this.players.map((p) => [p.id, p]));
      this.players = (cfg.players || []).map((cp) => {
        const cur = byId.get(cp.id);
        return cur ? { ...cur, ...cp } : { ...cp, connected: false, lives: 3, coins: 0, ready: false, eliminated: false };
      });
    }
  }

  dispose() {
    this.reset(false); // purge les timers
    if (this._simTimer) { clearInterval(this._simTimer); this._simTimer = null; }
    this.listeners.clear();
  }

  // ---- Accès au contenu de l'événement -----------------------------
  get _content() { return (this.cfg && this.cfg.content) || {}; }
  get _avatars() { return (this.cfg && this.cfg.avatars) || {}; }
  avatarInfo(key) { return this._avatars[key] || null; }
  quizDeck(name) { return (this._content.quiz?.decks?.[name]) || []; }
  photoMissions(avatar) { return (this._content.photoMissions?.[avatar]) || []; }
  // Pioche un gage du catalogue de l'événement, filtré par pool si fourni.
  pickGage(pool = null) {
    const all = this._content.gages || [];
    const cand = pool ? all.filter((g) => (g.pool || []).includes(pool)) : all;
    const list = cand.length ? cand : all;
    return list.length ? list[Math.floor(Math.random() * list.length)]
      : { id: 'gage', titre: 'GAGE', desc: 'Relève un petit défi !', alt: '—', intensity: 1, pool: ['solo'] };
  }

  // ---- Cycle de vie -------------------------------------------------
  reset(persist = true) {
    if (this.pacmanTimer) { clearInterval(this.pacmanTimer); this.pacmanTimer = null; }
    if (this.tetrisTimer) { clearInterval(this.tetrisTimer); this.tetrisTimer = null; }
    if (this.tronTimer) { clearInterval(this.tronTimer); this.tronTimer = null; }
    if (this.g2048Timer) { clearInterval(this.g2048Timer); this.g2048Timer = null; }
    if (this.pongTimer) { clearInterval(this.pongTimer); this.pongTimer = null; }
    if (this._autoAdvanceTimer) { clearTimeout(this._autoAdvanceTimer); this._autoAdvanceTimer = null; }
    if (this._privacyTimer) { clearTimeout(this._privacyTimer); this._privacyTimer = null; }
    if (this._cartonTimer) { clearTimeout(this._cartonTimer); this._cartonTimer = null; }
    if (this._roueTimer) { clearTimeout(this._roueTimer); this._roueTimer = null; }
    if (this._briefTimer) { clearTimeout(this._briefTimer); this._briefTimer = null; }
    if (this._drawTimer) { clearTimeout(this._drawTimer); this._drawTimer = null; }
    if (this._celebrateTimer) { clearTimeout(this._celebrateTimer); this._celebrateTimer = null; }
    if (this._enqueteBriefTimer) { clearTimeout(this._enqueteBriefTimer); this._enqueteBriefTimer = null; }
    if (this._enqueteDebriefTimer) { clearTimeout(this._enqueteDebriefTimer); this._enqueteDebriefTimer = null; }
    if (this._enqueteFinaleTimer) { clearTimeout(this._enqueteFinaleTimer); this._enqueteFinaleTimer = null; }
    if (this._hqTimer) { clearTimeout(this._hqTimer); this._hqTimer = null; }
    if (this._ttcqTimer) { clearTimeout(this._ttcqTimer); this._ttcqTimer = null; }
    this.pacman = null; // partie Pac-Man en cours
    this.tetris = null; // partie Tetris en cours
    this.tron = null;   // partie Tron en cours
    this.g2048 = null;  // partie 2048 en cours
    this.pong = null;   // partie Pong en cours
    this.pacRotation = []; // historique des rôles Pac (rotation entre manches)
    this.mosaicCount = 0; // manches de mosaïque jouées (difficulté croissante)
    this.phase = 'lobby'; // lobby | activity (hub d'activités) | scoreboard
    this.activity = null; // activité BORNE en cours (objet)
    this.currentGage = null; // gage affiché en ce moment
    this.ambientPaused = false; // GM peut couper/relancer la playlist d'ambiance
    this.ambientRestartAt = Date.now(); // timestamp bumped au reset → borne repart du début
    this.photos = []; // [{id, playerId, playerName, avatar, missionIdx, missionLabel, url, uploadedAt}]
    this.photoVotes = {}; // { voterId: { belle: photoId|null, rigolote: photoId|null } }
    this.photoPhase = null; // null | 'vote' | 'results'
    this.log = []; // journal d'événements (récents en tête)
    this.players = ((this.cfg && this.cfg.players) || []).map((p) => ({
      ...p,
      connected: false,
      lives: 3,
      coins: 0,
      ready: false,
      eliminated: false,
    }));
    if (persist) this.touch();
  }

  load() {
    try {
      if (this.savePath && fs.existsSync(this.savePath)) {
        const data = JSON.parse(fs.readFileSync(this.savePath, 'utf8'));
        // On ne restaure jamais la config ni les méta d'instance depuis le save.
        delete data.cfg; delete data.savePath; delete data.eventId; delete data.listeners;
        Object.assign(this, data);
        this.listeners = new Set(); // ne pas restaurer les listeners
        this.addLog('💾 Partie restaurée depuis la sauvegarde.');
      }
    } catch (e) {
      console.error('Échec du chargement de la sauvegarde:', e.message);
    }
  }

  save() {
    // On exclut ce qui n'est pas sérialisable / éphémère :
    //  - listeners (Set de callbacks SSE)
    //  - pacmanTimer / _autoAdvanceTimer (objets Timer)
    //  - pacman (partie en cours, recréée à chaque manche)
    const { listeners, cfg, savePath, eventId, pacmanTimer, pacman, tetrisTimer, tetris, tronTimer, tron,
      g2048Timer, g2048, pongTimer, pong,
      _autoAdvanceTimer, _roueTimer, _briefTimer, _drawTimer, _celebrateTimer, _enqueteBriefTimer, _enqueteDebriefTimer, _enqueteFinaleTimer, _hqTimer, _ttcqTimer, ...data } = this;
    try {
      if (savePath) fs.writeFileSync(savePath, JSON.stringify(data, null, 2));
    } catch (e) {
      console.error('Échec de la sauvegarde:', e.message);
    }
  }

  // ---- Notifications SSE -------------------------------------------
  subscribe(cb) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  touch() {
    this.save();
    this.broadcast();
  }

  // Diffuse aux clients SANS sauvegarder (utilisé par la boucle Pac-Man)
  broadcast() {
    for (const cb of this.listeners) {
      try { cb(); } catch (_) { /* ignore */ }
    }
  }

  addLog(msg) {
    this.log.unshift({ t: Date.now(), msg });
    this.log = this.log.slice(0, 50);
  }

  // ---- Helpers ------------------------------------------------------
  player(id) {
    return this.players.find((p) => p.id === id);
  }
  playerByToken(token) {
    return this.players.find((p) => p.token === token);
  }

  // ---- Lobby --------------------------------------------------------
  connectPlayer(id) {
    const p = this.player(id);
    if (p && !p.connected) {
      p.connected = true;
      this.addLog(`🔌 ${p.name} s'est connecté.`);
      this.touch();
    }
  }

  setReady(id, ready = true) {
    const p = this.player(id);
    if (p) {
      p.ready = ready;
      this.touch();
    }
  }

  allReady() {
    const adults = this.players;
    return adults.length > 0 && adults.every((p) => p.ready);
  }

  // ---- Défis photo -------------------------------------------------
  addPhoto(photo) {
    const idx = this.photos.findIndex(p => p.playerId === photo.playerId && p.missionIdx === photo.missionIdx);
    if (idx >= 0) this.photos.splice(idx, 1, photo); else this.photos.push(photo);
    this.addLog(`📸 ${photo.playerName} — défi photo #${photo.missionIdx + 1} soumis.`);
    this.touch();
  }

  castPhotoVote(voterId, photoId, category) {
    const photo = this.photos.find(p => p.id === photoId);
    if (!photo || photo.playerId === voterId) return false;
    if (category !== 'belle' && category !== 'rigolote') return false;
    if (!this.photoVotes[voterId]) this.photoVotes[voterId] = {};
    this.photoVotes[voterId][category] = photoId;
    this.touch();
    return true;
  }

  setPhotoPhase(phase) {
    this.photoPhase = phase || null;
    if (phase === 'vote') this.addLog('📸 VOTE PHOTO ouvert ! Votez sur vos téléphones.');
    else if (phase === 'results') this.addLog('🏆 PALMARÈS PHOTO — résultats affichés sur la BORNE.');
    this.touch();
  }

  photoResults() {
    const belle = {}, rigolote = {};
    for (const votes of Object.values(this.photoVotes)) {
      if (votes.belle) belle[votes.belle] = (belle[votes.belle] || 0) + 1;
      if (votes.rigolote) rigolote[votes.rigolote] = (rigolote[votes.rigolote] || 0) + 1;
    }
    return { belle, rigolote };
  }

  // ---- Blind-test dynamique (titres collectés via IFrame API) ----------
  // Les titres sont rangés par THÈME (rock / francais / dessins / …).
  themePool(theme) {
    theme = theme || 'rock';
    if (!this.playlistTracks[theme]) this.playlistTracks[theme] = [];
    return this.playlistTracks[theme];
  }
  themeTrackCount(theme) {
    return theme ? this.themePool(theme).length : 0;
  }
  addPlaylistTrack(theme, videoId, videoTitle, audioUrl = null) {
    if (!videoId || !videoTitle) return;
    const pool = this.themePool(theme);
    if (!pool.find(t => t.id === videoId)) pool.push({ id: videoId, title: videoTitle, audioUrl: audioUrl || null });
  }

  // URL de playlist configurée pour ce blind-test (clé = nom du blind-test).
  // Repli sur les blind-tests par défaut de l'admin générale, pour que les
  // événements créés AVANT leur configuration puissent quand même les lancer.
  blindtestUrl(theme) {
    const own = (this._content.blindtest?.playlists || {})[theme];
    if (own) return own;
    try { return defaultPlaylistsMap()[theme] || ''; } catch { return ''; }
  }

  // Récupère la liste des titres + extraits 30 s d'une playlist DEEZER
  // (API publique, sans authentification). Peuple themePool avec des pistes
  // { id, title, audioUrl } directement jouables via <audio> sur la borne.
  async ingestDeezer(theme, playlistId) {
    if (!playlistId) return 0;
    const url = `https://api.deezer.com/playlist/${encodeURIComponent(playlistId)}/tracks?limit=100`;
    const d = await this._getJson(url);
    const tracks = (d && Array.isArray(d.data)) ? d.data : [];
    let added = 0;
    for (const t of tracks) {
      if (!t || !t.preview || !t.title) continue; // on ne garde que les titres avec extrait
      const label = t.artist?.name ? `${t.title} — ${t.artist.name}` : t.title;
      const id = 'dz' + t.id;
      const pool = this.themePool(theme);
      if (!pool.find((x) => x.id === id)) { pool.push({ id, title: label, audioUrl: t.preview }); added++; }
    }
    if (added) {
      this.addLog(`🎵 Blind-test Deezer (${theme}) : ${this.themePool(theme).length} titres chargés.`);
      this.touch();
    }
    return added;
  }

  // Petit GET JSON sans dépendance (oEmbed YouTube — endpoint public, pas de clé)
  _getJson(url) {
    return new Promise((resolve) => {
      const req = https.get(url, (res) => {
        if (res.statusCode !== 200) { res.resume(); return resolve(null); }
        let data = '';
        res.on('data', (c) => { data += c; });
        res.on('end', () => { try { resolve(JSON.parse(data)); } catch { resolve(null); } });
      });
      req.on('error', () => resolve(null));
      req.setTimeout(6000, () => { req.destroy(); resolve(null); });
    });
  }

  // Reçoit la liste COMPLÈTE des IDs de la playlist (depuis getPlaylist() côté
  // borne) et récupère chaque titre via l'oEmbed YouTube, par petits lots.
  async ingestPlaylist(theme, ids) {
    const pool = this.themePool(theme);
    const todo = (ids || []).filter((id) => id && !pool.find((t) => t.id === id));
    let added = 0;
    const fetchTitle = async (id) => {
      const url = 'https://www.youtube.com/oembed?format=json&url='
        + encodeURIComponent('https://www.youtube.com/watch?v=' + id);
      const d = await this._getJson(url);
      if (d && d.title) { this.addPlaylistTrack(theme, id, d.title); added++; }
    };
    for (let i = 0; i < todo.length; i += 6) {
      await Promise.all(todo.slice(i, i + 6).map(fetchTitle));
    }
    if (added) {
      this.addLog(`🎵 Blind-test (${theme}) : ${pool.length} titres en mémoire.`);
      this.touch();
    }
    return added;
  }

  // Pioche un titre AU HASARD dans la playlist collectée, ordonne à la borne
  // de jouer cette vidéo précise, et génère le QCM (bon titre + 3 leurres).
  // La manche fait a.total morceaux ; au-delà → décompte final.
  blindtestAsk() {
    const a = this.activity;
    if (!a || a.type !== 'blindtest') return;
    if ((a.asked || 0) >= (a.total || 15)) { this.blindtestFinish(); return; }
    const pool = [...this.themePool(a.theme)];
    if (pool.length < 4) {
      this.addLog('🎵 Blind-test : pas encore assez de titres détectés — patientez quelques secondes…');
      this.touch();
      return;
    }
    // Bonne réponse + 3 leurres, tous tirés de la playlist
    const correct = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
    const lures = pool.sort(() => Math.random() - 0.5).slice(0, 3).map(t => t.title);
    const choices = [...lures, correct.title].sort(() => Math.random() - 0.5);
    a.asked = (a.asked || 0) + 1;
    a.qIndex = a.asked - 1;
    a.generatedQuestion = {
      prompt: '🎵 Quel est le titre de cette chanson ?',
      choices,
      answer: choices.indexOf(correct.title),
      points: 100,
    };
    a.playVideoId = correct.audioUrl ? null : correct.id; // YouTube : id vidéo
    a.playAudioUrl = correct.audioUrl || null;            // Deezer : extrait MP3 30 s
    a.playRequestedAt = Date.now();   // force le rechargement même si même id
    a.firstCorrectName = null;
    a.sub = 'question';
    a.answers = {};
    this.addLog(`🎵 Blind-test ${a.asked}/${a.total} — nouvelle chanson !`);
    this.touch();
  }

  // Fin de manche : le dernier au classement (score le plus bas) perd une vie.
  blindtestFinish() {
    const a = this.activity;
    if (!a) return;
    if (this._autoAdvanceTimer) { clearTimeout(this._autoAdvanceTimer); this._autoAdvanceTimer = null; }
    const connected = this.players.filter((p) => p.connected);
    const board = connected
      .map((p) => ({ id: p.id, name: p.name, pts: (a.scores && a.scores[p.id]) || 0 }))
      .sort((x, y) => y.pts - x.pts);
    a.sub = 'final';
    a.finalBoard = board;
    a.loserNames = [];
    a.winnerNames = [];
    if (board.length) {
      const min = Math.min(...board.map((b) => b.pts));
      const max = Math.max(...board.map((b) => b.pts));
      // Vainqueur(s) : meilleur score (à condition d'avoir marqué des points)
      if (max > 0) a.winnerNames = board.filter((b) => b.pts === max).map((b) => b.name);
      // Perdant(s) : score le plus bas (sauf égalité parfaite, on épargne tout le monde)
      if (max !== min) {
        board.filter((b) => b.pts === min).forEach((b) => {
          const p = this.player(b.id);
          if (p && p.lives > 0) { p.lives -= 1; a.loserNames.push(p.name); }
        });
      }
    }
    const win = a.winnerNames.length ? `🏆 Vainqueur : ${a.winnerNames.join(', ')}.` : '';
    const lose = a.loserNames.length ? ` Dernier(s) : ${a.loserNames.join(', ')} — −1 vie 💔` : ' Égalité — personne ne perd de vie.';
    this.addLog(`🏁 Blind-test terminé ! ${win}${lose}`);
    this.touch();
  }

  // ---- Démarrage de partie -----------------------------------------
  // Lève le lobby : on passe dans le « hub » d'activités. Le GM lance ensuite
  // les jeux/quiz/blind-tests depuis sa console.
  startGame() {
    if (this._briefTimer) { clearTimeout(this._briefTimer); this._briefTimer = null; }
    this.activity = null;
    this.phase = 'activity';
    this.ambientRestartAt = Date.now();
    this.addLog('🎉 C\'est parti — la soirée commence !');
    this.touch();
  }

  // Affiche le tableau des scores sur la borne (phase dédiée).
  showScoreboard() { this.phase = 'scoreboard'; this.activity = null; this.addLog('🏆 Tableau des scores.'); this.touch(); }
  // Revient au hub d'activités.
  toHub() { this.phase = 'activity'; this.touch(); }

  // Classement global (pièces) pour l'écran scoreboard.
  scoreboard() {
    return this.players.map((p) => ({ id: p.id, name: p.name, avatar: p.avatar, coins: p.coins, lives: p.lives, connected: p.connected }))
      .sort((a, b) => b.coins - a.coins || b.lives - a.lives);
  }

  // ---- Gages --------------------------------------------------------
  drawGage(pool = null, targetId = null) {
    const g = this.pickGage(pool);
    this.currentGage = {
      ...g,
      targetId,
      targetName: targetId ? (this.player(targetId)?.name ?? null) : null,
      at: Date.now(),
    };
    const who = targetId ? this.player(targetId)?.name : 'la table';
    this.addLog(`🎲 GAGE « ${g.titre} » pour ${who}.`);
    this.touch();
    return this.currentGage;
  }

  clearGage() {
    this.currentGage = null;
    this.touch();
  }

  loseLife(playerId) {
    const p = this.player(playerId);
    if (p && p.lives > 0) {
      p.lives -= 1;
      this.addLog(`💔 ${p.name} perd une vie (${p.lives} restantes).`);
      this.touch();
    }
  }

  // ---- Activités BORNE (reaction, buzzer, spotlight, roue...) -------
  startActivity(type, opts = {}) {
    // Toute nouvelle activité annule un éventuel auto-lancement du briefing.
    if (this._briefTimer) { clearTimeout(this._briefTimer); this._briefTimer = null; }
    if (type === 'pacman') return this.startPacman(opts);
    if (type === 'tetris') return this.startTetris(opts);
    if (type === 'tron') return this.startTron(opts);
    if (type === '2048') return this.startG2048(opts);
    if (type === 'pong') return this.startPong(opts);
    this.activity = {
      type,
      startedAt: Date.now(),
      state: 'running',
      data: opts,
      buzzes: [], // [{id, name, t}]
      scores: {},
    };
    // Mosaïque de téléphones : difficulté croissante.
    //  1ʳᵉ manche → KONAMI, 1 ligne. Suivantes → mot vidéoludique, 2/3/4 lignes
    //  dont UNE SEULE correcte (les autres = leurres) : il faut placer les
    //  téléphones EN QUINCONCE pour aligner les lignes colorées.
    if (type === 'mosaic') {
      const players = this.players.filter((p) => p.connected);
      const n = Math.max(1, players.length);
      this.mosaicCount = (this.mosaicCount || 0) + 1;
      const round = this.mosaicCount;
      let word, rows;
      if (round === 1) { word = MOSAIC_DEFAULT_WORD; rows = 1; }
      else {
        rows = Math.min(round, 3); // 2 puis 3 lignes max (4 en quinconce = trop dur)
        word = (opts.word && opts.word.trim()) ? opts.word : pickMosaicWord(n);
      }
      word = (word || MOSAIC_DEFAULT_WORD).toUpperCase().replace(/[^A-Z]/g, '') || 'KONAMI';
      // Découpe en n segments de LETTRES ENTIÈRES (jamais au milieu d'une lettre)
      const sizes = mosaicSplit(word.length, n);
      const segs = [];
      let off = 0;
      for (let k = 0; k < n; k++) { segs.push(word.slice(off, off + sizes[k])); off += sizes[k]; }
      // Position horizontale (slice) mélangée + ligne correcte décalée (quinconce)
      const orderIdx = [...Array(n).keys()].sort(() => Math.random() - 0.5);
      const slices = {}, bands = {}, correctRow = {};
      players.forEach((p, i) => {
        const sl = orderIdx[i];
        slices[p.id] = sl;
        const seg = segs[sl] || '';
        const cr = sl % rows;
        correctRow[p.id] = cr;
        const arr = [];
        for (let r = 0; r < rows; r++) arr.push(r === cr ? seg : randLetters(seg.length || 2));
        bands[p.id] = arr;
      });
      this.activity.word = word;
      this.activity.n = n;
      this.activity.rows = rows;
      this.activity.round = round;
      this.activity.slices = slices;
      this.activity.bands = bands;
      this.activity.correctRow = correctRow;
      this.activity.reveal = false; // la ligne colorée n'apparaît que si le MJ le demande
      this.activity.solved = false;
      this.activity.solvedBy = null;
      this.activity.failed = false;
      this.activity.wrongCount = 0;
      this.activity.maxWrong = 3; // après 3 erreurs, la borne révèle la réponse
    }
    // Séquence musicale collaborative : attribution des notes aux joueurs
    if (type === 'music_seq') {
      const players = this.players.filter((p) => p.connected);
      const distinct = [...new Set(MELODY)]; // notes indispensables d'abord
      const decoys = NOTE_PALETTE.map((_, i) => i).filter((i) => !distinct.includes(i));
      const order = [...distinct, ...decoys];
      const owners = {};
      order.forEach((paletteIdx, i) => {
        const owner = players[i % Math.max(1, players.length)];
        if (owner) owners[paletteIdx] = owner.id;
      });
      this.activity.owners = owners;
      this.activity.step = 0;
      this.activity.revealed = 0;
      // Auto-démo : la borne joue le thème Mario dès le lancement (on l'ENTEND).
      this.activity.demo = { seq: [...MELODY], at: Date.now() };
      this.activity.wrongAt = 0;
      this.activity.status = 'playing';
    }
    // Piano réparti : chaque téléphone connecté = un demi-octave aligné.
    if (type === 'piano') {
      const players = this.players.filter((p) => p.connected);
      this.activity.order = players.map((p) => p.id); // ordre gauche → droite
      this.activity.keysPerPhone = PIANO_KEYS_PER_PHONE;
      this.activity.baseMidi = PIANO_BASE_MIDI;
      this.activity.melody = (opts.melody && opts.melody.length) ? opts.melody.slice() : [...PIANO_MELODY];
      this.activity.step = 0;
      this.activity.status = 'playing';
      this.activity.demo = null;
      this.activity.wrongAt = 0;
    }
    // Quiz / blind-test / quiz_vincent : on initialise le déroulé QCM
    if (type === 'quiz' || type === 'quiz_vincent' || type === 'blindtest') {
      const deck = type === 'blindtest' ? 'blindtest' : type === 'quiz_vincent' ? 'vincent' : (opts.deck || 'videogame');
      this.activity.deck = deck;
      this.activity.qIndex = 0;
      this.activity.sub = 'question'; // question | reveal
      this.activity.answers = {}; // { playerId: { choice, t } }
      this.activity.scores = {};
    }
    // Dessine-moi : un joueur dessine, les autres devinent (rotation des dessinateurs).
    if (type === 'draw') {
      this.activity.scores = {};       // { playerId: points }
      this.activity.round = 0;
      this.activity.order = this.players.filter((p) => p.connected).map((p) => p.id);
      this.activity.drawerPos = -1;
      this.activity.turns = 0;         // nb de tours déjà joués dans la session
      this.activity.maxTurns = this.activity.order.length; // chacun dessine une fois
      this._drawNewRound();
    }
    // Spotlight : un joueur relève un défi, la salle vote ensuite.
    if (type === 'spotlight') {
      const tid = opts.targetId || null;
      const defis = this._content.spotlightDefis || [];
      const defi = (opts.defi && opts.defi.trim())
        || (defis.length ? defis[Math.floor(Math.random() * defis.length)] : 'Relève un petit défi de ton choix !');
      this.activity.data = {
        targetId: tid,
        targetName: tid ? (this.player(tid)?.name || opts.targetName || '?') : (opts.targetName || '?'),
        defi,
      };
      this.activity.sub = 'challenge'; // challenge | vote | result
      this.activity.votes = {};        // { voterId: 'ok' | 'ko' }
      this.activity.verdict = null;    // 'ok' | 'ko'
    }
    // Blind-test : toujours dynamique (titres tirés de la playlist YouTube).
    // La 1ère chanson démarre automatiquement (si les titres sont déjà collectés ;
    // sinon le GM dispose d'un bouton de secours « Lancer la 1ère chanson »).
    if (type === 'blindtest') {
      const theme = opts.theme || 'rock';
      this.activity.theme = theme; // nom du blind-test choisi
      this.activity.dynamicBlindtest = true;
      this.activity.generatedQuestion = null;
      this.activity.playVideoId = null;
      this.activity.playAudioUrl = null;
      this.activity.playRequestedAt = 0;
      this.activity.firstCorrectName = null;
      this.activity.total = 15; // 15 morceaux par séance
      this.activity.asked = 0;  // morceaux déjà joués
      // Deezer : on récupère les titres + extraits 30 s côté serveur (API
      // publique), puis on lance la 1ère chanson. YouTube : titres moissonnés
      // par la borne, la 1ère chanson part dès qu'il y en a assez.
      const dzId = deezerPlaylistId(this.blindtestUrl(theme));
      if (dzId) {
        this.activity.source = 'deezer';
        this.activity.loading = true;   // ingestion en cours (borne : « chargement… »)
        this.activity.loadError = false;
        this.ingestDeezer(theme, dzId).then(() => {
          if (!this.activity || this.activity.type !== 'blindtest') return;
          this.activity.loading = false;
          if (this.themePool(theme).length < 4) { this.activity.loadError = true; this.touch(); }
          else this.blindtestAsk();
        }).catch(() => {
          if (this.activity && this.activity.type === 'blindtest') { this.activity.loading = false; this.activity.loadError = true; this.touch(); }
        });
      } else {
        this.activity.source = 'youtube';
        this.blindtestAsk();
      }
    }
    // Roue des gages : segments affichés, la roue tourne et tombe sur un gage,
    // puis décompte, puis vote « meilleur » (+1 vie au gagnant, −1 aux autres).
    if (type === 'roue_des_gages') {
      const pool = opts.pool || null;
      const allGages = this._content.gages || [];
      if (!allGages.length) { this.addLog('🎰 Roue des gages : aucun gage configuré pour cet événement.'); this.touch(); return; }
      const filtered = pool ? allGages.filter((g) => (g.pool || []).includes(pool)) : allGages;
      const src = filtered.length >= 6 ? filtered : allGages;
      const shuffled = [...src].sort(() => Math.random() - 0.5);
      const options = shuffled.slice(0, Math.min(8, shuffled.length));
      const chosenIndex = Math.floor(Math.random() * options.length);
      this.activity.options = options.map((g) => ({ id: g.id, titre: g.titre, desc: g.desc, alt: g.alt || null }));
      this.activity.chosenIndex = chosenIndex;
      this.activity.gage = this.activity.options[chosenIndex];
      this.activity.sub = 'spin';               // spin | challenge | vote | result
      this.activity.spinAt = Date.now();
      this.activity.challengeSeconds = opts.seconds || 20;
      this.activity.votes = {};                 // voterId -> targetId
      this.activity.winnerIds = [];
      this._scheduleRoue();
    }
    // Diffusion vidéo : tout le monde (borne + téléphones) joue une vidéo
    // YouTube avec un bandeau (danse des canards, anecdotes, etc.).
    if (type === 'videoshow') {
      this.activity.video = opts.video || '7kyY29BHTZs';
      this.activity.topLabel = opts.topLabel || '📺 VIDÉO';
      this.activity.chyron = opts.chyron || '';
      this.activity.footer = opts.footer || '';
      this.activity.skipIntro = opts.skipIntro || false;
      this.activity.borneOnly = opts.borneOnly || false;
      this.activity.landscape = opts.landscape || false;
    }
    // Sans Filtre !? : confessions anonymes. Chaque joueur répond OUI/NON
    // en secret, puis tout le monde parie sur le nombre de OUI.
    // Pari exact = 3 pts (+1 pièce), à ±1 = 1 pt. Personne ne sait jamais
    // qui a répondu quoi (les réponses ne quittent JAMAIS le serveur).
    if (type === 'privacy') {
      const level = opts.level === 'trash' ? 'trash' : 'intime';
      const pool = PRIVACY_QUESTIONS[level] || [];
      const order = [...pool.keys()].sort(() => Math.random() - 0.5);
      this.activity.level = level;
      this.activity.levelLabel = PRIVACY_LEVELS[level]?.label || level;
      this.activity.order = order;
      this.activity.qPos = 0;                       // position dans order
      this.activity.total = Math.max(1, Math.min(parseInt(opts.count, 10) || 10, order.length));
      this.activity.asked = 1;
      this.activity.sub = 'answer';                 // answer | guess | reveal | final
      this.activity.answers = {};                   // { playerId: bool } — SECRET, jamais exposé
      this.activity.guesses = {};                   // { playerId: n }
      this.activity.scores = {};                    // cumul des points
      this.activity.yesCount = null;
      this.addLog(`🤫 SANS FILTRE !? (${this.activity.levelLabel}) — répondez en secret sur vos téléphones !`);
    }
    // Bouche-Trou !? : une question à trou sur la borne, chacun joue une
    // carte-réponse de sa main, un ARBITRE tournant élit la plus drôle.
    // Version « Classique » (tout public) ou « 18+ » (cartes crues en plus).
    // Les questions PERSO du maître de jeu (content.carton.prompts) passent
    // en PRIORITÉ, avant les questions du catalogue.
    if (type === 'carton') {
      const level = opts.level === 'adulte' ? 'adulte' : 'classique';
      const pools = cartonPools(level);
      const custom = this._content.carton || {};
      const customPrompts = (Array.isArray(custom.prompts) ? custom.prompts : [])
        .map((s) => (s == null ? '' : String(s)).trim()).filter(Boolean);
      const customAnswers = (Array.isArray(custom.answers) ? custom.answers : [])
        .map((s) => (s == null ? '' : String(s)).trim()).filter(Boolean);
      // Questions perso EN TÊTE (prioritaires), puis catalogue mélangé.
      this.activity.prompts = [...customPrompts, ...shuffled(pools.prompts)];
      this.activity.answerPool = [...customAnswers, ...pools.answers];
      this.activity.level = level;
      this.activity.levelLabel = CARTON_LEVELS[level]?.label || level;
      this.activity.handSize = CARTON_HAND_SIZE;
      this.activity.totalRounds = Math.max(1, Math.min(parseInt(opts.rounds, 10) || CARTON_DEFAULT_ROUNDS, 30));
      this.activity.round = 0;
      this.activity.promptPos = 0;
      this.activity.judgePtr = -1;
      this.activity.order = this.players.filter((p) => p.connected).map((p) => p.id);
      this.activity.hands = {};
      this.activity.deck = shuffled(this.activity.answerPool);
      this.activity.scores = {};
      this.activity.roundWins = {};
      this.addLog(`🃏 BOUCHE-TROU !? (${this.activity.levelLabel}) — préparez vos meilleures cartes !`);
      this._cartonNewRound();
    }
    // TTCQ « TU TE METS COMBIEN ? » : chaque joueur choisit sa difficulté (1-8),
    // reçoit une question à son niveau, avance sur un plateau avec cases spéciales.
    if (type === 'ttcq') {
      const totalRounds = Math.min(Math.max(parseInt(opts.rounds, 10) || 10, 3), 20);
      const level = opts.level === 'adulte' ? 'adulte' : 'classique';
      const disabledCats = Array.isArray(opts.disabledCats) ? opts.disabledCats : [];
      const pool = TTCQ_THEMES.filter(t => t.level === level && !disabledCats.includes(t.cat));
      const cats = [...new Set(pool.map(t => t.cat))].sort();
      const a = this.activity;
      a.level = level;
      a.levelLabel = level === 'adulte' ? '18+' : 'Classique';
      a.disabledCats = disabledCats;
      a._pool = pool;
      a.sub = 'theme_pick';
      a.categories = cats;
      a.categoriesUsed = [];
      a.themePickerId = null;
      a.currentTheme = null;
      a.bets = {};
      a.answers = {};
      a.results = {};
      a.round = 0;
      a.totalRounds = totalRounds;
      a.positions = {};
      a.coins = {};
      a.doubleNext = {};
      a.board = this._ttcqBoard();
      this.players.forEach(p => { a.positions[p.id] = 0; a.coins[p.id] = 0; a.doubleNext[p.id] = false; });
      const catNames = cats.join(', ');
      this.addLog(`🎯 TTCQ ! (${level === 'adulte' ? '🔞 18+' : '🎉 Classique'}) — ${totalRounds} manches, catégories : ${catNames}`);
    }
    // Anecdote « BREAKING NEWS » : la borne diffuse une vidéo (lien YouTube ou
    // fichier uploadé par le maître de jeu), précédée d'un bandeau breaking news.
    if (type === 'anecdote') {
      const list = this._content.anecdotes || [];
      let an = (opts.anecdote && (opts.anecdote.youtube || opts.anecdote.video || opts.anecdote.titre))
        ? opts.anecdote
        : (Number.isInteger(opts.idx) && list[opts.idx]) ? list[opts.idx]
        : (list.length ? list[0] : null);
      if (!an) {
        this.addLog('📰 Aucune anecdote configurée — ajoutez-en une dans la console (onglet Contenu).');
        this.activity = null; this.phase = 'activity'; this.touch();
        return;
      }
      const ytId = extractYouTubeId(an.youtube || '');
      this.activity.titre = an.titre || 'BREAKING NEWS';
      this.activity.youtube = ytId;
      this.activity.videoUrl = an.video || '';
      this.activity.vignette = an.vignette || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : '');
      this.addLog(`📰 BREAKING NEWS : « ${this.activity.titre} » !`);
    }
    // Briefing : les slides défilent en boucle sur la borne et le briefing
    // RESTE affiché jusqu'à ce que le GM clique « ▶ DÉMARRER ». Pas d'auto-
    // démarrage (sinon la partie repartait toute seule / revenait au briefing).
    // (rien à planifier ici)
    this.phase = 'activity';
    this.addLog(`🎮 Activité BORNE : ${type}.`);
    this.touch();
  }

  // ---- Roue des gages : déroulé minuté --------------------------------
  _scheduleRoue() {
    if (this._roueTimer) { clearTimeout(this._roueTimer); this._roueTimer = null; }
    // 1) La roue tourne ~5 s, puis tombe sur le gage → phase « challenge ».
    this._roueTimer = setTimeout(() => {
      const a = this.activity;
      if (!a || a.type !== 'roue_des_gages') return;
      a.sub = 'challenge';
      a.challengeAt = Date.now();
      this.addLog(`🎰 La roue est tombée sur « ${a.gage.titre} » ! ${a.challengeSeconds} s pour briller.`);
      this.touch();
      // 2) Décompte écoulé → ouverture du vote.
      this._roueTimer = setTimeout(() => {
        const b = this.activity;
        if (!b || b.type !== 'roue_des_gages') return;
        b.sub = 'vote';
        b.votes = {};
        this.addLog('🗳️ Roue : votez pour le MEILLEUR — il gagne une vie, les autres en perdent une !');
        this.touch();
      }, (a.challengeSeconds || 20) * 1000);
    }, 5000);
  }

  roueVote(voterId, targetId) {
    const a = this.activity;
    if (!a || a.type !== 'roue_des_gages' || a.sub !== 'vote') return;
    if (!this.player(targetId)) return;
    a.votes[voterId] = targetId;
    const connected = this.players.filter((p) => p.connected);
    if (Object.keys(a.votes).length >= connected.length) this.roueTally();
    else this.touch();
  }

  roueOpenVote() {
    const a = this.activity;
    if (!a || a.type !== 'roue_des_gages') return;
    if (this._roueTimer) { clearTimeout(this._roueTimer); this._roueTimer = null; }
    a.sub = 'vote';
    a.votes = {};
    this.addLog('🗳️ Roue : vote ouvert (le meilleur gagne une vie) !');
    this.touch();
  }

  roueTally() {
    const a = this.activity;
    if (!a || a.type !== 'roue_des_gages') return;
    if (this._roueTimer) { clearTimeout(this._roueTimer); this._roueTimer = null; }
    const counts = {};
    for (const t of Object.values(a.votes || {})) counts[t] = (counts[t] || 0) + 1;
    let max = -1;
    for (const n of Object.values(counts)) if (n > max) max = n;
    const winners = max > 0 ? Object.keys(counts).filter((id) => counts[id] === max) : [];
    a.winnerIds = winners;
    a.voteCounts = counts;
    a.sub = 'result';
    const connected = this.players.filter((p) => p.connected);
    connected.forEach((p) => {
      if (winners.includes(p.id)) p.lives = Math.min(3, p.lives + 1);
      else if (p.lives > 0) p.lives -= 1;
    });
    const wn = winners.map((id) => this.player(id)?.name).filter(Boolean);
    this.addLog(wn.length
      ? `🏆 Roue : ${wn.join(', ')} gagne(nt) une vie ❤️ ; les autres en perdent une 💔`
      : '🎰 Roue : aucun vote — personne ne bouge.');
    this.touch();
  }

  // ---- Quiz / blind-test : QCM affiché borne, réponse smartphone ----
  quizQuestion() {
    const a = this.activity;
    if (!a || (a.type !== 'quiz' && a.type !== 'quiz_vincent' && a.type !== 'blindtest')) return null;
    if (a.dynamicBlindtest) return a.generatedQuestion || null; // null = avant la 1ère chanson
    const list = this.quizDeck(a.deck);
    return list[a.qIndex] || null;
  }

  quizAnswer(playerId, choice) {
    const a = this.activity;
    if (!a || a.sub !== 'question') return;
    if (a.answers[playerId]) return; // déjà répondu, on garde la 1ʳᵉ
    a.answers[playerId] = { choice: Number(choice), t: Date.now() };
    // Auto-révéler quand tous les joueurs connectés ont répondu
    const connected = this.players.filter(p => p.connected).length;
    if (Object.keys(a.answers).length >= connected) {
      this.quizReveal();
    } else {
      this.touch();
    }
  }

  quizReveal() {
    const a = this.activity;
    const q = this.quizQuestion();
    if (!a || !q || a.sub !== 'question') return;
    a.sub = 'reveal';
    // Attribution des points : bonne réponse = points (+ bonus rapidité léger)
    const corrects = Object.entries(a.answers)
      .filter(([, ans]) => ans.choice === q.answer)
      .sort((x, y) => x[1].t - y[1].t);
    corrects.forEach(([pid], i) => {
      const bonus = i === 0 ? 50 : 0;
      const gain = q.points + bonus;
      a.scores[pid] = (a.scores[pid] || 0) + gain;
      const p = this.player(pid);
      if (p) p.coins += Math.round(gain / 50);
    });
    // Le premier à avoir trouvé est mis à l'honneur
    if (corrects.length) {
      const first = this.player(corrects[0][0]);
      a.firstCorrectName = first?.name || null;
      if (first) this.addLog(`🥇 ${first.name} a trouvé en PREMIER — bravo !`);
    } else {
      a.firstCorrectName = null;
    }
    this.addLog(`💡 Réponse : « ${q.choices[q.answer]} » (${corrects.length} bonne(s) réponse(s)).`);
    this.touch();
    // Auto-passage : chanson/question suivante après 13 s (laisse le temps de
    // voir le titre, féliciter, souffler entre deux morceaux)
    if (this._autoAdvanceTimer) clearTimeout(this._autoAdvanceTimer);
    this._autoAdvanceTimer = setTimeout(() => {
      this._autoAdvanceTimer = null;
      this.quizNext();
    }, 13000);
  }

  quizNext() {
    const a = this.activity;
    if (!a) return;
    if (this._autoAdvanceTimer) { clearTimeout(this._autoAdvanceTimer); this._autoAdvanceTimer = null; }
    if (a.dynamicBlindtest) {
      this.blindtestAsk(); // pioche une autre chanson au hasard dans la playlist
      return;
    }
    const list = this.quizDeck(a.deck);
    if (a.qIndex < list.length - 1) {
      a.qIndex += 1;
      a.sub = 'question';
      a.answers = {};
      this.touch();
    } else {
      this.addLog('🏁 Quiz terminé.');
      this.stopActivity();
    }
  }

  // Vue publique d'une activité (NE FUITE PAS la bonne réponse en phase question)
  activityPublic(forPlayerId = null) {
    const a = this.activity;
    if (!a) return null;
    if (a.type === 'music_seq') return this.musicPublic(forPlayerId);
    if (a.type === 'piano') return this.pianoPublic(forPlayerId);
    if (a.type === 'mosaic') return this.mosaicPublic(forPlayerId);
    if (a.type === 'draw') return this._drawPublic(forPlayerId);
    if (a.type === 'privacy') return this.privacyPublic(forPlayerId);
    if (a.type === 'carton') return this.cartonPublic(forPlayerId);
    if (a.type === 'ttcq') return this.ttcqPublic(forPlayerId);
    if (a.type !== 'quiz' && a.type !== 'quiz_vincent' && a.type !== 'blindtest') return a;
    const q = this.quizQuestion();
    const list = a.dynamicBlindtest ? [] : (this.quizDeck(a.deck));
    const reveal = a.sub === 'reveal';
    return {
      type: a.type,
      state: a.state,
      deck: a.deck,
      sub: a.sub,
      qIndex: a.qIndex,
      total: a.dynamicBlindtest ? (a.total || 15) : list.length,
      asked: a.asked || 0,
      prompt: q ? q.prompt : '',
      photo: q ? (q.photo || null) : null,
      choices: q ? q.choices : [],
      media: q ? (q.media || null) : null,
      audioUrl: q && reveal ? (q.audioUrl || null) : null,
      answeredCount: Object.keys(a.answers).length,
      playerCount: this.players.filter((p) => p.connected).length,
      // Seulement à la révélation :
      answer: reveal && q ? q.answer : null,
      answers: reveal ? a.answers : null,
      scores: reveal ? a.scores : null,
      leaderboard: reveal ? this.quizLeaderboard() : null,
      myAnswer: forPlayerId && a.answers[forPlayerId] ? a.answers[forPlayerId].choice : null,
      // Blind-test dynamique
      dynamicBlindtest: a.dynamicBlindtest || false,
      source: a.source || 'youtube',
      loading: a.loading || false,
      loadError: a.loadError || false,
      theme: a.theme || null,
      playVideoId: a.playVideoId || null,
      playAudioUrl: a.playAudioUrl || null,
      playRequestedAt: a.playRequestedAt || 0,
      firstCorrectName: reveal ? (a.firstCorrectName || null) : null,
      finalBoard: a.sub === 'final' ? (a.finalBoard || []) : null,
      loserNames: a.sub === 'final' ? (a.loserNames || []) : null,
      winnerNames: a.sub === 'final' ? (a.winnerNames || []) : null,
    };
  }

  quizLeaderboard() {
    const a = this.activity;
    const q = this.quizQuestion();
    // Tous les joueurs connectés, qu'ils aient répondu ou non
    const connected = this.players.filter(p => p.connected);
    return connected.map(p => {
      const ans = a.answers?.[p.id];
      const correct = ans != null && q != null && ans.choice === q.answer;
      return { id: p.id, name: p.name, pts: a.scores?.[p.id] || 0, correct, answered: !!ans };
    }).sort((x, y) => y.pts - x.pts || (y.correct ? 1 : 0) - (x.correct ? 1 : 0));
  }

  buzz(playerId) {
    if (!this.activity || this.activity.state !== 'running') return;
    if (this.activity.buzzes.find((b) => b.id === playerId)) return;
    const p = this.player(playerId);
    this.activity.buzzes.push({ id: playerId, name: p?.name, t: Date.now() });
    // Reaction Race : on résout dès que TOUT LE MONDE SAUF UN a buzzé.
    //  - le PREMIER regagne une vie (max 3)
    //  - celui qui n'a PAS buzzé (le plus lent) perd une vie
    if (this.activity.type === 'reaction_race') {
      const connected = this.players.filter(pl => pl.connected);
      const need = Math.max(1, connected.length - 1); // tout le monde sauf un
      if (connected.length >= 2 && this.activity.buzzes.length >= need && !this.activity.resolved) {
        this.activity.resolved = true;
        const sorted = [...this.activity.buzzes].sort((a, b) => a.t - b.t);
        const first = this.player(sorted[0].id);
        // le DERNIER = le seul joueur connecté qui n'a pas buzzé (sinon le plus tardif)
        const buzzed = new Set(this.activity.buzzes.map(b => b.id));
        const nonBuzzer = connected.find(p => !buzzed.has(p.id));
        const last = nonBuzzer || this.player(sorted[sorted.length - 1].id);
        this.activity.firstName = first?.name || null;
        this.activity.lastName = last?.name || null;
        if (last && last.lives > 0) {
          last.lives -= 1;
          this.addLog(`🐢 ${last.name} n'a pas réagi à temps — −1 vie (${last.lives} restante(s)).`);
        }
        if (first) {
          if (first.lives < 3) { first.lives += 1; this.addLog(`⚡ ${first.name} le plus RAPIDE — +1 vie (${first.lives}) !`); }
          else this.addLog(`⚡ ${first.name} le plus RAPIDE ! (déjà au max de vies)`);
        }
      }
    }
    this.touch();
  }

  // ---- Spotlight : défi d'un joueur jugé par la salle ---------------
  spotlightOpenVote() {
    const a = this.activity;
    if (!a || a.type !== 'spotlight') return;
    a.sub = 'vote';
    a.votes = {};
    this.addLog(`🔦 Spotlight : ${a.data.targetName} a relevé le défi — à la salle de juger !`);
    this.touch();
  }

  spotlightVote(voterId, verdict) {
    const a = this.activity;
    if (!a || a.type !== 'spotlight' || a.sub !== 'vote') return;
    if (voterId === a.data.targetId) return; // la cible ne vote pas pour elle-même
    if (verdict !== 'ok' && verdict !== 'ko') return;
    a.votes[voterId] = verdict;
    this.touch();
  }

  spotlightTally() {
    const a = this.activity;
    if (!a || a.type !== 'spotlight') return;
    let ok = 0, ko = 0;
    for (const v of Object.values(a.votes || {})) { if (v === 'ok') ok++; else if (v === 'ko') ko++; }
    const passed = ok >= ko; // égalité = réussi (on est bienveillant)
    a.verdict = passed ? 'ok' : 'ko';
    a.okCount = ok; a.koCount = ko;
    a.sub = 'result';
    const target = this.player(a.data.targetId);
    if (!passed && target && target.lives > 0) {
      target.lives -= 1;
      this.addLog(`💔 ${a.data.targetName} n'a pas convaincu (${ok}👏/${ko}💀) — vie perdue (${target.lives} restante(s)).`);
    } else {
      this.addLog(`👏 ${a.data.targetName} a relevé le défi avec brio ! (${ok}👏/${ko}💀)`);
    }
    this.touch();
  }

  // ---- Sans Filtre !? : confessions anonymes ------------------------
  privacyQuestion() {
    const a = this.activity;
    if (!a || a.type !== 'privacy') return null;
    const pool = PRIVACY_QUESTIONS[a.level] || [];
    return pool[a.order[a.qPos]] || null;
  }

  // Réponse SECRÈTE d'un joueur (oui/non). Modifiable tant que la phase
  // de réponse est ouverte ; on passe aux paris quand tout le monde a répondu.
  privacyAnswer(playerId, yes) {
    const a = this.activity;
    if (!a || a.type !== 'privacy' || a.sub !== 'answer') return;
    if (!this.player(playerId)) return;
    a.answers[playerId] = !!yes;
    const connected = this.players.filter((p) => p.connected);
    if (Object.keys(a.answers).length >= connected.length) this.privacyCloseAnswers();
    else this.touch();
  }

  // Clôt la phase de réponse (auto quand tout le monde a répondu, ou GM).
  privacyCloseAnswers() {
    const a = this.activity;
    if (!a || a.type !== 'privacy' || a.sub !== 'answer') return;
    if (!Object.keys(a.answers).length) return; // rien à parier sans réponses
    a.sub = 'guess';
    a.guesses = {};
    this.addLog('🎲 SANS FILTRE : les réponses sont verrouillées — pariez sur le nombre de OUI !');
    this.touch();
  }

  // Pari d'un joueur sur le nombre de OUI. Modifiable jusqu'à la révélation.
  privacyGuess(playerId, n) {
    const a = this.activity;
    if (!a || a.type !== 'privacy' || a.sub !== 'guess') return;
    if (!this.player(playerId)) return;
    const max = Object.keys(a.answers).length;
    const g = Math.max(0, Math.min(max, parseInt(n, 10) || 0));
    a.guesses[playerId] = g;
    const connected = this.players.filter((p) => p.connected);
    if (Object.keys(a.guesses).length >= connected.length) this.privacyReveal();
    else this.touch();
  }

  // Révélation : compte des OUI + attribution des points (exact 3, ±1 → 1).
  privacyReveal() {
    const a = this.activity;
    if (!a || a.type !== 'privacy' || a.sub !== 'guess') return;
    const yes = Object.values(a.answers).filter(Boolean).length;
    a.yesCount = yes;
    a.roundResults = Object.entries(a.guesses).map(([pid, guess]) => {
      const p = this.player(pid);
      const delta = Math.abs(guess - yes);
      const gain = delta === 0 ? 3 : delta === 1 ? 1 : 0;
      a.scores[pid] = (a.scores[pid] || 0) + gain;
      if (delta === 0 && p) p.coins += 1;
      return { id: pid, name: p?.name || '?', avatar: p?.avatar || null, guess, gain, exact: delta === 0 };
    }).sort((x, y) => y.gain - x.gain || x.guess - y.guess);
    a.sub = 'reveal';
    a.revealAt = Date.now();
    a.autoNextSeconds = 20; // passage auto à la question suivante après 20 s
    const winners = a.roundResults.filter((r) => r.exact).map((r) => r.name);
    this.addLog(winners.length
      ? `🤫 SANS FILTRE : ${yes} OUI sur ${Object.keys(a.answers).length} — pari exact pour ${winners.join(', ')} (+3 pts, +1 pièce) !`
      : `🤫 SANS FILTRE : ${yes} OUI sur ${Object.keys(a.answers).length} — personne n'avait le compte exact.`);
    this.touch();
    // Auto-passage à la question suivante après 20 s (comme le quiz). Le GM
    // peut toujours cliquer « Question suivante » avant la fin du décompte.
    if (this._privacyTimer) clearTimeout(this._privacyTimer);
    this._privacyTimer = setTimeout(() => { this._privacyTimer = null; this.privacyNext(); }, 20000);
  }

  // Question suivante (GM ou auto après 20 s). Après la dernière : classement final.
  privacyNext() {
    const a = this.activity;
    if (this._privacyTimer) { clearTimeout(this._privacyTimer); this._privacyTimer = null; }
    if (!a || a.type !== 'privacy') return;
    if (a.sub === 'answer') return; // rien à passer, la manche démarre à peine
    if (a.asked >= a.total || a.qPos >= a.order.length - 1) {
      a.sub = 'final';
      a.finalBoard = this.privacyLeaderboard();
      const top = a.finalBoard[0];
      this.addLog(top
        ? `🏁 SANS FILTRE terminé — ${top.name} remporte la partie avec ${top.pts} pts !`
        : '🏁 SANS FILTRE terminé.');
      this.touch();
      return;
    }
    a.qPos += 1;
    a.asked += 1;
    a.sub = 'answer';
    a.answers = {};
    a.guesses = {};
    a.yesCount = null;
    a.roundResults = null;
    a.revealAt = null;
    a.autoNextSeconds = null;
    this.touch();
  }

  privacyLeaderboard() {
    const a = this.activity;
    if (!a || a.type !== 'privacy') return [];
    return this.players
      .filter((p) => p.connected || (a.scores[p.id] || 0) > 0)
      .map((p) => ({ id: p.id, name: p.name, avatar: p.avatar, pts: a.scores[p.id] || 0 }))
      .sort((x, y) => y.pts - x.pts);
  }

  // Vue publique : les réponses individuelles NE SORTENT JAMAIS d'ici.
  // Chacun ne voit que sa propre réponse ; seul le TOTAL de OUI est révélé.
  privacyPublic(forPlayerId = null) {
    const a = this.activity;
    const connected = this.players.filter((p) => p.connected);
    const answered = Object.keys(a.answers).length;
    return {
      type: 'privacy',
      state: a.state,
      level: a.level,
      levelLabel: a.levelLabel,
      sub: a.sub,
      asked: a.asked,
      total: a.total,
      prompt: this.privacyQuestion() || '',
      answeredCount: answered,
      guessedCount: Object.keys(a.guesses).length,
      playerCount: connected.length,
      maxGuess: answered,
      myAnswered: forPlayerId != null && Object.prototype.hasOwnProperty.call(a.answers, forPlayerId),
      myAnswer: forPlayerId != null && Object.prototype.hasOwnProperty.call(a.answers, forPlayerId) ? a.answers[forPlayerId] : null,
      myGuess: forPlayerId != null && Object.prototype.hasOwnProperty.call(a.guesses, forPlayerId) ? a.guesses[forPlayerId] : null,
      // Révélation uniquement :
      yesCount: (a.sub === 'reveal' || a.sub === 'final') ? a.yesCount : null,
      roundResults: a.sub === 'reveal' ? (a.roundResults || []) : null,
      leaderboard: (a.sub === 'reveal' || a.sub === 'final') ? this.privacyLeaderboard() : null,
      finalBoard: a.sub === 'final' ? (a.finalBoard || []) : null,
      // Décompte d'auto-passage (borne) : instant de révélation + durée en s.
      revealAt: a.sub === 'reveal' ? (a.revealAt || null) : null,
      autoNextSeconds: a.sub === 'reveal' ? (a.autoNextSeconds || null) : null,
    };
  }

  // ---- Bouche-Trou !? : cartes à trou jugées par un arbitre tournant ----

  // Pioche une carte-réponse ; recharge le paquet mélangé si épuisé.
  _cartonDraw() {
    const a = this.activity;
    if (!a.deck || !a.deck.length) a.deck = shuffled(a.answerPool || []);
    return a.deck.pop();
  }

  // Nombre de trous « ___ » d'une question (au moins 1).
  _cartonBlanks(prompt) {
    const m = (prompt || '').match(/___/g);
    return Math.max(1, m ? m.length : 1);
  }

  // Recharge les mains de tous les joueurs connectés jusqu'à handSize.
  _cartonRefill() {
    const a = this.activity;
    const size = a.handSize || CARTON_HAND_SIZE;
    for (const p of this.players.filter((x) => x.connected)) {
      if (!a.hands[p.id]) a.hands[p.id] = [];
      while (a.hands[p.id].length < size) {
        const c = this._cartonDraw();
        if (c == null) break;
        a.hands[p.id].push(c);
      }
    }
  }

  // Ordre des sièges (rotation de l'arbitre) : ordre d'arrivée, complété par
  // les nouveaux connectés en fin de liste.
  _cartonSeats() {
    const a = this.activity;
    const connectedIds = this.players.filter((p) => p.connected).map((p) => p.id);
    a.order = (a.order || []).filter((id) => connectedIds.includes(id));
    for (const id of connectedIds) if (!a.order.includes(id)) a.order.push(id);
    return a.order;
  }

  // Nouvelle manche : nouvel arbitre, nouvelle question, mains rechargées.
  _cartonNewRound() {
    const a = this.activity;
    if (!a || a.type !== 'carton') return;
    if (this._cartonTimer) { clearTimeout(this._cartonTimer); this._cartonTimer = null; }
    const seats = this._cartonSeats();
    a.round = (a.round || 0) + 1;
    a.judgePtr = (a.judgePtr ?? -1) + 1;
    a.judgeId = seats.length ? seats[a.judgePtr % seats.length] : null;
    if (a.promptPos >= a.prompts.length) a.promptPos = 0; // boucle sur le paquet
    a.prompt = a.prompts[a.promptPos] || '___';
    a.blanks = this._cartonBlanks(a.prompt);
    a.promptPos += 1;
    this._cartonRefill();
    a.submissions = {};
    a.subOrder = [];
    a.winnerId = null;
    a.winningCards = null;
    a.sub = 'pick';
    this.addLog(`🃏 Bouche-Trou — manche ${a.round}/${a.totalRounds} : ${this.player(a.judgeId)?.name || '?'} est l'arbitre !`);
    this.touch();
  }

  // Un joueur joue une (ou deux) carte(s) de sa main.
  cartonPlay(playerId, indices) {
    const a = this.activity;
    if (!a || a.type !== 'carton' || a.sub !== 'pick') return { ok: false };
    if (playerId === a.judgeId) return { ok: false, judge: true };
    const p = this.player(playerId);
    if (!p || !p.connected) return { ok: false };
    if (a.submissions[playerId]) return { ok: false, already: true };
    const hand = a.hands[playerId] || [];
    let idx = Array.isArray(indices) ? indices : [indices];
    idx = idx.map((n) => parseInt(n, 10)).filter((n) => Number.isInteger(n) && n >= 0 && n < hand.length);
    idx = [...new Set(idx)];
    if (idx.length !== a.blanks) return { ok: false, need: a.blanks };
    a.submissions[playerId] = idx.map((i) => hand[i]);
    a.hands[playerId] = hand.filter((_, i) => !idx.includes(i));
    // Auto-clôture quand tous les non-arbitres connectés ont joué.
    const submitters = this.players.filter((x) => x.connected && x.id !== a.judgeId);
    if (submitters.length && submitters.every((x) => a.submissions[x.id])) this.cartonClose();
    else this.touch();
    return { ok: true };
  }

  // Clôt les soumissions → jugement (ordre anonyme mélangé).
  cartonClose() {
    const a = this.activity;
    if (!a || a.type !== 'carton' || a.sub !== 'pick') return;
    const ids = Object.keys(a.submissions);
    if (!ids.length) return;
    a.subOrder = shuffled(ids);
    a.sub = 'judge';
    this.addLog(`🃏 Bouche-Trou — ${ids.length} carte(s) jouée(s) : à l'arbitre de trancher !`);
    this.touch();
  }

  // L'arbitre choisit la soumission gagnante (index dans subOrder).
  cartonPick(judgeId, choice) {
    const a = this.activity;
    if (!a || a.type !== 'carton' || a.sub !== 'judge') return { ok: false };
    if (judgeId !== a.judgeId) return { ok: false, notJudge: true };
    const pos = parseInt(choice, 10);
    if (!Number.isInteger(pos) || pos < 0 || pos >= (a.subOrder || []).length) return { ok: false };
    const winnerId = a.subOrder[pos];
    a.winnerId = winnerId;
    a.winningCards = a.submissions[winnerId] || [];
    a.scores[winnerId] = (a.scores[winnerId] || 0) + 1;
    a.roundWins[winnerId] = (a.roundWins[winnerId] || 0) + 1;
    const w = this.player(winnerId);
    if (w) w.coins += 1;
    a.sub = 'reveal';
    a.revealAt = Date.now();
    a.autoNextSeconds = 14;
    this.addLog(`🏆 Bouche-Trou — ${w?.name || '?'} remporte la manche ${a.round} ! (+1 pt, +1 🪙)`);
    this.touch();
    if (this._cartonTimer) clearTimeout(this._cartonTimer);
    this._cartonTimer = setTimeout(() => { this._cartonTimer = null; this.cartonNext(); }, 14000);
    return { ok: true };
  }

  // Manche suivante (arbitre ou auto). Après la dernière : classement final.
  cartonNext() {
    const a = this.activity;
    if (this._cartonTimer) { clearTimeout(this._cartonTimer); this._cartonTimer = null; }
    if (!a || a.type !== 'carton') return;
    if (a.sub === 'pick') { this.cartonClose(); return; } // sécurité
    if ((a.round || 0) >= (a.totalRounds || 1)) {
      a.sub = 'final';
      a.finalBoard = this.cartonLeaderboard();
      const top = a.finalBoard[0];
      this.addLog(top ? `🏁 BOUCHE-TROU terminé — ${top.name} gagne avec ${top.pts} pt(s) !` : '🏁 BOUCHE-TROU terminé.');
      this.touch();
      return;
    }
    this._cartonNewRound();
  }

  // Passage FORCÉ à la manche suivante (GM) depuis n'importe quelle phase, même
  // sans vainqueur (utile si l'arbitre est absent ou qu'un blocage survient).
  cartonSkip() {
    const a = this.activity;
    if (this._cartonTimer) { clearTimeout(this._cartonTimer); this._cartonTimer = null; }
    if (!a || a.type !== 'carton') return;
    if ((a.round || 0) >= (a.totalRounds || 1)) {
      a.sub = 'final';
      a.finalBoard = this.cartonLeaderboard();
      const top = a.finalBoard[0];
      this.addLog(top ? `🏁 BOUCHE-TROU terminé — ${top.name} gagne avec ${top.pts} pt(s) !` : '🏁 BOUCHE-TROU terminé.');
      this.touch();
      return;
    }
    this.addLog('⏭️ Bouche-Trou — manche passée par le maître de jeu.');
    this._cartonNewRound();
  }

  cartonLeaderboard() {
    const a = this.activity;
    if (!a || a.type !== 'carton') return [];
    return this.players
      .filter((p) => p.connected || (a.scores[p.id] || 0) > 0)
      .map((p) => ({ id: p.id, name: p.name, avatar: p.avatar, pts: a.scores[p.id] || 0 }))
      .sort((x, y) => y.pts - x.pts);
  }

  // Remplit les trous d'une question avec des cartes (affichage).
  _cartonFill(prompt, cards) {
    let i = 0;
    const filled = (prompt || '').replace(/___/g, () => {
      const c = (cards && cards[i] != null) ? cards[i] : '___';
      i++;
      return `« ${c} »`;
    });
    if (i === 0 && cards && cards.length) return `${prompt} → « ${cards.join(' + ')} »`;
    return filled;
  }

  // Vue publique : la main n'est visible QUE par son propriétaire ; les
  // soumissions restent anonymes jusqu'à la révélation du gagnant.
  cartonPublic(forPlayerId) {
    const a = this.activity;
    const connected = this.players.filter((p) => p.connected);
    const submitters = connected.filter((p) => p.id !== a.judgeId);
    const iAmJudge = forPlayerId != null && forPlayerId === a.judgeId;
    const myHand = (forPlayerId != null && a.hands[forPlayerId])
      ? a.hands[forPlayerId].map((text, i) => ({ i, text })) : [];
    const base = {
      type: 'carton', state: a.state, level: a.level, levelLabel: a.levelLabel,
      sub: a.sub, round: a.round, totalRounds: a.totalRounds,
      prompt: a.prompt || '', blanks: a.blanks || 1,
      judgeId: a.judgeId, judgeName: this.player(a.judgeId)?.name || '?',
      playerCount: connected.length,
      submittedCount: Object.keys(a.submissions || {}).length,
      neededCount: submitters.length,
      iAmJudge, myHand,
      mySubmitted: forPlayerId != null && !!(a.submissions || {})[forPlayerId],
      mySubmission: (forPlayerId != null && (a.submissions || {})[forPlayerId]) || null,
      // Classement TOUJOURS exposé : la borne l'affiche en permanence.
      leaderboard: this.cartonLeaderboard(),
    };
    if (a.sub === 'judge') {
      base.submissions = (a.subOrder || []).map((pid, i) => ({
        i, cards: a.submissions[pid], filled: this._cartonFill(a.prompt, a.submissions[pid]),
      }));
    }
    if (a.sub === 'reveal') {
      base.winnerName = this.player(a.winnerId)?.name || '?';
      base.winnerAvatar = this.player(a.winnerId)?.avatar || null;
      base.winningCards = a.winningCards || [];
      base.winningFilled = this._cartonFill(a.prompt, a.winningCards);
      base.revealAt = a.revealAt || null;
      base.autoNextSeconds = a.autoNextSeconds || null;
      base.allSubmissions = (a.subOrder || []).map((pid) => ({
        name: this.player(pid)?.name || '?', cards: a.submissions[pid],
        filled: this._cartonFill(a.prompt, a.submissions[pid]), win: pid === a.winnerId,
      }));
    }
    if (a.sub === 'final') base.finalBoard = a.finalBoard || this.cartonLeaderboard();
    return base;
  }

  // ---- TTCQ « TU TE METS COMBIEN ? » : plateau, thème, pari, question ----
  _ttcqBoard() {
    const spaces = ['🟦 Départ'];
    for (let i = 1; i < 48; i++) {
      if (i === 47) spaces.push('🏁 Arrivée');
      else if (i % 12 === 6) spaces.push('⭐ Compte double');
      else if (i % 15 === 0) spaces.push('💀 Défi');
      else if (i % 20 === 0) spaces.push('🎲 Relance');
      else if (i % 18 === 0) spaces.push('🪙 Bonus');
      else spaces.push('🟦');
    }
    return spaces;
  }
  _ttcqRandomTheme(category) {
    const a = this.activity;
    const basePool = a._pool || TTCQ_THEMES;
    const pool = category
      ? basePool.filter(t => t.cat === category && !a._usedThemes?.includes(t.id))
      : basePool.filter(t => !a._usedThemes?.includes(t.id));
    if (!pool.length) {
      a._usedThemes = [];
      const fallback = category ? basePool.filter(t => t.cat === category) : basePool;
      return fallback.length ? fallback[Math.floor(Math.random() * fallback.length)] : basePool[0];
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }
  ttcqSelectTheme(playerId, themeId) {
    const a = this.activity;
    if (!a || a.type !== 'ttcq' || a.sub !== 'theme_pick') return { error: 'Pas le bon moment' };
    const theme = TTCQ_THEMES.find(t => t.id === themeId);
    if (!theme) return { error: 'Thème inconnu' };
    a.currentTheme = theme;
    a.themePickerId = playerId;
    if (!a._usedThemes) a._usedThemes = [];
    a._usedThemes.push(theme.id);
    a.sub = 'bet';
    a.bets = {};
    a.answers = {};
    a.results = {};
    this.addLog(`📖 ${this.player(playerId)?.name || '?'} choisit le thème : ${theme.name}`);
    this.touch();
    return { ok: true };
  }
  ttcqBet(playerId, level) {
    const a = this.activity;
    if (!a || a.type !== 'ttcq' || a.sub !== 'bet') return { error: 'Pas le bon moment' };
    const lvl = parseInt(level, 10);
    if (lvl < 1 || lvl > 8) return { error: 'Niveau invalide (1-8)' };
    a.bets[playerId] = lvl;
    const all = this.players.filter(p => p.connected);
    const allBet = all.every(p => a.bets[p.id] != null);
    if (allBet && all.length >= 1) {
      a.sub = 'answer';
      this.addLog(`🎲 Tous les joueurs ont misé ! Passage aux questions.`);
    }
    this.touch();
    return { ok: true };
  }
  ttcqAnswer(playerId, choice) {
    const a = this.activity;
    if (!a || a.type !== 'ttcq' || a.sub !== 'answer') return { error: 'Pas le bon moment' };
    a.answers[playerId] = parseInt(choice, 10);
    const all = this.players.filter(p => p.connected);
    const allAns = all.every(p => a.answers[p.id] != null);
    if (allAns && all.length >= 1) this.ttcqReveal();
    else this.touch();
    return { ok: true };
  }
  ttcqReveal() {
    const a = this.activity;
    if (!a || a.type !== 'ttcq' || a.sub !== 'answer') return;
    a.sub = 'reveal';
    const results = {};
    const theme = a.currentTheme;
    const connected = this.players.filter(p => p.connected);
    connected.forEach(p => {
      const bet = a.bets[p.id] || 1;
      const lvlData = theme.levels[bet - 1];
      const chosen = a.answers[p.id];
      const correct = chosen != null && chosen === lvlData.a;
      let gained = 0;
      if (correct) {
        gained = bet;
        if (a.doubleNext[p.id]) { gained *= 2; a.doubleNext[p.id] = false; }
        a.positions[p.id] = Math.min(47, (a.positions[p.id] || 0) + gained);
        a.coins[p.id] = (a.coins[p.id] || 0) + 1;
        const space = a.board[a.positions[p.id]];
        if (space === '⭐ Compte double') a.doubleNext[p.id] = true;
        else if (space === '🎲 Relance') {
          const extra = Math.ceil(bet / 2);
          a.positions[p.id] = Math.min(47, a.positions[p.id] + extra);
        } else if (space === '🪙 Bonus') a.coins[p.id] = (a.coins[p.id] || 0) + 2;
      }
      results[p.id] = { bet, correct, gained, position: a.positions[p.id] || 0 };
    });
    a.results = results;
    a.round++;
    a.revealAt = Date.now();
    a.autoNextSeconds = 20;
    const winners = connected.filter(p => (a.positions[p.id] || 0) >= 47);
    if (winners.length > 0 || a.round >= a.totalRounds) {
      a.sub = 'final';
      a.finalBoard = connected.map(p => ({
        id: p.id, name: p.name, avatar: p.avatar,
        position: a.positions[p.id] || 0, coins: a.coins[p.id] || 0,
      })).sort((x, y) => y.position - x.position || (y.coins || 0) - (x.coins || 0));
      this.addLog(`🏁 TTCQ terminé ! ${winners.length ? winners[0].name + ' gagne !' : ''}`);
    }
    if (this._ttcqTimer) clearTimeout(this._ttcqTimer);
    this._ttcqTimer = setTimeout(() => { this._ttcqTimer = null; this.ttcqNext(); }, 20000);
    this.touch();
  }
  ttcqNext() {
    const a = this.activity;
    if (!a || a.type !== 'ttcq') return;
    if (this._ttcqTimer) { clearTimeout(this._ttcqTimer); this._ttcqTimer = null; }
    if (a.sub === 'final') { this.stopActivity(); return; }
    const connected = this.players.filter(p => p.connected);
    const lastPickerIdx = connected.findIndex(p => p.id === a.themePickerId);
    const nextPicker = connected[(lastPickerIdx + 1) % connected.length];
    a.sub = 'theme_pick';
    a.themePickerId = nextPicker?.id || connected[0]?.id;
    a.currentTheme = null;
    a.bets = {};
    a.answers = {};
    a.results = {};
    a.revealAt = null;
    a.autoNextSeconds = null;
    this.addLog(`🔄 Nouvelle manche — ${nextPicker?.name || '?'} choisit le thème !`);
    this.touch();
  }
  ttcqPublic(forPlayerId) {
    const a = this.activity;
    if (!a || a.type !== 'ttcq') return null;
    const connected = this.players.filter(p => p.connected);
    const theme = a.currentTheme;
    const qForPlayer = (pid) => {
      if (!theme || a.sub !== 'answer' && a.sub !== 'reveal') return null;
      const bet = a.bets[pid] || 1;
      const lvl = theme.levels[Math.min(bet - 1, 7)];
      return lvl ? { question: lvl.q, choices: lvl.c, level: bet } : null;
    };
    const base = {
      type: 'ttcq', sub: a.sub, round: a.round, totalRounds: a.totalRounds,
      level: a.level, levelLabel: a.levelLabel,
      categories: a.categories,
      categoriesUsed: a._usedThemes || [],
      themePickerId: a.themePickerId,
      themePickerName: this.player(a.themePickerId)?.name || '?',
      currentTheme: theme ? { id: theme.id, cat: theme.cat, name: theme.name } : null,
      board: a.board,
      positions: a.positions,
      coins: a.coins,
      doubleNext: a.doubleNext,
      playerCount: connected.length,
      betCount: Object.keys(a.bets).length,
      answerCount: Object.keys(a.answers).length,
      results: (a.sub === 'reveal' || a.sub === 'final') ? a.results : null,
      revealAt: a.revealAt || null,
      autoNextSeconds: a.autoNextSeconds || null,
      finalBoard: a.sub === 'final' ? (a.finalBoard || []) : null,
      leaderboard: connected.map(p => ({
        id: p.id, name: p.name, avatar: p.avatar,
        position: a.positions[p.id] || 0, coins: a.coins[p.id] || 0,
      })).sort((x, y) => y.position - x.position || (y.coins || 0) - (x.coins || 0)),
    };
    if (forPlayerId != null) {
      const me = this.player(forPlayerId);
      if (me) {
        base.myBet = a.bets[forPlayerId] || null;
        base.myAnswer = a.answers[forPlayerId] || null;
        base.myResult = (a.sub === 'reveal' || a.sub === 'final') ? (a.results[forPlayerId] || null) : null;
        const q = qForPlayer(forPlayerId);
        if (q) base.myQuestion = q;
        if (a.sub === 'reveal' && theme) {
          const bet = a.bets[forPlayerId] || 1;
          const lvlData = theme.levels[bet - 1];
          base.myCorrectAnswer = lvlData.a;
          base.myChoices = lvlData.c;
        }
      }
    }
    // En phase theme_pick, envoyer les thèmes disponibles de la catégorie
    if (a.sub === 'theme_pick' && forPlayerId != null) {
      const used = a._usedThemes || [];
      const pool = a._pool || TTCQ_THEMES;
      const available = pool.filter(t => !used.includes(t.id));
      const byCat = {};
      available.forEach(t => { if (!byCat[t.cat]) byCat[t.cat] = []; byCat[t.cat].push({ id: t.id, name: t.name }); });
      base.availableThemes = byCat;
      base.totalThemeCount = available.length;
    }
    return base;
  }
  _ttcqSimTick() {
    const a = this.activity;
    if (!a || a.type !== 'ttcq') return;
    const bots = this.players.filter(p => p.simBot && p.connected);
    bots.forEach(b => {
      if (a.sub === 'bet' && a.bets[b.id] == null) this.ttcqBet(b.id, Math.floor(Math.random() * 8) + 1);
      if (a.sub === 'answer' && a.answers[b.id] == null) this.ttcqAnswer(b.id, Math.floor(Math.random() * 4));
    });
    if (a.sub === 'theme_pick' && a.themePickerId) {
      const picker = this.player(a.themePickerId);
      if (picker && picker.simBot && !a.currentTheme) {
        const used = a._usedThemes || [];
        const pool = a._pool || TTCQ_THEMES;
        const avail = pool.filter(t => !used.includes(t.id));
        if (avail.length) this.ttcqSelectTheme(a.themePickerId, avail[Math.floor(Math.random() * avail.length)].id);
      }
    }
  }

  // ---- Simulation : 4 joueurs de test (1 pilotable + 3 bots) --------
  // Les joueurs « sim » sont ajoutés dans la config par la route GM ;
  // ici on les connecte et on fait jouer les bots automatiquement.
  simStart() {
    this.players.forEach((p) => { if (p.sim) { p.connected = true; if (p.simBot) p.ready = true; } });
    if (this._simTimer) clearInterval(this._simTimer);
    this.simActive = true;
    this._simTimer = setInterval(() => this._simTick(), 1500);
    this.addLog('🧪 Simulation activée : 4 joueurs de test (3 bots répondent tout seuls).');
    this.touch();
  }

  simStop() {
    if (this._simTimer) { clearInterval(this._simTimer); this._simTimer = null; }
    this.simActive = false;
    this.addLog('🧪 Simulation terminée — joueurs de test retirés.');
    this.touch();
  }

  // Un « tick » de bots : chaque bot a une chance d'agir, pour étaler les
  // réponses sur quelques secondes comme de vrais joueurs.
  _simTick() {
    if (!this.simActive) return;
    const bots = this.players.filter((p) => p.simBot);
    if (!bots.length) return;
    bots.forEach((b) => { b.connected = true; b.ready = true; }); // ré-assert silencieux
    const a = this.activity;
    if (!a) return;
    const rint = (n) => Math.floor(Math.random() * n);
    for (const b of bots) {
      if (Math.random() > 0.5) continue; // étalement des actions
      if (a.type === 'privacy') {
        if (a.sub === 'answer' && !(b.id in a.answers)) this.privacyAnswer(b.id, Math.random() < 0.5);
        else if (a.sub === 'guess' && !(b.id in a.guesses)) this.privacyGuess(b.id, rint(Object.keys(a.answers).length + 1));
      } else if (a.type === 'carton') {
        if (a.sub === 'pick' && b.id !== a.judgeId && !a.submissions[b.id]) {
          const hand = a.hands[b.id] || [];
          const need = a.blanks || 1;
          if (hand.length >= need) this.cartonPlay(b.id, shuffled([...hand.keys()]).slice(0, need));
        } else if (a.sub === 'judge' && b.id === a.judgeId) {
          const n = (a.subOrder || []).length;
          if (n) this.cartonPick(b.id, rint(n));
        }
      } else if (a.type === 'quiz' || a.type === 'quiz_vincent' || a.type === 'blindtest') {
        const q = this.quizQuestion();
        if (a.sub === 'question' && q && !a.answers[b.id]) this.quizAnswer(b.id, rint((q.choices || []).length || 1));
      } else if (a.type === 'spotlight') {
        if (a.sub === 'vote' && !a.votes[b.id] && b.id !== a.data?.targetId) this.spotlightVote(b.id, Math.random() < 0.7 ? 'ok' : 'ko');
      } else if (a.type === 'roue_des_gages') {
        if (a.sub === 'vote' && !a.votes[b.id]) {
          const targets = this.players.filter((p) => p.connected && p.id !== b.id);
          if (targets.length) this.roueVote(b.id, targets[rint(targets.length)].id);
        }
      } else if (a.type === 'reaction_race') {
        if (a.state === 'running' && !a.resolved && !(a.buzzes || []).find((x) => x.id === b.id)) this.buzz(b.id);
      } else if (a.type === 'ttcq') {
        if (a.sub === 'bet' && a.bets[b.id] == null) this.ttcqBet(b.id, rint(8) + 1);
        if (a.sub === 'answer' && a.answers[b.id] == null) this.ttcqAnswer(b.id, rint(4));
        if (a.sub === 'theme_pick' && a.themePickerId === b.id && !a.currentTheme) {
          const used = a._usedThemes || [];
          const pool = a._pool || TTCQ_THEMES;
          const avail = pool.filter(t => !used.includes(t.id));
          if (avail.length) this.ttcqSelectTheme(b.id, avail[rint(avail.length)].id);
        }
      }
    }
  }

  // ---- Ambiance sonore --------------------------------------------
  // Le GM peut couper/relancer la playlist d’ambiance de la borne.
  setAmbientPaused(paused) {
    this.ambientPaused = !!paused;
    this.addLog(paused ? '🔇 GM : musique d\'ambiance coupée.' : '🔊 GM : musique d\'ambiance relancée.');
    this.touch();
  }

  stopActivity() {
    if (this._briefTimer) { clearTimeout(this._briefTimer); this._briefTimer = null; }
    if (this._privacyTimer) { clearTimeout(this._privacyTimer); this._privacyTimer = null; }
    if (this._cartonTimer) { clearTimeout(this._cartonTimer); this._cartonTimer = null; }
    if (this._roueTimer) { clearTimeout(this._roueTimer); this._roueTimer = null; }
    if (this.pacmanTimer) { clearInterval(this.pacmanTimer); this.pacmanTimer = null; }
    if (this.tetrisTimer) { clearInterval(this.tetrisTimer); this.tetrisTimer = null; }
    if (this.tronTimer) { clearInterval(this.tronTimer); this.tronTimer = null; }
    if (this.g2048Timer) { clearInterval(this.g2048Timer); this.g2048Timer = null; }
    if (this.pongTimer) { clearInterval(this.pongTimer); this.pongTimer = null; }
    if (this._autoAdvanceTimer) { clearTimeout(this._autoAdvanceTimer); this._autoAdvanceTimer = null; }
    if (this._drawTimer) { clearTimeout(this._drawTimer); this._drawTimer = null; }
    if (this._celebrateTimer) { clearTimeout(this._celebrateTimer); this._celebrateTimer = null; }
    if (this._enqueteBriefTimer) { clearTimeout(this._enqueteBriefTimer); this._enqueteBriefTimer = null; }
    if (this._enqueteDebriefTimer) { clearTimeout(this._enqueteDebriefTimer); this._enqueteDebriefTimer = null; }
    if (this._enqueteFinaleTimer) { clearTimeout(this._enqueteFinaleTimer); this._enqueteFinaleTimer = null; }
    if (this._hqTimer) { clearTimeout(this._hqTimer); this._hqTimer = null; }
    if (this._ttcqTimer) { clearTimeout(this._ttcqTimer); this._ttcqTimer = null; }
    this.pacman = null;
    this.tetris = null;
    this.tron = null;
    this.g2048 = null;
    this.pong = null;
    if (this.activity) this.activity.state = 'done';
    this.activity = null;
    this.phase = 'activity'; // retour au hub d'activités
    this.touch();
  }

  // ---- PAC-MAN multijoueur -----------------------------------------
  startPacman(opts = {}) {
    const players = this.players.filter((p) => p.connected);
    if (players.length < 3) {
      this.addLog('⚠️ Pac-Man : il faut au moins 3 joueurs connectés (2 Pac + 1 fantôme).');
      this.touch();
      return;
    }
    // --- Rotation des rôles : priorité à ceux qui n'ont pas encore été Pac ---
    if (!this.pacRotation) this.pacRotation = [];
    let pool = players.filter((p) => !this.pacRotation.includes(p.id));
    if (pool.length < 2) { this.pacRotation = []; pool = players.slice(); } // nouveau cycle
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const mrId = opts.mrId || shuffled[0].id;
    let mrsId = opts.mrsId || (shuffled.find((p) => p.id !== mrId) || {}).id;
    if (!mrsId) { mrsId = (players.find((p) => p.id !== mrId) || {}).id; }
    this.pacRotation.push(mrId, mrsId);
    const mr = this.player(mrId), mrs = this.player(mrsId);

    this.pacman = new PacmanGame(players, { ...opts, mrId, mrsId });
    if (mr && mrs) this.addLog(`🟡 Pac-Man : ${mr.name} (Mr) & ${mrs.name} (Mrs) cette manche.`);
    this.activity = { type: 'pacman', startedAt: Date.now(), state: 'running', data: {} };
    this.phase = 'activity';
    this.addLog('🟡 PAC-MAN lancé ! Mr & Mrs Pac-Man contre les fantômes.');
    if (this.pacmanTimer) clearInterval(this.pacmanTimer);
    this.pacmanTimer = setInterval(() => {
      if (!this.pacman) return;
      this.pacman.tick();
      if (this.pacman.status !== 'playing') {
        clearInterval(this.pacmanTimer); this.pacmanTimer = null;
        const win = this.pacman.ranking()[0];
        this.addLog(win
          ? `🏆 PAC-MAN terminé ! Vainqueur : ${win.name} (${win.score} pts).`
          : '🟡 PAC-MAN terminé.');
        this.save();
      }
      this.broadcast();
    }, this.pacman.tickMs);
    this.touch();
  }

  pacmanDir(playerId, dir) {
    if (this.pacman) this.pacman.setDir(playerId, dir);
    // pas de broadcast ici : le prochain tick rafraîchit (évite le spam réseau)
  }

  // ---- TETRIS multijoueur ------------------------------------------
  startTetris(opts = {}) {
    const players = this.players.filter((p) => p.connected);
    if (players.length < 1) {
      this.addLog('⚠️ Tetris : aucun joueur connecté.');
      this.touch();
      return;
    }
    this.tetris = new TetrisGame(players, opts);
    this.activity = { type: 'tetris', startedAt: Date.now(), state: 'running', data: {} };
    this.phase = 'activity';
    this.addLog('🧱 TETRIS lancé ! Mêmes pièces pour tous, chacun sa grille.');
    if (this.tetrisTimer) clearInterval(this.tetrisTimer);
    this.tetrisTimer = setInterval(() => {
      if (!this.tetris) return;
      this.tetris.tick();
      if (this.tetris.status !== 'playing') {
        clearInterval(this.tetrisTimer); this.tetrisTimer = null;
        const rank = this.tetris.ranking();
        // Vies : le VAINQUEUR gagne une vie (max 3), tous les autres en perdent une.
        rank.forEach((r, i) => {
          const p = this.player(r.id);
          if (!p) return;
          if (i === 0) { if (p.lives < 3) p.lives += 1; }
          else if (p.lives > 0) p.lives -= 1;
        });
        const win = rank[0];
        this.addLog(win
          ? `🏆 TETRIS : ${win.name} gagne (${win.lines} lignes) — +1 vie ❤️ ! Les autres −1 vie 💔.`
          : '🧱 TETRIS terminé.');
        this.save();
      }
      this.broadcast();
    }, this.tetris.tickMs);
    this.touch();
  }

  tetrisMove(playerId, dir) {
    if (this.tetris) { this.tetris.move(playerId, dir); this.broadcast(); }
  }

  // ---- TRON / SNAKE multijoueur ------------------------------------
  startTron(opts = {}) {
    const players = this.players.filter((p) => p.connected);
    if (players.length < 2) { this.addLog('⚠️ Tron : il faut au moins 2 joueurs connectés.'); this.touch(); return; }
    this.tron = new TronGame(players, opts);
    this.activity = { type: 'tron', startedAt: Date.now(), state: 'running', data: {} };
    this.phase = 'activity';
    this.addLog('🟦 TRON lancé ! Laissez une traînée, survivez le dernier.');
    if (this.tronTimer) clearInterval(this.tronTimer);
    this.tronTimer = setInterval(() => {
      if (!this.tron) return;
      this.tron.tick();
      if (this.tron.status !== 'playing') {
        clearInterval(this.tronTimer); this.tronTimer = null;
        this._applyArcadeLives(this.tron.ranking(), 'TRON', (w) => `${w.len} cases`);
        this.save();
      }
      this.broadcast();
    }, this.tron.tickMs);
    this.touch();
  }
  tronMove(playerId, dir) { if (this.tron) this.tron.setDir(playerId, dir); }

  // ---- 2048 multijoueur --------------------------------------------
  startG2048(opts = {}) {
    const players = this.players.filter((p) => p.connected);
    if (players.length < 1) { this.addLog('⚠️ 2048 : aucun joueur connecté.'); this.touch(); return; }
    this.g2048 = new Game2048(players, opts);
    this.activity = { type: '2048', startedAt: Date.now(), state: 'running', data: {} };
    this.phase = 'activity';
    this.addLog('🔢 2048 lancé ! Fusionnez les tuiles, meilleur score gagne.');
    if (this.g2048Timer) clearInterval(this.g2048Timer);
    this.g2048Timer = setInterval(() => {
      if (!this.g2048) return;
      this.g2048.tick();
      if (this.g2048.status !== 'playing') {
        clearInterval(this.g2048Timer); this.g2048Timer = null;
        this._applyArcadeLives(this.g2048.ranking(), '2048', (w) => `${w.score} pts`);
        this.save();
      }
      this.broadcast();
    }, this.g2048.tickMs);
    this.touch();
  }
  g2048Move(playerId, dir) { if (this.g2048) { this.g2048.move(playerId, dir); this.broadcast(); } }

  // ---- PONG BATTLE -------------------------------------------------
  startPong(opts = {}) {
    const players = this.players.filter((p) => p.connected);
    if (players.length < 2) { this.addLog('⚠️ Pong : il faut au moins 2 joueurs connectés.'); this.touch(); return; }
    this.pong = new PongGame(players, opts);
    this.activity = { type: 'pong', startedAt: Date.now(), state: 'running', data: {} };
    this.phase = 'activity';
    const sides = this.pong.players.map((p) => p.name).join(', ');
    this.addLog(`🏓 PONG lancé ! ${sides} défendent leur côté.`);
    if (this.pongTimer) clearInterval(this.pongTimer);
    this.pongTimer = setInterval(() => {
      if (!this.pong) return;
      this.pong.tick();
      if (this.pong.status !== 'playing') {
        clearInterval(this.pongTimer); this.pongTimer = null;
        this._applyArcadeLives(this.pong.ranking(), 'PONG', (w) => `${w.hp} PV`);
        this.save();
      }
      this.broadcast();
    }, this.pong.tickMs);
    this.touch();
  }
  pongMove(playerId, dir) { if (this.pong) this.pong.move(playerId, dir); }

  // ---- DESSINE-MOI (Pictionary) ------------------------------------
  _drawNewRound() {
    const a = this.activity;
    if (!a || a.type !== 'draw') return;
    if (this._drawTimer) { clearTimeout(this._drawTimer); this._drawTimer = null; }
    if (this._celebrateTimer) { clearTimeout(this._celebrateTimer); this._celebrateTimer = null; }
    const connected = this.players.filter((p) => p.connected).map((p) => p.id);
    a.order = (a.order || []).filter((id) => connected.includes(id));
    connected.forEach((id) => { if (!a.order.includes(id)) a.order.push(id); });
    a.maxTurns = a.order.length;
    if (!a.order.length) { a.drawerId = null; a.phase = 'draw'; return; }
    // Session terminée : chacun a dessiné une fois → classement final
    if ((a.turns || 0) >= a.maxTurns) {
      a.phase = 'end'; a.drawerId = null; a.strokes = [];
      const win = (this._drawPublic(null).leaderboard || [])[0];
      this.addLog(win ? `🎨 Session Dessine-moi terminée ! Vainqueur : ${win.name} (${win.pts} pts).` : '🎨 Session Dessine-moi terminée.');
      this.touch();
      return;
    }
    a.drawerPos = ((a.drawerPos ?? -1) + 1) % a.order.length;
    a.drawerId = a.order[a.drawerPos];
    a.turns = (a.turns || 0) + 1;
    const words = (this._content.drawWords && this._content.drawWords.length)
      ? this._content.drawWords : [{ word: 'chat', cat: 'Animal' }];
    const w = words[Math.floor(Math.random() * words.length)];
    a.word = w.word; a.category = w.cat;
    a.strokes = []; a.guessed = {}; a.phase = 'draw'; a.winnerName = null; a.round = (a.round || 0) + 1;
    this.addLog(`🎨 Dessine-moi (${a.turns}/${a.maxTurns}) : à ${this.player(a.drawerId)?.name || '?'} de dessiner (${w.cat}) !`);
    this.touch();
  }

  // Programme le passage AUTOMATIQUE au dessinateur suivant après la révélation.
  _drawScheduleNext(ms = 7000) {
    if (this._drawTimer) clearTimeout(this._drawTimer);
    this._drawTimer = setTimeout(() => { this._drawTimer = null; this._drawNewRound(); }, ms);
  }

  drawUpdate(playerId, strokes) {
    const a = this.activity;
    if (!a || a.type !== 'draw' || a.phase !== 'draw' || playerId !== a.drawerId) return;
    if (!Array.isArray(strokes)) return;
    a.strokes = strokes.slice(0, 500);
    this.broadcast();
  }

  drawGuess(playerId, text) {
    const a = this.activity;
    if (!a || a.type !== 'draw' || a.phase !== 'draw') return { ok: false };
    if (playerId === a.drawerId) return { ok: false };
    const p = this.player(playerId);
    if (normalize(text) && normalize(text) === normalize(a.word)) {
      a.phase = 'reveal';
      a.winnerName = p?.name || null;
      a.scores[playerId] = (a.scores[playerId] || 0) + 100;
      if (a.drawerId) a.scores[a.drawerId] = (a.scores[a.drawerId] || 0) + 50;
      this.addLog(`🎨 ${p?.name} a trouvé « ${a.word} » ! (+100, dessinateur +50)`);
      this._drawScheduleNext();   // dessinateur suivant automatiquement
      this.touch();
      return { ok: true, correct: true };
    }
    this.touch();
    return { ok: true, correct: false };
  }

  drawNext() {
    if (this._drawTimer) { clearTimeout(this._drawTimer); this._drawTimer = null; }
    if (this._celebrateTimer) { clearTimeout(this._celebrateTimer); this._celebrateTimer = null; }
    this._drawNewRound();
  }
  drawReveal() {
    const a = this.activity;
    if (!a || a.type !== 'draw' || a.phase !== 'draw') return;
    a.phase = 'reveal';
    this.addLog(`🎨 Mot révélé : « ${a.word} ».`);
    this._drawScheduleNext();   // dessinateur suivant automatiquement
    this.touch();
  }

  _drawPublic(forPlayerId) {
    const a = this.activity;
    const reveal = a.phase === 'reveal';
    const isDrawer = !!(forPlayerId && forPlayerId === a.drawerId);
    return {
      type: 'draw', state: a.state, phase: a.phase, round: a.round,
      turns: a.turns || 0, maxTurns: a.maxTurns || 0,
      drawerId: a.drawerId, drawerName: this.player(a.drawerId)?.name || '?',
      category: a.category, wordLen: (a.word || '').length,
      strokes: a.strokes || [], winnerName: a.winnerName || null,
      word: (reveal || isDrawer) ? a.word : null,
      iAmDrawer: isDrawer,
      leaderboard: Object.entries(a.scores || {}).map(([id, pts]) => ({ id, name: this.player(id)?.name, pts })).sort((x, y) => y.pts - x.pts),
    };
  }

  // Applique les vies de fin de manche arcade : vainqueur +1 (max 3), autres −1.
  _applyArcadeLives(rank, label, detail) {
    rank.forEach((r, i) => {
      const p = this.player(r.id);
      if (!p) return;
      if (i === 0) { if (p.lives < 3) p.lives += 1; }
      else if (p.lives > 0) p.lives -= 1;
    });
    const win = rank[0];
    this.addLog(win
      ? `🏆 ${label} : ${win.name} gagne (${detail(win)}) — +1 vie ❤️ ! Les autres −1 vie 💔.`
      : `${label} terminé.`);
  }

  // ---- Séquence musicale collaborative -----------------------------
  musicPress(playerId, paletteIndex) {
    const a = this.activity;
    if (!a || a.type !== 'music_seq' || a.status !== 'playing') return;
    paletteIndex = Number(paletteIndex);
    if (a.owners[paletteIndex] !== playerId) return; // tu ne possèdes pas cette note
    if (MELODY[a.step] === paletteIndex) {
      a.step += 1;
      if (a.step >= MELODY.length) {
        a.status = 'win';
        this.addLog('🎵 Mélodie reconstituée — BRAVO l\'orchestre !');
      }
    } else {
      a.step = 0;
      a.wrongAt = Date.now();
    }
    this.touch();
  }

  musicDemo() {
    const a = this.activity;
    if (!a || a.type !== 'music_seq') return;
    a.demo = { seq: [...MELODY], at: Date.now() };
    a.step = 0;
    this.addLog('🎶 Démo de la mélodie jouée sur la borne.');
    this.touch();
  }

  musicHint() {
    const a = this.activity;
    if (!a || a.type !== 'music_seq') return;
    a.revealed = Math.min(MELODY.length, (a.revealed || 0) + 1);
    this.addLog(`💡 Indice musical : ${a.revealed} note(s) révélée(s).`);
    this.touch();
  }

  // ---- Piano réparti (un demi-octave par téléphone) ----------------
  // Piano réparti : chaque téléphone connecté = un demi-octave aligné.
  // Ordre des téléphones (gauche → droite) = joueurs connectés, ordre stable.
  pianoOrder() {
    return this.players.filter((p) => p.connected).map((p) => p.id);
  }

  // Un joueur appuie sur une touche (offset = position absolue sur le clavier).
  pianoPress(playerId, offset) {
    offset = Number(offset);
    const a = this.activity;
    if (!a || a.type !== 'piano' || a.status !== 'playing') return;
    const idx = a.order.indexOf(playerId);
    if (idx < 0) return;
    const seg = pianoKeyLayout(a.order.length, a.melody)[idx];
    if (offset < seg.lo || offset > seg.hi) return;
    if (a.melody[a.step] === offset) {
      a.step += 1;
      if (a.step >= a.melody.length) {
        a.status = 'win';
        this.addLog('🎹 Mélodie jouée en entier — BRAVO l\'orchestre réparti !');
      }
      this.touch();
    } else {
      // Mauvaise note → on repart de zéro.
      a.step = 0;
      a.wrongAt = Date.now();
      this.touch();
    }
  }

  // Rejoue la mélodie en démo sur la BORNE (monde OU activité). Ne réinitialise
  // PAS la progression des joueurs : on ré-écoute juste la séquence.
  pianoDemo() {
    const a = this.activity;
    if (!a || a.type !== 'piano') return;
    a.demo = {
      at: Date.now(),
      seq: pianoDemoSeq(a.melody, a.baseMidi),
    };
    a.step = 0;
    this.addLog('🎶 Démo de la mélodie jouée sur la borne (piano).');
    this.touch();
  }

  // Constructeur partagé : vue piano (placement + partition + touches joueur).
  buildPianoView({ order, melody, step, status, demo, wrongAt }, forPlayerId) {
    const base = PIANO_BASE_MIDI;
    // Répartition adaptative : chaque téléphone reçoit une plage contiguë avec
    // au moins une note de la séquence (cf. pianoKeyLayout).
    const layout = pianoKeyLayout(order.length, melody);
    const segOf = (off) => layout.findIndex((s) => off >= s.lo && off <= s.hi);
    const rangeLabel = (i) => {
      const lo = pianoNoteInfo(layout[i].lo, base), hi = pianoNoteInfo(layout[i].hi, base);
      return layout[i].lo === layout[i].hi ? lo.label : `${lo.label}–${hi.label}`;
    };
    const placement = order.map((id, i) => ({
      pos: i + 1, name: this.player(id)?.name || '?', range: rangeLabel(i),
    }));
    const slots = melody.map((off, i) => {
      const n = pianoNoteInfo(off, base);
      let st = 'todo';
      if (i < step) st = 'done';
      else if (i === step && status === 'playing') st = 'next';
      return { st, name: n.name, freq: n.freq };
    });
    let nextPos = -1, nextName = null;
    if (status === 'playing' && step < melody.length) {
      const off = melody[step];
      nextPos = segOf(off) + 1;
      nextName = pianoNoteInfo(off, base).name;
    }
    const idx = forPlayerId ? order.indexOf(forPlayerId) : -1;
    const myKeys = [];
    if (idx >= 0) {
      const seg = layout[idx];
      for (let off = seg.lo; off <= seg.hi; off++) {
        const n = pianoNoteInfo(off, base);
        myKeys.push({ off, name: n.name, label: n.label, white: n.white, freq: n.freq,
          next: status === 'playing' && melody[step] === off });
      }
    }
    return {
      type: 'piano', status,
      len: melody.length, step,
      nPhones: order.length, placement, slots, nextPos, nextName,
      myPos: idx, myKeys,
      demo: demo || null,
      wrongAt: wrongAt || 0,
    };
  }

  // Vue publique du piano ACTIVITÉ.
  pianoPublic(forPlayerId) {
    const a = this.activity;
    return this.buildPianoView({ order: a.order, melody: a.melody, step: a.step, status: a.status,
      demo: a.demo ? { at: a.demo.at, seq: a.demo.seq } : null, wrongAt: a.wrongAt }, forPlayerId);
  }

  // La mosaïque : chaque joueur ne reçoit QUE son fragment (son index + le mot
  // pour le rendu local). La borne ne reçoit pas le mot (ce serait la solution).
  mosaicPublic(forPlayerId) {
    const a = this.activity;
    // La ligne correcte (et sa couleur) n'est transmise QUE si le MJ a révélé.
    const reveal = !!a.reveal;
    const mine = (forPlayerId && a.slices && a.slices[forPlayerId] != null)
      ? {
          slice: a.slices[forPlayerId],
          n: a.n,
          rows: a.rows || 1,
          bands: (a.bands && a.bands[forPlayerId]) || [a.word || ''],
          // null tant que non révélé → aucune bande colorée côté joueur
          correctRow: reveal ? ((a.correctRow && a.correctRow[forPlayerId]) || 0) : null,
          hue: reveal ? Math.round((a.slices[forPlayerId] / Math.max(1, (a.n || 1) - 1)) * 300) : null,
        }
      : null;
    const done = a.solved || a.failed;
    return {
      type: 'mosaic', n: a.n, rows: a.rows || 1, round: a.round || 1, reveal,
      assigned: Object.keys(a.slices || {}).length, mine,
      solved: !!a.solved, solvedBy: a.solvedBy || null, failed: !!a.failed,
      wrongCount: a.wrongCount || 0, maxWrong: a.maxWrong || 3,
      answer: done ? (a.word || '') : null, // mot révélé seulement à la réussite/échec
    };
  }

  // Un joueur propose la réponse de la mosaïque.
  mosaicGuess(playerId, text) {
    const a = this.activity;
    if (!a || a.type !== 'mosaic' || a.solved || a.failed) return { ok: false };
    const p = this.player(playerId);
    if (normalize(text) === normalize(a.word)) {
      a.solved = true; a.solvedBy = p?.name || null;
      this.addLog(`🧩 Mosaïque RÉSOLUE par ${p?.name || '?'} : « ${a.word} » !`);
      this.touch();
      return { ok: true, correct: true };
    }
    a.wrongCount = (a.wrongCount || 0) + 1;
    if (a.wrongCount >= (a.maxWrong || 3)) {
      a.failed = true; a.reveal = true;
      this.addLog(`🧩 Mosaïque : ${a.wrongCount} erreurs — réponse révélée : « ${a.word} ».`);
    } else {
      this.addLog(`🧩 Mosaïque : mauvaise réponse (${a.wrongCount}/${a.maxWrong || 3}).`);
    }
    this.touch();
    return { ok: true, correct: false, wrong: a.wrongCount };
  }

  // Le MJ révèle (ou masque) la ligne colorée d'aide sur les téléphones.
  mosaicReveal(on = true) {
    const a = this.activity;
    if (!a || a.type !== 'mosaic') return;
    a.reveal = !!on;
    this.addLog(a.reveal ? '🧩 Mosaïque : ligne colorée RÉVÉLÉE par le MJ.' : '🧩 Mosaïque : aide masquée.');
    this.touch();
  }

  musicPublic(forPlayerId) {
    const a = this.activity;
    const len = MELODY.length;
    const slots = [];
    for (let i = 0; i < len; i++) {
      let st = 'hidden', pi = null;
      if (i < a.step) { st = 'done'; pi = MELODY[i]; }
      else if (i < (a.revealed || 0)) { st = 'hint'; pi = MELODY[i]; }
      slots.push({
        st,
        color: pi != null ? NOTE_PALETTE[pi].color : null,
        label: pi != null ? NOTE_PALETTE[pi].label : null,
        freq: pi != null ? NOTE_PALETTE[pi].freq : null,
      });
    }
    const pads = [];
    if (forPlayerId) {
      Object.entries(a.owners).forEach(([pi, owner]) => {
        if (owner === forPlayerId) {
          const n = NOTE_PALETTE[pi];
          pads.push({ index: Number(pi), label: n.label, color: n.color, freq: n.freq });
        }
      });
    }
    return {
      type: 'music_seq', state: a.state, status: a.status,
      len, step: a.step, revealed: a.revealed || 0, wrongAt: a.wrongAt || 0,
      slots,
      demo: a.demo ? {
        at: a.demo.at,
        seq: a.demo.seq.map((pi) => ({ color: NOTE_PALETTE[pi].color, freq: NOTE_PALETTE[pi].freq, label: NOTE_PALETTE[pi].label })),
      } : null,
      pads,
    };
  }

  // ---- Vue publique (envoyée aux clients) --------------------------
  publicState(forToken = null) {
    const me = forToken ? this.playerByToken(forToken) : null;
    return {
      eventId: this.eventId,
      eventName: this.cfg?.name || '',
      theme: this.cfg?.theme || 'retro',
      phase: this.phase,
      deadlineLabel: this.cfg?.settings?.deadlineLabel || '',
      ambientPaused: this.ambientPaused,
      ambientRestartAt: this.ambientRestartAt,
      currentGage: this.currentGage,
      activity: this.activityPublic(me ? me.id : null),
      pacman: this.pacman ? this.pacman.publicState(me ? me.id : null) : null,
      tetris: this.tetris ? this.tetris.publicState() : null,
      tron: this.tron ? this.tron.publicState() : null,
      g2048: this.g2048 ? this.g2048.publicState() : null,
      pong: this.pong ? this.pong.publicState() : null,
      photoPhase: this.photoPhase,
      photos: this.photoPhase ? this.photos : [],
      photoResults: this.photoPhase === 'results' ? this.photoResults() : null,
      scoreboard: this.phase === 'scoreboard' ? this.scoreboard() : null,
      log: this.log.slice(0, 12),
      players: this.players.map((p) => ({
        id: p.id, name: p.name, avatar: p.avatar, connected: p.connected,
        lives: p.lives, coins: p.coins, ready: p.ready,
        // Avancement des défis photo (le GM suit qui a pris combien de photos).
        photoCount: this.photos.filter((ph) => ph.playerId === p.id).length,
        photoTotal: this.photoMissions(p.avatar).length,
      })),
      // Bloc privé (uniquement pour le joueur qui demande via son token)
      me: me && this.privateView(me),
    };
  }

  privateView(me) {
    return {
      id: me.id,
      name: me.name,
      avatar: me.avatar,
      avatarInfo: this.avatarInfo(me.avatar),
      lives: me.lives,
      coins: me.coins,
      ready: me.ready,
      isHost: !!me.isHost,
      // Défis photo
      photoMissions: this.photoMissions(me.avatar),
      myPhotos: this.photos.filter(p => p.playerId === me.id).map(p => ({ missionIdx: p.missionIdx, url: p.url })),
      myPhotoVotes: this.photoVotes[me.id] || {},
    };
  }
}
