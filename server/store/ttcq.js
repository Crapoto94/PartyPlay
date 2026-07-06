import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TTCQ_THEMES } from '../data/ttcq.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TTCQ_FILE = path.join(__dirname, '..', 'ttcq.json');

function defaults() {
  return JSON.parse(JSON.stringify(TTCQ_THEMES));
}

function cleanThemes(arr) {
  if (!Array.isArray(arr)) return defaults();
  return arr.filter(t => t && t.id && t.name && Array.isArray(t.levels));
}

export function getTtcq() {
  try {
    const data = JSON.parse(readFileSync(TTCQ_FILE, 'utf8'));
    if (Array.isArray(data) && data.length) return cleanThemes(data);
  } catch {}
  return defaults();
}

export function saveTtcq(themes) {
  const clean = cleanThemes(themes);
  writeFileSync(TTCQ_FILE, JSON.stringify(clean, null, 1));
  return clean;
}

// Supprime toute sauvegarde persistée (ttcq.json) : au prochain getTtcq(), on
// retombe sur le catalogue par défaut (data/ttcq.js). Utile si une sauvegarde
// précédente s'est retrouvée partielle/corrompue (ex. suite à un bug d'édition).
export function resetTtcq() {
  try { if (existsSync(TTCQ_FILE)) unlinkSync(TTCQ_FILE); } catch {}
  return defaults();
}
