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
