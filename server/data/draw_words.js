// =====================================================================
//  Mots pour le DESSINE-MOI (Pictionary), répartis en 3 niveaux :
//  simple (facile à dessiner/deviner), complique (plus pointu) et
//  adulte (18+, mots coquins — pas de contenu explicite).
// =====================================================================
export const DRAW_WORDS = [
  // --- Simple ---
  { word: 'chat', cat: 'Animal', level: 'simple' }, { word: 'chien', cat: 'Animal', level: 'simple' },
  { word: 'poisson', cat: 'Animal', level: 'simple' }, { word: 'serpent', cat: 'Animal', level: 'simple' },
  { word: 'papillon', cat: 'Animal', level: 'simple' }, { word: 'dinosaure', cat: 'Animal', level: 'simple' },
  { word: 'éléphant', cat: 'Animal', level: 'simple' }, { word: 'licorne', cat: 'Animal', level: 'simple' },
  { word: 'maison', cat: 'Objet', level: 'simple' }, { word: 'voiture', cat: 'Objet', level: 'simple' },
  { word: 'bateau', cat: 'Objet', level: 'simple' }, { word: 'avion', cat: 'Objet', level: 'simple' },
  { word: 'fusée', cat: 'Objet', level: 'simple' }, { word: 'guitare', cat: 'Objet', level: 'simple' },
  { word: 'lunettes', cat: 'Objet', level: 'simple' }, { word: 'parapluie', cat: 'Objet', level: 'simple' },
  { word: 'téléphone', cat: 'Objet', level: 'simple' }, { word: 'ordinateur', cat: 'Objet', level: 'simple' },
  { word: 'échelle', cat: 'Objet', level: 'simple' }, { word: 'horloge', cat: 'Objet', level: 'simple' },
  { word: 'clé', cat: 'Objet', level: 'simple' }, { word: 'épée', cat: 'Objet', level: 'simple' },
  { word: 'couronne', cat: 'Objet', level: 'simple' }, { word: 'ancre', cat: 'Objet', level: 'simple' },
  { word: 'soleil', cat: 'Nature', level: 'simple' }, { word: 'arbre', cat: 'Nature', level: 'simple' },
  { word: 'fleur', cat: 'Nature', level: 'simple' }, { word: 'étoile', cat: 'Nature', level: 'simple' },
  { word: 'montagne', cat: 'Nature', level: 'simple' }, { word: 'champignon', cat: 'Nature', level: 'simple' },
  { word: 'cactus', cat: 'Nature', level: 'simple' }, { word: 'volcan', cat: 'Nature', level: 'simple' },
  { word: 'pizza', cat: 'Nourriture', level: 'simple' }, { word: 'gâteau', cat: 'Nourriture', level: 'simple' },
  { word: 'banane', cat: 'Nourriture', level: 'simple' }, { word: 'glace', cat: 'Nourriture', level: 'simple' },
  { word: 'hamburger', cat: 'Nourriture', level: 'simple' }, { word: 'fromage', cat: 'Nourriture', level: 'simple' },
  { word: 'fantôme', cat: 'Rigolo', level: 'simple' }, { word: 'robot', cat: 'Rigolo', level: 'simple' },
  { word: 'château', cat: 'Rigolo', level: 'simple' }, { word: 'sorcière', cat: 'Rigolo', level: 'simple' },
  { word: 'pirate', cat: 'Rigolo', level: 'simple' }, { word: 'super-héros', cat: 'Rigolo', level: 'simple' },
  { word: 'bonhomme de neige', cat: 'Rigolo', level: 'simple' }, { word: 'arc-en-ciel', cat: 'Rigolo', level: 'simple' },

  // --- Compliqué ---
  { word: 'Mario', cat: 'Gaming', level: 'complique' }, { word: 'Luigi', cat: 'Gaming', level: 'complique' },
  { word: 'Donkey Kong', cat: 'Gaming', level: 'complique' }, { word: 'Pac-Man', cat: 'Gaming', level: 'complique' },
  { word: 'Sonic', cat: 'Gaming', level: 'complique' }, { word: 'Pikachu', cat: 'Gaming', level: 'complique' },
  { word: 'Bowser', cat: 'Gaming', level: 'complique' }, { word: 'Yoshi', cat: 'Gaming', level: 'complique' },
  { word: 'Kirby', cat: 'Gaming', level: 'complique' }, { word: 'Link', cat: 'Gaming', level: 'complique' },
  { word: 'champignon 1-up', cat: 'Gaming', level: 'complique' }, { word: 'manette', cat: 'Gaming', level: 'complique' },
  { word: 'tétromino', cat: 'Gaming', level: 'complique' }, { word: 'fantôme de Pac-Man', cat: 'Gaming', level: 'complique' },
  { word: 'épée de Zelda', cat: 'Gaming', level: 'complique' }, { word: 'créeper Minecraft', cat: 'Gaming', level: 'complique' },
  { word: 'borne d’arcade', cat: 'Gaming', level: 'complique' }, { word: 'carapace bleue', cat: 'Gaming', level: 'complique' },
  { word: 'démocratie', cat: 'Abstrait', level: 'complique' }, { word: 'jalousie', cat: 'Abstrait', level: 'complique' },
  { word: 'nostalgie', cat: 'Abstrait', level: 'complique' }, { word: 'procrastination', cat: 'Abstrait', level: 'complique' },
  { word: 'inflation', cat: 'Abstrait', level: 'complique' }, { word: 'télépathie', cat: 'Abstrait', level: 'complique' },
  { word: 'trou noir', cat: 'Sciences', level: 'complique' }, { word: 'ADN', cat: 'Sciences', level: 'complique' },
  { word: 'effet papillon', cat: 'Sciences', level: 'complique' }, { word: 'photosynthèse', cat: 'Sciences', level: 'complique' },
  { word: 'tour Eiffel', cat: 'Monde', level: 'complique' }, { word: 'muraille de Chine', cat: 'Monde', level: 'complique' },
  { word: 'pyramide égyptienne', cat: 'Monde', level: 'complique' }, { word: 'chute du mur de Berlin', cat: 'Monde', level: 'complique' },
];

