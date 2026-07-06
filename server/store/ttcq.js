import { readFileSync, writeFileSync } from 'fs';
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
