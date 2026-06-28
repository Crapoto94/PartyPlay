// =====================================================================
//  EventManager — un GameState vivant par événement (chargement paresseux).
//  Le routeur résout l'événement de l'URL puis récupère son GameState ici.
// =====================================================================

import path from 'path';
import { GameState } from '../game/state.js';
import { eventDir, getConfig, eventExists } from './eventStore.js';

const instances = new Map(); // id -> GameState

// Renvoie le GameState de l'événement (le crée depuis config.json si besoin),
// ou null si l'événement n'existe pas.
export function getGame(id) {
  if (instances.has(id)) return instances.get(id);
  if (!eventExists(id)) return null;
  const cfg = getConfig(id);
  if (!cfg) return null;
  const game = new GameState(cfg, path.join(eventDir(id), 'save.json'));
  instances.set(id, game);
  return game;
}

// Recharge la config dans le GameState vivant (appelé après une édition admin).
export function reloadConfig(id) {
  const cfg = getConfig(id);
  const game = instances.get(id);
  if (game && cfg) game.applyConfig(cfg);
  return cfg;
}

// Oublie l'instance (événement supprimé).
export function dropGame(id) {
  const game = instances.get(id);
  if (game && typeof game.dispose === 'function') game.dispose();
  instances.delete(id);
}
