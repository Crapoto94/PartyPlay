import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PHOTO_MISSIONS } from '../data/photos.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PHOTOS_FILE = path.join(__dirname, '..', 'photos.json');

function defaults() {
  return JSON.parse(JSON.stringify(PHOTO_MISSIONS));
}

function cleanMissions(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(m => m && m.label).map(m => ({
    label: String(m.label || '').trim().slice(0, 100),
    desc: String(m.desc || '').trim().slice(0, 300),
  }));
}

function normalize(data) {
  const d = defaults();
  if (!data || typeof data !== 'object') return d;
  const out = {};
  const allKeys = new Set([...Object.keys(d), ...Object.keys(data)]);
  for (const key of allKeys) {
    const cleaned = cleanMissions(data[key]);
    out[key] = cleaned.length ? cleaned : (d[key] || []);
  }
  return out;
}

export function getPhotos() {
  try {
    const data = JSON.parse(readFileSync(PHOTOS_FILE, 'utf8'));
    if (data && typeof data === 'object') return normalize(data);
  } catch {}
  return defaults();
}

export function savePhotos(data) {
  const clean = normalize(data);
  writeFileSync(PHOTOS_FILE, JSON.stringify(clean, null, 2));
  return clean;
}
