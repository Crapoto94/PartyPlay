// =====================================================================
//  Plateforme multi-événements — serveur principal (Express + SSE).
//  - /admin                : administration GÉNÉRALE (liste/crée les événements)
//  - /e/:id/admin          : console d'un événement (config + pilotage GM)
//  - /e/:id/borne          : écran partagé de l'événement
//  - /e/:id/j/:token       : page perso d'un joueur
//  Lance avec : npm install && npm start
// =====================================================================

import express from 'express';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { mkdirSync, readdirSync, readFileSync } from 'fs';
import multer from 'multer';
import QRCode from 'qrcode';

import {
  listEvents, getConfig, saveConfig, createEvent, removeEvent, eventExists,
  findEventByVerificationToken, uploadsDir, THEMES,
} from './store/eventStore.js';
import { getGame, reloadConfig, dropGame } from './store/eventManager.js';
import { DEFAULT_AVATARS, defaultContent, emptyContent } from './data/defaults.js';
import { getPricing, savePricing, getPlan, allowedThemes, ALL_THEMES, planExists, isFreeMode } from './store/plans.js';
import { publicPaymentConfig } from './store/payment.js';
import { getBrevoConfig, saveBrevoConfig, sendMail } from './store/brevo.js';
import { getLegal, saveLegal } from './store/legal.js';
import { validatePromoCode, usePromoCode, listPromoCodes, addPromoCode, removePromoCode } from './store/promos.js';
import { PRIVACY_QUESTIONS, PRIVACY_LEVELS } from './data/privacy.js';
import { getBlindtests, saveBlindtests, defaultPlaylistsMap } from './store/blindtests.js';
import { getCarton, saveCarton, CARTON_LEVELS } from './store/carton.js';
import { getJustone, saveJustone, getUniverseDefs } from './store/justone.js';
import { getTtcq, saveTtcq, resetTtcq } from './store/ttcq.js';
import { getQuiz, saveQuiz } from './store/quiz.js';
import { getPhotos, savePhotos } from './store/photos.js';
import { getSpotlight, saveSpotlight } from './store/spotlight.js';
import { getGoogleConfig, googleClientId, googleEnabled, saveGoogleConfig } from './store/google.js';
import { getEmailTemplates, saveEmailTemplates, fillTemplate, sendAutoEmails } from './store/emails.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, 'public');
let APP_VERSION = '0.0.1';
try { APP_VERSION = JSON.parse(readFileSync(path.join(__dirname, 'version.json'), 'utf8')).version || APP_VERSION; } catch {}
const PORT = process.env.PORT || 8080;
// Mot de passe de l'administration GÉNÉRALE (créer/supprimer des événements).
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

const app = express();
app.set('trust proxy', 1); // X-Forwarded-For derrière Nginx/Caddy
app.use(express.json({ limit: '2mb' }));
app.use('/static', express.static(path.join(PUBLIC, 'static')));

const htmlEsc = s => String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

// ---------------------------------------------------------------------
//  Rendu d'une page avec injection du contexte événement + thème.
//  Remplace le marqueur <!--EVENT_HEAD--> par les <link> de thème et le
//  contexte JS. Si le marqueur est absent, injecte juste après <head>.
// ---------------------------------------------------------------------
function renderPage(file, cfg) {
  let html = readFileSync(path.join(PUBLIC, file), 'utf8');
  const theme = (cfg && cfg.theme) || 'retro';
  const ctx = {
    id: cfg ? cfg.id : null,
    name: cfg ? cfg.name : '',
    theme,
    settings: cfg ? cfg.settings : {},
    activities: cfg ? cfg.activities : {},
  };
  const eventName = (cfg && cfg.name) || '';
  const ogBase = process.env.PUBLIC_URL || '';
  const head = `
    <link rel="stylesheet" href="/static/base.css">
    <link rel="stylesheet" href="/static/themes/${theme}.css" id="theme-css">
    <meta property="og:title" content="${eventName} · PartyPlay">
    <meta property="og:description" content="Rejoins la fête « ${eventName} » sur PartyPlay — quiz, blind-test, défis photo et bien plus !">
    <meta property="og:url" content="${ogBase}/e/${cfg ? cfg.id : ''}">
    <meta property="og:image" content="${ogBase}/api/og/${cfg ? cfg.id : ''}">
    <meta name="twitter:title" content="${eventName} · PartyPlay">
    <meta name="twitter:description" content="Rejoins la fête « ${eventName} » sur PartyPlay.">
    <meta name="twitter:image" content="${ogBase}/api/og/${cfg ? cfg.id : ''}">
    <script>window.__EVENT__ = ${JSON.stringify(ctx)};</script>
    <script src="/static/version-badge.js" defer></script>`;
  if (html.includes('<!--EVENT_HEAD-->')) html = html.replace('<!--EVENT_HEAD-->', head);
  else html = html.replace(/<head([^>]*)>/i, `<head$1>${head}`);
  return html;
}

