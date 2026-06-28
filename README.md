# 🎉 PartyPlay

Plateforme **multi-événements** pour animer une soirée : jeux, quiz, blind-test, anecdotes, roue des
gages, défi photo, mini-jeux arcade et collaboratifs — sur une **borne partagée** + les **téléphones**
des joueurs, en temps réel. Chaque événement a son **admin**, ses joueurs, son contenu et son **thème graphique**.

## Architecture
Serveur Node.js + temps réel (SSE), **un dossier JSON par événement** (`server/events/<id>/`).

- **`/admin`** — administration **générale** : crée/liste/supprime les événements.
- **`/e/<id>/admin`** — **console** de l'événement : config (joueurs, activités, contenu, thème) + pilotage live.
- **`/e/<id>/borne`** — l'écran partagé (tablette) : activités, scores, classement.
- **`/e/<id>/j/<token>`** — la page perso d'un joueur (manette / buzzer / réponses / photos).

### Thèmes graphiques
`server/public/static/themes/` : `retro` (jeux vidéo), `neon`, `chic`, `kids`, `casino`.
Structure commune dans `base.css`, l'admin générale a son propre style neutre (`admin.css`).

### Lancer en local
```bash
cd server
npm install
npm start
#   Admin général : http://localhost:8080/admin
#   (puis créer un événement → ouvre sa console et sa borne)
```
Mot de passe de l'admin générale : variable d'environnement `ADMIN_PASSWORD` (vide = libre).

## Déploiement
🚀 [Déploiement Proxmox](docs/DEPLOIEMENT-PROXMOX.md) — LXC + Node + service systemd `partyplay` + HTTPS.

## Statut
✅ Moteur multi-tenant, administration générale + console par événement, 5 thèmes, SSE temps réel,
catalogue d'activités (quiz / blind-test / anecdotes / roue des gages / défi photo / spotlight /
dessine-moi / mini-jeux arcade / collaboratifs), sauvegarde auto par événement.

🔜 Adaptation des écrans `borne.html` et `joueur.html` au routage multi-événements (en cours).
