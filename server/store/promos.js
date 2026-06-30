import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROMOS_FILE = path.join(__dirname, '..', 'promos.json');

function readPromos() {
  try { return JSON.parse(readFileSync(PROMOS_FILE, 'utf8')); }
  catch { return { codes: {} }; }
}
function writePromos(data) {
  writeFileSync(PROMOS_FILE, JSON.stringify(data, null, 2));
}

function normalize(raw) { return (raw || '').toUpperCase().trim(); }

export function validatePromoCode(raw) {
  const code = normalize(raw);
  if (!code) return null;
  const { codes } = readPromos();
  const entry = codes[code];
  if (!entry) return null;
  if (entry.expiresAt && new Date(entry.expiresAt) < new Date()) return null;
  if (entry.maxUses > 0 && entry.uses >= entry.maxUses) return null;
  return { plan: entry.plan, note: entry.note || '', code };
}

export function usePromoCode(raw) {
  const code = normalize(raw);
  const promos = readPromos();
  if (promos.codes[code]) {
    promos.codes[code].uses = (promos.codes[code].uses || 0) + 1;
    writePromos(promos);
  }
}

export function listPromoCodes() {
  return readPromos().codes;
}

export function addPromoCode({ code, plan, maxUses = 1, note = '', expiresAt = null }) {
  const key = normalize(code);
  if (!key) throw new Error('Code vide.');
  const promos = readPromos();
  promos.codes[key] = { plan, maxUses: parseInt(maxUses, 10) || 1, uses: 0, note, expiresAt: expiresAt || null, createdAt: Date.now() };
  writePromos(promos);
  return promos.codes[key];
}

export function removePromoCode(raw) {
  const key = normalize(raw);
  const promos = readPromos();
  delete promos.codes[key];
  writePromos(promos);
}