// =====================================================================
//  ADMINISTRATION GÉNÉRALE
// =====================================================================
// Page d'accueil PUBLIQUE : rejoindre / créer / accéder à l'admin de sa fête.
app.get('/', (req, res) => res.sendFile(path.join(PUBLIC, 'landing.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(PUBLIC, 'admin.html')));
app.get('/robots.txt', (req, res) => res.sendFile(path.join(PUBLIC, 'robots.txt')));
app.get('/sitemap.xml', (req, res) => res.sendFile(path.join(PUBLIC, 'sitemap.xml')));

// --- OG Image (Social Preview) ---
app.get('/api/og/:id?', (req, res) => {
  const cfg = req.params.id ? getConfig(req.params.id) : null;
  const name = (cfg && cfg.name) ? cfg.name : 'PartyPlay';
  const tag = (cfg && cfg.name) ? `${cfg.plan || 'free'} · ${cfg.closed ? 'Terminée' : 'En cours'}` : 'Jeu géant pour soirées';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c0a1e"/>
      <stop offset="50%" stop-color="#2e1065"/>
      <stop offset="100%" stop-color="#0c0a1e"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="45%" stop-color="#ec4899"/>
      <stop offset="80%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="150" cy="180" r="300" fill="#7c3aed" opacity=".12"/>
  <circle cx="1050" cy="450" r="250" fill="#db2777" opacity=".1"/>
  <text x="600" y="240" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="72" fill="#fff">${htmlEsc(name)}</text>
  <rect x="360" y="280" width="480" height="6" rx="3" fill="url(#accent)"/>
  <text x="600" y="370" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600" font-size="32" fill="#a5a0c6">${htmlEsc(tag)}</text>
  <text x="600" y="440" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700" font-size="24" fill="#8b5cf6">🎉 PartyPlay</text>
</svg>`;
  res.set('Content-Type', 'image/svg+xml');
  res.set('Cache-Control', 'max-age=3600, public');
  res.send(svg);
});

// =====================================================================
//  ESPACE PUBLIC (sans mot de passe super-admin)
// =====================================================================

// Version de l'application (affichée en bas à gauche de chaque page).
app.get('/api/version', (req, res) => res.json({ version: APP_VERSION }));

// Tarifs publics (pour afficher les formules sur la page d'accueil).
// Sans lien café configuré dans l'admin, on retombe sur un lien de don
// PayPal construit depuis PAYPAL_RECEIVER (env).
app.get('/api/pricing', (req, res) => {
  const pricing = { ...getPricing() };
  if (!pricing.coffeeLink && process.env.PAYPAL_RECEIVER) {
    pricing.coffeeLink = 'https://www.paypal.com/donate/?business='
      + encodeURIComponent(process.env.PAYPAL_RECEIVER)
      + '&currency_code=EUR&item_name=' + encodeURIComponent('Un café pour PartyPlay ☕');
  }
  res.json(pricing);
});

// État de configuration des paiements (sans secret) : tant que rien n'est
// configuré, le front sait qu'aucun moyen de paiement n'est encore actif.
app.get('/api/payment/config', (req, res) => res.json(publicPaymentConfig()));

// =====================================================================
//  CONNEXION GOOGLE — email auto-vérifié à la création d'une fête
// =====================================================================
function httpsGetJson(url) {
  return new Promise((resolve) => {
    const r = https.get(url, (res) => {
      if (res.statusCode !== 200) { res.resume(); return resolve(null); }
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => { try { resolve(JSON.parse(data)); } catch { resolve(null); } });
    });
    r.on('error', () => resolve(null));
    r.setTimeout(6000, () => { r.destroy(); resolve(null); });
  });
}

// Vérifie un jeton d'identité Google (JWT) via l'endpoint public tokeninfo.
// Renvoie { email, name } si le jeton est valide, émis pour NOTRE Client ID
// et l'email confirmé par Google ; sinon null.
async function verifyGoogleCredential(credential) {
  const clientId = googleClientId();
  if (!clientId || !credential) return null;
  const info = await httpsGetJson('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(credential));
  if (!info || !info.email) return null;
  if (info.aud !== clientId) return null; // jeton émis pour une autre application
  if (info.email_verified !== true && info.email_verified !== 'true') return null;
  const iss = info.iss || '';
  if (iss !== 'accounts.google.com' && iss !== 'https://accounts.google.com') return null;
  return { email: String(info.email).toLowerCase(), name: info.name || '' };
}

// Le front sait si « Se connecter avec Google » est disponible (+ Client ID public).
app.get('/api/auth/google/config', (req, res) => res.json({ enabled: googleEnabled(), clientId: googleClientId() }));

// Vérifie un jeton Google et renvoie l'email vérifié (pré-remplissage du formulaire).
app.post('/api/auth/google', async (req, res) => {
  const info = await verifyGoogleCredential((req.body || {}).credential);
  if (!info) return res.status(400).json({ error: 'Connexion Google invalide ou expirée.' });
  res.json({ ok: true, email: info.email, name: info.name });
});

// Réglage du Client ID Google (super-admin).
app.get('/api/admin/google', (req, res) => { if (!requireAdmin(req, res)) return; res.json(getGoogleConfig()); });
app.post('/api/admin/google', (req, res) => { if (!requireAdmin(req, res)) return; res.json({ ok: true, ...saveGoogleConfig((req.body || {}).clientId) }); });

// Création PUBLIQUE d'une fête (choix d'une formule). Le paiement viendra se
// greffer ensuite (création libre, non bloquante). Renvoie l'id + le mot de passe.
// Validation publique d'un code promo (avant création).
app.post('/api/promo/validate', (req, res) => {
  const result = validatePromoCode((req.body || {}).code);
  if (!result) return res.status(400).json({ error: 'Code invalide, expiré ou épuisé.' });
  const plan = getPlan(result.plan);
  res.json({ ok: true, plan: result.plan, label: plan.label || result.plan, note: result.note });
});

app.post('/api/parties', async (req, res) => {
  const { name, theme, plan, adminPassword, publicUrl, seed, contactEmail, promoCode, googleCredential, partyDate, adultParty } = req.body || {};
  if (!name || !name.trim()) return res.status(400).json({ error: 'Nom de la fête requis.' });

  // Connexion Google : si un jeton est fourni, on le vérifie côté serveur et on
  // en tire un email DÉJÀ vérifié (pas d'email de confirmation à cliquer).
  let googleEmail = null;
  if (googleCredential) {
    const g = await verifyGoogleCredential(googleCredential);
    if (!g) return res.status(400).json({ error: 'Connexion Google invalide ou expirée.' });
    googleEmail = g.email;
  }
  const finalEmail = googleEmail || contactEmail || '';

  // Code promo : valider avant tout
  const promo = promoCode ? validatePromoCode(promoCode) : null;
  if (promoCode && !promo) return res.status(400).json({ error: 'Code promo invalide, expiré ou épuisé.' });

  const planName = promo ? promo.plan : (planExists(plan) ? plan : 'free');
  // Mot de passe console : fourni, sinon généré.
  const pwd = (adminPassword && adminPassword.trim()) || ('p' + Math.random().toString(36).slice(2, 8));
  const cfg = createEvent({ name: name.trim(), theme, plan: planName, adminPassword: pwd, publicUrl, seed: seed || 'default', contactEmail: finalEmail, partyDate, adultParty: !!adultParty });
  cfg.avatars = DEFAULT_AVATARS;
  cfg.creatorIp = clientIp(req) || 'unknown';
  cfg.creatorOs = detectOs(req.get('user-agent'));
  // Email vérifié par Google → fête activée immédiatement, envoi d'un email de bienvenue.
  if (googleEmail) {
    cfg.emailVerified = true; cfg.verificationToken = null; cfg.authMethod = 'google';
    const proto = req.get('x-forwarded-proto') || req.protocol;
    const host = req.get('x-forwarded-host') || req.get('host');
    const baseUrl = process.env.PUBLIC_URL || `${proto}://${host}`;
    const consoleUrl = `${baseUrl}/e/${cfg.id}/admin`;
    const borneUrl = `${baseUrl}/e/${cfg.id}/borne`;
    const planInfo = (getPricing().plans || {})[cfg.plan] || {};
    const tpl = getEmailTemplates().welcome;
    sendMail({
      to: cfg.contactEmail,
      subject: fillTemplate(tpl.subject, { eventName: cfg.name }),
      htmlContent: fillTemplate(tpl.html, { eventName: cfg.name, eventId: cfg.id, planLabel: planInfo.label || cfg.plan, consoleUrl, borneUrl }),
    }).catch(() => {});
  }
  if (promo) {
    cfg.paymentStatus = 'free';
    cfg.promoCode = promoCode.toUpperCase().trim();
    if (cfg.adultParty) {
      cfg.adultPaymentStatus = 'paid';
      cfg.adultVerified = true;
    }
    usePromoCode(promoCode);
  } else if (isFreeMode()) {
    cfg.paymentStatus = 'free'; // mode bêta gratuit global
  }
  saveConfig(cfg);
  // Envoi de l'email de vérification + infos (non-bloquant)
  if (cfg.contactEmail && !cfg.emailVerified) {
    const proto = req.get('x-forwarded-proto') || req.protocol;
    const host = req.get('x-forwarded-host') || req.get('host');
    const baseUrl = process.env.PUBLIC_URL || `${proto}://${host}`;
    const verifyUrl = `${baseUrl}/verify/${cfg.verificationToken}`;
    const consoleUrl = `${baseUrl}/e/${cfg.id}/admin`;
    const borneUrl = `${baseUrl}/e/${cfg.id}/borne`;
    const planInfo = (getPricing().plans || {})[cfg.plan] || {};
    const tpl = getEmailTemplates().verify;
    sendMail({
      to: cfg.contactEmail,
      subject: fillTemplate(tpl.subject, { eventName: cfg.name }),
      htmlContent: fillTemplate(tpl.html, { eventName: cfg.name, eventId: cfg.id, verifyUrl, consoleUrl, borneUrl, planLabel: planInfo.label || cfg.plan }),
    }).catch(() => {});
  }
  // Notification admin pour les fêtes non-test
  try {
    const pricing = getPricing();
    if (pricing.notifyOnNewParty !== false && cfg.contactEmail && !cfg.contactEmail.endsWith('@fbc.fr')) {
      const proto = req.get('x-forwarded-proto') || req.protocol;
      const host = req.get('x-forwarded-host') || req.get('host');
      const baseUrl = process.env.PUBLIC_URL || `${proto}://${host}`;
      const tpl = getEmailTemplates().newParty;
      if (tpl) {
        sendMail({
          to: 'marc@fbc.fr',
          subject: fillTemplate(tpl.subject, { eventName: cfg.name }),
          htmlContent: fillTemplate(tpl.html, { eventName: cfg.name, eventId: cfg.id, contactEmail: cfg.contactEmail || '', partyDate: cfg.partyDate || '', plan: cfg.plan || '', theme: cfg.theme || '', consoleUrl: `${baseUrl}/e/${cfg.id}/admin` }),
        }).catch(() => {});
      }
    }
  } catch (e) { console.error('[notify] Erreur:', e.message); }

  res.json({ ok: true, event: { id: cfg.id, name: cfg.name, theme: cfg.theme, plan: cfg.plan, paymentStatus: cfg.paymentStatus, emailVerified: cfg.emailVerified !== false, contactEmail: cfg.contactEmail || '', partyDate: cfg.partyDate || '', adultParty: !!cfg.adultParty, adultVerified: !!cfg.adultVerified }, adminPassword: pwd });
});

// Résout un token joueur → l'événement qui le contient (rejoindre par code).
function findEventByToken(token) {
  for (const e of listEvents()) {
    const cfg = getConfig(e.id);
    if (cfg && (cfg.players || []).some((p) => p.token === token)) return cfg.id;
  }
  return null;
}
app.get('/api/resolve/:token', (req, res) => {
  const id = findEventByToken(req.params.token);
  if (!id) return res.status(404).json({ error: 'Code joueur inconnu.' });
  res.json({ eventId: id, url: `/e/${id}/j/${req.params.token}` });
});
// Rejoindre directement par token : /j/<token> (racine) → redirige vers la bonne fête.
app.get('/j/:token', (req, res) => {
  const id = findEventByToken(req.params.token);
  if (!id) return res.status(404).send('Code joueur inconnu.');
  res.redirect(`/e/${id}/j/${req.params.token}`);
});

// IP réelle du client (derrière Nginx/Caddy grâce à trust proxy).
function clientIp(req) {
  return (req.get('x-forwarded-for') || '').split(',')[0].trim() || req.ip || '';
}

function detectOs(ua) {
  if (!ua) return 'other';
  const s = ua.toLowerCase();
  if (s.includes('android')) return 'android';
  if (s.includes('iphone') || s.includes('ipad') || s.includes('ipod')) return 'ios';
  if (s.includes('windows')) return 'windows';
  if (s.includes('macintosh') || s.includes('mac os')) return 'mac';
  return 'other';
}

function requireAdmin(req, res) {
  if (!ADMIN_PASSWORD) return true; // pas de mot de passe configuré = accès libre
  const pwd = req.body?.password || req.query?.password || req.get('x-admin-password');
  if (pwd !== ADMIN_PASSWORD) { res.status(403).json({ error: 'Mot de passe administrateur invalide.' }); return false; }
  return true;
}

// L'admin général a-t-il besoin d'un mot de passe ? (pour adapter l'UI)
app.get('/api/admin/meta', (req, res) => res.json({ needsPassword: !!ADMIN_PASSWORD, themes: THEMES }));

app.post('/api/admin/login', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true });
});

