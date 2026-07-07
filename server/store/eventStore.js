// =====================================================================
//  EventStore — persistance « un dossier JSON par événement ».
//    events/<id>/config.json   (paramètres + contenu)
//    events/<id>/save.json     (état runtime, géré par GameState)
//    events/<id>/uploads/      (photos des joueurs)
//    events/index.json         (liste légère pour l'admin général)
// =====================================================================

import fs from 'fs';
import path from 'path';
import { randomBytes } from 'crypto';
import { fileURLToPath } from 'url';
import { defaultSettings, defaultContent, emptyContent, defaultActivities } from '../data/defaults.js';
import { enforcePlan, planExists } from './plans.js';
import { defaultPlaylistsMap } from './blindtests.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const EVENTS_DIR = path.join(__dirname, '..', 'events');
const INDEX_FILE = path.join(EVENTS_DIR, 'index.json');

const THEMES = ['retro', 'neon', 'chic', 'kids', 'casino'];

function ensureRoot() { fs.mkdirSync(EVENTS_DIR, { recursive: true }); }

export function eventDir(id) { return path.join(EVENTS_DIR, id); }
export function uploadsDir(id) { return path.join(eventDir(id), 'uploads'); }
function configFile(id) { return path.join(eventDir(id), 'config.json'); }

// slug : minuscules, alphanum + tirets, unique.
function slugify(name) {
  const base = (name || 'event').toString().toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'event';
  let id = base, n = 2;
  while (fs.existsSync(eventDir(id))) { id = `${base}-${n++}`; }
  return id;
}

function readJson(file, fallback = null) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}
function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ---- Index --------------------------------------------------------------
function readIndex() { ensureRoot(); return readJson(INDEX_FILE, { events: [] }) || { events: [] }; }
function writeIndex(idx) { ensureRoot(); writeJson(INDEX_FILE, idx); }

export function listEvents() {
  return readIndex().events.slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}

function touchIndex(cfg) {
  const idx = readIndex();
  const entry = { id: cfg.id, name: cfg.name, theme: cfg.theme, createdAt: cfg.createdAt,
    plan: cfg.plan || 'free', paymentStatus: cfg.paymentStatus || 'free' };
  const i = idx.events.findIndex((e) => e.id === cfg.id);
  if (i >= 0) idx.events[i] = entry; else idx.events.push(entry);
  writeIndex(idx);
}

// ---- CRUD événement -----------------------------------------------------
export function getConfig(id) {
  return readJson(configFile(id), null);
}

export function saveConfig(cfg) {
  enforcePlan(cfg); // ramène thème/activités/joueurs dans les limites du plan
  writeJson(configFile(cfg.id), cfg);
  touchIndex(cfg);
  return cfg;
}

export function findEventByVerificationToken(token) {
  if (!token) return null;
  for (const e of listEvents()) {
    const cfg = getConfig(e.id);
    if (cfg && cfg.verificationToken === token) return cfg;
  }
  return null;
}

export function createEvent({ name, theme = 'retro', adminPassword = '', publicUrl = '', seed = 'default', plan = 'free', contactEmail = '', bypassVerification = false, partyDate = '' }) {
  ensureRoot();
  const id = slugify(name);
  fs.mkdirSync(uploadsDir(id), { recursive: true });
  const needsVerification = !!contactEmail && !bypassVerification;
  const cfg = {
    id,
    name: name || id,
    theme: THEMES.includes(theme) ? theme : 'retro',
    plan: planExists(plan) ? plan : 'free',
    paymentStatus: plan === 'free' ? 'free' : 'pending', // pending | paid | free
    adminPassword: adminPassword || '',
    contactEmail: contactEmail || '',
    publicUrl: publicUrl || '',
    emailVerified: !needsVerification,
    authMethod: 'email',
    verificationToken: needsVerification ? randomBytes(32).toString('hex') : null,
    createdAt: Date.now(),
    partyDate: partyDate || '',
    closed: false,
    closedAt: null,
    feedback: [],
    settings: defaultSettings(),
    players: [],
    activities: defaultActivities(),
    content: seed === 'default' ? defaultContent() : emptyContent(),
  };
  // Amorce les blind-tests par défaut (configurés dans l'admin générale).
  cfg.content.blindtest = cfg.content.blindtest || { playlists: {} };
  cfg.content.blindtest.playlists = { ...defaultPlaylistsMap(), ...(cfg.content.blindtest.playlists || {}) };
  return saveConfig(cfg);
}

export function removeEvent(id) {
  fs.rmSync(eventDir(id), { recursive: true, force: true });
  const idx = readIndex();
  idx.events = idx.events.filter((e) => e.id !== id);
  writeIndex(idx);
}

export function eventExists(id) { return fs.existsSync(configFile(id)); }

export { THEMES };
