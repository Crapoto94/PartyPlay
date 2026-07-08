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
    <div style="background:#f8f9fb;border-radius:9px;padding:12px;margin-bottom:20px">
      <p style="margin:4px 0"><strong>Identifiant :</strong> <code style="background:#e8ebf0;padding:2px 6px;border-radius:4px;font-size:13px">{{eventId}}</code></p>
      <p style="margin:4px 0"><strong>Formule :</strong> {{planLabel}}</p>
      <p style="margin:4px 0"><strong>Console admin :</strong> <a href="{{consoleUrl}}" style="color:#3b6ef5">{{consoleUrl}}</a></p>
      <p style="margin:4px 0"><strong>Borne joueurs :</strong> <a href="{{borneUrl}}" style="color:#3b6ef5">{{borneUrl}}</a></p>
    </div>
    <p style="margin:0 0 8px;font-weight:600">📧 Confirmez votre email pour activer la fête</p>
    <p style="margin:0 0 20px;font-size:13.5px;color:#555">Le démarrage est bloqué jusqu'à confirmation :</p>
    <p style="text-align:center;margin:15px 0">
      <a href="{{verifyUrl}}" style="display:inline-block;background:#3b6ef5;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:16px">✅ Confirmer mon email</a>
    </p>
    <hr style="border:none;border-top:1px solid #e2e5ea;margin:20px 0">
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
    <p style="margin:16px 0 6px;font-weight:600">💡 Pour personnaliser votre fête :</p>
    <ul style="margin:0 0 20px;padding-left:20px;font-size:14px;line-height:1.7">
      <li>📹 Demandez à vos invités d'enregistrer une anecdote face caméra (on vous explique comment dans l'admin)</li>
      <li>🎯 Créez un quiz personnalisé avec vos propres questions !</li>
      <li>🎵 Ajoutez un blind test perso : il suffit de choisir une playlist YouTube/Deezer (50+ titres)</li>
    </ul>
    <p style="text-align:center;margin:0 0 16px">
      <a href="{{consoleUrl}}" style="display:inline-block;background:#3b6ef5;color:#fff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px">⚙️ Personnaliser dans l'admin</a>
    </p>
    <hr style="border:none;border-top:1px solid #e2e5ea;margin:0 0 16px">
    <p style="font-size:12px;color:#9ca3af;margin:0">Si vous n'avez pas créé cette fête, ignorez cet email.</p>
  </div>