app.get('/api/admin/events', (req, res) => {
  if (!requireAdmin(req, res)) return;
  // Enrichit l'index léger avec les infos sensibles utiles au super-admin :
  // mot de passe console, email (+ statut de vérification), IP du créateur.
  const events = listEvents().map((e) => {
    const cfg = getConfig(e.id) || {};
    return {
      ...e,
      adminPassword: cfg.adminPassword || '',
      contactEmail: cfg.contactEmail || '',
      emailVerified: cfg.emailVerified !== false,
      verificationMethod: cfg.emailVerified ? (cfg.authMethod || (cfg.verificationToken ? 'email' : 'google')) : null,
      creatorIp: cfg.creatorIp || '',
      creatorOs: cfg.creatorOs || '',
      adultParty: !!cfg.adultParty,
      adultVerified: !!cfg.adultVerified,
      playerCount: (cfg.players || []).length,
    };
  });
  res.json({ events });
});

// Détails d'un événement pour le super-admin : IP créateur + IPs des joueurs.
app.get('/api/admin/events/:id/details', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const cfg = getConfig(req.params.id);
  if (!cfg) return res.status(404).json({ error: 'Événement inconnu.' });
  res.json({
    id: cfg.id,
    name: cfg.name,
    createdAt: cfg.createdAt,
    adminPassword: cfg.adminPassword || '',
    contactEmail: cfg.contactEmail || '',
    emailVerified: cfg.emailVerified !== false,
    creatorIp: cfg.creatorIp || null,
    players: (cfg.players || []).map((p) => ({
      id: p.id, name: p.name, sim: !!p.sim,
      lastIp: p.lastIp || null, lastIpAt: p.lastIpAt || null,
    })),
  });
});

// Validation FORCÉE de l'email par le super-admin (pratique en phase de dev
// pour ne pas dépendre de l'envoi Brevo / de la boîte mail du testeur).
app.post('/api/admin/events/:id/force-verify', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const cfg = getConfig(req.params.id);
  if (!cfg) return res.status(404).json({ error: 'Événement inconnu.' });
  cfg.emailVerified = true;
  cfg.verificationToken = null;
  if (!cfg.authMethod) cfg.authMethod = 'email';
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.json({ ok: true });
});

app.post('/api/admin/events', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { name, theme, adminPassword, publicUrl, seed, plan, partyDate } = req.body || {};
  if (!name || !name.trim()) return res.status(400).json({ error: 'Nom requis.' });
  // Les événements créés par le super-admin sont directement vérifiés.
  const cfg = createEvent({ name: name.trim(), theme, adminPassword, publicUrl, seed: seed || 'default', plan: plan || 'free', bypassVerification: true, partyDate });
  cfg.avatars = DEFAULT_AVATARS;
  saveConfig(cfg);
  res.json({ ok: true, event: { id: cfg.id, name: cfg.name, theme: cfg.theme, plan: cfg.plan } });
});

app.delete('/api/admin/events/:id', (req, res) => {
  if (!requireAdmin(req, res)) return;
  dropGame(req.params.id);
  removeEvent(req.params.id);
  res.json({ ok: true });
});

// --- Admin des TARIFS (super-admin) ---------------------------------
app.get('/api/admin/pricing', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ pricing: getPricing() });
});
app.post('/api/admin/pricing', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const p = req.body.pricing;
  if (!p || !p.plans) return res.status(400).json({ error: 'Tarifs invalides.' });
  savePricing(p);
  res.json({ ok: true });
});

// --- Admin emails / Brevo ---
app.get('/api/admin/brevo', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const cfg = getBrevoConfig();
  res.json({ config: { apiKeyConfigured: !!cfg.apiKey, senderName: cfg.senderName, senderEmail: cfg.senderEmail } });
});

app.post('/api/admin/brevo', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { apiKey, senderName, senderEmail } = req.body || {};
  const cur = getBrevoConfig();
  saveBrevoConfig({
    apiKey: (apiKey && apiKey.trim()) ? apiKey.trim() : cur.apiKey,
    senderName: (senderName && senderName.trim()) || cur.senderName,
    senderEmail: (senderEmail && senderEmail.trim()) || cur.senderEmail,
  });
  res.json({ ok: true });
});

app.post('/api/admin/email/send', async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { to, subject, html } = req.body || {};
  if (!to || !subject) return res.status(400).json({ error: 'Destinataire et objet requis.' });
  try {
    await sendMail({ to, subject, htmlContent: html });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/admin/email/send-template', async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { to, templateKey } = req.body || {};
  if (!to || !templateKey) return res.status(400).json({ error: 'Destinataire et clé de template requis.' });

  const lastEvent = listEvents()[0];
  if (!lastEvent) return res.status(400).json({ error: 'Aucune fête existante pour remplir les variables.' });
  const cfg = getConfig(lastEvent.id);
  if (!cfg) return res.status(400).json({ error: 'Configuration introuvable.' });

  const proto = req.get('x-forwarded-proto') || req.protocol;
  const host = req.get('x-forwarded-host') || req.get('host');
  const baseUrl = process.env.PUBLIC_URL || `${proto}://${host}`;
  const templates = getEmailTemplates();
  const tpl = templates[templateKey];
  if (!tpl) return res.status(400).json({ error: 'Template inconnu.' });

  const planInfo = (getPricing().plans || {})[cfg.plan] || {};
  const vars = {
    eventName: cfg.name || '',
    eventId: cfg.id || '',
    planLabel: planInfo.label || cfg.plan || '',
    verifyUrl: `${baseUrl}/verify/${cfg.verificationToken || 'test'}`,
    consoleUrl: `${baseUrl}/e/${cfg.id}/admin`,
    borneUrl: `${baseUrl}/e/${cfg.id}/borne`,
    joinUrl: `${baseUrl}/e/${cfg.id}/j/test`,
    playerName: 'Test',
    playerAvatar: '',
    resultsUrl: `${baseUrl}/e/${cfg.id}/resultats`,
    baseUrl,
  };
  try {
    await sendMail({
      to,
      subject: fillTemplate(tpl.subject, vars),
      htmlContent: fillTemplate(tpl.html, vars),
    });
    res.json({ ok: true, eventId: cfg.id, eventName: cfg.name });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/admin/email/test', async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { to } = req.body || {};
  if (!to) return res.status(400).json({ error: 'Email de test requis.' });
  try {
    await sendMail({ to, subject: 'Test PartyPlay ✓', htmlContent: '<h2 style="color:#3b6ef5">Test réussi ! 🎉</h2><p>Votre configuration Brevo fonctionne correctement.</p><p>— L\'équipe PartyPlay</p>' });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// --- Templates d'emails (éditables via /admin) ---
app.get('/api/admin/email-templates', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ templates: getEmailTemplates() });
});

app.post('/api/admin/email-templates', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { templates } = req.body || {};
  if (!templates) return res.status(400).json({ error: 'Templates requis.' });
  const saved = saveEmailTemplates(templates);
  res.json({ ok: true, templates: saved });
});

// Marquer le paiement d'une fête (en attendant PayPal/SumUp) : super-admin.
app.post('/api/admin/events/:id/payment', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const cfg = getConfig(req.params.id);
  if (!cfg) return res.status(404).json({ error: 'Événement inconnu.' });
  cfg.paymentStatus = req.body.status === 'paid' ? 'paid' : 'pending';
  saveConfig(cfg);
  reloadConfig(cfg.id);
  // Notification pour les fêtes payantes
  if (cfg.paymentStatus === 'paid') {
    try {
      const pricing = getPricing();
      if (pricing.notifyOnPaidParty && cfg.contactEmail) {
        const tpl = getEmailTemplates().newParty;
        if (tpl) {
          sendMail({
            to: 'marc@fbc.fr',
            subject: '💰 Paiement reçu — ' + (cfg.name || cfg.id),
            htmlContent: fillTemplate(tpl.html, { eventName: cfg.name || '', eventId: cfg.id, contactEmail: cfg.contactEmail || '', partyDate: cfg.partyDate || '', plan: cfg.plan || '', theme: cfg.theme || '', consoleUrl: `${process.env.PUBLIC_URL || 'http://localhost:8080'}/e/${cfg.id}/admin` }),
          }).catch(() => {});
        }
      }
    } catch (e) { console.error('[notify] Erreur paiement:', e.message); }
  }
  res.json({ ok: true, paymentStatus: cfg.paymentStatus });
});

