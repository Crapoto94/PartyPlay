// =====================================================================
//  Plateforme multi-événements — serveur principal (Express + SSE).
//  - /admin                : administration GÉNÉRALE (liste/crée les événements)
//  - /e/:id/admin          : console d'un événement (config + pilotage GM)
//  - /e/:id/borne          : écran partagé de l'événement
//  - /e/:id/j/:token       : page perso d'un joueur
//  Lance avec : npm install && npm start
// =====================================================================

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync, readdirSync, readFileSync } from 'fs';
import multer from 'multer';
import QRCode from 'qrcode';

import {
  listEvents, getConfig, saveConfig, createEvent, removeEvent, eventExists,
  uploadsDir, THEMES,
} from './store/eventStore.js';
import { getGame, reloadConfig, dropGame } from './store/eventManager.js';
import { DEFAULT_AVATARS, defaultContent, emptyContent } from './data/defaults.js';
import { getPricing, savePricing, getPlan, allowedThemes, ALL_THEMES, planExists } from './store/plans.js';
import { publicPaymentConfig } from './store/payment.js';
import { getBrevoConfig, saveBrevoConfig, sendMail } from './store/brevo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, 'public');
let APP_VERSION = '0.0.1';
try { APP_VERSION = JSON.parse(readFileSync(path.join(__dirname, 'version.json'), 'utf8')).version || APP_VERSION; } catch {}
const PORT = process.env.PORT || 8080;
// Mot de passe de l'administration GÉNÉRALE (créer/supprimer des événements).
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

const app = express();
app.use(express.json({ limit: '2mb' }));
app.use('/static', express.static(path.join(PUBLIC, 'static')));

// ---------------------------------------------------------------------
//  Rendu d'une page avec injection du contexte événement + thème.
//  Remplace le marqueur <!--EVENT_HEAD--> par les <link> de thème et le
//  contexte JS. Si le marqueur est absent, injecte juste après <head>.
// ---------------------------------------------------------------------
function renderPage(file, cfg) {
  let html = readFileSync(path.join(PUBLIC, file), 'utf8');
  const theme = (cfg && cfg.theme) || 'retro';
  const ctx = {
    id: cfg ? cfg.id : null,
    name: cfg ? cfg.name : '',
    theme,
    settings: cfg ? cfg.settings : {},
    activities: cfg ? cfg.activities : {},
  };
  const head = `
    <link rel="stylesheet" href="/static/base.css">
    <link rel="stylesheet" href="/static/themes/${theme}.css" id="theme-css">
    <script>window.__EVENT__ = ${JSON.stringify(ctx)};</script>
    <script src="/static/version-badge.js" defer></script>`;
  if (html.includes('<!--EVENT_HEAD-->')) html = html.replace('<!--EVENT_HEAD-->', head);
  else html = html.replace(/<head([^>]*)>/i, `<head$1>${head}`);
  return html;
}