// --- 18+ : mots coquins, taquins, à dessiner entre adultes consentants
// (rien d'explicite — dans l'esprit d'un Pictionary version "chaude" de soirée).
export const DRAW_WORDS_ADULT = [
  { word: 'french kiss', cat: 'Coquin', level: 'adulte' },
  { word: 'strip-tease', cat: 'Coquin', level: 'adulte' },
  { word: 'pole dance', cat: 'Coquin', level: 'adulte' },
  { word: 'chippendale', cat: 'Coquin', level: 'adulte' },
  { word: 'lune de miel', cat: 'Coquin', level: 'adulte' },
  { word: 'nuisette', cat: 'Coquin', level: 'adulte' },
  { word: 'menottes moelleuses', cat: 'Coquin', level: 'adulte' },
  { word: 'plumeau coquin', cat: 'Coquin', level: 'adulte' },
  { word: 'dragueur de soirée', cat: 'Coquin', level: 'adulte' },
  { word: 'french manucure', cat: 'Coquin', level: 'adulte' },
  { word: 'playboy bunny', cat: 'Coquin', level: 'adulte' },
  { word: 'bisou volé', cat: 'Coquin', level: 'adulte' },
  { word: 'câlin coquin', cat: 'Coquin', level: 'adulte' },
  { word: 'dessous affriolants', cat: 'Coquin', level: 'adulte' },
  { word: 'chambre d’hôtel', cat: 'Coquin', level: 'adulte' },
  { word: 'massage sensuel', cat: 'Coquin', level: 'adulte' },
  { word: 'coup de foudre', cat: 'Coquin', level: 'adulte' },
  { word: 'soirée mousse', cat: 'Coquin', level: 'adulte' },
];