// Marquer le paiement 18+ validé (super-admin).
app.post('/api/admin/events/:id/adult-payment', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const cfg = getConfig(req.params.id);
  if (!cfg) return res.status(404).json({ error: 'Événement inconnu.' });
  cfg.adultPaymentStatus = req.body.status === 'paid' ? 'paid' : 'pending';
  cfg.adultVerified = cfg.adultPaymentStatus === 'paid';
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.json({ ok: true, adultPaymentStatus: cfg.adultPaymentStatus, adultVerified: cfg.adultVerified });
});

// =====================================================================
//  CODES PROMO
// =====================================================================
app.get('/api/admin/promos', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ codes: listPromoCodes() });
});

// =====================================================================
//  SANS FILTRE !? — listing des questions (admin générale, lecture seule)
// =====================================================================
app.get('/api/admin/privacy-questions', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const levels = {};
  for (const [key, meta] of Object.entries(PRIVACY_LEVELS)) {
    levels[key] = { ...meta, count: (PRIVACY_QUESTIONS[key] || []).length, questions: PRIVACY_QUESTIONS[key] || [] };
  }
  res.json({ levels });
});

// =====================================================================
//  BLIND-TESTS PAR DÉFAUT (proposés à chaque nouvelle fête)
// =====================================================================
app.get('/api/admin/blindtests', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ blindtests: getBlindtests() });
});
app.post('/api/admin/blindtests', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const list = Array.isArray(req.body?.blindtests) ? req.body.blindtests : [];
  res.json({ ok: true, blindtests: saveBlindtests(list) });
});

// =====================================================================
//  BOUCHE-TROU !? — catalogue éditable des questions/réponses (admin général)
// =====================================================================
app.get('/api/admin/carton', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ levels: CARTON_LEVELS, carton: getCarton() });
});
app.post('/api/admin/carton', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true, carton: saveCarton(req.body?.carton || {}) });
});

// =====================================================================
//  UN SEUL MOT !? — catalogue éditable des mots à deviner (admin général)
// =====================================================================
app.get('/api/admin/justone', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ justone: getJustone(), universeDefs: getUniverseDefs() });
});
app.post('/api/admin/justone', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true, justone: saveJustone(req.body?.justone || {}) });
});
// =====================================================================
//  TTCQ — catalogue éditable des thèmes/questions (admin général)
// =====================================================================
app.get('/api/admin/ttcq', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ themes: getTtcq() });
});
app.post('/api/admin/ttcq', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true, themes: saveTtcq(req.body?.themes || []) });
});
app.post('/api/admin/ttcq/reset', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true, themes: resetTtcq() });
});

// =====================================================================
//  QUIZ — banque de questions (admin général)
// =====================================================================
app.get('/api/admin/quiz', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ decks: getQuiz() });
});
app.post('/api/admin/quiz', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true, decks: saveQuiz(req.body?.decks || {}) });
});

// =====================================================================
//  DÉFIS PHOTO — missions photo par avatar (admin général)
// =====================================================================
app.get('/api/admin/photos', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ missions: getPhotos() });
});
app.post('/api/admin/photos', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true, missions: savePhotos(req.body?.missions || {}) });
});

// =====================================================================
//  DEVINE-MOI (SPOTLIGHT) — défis scène (admin général)
// =====================================================================
app.get('/api/admin/spotlight', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ defis: getSpotlight() });
});
app.post('/api/admin/spotlight', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json({ ok: true, defis: saveSpotlight(req.body?.defis || []) });
});

app.post('/api/admin/promos', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const { code, plan, maxUses, note, expiresAt } = req.body || {};
  if (!code || !plan) return res.status(400).json({ error: 'Code et formule requis.' });
  if (!planExists(plan)) return res.status(400).json({ error: 'Formule inconnue.' });
  try {
    const entry = addPromoCode({ code, plan, maxUses: maxUses || 1, note: note || '', expiresAt: expiresAt || null });
    res.json({ ok: true, entry });
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.delete('/api/admin/promos/:code', (req, res) => {
  if (!requireAdmin(req, res)) return;
  removePromoCode(req.params.code);
  res.json({ ok: true });
});

// =====================================================================
//  PAGES LÉGALES
// =====================================================================
function buildLegalPage(title, content) {
  const legal = getLegal();
  return `<!doctype html><html lang="fr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${htmlEsc(title)} — ${htmlEsc(legal.siteName)}</title>
<link rel="stylesheet" href="/static/admin.css">
<style>
  body{background:var(--a-bg);color:var(--a-text)}
  .legal-wrap{max-width:760px;margin:0 auto;padding:40px 20px 80px}
  .legal-back{display:inline-block;margin-bottom:24px;color:var(--a-accent);font-size:14px;text-decoration:none}
  .legal-back:hover{text-decoration:underline}
  h1{font-size:26px;font-weight:800;margin:0 0 24px}
  .legal-body{white-space:pre-line;line-height:1.8;font-size:15px;color:var(--a-text)}
  .legal-footer{margin-top:40px;padding-top:16px;border-top:1px solid var(--a-border);font-size:13px;color:var(--a-muted)}
  .legal-footer a{color:var(--a-accent);text-decoration:none;margin:0 8px}
</style>
</head><body>
<div class="legal-wrap">
  <a href="/" class="legal-back">← Retour à l'accueil</a>
  <h1>${htmlEsc(title)}</h1>
  <div class="legal-body">${content}</div>
  <div class="legal-footer">
    <a href="/contact">Contact</a><a href="/rgpd">Confidentialité</a><a href="/mentions-legales">Mentions légales</a>
  </div>
</div>
</body></html>`;
}

app.get('/contact', (req, res) => {
  const l = getLegal();
  res.send(buildLegalPage('Contact', htmlEsc(l.contactText) + `\n\n<a href="mailto:${htmlEsc(l.contactEmail)}" style="color:var(--a-accent);font-weight:600">${htmlEsc(l.contactEmail)}</a>`));
});
app.get('/rgpd', (req, res) => {
  const l = getLegal();
  res.send(buildLegalPage('Politique de confidentialité (RGPD)', htmlEsc(l.rgpdText)));
});
app.get('/mentions-legales', (req, res) => {
  const l = getLegal();
  res.send(buildLegalPage('Mentions légales', htmlEsc(l.mentionsText)));
});

app.get('/api/legal', (req, res) => {
  const l = getLegal();
  res.json({ siteName: l.siteName, contactEmail: l.contactEmail });
});
app.get('/api/admin/legal', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json(getLegal());
});
app.post('/api/admin/legal', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const allowed = ['siteName', 'contactEmail', 'contactText', 'rgpdText', 'mentionsText'];
  const patch = {};
  for (const k of allowed) if (req.body[k] !== undefined) patch[k] = req.body[k];
  saveLegal(patch);
  res.json({ ok: true });
});

// =====================================================================
//  VÉRIFICATION D'EMAIL
// =====================================================================
app.get('/verify/:token', (req, res) => {
  const cfg = findEventByVerificationToken(req.params.token);
  if (!cfg) return res.status(410).send(`<!doctype html><html><head><meta charset="utf-8"><title>Lien invalide</title></head><body style="font-family:system-ui;text-align:center;padding:60px"><h1>🔗 Lien invalide ou déjà utilisé</h1><p><a href="/">Retour à l'accueil</a></p></body></html>`);
  cfg.emailVerified = true;
  cfg.verificationToken = null;
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.redirect(`/e/${cfg.id}/admin?verified=1`);
});

// =====================================================================
//  ROUTEUR PAR ÉVÉNEMENT  (/e/:eventId/...)
// =====================================================================
const ev = express.Router({ mergeParams: true });
app.use('/e/:eventId', ev);

// Résolution de l'événement + de son GameState pour toutes les routes /e/:id.
ev.use((req, res, next) => {
  const id = req.params.eventId;
  if (!eventExists(id)) return res.status(404).send('Événement inconnu.');
  req.eventId = id;
  req.cfg = getConfig(id);
  req.game = getGame(id);
  if (!req.game) return res.status(500).send('Impossible de charger l\'événement.');
  next();
});