// =====================================================================
//  ADMINISTRATION GÉNÉRALE
// =====================================================================
// Page d'accueil PUBLIQUE : rejoindre / créer / accéder à l'admin de sa fête.
app.get('/', (req, res) => res.sendFile(path.join(PUBLIC, 'landing.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(PUBLIC, 'admin.html')));

// =====================================================================
//  ESPACE PUBLIC (sans mot de passe super-admin)
// =====================================================================

// Version de l'application (affichée en bas à gauche de chaque page).
app.get('/api/version', (req, res) => res.json({ version: APP_VERSION }));

// Tarifs publics (pour afficher les formules sur la page d'accueil).
app.get('/api/pricing', (req, res) => res.json(getPricing()));

// État de configuration des paiements (sans secret) : tant que rien n'est
// configuré, le front sait qu'aucun moyen de paiement n'est encore actif.
app.get('/api/payment/config', (req, res) => res.json(publicPaymentConfig()));

// Création PUBLIQUE d'une fête (choix d'une formule). Le paiement viendra se
// greffer ensuite (création libre, non bloquante). Renvoie l'id + le mot de passe.
app.post('/api/parties', (req, res) => {
  const { name, theme, plan, adminPassword, publicUrl, seed } = req.body || {};
  if (!name || !name.trim()) return res.status(400).json({ error: 'Nom de la fête requis.' });
  const planName = planExists(plan) ? plan : 'free';
  // Mot de passe console : fourni, sinon généré.
  const pwd = (adminPassword && adminPassword.trim()) || ('p' + Math.random().toString(36).slice(2, 8));
  const cfg = createEvent({ name: name.trim(), theme, plan: planName, adminPassword: pwd, publicUrl, seed: seed || 'default' });
  cfg.avatars = DEFAULT_AVATARS;
  saveConfig(cfg);
  res.json({ ok: true, event: { id: cfg.id, name: cfg.name, theme: cfg.theme, plan: cfg.plan, paymentStatus: cfg.paymentStatus }, adminPassword: pwd });
});

// Résout un token joueur → l'événement qui le contient (rejoindre par code).
function findEventByToken(token) {
  for (const e of listEvents()) {
    const cfg = getConfig(e.id);
    if (cfg && (cfg.players || []).some((p) => p.token === token)) return cfg.id;
  }
  return null;
}
app.get('/api/resolve/:token', (req, res) => {
  const id = findEventByToken(req.params.token);
  if (!id) return res.status(404).json({ error: 'Code joueur inconnu.' });
  res.json({ eventId: id, url: `/e/${id}/j/${req.params.token}` });
});
// Rejoindre directement par token : /j/<token> (racine) → redirige vers la bonne fête.
app.get('/j/:token', (req, res) => {
  const id = findEventByToken(req.params.token);
  if (!id) return res.status(404).send('Code joueur inconnu.');
  res.redirect(`/e/${id}/j/${req.params.token}`);
});

function requireAdmin(req, res) {
  if (!ADMIN_PASSWORD) return true; // pas de mot de passe configuré = accès libre
  const pwd = req.body?.password || req.query?.password || req.get('x-admin-password');
  if (pwd !== ADMIN_PASSWORD) { res.status(403).json({ error: 'Mot de passe administrateur invalide.' }); return false; }
  return true;
}

// L'admin général a-t-il besoin d'un mot de passe ? (pour adapter l'UI)
app.get('/api/admin/meta', (req, res) => res.json({ needsPassword: !!ADMIN_PASSWORD, themes: THEMES }));

app.post('/api/admin/login', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true });
});

app.get('/api/admin/events', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ events: listEvents() });
});

app.post('/api/admin/events', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { name, theme, adminPassword, publicUrl, seed, plan } = req.body || {};
  if (!name || !name.trim()) return res.status(400).json({ error: 'Nom requis.' });
  const cfg = createEvent({ name: name.trim(), theme, adminPassword, publicUrl, seed: seed || 'default', plan: plan || 'free' });
  // On dote l'événement des avatars par défaut (réutilisables).
  cfg.avatars = DEFAULT_AVATARS;
  saveConfig(cfg);
  res.json({ ok: true, event: { id: cfg.id, name: cfg.name, theme: cfg.theme, plan: cfg.plan } });
});

app.delete('/api/admin/events/:id', (req, res) => {
  if (!requireAdmin(req, res)) return;
  dropGame(req.params.id);
  removeEvent(req.params.id);
  res.json({ ok: true });
});

// --- Admin des TARIFS (super-admin) ---------------------------------
app.get('/api/admin/pricing', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ pricing: getPricing() });
});
app.post('/api/admin/pricing', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const p = req.body.pricing;
  if (!p || !p.plans) return res.status(400).json({ error: 'Tarifs invalides.' });
  savePricing(p);
  res.json({ ok: true });
});

// --- Admin emails / Brevo ---
app.get('/api/admin/brevo', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const cfg = getBrevoConfig();
  res.json({ config: { apiKeyConfigured: !!cfg.apiKey, senderName: cfg.senderName, senderEmail: cfg.senderEmail } });
});

app.post('/api/admin/brevo', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { apiKey, senderName, senderEmail } = req.body || {};
  const cur = getBrevoConfig();
  saveBrevoConfig({
    apiKey: (apiKey && apiKey.trim()) ? apiKey.trim() : cur.apiKey,
    senderName: (senderName && senderName.trim()) || cur.senderName,
    senderEmail: (senderEmail && senderEmail.trim()) || cur.senderEmail,
  });
  res.json({ ok: true });
});

