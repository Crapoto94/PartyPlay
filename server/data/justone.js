// =====================================================================
//  UN SEUL MOT !? — adaptation coopérative du principe « un indice, un
//  seul mot » : à chaque manche, un·e DEVINEUR·SE quitte la pièce (ou
//  ferme les yeux sur son téléphone), les autres joueurs voient un MOT
//  SECRET et proposent chacun UN SEUL MOT-INDICE en secret pour l'aider
//  à deviner. Les indices IDENTIQUES entre joueurs s'annulent
//  automatiquement (on ne les montre jamais au devineur) : il faut donc
//  un indice à la fois pertinent ET différent des autres.
//
//  Mots simples, communs, non ambigus — piochés au hasard à chaque
//  manche (aucune répétition dans une même partie).
//
//  Deux niveaux, comme les autres jeux de la plateforme :
//   - classique : tout public (liste ci-dessous).
//   - adulte    : mots à deviner réservés aux adultes (sexe, alcool, excès,
//     pratiques osées…). Réservé aux soirées entre adultes consentants ;
//     aucun mot n'implique de mineurs ni d'actes non consentis.
//  Les deux niveaux sont INDÉPENDANTS (pas de mélange) : en version 18+,
//  tous les mots à deviner sont adultes, pour une soirée cohérente.
//
//  Quatre univers supplémentaires (geek+tech, gaming, fantasy+SF, sport)
//  de 100 mots chacun, activables par le GM dans la console.
// =====================================================================

const SINGLE_WORDS_ONLY = arr => arr.filter(s => !/\s/.test(s));

const ALL_WORDS = [
  'chat', 'chien', 'cheval', 'vache', 'mouton', 'cochon', 'poule', 'canard',
  'lion', 'tigre', 'éléphant', 'girafe', 'singe', 'ours', 'loup', 'renard',
  'lapin', 'souris', 'baleine', 'dauphin', 'requin', 'poisson', 'aigle', 'hibou',
  'papillon', 'abeille', 'araignée', 'fourmi', 'serpent', 'crocodile', 'tortue', 'grenouille',
  'maison', 'château', 'immeuble', 'garage', 'jardin', 'piscine', 'tente', 'cabane',
  'voiture', 'vélo', 'moto', 'train', 'avion', 'bateau', 'fusée', 'camion',
  'table', 'chaise', 'canapé', 'lit', 'armoire', 'miroir', 'lampe', 'tapis',
  'téléphone', 'ordinateur', 'télévision', 'radio', 'montre', 'clavier', 'imprimante',
  'livre', 'journal', 'stylo', 'crayon', 'gomme', 'ciseaux', 'cahier', 'enveloppe',
  'pain', 'fromage', 'beurre', 'lait', 'œuf', 'sucre', 'sel', 'poivre',
  'pomme', 'banane', 'orange', 'fraise', 'raisin', 'citron', 'ananas', 'cerise',
  'carotte', 'tomate', 'oignon', 'salade', 'champignon', 'courgette', 'poireau',
  'pizza', 'gâteau', 'chocolat', 'glace', 'bonbon', 'biscuit', 'confiture', 'miel',
  'café', 'thé', 'eau', 'jus', 'vin', 'bière', 'soupe',
  'soleil', 'lune', 'étoile', 'nuage', 'pluie', 'neige', 'arc-en-ciel', 'orage',
  'montagne', 'rivière', 'forêt', 'désert', 'île', 'volcan', 'plage', 'lac',
  'arbre', 'fleur', 'herbe', 'feuille', 'racine', 'graine', 'cactus', 'champ',
  'école', 'hôpital', 'restaurant', 'magasin', 'bibliothèque', 'musée', 'église', 'cinéma',
  'campagne', 'ville', 'village', 'quartier', 'rue',
  'football', 'tennis', 'natation', 'basket', 'rugby', 'ski', 'boxe',
  'guitare', 'piano', 'violon', 'batterie', 'flûte', 'trompette', 'tambour', 'harpe',
  'chanteur', 'danseur', 'acteur', 'peintre', 'écrivain', 'cuisinier', 'pompier', 'médecin',
  'roi', 'reine', 'prince', 'princesse', 'chevalier', 'sorcière', 'pirate', 'fantôme',
  'dragon', 'licorne', 'sirène', 'vampire', 'zombie', 'monstre', 'robot', 'extraterrestre',
  'anniversaire', 'mariage', 'noël', 'vacances', 'pique-nique', 'fête', 'carnaval', 'concert',
  'valise', 'passeport', 'billet', 'carte', 'boussole', 'jumelles',
  'chapeau', 'lunettes', 'gants', 'écharpe', 'manteau', 'chaussures', 'ceinture', 'cravate',
  'parapluie', 'sac', 'portefeuille', 'bijou', 'bague', 'collier', 'bracelet',
  'ballon', 'raquette', 'trottinette', 'skateboard', 'patins',
  'poupée', 'peluche', 'puzzle', 'cerf-volant', 'toupie', 'dé', 'domino',
  'horloge', 'calendrier', 'bougie', 'allumette', 'bougeoir', 'lanterne', 'phare',
  'marteau', 'clou', 'vis', 'tournevis', 'échelle', 'pinceau', 'seau',
  'iceberg', 'pingouin', 'traîneau', 'igloo',
  'pyramide', 'tour', 'pont', 'moulin', 'cathédrale', 'temple', 'statue',
  'astronaute', 'planète', 'comète', 'satellite', 'télescope', 'galaxie', 'météorite', 'orbite',
  'clown', 'magicien', 'acrobate', 'jongleur', 'trapèze', 'cirque', 'chapiteau', 'dompteur',
  'trésor', 'perroquet', 'coffre', 'épée',
  'rêve', 'cauchemar', 'sommeil', 'oreiller', 'couverture', 'pyjama', 'doudou', 'berceuse',
];