// Uploads de photos : un sous-dossier par événement.
const photoUpload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) { const d = uploadsDir(req.params.eventId); mkdirSync(d, { recursive: true }); cb(null, d); },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
      cb(null, `ph_${Date.now()}_${Math.random().toString(36).slice(2, 8)}${ext}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter(req, file, cb) { cb(null, /^image\//.test(file.mimetype)); },
});

// Uploads d'avatars personnalisés : sous-dossier avatars/ dans uploads/.
const avatarUpload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      const d = path.join(uploadsDir(req.params.eventId), 'avatars');
      mkdirSync(d, { recursive: true });
      cb(null, d);
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
      cb(null, `av_${Date.now()}_${Math.random().toString(36).slice(2, 6)}${ext}`);
    },
  }),
  limits: { fileSize: 3 * 1024 * 1024 },
  fileFilter(req, file, cb) { cb(null, /^image\//.test(file.mimetype)); },
});

// Uploads de vidéos d'anecdotes « Breaking News » : sous-dossier anecdotes/.
// Limite 200 Mo, fichiers vidéo uniquement.
const anecUpload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      const d = path.join(uploadsDir(req.params.eventId), 'anecdotes');
      mkdirSync(d, { recursive: true });
      cb(null, d);
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname).toLowerCase() || '.mp4';
      cb(null, `an_${Date.now()}_${Math.random().toString(36).slice(2, 6)}${ext}`);
    },
  }),
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter(req, file, cb) { cb(null, /^video\//.test(file.mimetype)); },
});

// --- Pages de l'événement (avec injection thème) ---------------------
ev.get('/', (req, res) => res.redirect(`/e/${req.eventId}/borne`));
ev.get('/borne', (req, res) => res.send(renderPage('borne.html', req.cfg)));

// Page publique de résultats + notation (aucun mot de passe requis)
ev.get('/resultats', (req, res) => {
  const cfg = req.cfg;
  const planInfo = (getPricing().plans || {})[cfg.plan] || {};
  const fb = cfg.feedback || [];
  const ratings = fb.map(f => f.rating).filter(r => r && r >= 1 && r <= 5);
  const avg = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : '—';
  const baseUrl = process.env.PUBLIC_URL || '';
  res.send(`<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Résultats — ${cfg.name} · PartyPlay</title>
<meta name="description" content="Notes et avis pour la fête « ${cfg.name} » sur PartyPlay.">
<meta name="robots" content="noindex, nofollow">
<meta property="og:title" content="Résultats — ${cfg.name} · PartyPlay">
<meta property="og:type" content="website">
<meta property="og:description" content="Notes et avis pour la fête « ${cfg.name} » sur PartyPlay.">
<meta property="og:url" content="${baseUrl}/e/${cfg.id}/resultats">
<meta property="og:image" content="${baseUrl}/api/og/${cfg.id}">
<meta name="twitter:card" content="summary">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--bg:#0c0a1e;--ink:#f5f3ff;--muted:#a5a0c6;--border:rgba(255,255,255,.1);--surface:rgba(255,255,255,.05);--accent:#8b5cf6;--pink:#ec4899;--grad:linear-gradient(100deg,#8b5cf6,#ec4899,#fb923c);--font:'Plus Jakarta Sans',sans-serif}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);color:var(--ink);font-family:var(--font);display:flex;flex-direction:column;align-items:center;padding:20px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px 30px;max-width:500px;width:100%;margin:20px 0;text-align:center}
h1{font-size:24px;font-weight:800;margin:0 0 4px}.muted{color:var(--muted);font-size:14px}.stars{font-size:42px;margin:12px 0}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--font);font-size:15px;font-weight:700;padding:13px 26px;border-radius:14px;border:none;cursor:pointer;background:var(--grad);color:#fff;text-decoration:none;width:100%;margin-top:12px;transition:transform .15s}
.btn:hover{transform:translateY(-2px)}
input,textarea{width:100%;padding:12px 15px;border-radius:12px;border:1px solid var(--border);background:rgba(255,255,255,.055);color:var(--ink);font-size:14px;font-family:var(--font);margin:6px 0;outline:none}
input:focus,textarea:focus{border-color:var(--pink)}
textarea{min-height:70px;resize:vertical}
.star{font-size:32px;cursor:pointer;transition:opacity .15s;display:inline-block;padding:0 2px}
a{color:var(--accent)}
</style>
</head><body>
<div class="card">
<h1>🎉 ${cfg.name}</h1>
<p class="muted">${planInfo.label || cfg.plan} · ${cfg.closed ? 'Fête terminée' : 'En cours'}</p>
</div>
<div class="card" id="fbBlock">
<h2>⭐ Donne ton avis</h2>
<p class="muted" style="margin:0 0 10px">Note l'application — sans inscription.</p>
<div id="stars">${[1,2,3,4,5].map(n => '<span class="star" data-s="'+n+'" onclick="pick('+n+')" onmouseenter="hover('+n+')" onmouseleave="unhover()">☆</span>').join('')}</div>
<p id="ratingLabel" class="muted" style="font-size:13px;margin:4px 0">Sélectionne une note</p>
<textarea id="comment" placeholder="Un commentaire ? (optionnel)"></textarea>
<button class="btn" onclick="send()">💬 Envoyer mon avis</button>
<p id="status" class="muted" style="font-size:13px;margin:8px 0 0"></p>
</div>
<div class="card"><h2>📊 Notes</h2><div class="stars">${avg === '—' ? '—' : '<span style="color:#fbbf24">'+'⭐'.repeat(Math.round(Number(avg)))+'</span> '+(avg)+'/5'}</div><p class="muted">${ratings.length} avis</p></div>
<script>
let val=0;
function hover(n){for(let i=1;i<=5;i++)document.querySelectorAll('.star')[i-1].textContent=i<=n?'⭐':'☆'}
function unhover(){for(let i=1;i<=5;i++){const el=document.querySelectorAll('.star')[i-1];el.textContent=i<=val?'⭐':'☆'}}
function pick(n){val=n;hover(n);document.getElementById('ratingLabel').textContent='⭐'.repeat(n)+' ('+n+'/5)'}
async function send(){const st=document.getElementById('status');if(!val){st.textContent='Choisis une note.';return}
st.textContent='Envoi…';try{const r=await fetch('/e/${cfg.id}/api/public-feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({rating:val,comment:document.getElementById('comment').value.trim()})});const d=await r.json()
if(!r.ok){st.textContent=d.error||'Erreur';return}
st.textContent='✓ Merci pour ton avis ! 🎉'}
catch(e){st.textContent='Erreur réseau.'}}
</script>
</body></html>`);
});
ev.get('/admin', (req, res) => res.send(renderPage('event-admin.html', req.cfg)));
ev.get('/photos', (req, res) => res.send(renderPage('photos.html', req.cfg)));
ev.get('/j/:token', (req, res) => {
  // Trace l'IP du joueur (mentionnée dans la politique de confidentialité).
  // On n'écrit sur disque que si l'IP a changé, pas à chaque rechargement.
  const p = (req.cfg.players || []).find((x) => x.token === req.params.token);
  if (p) {
    const ip = clientIp(req);
    if (ip && p.lastIp !== ip) { p.lastIp = ip; p.lastIpAt = Date.now(); saveConfig(req.cfg); }
  }
  res.send(renderPage('joueur.html', req.cfg));
});

// Fichiers uploadés de l'événement
ev.use('/uploads', (req, res, next) => express.static(uploadsDir(req.eventId))(req, res, next));
ev.get('/api/photos/list', (req, res) => {
  let files = [];
  try { files = readdirSync(uploadsDir(req.eventId)).filter(f => /\.(jpe?g|png|gif|webp)$/i.test(f)).sort(); } catch {}
  res.json({ photos: files });
});

// --- Auth admin de l'événement --------------------------------------
function requireEventAdmin(req, res) {
  const pwd = req.cfg.adminPassword || '';
  if (!pwd) return true;
  const got = req.body?.password || req.query?.password || req.get('x-admin-password');
  if (got !== pwd) { res.status(403).json({ error: 'Mot de passe de l\'événement invalide.' }); return false; }
  return true;
}

// --- Config publique de l'événement (thème, activités, ytconfig) -----
function extractList(url) { const m = (url || '').match(/[?&]list=([^&]+)/); return m ? m[1] : (url || ''); }
function extractVideo(url) {
  const m = (url || '').match(/[?&]v=([^&]+)/) || (url || '').match(/youtu\.be\/([^?&]+)/);
  const t = (url || '').match(/[?&]t=(\d+)/);
  return { id: m ? m[1] : '', start: t ? parseInt(t[1], 10) : 0 };
}
ev.get('/api/ytconfig', (req, res) => {
  const s = req.cfg.settings || {};
  const btSrc = req.cfg.content?.blindtest?.playlists || {};
  const blindtest = {};
  // Seules les playlists YouTube sont moissonnées par la borne ; les playlists
  // Deezer sont récupérées côté serveur (API publique) au lancement du jeu.
  for (const theme of Object.keys(btSrc)) {
    const url = btSrc[theme] || '';
    if (/deezer/i.test(url)) continue;
    const id = extractList(url);
    if (id) blindtest[theme] = id;
  }
  res.set('Cache-Control', 'no-store');
  res.json({
    ambiance: extractList(s.ambianceYoutube),
    briefing: extractVideo(s.briefingYoutube),
    debrief: extractVideo(s.debriefYoutube),
    pacman: extractVideo(s.pacmanYoutube),
    blindtest,
  });
});

// --- État courant + SSE ---------------------------------------------
ev.get('/api/state', (req, res) => {
  const token = req.query.token || null;
  if (token) { const p = req.game.playerByToken(token); if (p) req.game.connectPlayer(p.id); }
  res.set('Cache-Control', 'no-store');
  res.json(req.game.publicState(token));
});

ev.get('/events', (req, res) => {
  res.set({ 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
  res.flushHeaders();
  const token = req.query.token || null;
  if (token) { const p = req.game.playerByToken(token); if (p) req.game.connectPlayer(p.id); }
  const send = () => res.write(`data: ${JSON.stringify(req.game.publicState(token))}\n\n`);
  send();
  const unsubscribe = req.game.subscribe(send);
  const ping = setInterval(() => res.write(': ping\n\n'), 20000);
  req.on('close', () => { clearInterval(ping); unsubscribe(); });
});

// --- API joueur ------------------------------------------------------
function requirePlayer(req, res) {
  const token = req.body.token || req.query.token;
  const p = token && req.game.playerByToken(token);
  if (!p) { res.status(403).json({ error: 'Token invalide.' }); return null; }
  return p;
}

ev.post('/api/ready', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.setReady(p.id, req.body.ready !== false); res.json({ ok: true }); });
ev.post('/api/buzz', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.buzz(p.id); res.json({ ok: true }); });
ev.post('/api/answer', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.quizAnswer(p.id, req.body.choice); res.json({ ok: true }); });

// Photos joueurs
ev.post('/api/photo/upload', (req, res, next) => photoUpload.single('photo')(req, res, next), (req, res) => {
  const token = req.body?.token;
  const p = token && req.game.playerByToken(token);
  if (!p) return res.status(403).json({ error: 'Token invalide.' });
  if (!req.file) return res.status(400).json({ error: 'Aucune image reçue.' });
  const missionIdx = parseInt(req.body.missionIdx || '0', 10);
  const missions = req.game.photoActiveChallenges();
  const mission = missions[missionIdx] || null;
  const photo = {
    id: `ph_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    playerId: p.id, playerName: p.name, avatar: p.avatar, missionIdx,
    missionLabel: mission?.label || `Défi #${missionIdx + 1}`,
    filename: req.file.filename, url: `/e/${req.eventId}/uploads/${req.file.filename}`,
    uploadedAt: Date.now(),
  };
  req.game.addPhoto(photo);
  res.json({ ok: true, photo });
});
ev.post('/api/photo/vote', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json({ ok: req.game.castPhotoVote(p.id, req.body.photoId, req.body.challengeIdx) }); });
ev.post('/api/photo/openvote', (req, res) => { req.game.setPhotoPhase('vote'); res.json({ ok: true }); });