app.post('/api/admin/email/send', async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { to, subject, html } = req.body || {};
  if (!to || !subject) return res.status(400).json({ error: 'Destinataire et objet requis.' });
  try {
    await sendMail({ to, subject, htmlContent: html });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/admin/email/test', async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { to } = req.body || {};
  if (!to) return res.status(400).json({ error: 'Email de test requis.' });
  try {
    await sendMail({ to, subject: 'Test PartyPlay ✓', htmlContent: '<h2 style="color:#3b6ef5">Test réussi ! 🎉</h2><p>Votre configuration Brevo fonctionne correctement.</p><p>— L\'équipe PartyPlay</p>' });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Marquer le paiement d'une fête (en attendant PayPal/SumUp) : super-admin.
app.post('/api/admin/events/:id/payment', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const cfg = getConfig(req.params.id);
  if (!cfg) return res.status(404).json({ error: 'Événement inconnu.' });
  cfg.paymentStatus = req.body.status === 'paid' ? 'paid' : 'pending';
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.json({ ok: true, paymentStatus: cfg.paymentStatus });
});

// =====================================================================
//  ROUTEUR PAR ÉVÉNEMENT  (/e/:eventId/...)
// =====================================================================
const ev = express.Router({ mergeParams: true });
app.use('/e/:eventId', ev);

// Résolution de l'événement + de son GameState pour toutes les routes /e/:id.
ev.use((req, res, next) => {
  const id = req.params.eventId;
  if (!eventExists(id)) return res.status(404).send('Événement inconnu.');
  req.eventId = id;
  req.cfg = getConfig(id);
  req.game = getGame(id);
  if (!req.game) return res.status(500).send('Impossible de charger l\'événement.');
  next();
});

// Uploads de photos : un sous-dossier par événement.
const photoUpload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) { const d = uploadsDir(req.params.eventId); mkdirSync(d, { recursive: true }); cb(null, d); },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
      cb(null, `ph_${Date.now()}_${Math.random().toString(36).slice(2, 8)}${ext}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter(req, file, cb) { cb(null, /^image\//.test(file.mimetype)); },
});

// --- Pages de l'événement (avec injection thème) ---------------------
ev.get('/', (req, res) => res.redirect(`/e/${req.eventId}/borne`));
ev.get('/borne', (req, res) => res.send(renderPage('borne.html', req.cfg)));
ev.get('/admin', (req, res) => res.send(renderPage('event-admin.html', req.cfg)));
ev.get('/photos', (req, res) => res.send(renderPage('photos.html', req.cfg)));
ev.get('/j/:token', (req, res) => res.send(renderPage('joueur.html', req.cfg)));

// Fichiers uploadés de l'événement
ev.use('/uploads', (req, res, next) => express.static(uploadsDir(req.eventId))(req, res, next));
ev.get('/api/photos/list', (req, res) => {
  let files = [];
  try { files = readdirSync(uploadsDir(req.eventId)).filter(f => /\.(jpe?g|png|gif|webp)$/i.test(f)).sort(); } catch {}
  res.json({ photos: files });
});

// --- Auth admin de l'événement --------------------------------------
function requireEventAdmin(req, res) {
  const pwd = req.cfg.adminPassword || '';
  if (!pwd) return true;
  const got = req.body?.password || req.query?.password || req.get('x-admin-password');
  if (got !== pwd) { res.status(403).json({ error: 'Mot de passe de l\'événement invalide.' }); return false; }
  return true;
}

// --- Config publique de l'événement (thème, activités, ytconfig) -----
function extractList(url) { const m = (url || '').match(/[?&]list=([^&]+)/); return m ? m[1] : (url || ''); }
function extractVideo(url) {
  const m = (url || '').match(/[?&]v=([^&]+)/) || (url || '').match(/youtu\.be\/([^?&]+)/);
  const t = (url || '').match(/[?&]t=(\d+)/);
  return { id: m ? m[1] : '', start: t ? parseInt(t[1], 10) : 0 };
}
ev.get('/api/ytconfig', (req, res) => {
  const s = req.cfg.settings || {};
  const btSrc = req.cfg.content?.blindtest?.playlists || {};
  const blindtest = {};
  for (const theme of Object.keys(btSrc)) { const id = extractList(btSrc[theme]); if (id) blindtest[theme] = id; }
  res.set('Cache-Control', 'no-store');
  res.json({
    ambiance: extractList(s.ambianceYoutube),
    briefing: extractVideo(s.briefingYoutube),
    debrief: extractVideo(s.debriefYoutube),
    pacman: extractVideo(s.pacmanYoutube),
    blindtest,
  });
});

// --- État courant + SSE ---------------------------------------------
ev.get('/api/state', (req, res) => {
  const token = req.query.token || null;
  if (token) { const p = req.game.playerByToken(token); if (p) req.game.connectPlayer(p.id); }
  res.set('Cache-Control', 'no-store');
  res.json(req.game.publicState(token));
});

ev.get('/events', (req, res) => {
  res.set({ 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
  res.flushHeaders();
  const token = req.query.token || null;
  if (token) { const p = req.game.playerByToken(token); if (p) req.game.connectPlayer(p.id); }
  const send = () => res.write(`data: ${JSON.stringify(req.game.publicState(token))}\n\n`);
  send();
  const unsubscribe = req.game.subscribe(send);
  const ping = setInterval(() => res.write(': ping\n\n'), 20000);
  req.on('close', () => { clearInterval(ping); unsubscribe(); });
});

// --- API joueur ------------------------------------------------------
function requirePlayer(req, res) {
  const token = req.body.token || req.query.token;
  const p = token && req.game.playerByToken(token);
  if (!p) { res.status(403).json({ error: 'Token invalide.' }); return null; }
  return p;
}

ev.post('/api/ready', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.setReady(p.id, req.body.ready !== false); res.json({ ok: true }); });
ev.post('/api/buzz', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.buzz(p.id); res.json({ ok: true }); });
ev.post('/api/answer', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.quizAnswer(p.id, req.body.choice); res.json({ ok: true }); });

// Photos joueurs
ev.post('/api/photo/upload', (req, res, next) => photoUpload.single('photo')(req, res, next), (req, res) => {
  const token = req.body?.token;
  const p = token && req.game.playerByToken(token);
  if (!p) return res.status(403).json({ error: 'Token invalide.' });
  if (!req.file) return res.status(400).json({ error: 'Aucune image reçue.' });
  const missionIdx = parseInt(req.body.missionIdx || '0', 10);
  const missions = req.game.photoMissions(p.avatar);
  const mission = missions[missionIdx] || null;
  const photo = {
    id: `ph_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    playerId: p.id, playerName: p.name, avatar: p.avatar, missionIdx,
    missionLabel: mission?.label || `Défi #${missionIdx + 1}`,
    filename: req.file.filename, url: `/e/${req.eventId}/uploads/${req.file.filename}`,
    uploadedAt: Date.now(),
  };
  req.game.addPhoto(photo);
  res.json({ ok: true, photo });
});
ev.post('/api/photo/vote', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json({ ok: req.game.castPhotoVote(p.id, req.body.photoId, req.body.category) }); });
ev.post('/api/photo/openvote', (req, res) => { req.game.setPhotoPhase('vote'); res.json({ ok: true }); });