const ALL_WORDS_ADULT = [
  'préservatif', 'sextoy', 'menottes', 'lingerie', 'strip-tease', 'orgie', 'gode',
  'fessée', 'kamasutra', 'bondage', 'masturbation',
  'nudiste', 'sperme', 'orgasme', 'préliminaires', 'fellation', 'cunnilingus', 'pénétration', 'missionnaire',
  'levrette', 'soixante-neuf', 'infidélité', 'adultère', 'jalousie',
  'viagra', 'aphrodisiaque', 'libido', 'érection', 'excitation', 'fantasme', 'voyeurisme', 'exhibitionnisme',
  'fouet', 'bandeau', 'chantilly', 'string', 'porte-jarretelles',
  'strip-poker', 'gage',
  'ivresse', 'cuite', 'apéro', 'shot',
  'vodka', 'tequila', 'whisky', 'rhum', 'champagne', 'cocktail', 'sangria', 'absinthe',
  'cannabis', 'cocaïne', 'ecstasy', 'shisha',
  'stripteaseur',
  'tinder', 'sexting', 'nude', 'sexcam', 'onlyfans', 'webcam',
  'vomi', 'gerbe', 'diarrhée', 'caca', 'pipi', 'pet', 'rot',
  'nudité', 'seins', 'fesses', 'pénis', 'vagin', 'poitrine', 'nombril',
  'strip', 'décadence', 'after', 'descente',
  'rodéo', 'conduite', 'défi', 'sport',
];