// Blind-test dynamique (la borne collecte les titres)
ev.post('/api/blindtest/addtrack', (req, res) => { const { theme, videoId, videoTitle } = req.body || {}; req.game.addPlaylistTrack(theme, videoId, videoTitle); res.json({ ok: true, total: req.game.themeTrackCount(theme) }); });
ev.post('/api/blindtest/playlist', async (req, res) => { const theme = req.body?.theme || 'rock'; const ids = Array.isArray(req.body?.ids) ? req.body.ids : []; const added = await req.game.ingestPlaylist(theme, ids); res.json({ ok: true, total: req.game.themeTrackCount(theme), added }); });

// Spotlight
ev.post('/api/spotlight/vote', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.spotlightVote(p.id, req.body.verdict); res.json({ ok: true }); });

// Sans Filtre !? — réponse secrète (oui/non) puis pari sur le nombre de OUI.
ev.post('/api/privacy/answer', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.privacyAnswer(p.id, !!req.body.yes); res.json({ ok: true }); });
ev.post('/api/privacy/guess', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.privacyGuess(p.id, req.body.n); res.json({ ok: true }); });

// Bouche-Trou !? — le joueur joue une/des carte(s) ; l'arbitre élit la gagnante.
ev.post('/api/carton/play', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.cartonPlay(p.id, req.body.cards)); });
ev.post('/api/carton/pick', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.cartonPick(p.id, req.body.choice)); });

// TTMC — le joueur choisit un thème, mise, puis répond.
ev.post('/api/ttcq/selectTheme', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.ttcqSelectTheme(p.id, req.body.themeId)); });
ev.post('/api/ttcq/bet', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.ttcqBet(p.id, req.body.level)); });
ev.post('/api/ttcq/answer', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.ttcqAnswer(p.id, req.body.text)); });

// Un Seul Mot !? — un indice (un seul mot) pour tous sauf le devineur, qui propose sa réponse.
ev.post('/api/justone/clue', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.justoneClue(p.id, req.body.text)); });
ev.post('/api/justone/guess', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.justoneGuess(p.id, req.body.text)); });

// Mini-jeux & collaboratifs (manettes)
ev.post('/api/pacman/dir', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.pacmanDir(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/tetris/move', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.tetrisMove(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/tron/move', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.tronMove(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/2048/move', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.g2048Move(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/pong/move', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.pongMove(p.id, req.body.dir); res.json({ ok: true }); });
ev.post('/api/mosaic/guess', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.mosaicGuess(p.id, req.body.text || '')); });
ev.post('/api/draw/update', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.drawUpdate(p.id, req.body.strokes); res.json({ ok: true }); });
ev.post('/api/draw/guess', (req, res) => { const p = requirePlayer(req, res); if (!p) return; res.json(req.game.drawGuess(p.id, req.body.text || '')); });
ev.post('/api/music/press', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.musicPress(p.id, req.body.index); res.json({ ok: true }); });
ev.post('/api/piano/press', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.pianoPress(p.id, req.body.off); res.json({ ok: true }); });
ev.post('/api/piano/replay', (req, res) => { const p = requirePlayer(req, res); if (!p) return; req.game.pianoDemo(); res.json({ ok: true }); });

// =====================================================================
//  CONSOLE ADMIN DE L'ÉVÉNEMENT (config + pilotage GM)
// =====================================================================
// Métadonnées (l'UI sait si un mot de passe est requis)
ev.get('/api/admin/meta', (req, res) => {
  const plan = getPlan(req.cfg.plan || 'free');
  res.json({
    needsPassword: !!req.cfg.adminPassword, name: req.cfg.name, theme: req.cfg.theme,
    themes: allowedThemes(req.cfg.plan || 'free'), allThemes: ALL_THEMES,
    plan: req.cfg.plan || 'free', planLabel: plan.label, planLimits: plan.limits || {},
    planPrice: plan.price || 0, payLink: plan.payLink || '', currency: getPricing().currency || 'EUR',
    paypalButtonId: plan.paypalButtonId || '', paypalClientId: getPricing().paypalClientId || '',
    paymentStatus: req.cfg.paymentStatus || 'free',
    adultParty: !!req.cfg.adultParty,
    adultPaymentStatus: req.cfg.adultPaymentStatus || 'none',
    adultVerified: !!req.cfg.adultVerified,
    adultPayLink: getPricing().adultPayLink || '',
    adultPaypalButtonId: getPricing().adultPaypalButtonId || '',
    emailVerified: req.cfg.emailVerified !== false,
    contactEmail: req.cfg.contactEmail || '',
  });
});

// Récupère la config complète (protégée)
ev.get('/api/admin/config', (req, res) => { if (!requireEventAdmin(req, res)) return; res.json({ config: req.cfg, defaultAvatars: DEFAULT_AVATARS, defaultBlindtests: defaultPlaylistsMap() }); });

// Enregistre la config (protégée) — fusionne puis recharge le GameState à chaud.
ev.post('/api/admin/config', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const patch = req.body.config || {};
  const cfg = { ...req.cfg };
  for (const k of ['name', 'theme', 'publicUrl', 'adminPassword', 'settings', 'players', 'activities', 'content', 'avatars', 'onboarded']) {
    if (patch[k] !== undefined) cfg[k] = patch[k];
  }
  if (!THEMES.includes(cfg.theme)) cfg.theme = 'retro';
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.json({ ok: true });
});

// Importe le contenu par défaut (ou vide) dans l'événement.
ev.post('/api/admin/seed', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const cfg = { ...req.cfg, content: req.body.mode === 'empty' ? emptyContent() : defaultContent() };
  saveConfig(cfg); reloadConfig(cfg.id);
  res.json({ ok: true, content: cfg.content });
});

// Validation 18+ (protégée par le mot de passe console de l'événement).
ev.post('/api/admin/adult-payment', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const cfg = getConfig(req.eventId);
  cfg.adultPaymentStatus = 'paid';
  cfg.adultVerified = true;
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.json({ ok: true, adultVerified: true });
});