// Blind-test dynamique (la borne collecte les titres)
ev.post('/api/blindtest/addtrack', (req, res) => { const { theme, videoId, videoTitle } = req.body || {}; req.game.addPlaylistTrack(theme, videoId, videoTitle); res.json({ ok: true, total: req.game.themeTrackCount(theme) }); });
ev.post('/api/blindtest/playlist', async (req, res) => { const theme = req.body?.theme || 'rock'; const ids = Array.isArray(req.body?.ids) ? req.body.ids : []; const added = await req.game.ingestPlaylist(theme, ids); res.json({ ok: true, total: req.game.themeTrackCount(theme), added }); });

// Spotlight
ev.post('/api/spotlight/vote', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.spotlightVote(p.id, req.body.verdict); res.json({ ok: true }); });

// Mini-jeux & collaboratifs (manettes)
ev.post('/api/pacman/dir', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.pacmanDir(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/tetris/move', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.tetrisMove(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/tron/move', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.tronMove(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/2048/move', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.g2048Move(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/pong/move', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.pongMove(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/mosaic/guess', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.mosaicGuess(p.id, req.body.text || '')); });
ev.post('/api/draw/update', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.drawUpdate(p.id, req.body.strokes); res.json({ ok: true }); });
ev.post('/api/draw/guess', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.drawGuess(p.id, req.body.text || '')); });
ev.post('/api/roue/vote', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.roueVote(p.id, req.body.targetId); res.json({ ok: true }); });
ev.post('/api/music/press', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.musicPress(p.id, req.body.index); res.json({ ok: true }); });
ev.post('/api/piano/press', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.pianoPress(p.id, req.body.off); res.json({ ok: true }); });
ev.post('/api/piano/replay', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.pianoDemo(); res.json({ ok: true }); });

// =====================================================================
//  CONSOLE ADMIN DE L'ÉVÉNEMENT (config + pilotage GM)
// =====================================================================
// Métadonnées (l'UI sait si un mot de passe est requis)
ev.get('/api/admin/meta', (req, res) => {
  const plan = getPlan(req.cfg.plan || 'free');
  res.json({
    needsPassword: !!req.cfg.adminPassword, name: req.cfg.name, theme: req.cfg.theme,
    themes: allowedThemes(req.cfg.plan || 'free'), allThemes: ALL_THEMES,
    plan: req.cfg.plan || 'free', planLabel: plan.label, planLimits: plan.limits || {},
    planPrice: plan.price || 0, payLink: plan.payLink || '', currency: getPricing().currency || 'EUR',
    paypalButtonId: plan.paypalButtonId || '', paypalClientId: getPricing().paypalClientId || '',
    paymentStatus: req.cfg.paymentStatus || 'free',
  });
});