const UNIVERSE_GEEK = [
  'algorithme', 'octet', 'binaire', 'javascript', 'python', 'serveur', 'pixel',
  'compilateur', 'terminal', 'console', 'logiciel', 'bug', 'debug', 'framework',
  'open-source', 'cloud', 'ssh', 'api', 'cookie', 'firewall', 'virus',
  'phishing', 'cryptage', 'hash', 'docker', 'git', 'linux', 'windows',
  'apple', 'samsung', 'intel', 'processeur', 'disque', 'écran', 'clavier',
  'souris', 'câble', 'routeur', 'wifi', 'bluetooth', 'usb', 'hdmi',
  'mémoire', 'batterie', 'chargeur', 'alimentation', 'carte-mère', 'ventilateur', 'radiateur',
  'bit', 'octet', 'kilooctet', 'mégaoctet', 'gigaoctet', 'téraoctet', 'processus',
  'thread', 'ram', 'rom', 'bios', 'kernel', 'driver', 'compression',
  'zip', 'tar', 'pdf', 'html', 'css', 'json', 'xml', 'sql',
  'node', 'react', 'angular', 'vue', 'php', 'ruby', 'swift',
  'robot', 'intelligence', 'réseau', 'internet', 'intranet', 'extranet', 'pare-feu',
  'certificat', 'token', 'mot-de-passe', 'identifiant', 'pseudonyme', 'avatar', 'empreinte',
  'domaine', 'hébergement', 'site', 'application', 'mise-à-jour', 'patch', 'version',
  'test', 'production', 'développement', 'sprint', 'agile', 'backlog', 'merge',
];

const UNIVERSE_GAMING = [
  'mario', 'zelda', 'sonic', 'pacman', 'tetris', 'donkey', 'metroid',
  'pokémon', 'final-fantasy', 'street-fighter', 'mortal-kombat', 'crash', 'spyro',
  'minecraft', 'fortnite', 'call-of-duty', 'league-of-legends', 'overwatch', 'valorant',
  'manette', 'joystick', 'gâchette', 'bouton', 'd-pad', 'stick', 'vibration',
  'nintendo', 'playstation', 'xbox', 'sega', 'atari', 'gameboy', 'pc',
  'jeu', 'niveau', 'monde', 'carte', 'donjon', 'boss', 'ennemi',
  'joueur', 'avatar', 'skin', 'équipement', 'arme', 'armure', 'potion',
  'point-de-vie', 'mana', 'expérience', 'niveau', 'compétence', 'sort', 'attaque',
  'défense', 'vitesse', 'bonus', 'malus', 'trophée', 'succès', 'classement',
  'multijoueur', 'coop', 'versus', 'tournoi', 'compétition', 'ligue', 'rank',
  'arcade', 'plateforme', 'combat', 'course', 'simulation', 'stratégie', 'rpg',
  'fps', 'mmo', 'rogue-like', 'sandbox', 'battle-royale', 'speedrun', 'grind',
  'respawn', 'checkpoint', 'sauvegarde', 'continue', 'game-over', 'victoire', 'défaite',
  'écran', 'score', 'timer', 'chrono', 'record', 'high-score', 'leaderboard',
  'stream', 'twitch', 'youtube', 'discord', 'guild', 'clan', 'team',
  'e-sport', 'pro-gamer', 'noob', 'pro', 'tryhard', 'farm', 'loot',
  'skin', 'émote', 'danse', 'salut', 'tbag', 'spam', 'rush',
];

const UNIVERSE_FANTASY = [
  'magie', 'sortilège', 'enchantement', 'malédiction', 'prophétie', 'légende', 'mythe',
  'elfe', 'nain', 'hobbit', 'orc', 'troll', 'gobelin', 'géant',
  'fée', 'lutin', 'gnome', 'ogre', 'gargouille', 'basilic', 'hydre',
  'phénix', 'griffon', 'cerbère', 'minotaure', 'centaure', 'satyre', 'harpie',
  'wand', 'bâton', 'grimoire', 'parchemin', 'potion', 'élixir', 'artefact',
  'anneau', 'couronne', 'sceptre', 'épée', 'bouclier', 'hache', 'arc',
  'flèche', 'dague', 'lance', 'masse', 'cotte-de-mailles', 'heaume', 'cape',
  'royaume', 'château', 'tour', 'donjon', 'forteresse', 'crypte', 'caverne',
  'forêt', 'clairière', 'rivière', 'montagne', 'volcan', 'abîme', 'pont',
  'dragon', 'wyverne', 'kraken', 'golem', 'chimère', 'sphinx', 'méduse',
  'sorcier', 'mage', 'enchanteur', 'alchimiste', 'druide', 'bard', 'paladin',
  'chevalier', 'guerrier', 'rôdeur', 'assassin', 'prêtre', 'moine', 'nécromancien',
  'quête', 'voyage', 'péril', 'trésor', 'carte', 'prophétie', 'destin',
  'gloire', 'honneur', 'courage', 'sagesse', 'puissance', 'savoir', 'secret',
  'ténèbres', 'lumière', 'ombre', 'brouillard', 'tempête', 'éclipse', 'comète',
  'étoile', 'lune', 'soleil', 'ciel', 'monde', 'dimension', 'portail',
  'amulette', 'talisman', 'relique', 'gemme', 'cristal', 'pierre', 'minerai',
  'mithril', 'adamantium', 'orichalque', 'obsidienne', 'rubis', 'saphir', 'émeraude',
  'garde', 'sentinel', 'esprit', 'démon', 'ange', 'divinité', 'héros',
];

