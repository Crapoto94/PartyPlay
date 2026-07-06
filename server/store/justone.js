// =====================================================================
//  UN SEUL MOT !? — catalogue des mots à deviner, éditable dans
//  l'ADMINISTRATION GÉNÉRALE. Les valeurs par défaut proviennent du
//  fichier data/justone.js ; toute modification est persistée dans
//  server/justone.json (runtime, gitignoré) et prime sur les défauts.
//
//  Structure : { classique: [...mots], adulte: [...mots] }
//
//  En jeu, le niveau « adulte » CUMULE les mots classiques ET adultes
//  (comme Bouche-Trou !?) : une partie 18+ pioche dans les DEUX listes,
//  pour mélanger des manches tout public et des manches plus osées.
// =====================================================================

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JUSTONE_WORDS, JUSTONE_WORDS_ADULT } from '../data/justone.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JUSTONE_FILE = path.join(__dirname, '..', 'justone.json');

// Défauts issus du fichier de données (copie défensive).
function defaults() {
  return { classique: [...JUSTONE_WORDS], adulte: [...JUSTONE_WORDS_ADULT] };
}

// Nettoie une liste de mots (chaînes non vides, taille bornée, dédoublonnée
// insensible à la casse).
function cleanList(arr, max = 60) {
  const seen = new Set();
  const out = [];
  for (const x of (Array.isArray(arr) ? arr : [])) {
    const s = (x == null ? '' : String(x)).trim().slice(0, max);
    const k = s.toLowerCase();
    if (s && !seen.has(k)) { seen.add(k); out.push(s); }
  }
  return out;
}

// Valide/normalise la structure complète.
function normalize(data) {
  const d = defaults();
  const out = {};
  for (const lvl of ['classique', 'adulte']) {
    const cleaned = cleanList((data && data[lvl]) || []);
    out[lvl] = cleaned.length ? cleaned : d[lvl];
  }
  return out;
}

// Renvoie le catalogue éditable complet (défauts si aucun fichier).
export function getJustone() {
  try {
    const data = JSON.parse(readFileSync(JUSTONE_FILE, 'utf8'));
    if (data && (data.classique || data.adulte)) return normalize(data);
  } catch {}
  return defaults();
}

// Remplace tout le catalogue (validation + persistance).
export function saveJustone(data) {
  const clean = normalize(data);
  writeFileSync(JUSTONE_FILE, JSON.stringify(clean, null, 2));
  return clean;
}

// Pool effectif pour une manche selon le niveau choisi.
//  - classique : uniquement les mots tout public
//  - adulte    : mots classiques + mots adultes CUMULÉS
export function justonePools(level) {
  const j = getJustone();
  if (level === 'adulte') return [...j.classique, ...j.adulte];
  return [...j.classique];
}