// --- Avatars personnalisés ------------------------------------------
ev.post('/api/admin/avatars', avatarUpload.single('image'), (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  if (!req.file) return res.status(400).json({ error: 'Image requise.' });
  const name = (req.body.name || '').trim();
  if (!name) return res.status(400).json({ error: 'Nom de l\'avatar requis.' });
  const cfg = getConfig(req.eventId);
  const key = 'custom_' + Date.now();
  const imgUrl = `/e/${req.eventId}/uploads/avatars/${req.file.filename}`;
  cfg.avatars = cfg.avatars || {};
  cfg.avatars[key] = { name, img: imgUrl, color: req.body.color || '#8b5cf6', emoji: req.body.emoji || '🎭', custom: true };
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.json({ ok: true, key, avatar: cfg.avatars[key] });
});

ev.delete('/api/admin/avatars/:key', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const cfg = getConfig(req.eventId);
  const key = req.params.key;
  if (!cfg.avatars || !cfg.avatars[key] || !cfg.avatars[key].custom) {
    return res.status(400).json({ error: 'Avatar introuvable ou non personnalisé.' });
  }
  delete cfg.avatars[key];
  saveConfig(cfg);
  reloadConfig(cfg.id);
  res.json({ ok: true });
});

// --- Upload d'une vidéo d'anecdote « Breaking News » (max 200 Mo) -----
ev.post('/api/admin/anecdote-upload', (req, res, next) => anecUpload.single('video')(req, res, (err) => {
  if (err) return res.status(400).json({ error: err.code === 'LIMIT_FILE_SIZE' ? 'Vidéo trop lourde (max 200 Mo).' : err.message });
  next();
}), (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  if (!req.file) return res.status(400).json({ error: 'Aucune vidéo reçue (formats vidéo uniquement).' });
  res.json({ ok: true, url: `/e/${req.eventId}/uploads/anecdotes/${req.file.filename}` });
});

// --- Construction du bloc avatar pour les emails d'invitation ---
function buildAvatarHtml(cfg, player) {
  const av = (cfg.avatars || {})[player.avatar] || {};
  let html = av.img
    ? `<img src="${av.img}" style="width:64px;height:64px;border-radius:12px;object-fit:cover;vertical-align:middle;margin-right:8px">`
    : (av.emoji ? `<span style="font-size:40px">${av.emoji}</span>` : '🎮');
  if (av.name) html += `<p style="margin:6px 0;font-weight:700;font-size:16px">${av.name}</p>`;
  return html;
}

