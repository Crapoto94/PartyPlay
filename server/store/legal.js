import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEGAL_FILE = path.join(__dirname, '..', 'legal.json');

const DEFAULTS = {
  siteName: 'PartyPlay',
  contactEmail: 'contact@partyplay.fr',

  contactText: `Pour toute question concernant la plateforme PartyPlay, vous pouvez nous écrire à l'adresse email ci-dessous.

Nous nous efforçons de répondre dans un délai de 48 heures ouvrées.`,

  rgpdText: `POLITIQUE DE CONFIDENTIALITÉ — PARTYPLAY
Dernière mise à jour : 2024

1. Responsable du traitement
PartyPlay — contact@partyplay.fr

2. Données collectées et finalités

• Adresse email de contact (créateur de la fête)
  Fournie volontairement lors de la création d'une fête. Utilisée pour envoyer le lien de vérification du compte, les informations de connexion à la console d'administration, et, le cas échéant, les confirmations de paiement.
  Base légale : exécution d'un contrat (art. 6.1.b RGPD).

• Adresse IP du créateur de la fête
  Enregistrée automatiquement lors de la création d'une fête à des fins de sécurité, de prévention des abus et de traçabilité en cas de signalement de contenu illicite.
  Base légale : intérêt légitime (art. 6.1.f RGPD).

• Pseudonymes des joueurs
  Saisis par l'organisateur de la fête, non collectés directement auprès des joueurs. Utilisés uniquement pour le bon déroulement de l'événement.
  Base légale : exécution d'un contrat (art. 6.1.b RGPD).

3. Durée de conservation
Les données sont conservées le temps de l'événement. Elles peuvent être supprimées à tout moment sur demande de l'organisateur ou par suppression de la fête depuis la console d'administration.

4. Vos droits (RGPD)
Conformément au Règlement (UE) 2016/679, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement et d'opposition sur vos données personnelles.
Pour exercer ces droits : contact@partyplay.fr

5. Cookies
PartyPlay n'utilise pas de cookies de traçage ou publicitaires. Des données de session (stockage navigateur) peuvent être utilisées pour maintenir votre connexion à la console.

6. Sécurité
Les données sont stockées sur des serveurs sécurisés. Les mots de passe de console sont transmis et stockés tels que saisis — choisissez un mot de passe difficile à deviner.`,

  mentionsText: `MENTIONS LÉGALES — PARTYPLAY

Éditeur du site
[À compléter — Nom ou Raison sociale, Adresse complète, SIRET si applicable]
Directeur de la publication : [À compléter]
Contact : contact@partyplay.fr

Hébergeur
[À compléter — Nom de l'hébergeur, Adresse, Numéro de téléphone]

Propriété intellectuelle
L'ensemble des éléments composant le site PartyPlay (code source, design, textes, visuels) est protégé par le droit d'auteur. Toute reproduction ou représentation, totale ou partielle, sans autorisation expresse est interdite.

Limitation de responsabilité
PartyPlay est une plateforme d'animation d'événements. L'organisateur de chaque fête est seul responsable du contenu qu'il crée (questions, gages, anecdotes) et du bon déroulement de son événement. PartyPlay ne saurait être tenu responsable des contenus générés par les utilisateurs.

Droit applicable
Le présent site est soumis au droit français. Tout litige relatif à son utilisation sera soumis à la compétence exclusive des tribunaux français.`,
};

export function getLegal() {
  try { return { ...DEFAULTS, ...JSON.parse(readFileSync(LEGAL_FILE, 'utf8')) }; }
  catch { return { ...DEFAULTS }; }
}

export function saveLegal(patch) {
  const current = getLegal();
  const allowed = ['siteName', 'contactEmail', 'contactText', 'rgpdText', 'mentionsText'];
  const merged = { ...current };
  for (const k of allowed) if (patch[k] !== undefined) merged[k] = patch[k];
  writeFileSync(LEGAL_FILE, JSON.stringify(merged, null, 2));
  return merged;
}
