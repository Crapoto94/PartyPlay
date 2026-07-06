import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GAGES } from '../data/gages.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GAGES_FILE = path.join(__dirname, '..', 'gages.json');

function defaults() {
  return JSON.parse(JSON.stringify(GAGES));
}

function cleanGage(g) {
  if (!g || !g.titre) return null;
  return {
    id: String(g.id || '').trim().slice(0, 40) || 'gage_' + Date.now(),
    titre: String(g.titre).trim().slice(0, 60),
    desc: String(g.desc || '').trim().slice(0, 300),
    alt: String(g.alt || '').trim().slice(0, 300),
    intensity: typeof g.intensity === 'number' ? Math.min(Math.max(1, g.intensity), 3) : 1,
    pool: Array.isArray(g.pool) ? g.pool.filter(s => typeof s === 'string').map(s => s.trim()).filter(Boolean) : [],
  };
}

function normalize(data) {
  if (!Array.isArray(data)) return defaults();
  const cleaned = data.map(cleanGage).filter(Boolean);
  return cleaned.length ? cleaned : defaults();
}

export function getGages() {
  try {
    const data = JSON.parse(readFileSync(GAGES_FILE, 'utf8'));
    if (Array.isArray(data)) return normalize(data);
  } catch {}
  return defaults();
}

export function saveGages(data) {
  const clean = normalize(data);
  writeFileSync(GAGES_FILE, JSON.stringify(clean, null, 2));
  return clean;
}
