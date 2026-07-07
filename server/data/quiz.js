// =====================================================================
//  Banques de questions — QUIZ et BLIND-TEST.
//
//  Format d'une question :
//   { prompt, choices:[4], answer:<index 0-3>, points, media, play }
//   - media : null (texte) | 'audio' (blind-test)
//   - play  : pour le BLIND-TEST, l'extrait que le MJ (Marc) doit lancer.
//
//  Chaque deck de QUIZ = 15 questions classées du PLUS FACILE au PLUS DUR
//  (crescendo) ; les points montent avec la difficulté. On vise des questions
//  plus corsées, surprenantes et pleines d'anecdotes (pas du simple « par cœur »).
//  La bonne réponse n'est JAMAIS envoyée aux joueurs avant la révélation.
// =====================================================================

export const QUESTIONS = {
  // ---- QUIZ culture JEU VIDÉO (crescendo, anecdotes) --------------
  videogame: [
    { prompt: "Avant de s'appeler Mario, le héros de Donkey Kong (1981) était surnommé…",
      choices: ['Jumpman', 'Mr. Video', 'Plombier Joe', 'Hammer Bro'], answer: 0, points: 50, media: null },
    { prompt: 'Le célèbre « code Konami » (↑ ↑ ↓ ↓ ← → ← → B A) est apparu pour la 1ʳᵉ fois dans…',
      choices: ['Contra', 'Gradius', 'Castlevania', 'Metal Gear'], answer: 1, points: 75, media: null },
    { prompt: "Quelle est la console de SALON la plus vendue de l'histoire ?",
      choices: ['Wii', 'PlayStation 2', 'Xbox 360', 'Nintendo Switch'], answer: 1, points: 100, media: null },
    { prompt: 'Le nom « Pikachu » vient de « pika » (l’étincelle) et « chu », qui imite…',
      choices: ['l’aboiement', 'le cri de la souris', 'le tonnerre', 'le bisou'], answer: 1, points: 100, media: null },
    { prompt: 'Quel est le jeu vidéo le plus vendu de tous les temps ?',
      choices: ['Tetris', 'Minecraft', 'GTA V', 'Wii Sports'], answer: 1, points: 125, media: null },
    { prompt: 'Le monstre « Creeper » de Minecraft serait né…',
      choices: ['d’un dessin d’enfant', 'd’une erreur en modélisant un cochon', 'd’un cactus vivant', 'd’un bug de lave'], answer: 1, points: 150, media: null },
    { prompt: "Le créateur de Pokémon, Satoshi Tajiri, s'est inspiré de sa passion d'enfance pour…",
      choices: ['les trains', 'la collecte d’insectes', 'les échecs', 'l’astronomie'], answer: 1, points: 150, media: null },
    { prompt: "Lara Croft (Tomb Raider) devait à l'origine s'appeler…",
      choices: ['Laura Cruz', 'Lana Stone', 'Indiana Jane', 'Lyra Fox'], answer: 0, points: 175, media: null },
    { prompt: 'Le nom « SEGA » est la contraction de…',
      choices: ['Super Electronic Games', 'Service Games', 'Sound Engineering', 'Sega Galaxy'], answer: 1, points: 200, media: null },
    { prompt: 'Les cartouches invendues du jeu E.T. (1982) ont été retrouvées en 2014…',
      choices: ['au fond d’un lac', 'enterrées dans un désert du Nouveau-Mexique', 'dans un bunker', 'recyclées en CD'], answer: 1, points: 200, media: null },
    { prompt: 'Dans le Pac-Man original, le jeu devient injouable (écran « bugué ») au niveau…',
      choices: ['100', '199', '256', 'il n’y a pas de fin'], answer: 2, points: 225, media: null },
    { prompt: 'Le premier « easter egg » célèbre (le nom caché du créateur) se trouve dans…',
      choices: ['Pong', 'Adventure (Atari 2600)', 'Pac-Man', 'Pitfall'], answer: 1, points: 250, media: null },
    { prompt: 'Gabe Newell et le studio Valve sont raillés pour ne jamais sortir de jeu portant le numéro…',
      choices: ['2', '3', '4', '5'], answer: 1, points: 250, media: null },
    { prompt: 'Quel exploit insolite — mais bien RÉEL — a été réalisé avec le jeu Doom ?',
      choices: ['Le faire tourner sur un test de grossesse', 'Le jouer les yeux fermés', 'Le finir en 1 seconde', 'Le graver sur une pièce de monnaie'], answer: 0, points: 300, media: null },
    { prompt: 'Quel jeu détient le record du plus grand nombre de portages/plateformes ?',
      choices: ['Tetris', 'Pac-Man', 'Doom', 'Minecraft'], answer: 0, points: 300, media: null },
  ],

  // ---- QUIZ ANNÉES 80 (crescendo, anecdotes) ----------------------
  eighties: [
    { prompt: 'Le Rubik’s Cube a été inventé par un professeur hongrois d’…',
      choices: ['mathématiques', 'architecture', 'musique', 'chimie'], answer: 1, points: 50, media: null },
    { prompt: 'Les portières de la DeLorean (Retour vers le futur) s’ouvrent…',
      choices: ['vers le haut (ailes de mouette)', 'en coulissant', 'normalement', 'vers l’arrière'], answer: 0, points: 75, media: null },
    { prompt: 'Le tout premier Walkman Sony (1979) avait une particularité :',
      choices: ['deux prises casque', 'la radio FM', 'un petit écran', 'un haut-parleur'], answer: 0, points: 100, media: null },
    { prompt: 'Le clip « Thriller » de Michael Jackson (1983) dure près de…',
      choices: ['4 minutes', '8 minutes', '14 minutes', '20 minutes'], answer: 2, points: 125, media: null },
    { prompt: 'En quelle année le Minitel est-il déployé au niveau national en France ?',
      choices: ['1978', '1982', '1986', '1990'], answer: 1, points: 150, media: null },
    { prompt: 'Quel jouet, lancé en 1983, a provoqué des bousculades dans les magasins ?',
      choices: ['Les Transformers', 'Les Cabbage Patch Kids', 'Le Tamagotchi', 'Les Bratz'], answer: 1, points: 150, media: null },
    { prompt: 'Tetris a été créé en 1984 par Alexeï Pajitnov dans quel pays ?',
      choices: ['Japon', 'URSS', 'États-Unis', 'Pologne'], answer: 1, points: 175, media: null },
    { prompt: 'Les Jeux olympiques d’été de 1984 (Los Angeles) furent boycottés par…',
      choices: ['les États-Unis', 'l’URSS et le bloc de l’Est', 'l’Afrique', 'personne'], answer: 1, points: 200, media: null },
    { prompt: 'Le film « Top Gun » (1986) a fait exploser les engagements dans…',
      choices: ['l’armée de terre', 'l’US Navy (aviation)', 'les pompiers', 'la NASA'], answer: 1, points: 200, media: null },
    { prompt: 'En 1985, Coca-Cola change sa recette (« New Coke ») puis fait marche arrière au bout de…',
      choices: ['79 jours', '6 mois', '2 ans', 'jamais'], answer: 0, points: 225, media: null },
    { prompt: 'La chute du mur de Berlin (1989) a été précipitée par…',
      choices: ['une bourde d’un porte-parole est-allemand', 'un référendum', 'un vote de l’ONU', 'une grève générale'], answer: 0, points: 250, media: null },
    { prompt: 'Quel ordinateur familial (1982) est l’un des plus vendus de l’histoire ?',
      choices: ['Commodore 64', 'Amiga 500', 'Apple II', 'Atari ST'], answer: 0, points: 250, media: null },
    { prompt: 'Comment surnomme-t-on le krach boursier d’octobre 1987 ?',
      choices: ['Le Jeudi noir', 'Le Lundi noir', 'Le Vendredi rouge', 'Le Mardi gris'], answer: 1, points: 275, media: null },
    { prompt: 'Le tout premier nom de domaine « .com » de l’histoire (1985) était…',
      choices: ['apple.com', 'symbolics.com', 'ibm.com', 'microsoft.com'], answer: 1, points: 300, media: null },
    { prompt: 'La catastrophe nucléaire de Tchernobyl a été d’abord détectée à l’étranger par…',
      choices: ['un satellite américain', 'une centrale suédoise (alarme radioactivité)', 'la météo', 'un avion espion'], answer: 1, points: 300, media: null },
  ],

  // ---- QUIZ ANNÉES 90 (crescendo, anecdotes) ----------------------
  nineties: [
    { prompt: 'Le « bug de l’an 2000 » venait du fait que les années étaient codées sur…',
      choices: ['2 chiffres', 'en binaire', 'en chiffres romains', 'sans année'], answer: 0, points: 50, media: null },
    { prompt: 'Dans la série Friends (1994), le café où se retrouvent les amis s’appelle…',
      choices: ['Central Perk', 'Coffee Bean', 'Java Joe’s', 'The Grind'], answer: 0, points: 75, media: null },
    { prompt: 'Le premier site web de l’histoire (1991) était hébergé par…',
      choices: ['le CERN', 'la NASA', 'Microsoft', 'le MIT'], answer: 0, points: 100, media: null },
    { prompt: 'Quel film de 1999 a popularisé le ralenti à 360° (« bullet time ») ?',
      choices: ['Matrix', 'Fight Club', 'Gladiator', 'Le Sixième Sens'], answer: 0, points: 125, media: null },
    { prompt: 'En finale de la Coupe du monde 1998, la France bat le Brésil sur le score de…',
      choices: ['2-1', '3-0', '2-0', '3-1'], answer: 1, points: 150, media: null },
    { prompt: 'Le mot « spam » (courrier indésirable) vient…',
      choices: ['d’un acronyme', 'd’un sketch des Monty Python', 'd’un virus', 'd’un pseudo de hacker'], answer: 1, points: 175, media: null },
    { prompt: 'En 1996, Google s’appelait à l’origine…',
      choices: ['BackRub', 'Googol', 'SearchIt', 'PageRank'], answer: 0, points: 200, media: null },
    { prompt: 'La brebis Dolly (1996), premier clone, a été nommée d’après…',
      choices: ['Dolly Parton', 'une scientifique', 'une marque de pull', 'le hasard'], answer: 0, points: 200, media: null },
    { prompt: 'La PlayStation est née d’un partenariat raté entre Sony et…',
      choices: ['SEGA', 'Nintendo', 'Atari', 'Philips'], answer: 1, points: 225, media: null },
    { prompt: 'Le jeu « Snake » est apparu sur les téléphones Nokia en…',
      choices: ['1995', '1997', '1999', '2001'], answer: 1, points: 250, media: null },
    { prompt: 'Dans Titanic (1997), les mains qui dessinent Rose sont en réalité celles de…',
      choices: ['Leonardo DiCaprio', 'James Cameron (le réalisateur)', 'un peintre pro', 'Kate Winslet'], answer: 1, points: 250, media: null },
    { prompt: 'Le DVD apparaît commercialement (d’abord au Japon) en…',
      choices: ['1993', '1996', '2000', '2003'], answer: 1, points: 250, media: null },
    { prompt: 'Quel logiciel de messagerie instantanée, pionnier, est lancé en 1996 ?',
      choices: ['MSN Messenger', 'ICQ', 'Skype', 'AIM'], answer: 1, points: 275, media: null },
    { prompt: 'Le tout premier objet vendu sur eBay (1995) fut…',
      choices: ['un livre', 'un pointeur laser cassé', 'un CD', 'une voiture'], answer: 1, points: 300, media: null },
    { prompt: 'Quel jouet virtuel japonais (1996) devait être un animal « de poche » à élever ?',
      choices: ['Furby', 'Tamagotchi', 'Digimon', 'Bop It'], answer: 1, points: 300, media: null },
  ],

  // ---- QUIZ ANIMÉS / MANGA (crescendo, anecdotes) -----------------
  anime: [
    { prompt: 'Le mot « anime » est l’abréviation japonaise de…',
      choices: ['du mot anglais « animation »', 'du latin « anima »', 'd’un nom de studio', 'de « animal »'], answer: 0, points: 50, media: null },
    { prompt: 'Combien de Pokémon comptait la 1ʳᵉ génération (Rouge / Bleu) ?',
      choices: ['100', '151', '251', '386'], answer: 1, points: 75, media: null },
    { prompt: 'Dans Dragon Ball, Goku (« Kakarot ») et les Saiyans portent des noms de…',
      choices: ['fruits', 'légumes', 'épices', 'fleurs'], answer: 1, points: 100, media: null },
    { prompt: 'Goldorak (1978), énorme succès en France, s’appelle au Japon…',
      choices: ['Mazinger', 'UFO Robo Grendizer', 'Gundam', 'Voltron'], answer: 1, points: 125, media: null },
    { prompt: 'Dans Naruto, le mot « Naruto » désigne aussi…',
      choices: ['un tourbillon (et la garniture rose des ramen)', 'une fleur', 'une montagne', 'un sabre'], answer: 0, points: 150, media: null },
    { prompt: 'Osamu Tezuka (Astro Boy), « dieu du manga », a inspiré ses grands yeux de personnages de…',
      choices: ['Disney', 'la peinture classique', 'les estampes', 'la BD franco-belge'], answer: 0, points: 175, media: null },
    { prompt: '« Le Voyage de Chihiro » (Ghibli) a remporté en 2003…',
      choices: ['la Palme d’or', 'l’Oscar du meilleur film d’animation', 'un César', 'aucun prix'], answer: 1, points: 200, media: null },
    { prompt: 'Le studio Ghibli tire son nom…',
      choices: ['d’un avion italien (et d’un vent chaud)', 'd’un mot japonais', 'du nom du fondateur', 'd’un dieu shinto'], answer: 0, points: 200, media: null },
    { prompt: 'Dans le manga d’origine de Pokémon, la mascotte n’était pas Pikachu mais…',
      choices: ['Rondoudou', 'Mélofée (Clefairy)', 'Évoli', 'Miaouss'], answer: 1, points: 225, media: null },
    { prompt: 'Dragon Ball s’inspire d’un grand roman chinois classique :',
      choices: ['Le Roi Singe (Pérégrination vers l’Ouest)', 'L’Art de la guerre', 'Les Trois Royaumes', 'Le Rêve dans le pavillon rouge'], answer: 0, points: 250, media: null },
    { prompt: 'Dans Saint Seiya (Les Chevaliers du Zodiaque), les armures s’appellent des…',
      choices: ['Cloth', 'Armor', 'Zodiac', 'Saint'], answer: 0, points: 250, media: null },
    { prompt: '« Death Note » a même été interdit dans certaines écoles à cause…',
      choices: ['d’élèves écrivant de vrais « cahiers de la mort »', 'de sa violence', 'd’un procès', 'd’une faute de traduction'], answer: 0, points: 250, media: null },
    { prompt: 'One Piece détient le record Guinness du…',
      choices: ['plus long manga', 'plus d’exemplaires publiés pour un seul auteur', 'plus de films dérivés', 'plus de langues'], answer: 1, points: 275, media: null },
    { prompt: 'À l’origine, le mot « otaku » était une formule POLIE signifiant…',
      choices: ['« votre maison » / « vous »', '« fou »', '« enfant »', '« collectionneur »'], answer: 0, points: 300, media: null },
    { prompt: 'Quel est le manga le plus vendu de l’histoire ?',
      choices: ['Naruto', 'One Piece', 'Dragon Ball', 'Détective Conan'], answer: 1, points: 300, media: null },
  ],

};

export function deckLength(deck) {
  return (QUESTIONS[deck] || []).length;
}
