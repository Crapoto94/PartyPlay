// =====================================================================
//  Connexion Google (« Sign in with Google ») — configuration du Client ID
//  OAuth. Permet, à la création d'une fête, de récupérer un email DÉJÀ
//  vérifié par Google (alternative à la vérification par email classique).
//
//  Le Client ID est PUBLIC (destiné au front). On le lit :
//   1) depuis server/google.json (réglé par le super-admin), sinon
//   2) depuis la variable d'environnement GOOGLE_CLIENT_ID.
//
//  Aucun secret n'est stocké : la vérification du jeton d'identité se fait
//  côté serveur via l'endpoint public tokeninfo de Google.
// =====================================================================

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GOOGLE_FILE = path.join(__dirname, '..', 'google.json');

export function getGoogleConfig() {
  let clientId = '';
  try {
    const data = JSON.parse(readFileSync(GOOGLE_FILE, 'utf8'));
    if (data && typeof data.clientId === 'string') clientId = data.clientId.trim();
  } catch {}
  if (!clientId) clientId = (process.env.GOOGLE_CLIENT_ID || '').trim();
  return { clientId };
}

export function googleClientId() { return getGoogleConfig().clientId; }
export function googleEnabled() { return !!googleClientId(); }

export function saveGoogleConfig(clientId) {
  const clean = (clientId || '').toString().trim();
  writeFileSync(GOOGLE_FILE, JSON.stringify({ clientId: clean }, null, 2));
  return { clientId: clean };
}
