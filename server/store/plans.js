// =====================================================================
//  Plans tarifaires + application des limites.
//    - free     : gratuit, limité (joueurs / activités / thèmes / photo)
//    - full     : fête complète payante (one-shot) — tout débloqué
//    - infinite : abonnement « illimité premium » — tout + premium
//  Les prix et limites sont RÉGLABLES via l'admin des tarifs (pricing.json).
// =====================================================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRICING_FILE = path.join(__dirname, '..', 'pricing.json');

export const ALL_THEMES = ['retro', 'neon', 'chic', 'kids', 'casino'];
// Ordre canonique des activités (sert au plafonnement du plan gratuit).
export const ACTIVITY_ORDER = ['quiz', 'anecdotes', 'gages', 'blindtest', 'photo', 'spotlight', 'draw', 'arcade', 'collab'];

// Valeurs par défaut (éditables ensuite dans l'admin des tarifs).
//  limits.maxPlayers / maxActivities : 0 = illimité.
//  limits.themes : tableau autorisé OU 'all'.
//  limits.photo : défi photo + galerie autorisés ?
export function defaultPricing() {
  return {
    currency: 'EUR',
    freeMode: true,       // Mode bêta : tout gratuit, aucune limite, aucun paiement demandé
    coffeeLink: '',       // Lien PayPal "offre un café" (vide = bouton masqué)
    // Client-id PUBLIC du SDK PayPal (boutons hébergés) — commun à toutes les formules.
    paypalClientId: 'BAA_GeyiQBhixTJkBdublBYuTB6Pi2uvxexEh9DGqD2myYGv_kQ36N4cdyyB_a_wwXl7kXq_Gc1b3v4JXc',
    plans: {
      free: {
        label: 'Gratuit', price: 0, kind: 'free', premium: false, payLink: '', paypalButtonId: '',
        tagline: 'Pour tester en petit comité.',
        limits: { maxPlayers: 4, maxActivities: 3, themes: ['retro'], photo: false },
      },
      full: {
        label: 'Fête complète', price: 1.99, kind: 'oneshot', premium: false,
        payLink: 'https://pay.sumup.com/b2c/Q7588E2D',
        paypalButtonId: 'BCJYT88CQHEX8',
        tagline: 'Une fête, tout débloqué.',
        limits: { maxPlayers: 0, maxActivities: 0, themes: 'all', photo: true },
      },
      infinite: {
        label: 'Illimité Premium', price: 9.99, kind: 'oneshot', premium: true,
        payLink: 'https://pay.sumup.com/b2c/QXD1ZZ45',
        paypalButtonId: 'GDRAYFJFQHCH4',
        tagline: 'Toutes vos fêtes, en illimité + premium.',
        limits: { maxPlayers: 0, maxActivities: 0, themes: 'all', photo: true },
      },
    },
  };
}

export function getPricing() {
  try {
    if (fs.existsSync(PRICING_FILE)) {
      const data = JSON.parse(fs.readFileSync(PRICING_FILE, 'utf8'));
      const def = defaultPricing();
      // Fusion PROFONDE : un pricing.json ancien (sans payLink/paypalButtonId/…)
      // hérite quand même des champs par défaut, par plan.
      const plans = {};
      const keys = new Set([...Object.keys(def.plans), ...Object.keys(data.plans || {})]);
      for (const k of keys) {
        const dp = def.plans[k] || {}, sp = (data.plans || {})[k] || {};
        plans[k] = { ...dp, ...sp, limits: { ...(dp.limits || {}), ...(sp.limits || {}) } };
      }
      return {
        ...def, ...data,
        paypalClientId: data.paypalClientId || def.paypalClientId,
        plans,
      };
    }
  } catch (e) { console.error('pricing.json illisible:', e.message); }
  return defaultPricing();
}

export function savePricing(pricing) {
  fs.writeFileSync(PRICING_FILE, JSON.stringify(pricing, null, 2));
  return pricing;
}

export function getPlan(name) {
  const p = getPricing();
  return p.plans[name] || p.plans.free;
}

export function planExists(name) { return !!getPricing().plans[name]; }

export function isFreeMode() { return !!getPricing().freeMode; }

// Thèmes autorisés pour un plan donné (tout en mode gratuit).
export function allowedThemes(planName) {
  if (isFreeMode()) return ALL_THEMES.slice();
  const lim = getPlan(planName).limits || {};
  return lim.themes === 'all' || !Array.isArray(lim.themes) ? ALL_THEMES.slice() : lim.themes.slice();
}

// Applique les limites du plan. En mode gratuit : aucune restriction.
export function enforcePlan(cfg) {
  if (isFreeMode()) {
    cfg.premium = true;
    return cfg;
  }
  const plan = getPlan(cfg.plan || 'free');
  const lim = plan.limits || {};
  cfg.premium = !!plan.premium;

  // Thème
  const themes = allowedThemes(cfg.plan || 'free');
  if (!themes.includes(cfg.theme)) cfg.theme = themes[0] || 'retro';

  // Activités
  cfg.activities = cfg.activities || {};
  if (lim.photo === false) cfg.activities.photo = false;
  const max = lim.maxActivities || 0;
  if (max > 0) {
    let kept = 0;
    for (const key of ACTIVITY_ORDER) {
      if (cfg.activities[key]) {
        if (kept < max) kept++;
        else cfg.activities[key] = false;
      }
    }
  }

  // Joueurs
  const maxP = lim.maxPlayers || 0;
  if (maxP > 0 && Array.isArray(cfg.players) && cfg.players.length > maxP) {
    cfg.players = cfg.players.slice(0, maxP);
  }
  return cfg;
}