</div>`,
  },
  dminus7: {
    subject: "J-7 — Personnalisez votre fête « {{eventName}} » ! 🎉",
    html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:540px;margin:0 auto;color:#1f2430">
  <div style="background:#3b6ef5;border-radius:12px 12px 0 0;padding:28px 28px 20px;text-align:center">
    <p style="color:#c7d7ff;font-size:13px;margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">PartyPlay</p>
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">⏰ J-7 — Personnalisez votre fête !</h1>
  </div>
  <div style="background:#fff;border:1px solid #e2e5ea;border-top:none;border-radius:0 0 12px 12px;padding:28px">
    <p style="margin:0 0 6px">Bonjour,</p>
    <p style="margin:0 0 20px">Dans une semaine, c'est la fête <strong>« {{eventName}} »</strong> ! 🎊 Rendez votre fête encore plus folle avec ces personnalisations :</p>
    <table style="width:100%;border-collapse:collapse;background:#f8f9fb;border-radius:9px;padding:0;margin-bottom:20px">
      <tbody>
        <tr><td style="padding:14px 16px;border-bottom:1px solid #e2e5ea;vertical-align:top"><strong style="font-size:18px">📹</strong></td>
            <td style="padding:14px 16px 14px 0;border-bottom:1px solid #e2e5ea;font-size:14px"><strong>Anedoctes face caméra</strong><br>Demandez à vos amis et à votre famille de raconter une anecdote sur vous face caméra (auto-filmage). Vous pouvez les lancer pendant la soirée — c'est toujours un moment génial !</td></tr>
        <tr><td style="padding:14px 16px;border-bottom:1px solid #e2e5ea;vertical-align:top"><strong style="font-size:18px">🎯</strong></td>
            <td style="padding:14px 16px 14px 0;border-bottom:1px solid #e2e5ea;font-size:14px"><strong>Quiz personnalisé</strong><br>Créez vos propres questions sur la personne fêtée ! Qui la connaît le mieux ? Dans l'admin, allez dans l'onglet Quiz et ajoutez un deck personnalisé.</td></tr>
        <tr><td style="padding:14px 16px;vertical-align:top"><strong style="font-size:18px">🎵</strong></td>
            <td style="padding:14px 16px 14px 0;font-size:14px"><strong>Blind test personnalisé</strong><br>Ajoutez un blind test en 2 clics : choisissez une playlist YouTube ou Deezer (50 titres minimum). Pas besoin de sélectionner les morceaux un par un !</td></tr>
      </tbody>
    </table>
    <p style="text-align:center;margin:0 0 20px">
      <a href="{{consoleUrl}}" style="display:inline-block;background:#10b981;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:16px">⚙️ Personnaliser maintenant</a>
    </p>
    <hr style="border:none;border-top:1px solid #e2e5ea;margin:0 0 16px">
    <p style="font-size:12px;color:#9ca3af;margin:0">Identifiant de la fête : <strong>{{eventId}}</strong></p>
  </div>
</div>`,
  },
  newParty: {
    subject: "🎉 Nouvelle fête créée : « {{eventName}} »",
    html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:540px;margin:0 auto;color:#1f2430">
  <div style="background:#10b981;border-radius:12px 12px 0 0;padding:28px 28px 20px;text-align:center">
    <p style="color:#a7f3d0;font-size:13px;margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">PartyPlay · Notification admin</p>
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">🎉 Nouvelle fête !</h1>
  </div>
  <div style="background:#fff;border:1px solid #e2e5ea;border-top:none;border-radius:0 0 12px 12px;padding:28px">
    <p style="margin:0 0 16px">Une nouvelle fête a été créée sur PartyPlay :</p>
    <table style="width:100%;border-collapse:collapse;background:#f8f9fb;border-radius:9px;padding:4px;margin-bottom:16px">
      <tbody>
        <tr><td style="padding:6px 12px;color:#6b7280;white-space:nowrap;font-size:13px">Nom</td><td style="padding:6px 12px;font-weight:600;font-size:13px">{{eventName}}</td></tr>
        <tr><td style="padding:6px 12px;color:#6b7280;white-space:nowrap;font-size:13px">ID</td><td style="padding:6px 12px;font-size:13px">{{eventId}}</td></tr>
        <tr><td style="padding:6px 12px;color:#6b7280;white-space:nowrap;font-size:13px">Email</td><td style="padding:6px 12px;font-size:13px">{{contactEmail}}</td></tr>
        <tr><td style="padding:6px 12px;color:#6b7280;white-space:nowrap;font-size:13px">Date</td><td style="padding:6px 12px;font-size:13px">{{partyDate}}</td></tr>
        <tr><td style="padding:6px 12px;color:#6b7280;white-space:nowrap;font-size:13px">Formule</td><td style="padding:6px 12px;font-size:13px">{{plan}}</td></tr>
        <tr><td style="padding:6px 12px;color:#6b7280;white-space:nowrap;font-size:13px">Thème</td><td style="padding:6px 12px;font-size:13px">{{theme}}</td></tr>
      </tbody>
    </table>
    <p style="text-align:center;margin:0">
      <a href="{{consoleUrl}}" style="display:inline-block;background:#10b981;color:#fff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px">⚙️ Voir dans l'admin</a>
    </p>
  </div>
</div>`,
  },
  dminus1: {
    subject: "C'est demain ! 🎉 « {{eventName}} » arrive !",
    html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:540px;margin:0 auto;color:#1f2430">
  <div style="background:#f59e0b;border-radius:12px 12px 0 0;padding:28px 28px 20px;text-align:center">
    <p style="color:#fde68a;font-size:13px;margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">PartyPlay</p>
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">🎊 C'est demain !</h1>
  </div>
  <div style="background:#fff;border:1px solid #e2e5ea;border-top:none;border-radius:0 0 12px 12px;padding:28px">
    <p style="margin:0 0 6px">Bonjour,</p>
    <p style="margin:0 0 20px">Rappel : la fête <strong>« {{eventName}} »</strong> a lieu <strong>demain</strong> ! 🥳</p>
    <table style="width:100%;border-collapse:collapse;background:#f8f9fb;border-radius:9px;padding:0;margin-bottom:20px">
      <tbody>
        <tr><td style="padding:14px 16px;vertical-align:top;white-space:nowrap;font-size:14px">📌 Consignes :</td>
            <td style="padding:14px 16px 14px 0;font-size:14px">
              <ul style="margin:0;padding-left:16px">
                <li>Vérifiez que vos invités ont reçu leur lien de jeu</li>
                <li>Connectez la borne (PC fixe) sur le grand écran</li>
                <li>Les joueurs jouent depuis leur téléphone</li>
                <li>Préparez les anecdotes face caméra si vous en avez</li>
              </ul>
            </td></tr>
        <tr><td style="padding:14px 16px;vertical-align:top;font-size:14px">🔗 Lien de la borne :</td>
            <td style="padding:14px 16px 14px 0;font-size:14px"><a href="{{borneUrl}}" style="color:#3b6ef5;word-break:break-all">{{borneUrl}}</a></td></tr>
        <tr><td style="padding:14px 16px;vertical-align:top;font-size:14px">⚙️ Console :</td>
            <td style="padding:14px 16px 14px 0;font-size:14px"><a href="{{consoleUrl}}" style="color:#3b6ef5;word-break:break-all">{{consoleUrl}}</a></td></tr>
      </tbody>
    </table>
    <p style="text-align:center;margin:0 0 20px">
      <a href="{{consoleUrl}}" style="display:inline-block;background:#f59e0b;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:16px">⚙️ Accéder à l'admin</a>
    </p>
    <hr style="border:none;border-top:1px solid #e2e5ea;margin:0 0 16px">
    <p style="font-size:12px;color:#9ca3af;margin:0">Besoin d'aide ? Répondez à cet email.</p>
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

function hasRealContent(html) {
  const s = String(html || '').replace(/<p>\s*<br\s*\/?>\s*<\/p>/gi, '').replace(/<[^>]*>/g, '').trim();
  return s.length > 0;
}

export function saveEmailTemplates(templates) {
  const clean = {};
  for (const key of Object.keys(DEFAULT_TEMPLATES)) {
    if (templates[key]) {
      clean[key] = {
        subject: String(templates[key].subject || '').trim().slice(0, 200) || DEFAULT_TEMPLATES[key].subject,
        html: hasRealContent(templates[key].html) ? String(templates[key].html).trim() : DEFAULT_TEMPLATES[key].html,
      };
    }
  }
  writeFileSync(EMAILS_FILE, JSON.stringify(clean, null, 2));
  return clean;
}

export function sendAutoEmails(events, deps) {
  const { sendMail, saveConfig } = deps;
  const now = new Date();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const templates = getEmailTemplates();
  const PH = { baseUrl: process.env.BASE_URL || 'http://localhost:8080' };

  for (const ev of events) {
    if (!ev.cfg || !ev.cfg.partyDate || ev.cfg.closed) continue;
    const partyDate = new Date(ev.cfg.partyDate + 'T00:00:00Z');
    if (isNaN(partyDate.getTime())) continue;

    const diffDays = Math.round((partyDate.getTime() - today.getTime()) / 86400000);
    const sent = ev.cfg.emailsSent || {};
    let modified = false;

    if (diffDays === 7 && !sent.dminus7 && templates.dminus7) {
      console.log(`[auto-email] J-7 pour ${ev.id} — envoi du rappel de personnalisation`);
      const html = fillTemplate(templates.dminus7.html, {
        eventName: ev.name || ev.id,
        eventId: ev.id,
        consoleUrl: `${PH.baseUrl}/e/${ev.id}/admin`,
        ...PH,
      });
      ev.cfg.emailsSent = { ...sent, dminus7: Date.now() };
      modified = true;
      sendMail(ev.id, ev.adminEmail, templates.dminus7.subject, html).catch(err => {
        console.error(`[auto-email] Erreur J-7 pour ${ev.id}:`, err?.message);
      });
    }

    if (diffDays === 1 && !sent.dminus1 && templates.dminus1) {
      console.log(`[auto-email] J-1 pour ${ev.id} — envoi du rappel de la fête`);
      const html = fillTemplate(templates.dminus1.html, {
        eventName: ev.name || ev.id,
        eventId: ev.id,
        consoleUrl: `${PH.baseUrl}/e/${ev.id}/admin`,
        borneUrl: `${PH.baseUrl}/e/${ev.id}/borne`,
        ...PH,
      });
      ev.cfg.emailsSent = { ...(ev.cfg.emailsSent || {}), dminus1: Date.now() };
      modified = true;
      sendMail(ev.id, ev.adminEmail, templates.dminus1.subject, html).catch(err => {
        console.error(`[auto-email] Erreur J-1 pour ${ev.id}:`, err?.message);
      });
    }

    if (modified && saveConfig) saveConfig(ev.cfg);
  }
}

export function fillTemplate(html, vars) {
  let result = html;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp('{{' + key + '}}', 'g'), String(value ?? ''));
  }
  return result;
}
