// =====================================================================
//  BOUCHE-TROU !? — catalogue des questions/réponses éditable dans
//  l'ADMINISTRATION GÉNÉRALE. Les valeurs par défaut proviennent du
//  fichier data/carton.js ; toute modification est persistée dans
//  server/carton.json (runtime, gitignoré) et prime sur les défauts.
//
//  Structure : { classique: { prompts:[], answers:[] },
//                adulte:    { prompts:[], answers:[] } }
//
//  En jeu, le niveau « adulte » CUMULE les cartes classiques ET adultes
//  (le sel du jeu vient du mélange), tandis que « classique » n'utilise
//  que les cartes tout public.
// =====================================================================

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CARTON_PROMPTS, CARTON_ANSWERS, CARTON_LEVELS } from '../data/carton.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CARTON_FILE = path.join(__dirname, '..', 'carton.json');

export { CARTON_LEVELS };

// Défauts issus du fichier de données (copie défensive).
function defaults() {
  return {
    classique: { prompts: [...CARTON_PROMPTS.classique], answers: [...CARTON_ANSWERS.classique] },
    adulte:    { prompts: [...CARTON_PROMPTS.adulte],    answers: [...CARTON_ANSWERS.adulte] },
  };
}

// Nettoie une liste de textes (chaînes non vides, taille bornée, dédoublonnée).
function cleanList(arr, max = 240) {
  const seen = new Set();
  const out = [];
  for (const x of (Array.isArray(arr) ? arr : [])) {
    const s = (x == null ? '' : String(x)).trim().slice(0, max);
    if (s && !seen.has(s)) { seen.add(s); out.push(s); }
  }
  return out;
}

// Valide/normalise la structure complète.
function normalize(data) {
  const d = defaults();
  const out = {};
  for (const lvl of ['classique', 'adulte']) {
    const src = (data && data[lvl]) || {};
    out[lvl] = {
      prompts: cleanList(src.prompts).length ? cleanList(src.prompts) : d[lvl].prompts,
      answers: cleanList(src.answers).length ? cleanList(src.answers) : d[lvl].answers,
    };
  }
  return out;
}

// Renvoie le catalogue éditable complet (défauts si aucun fichier).
export function getCarton() {
  try {
    const data = JSON.parse(readFileSync(CARTON_FILE, 'utf8'));
    if (data && (data.classique || data.adulte)) return normalize(data);
  } catch {}
  return defaults();
}

// Remplace tout le catalogue (validation + persistance).
export function saveCarton(data) {
  const clean = normalize(data);
  writeFileSync(CARTON_FILE, JSON.stringify(clean, null, 2));
  return clean;
}

// Pools effectifs pour une manche selon le niveau choisi.
//  - classique : uniquement les cartes tout public
//  - adulte    : cartes classiques + cartes crues cumulées
export function cartonPools(level) {
  const c = getCarton();
  if (level === 'adulte') {
    return {
      prompts: [...c.classique.prompts, ...c.adulte.prompts],
      answers: [...c.classique.answers, ...c.adulte.answers],
    };
  }
  return { prompts: [...c.classique.prompts], answers: [...c.classique.answers] };
}
