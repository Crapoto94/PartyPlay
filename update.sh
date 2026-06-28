#!/usr/bin/env bash
# =====================================================================
#  Mise à jour de PartyPlay sur le serveur.
#  Usage (dans le conteneur, en root) :  bash /opt/PartyPlay/update.sh
# =====================================================================
set -e
cd "$(dirname "$0")"

echo "⬇️   Récupération du code depuis GitHub..."
git fetch origin
# On force l'alignement sur le remote : seuls les fichiers SUIVIS sont touchés.
# Les données runtime des événements (server/events/) sont gitignorées
# → configs, sauvegardes et photos restent intactes, même en pleine soirée.
git reset --hard origin/main

echo "📦  Vérification des dépendances..."
cd server
npm install --omit=dev --no-audit --no-fund

echo "🔄  Redémarrage du service..."
systemctl restart partyplay
sleep 2

if systemctl is-active --quiet partyplay; then
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/admin || echo "???")
  echo "✅  À jour et en ligne (admin -> HTTP $code)."
else
  echo "❌  Le service n'est pas actif. Logs :"
  journalctl -u partyplay -n 20 --no-pager
  exit 1
fi
