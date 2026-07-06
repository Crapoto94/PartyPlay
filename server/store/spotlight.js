import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SPOTLIGHT_DEFIS } from '../data/spotlight.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPOTLIGHT_FILE = path.join(__dirname, '..', 'spotlight.json');

function defaults() {
  return [...SPOTLIGHT_DEFIS];
}

function cleanList(arr) {
  const seen = new Set();
  const out = [];
  for (const x of (Array.isArray(arr) ? arr : [])) {
    const s = (x == null ? '' : String(x)).trim().slice(0, 300);
    if (s && !seen.has(s)) { seen.add(s); out.push(s); }
  }
  return out;
}

function normalize(data) {
  const cleaned = cleanList(data);
  return cleaned.length ? cleaned : defaults();
}

export function getSpotlight() {
  try {
    const data = JSON.parse(readFileSync(SPOTLIGHT_FILE, 'utf8'));
    if (Array.isArray(data)) return normalize(data);
  } catch {}
  return defaults();
}

export function saveSpotlight(data) {
  const clean = normalize(data);
  writeFileSync(SPOTLIGHT_FILE, JSON.stringify(clean, null, 2));
  return clean;
}