const UNIVERSE_SPORT = [
  'stade', 'terrain', 'piste', 'court', 'ring', 'tapis', 'pelouse',
  'ballon', 'balle', 'volant', 'palet', 'bâton', 'raquette', 'filet',
  'but', 'panier', 'cage', 'poteau', 'ligne', 'arbitre', 'entraîneur',
  'capitaine', 'remplaçant', 'équipe', 'coéquipier', 'adversaire', 'supporter', 'public',
  'médaille', 'coupe', 'trophée', 'drapeau', 'hymne', 'podium', 'marche',
  'victoire', 'défaite', 'match-nul', 'score', 'classement', 'phase', 'finale',
  'demi-finale', 'quart', 'poule', 'qualification', 'élimination', 'prolongation', 'tirs-au-but',
  'carton-jaune', 'carton-rouge', 'faute', 'penalty', 'coup-franc', 'corner', 'hors-jeu',
  'touché', 'essai', 'transformation', 'drop', 'mêlée', 'tenu', 'en-avant',
  'ace', 'double-faute', 'let', 'set', 'jeu', 'break', 'avantage',
  'kayak', 'aviron', 'voile', 'surf', 'plongeon', 'natation', 'water-polo',
  'sprint', 'haies', 'relais', 'marathon', 'cross', 'triathlon', 'décathlon',
  'saut', 'longueur', 'hauteur', 'perche', 'poids', 'disque', 'javelot',
  'marteau', 'haltère', 'barre', 'anneaux', 'poutre', 'sol', 'cheval',
  'gym', 'acrobatie', 'chorégraphie', 'routine', 'note', 'jury', 'performance',
  'record', 'chrono', 'montre', 'dossard', 'couloir', 'départ', 'arrivée',
  'cyclisme', 'peloton', 'échappée', 'maillot', 'étape', 'col', 'descente',
  'formule-un', 'course', 'podium', 'stand', 'moteur', 'pneu', 'volant',
  'skateboard', 'rollers', 'bmx', 'escalade', 'parkour', 'trampoline', 'slackline',
];

export const JUSTONE_WORDS = SINGLE_WORDS_ONLY(ALL_WORDS);
export const JUSTONE_WORDS_ADULT = SINGLE_WORDS_ONLY(ALL_WORDS_ADULT);
export const JUSTONE_UNIVERSES = {
  geek: { label: 'Geek & Tech', emoji: '💻', words: SINGLE_WORDS_ONLY(UNIVERSE_GEEK) },
  gaming: { label: 'Gaming', emoji: '🎮', words: SINGLE_WORDS_ONLY(UNIVERSE_GAMING) },
  fantasy: { label: 'Fantasy & SF', emoji: '🧙', words: SINGLE_WORDS_ONLY(UNIVERSE_FANTASY) },
  sport: { label: 'Sport', emoji: '🏅', words: SINGLE_WORDS_ONLY(UNIVERSE_SPORT) },
};