// Récupère la config complète (protégée)
ev.get('/api/admin/config', (req, res) => { if (!requireEventAdmin(req, res)) return; res.json({ config: req.cfg, defaultAvatars: DEFAULT_AVATARS }); });

// Enregistre la config (protégée) — fusionne puis recharge le GameState à chaud.
ev.post('/api/admin/config', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const patch = req.body.config || {};
  const cfg = { ...req.cfg };
  for (const k of ['name', 'theme', 'publicUrl', 'adminPassword', 'settings', 'players', 'activities', 'content', 'avatars']) {
    if (patch[k] !== undefined) cfg[k] = patch[k];
  }
  if (!THEMES.includes(cfg.theme)) cfg.theme = 'retro';
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.json({ ok: true });
});

// Importe le contenu par défaut (ou vide) dans l'événement.
ev.post('/api/admin/seed', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const cfg = { ...req.cfg, content: req.body.mode === 'empty' ? emptyContent() : defaultContent() };
  saveConfig(cfg); reloadConfig(cfg.id);
  res.json({ ok: true, content: cfg.content });
});

// QR code d'un joueur (data URL) à partir de son token + publicUrl de l'événement.
ev.get('/api/admin/qr/:token', async (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const base = req.cfg.publicUrl || `${req.protocol}://${req.get('host')}`;
  const joinUrl = `${base}/e/${req.eventId}/j/${req.params.token}`;
  let qr = null;
  try { qr = await QRCode.toDataURL(joinUrl, { margin: 1, width: 260 }); } catch {}
  res.json({ joinUrl, qr });
});

// Bloc « maître » (réponse de quiz, mot de mosaïque, etc.) pour la console GM.
ev.get('/api/admin/gmstate', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const g = req.game;
  const q = g.quizQuestion();
  const a = g.activity;
  res.json({
    ...g.publicState(),
    quizMaster: q ? { sub: a?.sub, qIndex: a?.qIndex, prompt: q.prompt, play: q.play || null, bonneReponse: q.choices[q.answer] } : null,
    mosaicWord: a && a.type === 'mosaic' ? a.word : null,
    drawWord: a && a.type === 'draw' ? a.word : null,
    playlistTrackCount: g.themeTrackCount(a?.type === 'blindtest' ? a.theme : null),
  });
});

// Actions de pilotage GM (protégées).
ev.post('/api/admin/action', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const g = req.game;
  const { action, payload = {} } = req.body;
  switch (action) {
    case 'start': g.startGame(); break;
    case 'scoreboard': g.showScoreboard(); break;
    case 'hub': g.toHub(); break;
    case 'startActivity': g.startActivity(payload.type, payload.opts || {}); break;
    case 'stopActivity': g.stopActivity(); break;
    case 'quizReveal': g.quizReveal(); break;
    case 'quizNext': g.quizNext(); break;
    case 'musicDemo': g.musicDemo(); break;
    case 'musicHint': g.musicHint(); break;
    case 'pianoDemo': g.pianoDemo(); break;
    case 'drawGage': g.drawGage(payload.pool || null, payload.targetId || null); break;
    case 'clearGage': g.clearGage(); break;
    case 'loseLife': g.loseLife(payload.playerId); break;
    case 'reset': g.reset(); break;
    case 'setPhotoPhase': g.setPhotoPhase(payload.phase ?? null); break;
    case 'blindtestAsk': g.blindtestAsk(); break;
    case 'spotlightOpenVote': g.spotlightOpenVote(); break;
    case 'spotlightTally': g.spotlightTally(); break;
    case 'drawNext': g.drawNext(); break;
    case 'drawReveal': g.drawReveal(); break;
    case 'roueOpenVote': g.roueOpenVote(); break;
    case 'roueTally': g.roueTally(); break;
    case 'mosaicReveal': g.mosaicReveal(payload.on !== false); break;
    case 'ambientPlay': g.setAmbientPaused(false); break;
    case 'ambientStop': g.setAmbientPaused(true); break;
    default: return res.status(400).json({ error: 'Action inconnue: ' + action });
  }
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`\n🎉  Plateforme multi-événements en ligne`);
  console.log(`   Admin général : http://localhost:${PORT}/admin`);
  console.log(`   (événement)   : http://localhost:${PORT}/e/<id>/borne | /admin | /j/<token>\n`);
});
