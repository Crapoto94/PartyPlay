// =====================================================================
//  TTCQ — « Tu Te Cotes Combien ? » — banque de thèmes/questions.
//  343 thèmes, 8 questions progressives par thème (niveaux 1 à 8).
//  Réponse libre (saisie smartphone) : un mot court ou un nombre.
// =====================================================================

export const TTCQ_THEMES = [
 {
  "id": "culture_001",
  "cat": "culture",
  "name": "La France",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la France ?",
    "a": "Paris"
   },
   {
    "q": "Quel fleuve traverse Paris ?",
    "a": "Seine"
   },
   {
    "q": "Quel monument parisien de fer, haut de 330 m, fut inauguré en 1889 ?",
    "a": "Eiffel"
   },
   {
    "q": "Quelle chaîne de montagnes sépare la France de l'Espagne ?",
    "a": "Pyrenees"
   },
   {
    "q": "En quelle année a éclaté la Révolution française ?",
    "a": "1789"
   },
   {
    "q": "Combien la France métropolitaine compte-t-elle de régions depuis 2016 ?",
    "a": "13"
   },
   {
    "q": "Quel roi de France a régné 72 ans, un record européen ?",
    "c": [
     "Louis XIV",
     "Louis XV",
     "Louis XVI",
     "Henri IV"
    ],
    "a": "Louis XIV"
   },
   {
    "q": "Combien de rivets, environ, assemblent la structure de la tour Eiffel ?",
    "a": "2500000"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_002",
  "cat": "culture",
  "name": "Les États-Unis",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale des États-Unis ?",
    "c": [
     "Washington",
     "New York",
     "Boston",
     "Los Angeles"
    ],
    "a": "Washington"
   },
   {
    "q": "Comment se nomme la statue offerte par la France, à New York ? La statue de la ___ ?",
    "a": "Liberte"
   },
   {
    "q": "Combien d'étoiles compte le drapeau américain ?",
    "a": "50"
   },
   {
    "q": "Quel grand fleuve traverse la Nouvelle-Orléans ?",
    "c": [
     "Mississippi",
     "Colorado",
     "Hudson",
     "Rio Grande"
    ],
    "a": "Mississippi"
   },
   {
    "q": "Quel président américain a mené la guerre de Sécession ?",
    "a": "Lincoln"
   },
   {
    "q": "En quelle année les États-Unis ont-ils déclaré leur indépendance ?",
    "a": "1776"
   },
   {
    "q": "Quel sommet d'Alaska (6190 m) est le plus haut d'Amérique du Nord ?",
    "c": [
     "Denali",
     "Everest",
     "Rainier",
     "Whitney"
    ],
    "a": "Denali"
   },
   {
    "q": "Combien de marches gravit-on pour atteindre la couronne de la statue de la Liberté ?",
    "a": "354"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_003",
  "cat": "culture",
  "name": "L'Allemagne",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de l'Allemagne ?",
    "a": "Berlin"
   },
   {
    "q": "En quelle année le mur de Berlin est-il tombé ?",
    "a": "1989"
   },
   {
    "q": "Quelle boisson à base d'orge et de houblon est emblématique d'Allemagne ?",
    "a": "Biere"
   },
   {
    "q": "Quel constructeur automobile allemand a pour logo quatre anneaux ?",
    "a": "Audi"
   },
   {
    "q": "Quel compositeur allemand devenu sourd a écrit la 9e symphonie ?",
    "c": [
     "Beethoven",
     "Mozart",
     "Bach",
     "Wagner"
    ],
    "a": "Beethoven"
   },
   {
    "q": "Qui fut chancelière d'Allemagne de 2005 à 2021 ?",
    "a": "Merkel"
   },
   {
    "q": "Quel philosophe allemand a théorisé le « surhomme » ?",
    "c": [
     "Nietzsche",
     "Kant",
     "Hegel",
     "Marx"
    ],
    "a": "Nietzsche"
   },
   {
    "q": "En quelle année la ville de Berlin est-elle mentionnée pour la première fois dans un document ?",
    "a": "1237"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_004",
  "cat": "culture",
  "name": "L'Espagne",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de l'Espagne ?",
    "a": "Madrid"
   },
   {
    "q": "Quelle danse espagnole se rythme aux castagnettes ?",
    "a": "Flamenco"
   },
   {
    "q": "Quel architecte a conçu la Sagrada Família à Barcelone ?",
    "a": "Gaudi"
   },
   {
    "q": "Quelle langue co-officielle est parlée en Catalogne ?",
    "a": "Catalan"
   },
   {
    "q": "Comment nomme-t-on le combat entre un homme et un taureau, dans une arène ?",
    "a": "Corrida"
   },
   {
    "q": "Quel peintre espagnol a peint le tableau Guernica ?",
    "a": "Picasso"
   },
   {
    "q": "En quelle année Barcelone a-t-elle accueilli les Jeux olympiques d'été ?",
    "a": "1992"
   },
   {
    "q": "Combien de pièces compte le Palais royal de Madrid, le plus grand d'Europe de l'Ouest ?",
    "a": "3418"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_005",
  "cat": "culture",
  "name": "La Chine",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Chine ?",
    "a": "Pekin"
   },
   {
    "q": "Quel long ouvrage défensif chinois est visible depuis l'espace, dit la légende ?",
    "a": "Muraille"
   },
   {
    "q": "Quel animal noir et blanc est l'emblème de la Chine ?",
    "a": "Panda"
   },
   {
    "q": "Quelle est la monnaie officielle chinoise ?",
    "a": "Yuan"
   },
   {
    "q": "Quel philosophe chinois est l'auteur des Entretiens ?",
    "c": [
     "Confucius",
     "Lao Tseu",
     "Sun Tzu",
     "Bouddha"
    ],
    "a": "Confucius"
   },
   {
    "q": "Combien de fuseaux horaires officiels la Chine utilise-t-elle malgré son immensité ?",
    "a": "1"
   },
   {
    "q": "Quelle dynastie a fait construire l'armée en terre cuite de Xi'an ?",
    "c": [
     "Qin",
     "Ming",
     "Han",
     "Tang"
    ],
    "a": "Qin"
   },
   {
    "q": "Sur combien de kilomètres s'étend la Grande Muraille selon le relevé officiel de 2012 ?",
    "a": "21196"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_006",
  "cat": "culture",
  "name": "Le Brésil",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale du Brésil ?",
    "a": "Brasilia"
   },
   {
    "q": "Quelle est la langue officielle du Brésil ?",
    "c": [
     "Portugais",
     "Espagnol",
     "Brésilien",
     "Latin"
    ],
    "a": "Portugais"
   },
   {
    "q": "Comment surnomme-t-on la statue du Christ qui domine Rio ? Le Christ ___ ?",
    "c": [
     "Rédempteur",
     "Sauveur",
     "Roi",
     "Béni"
    ],
    "a": "Rédempteur"
   },
   {
    "q": "Quelle danse rythme le carnaval brésilien ?",
    "a": "Samba"
   },
   {
    "q": "Quel fleuve, le plus puissant du monde, traverse le nord du Brésil ?",
    "a": "Amazone"
   },
   {
    "q": "Quel sport est roi au Brésil ?",
    "a": "Football"
   },
   {
    "q": "Combien de Coupes du monde de football le Brésil a-t-il remportées ?",
    "a": "5"
   },
   {
    "q": "De combien de mètres de haut est la statue du Christ Rédempteur, socle compris ?",
    "a": "38"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_007",
  "cat": "culture",
  "name": "L'Inde",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de l'Inde ?",
    "a": "Delhi"
   },
   {
    "q": "Quel mausolée de marbre blanc se dresse à Agra ?",
    "c": [
     "Taj Mahal",
     "Fort Rouge",
     "Temple d'Or",
     "Qutub Minar"
    ],
    "a": "Taj Mahal"
   },
   {
    "q": "Quelle est la religion majoritaire en Inde ?",
    "c": [
     "Hindouisme",
     "Bouddhisme",
     "Islam",
     "Sikhisme"
    ],
    "a": "Hindouisme"
   },
   {
    "q": "Quel animal est considéré comme sacré par les hindous ?",
    "a": "Vache"
   },
   {
    "q": "Quelle épice jaune-orangé est typique de la cuisine indienne ?",
    "a": "Curcuma"
   },
   {
    "q": "Quel fleuve est vénéré comme sacré en Inde ?",
    "a": "Gange"
   },
   {
    "q": "Quel mahatma a mené la résistance non-violente contre la colonisation britannique ?",
    "a": "Gandhi"
   },
   {
    "q": "En combien d'années, environ, le Taj Mahal a-t-il été construit ?",
    "a": "22"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_008",
  "cat": "culture",
  "name": "La Russie",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Russie ?",
    "a": "Moscou"
   },
   {
    "q": "Quelle cathédrale aux bulbes colorés orne la Place Rouge ?",
    "c": [
     "Saint-Basile",
     "Kazan",
     "Christ-Sauveur",
     "Sainte-Sophie"
    ],
    "a": "Saint-Basile"
   },
   {
    "q": "Quel est le fleuve le plus long d'Europe, en Russie ?",
    "a": "Volga"
   },
   {
    "q": "Le célèbre ballet russe s'intitule « Le Lac des ___ » ?",
    "a": "Cygnes"
   },
   {
    "q": "En quelle année l'URSS s'est-elle effondrée ?",
    "a": "1991"
   },
   {
    "q": "Quel écrivain russe est l'auteur de Guerre et Paix ?",
    "c": [
     "Tolstoï",
     "Dostoïevski",
     "Tchekhov",
     "Pouchkine"
    ],
    "a": "Tolstoï"
   },
   {
    "q": "Quel lac sibérien est le plus profond du monde ?",
    "a": "Baikal"
   },
   {
    "q": "Quelle est la profondeur maximale du lac Baïkal, en mètres ?",
    "a": "1642"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_009",
  "cat": "culture",
  "name": "Le Canada",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale du Canada ?",
    "c": [
     "Ottawa",
     "Toronto",
     "Montréal",
     "Vancouver"
    ],
    "a": "Ottawa"
   },
   {
    "q": "Quelle feuille orne le drapeau du Canada ?",
    "a": "Erable"
   },
   {
    "q": "Combien de langues officielles compte le Canada ?",
    "a": "2"
   },
   {
    "q": "Quelles chutes célèbres se trouvent à la frontière Canada–États-Unis ?",
    "a": "Niagara"
   },
   {
    "q": "Quelle province canadienne est majoritairement francophone ?",
    "a": "Quebec"
   },
   {
    "q": "Quel sport de glace est une passion nationale au Canada ?",
    "a": "Hockey"
   },
   {
    "q": "En quelle année a eu lieu la Confédération canadienne ?",
    "a": "1867"
   },
   {
    "q": "Quelle est la longueur, en kilomètres, de la frontière Canada–États-Unis, la plus longue du monde ?",
    "a": "8891"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_010",
  "cat": "culture",
  "name": "L'Australie",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de l'Australie (ce n'est pas Sydney) ?",
    "c": [
     "Canberra",
     "Sydney",
     "Melbourne",
     "Perth"
    ],
    "a": "Canberra"
   },
   {
    "q": "Quel marsupial sauteur est l'emblème de l'Australie ?",
    "c": [
     "Kangourou",
     "Koala",
     "Wombat",
     "Émeu"
    ],
    "a": "Kangourou"
   },
   {
    "q": "Quel immense récif corallien longe la côte nord-est australienne ? La Grande ___ de corail ?",
    "a": "Barriere"
   },
   {
    "q": "Comment nomme-t-on l'immense arrière-pays désertique australien ?",
    "a": "Outback"
   },
   {
    "q": "Quelle est la monnaie officielle de l'Australie ? Le ___ australien ?",
    "a": "Dollar"
   },
   {
    "q": "Quel rocher rouge sacré des Aborigènes se dresse au centre du pays ?",
    "a": "Uluru"
   },
   {
    "q": "En quelle année les colonies australiennes se sont-elles fédérées ?",
    "a": "1901"
   },
   {
    "q": "De combien de mètres le rocher Uluru s'élève-t-il au-dessus de la plaine ?",
    "a": "348"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_011",
  "cat": "culture",
  "name": "Le Mexique",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Le Mexique ?",
    "c": [
     "Vienne",
     "Londres",
     "Paris",
     "Mexico"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de Le Mexique ?",
    "c": [
     "Churro",
     "Tacos",
     "Tamale",
     "Chile relleno"
    ],
    "a": 1
   },
   {
    "q": "Quelle civilisation ancienne a construit Teotihuacán au Mexique ?",
    "c": [
     "Les Olmèques",
     "Les Toltèques",
     "Les Mayas",
     "Les Aztèques"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat mexicain à base de tortilla roulée farcie ?",
    "c": [
     "Le taco",
     "Le burrito",
     "L'enchilada",
     "La quesadilla"
    ],
    "a": 2
   },
   {
    "q": "Quel peintre mexicain est connu pour ses autoportraits ?",
    "c": [
     "Diego Rivera",
     "José Clemente Orozco",
     "Frida Kahlo",
     "David Alfaro Siqueiros"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le Mexique a-t-il célébré le bicentenaire de son indépendance ?",
    "c": [
     "1990",
     "2010",
     "2020",
     "2000"
    ],
    "a": 1
   },
   {
    "q": "Quelle boisson alcoolisée mexicaine est fabriquée à partir d'agave ?",
    "c": [
     "La raicilla",
     "Le mezcal",
     "La tequila",
     "Le pulque"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la plus grande pyramide du monde située au Mexique ?",
    "c": [
     "La Pyramide de Kukulcán",
     "La Grande Pyramide de Cholula",
     "La Pyramide du Soleil",
     "La Pyramide de la Lune"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "culture_012",
  "cat": "culture",
  "name": "L'Égypte",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de L'Égypte ?",
    "c": [
     "Londres",
     "Vienne",
     "Paris",
     "Le Caire"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de L'Égypte ?",
    "c": [
     "Couscous",
     "Mouloukhiya",
     "Falafel",
     "Kochari"
    ],
    "a": 3
   },
   {
    "q": "Quel fleuve traverse l'Égypte ?",
    "c": [
     "Le Jourdain",
     "Le Nil",
     "L'Euphrate",
     "Le Tigre"
    ],
    "a": 1
   },
   {
    "q": "Quel pharaon a fait construire la plus grande pyramide de Gizeh ?",
    "c": [
     "Ramsès II",
     "Khéops",
     "Mykérinos",
     "Khéphren"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la capitale de l'Égypte ?",
    "c": [
     "Assouan",
     "Alexandrie",
     "Louxor",
     "Le Caire"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle l'écriture égyptienne antique ?",
    "c": [
     "Le démotique",
     "Le cunéiforme",
     "Le linéaire B",
     "Les hiéroglyphes"
    ],
    "a": 3
   },
   {
    "q": "Qui a découvert le tombeau de Toutankhamon en 1922 ?",
    "c": [
     "Jean-François Champollion",
     "Howard Carter",
     "Gaston Maspero",
     "Flinders Petrie"
    ],
    "a": 1
   },
   {
    "q": "Quel dieu égyptien avait une tête de chacal ?",
    "c": [
     "Anubis",
     "Horus",
     "Osiris",
     "Thot"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "culture_013",
  "cat": "culture",
  "name": "La Grèce",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de La Grèce ?",
    "c": [
     "Athènes",
     "Paris",
     "Londres",
     "Vienne"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plat typique de La Grèce ?",
    "c": [
     "Moussaka",
     "Souvlaki",
     "Pita",
     "Baklava"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la capitale de la Grèce ?",
    "c": [
     "Le Pirée",
     "Thessalonique",
     "Héraklion",
     "Athènes"
    ],
    "a": 3
   },
   {
    "q": "Quel est le dieu suprême de la mythologie grecque ?",
    "c": [
     "Zeus",
     "Poséidon",
     "Hadès",
     "Apollon"
    ],
    "a": 0
   },
   {
    "q": "Quel philosophe grec a été le précepteur d'Alexandre le Grand ?",
    "c": [
     "Pythagore",
     "Socrate",
     "Aristote",
     "Platon"
    ],
    "a": 2
   },
   {
    "q": "En quelle année les premiers Jeux olympiques antiques ont-ils eu lieu ?",
    "c": [
     "336 av. J.-C.",
     "490 av. J.-C.",
     "1000 av. J.-C.",
     "776 av. J.-C."
    ],
    "a": 3
   },
   {
    "q": "Quel site archéologique grec est célèbre pour son oracle ?",
    "c": [
     "Olympie",
     "Delphes",
     "Épidaure",
     "Corinthe"
    ],
    "a": 1
   },
   {
    "q": "Qui a écrit 'L'Iliade' et 'L'Odyssée' ?",
    "c": [
     "Euripide",
     "Sophocle",
     "Homère",
     "Hésiode"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "culture_014",
  "cat": "culture",
  "name": "La Turquie",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de La Turquie ?",
    "c": [
     "Vienne",
     "Londres",
     "Paris",
     "Ankara"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de La Turquie ?",
    "c": [
     "Döner",
     "Kebab",
     "Baklava",
     "Lahmacun"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la capitale de la Turquie ?",
    "c": [
     "Ankara",
     "Antalya",
     "Istanbul",
     "Izmir"
    ],
    "a": 0
   },
   {
    "q": "Quel détroit sépare l'Europe de l'Asie à Istanbul ?",
    "c": [
     "Le Bosphore et les Dardanelles",
     "Le Bosphore",
     "Le détroit d'Istanbul",
     "Les Dardanelles"
    ],
    "a": 1
   },
   {
    "q": "Quel est le nom de l'immense palais ottoman à Istanbul ?",
    "c": [
     "Sultanahmet",
     "Topkapi",
     "Dolmabahçe",
     "Süleymaniye"
    ],
    "a": 1
   },
   {
    "q": "Qui a fondé la République turque en 1923 ?",
    "c": [
     "Mehmed VI",
     "Enver Pacha",
     "Ismet Inönü",
     "Mustafa Kemal Atatürk"
    ],
    "a": 3
   },
   {
    "q": "Quelle célèbre église byzantine transformée en mosquée se trouve à Istanbul ?",
    "c": [
     "La Mosquée Süleymaniye",
     "La Mosquée Bleue",
     "L'Église Saint-Sauveur-in-Chora",
     "Sainte-Sophie"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus grand lac de Turquie ?",
    "c": [
     "Le lac Beyşehir",
     "Le lac Tuz",
     "Le lac Eğirdir",
     "Le lac Van"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "culture_015",
  "cat": "culture",
  "name": "La Suisse",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de La Suisse ?",
    "c": [
     "Berne",
     "Paris",
     "Vienne",
     "Londres"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plat typique de La Suisse ?",
    "c": [
     "Nusstorte",
     "Raclette",
     "Fondue",
     "Rösti"
    ],
    "a": 2
   },
   {
    "q": "Combien de langues officielles compte la Suisse ?",
    "c": [
     "2",
     "5",
     "4",
     "3"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus haut sommet de Suisse ?",
    "c": [
     "Le Cervin",
     "La Jungfrau",
     "L'Eiger",
     "Le mont Rose"
    ],
    "a": 3
   },
   {
    "q": "Quelle organisation internationale a son siège à Genève ?",
    "c": [
     "L'UNESCO",
     "L'ONU",
     "La Banque mondiale",
     "L'OTAN"
    ],
    "a": 1
   },
   {
    "q": "En quelle année les femmes ont-elles obtenu le droit de vote au niveau fédéral en Suisse ?",
    "c": [
     "1959",
     "1965",
     "1971",
     "1981"
    ],
    "a": 2
   },
   {
    "q": "Quel fromage suisse est célèbre pour ses trous ?",
    "c": [
     "Le vacherin",
     "Le raclette",
     "Le gruyère",
     "L'emmental"
    ],
    "a": 3
   },
   {
    "q": "Qui a fondé la Croix-Rouge suisse ?",
    "c": [
     "Théodore Maunoir",
     "Guillaume-Henri Dufour",
     "Henry Dunant",
     "Louis Appia"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "culture_016",
  "cat": "culture",
  "name": "La Belgique",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de La Belgique ?",
    "c": [
     "Bruxelles",
     "Vienne",
     "Londres",
     "Paris"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plat typique de La Belgique ?",
    "c": [
     "Gaufres",
     "Moules-frites",
     "Carbonade",
     "Waterzooi"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la capitale de la Belgique ?",
    "c": [
     "Bruxelles",
     "Liège",
     "Gand",
     "Anvers"
    ],
    "a": 0
   },
   {
    "q": "Combien de communautés linguistiques principales compte la Belgique ?",
    "c": [
     "4",
     "3",
     "2",
     "1"
    ],
    "a": 1
   },
   {
    "q": "Quel plat de moules-frites est associé à la Belgique ?",
    "c": [
     "Le stoemp",
     "Les moules-frites",
     "Les gaufres",
     "Le waterzooï"
    ],
    "a": 1
   },
   {
    "q": "Quel peintre belge a peint 'La Trahison des images' (Ceci n'est pas une pipe) ?",
    "c": [
     "Paul Delvaux",
     "Pieter Brueghel",
     "René Magritte",
     "James Ensor"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la Belgique a-t-elle obtenu son indépendance ?",
    "c": [
     "1848",
     "1815",
     "1830",
     "1867"
    ],
    "a": 2
   },
   {
    "q": "Quel était le nom du roi des Belges qui a colonisé le Congo ?",
    "c": [
     "Léopold II",
     "Albert Ier",
     "Léopold III",
     "Baudouin"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "culture_017",
  "cat": "culture",
  "name": "Les Pays-Bas",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Les Pays-Bas ?",
    "c": [
     "Amsterdam",
     "Londres",
     "Vienne",
     "Paris"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plat typique de Les Pays-Bas ?",
    "c": [
     "Poffertjes",
     "Drop",
     "Haring",
     "Stamppot"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la capitale des Pays-Bas ?",
    "c": [
     "La Haye",
     "Amsterdam",
     "Utrecht",
     "Rotterdam"
    ],
    "a": 1
   },
   {
    "q": "Quel est le nom du système de digues et barrages néerlandais ?",
    "c": [
     "Le Delta Works",
     "La Ligne d'eau",
     "Le polder",
     "L'Afsluitdijk"
    ],
    "a": 0
   },
   {
    "q": "Quel peintre néerlandais a coupé son oreille ?",
    "c": [
     "Rembrandt",
     "Vincent van Gogh",
     "Frans Hals",
     "Johannes Vermeer"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus grande exportation florale des Pays-Bas ?",
    "c": [
     "Les lys",
     "Les tulipes",
     "Les jacinthes",
     "Les roses"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le siècle d'or néerlandais a-t-il culminé ?",
    "c": [
     "XVIe siècle",
     "XVIIe siècle",
     "XVIIIe siècle",
     "XVe siècle"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus haute tour des Pays-Bas ?",
    "c": [
     "La tour Euromast",
     "La tour Zalmhaven",
     "La tour Delftse Poort",
     "La tour Rotterdam"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "culture_018",
  "cat": "culture",
  "name": "La Suède",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de La Suède ?",
    "c": [
     "Stockholm",
     "Paris",
     "Vienne",
     "Londres"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plat typique de La Suède ?",
    "c": [
     "Kanelbulle",
     "Gravlax",
     "Smörgåstårta",
     "Boulettes"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la capitale de la Suède ?",
    "c": [
     "Malmö",
     "Stockholm",
     "Göteborg",
     "Uppsala"
    ],
    "a": 1
   },
   {
    "q": "Quel groupe de musique suédois a gagné l'Eurovision en 1974 ?",
    "c": [
     "Ace of Base",
     "The Cardigans",
     "ABBA",
     "Roxette"
    ],
    "a": 2
   },
   {
    "q": "Quel est le nom du prix le plus prestigieux décerné en Suède ?",
    "c": [
     "Le prix August",
     "Le prix Selma Lagerlöf",
     "Le prix Polar Music",
     "Le prix Nobel"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la Suède a-t-elle adopté le suffrage universel masculin ?",
    "c": [
     "1921",
     "1898",
     "1866",
     "1909"
    ],
    "a": 3
   },
   {
    "q": "Quel explorateur suédois a découvert le passage du Nord-Est ?",
    "c": [
     "Sven Hedin",
     "Eric Wickberg",
     "Adolf Erik Nordenskiöld",
     "Anders Andrée"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus grand lac de Suède ?",
    "c": [
     "Le lac Hjälmaren",
     "Le lac Mälaren",
     "Le lac Vättern",
     "Le lac Vänern"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "culture_019",
  "cat": "culture",
  "name": "La Norvège",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de La Norvège ?",
    "c": [
     "Londres",
     "Paris",
     "Vienne",
     "Oslo"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de La Norvège ?",
    "c": [
     "Kjøttkaker",
     "Fårikål",
     "Lutefisk",
     "Vafler"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la capitale de la Norvège ?",
    "c": [
     "Trondheim",
     "Bergen",
     "Stavanger",
     "Oslo"
    ],
    "a": 3
   },
   {
    "q": "Quel phénomène naturel est visible en Norvège l'hiver ?",
    "c": [
     "Les nuages nacrés",
     "Les arcs-en-ciel polaires",
     "Les aurores boréales",
     "Le soleil de minuit"
    ],
    "a": 2
   },
   {
    "q": "Quel explorateur norvégien a atteint le pôle Sud en premier ?",
    "c": [
     "Leif Erikson",
     "Roald Amundsen",
     "Thor Heyerdahl",
     "Fridtjof Nansen"
    ],
    "a": 1
   },
   {
    "q": "Quel compositeur norvégien a écrit 'Peer Gynt' ?",
    "c": [
     "Carl Nielsen",
     "Jean Sibelius",
     "Edvard Grieg",
     "Johan Svendsen"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la Norvège a-t-elle obtenu son indépendance de la Suède ?",
    "c": [
     "1914",
     "1814",
     "1905",
     "1898"
    ],
    "a": 2
   },
   {
    "q": "Quel fromage norvégien brun est fabriqué à partir de lactosérum ?",
    "c": [
     "Le gamalost",
     "Le jarlsberg",
     "Le brunost",
     "Le nøkkelost"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "culture_020",
  "cat": "culture",
  "name": "Le Portugal",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Le Portugal ?",
    "c": [
     "Londres",
     "Paris",
     "Lisbonne",
     "Vienne"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plat typique de Le Portugal ?",
    "c": [
     "Bacalhau",
     "Caldo verde",
     "Francesinha",
     "Pastéis"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la capitale du Portugal ?",
    "c": [
     "Lisbonne",
     "Porto",
     "Coimbra",
     "Faro"
    ],
    "a": 0
   },
   {
    "q": "Quel explorateur portugais a découvert la route maritime vers l'Inde ?",
    "c": [
     "Henri le Navigateur",
     "Ferdinand Magellan",
     "Bartolomeu Dias",
     "Vasco de Gama"
    ],
    "a": 3
   },
   {
    "q": "Quelle pâtisserie portugaise est célèbre ?",
    "c": [
     "Le queijada",
     "Le pão de ló",
     "Le pastel de nata",
     "Le bolo de arroz"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus long pont d'Europe situé à Lisbonne ?",
    "c": [
     "Le pont 25 de Abril",
     "Le pont de l'Europe",
     "Le pont Vasco de Gama",
     "Le pont Dom Luís I"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le tremblement de terre a-t-il détruit Lisbonne ?",
    "c": [
     "1755",
     "1800",
     "1777",
     "1720"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plus grand archipel portugais dans l'Atlantique ?",
    "c": [
     "Les Berlengas",
     "Madère",
     "Les Açores",
     "Les îles Selvagens"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "culture_021",
  "cat": "culture",
  "name": "L'Argentine",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de L'Argentine ?",
    "c": [
     "Londres",
     "Vienne",
     "Paris",
     "Buenos Aires"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de L'Argentine ?",
    "c": [
     "Empanada",
     "Chimichurri",
     "Dulce leche",
     "Asado"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la capitale de l'Argentine ?",
    "c": [
     "Rosario",
     "Mendoza",
     "Córdoba",
     "Buenos Aires"
    ],
    "a": 3
   },
   {
    "q": "Quel sport est emblématique de l'Argentine ?",
    "c": [
     "Le rugby",
     "Le polo",
     "Le tennis",
     "Le football"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la danse traditionnelle argentine ?",
    "c": [
     "La samba",
     "Le tango",
     "Le flamenco",
     "La salsa"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus haute montagne des Amériques située en Argentine ?",
    "c": [
     "L'Aconcagua",
     "Le Cerro Bonete",
     "Le Monte Pissis",
     "L'Ojos del Salado"
    ],
    "a": 0
   },
   {
    "q": "Qui était la première dame d'Argentine la plus célèbre ?",
    "c": [
     "Cristina Kirchner",
     "Isabel Perón",
     "Mabel Collins",
     "Eva Perón"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la guerre des Malouines a-t-elle eu lieu ?",
    "c": [
     "1980",
     "1982",
     "1985",
     "1978"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "culture_022",
  "cat": "culture",
  "name": "La Corée du Sud",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de La Corée du Sud ?",
    "c": [
     "Londres",
     "Vienne",
     "Paris",
     "Séoul"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de La Corée du Sud ?",
    "c": [
     "Japchae",
     "Kimchi",
     "Bulgogi",
     "Bibimbap"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la capitale de la Corée du Sud ?",
    "c": [
     "Séoul",
     "Daegu",
     "Busan",
     "Incheon"
    ],
    "a": 0
   },
   {
    "q": "Quel groupe de K-pop a connu un succès mondial avec 'Gangnam Style' ?",
    "c": [
     "Big Bang",
     "Blackpink",
     "BTS",
     "PSY"
    ],
    "a": 3
   },
   {
    "q": "Quel plat coréen est du chou fermenté épicé ?",
    "c": [
     "Le bibimbap",
     "Le japchae",
     "Le kimchi",
     "Le bulgogi"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la guerre de Corée a-t-elle commencé ?",
    "c": [
     "1950",
     "1953",
     "1955",
     "1948"
    ],
    "a": 0
   },
   {
    "q": "Quelle marque coréenne est le plus grand fabricant de téléviseurs au monde ?",
    "c": [
     "LG",
     "Samsung",
     "Hyundai",
     "SK"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé l'imprimerie à caractères mobiles en métal en Corée ?",
    "c": [
     "Sejong le Grand",
     "Kim Si-seup",
     "Jang Yeong-sil",
     "Choe Yun-ui"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "culture_023",
  "cat": "culture",
  "name": "L'Afrique du Sud",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de L'Afrique du Sud ?",
    "c": [
     "Vienne",
     "Paris",
     "Londres",
     "Pretoria"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de L'Afrique du Sud ?",
    "c": [
     "Bobotie",
     "Braai",
     "Biltong",
     "Potjiekos"
    ],
    "a": 1
   },
   {
    "q": "Combien de capitales compte l'Afrique du Sud ?",
    "c": [
     "1",
     "2",
     "3",
     "4"
    ],
    "a": 2
   },
   {
    "q": "Quel célèbre prisonnier politique est devenu président ?",
    "c": [
     "Oliver Tambo",
     "Desmond Tutu",
     "Nelson Mandela",
     "F. W. de Klerk"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus grand parc national d'Afrique du Sud ?",
    "c": [
     "Le parc Kruger",
     "Le parc Pilanesberg",
     "Le parc Addo",
     "Le parc Hluhluwe"
    ],
    "a": 0
   },
   {
    "q": "En quelle année l'apartheid a-t-il pris fin ?",
    "c": [
     "1996",
     "1990",
     "1992",
     "1994"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la plus grande ville d'Afrique du Sud ?",
    "c": [
     "Le Cap",
     "Johannesburg",
     "Pretoria",
     "Durban"
    ],
    "a": 1
   },
   {
    "q": "Quel écrivain sud-africain a remporté le prix Nobel en 1991 ?",
    "c": [
     "J. M. Coetzee",
     "Breyten Breytenbach",
     "Alan Paton",
     "Nadine Gordimer"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "culture_024",
  "cat": "culture",
  "name": "Le Maroc",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Le Maroc ?",
    "c": [
     "Paris",
     "Vienne",
     "Rabat",
     "Londres"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plat typique de Le Maroc ?",
    "c": [
     "Pastilla",
     "Merguez",
     "Tajine",
     "Couscous"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la capitale du Maroc ?",
    "c": [
     "Marrakech",
     "Rabat",
     "Fès",
     "Casablanca"
    ],
    "a": 1
   },
   {
    "q": "Quelle chaîne de montagnes traverse le Maroc ?",
    "c": [
     "L'Anti-Atlas",
     "Le Rif",
     "Le Moyen Atlas",
     "Le Haut Atlas"
    ],
    "a": 3
   },
   {
    "q": "Quel plat marocain est cuit dans un tajine ?",
    "c": [
     "Le couscous",
     "Le tajine",
     "Le harira",
     "La pastilla"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus ancienne université du monde située à Fès ?",
    "c": [
     "L'université Al-Azhar",
     "L'université de Paris",
     "L'université Al Quaraouiyine",
     "L'université de Bologne"
    ],
    "a": 2
   },
   {
    "q": "Qui était le roi du Maroc pendant la lutte pour l'indépendance ?",
    "c": [
     "Hassan II",
     "Mohammed V",
     "Mohammed VI",
     "Moulay Ismail"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le Maroc a-t-il recouvré son indépendance ?",
    "c": [
     "1962",
     "1956",
     "1960",
     "1953"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "culture_025",
  "cat": "culture",
  "name": "La Thaïlande",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de La Thaïlande ?",
    "c": [
     "Bangkok",
     "Londres",
     "Vienne",
     "Paris"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plat typique de La Thaïlande ?",
    "c": [
     "Pad thaï",
     "Som tam",
     "Khao soi",
     "Larb"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la capitale de la Thaïlande ?",
    "c": [
     "Pattaya",
     "Chiang Mai",
     "Bangkok",
     "Phuket"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plat national thaïlandais ?",
    "c": [
     "Le pad thaï",
     "Le tom yum",
     "Le curry vert",
     "Le som tam"
    ],
    "a": 0
   },
   {
    "q": "Quel animal sacré est vénéré en Thaïlande ?",
    "c": [
     "Le tigre",
     "Le cobra",
     "L'éléphant",
     "Le singe"
    ],
    "a": 2
   },
   {
    "q": "Quel roi thaïlandais a régné le plus longtemps dans l'histoire ?",
    "c": [
     "Rama IX (Bhumibol)",
     "Rama V (Chulalongkorn)",
     "Rama IV (Mongkut)",
     "Rama I"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le boxe traditionnelle thaïlandaise ?",
    "c": [
     "Le silat",
     "Le kick-boxing",
     "Le krav maga",
     "Le muay-thaï"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la Thaïlande a-t-elle adopté son nom actuel ?",
    "c": [
     "1949",
     "1939",
     "1925",
     "1912"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "culture_026",
  "cat": "culture",
  "name": "Nouvelle-Zélande",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Nouvelle-Zélande ?",
    "c": [
     "Paris",
     "Londres",
     "Vienne",
     "Wellington"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de Nouvelle-Zélande ?",
    "c": [
     "Kumara",
     "Whitebait",
     "Hangi",
     "Pavlova"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la capitale de la Nouvelle-Zélande ?",
    "c": [
     "Christchurch",
     "Wellington",
     "Auckland",
     "Hamilton"
    ],
    "a": 1
   },
   {
    "q": "Quel oiseau emblématique de Nouvelle-Zélande ne vole pas ?",
    "c": [
     "Le kakapo",
     "Le kiwi",
     "Le moa",
     "Le weka"
    ],
    "a": 1
   },
   {
    "q": "Quel peuple autochtone habite la Nouvelle-Zélande ?",
    "c": [
     "Les Maoris",
     "Les Aborigènes",
     "Les Papous",
     "Les Mélanésiens"
    ],
    "a": 0
   },
   {
    "q": "Quel film célèbre a été tourné en Nouvelle-Zélande ?",
    "c": [
     "Le Seigneur des Anneaux",
     "Avatar",
     "Le Dernier Samouraï",
     "King Kong"
    ],
    "a": 0
   },
   {
    "q": "Quel sport national est pratiqué en Nouvelle-Zélande avec un ballon ovale ?",
    "c": [
     "Le cricket",
     "Le football australien",
     "Le netball",
     "Le rugby"
    ],
    "a": 3
   },
   {
    "q": "En quelle année les femmes ont-elles obtenu le droit de vote en Nouvelle-Zélande ?",
    "c": [
     "1901",
     "1886",
     "1910",
     "1893"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "culture_027",
  "cat": "culture",
  "name": "Le Chili",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Le Chili ?",
    "c": [
     "Santiago",
     "Paris",
     "Vienne",
     "Londres"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plat typique de Le Chili ?",
    "c": [
     "Porotos",
     "Pastel choclo",
     "Cazuela",
     "Empanada"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la capitale du Chili ?",
    "c": [
     "Concepción",
     "Valparaíso",
     "La Serena",
     "Santiago"
    ],
    "a": 3
   },
   {
    "q": "Quel désert au Chili est le plus aride du monde ?",
    "c": [
     "Le désert de la Puna",
     "Le désert de la Valle de la Luna",
     "Le désert d'Atacama",
     "Le désert de la Patagonie"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la principale île chilienne dans le Pacifique ?",
    "c": [
     "La Terre de Feu",
     "L'archipel Juan Fernández",
     "L'île de Chiloé",
     "L'île de Pâques"
    ],
    "a": 3
   },
   {
    "q": "Quel poète chilien a remporté le prix Nobel de littérature en 1971 ?",
    "c": [
     "Vicente Huidobro",
     "Nicanor Parra",
     "Gabriela Mistral",
     "Pablo Neruda"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le Chili a-t-il retrouvé la démocratie après Pinochet ?",
    "c": [
     "1985",
     "1990",
     "1988",
     "1993"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus longue chaîne de montagnes traversant le Chili ?",
    "c": [
     "La Sierra Nevada",
     "La Cordillère des Andes",
     "La chaîne côtière",
     "La Patagonie"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "culture_028",
  "cat": "culture",
  "name": "Danemark",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Danemark ?",
    "c": [
     "Londres",
     "Vienne",
     "Paris",
     "Copenhague"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de Danemark ?",
    "c": [
     "Smørrebrød",
     "Rugbrød",
     "Æbleskiver",
     "Sild"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la capitale du Danemark ?",
    "c": [
     "Aarhus",
     "Odense",
     "Aalborg",
     "Copenhague"
    ],
    "a": 3
   },
   {
    "q": "Quel écrivain danois est célèbre pour ses contes ?",
    "c": [
     "Søren Kierkegaard",
     "Karen Blixen",
     "Hans Christian Andersen",
     "Ludvig Holberg"
    ],
    "a": 2
   },
   {
    "q": "Quel est le nom du drapeau danois ?",
    "c": [
     "Le Svendborg",
     "Le Dannebrog",
     "Le Norden",
     "Le Korsflag"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus grande île du Danemark ?",
    "c": [
     "Sjaelland",
     "Bornholm",
     "Lolland",
     "Fionie"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le Danemark a-t-il adopté la Constitution ?",
    "c": [
     "1864",
     "1849",
     "1830",
     "1901"
    ],
    "a": 1
   },
   {
    "q": "Quel pasteur et philosophe danois est considéré comme le père de l'existentialisme ?",
    "c": [
     "Søren Kierkegaard",
     "Georg Brandes",
     "N.F.S. Grundtvig",
     "Hans Lassen Martensen"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "culture_029",
  "cat": "culture",
  "name": "Finlande",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Finlande ?",
    "c": [
     "Helsinki",
     "Vienne",
     "Paris",
     "Londres"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plat typique de Finlande ?",
    "c": [
     "Lohikeitto",
     "Mustikkapiirakka",
     "Mämmi",
     "Karjalanpiirakka"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la capitale de la Finlande ?",
    "c": [
     "Helsinki",
     "Turku",
     "Tampere",
     "Oulu"
    ],
    "a": 0
   },
   {
    "q": "Quel phénomène naturel peut-on voir en Laponie finlandaise ?",
    "c": [
     "Tout ce qui précède",
     "Les aurores boréales",
     "Le soleil de minuit",
     "Les nuits polaires"
    ],
    "a": 0
   },
   {
    "q": "Quel est le sport national finlandais ?",
    "c": [
     "Le sauna",
     "Le hockey sur glace",
     "Le ski de fond",
     "Le pesäpallo"
    ],
    "a": 1
   },
   {
    "q": "En quelle année la Finlande a-t-elle déclaré son indépendance ?",
    "c": [
     "1917",
     "1918",
     "1920",
     "1919"
    ],
    "a": 0
   },
   {
    "q": "Quel compositeur finlandais a écrit 'Finlandia' ?",
    "c": [
     "Einojuhani Rautavaara",
     "Kaija Saariaho",
     "Jean Sibelius",
     "Magnus Lindberg"
    ],
    "a": 2
   },
   {
    "q": "Combien de lacs compte la Finlande ?",
    "c": [
     "Environ 300 000",
     "Environ 50 000",
     "Environ 188 000",
     "Environ 100 000"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "culture_030",
  "cat": "culture",
  "name": "Irlande",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de Irlande ?",
    "c": [
     "Vienne",
     "Paris",
     "Londres",
     "Dublin"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plat typique de Irlande ?",
    "c": [
     "Colcannon",
     "Boxty",
     "Coddle",
     "Irish stew"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la capitale de l'Irlande ?",
    "c": [
     "Dublin",
     "Galway",
     "Limerick",
     "Cork"
    ],
    "a": 0
   },
   {
    "q": "Quel est le symbole national de l'Irlande ?",
    "c": [
     "La harpe",
     "Le trèfle",
     "Le chardon",
     "Le leprechaun"
    ],
    "a": 0
   },
   {
    "q": "Quel écrivain irlandais a écrit 'Ulysse' ?",
    "c": [
     "W.B. Yeats",
     "Oscar Wilde",
     "James Joyce",
     "Samuel Beckett"
    ],
    "a": 2
   },
   {
    "q": "Quelle bière irlandaise est la plus célèbre ?",
    "c": [
     "La Murphy's",
     "La Smithwick's",
     "La Guinness",
     "La Kilkenny"
    ],
    "a": 2
   },
   {
    "q": "En quelle année l'Irlande est-elle devenue une république indépendante ?",
    "c": [
     "1948",
     "1949",
     "1922",
     "1937"
    ],
    "a": 1
   },
   {
    "q": "Quel saint est le patron de l'Irlande ?",
    "c": [
     "Saint Brendan",
     "Saint Columba",
     "Saint Kevin",
     "Saint Patrick"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cinema_001",
  "cat": "cinema",
  "name": "Films Jurassic Park",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Jurassic Park ?",
    "c": [
     "Besson",
     "Cameron",
     "Jackson",
     "Spielberg"
    ],
    "a": 3
   },
   {
    "q": "Jurassic Park est adapté d'un roman écrit par :",
    "c": [
     "Michael Crichton",
     "Stephen King",
     "Michael Bay",
     "George Lucas"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Jurassic Park est-il sorti ?",
    "c": [
     "1993",
     "1995",
     "1990",
     "1989"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur incarne le Dr Alan Grant ?",
    "c": [
     "Jeff Goldblum",
     "Sam Neill",
     "Laura Dern",
     "Richard Attenborough"
    ],
    "a": 1
   },
   {
    "q": "Quelle est l'espèce de dinosaure la plus dangereuse du film ?",
    "c": [
     "Le Dilophosaure",
     "Le T-Rex",
     "Le Velociraptor",
     "Le Brachiosaure"
    ],
    "a": 2
   },
   {
    "q": "Sur quelle île se déroule Jurassic Park ?",
    "c": [
     "Isla Sorna",
     "Isla Nublar",
     "Madagascar",
     "Hawaii"
    ],
    "a": 1
   },
   {
    "q": "Combien de suites Jurassic Park comptent la saga ?",
    "c": [
     "5",
     "4",
     "3",
     "6"
    ],
    "a": 3
   },
   {
    "q": "Quel personnage meurt dans la bouche d'un T-Rex ?",
    "c": [
     "Ray Arnold",
     "Ian Malcolm",
     "John Hammond",
     "Donald Gennaro"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cinema_002",
  "cat": "cinema",
  "name": "Films Star Wars",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Star Wars ?",
    "c": [
     "Abrams",
     "Spielberg",
     "Raimi",
     "Lucas"
    ],
    "a": 3
   },
   {
    "q": "Qui a créé la saga Star Wars ?",
    "c": [
     "George Lucas",
     "Ridley Scott",
     "James Cameron",
     "Steven Spielberg"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le premier Star Wars est-il sorti ?",
    "c": [
     "1980",
     "1982",
     "1977",
     "1975"
    ],
    "a": 2
   },
   {
    "q": "Quel est le nom du vaisseau de Han Solo ?",
    "c": [
     "Le TIE Fighter",
     "Le Destroyer Stellaire",
     "Le X-Wing",
     "Le Faucon Millenium"
    ],
    "a": 3
   },
   {
    "q": "Qui a interprété Dark Vador (voix) ?",
    "c": [
     "David Prowse",
     "James Earl Jones",
     "Ian McDiarmid",
     "Hayden Christensen"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la célèbre phrase de Dark Vador au sujet de Luke ?",
    "c": [
     "Rejoins-moi",
     "Je suis ton maître",
     "Je suis ton père",
     "Tu es mon fils"
    ],
    "a": 2
   },
   {
    "q": "Combien d'épisodes principaux compte la saga Star Wars ?",
    "c": [
     "9",
     "6",
     "12",
     "8"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Obi-Wan Kenobi dans la trilogie préquelle ?",
    "c": [
     "Hayden Christensen",
     "Liam Neeson",
     "Ewan McGregor",
     "Alec Guinness"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cinema_003",
  "cat": "cinema",
  "name": "Films Harry Potter",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Harry Potter ?",
    "c": [
     "Heyman",
     "Yates",
     "Columbus",
     "Cauron"
    ],
    "a": 2
   },
   {
    "q": "Qui a écrit les romans Harry Potter ?",
    "c": [
     "J.K. Rowling",
     "J.R.R. Tolkien",
     "Stephen King",
     "Roald Dahl"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Harry Potter ?",
    "c": [
     "Elijah Wood",
     "Rupert Grint",
     "Tom Felton",
     "Daniel Radcliffe"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la maison de Harry Potter à Poudlard ?",
    "c": [
     "Poufsouffle",
     "Serpentard",
     "Serdaigle",
     "Gryffondor"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle l'ennemi principal de Harry Potter ?",
    "c": [
     "Voldemort",
     "Severus Rogue",
     "Drago Malefoy",
     "Bellatrix Lestrange"
    ],
    "a": 0
   },
   {
    "q": "Quel est le nom du phénix de Dumbledore ?",
    "c": [
     "Hedwige",
     "Croack",
     "Fumseck",
     "Minuit"
    ],
    "a": 2
   },
   {
    "q": "Combien de films Harry Potter comptent la saga ?",
    "c": [
     "7",
     "10",
     "9",
     "8"
    ],
    "a": 3
   },
   {
    "q": "Quel sortilège est utilisé pour désarmer un adversaire ?",
    "c": [
     "Expelliarmus",
     "Expecto Patronum",
     "Avada Kedavra",
     "Accio"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cinema_004",
  "cat": "cinema",
  "name": "Films Le Seigneur des Anneaux",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Le Seigneur des Anneaux ?",
    "c": [
     "Jackson",
     "Maddalena",
     "Toro",
     "McKellen"
    ],
    "a": 0
   },
   {
    "q": "Qui a écrit Le Seigneur des Anneaux ?",
    "c": [
     "J.K. Rowling",
     "J.R.R. Tolkien",
     "George R.R. Martin",
     "C.S. Lewis"
    ],
    "a": 1
   },
   {
    "q": "Quel acteur joue Frodon Sacquet ?",
    "c": [
     "Ian McKellen",
     "Elijah Wood",
     "Viggo Mortensen",
     "Sean Astin"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle l'anneau unique détruit à la fin ?",
    "c": [
     "L'Anneau de Puissance",
     "L'Anneau des Elfes",
     "L'Anneau de Sauron",
     "Le Precious"
    ],
    "a": 2
   },
   {
    "q": "Quel personnage dit 'Vous ne passerez pas !' ?",
    "c": [
     "Gandalf",
     "Gimli",
     "Aragorn",
     "Legolas"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le premier film est-il sorti ?",
    "c": [
     "2003",
     "2001",
     "2000",
     "2002"
    ],
    "a": 1
   },
   {
    "q": "Combien de films compose la trilogie ?",
    "c": [
     "1",
     "4",
     "2",
     "3"
    ],
    "a": 3
   },
   {
    "q": "Qui a réalisé la trilogie ?",
    "c": [
     "Peter Jackson",
     "George Lucas",
     "Ridley Scott",
     "James Cameron"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cinema_005",
  "cat": "cinema",
  "name": "Films Marvel",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Marvel ?",
    "c": [
     "Whedon",
     "Gunn",
     "Russo",
     "Favreau"
    ],
    "a": 0
   },
   {
    "q": "Qui a créé l'univers Marvel ?",
    "c": [
     "Stan Lee",
     "Steve Ditko",
     "Jack Kirby",
     "Tous les trois"
    ],
    "a": 3
   },
   {
    "q": "Quel acteur joue Iron Man ?",
    "c": [
     "Robert Downey Jr.",
     "Chris Evans",
     "Scarlett Johansson",
     "Chris Hemsworth"
    ],
    "a": 0
   },
   {
    "q": "Quel est le premier film du MCU ?",
    "c": [
     "Avengers",
     "Thor",
     "Iron Man",
     "Captain America"
    ],
    "a": 2
   },
   {
    "q": "Combien de Pierres d'Infinité existe-t-il ?",
    "c": [
     "4",
     "5",
     "6",
     "7"
    ],
    "a": 2
   },
   {
    "q": "Quel film MCU a été le plus gros succès au box-office ?",
    "c": [
     "Avengers: Endgame",
     "Avengers: Infinity War",
     "Black Panther",
     "Spider-Man: No Way Home"
    ],
    "a": 0
   },
   {
    "q": "Qui est le méchant principal de Infinity War ?",
    "c": [
     "Thanos",
     "Malekith",
     "Ultron",
     "Loki"
    ],
    "a": 0
   },
   {
    "q": "Quel héros Marvel a le pouvoir de contrôler l'esprit ?",
    "c": [
     "Jean Grey",
     "Magnéto",
     "Doctor Strange",
     "Le Professeur Xavier"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cinema_006",
  "cat": "cinema",
  "name": "Films Titanic",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Titanic ?",
    "c": [
     "Bigelow",
     "Jackson",
     "Cameron",
     "Nolan"
    ],
    "a": 2
   },
   {
    "q": "Titanic a longtemps détenu le record du film ayant rapporté le plus au box-office mondial. Vrai ou faux ?",
    "c": [
     "Vrai",
     "Faux",
     "Il n'a jamais été numéro un",
     "Il n'est jamais sorti en salles"
    ],
    "a": 0
   },
   {
    "q": "Quels acteurs jouent les rôles principaux ?",
    "c": [
     "Brad Pitt et Julia Roberts",
     "Johnny Depp et Keira Knightley",
     "Leonardo DiCaprio et Kate Winslet",
     "Tom Hanks et Meg Ryan"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le film est-il sorti ?",
    "c": [
     "1997",
     "1998",
     "1996",
     "1999"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le navire dans le film ?",
    "c": [
     "Le Lusitania",
     "Le Titanic",
     "Le Britannic",
     "Le Queen Mary"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le vrai Titanic a-t-il coulé ?",
    "c": [
     "1912",
     "1914",
     "1911",
     "1910"
    ],
    "a": 0
   },
   {
    "q": "Combien d'Oscars Titanic a-t-il remportés ?",
    "c": [
     "8",
     "11",
     "14",
     "10"
    ],
    "a": 1
   },
   {
    "q": "Quelle chanson de Céline Dion est le thème du film ?",
    "c": [
     "Because You Loved Me",
     "The Power of Love",
     "My Heart Will Go On",
     "All By Myself"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cinema_007",
  "cat": "cinema",
  "name": "Films Retour vers le futur",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Retour vers le futur ?",
    "c": [
     "Donner",
     "Gale",
     "Johnston",
     "Zemeckis"
    ],
    "a": 3
   },
   {
    "q": "Retour vers le futur est coécrit par Robert Zemeckis et :",
    "c": [
     "Bob Gale",
     "Steven Spielberg",
     "George Lucas",
     "Dan Aykroyd"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Marty McFly ?",
    "c": [
     "Tom Holland",
     "John Cusack",
     "Christopher Lloyd",
     "Michael J. Fox"
    ],
    "a": 3
   },
   {
    "q": "Quelle voiture sert de machine à voyager dans le temps ?",
    "c": [
     "La Ferrari Testarossa",
     "La Porsche 911",
     "La DeLorean DMC-12",
     "La Ford Mustang"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle le docteur ?",
    "c": [
     "George McFly",
     "Marty McFly",
     "Biff Tannen",
     "Emmett Brown"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Marty se retrouve-t-il en 1955 ?",
    "c": [
     "1975",
     "1995",
     "1965",
     "1985"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la puissance nécessaire au voyage temporel ?",
    "c": [
     "1 térawatt",
     "1,21 gigawatts",
     "100 mégawatts",
     "1 million de volts"
    ],
    "a": 1
   },
   {
    "q": "Combien de films compte la trilogie ?",
    "c": [
     "4",
     "1",
     "2",
     "3"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cinema_008",
  "cat": "cinema",
  "name": "Films Indiana Jones",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Indiana Jones (Les Aventuriers de l'arche perdue) ?",
    "c": [
     "James Cameron",
     "Robert Zemeckis",
     "George Lucas",
     "Steven Spielberg"
    ],
    "a": 3
   },
   {
    "q": "Qui a créé le personnage d'Indiana Jones ?",
    "c": [
     "Philip Kaufman",
     "Steven Spielberg",
     "Harrison Ford",
     "George Lucas"
    ],
    "a": 3
   },
   {
    "q": "Quel acteur joue Indiana Jones ?",
    "c": [
     "Harrison Ford",
     "Tom Selleck",
     "John Rhys-Davies",
     "Sean Connery"
    ],
    "a": 0
   },
   {
    "q": "Quel est le premier film de la saga ?",
    "c": [
     "Les Aventuriers de l'Arche Perdue",
     "Le Royaume du Crâne de Cristal",
     "Le Temple Maudit",
     "La Dernière Croisade"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle son père dans le film ?",
    "c": [
     "Sallah",
     "Marcus Brody",
     "René Belloq",
     "Henry Jones Sr."
    ],
    "a": 3
   },
   {
    "q": "Quelle arme Indiana Jones utilise-t-il ?",
    "c": [
     "Un revolver",
     "Un poignard",
     "Un sabre",
     "Un fouet"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le premier film est-il sorti ?",
    "c": [
     "1981",
     "1977",
     "1989",
     "1984"
    ],
    "a": 0
   },
   {
    "q": "Quel est le nom de l'archéologue rivale dans le dernier film ?",
    "c": [
     "Marion Ravenwood",
     "Helena Shaw",
     "Irina Spalko",
     "Elsa Schneider"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_009",
  "cat": "cinema",
  "name": "Films Forrest Gump",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Forrest Gump ?",
    "c": [
     "Howard",
     "Van Sant",
     "Roth",
     "Zemeckis"
    ],
    "a": 3
   },
   {
    "q": "Forrest Gump est adapté d'un roman écrit par :",
    "c": [
     "Winston Groom",
     "John Grisham",
     "Stephen King",
     "Michael Crichton"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Forrest Gump ?",
    "c": [
     "Tom Hanks",
     "Robin Wright",
     "Sally Field",
     "Gary Sinise"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le film est-il sorti ?",
    "c": [
     "1990",
     "1992",
     "1994",
     "1996"
    ],
    "a": 2
   },
   {
    "q": "Quelle fameuse phrase répète Forrest ?",
    "c": [
     "Je suis fatigué",
     "La vie est comme une boîte de chocolats",
     "Cours, Forrest, cours !",
     "Le destin"
    ],
    "a": 1
   },
   {
    "q": "Combien d'Oscars a remporté Forrest Gump ?",
    "c": [
     "7",
     "5",
     "4",
     "6"
    ],
    "a": 3
   },
   {
    "q": "Dans quel sport excelle Forrest ?",
    "c": [
     "Le baseball",
     "La natation",
     "Le football américain",
     "Le basket"
    ],
    "a": 2
   },
   {
    "q": "Quel président rencontre Forrest dans le film ?",
    "c": [
     "Nixon",
     "Kennedy",
     "Johnson",
     "Reagan"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_010",
  "cat": "cinema",
  "name": "Films Le Parrain",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Le Parrain ?",
    "c": [
     "Scorsese",
     "Coppola",
     "Leone",
     "De Palma"
    ],
    "a": 1
   },
   {
    "q": "Le Parrain est adapté d'un roman écrit par :",
    "c": [
     "Mario Puzo",
     "Ernest Hemingway",
     "Truman Capote",
     "John Steinbeck"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Vito Corleone ?",
    "c": [
     "Robert Duvall",
     "Marlon Brando",
     "Al Pacino",
     "James Caan"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le film est-il sorti ?",
    "c": [
     "1970",
     "1972",
     "1974",
     "1975"
    ],
    "a": 1
   },
   {
    "q": "Quelle phrase célèbre est dite par Vito Corleone ?",
    "c": [
     "C'est strictement business",
     "La vengeance est un plat qui se mange froid",
     "Je lui ferai une offre qu'il ne pourra pas refuser",
     "Laisse le pistolet, prends les cannoli"
    ],
    "a": 2
   },
   {
    "q": "Combien d'Oscars a remporté le premier film ?",
    "c": [
     "5",
     "4",
     "3",
     "2"
    ],
    "a": 2
   },
   {
    "q": "Quel acteur joue Michael Corleone ?",
    "c": [
     "Robert Duvall",
     "James Caan",
     "Al Pacino",
     "John Cazale"
    ],
    "a": 2
   },
   {
    "q": "Qui a composé la musique du film ?",
    "c": [
     "Nino Rota",
     "Bernard Herrmann",
     "John Williams",
     "Ennio Morricone"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cinema_011",
  "cat": "cinema",
  "name": "Films Pulp Fiction",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Pulp Fiction ?",
    "c": [
     "Tarantino",
     "Stone",
     "Rodriguez",
     "Scott"
    ],
    "a": 0
   },
   {
    "q": "Pulp Fiction se distingue par une narration :",
    "c": [
     "Non linéaire (l'histoire n'est pas racontée dans l'ordre chronologique)",
     "Entièrement muette",
     "En noir et blanc",
     "Racontée uniquement en flash-back au ralenti"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Pulp Fiction est-il sorti ?",
    "c": [
     "1992",
     "1993",
     "1994",
     "1995"
    ],
    "a": 2
   },
   {
    "q": "Quel acteur joue Vincent Vega ?",
    "c": [
     "Tim Roth",
     "Samuel L. Jackson",
     "John Travolta",
     "Bruce Willis"
    ],
    "a": 2
   },
   {
    "q": "Quelle danse célèbre John Travolta interprète-t-il ?",
    "c": [
     "Le Tango",
     "Le Hustle",
     "Le Twist",
     "Le Rock"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la célèbre phrase biblique citée par Jules ?",
    "c": [
     "Job 14:1",
     "Psaumes 23:4",
     "Ézéchiel 25:17",
     "Proverbes 15:3"
    ],
    "a": 2
   },
   {
    "q": "Quel prix Pulp Fiction a-t-il remporté à Cannes ?",
    "c": [
     "Le Prix de la Mise en Scène",
     "La Palme d'Or",
     "Le Prix du Jury",
     "Le Grand Prix"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle la mallette mystérieuse ?",
    "c": [
     "Le paquet",
     "La mallette",
     "Le trésor",
     "Le dossier"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_012",
  "cat": "cinema",
  "name": "Films Inception",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Inception ?",
    "c": [
     "Denis Villeneuve",
     "David Fincher",
     "Christopher Nolan",
     "Ridley Scott"
    ],
    "a": 2
   },
   {
    "q": "Christopher Nolan aurait mis plusieurs années à écrire le scénario d'Inception avant de le tourner. Vrai ou faux ?",
    "c": [
     "Vrai",
     "Faux, il l'a écrit en une nuit",
     "Faux, c'est un autre scénariste qui l'a écrit",
     "Le scénario n'a jamais été écrit, tout était improvisé"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Dom Cobb ?",
    "c": [
     "Joseph Gordon-Levitt",
     "Tom Hardy",
     "Leonardo DiCaprio",
     "Cillian Murphy"
    ],
    "a": 2
   },
   {
    "q": "En quelle année est sorti Inception ?",
    "c": [
     "2008",
     "2010",
     "2012",
     "2009"
    ],
    "a": 1
   },
   {
    "q": "Quel objet permet de savoir si on est dans un rêve ?",
    "c": [
     "Un dé",
     "Un miroir",
     "Une toupie",
     "Un bracelet"
    ],
    "a": 2
   },
   {
    "q": "Combien de niveaux de rêves compte le film ?",
    "c": [
     "3",
     "4",
     "2",
     "5"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la profession de Cobb ?",
    "c": [
     "Architecte",
     "Extracteur",
     "Forger",
     "Chimiste"
    ],
    "a": 1
   },
   {
    "q": "Que signifie le titre Inception en français ?",
    "c": [
     "L'insertion",
     "La création",
     "Le début",
     "L'inception"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cinema_013",
  "cat": "cinema",
  "name": "Films Matrix",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Matrix ?",
    "c": [
     "Wachowski",
     "Spielberg",
     "Reeves",
     "Cronenberg"
    ],
    "a": 0
   },
   {
    "q": "Matrix est notamment connu pour avoir popularisé l'effet visuel appelé :",
    "c": [
     "Le « bullet time » (ralenti à 360°)",
     "La 3D relief",
     "L'animation en pâte à modeler (stop-motion)",
     "Le noir et blanc numérique"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Neo ?",
    "c": [
     "Keanu Reeves",
     "Hugo Weaving",
     "Laurence Fishburne",
     "Carrie-Anne Moss"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le premier Matrix est-il sorti ?",
    "c": [
     "2001",
     "2000",
     "1997",
     "1999"
    ],
    "a": 3
   },
   {
    "q": "Quelle célèbre phrase est dite par Morpheus ?",
    "c": [
     "La matrice est un système, Neo",
     "Suis le lapin blanc",
     "Il n'y a pas de cuillère",
     "Tu es l'Élu"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la couleur de la pilule choisie par Neo ?",
    "c": [
     "La pilule jaune",
     "La pilule bleue",
     "La pilule rouge",
     "La pilule verte"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle l'agent principal de la Matrice ?",
    "c": [
     "Agent Smith",
     "Agent Johnson",
     "Agent Jones",
     "Agent Brown"
    ],
    "a": 0
   },
   {
    "q": "Combien de films principaux compte la saga Matrix ?",
    "c": [
     "3",
     "4",
     "2",
     "5"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_014",
  "cat": "cinema",
  "name": "Films Fight Club",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Fight Club ?",
    "c": [
     "Aronofsky",
     "Mann",
     "Fincher",
     "Cuarón"
    ],
    "a": 2
   },
   {
    "q": "Fight Club est adapté d'un roman écrit par :",
    "c": [
     "Chuck Palahniuk",
     "Bret Easton Ellis",
     "Stephen King",
     "Cormac McCarthy"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue le narrateur ?",
    "c": [
     "Meat Loaf",
     "Jared Leto",
     "Brad Pitt",
     "Edward Norton"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Fight Club est-il sorti ?",
    "c": [
     "2001",
     "2000",
     "1999",
     "1997"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la première règle du Fight Club ?",
    "c": [
     "On ne parle pas du Fight Club",
     "Toujours frapper en premier",
     "Le combat dure 3 rounds",
     "Pas de chaussures"
    ],
    "a": 0
   },
   {
    "q": "Quel est le nom du personnage de Brad Pitt ?",
    "c": [
     "Le narrateur",
     "Marla Singer",
     "Tyler Durden",
     "Robert Paulson"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la révélation choquante à la fin du film ?",
    "c": [
     "Tyler et le narrateur sont la même personne",
     "Tout était un rêve",
     "Marla est morte",
     "Le narrateur est en prison"
    ],
    "a": 0
   },
   {
    "q": "Qui joue Marla Singer ?",
    "c": [
     "Helena Bonham Carter",
     "Carrie-Anne Moss",
     "Angelina Jolie",
     "Catherine Keener"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cinema_015",
  "cat": "cinema",
  "name": "Films Les Dents de la Mer",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Les Dents de la Mer ?",
    "c": [
     "Dante",
     "Columbus",
     "Besson",
     "Spielberg"
    ],
    "a": 3
   },
   {
    "q": "Les Dents de la Mer est souvent considéré comme :",
    "c": [
     "Le tout premier grand blockbuster estival du cinéma",
     "Le premier film parlant de l'histoire",
     "Le premier film en couleur",
     "Un film resté inédit en salles"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le film est-il sorti ?",
    "c": [
     "1980",
     "1975",
     "1977",
     "1973"
    ],
    "a": 1
   },
   {
    "q": "Quel acteur joue le chef Brody ?",
    "c": [
     "Robert Shaw",
     "Roy Scheider",
     "Larry Vaughn",
     "Richard Dreyfuss"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la célèbre réplique de Brody voyant le requin ?",
    "c": [
     "On le tue",
     "C'est un grand blanc",
     "Il est énorme",
     "On va avoir besoin d'un plus gros bateau"
    ],
    "a": 3
   },
   {
    "q": "Quelle musique emblématique annonce l'arrivée du requin ?",
    "c": [
     "Une note",
     "Deux notes (fa-mi)",
     "Trois notes",
     "Quatre notes"
    ],
    "a": 1
   },
   {
    "q": "Quel océanographe joue dans le film ?",
    "c": [
     "Brody",
     "Hooper",
     "Quint",
     "Vaughn"
    ],
    "a": 1
   },
   {
    "q": "Combien de suites Les Dents de la Mer comptent-elles ?",
    "c": [
     "4",
     "3",
     "2",
     "5"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_016",
  "cat": "cinema",
  "name": "Films E.T.",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé E.T. ?",
    "c": [
     "Burton",
     "Spielberg",
     "Dante",
     "Columbus"
    ],
    "a": 1
   },
   {
    "q": "E.T. a rendu célèbre une friandise offerte au petit extraterrestre, la marque :",
    "c": [
     "Reese's Pieces",
     "M&M's",
     "Kit Kat",
     "Skittles"
    ],
    "a": 0
   },
   {
    "q": "En quelle année E.T. est-il sorti ?",
    "c": [
     "1982",
     "1979",
     "1984",
     "1980"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Elliott ?",
    "c": [
     "Robert MacNaughton",
     "Drew Barrymore",
     "Henry Thomas",
     "Peter Coyote"
    ],
    "a": 2
   },
   {
    "q": "Quel cri célèbre pousse E.T. vers la fin du film ?",
    "c": [
     "E.T. est fatigué",
     "E.T. téléphone maison",
     "E.T. ami",
     "E.T. veut rentrer"
    ],
    "a": 1
   },
   {
    "q": "Comment E.T. communique-t-il avec Elliott ?",
    "c": [
     "Par des gestes",
     "Par une machine",
     "Via un lien télépathique",
     "Par la parole"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la boisson préférée d'E.T. ?",
    "c": [
     "Le Coca-Cola",
     "Le jus d'orange",
     "Le lait",
     "La bière"
    ],
    "a": 3
   },
   {
    "q": "Qui a composé la musique emblématique du film ?",
    "c": [
     "James Horner",
     "Alan Silvestri",
     "Danny Elfman",
     "John Williams"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cinema_017",
  "cat": "cinema",
  "name": "Films Alien",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Alien ?",
    "c": [
     "Scott",
     "Jeunet",
     "Carpenter",
     "O'Bannon"
    ],
    "a": 0
   },
   {
    "q": "Qui a réalisé Alien (1979) ?",
    "c": [
     "David Fincher",
     "Ridley Scott",
     "Jean-Pierre Jeunet",
     "James Cameron"
    ],
    "a": 1
   },
   {
    "q": "Quelle actrice joue Ellen Ripley ?",
    "c": [
     "Linda Hamilton",
     "Carrie Fisher",
     "Jamie Lee Curtis",
     "Sigourney Weaver"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Alien est-il sorti ?",
    "c": [
     "1977",
     "1980",
     "1982",
     "1979"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle le vaisseau spatial dans Alien ?",
    "c": [
     "Le Nostromo",
     "Le Covenant",
     "Le Sulaco",
     "Le Prometheus"
    ],
    "a": 0
   },
   {
    "q": "Quelle phrase célèbre Ripley prononce-t-elle dans Aliens ?",
    "c": [
     "Ils arrivent",
     "Faites-les éclater",
     "Dégagez de son chemin, salope !",
     "On se casse"
    ],
    "a": 2
   },
   {
    "q": "Quel est le cycle de vie du Xenomorphe ?",
    "c": [
     "Spores, parasite, hôte, prédateur",
     "Œuf, facehugger, chestburster, xénomorphe",
     "Œuf, larve, nymphe, adulte",
     "Œuf, chenille, pupe, adulte"
    ],
    "a": 1
   },
   {
    "q": "Combien de films principaux compte la saga Alien ?",
    "c": [
     "6",
     "5",
     "4",
     "3"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cinema_018",
  "cat": "cinema",
  "name": "Films Terminator",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé le premier Terminator (1984) ?",
    "c": [
     "John McTiernan",
     "George Miller",
     "Ridley Scott",
     "James Cameron"
    ],
    "a": 3
   },
   {
    "q": "Qui a réalisé le premier Terminator ?",
    "c": [
     "James Cameron",
     "Jonathan Mostow",
     "David Nutter",
     "John McTiernan"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue le Terminator ?",
    "c": [
     "Sylvester Stallone",
     "Bruce Willis",
     "Arnold Schwarzenegger",
     "Jean-Claude Van Damme"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le film est-il sorti ?",
    "c": [
     "1987",
     "1986",
     "1984",
     "1982"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la célèbre réplique du Terminator ?",
    "c": [
     "I'll be back",
     "Hasta la vista, baby",
     "Fuck you, asshole",
     "Come with me"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue John Connor dans Terminator 2 ?",
    "c": [
     "Nick Stahl",
     "Edward Furlong",
     "Jai Courtney",
     "Christian Bale"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle le système d'IA qui déclenche la guerre ?",
    "c": [
     "Colossus",
     "AM",
     "Ultron",
     "Skynet"
    ],
    "a": 3
   },
   {
    "q": "De quelle année vient le Terminator ?",
    "c": [
     "2029",
     "1984",
     "1997",
     "2045"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cinema_019",
  "cat": "cinema",
  "name": "Films Gladiator",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Gladiator ?",
    "c": [
     "Mann",
     "Scott",
     "Jackson",
     "Ridley Scott"
    ],
    "a": 1
   },
   {
    "q": "Le succès de Gladiator est souvent crédité d'avoir relancé la mode des grandes fresques historiques (« péplums ») à Hollywood. Vrai ou faux ?",
    "c": [
     "Vrai",
     "Faux, le genre était déjà au sommet de sa popularité",
     "Faux, le film est un échec commercial",
     "Le film n'a aucun lien avec l'Antiquité"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Maximus ?",
    "c": [
     "Richard Harris",
     "Oliver Reed",
     "Russell Crowe",
     "Joaquin Phoenix"
    ],
    "a": 2
   },
   {
    "q": "En quelle année Gladiator est-il sorti ?",
    "c": [
     "2000",
     "2001",
     "1999",
     "2002"
    ],
    "a": 0
   },
   {
    "q": "Quel empereur romain est le méchant du film ?",
    "c": [
     "Néron",
     "Caligula",
     "Marc Aurèle",
     "Commode"
    ],
    "a": 3
   },
   {
    "q": "Combien d'Oscars a remporté Gladiator ?",
    "c": [
     "5",
     "4",
     "3",
     "6"
    ],
    "a": 0
   },
   {
    "q": "Quelle phrase répète Maximus à ses soldats ?",
    "c": [
     "Nous nous retrouverons",
     "Pour la gloire de Rome",
     "Je vengerai ma famille",
     "Unis sous un même nom"
    ],
    "a": 3
   },
   {
    "q": "Qui a composé la musique du film ?",
    "c": [
     "John Williams",
     "Hans Zimmer",
     "James Horner",
     "Ennio Morricone"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_020",
  "cat": "cinema",
  "name": "Films Avatar",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Avatar ?",
    "c": [
     "Peter Jackson",
     "Robert Rodriguez",
     "James Cameron",
     "Steven Spielberg"
    ],
    "a": 2
   },
   {
    "q": "Avatar est notamment connu pour avoir fait progresser les technologies de :",
    "c": [
     "Capture de mouvement et de 3D au cinéma",
     "Animation en pâte à modeler",
     "Doublage automatique par intelligence artificielle",
     "Projection en noir et blanc"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le premier Avatar est-il sorti ?",
    "c": [
     "2009",
     "2011",
     "2010",
     "2007"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Jake Sully ?",
    "c": [
     "Stephen Lang",
     "Sam Worthington",
     "Zoe Saldaña",
     "Sigourney Weaver"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle la planète dans Avatar ?",
    "c": [
     "Endor",
     "Arrakis",
     "Pandora",
     "Tatooine"
    ],
    "a": 2
   },
   {
    "q": "Quel est le nom du peuple autochtone de Pandora ?",
    "c": [
     "Les Na'vis",
     "Les Pan-doriens",
     "Les Avatars",
     "Les Omaticayas"
    ],
    "a": 0
   },
   {
    "q": "Quel film a dépassé Avatar au box-office mondial ?",
    "c": [
     "Avatar 2",
     "Titanic",
     "Star Wars",
     "Avengers: Endgame"
    ],
    "a": 3
   },
   {
    "q": "Combien de suites Avatar sont prévues ?",
    "c": [
     "4",
     "1",
     "2",
     "3"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cinema_021",
  "cat": "cinema",
  "name": "Films Interstellar",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Interstellar ?",
    "c": [
     "Soderbergh",
     "Nolan",
     "Zemeckis",
     "Spielberg"
    ],
    "a": 1
   },
   {
    "q": "Le physicien qui a conseillé la production d'Interstellar sur la représentation scientifique du trou noir est :",
    "c": [
     "Kip Thorne",
     "Stephen Hawking en personne à l'écran",
     "Albert Einstein",
     "Neil deGrasse Tyson"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Cooper ?",
    "c": [
     "Anne Hathaway",
     "Michael Caine",
     "John Lithgow",
     "Matthew McConaughey"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Interstellar est-il sorti ?",
    "c": [
     "2014",
     "2016",
     "2015",
     "2013"
    ],
    "a": 0
   },
   {
    "q": "Quel trou noir est exploré dans le film ?",
    "c": [
     "Cygnus X-1",
     "Gargantua",
     "Sagittarius A*",
     "M87"
    ],
    "a": 1
   },
   {
    "q": "Quelle planète visitée a un temps fortement dilaté ?",
    "c": [
     "Wolf",
     "Miller",
     "Mann",
     "Edmunds"
    ],
    "a": 1
   },
   {
    "q": "Qui a composé la musique du film ?",
    "c": [
     "Alexandre Desplat",
     "John Williams",
     "Hans Zimmer",
     "James Newton Howard"
    ],
    "a": 2
   },
   {
    "q": "Que découvre Cooper à l'intérieur du trou noir ?",
    "c": [
     "Un univers parallèle",
     "Le Big Bang",
     "La bibliothèque dimensionnelle",
     "Une civilisation extraterrestre"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cinema_022",
  "cat": "cinema",
  "name": "Films Casablanca",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Casablanca ?",
    "c": [
     "Welles",
     "Curtiz",
     "Nolan",
     "Van Dyke"
    ],
    "a": 1
   },
   {
    "q": "Casablanca est adapté d'une pièce de théâtre non jouée intitulée :",
    "c": [
     "Everybody Comes to Rick's",
     "Casablanca, mon amour",
     "La Valse de Rick",
     "Le Piano de Sam"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Rick Blaine ?",
    "c": [
     "Ingrid Bergman",
     "Claude Rains",
     "Humphrey Bogart",
     "Peter Lorre"
    ],
    "a": 2
   },
   {
    "q": "En quelle année Casablanca est-il sorti ?",
    "c": [
     "1944",
     "1945",
     "1940",
     "1942"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la célèbre réplique de Rick ?",
    "c": [
     "Nous aurons toujours Paris",
     "Louis, je pense que c'est le début d'une belle amitié",
     "De tous les bars du monde",
     "Joue-le, Sam"
    ],
    "a": 0
   },
   {
    "q": "Combien d'Oscars Casablanca a-t-il remportés ?",
    "c": [
     "5",
     "2",
     "3",
     "1"
    ],
    "a": 2
   },
   {
    "q": "Quel personnage dit 'Du piano, Sam' ?",
    "c": [
     "Louis",
     "Ugarte",
     "Rick",
     "Ilsa"
    ],
    "a": 3
   },
   {
    "q": "Quelle chanson est emblématique du film ?",
    "c": [
     "As Time Goes By",
     "La Marseillaise",
     "It Had to Be You",
     "I'm in the Mood for Love"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cinema_023",
  "cat": "cinema",
  "name": "Films Psychose",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Psychose ?",
    "c": [
     "Hitchcock",
     "Peckinpah",
     "Argento",
     "De Palma"
    ],
    "a": 0
   },
   {
    "q": "Pour préserver le twist du film, Hitchcock avait imposé une règle inédite dans les cinémas :",
    "c": [
     "Interdiction de laisser entrer les retardataires après le début de la séance",
     "Interdiction de vendre du pop-corn",
     "Obligation de porter des lunettes 3D",
     "Interdiction de projeter le film plus d'une fois par jour"
    ],
    "a": 0
   },
   {
    "q": "Quelle actrice joue Marion Crane ?",
    "c": [
     "Janet Leigh",
     "Vera Miles",
     "Tippi Hedren",
     "Kim Novak"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Psychose est-il sorti ?",
    "c": [
     "1962",
     "1958",
     "1956",
     "1960"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la célèbre scène de douche ?",
    "c": [
     "Le meurtre à la douche",
     "La fuite sous la douche",
     "La douche glacée",
     "La panne d'eau"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Norman Bates ?",
    "c": [
     "George Tomasini",
     "John Gavin",
     "Anthony Perkins",
     "Martin Balsam"
    ],
    "a": 2
   },
   {
    "q": "Quelle musique emblématique accompagne la scène de la douche ?",
    "c": [
     "Une symphonie classique",
     "Des coups de violon stridents",
     "Un battement de tambour",
     "Un silence total"
    ],
    "a": 1
   },
   {
    "q": "Quel est le secret de Norman Bates ?",
    "c": [
     "Il a une double personnalité",
     "Il est le tueur",
     "Il est innocent",
     "Sa mère est morte depuis des années"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_024",
  "cat": "cinema",
  "name": "Films Seven",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Seven ?",
    "c": [
     "Mann",
     "Jonze",
     "Fincher",
     "Singer"
    ],
    "a": 2
   },
   {
    "q": "Seven se déroule dans une ville qui n'est jamais nommée, et où il pleut presque en permanence. Vrai ou faux ?",
    "c": [
     "Vrai",
     "Faux, l'action se déroule en plein désert",
     "Faux, la ville est clairement identifiée comme New York",
     "Faux, il fait beau du début à la fin"
    ],
    "a": 0
   },
   {
    "q": "Quels acteurs jouent les détectives ?",
    "c": [
     "Tom Hanks et Denzel Washington",
     "Al Pacino et Robert De Niro",
     "Kevin Spacey et Brad Pitt",
     "Morgan Freeman et Brad Pitt"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Seven est-il sorti ?",
    "c": [
     "1993",
     "1997",
     "1995",
     "1994"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les sept péchés capitaux du film ?",
    "c": [
     "Les sept péchés capitaux chrétiens",
     "Les sept plaies",
     "Les sept vertus",
     "Gourmandise, Avarice, Paresse, Luxure, Orgueil, Envie, Colère"
    ],
    "a": 3
   },
   {
    "q": "Quel acteur joue le tueur John Doe ?",
    "c": [
     "Morgan Freeman",
     "Kevin Spacey",
     "Gwyneth Paltrow",
     "Brad Pitt"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la célèbre réplique du tueur ?",
    "c": [
     "La colère est un péché",
     "What's in the box ?",
     "Détective !",
     "Le monde est un bel endroit"
    ],
    "a": 1
   },
   {
    "q": "Qui a composé la musique de Seven ?",
    "c": [
     "David Shire",
     "Howard Shore",
     "Hans Zimmer",
     "Trent Reznor"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_025",
  "cat": "cinema",
  "name": "Films La Guerre des Étoiles",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé La Guerre des Étoiles ?",
    "c": [
     "Kasdan",
     "Lucas",
     "Spielberg",
     "Kershner"
    ],
    "a": 1
   },
   {
    "q": "Qui a créé Star Wars ?",
    "c": [
     "Irvin Kershner",
     "George Lucas",
     "Steven Spielberg",
     "Richard Marquand"
    ],
    "a": 1
   },
   {
    "q": "En quelle année l'Épisode IV est-il sorti ?",
    "c": [
     "1983",
     "1980",
     "1975",
     "1977"
    ],
    "a": 3
   },
   {
    "q": "Qui est le mentor de Luke Skywalker ?",
    "c": [
     "Mace Windu",
     "Obi-Wan Kenobi",
     "Dark Vador",
     "Yoda"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la princesse de la saga ?",
    "c": [
     "Jyn Erso",
     "Rey",
     "Padmé Amidala",
     "Leia Organa"
    ],
    "a": 3
   },
   {
    "q": "Quel est le vaisseau spatial le plus emblématique ?",
    "c": [
     "Le X-Wing",
     "Le TIE Fighter",
     "Le Destroyer Stellaire",
     "Le Faucon Millenium"
    ],
    "a": 3
   },
   {
    "q": "Qui a tué Dark Vador dans Le Retour du Jedi ?",
    "c": [
     "Han Solo",
     "Luke Skywalker",
     "L'Empereur",
     "Dark Vador lui-même"
    ],
    "a": 3
   },
   {
    "q": "Combien d'épisodes comporte la saga principale ?",
    "c": [
     "6",
     "9",
     "3",
     "12"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cinema_026",
  "cat": "cinema",
  "name": "Films Batman",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé la trilogie Batman avec Christian Bale (The Dark Knight) ?",
    "c": [
     "Zack Snyder",
     "Tim Burton",
     "Christopher Nolan",
     "Matt Reeves"
    ],
    "a": 2
   },
   {
    "q": "Qui a créé Batman ?",
    "c": [
     "Steve Ditko",
     "Stan Lee",
     "Bob Kane et Bill Finger",
     "Jack Kirby"
    ],
    "a": 2
   },
   {
    "q": "Quel acteur a incarné Batman dans The Dark Knight ?",
    "c": [
     "George Clooney",
     "Michael Keaton",
     "Christian Bale",
     "Val Kilmer"
    ],
    "a": 2
   },
   {
    "q": "En quelle année The Dark Knight est-il sorti ?",
    "c": [
     "2007",
     "2010",
     "2005",
     "2008"
    ],
    "a": 3
   },
   {
    "q": "Quel acteur joue le Joker dans The Dark Knight ?",
    "c": [
     "César Romero",
     "Joaquin Phoenix",
     "Jack Nicholson",
     "Heath Ledger"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle le majordome de Bruce Wayne ?",
    "c": [
     "Lucius Fox",
     "Robin",
     "Alfred Pennyworth",
     "James Gordon"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la ville de Batman ?",
    "c": [
     "Star City",
     "Metropolis",
     "Gotham City",
     "Central City"
    ],
    "a": 2
   },
   {
    "q": "Combien d'Oscars a remporté The Dark Knight ?",
    "c": [
     "0",
     "3",
     "1",
     "2"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cinema_027",
  "cat": "cinema",
  "name": "Films James Bond",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé James Bond ?",
    "c": [
     "Fleming",
     "Campbell",
     "Young",
     "Spielberg"
    ],
    "a": 1
   },
   {
    "q": "Qui a créé James Bond ?",
    "c": [
     "Ian Fleming",
     "Graham Greene",
     "Agatha Christie",
     "John le Carré"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur a incarné Bond dans GoldenEye ?",
    "c": [
     "Pierce Brosnan",
     "Timothy Dalton",
     "Sean Connery",
     "Roger Moore"
    ],
    "a": 0
   },
   {
    "q": "Quel est le numéro d'agent de James Bond ?",
    "c": [
     "001",
     "009",
     "006",
     "007"
    ],
    "a": 3
   },
   {
    "q": "Quel acteur a joué Bond le plus longtemps ?",
    "c": [
     "Roger Moore",
     "Pierce Brosnan",
     "Sean Connery",
     "Daniel Craig"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le chef de Bond ?",
    "c": [
     "Q",
     "Miss Moneypenny",
     "Moneypenny",
     "M"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la boisson préférée de James Bond ?",
    "c": [
     "Champagne",
     "Martini (shaken, not stirred)",
     "Vodka",
     "Whisky"
    ],
    "a": 1
   },
   {
    "q": "Combien de films James Bond officiels existent ?",
    "c": [
     "30",
     "20",
     "27",
     "25"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cinema_028",
  "cat": "cinema",
  "name": "Films Toy Story",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Toy Story ?",
    "c": [
     "Stanton",
     "Lasseter",
     "Pixar",
     "Bird"
    ],
    "a": 1
   },
   {
    "q": "Toy Story est un film marquant car il s'agit :",
    "c": [
     "Du premier long-métrage entièrement animé par ordinateur",
     "Du premier film muet de l'histoire",
     "Du premier film tourné en une seule prise",
     "Du premier film distribué uniquement en streaming"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Toy Story est-il sorti ?",
    "c": [
     "1998",
     "1993",
     "1995",
     "1997"
    ],
    "a": 2
   },
   {
    "q": "Quel acteur double Woody en VO ?",
    "c": [
     "Billy Crystal",
     "Tim Allen",
     "John Goodman",
     "Tom Hanks"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle le personnage de la petite fille dans Toy Story 3 ?",
    "c": [
     "Sid",
     "Andy",
     "Molly",
     "Bonnie"
    ],
    "a": 3
   },
   {
    "q": "Combien de films Toy Story comptent la saga ?",
    "c": [
     "5",
     "4",
     "2",
     "3"
    ],
    "a": 1
   },
   {
    "q": "Quel est le cowboy qui chante 'Je suis ton ami' ?",
    "c": [
     "M. Patate",
     "Woody",
     "Buzz l'Éclair",
     "Rex"
    ],
    "a": 1
   },
   {
    "q": "Qui double Buzz l'Éclair en VO ?",
    "c": [
     "Tim Allen",
     "Eddie Murphy",
     "Tom Hanks",
     "Steve Carell"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cinema_029",
  "cat": "cinema",
  "name": "Films Blanche-Neige",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Blanche-Neige ?",
    "c": [
     "Hand",
     "Cukor",
     "Disney",
     "Grimm"
    ],
    "a": 2
   },
   {
    "q": "Qui a produit Blanche-Neige et les Sept Nains ?",
    "c": [
     "Pixar",
     "Walt Disney",
     "Don Bluth",
     "Les Frères Grimm"
    ],
    "a": 1
   },
   {
    "q": "En quelle année Blanche-Neige est-il sorti ?",
    "c": [
     "1942",
     "1935",
     "1940",
     "1937"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la méchante du film ?",
    "c": [
     "Grimhilde",
     "La Sorcière",
     "La Reine",
     "Maléfique"
    ],
    "a": 2
   },
   {
    "q": "Combien de nains accompagnent Blanche-Neige ?",
    "c": [
     "5",
     "8",
     "6",
     "7"
    ],
    "a": 3
   },
   {
    "q": "Quel est le premier long-métrage d'animation Disney ?",
    "c": [
     "Cendrillon",
     "Blanche-Neige",
     "Pinocchio",
     "Fantasia"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la célèbre chanson du film ?",
    "c": [
     "Siffler en travaillant",
     "Je souhaite",
     "Un jour mon prince viendra",
     "Heigh-Ho"
    ],
    "a": 2
   },
   {
    "q": "Quel fruit empoisonné la méchante offre-t-elle ?",
    "c": [
     "Une pêche",
     "Une cerise",
     "Une pomme",
     "Une poire"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cinema_030",
  "cat": "cinema",
  "name": "Films Shrek",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a réalisé Shrek ?",
    "c": [
     "Katzenberg",
     "Jenson",
     "Adamson",
     "Elliott"
    ],
    "a": 2
   },
   {
    "q": "Shrek est adapté d'un livre pour enfants écrit par :",
    "c": [
     "William Steig",
     "Roald Dahl",
     "Maurice Sendak",
     "Dr. Seuss"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur double Shrek en VO ?",
    "c": [
     "John Lithgow",
     "Cameron Diaz",
     "Mike Myers",
     "Eddie Murphy"
    ],
    "a": 2
   },
   {
    "q": "En quelle année Shrek est-il sorti ?",
    "c": [
     "2002",
     "2001",
     "2000",
     "1999"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle l'âne qui suit Shrek ?",
    "c": [
     "Lord Farquaad",
     "Dragon",
     "L'Âne",
     "Fiona"
    ],
    "a": 2
   },
   {
    "q": "Quel est le premier film d'animation à avoir gagné un Oscar ?",
    "c": [
     "Le Roi Lion",
     "Toy Story",
     "Shrek",
     "Blanche-Neige"
    ],
    "a": 2
   },
   {
    "q": "Qui double l'Âne en VO ?",
    "c": [
     "Eddie Murphy",
     "Antonio Banderas",
     "John Cleese",
     "Mike Myers"
    ],
    "a": 0
   },
   {
    "q": "Combien de films Shrek principaux existent ?",
    "c": [
     "2",
     "4",
     "3",
     "5"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sport_001",
  "cat": "sport",
  "name": "Football",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Football ?",
    "c": [
     "France",
     "Brésil",
     "Allemagne",
     "Argentine"
    ],
    "a": 1
   },
   {
    "q": "Combien de joueurs par équipe en Football ?",
    "c": [
     "7",
     "11",
     "9",
     "5"
    ],
    "a": 1
   },
   {
    "q": "Quel joueur a remporté le Ballon d'Or en 2022 ?",
    "c": [
     "Kylian Mbappé",
     "Lionel Messi",
     "Karim Benzema",
     "Cristiano Ronaldo"
    ],
    "a": 2
   },
   {
    "q": "Quel club a gagné la Ligue des Champions en 2020 ?",
    "c": [
     "Bayern Munich",
     "PSG",
     "Real Madrid",
     "Liverpool"
    ],
    "a": 0
   },
   {
    "q": "Quel pays a remporté l'Euro 2024 ?",
    "c": [
     "France",
     "Espagne",
     "Angleterre",
     "Allemagne"
    ],
    "a": 1
   },
   {
    "q": "Combien de Coupes du Monde la France a-t-elle gagnées ?",
    "c": [
     "1",
     "0",
     "2",
     "3"
    ],
    "a": 2
   },
   {
    "q": "Qui est le meilleur buteur de l'histoire du Real Madrid ?",
    "c": [
     "Raúl",
     "Karim Benzema",
     "Cristiano Ronaldo",
     "Alfredo Di Stéfano"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le premier championnat du monde de football a-t-il eu lieu ?",
    "c": [
     "1920",
     "1930",
     "1950",
     "1934"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sport_002",
  "cat": "sport",
  "name": "Tennis",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Tennis ?",
    "c": [
     "Suisse",
     "Serbie",
     "États-Unis",
     "Australie"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en Tennis ?",
    "c": [
     "3",
     "2",
     "1",
     "4"
    ],
    "a": 2
   },
   {
    "q": "Quel joueur a le plus de titres du Grand Chelem en simple messieurs ?",
    "c": [
     "Pete Sampras",
     "Roger Federer",
     "Novak Djokovic",
     "Rafael Nadal"
    ],
    "a": 2
   },
   {
    "q": "Combien de tournois du Grand Chelem existent ?",
    "c": [
     "6",
     "3",
     "4",
     "5"
    ],
    "a": 2
   },
   {
    "q": "Quelle joueuse a le plus de titres du Grand Chelem ?",
    "c": [
     "Steffi Graf",
     "Margaret Court",
     "Martina Navratilova",
     "Serena Williams"
    ],
    "a": 1
   },
   {
    "q": "Sur quelle surface se joue Roland-Garros ?",
    "c": [
     "Moquette",
     "Dur",
     "Gazon",
     "Terre battue"
    ],
    "a": 3
   },
   {
    "q": "Quel tournoi se joue sur gazon ?",
    "c": [
     "Wimbledon",
     "US Open",
     "Australian Open",
     "Roland-Garros"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le tennis est-il devenu professionnel ?",
    "c": [
     "1950",
     "1926",
     "1972",
     "1968"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sport_003",
  "cat": "sport",
  "name": "Basket-ball",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Basket-ball ?",
    "c": [
     "Argentine",
     "Yougoslavie",
     "États-Unis",
     "Espagne"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe sur le terrain en basket-ball ?",
    "c": [
     "7",
     "9",
     "11",
     "5"
    ],
    "a": 3
   },
   {
    "q": "Quel joueur NBA est considéré comme le meilleur de tous les temps ?",
    "c": [
     "Michael Jordan",
     "Magic Johnson",
     "Kobe Bryant",
     "LeBron James"
    ],
    "a": 0
   },
   {
    "q": "Combien de quart-temps dure un match NBA ?",
    "c": [
     "5",
     "3",
     "4",
     "2"
    ],
    "a": 2
   },
   {
    "q": "Quelle équipe NBA a le plus de titres ?",
    "c": [
     "Boston Celtics",
     "Los Angeles Lakers",
     "Chicago Bulls",
     "Golden State Warriors"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la distance du tir à 3 points en NBA ?",
    "c": [
     "8 m",
     "7,24 m",
     "6,75 m",
     "6,25 m"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé le basket-ball ?",
    "c": [
     "William Morgan",
     "John McLendon",
     "James Naismith",
     "Luther Gulick"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la NBA a-t-elle été fondée ?",
    "c": [
     "1960",
     "1946",
     "1950",
     "1937"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sport_004",
  "cat": "sport",
  "name": "Rugby",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Rugby ?",
    "c": [
     "France",
     "Afrique Sud",
     "Nouvelle-Zélande",
     "Angleterre"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en Rugby ?",
    "c": [
     "7",
     "11",
     "15",
     "13"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe au rugby à XV ?",
    "c": [
     "11",
     "14",
     "13",
     "15"
    ],
    "a": 3
   },
   {
    "q": "Quel pays a remporté le plus de Coupes du Monde de rugby ?",
    "c": [
     "Angleterre",
     "France",
     "Nouvelle-Zélande",
     "Afrique du Sud"
    ],
    "a": 2
   },
   {
    "q": "Quelle compétition annuelle oppose les nations du Tournoi ?",
    "c": [
     "Le Rugby Championship",
     "La Coupe du Monde",
     "Le Tournoi des Six Nations",
     "Le Tri-Nations"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle un essai transformé ?",
    "c": [
     "Transformation",
     "Essai transformé",
     "Pénalité",
     "Drop"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé le rugby ?",
    "c": [
     "Thomas Arnold",
     "Pierre de Coubertin",
     "William Webb Ellis",
     "James Naismith"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la Coupe du Monde de rugby a-t-elle eu lieu pour la première fois ?",
    "c": [
     "1983",
     "1995",
     "1991",
     "1987"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sport_005",
  "cat": "sport",
  "name": "Cyclisme",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Cyclisme ?",
    "c": [
     "France",
     "Pays-Bas",
     "Italie",
     "Belgique"
    ],
    "a": 0
   },
   {
    "q": "Combien de joueurs par équipe en Cyclisme ?",
    "c": [
     "5",
     "4",
     "3",
     "1"
    ],
    "a": 3
   },
   {
    "q": "Quel coureur a le plus de victoires sur le Tour de France ?",
    "c": [
     "Bernard Hinault",
     "Jacques Anquetil",
     "Miguel Indurain",
     "Eddy Merckx"
    ],
    "a": 3
   },
   {
    "q": "Combien de victoires a Eddy Merckx sur le Tour ?",
    "c": [
     "7",
     "3",
     "4",
     "5"
    ],
    "a": 3
   },
   {
    "q": "Quel maillot distingue le meilleur grimpeur du Tour de France ?",
    "c": [
     "Le maillot jaune",
     "Le maillot vert",
     "Le maillot à pois",
     "Le maillot blanc"
    ],
    "a": 2
   },
   {
    "q": "Quel pays a organisé le premier Tour de France en 1903 ?",
    "c": [
     "Italie",
     "France",
     "Suisse",
     "Belgique"
    ],
    "a": 1
   },
   {
    "q": "Qui a remporté le Tour de France 2024 ?",
    "c": [
     "Remco Evenepoel",
     "Jonas Vingegaard",
     "Primož Roglič",
     "Tadej Pogačar"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un 'grand tour' en cyclisme ?",
    "c": [
     "Paris-Nice, Dauphiné, Suisse",
     "Giro, Tour, Championnat du Monde",
     "Tour de France, Paris-Roubaix, Milan-San Remo",
     "Tour de France, Giro, Vuelta"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sport_006",
  "cat": "sport",
  "name": "Natation",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Natation ?",
    "c": [
     "Russie",
     "Australie",
     "États-Unis",
     "Chine"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en Natation ?",
    "c": [
     "3",
     "1",
     "4",
     "2"
    ],
    "a": 1
   },
   {
    "q": "Quel nageur détient le plus de médailles olympiques ?",
    "c": [
     "Caeleb Dressel",
     "Mark Spitz",
     "Ryan Lochte",
     "Michael Phelps"
    ],
    "a": 3
   },
   {
    "q": "Combien de médailles d'or Michael Phelps a-t-il aux JO ?",
    "c": [
     "28",
     "18",
     "23",
     "13"
    ],
    "a": 2
   },
   {
    "q": "Quelles sont les quatre nages de la natation ?",
    "c": [
     "Crawl, brasse, papillon, nage libre",
     "Crawl, dos, brasse, papillon",
     "Brasse, dos, crawl, nage indienne",
     "Crawl, dos, brasse, nage libre"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la distance d'un 50 mètres ?",
    "c": [
     "Une longueur de bassin",
     "Deux longueurs",
     "10 mètres",
     "Un aller-retour"
    ],
    "a": 0
   },
   {
    "q": "En quelle année la natation a-t-elle été introduite aux JO modernes ?",
    "c": [
     "1900",
     "1896",
     "1912",
     "1904"
    ],
    "a": 1
   },
   {
    "q": "Quel nageur français est surnommé 'le Phénomène' ?",
    "c": [
     "Camille Lacourt",
     "Florent Manaudou",
     "Alain Bernard",
     "Léon Marchand"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sport_007",
  "cat": "sport",
  "name": "Athlétisme",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Athlétisme ?",
    "c": [
     "Grande-Bretagne",
     "États-Unis",
     "Kenya",
     "Jamaïque"
    ],
    "a": 1
   },
   {
    "q": "Combien de joueurs par équipe en Athlétisme ?",
    "c": [
     "4",
     "3",
     "2",
     "1"
    ],
    "a": 3
   },
   {
    "q": "Qui est le détenteur du record du monde du 100m ?",
    "c": [
     "Usain Bolt",
     "Carl Lewis",
     "Ben Johnson",
     "Gatlin"
    ],
    "a": 0
   },
   {
    "q": "Quel record du monde Bolt détient-il ?",
    "c": [
     "9,63 s",
     "9,58 s",
     "9,72 s",
     "9,69 s"
    ],
    "a": 1
   },
   {
    "q": "Combien de médailles d'or olympiques Bolt a-t-il ?",
    "c": [
     "8",
     "4",
     "10",
     "6"
    ],
    "a": 0
   },
   {
    "q": "Quelle épreuve combine 10 disciplines ?",
    "c": [
     "Le triathlon",
     "L'heptathlon",
     "Le décathlon",
     "Le pentathlon"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le marathon a-t-il été standardisé à 42,195 km ?",
    "c": [
     "1921",
     "1908",
     "1912",
     "1896"
    ],
    "a": 1
   },
   {
    "q": "Qui est la femme la plus rapide de l'histoire ?",
    "c": [
     "Elaine Thompson-Herah",
     "Shelly-Ann Fraser-Pryce",
     "Marion Jones",
     "Florence Griffith-Joyner"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sport_008",
  "cat": "sport",
  "name": "Boxe",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Boxe ?",
    "c": [
     "États-Unis",
     "Cuba",
     "Philippines",
     "Mexique"
    ],
    "a": 0
   },
   {
    "q": "Combien de joueurs par équipe en Boxe ?",
    "c": [
     "4",
     "3",
     "2",
     "1"
    ],
    "a": 3
   },
   {
    "q": "Quel boxeur est surnommé 'The Greatest' ?",
    "c": [
     "Muhammad Ali",
     "Joe Frazier",
     "Mike Tyson",
     "George Foreman"
    ],
    "a": 0
   },
   {
    "q": "Combien de rounds dure un combat de championnat professionnel ?",
    "c": [
     "15",
     "8",
     "10",
     "12"
    ],
    "a": 3
   },
   {
    "q": "Quelles sont les catégories de poids ?",
    "c": [
     "Poids lourds, poids moyens, poids légers",
     "Lourds, mi-lourds, moyens, welters, légers, plumes, coqs, mouches",
     "Lourds, mi-lourds, légers",
     "Lourds, moyens, légers"
    ],
    "a": 1
   },
   {
    "q": "Qui a été le dernier boxeur à détenir le titre poids lourd unifié ?",
    "c": [
     "Evander Holyfield",
     "George Foreman",
     "Lennox Lewis",
     "Mike Tyson"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la boxe est-elle devenue olympique ?",
    "c": [
     "1908",
     "1904",
     "1912",
     "1896"
    ],
    "a": 1
   },
   {
    "q": "Quel célèbre combat est connu sous le nom de 'Rumble in the Jungle' ?",
    "c": [
     "Ali vs Foreman 1974",
     "Ali vs Frazier 1975",
     "Louis vs Schmeling 1938",
     "Tyson vs Holyfield 1996"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sport_009",
  "cat": "sport",
  "name": "Ski",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Ski ?",
    "c": [
     "Suède",
     "Canada",
     "Norvège",
     "Autriche"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en Ski ?",
    "c": [
     "4",
     "3",
     "1",
     "2"
    ],
    "a": 2
   },
   {
    "q": "Quelle discipline de ski consiste à descendre le plus vite possible ?",
    "c": [
     "Le slalom géant",
     "La descente",
     "Le super-G",
     "Le slalom"
    ],
    "a": 1
   },
   {
    "q": "Quel skieur français a remporté le plus de médailles olympiques ?",
    "c": [
     "Luc Alphand",
     "Alexis Pinturault",
     "Alain Prost",
     "Jean-Claude Killy"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la piste la plus célèbre de la Coupe du monde ?",
    "c": [
     "Le Lauberhorn",
     "Le Kandahar",
     "La Face de Bellevarde",
     "La Streif à Kitzbühel"
    ],
    "a": 3
   },
   {
    "q": "Combien de disciplines composent le ski alpin ?",
    "c": [
     "4",
     "6",
     "3",
     "5"
    ],
    "a": 3
   },
   {
    "q": "Quelle skieuse autrichienne détient le record de victoires en Coupe du monde ?",
    "c": [
     "Lindsey Vonn",
     "Mikaela Shiffrin",
     "Marlies Schild",
     "Annemarie Moser-Pröll"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le ski alpin a-t-il fait ses débuts olympiques ?",
    "c": [
     "1928",
     "1936",
     "1948",
     "1952"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sport_010",
  "cat": "sport",
  "name": "Formule 1",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Formule 1 ?",
    "c": [
     "Grande-Bretagne",
     "France",
     "Italie",
     "Allemagne"
    ],
    "a": 0
   },
   {
    "q": "Combien de joueurs par équipe en Formule 1 ?",
    "c": [
     "1",
     "3",
     "2",
     "4"
    ],
    "a": 0
   },
   {
    "q": "Quel pilote a le plus de championnats du monde de F1 ?",
    "c": [
     "Alain Prost",
     "Juan Manuel Fangio",
     "Lewis Hamilton et Michael Schumacher",
     "Max Verstappen"
    ],
    "a": 2
   },
   {
    "q": "Combien de championnats Hamilton et Schumacher ont-ils ?",
    "c": [
     "5",
     "7",
     "6",
     "8"
    ],
    "a": 1
   },
   {
    "q": "Quel constructeur a le plus de titres en F1 ?",
    "c": [
     "McLaren",
     "Williams",
     "Ferrari",
     "Mercedes"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le premier championnat de F1 a-t-il eu lieu ?",
    "c": [
     "1950",
     "1955",
     "1960",
     "1947"
    ],
    "a": 0
   },
   {
    "q": "Quelle équipe française a participé à la F1 ?",
    "c": [
     "Toutes les trois",
     "Peugeot",
     "Alpine",
     "Renault"
    ],
    "a": 2
   },
   {
    "q": "Quel pilote est surnommé 'Le Professeur' ?",
    "c": [
     "Alain Prost",
     "Stirling Moss",
     "Niki Lauda",
     "Jackie Stewart"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sport_011",
  "cat": "sport",
  "name": "Judo",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Judo ?",
    "c": [
     "France",
     "Japon",
     "Corée",
     "Brésil"
    ],
    "a": 1
   },
   {
    "q": "Combien de joueurs par équipe en Judo ?",
    "c": [
     "2",
     "1",
     "4",
     "3"
    ],
    "a": 1
   },
   {
    "q": "Quel ceinture est la plus élevée en judo ?",
    "c": [
     "Noire",
     "Rouge et blanche",
     "Rouge",
     "Dorée"
    ],
    "a": 0
   },
   {
    "q": "Combien de ceintures existe-t-il en judo ?",
    "c": [
     "5",
     "7",
     "8",
     "6"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle le créateur du judo ?",
    "c": [
     "Gichin Funakoshi",
     "Jigoro Kano",
     "Yoshitaka Yano",
     "Morihei Ueshiba"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus haute distinction au judo ?",
    "c": [
     "Grand maître",
     "10e dan",
     "Ceinture rouge",
     "9e dan"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le judo est-il devenu olympique ?",
    "c": [
     "1972",
     "1980",
     "1968",
     "1964"
    ],
    "a": 3
   },
   {
    "q": "Quel judoka français a le plus de médailles olympiques ?",
    "c": [
     "Frédéric Demontfaucon",
     "David Douillet",
     "Angelo Parisi",
     "Teddy Riner"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sport_012",
  "cat": "sport",
  "name": "Golf",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Golf ?",
    "c": [
     "Grande-Bretagne",
     "Irlande",
     "États-Unis",
     "Afrique Sud"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en Golf ?",
    "c": [
     "1",
     "4",
     "2",
     "3"
    ],
    "a": 0
   },
   {
    "q": "Combien de trous compte un parcours de golf standard ?",
    "c": [
     "12",
     "9",
     "18",
     "36"
    ],
    "a": 2
   },
   {
    "q": "Quel golfeur a le plus de titres du Grand Chelem ?",
    "c": [
     "Jack Nicklaus",
     "Gary Player",
     "Arnold Palmer",
     "Tiger Woods"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le club utilisé pour frapper sur le tee ?",
    "c": [
     "Le driver",
     "Le fer",
     "Le putter",
     "Le wedge"
    ],
    "a": 0
   },
   {
    "q": "Quel est le score en dessous du par appelé ?",
    "c": [
     "Bogey",
     "Albatros",
     "Eagle",
     "Birdie"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le golf est-il devenu olympique ?",
    "c": [
     "2016",
     "2012",
     "2008",
     "1900"
    ],
    "a": 0
   },
   {
    "q": "Quel tournoi majeur se joue en août ?",
    "c": [
     "L'US Open",
     "The Masters",
     "The Open Championship",
     "Le PGA Championship"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sport_013",
  "cat": "sport",
  "name": "Escrime",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Escrime ?",
    "c": [
     "Hongrie",
     "France",
     "Italie",
     "Allemagne"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en Escrime ?",
    "c": [
     "1",
     "3",
     "2",
     "4"
    ],
    "a": 0
   },
   {
    "q": "Quelles sont les trois armes de l'escrime ?",
    "c": [
     "Fleuret, épée, rapière",
     "Fleuret, épée, sabre",
     "Sabre, épée, poignard",
     "Fleuret, sabre, poignard"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la cible valide au fleuret ?",
    "c": [
     "Le torse",
     "La tête",
     "Les bras",
     "Tout le corps"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle l'arbitre en escrime ?",
    "c": [
     "Le président du jury",
     "Le directeur de combat",
     "Le maître d'armes",
     "Le juge"
    ],
    "a": 0
   },
   {
    "q": "Quelle arme permet de toucher partout ?",
    "c": [
     "Toutes les armes",
     "Le fleuret",
     "L'épée",
     "Le sabre"
    ],
    "a": 2
   },
   {
    "q": "En quelle année l'escrime a-t-elle été aux premiers JO modernes ?",
    "c": [
     "1900",
     "1904",
     "1896",
     "1912"
    ],
    "a": 2
   },
   {
    "q": "Quel escrimeur français est le plus titré ?",
    "c": [
     "Christian d'Oriola",
     "Jean-Noël Ferrari",
     "Brice Guyart",
     "Érik Srecki"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sport_014",
  "cat": "sport",
  "name": "Handball",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Handball ?",
    "c": [
     "Danemark",
     "France",
     "Croatie",
     "Suède"
    ],
    "a": 0
   },
   {
    "q": "Combien de joueurs par équipe en Handball ?",
    "c": [
     "9",
     "5",
     "7",
     "11"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe au handball ?",
    "c": [
     "7",
     "5",
     "6",
     "8"
    ],
    "a": 0
   },
   {
    "q": "Quelle équipe a le plus de titres aux Championnats du Monde ?",
    "c": [
     "France",
     "Allemagne",
     "Danemark",
     "Suède"
    ],
    "a": 0
   },
   {
    "q": "Quel pays domine le handball féminin ?",
    "c": [
     "Norvège",
     "Russie",
     "France",
     "Danemark"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle la zone interdite devant le but ?",
    "c": [
     "Le cercle central",
     "La surface de but",
     "La zone",
     "La ligne des 6 mètres"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le handball est-il devenu olympique ?",
    "c": [
     "1972",
     "1980",
     "1936",
     "1968"
    ],
    "a": 0
   },
   {
    "q": "Quel gardien français est considéré comme le meilleur du monde ?",
    "c": [
     "Cyril Dumoulin",
     "Andréj Lavrov",
     "Vincent Gérard",
     "Thierry Omeyer"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sport_015",
  "cat": "sport",
  "name": "Volley-ball",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Volley-ball ?",
    "c": [
     "Italie",
     "Pologne",
     "Brésil",
     "Russie"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en Volley-ball ?",
    "c": [
     "8",
     "4",
     "6",
     "10"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe au volley-ball ?",
    "c": [
     "7",
     "6",
     "4",
     "5"
    ],
    "a": 1
   },
   {
    "q": "Combien de sets faut-il gagner pour remporter un match ?",
    "c": [
     "4",
     "1",
     "2",
     "3"
    ],
    "a": 3
   },
   {
    "q": "À combien de points se joue un set ?",
    "c": [
     "25",
     "15",
     "21",
     "11"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la taille minimale d'un filet masculin ?",
    "c": [
     "2,40 m",
     "2,43 m",
     "2,35 m",
     "2,50 m"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le volley-ball est-il devenu olympique ?",
    "c": [
     "1968",
     "1972",
     "1960",
     "1964"
    ],
    "a": 3
   },
   {
    "q": "Qui a inventé le volley-ball ?",
    "c": [
     "William G. Morgan",
     "Pierre de Coubertin",
     "James Naismith",
     "Luther H. Gulick"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sport_016",
  "cat": "sport",
  "name": "Surf",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Surf ?",
    "c": [
     "États-Unis",
     "Hawaï",
     "Brésil",
     "Australie"
    ],
    "a": 0
   },
   {
    "q": "Combien de joueurs par équipe en Surf ?",
    "c": [
     "2",
     "4",
     "3",
     "1"
    ],
    "a": 3
   },
   {
    "q": "Quelle discipline de surf consiste à dompter les vagues les plus hautes ?",
    "c": [
     "Bodyboard",
     "Longboard",
     "Shortboard",
     "Big wave surfing"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la compétition mondiale de surf ?",
    "c": [
     "Championship Tour",
     "World Surf League",
     "Surfing World Cup",
     "ASP"
    ],
    "a": 1
   },
   {
    "q": "Quel surfeur français est le plus connu ?",
    "c": [
     "Kelly Slater",
     "Gabriel Medina",
     "Mick Fanning",
     "Jérémy Florès"
    ],
    "a": 3
   },
   {
    "q": "Quel surfeur détient le plus de titres mondiaux ?",
    "c": [
     "John John Florence",
     "Kelly Slater",
     "Mick Fanning",
     "Andy Irons"
    ],
    "a": 1
   },
   {
    "q": "Combien de titres Slater a-t-il remportés ?",
    "c": [
     "13",
     "11",
     "8",
     "10"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le surf a-t-il fait ses débuts olympiques ?",
    "c": [
     "2020",
     "2024",
     "2012",
     "2016"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sport_017",
  "cat": "sport",
  "name": "Escalade",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Escalade ?",
    "c": [
     "Corée",
     "Japon",
     "France",
     "Autriche"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en Escalade ?",
    "c": [
     "4",
     "1",
     "2",
     "3"
    ],
    "a": 1
   },
   {
    "q": "Quelles sont les trois disciplines de l'escalade olympique ?",
    "c": [
     "Difficulté, bloc, lead",
     "Vitesse, bloc, trad",
     "Lead, bouldering, vitesse",
     "Difficulté, bloc, vitesse"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la protection mobile en escalade ?",
    "c": [
     "La corde",
     "Le baudrier",
     "Le dégaine",
     "Le mousqueton"
    ],
    "a": 2
   },
   {
    "q": "Quel est le niveau de difficulté le plus élevé en escalade ?",
    "c": [
     "9c",
     "9b",
     "9a",
     "10a"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le grimpeur qui protège le grimpeur ?",
    "c": [
     "Le partenaire",
     "L'assureur",
     "Le second",
     "Le garant"
    ],
    "a": 1
   },
   {
    "q": "En quelle année l'escalade a-t-elle fait ses débuts olympiques ?",
    "c": [
     "2024",
     "2016",
     "2012",
     "2020"
    ],
    "a": 3
   },
   {
    "q": "Quel grimpeur tchèque est une légende de l'escalade ?",
    "c": [
     "Adam Ondra",
     "Chris Sharma",
     "Alex Honnold",
     "Janja Garnbret"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sport_018",
  "cat": "sport",
  "name": "MMA",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en MMA ?",
    "c": [
     "Nouvelle-Zélande",
     "Brésil",
     "États-Unis",
     "Canada"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en MMA ?",
    "c": [
     "2",
     "1",
     "4",
     "3"
    ],
    "a": 1
   },
   {
    "q": "Que signifie MMA ?",
    "c": [
     "Mixed Martial Arts",
     "Mixed Multi Arts",
     "Modern Martial Arts",
     "Martial Mixed Arts"
    ],
    "a": 0
   },
   {
    "q": "Quelle organisation est la plus célèbre en MMA ?",
    "c": [
     "UFC",
     "ONE Championship",
     "PRIDE",
     "Bellator"
    ],
    "a": 0
   },
   {
    "q": "Dans quel pays le MMA professionnel a-t-il été légalisé pour la première fois ?",
    "c": [
     "Brésil",
     "Japon",
     "États-Unis",
     "Russie"
    ],
    "a": 2
   },
   {
    "q": "Quel combattant est surnommé 'The Notorious' ?",
    "c": [
     "Conor McGregor",
     "Jon Jones",
     "Khabib Nurmagomedov",
     "Israel Adesanya"
    ],
    "a": 0
   },
   {
    "q": "Combien de rounds dure un combat de championnat UFC ?",
    "c": [
     "3",
     "5",
     "6",
     "4"
    ],
    "a": 1
   },
   {
    "q": "Quelle technique est interdite en MMA ?",
    "c": [
     "Étranglement",
     "Coup de poing au visage",
     "Coup de pied dans les parties",
     "Clé de bras"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sport_019",
  "cat": "sport",
  "name": "Badminton",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Badminton ?",
    "c": [
     "Indonésie",
     "Chine",
     "Japon",
     "Malaisie"
    ],
    "a": 1
   },
   {
    "q": "Combien de joueurs par équipe en Badminton ?",
    "c": [
     "3",
     "2",
     "1",
     "4"
    ],
    "a": 2
   },
   {
    "q": "Combien de joueurs par équipe en double ?",
    "c": [
     "1",
     "3",
     "2",
     "4"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle la balle en badminton ?",
    "c": [
     "Le shuttlecock",
     "Le projectile",
     "Le plumier",
     "Le volant"
    ],
    "a": 3
   },
   {
    "q": "Quel pays domine le badminton mondial ?",
    "c": [
     "Chine",
     "Indonésie",
     "Corée du Sud",
     "Danemark"
    ],
    "a": 0
   },
   {
    "q": "Combien de sets pour gagner un match ?",
    "c": [
     "3",
     "4",
     "2",
     "1"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le badminton est-il devenu olympique ?",
    "c": [
     "1996",
     "1992",
     "1988",
     "2000"
    ],
    "a": 1
   },
   {
    "q": "Quel est le coup le plus puissant au badminton ?",
    "c": [
     "Le drive",
     "Le drop",
     "Le smash",
     "Le service"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sport_020",
  "cat": "sport",
  "name": "Baseball",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a gagné le plus de Coupes du Monde en Baseball ?",
    "c": [
     "Japon",
     "Cuba",
     "Corée",
     "États-Unis"
    ],
    "a": 3
   },
   {
    "q": "Combien de joueurs par équipe en Baseball ?",
    "c": [
     "7",
     "5",
     "11",
     "9"
    ],
    "a": 3
   },
   {
    "q": "Combien de joueurs par équipe au baseball ?",
    "c": [
     "9",
     "10",
     "11",
     "8"
    ],
    "a": 0
   },
   {
    "q": "Combien de manches dure un match standard ?",
    "c": [
     "7",
     "9",
     "10",
     "8"
    ],
    "a": 1
   },
   {
    "q": "Quelle équipe a gagné le plus de Séries Mondiales ?",
    "c": [
     "St. Louis Cardinals",
     "Los Angeles Dodgers",
     "New York Yankees",
     "Boston Red Sox"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle le frappeur ?",
    "c": [
     "Le batteur",
     "Le lanceur",
     "Le receveur",
     "Le voltigeur"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le baseball est-il devenu olympique ?",
    "c": [
     "1984",
     "1996",
     "1992",
     "1988"
    ],
    "a": 2
   },
   {
    "q": "Qui a inventé le baseball ?",
    "c": [
     "Albert Spalding",
     "Henry Chadwick",
     "Alexander Cartwright",
     "Abner Doubleday"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "animaux_001",
  "cat": "animaux",
  "name": "Les chiens",
  "level": "classique",
  "levels": [
   {
    "q": "À quelle espèce appartient le chien domestique ?",
    "c": [
     "Canis lupus familiaris (une seule espèce)",
     "Il existe environ 350 espèces différentes",
     "Canis leo",
     "Felis catus"
    ],
    "a": 0
   },
   {
    "q": "Combien de races de chiens sont reconnues mondialement ?",
    "c": [
     "Environ 350",
     "Environ 200",
     "Environ 500",
     "Environ 100"
    ],
    "a": 0
   },
   {
    "q": "Quel est le chien le plus rapide ?",
    "c": [
     "Le husky",
     "le golden retriever",
     "Le berger allemand",
     "Le lévrier"
    ],
    "a": 3
   },
   {
    "q": "Combien de dents un chien adulte a-t-il ?",
    "c": [
     "42",
     "36",
     "32",
     "48"
    ],
    "a": 0
   },
   {
    "q": "Quelle race de chien est la plus intelligente ?",
    "c": [
     "Border Collie",
     "Golden Retriever",
     "Berger Allemand",
     "Caniche"
    ],
    "a": 0
   },
   {
    "q": "Quel chien a le meilleur odorat ?",
    "c": [
     "Le chien de Saint-Hubert",
     "le labrador",
     "Le beagle",
     "Le berger allemand"
    ],
    "a": 0
   },
   {
    "q": "Combien d'os a un chien ?",
    "c": [
     "250",
     "400",
     "319",
     "206"
    ],
    "a": 2
   },
   {
    "q": "Quelle race de chien a vécu le plus longtemps (record) ?",
    "c": [
     "Jack Russell",
     "Chien de berger australien",
     "Caniche",
     "Chihuahua"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "animaux_002",
  "cat": "animaux",
  "name": "Les chats",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les chats existe-t-il environ ?",
    "c": [
     "70",
     "100",
     "30",
     "50"
    ],
    "a": 0
   },
   {
    "q": "Combien d'heures un chat dort-il par jour en moyenne ?",
    "c": [
     "12 à 16",
     "20 à 22",
     "4 à 6",
     "8 à 10"
    ],
    "a": 0
   },
   {
    "q": "Combien de races de chats existe-t-il ?",
    "c": [
     "Environ 100",
     "Environ 50",
     "Environ 40",
     "Environ 70"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus grand félin du monde ?",
    "c": [
     "La panthère",
     "Le jaguar",
     "Le lion",
     "Le tigre"
    ],
    "a": 3
   },
   {
    "q": "Combien de moustaches un chat a-t-il en moyenne ?",
    "c": [
     "24",
     "18",
     "12",
     "30"
    ],
    "a": 0
   },
   {
    "q": "Quelle race de chat est considérée comme la plus affectueuse ?",
    "c": [
     "Le Persan",
     "Le Maine Coon",
     "Le Ragdoll",
     "Le Siamois"
    ],
    "a": 2
   },
   {
    "q": "Combien de muscles l'oreille d'un chat compte-t-elle ?",
    "c": [
     "40",
     "32",
     "24",
     "18"
    ],
    "a": 1
   },
   {
    "q": "Quelle race de chat est la plus grande ?",
    "c": [
     "Le Ragdoll",
     "Le Norvégien",
     "Le Maine Coon",
     "Le Savannah"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "animaux_003",
  "cat": "animaux",
  "name": "Les oiseaux",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les oiseaux existe-t-il environ ?",
    "c": [
     "5000",
     "3000",
     "10000",
     "20000"
    ],
    "a": 2
   },
   {
    "q": "Combien d'espèces d'oiseaux existe-t-il dans le monde ?",
    "c": [
     "Environ 10 000",
     "Environ 20 000",
     "Environ 50 000",
     "Environ 5 000"
    ],
    "a": 0
   },
   {
    "q": "Quel est l'oiseau le plus rapide en piqué ?",
    "c": [
     "Le faucon pèlerin",
     "Le martinet",
     "L'aigle royal",
     "L'hirondelle"
    ],
    "a": 0
   },
   {
    "q": "Quel oiseau ne peut pas voler ?",
    "c": [
     "L'oie",
     "Le pingouin",
     "Le canard",
     "Le poulet"
    ],
    "a": 1
   },
   {
    "q": "Quel est le plus grand oiseau du monde ?",
    "c": [
     "L'émeu",
     "Le condor",
     "L'autruche",
     "Le casoar"
    ],
    "a": 2
   },
   {
    "q": "Combien de battements d'ailes un colibri fait-il par seconde ?",
    "c": [
     "Jusqu'à 50",
     "Jusqu'à 30",
     "Jusqu'à 100",
     "Jusqu'à 80"
    ],
    "a": 3
   },
   {
    "q": "Quel oiseau est un symbole de paix ?",
    "c": [
     "le cygne",
     "La colombe",
     "l'hirondelle",
     "Le pigeon"
    ],
    "a": 1
   },
   {
    "q": "Quel oiseau a la plus grande envergure ?",
    "c": [
     "le pélican",
     "l'aigle",
     "L'albatros",
     "Le condor"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "animaux_004",
  "cat": "animaux",
  "name": "Les poissons",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les poissons existe-t-il environ ?",
    "c": [
     "5000",
     "32000",
     "50000",
     "10000"
    ],
    "a": 1
   },
   {
    "q": "Quel est le plus grand poisson du monde ?",
    "c": [
     "Le requin baleine",
     "Le mérou",
     "Le requin blanc",
     "La baleine bleue"
    ],
    "a": 0
   },
   {
    "q": "Combien d'espèces de poissons existe-t-il ?",
    "c": [
     "Environ 50 000",
     "Environ 32 000",
     "Environ 10 000",
     "Environ 20 000"
    ],
    "a": 1
   },
   {
    "q": "Quel poisson peut changer de sexe ?",
    "c": [
     "le thon",
     "le saumon",
     "Le mérou",
     "Le poisson clown"
    ],
    "a": 3
   },
   {
    "q": "Quel est le poisson le plus venimeux ?",
    "c": [
     "Le poisson-pierre",
     "la rascasse",
     "le fugu",
     "le poisson-lion"
    ],
    "a": 0
   },
   {
    "q": "Comment respire un poisson ?",
    "c": [
     "Avec la peau",
     "Avec des branchies",
     "Avec la bouche",
     "Avec des poumons"
    ],
    "a": 1
   },
   {
    "q": "Quel poisson migrateur remonte les rivières pour se reproduire ?",
    "c": [
     "Le saumon",
     "le brochet",
     "la truite",
     "le thon"
    ],
    "a": 0
   },
   {
    "q": "Quel poisson est connu pour son venin mortel dans la cuisine japonaise ?",
    "c": [
     "Le fugu",
     "le thon",
     "la dorade",
     "le maquereau"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "animaux_005",
  "cat": "animaux",
  "name": "Les chevaux",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les chevaux existe-t-il environ ?",
    "c": [
     "350",
     "200",
     "500",
     "100"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps dure la gestation d'un cheval ?",
    "c": [
     "9 mois",
     "13 mois",
     "11 mois",
     "7 mois"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la race de cheval la plus rapide ?",
    "c": [
     "le quarter horse",
     "le trotteur",
     "L'arabe",
     "Le pur-sang anglais"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle le bébé de la jument ?",
    "c": [
     "l'ânon",
     "le veau",
     "Le poulain",
     "le poney"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la hauteur d'un cheval mesurée ?",
    "c": [
     "Au garrot",
     "À la tête",
     "à la croupe",
     "au dos"
    ],
    "a": 0
   },
   {
    "q": "Combien de races de chevaux existe-t-il dans le monde ?",
    "c": [
     "Environ 100",
     "Plus de 500",
     "Plus de 300",
     "Environ 200"
    ],
    "a": 2
   },
   {
    "q": "Quel cheval légendaire portait Alexandre le Grand ?",
    "c": [
     "Pégase",
     "Bucéphale",
     "Sleipnir",
     "Cronos"
    ],
    "a": 1
   },
   {
    "q": "Quelle discipline équestre est olympique ?",
    "c": [
     "la monte",
     "l'équitation western",
     "l'attelage",
     "Le dressage"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "animaux_006",
  "cat": "animaux",
  "name": "Les dauphins",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les dauphins existe-t-il environ ?",
    "c": [
     "20",
     "40",
     "60",
     "10"
    ],
    "a": 1
   },
   {
    "q": "Quel est le mammifère le plus intelligent après l'homme ?",
    "c": [
     "l'éléphant",
     "Le dauphin",
     "le chimpanzé",
     "le chien"
    ],
    "a": 1
   },
   {
    "q": "Combien de dents a un dauphin adulte ?",
    "c": [
     "Environ 100",
     "Environ 200",
     "Environ 150",
     "Environ 50"
    ],
    "a": 0
   },
   {
    "q": "Comment les dauphins dorment-ils ?",
    "c": [
     "Jamais",
     "Par cycles courts",
     "Un hémisphère du cerveau à la fois",
     "Complètement"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la vitesse maximale d'un dauphin ?",
    "c": [
     "60 km/h",
     "80 km/h",
     "40 km/h",
     "30 km/h"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps un dauphin peut-il rester sous l'eau ?",
    "c": [
     "5 minutes",
     "15 minutes",
     "30 minutes",
     "1 minute"
    ],
    "a": 1
   },
   {
    "q": "Quel est le plus grand dauphin ?",
    "c": [
     "le dauphin de Risso",
     "le dauphin bleu",
     "le grand dauphin",
     "L'orque"
    ],
    "a": 3
   },
   {
    "q": "Comment les dauphins communiquent-ils ?",
    "c": [
     "Par écholocalisation et sifflements",
     "Par les gestes",
     "Par des cris",
     "Par télépathie"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "animaux_007",
  "cat": "animaux",
  "name": "Les insectes",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les insectes existe-t-il environ ?",
    "c": [
     "500K",
     "1M",
     "10M",
     "100K"
    ],
    "a": 1
   },
   {
    "q": "Combien d'espèces d'insectes existe-t-il ?",
    "c": [
     "environ 500 000",
     "environ 100 000",
     "Plus d'un million",
     "environ 2 millions"
    ],
    "a": 2
   },
   {
    "q": "Quel insecte est connu pour son travail d'équipe ?",
    "c": [
     "La fourmi",
     "la termite",
     "l'abeille",
     "le scarabée"
    ],
    "a": 0
   },
   {
    "q": "Combien de pattes a un insecte ?",
    "c": [
     "6",
     "10",
     "8",
     "4"
    ],
    "a": 0
   },
   {
    "q": "Quel est l'insecte le plus rapide ?",
    "c": [
     "La libellule",
     "la mouche",
     "le frelon",
     "l'abeille"
    ],
    "a": 0
   },
   {
    "q": "Combien d'yeux a une abeille ?",
    "c": [
     "3",
     "8",
     "2",
     "5"
    ],
    "a": 3
   },
   {
    "q": "Quel insecte peut soulever jusqu'à 50 fois son poids ?",
    "c": [
     "La fourmi",
     "la coccinelle",
     "la sauterelle",
     "le scarabée"
    ],
    "a": 0
   },
   {
    "q": "Quel est l'insecte le plus venimeux du monde ?",
    "c": [
     "La fourmi Moïse",
     "le frelon géant",
     "l'abeille tueuse",
     "la veuve noire"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "animaux_008",
  "cat": "animaux",
  "name": "Les serpents",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les serpents existe-t-il environ ?",
    "c": [
     "500",
     "5000",
     "3500",
     "1000"
    ],
    "a": 2
   },
   {
    "q": "Quel est le serpent le plus venimeux du monde ?",
    "c": [
     "le mamba noir",
     "le serpent corail",
     "Le taïpan du désert",
     "le cobra royal"
    ],
    "a": 2
   },
   {
    "q": "Combien d'espèces de serpents existe-t-il ?",
    "c": [
     "Environ 5 000",
     "Environ 2 000",
     "Environ 3 000",
     "Environ 1 000"
    ],
    "a": 2
   },
   {
    "q": "Quel serpent est le plus long ?",
    "c": [
     "L'anaconda",
     "le python réticulé",
     "le cobra royal",
     "le boa"
    ],
    "a": 0
   },
   {
    "q": "Comment les serpents chassent-ils ?",
    "c": [
     "par la vue",
     "Par odorat et détection de chaleur",
     "par l'ouïe",
     "par le toucher"
    ],
    "a": 1
   },
   {
    "q": "Quel serpent peut avaler une proie entière ?",
    "c": [
     "Le python",
     "le cobra",
     "la vipère",
     "la couleuvre"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps un serpent peut-il jeûner ?",
    "c": [
     "Plusieurs mois",
     "plusieurs jours",
     "plusieurs semaines",
     "plusieurs années"
    ],
    "a": 0
   },
   {
    "q": "Quel serpent est connu pour danser face à un charmeur ?",
    "c": [
     "le python",
     "Le cobra",
     "le boa",
     "la vipère"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "animaux_009",
  "cat": "animaux",
  "name": "Les ours",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les ours existe-t-il environ ?",
    "c": [
     "5",
     "3",
     "12",
     "8"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus grand ours du monde ?",
    "c": [
     "L'ours polaire",
     "l'ours noir",
     "l'ours kodiak",
     "l'ours brun"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps dure l'hibernation d'un ours ?",
    "c": [
     "1 à 2 mois",
     "2 à 3 mois",
     "5 à 7 mois",
     "8 à 9 mois"
    ],
    "a": 2
   },
   {
    "q": "Quel est le régime alimentaire des ours ?",
    "c": [
     "insectivore",
     "carnivore",
     "Omnivore",
     "herbivore"
    ],
    "a": 2
   },
   {
    "q": "À quelle vitesse un ours peut-il courir ?",
    "c": [
     "Jusqu'à 50 km/h",
     "jusqu'à 40 km/h",
     "jusqu'à 70 km/h",
     "jusqu'à 30 km/h"
    ],
    "a": 0
   },
   {
    "q": "Quelle espèce d'ours n'existe pas ?",
    "c": [
     "L'ours vert",
     "l'ours brun",
     "l'ours noir",
     "l'ours polaire"
    ],
    "a": 0
   },
   {
    "q": "Quel ours est le plus menacé d'extinction ?",
    "c": [
     "l'ours noir",
     "l'ours brun",
     "l'ours kodiak",
     "L'ours polaire"
    ],
    "a": 3
   },
   {
    "q": "Combien de petits une ourse a-t-elle en moyenne ?",
    "c": [
     "2",
     "1",
     "3",
     "4"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "animaux_010",
  "cat": "animaux",
  "name": "Les requins",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'espèces de les requins existe-t-il environ ?",
    "c": [
     "500",
     "200",
     "300",
     "800"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plus grand requin du monde ?",
    "c": [
     "le requin tigre",
     "le grand requin blanc",
     "le requin marteau",
     "Le requin baleine"
    ],
    "a": 3
   },
   {
    "q": "Combien d'espèces de requins existe-t-il ?",
    "c": [
     "plus de 200",
     "Plus de 500",
     "plus de 800",
     "plus de 300"
    ],
    "a": 1
   },
   {
    "q": "Quel requin est le plus dangereux pour l'homme ?",
    "c": [
     "Le grand requin blanc",
     "le requin marteau",
     "le requin tigre",
     "le requin taureau"
    ],
    "a": 0
   },
   {
    "q": "Combien de dents un requin perd-il dans sa vie ?",
    "c": [
     "environ 500",
     "environ 100",
     "environ une dizaine",
     "Des milliers"
    ],
    "a": 3
   },
   {
    "q": "Comment les requins détectent-ils leurs proies ?",
    "c": [
     "par l'odorat",
     "Par l'électro-réception",
     "par la vue",
     "par l'ouïe"
    ],
    "a": 1
   },
   {
    "q": "Quel requin peut vivre en eau douce ?",
    "c": [
     "le requin tigre",
     "Le requin taureau",
     "le requin marteau",
     "le grand requin blanc"
    ],
    "a": 1
   },
   {
    "q": "À quelle vitesse un grand requin blanc peut-il nager ?",
    "c": [
     "Jusqu'à 56 km/h",
     "jusqu'à 40 km/h",
     "jusqu'à 70 km/h",
     "jusqu'à 30 km/h"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "musique_001",
  "cat": "musique",
  "name": "Le Rock",
  "level": "classique",
  "levels": [
   {
    "q": "Quel groupe britannique a connu un succès planétaire dans les années 1970 ?",
    "c": [
     "Queen",
     "Pink Floyd",
     "Led Zeppelin",
     "The Beatles"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur de rock était surnommé 'The King' ?",
    "c": [
     "Little Richard",
     "Chuck Berry",
     "Buddy Holly",
     "Elvis Presley"
    ],
    "a": 3
   },
   {
    "q": "Quel groupe a sorti 'Bohemian Rhapsody' ?",
    "c": [
     "Led Zeppelin",
     "Pink Floyd",
     "The Beatles",
     "Queen"
    ],
    "a": 3
   },
   {
    "q": "Qui est surnommé 'The King of Rock and Roll' ?",
    "c": [
     "Elvis Presley",
     "Little Richard",
     "Chuck Berry",
     "Buddy Holly"
    ],
    "a": 0
   },
   {
    "q": "Quel guitariste est considéré comme l'un des meilleurs de l'histoire ?",
    "c": [
     "Jimi Hendrix",
     "Eddie Van Halen",
     "Eric Clapton",
     "Jimmy Page"
    ],
    "a": 0
   },
   {
    "q": "Quel groupe britannique a sorti 'Stairway to Heaven' ?",
    "c": [
     "The Who",
     "Deep Purple",
     "Led Zeppelin",
     "Black Sabbath"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le rock 'n' roll a-t-il émergé ?",
    "c": [
     "Années 1930",
     "Années 1940",
     "Années 1950",
     "Années 1960"
    ],
    "a": 2
   },
   {
    "q": "Quel album des Pink Floyd est l'un des plus vendus au monde ?",
    "c": [
     "The Wall",
     "Wish You Were Here",
     "The Dark Side of the Moon",
     "Animals"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_002",
  "cat": "musique",
  "name": "Le Jazz",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle ville américaine le jazz est-il né ?",
    "c": [
     "La Nouvelle-Orléans",
     "Chicago",
     "New York",
     "Nouvelle-Orléans"
    ],
    "a": 0
   },
   {
    "q": "Quel trompettiste est une légende du jazz ?",
    "c": [
     "Dizzy Gillespie",
     "Chet Baker",
     "Louis Armstrong",
     "Miles Davis"
    ],
    "a": 2
   },
   {
    "q": "Quel saxophoniste de jazz a enregistré 'Giant Steps' ?",
    "c": [
     "Dexter Gordon",
     "John Coltrane",
     "Charlie Parker",
     "Sonny Rollins"
    ],
    "a": 1
   },
   {
    "q": "Quel style de jazz se caractérise par des tempos rapides ?",
    "c": [
     "Le swing",
     "Le free jazz",
     "Le bebop",
     "Le cool jazz"
    ],
    "a": 2
   },
   {
    "q": "Qui a composé 'Take Five' ?",
    "c": [
     "Dave Brubeck",
     "Thelonious Monk",
     "John Coltrane",
     "Miles Davis"
    ],
    "a": 0
   },
   {
    "q": "Quel pianiste de jazz a une technique unique et un style angulaire ?",
    "c": [
     "Oscar Peterson",
     "Bill Evans",
     "Herbie Hancock",
     "Thelonious Monk"
    ],
    "a": 3
   },
   {
    "q": "Quelle chanteuse de jazz est surnommée 'Lady Day' ?",
    "c": [
     "Nina Simone",
     "Ella Fitzgerald",
     "Billie Holiday",
     "Sarah Vaughan"
    ],
    "a": 2
   },
   {
    "q": "Quel musicien de jazz a composé 'So What' ?",
    "c": [
     "Dizzy Gillespie",
     "Thelonious Monk",
     "Miles Davis",
     "John Coltrane"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_003",
  "cat": "musique",
  "name": "Le Rap",
  "level": "classique",
  "levels": [
   {
    "q": "Quel groupe de rap français a sorti 'Ma Benz' ?",
    "c": [
     "NTM",
     "MC Solaar",
     "Suprême NTM",
     "IAM"
    ],
    "a": 3
   },
   {
    "q": "Quel artiste rap a sorti l'album 'The Chronic' ?",
    "c": [
     "Notorious BIG",
     "Tupac",
     "Snoop Dogg",
     "Dr. Dre"
    ],
    "a": 3
   },
   {
    "q": "Quel groupe de rap new-yorkais a sorti 'Illmatic' ?",
    "c": [
     "A Tribe Called Quest",
     "Wu-Tang Clan",
     "De La Soul",
     "Nas"
    ],
    "a": 3
   },
   {
    "q": "Qui est considéré comme le père du rap français ?",
    "c": [
     "MC Solaar",
     "Suprême NTM",
     "IAM",
     "NTM"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le rap a-t-il émergé dans le Bronx ?",
    "c": [
     "Années 1980",
     "Années 1970",
     "Années 1960",
     "Années 1990"
    ],
    "a": 1
   },
   {
    "q": "Quel rappeur français a vendu le plus d'albums ?",
    "c": [
     "MC Solaar",
     "NTM",
     "IAM",
     "Booba"
    ],
    "a": 0
   },
   {
    "q": "Quel battle de rap est célèbre entre Tupac et Biggie ?",
    "c": [
     "La côte Est contre la côte Ouest",
     "La guerre du rap",
     "Le clash des rois",
     "La battle du siècle"
    ],
    "a": 0
   },
   {
    "q": "Quel album de Kendrick Lamar a gagné le Pulitzer ?",
    "c": [
     "DAMN.",
     "Mr. Morale",
     "To Pimp a Butterfly",
     "good kid, mAAd city"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "musique_004",
  "cat": "musique",
  "name": "La Pop",
  "level": "classique",
  "levels": [
   {
    "q": "Quel chanteur pop est surnommé 'The King of Pop' ?",
    "c": [
     "Michael Jackson",
     "Madonna",
     "Elvis Presley",
     "Prince"
    ],
    "a": 0
   },
   {
    "q": "Quelle chanteuse pop a sorti l'album '1989' ?",
    "c": [
     "Katy Perry",
     "Taylor Swift",
     "Lady Gaga",
     "Rihanna"
    ],
    "a": 1
   },
   {
    "q": "Quel groupe pop britannique est le plus vendu de l'histoire ?",
    "c": [
     "The Beatles",
     "Spice Girls",
     "Queen",
     "ABBA"
    ],
    "a": 0
   },
   {
    "q": "Quel tube de 2015 de Mark Ronson met en vedette Bruno Mars ?",
    "c": [
     "Shake It Off",
     "Get Lucky",
     "Uptown Funk",
     "Happy"
    ],
    "a": 2
   },
   {
    "q": "Combien d'albums Michael Jackson a-t-il vendus ?",
    "c": [
     "Plus de 500 millions",
     "Plus de 200 millions",
     "Plus de 350 millions",
     "Plus de 100 millions"
    ],
    "a": 2
   },
   {
    "q": "Quelle chanteuse pop a remporté le plus de Grammy Awards ?",
    "c": [
     "Beyoncé",
     "Madonna",
     "Taylor Swift",
     "Lady Gaga"
    ],
    "a": 0
   },
   {
    "q": "Quel album de 1982 de Michael Jackson est le plus vendu de tous les temps ?",
    "c": [
     "Dangerous",
     "Bad",
     "Off the Wall",
     "Thriller"
    ],
    "a": 3
   },
   {
    "q": "Quelle pop star américaine a commencé dans la série Hannah Montana ?",
    "c": [
     "Selena Gomez",
     "Britney Spears",
     "Demi Lovato",
     "Miley Cyrus"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "musique_005",
  "cat": "musique",
  "name": "Le Classique",
  "level": "classique",
  "levels": [
   {
    "q": "Quel compositeur allemand est devenu sourd mais a continué à composer ?",
    "c": [
     "Mozart",
     "Brahms",
     "Beethoven",
     "Bach"
    ],
    "a": 2
   },
   {
    "q": "Quel compositeur autrichien est connu pour ses sonates et symphonies ?",
    "c": [
     "Haydn",
     "Schubert",
     "Bruckner",
     "Mozart"
    ],
    "a": 3
   },
   {
    "q": "Quel instrument est emblématique de la musique baroque ?",
    "c": [
     "Le clavecin",
     "La flûte",
     "L'orgue",
     "Le violon"
    ],
    "a": 0
   },
   {
    "q": "Quel compositeur russe a composé 'Casse-Noisette' ?",
    "c": [
     "Prokofiev",
     "Tchaïkovski",
     "Stravinsky",
     "Rachmaninov"
    ],
    "a": 1
   },
   {
    "q": "En quelle période a vécu Beethoven ?",
    "c": [
     "Renaissance",
     "Baroque",
     "Médiévale",
     "Classique et romantique"
    ],
    "a": 3
   },
   {
    "q": "Quel opéra de Mozart est l'un des plus joués ?",
    "c": [
     "Les Noces de Figaro",
     "La Flûte enchantée",
     "Così fan tutte",
     "Don Giovanni"
    ],
    "a": 1
   },
   {
    "q": "Quel compositeur allemand a écrit 'L'Art de la fugue' ?",
    "c": [
     "Claudio Monteverdi",
     "Antonio Vivaldi",
     "Jean-Sébastien Bach",
     "Georg Friedrich Haendel"
    ],
    "a": 2
   },
   {
    "q": "Quel compositeur a écrit la 'Neuvième Symphonie' avec le chœur final 'Ode à la joie' ?",
    "c": [
     "Mozart",
     "Schubert",
     "Beethoven",
     "Bruckner"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_006",
  "cat": "musique",
  "name": "Le Blues",
  "level": "classique",
  "levels": [
   {
    "q": "Quel chanteur de blues est surnommé 'King of the Blues' ?",
    "c": [
     "Robert Johnson",
     "B.B. King",
     "Muddy Waters",
     "John Lee Hooker"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la structure typique d'un blues en 12 mesures ?",
    "c": [
     "12 mesures",
     "24 mesures",
     "8 mesures",
     "16 mesures"
    ],
    "a": 0
   },
   {
    "q": "Quel bluesman a vendu son âme au diable selon la légende ?",
    "c": [
     "Son House",
     "Charley Patton",
     "Robert Johnson",
     "Skip James"
    ],
    "a": 2
   },
   {
    "q": "Quelle région des États-Unis est le berceau du blues ?",
    "c": [
     "Le delta du Mississippi",
     "Le Texas",
     "Chicago",
     "La Nouvelle-Orléans"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur de blues a enregistré 'I'm Your Hoochie Coochie Man' ?",
    "c": [
     "Howlin' Wolf",
     "Muddy Waters",
     "Albert King",
     "Willie Dixon"
    ],
    "a": 1
   },
   {
    "q": "Quel guitariste français est un virtuose du blues ?",
    "c": [
     "Bill Deraime",
     "Jean-Jacques Milteau",
     "Mike Lécuyer",
     "Paul Personne"
    ],
    "a": 3
   },
   {
    "q": "Quel blues a influencé directement le rock 'n' roll ?",
    "c": [
     "Le blues rural",
     "Le delta blues",
     "Le rhythm and blues",
     "Le blues électrique"
    ],
    "a": 2
   },
   {
    "q": "Quel bluesman a enregistré 'Cross Road Blues' ?",
    "c": [
     "Son House",
     "Robert Johnson",
     "Charley Patton",
     "Muddy Waters"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "musique_007",
  "cat": "musique",
  "name": "Le Reggae",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays vient le reggae ?",
    "c": [
     "Cuba",
     "Trinidad",
     "Brésil",
     "Jamaïque"
    ],
    "a": 3
   },
   {
    "q": "Quel artiste reggae est une icône mondiale ?",
    "c": [
     "Jimmy Cliff",
     "Toots Hibbert",
     "Bob Marley",
     "Peter Tosh"
    ],
    "a": 2
   },
   {
    "q": "Quel est le rythme caractéristique du reggae ?",
    "c": [
     "La syncope",
     "Le contretemps",
     "Le temps fort",
     "Le shuffle"
    ],
    "a": 1
   },
   {
    "q": "Quel est le titre le plus connu de Bob Marley ?",
    "c": [
     "Buffalo Soldier",
     "Redemption Song",
     "One Love",
     "No Woman No Cry"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Bob Marley est-il mort ?",
    "c": [
     "1981",
     "1977",
     "1985",
     "1990"
    ],
    "a": 0
   },
   {
    "q": "Quel mouvement spirituel est associé au reggae jamaïcain ?",
    "c": [
     "Le vaudou",
     "Le candomblé",
     "Le rastafarisme",
     "Le santeria"
    ],
    "a": 2
   },
   {
    "q": "Quel album de Bob Marley est le plus vendu ?",
    "c": [
     "Exodus",
     "Rastaman Vibration",
     "Catch a Fire",
     "Legend"
    ],
    "a": 3
   },
   {
    "q": "Quel chanteur reggae a écrit 'The Harder They Come' ?",
    "c": [
     "Burning Spear",
     "Bob Marley",
     "Jimmy Cliff",
     "Peter Tosh"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_008",
  "cat": "musique",
  "name": "La Soul",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle chanteuse soul est surnommée 'The Queen of Soul' ?",
    "c": [
     "Diana Ross",
     "Aretha Franklin",
     "Etta James",
     "Tina Turner"
    ],
    "a": 1
   },
   {
    "q": "Quel label discographique était le plus important pour la soul ?",
    "c": [
     "Atlantic Records",
     "Chess Records",
     "Motown",
     "Stax Records"
    ],
    "a": 2
   },
   {
    "q": "Quel est le titre phare d'Aretha Franklin ?",
    "c": [
     "I Say a Little Prayer",
     "Chain of Fools",
     "Think",
     "Respect"
    ],
    "a": 3
   },
   {
    "q": "Quel chanteur a enregistré '(Sittin' On) The Dock of the Bay' ?",
    "c": [
     "Otis Redding",
     "Percy Sledge",
     "Wilson Pickett",
     "Sam Cooke"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le label Motown a-t-il été fondé ?",
    "c": [
     "1950",
     "1963",
     "1955",
     "1959"
    ],
    "a": 3
   },
   {
    "q": "Quelle chanteuse soul a connu un succès avec 'Proud Mary' ?",
    "c": [
     "Tina Turner",
     "Aretha Franklin",
     "Gladys Knight",
     "Diana Ross"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur soul est surnommé 'The Godfather of Soul' ?",
    "c": [
     "James Brown",
     "Ray Charles",
     "Otis Redding",
     "Aretha Franklin"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur a écrit 'A Change Is Gonna Come' ?",
    "c": [
     "Sam Cooke",
     "James Brown",
     "Otis Redding",
     "Ray Charles"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "musique_009",
  "cat": "musique",
  "name": "Le Metal",
  "level": "classique",
  "levels": [
   {
    "q": "Quel groupe est considéré comme le pionnier du heavy metal ?",
    "c": [
     "Iron Maiden",
     "Deep Purple",
     "Black Sabbath",
     "Led Zeppelin"
    ],
    "a": 2
   },
   {
    "q": "Quel guitariste de metal est surnommé 'Metal God' ?",
    "c": [
     "Jimi Hendrix",
     "James Hetfield",
     "Tony Iommi",
     "Dave Mustaine"
    ],
    "a": 3
   },
   {
    "q": "Quel groupe est connu pour son masque et son show scénique ?",
    "c": [
     "KISS",
     "Marilyn Manson",
     "Ghost",
     "Slipknot"
    ],
    "a": 0
   },
   {
    "q": "Quel genre de metal se caractérise par des voix gutturales ?",
    "c": [
     "Death metal",
     "Speed metal",
     "Power metal",
     "Heavy metal"
    ],
    "a": 0
   },
   {
    "q": "Quel festival allemand est le plus grand festival de metal au monde ?",
    "c": [
     "Hellfest",
     "Bloodstock",
     "Wacken Open Air",
     "Download Festival"
    ],
    "a": 2
   },
   {
    "q": "Quel groupe de metal a sorti l'album 'Master of Puppets' ?",
    "c": [
     "Metallica",
     "Megadeth",
     "Slayer",
     "Anthrax"
    ],
    "a": 0
   },
   {
    "q": "Quel est le sous-genre le plus rapide du metal ?",
    "c": [
     "Le death metal",
     "Le power metal",
     "Le thrash metal",
     "Le black metal"
    ],
    "a": 2
   },
   {
    "q": "Quel groupe de metal allemand est le plus célèbre ?",
    "c": [
     "Helloween",
     "Scorpions",
     "Rammstein",
     "Accept"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_010",
  "cat": "musique",
  "name": "Le Punk",
  "level": "classique",
  "levels": [
   {
    "q": "Quel groupe punk est le plus célèbre ?",
    "c": [
     "The Ramones",
     "The Clash",
     "Dead Kennedys",
     "Sex Pistols"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le punk a-t-il émergé ?",
    "c": [
     "Milieu des années 1970",
     "Années 1980",
     "Années 1990",
     "Début des années 1960"
    ],
    "a": 0
   },
   {
    "q": "Quel groupe punk britannique a sorti 'God Save the Queen' ?",
    "c": [
     "Damned",
     "Sex Pistols",
     "Buzzcocks",
     "The Clash"
    ],
    "a": 1
   },
   {
    "q": "Quel est le style vestimentaire associé au punk ?",
    "c": [
     "Costumes cravates",
     "Vêtements fluo",
     "Chemises hawaïennes",
     "Cuir et clous"
    ],
    "a": 3
   },
   {
    "q": "Quel groupe punk français est le plus connu ?",
    "c": [
     "Les Wampas",
     "La Souris Déglinguée",
     "Bérurier Noir",
     "Oberkampf"
    ],
    "a": 2
   },
   {
    "q": "Quel album des Ramones est leur premier ?",
    "c": [
     "Rocket to Russia",
     "Leave Home",
     "Road to Ruin",
     "Ramones"
    ],
    "a": 3
   },
   {
    "q": "Quel mouvement punk a influencé le grunge ?",
    "c": [
     "L'anarcho-punk",
     "Le punk rock",
     "Le pop punk",
     "Le punk hardcore"
    ],
    "a": 3
   },
   {
    "q": "Quel chanteur punk français est connu pour ses paroles engagées ?",
    "c": [
     "Guido",
     "François Hadji-Lazaro",
     "Lorant",
     "Didier Wampas"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "musique_011",
  "cat": "musique",
  "name": "Le Folk",
  "level": "classique",
  "levels": [
   {
    "q": "Quel instrument est emblématique de la musique folk ?",
    "c": [
     "L'harmonica",
     "Le banjo",
     "La guitare acoustique",
     "Le violon"
    ],
    "a": 2
   },
   {
    "q": "Quelle chanteuse folk canadienne est mondialement connue ?",
    "c": [
     "Carly Simon",
     "Carole King",
     "Joan Baez",
     "Joni Mitchell"
    ],
    "a": 3
   },
   {
    "q": "Quel festival de 1969 a marqué l'apogée du folk ?",
    "c": [
     "Newport Folk Festival",
     "Woodstock",
     "Glastonbury",
     "Coachella"
    ],
    "a": 1
   },
   {
    "q": "En quelle année Bob Dylan est-il passé à l'électrique ?",
    "c": [
     "1967",
     "1963",
     "1965",
     "1969"
    ],
    "a": 2
   },
   {
    "q": "Quel groupe français chante 'Le métèque' dans le style folk ?",
    "c": [
     "Maxime Le Forestier",
     "Francis Cabrel",
     "Georges Moustaki",
     "Alain Souchon"
    ],
    "a": 2
   },
   {
    "q": "Quelle chanson folk est un hymne mondial pour la paix ?",
    "c": [
     "Blowin' in the Wind",
     "Give Peace a Chance",
     "Imagine",
     "The Times They Are A-Changin'"
    ],
    "a": 2
   },
   {
    "q": "Quel chanteur folk américain a écrit 'Blowin' in the Wind' ?",
    "c": [
     "Woody Guthrie",
     "Pete Seeger",
     "Johnny Cash",
     "Bob Dylan"
    ],
    "a": 3
   },
   {
    "q": "Quel chanteur folk français est connu pour 'Amsterdam' ?",
    "c": [
     "Jacques Brel",
     "Léo Ferré",
     "Georges Brassens",
     "Serge Gainsbourg"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "musique_012",
  "cat": "musique",
  "name": "L'Électro",
  "level": "classique",
  "levels": [
   {
    "q": "Quel genre de musique électronique est né à Détroit ?",
    "c": [
     "La techno",
     "Le dubstep",
     "Le drum and bass",
     "La house"
    ],
    "a": 0
   },
   {
    "q": "Quel DJ français est mondialement connu ?",
    "c": [
     "Bob Sinclar",
     "Martin Solveig",
     "Daft Punk",
     "David Guetta"
    ],
    "a": 3
   },
   {
    "q": "Quelle ville allemande est le berceau de la techno ?",
    "c": [
     "Francfort",
     "Munich",
     "Hambourg",
     "Berlin"
    ],
    "a": 3
   },
   {
    "q": "Quel groupe français a sorti 'Around the World' ?",
    "c": [
     "M83",
     "Justice",
     "Daft Punk",
     "Air"
    ],
    "a": 2
   },
   {
    "q": "Quel instrument est essentiel à la musique électronique ?",
    "c": [
     "Le synthétiseur",
     "La guitare électrique",
     "La batterie",
     "Le piano"
    ],
    "a": 0
   },
   {
    "q": "Quel festival est le plus grand festival de musique électronique ?",
    "c": [
     "Tomorrowland",
     "Creamfields",
     "Ultra Music Festival",
     "Electric Daisy Carnival"
    ],
    "a": 0
   },
   {
    "q": "Quel sous-genre de l'électro se caractérise par des BPM très élevés ?",
    "c": [
     "Le trance",
     "La techno",
     "Le hardstyle",
     "La house"
    ],
    "a": 2
   },
   {
    "q": "Quel pionnier de la musique électronique a sorti 'Autobahn' ?",
    "c": [
     "Jean-Michel Jarre",
     "Tangerine Dream",
     "Kraftwerk",
     "Brian Eno"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_013",
  "cat": "musique",
  "name": "Le R&B",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle chanteuse R&B a sorti 'Crazy in Love' ?",
    "c": [
     "Mary J. Blige",
     "Alicia Keys",
     "Rihanna",
     "Beyoncé"
    ],
    "a": 3
   },
   {
    "q": "Quel label est à l'origine du R&B moderne ?",
    "c": [
     "Roc-A-Fella",
     "Motown",
     "Bad Boy",
     "Def Jam"
    ],
    "a": 2
   },
   {
    "q": "Quel groupe R&B des années 1990 a connu un énorme succès ?",
    "c": [
     "En Vogue",
     "TLC",
     "Destiny's Child",
     "Boyz II Men"
    ],
    "a": 3
   },
   {
    "q": "Quelle chanteuse R&B est connue pour 'No Scrubs' ?",
    "c": [
     "TLC",
     "Enya",
     "Destiny's Child",
     "Beyoncé"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur R&B a collaboré avec Daft Punk sur 'Get Lucky' ?",
    "c": [
     "Bruno Mars",
     "Justin Timberlake",
     "The Weeknd",
     "Pharrell Williams"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le terme R&B a-t-il été inventé ?",
    "c": [
     "1930",
     "1960",
     "1949",
     "1955"
    ],
    "a": 2
   },
   {
    "q": "Quel chanteur R&B est surnommé 'The King of R&B' ?",
    "c": [
     "Usher",
     "R. Kelly",
     "Stevie Wonder",
     "Chris Brown"
    ],
    "a": 1
   },
   {
    "q": "Quel musicien R&B a remporté le plus de Grammy Awards ?",
    "c": [
     "Stevie Wonder",
     "Aretha Franklin",
     "Beyoncé",
     "Ray Charles"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "musique_014",
  "cat": "musique",
  "name": "La Country",
  "level": "classique",
  "levels": [
   {
    "q": "Quel instrument est emblématique de la musique country ?",
    "c": [
     "La mandoline",
     "La steel guitar",
     "L'harmonica",
     "Le banjo"
    ],
    "a": 1
   },
   {
    "q": "Quelle ville du Tennessee est la capitale de la country ?",
    "c": [
     "Knoxville",
     "Nashville",
     "Memphis",
     "Chattanooga"
    ],
    "a": 1
   },
   {
    "q": "Quel chanteur country a écrit 'Ring of Fire' ?",
    "c": [
     "June Carter",
     "Merle Kilgore",
     "Johnny Cash",
     "Harlan Howard"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le Grand Ole Opry a-t-il été fondé ?",
    "c": [
     "1925",
     "1920",
     "1930",
     "1935"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur français est connu pour sa country ?",
    "c": [
     "Michel Sardou",
     "Joe Dassin",
     "Hugues Aufray",
     "Eddy Mitchell"
    ],
    "a": 2
   },
   {
    "q": "Quel chanteur country est surnommé 'The Man in Black' ?",
    "c": [
     "Merle Haggard",
     "Willie Nelson",
     "Johnny Cash",
     "Waylon Jennings"
    ],
    "a": 2
   },
   {
    "q": "Quelle chanteuse country est la plus vendue de tous les temps ?",
    "c": [
     "Taylor Swift",
     "Shania Twain",
     "Carrie Underwood",
     "Dolly Parton"
    ],
    "a": 1
   },
   {
    "q": "Quel chanteur country a eu un tube avec 'Achy Breaky Heart' ?",
    "c": [
     "Tim McGraw",
     "Blake Shelton",
     "Billy Ray Cyrus",
     "Garth Brooks"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_015",
  "cat": "musique",
  "name": "Le Funk",
  "level": "classique",
  "levels": [
   {
    "q": "Quel musicien est considéré comme le père du funk ?",
    "c": [
     "George Clinton",
     "Sly Stone",
     "Bootsy Collins",
     "James Brown"
    ],
    "a": 3
   },
   {
    "q": "Quel riff de basse est le plus célèbre du funk ?",
    "c": [
     "Flash Light de Parliament",
     "Good Times de Chic",
     "Super Freak de Rick James",
     "Get Up Offa That Thing de James Brown"
    ],
    "a": 1
   },
   {
    "q": "Quel groupe a fusionné funk et rock dans les années 1980 ?",
    "c": [
     "Prince",
     "Parliament",
     "Red Hot Chili Peppers",
     "Earth, Wind & Fire"
    ],
    "a": 2
   },
   {
    "q": "Quel bassiste de funk est connu pour son style slap ?",
    "c": [
     "Bootsy Collins",
     "Stanley Clarke",
     "Larry Graham",
     "Marcus Miller"
    ],
    "a": 2
   },
   {
    "q": "En quelle année James Brown a-t-il enregistré 'Papa's Got a Brand New Bag' ?",
    "c": [
     "1968",
     "1970",
     "1963",
     "1965"
    ],
    "a": 3
   },
   {
    "q": "Quel groupe de funk a une section de cuivres légendaire ?",
    "c": [
     "The Commodores",
     "Earth, Wind & Fire",
     "Kool & the Gang",
     "Tower of Power"
    ],
    "a": 3
   },
   {
    "q": "Quel chanteur funk a sorti 'Super Freak' ?",
    "c": [
     "Prince",
     "Rick James",
     "James Brown",
     "George Clinton"
    ],
    "a": 1
   },
   {
    "q": "Quelle chanson funk de 1976 est devenue un hymne disco ?",
    "c": [
     "Flash Light de Parliament",
     "Pick Up the Pieces d'Average White Band",
     "Le Freak de Chic",
     "Super Freak de Rick James"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "musique_016",
  "cat": "musique",
  "name": "Le Disco",
  "level": "classique",
  "levels": [
   {
    "q": "Quel groupe suédois a dominé l'ère disco ?",
    "c": [
     "ABBA",
     "Chic",
     "Bee Gees",
     "Earth, Wind & Fire"
    ],
    "a": 0
   },
   {
    "q": "Quelle chanson des Bee Gees est emblématique du disco ?",
    "c": [
     "More Than a Woman",
     "Stayin' Alive",
     "Night Fever",
     "How Deep Is Your Love"
    ],
    "a": 1
   },
   {
    "q": "Quel film de 1977 a popularisé le disco ?",
    "c": [
     "Saturday Night Fever",
     "Flashdance",
     "The Sound of Music",
     "Grease"
    ],
    "a": 0
   },
   {
    "q": "Quelle discothèque new-yorkaise était mythique ?",
    "c": [
     "Paradise Garage",
     "The Loft",
     "Studio 54",
     "Studio One"
    ],
    "a": 2
   },
   {
    "q": "Quel mouvement a tué le disco en 1979 ?",
    "c": [
     "Le punk",
     "Disco Demolition Night",
     "La new wave",
     "Le nouveau romantisme"
    ],
    "a": 1
   },
   {
    "q": "Quelle chanteuse disco a eu un tube avec 'I Will Survive' ?",
    "c": [
     "Donna Summer",
     "Gloria Gaynor",
     "Cher",
     "Diana Ross"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le disco a-t-il culminé ?",
    "c": [
     "1974",
     "1976",
     "1980",
     "1978"
    ],
    "a": 3
   },
   {
    "q": "Quel groupe disco a sorti 'Good Times' ?",
    "c": [
     "Chic",
     "ABBA",
     "Kool & the Gang",
     "Bee Gees"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "musique_017",
  "cat": "musique",
  "name": "Le Gospel",
  "level": "classique",
  "levels": [
   {
    "q": "Quel chanteur de gospel légendaire a écrit 'Oh Happy Day' ?",
    "c": [
     "Thomas A. Dorsey",
     "Edwin Hawkins",
     "Aretha Franklin",
     "Mahalia Jackson"
    ],
    "a": 1
   },
   {
    "q": "Quelle chanteuse de gospel est surnommée 'The Queen of Gospel' ?",
    "c": [
     "Shirley Caesar",
     "CeCe Winans",
     "Mahalia Jackson",
     "Aretha Franklin"
    ],
    "a": 2
   },
   {
    "q": "Quel instrument accompagne traditionnellement le gospel ?",
    "c": [
     "Le piano",
     "La guitare",
     "La batterie",
     "L'orgue Hammond"
    ],
    "a": 3
   },
   {
    "q": "Quel chanteur de gospel a influencé Elvis Presley ?",
    "c": [
     "The Soul Stirrers",
     "The Blind Boys of Alabama",
     "The Dixie Hummingbirds",
     "The Staple Singers"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le gospel a-t-il émergé ?",
    "c": [
     "Années 1950",
     "Fin du XIXe siècle",
     "Début du XXe siècle",
     "Années 1930"
    ],
    "a": 2
   },
   {
    "q": "Quel style musical dérive du gospel ?",
    "c": [
     "Le blues",
     "La soul",
     "Le jazz",
     "Le rock"
    ],
    "a": 1
   },
   {
    "q": "Quel chanteur de gospel a remporté un Grammy pour 'Amazing Grace' ?",
    "c": [
     "CeCe Winans",
     "Aretha Franklin",
     "Yolanda Adams",
     "Mahalia Jackson"
    ],
    "a": 1
   },
   {
    "q": "Quel gospel américain est connu pour sa chorale ?",
    "c": [
     "The Staple Singers",
     "The Blind Boys of Alabama",
     "The Dixie Hummingbirds",
     "The Harlem Gospel Choir"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "musique_018",
  "cat": "musique",
  "name": "Le Flamenco",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle région d'Espagne vient le flamenco ?",
    "c": [
     "La Catalogne",
     "Le Pays basque",
     "L'Andalousie",
     "La Galice"
    ],
    "a": 2
   },
   {
    "q": "Quel instrument est essentiel au flamenco ?",
    "c": [
     "La guitare flamenca",
     "La guitare classique",
     "Les castagnettes",
     "Le cajón"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le chant dans le flamenco ?",
    "c": [
     "El cante",
     "El jaleo",
     "El baile",
     "El toque"
    ],
    "a": 0
   },
   {
    "q": "Quel danseur de flamenco est mondialement connu ?",
    "c": [
     "Joaquín Cortés",
     "Sara Baras",
     "Paco de Lucía",
     "Antonio Gades"
    ],
    "a": 0
   },
   {
    "q": "Quel guitariste de flamenco est une légende ?",
    "c": [
     "Paco de Lucía",
     "Manolo Sanlúcar",
     "Vicente Amigo",
     "Tomatito"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les trois éléments du flamenco ?",
    "c": [
     "Chant, danse, percussions",
     "Danse, guitare, palmas",
     "Chant, danse, guitare",
     "Chant, guitare, castagnettes"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le flamenco a-t-il été déclaré patrimoine de l'UNESCO ?",
    "c": [
     "2010",
     "2020",
     "2015",
     "2005"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur de flamenco est surnommé 'El Camarón' ?",
    "c": [
     "El Fary",
     "José Mercé",
     "Camarón de la Isla",
     "Enrique Morente"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_019",
  "cat": "musique",
  "name": "Le Salsa",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays vient la salsa ?",
    "c": [
     "Cuba et Porto Rico",
     "Brésil",
     "Colombie",
     "République dominicaine"
    ],
    "a": 0
   },
   {
    "q": "Quel musicien est surnommé 'El Rey de la Salsa' ?",
    "c": [
     "Marc Anthony",
     "Celia Cruz",
     "Willie Colón",
     "Héctor Lavoe"
    ],
    "a": 1
   },
   {
    "q": "Quelle chanteuse de salsa est surnommée 'La Guarachera de Cuba' ?",
    "c": [
     "Celia Cruz",
     "Milly Quezada",
     "Gloria Estefan",
     "La India"
    ],
    "a": 0
   },
   {
    "q": "Quel instrument donne le rythme à la salsa ?",
    "c": [
     "Le piano",
     "La basse",
     "Les claves",
     "La trompette"
    ],
    "a": 2
   },
   {
    "q": "Quel groupe de salsa new-yorkais est le plus célèbre ?",
    "c": [
     "El Gran Combo",
     "Sonora Ponceña",
     "Fania All-Stars",
     "Mongo Santamaria"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la salsa est-elle devenue populaire aux États-Unis ?",
    "c": [
     "Années 1950",
     "Années 1960",
     "Années 1980",
     "Années 1970"
    ],
    "a": 3
   },
   {
    "q": "Quel danseur de salsa est connu pour ses acrobaties ?",
    "c": [
     "Eddie Torres",
     "Mambo",
     "Johnny Vazquez",
     "Frankie Martinez"
    ],
    "a": 0
   },
   {
    "q": "Quel musicien de salsa new-yorkais a composé 'El Cantante' ?",
    "c": [
     "Willie Colón",
     "Ruben Blades",
     "Héctor Lavoe",
     "Marc Anthony"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "musique_020",
  "cat": "musique",
  "name": "Le Calypso",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle île des Caraïbes vient le calypso ?",
    "c": [
     "Barbade",
     "Trinidad-et-Tobago",
     "Cuba",
     "Jamaïque"
    ],
    "a": 1
   },
   {
    "q": "Quel instrument est typique du calypso ?",
    "c": [
     "Le steel drum",
     "Le bongo",
     "Le ukulélé",
     "Les maracas"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur de calypso est le plus célèbre ?",
    "c": [
     "Lord Kitchener",
     "King Radio",
     "Harry Belafonte",
     "Mighty Sparrow"
    ],
    "a": 2
   },
   {
    "q": "Quelle chanson de Belafonte est un standard calypso ?",
    "c": [
     "Jamaica Farewell",
     "Day-O (The Banana Boat Song)",
     "Calypso Blues",
     "Island in the Sun"
    ],
    "a": 1
   },
   {
    "q": "Quelle fête annuelle de Trinidad est inséparable du calypso ?",
    "c": [
     "La fête de l'indépendance",
     "La fête du rhum",
     "Le carnaval",
     "Le festival de jazz"
    ],
    "a": 2
   },
   {
    "q": "Quel style de musique dérive du calypso ?",
    "c": [
     "Le ska",
     "Le dancehall",
     "Le reggae",
     "Le soca"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le calypso a-t-il connu son âge d'or ?",
    "c": [
     "Années 1970-1980",
     "Années 1930-1940",
     "Années 1950-1960",
     "Années 1920-1930"
    ],
    "a": 2
   },
   {
    "q": "Quel chanteur de calypso a remporté un Grammy ?",
    "c": [
     "Mighty Sparrow",
     "Calypso Rose",
     "Lord Kitchener",
     "Harry Belafonte"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "musique_021",
  "cat": "musique",
  "name": "Le Bhangra",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle région de l'Inde vient le bhangra ?",
    "c": [
     "Le Pendjab",
     "Le Rajasthan",
     "L'Haryana",
     "Le Gujarat"
    ],
    "a": 0
   },
   {
    "q": "Quel instrument à percussion est essentiel au bhangra ?",
    "c": [
     "Le tabla",
     "Le dhol",
     "Le tambour",
     "Le sitar"
    ],
    "a": 1
   },
   {
    "q": "Quelle fête agricole est associée au bhangra ?",
    "c": [
     "Durga Puja",
     "Diwali",
     "Holi",
     "Vaisakhi"
    ],
    "a": 3
   },
   {
    "q": "Quel groupe britannico-pendjabi a popularisé le bhangra ?",
    "c": [
     "Panjabi MC",
     "Malkit Singh",
     "Bally Sagoo",
     "Alaap"
    ],
    "a": 0
   },
   {
    "q": "Quel DJ a samplé 'Mundian To Bach Ke' dans un hit mondial ?",
    "c": [
     "Panjabi MC",
     "Skrillex",
     "Dillon Francis",
     "Diplo"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le bhangra a-t-il été popularisé au Royaume-Uni ?",
    "c": [
     "Années 1970",
     "Années 2000",
     "Années 1990",
     "Années 1980"
    ],
    "a": 3
   },
   {
    "q": "Quel instrument indien classique est parfois ajouté au bhangra ?",
    "c": [
     "Le harmonium",
     "Le tabla",
     "Le sarod",
     "Le sitar"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur pendjabi est connu comme 'The King of Bhangra' ?",
    "c": [
     "Kuldeep Manak",
     "Daler Mehndi",
     "Gurdas Maan",
     "Malkit Singh"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "musique_022",
  "cat": "musique",
  "name": "Le Fado",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays vient le fado ?",
    "c": [
     "Espagne",
     "Portugal",
     "Grèce",
     "Italie"
    ],
    "a": 1
   },
   {
    "q": "Quelle chanteuse de fado est une légende ?",
    "c": [
     "Dulce Pontes",
     "Carminho",
     "Amália Rodrigues",
     "Mariza"
    ],
    "a": 2
   },
   {
    "q": "Quel instrument est indispensable au fado ?",
    "c": [
     "La guitare classique",
     "Le violon",
     "Le piano",
     "La guitare portugaise"
    ],
    "a": 3
   },
   {
    "q": "Que signifie le mot 'fado' en portugais ?",
    "c": [
     "Chanson",
     "Tristesse",
     "Destin",
     "Fatalité"
    ],
    "a": 2
   },
   {
    "q": "Dans quelle ville portugaise le fado est-il né ?",
    "c": [
     "Lisbonne",
     "Faro",
     "Coimbra",
     "Porto"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les deux styles principaux de fado ?",
    "c": [
     "Fado vocal et instrumental",
     "Fado triste et joyeux",
     "Fado de Lisbonne et de Coimbra",
     "Fado classique et contemporain"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le fado a-t-il été classé patrimoine de l'UNESCO ?",
    "c": [
     "2011",
     "2015",
     "2013",
     "2008"
    ],
    "a": 0
   },
   {
    "q": "Quel chanteur de fado a popularisé le genre hors du Portugal ?",
    "c": [
     "Carlos do Carmo",
     "Mariza",
     "Camane",
     "Amália Rodrigues"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "histoire_001",
  "cat": "histoire",
  "name": "La Révolution française",
  "level": "classique",
  "levels": [
   {
    "q": "En quelle année la Révolution française a-t-elle commencé ?",
    "c": [
     "1789",
     "1793",
     "1791",
     "1787"
    ],
    "a": 0
   },
   {
    "q": "Quelle prison a été prise le 14 juillet 1789 ?",
    "c": [
     "Le Châtelet",
     "La Bastille",
     "La Conciergerie",
     "Vincennes"
    ],
    "a": 1
   },
   {
    "q": "Qui était le roi de France au début de la Révolution ?",
    "c": [
     "Louis XV",
     "Louis XVI",
     "Louis XIV",
     "Louis XVIII"
    ],
    "a": 1
   },
   {
    "q": "Quel document proclame les droits de l'homme en 1789 ?",
    "c": [
     "Le Code civil",
     "La Charte",
     "La Constitution",
     "La Déclaration des droits de l'homme"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la période la plus violente de la Révolution ?",
    "c": [
     "Le Consulat",
     "La Convention",
     "Le Directoire",
     "La Terreur"
    ],
    "a": 3
   },
   {
    "q": "Quel outil de mort est emblématique de la Révolution ?",
    "c": [
     "La potence",
     "Le bûcher",
     "La guillotine",
     "L'épée"
    ],
    "a": 2
   },
   {
    "q": "Qui a dirigé le Comité de salut public en 1793 ?",
    "c": [
     "Saint-Just",
     "Marat",
     "Danton",
     "Robespierre"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la Révolution française a-t-elle officiellement pris fin ?",
    "c": [
     "1800",
     "1794",
     "1795",
     "1799"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "histoire_002",
  "cat": "histoire",
  "name": "La Rome antique",
  "level": "classique",
  "levels": [
   {
    "q": "Quel fleuve traverse Rome ?",
    "c": [
     "Le Tibre",
     "Le Pô",
     "L'Arno",
     "L'Adige"
    ],
    "a": 0
   },
   {
    "q": "Qui a fondé Rome selon la légende ?",
    "c": [
     "Énée",
     "Jules César",
     "Romulus",
     "Rémus"
    ],
    "a": 2
   },
   {
    "q": "En quelle année Rome a-t-elle été fondée selon la légende ?",
    "c": [
     "509 av. J.-C.",
     "27 av. J.-C.",
     "476 av. J.-C.",
     "753 av. J.-C."
    ],
    "a": 3
   },
   {
    "q": "Quel empereur a construit le Colisée ?",
    "c": [
     "Auguste",
     "Vespasien",
     "Trajan",
     "Néron"
    ],
    "a": 1
   },
   {
    "q": "Quel général romain a franchi le Rubicon ?",
    "c": [
     "Pompée",
     "Jules César",
     "Crassus",
     "Marc Antoine"
    ],
    "a": 1
   },
   {
    "q": "En quelle année l'Empire romain d'Occident a-t-il chuté ?",
    "c": [
     "395",
     "410",
     "500",
     "476"
    ],
    "a": 3
   },
   {
    "q": "Quelle langue était parlée par les Romains ?",
    "c": [
     "Italien",
     "Étrusque",
     "Grec",
     "Latin"
    ],
    "a": 3
   },
   {
    "q": "Quel empereur a divisé l'Empire romain en deux ?",
    "c": [
     "Dioclétien",
     "Justinien",
     "Constantin",
     "Théodose"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "histoire_003",
  "cat": "histoire",
  "name": "L'Égypte ancienne",
  "level": "classique",
  "levels": [
   {
    "q": "Comment s'appellent les tombeaux des pharaons ?",
    "c": [
     "Les hypogées",
     "Les temples",
     "Les mastabas",
     "Les pyramides"
    ],
    "a": 3
   },
   {
    "q": "Quel fleuve était vital pour la civilisation égyptienne ?",
    "c": [
     "Le Nil",
     "L'Euphrate",
     "Le Jourdain",
     "Le Tigre"
    ],
    "a": 0
   },
   {
    "q": "Qui a déchiffré les hiéroglyphes grâce à la pierre de Rosette ?",
    "c": [
     "Carter",
     "Champollion",
     "Maspero",
     "Young"
    ],
    "a": 1
   },
   {
    "q": "Quel pharaon a régné le plus longtemps ?",
    "c": [
     "Khéops",
     "Ramsès II",
     "Akhenaton",
     "Toutankhamon"
    ],
    "a": 1
   },
   {
    "q": "En quelle année la pierre de Rosette a-t-elle été découverte ?",
    "c": [
     "1798",
     "1801",
     "1805",
     "1799"
    ],
    "a": 3
   },
   {
    "q": "Quelle déesse égyptienne est représentée avec une tête de lionne ?",
    "c": [
     "Hathor",
     "Sekhmet",
     "Isis",
     "Bastet"
    ],
    "a": 1
   },
   {
    "q": "Quel pharaon a introduit le monothéisme en Égypte ?",
    "c": [
     "Ramsès II",
     "Toutankhamon",
     "Amenhotep III",
     "Akhenaton"
    ],
    "a": 3
   },
   {
    "q": "Combien de pyramides principales y a-t-il à Gizeh ?",
    "c": [
     "5",
     "3",
     "4",
     "2"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "histoire_004",
  "cat": "histoire",
  "name": "La Guerre froide",
  "level": "classique",
  "levels": [
   {
    "q": "Quelles deux superpuissances s'affrontaient pendant la Guerre froide ?",
    "c": [
     "États-Unis et URSS",
     "URSS et Chine",
     "États-Unis et Chine",
     "États-Unis et Europe"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le mur de Berlin est-il tombé ?",
    "c": [
     "1990",
     "1991",
     "1989",
     "1987"
    ],
    "a": 2
   },
   {
    "q": "Quelle était la signification de la 'crise des missiles de Cuba' ?",
    "c": [
     "Un blocus naval",
     "Les USA installaient des missiles en Turquie",
     "L'URSS installait des missiles à Cuba",
     "Une invasion de Cuba"
    ],
    "a": 2
   },
   {
    "q": "Qui était le président américain pendant la crise des missiles ?",
    "c": [
     "John F. Kennedy",
     "Dwight Eisenhower",
     "Lyndon Johnson",
     "Richard Nixon"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelait la ligne de démarcation en Europe ?",
    "c": [
     "La frontière",
     "Le rideau de fer",
     "La ligne",
     "Le mur"
    ],
    "a": 1
   },
   {
    "q": "Quel programme spatial américain a envoyé l'homme sur la Lune ?",
    "c": [
     "Mercury",
     "Gemini",
     "Vostok",
     "Apollo"
    ],
    "a": 3
   },
   {
    "q": "En quelle année l'URSS s'est-elle effondrée ?",
    "c": [
     "1992",
     "1989",
     "1991",
     "1990"
    ],
    "a": 2
   },
   {
    "q": "Qui était le dernier dirigeant de l'URSS ?",
    "c": [
     "Mikhaïl Gorbatchev",
     "Leonid Brejnev",
     "Boris Eltsine",
     "Konstantin Tchernenko"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "histoire_005",
  "cat": "histoire",
  "name": "La Renaissance",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel pays la Renaissance a-t-elle commencé ?",
    "c": [
     "France",
     "Allemagne",
     "Espagne",
     "Italie"
    ],
    "a": 3
   },
   {
    "q": "Quel artiste a peint la Joconde ?",
    "c": [
     "Léonard de Vinci",
     "Michel-Ange",
     "Raphaël",
     "Donatello"
    ],
    "a": 0
   },
   {
    "q": "Quel scientifique a été jugé par l'Église pour ses idées ?",
    "c": [
     "Kepler",
     "Galilée",
     "Copernic",
     "Newton"
    ],
    "a": 1
   },
   {
    "q": "En quelle année la Renaissance a-t-elle commencé ?",
    "c": [
     "XIVe siècle",
     "XVIe siècle",
     "XIIIe siècle",
     "XVe siècle"
    ],
    "a": 0
   },
   {
    "q": "Quelle famille italienne était la plus puissante à Florence ?",
    "c": [
     "Les Visconti",
     "Les Borgia",
     "Les Médicis",
     "Les Sforza"
    ],
    "a": 2
   },
   {
    "q": "Quel artiste a sculpté David ?",
    "c": [
     "Donatello",
     "Le Bernin",
     "Michel-Ange",
     "Verrocchio"
    ],
    "a": 2
   },
   {
    "q": "Qui a inventé l'imprimerie à caractères mobiles ?",
    "c": [
     "Caxton",
     "Fust",
     "Alde Manuce",
     "Gutenberg"
    ],
    "a": 3
   },
   {
    "q": "Quel peintre italien est connu pour ses fresques de la chapelle Sixtine ?",
    "c": [
     "Botticelli",
     "Raphaël",
     "Michel-Ange",
     "Léonard de Vinci"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "histoire_006",
  "cat": "histoire",
  "name": "Les Vikings",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle région d'Europe venaient les Vikings ?",
    "c": [
     "Allemagne",
     "Europe de l'Est",
     "Îles Britanniques",
     "Scandinavie"
    ],
    "a": 3
   },
   {
    "q": "Quel type de bateau utilisaient les Vikings ?",
    "c": [
     "La galère",
     "Le longship",
     "Le knarr",
     "Le drakkar"
    ],
    "a": 3
   },
   {
    "q": "Quel dieu nordique était le principal ?",
    "c": [
     "Thor",
     "Loki",
     "Freyr",
     "Odin"
    ],
    "a": 3
   },
   {
    "q": "En quelle année les Vikings ont-ils attaqué Lindisfarne ?",
    "c": [
     "793",
     "750",
     "850",
     "800"
    ],
    "a": 0
   },
   {
    "q": "Quel navigateur viking a atteint l'Amérique du Nord ?",
    "c": [
     "Leif Erikson",
     "Harald à la Belle Chevelure",
     "Bjarni Herjólfsson",
     "Erik le Rouge"
    ],
    "a": 0
   },
   {
    "q": "Quelle était la religion des Vikings avant le christianisme ?",
    "c": [
     "L'animisme",
     "La mythologie nordique",
     "Le paganisme",
     "Le chamanisme"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle le paradis nordique des guerriers ?",
    "c": [
     "Le Helheim",
     "Le Valhalla",
     "Le Midgard",
     "L'Asgard"
    ],
    "a": 1
   },
   {
    "q": "Quel roi viking a conquis l'Angleterre au XIe siècle ?",
    "c": [
     "Knut le Grand",
     "Sven à la Barbe Fourchue",
     "Olaf Tryggvason",
     "Harald Hardrada"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "histoire_007",
  "cat": "histoire",
  "name": "La Chine ancienne",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle était la route commerciale reliant la Chine à l'Occident ?",
    "c": [
     "La Route du Thé",
     "La Route du Jade",
     "La Route de la Soie",
     "La Route des Épices"
    ],
    "a": 2
   },
   {
    "q": "Quel philosophe chinois a fondé le confucianisme ?",
    "c": [
     "Mencius",
     "Confucius",
     "Lao Tseu",
     "Sun Tzu"
    ],
    "a": 1
   },
   {
    "q": "Quelle dynastie a construit la Grande Muraille ?",
    "c": [
     "Qin",
     "Ming",
     "Han",
     "Tang"
    ],
    "a": 0
   },
   {
    "q": "Quel empereur a unifié la Chine pour la première fois ?",
    "c": [
     "Kangxi",
     "Han Wudi",
     "Tang Taizong",
     "Qin Shi Huang"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la Grande Muraille a-t-elle été construite ?",
    "c": [
     "Au XIIe siècle",
     "À partir du IIIe siècle av. J.-C.",
     "Au VIIe siècle",
     "Au Ier siècle"
    ],
    "a": 1
   },
   {
    "q": "Quelle invention chinoise est l'une des quatre grandes inventions ?",
    "c": [
     "Le papier",
     "L'imprimerie",
     "La boussole",
     "Toutes ces réponses"
    ],
    "a": 3
   },
   {
    "q": "Quelle dynastie a régné le plus longtemps sur la Chine ?",
    "c": [
     "Tang",
     "Ming",
     "Han",
     "Zhou"
    ],
    "a": 3
   },
   {
    "q": "Quel explorateur chinois a navigué jusqu'en Afrique ?",
    "c": [
     "Xu Fu",
     "Wang Dayuan",
     "Zheng He",
     "Zhang Qian"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "histoire_008",
  "cat": "histoire",
  "name": "La Seconde Guerre mondiale",
  "level": "classique",
  "levels": [
   {
    "q": "En quelle année la Seconde Guerre mondiale a-t-elle commencé ?",
    "c": [
     "1940",
     "1937",
     "1939",
     "1941"
    ],
    "a": 2
   },
   {
    "q": "Qui était le dictateur de l'Allemagne nazie ?",
    "c": [
     "Joseph Staline",
     "Adolf Hitler",
     "Hideki Tojo",
     "Benito Mussolini"
    ],
    "a": 1
   },
   {
    "q": "Quel jour a eu lieu le débarquement en Normandie ?",
    "c": [
     "8 mai 1945",
     "7 décembre 1941",
     "4 juillet 1944",
     "6 juin 1944"
    ],
    "a": 3
   },
   {
    "q": "Quelle ville a subi la première bombe atomique ?",
    "c": [
     "Osaka",
     "Tokyo",
     "Hiroshima",
     "Nagasaki"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la guerre a-t-elle pris fin en Europe ?",
    "c": [
     "1945",
     "1943",
     "1946",
     "1944"
    ],
    "a": 0
   },
   {
    "q": "Quel était le nom du front de l'Est ?",
    "c": [
     "Opération Market Garden",
     "Opération Torch",
     "Operation Overlord",
     "Opération Barbarossa"
    ],
    "a": 3
   },
   {
    "q": "Quel pays a subi le plus de pertes humaines pendant la guerre ?",
    "c": [
     "URSS",
     "Pologne",
     "Chine",
     "Allemagne"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelait le génocide perpétré par les nazis ?",
    "c": [
     "L'Holocauste",
     "La Shoah",
     "La Solution finale",
     "Le génocide"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "histoire_009",
  "cat": "histoire",
  "name": "La Grèce antique",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle était la cité-État la plus puissante de Grèce antique ?",
    "c": [
     "Corinthe",
     "Sparte",
     "Athènes",
     "Thèbes"
    ],
    "a": 2
   },
   {
    "q": "Quel philosophe grec a été condamné à boire la ciguë ?",
    "c": [
     "Aristote",
     "Platon",
     "Pythagore",
     "Socrate"
    ],
    "a": 3
   },
   {
    "q": "Qui a conquis la Grèce au IVe siècle av. J.-C. ?",
    "c": [
     "Philippe II de Macédoine",
     "Alexandre le Grand",
     "Xerxès",
     "Darius"
    ],
    "a": 0
   },
   {
    "q": "Quel temple athénien est dédié à Athéna ?",
    "c": [
     "Le temple d'Héphaïstos",
     "L'Érechthéion",
     "Le Parthénon",
     "Le temple de Zeus"
    ],
    "a": 2
   },
   {
    "q": "Quelle bataille a opposé les Grecs aux Perses en 490 av. J.-C. ?",
    "c": [
     "Platées",
     "Marathon",
     "Salamine",
     "Thermopyles"
    ],
    "a": 1
   },
   {
    "q": "Quel historien grec est considéré comme le père de l'histoire ?",
    "c": [
     "Thucydide",
     "Plutarque",
     "Hérodote",
     "Xénophon"
    ],
    "a": 2
   },
   {
    "q": "Quelles sont les trois ordres architecturaux grecs ?",
    "c": [
     "Ionique, corinthien, roman",
     "Dorique, ionique, corinthien",
     "Dorique, toscan, composite",
     "Dorique, gothique, roman"
    ],
    "a": 1
   },
   {
    "q": "Quel médecin grec est le père de la médecine ?",
    "c": [
     "Erasistrate",
     "Galien",
     "Hippocrate",
     "Aristote"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "histoire_010",
  "cat": "histoire",
  "name": "L'Empire byzantin",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle était la capitale de l'Empire byzantin ?",
    "c": [
     "Jérusalem",
     "Antioche",
     "Alexandrie",
     "Constantinople"
    ],
    "a": 3
   },
   {
    "q": "Quel empereur byzantin a construit Sainte-Sophie ?",
    "c": [
     "Basile II",
     "Constantin",
     "Héraclius",
     "Justinien"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Constantinople est-elle tombée aux mains des Ottomans ?",
    "c": [
     "1444",
     "1402",
     "1453",
     "1460"
    ],
    "a": 2
   },
   {
    "q": "Quelle était la religion officielle de l'Empire byzantin ?",
    "c": [
     "Le catholicisme",
     "L'orthodoxie orientale",
     "Le christianisme",
     "Le christianisme orthodoxe"
    ],
    "a": 3
   },
   {
    "q": "Quel code de lois Justinien a-t-il compilé ?",
    "c": [
     "Le Digeste",
     "Le Corpus juris civilis",
     "Le Code Justinien",
     "Les Institutes"
    ],
    "a": 1
   },
   {
    "q": "Quel sultan ottoman a conquis Constantinople ?",
    "c": [
     "Bayezid II",
     "Mehmed II",
     "Mehmed I",
     "Soliman le Magnifique"
    ],
    "a": 1
   },
   {
    "q": "Quelle langue était parlée à Byzance ?",
    "c": [
     "Le grec",
     "Le latin",
     "Le turc",
     "L'arménien"
    ],
    "a": 0
   },
   {
    "q": "Quel empereur byzantin a repoussé les Arabes au VIIIe siècle ?",
    "c": [
     "Maurice",
     "Constantin V",
     "Héraclius",
     "Léon III l'Isaurien"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "histoire_011",
  "cat": "histoire",
  "name": "La Guerre du Vietnam",
  "level": "classique",
  "levels": [
   {
    "q": "En quelle année la guerre du Vietnam a-t-elle commencé ?",
    "c": [
     "1955",
     "1965",
     "1970",
     "1960"
    ],
    "a": 0
   },
   {
    "q": "Quel pays soutenait le Vietnam du Nord ?",
    "c": [
     "L'URSS et la Chine",
     "La France",
     "La Corée du Nord",
     "Les États-Unis"
    ],
    "a": 0
   },
   {
    "q": "Qui était le leader communiste du Vietnam ?",
    "c": [
     "Vo Nguyen Giap",
     "Pham Van Dong",
     "Ngo Dinh Diem",
     "Hô Chi Minh"
    ],
    "a": 3
   },
   {
    "q": "En quelle année les derniers soldats américains ont-ils quitté le Vietnam ?",
    "c": [
     "1972",
     "1975",
     "1971",
     "1973"
    ],
    "a": 3
   },
   {
    "q": "Quelle était la célèbre piste d'approvisionnement nord-vietnamienne ?",
    "c": [
     "La route de la Soie",
     "La route mandarine",
     "La piste Hô Chi Minh",
     "La piste des Volontaires"
    ],
    "a": 2
   },
   {
    "q": "Quel président américain a intensifié la guerre ?",
    "c": [
     "John F. Kennedy",
     "Richard Nixon",
     "Lyndon B. Johnson",
     "Dwight D. Eisenhower"
    ],
    "a": 2
   },
   {
    "q": "Quelle arme chimique les Américains ont-ils utilisée ?",
    "c": [
     "Le napalm",
     "Le phosphore blanc",
     "L'agent orange",
     "Le gaz moutarde"
    ],
    "a": 2
   },
   {
    "q": "Combien de civils vietnamiens sont morts pendant la guerre ?",
    "c": [
     "Environ 5 millions",
     "Environ 1 million",
     "Environ 2 millions",
     "Environ 500 000"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "histoire_012",
  "cat": "histoire",
  "name": "La Révolution industrielle",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel pays la révolution industrielle a-t-elle commencé ?",
    "c": [
     "France",
     "États-Unis",
     "Angleterre",
     "Allemagne"
    ],
    "a": 2
   },
   {
    "q": "Quelle invention a marqué le début de la révolution industrielle ?",
    "c": [
     "La locomotive",
     "Le coton",
     "Le métier à tisser",
     "La machine à vapeur"
    ],
    "a": 3
   },
   {
    "q": "Qui a amélioré la machine à vapeur ?",
    "c": [
     "Richard Arkwright",
     "James Watt",
     "George Stephenson",
     "Thomas Newcomen"
    ],
    "a": 1
   },
   {
    "q": "En quelle année la révolution industrielle a-t-elle commencé ?",
    "c": [
     "Vers 1800",
     "Vers 1700",
     "Vers 1760",
     "Vers 1750"
    ],
    "a": 2
   },
   {
    "q": "Quel matériau était essentiel à la révolution industrielle ?",
    "c": [
     "Le bois",
     "Le fer",
     "Le coton",
     "Le charbon"
    ],
    "a": 3
   },
   {
    "q": "Quel transport a révolutionné les déplacements au XIXe siècle ?",
    "c": [
     "La voiture",
     "Le chemin de fer",
     "Le bateau à vapeur",
     "Le dirigeable"
    ],
    "a": 1
   },
   {
    "q": "Quelle classe sociale est née de la révolution industrielle ?",
    "c": [
     "La bourgeoisie",
     "Le prolétariat",
     "Les paysans",
     "Les artisans"
    ],
    "a": 1
   },
   {
    "q": "Quel mouvement ouvrier a émergé pendant cette période ?",
    "c": [
     "Le socialisme",
     "Le syndicalisme",
     "Le communisme",
     "Le luddisme"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "histoire_013",
  "cat": "histoire",
  "name": "Les Croisades",
  "level": "classique",
  "levels": [
   {
    "q": "Quel était le but des croisades ?",
    "c": [
     "Conquérir l'Orient",
     "Protéger les pèlerins",
     "Convertir les infidèles",
     "Reprendre Jérusalem aux musulmans"
    ],
    "a": 3
   },
   {
    "q": "Qui a appelé à la première croisade en 1095 ?",
    "c": [
     "L'empereur byzantin",
     "Le pape Urbain II",
     "Pierre l'Ermite",
     "Le pape Grégoire VII"
    ],
    "a": 1
   },
   {
    "q": "Combien de croisades principales ont eu lieu ?",
    "c": [
     "8",
     "5",
     "6",
     "10"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Jérusalem a-t-elle été prise lors de la première croisade ?",
    "c": [
     "1100",
     "1097",
     "1099",
     "1085"
    ],
    "a": 2
   },
   {
    "q": "Qui a mené la troisième croisade ?",
    "c": [
     "Louis IX",
     "Frédéric Barberousse",
     "Philippe Auguste",
     "Richard Cœur de Lion"
    ],
    "a": 3
   },
   {
    "q": "Quel sultan musulman a repris Jérusalem en 1187 ?",
    "c": [
     "Baybars",
     "Al-Kamil",
     "Nur ad-Din",
     "Saladin"
    ],
    "a": 3
   },
   {
    "q": "Quelle croisade est connue comme la 'croisade des enfants' ?",
    "c": [
     "La cinquième croisade",
     "La sixième croisade",
     "La quatrième croisade",
     "La croisade des enfants de 1212"
    ],
    "a": 3
   },
   {
    "q": "Quel roi de France est mort lors de la huitième croisade ?",
    "c": [
     "Philippe Auguste",
     "Louis VII",
     "Louis IX (Saint Louis)",
     "Charles VIII"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "histoire_014",
  "cat": "histoire",
  "name": "La Guerre de Cent Ans",
  "level": "classique",
  "levels": [
   {
    "q": "Quels deux royaumes s'affrontaient dans la guerre de Cent Ans ?",
    "c": [
     "Angleterre et Écosse",
     "France et Espagne",
     "France et Bourgogne",
     "France et Angleterre"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la guerre de Cent Ans a-t-elle commencé ?",
    "c": [
     "1350",
     "1314",
     "1380",
     "1337"
    ],
    "a": 3
   },
   {
    "q": "Qui a mené les Français à la victoire à Orléans ?",
    "c": [
     "Du Guesclin",
     "Charles VII",
     "Jeanne d'Arc",
     "Philippe VI"
    ],
    "a": 2
   },
   {
    "q": "Combien d'années a duré la guerre ?",
    "c": [
     "115 ans",
     "116 ans",
     "100 ans",
     "120 ans"
    ],
    "a": 1
   },
   {
    "q": "Quelle bataille a vu la défaite française en 1346 ?",
    "c": [
     "Crécy",
     "Calais",
     "Azincourt",
     "Poitiers"
    ],
    "a": 0
   },
   {
    "q": "Quel roi anglais a revendiqué le trône de France ?",
    "c": [
     "Henri V",
     "Édouard III",
     "Richard II",
     "Jean sans Terre"
    ],
    "a": 1
   },
   {
    "q": "En quelle année Jeanne d'Arc a-t-elle été brûlée ?",
    "c": [
     "1431",
     "1435",
     "1430",
     "1429"
    ],
    "a": 0
   },
   {
    "q": "Quel roi de France est mort en 1380 pendant la guerre ?",
    "c": [
     "Charles VI",
     "Jean II",
     "Philippe VI",
     "Charles V"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "histoire_015",
  "cat": "histoire",
  "name": "La Chute de Berlin",
  "level": "classique",
  "levels": [
   {
    "q": "En quelle année le mur de Berlin est-il tombé ?",
    "c": [
     "1990",
     "1987",
     "1989",
     "1991"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le mur a-t-il été construit ?",
    "c": [
     "1961",
     "1958",
     "1960",
     "1963"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelait l'acte de franchir le mur ?",
    "c": [
     "La traversée",
     "La fuite",
     "L'évasion",
     "La défection"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps le mur est-il resté debout ?",
    "c": [
     "25 ans",
     "20 ans",
     "28 ans",
     "30 ans"
    ],
    "a": 2
   },
   {
    "q": "Quel dirigeant soviétique était au pouvoir lors de la chute ?",
    "c": [
     "Youri Andropov",
     "Mikhaïl Gorbatchev",
     "Konstantin Tchernenko",
     "Leonid Brejnev"
    ],
    "a": 1
   },
   {
    "q": "Combien de personnes ont réussi à fuir par-dessus le mur ?",
    "c": [
     "Environ 500",
     "Environ 5 000",
     "Environ 1 000",
     "Environ 10 000"
    ],
    "a": 1
   },
   {
    "q": "Quelle porte de Berlin est devenue un symbole de la chute du mur ?",
    "c": [
     "La porte de Friedrich",
     "La porte de Checkpoint Charlie",
     "La porte de Brandebourg",
     "La porte de Karl"
    ],
    "a": 2
   },
   {
    "q": "Combien de personnes sont mortes en tentant de traverser le mur ?",
    "c": [
     "Au moins 140",
     "Environ 50",
     "Environ 100",
     "Plus de 500"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "histoire_016",
  "cat": "histoire",
  "name": "La Conquête spatiale",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a été le premier homme dans l'espace ?",
    "c": [
     "Youri Gagarine",
     "John Glenn",
     "Alan Shepard",
     "Neil Armstrong"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Gagarine a-t-il volé ?",
    "c": [
     "1963",
     "1961",
     "1962",
     "1960"
    ],
    "a": 1
   },
   {
    "q": "Qui a marché sur la Lune en premier ?",
    "c": [
     "John Young",
     "Buzz Aldrin",
     "Michael Collins",
     "Neil Armstrong"
    ],
    "a": 3
   },
   {
    "q": "En quelle année l'homme a-t-il marché sur la Lune ?",
    "c": [
     "1970",
     "1967",
     "1968",
     "1969"
    ],
    "a": 3
   },
   {
    "q": "Quelle phrase célèbre a prononcée Armstrong ?",
    "c": [
     "Houston, on a un problème",
     "Le ciel est la limite",
     "Nous venons en paix",
     "Un petit pas pour l'homme"
    ],
    "a": 3
   },
   {
    "q": "Quel programme spatial américain a envoyé l'homme sur la Lune ?",
    "c": [
     "Space Shuttle",
     "Apollo",
     "Mercury",
     "Gemini"
    ],
    "a": 1
   },
   {
    "q": "Quel pays a envoyé le premier satellite artificiel ?",
    "c": [
     "États-Unis",
     "Chine",
     "France",
     "URSS"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelait le premier satellite ?",
    "c": [
     "Explorer 1",
     "Cosmos 1",
     "Spoutnik 1",
     "Vanguard 1"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "histoire_017",
  "cat": "histoire",
  "name": "L'Empire aztèque",
  "level": "classique",
  "levels": [
   {
    "q": "Où se trouvait l'Empire aztèque ?",
    "c": [
     "Pérou",
     "Colombie",
     "Guatemala",
     "Mexique"
    ],
    "a": 3
   },
   {
    "q": "Quelle était la capitale aztèque ?",
    "c": [
     "Chichén Itzá",
     "Cuzco",
     "Teotihuacán",
     "Tenochtitlan"
    ],
    "a": 3
   },
   {
    "q": "Quel conquistador a renversé l'Empire aztèque ?",
    "c": [
     "Hernán Cortés",
     "Hernando de Soto",
     "Vasco Núñez de Balboa",
     "Francisco Pizarro"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Tenochtitlan est-elle tombée ?",
    "c": [
     "1500",
     "1519",
     "1521",
     "1532"
    ],
    "a": 2
   },
   {
    "q": "Quel empereur aztèque a accueilli Cortés ?",
    "c": [
     "Cuitláhuac",
     "Moctezuma II",
     "Ahuitzotl",
     "Cuauhtémoc"
    ],
    "a": 1
   },
   {
    "q": "Quelle était la religion des Aztèques ?",
    "c": [
     "Monothéiste",
     "Animiste",
     "Polythéiste",
     "Panthéiste"
    ],
    "a": 2
   },
   {
    "q": "Quel dieu aztèque était le dieu du soleil ?",
    "c": [
     "Tlaloc",
     "Quetzalcóatl",
     "Tezcatlipoca",
     "Huitzilopochtli"
    ],
    "a": 3
   },
   {
    "q": "Quelle écriture utilisaient les Aztèques ?",
    "c": [
     "Les pictogrammes",
     "Les hiéroglyphes",
     "Les idéogrammes",
     "L'alphabet latin"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "histoire_018",
  "cat": "histoire",
  "name": "La Révolution russe",
  "level": "classique",
  "levels": [
   {
    "q": "En quelle année la révolution d'Octobre a-t-elle eu lieu ?",
    "c": [
     "1905",
     "1918",
     "1921",
     "1917"
    ],
    "a": 3
   },
   {
    "q": "Qui a dirigé les bolcheviks pendant la révolution ?",
    "c": [
     "Trotsky",
     "Kerensky",
     "Staline",
     "Lénine"
    ],
    "a": 3
   },
   {
    "q": "Qui était le dernier tsar de Russie ?",
    "c": [
     "Nicolas II",
     "Catherine la Grande",
     "Pierre le Grand",
     "Alexandre III"
    ],
    "a": 0
   },
   {
    "q": "Quel était le nom du parti de Lénine ?",
    "c": [
     "Les mencheviks",
     "Les bolcheviks",
     "Les cadets",
     "Les socialistes révolutionnaires"
    ],
    "a": 1
   },
   {
    "q": "En quelle année l'URSS a-t-elle été officiellement créée ?",
    "c": [
     "1918",
     "1930",
     "1922",
     "1924"
    ],
    "a": 2
   },
   {
    "q": "Quelle était l'idéologie des bolcheviks ?",
    "c": [
     "Le communisme",
     "Le marxisme-léninisme",
     "Le trotskisme",
     "Le socialisme"
    ],
    "a": 1
   },
   {
    "q": "Quel palais a été pris d'assaut lors de la révolution d'Octobre ?",
    "c": [
     "Le palais d'Hiver",
     "Le palais de Catherine",
     "Le Kremlin",
     "Le palais Peterhof"
    ],
    "a": 0
   },
   {
    "q": "Qui a été le premier leader de l'URSS ?",
    "c": [
     "Trotsky",
     "Boukharine",
     "Staline",
     "Lénine"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sciences_001",
  "cat": "sciences",
  "name": "L'Électricité",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est l'unité de la tension électrique ?",
    "c": [
     "Le watt",
     "L'ampère",
     "L'ohm",
     "Le volt"
    ],
    "a": 3
   },
   {
    "q": "Qui a découvert l'électricité statique ?",
    "c": [
     "Thomas Edison",
     "Benjamin Franklin",
     "Thalès de Milet",
     "Nikola Tesla"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la différence entre courant continu et alternatif ?",
    "c": [
     "Fréquence",
     "Puissance",
     "Direction du flux",
     "Tension"
    ],
    "a": 2
   },
   {
    "q": "Qui a inventé la pile électrique ?",
    "c": [
     "Luigi Galvani",
     "Michael Faraday",
     "André-Marie Ampère",
     "Alessandro Volta"
    ],
    "a": 3
   },
   {
    "q": "Combien de volts produit une prise domestique française ?",
    "c": [
     "380 V",
     "120 V",
     "110 V",
     "230 V"
    ],
    "a": 3
   },
   {
    "q": "Quel métal est le meilleur conducteur d'électricité ?",
    "c": [
     "L'argent",
     "Le cuivre",
     "L'or",
     "L'aluminium"
    ],
    "a": 0
   },
   {
    "q": "Qui a développé le système de courant alternatif ?",
    "c": [
     "James Watt",
     "George Westinghouse",
     "Nikola Tesla",
     "Thomas Edison"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle la loi reliant tension, courant et résistance ?",
    "c": [
     "Loi de Coulomb",
     "Loi d'Ohm",
     "Loi de Kirchhoff",
     "Loi de Faraday"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sciences_002",
  "cat": "sciences",
  "name": "La Gravité",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a découvert la loi de la gravitation universelle ?",
    "c": [
     "Edmond Halley",
     "Isaac Newton",
     "Albert Einstein",
     "Galilée"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la constante d'accélération due à la gravité sur Terre ?",
    "c": [
     "10 m/s²",
     "9,8 m/s²",
     "8,81 m/s²",
     "9,81 m/s²"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Newton a-t-il publié ses lois ?",
    "c": [
     "1687",
     "1666",
     "1700",
     "1650"
    ],
    "a": 0
   },
   {
    "q": "Qui a proposé la relativité générale pour expliquer la gravité ?",
    "c": [
     "Niels Bohr",
     "Albert Einstein",
     "Max Planck",
     "Werner Heisenberg"
    ],
    "a": 1
   },
   {
    "q": "Sur quel objet la gravité est-elle la plus faible dans notre système solaire ?",
    "c": [
     "Mercure",
     "La Lune",
     "Mars",
     "Pluton"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un trou noir ?",
    "c": [
     "Un objet dont la gravité est si forte que rien n'en sort",
     "Une étoile à neutrons",
     "Un vortex spatial",
     "Une étoile morte"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle la force qui s'oppose à la gravité dans un avion ?",
    "c": [
     "La portance",
     "Le poids",
     "La poussée",
     "La traînée"
    ],
    "a": 0
   },
   {
    "q": "Qui a mesuré la constante gravitationnelle pour la première fois ?",
    "c": [
     "Henry Cavendish",
     "Isaac Newton",
     "John Michell",
     "Pierre Bouguer"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sciences_003",
  "cat": "sciences",
  "name": "La Théorie de l'évolution",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a proposé la théorie de l'évolution par sélection naturelle ?",
    "c": [
     "Charles Darwin",
     "Alfred Russel Wallace",
     "Gregor Mendel",
     "Jean-Baptiste Lamarck"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Darwin a-t-il publié 'L'Origine des espèces' ?",
    "c": [
     "1859",
     "1865",
     "1845",
     "1850"
    ],
    "a": 0
   },
   {
    "q": "Quel archipel Darwin a-t-il étudié pour sa théorie ?",
    "c": [
     "Les Marquises",
     "Les Hawaï",
     "Les Fidji",
     "Les Galápagos"
    ],
    "a": 3
   },
   {
    "q": "Qui a proposé une théorie de l'évolution avant Darwin ?",
    "c": [
     "Cuvier",
     "Lamarck",
     "Buffon",
     "Malthus"
    ],
    "a": 1
   },
   {
    "q": "Quelle est l'idée centrale de la sélection naturelle ?",
    "c": [
     "Mutation aléatoire",
     "Usage et non-usage",
     "Hérédité des caractères acquis",
     "Survie du mieux adapté"
    ],
    "a": 3
   },
   {
    "q": "Quel nom porte la théorie de Darwin ?",
    "c": [
     "Le darwinisme",
     "Le mendélisme",
     "Le lamarckisme",
     "Le néo-darwinisme"
    ],
    "a": 3
   },
   {
    "q": "Quel oiseau des Galápagos est célèbre dans l'étude de Darwin ?",
    "c": [
     "Le pinson",
     "Le cormoran",
     "L'iguane",
     "La tortue"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'une 'espèce' selon la biologie moderne ?",
    "c": [
     "Population vivant au même endroit",
     "Groupe génétiquement identique",
     "Population capable de se reproduire entre elle",
     "Groupe d'animaux semblables"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sciences_004",
  "cat": "sciences",
  "name": "La Radioactivité",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a découvert la radioactivité naturelle ?",
    "c": [
     "Marie Curie",
     "Ernest Rutherford",
     "Pierre Curie",
     "Henri Becquerel"
    ],
    "a": 3
   },
   {
    "q": "Quelle particule est émise lors de la désintégration alpha ?",
    "c": [
     "Noyau d'hélium",
     "Électron",
     "Proton",
     "Neutron"
    ],
    "a": 0
   },
   {
    "q": "Qui a découvert le radium et le polonium ?",
    "c": [
     "Henri Becquerel",
     "Marie et Pierre Curie",
     "Frédéric Joliot",
     "Irène Joliot-Curie"
    ],
    "a": 1
   },
   {
    "q": "Combien de prix Nobel Marie Curie a-t-elle remportés ?",
    "c": [
     "3",
     "2",
     "4",
     "1"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un isotope radioactif ?",
    "c": [
     "Atome instable qui se désintègre",
     "Atome stable",
     "Élément instable",
     "Molécule radioactive"
    ],
    "a": 0
   },
   {
    "q": "Quelle est l'unité de mesure de la radioactivité ?",
    "c": [
     "Le becquerel",
     "Le sievert",
     "Le curie",
     "Le gray"
    ],
    "a": 0
   },
   {
    "q": "Quel élément est utilisé dans les centrales nucléaires ?",
    "c": [
     "L'uranium",
     "Le radium",
     "Le plutonium",
     "Le thorium"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le processus de fission nucléaire ?",
    "c": [
     "Division du noyau d'un atome",
     "Réaction en chaîne",
     "Fusion de noyaux",
     "Désintégration radioactive"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sciences_005",
  "cat": "sciences",
  "name": "Les trous noirs",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un trou noir ?",
    "c": [
     "Étoile très dense",
     "Portail interstellaire",
     "Région de l'espace où la gravité est si forte que rien ne s'en échappe",
     "Vortex cosmique"
    ],
    "a": 2
   },
   {
    "q": "Qui a prédit l'existence des trous noirs avec la relativité générale ?",
    "c": [
     "Stephen Hawking",
     "Albert Einstein",
     "John Wheeler",
     "Karl Schwarzschild"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'horizon des événements d'un trou noir ?",
    "c": [
     "La surface du trou noir",
     "La singularité",
     "Le centre du trou noir",
     "Le point de non-retour"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle le centre d'un trou noir ?",
    "c": [
     "Le disque d'accrétion",
     "La sphère de photons",
     "La singularité",
     "L'horizon"
    ],
    "a": 2
   },
   {
    "q": "Qui a inventé le terme 'trou noir' ?",
    "c": [
     "Stephen Hawking",
     "John Wheeler",
     "Albert Einstein",
     "Karl Schwarzschild"
    ],
    "a": 1
   },
   {
    "q": "Quel type de trou noir est le plus massif ?",
    "c": [
     "Le trou noir supermassif",
     "Le trou noir primordial",
     "Le mini trou noir",
     "Le trou noir stellaire"
    ],
    "a": 0
   },
   {
    "q": "Quel est le trou noir le plus proche de la Terre ?",
    "c": [
     "Cygnus X-1",
     "Sagittarius A*",
     "V616 Monocerotis",
     "Gaia BH1"
    ],
    "a": 3
   },
   {
    "q": "Que rayonnent les trous noirs selon Hawking ?",
    "c": [
     "Rayonnement de Hawking",
     "Ondes gravitationnelles",
     "Rayons X",
     "Lumière"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sciences_006",
  "cat": "sciences",
  "name": "La Photosynthèse",
  "level": "classique",
  "levels": [
   {
    "q": "Quel gaz les plantes absorbent-elles pendant la photosynthèse ?",
    "c": [
     "L'hydrogène",
     "L'azote",
     "L'oxygène",
     "Le dioxyde de carbone"
    ],
    "a": 3
   },
   {
    "q": "Quel pigment est responsable de la couleur verte des plantes ?",
    "c": [
     "L'anthocyane",
     "La xanthophylle",
     "Le carotène",
     "La chlorophylle"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les produits de la photosynthèse ?",
    "c": [
     "CO2 et eau",
     "Glucose et oxygène",
     "Glucose et eau",
     "Eau et oxygène"
    ],
    "a": 1
   },
   {
    "q": "Quelle énergie est utilisée dans la photosynthèse ?",
    "c": [
     "Électricité",
     "Chaleur",
     "Lumière solaire",
     "Énergie chimique"
    ],
    "a": 2
   },
   {
    "q": "Dans quelle partie de la plante la photosynthèse a-t-elle lieu ?",
    "c": [
     "Les fleurs",
     "La tige",
     "Les feuilles",
     "Les racines"
    ],
    "a": 2
   },
   {
    "q": "Quel organite cellulaire réalise la photosynthèse ?",
    "c": [
     "Le noyau",
     "Le chloroplaste",
     "La mitochondrie",
     "Le ribosome"
    ],
    "a": 1
   },
   {
    "q": "En quelle année la photosynthèse a-t-elle été découverte ?",
    "c": [
     "1643 (Van Helmont)",
     "1900",
     "1804 (De Saussure)",
     "1779 (Ingenhousz)"
    ],
    "a": 3
   },
   {
    "q": "Quel scientifique a découvert que les plantes produisent de l'oxygène ?",
    "c": [
     "Antoine Lavoisier",
     "Joseph Priestley",
     "Jan Ingenhousz",
     "Jean Senebier"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sciences_007",
  "cat": "sciences",
  "name": "La Relativité",
  "level": "classique",
  "levels": [
   {
    "q": "Quel physicien a développé la théorie de la relativité ?",
    "c": [
     "Max Planck",
     "Niels Bohr",
     "Albert Einstein",
     "Isaac Newton"
    ],
    "a": 2
   },
   {
    "q": "En quelle année Einstein a-t-il publié la relativité restreinte ?",
    "c": [
     "1915",
     "1900",
     "1910",
     "1905"
    ],
    "a": 3
   },
   {
    "q": "Quelle équation célèbre découle de la relativité restreinte ?",
    "c": [
     "E=mc²",
     "PV=nRT",
     "E=hf",
     "F=ma"
    ],
    "a": 0
   },
   {
    "q": "En quelle année la relativité générale a-t-elle été publiée ?",
    "c": [
     "1905",
     "1920",
     "1919",
     "1915"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la dilatation du temps ?",
    "c": [
     "Le temps ne change pas",
     "Le temps s'arrête",
     "Le temps passe plus lentement à grande vitesse",
     "Le temps s'accélère"
    ],
    "a": 2
   },
   {
    "q": "Quelle expérience a confirmé la relativité générale en 1919 ?",
    "c": [
     "L'expérience Michelson-Morley",
     "L'éclipse solaire et la déviation de la lumière",
     "La mesure du décalage vers le rouge",
     "L'expérience de Pound-Rebka"
    ],
    "a": 1
   },
   {
    "q": "Que prédit la relativité générale au sujet de la lumière près d'un objet massif ?",
    "c": [
     "Elle accélère",
     "Elle change de couleur",
     "Elle est déviée",
     "Elle s'arrête"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle le paradoxe célèbre de la relativité restreinte ?",
    "c": [
     "Le paradoxe des jumeaux",
     "Le paradoxe du chat de Schrödinger",
     "Le paradoxe d'Einstein-Podolsky-Rosen",
     "Le paradoxe de l'information"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sciences_008",
  "cat": "sciences",
  "name": "L'ADN",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la structure de l'ADN ?",
    "c": [
     "Double hélice",
     "Triple hélice",
     "En boucle",
     "Simple brin"
    ],
    "a": 0
   },
   {
    "q": "Qui a découvert la structure de l'ADN en 1953 ?",
    "c": [
     "Mendel",
     "Pauling",
     "Watson et Crick",
     "Darwin"
    ],
    "a": 2
   },
   {
    "q": "Quelles sont les quatre bases de l'ADN ?",
    "c": [
     "T, U, G, C",
     "A, T, G, U",
     "A, T, G, C",
     "A, U, G, C"
    ],
    "a": 2
   },
   {
    "q": "Combien de paires de chromosomes l'humain possède-t-il ?",
    "c": [
     "23",
     "22",
     "24",
     "46"
    ],
    "a": 0
   },
   {
    "q": "Qui a découvert l'ADN comme molécule de l'hérédité ?",
    "c": [
     "Avery, MacLeod, McCarty",
     "Watson et Crick",
     "Griffith",
     "Mendel"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le processus de copie de l'ADN ?",
    "c": [
     "La transcription",
     "La mutation",
     "La traduction",
     "La réplication"
    ],
    "a": 3
   },
   {
    "q": "Qui a découvert les rayons X utilisés pour visualiser l'ADN ?",
    "c": [
     "Rosalind Franklin",
     "Maurice Wilkins",
     "James Watson",
     "Linus Pauling"
    ],
    "a": 0
   },
   {
    "q": "Quel pourcentage de l'ADN humain est identique à celui des chimpanzés ?",
    "c": [
     "Environ 90%",
     "Environ 98%",
     "Environ 99%",
     "Environ 95%"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sciences_009",
  "cat": "sciences",
  "name": "Les volcans",
  "level": "classique",
  "levels": [
   {
    "q": "Comment s'appelle la roche en fusion à l'intérieur d'un volcan ?",
    "c": [
     "La lave",
     "La roche magmatique",
     "Le magma",
     "Le basalte"
    ],
    "a": 2
   },
   {
    "q": "Quel célèbre volcan italien a détruit Pompéi en 79 ap. J.-C. ?",
    "c": [
     "Le Stromboli",
     "L'Etna",
     "Le Vulcano",
     "Le Vésuve"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la différence entre magma et lave ?",
    "c": [
     "Le magma est sous terre, la lave en surface",
     "Ce sont deux noms pour la même chose",
     "Le magma est froid, la lave est chaude",
     "La lave est sous terre, le magma en surface"
    ],
    "a": 0
   },
   {
    "q": "Quel type de volcan a une forme conique ?",
    "c": [
     "Le dôme de lave",
     "Le cône de cendres",
     "Le volcan bouclier",
     "Le stratovolcan"
    ],
    "a": 3
   },
   {
    "q": "Quel volcan hawaïen est le plus actif ?",
    "c": [
     "Mauna Loa",
     "Mauna Kea",
     "Kilauea",
     "Hualālai"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la ceinture de feu du Pacifique ?",
    "c": [
     "Région volcanique",
     "Zone de forte activité volcanique et sismique",
     "Chaîne de volcans",
     "Zone de subduction"
    ],
    "a": 1
   },
   {
    "q": "Quel est le plus grand volcan du système solaire ?",
    "c": [
     "L'Etna",
     "Olympus Mons sur Mars",
     "Le Vésuve",
     "Mauna Loa"
    ],
    "a": 1
   },
   {
    "q": "Quel volcan indonésien a causé l'éruption la plus meurtrière en 1815 ?",
    "c": [
     "Toba",
     "Krakatoa",
     "Tambora",
     "Merapi"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sciences_010",
  "cat": "sciences",
  "name": "La Mécanique quantique",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a proposé le concept de quantum d'énergie ?",
    "c": [
     "Niels Bohr",
     "Werner Heisenberg",
     "Albert Einstein",
     "Max Planck"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Planck a-t-il introduit les quanta ?",
    "c": [
     "1895",
     "1900",
     "1910",
     "1905"
    ],
    "a": 1
   },
   {
    "q": "Quel est le principe d'incertitude d'Heisenberg ?",
    "c": [
     "On ne peut connaître à la fois position et impulsion",
     "L'énergie est quantifiée",
     "Tout est incertain",
     "La matière est une onde"
    ],
    "a": 0
   },
   {
    "q": "Qui a proposé la dualité onde-particule ?",
    "c": [
     "Niels Bohr",
     "Louis de Broglie",
     "Albert Einstein",
     "Erwin Schrödinger"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le chat de Schrödinger ?",
    "c": [
     "Un chat quantique",
     "Un paradoxe quantique",
     "Une expérience réelle",
     "Un vrai chat"
    ],
    "a": 1
   },
   {
    "q": "Qui a développé la mécanique quantique matricielle ?",
    "c": [
     "Werner Heisenberg",
     "Paul Dirac",
     "Erwin Schrödinger",
     "Max Born"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que l'intrication quantique ?",
    "c": [
     "Des particules enchevêtrées",
     "Des particules liées",
     "Des particules jumelles",
     "Des particules corrélées instantanément"
    ],
    "a": 3
   },
   {
    "q": "Qui a remporté le prix Nobel pour l'effet photoélectrique ?",
    "c": [
     "Max Planck",
     "Philipp Lenard",
     "Niels Bohr",
     "Albert Einstein"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sciences_011",
  "cat": "sciences",
  "name": "Le système solaire",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de planètes y a-t-il dans notre système solaire ?",
    "c": [
     "7",
     "8",
     "10",
     "9"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus grande planète du système solaire ?",
    "c": [
     "Neptune",
     "Jupiter",
     "Saturne",
     "Uranus"
    ],
    "a": 1
   },
   {
    "q": "Quelle planète est la plus proche du Soleil ?",
    "c": [
     "Vénus",
     "Mercure",
     "Terre",
     "Mars"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la planète la plus éloignée du Soleil ?",
    "c": [
     "Neptune",
     "Uranus",
     "Saturne",
     "Pluton"
    ],
    "a": 0
   },
   {
    "q": "Quelle planète est connue pour ses anneaux spectaculaires ?",
    "c": [
     "Jupiter",
     "Neptune",
     "Saturne",
     "Uranus"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus grand volcan du système solaire ?",
    "c": [
     "Montagne de Vénus",
     "Mont Everest",
     "Olympus Mons (Mars)",
     "Mauna Loa (Terre)"
    ],
    "a": 2
   },
   {
    "q": "Combien de temps met la Terre pour orbiter autour du Soleil ?",
    "c": [
     "366 jours",
     "365 jours",
     "365,25 jours",
     "364 jours"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la planète la plus chaude du système solaire ?",
    "c": [
     "Vénus",
     "Mars",
     "Mercure",
     "Jupiter"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sciences_012",
  "cat": "sciences",
  "name": "Les aimants",
  "level": "classique",
  "levels": [
   {
    "q": "Quel métal est attiré par un aimant ?",
    "c": [
     "Le fer",
     "Le plomb",
     "Le cuivre",
     "L'aluminium"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les deux pôles d'un aimant ?",
    "c": [
     "Plus et moins",
     "Est et Ouest",
     "Positif et négatif",
     "Nord et Sud"
    ],
    "a": 3
   },
   {
    "q": "Que se passe-t-il quand on approche deux pôles identiques ?",
    "c": [
     "Ils s'attirent",
     "Ils s'annulent",
     "Rien",
     "Ils se repoussent"
    ],
    "a": 3
   },
   {
    "q": "Quelle planète possède le champ magnétique le plus puissant ?",
    "c": [
     "Jupiter",
     "Terre",
     "Neptune",
     "Saturne"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un électroaimant ?",
    "c": [
     "Une bobine",
     "Un aimant créé par un courant électrique",
     "Un aimant permanent",
     "Un aimant naturel"
    ],
    "a": 1
   },
   {
    "q": "Qui a découvert le magnétisme terrestre ?",
    "c": [
     "Michael Faraday",
     "Hans Christian Oersted",
     "William Gilbert",
     "André-Marie Ampère"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle la boussole ?",
    "c": [
     "Aiguille magnétique",
     "Compas",
     "Boussole",
     "Gyroscope"
    ],
    "a": 2
   },
   {
    "q": "Quelle roche est naturellement magnétique ?",
    "c": [
     "Le calcaire",
     "Le basalte",
     "La magnétite",
     "Le granit"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sciences_013",
  "cat": "sciences",
  "name": "La Thermodynamique",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la température mesure ?",
    "c": [
     "L'énergie",
     "La chaleur",
     "La vitesse",
     "L'énergie cinétique moyenne des molécules"
    ],
    "a": 3
   },
   {
    "q": "Qui a formulé la première loi de la thermodynamique ?",
    "c": [
     "Julius von Mayer",
     "Hermann von Helmholtz",
     "Sadi Carnot",
     "James Joule"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les trois modes de transfert de chaleur ?",
    "c": [
     "Rayonnement, fusion, évaporation",
     "Conduction, évaporation, radiation",
     "Conduction, convection, rayonnement",
     "Conduction, convection, fusion"
    ],
    "a": 2
   },
   {
    "q": "Quel zéro absolu en degrés Celsius ?",
    "c": [
     "-250 °C",
     "-273,15 °C",
     "-200 °C",
     "-300 °C"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé le moteur à vapeur ?",
    "c": [
     "Denis Papin",
     "George Stephenson",
     "James Watt",
     "Thomas Newcomen"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'entropie ?",
    "c": [
     "Mesure du désordre d'un système",
     "Mesure de l'énergie",
     "Mesure de la température",
     "Mesure de la chaleur"
    ],
    "a": 0
   },
   {
    "q": "Qui a inventé le réfrigérateur ?",
    "c": [
     "Albert Einstein",
     "Jacob Perkins",
     "Carl von Linde",
     "John Gorrie"
    ],
    "a": 1
   },
   {
    "q": "Quelle loi relie pression, volume et température d'un gaz ?",
    "c": [
     "V = IR",
     "PV = nRT",
     "E = mc²",
     "F = ma"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sciences_014",
  "cat": "sciences",
  "name": "Les atomes",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a proposé le modèle atomique avec un noyau ?",
    "c": [
     "Ernest Rutherford",
     "J.J. Thomson",
     "John Dalton",
     "Niels Bohr"
    ],
    "a": 0
   },
   {
    "q": "Combien de protons un atome de carbone a-t-il ?",
    "c": [
     "6",
     "4",
     "8",
     "12"
    ],
    "a": 0
   },
   {
    "q": "Quelles sont les trois particules principales d'un atome ?",
    "c": [
     "Électrons, neutrons, muons",
     "Neutrons, protons, photons",
     "Protons, neutrons, électrons",
     "Protons, électrons, positrons"
    ],
    "a": 2
   },
   {
    "q": "Qui a proposé le premier modèle atomique moderne ?",
    "c": [
     "Leucippe",
     "John Dalton",
     "Démocrite",
     "Aristote"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la charge d'un électron ?",
    "c": [
     "Variable",
     "Neutre",
     "Négative",
     "Positive"
    ],
    "a": 2
   },
   {
    "q": "Qui a découvert l'électron ?",
    "c": [
     "James Chadwick",
     "Robert Millikan",
     "J.J. Thomson",
     "Ernest Rutherford"
    ],
    "a": 2
   },
   {
    "q": "Qui a découvert le neutron ?",
    "c": [
     "Niels Bohr",
     "James Chadwick",
     "J.J. Thomson",
     "Ernest Rutherford"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la taille approximative d'un atome ?",
    "c": [
     "0,1 nanomètre",
     "1 millimètre",
     "1 micromètre",
     "1 picomètre"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sciences_015",
  "cat": "sciences",
  "name": "Les virus",
  "level": "classique",
  "levels": [
   {
    "q": "Un virus est-il considéré comme vivant ?",
    "c": [
     "Seulement dans certaines conditions",
     "Oui",
     "C'est une bactérie",
     "Non, il a besoin d'un hôte"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la taille d'un virus par rapport à une bactérie ?",
    "c": [
     "Beaucoup plus petit",
     "Variable",
     "À peu près égal",
     "Beaucoup plus grand"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un virus ?",
    "c": [
     "Parasite",
     "Bactérie",
     "Entité infectieuse qui se reproduit dans des cellules",
     "Micro-organisme"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les principaux composants d'un virus ?",
    "c": [
     "ADN et ARN",
     "Protéines et lipides",
     "Noyau et membrane",
     "Acide nucléique et capside"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la protéine qui entoure le matériel génétique d'un virus ?",
    "c": [
     "La paroi",
     "La membrane",
     "L'enveloppe",
     "La capside"
    ],
    "a": 3
   },
   {
    "q": "Qui a découvert le premier virus ?",
    "c": [
     "Robert Koch",
     "Martinus Beijerinck",
     "Louis Pasteur",
     "Dmitri Ivanovsky"
    ],
    "a": 3
   },
   {
    "q": "Quel virus est responsable de la variole ?",
    "c": [
     "Virus de la varicelle",
     "Virus Ebola",
     "Variole virus",
     "Virus de la vaccine"
    ],
    "a": 2
   },
   {
    "q": "Comment les virus se reproduisent-ils ?",
    "c": [
     "Par sporulation",
     "Par division",
     "En détournant la machinerie cellulaire de l'hôte",
     "Par mitose"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sciences_016",
  "cat": "sciences",
  "name": "Les nombres premiers",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un nombre premier ?",
    "c": [
     "Divisible par 2",
     "Nombre entier",
     "Divisible seulement par 1 et lui-même",
     "Impair"
    ],
    "a": 2
   },
   {
    "q": "Quel est le seul nombre premier pair ?",
    "c": [
     "3",
     "1",
     "2",
     "5"
    ],
    "a": 2
   },
   {
    "q": "Combien de nombres premiers existe-t-il ?",
    "c": [
     "100",
     "Une infinité",
     "1 000",
     "10 000"
    ],
    "a": 1
   },
   {
    "q": "Qui a démontré l'infinité des nombres premiers ?",
    "c": [
     "Pythagore",
     "Eratosthène",
     "Euclide",
     "Archimède"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle la méthode pour trouver des nombres premiers ?",
    "c": [
     "Le crible d'Ératosthène",
     "La conjecture de Goldbach",
     "L'algorithme d'Euclide",
     "Le théorème de Pythagore"
    ],
    "a": 0
   },
   {
    "q": "Quelle conjecture affirme que tout nombre pair est somme de deux nombres premiers ?",
    "c": [
     "La conjecture de Goldbach",
     "L'hypothèse de Riemann",
     "Le dernier théorème de Fermat",
     "Le théorème des nombres premiers"
    ],
    "a": 0
   },
   {
    "q": "Quel est le plus grand nombre premier connu (2024) ?",
    "c": [
     "2^74207281 - 1",
     "2^57885161 - 1",
     "2^1000000 - 1",
     "2^82589933 - 1"
    ],
    "a": 3
   },
   {
    "q": "Quel mathématicien a travaillé sur la répartition des nombres premiers ?",
    "c": [
     "Bernhard Riemann",
     "Pierre de Fermat",
     "Leonhard Euler",
     "Carl Friedrich Gauss"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sciences_017",
  "cat": "sciences",
  "name": "La Fission nucléaire",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la fission nucléaire ?",
    "c": [
     "Division du noyau d'un atome lourd",
     "Fusion de noyaux légers",
     "Réaction chimique",
     "Désintégration radioactive"
    ],
    "a": 0
   },
   {
    "q": "Qui a découvert la fission nucléaire ?",
    "c": [
     "Lise Meitner",
     "Marie Curie",
     "Enrico Fermi",
     "Otto Hahn et Fritz Strassmann"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la fission a-t-elle été découverte ?",
    "c": [
     "1942",
     "1938",
     "1945",
     "1935"
    ],
    "a": 1
   },
   {
    "q": "Quel élément est le plus utilisé dans la fission ?",
    "c": [
     "Le plutonium 239",
     "Le thorium",
     "L'uranium 238",
     "L'uranium 235"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la réaction en chaîne de la fission ?",
    "c": [
     "Fission multiple",
     "Réaction en chaîne",
     "Réaction atomique",
     "Réaction nucléaire"
    ],
    "a": 1
   },
   {
    "q": "Quel projet a construit la première bombe atomique ?",
    "c": [
     "Projet Manhattan",
     "Projet Alsos",
     "Projet Y",
     "Projet Tube Alloys"
    ],
    "a": 0
   },
   {
    "q": "Qui a construit le premier réacteur nucléaire ?",
    "c": [
     "Niels Bohr",
     "Otto Hahn",
     "Enrico Fermi",
     "Robert Oppenheimer"
    ],
    "a": 2
   },
   {
    "q": "Quelle ville a été détruite par la première bombe atomique ?",
    "c": [
     "Hiroshima",
     "Osaka",
     "Nagasaki",
     "Tokyo"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sciences_018",
  "cat": "sciences",
  "name": "Les cristaux",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un cristal ?",
    "c": [
     "Diamant",
     "Verre",
     "Roche transparente",
     "Solide dont les atomes sont arrangés de manière ordonnée"
    ],
    "a": 3
   },
   {
    "q": "Quel est le minéral le plus dur ?",
    "c": [
     "Le corindon",
     "Le quartz",
     "Le diamant",
     "Le grenat"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la forme d'un cristal de sel ?",
    "c": [
     "Rectangulaire",
     "Sphérique",
     "Hexagonal",
     "Cubique"
    ],
    "a": 3
   },
   {
    "q": "Qui a reçu le prix Nobel pour la diffraction des rayons X par les cristaux ?",
    "c": [
     "Les deux Bragg",
     "William Henry Bragg",
     "William Lawrence Bragg",
     "Max von Laue"
    ],
    "a": 0
   },
   {
    "q": "Combien de systèmes cristallins existe-t-il ?",
    "c": [
     "6",
     "8",
     "7",
     "5"
    ],
    "a": 2
   },
   {
    "q": "Quel cristal est utilisé en électronique pour l'oscillation ?",
    "c": [
     "Le rubis",
     "Le quartz",
     "Le diamant",
     "Le saphir"
    ],
    "a": 1
   },
   {
    "q": "Quel scientifique a découvert la diffraction des rayons X par les cristaux ?",
    "c": [
     "Röntgen",
     "Max von Laue",
     "Lawrence Bragg",
     "William Bragg"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle la science qui étudie les cristaux ?",
    "c": [
     "La lithologie",
     "La géologie",
     "La cristallographie",
     "La minéralogie"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "arts_001",
  "cat": "arts",
  "name": "La Peinture",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a peint la Joconde ?",
    "c": [
     "Léonard de Vinci",
     "Raphaël",
     "Botticelli",
     "Michel-Ange"
    ],
    "a": 0
   },
   {
    "q": "Quel tableau de Van Gogh est le plus célèbre ?",
    "c": [
     "La Chambre",
     "La Nuit étoilée",
     "Les Tournesols",
     "Les Iris"
    ],
    "a": 1
   },
   {
    "q": "Qui est le fondateur de l'impressionnisme ?",
    "c": [
     "Claude Monet",
     "Édouard Manet",
     "Auguste Renoir",
     "Edgar Degas"
    ],
    "a": 0
   },
   {
    "q": "Quel peintre espagnol a peint 'Guernica' ?",
    "c": [
     "Francisco de Goya",
     "Salvador Dalí",
     "Joan Miró",
     "Pablo Picasso"
    ],
    "a": 3
   },
   {
    "q": "Quel mouvement artistique a précédé la Renaissance ?",
    "c": [
     "Le rococo",
     "Le baroque",
     "Le roman",
     "Le gothique"
    ],
    "a": 3
   },
   {
    "q": "Qui a peint 'Le Cri' ?",
    "c": [
     "Vincent van Gogh",
     "Edvard Munch",
     "James Ensor",
     "Gustav Klimt"
    ],
    "a": 1
   },
   {
    "q": "Quel tableau de Vermeer est surnommé 'La Joconde du Nord' ?",
    "c": [
     "La Jeune Fille à la perle",
     "La Vue de Delft",
     "La Dentellière",
     "La Laitière"
    ],
    "a": 0
   },
   {
    "q": "Quel mouvement pictural est caractérisé par des points de couleur ?",
    "c": [
     "Le cubisme",
     "Le pointillisme",
     "Le fauvisme",
     "Le surréalisme"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "arts_002",
  "cat": "arts",
  "name": "La Sculpture",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a sculpté le David de Florence ?",
    "c": [
     "Verrocchio",
     "Donatello",
     "Le Bernin",
     "Michel-Ange"
    ],
    "a": 3
   },
   {
    "q": "Quelle sculpture grecque antique est l'une des plus célèbres ?",
    "c": [
     "La Vénus de Milo",
     "La Victoire de Samothrace",
     "Le Laocoon",
     "Le Discobole"
    ],
    "a": 0
   },
   {
    "q": "Qui a créé 'Le Penseur' ?",
    "c": [
     "Antoine Bourdelle",
     "Auguste Rodin",
     "Aristide Maillol",
     "Camille Claudel"
    ],
    "a": 1
   },
   {
    "q": "Quel sculpteur français a créé 'Le Baiser' ?",
    "c": [
     "Camille Claudel",
     "Auguste Rodin",
     "Jean-Baptiste Carpeaux",
     "François Rude"
    ],
    "a": 1
   },
   {
    "q": "Quel matériau est le plus utilisé en sculpture classique ?",
    "c": [
     "L'argile",
     "Le marbre",
     "Le bois",
     "Le bronze"
    ],
    "a": 1
   },
   {
    "q": "Qui a sculpté 'La Pietà' au Vatican ?",
    "c": [
     "Raphaël",
     "Le Bernin",
     "Michel-Ange",
     "Donatello"
    ],
    "a": 2
   },
   {
    "q": "Quel mouvement artistique du XXe siècle a révolutionné la sculpture ?",
    "c": [
     "Le constructivisme",
     "Le cubisme",
     "Le surréalisme",
     "Le dadaïsme"
    ],
    "a": 1
   },
   {
    "q": "Qui a créé la sculpture 'L'Homme qui marche' ?",
    "c": [
     "Henry Moore",
     "Alberto Giacometti",
     "Constantin Brâncuși",
     "Jean Arp"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "arts_003",
  "cat": "arts",
  "name": "La Poésie",
  "level": "classique",
  "levels": [
   {
    "q": "Quel poète français a écrit 'Le Bateau ivre' ?",
    "c": [
     "Charles Baudelaire",
     "Paul Verlaine",
     "Arthur Rimbaud",
     "Stéphane Mallarmé"
    ],
    "a": 2
   },
   {
    "q": "Qui a écrit 'Les Fleurs du mal' ?",
    "c": [
     "Victor Hugo",
     "Paul Verlaine",
     "Charles Baudelaire",
     "Arthur Rimbaud"
    ],
    "a": 2
   },
   {
    "q": "Quelle forme poétique japonaise a 17 syllabes ?",
    "c": [
     "Le tanka",
     "Le senryū",
     "Le renga",
     "Le haïku"
    ],
    "a": 3
   },
   {
    "q": "Qui est considéré comme le père de la poésie française ?",
    "c": [
     "Pierre de Ronsard",
     "Clément Marot",
     "Joachim du Bellay",
     "François de Malherbe"
    ],
    "a": 0
   },
   {
    "q": "Quel poète a écrit 'Demain, dès l'aube' ?",
    "c": [
     "Charles Baudelaire",
     "Victor Hugo",
     "Arthur Rimbaud",
     "Alphonse de Lamartine"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle un poème de 14 vers avec un schéma de rimes spécifique ?",
    "c": [
     "Le rondeau",
     "La ballade",
     "L'ode",
     "Le sonnet"
    ],
    "a": 3
   },
   {
    "q": "Qui a écrit 'Le Pont Mirabeau' ?",
    "c": [
     "Paul Éluard",
     "André Breton",
     "Louis Aragon",
     "Guillaume Apollinaire"
    ],
    "a": 3
   },
   {
    "q": "Quel poète italien a écrit 'La Divine Comédie' ?",
    "c": [
     "Dante Alighieri",
     "Boccace",
     "Pétrarque",
     "Arioste"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "arts_004",
  "cat": "arts",
  "name": "La Photographie",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a inventé la photographie en 1839 ?",
    "c": [
     "George Eastman",
     "Louis Daguerre",
     "Nicéphore Niépce",
     "William Henry Fox Talbot"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle la première photographie permanente ?",
    "c": [
     "Le calotype",
     "La camera obscura",
     "Le daguerréotype",
     "Point de vue du Gras"
    ],
    "a": 3
   },
   {
    "q": "Quel paramètre contrôle la luminosité d'une photo ?",
    "c": [
     "La vitesse d'obturation",
     "L'ouverture",
     "Tous ces paramètres",
     "L'ISO"
    ],
    "a": 2
   },
   {
    "q": "Qui a fondé l'agence Magnum Photos ?",
    "c": [
     "David Seymour",
     "Robert Capa",
     "Henri Cartier-Bresson",
     "Tous ces photographes"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un reflex numérique ?",
    "c": [
     "Appareil télémétrique",
     "Appareil moyen format",
     "Appareil compact",
     "Appareil avec miroir et viseur optique"
    ],
    "a": 3
   },
   {
    "q": "Quel photographe est connu pour ses clichés de la guerre d'Espagne ?",
    "c": [
     "Henri Cartier-Bresson",
     "Robert Capa",
     "Gerda Taro",
     "David Seymour"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle le rapport entre la distance focale et le capteur ?",
    "c": [
     "Le zoom",
     "Le grand-angle",
     "Le facteur de crop",
     "Le téléobjectif"
    ],
    "a": 2
   },
   {
    "q": "Quel procédé photographique ancien utilise un support en verre ?",
    "c": [
     "Le calotype",
     "Le collodion humide",
     "L'ambrotype",
     "Le daguerréotype"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "arts_005",
  "cat": "arts",
  "name": "Le Théâtre",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a écrit 'Roméo et Juliette' ?",
    "c": [
     "William Shakespeare",
     "Molière",
     "Jean Racine",
     "Corneille"
    ],
    "a": 0
   },
   {
    "q": "Quel dramaturge français a écrit 'Le Misanthrope' ?",
    "c": [
     "Marivaux",
     "Corneille",
     "Racine",
     "Molière"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la partie surélevée où les acteurs jouent ?",
    "c": [
     "La scène",
     "Le planche",
     "L'avant-scène",
     "Le plateau"
    ],
    "a": 0
   },
   {
    "q": "Qui a écrit 'Antigone' ?",
    "c": [
     "Eschyle",
     "Euripide",
     "Sophocle",
     "Aristophane"
    ],
    "a": 2
   },
   {
    "q": "Quel type de pièce se termine par un dénouement heureux ?",
    "c": [
     "La comédie",
     "La tragédie",
     "Le drame",
     "Le vaudeville"
    ],
    "a": 0
   },
   {
    "q": "Quel dramaturge norvégien a écrit 'Une maison de poupée' ?",
    "c": [
     "August Strindberg",
     "Henrik Ibsen",
     "Anton Tchekhov",
     "Georges Feydeau"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle le rideau de scène ?",
    "c": [
     "La toile",
     "Le rideau",
     "Le velours",
     "Le cyclorama"
    ],
    "a": 1
   },
   {
    "q": "Quel théâtre parisien est le plus célèbre ?",
    "c": [
     "Le Théâtre du Châtelet",
     "La Comédie-Française",
     "Le Théâtre Mogador",
     "Le Théâtre de l'Odéon"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "arts_006",
  "cat": "arts",
  "name": "L'Architecture",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est le plus haut building du monde ?",
    "c": [
     "Shanghai Tower",
     "Burj Khalifa",
     "One World Trade Center",
     "Tour CN"
    ],
    "a": 1
   },
   {
    "q": "Qui a conçu la tour Eiffel ?",
    "c": [
     "Gustave Eiffel",
     "Gustave Alexandre Eiffel",
     "Charles Eiffel",
     "Jean Eiffel"
    ],
    "a": 0
   },
   {
    "q": "Quel style architectural est caractérisé par les arcs-boutants ?",
    "c": [
     "Le roman",
     "Le baroque",
     "Le gothique",
     "Le classique"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la tour Eiffel a-t-elle été inaugurée ?",
    "c": [
     "1891",
     "1889",
     "1887",
     "1900"
    ],
    "a": 1
   },
   {
    "q": "Quel architecte a conçu la Sagrada Familia ?",
    "c": [
     "Le Corbusier",
     "Josep Puig i Cadafalch",
     "Antoni Gaudí",
     "Lluís Domènech i Montaner"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un architecte ?",
    "c": [
     "Un professionnel qui conçoit des bâtiments",
     "Un ingénieur",
     "Un constructeur",
     "Un designer"
    ],
    "a": 0
   },
   {
    "q": "Quel architecte français a révolutionné l'architecture moderne ?",
    "c": [
     "Renzo Piano",
     "Christian de Portzamparc",
     "Le Corbusier",
     "Jean Nouvel"
    ],
    "a": 2
   },
   {
    "q": "Quel musée parisien est une pyramide de verre à son entrée ?",
    "c": [
     "Le Louvre",
     "Orsay",
     "Le Quai Branly",
     "Beaubourg"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "arts_007",
  "cat": "arts",
  "name": "La Bande dessinée",
  "level": "classique",
  "levels": [
   {
    "q": "Quel personnage de BD est un petit garçon à la houppe blonde ?",
    "c": [
     "Astérix",
     "Lucky Luke",
     "Tintin",
     "Spirou"
    ],
    "a": 2
   },
   {
    "q": "Qui a créé les Schtroumpfs ?",
    "c": [
     "Franquin",
     "Goscinny",
     "Morris",
     "Peyo"
    ],
    "a": 3
   },
   {
    "q": "Quel dessinateur belge a créé Tintin ?",
    "c": [
     "Franquin",
     "Jacques Martin",
     "Hergé",
     "Edgar P. Jacobs"
    ],
    "a": 2
   },
   {
    "q": "Quel Gaulois est le héros de la BD créée par Goscinny et Uderzo ?",
    "c": [
     "Astérix",
     "Obélix",
     "Idéfix",
     "Panoramix"
    ],
    "a": 0
   },
   {
    "q": "Quel cow-boy solitaire est dessiné par Morris ?",
    "c": [
     "Jerry Spring",
     "Blueberry",
     "Lucky Luke",
     "Comanche"
    ],
    "a": 2
   },
   {
    "q": "Quel est le nom de la série de bande dessinée japonais ?",
    "c": [
     "Manhwa",
     "Comic",
     "Manga",
     "Manhua"
    ],
    "a": 2
   },
   {
    "q": "Qui a créé 'Les Aventures de Tintin' ?",
    "c": [
     "Hergé",
     "Alexandre Dumas",
     "Edgar P. Jacobs",
     "Jules Verne"
    ],
    "a": 0
   },
   {
    "q": "Quel festival de BD est le plus important en France ?",
    "c": [
     "Paris",
     "Angoulême",
     "Bruxelles",
     "Lyon"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "arts_008",
  "cat": "arts",
  "name": "La Calligraphie",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la calligraphie ?",
    "c": [
     "L'art de la belle écriture",
     "L'art de l'impression",
     "L'art du dessin",
     "L'art de la peinture"
    ],
    "a": 0
   },
   {
    "q": "Quel pays a une tradition de calligraphie à l'encre de Chine ?",
    "c": [
     "Tous ces pays",
     "Le Japon",
     "La Corée",
     "La Chine"
    ],
    "a": 0
   },
   {
    "q": "Quel instrument traditionnel est utilisé dans la calligraphie arabe ?",
    "c": [
     "La plume",
     "Le pinceau",
     "Le calame",
     "Le roseau"
    ],
    "a": 2
   },
   {
    "q": "Quel style d'écriture européen est associé à la calligraphie médiévale ?",
    "c": [
     "L'onciale",
     "La gothique",
     "La romaine",
     "La caroline"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé l'imprimerie à caractères mobiles ?",
    "c": [
     "Gutenberg",
     "Alde Manuce",
     "Caxton",
     "Bi Sheng"
    ],
    "a": 0
   },
   {
    "q": "Quel est le nom du système d'écriture japonais le plus ancien ?",
    "c": [
     "Le rōmaji",
     "Le kanji",
     "Le katakana",
     "Le hiragana"
    ],
    "a": 1
   },
   {
    "q": "Quel calligraphe chinois est le plus célèbre ?",
    "c": [
     "Liu Gongquan",
     "Yan Zhenqing",
     "Wang Xizhi",
     "Ouyang Xun"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'enluminure au Moyen Âge ?",
    "c": [
     "Calligraphie",
     "Décoration des manuscrits avec des couleurs et des dorures",
     "Peinture",
     "Gravure"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "arts_009",
  "cat": "arts",
  "name": "La Danse",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle danse classique raconte une histoire sans paroles ?",
    "c": [
     "La danse contemporaine",
     "Le ballet",
     "Les claquettes",
     "Le modern jazz"
    ],
    "a": 1
   },
   {
    "q": "Qui a composé 'Le Lac des cygnes' ?",
    "c": [
     "Stravinsky",
     "Prokofiev",
     "Tchaïkovski",
     "Moussorgski"
    ],
    "a": 2
   },
   {
    "q": "Quelle danse cubaine est devenue populaire dans le monde ?",
    "c": [
     "Le flamenco",
     "La salsa",
     "Le tango",
     "La rumba"
    ],
    "a": 1
   },
   {
    "q": "Quel danseur français est connu pour son rôle dans 'Billy Elliot' ?",
    "c": [
     "Mikhail Barychnikov",
     "Fred Astaire",
     "Michaël Jackson",
     "Rudolf Noureev"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la position où le danseur tourne sur lui-même ?",
    "c": [
     "Le saut",
     "L'arabesque",
     "La pirouette",
     "Le plié"
    ],
    "a": 2
   },
   {
    "q": "Quelle danse brésilienne est associée au carnaval ?",
    "c": [
     "La samba",
     "Le frevo",
     "Le forró",
     "La bossa nova"
    ],
    "a": 0
   },
   {
    "q": "Quel chorégraphe français contemporain est célèbre ?",
    "c": [
     "Pina Bausch",
     "Rudolf Noureev",
     "Serge Lifar",
     "Maurice Béjart"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le breakdance devient-il olympique ?",
    "c": [
     "2028",
     "2032",
     "2020",
     "2024"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "arts_010",
  "cat": "arts",
  "name": "L'Opéra",
  "level": "classique",
  "levels": [
   {
    "q": "Quel compositeur a écrit 'La Traviata' ?",
    "c": [
     "Richard Wagner",
     "Giacomo Puccini",
     "Wolfgang Amadeus Mozart",
     "Giuseppe Verdi"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un ténor ?",
    "c": [
     "Une voix grave",
     "Une voix masculine aiguë",
     "Une voix de femme",
     "Une voix moyenne"
    ],
    "a": 1
   },
   {
    "q": "Quelle salle d'opéra parisienne est la plus célèbre ?",
    "c": [
     "Le Châtelet",
     "L'Opéra Garnier",
     "L'Opéra Bastille",
     "La Scala"
    ],
    "a": 1
   },
   {
    "q": "Qui a composé 'Les Noces de Figaro' ?",
    "c": [
     "Donizetti",
     "Mozart",
     "Verdi",
     "Rossini"
    ],
    "a": 1
   },
   {
    "q": "Quel mot désigne le texte d'un opéra ?",
    "c": [
     "Le livret",
     "Le script",
     "Le scénario",
     "Le libretto"
    ],
    "a": 0
   },
   {
    "q": "Quel ténor italien est le plus célèbre du XXe siècle ?",
    "c": [
     "Luciano Pavarotti",
     "José Carreras",
     "Plácido Domingo",
     "Enrico Caruso"
    ],
    "a": 0
   },
   {
    "q": "Qui a composé 'Carmen' ?",
    "c": [
     "Georges Bizet",
     "Giuseppe Verdi",
     "Giacomo Puccini",
     "Charles Gounod"
    ],
    "a": 0
   },
   {
    "q": "Quel compositeur allemand a créé l'opéra 'L'Anneau du Nibelung' ?",
    "c": [
     "Johann Strauss",
     "Richard Wagner",
     "Richard Strauss",
     "Ludwig van Beethoven"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "arts_011",
  "cat": "arts",
  "name": "Le Cinéma muet",
  "level": "classique",
  "levels": [
   {
    "q": "Qui est le roi du burlesque au cinéma muet ?",
    "c": [
     "Harold Lloyd",
     "Charlie Chaplin",
     "Mack Sennett",
     "Buster Keaton"
    ],
    "a": 1
   },
   {
    "q": "En quelle année le cinéma sonore est-il apparu ?",
    "c": [
     "1930",
     "1927",
     "1925",
     "1923"
    ],
    "a": 1
   },
   {
    "q": "Quel est le premier film de Charlie Chaplin ?",
    "c": [
     "La Ruée vers l'or",
     "Le Kid",
     "Charlot est content de lui",
     "Les Temps modernes"
    ],
    "a": 2
   },
   {
    "q": "Quelle actrice du muet était surnommée 'La Petite fiancée de l'Amérique' ?",
    "c": [
     "Lillian Gish",
     "Gloria Swanson",
     "Clara Bow",
     "Mary Pickford"
    ],
    "a": 3
   },
   {
    "q": "Quel réalisateur français a fait des films muets comme 'Napoléon' ?",
    "c": [
     "Louis Feuillade",
     "Jean Renoir",
     "Georges Méliès",
     "Abel Gance"
    ],
    "a": 3
   },
   {
    "q": "Quel film muet allemand est un chef-d'œuvre expressionniste ?",
    "c": [
     "Le Cabinet du docteur Caligari",
     "M le Maudit",
     "Nosferatu",
     "Metropolis"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le slapstick ?",
    "c": [
     "Un genre de drame",
     "Un style de musique",
     "Une technique de caméra",
     "Un type de comédie physique et burlesque"
    ],
    "a": 3
   },
   {
    "q": "Qui a réalisé 'Le Cuirassé Potemkine' ?",
    "c": [
     "Sergueï Eisenstein",
     "Alexandre Dovjenko",
     "Dziga Vertov",
     "Vsevolod Poudovkine"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "arts_012",
  "cat": "arts",
  "name": "La Céramique",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la céramique ?",
    "c": [
     "L'art de la sculpture",
     "L'art de créer des objets en argile cuite",
     "L'art du verre",
     "L'art de la poterie"
    ],
    "a": 1
   },
   {
    "q": "Quel type de céramique chinoise est le plus célèbre ?",
    "c": [
     "La porcelaine",
     "Le grès",
     "Le biscuit",
     "La faïence"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la température de cuisson de la porcelaine ?",
    "c": [
     "800-1000 °C",
     "1000-1200 °C",
     "600-800 °C",
     "1200-1400 °C"
    ],
    "a": 3
   },
   {
    "q": "Qui a découvert la porcelaine en Europe ?",
    "c": [
     "Johann Friedrich Böttger",
     "Josiah Wedgwood",
     "Bernard Palissy",
     "Augustus the Strong"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle l'argile utilisée pour la poterie ?",
    "c": [
     "La porcelaine",
     "Le grès",
     "La terre cuite",
     "La faïence"
    ],
    "a": 2
   },
   {
    "q": "Quelle technique consiste à vernir la céramique ?",
    "c": [
     "La peinture",
     "La glaçure",
     "La cuisson",
     "L'émaillage"
    ],
    "a": 3
   },
   {
    "q": "Quel céramiste français est célèbre pour ses œuvres Art nouveau ?",
    "c": [
     "Émile Gallé",
     "Théodore Deck",
     "Auguste Delaherche",
     "Jean Carriès"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le four utilisé pour cuire la céramique ?",
    "c": [
     "Le four de cuisson",
     "Le four de potier",
     "Le four à céramique",
     "Le four"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "arts_013",
  "cat": "arts",
  "name": "La Mosaïque",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'une mosaïque ?",
    "c": [
     "Une peinture",
     "Une fresque",
     "Une sculpture",
     "Un assemblage de petites pièces colorées"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appellent les petits cubes utilisés en mosaïque ?",
    "c": [
     "Des carreaux",
     "Des morceaux",
     "Des tesselles",
     "Des fragments"
    ],
    "a": 2
   },
   {
    "q": "Quelle civilisation antique a excellé dans l'art de la mosaïque ?",
    "c": [
     "Romaine",
     "Grecque",
     "Égyptienne",
     "Persane"
    ],
    "a": 0
   },
   {
    "q": "Quelle ville italienne est célèbre pour ses mosaïques byzantines ?",
    "c": [
     "Rome",
     "Ravenne",
     "Florence",
     "Venise"
    ],
    "a": 1
   },
   {
    "q": "Où se trouve la plus grande mosaïque du monde antique ?",
    "c": [
     "Constantinople",
     "Antioche",
     "Pompéi",
     "Rome"
    ],
    "a": 2
   },
   {
    "q": "Quel matériau est utilisé comme support pour la mosaïque ?",
    "c": [
     "La colle",
     "Le mortier",
     "Le ciment",
     "La chaux"
    ],
    "a": 1
   },
   {
    "q": "Quel artiste catalan a utilisé la mosaïque dans ses œuvres ?",
    "c": [
     "Joan Miró",
     "Pablo Picasso",
     "Antoni Gaudí",
     "Salvador Dalí"
    ],
    "a": 2
   },
   {
    "q": "Quelle basilique de Ravenne est célèbre pour ses mosaïques ?",
    "c": [
     "Basilique Sainte-Marie",
     "Basilique Saint-Vital",
     "Basilique Saint-Jean",
     "Basilique Saint-Apollinaire"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "arts_014",
  "cat": "arts",
  "name": "Le Street art",
  "level": "classique",
  "levels": [
   {
    "q": "Quel artiste de street art est le plus célèbre ?",
    "c": [
     "JR",
     "Banksy",
     "Shepard Fairey",
     "Keith Haring"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un pochoir dans le street art ?",
    "c": [
     "Une fresque",
     "Un tag",
     "Une peinture",
     "Une technique utilisant un masque découpé"
    ],
    "a": 3
   },
   {
    "q": "Quelle technique de street art utilise des affiches ?",
    "c": [
     "Le graffiti",
     "Le pochoir",
     "La peinture",
     "Le collage"
    ],
    "a": 3
   },
   {
    "q": "Quel street artiste français est connu pour ses collages de visages ?",
    "c": [
     "JR",
     "Keith Haring",
     "Shepard Fairey",
     "Banksy"
    ],
    "a": 0
   },
   {
    "q": "Quel quartier parisien est connu pour ses fresques murales ?",
    "c": [
     "Belleville",
     "Saint-Germain",
     "Le Marais",
     "Montmartre"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un tag ?",
    "c": [
     "Un pochoir",
     "Signature stylisée d'un graffeur",
     "Une affiche",
     "Une fresque"
    ],
    "a": 1
   },
   {
    "q": "Quel artiste américain a commencé par le graffiti dans le métro new-yorkais ?",
    "c": [
     "Jean-Michel Basquiat",
     "Keith Haring",
     "Richard Hambleton",
     "Andy Warhol"
    ],
    "a": 1
   },
   {
    "q": "Quel quartier londonien est célèbre pour le street art ?",
    "c": [
     "Borough",
     "Shoreditch",
     "Notting Hill",
     "Camden"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cuisine_001",
  "cat": "cuisine",
  "name": "La Pizza",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays est originaire la pizza ?",
    "c": [
     "Grèce",
     "Espagne",
     "Italie",
     "France"
    ],
    "a": 2
   },
   {
    "q": "Quelle ville italienne est associée à la pizza Margherita ?",
    "c": [
     "Florence",
     "Naples",
     "Milan",
     "Rome"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les ingrédients de la pizza Margherita ?",
    "c": [
     "Mozzarella, tomate, jambon",
     "Mozzarella, tomate, origan",
     "Tomate, fromage, champignons",
     "Mozzarella, tomate, basilic"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la pizza a-t-elle été inventée ?",
    "c": [
     "XIXe siècle",
     "XXe siècle",
     "XVIIIe siècle",
     "XVIIe siècle"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la pizza la plus chère du monde ?",
    "c": [
     "Pizza Margherita",
     "Pizza Regina",
     "Pizza Capricciosa",
     "Pizza Louis XIII"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la pâte à pizza fine et croustillante ?",
    "c": [
     "Pâte romaine",
     "Pâte à pizza",
     "Pâte napolitaine",
     "Pâte fine"
    ],
    "a": 0
   },
   {
    "q": "Quel fromage est traditionnellement utilisé sur la pizza ?",
    "c": [
     "Ricotta",
     "Mozzarella",
     "Gorgonzola",
     "Parmesan"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé la pizza Margherita ?",
    "c": [
     "Giuseppe Pizza",
     "Raffaele Esposito",
     "Pietro Pizzaiolo",
     "Antonio Napoletano"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cuisine_002",
  "cat": "cuisine",
  "name": "Le Chocolat",
  "level": "classique",
  "levels": [
   {
    "q": "De quel arbre provient le cacao ?",
    "c": [
     "Chocolatier",
     "Caféier",
     "Cocotier",
     "Cacaoyer"
    ],
    "a": 3
   },
   {
    "q": "Dans quelle région du monde le cacao est-il originaire ?",
    "c": [
     "Europe",
     "Amérique centrale",
     "Afrique",
     "Asie"
    ],
    "a": 1
   },
   {
    "q": "Quel pays est le plus grand producteur de cacao ?",
    "c": [
     "Ghana",
     "Brésil",
     "Côte d'Ivoire",
     "Indonésie"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle la fève de cacao séchée ?",
    "c": [
     "Cabosse",
     "Pépin",
     "Graîne",
     "Fève de cacao"
    ],
    "a": 3
   },
   {
    "q": "Qui a inventé le chocolat au lait ?",
    "c": [
     "Daniel Peter",
     "Henri Nestlé",
     "François-Louis Cailler",
     "Milton Hershey"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la différence entre chocolat noir et au lait ?",
    "c": [
     "Le lait en poudre",
     "Le sucre",
     "La teneur en cacao",
     "Le beurre de cacao"
    ],
    "a": 2
   },
   {
    "q": "Quel chocolatier belge est le plus célèbre ?",
    "c": [
     "Gallien",
     "Leonidas",
     "Godiva",
     "Neuhaus"
    ],
    "a": 2
   },
   {
    "q": "Quelle civilisation a consommé le cacao en premier ?",
    "c": [
     "Les Incas",
     "Les Mayas",
     "Les Aztèques",
     "Les Olmèques"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cuisine_003",
  "cat": "cuisine",
  "name": "Le Fromage",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de types de fromages existe-t-il en France ?",
    "c": [
     "Plus de 1 000",
     "Plus de 300",
     "Plus de 500",
     "Plus de 2 000"
    ],
    "a": 0
   },
   {
    "q": "Quel fromage est célèbre pour ses trous ?",
    "c": [
     "Le gruyère",
     "Le comté",
     "Le beaufort",
     "L'emmental"
    ],
    "a": 3
   },
   {
    "q": "Quel fromage français est interdit aux États-Unis pour son lait cru ?",
    "c": [
     "Le camembert",
     "Le brie",
     "Le roquefort",
     "Le munster"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle la croûte du fromage ?",
    "c": [
     "La fleur",
     "L'écorce",
     "La peau",
     "La croûte"
    ],
    "a": 3
   },
   {
    "q": "Quel fromage est fabriqué dans le Massif central ?",
    "c": [
     "Le maroilles",
     "Le camembert",
     "Le saint-nectaire",
     "Le reblochon"
    ],
    "a": 2
   },
   {
    "q": "Quel petit fromage de chèvre est en forme de bûche ?",
    "c": [
     "Le picodon",
     "Le chèvre",
     "Le crottin de Chavignol",
     "Le saint-marcellin"
    ],
    "a": 2
   },
   {
    "q": "Quel fromage italien est filé ?",
    "c": [
     "Le pecorino",
     "La mozzarella",
     "Le gorgonzola",
     "Le parmesan"
    ],
    "a": 1
   },
   {
    "q": "Quel fromage suisse est connu pour ses arômes fruités ?",
    "c": [
     "Le gruyère",
     "Le raclette",
     "L'emmental",
     "Le vacherin"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cuisine_004",
  "cat": "cuisine",
  "name": "Le Vin",
  "level": "classique",
  "levels": [
   {
    "q": "Quels sont les trois cépages principaux du Bordeaux rouge ?",
    "c": [
     "Merlot, Cabernet Sauvignon, Cabernet Franc",
     "Grenache, Syrah, Mourvèdre",
     "Pinot, Gamay, Syrah",
     "Chardonnay, Sauvignon, Riesling"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un millésime ?",
    "c": [
     "Le cépage",
     "La région",
     "L'année de récolte du raisin",
     "L'âge du vin"
    ],
    "a": 2
   },
   {
    "q": "Quelle région française produit du champagne ?",
    "c": [
     "Champagne",
     "Alsace",
     "Bourgogne",
     "Bordeaux"
    ],
    "a": 0
   },
   {
    "q": "Quel est le cépage du vin rouge de Bourgogne ?",
    "c": [
     "Syrah",
     "Cabernet Sauvignon",
     "Merlot",
     "Pinot noir"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la dégustation du vin ?",
    "c": [
     "Le goût",
     "La dégustation",
     "L'évaluation",
     "L'analyse"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un 'grand cru' ?",
    "c": [
     "Un cépage",
     "Une parcelle viticole d'excellence",
     "Un grand vin",
     "Une marque"
    ],
    "a": 1
   },
   {
    "q": "Quelle région viticole produit des vins moelleux comme le Sauternes ?",
    "c": [
     "Bordeaux",
     "Loire",
     "Bourgogne",
     "Alsace"
    ],
    "a": 0
   },
   {
    "q": "Quel pays est le plus grand producteur de vin au monde ?",
    "c": [
     "États-Unis",
     "Espagne",
     "Italie",
     "France"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cuisine_005",
  "cat": "cuisine",
  "name": "La Pâtisserie",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle pâtisserie française est faite de pâte feuilletée et de crème ?",
    "c": [
     "L'éclair",
     "La tarte Tatin",
     "Le Paris-Brest",
     "Le mille-feuille"
    ],
    "a": 3
   },
   {
    "q": "Qui a créé le macaron moderne ?",
    "c": [
     "Pierre Desfontaines",
     "Pierre Hermé",
     "Ladurée",
     "Gaston Lenôtre"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la crème pâtissière ?",
    "c": [
     "Crème chantilly",
     "Crème au beurre",
     "Crème anglaise",
     "Crème à base de lait, œufs et farine"
    ],
    "a": 3
   },
   {
    "q": "Quelle pâtisserie viennoise est un roulé à la confiture ?",
    "c": [
     "Le gâteau Sacher",
     "Le kugelhopf",
     "Le strudel",
     "La tarte Linzer"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle la crème au beurre utilisée en pâtisserie ?",
    "c": [
     "Crème mousseline",
     "Crème diplomate",
     "Crème Chiboust",
     "Crème au beurre"
    ],
    "a": 3
   },
   {
    "q": "Quelle pâtissière française a créé le Paris-Brest ?",
    "c": [
     "Gaston Lenôtre",
     "Pierre Hermé",
     "Antoine Carême",
     "Louis Durand"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le fondant en pâtisserie ?",
    "c": [
     "Une décoration",
     "Une pâte",
     "Un glaçage lisse",
     "Une crème"
    ],
    "a": 2
   },
   {
    "q": "Quel gâteau autrichien est au chocolat et à l'abricot ?",
    "c": [
     "Le strudel",
     "Le Sachertorte",
     "Le gâteau Esterházy",
     "Le kaiserschmarrn"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "cuisine_006",
  "cat": "cuisine",
  "name": "Le Pain",
  "level": "classique",
  "levels": [
   {
    "q": "Quels sont les ingrédients de base du pain ?",
    "c": [
     "Farine, eau, sucre, sel",
     "Farine, eau, levure, sel",
     "Farine, eau, œufs, beurre",
     "Farine, lait, levure, beurre"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la baguette de pain traditionnelle française ?",
    "c": [
     "Le pain de campagne",
     "La ficelle",
     "Le pain complet",
     "La baguette"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la croûte du pain ?",
    "c": [
     "La croute",
     "L'écorce",
     "La croûte",
     "La coquille"
    ],
    "a": 2
   },
   {
    "q": "Quel pays a la plus grande variété de pains ?",
    "c": [
     "France",
     "Italie",
     "Allemagne",
     "Belgique"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le levain ?",
    "c": [
     "Levure de boulanger",
     "Levure chimique",
     "Bactérie",
     "Ferment naturel à base de farine et d'eau"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la pâte avant la cuisson ?",
    "c": [
     "La miche",
     "La boule",
     "Le pâton",
     "Le pain"
    ],
    "a": 2
   },
   {
    "q": "Quelle farine est utilisée pour le pain complet ?",
    "c": [
     "Farine blanche (T55)",
     "Farine complète (T150)",
     "Farine semi-complète (T80)",
     "Farine de seigle"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé la baguette ?",
    "c": [
     "Auguste Zang",
     "Marie-Antoine Carême",
     "Les boulangers parisiens",
     "Napoléon"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cuisine_007",
  "cat": "cuisine",
  "name": "La Cuisine asiatique",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays a inventé les sushis ?",
    "c": [
     "Chine",
     "Thaïlande",
     "Japon",
     "Corée"
    ],
    "a": 2
   },
   {
    "q": "Quel plat chinois est composé de nouilles sautées ?",
    "c": [
     "Le dim sum",
     "Les nouilles sautées",
     "Le riz cantonais",
     "Les raviolis"
    ],
    "a": 1
   },
   {
    "q": "Quel plat thaïlandais est une soupe de crevettes ?",
    "c": [
     "Pad thaï",
     "Tom yum",
     "Green curry",
     "Som tam"
    ],
    "a": 1
   },
   {
    "q": "Quel pays asiatique utilise le plus de piment dans sa cuisine ?",
    "c": [
     "Thaïlande",
     "Chine",
     "Japon",
     "Inde"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le kimchi coréen ?",
    "c": [
     "Chou fermenté épicé",
     "Plat de riz",
     "Soupe",
     "Galette de légumes"
    ],
    "a": 0
   },
   {
    "q": "Quel plat vietnamien est une soupe de nouilles et de bœuf ?",
    "c": [
     "Le bánh mì",
     "Le bò bún",
     "Le nems",
     "Le phở"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les ingrédients de base de la cuisine japonaise ?",
    "c": [
     "Riz, poisson, algues, soja",
     "Nouilles, viande, huile",
     "Riz, légumes, huile",
     "Riz, viande, légumes, épices"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le wasabi ?",
    "c": [
     "Gingembre mariné",
     "Piment vert",
     "Racine de raifort japonais",
     "Pâte de soja"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cuisine_008",
  "cat": "cuisine",
  "name": "Le Café",
  "level": "classique",
  "levels": [
   {
    "q": "De quel arbre provient le café ?",
    "c": [
     "Cocotier",
     "Caféier",
     "Théier",
     "Cacaoyer"
    ],
    "a": 1
   },
   {
    "q": "Quel pays est le plus grand producteur de café au monde ?",
    "c": [
     "Colombie",
     "Indonésie",
     "Brésil",
     "Vietnam"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les deux principaux types de café ?",
    "c": [
     "Arabica et Canephora",
     "Robusta et Excelsa",
     "Arabica et Robusta",
     "Arabica et Liberica"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un expresso ?",
    "c": [
     "Café long",
     "Café glacé",
     "Café au lait",
     "Café court et concentré"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la mousse du café expresso ?",
    "c": [
     "L'écume",
     "La mousse",
     "La crema",
     "La crème"
    ],
    "a": 2
   },
   {
    "q": "Qui a inventé la machine à expresso ?",
    "c": [
     "Pavoni",
     "Illy",
     "Achille Gaggia",
     "Luigi Bezzera"
    ],
    "a": 2
   },
   {
    "q": "Quelle boisson au café contient du lait chaud ?",
    "c": [
     "Le café latte",
     "Le cappuccino",
     "Le macchiato",
     "L'americano"
    ],
    "a": 0
   },
   {
    "q": "Quel pays a inventé le café filtre ?",
    "c": [
     "France",
     "Italie",
     "États-Unis",
     "Allemagne"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cuisine_009",
  "cat": "cuisine",
  "name": "Les pâtes",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays les pâtes sont-elles originaires ?",
    "c": [
     "Chine",
     "Grèce",
     "Japon",
     "Italie"
    ],
    "a": 3
   },
   {
    "q": "Quel type de pâte est long et fin ?",
    "c": [
     "Les penne",
     "Les fusilli",
     "Les spaghetti",
     "Les macaronis"
    ],
    "a": 2
   },
   {
    "q": "Quelle sauce accompagne traditionnellement les spaghetti ?",
    "c": [
     "Sauce carbonara",
     "Sauce bolognaise",
     "Sauce Alfredo",
     "Sauce pesto"
    ],
    "a": 1
   },
   {
    "q": "Quel ingrédient est à la base de la pâte à pâtes ?",
    "c": [
     "Farine de blé complet",
     "Farine de maïs",
     "Farine de blé tendre",
     "Semoule de blé dur"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la pâte farcie italienne ?",
    "c": [
     "Les lasagnes",
     "Les gnocchis",
     "Les tortellinis",
     "Les raviolis"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la carbonara ?",
    "c": [
     "Sauce crème et champignons",
     "Sauce tomate et viande",
     "Sauce huile d'olive et ail",
     "Sauce à l'œuf, fromage, lard"
    ],
    "a": 3
   },
   {
    "q": "En quelle année les pâtes ont-elles été introduites en Italie ?",
    "c": [
     "XVIe siècle",
     "XIIIe siècle",
     "Antiquité",
     "XVIIIe siècle"
    ],
    "a": 1
   },
   {
    "q": "Quelle forme de pâte est en forme de coquillage ?",
    "c": [
     "Les coquillettes",
     "Les farfalle",
     "Les conchiglie",
     "Les rotini"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cuisine_010",
  "cat": "cuisine",
  "name": "La Bière",
  "level": "classique",
  "levels": [
   {
    "q": "Quels sont les quatre ingrédients de base de la bière ?",
    "c": [
     "Eau, malt, sucre, levure",
     "Eau, blé, houblon, levure",
     "Eau, malt, houblon, levure",
     "Eau, orge, houblon, sucre"
    ],
    "a": 2
   },
   {
    "q": "Quel pays est le plus grand producteur de bière au monde ?",
    "c": [
     "Belgique",
     "Chine",
     "États-Unis",
     "Allemagne"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la différence entre une ale et une lager ?",
    "c": [
     "Amertume",
     "Taux d'alcool",
     "Couleur",
     "Type de fermentation (haute/basse)"
    ],
    "a": 3
   },
   {
    "q": "Quelle bière belge est brassée par des moines trappistes ?",
    "c": [
     "Stella Artois",
     "Jupiler",
     "Chimay",
     "Duvel"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une bière artisanale ?",
    "c": [
     "Bière bio",
     "Bière locale",
     "Bière produite par une brasserie indépendante",
     "Bière non filtrée"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle la mousse de la bière ?",
    "c": [
     "Le collet",
     "La couronne",
     "La mousse",
     "Le chapeau"
    ],
    "a": 2
   },
   {
    "q": "Quel pays organise l'Oktoberfest ?",
    "c": [
     "Suisse",
     "Autriche",
     "République tchèque",
     "Allemagne"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la plus ancienne brasserie du monde encore en activité ?",
    "c": [
     "Pilsner Urquell (République tchèque)",
     "Guinness (Irlande)",
     "Brouwerij (Belgique)",
     "Weihenstephan (Allemagne)"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cuisine_011",
  "cat": "cuisine",
  "name": "La Gastronomie française",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est le plat le plus célèbre de la gastronomie française ?",
    "c": [
     "La bouillabaisse",
     "Le bœuf bourguignon",
     "Le cassoulet",
     "Le coq au vin"
    ],
    "a": 3
   },
   {
    "q": "Qui a créé la classification des sauces mères ?",
    "c": [
     "Marie-Antoine Carême",
     "Joël Robuchon",
     "Paul Bocuse",
     "Auguste Escoffier"
    ],
    "a": 3
   },
   {
    "q": "Combien de sauces mères existe-t-il dans la cuisine classique ?",
    "c": [
     "3",
     "6",
     "5",
     "4"
    ],
    "a": 2
   },
   {
    "q": "Quel chef français est surnommé 'le pape de la gastronomie' ?",
    "c": [
     "Alain Ducasse",
     "Joël Robuchon",
     "Paul Bocuse",
     "Michel Guérard"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le guide Michelin ?",
    "c": [
     "Guide des vins",
     "Guide des fromages",
     "Guide gastronomique avec des étoiles",
     "Guide des hôtels"
    ],
    "a": 2
   },
   {
    "q": "Quelle soupe marseillaise est un plat traditionnel ?",
    "c": [
     "Le velouté",
     "La soupe à l'oignon",
     "Le pot-au-feu",
     "La bouillabaisse"
    ],
    "a": 3
   },
   {
    "q": "Quel chef a inventé la cuisine moléculaire ?",
    "c": [
     "Pierre Gagnaire",
     "Joël Robuchon",
     "Ferran Adrià",
     "Hervé This"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la gastronomie française a-t-elle été inscrite à l'UNESCO ?",
    "c": [
     "2012",
     "2005",
     "2015",
     "2010"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "cuisine_012",
  "cat": "cuisine",
  "name": "Les épices",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle épice est la plus chère du monde ?",
    "c": [
     "Le safran",
     "La vanille",
     "Le poivre",
     "La cardamome"
    ],
    "a": 0
   },
   {
    "q": "De quelle plante provient le poivre ?",
    "c": [
     "Capsicum",
     "Vanillier",
     "Piper nigrum",
     "Poivrier"
    ],
    "a": 2
   },
   {
    "q": "Quel pays est le plus grand producteur de vanille ?",
    "c": [
     "Madagascar",
     "Mexique",
     "Inde",
     "Indonésie"
    ],
    "a": 0
   },
   {
    "q": "Quelle épice donne sa couleur jaune au curry ?",
    "c": [
     "Le safran",
     "Le curry",
     "Le curcuma",
     "Le paprika"
    ],
    "a": 2
   },
   {
    "q": "Quelles sont les épices du mélange 'quatre épices' ?",
    "c": [
     "Poivre, girofle, muscade, gingembre",
     "Cannelle, muscade, girofle, poivre",
     "Poivre, curcuma, cumin, coriandre",
     "Poivre, cannelle, clou de girofle, gingembre"
    ],
    "a": 1
   },
   {
    "q": "Quelle épice est utilisée dans la cuisine indienne et a des propriétés digestives ?",
    "c": [
     "Le cumin",
     "La coriandre",
     "Le fenouil",
     "Le curcuma"
    ],
    "a": 0
   },
   {
    "q": "Quel explorateur a cherché la route des épices vers l'Inde ?",
    "c": [
     "Vasco de Gama",
     "Christophe Colomb",
     "Magellan",
     "Cook"
    ],
    "a": 0
   },
   {
    "q": "Quelle épice est obtenue à partir d'une orchidée ?",
    "c": [
     "La vanille",
     "La cannelle",
     "La cardamome",
     "Le safran"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "cuisine_013",
  "cat": "cuisine",
  "name": "Les sushis",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays les sushis sont-ils originaires ?",
    "c": [
     "Vietnam",
     "Corée",
     "Chine",
     "Japon"
    ],
    "a": 3
   },
   {
    "q": "Quel ingrédient est essentiel pour faire des sushis ?",
    "c": [
     "Soja",
     "Algues",
     "Riz vinaigré",
     "Poisson cru"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le nori ?",
    "c": [
     "Sauce soja",
     "Poisson cru",
     "Riz",
     "Algue séchée utilisée pour les maki"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la différence entre maki et nigiri ?",
    "c": [
     "Maki est roulé, nigiri est une boule",
     "Nigiri est roulé, maki est une boule",
     "Nigiri a des légumes, maki non",
     "Maki a du poisson, nigiri non"
    ],
    "a": 0
   },
   {
    "q": "Quel poisson est le plus utilisé dans les sushis ?",
    "c": [
     "La dorade",
     "Le thon",
     "Le maquereau",
     "Le saumon"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le wasabi ?",
    "c": [
     "Racine de raifort japonaise",
     "Piment vert",
     "Gingembre mariné",
     "Pâte de soja"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le vinaigre de riz utilisé pour les sushis ?",
    "c": [
     "Vinaigre de saké",
     "Vinaigre de riz",
     "Vinaigre de sushi",
     "Vinaigre de vin"
    ],
    "a": 1
   },
   {
    "q": "En quelle année les sushis sont-ils devenus populaires en Occident ?",
    "c": [
     "Années 2000",
     "Années 1990",
     "Années 1980",
     "Années 1970"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "cuisine_014",
  "cat": "cuisine",
  "name": "Les barbecues",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pays est célèbre pour le barbecue coréen ?",
    "c": [
     "Chine",
     "Corée",
     "Vietnam",
     "Japon"
    ],
    "a": 1
   },
   {
    "q": "Quel est le nom du barbecue argentin ?",
    "c": [
     "L'asado",
     "Le rodizio",
     "La parrilla",
     "Le churrasco"
    ],
    "a": 0
   },
   {
    "q": "Quelle technique de cuisson utilise une fumée aromatique ?",
    "c": [
     "Le smoking",
     "La plancha",
     "Le gril",
     "Le barbecue"
    ],
    "a": 0
   },
   {
    "q": "Quel bois est utilisé pour fumer la viande ?",
    "c": [
     "Bois de peuplier",
     "Bois de tilleul",
     "Bois de fruitier (pommier, cerisier)",
     "Bois de pin"
    ],
    "a": 2
   },
   {
    "q": "Quelle sauce est traditionnelle du barbecue américain ?",
    "c": [
     "Ketchup",
     "Mayonnaise",
     "Moutarde",
     "Sauce barbecue"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un gril ?",
    "c": [
     "Fumoir",
     "Grille de cuisson au-dessus des braises",
     "Four",
     "Plancha"
    ],
    "a": 1
   },
   {
    "q": "Quel pays a inventé le barbecue moderne ?",
    "c": [
     "Argentine",
     "États-Unis",
     "Australie",
     "Afrique du Sud"
    ],
    "a": 1
   },
   {
    "q": "Quelle viande est la plus cuite au barbecue ?",
    "c": [
     "L'agneau",
     "Le bœuf",
     "Le porc",
     "Le poulet"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tech_001",
  "cat": "tech",
  "name": "Les smartphones",
  "level": "classique",
  "levels": [
   {
    "q": "Quel système d'exploitation équipe la majorité des smartphones ?",
    "c": [
     "iOS",
     "Android",
     "HarmonyOS",
     "Windows Mobile"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé le premier smartphone ?",
    "c": [
     "BlackBerry",
     "Apple (iPhone)",
     "Nokia",
     "IBM (Simon)"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le premier iPhone est-il sorti ?",
    "c": [
     "2006",
     "2007",
     "2005",
     "2008"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une application mobile ?",
    "c": [
     "Site web mobile",
     "Jeu",
     "Navigateur",
     "Logiciel pour smartphone"
    ],
    "a": 3
   },
   {
    "q": "Quelle technologie permet de payer sans contact ?",
    "c": [
     "Wi-Fi",
     "NFC",
     "Bluetooth",
     "5G"
    ],
    "a": 1
   },
   {
    "q": "Quel fabricant coréen domine le marché des smartphones ?",
    "c": [
     "Huawei",
     "LG",
     "Samsung",
     "Xiaomi"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un processeur mobile ?",
    "c": [
     "Puce qui exécute les calculs",
     "Écran",
     "Batterie",
     "Appareil photo"
    ],
    "a": 0
   },
   {
    "q": "Combien de smartphones sont vendus chaque année dans le monde ?",
    "c": [
     "Environ 1,5 milliard",
     "Environ 3 milliards",
     "Environ 500 millions",
     "Environ 800 millions"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "tech_002",
  "cat": "tech",
  "name": "Internet",
  "level": "classique",
  "levels": [
   {
    "q": "Quand Internet a-t-il été créé ?",
    "c": [
     "Années 1980",
     "Années 1960 (ARPANET)",
     "Années 1990",
     "Années 1970"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé le World Wide Web ?",
    "c": [
     "Robert Cailliau",
     "Tim Berners-Lee",
     "Marc Andreessen",
     "Vint Cerf"
    ],
    "a": 1
   },
   {
    "q": "Que signifie l'acronyme WWW ?",
    "c": [
     "World Wide Web",
     "World Web Wide",
     "Web Wide World",
     "Wide World Web"
    ],
    "a": 0
   },
   {
    "q": "Quel protocole est utilisé pour les sites web ?",
    "c": [
     "SMTP",
     "FTP",
     "HTTP",
     "TCP/IP"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le premier site web a-t-il été mis en ligne ?",
    "c": [
     "1991",
     "1990",
     "1989",
     "1993"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un navigateur web ?",
    "c": [
     "Réseau social",
     "Application",
     "Logiciel pour consulter des sites web",
     "Moteur de recherche"
    ],
    "a": 2
   },
   {
    "q": "Combien d'internautes y a-t-il dans le monde ?",
    "c": [
     "Environ 4 milliards",
     "Environ 3 milliards",
     "Environ 6 milliards",
     "Environ 5,5 milliards"
    ],
    "a": 3
   },
   {
    "q": "Que signifie le 'S' dans HTTPS ?",
    "c": [
     "Safe",
     "Secure",
     "Socket",
     "Server"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tech_003",
  "cat": "tech",
  "name": "L'Intelligence artificielle",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que l'IA ?",
    "c": [
     "Simulation de l'intelligence humaine par des machines",
     "Robotique",
     "Intelligence humaine",
     "Programmation"
    ],
    "a": 0
   },
   {
    "q": "Qui a organisé la conférence de Dartmouth en 1956 qui a fondé l'IA ?",
    "c": [
     "John McCarthy",
     "Marvin Minsky",
     "Alan Turing",
     "Herbert Simon"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que l'apprentissage automatique (machine learning) ?",
    "c": [
     "Réseau de neurones",
     "Raisonnement symbolique",
     "Sous-domaine de l'IA qui apprend à partir de données",
     "Programmation classique"
    ],
    "a": 2
   },
   {
    "q": "Quel jeu de plateau a été dominé par l'IA Deep Blue en 1997 ?",
    "c": [
     "Le go",
     "Les dames",
     "Le poker",
     "Les échecs"
    ],
    "a": 3
   },
   {
    "q": "Que teste le test de Turing ?",
    "c": [
     "L'intelligence d'un robot",
     "La vitesse d'un ordinateur",
     "La mémoire d'une IA",
     "La capacité d'une machine à imiter un humain"
    ],
    "a": 3
   },
   {
    "q": "Quel réseau social utilise le plus d'IA pour ses recommandations ?",
    "c": [
     "Twitter",
     "Instagram",
     "Facebook",
     "TikTok"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que ChatGPT ?",
    "c": [
     "IA conversationnelle générative",
     "Navigateur",
     "Moteur de recherche",
     "Réseau social"
    ],
    "a": 0
   },
   {
    "q": "Qui a créé le terme 'intelligence artificielle' ?",
    "c": [
     "Alan Turing",
     "Norbert Wiener",
     "John McCarthy",
     "Marvin Minsky"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tech_004",
  "cat": "tech",
  "name": "Les jeux vidéo",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est le premier jeu vidéo de l'histoire ?",
    "c": [
     "Tetris",
     "Space Invaders",
     "Pong",
     "Pac-Man"
    ],
    "a": 2
   },
   {
    "q": "En quelle année Pong est-il sorti ?",
    "c": [
     "1970",
     "1975",
     "1972",
     "1978"
    ],
    "a": 2
   },
   {
    "q": "Quelle console Nintendo a révolutionné le jeu vidéo en 1985 ?",
    "c": [
     "Nintendo 64",
     "NES",
     "Game Boy",
     "SNES"
    ],
    "a": 1
   },
   {
    "q": "Quel jeu est le plus vendu de tous les temps ?",
    "c": [
     "Wii Sports",
     "Grand Theft Auto V",
     "Minecraft",
     "Tetris"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un FPS ?",
    "c": [
     "Jeu de sport",
     "Jeu de tir à la première personne",
     "Jeu de rôle",
     "Jeu de stratégie"
    ],
    "a": 1
   },
   {
    "q": "Quelle société a créé la PlayStation ?",
    "c": [
     "Nintendo",
     "Sony",
     "Sega",
     "Microsoft"
    ],
    "a": 1
   },
   {
    "q": "Quel jeu de Battle Royale est le plus populaire ?",
    "c": [
     "Fortnite",
     "Call of Duty Warzone",
     "PUBG",
     "Apex Legends"
    ],
    "a": 0
   },
   {
    "q": "Combien de ventes totales pour la franchise Pokemon ?",
    "c": [
     "Plus de 800 millions",
     "Plus de 1 milliard",
     "Plus de 300 millions",
     "Plus de 500 millions"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "tech_005",
  "cat": "tech",
  "name": "La réalité virtuelle",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la réalité virtuelle (VR) ?",
    "c": [
     "Jeu vidéo",
     "Film 3D",
     "Réalité augmentée",
     "Environnement simulé immersif"
    ],
    "a": 3
   },
   {
    "q": "Qui a créé le premier casque VR moderne ?",
    "c": [
     "Sony",
     "Valve",
     "HTC",
     "Palmer Luckey (Oculus)"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Oculus VR a-t-il été fondé ?",
    "c": [
     "2010",
     "2012",
     "2008",
     "2014"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la réalité augmentée (AR) ?",
    "c": [
     "Film 3D",
     "Superposition d'éléments virtuels sur le monde réel",
     "VR",
     "Simulation"
    ],
    "a": 1
   },
   {
    "q": "Quel jeu mobile a popularisé la réalité augmentée ?",
    "c": [
     "Harry Potter Wizards Unite",
     "Pokémon Go",
     "Ingress",
     "Minecraft Earth"
    ],
    "a": 1
   },
   {
    "q": "Quel casque VR est autonome (sans fil) ?",
    "c": [
     "PlayStation VR",
     "Valve Index",
     "Oculus Quest 2",
     "HTC Vive"
    ],
    "a": 2
   },
   {
    "q": "Quelle différence entre VR et AR ?",
    "c": [
     "VR utilise un casque",
     "VR crée un monde virtuel, AR superpose au réel",
     "AR est moins cher",
     "AR est plus réaliste"
    ],
    "a": 1
   },
   {
    "q": "Quelle entreprise a racheté Oculus en 2014 ?",
    "c": [
     "Microsoft",
     "Google",
     "Facebook (Meta)",
     "Apple"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tech_006",
  "cat": "tech",
  "name": "Les réseaux sociaux",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est le plus grand réseau social du monde ?",
    "c": [
     "Facebook",
     "Instagram",
     "YouTube",
     "TikTok"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Facebook a-t-il été créé ?",
    "c": [
     "2003",
     "2005",
     "2006",
     "2004"
    ],
    "a": 3
   },
   {
    "q": "Qui a fondé Facebook ?",
    "c": [
     "Eduardo Saverin",
     "Dustin Moskovitz",
     "Mark Zuckerberg",
     "Andrew McCollum"
    ],
    "a": 2
   },
   {
    "q": "Quel réseau social est basé sur des messages éphémères ?",
    "c": [
     "Snapchat",
     "Instagram",
     "TikTok",
     "Twitter"
    ],
    "a": 0
   },
   {
    "q": "Quel réseau social a été racheté par Elon Musk en 2022 ?",
    "c": [
     "Instagram",
     "Twitter (devenu X)",
     "LinkedIn",
     "Snapchat"
    ],
    "a": 1
   },
   {
    "q": "Quel réseau social est principalement professionnel ?",
    "c": [
     "LinkedIn",
     "Instagram",
     "TikTok",
     "Facebook"
    ],
    "a": 0
   },
   {
    "q": "Combien d'utilisateurs actifs Facebook a-t-il ?",
    "c": [
     "Environ 3 milliards",
     "Environ 4 milliards",
     "Environ 2 milliards",
     "Environ 1,5 milliard"
    ],
    "a": 0
   },
   {
    "q": "Quel pays a banni Facebook en 2009 ?",
    "c": [
     "Russie",
     "Iran",
     "Chine",
     "Corée du Nord"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tech_007",
  "cat": "tech",
  "name": "La robotique",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie le mot 'robot' ?",
    "c": [
     "Machine automatique",
     "Automate",
     "Androïde",
     "Travail forcé en tchèque"
    ],
    "a": 3
   },
   {
    "q": "Qui a inventé le mot 'robot' ?",
    "c": [
     "Joseph Engelberger",
     "Alan Turing",
     "Karel Čapek",
     "Isaac Asimov"
    ],
    "a": 2
   },
   {
    "q": "Qui a créé les trois lois de la robotique ?",
    "c": [
     "George Devol",
     "Alan Turing",
     "Karel Čapek",
     "Isaac Asimov"
    ],
    "a": 3
   },
   {
    "q": "Quel robot industriel a été le premier ?",
    "c": [
     "Roomba",
     "ASIMO",
     "Unimate",
     "Atlas"
    ],
    "a": 2
   },
   {
    "q": "En quelle année Unimate a-t-il été introduit ?",
    "c": [
     "1961",
     "1950",
     "1970",
     "1980"
    ],
    "a": 0
   },
   {
    "q": "Quel robot humanoïde est fabriqué par Boston Dynamics ?",
    "c": [
     "Atlas",
     "ASIMO",
     "Nao",
     "Pepper"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un cobot ?",
    "c": [
     "Robot collaboratif travaillant avec les humains",
     "Robot industriel",
     "Robot autonome",
     "Robot médical"
    ],
    "a": 0
   },
   {
    "q": "Dans quel secteur la robotique progresse-t-elle le plus ?",
    "c": [
     "Industrie manufacturière",
     "Services",
     "Agriculture",
     "Médecine"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "tech_008",
  "cat": "tech",
  "name": "Le cloud computing",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie le 'cloud' en informatique ?",
    "c": [
     "Serveur local",
     "Stockage et services via Internet",
     "Logiciel",
     "Réseau"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les trois principaux fournisseurs de cloud ?",
    "c": [
     "Google, IBM, Oracle",
     "Salesforce, SAP, Adobe",
     "Amazon, Microsoft, Apple",
     "AWS, Azure, Google Cloud"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le SaaS ?",
    "c": [
     "Plateforme cloud",
     "Logiciel en tant que service",
     "Serveur virtuel",
     "Stockage en ligne"
    ],
    "a": 1
   },
   {
    "q": "Quelle entreprise domine le marché du cloud ?",
    "c": [
     "Alibaba Cloud",
     "Microsoft Azure",
     "Google Cloud",
     "Amazon Web Services (AWS)"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'IaaS ?",
    "c": [
     "Internet en tant que service",
     "Plateforme en tant que service",
     "Logiciel en tant que service",
     "Infrastructure en tant que service"
    ],
    "a": 3
   },
   {
    "q": "En quelle année AWS a-t-il été lancé ?",
    "c": [
     "2008",
     "2004",
     "2010",
     "2006"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le stockage cloud ?",
    "c": [
     "Disque dur externe",
     "Stockage de données sur des serveurs distants",
     "Stockage local",
     "Mémoire vive"
    ],
    "a": 1
   },
   {
    "q": "Quel service cloud est utilisé pour le streaming vidéo ?",
    "c": [
     "Google Drive",
     "Netflix",
     "AWS",
     "Azure"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tech_009",
  "cat": "tech",
  "name": "La cryptographie",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la cryptographie ?",
    "c": [
     "Science du codage secret des informations",
     "Étude des codes",
     "Mathématiques",
     "Programmation sécurisée"
    ],
    "a": 0
   },
   {
    "q": "Quel type de cryptographie utilise la même clé pour chiffrer et déchiffrer ?",
    "c": [
     "Cryptographie symétrique",
     "Chiffrement par bloc",
     "Chiffrement par flux",
     "Cryptographie asymétrique"
    ],
    "a": 0
   },
   {
    "q": "Qui a inventé la machine Enigma ?",
    "c": [
     "Alan Turing",
     "Gordon Welchman",
     "Marian Rejewski",
     "Arthur Scherbius"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le chiffrement RSA ?",
    "c": [
     "Protocole",
     "Algorithme à clé publique",
     "Algorithme symétrique",
     "Fonction de hachage"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé le RSA ?",
    "c": [
     "Turing",
     "Rivest, Shamir, Adleman",
     "Diffie et Hellman",
     "Shannon"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la blockchain ?",
    "c": [
     "Registre",
     "Contrat intelligent",
     "Cryptomonnaie",
     "Base de données distribuée et sécurisée"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'une fonction de hachage ?",
    "c": [
     "Fonction qui transforme des données en empreinte",
     "Code secret",
     "Algorithme de chiffrement",
     "Clé cryptographique"
    ],
    "a": 0
   },
   {
    "q": "Quelle cryptomonnaie a été créée en 2009 ?",
    "c": [
     "Ethereum",
     "Bitcoin",
     "Ripple",
     "Litecoin"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tech_010",
  "cat": "tech",
  "name": "Les drones",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un drone ?",
    "c": [
     "Quadricoptère",
     "Avion téléguidé",
     "Véhicule aérien sans pilote",
     "Hélicoptère miniature"
    ],
    "a": 2
   },
   {
    "q": "Quel pays utilise le plus de drones militaires ?",
    "c": [
     "Chine",
     "Russie",
     "États-Unis",
     "Israël"
    ],
    "a": 2
   },
   {
    "q": "Quelle entreprise domine le marché des drones civils ?",
    "c": [
     "Parrot",
     "DJI",
     "Autel",
     "Syma"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle le pilote d'un drone ?",
    "c": [
     "Pilote",
     "Opérateur",
     "Télépilote",
     "Navigateur"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la réglementation pour les drones en France ?",
    "c": [
     "Déclaration obligatoire",
     "Interdit",
     "Aucune restriction",
     "Permis requis"
    ],
    "a": 0
   },
   {
    "q": "Quel type de drone est utilisé pour les livraisons ?",
    "c": [
     "Drone miniature",
     "Drone multirotor",
     "Drone à voilure fixe",
     "Drone VTOL"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un drone FPV ?",
    "c": [
     "Drone de course",
     "Drone piloté en vue subjective (First Person View)",
     "Drone caméra",
     "Drone professionnel"
    ],
    "a": 1
   },
   {
    "q": "Combien de moteurs un quadricoptère a-t-il ?",
    "c": [
     "3",
     "4",
     "8",
     "6"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tech_011",
  "cat": "tech",
  "name": "L'impression 3D",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que l'impression 3D ?",
    "c": [
     "Fraisage",
     "Fabrication additive par couches",
     "Impression classique",
     "Moulage"
    ],
    "a": 1
   },
   {
    "q": "Quel matériau est le plus utilisé en impression 3D domestique ?",
    "c": [
     "PLA (plastique biodégradable)",
     "Métal",
     "Résine",
     "ABS"
    ],
    "a": 0
   },
   {
    "q": "En quelle année la première imprimante 3D a-t-elle été inventée ?",
    "c": [
     "1978",
     "1990",
     "1985",
     "1983"
    ],
    "a": 3
   },
   {
    "q": "Qui a inventé l'impression 3D ?",
    "c": [
     "Carl Deckard",
     "S. Scott Crump",
     "Scott Crump",
     "Chuck Hull"
    ],
    "a": 3
   },
   {
    "q": "Quel acronyme désigne la technique FDM ?",
    "c": [
     "Fused Deposition Modeling",
     "3D Printing",
     "Stereolithography",
     "Selective Laser Sintering"
    ],
    "a": 0
   },
   {
    "q": "Quel secteur utilise le plus l'impression 3D ?",
    "c": [
     "Aérospatial",
     "Automobile",
     "Prototypage",
     "Médical"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un fichier STL ?",
    "c": [
     "Format texte",
     "Format de fichier pour l'impression 3D",
     "Format image",
     "Format vidéo"
    ],
    "a": 1
   },
   {
    "q": "Combien de couches une impression 3D peut-elle avoir ?",
    "c": [
     "Une dizaine",
     "Quelques centaines",
     "Des milliers",
     "Une centaine"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tech_012",
  "cat": "tech",
  "name": "Les batteries",
  "level": "classique",
  "levels": [
   {
    "q": "Quel type de batterie est le plus utilisé dans les appareils électroniques ?",
    "c": [
     "Plomb-acide",
     "Nickel-cadmium",
     "Nickel-hydrure métallique",
     "Lithium-ion"
    ],
    "a": 3
   },
   {
    "q": "Qui a inventé la batterie lithium-ion ?",
    "c": [
     "Akira Yoshino",
     "Tous les trois (prix Nobel 2019)",
     "John B. Goodenough",
     "Stanley Whittingham"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la capacité typique d'une batterie de smartphone ?",
    "c": [
     "1000-2000 mAh",
     "4000-5000 mAh",
     "6000-7000 mAh",
     "2000-3000 mAh"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le temps de charge ?",
    "c": [
     "Durée de vie",
     "Cycle de charge",
     "Temps de décharge",
     "Temps pour recharger complètement"
    ],
    "a": 3
   },
   {
    "q": "Combien de cycles peut supporter une batterie lithium-ion ?",
    "c": [
     "500-1000 cycles",
     "1000-2000 cycles",
     "100-200 cycles",
     "300-500 cycles"
    ],
    "a": 3
   },
   {
    "q": "Quel matériau est utilisé dans les batteries des voitures électriques ?",
    "c": [
     "Sodium-ion",
     "Nickel-cadmium",
     "Lithium-ion",
     "Plomb-acide"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la recharge sans fil ?",
    "c": [
     "Transfert d'énergie par induction",
     "Charge par USB",
     "Charge par câble",
     "Charge solaire"
    ],
    "a": 0
   },
   {
    "q": "Quelle entreprise produit le plus de batteries lithium-ion ?",
    "c": [
     "LG Energy Solution",
     "CATL (Chine)",
     "Panasonic",
     "Samsung SDI"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tech_013",
  "cat": "tech",
  "name": "Les LED",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie LED ?",
    "c": [
     "Diode lumineuse",
     "Lumière électrique",
     "Diode électroluminescente",
     "Diode émettrice de lumière"
    ],
    "a": 2
   },
   {
    "q": "Qui a inventé la LED bleue (prix Nobel 2014) ?",
    "c": [
     "Nikola Tesla",
     "Thomas Edison",
     "James Watt",
     "Isamu Akasaki, Hiroshi Amano, Shuji Nakamura"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la couleur de la première LED ?",
    "c": [
     "Jaune",
     "Rouge",
     "Bleue",
     "Verte"
    ],
    "a": 1
   },
   {
    "q": "En quelle année la première LED rouge a-t-elle été inventée ?",
    "c": [
     "1970",
     "1962",
     "1955",
     "1980"
    ],
    "a": 1
   },
   {
    "q": "Quel avantage ont les LED par rapport aux ampoules classiques ?",
    "c": [
     "Plus lumineuses",
     "Efficacité énergétique et longue durée",
     "Plus légères",
     "Moins chères"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'OLED ?",
    "c": [
     "LED rouge",
     "LED organique",
     "LED classique",
     "LED bleue"
    ],
    "a": 1
   },
   {
    "q": "Combien de temps dure une LED en moyenne ?",
    "c": [
     "50 000-100 000 heures",
     "5 000-10 000 heures",
     "25 000-50 000 heures",
     "10 000-20 000 heures"
    ],
    "a": 2
   },
   {
    "q": "Dans quel type d'écran utilise-t-on des LED ?",
    "c": [
     "Écrans à tubes",
     "Écrans CRT",
     "Écrans plasma",
     "Écrans LCD, OLED, QLED"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "tech_014",
  "cat": "tech",
  "name": "Les panneaux solaires",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un panneau solaire photovoltaïque ?",
    "c": [
     "Capteur thermique",
     "Batterie",
     "Chauffe-eau",
     "Dispositif qui convertit la lumière en électricité"
    ],
    "a": 3
   },
   {
    "q": "Quel matériau est le plus utilisé dans les panneaux solaires ?",
    "c": [
     "Cuivre",
     "Aluminium",
     "Verre",
     "Silicium"
    ],
    "a": 3
   },
   {
    "q": "Qui a inventé la cellule photovoltaïque ?",
    "c": [
     "Charles Fritts",
     "Russell Ohl",
     "Albert Einstein",
     "Alexander Becquerel"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la première cellule solaire a-t-elle été fabriquée ?",
    "c": [
     "1960",
     "1900",
     "1883",
     "1950"
    ],
    "a": 2
   },
   {
    "q": "Quelle est l'efficacité d'un panneau solaire standard ?",
    "c": [
     "30-40%",
     "50-60%",
     "15-22%",
     "10-15%"
    ],
    "a": 2
   },
   {
    "q": "Quel pays est le plus grand producteur d'énergie solaire ?",
    "c": [
     "Chine",
     "États-Unis",
     "Allemagne",
     "Inde"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un onduleur solaire ?",
    "c": [
     "Panneau",
     "Convertit le courant continu en courant alternatif",
     "Régulateur de tension",
     "Batterie"
    ],
    "a": 1
   },
   {
    "q": "Combien de panneaux faut-il pour alimenter une maison française moyenne ?",
    "c": [
     "4-6 panneaux",
     "2-4 panneaux",
     "8-12 panneaux",
     "15-20 panneaux"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tech_015",
  "cat": "tech",
  "name": "La 5G",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie 5G ?",
    "c": [
     "5 GHz",
     "Cinquième génération de réseau mobile",
     "5 gigabits",
     "5Giga"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la différence principale entre 4G et 5G ?",
    "c": [
     "Même chose",
     "Plus de couverture",
     "Débit plus élevé et latence plus faible",
     "Moins de consommation"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la 5G a-t-elle été lancée commercialement ?",
    "c": [
     "2020",
     "2018",
     "2019",
     "2021"
    ],
    "a": 2
   },
   {
    "q": "Quel pays a déployé la 5G le plus rapidement ?",
    "c": [
     "Corée du Sud",
     "Chine",
     "Japon",
     "États-Unis"
    ],
    "a": 0
   },
   {
    "q": "Quelle bande de fréquences utilise la 5G ?",
    "c": [
     "5 GHz",
     "2,4 GHz",
     "Sub-6 GHz et mmWave",
     "3,5 GHz"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la latence 5G ?",
    "c": [
     "1-10 ms",
     "20-30 ms",
     "100-200 ms",
     "50-100 ms"
    ],
    "a": 0
   },
   {
    "q": "Quels secteurs bénéficient le plus de la 5G ?",
    "c": [
     "Industrie, santé, transports",
     "Télétravail",
     "Jeux vidéo",
     "Réseaux sociaux"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la vitesse théorique maximale de la 5G ?",
    "c": [
     "Jusqu'à 1 Gbit/s",
     "Jusqu'à 10 Gbit/s",
     "Jusqu'à 20 Gbit/s",
     "Jusqu'à 5 Gbit/s"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tech_016",
  "cat": "tech",
  "name": "Les moteurs électriques",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a inventé le moteur électrique ?",
    "c": [
     "Michael Faraday",
     "Nikola Tesla",
     "Thomas Edison",
     "James Watt"
    ],
    "a": 0
   },
   {
    "q": "En quelle année le premier moteur électrique a-t-il été inventé ?",
    "c": [
     "1821",
     "1850",
     "1800",
     "1900"
    ],
    "a": 0
   },
   {
    "q": "Quel type de moteur est utilisé dans les voitures électriques ?",
    "c": [
     "Moteur pas à pas",
     "Moteur synchrone à aimants permanents",
     "Moteur à courant continu",
     "Moteur universel"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la différence entre moteur AC et DC ?",
    "c": [
     "DC est plus efficace",
     "AC est plus petit",
     "AC utilise courant alternatif, DC courant continu",
     "AC est moins cher"
    ],
    "a": 2
   },
   {
    "q": "Quel véhicule électrique utilise un moteur dans chaque roue ?",
    "c": [
     "Voitures électriques modernes",
     "Vélos électriques",
     "Trottinettes",
     "Bus électriques"
    ],
    "a": 0
   },
   {
    "q": "Qu'inventeur a développé le moteur à induction ?",
    "c": [
     "Nikola Tesla",
     "Galileo Ferraris",
     "Michael Faraday",
     "Thomas Edison"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un moteur brushless ?",
    "c": [
     "Moteur sans balais",
     "Moteur à induction",
     "Moteur synchrone",
     "Moteur à balais"
    ],
    "a": 0
   },
   {
    "q": "Quel type de moteur équipe les robots industriels ?",
    "c": [
     "Moteurs à induction",
     "Moteurs universels",
     "Moteurs à courant continu",
     "Moteurs pas à pas et servomoteurs"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "auto_001",
  "cat": "auto",
  "name": "Les moteurs essence",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a inventé le moteur à essence ?",
    "c": [
     "Carl Benz",
     "Rudolf Diesel",
     "Gottlieb Daimler",
     "Nikolaus Otto"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la différence entre un moteur 2 temps et 4 temps ?",
    "c": [
     "Le nombre de cycles du piston",
     "La cylindrée",
     "La puissance",
     "La taille"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la cylindrée d'un moteur ?",
    "c": [
     "Puissance",
     "Consommation",
     "Couple",
     "Volume total des cylindres"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le premier moteur à essence a-t-il été fabriqué ?",
    "c": [
     "1885",
     "1890",
     "1876",
     "1900"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le rendement d'un moteur à essence ?",
    "c": [
     "Environ 30%",
     "Environ 20%",
     "Environ 70%",
     "Environ 50%"
    ],
    "a": 0
   },
   {
    "q": "Quel type de carburant utilise un moteur essence ?",
    "c": [
     "Essence (SP95, SP98)",
     "GPL",
     "Diesel",
     "Électricité"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un turbo dans un moteur ?",
    "c": [
     "Injecteur",
     "Compresseur entraîné par les gaz d'échappement",
     "Soupape",
     "Bougie"
    ],
    "a": 1
   },
   {
    "q": "Combien de bougies d'allumage a un moteur 4 cylindres ?",
    "c": [
     "8",
     "6",
     "2",
     "4"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "auto_002",
  "cat": "auto",
  "name": "Les voitures électriques",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle entreprise domine le marché des voitures électriques ?",
    "c": [
     "Tesla",
     "Volkswagen",
     "Toyota",
     "BYD"
    ],
    "a": 0
   },
   {
    "q": "Quel est l'avantage principal d'une voiture électrique ?",
    "c": [
     "Autonomie",
     "Zéro émission directe",
     "Vitesse",
     "Prix"
    ],
    "a": 1
   },
   {
    "q": "Combien de temps faut-il pour recharger une voiture électrique ?",
    "c": [
     "15 min",
     "5 min",
     "30 min à 8h selon la borne",
     "1h"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une batterie lithium-ion dans une voiture électrique ?",
    "c": [
     "Transmission",
     "Source d'énergie",
     "Moteur",
     "Système de refroidissement"
    ],
    "a": 1
   },
   {
    "q": "Quelle est l'autonomie moyenne d'une voiture électrique moderne ?",
    "c": [
     "700-900 km",
     "500-700 km",
     "100-200 km",
     "300-500 km"
    ],
    "a": 3
   },
   {
    "q": "En quelle année Tesla a-t-elle sorti la Model S ?",
    "c": [
     "2012",
     "2010",
     "2008",
     "2014"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'une borne de recharge rapide ?",
    "c": [
     "Borne délivrant une puissance élevée (50-350 kW)",
     "Prise domestique",
     "Chargeur mural",
     "Câble de recharge"
    ],
    "a": 0
   },
   {
    "q": "Quel pays interdit la vente de voitures thermiques neuves en 2035 ?",
    "c": [
     "Union européenne",
     "États-Unis",
     "Japon",
     "Chine"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "auto_003",
  "cat": "auto",
  "name": "Les pneus",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a inventé le pneu gonflable ?",
    "c": [
     "André Michelin",
     "Édouard Michelin",
     "Charles Goodyear",
     "John Boyd Dunlop"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'indice de charge d'un pneu ?",
    "c": [
     "Taille",
     "Pression",
     "Poids maximal supporté",
     "Vitesse maximale"
    ],
    "a": 2
   },
   {
    "q": "Quand faut-il changer ses pneus hiver ?",
    "c": [
     "En été",
     "De novembre à mars",
     "En automne",
     "Toute l'année"
    ],
    "a": 1
   },
   {
    "q": "Quelle pression doit avoir un pneu de voiture ?",
    "c": [
     "2,0-2,5 bars",
     "1,0-1,5 bars",
     "3,0-3,5 bars",
     "0,5-1,0 bars"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un pneu 'runflat' ?",
    "c": [
     "Pneu été",
     "Pneu qui roule à plat après une crevaison",
     "Pneu sport",
     "Pneu hiver"
    ],
    "a": 1
   },
   {
    "q": "Combien de pneus une voiture a-t-elle ?",
    "c": [
     "6",
     "4",
     "3",
     "5"
    ],
    "a": 1
   },
   {
    "q": "Quel manufacturier a créé le pneu vert ?",
    "c": [
     "Pirelli",
     "Goodyear",
     "Bridgestone",
     "Michelin"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle la sculpture du pneu ?",
    "c": [
     "Profil",
     "Bande de roulement",
     "Semelle",
     "Gomme"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "auto_004",
  "cat": "auto",
  "name": "Les boîtes de vitesses",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'une boîte de vitesses ?",
    "c": [
     "Système qui transmet la puissance du moteur aux roues",
     "Moteur",
     "Embrayage",
     "Différentiel"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la différence entre boîte manuelle et automatique ?",
    "c": [
     "Manuelle nécessite un embrayage, automatique non",
     "Manuelle est plus rapide",
     "Automatique consomme plus",
     "Manuelle est plus moderne"
    ],
    "a": 0
   },
   {
    "q": "Combien de vitesses a une boîte manuelle standard ?",
    "c": [
     "2 ou 3",
     "7 ou 8",
     "5 ou 6",
     "3 ou 4"
    ],
    "a": 2
   },
   {
    "q": "Qui a inventé la boîte de vitesses synchronisée ?",
    "c": [
     "Henry Ford",
     "Ettore Bugatti",
     "Louis Renault",
     "Charles Kettering"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'une boîte DSG ?",
    "c": [
     "Boîte séquentielle",
     "Boîte à double embrayage",
     "Boîte CVT",
     "Boîte automatique"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'embrayage ?",
    "c": [
     "Pédale",
     "Volant moteur",
     "Dispositif qui accouple/désaccouple le moteur de la transmission",
     "Frein"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la fonction du point mort ?",
    "c": [
     "Accélérer",
     "Aucune transmission de puissance",
     "Freiner",
     "Ralentir"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une boîte CVT ?",
    "c": [
     "Boîte automatique",
     "Boîte séquentielle",
     "Transmission à variation continue",
     "Boîte manuelle"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "auto_005",
  "cat": "auto",
  "name": "Le rallye",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la course de rallye la plus célèbre ?",
    "c": [
     "Rallye Monte-Carlo",
     "Rallye de Suède",
     "Rallye de Finlande",
     "Rallye Dakar"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un rallye automobile ?",
    "c": [
     "Course sur routes fermées avec des spéciales chronométrées",
     "Course sur circuit",
     "Course tout-terrain",
     "Course de côte"
    ],
    "a": 0
   },
   {
    "q": "Quel pilote français a remporté le championnat du monde des rallyes ?",
    "c": [
     "Tous les trois",
     "Sébastien Ogier",
     "Sébastien Loeb",
     "Didier Auriol"
    ],
    "a": 0
   },
   {
    "q": "Combien de titres Loeb a-t-il gagnés ?",
    "c": [
     "8",
     "7",
     "9",
     "6"
    ],
    "a": 2
   },
   {
    "q": "Quel constructeur domine le WRC dans les années 2010-2020 ?",
    "c": [
     "Hyundai",
     "Toyota",
     "Citroën",
     "Ford"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le copilote en rallye ?",
    "c": [
     "Copilote",
     "Navigateur",
     "Guide",
     "Coéquipier"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un 'spéciale' en rallye ?",
    "c": [
     "Parc d'assistance",
     "Essai",
     "Section chronométrée sur route fermée",
     "Étape de liaison"
    ],
    "a": 2
   },
   {
    "q": "Quelle voiture emblématique a dominé le rallye dans les années 1980 ?",
    "c": [
     "Audi Quattro",
     "Lancia Delta Integrale",
     "Peugeot 205 T16",
     "Toyota Celica"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "auto_006",
  "cat": "auto",
  "name": "Les courses de dragsters",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un dragster ?",
    "c": [
     "Voiture de circuit",
     "Voiture de drift",
     "Voiture de course ultra-rapide sur 1/4 de mile",
     "Voiture de rallye"
    ],
    "a": 2
   },
   {
    "q": "Quelle distance parcourt un dragster ?",
    "c": [
     "100 mètres",
     "200 mètres",
     "402 mètres (1/4 mile)",
     "1 km"
    ],
    "a": 2
   },
   {
    "q": "Quelle vitesse atteint un dragster Top Fuel ?",
    "c": [
     "Plus de 600 km/h",
     "Plus de 500 km/h",
     "Plus de 300 km/h",
     "Plus de 400 km/h"
    ],
    "a": 1
   },
   {
    "q": "En combien de temps un dragster fait le 1/4 mile ?",
    "c": [
     "Moins de 10 secondes",
     "Moins de 4 secondes",
     "Moins de 6 secondes",
     "Moins de 8 secondes"
    ],
    "a": 1
   },
   {
    "q": "Quel type de carburant utilise un dragster ?",
    "c": [
     "Essence",
     "Méthanol",
     "Nitrométhane",
     "Gaz"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le 'Christmas Tree' en dragster ?",
    "c": [
     "Feu de signalisation de départ",
     "Drapeau",
     "Arbre de Noël",
     "Chronomètre"
    ],
    "a": 0
   },
   {
    "q": "Quel pays organise les plus grandes compétitions de dragster ?",
    "c": [
     "États-Unis",
     "Royaume-Uni",
     "Canada",
     "Australie"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un wheelie en dragster ?",
    "c": [
     "La roue avant se lève",
     "La voiture vibre",
     "La voiture dérape",
     "Le moteur cale"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "auto_007",
  "cat": "auto",
  "name": "Les motos",
  "level": "classique",
  "levels": [
   {
    "q": "Qui a inventé la première moto ?",
    "c": [
     "Henry Ford",
     "Carl Benz",
     "Wilhelm Maybach",
     "Gottlieb Daimler"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la première moto a-t-elle été fabriquée ?",
    "c": [
     "1880",
     "1900",
     "1890",
     "1885"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la cylindrée minimale pour passer le permis A2 ?",
    "c": [
     "600 cm³",
     "500 cm³",
     "395 cm³",
     "250 cm³"
    ],
    "a": 2
   },
   {
    "q": "Quel constructeur japonais domine le marché mondial de la moto ?",
    "c": [
     "Suzuki",
     "Yamaha",
     "Honda",
     "Kawasaki"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un motard ?",
    "c": [
     "Moniteur",
     "Personne qui conduit une moto",
     "Passager",
     "Pilote"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la vitesse maximale d'une moto de sport ?",
    "c": [
     "Plus de 300 km/h",
     "Plus de 250 km/h",
     "Plus de 350 km/h",
     "Plus de 200 km/h"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un guidon de moto ?",
    "c": [
     "Poignée",
     "Rétroviseur",
     "Selle",
     "Pièce qui permet de diriger la moto"
    ],
    "a": 3
   },
   {
    "q": "Quel pilote français est champion du monde MotoGP ?",
    "c": [
     "Randy de Puniet",
     "Johann Zarco",
     "Olivier Jacque",
     "Fabio Quartararo"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "auto_008",
  "cat": "auto",
  "name": "Le tuning",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie le tuning automobile ?",
    "c": [
     "Conduite sportive",
     "Personnalisation et modification des véhicules",
     "Réparation",
     "Nettoyage"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un kit carrosserie ?",
    "c": [
     "Kit de peinture",
     "Kit de réparation",
     "Kit d'outils",
     "Ensemble de pièces esthétiques pour modifier l'apparence"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un spoiler sur une voiture ?",
    "c": [
     "Feu",
     "Aileron qui améliore l'appui aérodynamique",
     "Rétroviseur",
     "Pare-chocs"
    ],
    "a": 1
   },
   {
    "q": "Quelle modification est souvent recherchée en tuning ?",
    "c": [
     "Autoradio",
     "Peinture",
     "Jantes, suspension, échappement",
     "Sièges"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un 'lowrider' ?",
    "c": [
     "Voiture rapide",
     "Voiture ancienne",
     "Voiture avec suspension abaissée",
     "Voiture surélevée"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un néon sous une voiture ?",
    "c": [
     "Phare",
     "Éclairage décoratif sous le châssis",
     "Clignotant",
     "Feu de détresse"
    ],
    "a": 1
   },
   {
    "q": "Quel film a popularisé le tuning dans les années 2000 ?",
    "c": [
     "Taxi",
     "2 Fast 2 Furious",
     "Fast and Furious",
     "Need for Speed"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une jante en tuning ?",
    "c": [
     "Enjoliveur",
     "Moyeu",
     "Pneu",
     "Roue modifiée pour l'esthétique et les performances"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "auto_009",
  "cat": "auto",
  "name": "Le Mans",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que les 24 Heures du Mans ?",
    "c": [
     "Course de Formule 1",
     "Rallye",
     "Course de vitesse",
     "Course d'endurance automobile de 24 heures"
    ],
    "a": 3
   },
   {
    "q": "En quelle année la première course du Mans a-t-elle eu lieu ?",
    "c": [
     "1923",
     "1930",
     "1910",
     "1920"
    ],
    "a": 0
   },
   {
    "q": "Quel constructeur a le plus de victoires au Mans ?",
    "c": [
     "Toyota",
     "Porsche",
     "Audi",
     "Ferrari"
    ],
    "a": 1
   },
   {
    "q": "Combien de kilomètres parcourt la voiture gagnante ?",
    "c": [
     "Environ 5 000 km",
     "Environ 4 000 km",
     "Environ 3 000 km",
     "Environ 6 000 km"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle le célèbre virage du circuit du Mans ?",
    "c": [
     "Indianapolis",
     "Les Hunaudières",
     "Le Tertre Rouge",
     "Mulsanne"
    ],
    "a": 1
   },
   {
    "q": "Quel pilote français a gagné le Mans ?",
    "c": [
     "Romain Dumas",
     "Sébastien Bourdais",
     "Yannick Dalmas",
     "Henri Pescarolo"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la ligne droite des Hunaudières ?",
    "c": [
     "Virage",
     "Stand",
     "Chicane",
     "Longue ligne droite de 6 km"
    ],
    "a": 3
   },
   {
    "q": "En quelle année les voitures hybrides ont-elles gagné le Mans pour la première fois ?",
    "c": [
     "2010",
     "2014",
     "2008",
     "2012"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "auto_010",
  "cat": "auto",
  "name": "La Formule 1",
  "level": "classique",
  "levels": [
   {
    "q": "Quel pilote a le plus de championnats du monde de F1 ?",
    "c": [
     "Juan Manuel Fangio",
     "Max Verstappen",
     "Alain Prost",
     "Lewis Hamilton et Michael Schumacher"
    ],
    "a": 3
   },
   {
    "q": "Combien de titres ont Hamilton et Schumacher ?",
    "c": [
     "7",
     "5",
     "8",
     "6"
    ],
    "a": 0
   },
   {
    "q": "Quel constructeur a le plus de titres en F1 ?",
    "c": [
     "Mercedes",
     "McLaren",
     "Williams",
     "Ferrari"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le premier championnat de F1 a-t-il eu lieu ?",
    "c": [
     "1960",
     "1955",
     "1947",
     "1950"
    ],
    "a": 3
   },
   {
    "q": "Quel pilote français est quadruple champion du monde de F1 ?",
    "c": [
     "Niki Lauda",
     "Jackie Stewart",
     "Alain Prost",
     "Jim Clark"
    ],
    "a": 2
   },
   {
    "q": "Quel est le circuit le plus célèbre de F1 ?",
    "c": [
     "Monaco",
     "Monza",
     "Spa-Francorchamps",
     "Silverstone"
    ],
    "a": 0
   },
   {
    "q": "Combien de moteurs V6 turbo hybride une F1 utilise-t-elle par saison ?",
    "c": [
     "4",
     "6",
     "5",
     "3"
    ],
    "a": 0
   },
   {
    "q": "Qui est le plus jeune champion du monde de F1 ?",
    "c": [
     "Fernando Alonso",
     "Sebastian Vettel",
     "Lewis Hamilton",
     "Max Verstappen"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tv_001",
  "cat": "tv",
  "name": "Le Mans",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle série policière française est la plus ancienne ?",
    "c": [
     "Les Cinq Dernières Minutes",
     "Commissaire Moulin",
     "Inspecteur Leclerc",
     "Les Brigades du Tigre"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue le commissaire Maigret ?",
    "c": [
     "Pierre Renoir",
     "Tous ces acteurs",
     "Jean Richard",
     "Bruno Cremer"
    ],
    "a": 1
   },
   {
    "q": "Quelle série policière américaine a eu le plus de saisons ?",
    "c": [
     "CSI",
     "NCIS",
     "Law & Order",
     "Criminal Minds"
    ],
    "a": 2
   },
   {
    "q": "Quelle série française met en scène une brigade de police marseillaise ?",
    "c": [
     "Section de recherches",
     "Plus belle la vie",
     "Commissaire Magellan",
     "Julie Lescaut"
    ],
    "a": 0
   },
   {
    "q": "Quel acteur joue Navarro ?",
    "c": [
     "Bruno Cremer",
     "Pierre Mondy",
     "André Dussollier",
     "Roger Hanin"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle l'inspecteur dans 'Les Cordier, juge et flic' ?",
    "c": [
     "Boullier",
     "Cordier",
     "Navarro",
     "Maigret"
    ],
    "a": 1
   },
   {
    "q": "Quelle série policière britannique met en scène Sherlock Holmes moderne ?",
    "c": [
     "Vera",
     "Inspector Morse",
     "Sherlock",
     "Midsomer Murders"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un 'cold case' dans une série policière ?",
    "c": [
     "Meurtre",
     "Affaire classée non résolue",
     "Enquête",
     "Procès"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tv_002",
  "cat": "tv",
  "name": "Les séries Netflix",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la série la plus regardée sur Netflix en anglais ?",
    "c": [
     "Stranger Things",
     "Squid Game",
     "The Crown",
     "Bridgerton"
    ],
    "a": 0
   },
   {
    "q": "En quelle année Netflix a-t-il lancé ses premières séries originales ?",
    "c": [
     "2017",
     "2013",
     "2015",
     "2011"
    ],
    "a": 1
   },
   {
    "q": "Quelle série française Netflix a connu un succès mondial ?",
    "c": [
     "Le Bazar de la Charité",
     "Lupin",
     "Family Business",
     "Dix pour cent"
    ],
    "a": 1
   },
   {
    "q": "Qui joue le rôle d'Assane Diop dans Lupin ?",
    "c": [
     "Omar Sy",
     "Jean Dujardin",
     "Vincent Cassel",
     "Reda Kateb"
    ],
    "a": 0
   },
   {
    "q": "Quelle série sud-coréenne Netflix a battu tous les records en 2021 ?",
    "c": [
     "The Glory",
     "All of Us Are Dead",
     "Squid Game",
     "Hellbound"
    ],
    "a": 2
   },
   {
    "q": "Combien de saisons compte 'Stranger Things' (2024) ?",
    "c": [
     "2",
     "4",
     "3",
     "5"
    ],
    "a": 1
   },
   {
    "q": "Quel acteur joue le Prince Philip dans The Crown ?",
    "c": [
     "Jonathan Pryce",
     "Tobias Menzies",
     "Matt Smith",
     "Tous"
    ],
    "a": 3
   },
   {
    "q": "Quelle série Netflix raconte l'histoire de la reine Elizabeth II ?",
    "c": [
     "Windsor",
     "The Crown",
     "The Queen",
     "Royalty"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "tv_003",
  "cat": "tv",
  "name": "Le Journal télévisé",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est le premier journal télévisé français ?",
    "c": [
     "La Une",
     "JT de 20h",
     "Actualités télévisées",
     "Le journal télévisé"
    ],
    "a": 1
   },
   {
    "q": "Qui a présenté le JT de 20h le plus longtemps sur TF1 ?",
    "c": [
     "Claire Chazal",
     "Jean-Pierre Pernaut",
     "Gilles Bouleau",
     "Patrick Poivre d'Arvor"
    ],
    "a": 1
   },
   {
    "q": "Quelle chaîne a le JT de 20h le plus regardé en France ?",
    "c": [
     "France 2",
     "CNews",
     "M6",
     "TF1"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le premier JT a-t-il été diffusé en France ?",
    "c": [
     "1949",
     "1960",
     "1955",
     "1945"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un duplex en journalisme ?",
    "c": [
     "Liaison en direct avec un reporter",
     "Reportage",
     "Interview",
     "Plateau"
    ],
    "a": 0
   },
   {
    "q": "Qui a présenté le JT de France 2 pendant 20 ans ?",
    "c": [
     "Béatrice Schönberg",
     "Marie Drucker",
     "Laurent Delahousse",
     "David Pujadas"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un 'flash info' ?",
    "c": [
     "Brève interruption pour une information urgente",
     "Journal du soir",
     "Bulletin complet",
     "Revue de presse"
    ],
    "a": 0
   },
   {
    "q": "Quelle chaîne d'info en continu a été lancée en 2017 ?",
    "c": [
     "LCI",
     "Franceinfo",
     "BFMTV",
     "CNews"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "tv_004",
  "cat": "tv",
  "name": "Les jeux télévisés",
  "level": "classique",
  "levels": [
   {
    "q": "Quel jeu télévisé français est le plus ancien ?",
    "c": [
     "Questions pour un champion",
     "Des chiffres et des lettres",
     "Le mot le plus long",
     "Jeopardy"
    ],
    "a": 1
   },
   {
    "q": "Qui présente 'Questions pour un champion' ?",
    "c": [
     "Michel Drucker",
     "Julien Lepers",
     "Samuel Étienne",
     "Laurent Ruquier"
    ],
    "a": 2
   },
   {
    "q": "Quel jeu animé par Nagui est diffusé sur France 2 ?",
    "c": [
     "Motus",
     "Fort Boyard",
     "Tout le monde veut prendre sa place",
     "N'oubliez pas les paroles"
    ],
    "a": 3
   },
   {
    "q": "Quelle émission de TF1 animée par Jean-Pierre Foucault ?",
    "c": [
     "Une famille en or",
     "La Roue de la fortune",
     "Le Juste Prix",
     "Qui veut gagner des millions ?"
    ],
    "a": 3
   },
   {
    "q": "Combien de questions faut-il répondre pour gagner à 'Qui veut gagner des millions ?'",
    "c": [
     "20",
     "12",
     "15",
     "10"
    ],
    "a": 2
   },
   {
    "q": "Quel jeu télévisé se déroule dans un fort en Charente-Maritime ?",
    "c": [
     "Le Maillon faible",
     "La Carte aux trésors",
     "Fort Boyard",
     "Les Jeux de 20 heures"
    ],
    "a": 2
   },
   {
    "q": "Qui présente 'Fort Boyard' depuis 2022 ?",
    "c": [
     "Patrice Laffont",
     "Olivier Minne",
     "Nagui",
     "Yann Barthès"
    ],
    "a": 1
   },
   {
    "q": "Quel jeu télévisé britannique est adapté dans plus de 100 pays ?",
    "c": [
     "The Weakest Link",
     "Jeopardy",
     "Family Feud",
     "Who Wants to Be a Millionaire ?"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "tv_005",
  "cat": "tv",
  "name": "Les talk-shows",
  "level": "classique",
  "levels": [
   {
    "q": "Quel talk-show français est le plus ancien ?",
    "c": [
     "Rendez-vous avec Michel Drucker",
     "Le Grand Échiquier",
     "On n'est pas couché",
     "Tout le monde en parle"
    ],
    "a": 1
   },
   {
    "q": "Qui anime 'Le Grand Échiquier' dans les années 1970-1990 ?",
    "c": [
     "Philippe Gildas",
     "Jacques Chancel",
     "Bernard Pivot",
     "Michel Drucker"
    ],
    "a": 1
   },
   {
    "q": "Quel talk-show américain est le plus célèbre ?",
    "c": [
     "Late Show",
     "The Tonight Show",
     "The Oprah Winfrey Show",
     "Jimmy Kimmel Live"
    ],
    "a": 1
   },
   {
    "q": "Qui anime 'Quotidien' sur TMC ?",
    "c": [
     "Laurent Ruquier",
     "Yann Barthès",
     "Nikos Aliagas",
     "Cyril Hanouna"
    ],
    "a": 1
   },
   {
    "q": "Qui anime 'Touche pas à mon poste' sur C8 ?",
    "c": [
     "Arthur",
     "Yann Barthès",
     "Michel Drucker",
     "Cyril Hanouna"
    ],
    "a": 3
   },
   {
    "q": "Quel animateur français présente 'Les Grosses Têtes' ?",
    "c": [
     "Nagui",
     "Philippe Bouvard",
     "Michel Drucker",
     "Laurent Ruquier"
    ],
    "a": 1
   },
   {
    "q": "Quelle émission de télévision est un talk-show politique ?",
    "c": [
     "Les Terriens du samedi",
     "C à vous",
     "On n'est pas couché",
     "L'Émission politique"
    ],
    "a": 3
   },
   {
    "q": "Qui anime 'C à vous' sur France 5 ?",
    "c": [
     "Agathe Lecaron",
     "Alessandra Sublet",
     "Anne-Élisabeth Lemoine",
     "Maya Bazouni"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tv_006",
  "cat": "tv",
  "name": "Les séries animées",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle série animée japonaise est la plus célèbre ?",
    "c": [
     "Naruto",
     "One Piece",
     "Dragon Ball",
     "Pokémon"
    ],
    "a": 2
   },
   {
    "q": "Quel studio d'animation japonais est mondialement connu ?",
    "c": [
     "Madhouse",
     "Kyoto Animation",
     "Toei Animation",
     "Studio Ghibli"
    ],
    "a": 3
   },
   {
    "q": "Qui a créé Dragon Ball ?",
    "c": [
     "Osamu Tezuka",
     "Eiichiro Oda",
     "Akira Toriyama",
     "Masashi Kishimoto"
    ],
    "a": 2
   },
   {
    "q": "Quelle série animée française est diffusée internationalement ?",
    "c": [
     "Il était une fois...",
     "Les Mystérieuses Cités d'or",
     "Totally Spies",
     "Miraculous Ladybug"
    ],
    "a": 3
   },
   {
    "q": "Combien d'épisodes compte One Piece (2024) ?",
    "c": [
     "Plus de 1 000",
     "Plus de 1 200",
     "Plus de 800",
     "Plus de 500"
    ],
    "a": 0
   },
   {
    "q": "Quelle série animée américaine est la plus longue ?",
    "c": [
     "South Park",
     "Bob's Burgers",
     "Family Guy",
     "Les Simpson"
    ],
    "a": 3
   },
   {
    "q": "Combien de saisons Les Simpson comptent-ils (2024) ?",
    "c": [
     "25",
     "34",
     "36",
     "30"
    ],
    "a": 1
   },
   {
    "q": "Quel manga est le plus vendu de l'histoire ?",
    "c": [
     "Naruto",
     "Death Note",
     "Dragon Ball",
     "One Piece"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "tv_007",
  "cat": "tv",
  "name": "La téléréalité",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la première émission de téléréalité moderne ?",
    "c": [
     "Star Academy (2001)",
     "Loft Story (2001)",
     "Koh-Lanta (2001)",
     "Big Brother (1999)"
    ],
    "a": 3
   },
   {
    "q": "Quel concept de téléréalité met en scène des candidats sur une île ?",
    "c": [
     "Secret Story",
     "Les Marseillais",
     "Loft Story",
     "Koh-Lanta"
    ],
    "a": 3
   },
   {
    "q": "Qui présente 'Koh-Lanta' sur TF1 ?",
    "c": [
     "Christophe Dechavanne",
     "Jean-Pierre Foucault",
     "Arthur",
     "Denis Brogniart"
    ],
    "a": 3
   },
   {
    "q": "Quelle émission de TF1 cherche le meilleur chanteur amateur ?",
    "c": [
     "The Voice",
     "Nouvelle Star",
     "La France a un incroyable talent",
     "Star Academy"
    ],
    "a": 0
   },
   {
    "q": "Quelle émission de rencontres est la plus célèbre ?",
    "c": [
     "The Bachelor",
     "Les princes de l'amour",
     "Mariés au premier regard",
     "L'amour est aveugle"
    ],
    "a": 3
   },
   {
    "q": "Combien d'aventuriers commencent Koh-Lanta chaque saison ?",
    "c": [
     "16",
     "18",
     "20",
     "24"
    ],
    "a": 2
   },
   {
    "q": "Quelle émission de relooking est célèbre ?",
    "c": [
     "C'est mon choix",
     "Les Reines du shopping",
     "Ma vie est un enfer",
     "Incroyable transformation"
    ],
    "a": 1
   },
   {
    "q": "Qui gagne la Star Academy ?",
    "c": [
     "Le jury",
     "Les professeurs",
     "Le candidat avec le plus de votes",
     "Le public"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tv_008",
  "cat": "tv",
  "name": "Les documentaires",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un documentaire ?",
    "c": [
     "Film de fiction",
     "Film non-fictif qui présente des faits réels",
     "Journal télévisé",
     "Reportage"
    ],
    "a": 1
   },
   {
    "q": "Quelle chaîne française est spécialisée dans les documentaires ?",
    "c": [
     "NRJ12",
     "TF1",
     "M6",
     "Arte"
    ],
    "a": 3
   },
   {
    "q": "Quel réalisateur a tourné 'Le Peuple Migrateur' ?",
    "c": [
     "Yann Arthus-Bertrand",
     "Claude Lelouch",
     "Nicolas Vanier",
     "Jacques Perrin"
    ],
    "a": 3
   },
   {
    "q": "Quel documentaire de Al Gore sur le climat a eu un impact mondial ?",
    "c": [
     "Supersize Me",
     "The Cove",
     "Earth",
     "An Inconvenient Truth"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un documentaire animalier ?",
    "c": [
     "Film de fiction animalier",
     "Série animée",
     "Documentaire sur les animaux et la nature",
     "Reportage sportif"
    ],
    "a": 2
   },
   {
    "q": "Quel documentaire a popularisé le réchauffement climatique ?",
    "c": [
     "Our Planet",
     "Before the Flood",
     "The 11th Hour",
     "An Inconvenient Truth"
    ],
    "a": 3
   },
   {
    "q": "Quel réalisateur français est connu pour ses documentaires marins ?",
    "c": [
     "Jean-Michel Cousteau",
     "Jacques Cousteau",
     "Nicolas Hulot",
     "François Sarano"
    ],
    "a": 1
   },
   {
    "q": "Combien d'épisodes compte la série documentaire 'Planète Terre' ?",
    "c": [
     "9",
     "8",
     "11",
     "12"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "tv_009",
  "cat": "tv",
  "name": "Les publicités",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'une publicité télévisée ?",
    "c": [
     "Sponsoring",
     "Message promotionnel diffusé à la télévision",
     "Placement de produit",
     "Film"
    ],
    "a": 1
   },
   {
    "q": "Quel est le spot publicitaire le plus cher de l'histoire ?",
    "c": [
     "Coupe du monde",
     "Super Bowl",
     "Cérémonie des Oscars",
     "Jeux olympiques"
    ],
    "a": 1
   },
   {
    "q": "Combien coûte un spot de 30 secondes au Super Bowl ?",
    "c": [
     "Plusieurs millions de dollars",
     "Quelques centaines de milliers",
     "1 million",
     "Un milliard"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le matraquage publicitaire ?",
    "c": [
     "Campagne ciblée",
     "Répétition excessive d'une publicité",
     "Publicité comparative",
     "Publicité créative"
    ],
    "a": 1
   },
   {
    "q": "Quel est le slogan publicitaire le plus connu ?",
    "c": [
     "Tous ces slogans",
     "Think Different (Apple)",
     "Just Do It (Nike)",
     "I'm Lovin' It (McDonald's)"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un pubard en France ?",
    "c": [
     "Publicité",
     "Spot",
     "Annonceur",
     "Acteur de publicité"
    ],
    "a": 3
   },
   {
    "q": "Quelle marque a le plus gros budget publicitaire mondial ?",
    "c": [
     "Amazon",
     "Procter & Gamble",
     "McDonald's",
     "Coca-Cola"
    ],
    "a": 0
   },
   {
    "q": "En quelle année la première pub TV a-t-elle été diffusée en France ?",
    "c": [
     "1970",
     "1960",
     "1965",
     "1968"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "tv_010",
  "cat": "tv",
  "name": "Les séries policières",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle série policière française est la plus longue ?",
    "c": [
     "Plus belle la vie",
     "Commissaire Moulin",
     "Julie Lescaut",
     "Les Cinq Dernières Minutes"
    ],
    "a": 3
   },
   {
    "q": "Quelle série américaine met en scène des experts du FBI à Quantico ?",
    "c": [
     "NCIS",
     "L'Agence tous risques",
     "CSI",
     "Criminal Minds"
    ],
    "a": 3
   },
   {
    "q": "Quelle série française se déroule à la PJ de Paris ?",
    "c": [
     "Le Bureau des légendes",
     "Engrenages",
     "Les Hommes de l'ombre",
     "Spiral"
    ],
    "a": 1
   },
   {
    "q": "Quel acteur joue Columbo ?",
    "c": [
     "Telly Savalas",
     "Peter Falk",
     "Dennis Weaver",
     "Tony Musante"
    ],
    "a": 1
   },
   {
    "q": "Combien de saisons compte 'New York Police Judiciaire' ?",
    "c": [
     "15",
     "10",
     "Plus de 20",
     "25"
    ],
    "a": 2
   },
   {
    "q": "Quelle série allemande est un succès mondial ?",
    "c": [
     "Le Renard",
     "Alarm für Cobra 11",
     "Derrick",
     "Inspecteur Derrick"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un 'polar' ?",
    "c": [
     "Enquête",
     "Genre littéraire",
     "Roman ou film policier",
     "Série policière"
    ],
    "a": 2
   },
   {
    "q": "Quel acteur joue l'inspecteur Barnaby dans 'Inspecteur Barnaby' ?",
    "c": [
     "John Nettles",
     "Neil Dudgeon",
     "David Jason",
     "John Thaw"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "insolite_001",
  "cat": "insolite",
  "name": "Les sitcoms",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la sitcom française la plus célèbre ?",
    "c": [
     "Caméra Café",
     "H",
     "Un gars, une fille",
     "Kaamelott"
    ],
    "a": 1
   },
   {
    "q": "Quelle sitcom américaine a duré 10 saisons et 236 épisodes ?",
    "c": [
     "Seinfeld",
     "Friends",
     "The Big Bang Theory",
     "How I Met Your Mother"
    ],
    "a": 1
   },
   {
    "q": "Qui a créé 'Friends' ?",
    "c": [
     "Larry David",
     "Tous",
     "David Crane et Marta Kauffman",
     "James Burrows"
    ],
    "a": 2
   },
   {
    "q": "Comment s'appelle le café dans Friends ?",
    "c": [
     "Central Park",
     "Java Joe's",
     "Coffee House",
     "Central Perk"
    ],
    "a": 3
   },
   {
    "q": "Quelle sitcom française met en scène des personnages dans un open space ?",
    "c": [
     "Kaamelott",
     "Les Cordier",
     "H",
     "Caméra Café"
    ],
    "a": 3
   },
   {
    "q": "Quelle sitcom américaine a pour personnage principal Sheldon Cooper ?",
    "c": [
     "The Big Bang Theory",
     "Young Sheldon",
     "Seinfeld",
     "Friends"
    ],
    "a": 0
   },
   {
    "q": "Combien de saisons compte 'The Office (US)' ?",
    "c": [
     "7",
     "10",
     "8",
     "9"
    ],
    "a": 3
   },
   {
    "q": "Quel acteur joue Michael Scott dans The Office US ?",
    "c": [
     "Jenna Fischer",
     "John Krasinski",
     "Steve Carell",
     "Rainn Wilson"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "insolite_002",
  "cat": "insolite",
  "name": "Les extrêmes météo",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est l'endroit le plus froid habité sur Terre ?",
    "c": [
     "Yellowknife (Canada)",
     "Barrow (Alaska)",
     "Oïmiakon (Sibérie)",
     "Vostok (Antarctique)"
    ],
    "a": 2
   },
   {
    "q": "Quelle température record a été enregistrée à Oïmiakon ?",
    "c": [
     "-70 °C",
     "-60 °C",
     "-67,7 °C",
     "-50 °C"
    ],
    "a": 2
   },
   {
    "q": "Quel est l'endroit le plus chaud sur Terre ?",
    "c": [
     "Vallée de la Mort (USA)",
     "Dallol (Éthiopie)",
     "Désert de Libye",
     "Awash (Éthiopie)"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un ouragan de catégorie 5 ?",
    "c": [
     "Ouragan léger",
     "Tempête tropicale",
     "Cyclone",
     "Ouragan avec vents > 252 km/h"
    ],
    "a": 3
   },
   {
    "q": "Quel pays a connu le plus de tornades ?",
    "c": [
     "Chine",
     "Inde",
     "États-Unis",
     "Australie"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le phénomène El Niño ?",
    "c": [
     "Réchauffement anormal du Pacifique",
     "Vent",
     "Refroidissement",
     "Courant marin"
    ],
    "a": 0
   },
   {
    "q": "Quel désert reçoit le plus de précipitations ?",
    "c": [
     "Gobi",
     "Kalahari",
     "Désert d'Atacama",
     "Sahara"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la plus haute vague jamais surfée ?",
    "c": [
     "Plus de 20 mètres",
     "Plus de 25 mètres",
     "Plus de 30 mètres",
     "Plus de 35 mètres"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "insolite_003",
  "cat": "insolite",
  "name": "Les coïncidences",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'une coïncidence ?",
    "c": [
     "Une prédiction",
     "Un signe",
     "Deux événements qui se produisent en même temps par hasard",
     "Un miracle"
    ],
    "a": 2
   },
   {
    "q": "Quelle célèbre coïncidence implique Lincoln et Kennedy ?",
    "c": [
     "Même âge",
     "Morts le même jour",
     "Noms similaires",
     "Élus en 1846 et 1960"
    ],
    "a": 3
   },
   {
    "q": "Comment s'appelle le phénomène de coïncidence significative ?",
    "c": [
     "Hasard",
     "Destin",
     "Sérendipité",
     "Synchronicité"
    ],
    "a": 3
   },
   {
    "q": "Qui a inventé le terme 'synchronicité' ?",
    "c": [
     "Sigmund Freud",
     "Albert Einstein",
     "Wolfgang Pauli",
     "Carl Jung"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'effet Barnum ?",
    "c": [
     "Hasard",
     "Prédiction",
     "Descriptions vagues acceptées comme personnelles",
     "Coïncidence"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la probabilité de gagner au Loto ?",
    "c": [
     "1 sur 19 millions",
     "1 sur 10 millions",
     "1 sur 50 millions",
     "1 sur 5 millions"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle la loi des séries ?",
    "c": [
     "Loi des séries",
     "Loi de la probabilité",
     "Loi de Murphy",
     "Loi du hasard"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la loi de Murphy ?",
    "c": [
     "Loi du hasard",
     "Coïncidence",
     "Prédiction",
     "Tout ce qui peut mal tourner va mal tourner"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "insolite_004",
  "cat": "insolite",
  "name": "Les superstitions",
  "level": "classique",
  "levels": [
   {
    "q": "Quel nombre est considéré comme porte-bonheur dans la culture occidentale ?",
    "c": [
     "13",
     "7",
     "4",
     "17"
    ],
    "a": 1
   },
   {
    "q": "Quel nombre est considéré comme malchanceux ?",
    "c": [
     "8",
     "7",
     "3",
     "13"
    ],
    "a": 3
   },
   {
    "q": "Quel geste conjure le mauvais sort en France ?",
    "c": [
     "Toucher du bois",
     "Croiser les doigts",
     "Jeter du sel",
     "Faire un signe de croix"
    ],
    "a": 0
   },
   {
    "q": "Quel animal noir est associé à la malchance ?",
    "c": [
     "Chat noir",
     "Hibou",
     "Corbeau",
     "Chauve-souris"
    ],
    "a": 0
   },
   {
    "q": "Quel objet cassé apporte 7 ans de malheur ?",
    "c": [
     "Un verre",
     "Une assiette",
     "Un miroir",
     "Une vitre"
    ],
    "a": 2
   },
   {
    "q": "Dans quelle culture le chiffre 4 est-il considéré comme malchanceux ?",
    "c": [
     "Japonaise",
     "Occidentale",
     "Indienne",
     "Afrique"
    ],
    "a": 0
   },
   {
    "q": "Quelle superstition est associée au parapluie ?",
    "c": [
     "Ouvrir un parapluie à l'intérieur porte malheur",
     "Acheter un parapluie",
     "Perdre son parapluie",
     "Prêter son parapluie"
    ],
    "a": 0
   },
   {
    "q": "Quel jour est considéré comme particulièrement malchanceux ?",
    "c": [
     "Mardi 13",
     "Vendredi 13",
     "Lundi 13",
     "Jeudi 13"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "insolite_005",
  "cat": "insolite",
  "name": "Les records insolites",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est l'homme le plus grand de l'histoire ?",
    "c": [
     "Sultan Kösen (2,51 m)",
     "John Rogan (2,68 m)",
     "Robert Wadlow (2,72 m)",
     "Angus MacAskill (2,36 m)"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la femme la plus grande du monde ?",
    "c": [
     "Uljana Semjonova (2,13 m)",
     "Yao Defen (2,34 m)",
     "Sandy Allen (2,32 m)",
     "Zeng Jinlian (2,46 m)"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la plus longue chanson jamais enregistrée ?",
    "c": [
     "Thru These Walls",
     "4'33\"",
     "In C",
     "The Rise and Fall of Bossanova"
    ],
    "a": 3
   },
   {
    "q": "Quel est le record du plus long nom de famille ?",
    "c": [
     "Williams",
     "Smith",
     "Jones",
     "Hubert Blaine Wolfeschlegelsteinhausenbergerdorff..."
    ],
    "a": 3
   },
   {
    "q": "Combien de records du monde le Guinness World Records compte-t-il ?",
    "c": [
     "Plus de 20 000",
     "Plus de 40 000",
     "Plus de 60 000",
     "Plus de 10 000"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la durée du plus long baiser ?",
    "c": [
     "Plus de 48 heures",
     "Plus de 12 heures",
     "Plus de 24 heures",
     "Plus de 58 heures"
    ],
    "a": 3
   },
   {
    "q": "Qui détient le record du plus grand nombre de tatouages ?",
    "c": [
     "Tom Leppard",
     "Ethan Franklin",
     "Lucky Diamond Rich",
     "Gregory McLaren"
    ],
    "a": 2
   },
   {
    "q": "Quel est le record du monde de jonglage avec le plus d'objets ?",
    "c": [
     "15 balles",
     "14 anneaux",
     "10 balles",
     "12 massues"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "insolite_006",
  "cat": "insolite",
  "name": "Les mystères",
  "level": "classique",
  "levels": [
   {
    "q": "Quel mystère entoure le Triangle des Bermudes ?",
    "c": [
     "Disparitions inexpliquées de navires et d'avions",
     "Monstre marin",
     "Trésor caché",
     "Portail temporel"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le monstre du Loch Ness ?",
    "c": [
     "Serpent de mer",
     "Poisson géant",
     "Dinosaure",
     "Créature légendaire dans un lac écossais"
    ],
    "a": 3
   },
   {
    "q": "Où se trouve le Triangle des Bermudes ?",
    "c": [
     "Entre Floride, Bermudes et Porto Rico",
     "Pacifique",
     "Caraïbes",
     "Atlantique Nord"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le Yeti ?",
    "c": [
     "Créature légendaire de l'Himalaya",
     "Homme des neiges",
     "Singe",
     "Ours"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que les lignes de Nazca au Pérou ?",
    "c": [
     "Tombeaux",
     "Canaux",
     "Routes",
     "Géoglyphes anciens dans le désert"
    ],
    "a": 3
   },
   {
    "q": "Quelle civilisation a construit les lignes de Nazca ?",
    "c": [
     "Les Incas",
     "Les Paracas",
     "La culture Nazca",
     "Les Mayas"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le mystère de Stonehenge ?",
    "c": [
     "Observatoire",
     "Cercle de pierres préhistorique dont la fonction est inconnue",
     "Temple",
     "Tombeau"
    ],
    "a": 1
   },
   {
    "q": "Où se trouve Stonehenge ?",
    "c": [
     "Irlande",
     "Angleterre",
     "France",
     "Écosse"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "insolite_007",
  "cat": "insolite",
  "name": "Les fêtes insolites",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle fête espagnole consiste à lancer des tomates ?",
    "c": [
     "La Tomatina",
     "La Feria",
     "Les Fallas",
     "La San Fermín"
    ],
    "a": 0
   },
   {
    "q": "Où a lieu la Tomatina ?",
    "c": [
     "Buñol (Espagne)",
     "Barcelone",
     "Valence",
     "Madrid"
    ],
    "a": 0
   },
   {
    "q": "Quelle fête thaïlandaise consiste à asperger d'eau les passants ?",
    "c": [
     "Yi Peng",
     "Songkran (Nouvel An thaï)",
     "Phi Ta Khon",
     "Loy Krathong"
    ],
    "a": 1
   },
   {
    "q": "Quelle fête britannique célèbre l'échec du complot des poudres ?",
    "c": [
     "May Day",
     "Boxing Day",
     "Guy Fawkes Night (Bonfire Night)",
     "Halloween"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la conspiration des poudres a-t-elle eu lieu ?",
    "c": [
     "1605",
     "1599",
     "1610",
     "1600"
    ],
    "a": 0
   },
   {
    "q": "Quelle fête allemande dure plusieurs jours et célèbre la bière ?",
    "c": [
     "Carnaval",
     "Weihnachten",
     "Fête de la bière",
     "Oktoberfest"
    ],
    "a": 3
   },
   {
    "q": "Où se déroule l'Oktoberfest ?",
    "c": [
     "Francfort",
     "Hambourg",
     "Munich",
     "Berlin"
    ],
    "a": 2
   },
   {
    "q": "Quelle fête japonaise honore les ancêtres avec des danses ?",
    "c": [
     "Matsuri",
     "Hanami",
     "Obon",
     "Shogatsu"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "insolite_008",
  "cat": "insolite",
  "name": "Les musées étranges",
  "level": "classique",
  "levels": [
   {
    "q": "Où se trouve le Musée des Égouts de Paris ?",
    "c": [
     "Bordeaux",
     "Marseille",
     "Lyon",
     "Paris"
    ],
    "a": 3
   },
   {
    "q": "Quel musée étrange existe au Japon ?",
    "c": [
     "Musée du pain",
     "Musée de l'eau",
     "Musée du fromage",
     "Musée du caca (Unko Museum)"
    ],
    "a": 3
   },
   {
    "q": "Où se trouve le Musée de la Moutarde ?",
    "c": [
     "Dijon",
     "Bordeaux",
     "Paris",
     "Lyon"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le Musée des Momies de Guanajuato ?",
    "c": [
     "Musée présentant des corps momifiés naturellement",
     "Musée d'histoire",
     "Musée de cire",
     "Musée d'art"
    ],
    "a": 0
   },
   {
    "q": "Où se trouve le Musée du Faux (de faux tableaux) ?",
    "c": [
     "Londres",
     "Paris",
     "New York",
     "Bruxelles"
    ],
    "a": 1
   },
   {
    "q": "Quel musée insolite se trouve à Zagreb en Croatie ?",
    "c": [
     "Musée du cœur",
     "Musée de l'amour",
     "Musée des Relations Brisées",
     "Musée du divorce"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le Museum of Jurassic Technology à Los Angeles ?",
    "c": [
     "Musée d'histoire naturelle",
     "Musée éclectique et absurde",
     "Musée de la technologie",
     "Musée d'art"
    ],
    "a": 1
   },
   {
    "q": "Où se trouve le Musée du Freesbee ?",
    "c": [
     "Massachusetts (USA)",
     "Californie",
     "New York",
     "Floride"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "insolite_009",
  "cat": "insolite",
  "name": "Les traditions bizarres",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle tradition écossaise consiste à lancer un tronc d'arbre ?",
    "c": [
     "Le lancer de poids",
     "Le lancer de tronc (Caber toss)",
     "Le lancer de marteau",
     "Le lancer de disque"
    ],
    "a": 1
   },
   {
    "q": "Quelle tradition en Inde consiste à se jeter du lait sur la tête ?",
    "c": [
     "Fête du lait",
     "Pongal",
     "Diwali",
     "Holi"
    ],
    "a": 0
   },
   {
    "q": "Quelle tradition japonaise consiste à manger du fugu (poisson-globe) ?",
    "c": [
     "Sashimi",
     "Un plat dangereux nécessitant un chef certifié",
     "Sushi",
     "Tempura"
    ],
    "a": 1
   },
   {
    "q": "Quelle tradition française implique de s'embrasser sous le gui ?",
    "c": [
     "La galette des rois",
     "Les crêpes de la Chandeleur",
     "Le baiser sous le gui au Nouvel An",
     "Le muguet du 1er mai"
    ],
    "a": 2
   },
   {
    "q": "Quelle tradition en Belgique consiste à jeter des chats du haut d'un beffroi ?",
    "c": [
     "Le Kattenstoet (fête des chats) à Ypres",
     "Procession",
     "Carnaval",
     "Fête des chats"
    ],
    "a": 0
   },
   {
    "q": "Quelle tradition espagnole consiste à courir devant des taureaux ?",
    "c": [
     "Les San Fermín à Pampelune",
     "La corrida",
     "Les taureaux de feu",
     "La feria"
    ],
    "a": 0
   },
   {
    "q": "Quelle tradition amérindienne implique une hutte de sudation ?",
    "c": [
     "Le sweat lodge",
     "Le potlatch",
     "La danse du soleil",
     "Le pow-wow"
    ],
    "a": 0
   },
   {
    "q": "Quelle tradition tibétaine consiste à exposer les morts aux vautours ?",
    "c": [
     "L'incinération",
     "L'enterrement céleste",
     "La crémation",
     "L'inhumation"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "insolite_010",
  "cat": "insolite",
  "name": "Les phénomènes paranormaux",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un phénomène paranormal ?",
    "c": [
     "Hasard",
     "Événement qui dépasse les lois scientifiques connues",
     "Miracle",
     "Coïncidence"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une OVNI ?",
    "c": [
     "Objet volant non identifié",
     "Vaisseau spatial",
     "Extraterrestre",
     "Soucoupe volante"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un fantôme selon les croyances populaires ?",
    "c": [
     "Ombre",
     "Esprit d'un défunt qui apparaît aux vivants",
     "Apparition",
     "Hallucination"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la télépathie ?",
    "c": [
     "Médium",
     "Communication par la pensée",
     "Hypnose",
     "Lire dans les pensées"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un médium ?",
    "c": [
     "Personne qui prétend communiquer avec les esprits",
     "Voyant",
     "Magicien",
     "Sorcier"
    ],
    "a": 0
   },
   {
    "q": "Quel événement de 1947 au Nouveau-Mexique est lié aux OVNIs ?",
    "c": [
     "L'incident de Rendlesham",
     "L'incident de Kecksburg",
     "L'incident de Roswell",
     "L'incident d'Aurora"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le triangle des Bermudes ?",
    "c": [
     "Zone de disparitions mystérieuses",
     "Zone de formation",
     "Zone militaire",
     "Zone protégée"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la voyance ?",
    "c": [
     "Médium",
     "Prétention de prédire l'avenir",
     "Clairvoyance",
     "Télépathie"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "societe_001",
  "cat": "societe",
  "name": "Les lois absurdes",
  "level": "classique",
  "levels": [
   {
    "q": "En France, quelle loi absurde interdit d'appeler un cochon Napoléon ?",
    "c": [
     "Arrêté municipal",
     "Aucune, c'est une légende urbaine",
     "Loi de 1804",
     "Code civil"
    ],
    "a": 1
   },
   {
    "q": "Dans quel pays est-il interdit de mâcher du chewing-gum ?",
    "c": [
     "Singapour",
     "États-Unis",
     "Japon",
     "France"
    ],
    "a": 0
   },
   {
    "q": "Quelle loi française interdit aux femmes de porter un pantalon ?",
    "c": [
     "Abrogée en 2013",
     "Supprimée en 1900",
     "Toujours en vigueur",
     "Jamais existé"
    ],
    "a": 0
   },
   {
    "q": "Dans quel pays est-il interdit de mourir dans certaines villes ?",
    "c": [
     "Longyearbyen (Norvège)",
     "Londres",
     "New York",
     "Paris"
    ],
    "a": 0
   },
   {
    "q": "Quelle loi étrange existe en Arizona (USA) ?",
    "c": [
     "Interdiction de courir",
     "Interdiction de dormir",
     "Interdiction de chasser les chameaux dans le désert",
     "Interdiction de chanter"
    ],
    "a": 2
   },
   {
    "q": "Quelle loi suisse interdit de... ?",
    "c": [
     "Fumer dans les lieux publics",
     "Conduire sans permis",
     "Tirer des coups de feu dans les élevages de poulets",
     "Boire de l'alcool"
    ],
    "a": 2
   },
   {
    "q": "Dans quel état américain est-il interdit de vendre des voitures le dimanche ?",
    "c": [
     "Michigan",
     "Floride",
     "Californie",
     "Texas"
    ],
    "a": 0
   },
   {
    "q": "Quelle loi absurde française interdisait d'embrasser dans le métro ?",
    "c": [
     "Toujours en vigueur",
     "A existé jusqu'à la fin du XXe siècle",
     "Jamais existé",
     "Annulée en 1950"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "societe_002",
  "cat": "societe",
  "name": "La Démocratie",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la démocratie ?",
    "c": [
     "Système politique où le peuple est souverain",
     "Oligarchie",
     "Monarchie",
     "Dictature"
    ],
    "a": 0
   },
   {
    "q": "Où la démocratie a-t-elle été inventée ?",
    "c": [
     "Athènes (Grèce antique)",
     "Rome",
     "Londres",
     "Paris"
    ],
    "a": 0
   },
   {
    "q": "En quelle année la démocratie athénienne a-t-elle été établie ?",
    "c": [
     "600 av. J.-C.",
     "300 av. J.-C.",
     "508 av. J.-C.",
     "400 av. J.-C."
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une démocratie représentative ?",
    "c": [
     "Suffrage universel",
     "Les citoyens élisent des représentants",
     "Dictature",
     "Démocratie directe"
    ],
    "a": 1
   },
   {
    "q": "Quelles sont les cinq grandes démocraties occidentales ?",
    "c": [
     "France, Chine, Russie, USA, UK",
     "France, Royaume-Uni, États-Unis, Allemagne, Canada",
     "Allemagne, Autriche, Suisse, Belgique, Luxembourg",
     "France, Algérie, Maroc, Tunisie, Sénégal"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le suffrage universel ?",
    "c": [
     "Vote à bulletin secret",
     "Droit de vote pour tous les citoyens",
     "Vote limité",
     "Vote obligatoire"
    ],
    "a": 1
   },
   {
    "q": "En quelle année les femmes ont-elles obtenu le droit de vote en France ?",
    "c": [
     "1936",
     "1948",
     "1944",
     "1950"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une république ?",
    "c": [
     "Régime politique sans monarque",
     "Démocratie",
     "Dictature",
     "Monarchie"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "societe_003",
  "cat": "societe",
  "name": "L'Écologie",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que l'écologie ?",
    "c": [
     "Économie verte",
     "Protection de la nature",
     "Développement durable",
     "Science des relations entre les êtres vivants et leur environnement"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'empreinte carbone ?",
    "c": [
     "Déchet",
     "Recyclage",
     "Pollution",
     "Quantité de CO2 émise par une activité"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'effet de serre ?",
    "c": [
     "Gaz qui retiennent la chaleur dans l'atmosphère",
     "Pollution",
     "Vague de chaleur",
     "Changement climatique"
    ],
    "a": 0
   },
   {
    "q": "Quel gaz à effet de serre est le plus émis par les activités humaines ?",
    "c": [
     "CO2",
     "Méthane",
     "Protoxyde d'azote",
     "Vapeur d'eau"
    ],
    "a": 0
   },
   {
    "q": "Que signifie le recyclage ?",
    "c": [
     "Transformer des déchets en nouveaux produits",
     "Enterrer",
     "Jeter",
     "Brûler"
    ],
    "a": 0
   },
   {
    "q": "Quel pays a produit le plus d'émissions de CO2 en 2023 ?",
    "c": [
     "Inde",
     "États-Unis",
     "Russie",
     "Chine"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la biodiversité ?",
    "c": [
     "Variété des espèces vivantes sur Terre",
     "Océans",
     "Forêts",
     "Nombre d'animaux"
    ],
    "a": 0
   },
   {
    "q": "En quelle année l'Accord de Paris sur le climat a-t-il été signé ?",
    "c": [
     "2020",
     "2018",
     "2015",
     "2012"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "societe_004",
  "cat": "societe",
  "name": "L'Économie",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que le PIB ?",
    "c": [
     "Revenu national",
     "Produit intérieur brut (valeur des biens et services)",
     "Salaire",
     "Impôt"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le taux de chômage ?",
    "c": [
     "Emploi",
     "Population inactive",
     "Pourcentage de la population active sans emploi",
     "Nombre de chômeurs"
    ],
    "a": 2
   },
   {
    "q": "Que signifie l'inflation ?",
    "c": [
     "Baisse des prix",
     "Hausse généralisée des prix",
     "Augmentation des salaires",
     "Crise économique"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un impôt ?",
    "c": [
     "Prélèvement obligatoire pour financer l'État",
     "Taxe",
     "Redevance",
     "Contribution"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la monnaie officielle de l'Union européenne ?",
    "c": [
     "Le dollar",
     "La livre",
     "L'euro",
     "Le franc"
    ],
    "a": 2
   },
   {
    "q": "En quelle année l'euro a-t-il été introduit ?",
    "c": [
     "1998",
     "1999 (virtuel) puis 2002 (pièces/billets)",
     "2000",
     "2001"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une banque centrale ?",
    "c": [
     "Assurance",
     "Institution qui gère la politique monétaire d'un pays",
     "Caisse d'épargne",
     "Banque commerciale"
    ],
    "a": 1
   },
   {
    "q": "Quel économiste a écrit 'La Richesse des nations' ?",
    "c": [
     "Karl Marx",
     "Adam Smith",
     "John Maynard Keynes",
     "Milton Friedman"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "societe_005",
  "cat": "societe",
  "name": "Les droits humains",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la Déclaration universelle des droits de l'homme ?",
    "c": [
     "Constitution",
     "Loi",
     "Document proclamant les droits fondamentaux",
     "Traité"
    ],
    "a": 2
   },
   {
    "q": "En quelle année la DUDH a-t-elle été adoptée ?",
    "c": [
     "1950",
     "1939",
     "1945",
     "1948"
    ],
    "a": 3
   },
   {
    "q": "Quelle organisation a adopté la DUDH ?",
    "c": [
     "ONU",
     "Conseil de l'Europe",
     "UNESCO",
     "OTAN"
    ],
    "a": 0
   },
   {
    "q": "Combien d'articles contient la DUDH ?",
    "c": [
     "25",
     "20",
     "40",
     "30"
    ],
    "a": 3
   },
   {
    "q": "Quel était le premier droit de l'homme proclamé en France en 1789 ?",
    "c": [
     "Droit de vote",
     "DDHC (Déclaration des droits de l'homme et du citoyen)",
     "Égalité",
     "Liberté d'expression"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la liberté d'expression ?",
    "c": [
     "Droit de manifester",
     "Droit de vote",
     "Droit de se réunir",
     "Droit d'exprimer ses opinions sans censure"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le droit d'asile ?",
    "c": [
     "Protection accordée à un réfugié politique",
     "Droit de voyager",
     "Droit de travailler",
     "Droit de vote"
    ],
    "a": 0
   },
   {
    "q": "Quelle organisation défend les droits humains mondialement ?",
    "c": [
     "Greenpeace",
     "Médecins sans frontières",
     "Croix-Rouge",
     "Amnesty International"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "societe_006",
  "cat": "societe",
  "name": "La Mondialisation",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la mondialisation ?",
    "c": [
     "Commerce international",
     "Globalisation",
     "Interdépendance croissante des économies et sociétés",
     "Ouverture des frontières"
    ],
    "a": 2
   },
   {
    "q": "Quelle organisation régule le commerce mondial ?",
    "c": [
     "FMI",
     "OMC (Organisation mondiale du commerce)",
     "ONU",
     "Banque mondiale"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une multinationale ?",
    "c": [
     "Entreprise présente dans plusieurs pays",
     "Start-up",
     "PME",
     "Entreprise locale"
    ],
    "a": 0
   },
   {
    "q": "Quel pays est le plus grand exportateur mondial ?",
    "c": [
     "Allemagne",
     "Chine",
     "États-Unis",
     "Japon"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la délocalisation ?",
    "c": [
     "Fermeture",
     "Transfert d'activités vers un pays étranger",
     "Exportation",
     "Importation"
    ],
    "a": 1
   },
   {
    "q": "Quel accord commercial a été signé entre USA, Canada et Mexique ?",
    "c": [
     "USMCA (nouvel ALENA)",
     "Partenariat transpacifique",
     "Trait",
     "Accord de libre-échange"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le protectionnisme ?",
    "c": [
     "Politique qui protège l'économie nationale",
     "Libre-échange",
     "Ouverture",
     "Mondialisation"
    ],
    "a": 0
   },
   {
    "q": "Quelle conférence a établi le système monétaire international en 1944 ?",
    "c": [
     "Yalta",
     "Bretton Woods",
     "Versailles",
     "Genève"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "societe_007",
  "cat": "societe",
  "name": "Les migrations",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'un migrant ?",
    "c": [
     "Touriste",
     "Personne qui se déplace d'un pays à un autre",
     "Expatrié",
     "Réfugié"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un réfugié ?",
    "c": [
     "Migrant économique",
     "Étudiant",
     "Touriste",
     "Personne fuyant la guerre ou les persécutions"
    ],
    "a": 3
   },
   {
    "q": "Quelle organisation définit le statut de réfugié ?",
    "c": [
     "ONU",
     "Croix-Rouge",
     "UNESCO",
     "HCR (Haut Commissariat pour les Réfugiés)"
    ],
    "a": 3
   },
   {
    "q": "Combien de réfugiés y a-t-il dans le monde ?",
    "c": [
     "Plus de 50 millions",
     "Plus de 30 millions",
     "Plus de 10 millions",
     "Plus de 20 millions"
    ],
    "a": 1
   },
   {
    "q": "Quel pays accueille le plus de réfugiés ?",
    "c": [
     "France",
     "Turquie",
     "États-Unis",
     "Allemagne"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le droit d'asile ?",
    "c": [
     "Permis de séjour",
     "Droit de travailler",
     "Droit de vote",
     "Protection accordée aux réfugiés politiques"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la Convention de Genève de 1951 ?",
    "c": [
     "Traité commercial",
     "Traité de paix",
     "Traité définissant le statut de réfugié",
     "Convention sur le climat"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un passeport ?",
    "c": [
     "Carte d'identité",
     "Permis",
     "Visa",
     "Document d'identité pour voyager à l'étranger"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "societe_008",
  "cat": "societe",
  "name": "Les inégalités",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qu'une inégalité sociale ?",
    "c": [
     "Différence de poids",
     "Différence d'accès aux ressources et opportunités",
     "Différence de taille",
     "Différence d'âge"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le coefficient de Gini ?",
    "c": [
     "Indice de pauvreté",
     "Mesure des inégalités de revenus",
     "Taux de chômage",
     "PIB"
    ],
    "a": 1
   },
   {
    "q": "Quel pourcentage des richesses mondiales possède le 1% le plus riche ?",
    "c": [
     "Près de 30%",
     "Près de 70%",
     "Près de 20%",
     "Près de 50%"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la pauvreté selon la Banque mondiale ?",
    "c": [
     "Vivre avec moins de 5 $ par jour",
     "Vivre avec moins de 1 $ par jour",
     "Vivre avec moins de 2,15 $ par jour",
     "Vivre avec moins de 10 $ par jour"
    ],
    "a": 2
   },
   {
    "q": "Quel pays a le plus fort taux d'inégalités ?",
    "c": [
     "Brésil",
     "Afrique du Sud",
     "États-Unis",
     "Inde"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la discrimination ?",
    "c": [
     "Différence",
     "Préjugé",
     "Traitement inégal basé sur des critères injustes",
     "Stéréotype"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'égalité des chances ?",
    "c": [
     "Justice sociale",
     "Égalité des résultats",
     "Égalité de traitement",
     "Principe où chacun peut réussir indépendamment de ses origines"
    ],
    "a": 3
   },
   {
    "q": "Quelle organisation mesure les inégalités mondiales ?",
    "c": [
     "FMI",
     "OCDE",
     "Banque mondiale",
     "ONU (PNUD)"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "voyage_001",
  "cat": "societe",
  "name": "La Laïcité",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce que la laïcité ?",
    "c": [
     "Séparation de l'État et des religions",
     "Athéisme d'État",
     "Abolition des religions",
     "Liberté religieuse"
    ],
    "a": 0
   },
   {
    "q": "Quelle loi française de 1905 a établi la laïcité ?",
    "c": [
     "Loi sur les associations",
     "Loi sur l'école",
     "Loi sur la liberté de conscience",
     "Loi de séparation des Églises et de l'État"
    ],
    "a": 3
   },
   {
    "q": "Quel pays a inventé la laïcité moderne ?",
    "c": [
     "États-Unis",
     "Mexique",
     "France",
     "Turquie"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la liberté de conscience ?",
    "c": [
     "Droit d'expression",
     "Droit de croire ou ne pas croire",
     "Droit de vote",
     "Droit de réunion"
    ],
    "a": 1
   },
   {
    "q": "En quelle année la laïcité a-t-elle été inscrite dans la Constitution française ?",
    "c": [
     "1789",
     "1946 (IVe République)",
     "1905",
     "1958 (Ve République)"
    ],
    "a": 1
   },
   {
    "q": "Quel pays est un exemple de laïcité stricte ?",
    "c": [
     "France",
     "Royaume-Uni",
     "Italie",
     "Allemagne"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le fait religieux dans l'espace public ?",
    "c": [
     "Rite",
     "Culte",
     "Expression de croyances dans la sphère publique",
     "Prière"
    ],
    "a": 2
   },
   {
    "q": "Quelle école publique française a été au cœur du débat sur le voile ?",
    "c": [
     "L'école laïque",
     "L'école privée",
     "L'école publique",
     "L'école catholique"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "voyage_002",
  "cat": "voyage",
  "name": "L'Europe",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de pays membres de l'Union européenne (2024) ?",
    "c": [
     "30",
     "27",
     "25",
     "28"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la capitale de l'Union européenne ?",
    "c": [
     "Bruxelles",
     "Francfort",
     "Luxembourg",
     "Strasbourg"
    ],
    "a": 0
   },
   {
    "q": "En quelle année la CEE a-t-elle été fondée ?",
    "c": [
     "1948",
     "1960",
     "1957",
     "1950"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que Schengen ?",
    "c": [
     "Monnaie",
     "Pays",
     "Traité",
     "Espace de libre circulation sans frontières intérieures"
    ],
    "a": 3
   },
   {
    "q": "Combien de pays font partie de l'espace Schengen ?",
    "c": [
     "22",
     "30",
     "27",
     "25"
    ],
    "a": 2
   },
   {
    "q": "Quelle monnaie utilise l'Union européenne ?",
    "c": [
     "L'euro",
     "Le franc suisse",
     "Le dollar",
     "La livre"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le Parlement européen ?",
    "c": [
     "Commission européenne",
     "Conseil de l'UE",
     "Cour de justice",
     "Institution législative de l'UE élue au suffrage universel"
    ],
    "a": 3
   },
   {
    "q": "Quel pays n'est pas membre de l'UE mais utilise l'euro ?",
    "c": [
     "Suisse",
     "Royaume-Uni",
     "Monaco",
     "Norvège"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "voyage_003",
  "cat": "voyage",
  "name": "L'Asie",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de pays compte l'Asie ?",
    "c": [
     "50",
     "48",
     "40",
     "30"
    ],
    "a": 1
   },
   {
    "q": "Quel est le plus grand pays d'Asie ?",
    "c": [
     "Inde",
     "Chine",
     "Kazakhstan",
     "Russie (partie asiatique)"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus haut sommet d'Asie ?",
    "c": [
     "Le K2",
     "Le Lhotse",
     "L'Everest (8 849 m)",
     "L'Annapurna"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la plus grande ville d'Asie ?",
    "c": [
     "Tokyo",
     "Shanghai",
     "Mumbai",
     "Pékin"
    ],
    "a": 0
   },
   {
    "q": "Quel désert d'Asie est le plus grand ?",
    "c": [
     "Le désert de Gobi",
     "Le Taklamakan",
     "Le Karakoum",
     "Le Rub al-Khali"
    ],
    "a": 0
   },
   {
    "q": "Quel fleuve asiatique est le plus long ?",
    "c": [
     "Le Yangtsé",
     "L'Indus",
     "Le Mékong",
     "Le Gange"
    ],
    "a": 0
   },
   {
    "q": "Quel pays d'Asie du Sud-Est est un archipel de 17 000 îles ?",
    "c": [
     "Indonésie",
     "Malaisie",
     "Philippines",
     "Japon"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la religion la plus pratiquée en Asie ?",
    "c": [
     "Bouddhisme",
     "Islam",
     "Christianisme",
     "Hindouisme"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "voyage_004",
  "cat": "voyage",
  "name": "L'Afrique",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de pays compte l'Afrique ?",
    "c": [
     "50",
     "52",
     "54",
     "48"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus grand pays d'Afrique ?",
    "c": [
     "République démocratique du Congo",
     "Soudan",
     "Algérie",
     "Libye"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus long fleuve d'Afrique ?",
    "c": [
     "Le Congo",
     "Le Nil",
     "Le Zambèze",
     "Le Niger"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus haute montagne d'Afrique ?",
    "c": [
     "Le Ras Dashan",
     "Le mont Stanley",
     "Le Kilimandjaro",
     "Le mont Kenya"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la plus grande ville d'Afrique ?",
    "c": [
     "Johannesburg",
     "Kinshasa",
     "Lagos",
     "Le Caire"
    ],
    "a": 2
   },
   {
    "q": "Quel désert couvre une grande partie de l'Afrique du Nord ?",
    "c": [
     "Le Désert du Sinaï",
     "Le Kalahari",
     "Le Sahara",
     "Le Namib"
    ],
    "a": 2
   },
   {
    "q": "Quel pays africain est le plus peuplé ?",
    "c": [
     "Éthiopie",
     "République démocratique du Congo",
     "Nigeria",
     "Tanzanie"
    ],
    "a": 2
   },
   {
    "q": "Quel parc national africain est le plus célèbre pour les safaris ?",
    "c": [
     "Parc Kruger (Afrique du Sud)",
     "Parc de Maasai Mara (Kenya)",
     "Parc du Serengeti (Tanzanie)",
     "Parc de Chobe (Botswana)"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "voyage_005",
  "cat": "voyage",
  "name": "L'Amérique latine",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de pays compte l'Amérique latine ?",
    "c": [
     "18",
     "20",
     "25",
     "15"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus grande forêt du monde en Amérique latine ?",
    "c": [
     "La forêt des Andes",
     "Le Mato Grosso",
     "L'Amazonie",
     "La forêt atlantique"
    ],
    "a": 2
   },
   {
    "q": "Quelle langue est la plus parlée en Amérique latine ?",
    "c": [
     "Anglais",
     "Français",
     "Portugais",
     "Espagnol"
    ],
    "a": 3
   },
   {
    "q": "Quel pays d'Amérique latine est le plus peuplé ?",
    "c": [
     "Colombie",
     "Mexique",
     "Brésil",
     "Argentine"
    ],
    "a": 2
   },
   {
    "q": "Quel site archéologique inca est le plus visité ?",
    "c": [
     "Ollantaytambo",
     "Choquequirao",
     "Machu Picchu",
     "Sacsayhuamán"
    ],
    "a": 2
   },
   {
    "q": "Quelle danse est emblématique de l'Amérique latine ?",
    "c": [
     "La samba",
     "La salsa",
     "Le tango",
     "La bachata"
    ],
    "a": 1
   },
   {
    "q": "Quel désert d'Amérique latine est le plus aride du monde ?",
    "c": [
     "Sechura (Pérou)",
     "Atacama (Chili)",
     "Sonora (Mexique)",
     "Patagonie (Argentine)"
    ],
    "a": 1
   },
   {
    "q": "Quel fleuve traverse l'Amazonie ?",
    "c": [
     "Le São Francisco",
     "L'Amazone",
     "Le Paraná",
     "L'Orénoque"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "voyage_006",
  "cat": "voyage",
  "name": "L'Océanie",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de pays compte l'Océanie ?",
    "c": [
     "18",
     "10",
     "20",
     "14"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus grand pays d'Océanie ?",
    "c": [
     "Fidji",
     "Nouvelle-Zélande",
     "Papouasie-Nouvelle-Guinée",
     "Australie"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus petit pays d'Océanie ?",
    "c": [
     "Nauru",
     "Palau",
     "Vanuatu",
     "Tuvalu"
    ],
    "a": 0
   },
   {
    "q": "Quel peuple autochtone habite la Nouvelle-Zélande ?",
    "c": [
     "Mélanésiens",
     "Maoris",
     "Papous",
     "Aborigènes"
    ],
    "a": 1
   },
   {
    "q": "Quel peuple autochtone habite l'Australie ?",
    "c": [
     "Tasmaniens",
     "Maoris",
     "Insulaires du Détroit de Torres",
     "Aborigènes"
    ],
    "a": 3
   },
   {
    "q": "Quel pays d'Océanie est un territoire français d'outre-mer ?",
    "c": [
     "Vanuatu",
     "Samoa",
     "Nouvelle-Calédonie",
     "Fidji"
    ],
    "a": 2
   },
   {
    "q": "Où se trouve la Grande Barrière de Corail ?",
    "c": [
     "Indonésie",
     "Papouasie",
     "Australie",
     "Nouvelle-Zélande"
    ],
    "a": 2
   },
   {
    "q": "Quel animal emblématique d'Australie est marsupial ?",
    "c": [
     "Diable de Tasmanie",
     "Kangourou",
     "Koala",
     "Wombat"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "voyage_007",
  "cat": "voyage",
  "name": "Le Moyen-Orient",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de pays compte le Moyen-Orient ?",
    "c": [
     "17",
     "15",
     "12",
     "20"
    ],
    "a": 0
   },
   {
    "q": "Quel pays du Moyen-Orient est le plus peuplé ?",
    "c": [
     "Iran",
     "Irak",
     "Turquie",
     "Arabie saoudite"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la capitale de l'Arabie saoudite ?",
    "c": [
     "Djeddah",
     "Médine",
     "La Mecque",
     "Riyad"
    ],
    "a": 3
   },
   {
    "q": "Quel détroit relie la mer Méditerranée à la mer Rouge ?",
    "c": [
     "Le détroit d'Hormuz",
     "Les Dardanelles",
     "Le Bosphore",
     "Le canal de Suez"
    ],
    "a": 3
   },
   {
    "q": "Quel fleuve traverse l'Irak ?",
    "c": [
     "L'Indus",
     "Le Nil",
     "Le Jourdain",
     "Le Tigre et l'Euphrate"
    ],
    "a": 3
   },
   {
    "q": "Quel pays du Moyen-Orient est le plus grand producteur de pétrole ?",
    "c": [
     "Arabie saoudite",
     "Iran",
     "Émirats arabes unis",
     "Irak"
    ],
    "a": 0
   },
   {
    "q": "Quelle ville du Moyen-Orient est sacrée pour l'islam ?",
    "c": [
     "La Mecque",
     "Médine",
     "Jérusalem",
     "Toutes ces villes"
    ],
    "a": 3
   },
   {
    "q": "Quel conflit historique oppose Israéliens et Palestiniens ?",
    "c": [
     "Conflit israélo-palestinien",
     "Conflit sunnites-chiites",
     "Guerre du Golfe",
     "Guerre civile"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "voyage_008",
  "cat": "voyage",
  "name": "Les Caraïbes",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'îles compte les Caraïbes ?",
    "c": [
     "Plus de 300",
     "Plus de 1 000",
     "Plus de 500",
     "Plus de 700"
    ],
    "a": 3
   },
   {
    "q": "Quel pays des Caraïbes est le plus visité ?",
    "c": [
     "Jamaïque",
     "Porto Rico",
     "République dominicaine",
     "Cuba"
    ],
    "a": 2
   },
   {
    "q": "Quelle île des Caraïbes est partagée entre Haïti et la République dominicaine ?",
    "c": [
     "Hispaniola",
     "Porto Rico",
     "Cuba",
     "Jamaïque"
    ],
    "a": 0
   },
   {
    "q": "Quelle boisson est originaire des Caraïbes ?",
    "c": [
     "La vodka",
     "Le whisky",
     "La tequila",
     "Le rhum"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus petit pays des Caraïbes ?",
    "c": [
     "Antigua-et-Barbuda",
     "Barbade",
     "Grenade",
     "Saint-Kitts-et-Nevis"
    ],
    "a": 3
   },
   {
    "q": "Quelle île des Caraïbes est un département français ?",
    "c": [
     "Réunion",
     "Guadeloupe",
     "Guyane",
     "Martinique"
    ],
    "a": 1
   },
   {
    "q": "Quelle musique caribéenne est la plus célèbre ?",
    "c": [
     "La salsa",
     "Le reggae",
     "La soca",
     "Le zouk"
    ],
    "a": 1
   },
   {
    "q": "Quel phénomène météo menace régulièrement les Caraïbes ?",
    "c": [
     "Les tornades",
     "Les tsunamis",
     "Les cyclones",
     "Les ouragans"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_001",
  "cat": "sexe",
  "name": "La fellation",
  "level": "adulte",
  "levels": [
   {
    "q": "Quels sont les organes génitaux internes de la femme ?",
    "c": [
     "Reins, ovaires, utérus",
     "Vessie, utérus, anus",
     "Utérus, ovaires, trompes de Fallope, vagin",
     "Vagin, clitoris, anus"
    ],
    "a": 2
   },
   {
    "q": "Quel organe produit les ovules ?",
    "c": [
     "Les ovaires",
     "Le vagin",
     "L'utérus",
     "Les trompes de Fallope"
    ],
    "a": 0
   },
   {
    "q": "Combien de trompes de Fallope une femme possède-t-elle ?",
    "c": [
     "4",
     "2",
     "3",
     "1"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la fonction du vagin ?",
    "c": [
     "Conduit pour les rapports et l'accouchement",
     "Produire des ovules",
     "Abriter le foetus",
     "Produire des hormones"
    ],
    "a": 0
   },
   {
    "q": "Où se trouve le clitoris ?",
    "c": [
     "Sur les grandes lèvres",
     "Sur le col de l'utérus",
     "Partie supérieure de la vulve",
     "À l'intérieur du vagin"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le col de l'utérus ?",
    "c": [
     "L'entrée du vagin",
     "Une trompe",
     "Partie inférieure de l'utérus qui s'ouvre dans le vagin",
     "Le fond de l'utérus"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la taille moyenne de l'utérus ?",
    "c": [
     "4-5 cm de long",
     "10-12 cm de long",
     "15-20 cm de long",
     "7-8 cm de long"
    ],
    "a": 3
   },
   {
    "q": "Combien d'ovocytes une femme a-t-elle à la naissance ?",
    "c": [
     "Environ 500 000",
     "Environ 1 à 2 millions",
     "Environ 10 millions",
     "Environ 100 000"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_002",
  "cat": "sexe",
  "name": "La sodomie",
  "level": "adulte",
  "levels": [
   {
    "q": "Quels sont les principaux organes génitaux masculins ?",
    "c": [
     "Testicules, urètre, vessie",
     "Reins, prostate, pénis",
     "Vessie, testicules, pénis",
     "Testicules, pénis, prostate"
    ],
    "a": 3
   },
   {
    "q": "Quel organe produit les spermatozoïdes ?",
    "c": [
     "Les vésicules séminales",
     "Les testicules",
     "Le pénis",
     "La prostate"
    ],
    "a": 1
   },
   {
    "q": "Où sont situés les testicules ?",
    "c": [
     "Dans la prostate",
     "Dans le scrotum",
     "Dans le pénis",
     "Dans l'abdomen"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la fonction de la prostate ?",
    "c": [
     "Produire des hormones",
     "Produire de l'urine",
     "Produire des spermatozoïdes",
     "Produire le liquide séminal"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'urètre masculin ?",
    "c": [
     "Vaisseau sanguin",
     "Canal qui conduit l'urine et le sperme",
     "Nerf",
     "Muscle"
    ],
    "a": 1
   },
   {
    "q": "Combien de spermatozoïdes produit un homme par jour ?",
    "c": [
     "Plusieurs milliers",
     "Plusieurs centaines",
     "Plusieurs millions",
     "Plusieurs milliards"
    ],
    "a": 2
   },
   {
    "q": "Quel est le rôle du scrotum ?",
    "c": [
     "Réguler la température des testicules",
     "Produire des hormones",
     "Stocker le sperme",
     "Protéger le pénis"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le prépuce ?",
    "c": [
     "Peau qui recouvre le gland du pénis",
     "Partie interne du pénis",
     "Frein du pénis",
     "Base du pénis"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sexe_003",
  "cat": "sexe",
  "name": "L'homosexualité",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la contraception ?",
    "c": [
     "Moyen d'éviter une grossesse non désirée",
     "Méthode pour tomber enceinte",
     "Protection contre les MST",
     "Traitement hormonal"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la méthode contraceptive la plus efficace ?",
    "c": [
     "L'implant et le stérilet",
     "Le préservatif",
     "La pilule",
     "Le retrait"
    ],
    "a": 0
   },
   {
    "q": "Combien de méthodes contraceptives existent ?",
    "c": [
     "5",
     "10",
     "Plus de 15",
     "20"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la contraception d'urgence ?",
    "c": [
     "Stérilet",
     "Implant",
     "Pilule du lendemain à prendre après un rapport",
     "Pilule quotidienne"
    ],
    "a": 2
   },
   {
    "q": "Dans quel délai faut-il prendre la pilule du lendemain ?",
    "c": [
     "Jusqu'à 72 heures après le rapport",
     "Jusqu'à une semaine",
     "Jusqu'à 48 heures",
     "Jusqu'à 24 heures"
    ],
    "a": 0
   },
   {
    "q": "Quelle méthode contraceptive est réversible ?",
    "c": [
     "Seule la pilule",
     "Toutes les méthodes sauf la stérilisation",
     "Aucune",
     "La stérilisation"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'indice de Pearl ?",
    "c": [
     "Taux d'échec d'une méthode contraceptive",
     "Âge de fertilité",
     "Nombre de grossesses",
     "Taux de réussite"
    ],
    "a": 0
   },
   {
    "q": "Quelle contraception nécessite une prescription médicale en France ?",
    "c": [
     "Spermicide",
     "Retrait",
     "Pilule, implant, stérilet, patch, anneau",
     "Préservatif"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_004",
  "cat": "sexe",
  "name": "Le Kamasutra",
  "level": "adulte",
  "levels": [
   {
    "q": "À quoi sert un préservatif ?",
    "c": [
     "Protéger des IST et éviter une grossesse",
     "Éviter uniquement une grossesse",
     "Améliorer le plaisir",
     "Protéger uniquement des IST"
    ],
    "a": 0
   },
   {
    "q": "Quel matériau est utilisé pour la plupart des préservatifs ?",
    "c": [
     "Latex",
     "Caoutchouc naturel",
     "Silicone",
     "Polyuréthane"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la fiabilité du préservatif contre les grossesses ?",
    "c": [
     "Environ 98% en utilisation parfaite",
     "Environ 90%",
     "Environ 99,9%",
     "Environ 85%"
    ],
    "a": 0
   },
   {
    "q": "Le préservatif protège-t-il contre toutes les IST ?",
    "c": [
     "Non, seulement le VIH",
     "Oui, à 100%",
     "Non, certaines IST peuvent se transmettre par contact cutané",
     "Oui, toutes"
    ],
    "a": 2
   },
   {
    "q": "Comment conserver les préservatifs ?",
    "c": [
     "Dans la voiture",
     "Dans un endroit frais et sec",
     "Au réfrigérateur",
     "Dans la poche"
    ],
    "a": 1
   },
   {
    "q": "Peut-on utiliser un préservatif deux fois ?",
    "c": [
     "Non, jamais",
     "Oui, après l'avoir lavé",
     "Oui, une deuxième fois",
     "Oui, une fois retourné"
    ],
    "a": 0
   },
   {
    "q": "Depuis quand le préservatif moderne existe-t-il ?",
    "c": [
     "Années 1950",
     "Début du XXe siècle (latex)",
     "XIXe siècle",
     "Années 1970"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la date de péremption typique d'un préservatif ?",
    "c": [
     "3 à 5 ans",
     "2 ans",
     "1 an",
     "10 ans"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sexe_005",
  "cat": "sexe",
  "name": "La contraception",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le cycle menstruel ?",
    "c": [
     "Période des règles",
     "Période de fertilité",
     "Cycle hormonal",
     "Période de préparation du corps à une éventuelle grossesse"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la durée moyenne d'un cycle menstruel ?",
    "c": [
     "30 jours",
     "28 jours",
     "35 jours",
     "21 jours"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'ovulation ?",
    "c": [
     "Montée d'hormones",
     "Fin du cycle",
     "Libération d'un ovule par l'ovaire",
     "Début des règles"
    ],
    "a": 2
   },
   {
    "q": "Quand a lieu l'ovulation dans un cycle de 28 jours ?",
    "c": [
     "Autour du 14e jour",
     "Autour du 7e jour",
     "Autour du 21e jour",
     "Au 1er jour"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps durent les règles en moyenne ?",
    "c": [
     "3 à 7 jours",
     "10 à 14 jours",
     "1 à 2 jours",
     "7 à 10 jours"
    ],
    "a": 0
   },
   {
    "q": "Quelles hormones régulent le cycle menstruel ?",
    "c": [
     "Adrénaline et cortisol",
     "LH et FSH uniquement",
     "Testostérone et oestrogènes",
     "Oestrogènes et progestérone"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le syndrome prémenstruel (SPM) ?",
    "c": [
     "Après les règles",
     "Pendant les règles",
     "Pendant l'ovulation",
     "Ensemble de symptômes avant les règles"
    ],
    "a": 3
   },
   {
    "q": "À quel âge survient la première menstruation ?",
    "c": [
     "Entre 18 et 20 ans",
     "Entre 8 et 10 ans",
     "Entre 15 et 17 ans",
     "Entre 11 et 14 ans en moyenne"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_006",
  "cat": "sexe",
  "name": "Les MST",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la puberté ?",
    "c": [
     "Développement hormonal",
     "Début de l'adolescence",
     "Croissance",
     "Période de transition entre l'enfance et l'âge adulte"
    ],
    "a": 3
   },
   {
    "q": "À quel âge commence la puberté chez les filles ?",
    "c": [
     "Entre 8 et 13 ans",
     "Entre 12 et 16 ans",
     "Entre 6 et 10 ans",
     "Entre 10 et 15 ans"
    ],
    "a": 0
   },
   {
    "q": "À quel âge commence la puberté chez les garçons ?",
    "c": [
     "Entre 13 et 17 ans",
     "Entre 9 et 14 ans",
     "Entre 7 et 12 ans",
     "Entre 11 et 16 ans"
    ],
    "a": 1
   },
   {
    "q": "Quel est le premier signe de la puberté chez les filles ?",
    "c": [
     "La pousse des poils",
     "L'arrivée des règles",
     "Le développement des seins",
     "La croissance"
    ],
    "a": 2
   },
   {
    "q": "Quel est le premier signe de la puberté chez les garçons ?",
    "c": [
     "L'érection",
     "La mue de la voix",
     "L'augmentation du volume des testicules",
     "La pousse des poils"
    ],
    "a": 2
   },
   {
    "q": "Quelles hormones déclenchent la puberté ?",
    "c": [
     "Les gonadotrophines (LH et FSH)",
     "L'hormone de croissance",
     "Les oestrogènes",
     "La testostérone"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps dure la puberté ?",
    "c": [
     "6 mois à 1 an",
     "1 à 2 ans",
     "5 à 7 ans",
     "Environ 3 à 5 ans"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la poussée de croissance à la puberté ?",
    "c": [
     "Croissance des os",
     "Prise de poids",
     "Accélération de la taille sur 2-3 ans",
     "Développement musculaire"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_007",
  "cat": "sexe",
  "name": "L'anatomie féminine",
  "level": "adulte",
  "levels": [
   {
    "q": "Combien de temps dure une grossesse ?",
    "c": [
     "9 mois (environ 40 semaines)",
     "7 mois",
     "8 mois",
     "10 mois"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle la période de la grossesse ?",
    "c": [
     "La lactation",
     "La parturition",
     "La gestation",
     "La fécondation"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les trois trimestres de la grossesse ?",
    "c": [
     "3 périodes de 2 mois",
     "3 périodes égales",
     "3 périodes de 3 mois chacune",
     "3 périodes de 4 mois"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la nidation ?",
    "c": [
     "Fécondation",
     "Implantation de l'embryon dans l'utérus",
     "Formation du foetus",
     "Début du travail"
    ],
    "a": 1
   },
   {
    "q": "Comment s'appelle le premier trimestre de la grossesse ?",
    "c": [
     "Phase de croissance",
     "Phase de nidation",
     "Phase embryonnaire",
     "Phase foetale"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une échographie obstétricale ?",
    "c": [
     "Test urinaire",
     "Examen pour visualiser le foetus",
     "IRM",
     "Analyse de sang"
    ],
    "a": 1
   },
   {
    "q": "Combien d'échographies sont recommandées en France ?",
    "c": [
     "2",
     "4",
     "3",
     "5"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le congé maternité en France ?",
    "c": [
     "Congé pour le père",
     "Arrêt maladie",
     "Congé pour la mère avant et après l'accouchement",
     "Congé parental"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_008",
  "cat": "sexe",
  "name": "L'anatomie masculine",
  "level": "adulte",
  "levels": [
   {
    "q": "Quels sont les trois phases de l'accouchement ?",
    "c": [
     "Travail, expulsion, délivrance",
     "Dilatation, naissance, allaitement",
     "Travail, naissance, récupération",
     "Contractions, poussée, repos"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le travail lors de l'accouchement ?",
    "c": [
     "Les contractions qui dilatent le col de l'utérus",
     "La sortie du bébé",
     "La poussée",
     "La délivrance du placenta"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps dure le travail en moyenne ?",
    "c": [
     "24 à 48 heures",
     "12 à 24 heures",
     "2 à 4 heures",
     "8 à 12 heures pour un premier enfant"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'une péridurale ?",
    "c": [
     "Anesthésie locale pour accoucher sans douleur",
     "Massage",
     "Anesthésie générale",
     "Piqûre de médicament"
    ],
    "a": 0
   },
   {
    "q": "Comment s'appelle la sortie du bébé ?",
    "c": [
     "Le travail",
     "La délivrance",
     "La nidation",
     "L'expulsion"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la délivrance ?",
    "c": [
     "La naissance du bébé",
     "La fin des contractions",
     "L'expulsion du placenta",
     "La coupure du cordon"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une césarienne ?",
    "c": [
     "Accouchement chirurgical par incision abdominale",
     "Accouchement déclenché",
     "Accouchement par voie basse",
     "Accouchement sous eau"
    ],
    "a": 0
   },
   {
    "q": "Quel pourcentage d'accouchements se fait par césarienne en France ?",
    "c": [
     "Environ 5%",
     "Environ 10%",
     "Environ 20%",
     "Environ 30%"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_009",
  "cat": "sexe",
  "name": "La pornographie",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelle est la principale hormone sexuelle masculine ?",
    "c": [
     "La testostérone",
     "Les oestrogènes",
     "La LH",
     "La progestérone"
    ],
    "a": 0
   },
   {
    "q": "Quelles sont les principales hormones sexuelles féminines ?",
    "c": [
     "Les oestrogènes et la progestérone",
     "La LH et la FSH",
     "L'adrénaline",
     "La testostérone"
    ],
    "a": 0
   },
   {
    "q": "Où est produite la testostérone chez l'homme ?",
    "c": [
     "Dans les glandes surrénales",
     "Dans les testicules",
     "Dans la prostate",
     "Dans le pénis"
    ],
    "a": 1
   },
   {
    "q": "Où sont produits les oestrogènes ?",
    "c": [
     "Dans les trompes",
     "Dans l'utérus",
     "Dans les ovaires",
     "Dans le vagin"
    ],
    "a": 2
   },
   {
    "q": "Quelle hormone déclenche l'ovulation ?",
    "c": [
     "La progestérone",
     "Les oestrogènes",
     "La LH (hormone lutéinisante)",
     "La FSH"
    ],
    "a": 2
   },
   {
    "q": "Quel est le rôle de la progestérone ?",
    "c": [
     "Préparer l'utérus à une grossesse",
     "Provoquer les règles",
     "Déclencher l'ovulation",
     "Produire du lait"
    ],
    "a": 0
   },
   {
    "q": "À quoi sert la FSH ?",
    "c": [
     "Déclencher l'ovulation",
     "Réguler les règles",
     "Produire la testostérone",
     "Stimuler la maturation des follicules ovariens"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un dérèglement hormonal ?",
    "c": [
     "Excès de sucre",
     "Maladie génétique",
     "Arrêt des hormones",
     "Production anormale d'hormones"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_010",
  "cat": "sexe",
  "name": "La virginité",
  "level": "adulte",
  "levels": [
   {
    "q": "Où sont produits les spermatozoïdes ?",
    "c": [
     "Dans les testicules",
     "Dans l'épididyme",
     "Dans la prostate",
     "Dans les vésicules séminales"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps vit un spermatozoïde dans le corps féminin ?",
    "c": [
     "Jusqu'à 5 jours",
     "Jusqu'à une semaine",
     "Jusqu'à 24 heures",
     "Jusqu'à 48 heures"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la taille d'un spermatozoïde ?",
    "c": [
     "Environ 1 micromètre",
     "Environ 50 micromètres",
     "Environ 100 micromètres",
     "Environ 10 micromètres"
    ],
    "a": 1
   },
   {
    "q": "De quoi est composé un spermatozoïde ?",
    "c": [
     "Tête, pièce intermédiaire et flagelle",
     "Tête et corps",
     "Noyau et membrane",
     "Tête et queue"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un spermogramme ?",
    "c": [
     "Analyse de sang",
     "Analyse de la qualité du sperme",
     "Test de fertilité féminine",
     "Examen urinaire"
    ],
    "a": 1
   },
   {
    "q": "Combien de spermatozoïdes contient un éjaculat ?",
    "c": [
     "500 millions à 1 milliard",
     "40 à 300 millions",
     "10 à 40 millions",
     "1 à 10 millions"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'azoospermie ?",
    "c": [
     "Absence de spermatozoïdes dans le sperme",
     "Spermatozoïdes anormaux",
     "Trop de spermatozoïdes",
     "Faible nombre de spermatozoïdes"
    ],
    "a": 0
   },
   {
    "q": "Quelle température affecte la production de spermatozoïdes ?",
    "c": [
     "La pression",
     "Une température trop élevée (au-dessus de 35°C)",
     "L'humidité",
     "Le froid"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_011",
  "cat": "sexe",
  "name": "Les phéromones",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'ovulation ?",
    "c": [
     "Fécondation",
     "Début des règles",
     "Nidation",
     "Libération d'un ovule mature par l'ovaire"
    ],
    "a": 3
   },
   {
    "q": "Quand a lieu l'ovulation dans un cycle régulier de 28 jours ?",
    "c": [
     "Au 7e jour",
     "Au 21e jour",
     "Au 1er jour",
     "Au 14e jour environ"
    ],
    "a": 3
   },
   {
    "q": "Combien d'ovules sont libérés à chaque ovulation ?",
    "c": [
     "Plusieurs",
     "Deux toujours",
     "Aucun",
     "Un seul en général"
    ],
    "a": 3
   },
   {
    "q": "Quelle hormone déclenche l'ovulation ?",
    "c": [
     "La LH (hormone lutéinisante)",
     "La progestérone",
     "La FSH",
     "Les oestrogènes"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps l'ovule est-il viable après l'ovulation ?",
    "c": [
     "48 à 72 heures",
     "6 à 12 heures",
     "2 à 3 jours",
     "12 à 24 heures"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un test d'ovulation ?",
    "c": [
     "Test qui détecte le pic de LH",
     "Échographie",
     "Test de grossesse",
     "Prise de sang"
    ],
    "a": 0
   },
   {
    "q": "Peut-on ressentir l'ovulation ?",
    "c": [
     "Certaines femmes ressentent une douleur légère",
     "Non, jamais",
     "Uniquement en cas de problème",
     "Oui, toujours"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la période fertile ?",
    "c": [
     "Uniquement le jour de l'ovulation",
     "Tout le cycle",
     "La semaine avant les règles",
     "Fenêtre de quelques jours autour de l'ovulation"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_012",
  "cat": "sexe",
  "name": "L'orgasme",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la fécondation ?",
    "c": [
     "Union d'un spermatozoïde et d'un ovule",
     "Division cellulaire",
     "Début de la grossesse",
     "Nidation"
    ],
    "a": 0
   },
   {
    "q": "Où a lieu la fécondation ?",
    "c": [
     "Dans les trompes de Fallope",
     "Dans l'ovaire",
     "Dans le vagin",
     "Dans l'utérus"
    ],
    "a": 0
   },
   {
    "q": "Combien de spermatozoïdes atteignent l'ovule ?",
    "c": [
     "Aucun",
     "Un seul féconde l'ovule",
     "Des centaines",
     "Des milliers"
    ],
    "a": 1
   },
   {
    "q": "Que devient l'ovule après la fécondation ?",
    "c": [
     "Il reste dans la trompe",
     "Il se divise en deux",
     "Il devient un zygote",
     "Il meurt"
    ],
    "a": 2
   },
   {
    "q": "Combien de temps après la fécondation a lieu la nidation ?",
    "c": [
     "Immédiatement",
     "Environ 6 à 10 jours",
     "24 heures",
     "2 à 3 semaines"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un zygote ?",
    "c": [
     "Cellule résultant de la fécondation",
     "Embryon",
     "Ovule fécondé",
     "Foetus"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la conception ?",
    "c": [
     "L'accouchement",
     "Le moment de la fécondation",
     "La nidation",
     "La grossesse"
    ],
    "a": 1
   },
   {
    "q": "Combien de temps les spermatozoïdes mettent-ils pour atteindre l'ovule ?",
    "c": [
     "24 heures",
     "Quelques minutes",
     "Quelques heures",
     "Quelques secondes"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_013",
  "cat": "sexe",
  "name": "Le clitoris",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la pilule contraceptive ?",
    "c": [
     "Médicament",
     "Comprimé hormonal qui empêche l'ovulation",
     "Comprimé qui tue les spermatozoïdes",
     "Comprimé pour les règles"
    ],
    "a": 1
   },
   {
    "q": "Quels hormones contient la pilule combinée ?",
    "c": [
     "Progestérone seule",
     "Testostérone et oestrogènes",
     "LH et FSH",
     "Oestrogènes et progestérone"
    ],
    "a": 3
   },
   {
    "q": "Comment agit la pilule contraceptive ?",
    "c": [
     "En bloquant les spermatozoïdes",
     "En empêchant l'ovulation",
     "En empêchant la nidation",
     "En stérilisant temporairement"
    ],
    "a": 1
   },
   {
    "q": "Quelle est l'efficacité de la pilule en utilisation parfaite ?",
    "c": [
     "Environ 85%",
     "Plus de 99%",
     "Environ 90%",
     "Environ 95%"
    ],
    "a": 1
   },
   {
    "q": "Faut-il une prescription pour la pilule en France ?",
    "c": [
     "Uniquement pour les mineures",
     "Oui, une ordonnance est nécessaire",
     "Non, en vente libre",
     "Non, sauf la pilule d'urgence"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la pilule progestative (micro-pilule) ?",
    "c": [
     "Pilule à double dose",
     "Pilule sans oestrogènes",
     "Pilule d'urgence",
     "Pilule du lendemain"
    ],
    "a": 1
   },
   {
    "q": "Que faire si on oublie une pilule ?",
    "c": [
     "Prendre deux le lendemain",
     "Arrêter la plaquette",
     "Ne rien faire",
     "La prendre dès que possible et utiliser un préservatif"
    ],
    "a": 3
   },
   {
    "q": "La pilule protège-t-elle des IST ?",
    "c": [
     "Oui, comme le préservatif",
     "Non, elle ne protège pas des IST",
     "Oui, totalement",
     "Oui, partiellement"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_014",
  "cat": "sexe",
  "name": "Le vagin",
  "level": "adulte",
  "levels": [
   {
    "q": "Que signifie VIH ?",
    "c": [
     "Virus de l'Immunité",
     "Virus Infectieux Humain",
     "Virus de l'Immunodéficience Humaine",
     "Virus International Humain"
    ],
    "a": 2
   },
   {
    "q": "Que signifie SIDA ?",
    "c": [
     "Système Immunitaire Détruit",
     "Maladie Immunitaire",
     "Syndrome d'ImmunoDéficience Acquise",
     "Syndrome Infectieux Dangereux"
    ],
    "a": 2
   },
   {
    "q": "Comment se transmet le VIH ?",
    "c": [
     "Par le sang, les rapports sexuels et de la mère à l'enfant",
     "Par les poignées de main",
     "Par la salive",
     "Par l'air"
    ],
    "a": 0
   },
   {
    "q": "Existe-t-il un vaccin contre le VIH ?",
    "c": [
     "Oui, depuis 2020",
     "Non, pas encore",
     "Non et cela n'existera jamais",
     "Oui, depuis 2010"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une charge virale indétectable ?",
    "c": [
     "Absence totale de virus",
     "Virus inactif",
     "Guérison du SIDA",
     "Quantité de virus si faible qu'elle est indétectable"
    ],
    "a": 3
   },
   {
    "q": "Que signifie être séropositif ?",
    "c": [
     "Être immunisé",
     "Être porteur du VIH sans avoir développé le SIDA",
     "Être malade",
     "Avoir le SIDA"
    ],
    "a": 1
   },
   {
    "q": "Comment se faire dépister du VIH ?",
    "c": [
     "Par examen urinaire",
     "Par IRM",
     "Par radiographie",
     "Par prise de sang ou test rapide (TROD)"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la Prep (PrEP) ?",
    "c": [
     "Traitement curatif",
     "Vaccin",
     "Traitement préventif avant exposition au VIH",
     "Médicament contre le SIDA"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_015",
  "cat": "sexe",
  "name": "Le pénis",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le papillomavirus humain (HPV) ?",
    "c": [
     "Maladie génétique",
     "Virus de la grippe",
     "Bactérie",
     "Virus sexuellement transmissible très courant"
    ],
    "a": 3
   },
   {
    "q": "Combien de types de HPV existent ?",
    "c": [
     "Environ 20",
     "Environ 200",
     "Plus de 100",
     "Environ 50"
    ],
    "a": 2
   },
   {
    "q": "Le HPV peut-il causer le cancer du col de l'utérus ?",
    "c": [
     "Rarement",
     "Uniquement associé à d'autres facteurs",
     "Oui, certains types à haut risque",
     "Non"
    ],
    "a": 2
   },
   {
    "q": "Existe-t-il un vaccin contre le HPV ?",
    "c": [
     "Oui, recommandé aux adolescents",
     "Non",
     "Oui, mais inefficace",
     "Oui, mais seulement pour les adultes"
    ],
    "a": 0
   },
   {
    "q": "Comment se transmet le HPV ?",
    "c": [
     "Par contact sexuel (peau à peau)",
     "Par le sang",
     "Par la salive",
     "Par l'air"
    ],
    "a": 0
   },
   {
    "q": "Le HPV est-il fréquent ?",
    "c": [
     "Assez rare",
     "Non, très rare",
     "Uniquement dans certains pays",
     "Oui, 80% des personnes sexuellement actives l'auront"
    ],
    "a": 3
   },
   {
    "q": "Comment dépiste-t-on le HPV ?",
    "c": [
     "Par frottis cervical (test HPV)",
     "Par échographie",
     "Par prise de sang",
     "Par examen urinaire"
    ],
    "a": 0
   },
   {
    "q": "À quel âge le vaccin HPV est-il recommandé en France ?",
    "c": [
     "Entre 11 et 14 ans",
     "Entre 18 et 25 ans",
     "À tout âge",
     "Entre 15 et 18 ans"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sexe_016",
  "cat": "sexe",
  "name": "Les testicules",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelles hépatites sont sexuellement transmissibles ?",
    "c": [
     "Hépatites A et B",
     "Hépatite B uniquement",
     "Hépatites B et C",
     "Hépatites A, B et C"
    ],
    "a": 2
   },
   {
    "q": "Existe-t-il un vaccin contre l'hépatite B ?",
    "c": [
     "Non",
     "Oui, obligatoire pour les enfants en France",
     "Oui, mais pas en France",
     "Uniquement pour les adultes"
    ],
    "a": 1
   },
   {
    "q": "Comment se transmet l'hépatite B ?",
    "c": [
     "Par le sang et les rapports sexuels",
     "Par l'alimentation",
     "Par la toux",
     "Par l'eau"
    ],
    "a": 0
   },
   {
    "q": "L'hépatite C se transmet-elle sexuellement ?",
    "c": [
     "Non, jamais",
     "Rarement, principalement par le sang",
     "Oui, comme l'hépatite B",
     "Oui, très fréquemment"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'hépatite B chronique ?",
    "c": [
     "Infection persistante par le virus de l'hépatite B",
     "Maladie aiguë",
     "Cancer du foie",
     "Cirrhose"
    ],
    "a": 0
   },
   {
    "q": "Combien de personnes vivent avec l'hépatite B dans le monde ?",
    "c": [
     "Environ 250 millions",
     "Environ 50 millions",
     "Environ 100 millions",
     "Environ 500 millions"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les symptômes des hépatites virales ?",
    "c": [
     "Maux de tête",
     "Aucun symptôme",
     "Fièvre et toux",
     "Fatigue, jaunisse, douleurs abdominales"
    ],
    "a": 3
   },
   {
    "q": "Comment se protéger de l'hépatite B sexuelle ?",
    "c": [
     "Par le préservatif uniquement",
     "Par l'hygiène",
     "Par la vaccination uniquement",
     "Par la vaccination et le préservatif"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_017",
  "cat": "sexe",
  "name": "La masturbation",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la chlamydia ?",
    "c": [
     "Maladie génétique",
     "Infection sexuellement transmissible bactérienne",
     "Infection virale",
     "Infection urinaire"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les symptômes de la chlamydia ?",
    "c": [
     "Éruption cutanée",
     "Toujours des symptômes",
     "Fièvre",
     "Souvent aucun symptôme"
    ],
    "a": 3
   },
   {
    "q": "Peut-on traiter la chlamydia ?",
    "c": [
     "Oui, avec des antiviraux",
     "Oui, avec des antibiotiques",
     "Non, c'est incurable",
     "Oui, par chirurgie"
    ],
    "a": 1
   },
   {
    "q": "Que peut causer une chlamydia non traitée ?",
    "c": [
     "Maladies cardiaques",
     "Cancer",
     "Stérilité et salpingite",
     "SIDA"
    ],
    "a": 2
   },
   {
    "q": "Comment se transmet la chlamydia ?",
    "c": [
     "Par relations sexuelles non protégées",
     "Par les mains",
     "Par la salive",
     "Par l'eau"
    ],
    "a": 0
   },
   {
    "q": "Comment dépiste-t-on la chlamydia ?",
    "c": [
     "Par test urinaire ou prélèvement local",
     "Par prise de sang",
     "Par radiographie",
     "Par échographie"
    ],
    "a": 0
   },
   {
    "q": "La chlamydia est-elle fréquente ?",
    "c": [
     "Très rare",
     "Non, assez rare",
     "Uniquement dans les pays tropicaux",
     "Oui, c'est l'IST bactérienne la plus fréquente"
    ],
    "a": 3
   },
   {
    "q": "Combien de nouveaux cas de chlamydia par an dans le monde ?",
    "c": [
     "Environ 10 millions",
     "Environ 50 millions",
     "Environ 130 millions",
     "Environ 500 millions"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_018",
  "cat": "sexe",
  "name": "Les positions sexuelles",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'herpès génital ?",
    "c": [
     "Infection bactérienne",
     "Infection virale sexuellement transmissible",
     "Maladie de peau",
     "Allergie"
    ],
    "a": 1
   },
   {
    "q": "Quel virus cause l'herpès génital ?",
    "c": [
     "Le HSV (Herpes Simplex Virus)",
     "Le VHB",
     "Le HPV",
     "Le VIH"
    ],
    "a": 0
   },
   {
    "q": "Existe-t-il un traitement curatif contre l'herpès ?",
    "c": [
     "Oui, la guérison est totale",
     "Oui, un vaccin",
     "Oui, des antibiotiques",
     "Non, mais des traitements réduisent les poussées"
    ],
    "a": 3
   },
   {
    "q": "Comment se manifeste l'herpès génital ?",
    "c": [
     "Éruption sur tout le corps",
     "Fièvre",
     "Vésicules et ulcérations génitales",
     "Toux"
    ],
    "a": 2
   },
   {
    "q": "Comment se transmet l'herpès génital ?",
    "c": [
     "Par la salive",
     "Par contact direct avec les lésions",
     "Par le sang",
     "Par l'air"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la différence entre HSV-1 et HSV-2 ?",
    "c": [
     "HSV-1 est génital, HSV-2 est oral",
     "Aucune différence",
     "HSV-1 est souvent oral, HSV-2 souvent génital",
     "HSV-1 est plus dangereux"
    ],
    "a": 2
   },
   {
    "q": "Combien de personnes sont porteuses du HSV ?",
    "c": [
     "500 millions",
     "Plus de 3,7 milliards (HSV-1)",
     "1 milliard",
     "2 milliards"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qui déclenche une poussée d'herpès ?",
    "c": [
     "Sport",
     "Alimentation",
     "Stress, fatigue, baisse d'immunité",
     "Météo"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_019",
  "cat": "sexe",
  "name": "Le préservatif",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la syphilis ?",
    "c": [
     "Maladie virale",
     "Maladie génétique",
     "Infection fongique",
     "Infection sexuellement transmissible bactérienne"
    ],
    "a": 3
   },
   {
    "q": "Quelle bactérie cause la syphilis ?",
    "c": [
     "Escherichia coli",
     "Neisseria gonorrhoeae",
     "Treponema pallidum",
     "Chlamydia trachomatis"
    ],
    "a": 2
   },
   {
    "q": "La syphilis est-elle curable ?",
    "c": [
     "Elle se guérit seule",
     "Non",
     "Oui, mais très difficilement",
     "Oui, avec des antibiotiques (pénicilline)"
    ],
    "a": 3
   },
   {
    "q": "Comment se manifeste le premier stade de la syphilis ?",
    "c": [
     "Des douleurs musculaires",
     "Un chancre (ulcère) indolore",
     "De la fièvre",
     "Des boutons"
    ],
    "a": 1
   },
   {
    "q": "Que peut causer la syphilis non traitée à long terme ?",
    "c": [
     "Diabète",
     "Cancer",
     "Atteintes neurologiques et cardiovasculaires graves",
     "SIDA"
    ],
    "a": 2
   },
   {
    "q": "Comment se transmet la syphilis ?",
    "c": [
     "Par la salive",
     "Par l'air",
     "Par le sang",
     "Par contact direct avec un chancre"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la syphilis congénitale ?",
    "c": [
     "Transmission de la mère à l'enfant pendant la grossesse",
     "Syphilis héréditaire",
     "Syphilis chez l'enfant",
     "Syphilis génétique"
    ],
    "a": 0
   },
   {
    "q": "La syphilis est-elle en recrudescence ?",
    "c": [
     "Elle est stable",
     "Non, elle a disparu",
     "Elle diminue",
     "Oui, les cas augmentent depuis les années 2000"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_020",
  "cat": "sexe",
  "name": "La pilule",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la gonorrhée ?",
    "c": [
     "IST bactérienne aussi appelée chaude-pisse",
     "Maladie de peau",
     "Infection urinaire",
     "Infection virale"
    ],
    "a": 0
   },
   {
    "q": "Quelle bactérie cause la gonorrhée ?",
    "c": [
     "Neisseria gonorrhoeae",
     "Treponema pallidum",
     "Escherichia coli",
     "Chlamydia trachomatis"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les symptômes chez l'homme ?",
    "c": [
     "Fièvre",
     "Éruption cutanée",
     "Aucun symptôme",
     "Écoulement urétral et douleur en urinant"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les symptômes chez la femme ?",
    "c": [
     "Tous ces symptômes possibles",
     "Douleurs abdominales",
     "Souvent asymptomatique",
     "Écoulement vaginal"
    ],
    "a": 0
   },
   {
    "q": "La gonorrhée est-elle curable ?",
    "c": [
     "Oui, mais résistante",
     "Oui, avec des antibiotiques",
     "Guérison spontanée",
     "Non"
    ],
    "a": 1
   },
   {
    "q": "Que peut causer une gonorrhée non traitée ?",
    "c": [
     "Stérilité et infections pelviennes",
     "Diabète",
     "Cancer",
     "Maladies cardiaques"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la résistance aux antibiotiques de la gonorrhée ?",
    "c": [
     "La maladie est plus grave",
     "Le traitement est plus fort",
     "La bactérie devient moins sensible aux traitements",
     "La bactérie disparaît"
    ],
    "a": 2
   },
   {
    "q": "Combien de cas de gonorrhée par an dans le monde ?",
    "c": [
     "Environ 50 millions",
     "Environ 87 millions",
     "Environ 10 millions",
     "Environ 200 millions"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_021",
  "cat": "sexe",
  "name": "La stérilisation",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la ménopause ?",
    "c": [
     "Ralentissement des règles",
     "Arrêt définitif des menstruations",
     "Fin de l'ovulation",
     "Arrêt temporaire des règles"
    ],
    "a": 1
   },
   {
    "q": "À quel âge survient la ménopause en moyenne ?",
    "c": [
     "Vers 55 ans",
     "Vers 51 ans",
     "Vers 48 ans",
     "Vers 45 ans"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la périménopause ?",
    "c": [
     "Trouble de la ménopause",
     "Après la ménopause",
     "Période de transition avant la ménopause",
     "Début de la ménopause"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les symptômes fréquents de la ménopause ?",
    "c": [
     "Aucun symptôme",
     "Maux de tête",
     "Douleurs musculaires",
     "Bouffées de chaleur, troubles du sommeil"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le traitement hormonal substitutif (THS) ?",
    "c": [
     "Antidépresseurs",
     "Vitamines",
     "Traitement qui compense la baisse d'hormones",
     "Traitement contre l'ostéoporose"
    ],
    "a": 2
   },
   {
    "q": "La ménopause est-elle réversible ?",
    "c": [
     "Non, c'est un processus naturel définitif",
     "Oui, naturellement",
     "Oui, avec un traitement",
     "Parfois"
    ],
    "a": 0
   },
   {
    "q": "Quelles complications de santé sont liées à la ménopause ?",
    "c": [
     "Cancer",
     "Ostéoporose et risques cardiovasculaires",
     "Diabète",
     "Obésité"
    ],
    "a": 1
   },
   {
    "q": "À partir de combien de temps sans règles parle-t-on de ménopause ?",
    "c": [
     "12 mois sans règles",
     "3 mois sans règles",
     "24 mois sans règles",
     "6 mois sans règles"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sexe_022",
  "cat": "sexe",
  "name": "L'avortement",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'andropause ?",
    "c": [
     "Ménopause masculine",
     "Baisse progressive de la testostérone chez l'homme",
     "Arrêt de la production de spermatozoïdes",
     "Arrêt total de la production de testostérone"
    ],
    "a": 1
   },
   {
    "q": "À quel âge commence l'andropause ?",
    "c": [
     "Vers 30-40 ans",
     "Vers 55 ans, brutalement",
     "Vers 60-70 ans",
     "Vers 40-50 ans, progressivement"
    ],
    "a": 3
   },
   {
    "q": "L'andropause est-elle comparable à la ménopause ?",
    "c": [
     "Non, c'est plus progressif et moins brutal",
     "Oui, mais plus tardif",
     "Non, ce n'est pas lié aux hormones",
     "Oui, identique"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les symptômes de l'andropause ?",
    "c": [
     "Arrêt des règles",
     "Bouffées de chaleur",
     "Nausées",
     "Baisse de libido, fatigue, irritabilité"
    ],
    "a": 3
   },
   {
    "q": "Quel traitement existe pour l'andropause ?",
    "c": [
     "Oestrogènes",
     "Aucun traitement",
     "Testostérone en gel ou injections",
     "Antidépresseurs"
    ],
    "a": 2
   },
   {
    "q": "L'andropause affecte-t-elle la fertilité ?",
    "c": [
     "Oui, stérilité totale",
     "Elle diminue la fertilité mais ne l'arrête pas",
     "Oui, irréversible",
     "Non, aucun effet"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la DHEA ?",
    "c": [
     "Testostérone",
     "Progestérone",
     "Hormone précurseur qui diminue avec l'âge",
     "Oestrogène"
    ],
    "a": 2
   },
   {
    "q": "Le traitement à la testostérone est-il sans risque ?",
    "c": [
     "Non, très dangereux",
     "Non, il a des effets secondaires potentiels",
     "Oui, totalement sûr",
     "Oui, sans aucun risque"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_023",
  "cat": "sexe",
  "name": "La puberté",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la libido ?",
    "c": [
     "Fréquence des rapports",
     "Performance sexuelle",
     "Attirance physique",
     "Désir sexuel"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qui influence la libido ?",
    "c": [
     "Uniquement l'alimentation",
     "Uniquement l'âge",
     "Hormones, stress, santé, émotions",
     "Uniquement les hormones"
    ],
    "a": 2
   },
   {
    "q": "La libido est-elle la même chez les hommes et les femmes ?",
    "c": [
     "Les femmes ont plus de libido",
     "Elle est identique",
     "Elle varie selon les individus, pas selon le genre",
     "Les hommes ont plus de libido"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une baisse de libido ?",
    "c": [
     "Dépression",
     "Impuissance",
     "Diminution du désir sexuel",
     "Absence d'érection"
    ],
    "a": 2
   },
   {
    "q": "Quels facteurs peuvent diminuer la libido ?",
    "c": [
     "Uniquement les hormones",
     "Uniquement l'âge",
     "Stress, fatigue, dépression, médicaments",
     "Uniquement l'alimentation"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la libido élevée ?",
    "c": [
     "Addiction sexuelle",
     "Hypersexualité",
     "Trouble mental",
     "Désir sexuel fort et fréquent"
    ],
    "a": 3
   },
   {
    "q": "Existe-t-il des traitements pour la baisse de libido ?",
    "c": [
     "Uniquement des médicaments",
     "Aucun traitement",
     "Uniquement la chirurgie",
     "Traitements hormonaux, thérapie, changement de mode de vie"
    ],
    "a": 3
   },
   {
    "q": "La libido diminue-t-elle avec l'âge ?",
    "c": [
     "Non, jamais",
     "Oui, toujours",
     "Elle peut diminuer mais pas forcément",
     "Uniquement après 70 ans"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_024",
  "cat": "sexe",
  "name": "La ménopause",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce qu'une érection ?",
    "c": [
     "Contraction musculaire",
     "Excitation sexuelle",
     "Rigidification du pénis par afflux sanguin",
     "Émission de sperme"
    ],
    "a": 2
   },
   {
    "q": "Quel mécanisme provoque l'érection ?",
    "c": [
     "Afflux de sang dans les corps caverneux",
     "Contraction des muscles",
     "Production d'hormones",
     "Stimulation nerveuse"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la dysfonction érectile ?",
    "c": [
     "Incapacité à obtenir ou maintenir une érection",
     "Manque d'érection matinale",
     "Éjaculation précoce",
     "Érection douloureuse"
    ],
    "a": 0
   },
   {
    "q": "Quels facteurs peuvent causer des troubles de l'érection ?",
    "c": [
     "Uniquement l'alimentation",
     "Uniquement l'âge",
     "Uniquement le stress",
     "Stress, diabète, maladies cardiovasculaires"
    ],
    "a": 3
   },
   {
    "q": "Quels médicaments traitent la dysfonction érectile ?",
    "c": [
     "Antibiotiques",
     "Anti-inflammatoires",
     "Antidépresseurs",
     "Viagra, Cialis (inhibiteurs de PDE5)"
    ],
    "a": 3
   },
   {
    "q": "À partir de quel âge les troubles de l'érection sont-ils fréquents ?",
    "c": [
     "Après 50 ans",
     "À tout âge",
     "Après 60 ans",
     "Après 40 ans, de façon croissante"
    ],
    "a": 3
   },
   {
    "q": "L'érection est-elle contrôlée par le système nerveux ?",
    "c": [
     "Non, c'est un réflexe",
     "Uniquement par le cerveau",
     "Non, c'est hormonal",
     "Oui, par le système nerveux autonome"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un priapisme ?",
    "c": [
     "Érection normale",
     "Absence d'érection",
     "Érection prolongée et douloureuse sans stimulation",
     "Éjaculation"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_025",
  "cat": "sexe",
  "name": "Le VIH",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'éjaculation ?",
    "c": [
     "Début de l'érection",
     "Émission d'urine",
     "Émission de sperme par le pénis lors de l'orgasme",
     "Contraction du pénis"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'éjaculation précoce ?",
    "c": [
     "Absence d'éjaculation",
     "Éjaculation tardive",
     "Éjaculation survenant trop rapidement",
     "Éjaculation douloureuse"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'éjaculation retardée ?",
    "c": [
     "Éjaculation lente",
     "Éjaculation tardive",
     "Difficulté ou impossibilité d'éjaculer",
     "Éjaculation sans orgasme"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'éjaculation rétrograde ?",
    "c": [
     "Sperme liquide",
     "Éjaculation sans sensation",
     "Le sperme va dans la vessie au lieu de sortir",
     "Absence de sperme"
    ],
    "a": 2
   },
   {
    "q": "Combien de spermatozoïdes dans une éjaculation moyenne ?",
    "c": [
     "10 à 40 millions",
     "40 à 300 millions",
     "1 à 10 millions",
     "500 millions à 1 milliard"
    ],
    "a": 1
   },
   {
    "q": "Quel volume de sperme est éjaculé en moyenne ?",
    "c": [
     "0,5 à 1 ml",
     "2 à 5 ml",
     "10 à 15 ml",
     "5 à 10 ml"
    ],
    "a": 1
   },
   {
    "q": "L'éjaculation est-elle toujours accompagnée d'orgasme ?",
    "c": [
     "Non, les deux peuvent être dissociés",
     "Oui, toujours",
     "Rarement",
     "Parfois"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que l'orgasme ?",
    "c": [
     "Érection",
     "Éjaculation",
     "Excitation maximale",
     "Point culminant du plaisir sexuel avec contractions musculaires"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_026",
  "cat": "sexe",
  "name": "La syphilis",
  "level": "adulte",
  "levels": [
   {
    "q": "Que signifie FIV ?",
    "c": [
     "Fécondation Intra-Vaginale",
     "Fécondation In Vitro",
     "Fertilité In Vitro",
     "Fusion In Vitro"
    ],
    "a": 1
   },
   {
    "q": "Qui a réalisé la première FIV réussie ?",
    "c": [
     "Jacques Testart",
     "Robert Edwards et Patrick Steptoe",
     "Alan Trounson",
     "René Frydman"
    ],
    "a": 1
   },
   {
    "q": "En quelle année est née Louise Brown, premier bébé FIV ?",
    "c": [
     "1980",
     "1975",
     "1985",
     "1978"
    ],
    "a": 3
   },
   {
    "q": "Quelles sont les étapes d'une FIV ?",
    "c": [
     "Fécondation puis transfert",
     "Stimulation, ponction, fécondation, transfert",
     "Ponction puis fécondation",
     "Stimulation puis transfert"
    ],
    "a": 1
   },
   {
    "q": "Quel est le taux de réussite moyen d'une FIV ?",
    "c": [
     "Environ 70%",
     "Environ 50%",
     "Environ 30% par tentative",
     "Environ 10%"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'ICSI en FIV ?",
    "c": [
     "Culture d'embryon",
     "Transfert d'embryon",
     "Fécondation classique",
     "Injection directe d'un spermatozoïde dans l'ovule"
    ],
    "a": 3
   },
   {
    "q": "Combien de bébés sont nés par FIV dans le monde ?",
    "c": [
     "Plus de 2 millions",
     "Plus de 8 millions",
     "Plus de 10 millions",
     "Plus de 5 millions"
    ],
    "a": 1
   },
   {
    "q": "La FIV est-elle remboursée par la Sécurité sociale en France ?",
    "c": [
     "Uniquement dans le privé",
     "Non",
     "Uniquement la première tentative",
     "Oui, sous conditions"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_027",
  "cat": "sexe",
  "name": "L'herpès",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce qu'un stérilet (DIU) ?",
    "c": [
     "Dispositif Intra-Utérin contraceptif",
     "Dispositif d'hygiène",
     "Implant sous-cutané",
     "Dispositif Intra-Urinaire"
    ],
    "a": 0
   },
   {
    "q": "Combien de types de stérilet existe-t-il ?",
    "c": [
     "Quatre",
     "Un seul",
     "Deux : au cuivre et hormonal",
     "Trois"
    ],
    "a": 2
   },
   {
    "q": "Combien de temps dure un stérilet au cuivre ?",
    "c": [
     "1 à 2 ans",
     "5 à 10 ans",
     "2 à 3 ans",
     "10 à 15 ans"
    ],
    "a": 1
   },
   {
    "q": "Combien de temps dure un stérilet hormonal ?",
    "c": [
     "3 à 5 ans",
     "5 à 10 ans",
     "1 à 2 ans",
     "10 ans"
    ],
    "a": 0
   },
   {
    "q": "Quel est le taux d'efficacité du stérilet ?",
    "c": [
     "Environ 85%",
     "Environ 95%",
     "Plus de 99%",
     "Environ 90%"
    ],
    "a": 2
   },
   {
    "q": "Le stérilet peut-il être posé chez une femme n'ayant jamais accouché ?",
    "c": [
     "Oui, c'est possible",
     "Non, impossible",
     "Non, déconseillé",
     "Uniquement après 25 ans"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les effets secondaires possibles du stérilet ?",
    "c": [
     "Nausées",
     "Saignements, douleurs, infections",
     "Aucun effet secondaire",
     "Prise de poids"
    ],
    "a": 1
   },
   {
    "q": "Le stérilet protège-t-il des IST ?",
    "c": [
     "Oui, totalement",
     "Non",
     "Oui, partiellement",
     "Oui, comme le préservatif"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_028",
  "cat": "sexe",
  "name": "Les papillomavirus",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'implant contraceptif ?",
    "c": [
     "Anneau vaginal",
     "Patch",
     "Dispositif intra-utérin",
     "Bâtonnet hormonal placé sous la peau du bras"
    ],
    "a": 3
   },
   {
    "q": "Combien de temps dure l'implant contraceptif ?",
    "c": [
     "5 ans",
     "1 an",
     "3 ans",
     "2 ans"
    ],
    "a": 2
   },
   {
    "q": "Quelle hormone contient l'implant contraceptif ?",
    "c": [
     "Oestrogènes et progestérone",
     "Oestrogènes seuls",
     "Testostérone",
     "Progestérone seule (étonogestrel)"
    ],
    "a": 3
   },
   {
    "q": "Quelle est l'efficacité de l'implant ?",
    "c": [
     "Environ 90%",
     "Plus de 99%",
     "Environ 95%",
     "Environ 85%"
    ],
    "a": 1
   },
   {
    "q": "Comment agit l'implant contraceptif ?",
    "c": [
     "En empêchant l'ovulation",
     "En empêchant la nidation",
     "En stérilisant",
     "En bloquant les spermatozoïdes"
    ],
    "a": 0
   },
   {
    "q": "Où est placé l'implant exactement ?",
    "c": [
     "Dans le vagin",
     "Dans l'utérus",
     "Sous la peau du ventre",
     "Sous la peau du bras, face interne"
    ],
    "a": 3
   },
   {
    "q": "Faut-il une prescription pour l'implant ?",
    "c": [
     "Oui, mais en pharmacie",
     "Non, acheté en ligne",
     "Oui, posé par un médecin",
     "Non, en vente libre"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les effets secondaires de l'implant ?",
    "c": [
     "Prise de poids importante",
     "Saignements irréguliers, maux de tête",
     "Aucun",
     "Nausées sévères"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_029",
  "cat": "sexe",
  "name": "La chlamydia",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'anneau vaginal (NuvaRing) ?",
    "c": [
     "Dispositif intra-utérin",
     "Implant vaginal",
     "Anneau contraceptif oral",
     "Anneau flexible inséré dans le vagin qui libère des hormones"
    ],
    "a": 3
   },
   {
    "q": "Combien de temps l'anneau vaginal reste-t-il en place ?",
    "c": [
     "2 semaines",
     "3 semaines, puis 1 semaine de pause",
     "1 semaine",
     "1 mois"
    ],
    "a": 1
   },
   {
    "q": "Quels hormones libère l'anneau vaginal ?",
    "c": [
     "Testostérone",
     "Oestrogènes et progestérone",
     "Progestérone seule",
     "Oestrogènes seuls"
    ],
    "a": 1
   },
   {
    "q": "Quelle est l'efficacité de l'anneau vaginal ?",
    "c": [
     "Environ 95%",
     "Plus de 99%",
     "Environ 90%",
     "Environ 85%"
    ],
    "a": 1
   },
   {
    "q": "Comment agit l'anneau vaginal ?",
    "c": [
     "Chauffage local",
     "Libération de spermicide",
     "Barrière physique",
     "Libération d'hormones absorbées par la paroi vaginale"
    ],
    "a": 3
   },
   {
    "q": "L'anneau vaginal peut-il être retiré temporairement ?",
    "c": [
     "Non, jamais",
     "Oui, jusqu'à 12 heures",
     "Oui, jusqu'à 3 heures",
     "Oui, jusqu'à 1 heure"
    ],
    "a": 2
   },
   {
    "q": "L'anneau vaginal protège-t-il des IST ?",
    "c": [
     "Oui, comme le préservatif",
     "Oui, partiellement",
     "Oui, totalement",
     "Non"
    ],
    "a": 3
   },
   {
    "q": "Où se procurer l'anneau vaginal ?",
    "c": [
     "En ligne sans ordonnance",
     "En grande surface",
     "Sur prescription médicale en pharmacie",
     "En vente libre"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_030",
  "cat": "sexe",
  "name": "La gonorrhée",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le patch contraceptif ?",
    "c": [
     "Timbre cutané qui libère des hormones contraceptives",
     "Dispositif intra-utérin",
     "Implant",
     "Pansement"
    ],
    "a": 0
   },
   {
    "q": "Où applique-t-on le patch contraceptif ?",
    "c": [
     "Sur la peau du ventre, fesse, bras ou dos",
     "Sur la poitrine",
     "Dans le vagin",
     "Sur le visage"
    ],
    "a": 0
   },
   {
    "q": "Combien de temps dure un patch ?",
    "c": [
     "24 heures",
     "3 jours",
     "Deux semaines",
     "Une semaine"
    ],
    "a": 3
   },
   {
    "q": "Quels hormones contient le patch ?",
    "c": [
     "Testostérone",
     "Progestérone seule",
     "Oestrogènes et progestérone",
     "Oestrogènes seuls"
    ],
    "a": 2
   },
   {
    "q": "Quelle est l'efficacité du patch contraceptif ?",
    "c": [
     "Environ 85%",
     "Environ 95%",
     "Environ 90%",
     "Plus de 99%"
    ],
    "a": 3
   },
   {
    "q": "Combien de patchs par cycle ?",
    "c": [
     "2 patchs par cycle",
     "1 patch par mois",
     "3 patchs (3 semaines)",
     "4 patchs (1 mois)"
    ],
    "a": 2
   },
   {
    "q": "Le patch peut-il se décoller ?",
    "c": [
     "Uniquement lors du sport",
     "Oui, sous certaines conditions (eau, sudation)",
     "Oui, toujours",
     "Non, jamais"
    ],
    "a": 1
   },
   {
    "q": "Le patch protège-t-il des IST ?",
    "c": [
     "Oui, comme le préservatif",
     "Oui, totalement",
     "Oui, partiellement",
     "Non"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_031",
  "cat": "sexe",
  "name": "Le BDSM",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce qu'un spermicide ?",
    "c": [
     "Hormone contraceptive",
     "Lubrifiant",
     "Antibiotique",
     "Substance qui détruit ou immobilise les spermatozoïdes"
    ],
    "a": 3
   },
   {
    "q": "Sous quelle forme se présente le spermicide ?",
    "c": [
     "Crème, gel, mousse, ovule, film",
     "Comprimé",
     "Injection",
     "Patch"
    ],
    "a": 0
   },
   {
    "q": "Quel est l'ingrédient actif principal des spermicides ?",
    "c": [
     "Le latex",
     "Le paracétamol",
     "L'alcool",
     "Le nonoxynol-9"
    ],
    "a": 3
   },
   {
    "q": "Quelle est l'efficacité du spermicide seul ?",
    "c": [
     "Plus de 99%",
     "Environ 72%",
     "Environ 90%",
     "Environ 85%"
    ],
    "a": 1
   },
   {
    "q": "Le spermicide protège-t-il des IST ?",
    "c": [
     "Oui, totalement",
     "Oui, partiellement",
     "Non, il peut même irriter la peau",
     "Oui, comme le préservatif"
    ],
    "a": 2
   },
   {
    "q": "Comment utiliser un spermicide ?",
    "c": [
     "Injection",
     "Appliquer dans le vagin avant les rapports",
     "Boire",
     "Appliquer sur le pénis"
    ],
    "a": 1
   },
   {
    "q": "Combien de temps avant le rapport faut-il appliquer le spermicide ?",
    "c": [
     "24 heures avant",
     "1 heure avant",
     "5 à 30 minutes avant",
     "Immédiatement"
    ],
    "a": 2
   },
   {
    "q": "Le spermicide est-il recommandé comme méthode contraceptive principale ?",
    "c": [
     "Oui, recommandé",
     "Non, interdit",
     "Non, son efficacité est insuffisante seule",
     "Oui, c'est très efficace"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_032",
  "cat": "sexe",
  "name": "Le fétichisme",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'abstinence sexuelle ?",
    "c": [
     "Frigidité",
     "Stérilité",
     "Absence volontaire de relations sexuelles",
     "Impossibilité d'avoir des relations"
    ],
    "a": 2
   },
   {
    "q": "L'abstinence sexuelle peut-elle être une méthode contraceptive ?",
    "c": [
     "Parfois",
     "Uniquement pour les femmes",
     "Non",
     "Oui, c'est la seule méthode à 100% efficace"
    ],
    "a": 3
   },
   {
    "q": "Quelles sont les raisons de l'abstinence ?",
    "c": [
     "Uniquement médicales",
     "Uniquement religieuses",
     "Uniquement personnelles",
     "Religieuses, personnelles, médicales"
    ],
    "a": 3
   },
   {
    "q": "L'abstinence est-elle dangereuse pour la santé ?",
    "c": [
     "Parfois",
     "Non, c'est un choix personnel sans danger",
     "Oui, elle est nocive",
     "Oui, elle cause des maladies"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'abstinence périodique ?",
    "c": [
     "Méthode naturelle basée sur l'observation du cycle",
     "Abstinence totale",
     "Retrait",
     "Méthode contraceptive chimique"
    ],
    "a": 0
   },
   {
    "q": "Quelle est l'efficacité des méthodes d'abstinence périodique ?",
    "c": [
     "Variable, de 75% à 99% selon la méthode",
     "100%",
     "Moins de 50%",
     "50%"
    ],
    "a": 0
   },
   {
    "q": "Comment fonctionne la méthode Ogino (rythme) ?",
    "c": [
     "Observation de la glaire",
     "Suppression des rapports",
     "Calcul de la période d'ovulation pour éviter les rapports",
     "Mesure de température"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la méthode symptothermique ?",
    "c": [
     "Méthode hormonale",
     "Méthode chimique",
     "Méthode naturelle combinant température et glaire",
     "Méthode chirurgicale"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_033",
  "cat": "sexe",
  "name": "L'exhibitionnisme",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le célibat ?",
    "c": [
     "Choix de ne pas avoir d'enfants",
     "Fait de ne pas être en couple ou marié",
     "Absence de relations sexuelles",
     "Vie solitaire"
    ],
    "a": 1
   },
   {
    "q": "Le célibat est-il un choix ou une situation subie ?",
    "c": [
     "Les deux cas existent",
     "Uniquement temporaire",
     "Toujours un choix",
     "Toujours subi"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le célibat prolongé ?",
    "c": [
     "Retraite sexuelle",
     "Choix de vie",
     "Célibat définitif",
     "Célibat qui dure plusieurs années"
    ],
    "a": 3
   },
   {
    "q": "Le célibat a-t-il des effets sur la santé mentale ?",
    "c": [
     "Toujours négatifs",
     "Toujours positifs",
     "Cela dépend des personnes et du contexte",
     "Aucun effet"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le célibat religieux ?",
    "c": [
     "Voeu de chasteté pour des motifs religieux",
     "Choix de vie",
     "Mariage religieux",
     "Abstinence"
    ],
    "a": 0
   },
   {
    "q": "Quel pourcentage d'adultes sont célibataires en France ?",
    "c": [
     "Environ 20%",
     "Environ 10%",
     "Environ 30%",
     "Environ 50%"
    ],
    "a": 2
   },
   {
    "q": "Le célibat est-il plus fréquent dans certaines tranches d'âge ?",
    "c": [
     "Uniquement chez les jeunes",
     "Uniquement chez les seniors",
     "Non, uniforme",
     "Oui, chez les jeunes et les seniors"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le célibat géographique ?",
    "c": [
     "Célibat choisi",
     "Célibat lié à l'isolement géographique",
     "Célibat temporaire",
     "Célibat professionnel"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_034",
  "cat": "sexe",
  "name": "Le voyeurisme",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'orientation sexuelle ?",
    "c": [
     "Habitude",
     "Préférence",
     "Choix sexuel",
     "Attirance sexuelle et affective pour un genre"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les principaux types d'orientation sexuelle ?",
    "c": [
     "Toutes les orientations",
     "Hétérosexualité, homosexualité, bisexualité",
     "Homosexualité",
     "Hétérosexualité et homosexualité"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'hétérosexualité ?",
    "c": [
     "Absence d'attirance",
     "Attirance pour le sexe opposé",
     "Attirance pour le même sexe",
     "Attirance pour les deux sexes"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'homosexualité ?",
    "c": [
     "Attirance pour les deux",
     "Attirance pour le sexe opposé",
     "Aucune attirance",
     "Attirance pour le même sexe"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la bisexualité ?",
    "c": [
     "Changement d'orientation",
     "Attirance pour les deux sexes",
     "Attirance pour aucun sexe",
     "Attirance pour le même sexe"
    ],
    "a": 1
   },
   {
    "q": "Depuis quand l'homosexualité n'est-elle plus considérée comme une maladie ?",
    "c": [
     "Depuis 2000",
     "Depuis 1990 (OMS)",
     "Depuis 1980",
     "Depuis 1970"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'asexualité ?",
    "c": [
     "Refus de la sexualité",
     "Choix de célibat",
     "Maladie",
     "Absence ou faible désir sexuel envers autrui"
    ],
    "a": 3
   },
   {
    "q": "L'orientation sexuelle peut-elle changer ?",
    "c": [
     "Elle est généralement stable mais peut évoluer",
     "Non, jamais",
     "Elle change toujours",
     "Oui, volontairement"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sexe_035",
  "cat": "sexe",
  "name": "La bisexualité",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le mariage ?",
    "c": [
     "Contrat religieux",
     "Engagement informel",
     "Union légale entre deux personnes",
     "Simple cohabitation"
    ],
    "a": 2
   },
   {
    "q": "En quelle année le mariage homosexuel a-t-il été légalisé en France ?",
    "c": [
     "2015",
     "2010",
     "2013 (loi Taubira)",
     "2000"
    ],
    "a": 2
   },
   {
    "q": "Quel pays a été le premier à légaliser le mariage homosexuel ?",
    "c": [
     "Belgique (2003)",
     "France (2013)",
     "Canada (2005)",
     "Pays-Bas (2001)"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le PACS en France ?",
    "c": [
     "Contrat de travail",
     "Contrat d'union civile entre deux adultes",
     "Mariage simplifié",
     "Union religieuse"
    ],
    "a": 1
   },
   {
    "q": "Combien de mariages sont célébrés chaque année en France ?",
    "c": [
     "Environ 230 000",
     "Environ 300 000",
     "Environ 100 000",
     "Environ 500 000"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le mariage civil ?",
    "c": [
     "Mariage célébré par un officier d'état civil",
     "Union libre",
     "Mariage symbolique",
     "Mariage religieux"
    ],
    "a": 0
   },
   {
    "q": "Quel âge minimum pour se marier en France ?",
    "c": [
     "21 ans",
     "18 ans",
     "15 ans",
     "16 ans"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le divorce ?",
    "c": [
     "Séparation de fait",
     "Annulation",
     "Rupture",
     "Dissolution légale du mariage"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_036",
  "cat": "sexe",
  "name": "La transidentité",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la pornographie ?",
    "c": [
     "Éducation sexuelle",
     "Art érotique",
     "Représentation explicite d'actes sexuels dans le but d'exciter",
     "Film érotique"
    ],
    "a": 2
   },
   {
    "q": "Depuis quand la pornographie moderne existe-t-elle ?",
    "c": [
     "Depuis le cinéma (années 1970)",
     "Depuis l'antiquité",
     "Depuis internet",
     "Depuis les années 1950"
    ],
    "a": 0
   },
   {
    "q": "Quel est l'âge légal pour accéder à la pornographie en France ?",
    "c": [
     "18 ans",
     "16 ans",
     "15 ans",
     "21 ans"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la pornographie montre-t-elle souvent de manière irréaliste ?",
    "c": [
     "Uniquement les émotions",
     "Les corps, les pratiques et les relations",
     "Tout est réaliste",
     "Les sentiments"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les risques de la pornographie pour les jeunes ?",
    "c": [
     "Effets positifs",
     "Image irréaliste de la sexualité, addiction",
     "Développement normal",
     "Aucun risque"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le revenge porn ?",
    "c": [
     "Publicité",
     "Diffusion non consentie d'images intimes",
     "Pornographie professionnelle",
     "Film amateur"
    ],
    "a": 1
   },
   {
    "q": "La pornographie est-elle légale en France ?",
    "c": [
     "Oui, sans restrictions",
     "Uniquement sur internet",
     "Non, interdite",
     "Oui, avec des restrictions (âge, consentement)"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la production éthique dans la pornographie ?",
    "c": [
     "Production gratuite",
     "Production respectant le consentement et les droits des acteurs",
     "Production artistique",
     "Production amateur"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_037",
  "cat": "sexe",
  "name": "L'asexualité",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la prostitution ?",
    "c": [
     "Harcèlement sexuel",
     "Commerce",
     "Échange d'actes sexuels contre de l'argent ou des biens",
     "Liberté sexuelle"
    ],
    "a": 2
   },
   {
    "q": "La prostitution est-elle légale en France ?",
    "c": [
     "L'acte est légal, mais le proxénétisme est interdit",
     "Totalement illégale",
     "Uniquement dans les maisons closes",
     "Totalement légale"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le proxénétisme ?",
    "c": [
     "Le fait de tirer profit de la prostitution d'autrui",
     "Métier",
     "Prostitué",
     "Client de la prostitution"
    ],
    "a": 0
   },
   {
    "q": "En quelle année la loi française a-t-elle pénalisé les clients ?",
    "c": [
     "2016",
     "2000",
     "2010",
     "2018"
    ],
    "a": 0
   },
   {
    "q": "Combien de personnes se prostituent en France ?",
    "c": [
     "Environ 200 000",
     "Environ 30 000 à 40 000",
     "Environ 100 000",
     "Environ 10 000"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'exploitation sexuelle ?",
    "c": [
     "Prostitution forcée ou subie sous contrainte",
     "Travail du sexe",
     "Prostitution choisie",
     "Métier"
    ],
    "a": 0
   },
   {
    "q": "Quel est le lien entre prostitution et trafic d'êtres humains ?",
    "c": [
     "Lien uniquement à l'étranger",
     "Très faible",
     "Beaucoup de prostituées sont victimes de trafic",
     "Aucun lien"
    ],
    "a": 2
   },
   {
    "q": "Quelles sont les conséquences de la prostitution sur la santé ?",
    "c": [
     "Conséquences positives",
     "IST, traumatismes, dépendances",
     "Aucune conséquence",
     "Problèmes uniquement physiques"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_038",
  "cat": "sexe",
  "name": "Le polyamour",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le consentement ?",
    "c": [
     "Autorisation",
     "Simple politesse",
     "Absence de refus",
     "Accord libre et éclairé à un acte sexuel"
    ],
    "a": 3
   },
   {
    "q": "Le consentement peut-il être donné sous l'emprise de l'alcool ?",
    "c": [
     "Oui, l'alcool n'a pas d'importance",
     "Oui, si la personne est consciente",
     "Oui, tant qu'il n'y a pas de violence",
     "Non, le consentement doit être libre et lucide"
    ],
    "a": 3
   },
   {
    "q": "Le consentement est-il réversible ?",
    "c": [
     "Non, cela n'existe pas",
     "Non, une fois donné il est définitif",
     "Oui, il peut être retiré à tout moment",
     "Parfois"
    ],
    "a": 2
   },
   {
    "q": "Peut-on présumer du consentement ?",
    "c": [
     "Oui, après un premier rendez-vous",
     "Oui, dans un couple",
     "Non, il doit être exprimé clairement",
     "Oui, par défaut"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'âge du consentement en France ?",
    "c": [
     "18 ans",
     "14 ans",
     "15 ans",
     "16 ans"
    ],
    "a": 2
   },
   {
    "q": "Le silence peut-il être considéré comme un consentement ?",
    "c": [
     "Oui",
     "Oui, parfois",
     "Oui, dans le couple",
     "Non, le consentement doit être explicite"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le consentement explicite ?",
    "c": [
     "Un accord supposé",
     "Un accord verbal ou gestuel clair",
     "Une signature",
     "Une absence de refus"
    ],
    "a": 1
   },
   {
    "q": "Différence entre consentement et soumission ?",
    "c": [
     "Aucune différence",
     "La soumission est volontaire",
     "C'est la même chose",
     "Le consentement est libre, la soumission est contrainte"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_039",
  "cat": "sexe",
  "name": "Le mariage homosexuel",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le harcèlement sexuel ?",
    "c": [
     "Comportements à connotation sexuelle imposés de façon répétée",
     "Relation consentie",
     "Drague",
     "Compliment"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les éléments constitutifs du harcèlement sexuel ?",
    "c": [
     "Consentement",
     "Un seul acte",
     "Répétition et caractère non désiré",
     "Intention humoristique"
    ],
    "a": 2
   },
   {
    "q": "Le harcèlement sexuel est-il un délit pénal en France ?",
    "c": [
     "Uniquement au travail",
     "Uniquement dans le privé",
     "Oui, puni par la loi",
     "Non, ce n'est pas un délit"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la peine maximale pour harcèlement sexuel en France ?",
    "c": [
     "6 mois",
     "3 ans d'emprisonnement et 45 000 euros d'amende",
     "1 an",
     "5 ans"
    ],
    "a": 1
   },
   {
    "q": "Où peut avoir lieu le harcèlement sexuel ?",
    "c": [
     "Uniquement dans les lieux publics",
     "Uniquement en ligne",
     "Uniquement au travail",
     "Au travail, dans les transports, à l'école, en ligne"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le harcèlement de rue ?",
    "c": [
     "Discussion",
     "Rencontre",
     "Comportements sexistes dans l'espace public",
     "Compliment"
    ],
    "a": 2
   },
   {
    "q": "Comment réagir face au harcèlement sexuel ?",
    "c": [
     "Ne rien faire",
     "Accepter",
     "Signaler, porter plainte, témoigner",
     "Ignorer"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la loi sur le harcèlement sexuel en France ?",
    "c": [
     "Loi sur l'éducation",
     "Loi sur l'égalité",
     "Loi qui définit et punit le harcèlement sexuel",
     "Loi sur le travail"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_040",
  "cat": "sexe",
  "name": "Les hormones sexuelles",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le viol ?",
    "c": [
     "Relation forcée",
     "Rapport non désiré",
     "Acte sexuel imposé sans consentement",
     "Tous ces éléments"
    ],
    "a": 3
   },
   {
    "q": "Comment la loi française définit-elle le viol ?",
    "c": [
     "Rapport non consenti",
     "Baiser forcé",
     "Attouchement",
     "Tout acte de pénétration sexuelle imposé par violence ou contrainte"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la peine maximale pour viol en France ?",
    "c": [
     "10 ans",
     "5 ans",
     "20 ans",
     "15 ans de réclusion criminelle"
    ],
    "a": 3
   },
   {
    "q": "Qui peut être victime de viol ?",
    "c": [
     "Uniquement les femmes",
     "Toute personne, quel que soit son âge, sexe ou genre",
     "Uniquement les hommes",
     "Uniquement les enfants"
    ],
    "a": 1
   },
   {
    "q": "Que faire en cas de viol ?",
    "c": [
     "Dormir",
     "Prendre une douche",
     "Appeler les urgences, ne pas se laver, porter plainte",
     "Oublier"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la prescription pour viol en France ?",
    "c": [
     "30 ans",
     "20 ans après la majorité de la victime",
     "10 ans",
     "5 ans"
    ],
    "a": 1
   },
   {
    "q": "Quel est le pourcentage de plaintes pour viol classées sans suite ?",
    "c": [
     "Environ 50%",
     "Environ 80%",
     "Environ 30%",
     "Environ 10%"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une agression sexuelle ?",
    "c": [
     "Harcèlement",
     "Atteinte sexuelle sans pénétration",
     "Viol",
     "Inceste"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_041",
  "cat": "sexe",
  "name": "Le sperme",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'éducation à la sexualité ?",
    "c": [
     "Apprentissage sur le corps, les relations et la vie affective",
     "Information médicale",
     "Cours de biologie",
     "Apprentissage des techniques sexuelles"
    ],
    "a": 0
   },
   {
    "q": "Depuis quand l'éducation sexuelle est-elle obligatoire à l'école en France ?",
    "c": [
     "Depuis 1990",
     "Depuis 1970",
     "Depuis 2010",
     "Depuis 2001 (loi relative à la régulation des naissances)"
    ],
    "a": 3
   },
   {
    "q": "Combien de séances d'éducation sexuelle sont prévues par an ?",
    "c": [
     "Au moins 3 séances",
     "1 séance",
     "5 séances",
     "Aucune"
    ],
    "a": 0
   },
   {
    "q": "À quel âge commence l'éducation sexuelle à l'école ?",
    "c": [
     "À la maternelle",
     "À l'école primaire (cycle 3)",
     "Au collège",
     "Au lycée"
    ],
    "a": 1
   },
   {
    "q": "Quels sujets sont abordés dans l'éducation sexuelle ?",
    "c": [
     "Uniquement la contraception",
     "Uniquement la biologie",
     "Uniquement les IST",
     "Consentement, contraception, IST, relations"
    ],
    "a": 3
   },
   {
    "q": "Qui dispense les séances d'éducation sexuelle ?",
    "c": [
     "Uniquement les infirmières",
     "Uniquement les parents",
     "Enseignants et intervenants extérieurs spécialisés",
     "Uniquement les médecins"
    ],
    "a": 2
   },
   {
    "q": "L'éducation sexuelle réduit-elle les grossesses précoces ?",
    "c": [
     "Oui, c'est démontré",
     "Non, elle les augmente",
     "Effet variable",
     "Non, aucun effet"
    ],
    "a": 0
   },
   {
    "q": "Quel pays a l'un des meilleurs programmes d'éducation sexuelle ?",
    "c": [
     "France",
     "Pays-Bas",
     "Japon",
     "États-Unis"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_042",
  "cat": "sexe",
  "name": "Les ovules",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la mutilation génitale féminine (MGF) ?",
    "c": [
     "Ablation partielle ou totale des organes génitaux externes",
     "Rituel",
     "Opération esthétique",
     "Circoncision"
    ],
    "a": 0
   },
   {
    "q": "Combien de femmes ont subi des MGF dans le monde ?",
    "c": [
     "Environ 100 millions",
     "Environ 50 millions",
     "Plus de 200 millions",
     "Environ 1 milliard"
    ],
    "a": 2
   },
   {
    "q": "Dans quelles régions les MGF sont-elles pratiquées ?",
    "c": [
     "Partout dans le monde",
     "Afrique subsaharienne, Moyen-Orient, Asie",
     "Uniquement au Moyen-Orient",
     "Uniquement en Afrique"
    ],
    "a": 1
   },
   {
    "q": "Les MGF sont-elles illégales en France ?",
    "c": [
     "Non, autorisées",
     "Uniquement pour les mineures",
     "Autorisées avec consentement",
     "Oui, interdites et sévèrement punies"
    ],
    "a": 3
   },
   {
    "q": "Quelles sont les conséquences des MGF sur la santé ?",
    "c": [
     "Bénéfiques pour la santé",
     "Douleur, infections, complications obstétricales",
     "Esthétiques",
     "Aucunes"
    ],
    "a": 1
   },
   {
    "q": "Pourquoi les MGF sont-elles pratiquées ?",
    "c": [
     "Raisons médicales",
     "Esthétique",
     "Hygiène",
     "Traditions culturelles et croyances religieuses"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'excision ?",
    "c": [
     "Rituel religieux",
     "Ablation du clitoris et parfois des petites lèvres",
     "Circoncision",
     "Opération chirurgicale"
    ],
    "a": 1
   },
   {
    "q": "Quelle organisation lutte contre les MGF ?",
    "c": [
     "Amnesty International",
     "UNICEF, OMS, ONU",
     "Croix-Rouge",
     "Toutes ces organisations"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_043",
  "cat": "sexe",
  "name": "La fécondation",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le Planning familial ?",
    "c": [
     "Méthode de planning",
     "Calendrier",
     "Structure médicale",
     "Association qui informe sur la contraception et la sexualité"
    ],
    "a": 3
   },
   {
    "q": "En quelle année le Planning familial a-t-il été créé en France ?",
    "c": [
     "1956",
     "1970",
     "1960",
     "1980"
    ],
    "a": 0
   },
   {
    "q": "Quels services propose le Planning familial ?",
    "c": [
     "Consultations contraceptives, IST, IVG, informations",
     "Uniquement les tests IST",
     "Uniquement la contraception",
     "Uniquement les informations"
    ],
    "a": 0
   },
   {
    "q": "Les consultations au Planning familial sont-elles gratuites ?",
    "c": [
     "Uniquement pour les étudiants",
     "Oui, et anonymes pour les mineurs",
     "Uniquement pour les adultes",
     "Non, payantes"
    ],
    "a": 1
   },
   {
    "q": "Qui peut consulter le Planning familial ?",
    "c": [
     "Uniquement les couples",
     "Toute personne, sans condition",
     "Uniquement les jeunes",
     "Uniquement les femmes"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'IVG au Planning familial ?",
    "c": [
     "Information",
     "Contraception",
     "Examen",
     "Interruption Volontaire de Grossesse"
    ],
    "a": 3
   },
   {
    "q": "Depuis quand la contraception est-elle autorisée en France ?",
    "c": [
     "1975",
     "1970",
     "1967 (loi Neuwirth)",
     "1960"
    ],
    "a": 2
   },
   {
    "q": "Depuis quand l'IVG est-elle légale en France ?",
    "c": [
     "1970",
     "1975 (loi Veil)",
     "1967",
     "1980"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_044",
  "cat": "sexe",
  "name": "La grossesse",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la transition de genre ?",
    "c": [
     "Changement de nom",
     "Traitement hormonal",
     "Opération chirurgicale",
     "Processus pour aligner son apparence et son identité de genre"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'une personne transgenre ?",
    "c": [
     "Personne dont l'identité de genre diffère du sexe assigné",
     "Travesti",
     "Homosexuel",
     "Personne qui change de sexe"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le parcours de transition médicale ?",
    "c": [
     "Opération unique",
     "Suivi par des spécialistes avec traitements possibles",
     "Simple changement administratif",
     "Traitement obligatoire"
    ],
    "a": 1
   },
   {
    "q": "Quels traitements peuvent être suivis lors d'une transition ?",
    "c": [
     "Aucun traitement",
     "Hormones et/ou chirurgies",
     "Uniquement les hormones",
     "Uniquement la chirurgie"
    ],
    "a": 1
   },
   {
    "q": "Depuis quand le changement de sexe à l'état civil est-il possible en France ?",
    "c": [
     "Depuis 2020",
     "Depuis 2016 (loi de modernisation de la justice)",
     "Depuis 2010",
     "Depuis 2000"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la dysphorie de genre ?",
    "c": [
     "Préférence personnelle",
     "Maladie mentale",
     "Malaise lié à la discordance entre identité de genre et sexe assigné",
     "Simple insatisfaction"
    ],
    "a": 2
   },
   {
    "q": "La transidentité est-elle une maladie mentale ?",
    "c": [
     "Oui, c'est un trouble",
     "Oui, depuis 2018",
     "Non, mais autrefois",
     "Non, l'OMS ne la considère plus comme telle"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le coming out trans ?",
    "c": [
     "Changement de nom",
     "Transition médicale",
     "Révélation de son identité de genre à son entourage",
     "Sortir d'une boîte"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_045",
  "cat": "sexe",
  "name": "L'accouchement",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'identité de genre ?",
    "c": [
     "Sexe biologique",
     "Rôle social",
     "Orientation sexuelle",
     "Sentiment intime et personnel d'appartenir à un genre"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la différence entre sexe et genre ?",
    "c": [
     "Le sexe est biologique, le genre est social et identitaire",
     "Le sexe est social",
     "Identiques",
     "Le genre est biologique"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la cisidentité ?",
    "c": [
     "Personne dont l'identité de genre correspond au sexe assigné",
     "Personne trans",
     "Homosexuel",
     "Personne non-binaire"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'une personne non-binaire ?",
    "c": [
     "Personne cis",
     "Personne trans",
     "Personne qui ne se reconnaît pas dans la binarité homme/femme",
     "Personne androgyne"
    ],
    "a": 2
   },
   {
    "q": "L'identité de genre est-elle liée à l'orientation sexuelle ?",
    "c": [
     "Uniquement chez les trans",
     "Oui, directement liés",
     "Non, ce sont des concepts distincts",
     "Parfois"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'expression de genre ?",
    "c": [
     "Orientation",
     "Sexe biologique",
     "Identité de genre",
     "Façon dont une personne exprime son genre (vêtements, comportement)"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les pronoms utilisés pour les personnes non-binaires ?",
    "c": [
     "Uniquement le prénom",
     "Iel, al, ol (ou autres selon la personne)",
     "Aucun pronom",
     "Il ou elle uniquement"
    ],
    "a": 1
   },
   {
    "q": "L'identité de genre est-elle choisie ?",
    "c": [
     "Non, elle est ressentie et personnelle",
     "Parfois",
     "Oui, on la choisit",
     "Oui, comme un vêtement"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sexe_046",
  "cat": "sexe",
  "name": "L'allaitement",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le transsexualisme (transidentité) ?",
    "c": [
     "Attirance pour le même sexe",
     "Identité de genre différente du sexe assigné à la naissance",
     "Choix de vie",
     "Maladie"
    ],
    "a": 1
   },
   {
    "q": "Quel est le terme médical utilisé dans les classifications internationales ?",
    "c": [
     "Trouble de l'identité de genre",
     "Transidentité",
     "Transsexualisme",
     "Dysphorie de genre"
    ],
    "a": 3
   },
   {
    "q": "À quel âge une personne peut-elle ressentir une dysphorie de genre ?",
    "c": [
     "Dès l'enfance",
     "Uniquement à l'âge adulte",
     "Uniquement à l'adolescence",
     "Après 30 ans"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les traitements possibles pour la dysphorie de genre ?",
    "c": [
     "Uniquement la chirurgie",
     "Uniquement les hormones",
     "THS, chirurgies, accompagnement psychologique",
     "Aucun traitement"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le traitement hormonal substitutif (THS) dans la transition ?",
    "c": [
     "Traitement contre la dépression",
     "Antibiotiques",
     "Médicaments",
     "Hormones pour développer les caractères du genre souhaité"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la chirurgie de réassignation sexuelle ?",
    "c": [
     "Opérations chirurgicales pour modifier les caractéristiques sexuelles",
     "Chirurgie esthétique",
     "Chirurgie mammaire",
     "Lipoaspiration"
    ],
    "a": 0
   },
   {
    "q": "Depuis quand la France rembourse-t-elle les opérations de changement de sexe ?",
    "c": [
     "Jamais",
     "Depuis les années 2000 (ALD)",
     "Depuis 1990",
     "Depuis 2010"
    ],
    "a": 1
   },
   {
    "q": "La transidentité est-elle reconnue comme une affection de longue durée (ALD) ?",
    "c": [
     "Oui, dans certains cas",
     "Uniquement pour les opérations",
     "Non, jamais",
     "Oui, systématiquement"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sexe_047",
  "cat": "sexe",
  "name": "Le post-partum",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'homoparentalité ?",
    "c": [
     "Parent isolé",
     "Adoption",
     "Parents de même sexe qui élèvent des enfants",
     "Famille nombreuse"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la PMA pour les couples de femmes en France ?",
    "c": [
     "Adoption",
     "FIV",
     "Gestation pour autrui",
     "Procréation Médicalement Assistée pour couples lesbiens"
    ],
    "a": 3
   },
   {
    "q": "Depuis quand la PMA est-elle ouverte à toutes les femmes en France ?",
    "c": [
     "2021 (loi bioéthique)",
     "2015",
     "2023",
     "2013"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que l'adoption homoparentale ?",
    "c": [
     "Adoption simple",
     "Adoption plénière",
     "Adoption d'un enfant par un couple de même sexe",
     "Famille d'accueil"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'adoption de l'enfant du conjoint ?",
    "c": [
     "Adoption internationale",
     "Adoption de l'enfant du partenaire par le beau-parent",
     "Adoption simple",
     "Adoption plénière"
    ],
    "a": 1
   },
   {
    "q": "Combien d'enfants vivent dans une famille homoparentale en France ?",
    "c": [
     "Environ 50 000",
     "Environ 1 million",
     "Environ 500 000",
     "Environ 200 000 à 300 000"
    ],
    "a": 3
   },
   {
    "q": "Comment les enfants de familles homoparentales se développent-ils ?",
    "c": [
     "Mieux",
     "Aussi bien que les autres enfants",
     "Cela dépend de l'orientation des parents",
     "Moins bien"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la différence entre homoparentalité et parent seul ?",
    "c": [
     "Homoparentalité = couple hétéro",
     "Homoparentalité = couple de même sexe, parent seul = célibataire",
     "Parent seul = couple homosexuel",
     "C'est la même chose"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "sexe_048",
  "cat": "sexe",
  "name": "La libido",
  "level": "adulte",
  "levels": [
   {
    "q": "Que signifie PMA ?",
    "c": [
     "Procréation Médicalement Assistée",
     "Paternité et Maternité Assistée",
     "Préparation Médicale à l'Accouchement",
     "Prémédication Assistée"
    ],
    "a": 0
   },
   {
    "q": "Quelles techniques inclut la PMA ?",
    "c": [
     "Uniquement la FIV",
     "Uniquement l'insémination",
     "Insémination, FIV, ICSI",
     "La chirurgie"
    ],
    "a": 2
   },
   {
    "q": "À qui s'adresse la PMA en France ?",
    "c": [
     "Uniquement couples hétéros",
     "Couples hétérosexuels, couples de femmes et femmes seules",
     "Uniquement couples de femmes",
     "Uniquement couples mariés"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'insémination artificielle (IAC) ?",
    "c": [
     "Dépôt de sperme directement dans l'utérus",
     "Injection de spermatozoïdes",
     "Fécondation in vitro",
     "Transfert d'embryon"
    ],
    "a": 0
   },
   {
    "q": "Quel est l'âge limite pour la PMA en France ?",
    "c": [
     "45 ans",
     "40 ans",
     "50 ans",
     "43 ans pour la femme"
    ],
    "a": 3
   },
   {
    "q": "Combien de tentatives de PMA sont remboursées en France ?",
    "c": [
     "8 inséminations et 6 FIV",
     "6 inséminations et 4 FIV",
     "4 inséminations et 2 FIV",
     "Tentatives illimitées"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la conservation des ovocytes ?",
    "c": [
     "Fécondation",
     "Conservation du sperme",
     "Stockage d'embryons",
     "Congélation des ovules pour préserver la fertilité"
    ],
    "a": 3
   },
   {
    "q": "Depuis quand les femmes peuvent-elles conserver leurs ovocytes sans raison médicale en France ?",
    "c": [
     "Depuis 2015",
     "Depuis 2010",
     "Ce n'est pas autorisé",
     "Depuis 2021"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "sexe_049",
  "cat": "sexe",
  "name": "Les aphrodisiaques",
  "level": "adulte",
  "levels": [
   {
    "q": "Que signifie GPA ?",
    "c": [
     "Gynécologie et Procréation Assistée",
     "Gestation Pour Autrui (mère porteuse)",
     "Grossesse à Procréation Assistée",
     "Grossesse Pour Autrui"
    ],
    "a": 1
   },
   {
    "q": "La GPA est-elle autorisée en France ?",
    "c": [
     "Oui, autorisée",
     "Autorisée sous conditions",
     "Uniquement pour les couples hétéros",
     "Non, interdite en France"
    ],
    "a": 3
   },
   {
    "q": "Pourquoi la GPA est-elle interdite en France ?",
    "c": [
     "Pour des raisons médicales",
     "Pour des raisons éthiques et juridiques",
     "Pour des raisons religieuses",
     "Pour des raisons économiques"
    ],
    "a": 1
   },
   {
    "q": "Dans quels pays la GPA est-elle autorisée ?",
    "c": [
     "Canada, Royaume-Uni, Belgique, Grèce, USA (certains états)",
     "Uniquement aux USA",
     "Partout dans le monde",
     "Uniquement en Europe"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la GPA ?",
    "c": [
     "Adoption",
     "FIV",
     "Insémination",
     "Une femme porte un enfant pour un couple ou une personne"
    ],
    "a": 3
   },
   {
    "q": "Comment les parents d'intention récupèrent-ils la filiation ?",
    "c": [
     "Par déclaration",
     "Par procédure judiciaire dans leur pays",
     "Automatiquement",
     "Par contrat"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les principaux débats éthiques autour de la GPA ?",
    "c": [
     "Économiques",
     "Marchandisation du corps, exploitation, filiation",
     "Religieux",
     "Médicaux"
    ],
    "a": 1
   },
   {
    "q": "La GPA est-elle autorisée en Belgique ?",
    "c": [
     "Oui, strictement encadrée",
     "Oui, payante",
     "Oui, mais non encadrée légalement",
     "Non"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "sexe_050",
  "cat": "sexe",
  "name": "La sexologie",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'accouchement sous X ?",
    "c": [
     "Accouchement à domicile",
     "Césarienne",
     "Accouchement sans douleur",
     "Accouchement dans l'anonymat à l'hôpital"
    ],
    "a": 3
   },
   {
    "q": "Depuis quand l'accouchement sous X existe-t-il en France ?",
    "c": [
     "Depuis 1960",
     "Depuis 1941 (loi de 1941)",
     "Depuis 1970",
     "Depuis 1900"
    ],
    "a": 1
   },
   {
    "q": "Quel est le but de l'accouchement sous X ?",
    "c": [
     "Éviter les frais",
     "Éviter les abandons dangereux et les infanticides",
     "Cacher la naissance",
     "Simplifier l'adoption"
    ],
    "a": 1
   },
   {
    "q": "La mère a-t-elle accès à un suivi médical ?",
    "c": [
     "Oui, elle bénéficie des mêmes soins",
     "Oui, mais payant",
     "Uniquement un suivi minimal",
     "Non, aucun"
    ],
    "a": 0
   },
   {
    "q": "L'enfant né sous X peut-il retrouver ses origines ?",
    "c": [
     "Oui, immédiatement",
     "Oui, à 16 ans",
     "Oui, à sa majorité via le CNAOP",
     "Non, jamais"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le CNAOP ?",
    "c": [
     "Organisme de suivi",
     "Hôpital",
     "Conseil National pour l'Accès aux Origines Personnelles",
     "Centre d'adoption"
    ],
    "a": 2
   },
   {
    "q": "Combien d'accouchements sous X par an en France ?",
    "c": [
     "Environ 2 000",
     "Environ 100",
     "Environ 5 000",
     "Environ 600 à 700"
    ],
    "a": 3
   },
   {
    "q": "La mère peut-elle revenir sur sa décision ?",
    "c": [
     "Oui, pendant 2 mois après la naissance",
     "Oui, pendant 1 an",
     "Oui, jusqu'à la majorité de l'enfant",
     "Non, c'est définitif"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "drogues_001",
  "cat": "drogues",
  "name": "Le cannabis",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelle est la substance active principale du cannabis ?",
    "c": [
     "Le THC (tétrahydrocannabinol)",
     "L'alcool",
     "La caféine",
     "La nicotine"
    ],
    "a": 0
   },
   {
    "q": "Le cannabis est-il légal en France ?",
    "c": [
     "Oui, à usage médical uniquement",
     "Oui, à usage récréatif",
     "Oui, totalement",
     "Non, c'est interdit"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les effets à court terme du cannabis ?",
    "c": [
     "Hyperactivité",
     "Euphorie, relaxation, altération des perceptions",
     "Somnolence",
     "Agitation"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le CBD ?",
    "c": [
     "Héroïne",
     "Drogue dure",
     "THC synthétique",
     "Cannabidiol, une molécule non psychotrope du cannabis"
    ],
    "a": 3
   },
   {
    "q": "Le cannabis peut-il créer une dépendance ?",
    "c": [
     "Rarement",
     "Uniquement physique",
     "Non, aucune dépendance",
     "Oui, une dépendance psychique peut se développer"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les risques du cannabis sur la santé mentale ?",
    "c": [
     "Aucun risque",
     "Bienfaits",
     "Anxiété, dépression, psychose chez les prédisposés",
     "Uniquement physique"
    ],
    "a": 2
   },
   {
    "q": "Dans quels pays le cannabis est-il légalisé ?",
    "c": [
     "Tous les pays",
     "Canada, Uruguay, certains états USA, Allemagne",
     "Uniquement en Amérique",
     "Aucun"
    ],
    "a": 1
   },
   {
    "q": "Le cannabis a-t-il des usages médicinaux ?",
    "c": [
     "Non, aucun",
     "Oui, contre la douleur, les nausées, certaines maladies",
     "Uniquement en oncologie",
     "Oui, mais inefficace"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_002",
  "cat": "drogues",
  "name": "La cocaïne",
  "level": "adulte",
  "levels": [
   {
    "q": "D'où provient la cocaïne ?",
    "c": [
     "Du pavot à opium",
     "Du chanvre",
     "Des feuilles de coca cultivées en Amérique du Sud",
     "Des champignons"
    ],
    "a": 2
   },
   {
    "q": "Comment se présente la cocaïne ?",
    "c": [
     "Comprimé",
     "Liquide",
     "Poudre blanche cristalline",
     "Herbe séchée"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les effets de la cocaïne ?",
    "c": [
     "Excitation, euphorie, augmentation de l'énergie",
     "Relaxation",
     "Somnolence",
     "Sédation"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le crack ?",
    "c": [
     "Cocaïne transformée pour être fumée",
     "Cocaïne pure",
     "Cocaïne diluée",
     "Cocaïne injectable"
    ],
    "a": 0
   },
   {
    "q": "La cocaïne crée-t-elle une dépendance rapide ?",
    "c": [
     "Uniquement physique",
     "Aucune dépendance",
     "Oui, une dépendance psychique peut s'installer très vite",
     "Non, lentement"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les risques cardiovasculaires de la cocaïne ?",
    "c": [
     "Hypotension",
     "Infarctus, AVC, hypertension, arythmies",
     "Uniquement tachycardie",
     "Aucun"
    ],
    "a": 1
   },
   {
    "q": "Comment la cocaïne est-elle consommée ?",
    "c": [
     "Uniquement sniffée",
     "Sniffée, fumée, injectée",
     "Uniquement fumée",
     "Uniquement en comprimé"
    ],
    "a": 1
   },
   {
    "q": "Qu'il est le trafic de cocaïne dans le monde ?",
    "c": [
     "Un des trafics les plus lucratifs, plusieurs milliards de dollars",
     "Local",
     "Régional",
     "Faible"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "drogues_003",
  "cat": "drogues",
  "name": "L'héroïne",
  "level": "adulte",
  "levels": [
   {
    "q": "De quoi dérive l'héroïne ?",
    "c": [
     "De la morphine, extraite du pavot à opium",
     "Des champignons",
     "Du cannabis",
     "De la coca"
    ],
    "a": 0
   },
   {
    "q": "Comment se présente l'héroïne ?",
    "c": [
     "Comprimé",
     "Feuilles séchées",
     "Liquide",
     "Poudre blanche ou brune"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les effets de l'héroïne ?",
    "c": [
     "Hyperactivité",
     "Excitation",
     "Hallucinations",
     "Euphorie, sédation, bien-être intense"
    ],
    "a": 3
   },
   {
    "q": "Pourquoi l'héroïne est-elle particulièrement dangereuse ?",
    "c": [
     "Peu d'overdose",
     "Faible dépendance",
     "Risque élevé de dépendance et d'overdose mortelle",
     "Effets bénins"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un traitement de substitution aux opiacés ?",
    "c": [
     "Méthadone ou buprénorphine prescrits aux dépendants",
     "Antidouleurs",
     "Antidépresseurs",
     "Antibiotiques"
    ],
    "a": 0
   },
   {
    "q": "Comment l'héroïne est-elle généralement consommée ?",
    "c": [
     "Uniquement injectée",
     "En comprimé",
     "Uniquement sniffée",
     "Injection intraveineuse, sniffée, fumée"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les symptômes de sevrage à l'héroïne ?",
    "c": [
     "Légers",
     "Aucun",
     "Uniquement psychologiques",
     "Douleurs, anxiété, insomnie, diarrhée"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la naloxone ?",
    "c": [
     "Vaccin",
     "Antibiotique",
     "Antidote qui réverse une overdose d'opiacés",
     "Traitement de substitution"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "drogues_004",
  "cat": "drogues",
  "name": "L'ecstasy",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la MDMA ?",
    "c": [
     "Molécule psychoactive de la famille des amphétamines",
     "Opiacé",
     "Hallucinogène naturel",
     "Cannabinoïde"
    ],
    "a": 0
   },
   {
    "q": "Comment se présente l'ecstasy ?",
    "c": [
     "Comprimés, gélules, poudre",
     "Liquide",
     "Poudre blanche",
     "Herbe"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les effets de la MDMA ?",
    "c": [
     "Empathie, euphorie, énergie, perception sensorielle accrue",
     "Anxiété",
     "Tristesse",
     "Sédation"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les risques immédiats de la MDMA ?",
    "c": [
     "Hyperthermie, déshydratation, hyponatrémie",
     "AVC",
     "Infarctus",
     "Coma"
    ],
    "a": 0
   },
   {
    "q": "La MDMA crée-t-elle une dépendance ?",
    "c": [
     "Dépendance immédiate",
     "Aucune dépendance",
     "Principalement psychique, moins physique que l'héroïne",
     "Forte dépendance physique"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la 'descente' après MDMA ?",
    "c": [
     "Sevrage",
     "Overdose",
     "Période de fatigue et dépression après les effets",
     "Retour des effets"
    ],
    "a": 2
   },
   {
    "q": "Où la MDMA est-elle principalement consommée ?",
    "c": [
     "En soirée, festivals, free parties",
     "À l'école",
     "Au travail",
     "À la maison"
    ],
    "a": 0
   },
   {
    "q": "La MDMA est-elle neurotoxique ?",
    "c": [
     "Oui, toujours",
     "Aucun effet sur le cerveau",
     "Non, sans danger",
     "Des études suggèrent des dommages aux neurones sérotoninergiques"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "drogues_005",
  "cat": "drogues",
  "name": "Le LSD",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le LSD ?",
    "c": [
     "Cannabinoïde",
     "Hallucinogène semi-synthétique dérivé de l'ergot de seigle",
     "Opiacé",
     "Amphétamine"
    ],
    "a": 1
   },
   {
    "q": "Comment se présente le LSD ?",
    "c": [
     "Liquide coloré",
     "Petits papiers buvards, gouttes, gélules",
     "Poudre",
     "Herbe"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les effets du LSD ?",
    "c": [
     "Hallucinations visuelles, altération de la perception, introspection",
     "Hyperactivité",
     "Sédation",
     "Euphorie physique"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un 'bad trip' sous LSD ?",
    "c": [
     "Expérience psychotique angoissante et désagréable",
     "Overdose",
     "Effet secondaire",
     "Crise d'épilepsie"
    ],
    "a": 0
   },
   {
    "q": "Le LSD crée-t-il une dépendance physique ?",
    "c": [
     "Oui, très fort",
     "Dépendance immédiate",
     "Non, pas de dépendance physique documentée",
     "Oui comme l'héroïne"
    ],
    "a": 2
   },
   {
    "q": "Combien de temps durent les effets du LSD ?",
    "c": [
     "1 à 2 heures",
     "24 heures",
     "8 à 12 heures",
     "4 à 6 heures"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la microdose de LSD ?",
    "c": [
     "Dose létale",
     "Dose normale",
     "Surdose",
     "Prise de très petites doses à des fins thérapeutiques ou cognitives"
    ],
    "a": 3
   },
   {
    "q": "Le LSD a-t-il été utilisé en psychothérapie ?",
    "c": [
     "Oui, dans les années 1950-1960, et aujourd'hui en recherche",
     "Oui, très courant",
     "Uniquement dans les années 2000",
     "Non, jamais"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "drogues_006",
  "cat": "drogues",
  "name": "Les champignons",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que les amphétamines ?",
    "c": [
     "Sédatifs",
     "Opiacés",
     "Stimulants du système nerveux central",
     "Hallucinogènes"
    ],
    "a": 2
   },
   {
    "q": "Comment se présentent les amphétamines ?",
    "c": [
     "Herbe",
     "Liquide",
     "Comprimés, gélules, poudre",
     "Patch"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les effets des amphétamines ?",
    "c": [
     "Augmentation de l'énergie, vigilance, diminution de l'appétit",
     "Somnolence",
     "Relaxation",
     "Sédation"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la méthamphétamine ?",
    "c": [
     "Opiacé",
     "Hallucinogène",
     "Cannabinoïde",
     "Amphétamine très puissante et très addictive"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les risques des amphétamines ?",
    "c": [
     "Légers",
     "Dépendance, problèmes cardiaques, psychose",
     "Uniquement insomniaques",
     "Aucun risque"
    ],
    "a": 1
   },
   {
    "q": "À quoi sert le Ritalin (méthylphénidate) ?",
    "c": [
     "Drogue récréative",
     "Antidouleur",
     "Antidépresseur",
     "Traitement du TDAH, c'est une amphétamine légale"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la 'speed' ?",
    "c": [
     "LSD",
     "Cocaïne",
     "Amphétamine de rue sous forme de poudre",
     "Héroïne"
    ],
    "a": 2
   },
   {
    "q": "Les amphétamines sont-elles utilisées en médecine ?",
    "c": [
     "Oui, pour le TDAH et la narcolepsie",
     "Non, jamais",
     "Uniquement en psychiatrie",
     "Uniquement aux USA"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "drogues_007",
  "cat": "drogues",
  "name": "Les amphétamines",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le crack ?",
    "c": [
     "Cocaïne transformée chimiquement pour être fumée",
     "Héroïne pure",
     "Cannabis concentré",
     "Amphétamine"
    ],
    "a": 0
   },
   {
    "q": "Pourquoi le crack est-il particulièrement dangereux ?",
    "c": [
     "Faible dépendance",
     "Dépendance extrêmement rapide et violente",
     "Peu d'effets",
     "Longue durée d'action"
    ],
    "a": 1
   },
   {
    "q": "Comment se consomme le crack ?",
    "c": [
     "Fumé dans une pipe",
     "Injecté",
     "Avale",
     "Sniffé"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les effets immédiats du crack ?",
    "c": [
     "Hallucinations",
     "Sédation",
     "Euphorie intense mais très brève (5-10 minutes)",
     "Euphorie longue (heures)"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le 'craving' dans l'addiction au crack ?",
    "c": [
     "Nostalgie",
     "Plaisir",
     "Besoin irrépressible et urgent de consommer",
     "Petite dose"
    ],
    "a": 2
   },
   {
    "q": "Quelles sont les conséquences sociales du crack ?",
    "c": [
     "Exclusion, précarité, délinquance",
     "Intégration sociale",
     "Santé améliorée",
     "Réussite professionnelle"
    ],
    "a": 0
   },
   {
    "q": "Où le crack est-il le plus consommé dans le monde ?",
    "c": [
     "Afrique",
     "États-Unis, Brésil, Europe de l'Ouest",
     "Asie",
     "Australie"
    ],
    "a": 1
   },
   {
    "q": "Existe-t-il un traitement pour l'addiction au crack ?",
    "c": [
     "Médicaments spécifiques",
     "Oui, thérapie et accompagnement social",
     "Aucun traitement",
     "Substitution comme l'héroïne"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_008",
  "cat": "drogues",
  "name": "La méthamphétamine",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la méthamphétamine ?",
    "c": [
     "Opiacé",
     "Stimulant très puissant et très addictif dérivé des amphétamines",
     "Cannabinoïde",
     "Hallucinogène"
    ],
    "a": 1
   },
   {
    "q": "Comment se présente la méthamphétamine ?",
    "c": [
     "Cristaux, poudre, comprimés",
     "Liquide",
     "Papiers",
     "Herbe"
    ],
    "a": 0
   },
   {
    "q": "Comment se consomme la méthamphétamine ?",
    "c": [
     "Uniquement fumée",
     "Uniquement avalée",
     "Fumée, sniffée, injectée, avalée",
     "Uniquement injectée"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les effets de la méthamphétamine ?",
    "c": [
     "Sédation",
     "Euphorie intense, hyperactivité, perte d'appétit",
     "Relaxation",
     "Somnolence"
    ],
    "a": 1
   },
   {
    "q": "Pourquoi la méthamphétamine est-elle si destructrice ?",
    "c": [
     "Dépendance rapide, dommages dentaires, cérébraux, psychose",
     "Bien tolérée",
     "Peu d'effets",
     "Guérison rapide"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le 'meth mouth' ?",
    "c": [
     "Coloration des dents",
     "Détérioration dentaire sévère due à la méthamphétamine",
     "Mauvaise haleine",
     "Carie simple"
    ],
    "a": 1
   },
   {
    "q": "Dans quels pays la méthamphétamine est-elle un problème majeur ?",
    "c": [
     "États-Unis, Asie du Sud-Est, Australie",
     "Brésil",
     "France",
     "Afrique"
    ],
    "a": 0
   },
   {
    "q": "Quel est le nom de rue le plus courant pour la méthamphétamine ?",
    "c": [
     "Coke, snow",
     "Meth, crystal, ice",
     "Speed",
     "Weed, pot"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_009",
  "cat": "drogues",
  "name": "La caféine",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que les opioïdes ?",
    "c": [
     "Substances qui agissent sur les récepteurs opioïdes du cerveau",
     "Cannabinoïdes",
     "Hallucinogènes",
     "Stimulants"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les opioïdes légaux ?",
    "c": [
     "Fentanyl de rue",
     "Héroïne",
     "Morphine, codéine, tramadol, oxycodone",
     "LSD"
    ],
    "a": 2
   },
   {
    "q": "À quoi servent les opioïdes en médecine ?",
    "c": [
     "Antibiotiques",
     "Anti-inflammatoires",
     "Antidouleurs puissants",
     "Antidépresseurs"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la crise des opioïdes aux États-Unis ?",
    "c": [
     "Nouveau traitement",
     "Pénurie de médicaments",
     "Épidémie de dépendance et d'overdose aux opioïdes prescrits",
     "Réforme de santé"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les risques des opioïdes ?",
    "c": [
     "Légers",
     "Aucun risque",
     "Allergies",
     "Dépendance, accoutumance, dépression respiratoire"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le fentanyl ?",
    "c": [
     "Antibiotique",
     "Anti-inflammatoire",
     "Antidépresseur",
     "Opioïde synthétique 50 à 100 fois plus puissant que la morphine"
    ],
    "a": 3
   },
   {
    "q": "Comment prévenir une overdose aux opioïdes ?",
    "c": [
     "Manger",
     "Boire de l'eau",
     "Se reposer",
     "Avoir de la naloxone à disposition"
    ],
    "a": 3
   },
   {
    "q": "Combien de personnes meurent d'overdose d'opioïdes par an dans le monde ?",
    "c": [
     "Environ 500 000",
     "Environ 50 000",
     "Plus de 100 000",
     "Environ 10 000"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "drogues_010",
  "cat": "drogues",
  "name": "Le tabac",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelle est la substance active addictive du tabac ?",
    "c": [
     "Le monoxyde de carbone",
     "La nicotine",
     "Le benzène",
     "Le goudron"
    ],
    "a": 1
   },
   {
    "q": "Combien de substances chimiques contient la fumée de cigarette ?",
    "c": [
     "Environ 500",
     "Plus de 7 000",
     "Plus de 10 000",
     "Environ 1 000"
    ],
    "a": 1
   },
   {
    "q": "Combien de cancers sont causés par le tabac ?",
    "c": [
     "Le tabac est lié à 17 types de cancers",
     "Aucun",
     "Uniquement le cancer du poumon",
     "2 types de cancers"
    ],
    "a": 0
   },
   {
    "q": "Combien de fumeurs meurent chaque année à cause du tabac ?",
    "c": [
     "500 000",
     "5 millions",
     "Plus de 8 millions dans le monde",
     "1 million"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la cigarette électronique (vapotage) ?",
    "c": [
     "Cigarette classique",
     "Tabac chauffé",
     "Dispositif qui chauffe un liquide contenant de la nicotine",
     "Patch"
    ],
    "a": 2
   },
   {
    "q": "Combien de temps faut-il pour que les poumons commencent à se régénérer après l'arrêt ?",
    "c": [
     "1 jour",
     "1 mois",
     "1 an",
     "Quelques semaines"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le sevrage tabagique ?",
    "c": [
     "Réduction du tabac",
     "Alternative au tabac",
     "Processus d'arrêt de la consommation de tabac",
     "Traitement médical"
    ],
    "a": 2
   },
   {
    "q": "Quel est le pourcentage de fumeurs en France ?",
    "c": [
     "Environ 40%",
     "Environ 10%",
     "Environ 50%",
     "Environ 25% de la population"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "drogues_011",
  "cat": "drogues",
  "name": "La MDMA",
  "level": "adulte",
  "levels": [
   {
    "q": "Dans quelles boissons trouve-t-on naturellement de la caféine ?",
    "c": [
     "Uniquement le café",
     "Jus de fruits",
     "Uniquement le thé",
     "Café, thé, guarana, maté"
    ],
    "a": 3
   },
   {
    "q": "Quel est l'effet principal de la caféine ?",
    "c": [
     "Hallucinogène",
     "Stimulant du système nerveux central (réduction de la fatigue)",
     "Sédatif",
     "Anxiolytique"
    ],
    "a": 1
   },
   {
    "q": "Combien de caféine contient une tasse de café filtre ?",
    "c": [
     "200 à 300 mg",
     "10 à 30 mg",
     "300 à 500 mg",
     "80 à 120 mg"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la dose quotidienne recommandée de caféine ?",
    "c": [
     "Jusqu'à 800 mg",
     "Jusqu'à 1 g",
     "Jusqu'à 200 mg",
     "Jusqu'à 400 mg par jour (environ 3-4 tasses)"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les symptômes du surdosage en caféine ?",
    "c": [
     "Somnolence",
     "Hypotension",
     "Ralentissement cardiaque",
     "Insomnie, palpitations, anxiété, tremblements"
    ],
    "a": 3
   },
   {
    "q": "La caféine crée-t-elle une dépendance ?",
    "c": [
     "Forte dépendance physique",
     "Non, aucune",
     "Oui, une dépendance psychique légère à modérée",
     "Aucun effet"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le sevrage à la caféine ?",
    "c": [
     "Aucun symptôme",
     "Maux de tête, fatigue, irritabilité pendant quelques jours",
     "Délire",
     "Symptômes sévères"
    ],
    "a": 1
   },
   {
    "q": "La caféine est-elle considérée comme une drogue ?",
    "c": [
     "Non, c'est une boisson",
     "Oui, c'est un psychoactif stimulant légal",
     "Oui, comme l'héroïne",
     "Non, c'est un aliment"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_012",
  "cat": "drogues",
  "name": "Le GHB",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'addiction (dépendance) ?",
    "c": [
     "Simple habitude",
     "Maladie chronique caractérisée par la recherche compulsive d'une substance ou d'un comportement",
     "Choix délibéré",
     "Manque de volonté"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les trois critères de l'addiction ?",
    "c": [
     "Dose, effet, temps",
     "Perte de contrôle, craving, poursuite malgré les conséquences",
     "Usage régulier, plaisir, prix",
     "Occasionnel, modéré, excessif"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la dépendance physique ?",
    "c": [
     "Envie passagère",
     "Simple habitude",
     "Besoin psychologique",
     "Adaptation du corps à une substance, avec syndrome de sevrage"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la dépendance psychique ?",
    "c": [
     "Addiction comportementale",
     "Besoin compulsif de consommer pour obtenir du plaisir ou éviter le malaise",
     "Dépendance physique",
     "Accoutumance"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le craving ?",
    "c": [
     "Souvenir",
     "Plaisir mesuré",
     "Petite quantité",
     "Désir intense et irrépressible de consommer"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la tolérance ?",
    "c": [
     "Diminution de l'effet",
     "Résistance",
     "Allergie",
     "Nécessité d'augmenter les doses pour obtenir le même effet"
    ],
    "a": 3
   },
   {
    "q": "Quels traitements existent pour l'addiction ?",
    "c": [
     "Aucun traitement",
     "Thérapie cognitivo-comportementale, traitements de substitution, groupes de parole",
     "Uniquement les médicaments",
     "Uniquement l'hospitalisation"
    ],
    "a": 1
   },
   {
    "q": "L'addiction est-elle reconnue comme une maladie par l'OMS ?",
    "c": [
     "Non, c'est un trouble du comportement",
     "Non, c'est un vice",
     "Oui, c'est une maladie chronique du cerveau",
     "Oui, mais mal classée"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "drogues_013",
  "cat": "drogues",
  "name": "La kétamine",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le sevrage ?",
    "c": [
     "Traitement médical",
     "Désintoxication forcée",
     "Remplacement par une autre substance",
     "Arrêt ou réduction de la consommation d'une substance addictive"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les symptômes du sevrage ?",
    "c": [
     "Bien-être",
     "Euphorie",
     "Aucun symptôme",
     "Anxiété, irritabilité, insomnie, sueurs, douleurs"
    ],
    "a": 3
   },
   {
    "q": "Combien de temps dure un sevrage aigu ?",
    "c": [
     "Quelques jours à quelques semaines selon la substance",
     "24 heures",
     "Plusieurs mois",
     "1 an"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le syndrome de sevrage alcoolique ?",
    "c": [
     "Simple gueule de bois",
     "Fatigue",
     "Nostalgie",
     "Ensemble de symptômes après arrêt de l'alcool (parfois mortel)"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un sevrage médicalisé ?",
    "c": [
     "Sevrage à domicile",
     "Sevrage supervisé par des professionnels de santé",
     "Auto-sevrage",
     "Sevrage brutal"
    ],
    "a": 1
   },
   {
    "q": "Le sevrage peut-il être dangereux ?",
    "c": [
     "Oui, pour l'alcool et les benzodiazépines, il peut être mortel",
     "Non, jamais",
     "Seulement psychologiquement",
     "Légèrement"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la cure de désintoxication ?",
    "c": [
     "Hospitalisation courte",
     "Programme intensif pour arrêter une addiction en milieu spécialisé",
     "Médicaments",
     "Traitement à domicile"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la première étape d'un sevrage réussi ?",
    "c": [
     "L'arrêt brutal",
     "L'isolement",
     "Le traitement médical",
     "La reconnaissance du problème et la demande d'aide"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "drogues_014",
  "cat": "drogues",
  "name": "Le crack",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce qu'une overdose ?",
    "c": [
     "Dose thérapeutique",
     "Fort effet",
     "Prise d'une dose toxique qui peut entraîner la mort",
     "Prise régulière"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les signes d'une overdose aux opioïdes ?",
    "c": [
     "Convulsions",
     "Hallucinations",
     "Agitation",
     "Respirations lentes, pupilles contractées, inconscience"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les signes d'une overdose aux stimulants ?",
    "c": [
     "Hypothermie",
     "Somnolence",
     "Bradycardie",
     "Crise cardiaque, AVC, hyperthermie, convulsions"
    ],
    "a": 3
   },
   {
    "q": "Que faire en cas d'overdose présumée ?",
    "c": [
     "Faire marcher la personne",
     "Appeler les urgences, administrer naloxone si opioïdes",
     "Attendre",
     "Donner à boire"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la naloxone ?",
    "c": [
     "Antibiotique",
     "Vaccin",
     "Stimulant",
     "Antidote qui réverse une overdose aux opioïdes"
    ],
    "a": 3
   },
   {
    "q": "Combien de personnes meurent d'overdose chaque année dans le monde ?",
    "c": [
     "Environ 50 000",
     "Environ 1 million",
     "Environ 500 000",
     "Environ 100 000"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une overdose retardée ?",
    "c": [
     "Overdose qui survient plusieurs heures après la prise",
     "Overdose légère",
     "Réaction allergique",
     "Fausse overdose"
    ],
    "a": 0
   },
   {
    "q": "Qui peut administrer la naloxone ?",
    "c": [
     "Toute personne formée, y compris les proches",
     "Uniquement les médecins",
     "Uniquement les ambulanciers",
     "Uniquement à l'hôpital"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "drogues_015",
  "cat": "drogues",
  "name": "L'opium",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'alcoolisme (trouble de l'usage d'alcool) ?",
    "c": [
     "Simple ivresse",
     "Maladie caractérisée par une consommation excessive et compulsive d'alcool",
     "Consommation modérée",
     "Usage occasionnel"
    ],
    "a": 1
   },
   {
    "q": "Combien de personnes souffrent d'alcoolisme en France ?",
    "c": [
     "Environ 1 million",
     "Environ 10 millions",
     "Environ 5 millions",
     "Environ 500 000"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un verre standard d'alcool ?",
    "c": [
     "20 g d'alcool",
     "30 g d'alcool",
     "10 g d'alcool pur",
     "5 g d'alcool"
    ],
    "a": 2
   },
   {
    "q": "Quelles sont les limites de consommation recommandées par l'OMS ?",
    "c": [
     "Pas de limite",
     "Pas plus de 2 verres par jour et jours de pause",
     "10 verres par jour",
     "5 verres par jour"
    ],
    "a": 1
   },
   {
    "q": "Quelles maladies sont causées par l'alcoolisme chronique ?",
    "c": [
     "Diabète",
     "Maladies cardiaques",
     "Cirrhose, pancréatite, cancers, neuropathies",
     "Uniquement la cirrhose"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le syndrome de sevrage alcoolique ?",
    "c": [
     "Irritabilité",
     "Fatigue",
     "Symptômes après arrêt brutal: tremblements, hallucinations, convulsions",
     "Simple gueule de bois"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le delirium tremens ?",
    "c": [
     "Forme grave du sevrage alcoolique avec confusion et hallucinations",
     "Trouble léger",
     "Intoxication",
     "Ivresse"
    ],
    "a": 0
   },
   {
    "q": "Existe-t-il des traitements médicamenteux pour l'alcoolisme ?",
    "c": [
     "Uniquement les groupes de parole",
     "Oui, comme le baclofène, le naltrexone, l'acamprosate",
     "Non, aucun",
     "Uniquement la psychothérapie"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_016",
  "cat": "drogues",
  "name": "La morphine",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce qu'une drogue de synthèse ?",
    "c": [
     "Champignon",
     "Drogue naturelle",
     "Plante",
     "Substance psychoactive créée chimiquement en laboratoire"
    ],
    "a": 3
   },
   {
    "q": "Pourquoi les drogues de synthèse sont-elles dangereuses ?",
    "c": [
     "Bien connues",
     "Peu d'effets",
     "Elles sont sûres",
     "Composition inconnue, dosage imprévisible, effets graves"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un NPS (Nouveau Produit de Synthèse) ?",
    "c": [
     "Médicament",
     "Complément alimentaire",
     "Drogue naturelle",
     "Molécule modifiée pour contourner les lois"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les types de drogues de synthèse ?",
    "c": [
     "Uniquement les amphétamines",
     "Uniquement les opioïdes",
     "Amphétamines, cathinones, cannabinoïdes synthétiques, benzodiazépines",
     "Uniquement les cannabinoïdes"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le GHB ?",
    "c": [
     "Cannabinoïde",
     "Stimulant",
     "Drogue de synthèse sédative utilisée comme drogue du viol",
     "Hallucinogène"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le 2CB ?",
    "c": [
     "Opiacé",
     "Drogue de synthèse aux effets hallucinogènes et empathogènes",
     "Stimulant",
     "Sédatif"
    ],
    "a": 1
   },
   {
    "q": "Comment sont fabriquées les drogues de synthèse ?",
    "c": [
     "Dans des laboratoires clandestins avec des précurseurs chimiques",
     "Dans des usines pharmaceutiques",
     "Dans des cuisines",
     "Dans des laboratoires naturels"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les risques d'overdose avec les drogues de synthèse ?",
    "c": [
     "Faibles si testées",
     "Élevés car la pureté et le dosage sont inconnus",
     "Nuls",
     "Faibles"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_017",
  "cat": "drogues",
  "name": "Les benzodiazépines",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la distinction entre drogues douces et dures ?",
    "c": [
     "Classification basée sur la dangerosité et le potentiel addictif",
     "Prix",
     "Légalité",
     "Origine naturelle ou synthétique"
    ],
    "a": 0
   },
   {
    "q": "Quelle drogue est généralement classée comme 'douce' ?",
    "c": [
     "La cocaïne",
     "Le crack",
     "L'héroïne",
     "Le cannabis"
    ],
    "a": 3
   },
   {
    "q": "Le terme 'drogue douce' est-il utilisé par les autorités scientifiques ?",
    "c": [
     "Non, il est contesté car toute drogue comporte des risques",
     "Oui, validé",
     "Oui, officiellement",
     "Oui, par l'OMS"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les risques du cannabis considéré comme drogue douce ?",
    "c": [
     "Aucun risque",
     "Risques physiques uniquement",
     "Dépendance psychique, troubles de la mémoire, anxiété",
     "Risques vitaux"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la position de la France sur le cannabis ?",
    "c": [
     "En cours de légalisation",
     "C'est illégal mais le débat sur la légalisation existe",
     "Autorisé médicalement",
     "Totalement légal"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la dépénalisation ?",
    "c": [
     "Légalisation totale",
     "Absence de sanction pénale pour la consommation personnelle",
     "Autorisation",
     "Vente libre"
    ],
    "a": 1
   },
   {
    "q": "Dans quels pays le cannabis est-il dépénalisé ou légalisé ?",
    "c": [
     "Aucun",
     "Pays-Bas (dépénalisé), Canada (légal), Portugal (dépénalisé)",
     "Uniquement aux USA",
     "Partout en Europe"
    ],
    "a": 1
   },
   {
    "q": "Les drogues dites douces peuvent-elles mener aux drogues dures ?",
    "c": [
     "Non, jamais",
     "C'est un mythe",
     "Oui, systématiquement",
     "C'est un facteur de risque parmi d'autres, pas une fatalité"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "drogues_018",
  "cat": "drogues",
  "name": "Les antidépresseurs",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelles drogues sont classées comme 'dures' ?",
    "c": [
     "Cannabis, tabac",
     "LSD, champignons",
     "Héroïne, cocaïne, crack, méthamphétamine",
     "Caféine, théine"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qui caractérise une drogue dure ?",
    "c": [
     "Potentiel addictif élevé et risques graves pour la santé",
     "Origine synthétique",
     "Prix élevé",
     "Illégalité"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les risques d'une dépendance à l'héroïne ?",
    "c": [
     "Aucun risque physique",
     "Peu de conséquences",
     "Dépendance légère",
     "Dépendance physique intense, overdoses, infections"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les risques à long terme de la cocaïne ?",
    "c": [
     "Uniquement cardiaques",
     "Cardiaques, neurologiques, ORL, psychiatriques",
     "Uniquement psychologiques",
     "Aucun"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la polyconsommation de drogues dures ?",
    "c": [
     "Traitement",
     "Consommation régulière",
     "Consommation simultanée ou alternée de plusieurs drogues dures",
     "Consommation modérée"
    ],
    "a": 2
   },
   {
    "q": "Pourquoi le mélange héroïne-cocaïne (speedball) est-il dangereux ?",
    "c": [
     "Moins dangereux",
     "Effets annulés",
     "Sans risque",
     "Risque d'overdose mortel car effets opposés masquent les symptômes"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les signes de l'addiction aux drogues dures ?",
    "c": [
     "Perte de contrôle, craving, isolement, problèmes financiers",
     "Santé stable",
     "Réussite sociale",
     "Bonne humeur"
    ],
    "a": 0
   },
   {
    "q": "Quels traitements existent pour les addictions aux drogues dures ?",
    "c": [
     "Traitements de substitution, thérapies, communautés thérapeutiques",
     "Uniquement l'hôpital",
     "Aucun",
     "Uniquement les médicaments"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "drogues_019",
  "cat": "drogues",
  "name": "La mescaline",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la légalisation d'une drogue ?",
    "c": [
     "Simple dépénalisation",
     "Autorisation légale de produire, vendre et consommer une substance",
     "Autorisation médicale",
     "Autorisation partielle"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la différence entre légalisation et dépénalisation ?",
    "c": [
     "Identique",
     "Dépénalisation = plus strict",
     "Légalisation = cadre légal complet, dépénalisation = pas de sanction pénale",
     "Légalisation = moins strict"
    ],
    "a": 2
   },
   {
    "q": "Quel pays a le premier légalisé le cannabis récréatif ?",
    "c": [
     "Canada (2018)",
     "Pays-Bas",
     "Uruguay (2013)",
     "Portugal"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les arguments pour la légalisation ?",
    "c": [
     "Contrôle qualité, réduction du marché noir, taxes, liberté individuelle",
     "Risques pour la santé",
     "Moralité",
     "Augmentation de la consommation"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les arguments contre la légalisation ?",
    "c": [
     "Diminution des risques",
     "Avantages économiques",
     "Meilleur contrôle",
     "Augmentation de la consommation, risques sanitaires"
    ],
    "a": 3
   },
   {
    "q": "Le Portugal a-t-il dépénalisé toutes les drogues ?",
    "c": [
     "Non, uniquement le cannabis",
     "Oui, depuis 2001, avec des résultats positifs sur la santé",
     "Uniquement les drogues douces",
     "Oui, mais échec"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la réduction des risques (RDR) ?",
    "c": [
     "Traitement obligatoire",
     "Répression",
     "Promotion de la consommation",
     "Politique visant à réduire les conséquences négatives de la consommation"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les résultats de la légalisation du cannabis au Canada ?",
    "c": [
     "Échec total",
     "Baisse du marché noir, mais augmentation de la consommation",
     "Aucun effet",
     "Uniquement des effets négatifs"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_020",
  "cat": "drogues",
  "name": "Le DMT",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le trafic de drogue ?",
    "c": [
     "Consommation personnelle",
     "Production, transport et vente illégale de substances",
     "Usage récréatif",
     "Prescription médicale"
    ],
    "a": 1
   },
   {
    "q": "Quel est le chiffre d'affaires du trafic de drogue dans le monde ?",
    "c": [
     "Environ 1 000 milliards",
     "Plus de 300 milliards de dollars par an",
     "Moins de 100 millions",
     "Environ 50 milliards"
    ],
    "a": 1
   },
   {
    "q": "Quelles sont les principales routes du trafic de drogue ?",
    "c": [
     "Amérique du Sud vers USA/Europe, Asie du Sud-Est, Afghanistan",
     "Routes maritimes uniquement",
     "Routes locales",
     "Uniquement entre l'Amérique et l'Europe"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les cartels de la drogue les plus puissants ?",
    "c": [
     "Réseaux chinois",
     "Cartels mexicains (Sinaloa, Jalisco), mafia italienne",
     "Cartels français",
     "Mafias russes"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le blanchiment d'argent dans le trafic ?",
    "c": [
     "Dépense",
     "Épargne",
     "Investissement légal",
     "Dissimulation de l'origine illicite des profits"
    ],
    "a": 3
   },
   {
    "q": "Quel pays est le plus grand producteur d'opium ?",
    "c": [
     "Birmanie",
     "Afghanistan",
     "Colombie",
     "Mexique"
    ],
    "a": 1
   },
   {
    "q": "Quelles sont les peines pour trafic de drogue en France ?",
    "c": [
     "10 ans",
     "5 ans",
     "Perpétuité",
     "Jusqu'à 30 ans de réclusion et 7,5 millions € d'amende"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'Office anti-stupéfiants (OFAST) ?",
    "c": [
     "Agence européenne",
     "Police française spécialisée dans la lutte contre le trafic",
     "ONU",
     "ONG"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_021",
  "cat": "drogues",
  "name": "Le poppers",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la réhabilitation des toxicomanes ?",
    "c": [
     "Isolement",
     "Processus pour aider une personne à se rétablir de l'addiction",
     "Soins médicaux uniquement",
     "Punition"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une communauté thérapeutique ?",
    "c": [
     "Centre médical",
     "Prison",
     "Hôpital",
     "Structure d'hébergement et de soins pour personnes addictes"
    ],
    "a": 3
   },
   {
    "q": "Combien de temps dure un programme de réhabilitation ?",
    "c": [
     "Toute la vie",
     "Quelques mois à plusieurs années selon les besoins",
     "Un mois",
     "Quelques jours"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le suivi post-cure ?",
    "c": [
     "Prévention",
     "Traitement initial",
     "Accompagnement après la sortie d'une cure de désintoxication",
     "Évaluation"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que les groupes de parole (Narcotiques Anonymes) ?",
    "c": [
     "Groupes médicaux",
     "Réunions d'information",
     "Groupes d'entraide entre personnes addictes",
     "Thérapie de groupe"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la thérapie cognitivo-comportementale (TCC) ?",
    "c": [
     "Thérapie qui aide à modifier les pensées et comportements liés à l'addiction",
     "Médicaments",
     "Hypnose",
     "Hospitalisation"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les facteurs clés de succès d'une réhabilitation ?",
    "c": [
     "Isolement",
     "Motivation, soutien social, accompagnement professionnel",
     "Médicaments",
     "Traitement forcé"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la prévention de la rechute ?",
    "c": [
     "Arrêt des soins",
     "Stratégies pour éviter de retomber dans l'addiction",
     "Traitement continu",
     "Retour à la consommation"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "drogues_022",
  "cat": "drogues",
  "name": "La salvia",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelles drogues étaient utilisées dans l'Antiquité ?",
    "c": [
     "LSD",
     "Amphétamines",
     "Opium, cannabis, alcool, champignons hallucinogènes",
     "Cocaïne"
    ],
    "a": 2
   },
   {
    "q": "Quel peuple utilisait des champignons hallucinogènes (teonanácatl) ?",
    "c": [
     "Les Aztèques",
     "Les Égyptiens",
     "Les Romains",
     "Les Grecs"
    ],
    "a": 0
   },
   {
    "q": "Quand l'opium a-t-il été découvert ?",
    "c": [
     "Au Moyen Âge",
     "XXe siècle",
     "XIXe siècle",
     "Utilisé depuis 3 400 av. J.-C. par les Sumériens"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la guerre de l'opium (1839-1860) ?",
    "c": [
     "Conflit entre cartels",
     "Guerre en Colombie",
     "Conflit entre la Chine et le Royaume-Uni sur le commerce d'opium",
     "Guerre en Afghanistan"
    ],
    "a": 2
   },
   {
    "q": "Quand la cocaïne a-t-elle été isolée pour la première fois ?",
    "c": [
     "1910",
     "1859 par Albert Niemann",
     "1900",
     "1800"
    ],
    "a": 1
   },
   {
    "q": "Qui a popularisé le LSD dans les années 1960 ?",
    "c": [
     "Sigmund Freud",
     "Aldous Huxley",
     "Timothy Leary et le mouvement psychédélique",
     "Albert Hofmann"
    ],
    "a": 2
   },
   {
    "q": "Quand l'héroïne a-t-elle été synthétisée ?",
    "c": [
     "1874 par C.R. Wright, commercialisée en 1898 par Bayer",
     "1900",
     "1880",
     "1920"
    ],
    "a": 0
   },
   {
    "q": "Quelle drogue était utilisée comme médicament pour enfants au XIXe siècle ?",
    "c": [
     "La morphine et l'opium (sirops pour enfants)",
     "La cocaïne",
     "Le LSD",
     "L'ecstasy"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "drogues_023",
  "cat": "drogues",
  "name": "Les opiacés",
  "level": "adulte",
  "levels": [
   {
    "q": "Que sont les dépresseurs du système nerveux ?",
    "c": [
     "Hallucinogènes",
     "Stimulants",
     "Substances qui ralentissent l'activité cérébrale et corporelle",
     "Psychédéliques"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les principaux dépresseurs ?",
    "c": [
     "Alcool, benzodiazépines, opioïdes, barbituriques",
     "LSD, champignons",
     "Cocaïne, amphétamines",
     "Cannabis, CBD"
    ],
    "a": 0
   },
   {
    "q": "Comment agissent les dépresseurs sur le système nerveux ?",
    "c": [
     "En activant la sérotonine",
     "En stimulant l'adrénaline",
     "En bloquant la dopamine",
     "En renforçant l'action du GABA, un neurotransmetteur inhibiteur"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les effets des dépresseurs ?",
    "c": [
     "Hallucinations",
     "Hyperactivité",
     "Relaxation, somnolence, diminution de l'anxiété",
     "Excitation"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les risques des dépresseurs ?",
    "c": [
     "Psychose",
     "Hypertension",
     "Crise cardiaque",
     "Dépression respiratoire, dépendance, overdose"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que les benzodiazépines ?",
    "c": [
     "Stimulants",
     "Antipsychotiques",
     "Antidépresseurs",
     "Médicaments anxiolytiques et sédatifs qui agissent sur le GABA"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les risques du mélange alcool-benzodiazépines ?",
    "c": [
     "Insomnie",
     "Dépression respiratoire mortelle",
     "Anxiété",
     "Effet nul"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que les barbituriques ?",
    "c": [
     "Anciens sédatifs très dangereux, aujourd'hui peu prescrits",
     "Antidouleurs",
     "Antibiotiques",
     "Stimulants"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "drogues_024",
  "cat": "drogues",
  "name": "La codéine",
  "level": "adulte",
  "levels": [
   {
    "q": "Que sont les stimulants du système nerveux ?",
    "c": [
     "Substances qui augmentent l'éveil, l'énergie et l'attention",
     "Dépresseurs",
     "Hallucinogènes",
     "Sédatifs"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les principaux stimulants ?",
    "c": [
     "Cocaïne, amphétamines, caféine, nicotine",
     "Alcool, GHB",
     "Héroïne, morphine",
     "LSD, champignons"
    ],
    "a": 0
   },
   {
    "q": "Comment agissent les stimulants ?",
    "c": [
     "En réduisant l'activité cérébrale",
     "En bloquant le GABA",
     "En activant les récepteurs opioïdes",
     "En augmentant la dopamine, noradrénaline et sérotonine"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les effets des stimulants ?",
    "c": [
     "Énergie, vigilance, euphorie, diminution de l'appétit",
     "Relaxation",
     "Ralentissement",
     "Somnolence"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les risques des stimulants ?",
    "c": [
     "Problèmes cardiaques, dépendance, anxiété, psychose",
     "Aucun risque",
     "Hypotension",
     "Bradycardie"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la cocaïne ?",
    "c": [
     "Opiacé",
     "Sédatif",
     "Stimulant puissant dérivé des feuilles de coca",
     "Hallucinogène"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la nicotine ?",
    "c": [
     "Stimulant légal présent dans le tabac, très addictif",
     "Sédatif",
     "Hallucinogène",
     "Anxiolytique"
    ],
    "a": 0
   },
   {
    "q": "Quelle différence entre stimulants légaux et illégaux ?",
    "c": [
     "Les illégaux sont tous mortels",
     "Aucune différence",
     "Les légaux sont sans danger",
     "Les légaux (caféine, nicotine) sont régulés mais peuvent aussi être dangereux"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "drogues_025",
  "cat": "drogues",
  "name": "La nicotine",
  "level": "adulte",
  "levels": [
   {
    "q": "Que sont les hallucinogènes ?",
    "c": [
     "Opiacés",
     "Substances qui modifient la perception, la pensée et les émotions",
     "Sédatifs",
     "Stimulants"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les principaux hallucinogènes ?",
    "c": [
     "Cocaïne, héroïne",
     "Cannabis, tabac",
     "Alcool, GHB",
     "LSD, psilocybine, mescaline, DMT"
    ],
    "a": 3
   },
   {
    "q": "Comment agissent les hallucinogènes ?",
    "c": [
     "En bloquant la dopamine",
     "En agissant sur les récepteurs sérotoninergiques 5-HT2A",
     "En inhibant la noradrénaline",
     "En activant le GABA"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les effets des hallucinogènes ?",
    "c": [
     "Hallucinations visuelles, auditives, altération de la conscience",
     "Euphorie physique",
     "Agitation",
     "Sédation"
    ],
    "a": 0
   },
   {
    "q": "Le LSD peut-il provoquer des flashbacks ?",
    "c": [
     "Uniquement en cas de surdose",
     "Non, jamais",
     "Oui, des réminiscences imprévisibles des effets",
     "Oui, systématiquement"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que les champignons hallucinogènes (psilocybine) ?",
    "c": [
     "Champignons contenant de la psilocybine, un hallucinogène naturel",
     "Champignons comestibles",
     "Médicaments",
     "Champignons vénéneux"
    ],
    "a": 0
   },
   {
    "q": "Les hallucinogènes sont-ils utilisés en recherche médicale ?",
    "c": [
     "Oui, très courants",
     "Non, jamais",
     "Oui, pour traiter la dépression, l'anxiété et les addictions",
     "Uniquement dans les années 1960"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la mescaline ?",
    "c": [
     "Hallucinogène naturel extrait du cactus peyotl utilisé par les Amérindiens",
     "Stimulant",
     "Amphétamine",
     "Opiacé"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "alcool_001",
  "cat": "alcool",
  "name": "Le vin rouge",
  "level": "adulte",
  "levels": [
   {
    "q": "Depuis quand le vin est-il produit ?",
    "c": [
     "Depuis l'Antiquité grecque",
     "Depuis 2 000 ans",
     "Depuis environ 8 000 ans (Caucase)",
     "Depuis le Moyen Âge"
    ],
    "a": 2
   },
   {
    "q": "Quel pays est le plus grand producteur de vin au monde ?",
    "c": [
     "États-Unis",
     "France",
     "Espagne",
     "Italie"
    ],
    "a": 3
   },
   {
    "q": "Quels étaient les principaux producteurs de vin dans l'Antiquité ?",
    "c": [
     "Égypte et Perse",
     "Chine et Inde",
     "Gaule et Bretagne",
     "Grèce et Rome"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le vin ?",
    "c": [
     "Alcool distillé",
     "Jus de raisin",
     "Boisson gazeuse",
     "Boisson alcoolisée obtenue par fermentation du raisin"
    ],
    "a": 3
   },
   {
    "q": "Comment le vin s'est-il répandu en Europe ?",
    "c": [
     "Par les Arabes",
     "Par les Croisés",
     "Par les Vikings",
     "Par les Romains et les Grecs"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'amphore dans l'histoire du vin ?",
    "c": [
     "Vin grec",
     "Récipient antique pour transporter le vin",
     "Rituel",
     "Cépage"
    ],
    "a": 1
   },
   {
    "q": "Qui a introduit la culture de la vigne en Gaule ?",
    "c": [
     "Les Phéniciens",
     "Les Romains",
     "Les Grecs",
     "Les Gaulois"
    ],
    "a": 1
   },
   {
    "q": "Quand la Champagne est-elle devenue une région viticole ?",
    "c": [
     "Au Ier siècle",
     "Au XIXe siècle",
     "À l'époque médiévale",
     "Au XVIe siècle"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_002",
  "cat": "alcool",
  "name": "Le vin blanc",
  "level": "adulte",
  "levels": [
   {
    "q": "Quels sont les principaux types de vin ?",
    "c": [
     "Vin de table, AOC, IGP",
     "Rouge et blanc uniquement",
     "Sec, doux, moelleux",
     "Rouge, blanc, rosé, effervescent"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un vin rouge ?",
    "c": [
     "Vin corsé",
     "Vin de garde",
     "Vin issu de raisins noirs fermentés avec la peau",
     "Vin coloré"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un vin blanc ?",
    "c": [
     "Vin léger",
     "Vin issu de raisins blancs ou noirs sans la peau",
     "Vin clair",
     "Vin sec"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un vin rosé ?",
    "c": [
     "Vin obtenu par une macération courte des raisins noirs",
     "Vin fruité",
     "Vin clair",
     "Mélange de rouge et blanc"
    ],
    "a": 0
   },
   {
    "q": "Comment est produit le champagne ?",
    "c": [
     "Par fermentation unique",
     "Par gazéification",
     "Par ajout de sucre",
     "Par double fermentation en bouteille (méthode champenoise)"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un vin moelleux ?",
    "c": [
     "Vin jeune",
     "Vin pétillant",
     "Vin contenant du sucre résiduel (plus sucré)",
     "Vin sans alcool"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un vin AOC ?",
    "c": [
     "Appellation d'Origine Contrôlée, garantissant l'origine",
     "Vin de cépage",
     "Alcool Ordinaire de Consommation",
     "Vin artisanal"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les cépages principaux pour le vin rouge ?",
    "c": [
     "Chardonnay, Sauvignon, Riesling",
     "Pinot Gris, Gewurztraminer",
     "Merlot, Cabernet Sauvignon, Pinot Noir, Syrah",
     "Ugni Blanc, Colombard"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_003",
  "cat": "alcool",
  "name": "La bière",
  "level": "adulte",
  "levels": [
   {
    "q": "Quels sont les ingrédients de base de la bière ?",
    "c": [
     "Eau, blé, houblon, sel",
     "Eau, orge, sucre, levure",
     "Eau, malt, riz, levure",
     "Eau, malt, houblon, levure"
    ],
    "a": 3
   },
   {
    "q": "Quel pays est le plus grand consommateur de bière par habitant ?",
    "c": [
     "République tchèque",
     "Irlande",
     "Allemagne",
     "Belgique"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le houblon ?",
    "c": [
     "Levure",
     "Additif",
     "Plante qui donne l'amertume et l'arôme à la bière",
     "Céréale"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les principaux types de bière ?",
    "c": [
     "Lager, Ale, Stout, IPA, Blonde",
     "Bière pression, bouteille, canette",
     "Brune, rousse, dorée",
     "Rouge, blanche, rosée"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'une bière IPA ?",
    "c": [
     "Bière légère",
     "Bière blanche",
     "Bière d'abbaye",
     "India Pale Ale, bière très houblonnée"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la fermentation haute ?",
    "c": [
     "Fermentation au froid",
     "Fermentation en bouteille",
     "Fermentation à température ambiante pour les Ales",
     "Fermentation rapide"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la teneur en alcool moyenne d'une bière standard ?",
    "c": [
     "2-3% vol.",
     "4-6% vol.",
     "7-9% vol.",
     "10-12% vol."
    ],
    "a": 1
   },
   {
    "q": "Quelle est la plus ancienne brasserie encore en activité ?",
    "c": [
     "Guinness",
     "Weihenstephan (Allemagne, 1040)",
     "Budweiser",
     "Heineken"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "alcool_004",
  "cat": "alcool",
  "name": "Le champagne",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce qu'un spiritueux ?",
    "c": [
     "Bière",
     "Boisson fermentée",
     "Vin",
     "Boisson alcoolisée obtenue par distillation"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la teneur en alcool minimale d'un spiritueux ?",
    "c": [
     "20% vol.",
     "15% vol.",
     "10% vol.",
     "5% vol."
    ],
    "a": 1
   },
   {
    "q": "Quels sont les principaux spiritueux ?",
    "c": [
     "Champagne, mousseux",
     "Whisky, vodka, rhum, gin, tequila, cognac",
     "Vin, bière, cidre",
     "Porto, Xérès, Muscat"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la distillation ?",
    "c": [
     "Fermentation",
     "Filtration",
     "Macération",
     "Procédé qui concentre l'alcool par chauffage et condensation"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un alambic ?",
    "c": [
     "Appareil utilisé pour la distillation",
     "Fût de vieillissement",
     "Verre",
     "Bouteille"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le vieillissement en fût ?",
    "c": [
     "Maturation du spiritueux en fût de chêne pour développer les arômes",
     "Stockage en bouteille",
     "Fermentation longue",
     "Distillation lente"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la différence entre cognac et armagnac ?",
    "c": [
     "Région et méthode de distillation différentes",
     "Cépage utilisé",
     "Couleur différente",
     "Teneur en alcool"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'une eau-de-vie ?",
    "c": [
     "Spiritueux issu de la distillation de fruits fermentés",
     "Boisson sucrée",
     "Vieil alcool",
     "Alcool pur"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "alcool_005",
  "cat": "alcool",
  "name": "Le whisky",
  "level": "adulte",
  "levels": [
   {
    "q": "De quoi est fait le whisky ?",
    "c": [
     "Canne à sucre",
     "Céréales fermentées et distillées (orge, maïs, seigle)",
     "Pomme de terre",
     "Raisin"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les principaux pays producteurs de whisky ?",
    "c": [
     "Russie, Pologne",
     "Allemagne, Belgique",
     "France, Italie, Espagne",
     "Écosse, États-Unis, Canada, Japon, Irlande"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le Scotch whisky ?",
    "c": [
     "Whisky vieux",
     "Whisky tourbé",
     "Whisky de luxe",
     "Whisky produit en Écosse"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le Bourbon ?",
    "c": [
     "Whisky irlandais",
     "Whisky américain à base de maïs (au moins 51%)",
     "Whisky japonais",
     "Whisky canadien"
    ],
    "a": 1
   },
   {
    "q": "Combien d'années un whisky doit-il vieillir minimum ?",
    "c": [
     "5 ans",
     "1 an",
     "10 ans",
     "3 ans pour le Scotch"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le single malt ?",
    "c": [
     "Whisky en grain",
     "Whisky haut de gamme",
     "Whisky d'une seule distillerie à base de pur malt d'orge",
     "Mélange de whiskies"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le blended whisky ?",
    "c": [
     "Whisky aromatisé",
     "Assemblage de whiskies de différentes distilleries",
     "Whisky de luxe",
     "Whisky allégé"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la tourbe dans le whisky écossais ?",
    "c": [
     "Région écossaise",
     "Type d'orge",
     "Combustible utilisé pour sécher le malt, donnant un goût fumé",
     "Fût spécial"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_006",
  "cat": "alcool",
  "name": "La vodka",
  "level": "adulte",
  "levels": [
   {
    "q": "De quoi est faite la vodka traditionnelle ?",
    "c": [
     "Blé, seigle ou pommes de terre",
     "Canne à sucre",
     "Raisin",
     "Orge"
    ],
    "a": 0
   },
   {
    "q": "Quels pays sont les plus réputés pour la vodka ?",
    "c": [
     "Japon et Chine",
     "Écosse et Irlande",
     "France et Italie",
     "Russie et Pologne"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la teneur en alcool typique de la vodka ?",
    "c": [
     "35% vol.",
     "30% vol.",
     "40% vol.",
     "50% vol."
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la filtration au charbon dans la vodka ?",
    "c": [
     "Procédé qui purifie la vodka et adoucit le goût",
     "Distillation",
     "Méthode de fermentation",
     "Ajout d'arôme"
    ],
    "a": 0
   },
   {
    "q": "Qui a standardisé la vodka à 40° ?",
    "c": [
     "Ivan le Terrible",
     "Pierre le Grand",
     "Léon Tolstoï",
     "Dmitri Mendeleïev"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'une vodka premium ?",
    "c": [
     "Vodka haut de gamme distillée plusieurs fois et filtrée",
     "Vodka ancienne",
     "Vodka importée",
     "Vodka aromatisée"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la différence entre vodka et vodka aromatisée ?",
    "c": [
     "La vodka est plus forte",
     "La vodka aromatisée est moins chère",
     "Elles sont identiques",
     "La vodka aromatisée contient des arômes ajoutés"
    ],
    "a": 3
   },
   {
    "q": "Comment boit-on traditionnellement la vodka en Russie ?",
    "c": [
     "Glacée, en un shot, accompagnée de zakouskis",
     "Toujours à température ambiante",
     "Avec du cola",
     "En cocktail"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "alcool_007",
  "cat": "alcool",
  "name": "Le rhum",
  "level": "adulte",
  "levels": [
   {
    "q": "De quoi est fait le rhum ?",
    "c": [
     "De la canne à sucre (jus, mélasse ou sirop)",
     "De la pomme de terre",
     "Du raisin",
     "De l'orge"
    ],
    "a": 0
   },
   {
    "q": "Quels pays sont les plus grands producteurs de rhum ?",
    "c": [
     "France, Italie",
     "Caraïbes (Cuba, Porto Rico, Jamaïque, Barbade)",
     "Brésil, Argentine",
     "États-Unis, Canada"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les principaux types de rhum ?",
    "c": [
     "Rhum sec, rhum doux",
     "Rhum agricole, rhum industriel",
     "Rhum blanc, rhum ambré, rhum vieux",
     "Rhum léger, rhum fort"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le rhum agricole ?",
    "c": [
     "Rhum produit à partir du pur jus de canne à sucre",
     "Rhum aromatisé",
     "Rhum de mélasse",
     "Rhum vieux"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le rhum arrangé ?",
    "c": [
     "Cocktail",
     "Rhum sucré",
     "Rhum dans lequel on fait macérer des fruits ou épices",
     "Rhum mélangé"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le rhum vieux ?",
    "c": [
     "Rhum foncé",
     "Rhum de luxe",
     "Rhum vieilli en fût de chêne pendant plusieurs années",
     "Rhum épicé"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le Ti'Punch ?",
    "c": [
     "Cocktail antillais traditionnel à base de rhum blanc",
     "Rhum chaud",
     "Rhum sucré",
     "Rhum épicé"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la mélasse ?",
    "c": [
     "Sous-produit sucré de la fabrication du sucre de canne",
     "Ferment",
     "Type de canne",
     "Alambic"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "alcool_008",
  "cat": "alcool",
  "name": "La tequila",
  "level": "adulte",
  "levels": [
   {
    "q": "De quoi est faite la tequila ?",
    "c": [
     "De l'agave bleu (agave tequilana)",
     "Du cactus",
     "Du raisin",
     "De la canne à sucre"
    ],
    "a": 0
   },
   {
    "q": "Où est produite la tequila ?",
    "c": [
     "En Espagne",
     "Au Texas",
     "Au Mexique (région de Jalisco)",
     "Au Pérou"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les types de tequila ?",
    "c": [
     "Légère, forte, sucrée",
     "Jeune, vieille, aromatisée",
     "Blanche, rouge, rosée",
     "Blanco, Reposado, Añejo, Extra Añejo"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la tequila 100% agave ?",
    "c": [
     "Tequila pure",
     "Tequila biologique",
     "Tequila non diluée",
     "Tequila faite uniquement avec du sucre d'agave"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le mezcal ?",
    "c": [
     "Boisson mexicaine similaire à la tequila mais faite avec différentes espèces d'agave",
     "Tequila bon marché",
     "Liqueur",
     "Tequila fumée"
    ],
    "a": 0
   },
   {
    "q": "Comment se boit traditionnellement la tequila ?",
    "c": [
     "Avec de la glace",
     "Pure et chaude",
     "Avec sel et citron (dégustation) ou en cocktail",
     "Avec du cola"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le ver dans la bouteille de mezcal ?",
    "c": [
     "Décoration",
     "Larve ajoutée dans certaines bouteilles de mezcal comme tradition",
     "Larve naturelle",
     "Insecte comestible"
    ],
    "a": 1
   },
   {
    "q": "Quelle est la teneur en alcool typique de la tequila ?",
    "c": [
     "45-50% vol.",
     "35% vol.",
     "38-40% vol.",
     "30-35% vol."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_009",
  "cat": "alcool",
  "name": "Le gin",
  "level": "adulte",
  "levels": [
   {
    "q": "Quel est l'ingrédient principal qui donne son goût au gin ?",
    "c": [
     "Les baies de genièvre",
     "Le houblon",
     "Les agrumes",
     "Le genévrier"
    ],
    "a": 0
   },
   {
    "q": "De quoi est fait le gin ?",
    "c": [
     "Raisin distillé",
     "Canne à sucre",
     "Céréales fermentées",
     "Alcool neutre redistillé avec des baies de genièvre et botaniques"
    ],
    "a": 3
   },
   {
    "q": "Quels pays sont réputés pour le gin ?",
    "c": [
     "Russie, Pologne",
     "Royaume-Uni, Pays-Bas, Espagne, France",
     "Italie, Grèce",
     "Japon, Chine"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le London Dry Gin ?",
    "c": [
     "Style de gin sans sucre ajouté, traditionnellement anglais",
     "Gin aromatisé",
     "Gin bon marché",
     "Gin de Londres"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le Gin Tonic ?",
    "c": [
     "Gin avec soda",
     "Cocktail classique à base de gin et d'eau tonique",
     "Boisson au gin",
     "Mélange gin-bière"
    ],
    "a": 1
   },
   {
    "q": "Quelles épices sont souvent utilisées dans le gin ?",
    "c": [
     "Coriandre, cardamome, angélique, écorces d'agrumes",
     "Gingembre, curcuma",
     "Cannelle, vanille, chocolat",
     "Poivre, sel, paprika"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le genièvre ?",
    "c": [
     "Épice",
     "Baie du genévrier, ingrédient obligatoire du gin",
     "Céréale",
     "Fruit tropical"
    ],
    "a": 1
   },
   {
    "q": "Quel est l'ancêtre du gin moderne ?",
    "c": [
     "Le genièvre hollandais (jenever)",
     "La vodka",
     "Le rhum",
     "Le whisky"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "alcool_010",
  "cat": "alcool",
  "name": "Le cognac",
  "level": "adulte",
  "levels": [
   {
    "q": "Où est produit le champagne ?",
    "c": [
     "Dans la région Champagne (France)",
     "En Bourgogne",
     "En Alsace",
     "En Italie"
    ],
    "a": 0
   },
   {
    "q": "Quels cépages sont utilisés pour le champagne ?",
    "c": [
     "Syrah, Grenache",
     "Sauvignon, Sémillon",
     "Merlot, Cabernet Sauvignon",
     "Pinot Noir, Pinot Meunier, Chardonnay"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la méthode champenoise ?",
    "c": [
     "Distillation",
     "Ajout de gaz carbonique",
     "Double fermentation en bouteille pour créer les bulles",
     "Fermentation en cuve"
    ],
    "a": 2
   },
   {
    "q": "Qui est considéré comme le père du champagne ?",
    "c": [
     "Veuve Clicquot",
     "Louis XIV",
     "Dom Pérignon",
     "Moët"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le brut ?",
    "c": [
     "Champagne sec avec peu de sucre ajouté",
     "Champagne pétillant",
     "Champagne sucré",
     "Champagne rosé"
    ],
    "a": 0
   },
   {
    "q": "Combien de bulles y a-t-il dans une bouteille de champagne ?",
    "c": [
     "Environ 1 million",
     "Environ 50 millions",
     "Environ 10 millions",
     "Environ 100 millions"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le champagne rosé ?",
    "c": [
     "Champagne léger",
     "Champagne fruité",
     "Champagne obtenu par macération ou assemblage de vin rouge",
     "Champagne coloré"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un millésime en champagne ?",
    "c": [
     "Champagne rare",
     "Champagne vieux",
     "Champagne d'une seule année, produit lors des grandes années",
     "Année de production"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_011",
  "cat": "alcool",
  "name": "La liqueur",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce qu'un cocktail ?",
    "c": [
     "Jus de fruits",
     "Mélange de boissons alcoolisées et/ou non alcoolisées",
     "Shot d'alcool",
     "Boisson unique"
    ],
    "a": 1
   },
   {
    "q": "Quel est le cocktail le plus connu au monde ?",
    "c": [
     "Mojito",
     "Margarita",
     "Martini",
     "Old Fashioned"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les ingrédients d'un Mojito ?",
    "c": [
     "Vodka, jus de cranberry",
     "Rhum, menthe, citron, sucre, eau gazeuse",
     "Tequila, citron, sel",
     "Gin, tonic"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un Martini ?",
    "c": [
     "Boisson gazeuse",
     "Cocktail à base de gin et vermouth",
     "Marque de vodka",
     "Apéritif italien"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une Margarita ?",
    "c": [
     "Cocktail à la mangue",
     "Smoothie",
     "Punch",
     "Cocktail à base de tequila, triple sec et citron"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un cocktail 'sans alcool' ?",
    "c": [
     "Soda",
     "Cocktail sans alcool appelé 'mocktail'",
     "Boisson gazeuse",
     "Jus de fruits"
    ],
    "a": 1
   },
   {
    "q": "Qui a inventé le cocktail moderne ?",
    "c": [
     "Harry Craddock",
     "Donn Beach",
     "Ernest Hemingway",
     "Jerry Thomas (XIXe siècle)"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un shaker dans la confection de cocktails ?",
    "c": [
     "Passoire",
     "Bouteille",
     "Verre",
     "Récipient pour mélanger et refroidir les ingrédients"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "alcool_012",
  "cat": "alcool",
  "name": "Le cidre",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que l'alcoolémie ?",
    "c": [
     "Effet de l'alcool",
     "Quantité d'alcool dans une boisson",
     "Taux d'alcool dans le sang",
     "Alcool dans l'haleine"
    ],
    "a": 2
   },
   {
    "q": "En France, quel est le taux d'alcoolémie maximal autorisé pour conduire ?",
    "c": [
     "0,5 g/L de sang",
     "1,0 g/L",
     "0,2 g/L",
     "0,8 g/L"
    ],
    "a": 0
   },
   {
    "q": "Pour les jeunes conducteurs, quelle est la limite ?",
    "c": [
     "0,3 g/L",
     "0,0 g/L",
     "0,5 g/L",
     "0,2 g/L"
    ],
    "a": 3
   },
   {
    "q": "Combien de temps faut-il pour éliminer un verre d'alcool ?",
    "c": [
     "Environ 3 heures",
     "Environ 1 heure",
     "Environ 30 minutes",
     "Environ 2 heures"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un éthylotest ?",
    "c": [
     "Alcoomètre",
     "Appareil pour mesurer l'alcoolémie",
     "Breathalyzer",
     "Verre doseur"
    ],
    "a": 1
   },
   {
    "q": "Quels facteurs influencent l'alcoolémie ?",
    "c": [
     "Uniquement la quantité",
     "Uniquement le sexe",
     "Poids, sexe, nourriture, vitesse de consommation",
     "Uniquement le poids"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'alcoolémie à jeun ?",
    "c": [
     "Taux normal",
     "Taux faible",
     "Taux d'alcool plus élevé car l'absorption est plus rapide",
     "Taux nul"
    ],
    "a": 2
   },
   {
    "q": "Quelle est la peine pour conduite en état d'ivresse en France ?",
    "c": [
     "Avertissement",
     "Retrait de points",
     "Amende et suspension de permis, possible prison",
     "Amende uniquement"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_013",
  "cat": "alcool",
  "name": "Le pastis",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la gueule de bois ?",
    "c": [
     "Ensemble de symptômes après une consommation excessive d'alcool",
     "Allergie",
     "Ivresse",
     "Sevrage"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les symptômes de la gueule de bois ?",
    "c": [
     "Maux de tête, nausées, fatigue, déshydratation",
     "Énergie",
     "Faim",
     "Euphorie"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la cause principale de la gueule de bois ?",
    "c": [
     "Allergie",
     "Déshydratation et accumulation de toxines",
     "Intoxication alimentaire",
     "Manque de sucre"
    ],
    "a": 1
   },
   {
    "q": "Existe-t-il un remède miracle contre la gueule de bois ?",
    "c": [
     "Oui, l'aspirine",
     "Non, seuls le repos et l'hydratation aident",
     "Oui, les boissons énergisantes",
     "Oui, le café"
    ],
    "a": 1
   },
   {
    "q": "Quels types d'alcool provoquent les pires gueules de bois ?",
    "c": [
     "Le gin",
     "La vodka",
     "Les alcools foncés (whisky, vin rouge, rhum)",
     "La bière"
    ],
    "a": 2
   },
   {
    "q": "Combien de temps dure une gueule de bois ?",
    "c": [
     "24 à 48 heures",
     "Quelques heures",
     "12 à 24 heures",
     "2 à 4 heures"
    ],
    "a": 2
   },
   {
    "q": "L'alcool déshydrate-t-il le corps ?",
    "c": [
     "Uniquement en grande quantité",
     "Parfois",
     "Oui, car il inhibe l'hormone antidiurétique",
     "Non"
    ],
    "a": 2
   },
   {
    "q": "Peut-on prévenir la gueule de bois ?",
    "c": [
     "En buvant du lait",
     "En prenant des médicaments",
     "Non, impossible",
     "En buvant de l'eau entre les verres et en mangeant"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "alcool_014",
  "cat": "alcool",
  "name": "Le saké",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelles sont les étapes de la dégustation du vin ?",
    "c": [
     "Regarder et boire",
     "Boire et apprécier",
     "Sentir et boire",
     "Examen visuel, olfactif, gustatif"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le 'nez' d'un vin ?",
    "c": [
     "La texture",
     "Le goût",
     "La couleur",
     "L'odeur et les arômes du vin"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la robe d'un vin ?",
    "c": [
     "La bouteille",
     "La texture",
     "L'étiquette",
     "L'apparence visuelle et la couleur du vin"
    ],
    "a": 3
   },
   {
    "q": "Quels sont les arômes primaires du vin ?",
    "c": [
     "Arômes du bois",
     "Arômes de vieillissement",
     "Arômes ajoutés",
     "Arômes du raisin (fruits, fleurs)"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la longueur en bouche ?",
    "c": [
     "Quantité bue",
     "Durée de dégustation",
     "Ampleur du goût",
     "Persistance des saveurs après avoir avalé"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'une dégustation à l'aveugle ?",
    "c": [
     "Dégustation sans connaître l'identité du vin",
     "Dégustation les yeux fermés",
     "Dégustation sans parler",
     "Dégustation debout"
    ],
    "a": 0
   },
   {
    "q": "Quelle température pour déguster un vin rouge ?",
    "c": [
     "16-18°C",
     "20-22°C",
     "8-10°C",
     "12-14°C"
    ],
    "a": 0
   },
   {
    "q": "Quelle température pour déguster un vin blanc ?",
    "c": [
     "4-6°C",
     "8-12°C",
     "16-18°C",
     "14-16°C"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "alcool_015",
  "cat": "alcool",
  "name": "Le porto",
  "level": "adulte",
  "levels": [
   {
    "q": "Quel pays consomme le plus d'alcool par habitant ?",
    "c": [
     "Biélorussie",
     "États-Unis",
     "Japon",
     "France"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la boisson alcoolisée la plus consommée dans le monde ?",
    "c": [
     "Le vin",
     "Le saké",
     "Les spiritueux",
     "La bière"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le saké ?",
    "c": [
     "Boisson alcoolisée japonaise à base de riz fermenté",
     "Alcool distillé",
     "Vin de riz",
     "Bière japonaise"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la chicha ?",
    "c": [
     "Alcool de maïs traditionnel d'Amérique latine",
     "Spiritueux mexicain",
     "Bière andine",
     "Vin argentin"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le vin de palme ?",
    "c": [
     "Bière africaine",
     "Boisson alcoolisée africaine issue de la sève de palmier",
     "Spiritueux",
     "Vin fruité"
    ],
    "a": 1
   },
   {
    "q": "Dans quels pays la consommation d'alcool est-elle interdite ?",
    "c": [
     "Brésil, Argentine",
     "Russie, Japon",
     "Chine, Inde",
     "Arabie saoudite, Koweït, Iran, Libye"
    ],
    "a": 3
   },
   {
    "q": "Quel pays est le plus grand exportateur de vin ?",
    "c": [
     "Espagne (en volume)",
     "Italie",
     "Chili",
     "France"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le whisky irlandais ?",
    "c": [
     "Whisky de luxe",
     "Whisky parfumé",
     "Whisky distillé trois fois, plus doux que le Scotch",
     "Whisky sucré"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_016",
  "cat": "alcool",
  "name": "La sangria",
  "level": "adulte",
  "levels": [
   {
    "q": "Quel est le niveau de consommation d'alcool en France ?",
    "c": [
     "Très faible",
     "Parmi les plus élevés d'Europe",
     "Moyen",
     "Faible"
    ],
    "a": 1
   },
   {
    "q": "Quelle boisson alcoolisée est la plus associée à la France ?",
    "c": [
     "Le vin",
     "Le cognac",
     "Le champagne",
     "La bière"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que l'apéritif (apéro) dans la culture française ?",
    "c": [
     "Moment de convivialité avant le repas avec des boissons",
     "Digestif",
     "Cocktail",
     "Vin"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les principaux vignobles français ?",
    "c": [
     "Paris, Lyon, Marseille",
     "Nord, Est, Ouest",
     "Cognac, Armagnac, Calvados",
     "Bordeaux, Bourgogne, Vallée du Rhône, Alsace, Loire"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un digestif en France ?",
    "c": [
     "Liqueur",
     "Boisson alcoolisée prise après le repas",
     "Vin",
     "Apéritif"
    ],
    "a": 1
   },
   {
    "q": "Combien de litres d'alcool pur un Français consomme-t-il par an en moyenne ?",
    "c": [
     "Environ 20 litres",
     "Environ 15 litres",
     "Environ 10-12 litres",
     "Environ 5 litres"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une cave à vin en France ?",
    "c": [
     "Lieu de stockage et de vieillissement du vin",
     "Magasin de vin",
     "Bar à vin",
     "Caveau"
    ],
    "a": 0
   },
   {
    "q": "Quelle loi française réglemente l'IVresse publique ?",
    "c": [
     "Arrêté préfectoral",
     "Loi sur l'alcool",
     "Loi de 1905",
     "Ivresse publique et manifeste est une contravention"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "alcool_017",
  "cat": "alcool",
  "name": "Le martini",
  "level": "adulte",
  "levels": [
   {
    "q": "Comment l'alcool agit-il sur le cerveau ?",
    "c": [
     "En déprimant le système nerveux central",
     "En le régulant",
     "En l'activant",
     "En le stimulant"
    ],
    "a": 0
   },
   {
    "q": "Quels sont les effets à court terme de l'alcool ?",
    "c": [
     "Mémoire améliorée",
     "Vigilance",
     "Concentration",
     "Désinhibition, euphorie, baisse des réflexes"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que l'ivresse ?",
    "c": [
     "Allergie",
     "État de perturbation dû à l'alcool",
     "Intoxication",
     "Maladie"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les stades de l'ivresse ?",
    "c": [
     "Débutant, confirmé, avancé",
     "Simple, double, triple",
     "Excitation, désinhibition, confusion, stupeur, coma",
     "Léger, moyen, fort"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le coma éthylique ?",
    "c": [
     "Ivresse",
     "Perte de conscience due à une intoxication alcoolique aiguë",
     "Gueule de bois",
     "Sommeil profond"
    ],
    "a": 1
   },
   {
    "q": "Quels sont les effets de l'alcool sur le sommeil ?",
    "c": [
     "Il perturbe le sommeil profond et la qualité du repos",
     "Il n'a pas d'effet",
     "Il augmente la durée du sommeil",
     "Il améliore le sommeil"
    ],
    "a": 0
   },
   {
    "q": "L'alcool peut-il causer des trous noirs (blackouts) ?",
    "c": [
     "Oui, à forte dose, il peut empêcher la formation de souvenirs",
     "Non, c'est un mythe",
     "Non, seulement chez les alcooliques",
     "Oui, chez tout le monde"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que l'intoxication alcoolique aiguë ?",
    "c": [
     "Ivresse",
     "Gueule de bois",
     "Consommation modérée",
     "Surconsommation rapide d'alcool pouvant mettre la vie en danger"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "alcool_018",
  "cat": "alcool",
  "name": "Le punch",
  "level": "adulte",
  "levels": [
   {
    "q": "Quels sont les risques de l'alcool sur le foie ?",
    "c": [
     "Aucun",
     "Stéatose, hépatite alcoolique, cirrhose",
     "Calculs biliaires",
     "Cancer uniquement"
    ],
    "a": 1
   },
   {
    "q": "L'alcool est-il classé comme cancérogène ?",
    "c": [
     "Non",
     "Oui, mais faiblement",
     "Uniquement pour le cancer du foie",
     "Oui, par l'OMS (groupe 1)"
    ],
    "a": 3
   },
   {
    "q": "À quels cancers l'alcool est-il lié ?",
    "c": [
     "Cancers de la bouche, gorge, foie, sein, côlon",
     "Aucun",
     "Uniquement au cancer de l'estomac",
     "Uniquement au cancer du foie"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le syndrome d'alcoolisation fœtale (SAF) ?",
    "c": [
     "Maladie génétique",
     "Allergie",
     "Trouble alimentaire",
     "Ensemble de malformations chez l'enfant dues à l'alcool pendant la grossesse"
    ],
    "a": 3
   },
   {
    "q": "L'alcool est-il bon pour le cœur à petite dose ?",
    "c": [
     "Non, toxique même à petite dose",
     "Le débat est controversé, les risques l'emportent",
     "Oui, recommandé",
     "Oui, très bon"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que la cardiomyopathie alcoolique ?",
    "c": [
     "Maladie du muscle cardiaque due à l'alcool",
     "AVC",
     "Infarctus",
     "Trouble du rythme"
    ],
    "a": 0
   },
   {
    "q": "Combien de maladies sont liées à l'alcool ?",
    "c": [
     "Plus de 200 maladies et troubles",
     "Moins de 10",
     "Environ 50",
     "Environ 20"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la pancréatite alcoolique ?",
    "c": [
     "Diabète",
     "Cancer du pancréas",
     "Inflammation du pancréas due à la consommation d'alcool",
     "Calculs"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_019",
  "cat": "alcool",
  "name": "La absinthe",
  "level": "adulte",
  "levels": [
   {
    "q": "Combien de personnes meurent chaque année en France dans des accidents liés à l'alcool ?",
    "c": [
     "Plus de 2 000",
     "Plus de 3 000",
     "Plus de 500",
     "Plus de 1 000"
    ],
    "a": 3
   },
   {
    "q": "Quel est le risque d'accident avec 0,5 g/L d'alcoolémie ?",
    "c": [
     "Risque multiplié par 5",
     "Pas de risque",
     "Risque multiplié par 1,5",
     "Risque multiplié par 2"
    ],
    "a": 3
   },
   {
    "q": "À partir de combien de verres le taux d'alcoolémie dépasse-t-il 0,5 g/L ?",
    "c": [
     "2 verres pour une femme, 3 pour un homme",
     "4 verres",
     "1 verre",
     "3 verres pour une femme, 4 pour un homme"
    ],
    "a": 0
   },
   {
    "q": "Quelles sont les sanctions pour alcoolémie entre 0,5 et 0,8 g/L ?",
    "c": [
     "Suspension à vie",
     "Avertissement",
     "Prison",
     "Amende forfaitaire et retrait de 6 points"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un éthylotest anti-démarrage (EAD) ?",
    "c": [
     "Dispositif qui empêche le démarrage si l'alcoolémie est positive",
     "Alcoomètre",
     "Test salivaire",
     "Verrouillage automatique"
    ],
    "a": 0
   },
   {
    "q": "Quel pourcentage des accidents mortels impliquent l'alcool en France ?",
    "c": [
     "Environ 30%",
     "Environ 50%",
     "Environ 20%",
     "Environ 10%"
    ],
    "a": 0
   },
   {
    "q": "Que risque-t-on pour un refus de se soumettre à un dépistage d'alcoolémie ?",
    "c": [
     "Rien",
     "Retrait de permis",
     "Les mêmes peines que pour conduite en état d'ivresse",
     "Amende"
    ],
    "a": 2
   },
   {
    "q": "Quel est le taux d'alcoolémie considéré comme un délit en France ?",
    "c": [
     "Au-dessus de 0,5 g/L",
     "Au-dessus de 0,3 g/L",
     "Au-dessus de 0,8 g/L",
     "Au-dessus de 1,0 g/L"
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "alcool_020",
  "cat": "alcool",
  "name": "La chartreuse",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la vinification ?",
    "c": [
     "Processus de transformation du raisin en vin",
     "Mise en bouteille",
     "Dégustation",
     "Culture de la vigne"
    ],
    "a": 0
   },
   {
    "q": "Quelles sont les étapes de la vinification en rouge ?",
    "c": [
     "Foulage, fermentation, macération, élevage",
     "Fermentation, distillation, vieillissement",
     "Pressurage, fermentation, élevage",
     "Récolte, pressurage, filtration"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que la fermentation alcoolique ?",
    "c": [
     "Ajout d'alcool",
     "Distillation",
     "Macération",
     "Transformation du sucre en alcool par les levures"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la macération en vinification ?",
    "c": [
     "Fermentation",
     "Filtration",
     "Contact du jus avec les peaux pour extraire couleur et tanins",
     "Pressurage"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que l'élevage du vin ?",
    "c": [
     "Culture de la vigne",
     "Récolte",
     "Vieillissement en cuve ou en fût avant la mise en bouteille",
     "Vinification"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'une cave de vinification ?",
    "c": [
     "Entrepôt",
     "Chai",
     "Cave à vin",
     "Lieu où le vin est élaboré et élevé"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que les tanins dans le vin ?",
    "c": [
     "Composés naturels qui donnent de la structure et de l'astringence",
     "Arômes",
     "Couleur",
     "Sucre"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce qu'un vin nature (sans sulfites ajoutés) ?",
    "c": [
     "Vin produit sans additifs chimiques, notamment sans soufre ajouté",
     "Vin bio",
     "Vin artisanal",
     "Vin non alcoolisé"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "alcool_021",
  "cat": "alcool",
  "name": "Le calvados",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que le brassage de la bière ?",
    "c": [
     "Mise en bouteille",
     "Filtration",
     "Processus de fabrication de la bière",
     "Fabrication du malt"
    ],
    "a": 2
   },
   {
    "q": "Quelles sont les étapes du brassage ?",
    "c": [
     "Distillation, vieillissement",
     "Empâtage, filtration, ébullition, fermentation, garde",
     "Macération, pressurage, élevage",
     "Récolte, séchage, broyage"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que l'empâtage ?",
    "c": [
     "Mélange du malt concassé avec de l'eau chaude pour extraire les sucres",
     "Ajout de houblon",
     "Fermentation",
     "Filtration"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le malt ?",
    "c": [
     "Céréale",
     "Houblon",
     "Orge germée puis séchée pour le brassage",
     "Levure"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que le moût de bière ?",
    "c": [
     "Liquide sucré extrait du malt avant fermentation",
     "Bière finie",
     "Résidu de brassage",
     "Bière non filtrée"
    ],
    "a": 0
   },
   {
    "q": "À quoi sert l'ébullition du moût ?",
    "c": [
     "Refroidissement",
     "Filtration",
     "Fermentation",
     "Stérilisation et extraction des saveurs du houblon"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la garde de la bière ?",
    "c": [
     "Mise en bouteille",
     "Stockage",
     "Filtration",
     "Période de maturation après fermentation"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'une microbrasserie ?",
    "c": [
     "Petite brasserie artisanale produisant des volumes limités",
     "Brasserie industrielle",
     "Bar à bière",
     "Grande brasserie"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "alcool_022",
  "cat": "alcool",
  "name": "L'armagnac",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la distillation ?",
    "c": [
     "Procédé de séparation de l'alcool par chauffage et condensation",
     "Fermentation",
     "Filtration",
     "Macération"
    ],
    "a": 0
   },
   {
    "q": "Qui a inventé l'alambic ?",
    "c": [
     "Les Chinois",
     "Les Grecs antiques",
     "Les Romains",
     "Les Arabes au Moyen Âge"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un alambic ?",
    "c": [
     "Cuve",
     "Fût",
     "Fermenteur",
     "Appareil de distillation composé d'un bouilleur et d'un réfrigérant"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la double distillation ?",
    "c": [
     "Distillation lente",
     "Distillation longue",
     "Deux alambics",
     "Distillation effectuée deux fois pour obtenir un alcool plus pur"
    ],
    "a": 3
   },
   {
    "q": "Quels spiritueux sont doublement distillés ?",
    "c": [
     "Rhum, tequila",
     "Cognac, whisky écossais, armagnac",
     "Vodka, gin",
     "Bière, vin"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le degré d'alcool (% vol) ?",
    "c": [
     "Densité",
     "Quantité d'alcool",
     "Pourcentage d'alcool pur dans un volume de boisson",
     "Force de l'alcool"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce que la tête, le cœur et la queue en distillation ?",
    "c": [
     "Fractions du distillat recueillies à différents moments",
     "Étapes de distillation",
     "Qualités de l'alcool",
     "Parties de l'alambic"
    ],
    "a": 0
   },
   {
    "q": "Qu'est-ce que le calvados ?",
    "c": [
     "Alcool de fruits",
     "Liqueur",
     "Alcool de vin",
     "Eau-de-vie de cidre produite en Normandie"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "alcool_023",
  "cat": "alcool",
  "name": "Le bourbon",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelle est la position de l'islam sur l'alcool ?",
    "c": [
     "Interdit (haram)",
     "Autorisé",
     "Uniquement le vin interdit",
     "Autorisé avec modération"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la position du christianisme sur l'alcool ?",
    "c": [
     "Généralement autorisé avec modération",
     "Interdit",
     "Uniquement le vin autorisé",
     "Autorisé sans limite"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la position du judaïsme sur l'alcool ?",
    "c": [
     "Autorisé sans restriction",
     "Autorisé avec modération, le vin a un rôle rituel",
     "Uniquement la bière autorisée",
     "Interdit"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le vin de messe ?",
    "c": [
     "Vin bénit",
     "Vin utilisé dans la liturgie chrétienne",
     "Vin sucré",
     "Vin sans alcool"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le Kiddouch dans le judaïsme ?",
    "c": [
     "Bénédiction sur le vin lors du Shabbat et des fêtes",
     "Prière",
     "Rituel juif",
     "Chant"
    ],
    "a": 0
   },
   {
    "q": "Dans quelle religion l'alcool est-il totalement prohibé ?",
    "c": [
     "Hindouisme",
     "Christianisme",
     "Judaïsme",
     "Islam"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que la bière sans alcool ?",
    "c": [
     "Bière dont l'alcool a été retiré après fermentation",
     "Soda",
     "Boisson gazeuse",
     "Jus de malt"
    ],
    "a": 0
   },
   {
    "q": "Quels pays musulmans autorisent la production d'alcool ?",
    "c": [
     "Maroc, Tunisie, Liban, Turquie",
     "Soudan, Libye",
     "Arabie saoudite, Koweït",
     "Iran, Yémen"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "alcool_024",
  "cat": "alcool",
  "name": "La stout",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la prohibition ?",
    "c": [
     "Limitation de l'alcool",
     "Taxe sur l'alcool",
     "Régulation de l'alcool",
     "Interdiction légale de la production et vente d'alcool"
    ],
    "a": 3
   },
   {
    "q": "Quand la prohibition a-t-elle eu lieu aux États-Unis ?",
    "c": [
     "1930-1940",
     "1920-1933",
     "1910-1920",
     "1900-1910"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce que le 18e amendement américain ?",
    "c": [
     "Droit de vote",
     "Loi qui a instauré la prohibition aux États-Unis",
     "Fin de la prohibition",
     "Liberté d'expression"
    ],
    "a": 1
   },
   {
    "q": "Qui a aboli la prohibition aux USA ?",
    "c": [
     "Le Congrès",
     "Le 21e amendement (1933)",
     "La Cour suprême",
     "Le président Hoover"
    ],
    "a": 1
   },
   {
    "q": "Quelles ont été les conséquences de la prohibition ?",
    "c": [
     "Paix sociale",
     "Diminution de la consommation",
     "Marché noir, contrebande, mafia, alambics clandestins",
     "Santé publique améliorée"
    ],
    "a": 2
   },
   {
    "q": "Qui était Al Capone ?",
    "c": [
     "Agent du FBI",
     "Chef de la police",
     "Célèbre gangster ayant profité du marché noir de l'alcool",
     "Homme politique"
    ],
    "a": 2
   },
   {
    "q": "Qu'est-ce qu'un speakeasy ?",
    "c": [
     "Bar légal",
     "Restaurant",
     "Disco",
     "Bar clandestin pendant la prohibition américaine"
    ],
    "a": 3
   },
   {
    "q": "Quels pays ont eu une période de prohibition ?",
    "c": [
     "Allemagne, Autriche",
     "USA, Finlande, Norvège, Islande, Canada (certaines provinces)",
     "Japon, Chine",
     "France, Italie, Espagne"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "alcool_025",
  "cat": "alcool",
  "name": "Le lambic",
  "level": "adulte",
  "levels": [
   {
    "q": "Qu'est-ce que la consommation modérée d'alcool ?",
    "c": [
     "Pas plus de 5 verres par jour",
     "Pas de limite",
     "Pas plus d'un verre par semaine",
     "Pas plus de 2 verres par jour et pas tous les jours"
    ],
    "a": 3
   },
   {
    "q": "Quelles sont les recommandations françaises pour la consommation d'alcool ?",
    "c": [
     "Maximum 3 verres par jour",
     "Maximum 10 verres par semaine, 2 verres par jour",
     "Pas de limite",
     "1 verre par jour"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'un verre standard d'alcool ?",
    "c": [
     "20 grammes",
     "10 grammes d'alcool pur",
     "15 grammes",
     "5 grammes"
    ],
    "a": 1
   },
   {
    "q": "Qu'est-ce qu'une unité d'alcool ?",
    "c": [
     "Litre",
     "Pourcentage",
     "Mesure standard correspondant à un verre",
     "Degré"
    ],
    "a": 2
   },
   {
    "q": "Quels sont les bienfaits possibles d'une consommation modérée ?",
    "c": [
     "Longévité",
     "Prévention du cancer",
     "Protection cardiaque",
     "Controversés, les risques l'emportent sur les bénéfices"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce qu'un jour sans alcool ?",
    "c": [
     "Journée sans consommation d'alcool recommandée régulièrement",
     "Jour d'abstinence",
     "Régime",
     "Jeûne"
    ],
    "a": 0
   },
   {
    "q": "Les Français suivent-ils les recommandations de modération ?",
    "c": [
     "Non, personne",
     "Oui, majoritairement",
     "Oui, à 80%",
     "Non, une partie importante dépasse les recommandations"
    ],
    "a": 3
   },
   {
    "q": "Qu'est-ce que le Dry January (Mois sans alcool) ?",
    "c": [
     "Défi d'abstinence d'alcool pendant le mois de janvier",
     "Nouvelle année sans alcool",
     "Mois de la modération",
     "Régime"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "insolite_101",
  "cat": "insolite",
  "name": "Le corps humain insolite",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'os un adulte possède-t-il ?",
    "c": [
     "180",
     "206",
     "198",
     "215"
    ],
    "a": 1
   },
   {
    "q": "Quel est le plus grand organe du corps humain ?",
    "c": [
     "Les poumons",
     "La peau",
     "Le foie",
     "L'intestin"
    ],
    "a": 1
   },
   {
    "q": "Combien de litres de sang un adulte a-t-il en moyenne ?",
    "c": [
     "Environ 5 litres",
     "Environ 8 litres",
     "Environ 2 litres",
     "Environ 10 litres"
    ],
    "a": 0
   },
   {
    "q": "Le corps humain est composé d'environ quel pourcentage d'eau ?",
    "c": [
     "45 %",
     "30 %",
     "85 %",
     "60 %"
    ],
    "a": 3
   },
   {
    "q": "Combien de fois le cœur humain bat-il environ par jour ?",
    "c": [
     "100 000",
     "10 000",
     "1 million",
     "50 000"
    ],
    "a": 0
   },
   {
    "q": "Combien de cavités compte le cœur humain ?",
    "c": [
     "4",
     "3",
     "2",
     "6"
    ],
    "a": 0
   },
   {
    "q": "Quel organe humain peut se régénérer en grande partie ?",
    "c": [
     "Le foie",
     "Le cerveau",
     "Les reins",
     "Le cœur"
    ],
    "a": 0
   },
   {
    "q": "Quelle est la température interne normale du corps (°C) ?",
    "c": [
     "37",
     "39",
     "41",
     "35"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "insolite_102",
  "cat": "insolite",
  "name": "Animaux étonnants",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de cœurs possède une pieuvre ?",
    "c": [
     "3",
     "2",
     "1",
     "4"
    ],
    "a": 0
   },
   {
    "q": "De quelle couleur est le sang d'une pieuvre ?",
    "c": [
     "Vert",
     "Incolore",
     "Bleu",
     "Rouge"
    ],
    "a": 2
   },
   {
    "q": "Quel est l'animal terrestre le plus rapide ?",
    "c": [
     "Le cheval",
     "Le guépard",
     "Le lion",
     "L'antilope"
    ],
    "a": 1
   },
   {
    "q": "Combien de compartiments l'estomac d'une vache possède-t-il ?",
    "c": [
     "6",
     "1",
     "4",
     "2"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus grand animal ayant jamais existé ?",
    "c": [
     "Le diplodocus",
     "L'éléphant",
     "La baleine bleue",
     "Le requin-baleine"
    ],
    "a": 2
   },
   {
    "q": "Quel animal est célèbre pour régénérer ses membres ?",
    "c": [
     "Le lapin",
     "Le chat",
     "L'axolotl",
     "Le pigeon"
    ],
    "a": 2
   },
   {
    "q": "Les empreintes digitales de quel animal ressemblent le plus aux nôtres ?",
    "c": [
     "Le gorille",
     "Le chimpanzé",
     "Le koala",
     "Le raton laveur"
    ],
    "a": 2
   },
   {
    "q": "Quel oiseau est capable de voler à reculons ?",
    "c": [
     "Le pingouin",
     "L'aigle",
     "Le moineau",
     "Le colibri"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "insolite_103",
  "cat": "insolite",
  "name": "L'espace insolite",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle planète est la plus proche du Soleil ?",
    "c": [
     "La Terre",
     "Mercure",
     "Vénus",
     "Mars"
    ],
    "a": 1
   },
   {
    "q": "Sur quelle planète un jour dure-t-il plus longtemps qu'une année ?",
    "c": [
     "Jupiter",
     "Mars",
     "Saturne",
     "Vénus"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la planète la plus chaude du système solaire ?",
    "c": [
     "Mars",
     "Jupiter",
     "Vénus",
     "Mercure"
    ],
    "a": 2
   },
   {
    "q": "Combien de temps met la lumière du Soleil pour atteindre la Terre ?",
    "c": [
     "8 secondes",
     "1 minute",
     "8 heures",
     "8 minutes"
    ],
    "a": 3
   },
   {
    "q": "Quelle est la plus grande planète du système solaire ?",
    "c": [
     "Saturne",
     "Neptune",
     "La Terre",
     "Jupiter"
    ],
    "a": 3
   },
   {
    "q": "Quel astre provoque principalement les marées sur Terre ?",
    "c": [
     "Le Soleil",
     "La Lune",
     "Vénus",
     "Mars"
    ],
    "a": 1
   },
   {
    "q": "De quelle couleur apparaît un coucher de soleil sur Mars ?",
    "c": [
     "Rouge",
     "Violet",
     "Bleu",
     "Vert"
    ],
    "a": 2
   },
   {
    "q": "Quelle planète possède le système d'anneaux le plus visible ?",
    "c": [
     "Neptune",
     "Saturne",
     "Uranus",
     "Jupiter"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "insolite_104",
  "cat": "insolite",
  "name": "Gourmandises : vrai ou faux",
  "level": "classique",
  "levels": [
   {
    "q": "Le miel peut-il se périmer ?",
    "c": [
     "Non, jamais",
     "Oui, en 5 ans",
     "Oui, en 6 mois",
     "Oui, en 1 an"
    ],
    "a": 0
   },
   {
    "q": "Botaniquement, la banane est…",
    "c": [
     "une noix",
     "un légume",
     "une baie",
     "une racine"
    ],
    "a": 2
   },
   {
    "q": "Botaniquement, la tomate est…",
    "c": [
     "un tubercule",
     "une graine",
     "un fruit",
     "un légume"
    ],
    "a": 2
   },
   {
    "q": "De quelle plante provient le chocolat ?",
    "c": [
     "Le caféier",
     "Le cacaoyer",
     "Le théier",
     "La canne à sucre"
    ],
    "a": 1
   },
   {
    "q": "Quelle épice est la plus chère au monde au poids ?",
    "c": [
     "Le safran",
     "La vanille",
     "Le poivre",
     "La cannelle"
    ],
    "a": 0
   },
   {
    "q": "La cacahuète est en réalité…",
    "c": [
     "une légumineuse",
     "un fruit à coque",
     "une noix",
     "une céréale"
    ],
    "a": 0
   },
   {
    "q": "Quel aliment est composé à environ 95 % d'eau ?",
    "c": [
     "La pomme",
     "La carotte",
     "Le pain",
     "Le concombre"
    ],
    "a": 3
   },
   {
    "q": "À quelle température l'eau bout-elle au niveau de la mer (°C) ?",
    "c": [
     "80",
     "90",
     "120",
     "100"
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "insolite_105",
  "cat": "insolite",
  "name": "Records de la planète",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est le plus haut sommet du monde ?",
    "c": [
     "Le Kilimandjaro",
     "Le K2",
     "Le Mont Blanc",
     "L'Everest"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus grand océan du monde ?",
    "c": [
     "L'Arctique",
     "Le Pacifique",
     "L'Indien",
     "L'Atlantique"
    ],
    "a": 1
   },
   {
    "q": "Quel est le plus grand désert chaud du monde ?",
    "c": [
     "L'Atacama",
     "Le Kalahari",
     "Le Gobi",
     "Le Sahara"
    ],
    "a": 3
   },
   {
    "q": "Quel est le plus grand pays du monde par superficie ?",
    "c": [
     "La Chine",
     "Les États-Unis",
     "La Russie",
     "Le Canada"
    ],
    "a": 2
   },
   {
    "q": "Quel est le plus petit État du monde ?",
    "c": [
     "Saint-Marin",
     "Monaco",
     "Nauru",
     "Le Vatican"
    ],
    "a": 3
   },
   {
    "q": "Quel animal atteint la plus grande vitesse en piqué ?",
    "c": [
     "Le faucon pèlerin",
     "Le guépard",
     "Le martinet",
     "L'aigle royal"
    ],
    "a": 0
   },
   {
    "q": "Quel métal est liquide à température ambiante ?",
    "c": [
     "Le mercure",
     "L'étain",
     "Le zinc",
     "Le plomb"
    ],
    "a": 0
   },
   {
    "q": "Quel est l'os le plus long du corps humain ?",
    "c": [
     "Le tibia",
     "L'humérus",
     "Le fémur",
     "Le radius"
    ],
    "a": 2
   }
  ]
 }
];
