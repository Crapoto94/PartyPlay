/* =====================================================================
   Plateau TTCQ façon TTMC — rendu SVG partagé.
   Utilisé par la borne (borne.html) et par la page de démo
   /static/plateau.html (vérification visuelle sans lancer de partie).
   Cases normales : neutres/sombres. Cases spéciales : colorées + agrandies.
   ===================================================================== */

const TTCQ_PAWN_COLORS = ['#e11d48','#2563eb','#059669','#d97706','#7c3aed','#0891b2','#db2777','#4d7c0f','#b91c1c','#1d4ed8','#a21caf','#ca8a04'];

// Couleur de pion STABLE par joueur (hash de l'id → palette), pour suivre son
// pion sur le plateau même quand le classement se réordonne.
function ttcqPawnColor(id){
  let h = 0; const s = String(id || '');
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return TTCQ_PAWN_COLORS[h % TTCQ_PAWN_COLORS.length];
}

// Helpers résolus à l'exécution : réutilise esc()/avatarEmoji() de la page
// hôte s'ils existent (borne), sinon replis internes (page de démo).
function _tbEsc(s){
  if (typeof esc === 'function') return esc(s);
  return String(s == null ? '' : s).replace(/[&<>]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c]));
}
function _tbEmoji(a){
  if (typeof avatarEmoji === 'function') return avatarEmoji(a);
  return '🎮';
}

// Plateau TTCQ : piste serpentante numérotée. `act` = { board, positions,
// leaderboard } ; `adulte` colore le cadre en rose (mode 18+).
function ttcqBoardSvg(act, adulte){
  const board = act.board || [];
  const N = board.length;
  if (!N) return '';
  const cols = 8, cell = 88, gap = 12, pad = 20;
  const rows = Math.ceil(N / cols);
  const W = pad*2 + cols*cell + (cols-1)*gap;
  const H = pad*2 + rows*cell + (rows-1)*gap;
  // Position d'une case : lignes en serpentin (gauche→droite puis droite→gauche).
  const P = i => {
    const r = Math.floor(i / cols); let c = i % cols;
    if (r % 2 === 1) c = cols - 1 - c;
    return { x: pad + c*(cell+gap), y: pad + r*(cell+gap) };
  };
  const SPECIAL = {
    '🟦 Départ':        { fill:'#4ade80', emoji:'🚩', label:'DÉPART' },
    '🏁 Arrivée':       { fill:'#f8fafc', emoji:'🏁', label:'ARRIVÉE' },
    '⭐ Compte double': { fill:'#ffe14d', emoji:'⭐', label:'COMPTE ×2' },
    '💀 Défi':          { fill:'#e11d48', emoji:'💀', label:'DÉFI', ink:'#fff' },
    '🎲 Relance':       { fill:'#67e8f9', emoji:'🎲', label:'RELANCE' },
    '🪙 Bonus':         { fill:'#fcd34d', emoji:'🪙', label:'BONUS' },
  };
  const GROW = 8; // agrandissement des cases spéciales (px de chaque côté)
  // Ruban de piste reliant les centres des cases.
  let track = '';
  for (let i = 0; i < N; i++){ const p = P(i); track += (i ? ' L' : 'M') + (p.x+cell/2) + ' ' + (p.y+cell/2); }
  // Cases normales (neutres) d'abord, spéciales (colorées, plus grandes) par-dessus.
  let normals = '', specials = '';
  for (let i = 0; i < N; i++){
    const p = P(i), sp = SPECIAL[board[i]];
    if (!sp){
      normals += `<rect x="${p.x}" y="${p.y}" width="${cell}" height="${cell}" rx="14" fill="#ffffff0d" stroke="#ffffff26" stroke-width="2"/>`
        + `<text x="${p.x+10}" y="${p.y+24}" font-size="16" font-weight="700" fill="#cbd5e1" opacity=".75" font-family="Arial, sans-serif">${i}</text>`;
    } else {
      const x = p.x - GROW, y = p.y - GROW, s = cell + GROW*2;
      const ink = sp.ink || '#1f2937';
      specials += `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="20" fill="${sp.fill}" stroke="#ffffff88" stroke-width="3"/>`
        + `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="20" fill="none" stroke="#00000033" stroke-width="1.5"/>`
        + `<text x="${x+12}" y="${y+26}" font-size="17" font-weight="800" fill="${ink}" opacity=".8" font-family="Arial, sans-serif">${i}</text>`
        + `<text x="${x+s/2}" y="${y+s/2+12}" font-size="34" text-anchor="middle">${sp.emoji}</text>`
        + `<text x="${x+s/2}" y="${y+s-10}" font-size="12" font-weight="800" text-anchor="middle" fill="${ink}" font-family="Arial, sans-serif">${sp.label}</text>`;
    }
  }
  // Pions (regroupés par case, max 3 par rangée dans la case).
  const players = act.leaderboard || [];
  const byCell = {};
  players.forEach(pl => {
    const pos = Math.min(Math.max((act.positions||{})[pl.id] ?? 0, 0), N-1);
    (byCell[pos] = byCell[pos] || []).push(pl);
  });
  let pawns = '';
  Object.entries(byCell).forEach(([ci, list]) => {
    const p = P(+ci);
    list.forEach((pl, k) => {
      const px = p.x + 17 + (k % 3) * 27;
      const py = p.y + cell - 20 - Math.floor(k / 3) * 26;
      pawns += `<circle cx="${px}" cy="${py}" r="13" fill="${ttcqPawnColor(pl.id)}" stroke="#fff" stroke-width="2.5"/>`
        + `<text x="${px}" y="${py+5}" font-size="14" text-anchor="middle">${_tbEmoji(pl.avatar)}</text>`;
    });
  });
  const legend = players.map(pl =>
    `<span style="display:inline-flex;align-items:center;gap:4px;font-size:12px;margin:0 7px;white-space:nowrap">
      <span style="width:10px;height:10px;border-radius:50%;background:${ttcqPawnColor(pl.id)};display:inline-block"></span>${_tbEmoji(pl.avatar)} ${_tbEsc(pl.name)} <span class="muted">(case ${pl.position})</span></span>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="display:block;width:auto;max-width:100%;max-height:46vh;margin:8px auto">
      <rect x="2" y="2" width="${W-4}" height="${H-4}" rx="24" fill="${adulte ? '#2a0a2e' : '#101935'}" stroke="${adulte ? '#ff2e88' : '#7a5cff'}" stroke-width="3"/>
      <path d="${track}" fill="none" stroke="#ffffff10" stroke-width="${Math.round(cell*0.92)}" stroke-linejoin="round" stroke-linecap="round"/>
      ${normals}${specials}${pawns}
    </svg>
    <div class="center" style="margin-top:2px">${legend}</div>`;
}
