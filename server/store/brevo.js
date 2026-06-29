import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CFG_PATH = path.join(__dirname, '..', 'brevo.json');

const DEFAULTS = {
  apiKey: process.env.BREVO_API_KEY || '',
  senderName: 'PartyPlay',
  senderEmail: process.env.BREVO_SENDER || 'noreply@partyplay.fr',
};

export function getBrevoConfig() {
  try { return { ...DEFAULTS, ...JSON.parse(readFileSync(CFG_PATH, 'utf8')) }; } catch { return { ...DEFAULTS }; }
}

export function saveBrevoConfig({ apiKey, senderName, senderEmail }) {
  const cur = getBrevoConfig();
  writeFileSync(CFG_PATH, JSON.stringify({
    apiKey: apiKey !== undefined ? apiKey : cur.apiKey,
    senderName: senderName || cur.senderName,
    senderEmail: senderEmail || cur.senderEmail,
  }, null, 2));
}

function normalizeRecipients(to) {
  if (typeof to === 'string') {
    return to.split(',').map(e => e.trim()).filter(Boolean).map(e => ({ email: e }));
  }
  if (Array.isArray(to)) {
    return to.map(r => typeof r === 'string' ? { email: r.trim() } : r).filter(r => r && r.email);
  }
  return [{ email: String(to) }];
}

export async function sendMail({ to, subject, htmlContent }) {
  const cfg = getBrevoConfig();
  if (!cfg.apiKey) throw new Error('Clé API Brevo non configurée — renseignez-la dans Administration > Emails.');
  const recipients = normalizeRecipients(to);
  if (!recipients.length) throw new Error('Aucun destinataire valide.');
  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': cfg.apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: cfg.senderName, email: cfg.senderEmail },
      to: recipients,
      subject,
      htmlContent: htmlContent || '<p></p>',
    }),
  });
  if (!r.ok) {
    let msg = `Erreur Brevo (${r.status})`;
    try { const d = await r.json(); msg = d.message || msg; } catch {}
    throw new Error(msg);
  }
  return r.json();
}