ev.post('/api/admin/send-invite', async (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const cfg = req.cfg;
  const { token } = req.body || {};
  const player = (cfg.players || []).find(p => p.token === token);
  if (!player) return res.status(404).json({ error: 'Joueur introuvable.' });
  if (!player.email) return res.status(400).json({ error: 'Ce joueur n\'a pas d\'email renseigné.' });
  const proto = req.get('x-forwarded-proto') || req.protocol;
  const host = req.get('x-forwarded-host') || req.get('host');
  const baseUrl = process.env.PUBLIC_URL || `${proto}://${host}`;
  const joinUrl = `${baseUrl}/e/${cfg.id}/j/${player.token}`;
  const itpl = getEmailTemplates().invite;
  const avatarHtml = buildAvatarHtml(cfg, player);
  try {
    await sendMail({
      to: player.email,
      subject: fillTemplate(itpl.subject, { eventName: cfg.name }),
      htmlContent: fillTemplate(itpl.html, { eventName: cfg.name, playerName: player.name, playerAvatar: avatarHtml, joinUrl }),
    });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

ev.post('/api/admin/send-invites-all', async (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const cfg = req.cfg;
  const proto = req.get('x-forwarded-proto') || req.protocol;
  const host = req.get('x-forwarded-host') || req.get('host');
  const baseUrl = process.env.PUBLIC_URL || `${proto}://${host}`;
  const players = (cfg.players || []).filter(p => p.email);
  const noEmail = (cfg.players || []).length - players.length;
  const itpl = getEmailTemplates().invite;
  let sent = 0, errors = 0;
  for (const player of players) {
    const joinUrl = `${baseUrl}/e/${cfg.id}/j/${player.token}`;
    const avatarHtml = buildAvatarHtml(cfg, player);
    try {
      await sendMail({
        to: player.email,
        subject: fillTemplate(itpl.subject, { eventName: cfg.name }),
        htmlContent: fillTemplate(itpl.html, { eventName: cfg.name, playerName: player.name, playerAvatar: avatarHtml, joinUrl }),
      });
      sent++;
    } catch { errors++; }
  }
  res.json({ ok: true, sent, errors, noEmail });
});

// QR code d'un joueur (data URL) à partir de son token + publicUrl de l'événement.
ev.get('/api/admin/qr/:token', async (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const base = req.cfg.publicUrl || `${req.protocol}://${req.get('host')}`;
  const joinUrl = `${base}/e/${req.eventId}/j/${req.params.token}`;
  let qr = null;
  try { qr = await QRCode.toDataURL(joinUrl, { margin: 1, width: 260 }); } catch {}
  res.json({ joinUrl, qr });
});

// Bloc « maître » (réponse de quiz, mot de mosaïque, etc.) pour la console GM.
ev.get('/api/admin/gmstate', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const g = req.game;
  const q = g.quizQuestion();
  const a = g.activity;
  res.json({
    ...g.publicState(),
    quizMaster: q ? { sub: a?.sub, qIndex: a?.qIndex, prompt: q.prompt, play: q.play || null, bonneReponse: q.choices[q.answer] } : null,
    mosaicWord: a && a.type === 'mosaic' ? a.word : null,
    drawWord: a && a.type === 'draw' ? a.word : null,
    playlistTrackCount: g.themeTrackCount(a?.type === 'blindtest' ? a.theme : null),
  });
});

// Renvoi de l'email de vérification (depuis la console de l'événement).
ev.post('/api/admin/resend-verification', async (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const cfg = req.cfg;
  if (cfg.emailVerified !== false) return res.json({ ok: true, alreadyVerified: true });
  if (!cfg.contactEmail) return res.status(400).json({ error: 'Aucun email de contact configuré.' });
  const proto = req.get('x-forwarded-proto') || req.protocol;
  const host = req.get('x-forwarded-host') || req.get('host');
  const baseUrl = process.env.PUBLIC_URL || `${proto}://${host}`;
  const verifyUrl = `${baseUrl}/verify/${cfg.verificationToken}`;
  const consoleUrl = `${baseUrl}/e/${cfg.id}/admin`;
  const borneUrl = `${baseUrl}/e/${cfg.id}/borne`;
  const planInfo = (getPricing().plans || {})[cfg.plan] || {};
  const tpl = getEmailTemplates().verify;
  try {
    await sendMail({
      to: cfg.contactEmail,
      subject: fillTemplate(tpl.subject, { eventName: cfg.name }),
      htmlContent: fillTemplate(tpl.html, { eventName: cfg.name, eventId: cfg.id, verifyUrl, consoleUrl, borneUrl, planLabel: planInfo.label || cfg.plan }),
    });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Actions de pilotage GM (protégées).
ev.post('/api/admin/action', (req, res) => {
  if (!requireEventAdmin(req, res)) return;
  const g = req.game;
  const { action, payload = {} } = req.body;
  // Bloquer toute action de jeu tant que l'email n'est pas vérifié — sauf la
  // simulation (test solo/démo), utile pour découvrir la console avant de
  // confirmer son email.
  const SIM_ACTIONS = new Set(['simStart', 'simStop']);
  if (req.cfg.emailVerified === false && !SIM_ACTIONS.has(action)) {
    return res.status(403).json({ error: 'Vérifiez votre email avant de démarrer la soirée.' });
  }
  if (req.cfg.closed && ['start', 'startActivity', 'scoreboard', 'hub'].includes(action)) {
    return res.status(403).json({ error: 'Cette fête est terminée. Les jeux ne sont plus disponibles.' });
  }
  switch (action) {
    case 'start': g.startGame(); break;
    case 'scoreboard': g.showScoreboard(); break;
    case 'hub': g.toHub(); break;
    case 'startActivity': g.startActivity(payload.type, payload.opts || {}); break;
    case 'stopActivity': g.stopActivity(); break;
    case 'quizReveal': g.quizReveal(); break;
    case 'quizNext': g.quizNext(); break;
    case 'musicDemo': g.musicDemo(); break;
    case 'musicHint': g.musicHint(); break;
    case 'pianoDemo': g.pianoDemo(); break;
    case 'drawGage': g.drawGage(payload.pool || null, payload.targetId || null); break;
    case 'clearGage': g.clearGage(); break;
    case 'loseLife': g.loseLife(payload.playerId); break;
    case 'reset': g.reset(); break;
    case 'setPhotoPhase': g.setPhotoPhase(payload.phase ?? null); break;
    case 'setPhotoChallenges': g.setPhotoChallenges(payload.challenges); break;
    case 'setPhotoRemindMinutes': g.setPhotoRemindMinutes(payload.minutes); break;
    case 'blindtestAsk': g.blindtestAsk(); break;
    case 'spotlightOpenVote': g.spotlightOpenVote(); break;
    case 'spotlightTally': g.spotlightTally(); break;
    case 'drawNext': g.drawNext(); break;
    case 'drawReveal': g.drawReveal(); break;
    case 'privacyCloseAnswers': g.privacyCloseAnswers(); break;
    case 'privacyReveal': g.privacyReveal(); break;
    case 'privacyNext': g.privacyNext(); break;
    case 'cartonClose': g.cartonClose(); break;
    case 'cartonNext': g.cartonNext(); break;
    case 'cartonSkip': g.cartonSkip(); break;
    case 'ttcqNext': g.ttcqNext(); break;
    case 'justoneCloseClues': g.justoneCloseClues(); break;
    case 'justoneJudge': g.justoneJudge(payload.correct !== false); break;
    case 'justoneNext': g.justoneNext(); break;
    case 'justoneSkip': g.justoneSkip(); break;
    case 'ttcqSkip': g.ttcqSkip(); break;
    // Simulation : ajoute 4 joueurs de test (1 pilotable + 3 bots) dans la
    // config, puis active le pilote automatique des bots.
    case 'simStart': {
      const cfg = req.cfg;
      cfg.players = cfg.players || [];
      const avKeys = Object.keys(cfg.avatars || {});
      const ensureSim = (id, name, simBot) => {
        let p = cfg.players.find((x) => x.id === id);
        if (!p) {
          p = {
            id, name, simBot, sim: true,
            avatar: avKeys.length ? avKeys[Math.floor(Math.random() * avKeys.length)] : '',
            token: 'SIM-' + Math.random().toString(36).slice(2, 8).toUpperCase(),
          };
          cfg.players.push(p);
        }
        return p;
      };
      const hero = ensureSim('sim-hero', '🧪 Toi (test)', false);
      ensureSim('sim-bot1', '🤖 Bot Léa', true);
      ensureSim('sim-bot2', '🤖 Bot Max', true);
      ensureSim('sim-bot3', '🤖 Bot Zoé', true);
      saveConfig(cfg);
      g.applyConfig(cfg);
      g.simStart();
      return res.json({ ok: true, heroToken: hero.token });
    }
    case 'simStop': {
      const cfg = req.cfg;
      cfg.players = (cfg.players || []).filter((p) => !p.sim);
      saveConfig(cfg);
      g.simStop();
      g.applyConfig(cfg);
      g.touch();
      break;
    }
    case 'mosaicReveal': g.mosaicReveal(payload.on !== false); break;
    case 'ambientPlay': g.setAmbientPaused(false); break;
    case 'ambientStop': g.setAmbientPaused(true); break;
    default: return res.status(400).json({ error: 'Action inconnue: ' + action });
  }
  res.json({ ok: true });
});

// ---- Feedback / notation post-fête ----
ev.post('/api/feedback', (req, res) => {
  const token = req.body.token;
  const p = token && req.game.playerByToken(token);
  if (!p) return res.status(403).json({ error: 'Token invalide.' });
  const cfg = req.cfg;
  if (!cfg.closed) return res.status(400).json({ error: 'La fête n\'est pas encore terminée.' });
  const { rating, comment } = req.body;
  const feedback = cfg.feedback || [];
  const existing = feedback.findIndex(f => f.playerId === p.id);
  const entry = { playerId: p.id, playerName: p.name, rating: rating || null, comment: comment || '', createdAt: Date.now() };
  if (existing >= 0) feedback[existing] = entry;
  else feedback.push(entry);
  cfg.feedback = feedback;
  saveConfig(cfg);
  res.json({ ok: true });
});

// ---- Feedback public (via la page publique /e/:id/resultats) ----
ev.post('/api/public-feedback', (req, res) => {
  const cfg = req.cfg;
  const { rating, comment } = req.body || {};
  if (!rating || rating < 1 || rating > 5) return res.status(400).json({ error: 'Note entre 1 et 5 requise.' });
  const feedback = cfg.feedback || [];
  const entry = { playerId: '', playerName: '', rating: Number(rating), comment: comment || '', createdAt: Date.now() };
  feedback.push(entry);
  cfg.feedback = feedback;
  saveConfig(cfg);
  res.json({ ok: true });
});

// ---- Feedback public (aucun auth requis) ----
app.post('/api/public-feedback', (req, res) => {
  const { eventId, rating, comment } = req.body || {};
  if (!eventId) return res.status(400).json({ error: 'ID de la fête requis.' });
  if (!rating || rating < 1 || rating > 5) return res.status(400).json({ error: 'Note entre 1 et 5 requise.' });
  const cfg = getConfig(eventId);
  if (!cfg) return res.status(404).json({ error: 'Fête inconnue.' });
  const feedback = cfg.feedback || [];
  const entry = { playerId: '', playerName: comment?.startsWith('[') ? comment.split(']')[0].slice(1) : '', rating: Number(rating), comment: comment || '', createdAt: Date.now() };
  feedback.push(entry);
  cfg.feedback = feedback;
  saveConfig(cfg);
  res.json({ ok: true });
});

// ---- Stats générales (admin seulement) ----
app.get('/api/admin/stats', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const events = listEvents();
  let allFeedback = [];
  const perEvent = [];
  for (const e of events) {
    const cfg = getConfig(e.id);
    if (!cfg || !cfg.feedback || !cfg.feedback.length) continue;
    const ratings = cfg.feedback.map(f => f.rating).filter(r => r && r >= 1 && r <= 5);
    if (!ratings.length) continue;
    allFeedback = allFeedback.concat(cfg.feedback);
    perEvent.push({
      id: cfg.id, name: cfg.name,
      count: ratings.length,
      avg: (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1),
      distribution: [1,2,3,4,5].map(n => ratings.filter(r => Math.round(r) === n).length),
    });
  }
  const allRatings = allFeedback.map(f => f.rating).filter(r => r && r >= 1 && r <= 5);
  res.json({
    totalFeedback: allFeedback.length,
    totalRatings: allRatings.length,
    avgRating: allRatings.length ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1) : '—',
    distribution: [1,2,3,4,5].map(n => allRatings.filter(r => Math.round(r) === n).length),
    perEvent: perEvent.sort((a, b) => b.count - a.count),
  });
});

// ---- Vérification de clôture J+1 ----
function closeExpiredParties() {
  const now = Date.now();
  for (const e of listEvents()) {
    const cfg = getConfig(e.id);
    if (!cfg || cfg.closed || !cfg.partyDate) continue;
    // partyDate est "YYYY-MM-DD", minuit local → 1 jour après = +24h
    const partyEnd = new Date(cfg.partyDate + 'T23:59:59').getTime();
    if (now > partyEnd + 86400000 * 2) {
      cfg.closed = true;
      cfg.closedAt = now;
      // Envoi d'email aux joueurs avec email (non-bloquant)
      const players = (cfg.players || []).filter(p => p.email);
      if (players.length) {
        const base = cfg.publicUrl || `http://localhost:${PORT}`;
        const rtpl = getEmailTemplates().recap;
        for (const p of players) {
          const resultsUrl = `${base}/e/${cfg.id}/j/${p.token}#resultats`;
          sendMail({
            to: p.email,
            subject: fillTemplate(rtpl.subject, { eventName: cfg.name }),
            htmlContent: fillTemplate(rtpl.html, { eventName: cfg.name, playerName: p.name, resultsUrl, baseUrl: base }),
          }).catch(() => {});
        }
      }
      saveConfig(cfg);
      if (getGame(cfg.id)) reloadConfig(cfg.id);
    }
  }
}
closeExpiredParties();
setInterval(closeExpiredParties, 3600000);

// ---- Envoi automatique des emails J-7 et J-1 ----
function runAutoEmails() {
  const events = listEvents().map(e => ({ cfg: getConfig(e.id), id: e.id, name: getConfig(e.id)?.name, adminEmail: getConfig(e.id)?.adminEmail })).filter(e => e.cfg && e.adminEmail);
  sendAutoEmails(events, {
    sendMail: (eventId, to, subject, html) => sendMail({ to, subject, htmlContent: html, tags: ['auto-email', eventId] }),
    saveConfig: cfg => saveConfig(cfg),
  });
}
runAutoEmails();
setInterval(runAutoEmails, 3600000);

app.listen(PORT, () => {
  console.log(`\n🎉  Plateforme multi-événements en ligne`);
  console.log(`   Admin général : http://localhost:${PORT}/admin`);
  console.log(`   (événement)   : http://localhost:${PORT}/e/<id>/borne | /admin | /j/<token>\n`);
});
