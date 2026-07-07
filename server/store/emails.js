import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EMAILS_FILE = path.join(__dirname, '..', 'emails.json');

const DEFAULT_TEMPLATES = {
  verify: {
    subject: "Votre fête « {{eventName}} » sur PartyPlay — confirmez votre email",
    html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:540px;margin:0 auto;color:#1f2430">
  <div style="background:#3b6ef5;border-radius:12px 12px 0 0;padding:28px 28px 20px;text-align:center">
    <p style="color:#c7d7ff;font-size:13px;margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">PartyPlay</p>
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">🎉 Votre fête est créée !</h1>
  </div>
  <div style="background:#fff;border:1px solid #e2e5ea;border-top:none;border-radius:0 0 12px 12px;padding:28px">
    <p style="margin:0 0 6px">Bonjour,</p>
    <p style="margin:0 0 20px">La fête <strong>« {{eventName}} »</strong> a bien été créée. Voici toutes vos informations :</p>
    <table style="width:100%;border-collapse:collapse;background:#f8f9fb;border-radius:9px;padding:4px 4px 4px 12px;margin-bottom:20px">
      <tbody>
        <tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;font-size:13.5px">Identifiant</td><td style="padding:6px 0;font-weight:600;color:#1f2430;word-break:break-all;font-size:13.5px"><code style="background:#e8ebf0;padding:2px 6px;border-radius:4px;font-size:13px">{{eventId}}</code></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;font-size:13.5px">Formule</td><td style="padding:6px 0;font-weight:600;color:#1f2430;word-break:break-all;font-size:13.5px">{{planLabel}}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;font-size:13.5px">Console admin</td><td style="padding:6px 0;font-weight:600;color:#1f2430;word-break:break-all;font-size:13.5px"><a href="{{consoleUrl}}" style="color:#3b6ef5">{{consoleUrl}}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;font-size:13.5px">Borne joueurs</td><td style="padding:6px 0;font-weight:600;color:#1f2430;word-break:break-all;font-size:13.5px"><a href="{{borneUrl}}" style="color:#3b6ef5">{{borneUrl}}</a></td></tr>
      </tbody>
    </table>
    <p style="margin:0 0 8px;font-weight:600">📧 Confirmez votre email pour activer la fête</p>
    <p style="margin:0 0 20px;font-size:13.5px;color:#555">Le démarrage est bloqué jusqu'à confirmation :</p>
    <p style="text-align:center;margin:0 0 20px">
      <a href="{{verifyUrl}}" style="display:inline-block;background:#3b6ef5;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:16px">✅ Confirmer mon email</a>
    </p>
    <p style="font-size:12px;color:#9ca3af;margin:0 0 4px">Lien de confirmation :</p>
    <p style="font-size:12px;margin:0 0 20px"><a href="{{verifyUrl}}" style="color:#3b6ef5;word-break:break-all">{{verifyUrl}}</a></p>
    <hr style="border:none;border-top:1px solid #e2e5ea;margin:0 0 16px">
    <p style="font-size:12px;color:#9ca3af;margin:0">Si vous n'avez pas créé cette fête, ignorez cet email.</p>
  </div>
</div>`,
  },
  invite: {
    subject: "Tu es invité(e) à « {{eventName}} » — ton lien de jeu",
    html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;color:#1f2430">
  <div style="background:#3b6ef5;border-radius:12px 12px 0 0;padding:28px 28px 20px;text-align:center">
    <p style="color:#c7d7ff;font-size:13px;margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">PartyPlay</p>
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">Tu es invité(e) à jouer ! 🎉</h1>
  </div>
  <div style="background:#fff;border:1px solid #e2e5ea;border-top:none;border-radius:0 0 12px 12px;padding:28px">
    <p>Bonjour <strong>{{playerName}}</strong>,</p>
    <p>Tu as été ajouté(e) à la fête <strong>« {{eventName}} »</strong> sur PartyPlay.</p>
    <div style="text-align:center;margin:16px 0">{{playerAvatar}}</div>
    <p>Clique sur le bouton ci-dessous pour rejoindre depuis ton téléphone :</p>
    <p style="text-align:center;margin:24px 0">
      <a href="{{joinUrl}}" style="display:inline-block;background:#3b6ef5;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:16px">🎮 Rejoindre la fête</a>
    </p>
    <p style="font-size:12px;color:#9ca3af;margin:0 0 4px">Lien de connexion :</p>
    <p style="font-size:12px;margin:0"><a href="{{joinUrl}}" style="color:#3b6ef5;word-break:break-all">{{joinUrl}}</a></p>
    <hr style="border:none;border-top:1px solid #e2e5ea;margin:20px 0">
    <p style="font-size:12px;color:#9ca3af;margin:0">Ce lien est personnel — ne le partage pas avec d'autres joueurs.</p>
  </div>
</div>`,
  },
  recap: {
    subject: "Merci d'avoir joué à « {{eventName}} » ! 🎉",
    html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;color:#1f2430">
  <div style="background:#8b5cf6;border-radius:12px 12px 0 0;padding:28px 28px 20px;text-align:center">
    <p style="color:#ddd6fe;font-size:13px;margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">PartyPlay</p>
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">🎉 La fête est finie !</h1>
  </div>
  <div style="background:#fff;border:1px solid #e2e5ea;border-top:none;border-radius:0 0 12px 12px;padding:28px">
    <p>Bonjour <strong>{{playerName}}</strong>,</p>
    <p>Merci d'avoir joué à <strong>« {{eventName}} »</strong> sur PartyPlay !</p>
    <p style="text-align:center;margin:24px 0">
      <a href="{{resultsUrl}}" style="display:inline-block;background:#8b5cf6;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:16px">📸 Voir les photos et résultats</a>
    </p>
    <p>⭐ <a href="{{resultsUrl}}">Donner ton avis et noter l'application</a></p>
    <hr style="border:none;border-top:1px solid #e2e5ea;margin:20px 0">
    <p style="color:#888">Toi aussi, organise une fête gratuitement sur <a href="{{baseUrl}}">PartyPlay</a> !</p>
  </div>
</div>`,
  },
  welcome: {
    subject: "🎊 Votre fête « {{eventName}} » est prête !",
    html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:540px;margin:0 auto;color:#1f2430">
  <div style="background:#3b6ef5;border-radius:12px 12px 0 0;padding:28px 28px 20px;text-align:center">
    <p style="color:#c7d7ff;font-size:13px;margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">PartyPlay</p>
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">🎉 Votre fête est créée !</h1>
  </div>
  <div style="background:#fff;border:1px solid #e2e5ea;border-top:none;border-radius:0 0 12px 12px;padding:28px">
    <p style="margin:0 0 6px">Bonjour,</p>
    <p style="margin:0 0 20px">La fête <strong>« {{eventName}} »</strong> a bien été créée. Voici toutes vos informations :</p>
    <table style="width:100%;border-collapse:collapse;background:#f8f9fb;border-radius:9px;padding:4px 4px 4px 12px;margin-bottom:20px">
      <tbody>
        <tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;font-size:13.5px">Identifiant</td><td style="padding:6px 0;font-weight:600;color:#1f2430;word-break:break-all;font-size:13.5px"><code style="background:#e8ebf0;padding:2px 6px;border-radius:4px;font-size:13px">{{eventId}}</code></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;font-size:13.5px">Formule</td><td style="padding:6px 0;font-weight:600;color:#1f2430;word-break:break-all;font-size:13.5px">{{planLabel}}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;font-size:13.5px">Console admin</td><td style="padding:6px 0;font-weight:600;color:#1f2430;word-break:break-all;font-size:13.5px"><a href="{{consoleUrl}}" style="color:#3b6ef5">{{consoleUrl}}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;font-size:13.5px">Borne joueurs</td><td style="padding:6px 0;font-weight:600;color:#1f2430;word-break:break-all;font-size:13.5px"><a href="{{borneUrl}}" style="color:#3b6ef5">{{borneUrl}}</a></td></tr>
      </tbody>
    </table>
    <p>Vous pouvez dès maintenant inviter vos joueurs et préparer vos activités !</p>
    <hr style="border:none;border-top:1px solid #e2e5ea;margin:0 0 16px">
    <p style="font-size:12px;color:#9ca3af;margin:0">Si vous n'avez pas créé cette fête, ignorez cet email.</p>
  </div>
</div>`,
  },
};

export function getEmailTemplates() {
  try {
    const data = JSON.parse(readFileSync(EMAILS_FILE, 'utf8'));
    return { ...DEFAULT_TEMPLATES, ...data };
  } catch {
    return { ...DEFAULT_TEMPLATES };
  }
}

export function saveEmailTemplates(templates) {
  const clean = {};
  for (const key of Object.keys(DEFAULT_TEMPLATES)) {
    if (templates[key]) {
      clean[key] = {
        subject: String(templates[key].subject || '').trim().slice(0, 200) || DEFAULT_TEMPLATES[key].subject,
        html: String(templates[key].html || '').trim() || DEFAULT_TEMPLATES[key].html,
      };
    }
  }
  writeFileSync(EMAILS_FILE, JSON.stringify(clean, null, 2));
  return clean;
}

export function fillTemplate(html, vars) {
  let result = html;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp('{{' + key + '}}', 'g'), String(value ?? ''));
  }
  return result;
}
