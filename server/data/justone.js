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
// =====================================================================

export const JUSTONE_WORDS = [
  'chat', 'chien', 'cheval', 'vache', 'mouton', 'cochon', 'poule', 'canard',
  'lion', 'tigre', 'éléphant', 'girafe', 'singe', 'ours', 'loup', 'renard',
  'lapin', 'souris', 'baleine', 'dauphin', 'requin', 'poisson', 'aigle', 'hibou',
  'papillon', 'abeille', 'araignée', 'fourmi', 'serpent', 'crocodile', 'tortue', 'grenouille',
  'maison', 'château', 'immeuble', 'garage', 'jardin', 'piscine', 'tente', 'cabane',
  'voiture', 'vélo', 'moto', 'train', 'avion', 'bateau', 'fusée', 'camion',
  'table', 'chaise', 'canapé', 'lit', 'armoire', 'miroir', 'lampe', 'tapis',
  'téléphone', 'ordinateur', 'télévision', 'radio', 'appareil photo', 'montre', 'clavier', 'imprimante',
  'livre', 'journal', 'stylo', 'crayon', 'gomme', 'ciseaux', 'cahier', 'enveloppe',
  'pain', 'fromage', 'beurre', 'lait', 'œuf', 'sucre', 'sel', 'poivre',
  'pomme', 'banane', 'orange', 'fraise', 'raisin', 'citron', 'ananas', 'cerise',
  'carotte', 'tomate', 'pomme de terre', 'oignon', 'salade', 'champignon', 'courgette', 'poireau',
  'pizza', 'gâteau', 'chocolat', 'glace', 'bonbon', 'biscuit', 'confiture', 'miel',
  'café', 'thé', 'eau', 'jus', 'vin', 'bière', 'soupe', 'jus de fruit',
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
  'valise', 'passeport', 'billet', 'carte', 'boussole', 'jumelles', 'sac à dos',
  'chapeau', 'lunettes', 'gants', 'écharpe', 'manteau', 'chaussures', 'ceinture', 'cravate',
  'parapluie', 'sac', 'portefeuille', 'bijou', 'bague', 'collier', 'bracelet',
  'ballon', 'raquette', 'trottinette', 'skateboard', 'patins', 'corde à sauter',
  'poupée', 'peluche', 'puzzle', 'cerf-volant', 'toupie', 'dé', 'domino',
  'horloge', 'calendrier', 'bougie', 'allumette', 'bougeoir', 'lanterne', 'phare',
  'marteau', 'clou', 'vis', 'tournevis', 'échelle', 'pinceau', 'seau',
  'iceberg', 'pingouin', 'ours polaire', 'traîneau', 'igloo',
  'pyramide', 'tour', 'pont', 'moulin', 'cathédrale', 'temple', 'statue',
  'astronaute', 'planète', 'comète', 'satellite', 'télescope', 'galaxie', 'météorite', 'orbite',
  'clown', 'magicien', 'acrobate', 'jongleur', 'trapèze', 'cirque', 'chapiteau', 'dompteur',
  'trésor', 'île au trésor', 'perroquet', 'carte au trésor', 'coffre', 'épée',
  'rêve', 'cauchemar', 'sommeil', 'oreiller', 'couverture', 'pyjama', 'doudou', 'berceuse',
];

// ================================================================
//  NIVEAU ADULTE (18+) — mots à deviner réservés aux soirées entre adultes.
// ================================================================
export const JUSTONE_WORDS_ADULT = [
  'préservatif', 'sextoy', 'menottes', 'lingerie', 'strip-tease', 'lap dance', 'orgie', 'gode',
  'plan cul', 'plan à trois', 'sexfriend', 'fessée', 'kamasutra', 'bondage', 'masturbation', 'gang bang',
  'nudiste', 'sperme', 'orgasme', 'préliminaires', 'fellation', 'cunnilingus', 'pénétration', 'missionnaire',
  'levrette', 'soixante-neuf', 'french kiss', 'suçon', 'coup d\'un soir', 'infidélité', 'adultère', 'jalousie',
  'viagra', 'aphrodisiaque', 'libido', 'érection', 'excitation', 'fantasme', 'voyeurisme', 'exhibitionnisme',
  'god ceinture', 'huile de massage', 'chantilly', 'fouet', 'bandeau', 'string', 'porte-jarretelles', 'talons hauts',
  'bar à hôtesses', 'boîte échangiste', 'club libertin', 'peep-show', 'strip-poker', 'jeu de la bouteille', 'action ou vérité', 'gage',
  'ivresse', 'gueule de bois', 'cuite', 'coma éthylique', 'apéro', 'shot', 'binge drinking', 'happy hour',
  'vodka', 'tequila', 'whisky', 'rhum', 'champagne', 'cocktail', 'sangria', 'absinthe',
  'joint', 'cannabis', 'cocaïne', 'ecstasy', 'poppers', 'shisha', 'défonce', 'dealer',
  'strip-club', 'stripteaseur', 'escort', 'bordel', 'maison close', 'proxénète', 'call-girl', 'sugar daddy',
  'tinder', 'appli de rencontre', 'sexting', 'nude', 'onlyfans', 'webcam', 'sexcam', 'film pour adultes',
  'vomi', 'gerbe', 'diarrhée', 'chiasse', 'caca', 'pipi', 'pet', 'rot',
  'nudité', 'seins', 'fesses', 'entrejambe', 'pénis', 'vagin', 'poitrine', 'nombril',
  'walk of shame', 'after', 'descente', 'bad trip', 'gueule cassée', 'strip', 'orgie romaine', 'décadence',
  'vitesse excessive', 'rodéo urbain', 'conduite dangereuse', 'saut à l\'élastique', 'enterrement de vie de garçon', 'défi extrême', 'sport extrême', 'base jump',
];
