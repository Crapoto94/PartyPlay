// =====================================================================
//  Blind-tests par défaut — configurés dans l'ADMINISTRATION GÉNÉRALE et
//  proposés automatiquement à chaque nouvelle fête.
//  Chaque entrée = { name, url } où url est un lien de playlist YouTube.
//  Persistance : server/blindtests.json (runtime, gitignoré).
// =====================================================================

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BT_FILE = path.join(__dirname, '..', 'blindtests.json');

// Liste par défaut (vide au départ : le super-admin la remplit dans /admin).
const DEFAULTS = [];

// Normalise un nom de blind-test (clé de playlist côté événement).
function cleanName(s) { return (s || '').toString().trim().slice(0, 60); }

// Extrait l'identifiant d'une playlist YouTube depuis une URL collée
// (…?list=XXXX). Accepte aussi un id brut déjà fourni.
export function extractPlaylistId(url) {
  const m = (url || '').match(/[?&]list=([^&]+)/);
  return m ? m[1] : (url || '').trim();
}

export function getBlindtests() {
  try {
    const data = JSON.parse(readFileSync(BT_FILE, 'utf8'));
    if (Array.isArray(data)) return data.filter((b) => b && b.name && b.url);
    if (Array.isArray(data.blindtests)) return data.blindtests.filter((b) => b && b.name && b.url);
  } catch {}
  return [...DEFAULTS];
}

// Remplace toute la liste (validation + nettoyage).
export function saveBlindtests(list) {
  const clean = (Array.isArray(list) ? list : [])
    .map((b) => ({ name: cleanName(b.name), url: (b.url || '').toString().trim() }))
    .filter((b) => b.name && b.url);
  writeFileSync(BT_FILE, JSON.stringify(clean, null, 2));
  return clean;
}

// Convertit la liste par défaut en map { nom: url } pour amorcer
// content.blindtest.playlists d'une nouvelle fête.
export function defaultPlaylistsMap() {
  const map = {};
  for (const b of getBlindtests()) if (b.name && b.url) map[b.name] = b.url;
  return map;
}
