# 🚀 Déploiement de PartyPlay sur Proxmox

> Objectif : faire tourner l'appli dans un **conteneur LXC** (léger) et l'exposer en HTTPS.
> L'appli est désormais **multi-événements** : une administration générale (`/admin`) crée les
> événements, chacun ayant sa propre borne, ses joueurs et son thème.

---

## Pourquoi LXC plutôt que VM ?
L'appli est un petit serveur Node mono-process, sans dépendance système exotique. Un **LXC Debian 12**
consomme ~80 Mo de RAM au repos vs ~1 Go pour une VM. (Si tu préfères une VM, la procédure
« Node + systemd » est identique à partir de l'étape 3.)

---

## 1. Créer le conteneur LXC

Dans l'interface Proxmox → **Create CT** :
- **Template** : `debian-12-standard`
- **Cores** : 1 · **RAM** : 512 Mo · **Disk** : 4 Go
- **Network** : IP statique (ex. `192.168.1.50/24`) — note l'IP.
- **Unprivileged container** : ✅ oui

---

## 2. Préparer le système (dans le LXC)

```bash
apt update && apt upgrade -y
apt install -y curl git
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
node -v   # v20.x
```

---

## 3. Déployer l'application

Le code vit dans `/opt/PartyPlay`, le serveur Node dans son sous-dossier `server/`.

```bash
cd /opt
git clone https://github.com/Crapoto94/PartyPlay.git
#   (ou copie le repo via scp/WinSCP dans /opt/PartyPlay)

cd /opt/PartyPlay/server
npm install --omit=dev

# Test rapide :
node server.js
#   → "Plateforme multi-événements en ligne" ; Ctrl-C pour arrêter
```

> Le mot de passe de l'**administration générale** se règle via la variable d'environnement
> `ADMIN_PASSWORD` (voir le service ci-dessous). Vide = accès libre.

---

## 4. Service systemd (démarrage auto + redémarrage si crash)

> ⚠️ Le `WorkingDirectory` doit pointer sur **`/opt/PartyPlay/server`** (là où se trouve `server.js`).
> Une erreur `status=200/CHDIR` signifie que ce dossier n'existe pas / n'est pas le bon.

```bash
cat > /etc/systemd/system/partyplay.service <<'EOF'
[Unit]
Description=PartyPlay — plateforme multi-événements
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/PartyPlay/server
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=2
Environment=NODE_ENV=production
Environment=PORT=8080
# Mot de passe de l'admin générale (/admin). Laisse vide pour un accès libre.
Environment=ADMIN_PASSWORD=change-moi

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now partyplay
systemctl status partyplay   # doit être "active (running)"
```

### Tu migres depuis l'ancien service `pixel-panic` ?
```bash
systemctl disable --now pixel-panic 2>/dev/null
rm -f /etc/systemd/system/pixel-panic.service
systemctl daemon-reload
# puis crée partyplay.service comme ci-dessus
```

L'appli écoute sur `http://192.168.1.50:8080`. Teste : `http://192.168.1.50:8080/admin`.

---

## 5. Exposer en HTTPS (reverse-proxy SANS buffering — indispensable pour le SSE)

### Option recommandée — Caddy
```bash
apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' > /etc/apt/sources.list.d/caddy.list
apt update && apt install -y caddy
```
`/etc/caddy/Caddyfile` (remplace par ton domaine) :
```
ton-domaine.fr {
    reverse_proxy 192.168.1.50:8080 {
        flush_interval -1   # indispensable pour le SSE (pas de buffering)
    }
}
```
```bash
systemctl reload caddy
```

### Si tu utilises Nginx Proxy Manager
**Proxy Host** : ton domaine → `192.168.1.50:8080`, SSL → *Request a new certificate*. Onglet **Advanced** :
```
proxy_buffering off;
proxy_cache off;
proxy_set_header Connection '';
proxy_http_version 1.1;
```

---

## 6. DNS
Chez ton registrar, crée un `A` (ou `CNAME`) vers ton IP publique, et redirige les ports **80/443**
vers le reverse-proxy.

> 💡 **Sans exposition Internet** : tout fonctionne en **réseau local**. Mets l'URL publique de chaque
> événement (champ « URL publique » de sa console) sur `http://192.168.1.50:8080` pour que les QR
> pointent au bon endroit, et garde tous les téléphones sur le même WiFi.

---

## 7. Le jour J — check-list

1. `systemctl status partyplay` → running.
2. **Admin générale** : `https://ton-domaine.fr/admin` → crée/choisis l'événement.
3. Dans la **console de l'événement** (`/e/<id>/admin`) : règle joueurs, activités, thème, et **génère les QR** des joueurs.
4. Ouvre la **BORNE** sur la tablette : `https://ton-domaine.fr/e/<id>/borne` (plein écran).
5. Les invités scannent leur QR → se mettent **PRÊT** → tu cliques **Démarrer** dans la console. 🎬

---

## Dépannage
- **`status=200/CHDIR`** → `WorkingDirectory` invalide : il doit être `/opt/PartyPlay/server`.
- **La borne ne se met pas à jour** → buffering du proxy : vérifie `flush_interval -1` (Caddy) / `proxy_buffering off` (Nginx).
- **« Token invalide »** → le token du QR ne correspond plus à la config de l'événement (régénère le QR depuis la console).
- **Repartir de zéro** → console de l'événement → **Reset**.
- **Logs** → `journalctl -u partyplay -f`.
