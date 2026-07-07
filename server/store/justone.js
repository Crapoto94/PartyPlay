// =====================================================================
//  UN SEUL MOT !? — catalogue des mots à deviner, éditable dans
//  l'ADMINISTRATION GÉNÉRALE. Les valeurs par défaut proviennent du
//  fichier data/justone.js ; toute modification est persistée dans
//  server/justone.json (runtime, gitignoré) et prime sur les défauts.
//
//  Structure : { classique: [...mots], adulte: [...mots], universes: {...} }
//
//  4 univers supplémentaires (geek, gaming, fantasy, sport) de 100 mots
//  chacun, activables/désactivables par le GM via des cases à cocher.
//
//  En jeu, le niveau « adulte » CUMULE les mots classiques ET adultes
//  (comme Bouche-Trou !?) : une partie 18+ pioche dans les DEUX listes,
//  pour mélanger des manches tout public et des manches plus osées.
// =====================================================================

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JUSTONE_WORDS, JUSTONE_WORDS_ADULT, JUSTONE_UNIVERSES } from '../data/justone.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JUSTONE_FILE = path.join(__dirname, '..', 'justone.json');

// Défauts issus du fichier de données (copie défensive).
function defaults() {
  return { classique: [...JUSTONE_WORDS], adulte: [...JUSTONE_WORDS_ADULT], universes: {} };
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
  // Univers : on ne garde que les clés valides
  out.universes = {};
  if (data && data.universes && typeof data.universes === 'object') {
    for (const key of Object.keys(JUSTONE_UNIVERSES)) {
      if (data.universes[key]) out.universes[key] = true;
    }
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

// Renvoie les définitions des univers (label, emoji, mots) — lecture seule.
export function getUniverseDefs() {
  return JUSTONE_UNIVERSES;
}

// Pool effectif pour une manche selon le niveau choisi.
//  - classique : mots classiques + mots des univers activés
//  - adulte    : mots classiques + adultes + mots des univers activés
export function justonePools(level) {
  const j = getJustone();
  const base = level === 'adulte' ? [...j.classique, ...j.adulte] : [...j.classique];
  // Ajouter les mots des univers activés
  if (j.universes) {
    for (const [key, enabled] of Object.entries(j.universes)) {
      if (enabled && JUSTONE_UNIVERSES[key]) {
        base.push(...JUSTONE_UNIVERSES[key].words);
      }
    }
  }
  return base;
}
