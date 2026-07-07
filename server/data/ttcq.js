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
    "q": "Quelle est la capitale du Mexique ?",
    "c": [
     "Mexico",
     "Cancún",
     "Guadalajara",
     "Tijuana"
    ],
    "a": "Mexico"
   },
   {
    "q": "Quelle galette de maïs sert de base aux tacos ?",
    "a": "Tortilla"
   },
   {
    "q": "Quel alcool mexicain est distillé à partir de l'agave ?",
    "a": "Tequila"
   },
   {
    "q": "Quel peuple précolombien a bâti la cité de Tenochtitlan ?",
    "c": [
     "Aztèques",
     "Incas",
     "Mayas",
     "Olmèques"
    ],
    "a": "Aztèques"
   },
   {
    "q": "Quelle fête mexicaine des morts a inspiré le film Coco ? El Día de los ___ ?",
    "a": "Muertos"
   },
   {
    "q": "Quel piment très fort, séché, est un jalapeño fumé ?",
    "c": [
     "Chipotle",
     "Habanero",
     "Poblano",
     "Serrano"
    ],
    "a": "Chipotle"
   },
   {
    "q": "Quelle artiste peintre mexicaine aux sourcils marqués a épousé Diego Rivera ?",
    "c": [
     "Frida Kahlo",
     "Remedios Varo",
     "Maria Izquierdo",
     "Leonora Carrington"
    ],
    "a": "Frida Kahlo"
   },
   {
    "q": "En quelle année exacte les Espagnols de Cortés ont-ils pris Tenochtitlan ?",
    "a": "1521"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_012",
  "cat": "culture",
  "name": "L'Égypte",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de l'Égypte ?",
    "a": "Le Caire"
   },
   {
    "q": "Quel long fleuve traverse l'Égypte du sud au nord ?",
    "a": "Nil"
   },
   {
    "q": "Comment nomme-t-on les tombeaux géants en pierre des pharaons ?",
    "a": "Pyramide"
   },
   {
    "q": "Quelle statue à corps de lion et tête humaine garde le plateau de Gizeh ?",
    "a": "Sphinx"
   },
   {
    "q": "Quelle jeune reine d'Égypte a séduit César puis Marc Antoine ?",
    "c": [
     "Cléopâtre",
     "Néfertiti",
     "Hatchepsout",
     "Néfertari"
    ],
    "a": "Cléopâtre"
   },
   {
    "q": "Quelle écriture égyptienne utilise des dessins et symboles ?",
    "c": [
     "Hiéroglyphes",
     "Cunéiforme",
     "Démotique",
     "Alphabet"
    ],
    "a": "Hiéroglyphes"
   },
   {
    "q": "Quel jeune pharaon a été retrouvé intact dans son tombeau en 1922 ?",
    "c": [
     "Toutânkhamon",
     "Ramsès II",
     "Khéops",
     "Akhenaton"
    ],
    "a": "Toutânkhamon"
   },
   {
    "q": "De combien de blocs de pierre, environ, est faite la pyramide de Khéops ?",
    "a": "2300000"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_013",
  "cat": "culture",
  "name": "La Grèce",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Grèce ?",
    "a": "Athenes"
   },
   {
    "q": "Quel temple antique domine l'Acropole d'Athènes ?",
    "c": [
     "Parthénon",
     "Panthéon",
     "Colisée",
     "Érechthéion"
    ],
    "a": "Parthénon"
   },
   {
    "q": "Sur quel mont vivaient les dieux de la mythologie grecque ?",
    "a": "Olympe"
   },
   {
    "q": "Quel héros grec avait pour seul point faible son talon ?",
    "a": "Achille"
   },
   {
    "q": "Quel fromage blanc grec est fait de lait de brebis, en salade ?",
    "a": "Feta"
   },
   {
    "q": "Quel philosophe grec fut le maître de Platon ?",
    "c": [
     "Socrate",
     "Aristote",
     "Pythagore",
     "Épicure"
    ],
    "a": "Socrate"
   },
   {
    "q": "Dans quelle cité antique se déroulaient les Jeux olympiques originels ?",
    "a": "Olympie"
   },
   {
    "q": "En quelle année, avant J.-C., eurent lieu les premiers Jeux olympiques antiques ?",
    "a": "776"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_014",
  "cat": "culture",
  "name": "La Turquie",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la plus grande ville de Turquie, à cheval sur deux continents ?",
    "c": [
     "Istanbul",
     "Ankara",
     "Izmir",
     "Antalya"
    ],
    "a": "Istanbul"
   },
   {
    "q": "Quelle est la capitale officielle de la Turquie (pas Istanbul) ?",
    "c": [
     "Ankara",
     "Istanbul",
     "Bursa",
     "Konya"
    ],
    "a": "Ankara"
   },
   {
    "q": "Quel détroit sépare la partie européenne de la partie asiatique d'Istanbul ?",
    "a": "Bosphore"
   },
   {
    "q": "Quel ex-basilique devenue mosquée est un joyau d'Istanbul ? Sainte-___ ?",
    "a": "Sophie"
   },
   {
    "q": "Quelle friandise turque gélifiée et sucrée se déguste au thé ? Le loukoum aussi appelé Turkish ___ ?",
    "c": [
     "Delight",
     "Candy",
     "Sweet",
     "Jelly"
    ],
    "a": "Delight"
   },
   {
    "q": "Quel fondateur a proclamé la République turque en 1923 ?",
    "c": [
     "Atatürk",
     "Erdoğan",
     "Soliman",
     "Menderes"
    ],
    "a": "Atatürk"
   },
   {
    "q": "Quelle région de Turquie est célèbre pour ses cheminées de fée et ses montgolfières ?",
    "c": [
     "Cappadoce",
     "Anatolie",
     "Thrace",
     "Lycie"
    ],
    "a": "Cappadoce"
   },
   {
    "q": "En quelle année Constantinople est-elle tombée aux mains des Ottomans ?",
    "a": "1453"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_015",
  "cat": "culture",
  "name": "La Suisse",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Suisse ?",
    "c": [
     "Berne",
     "Genève",
     "Zurich",
     "Bâle"
    ],
    "a": "Berne"
   },
   {
    "q": "Quelle spécialité suisse consiste à tremper du pain dans du fromage fondu ?",
    "a": "Fondue"
   },
   {
    "q": "Combien la Suisse compte-t-elle de cantons ?",
    "a": "26"
   },
   {
    "q": "Quel massif montagneux couvre une grande partie de la Suisse ?",
    "a": "Alpes"
   },
   {
    "q": "Quelle organisation humanitaire fondée à Genève a une croix rouge pour emblème ?",
    "c": [
     "Croix-Rouge",
     "MSF",
     "Caritas",
     "Oxfam"
    ],
    "a": "Croix-Rouge"
   },
   {
    "q": "Quel héros légendaire suisse a transpercé une pomme d'une flèche ?",
    "c": [
     "Guillaume Tell",
     "Winkelried",
     "Davel",
     "Escher"
    ],
    "a": "Guillaume Tell"
   },
   {
    "q": "Quel sommet suisse en forme de pyramide est l'un des plus célèbres des Alpes ?",
    "c": [
     "Cervin",
     "Mont Blanc",
     "Eiger",
     "Jungfrau"
    ],
    "a": "Cervin"
   },
   {
    "q": "Quelle est la longueur, en km, du tunnel ferroviaire du Saint-Gothard, le plus long du monde ?",
    "a": "57"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_016",
  "cat": "culture",
  "name": "La Belgique",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Belgique ?",
    "c": [
     "Bruxelles",
     "Anvers",
     "Liège",
     "Gand"
    ],
    "a": "Bruxelles"
   },
   {
    "q": "Quelle petite statue de garçon qui urine est l'emblème de Bruxelles ? Le ___ Pis ?",
    "a": "Manneken"
   },
   {
    "q": "Quel aliment belge frit accompagne moules et mayonnaise ?",
    "a": "Frites"
   },
   {
    "q": "Quelles pâtisseries belges à trous carrés se mangent au petit-déjeuner ?",
    "a": "Gaufres"
   },
   {
    "q": "Quelles sont les deux principales langues de Belgique ? Le français et le ___ ?",
    "c": [
     "néerlandais",
     "allemand",
     "flamand",
     "wallon"
    ],
    "a": "néerlandais"
   },
   {
    "q": "Quel détective à moustaches, créé par Agatha Christie, est belge ?",
    "c": [
     "Poirot",
     "Marple",
     "Maigret",
     "Holmes"
    ],
    "a": "Poirot"
   },
   {
    "q": "Quel reporter à la houppette, héros de bande dessinée, a été créé par Hergé ?",
    "a": "Tintin"
   },
   {
    "q": "En quelle année la Belgique a-t-elle obtenu son indépendance des Pays-Bas ?",
    "a": "1830"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_017",
  "cat": "culture",
  "name": "Les Pays-Bas",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale des Pays-Bas ?",
    "c": [
     "Amsterdam",
     "Rotterdam",
     "La Haye",
     "Utrecht"
    ],
    "a": "Amsterdam"
   },
   {
    "q": "Quelle fleur colorée est le symbole des Pays-Bas ?",
    "a": "Tulipe"
   },
   {
    "q": "Quel bâtiment traditionnel néerlandais à ailes servait à moudre le grain ?",
    "a": "Moulin"
   },
   {
    "q": "Quel moyen de transport à deux roues est roi aux Pays-Bas ?",
    "a": "Velo"
   },
   {
    "q": "Quel peintre néerlandais à l'oreille coupée a peint Les Tournesols ?",
    "c": [
     "Van Gogh",
     "Rembrandt",
     "Vermeer",
     "Mondrian"
    ],
    "a": "Van Gogh"
   },
   {
    "q": "Quel fromage rond à croûte rouge tient son nom d'une ville néerlandaise ?",
    "c": [
     "Edam",
     "Gouda",
     "Brie",
     "Cheddar"
    ],
    "a": "Edam"
   },
   {
    "q": "Comment appelle-t-on les digues et polders qui protègent le pays de la mer ?",
    "c": [
     "Polders",
     "Fjords",
     "Lagunes",
     "Estuaires"
    ],
    "a": "Polders"
   },
   {
    "q": "Quel pourcentage du territoire néerlandais se situe sous le niveau de la mer ?",
    "a": "26"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_018",
  "cat": "culture",
  "name": "La Suède",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Suède ?",
    "c": [
     "Stockholm",
     "Göteborg",
     "Malmö",
     "Uppsala"
    ],
    "a": "Stockholm"
   },
   {
    "q": "Quelle enseigne suédoise de meubles en kit est mondialement connue ?",
    "a": "Ikea"
   },
   {
    "q": "Quel prix mondial, remis à Stockholm, récompense la paix et les sciences ?",
    "a": "Nobel"
   },
   {
    "q": "Quel groupe pop suédois des années 70 a chanté Waterloo et Dancing Queen ?",
    "a": "Abba"
   },
   {
    "q": "Quelles boulettes de viande suédoises sont servies chez Ikea ?",
    "c": [
     "Köttbullar",
     "Falafels",
     "Kebab",
     "Boulettes"
    ],
    "a": "Köttbullar"
   },
   {
    "q": "Quel peuple de guerriers navigateurs scandinaves a sillonné les mers au Moyen Âge ?",
    "a": "Vikings"
   },
   {
    "q": "Quelle militante suédoise pour le climat a lancé les grèves scolaires du vendredi ?",
    "c": [
     "Greta Thunberg",
     "Malala",
     "Vanessa Nakate",
     "Luisa Neubauer"
    ],
    "a": "Greta Thunberg"
   },
   {
    "q": "Combien de lettres compte l'alphabet suédois ?",
    "a": "29"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_019",
  "cat": "culture",
  "name": "La Norvège",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Norvège ?",
    "c": [
     "Oslo",
     "Bergen",
     "Trondheim",
     "Stavanger"
    ],
    "a": "Oslo"
   },
   {
    "q": "Quels profonds bras de mer entre montagnes découpent la côte norvégienne ?",
    "a": "Fjords"
   },
   {
    "q": "Quel phénomène lumineux du ciel nocturne peut s'observer en Norvège ? L'aurore ___ ?",
    "c": [
     "boréale",
     "australe",
     "polaire",
     "solaire"
    ],
    "a": "boréale"
   },
   {
    "q": "Quel poisson orange gras est un grand produit d'exportation norvégien ?",
    "a": "Saumon"
   },
   {
    "q": "Quel peintre norvégien a réalisé Le Cri ?",
    "c": [
     "Munch",
     "Dalí",
     "Klimt",
     "Bacon"
    ],
    "a": "Munch"
   },
   {
    "q": "Quel explorateur norvégien a atteint le pôle Sud le premier, en 1911 ?",
    "c": [
     "Amundsen",
     "Nansen",
     "Scott",
     "Heyerdahl"
    ],
    "a": "Amundsen"
   },
   {
    "q": "Comment appelle-t-on le phénomène d'été où le soleil ne se couche pas ? Le soleil de ___ ?",
    "a": "Minuit"
   },
   {
    "q": "Quelle est la profondeur maximale, en mètres, du Sognefjord, le plus profond de Norvège ?",
    "a": "1308"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_020",
  "cat": "culture",
  "name": "Le Portugal",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale du Portugal ?",
    "c": [
     "Lisbonne",
     "Porto",
     "Braga",
     "Faro"
    ],
    "a": "Lisbonne"
   },
   {
    "q": "Quel chant traditionnel portugais mélancolique est classé à l'UNESCO ?",
    "a": "Fado"
   },
   {
    "q": "Quelle petite tarte à la crème est la pâtisserie phare de Lisbonne ? Pastel de ___ ?",
    "a": "Nata"
   },
   {
    "q": "Quel vin rouge doux et fortifié tient son nom d'une ville portugaise ?",
    "c": [
     "Porto",
     "Madère",
     "Sherry",
     "Marsala"
    ],
    "a": "Porto"
   },
   {
    "q": "Quel footballeur portugais surnommé CR7 est une superstar mondiale ?",
    "c": [
     "Ronaldo",
     "Figo",
     "Eusébio",
     "Deco"
    ],
    "a": "Ronaldo"
   },
   {
    "q": "Quel navigateur portugais a ouvert la route maritime des Indes en 1498 ?",
    "c": [
     "Vasco de Gama",
     "Magellan",
     "Dias",
     "Cabral"
    ],
    "a": "Vasco de Gama"
   },
   {
    "q": "Quel tremblement de terre a dévasté Lisbonne le 1er novembre 1755 ? On retient l'année : ?",
    "a": "1755"
   },
   {
    "q": "En quelle année précise le Portugal a-t-il rétrocédé Macao à la Chine ?",
    "a": "1999"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_021",
  "cat": "culture",
  "name": "L'Argentine",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de l'Argentine ?",
    "c": [
     "Buenos Aires",
     "Córdoba",
     "Rosario",
     "Mendoza"
    ],
    "a": "Buenos Aires"
   },
   {
    "q": "Quelle danse sensuelle est née dans les faubourgs de Buenos Aires ?",
    "a": "Tango"
   },
   {
    "q": "Quel footballeur argentin, champion du monde 2022, joue avec le numéro 10 ?",
    "c": [
     "Messi",
     "Maradona",
     "Di María",
     "Agüero"
    ],
    "a": "Messi"
   },
   {
    "q": "Quelle viande grillée au feu de bois est un plat national argentin ?",
    "c": [
     "Asado",
     "Ceviche",
     "Feijoada",
     "Chili"
    ],
    "a": "Asado"
   },
   {
    "q": "Quelle immense plaine herbeuse couvre le centre de l'Argentine ?",
    "a": "Pampa"
   },
   {
    "q": "Quelle infusion d'herbe se boit dans une calebasse avec une paille métallique ?",
    "a": "Mate"
   },
   {
    "q": "Quelle première dame argentine, épouse de Perón, est surnommée « Evita » ?",
    "c": [
     "Eva Perón",
     "Isabel Perón",
     "Cristina Kirchner",
     "Mirtha Legrand"
    ],
    "a": "Eva Perón"
   },
   {
    "q": "Quelle est la hauteur, en mètres, de l'Aconcagua, plus haut sommet des Amériques ?",
    "a": "6961"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_022",
  "cat": "culture",
  "name": "La Corée du Sud",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Corée du Sud ?",
    "c": [
     "Séoul",
     "Busan",
     "Incheon",
     "Daegu"
    ],
    "a": "Séoul"
   },
   {
    "q": "Quel genre musical coréen a explosé avec le tube Gangnam Style ?",
    "a": "Kpop"
   },
   {
    "q": "Quel plat coréen de chou fermenté et pimenté accompagne chaque repas ?",
    "a": "Kimchi"
   },
   {
    "q": "Quelle marque coréenne fabrique smartphones Galaxy et téléviseurs ?",
    "c": [
     "Samsung",
     "Sony",
     "Huawei",
     "Xiaomi"
    ],
    "a": "Samsung"
   },
   {
    "q": "Quelle série Netflix coréenne de 2021, avec des jeux mortels, a battu des records ?",
    "c": [
     "Squid Game",
     "Kingdom",
     "Sweet Home",
     "Vincenzo"
    ],
    "a": "Squid Game"
   },
   {
    "q": "Quel groupe de K-pop masculin en sept membres est le plus célèbre au monde ?",
    "c": [
     "BTS",
     "EXO",
     "NCT",
     "Seventeen"
    ],
    "a": "BTS"
   },
   {
    "q": "Quel art martial coréen olympique est basé sur les coups de pied ?",
    "c": [
     "Taekwondo",
     "Judo",
     "Karaté",
     "Aïkido"
    ],
    "a": "Taekwondo"
   },
   {
    "q": "Le long de quel parallèle passe la frontière entre les deux Corées ? Le ___e parallèle ?",
    "a": "38"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_023",
  "cat": "culture",
  "name": "L'Afrique du Sud",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle ville sud-africaine, au bord de l'océan, est dominée par la montagne de la Table ?",
    "c": [
     "Le Cap",
     "Johannesburg",
     "Durban",
     "Pretoria"
    ],
    "a": "Le Cap"
   },
   {
    "q": "Quel militant a mis fin à l'apartheid et est devenu président en 1994 ?",
    "c": [
     "Mandela",
     "Tutu",
     "Biko",
     "Sisulu"
    ],
    "a": "Mandela"
   },
   {
    "q": "Comment nomme-t-on le régime de ségrégation raciale aboli en Afrique du Sud ?",
    "a": "Apartheid"
   },
   {
    "q": "Quel métal précieux jaune fait la richesse minière de Johannesburg ?",
    "a": "Or"
   },
   {
    "q": "Quelle réserve célèbre permet d'observer les Big Five ? Le parc ___ ?",
    "c": [
     "Kruger",
     "Serengeti",
     "Etosha",
     "Chobe"
    ],
    "a": "Kruger"
   },
   {
    "q": "Quel sport, dont l'Afrique du Sud est plusieurs fois championne du monde, se joue avec un ballon ovale ?",
    "c": [
     "Rugby",
     "Cricket",
     "Football",
     "Hockey"
    ],
    "a": "Rugby"
   },
   {
    "q": "Combien de langues officielles l'Afrique du Sud reconnaît-elle ?",
    "a": "11"
   },
   {
    "q": "En quelle année le premier cœur humain a-t-il été greffé au Cap par le Dr Barnard ?",
    "a": "1967"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_024",
  "cat": "culture",
  "name": "Le Maroc",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale du Maroc ?",
    "c": [
     "Rabat",
     "Casablanca",
     "Marrakech",
     "Fès"
    ],
    "a": "Rabat"
   },
   {
    "q": "Quel plat marocain mijoté tient son nom de son plat en terre à couvercle conique ?",
    "a": "Tajine"
   },
   {
    "q": "Quelle semoule de blé roulée est la base d'un plat national marocain ?",
    "a": "Couscous"
   },
   {
    "q": "Quel thé parfumé, sucré et servi de haut, est un rituel marocain ? Thé à la ___ ?",
    "a": "Menthe"
   },
   {
    "q": "Quelle chaîne de montagnes traverse le Maroc ? L'___ ?",
    "c": [
     "Atlas",
     "Rif",
     "Alpes",
     "Andes"
    ],
    "a": "Atlas"
   },
   {
    "q": "Comment nomme-t-on la médina, le vieux quartier commerçant à ruelles étroites ?",
    "c": [
     "Souk",
     "Bazar",
     "Kasbah",
     "Riad"
    ],
    "a": "Souk"
   },
   {
    "q": "Quel désert de sable borde le sud-est du Maroc ?",
    "a": "Sahara"
   },
   {
    "q": "En quelle année le Maroc a-t-il obtenu son indépendance de la France ?",
    "a": "1956"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_025",
  "cat": "culture",
  "name": "La Thaïlande",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Thaïlande ?",
    "c": [
     "Bangkok",
     "Phuket",
     "Chiang Mai",
     "Pattaya"
    ],
    "a": "Bangkok"
   },
   {
    "q": "Quelle soupe thaï épicée aux crevettes et à la citronnelle est célèbre ? Tom ___ ?",
    "a": "Yum"
   },
   {
    "q": "Quel plat thaï de nouilles de riz sautées est un incontournable ? Pad ___ ?",
    "a": "Thai"
   },
   {
    "q": "Quelle religion majoritaire en Thaïlande vénère un homme atteignant l'Éveil ?",
    "c": [
     "Bouddhisme",
     "Hindouisme",
     "Islam",
     "Taoïsme"
    ],
    "a": "Bouddhisme"
   },
   {
    "q": "Quel art martial thaïlandais utilise poings, coudes, genoux et tibias ? La boxe ___ ?",
    "c": [
     "thaï",
     "birmane",
     "khmère",
     "lao"
    ],
    "a": "thaï"
   },
   {
    "q": "Quel grand animal gris à trompe est un symbole national de la Thaïlande ?",
    "a": "Elephant"
   },
   {
    "q": "Quelle était l'ancienne appellation de la Thaïlande avant 1939 ?",
    "c": [
     "Siam",
     "Birmanie",
     "Annam",
     "Laos"
    ],
    "a": "Siam"
   },
   {
    "q": "Combien de temples bouddhistes (wats) compte environ la Thaïlande ?",
    "a": "40000"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_026",
  "cat": "culture",
  "name": "Nouvelle-Zélande",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Nouvelle-Zélande ?",
    "c": [
     "Wellington",
     "Auckland",
     "Christchurch",
     "Hamilton"
    ],
    "a": "Wellington"
   },
   {
    "q": "Quel peuple autochtone polynésien vivait en Nouvelle-Zélande avant les Européens ?",
    "c": [
     "Maoris",
     "Aborigènes",
     "Inuits",
     "Aztèques"
    ],
    "a": "Maoris"
   },
   {
    "q": "Quel petit oiseau nocturne sans ailes est l'emblème du pays et surnom des habitants ?",
    "a": "Kiwi"
   },
   {
    "q": "Quelle danse guerrière maorie exécutent les rugbymen néo-zélandais avant les matchs ?",
    "a": "Haka"
   },
   {
    "q": "Quelle saga de films de Peter Jackson a été tournée en Nouvelle-Zélande ? Le Seigneur des ___ ?",
    "a": "Anneaux"
   },
   {
    "q": "Comment surnomme-t-on l'équipe nationale de rugby de Nouvelle-Zélande ? Les All ___ ?",
    "c": [
     "Blacks",
     "Whites",
     "Reds",
     "Greens"
    ],
    "a": "Blacks"
   },
   {
    "q": "Quel animal, très nombreux dans le pays, dépasse largement en nombre la population humaine ?",
    "c": [
     "Mouton",
     "Vache",
     "Chèvre",
     "Cheval"
    ],
    "a": "Mouton"
   },
   {
    "q": "Environ combien de moutons compte la Nouvelle-Zélande (en millions) ?",
    "a": "26"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_027",
  "cat": "culture",
  "name": "Le Chili",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale du Chili ?",
    "c": [
     "Santiago",
     "Valparaíso",
     "Concepción",
     "Antofagasta"
    ],
    "a": "Santiago"
   },
   {
    "q": "Quelle très longue chaîne de montagnes borde le Chili à l'est ?",
    "a": "Andes"
   },
   {
    "q": "Quel désert du nord du Chili est le plus aride du monde ?",
    "c": [
     "Atacama",
     "Sahara",
     "Gobi",
     "Kalahari"
    ],
    "a": "Atacama"
   },
   {
    "q": "Quelle île chilienne isolée est célèbre pour ses statues géantes (moaï) ? L'île de ___ ?",
    "c": [
     "Pâques",
     "Robinson",
     "Chiloé",
     "Juan Fernández"
    ],
    "a": "Pâques"
   },
   {
    "q": "Quel poète chilien, prix Nobel, a écrit les Vingt poèmes d'amour ?",
    "c": [
     "Neruda",
     "Mistral",
     "Borges",
     "Paz"
    ],
    "a": "Neruda"
   },
   {
    "q": "Quel général a dirigé une dictature au Chili de 1973 à 1990 ?",
    "c": [
     "Pinochet",
     "Allende",
     "Videla",
     "Stroessner"
    ],
    "a": "Pinochet"
   },
   {
    "q": "Quelle est la forme géographique très particulière du Chili, long et étroit ? Une ___ de terre ?",
    "c": [
     "bande",
     "boule",
     "spirale",
     "étoile"
    ],
    "a": "bande"
   },
   {
    "q": "Sur combien de kilomètres, environ, s'étire le Chili du nord au sud ?",
    "a": "4300"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_028",
  "cat": "culture",
  "name": "Danemark",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale du Danemark ?",
    "c": [
     "Copenhague",
     "Aarhus",
     "Odense",
     "Aalborg"
    ],
    "a": "Copenhague"
   },
   {
    "q": "Quelle statue de bronze inspirée d'un conte accueille les bateaux à Copenhague ? La petite ___ ?",
    "a": "Sirene"
   },
   {
    "q": "Quel écrivain danois est l'auteur de La Petite Sirène et du Vilain Petit Canard ?",
    "c": [
     "Andersen",
     "Grimm",
     "Perrault",
     "Tolkien"
    ],
    "a": "Andersen"
   },
   {
    "q": "Quelle célèbre marque de briques de construction à emboîter est danoise ?",
    "a": "Lego"
   },
   {
    "q": "Quel concept danois de confort douillet et chaleureux est à la mode ?",
    "c": [
     "Hygge",
     "Lagom",
     "Fika",
     "Ikigai"
    ],
    "a": "Hygge"
   },
   {
    "q": "Quelle viennoiserie feuilletée porte le nom de ce pays en anglais ? Un ___ ?",
    "c": [
     "Danish",
     "Croissant",
     "Bagel",
     "Muffin"
    ],
    "a": "Danish"
   },
   {
    "q": "Quel grand territoire arctique, plus vaste que le pays lui-même, appartient au Danemark ?",
    "c": [
     "Groenland",
     "Islande",
     "Svalbard",
     "Féroé"
    ],
    "a": "Groenland"
   },
   {
    "q": "En quelle année a été inauguré le parc d'attractions de Tivoli, à Copenhague ?",
    "a": "1843"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_029",
  "cat": "culture",
  "name": "Finlande",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de la Finlande ?",
    "c": [
     "Helsinki",
     "Tampere",
     "Turku",
     "Oulu"
    ],
    "a": "Helsinki"
   },
   {
    "q": "Quel bain de chaleur sec, invention finlandaise, est pratiqué dans tout le pays ?",
    "a": "Sauna"
   },
   {
    "q": "Quel personnage rouge et blanc de Laponie finlandaise distribue les cadeaux ? Le père ___ ?",
    "a": "Noel"
   },
   {
    "q": "Quels personnages blancs en forme d'hippopotames, créés en Finlande, sont célèbres ?",
    "c": [
     "Moomins",
     "Barbapapa",
     "Schtroumpfs",
     "Teletubbies"
    ],
    "a": "Moomins"
   },
   {
    "q": "Quelle marque de téléphones a longtemps été le fleuron industriel finlandais ?",
    "c": [
     "Nokia",
     "Ericsson",
     "Sony",
     "Motorola"
    ],
    "a": "Nokia"
   },
   {
    "q": "Comment surnomme-t-on la Finlande à cause de ses innombrables lacs ? Le pays des mille ___ ?",
    "a": "Lacs"
   },
   {
    "q": "Quelle région du nord de la Finlande, terre du père Noël, chevauche le cercle polaire ?",
    "c": [
     "Laponie",
     "Carélie",
     "Ostrobotnie",
     "Savonie"
    ],
    "a": "Laponie"
   },
   {
    "q": "Combien de lacs, environ, compte réellement la Finlande ?",
    "a": "188000"
   }
  ],
  "rw": true
 },
 {
  "id": "culture_030",
  "cat": "culture",
  "name": "Irlande",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la capitale de l'Irlande ?",
    "c": [
     "Dublin",
     "Cork",
     "Galway",
     "Limerick"
    ],
    "a": "Dublin"
   },
   {
    "q": "Quelle bière brune irlandaise à mousse crémeuse est mondialement connue ?",
    "c": [
     "Guinness",
     "Heineken",
     "Kilkenny",
     "Murphy's"
    ],
    "a": "Guinness"
   },
   {
    "q": "Quelle plante à trois feuilles est le symbole national de l'Irlande ?",
    "a": "Trefle"
   },
   {
    "q": "Quel petit lutin roux du folklore irlandais garde un chaudron d'or ?",
    "c": [
     "Leprechaun",
     "Troll",
     "Gnome",
     "Farfadet"
    ],
    "a": "Leprechaun"
   },
   {
    "q": "Quelle fête irlandaise du 17 mars se célèbre en vert dans le monde entier ? La Saint-___ ?",
    "c": [
     "Patrick",
     "Brendan",
     "Kevin",
     "Colomba"
    ],
    "a": "Patrick"
   },
   {
    "q": "Quel instrument à cordes, symbole de l'Irlande, figure sur ses pièces d'euro ?",
    "c": [
     "Harpe",
     "Violon",
     "Cornemuse",
     "Luth"
    ],
    "a": "Harpe"
   },
   {
    "q": "Quel groupe de rock irlandais est mené par le chanteur Bono ?",
    "c": [
     "U2",
     "Coldplay",
     "Oasis",
     "The Cranberries"
    ],
    "a": "U2"
   },
   {
    "q": "En quelle année l'État libre d'Irlande a-t-il été proclamé, indépendant du Royaume-Uni ?",
    "a": "1922"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_001",
  "cat": "cinema",
  "name": "Films Jurassic Park",
  "level": "classique",
  "levels": [
   {
    "q": "Quel genre d'animaux disparus sont ramenés à la vie dans Jurassic Park ?",
    "a": "Dinosaure"
   },
   {
    "q": "Quel réalisateur de E.T. a réalisé Jurassic Park en 1993 ?",
    "c": [
     "Spielberg",
     "Cameron",
     "Lucas",
     "Scott"
    ],
    "a": "Spielberg"
   },
   {
    "q": "Quel grand carnivore aux petits bras est la star du parc ? Le T-___ ?",
    "a": "Rex"
   },
   {
    "q": "À partir de quoi, conservé dans l'ambre, l'ADN des dinosaures est-il extrait ?",
    "c": [
     "Moustique",
     "Abeille",
     "Fourmi",
     "Papillon"
    ],
    "a": "Moustique"
   },
   {
    "q": "Quels petits prédateurs rusés et rapides chassent en meute dans la cuisine ?",
    "c": [
     "Vélociraptors",
     "Tricératops",
     "Diplodocus",
     "Ptérodactyles"
    ],
    "a": "Vélociraptors"
   },
   {
    "q": "Quel mathématicien en noir énonce la théorie du chaos ? Ian ___ ?",
    "c": [
     "Malcolm",
     "Grant",
     "Hammond",
     "Nedry"
    ],
    "a": "Malcolm"
   },
   {
    "q": "Quel milliardaire a créé le parc sur l'île Nublar ? John ___ ?",
    "c": [
     "Hammond",
     "Wayne",
     "Stark",
     "Kane"
    ],
    "a": "Hammond"
   },
   {
    "q": "Quelle est la durée exacte, en minutes, du premier film Jurassic Park (1993) ?",
    "a": "127"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_002",
  "cat": "cinema",
  "name": "Films Star Wars",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle arme laser au manche est l'arme emblématique des Jedi ? Le ___ laser ?",
    "a": "Sabre"
   },
   {
    "q": "Comment s'appelle le petit robot bleu et blanc qui siffle ? R2-___ ?",
    "a": "D2"
   },
   {
    "q": "Quel méchant respirant fort porte un masque et une cape noire ? Dark ___ ?",
    "c": [
     "Vador",
     "Maul",
     "Sidious",
     "Bane"
    ],
    "a": "Vador"
   },
   {
    "q": "Quelle princesse aux macarons capillaires est jouée par Carrie Fisher ?",
    "c": [
     "Leia",
     "Padmé",
     "Rey",
     "Jyn"
    ],
    "a": "Leia"
   },
   {
    "q": "Quel petit maître Jedi vert parle à l'envers ?",
    "a": "Yoda"
   },
   {
    "q": "Quel contrebandier pilote le Faucon Millenium ? Han ___ ?",
    "c": [
     "Solo",
     "Calrissian",
     "Fett",
     "Antilles"
    ],
    "a": "Solo"
   },
   {
    "q": "Quel réalisateur a créé la saga Star Wars en 1977 ?",
    "c": [
     "George Lucas",
     "Spielberg",
     "Kubrick",
     "Coppola"
    ],
    "a": "George Lucas"
   },
   {
    "q": "Quelle est la durée, en minutes, du film Star Wars épisode IV de 1977 ?",
    "a": "121"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_003",
  "cat": "cinema",
  "name": "Films Harry Potter",
  "level": "classique",
  "levels": [
   {
    "q": "Quel jeune sorcier à lunettes et cicatrice est le héros de la saga ?",
    "a": "Harry"
   },
   {
    "q": "Comment s'appelle l'école de sorcellerie où étudie Harry ?",
    "c": [
     "Poudlard",
     "Beauxbâtons",
     "Durmstrang",
     "Salem"
    ],
    "a": "Poudlard"
   },
   {
    "q": "Quelle amie brillante et frisée aide Harry ? Hermione ___ ?",
    "c": [
     "Granger",
     "Weasley",
     "Lovegood",
     "Chang"
    ],
    "a": "Granger"
   },
   {
    "q": "Quel sport de sorciers se joue sur des balais volants ?",
    "a": "Quidditch"
   },
   {
    "q": "Quel mage noir sans nez veut tuer Harry ? Lord ___ ?",
    "c": [
     "Voldemort",
     "Sauron",
     "Grindelwald",
     "Saroumane"
    ],
    "a": "Voldemort"
   },
   {
    "q": "Dans quelle maison de Poudlard Harry est-il réparti ?",
    "c": [
     "Gryffondor",
     "Serpentard",
     "Serdaigle",
     "Poufsouffle"
    ],
    "a": "Gryffondor"
   },
   {
    "q": "Quelle romancière britannique a écrit les livres Harry Potter ? J.K. ___ ?",
    "c": [
     "Rowling",
     "Christie",
     "Tolkien",
     "Austen"
    ],
    "a": "Rowling"
   },
   {
    "q": "Combien de tomes compte la série de livres Harry Potter ?",
    "a": "7"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_004",
  "cat": "cinema",
  "name": "Films Le Seigneur des Anneaux",
  "level": "classique",
  "levels": [
   {
    "q": "Quel petit être aux pieds poilus est le héros ? Un ___ ?",
    "c": [
     "Hobbit",
     "Elfe",
     "Nain",
     "Orc"
    ],
    "a": "Hobbit"
   },
   {
    "q": "Quel objet doré et magique doit être détruit dans le film ? L'___ unique ?",
    "a": "Anneau"
   },
   {
    "q": "Quel hobbit porteur de l'anneau est le héros ? Frodon ___ ?",
    "c": [
     "Sacquet",
     "Touque",
     "Brandebouc",
     "Gamgie"
    ],
    "a": "Sacquet"
   },
   {
    "q": "Quel magicien gris à grand chapeau guide la communauté ?",
    "c": [
     "Gandalf",
     "Saroumane",
     "Radagast",
     "Merlin"
    ],
    "a": "Gandalf"
   },
   {
    "q": "Dans quelle montagne l'anneau doit-il être jeté ? La Montagne du ___ ?",
    "c": [
     "Destin",
     "Feu",
     "Roi",
     "Nord"
    ],
    "a": "Destin"
   },
   {
    "q": "Quelle créature rampante et schizophrène appelle l'anneau « mon précieux » ?",
    "c": [
     "Gollum",
     "Sauron",
     "Grima",
     "Bilbo"
    ],
    "a": "Gollum"
   },
   {
    "q": "Quel réalisateur néo-zélandais a mis en scène la trilogie ? Peter ___ ?",
    "c": [
     "Jackson",
     "Cameron",
     "Nolan",
     "Scott"
    ],
    "a": "Jackson"
   },
   {
    "q": "Combien d'Oscars a remporté Le Retour du roi, record égalé, en 2004 ?",
    "a": "11"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_005",
  "cat": "cinema",
  "name": "Films Marvel",
  "level": "classique",
  "levels": [
   {
    "q": "Quel milliardaire en armure de fer est joué par Robert Downey Jr ? Iron ___ ?",
    "a": "Man"
   },
   {
    "q": "Quel super-héros lance des toiles et grimpe aux murs ? ___-Man ?",
    "c": [
     "Spider",
     "Ant",
     "Iron",
     "Aqua"
    ],
    "a": "Spider"
   },
   {
    "q": "Quel dieu nordique du tonnerre porte un marteau chez Marvel ?",
    "a": "Thor"
   },
   {
    "q": "Comment s'appelle l'équipe de super-héros réunie par le SHIELD ? Les ___ ?",
    "c": [
     "Avengers",
     "X-Men",
     "Gardiens",
     "Défenseurs"
    ],
    "a": "Avengers"
   },
   {
    "q": "Quel géant violet cherche les six pierres d'infinité ?",
    "c": [
     "Thanos",
     "Loki",
     "Ultron",
     "Dormammu"
    ],
    "a": "Thanos"
   },
   {
    "q": "Quel soldat congelé pendant 70 ans est Captain ___ ?",
    "c": [
     "America",
     "Marvel",
     "Britain",
     "Falcon"
    ],
    "a": "America"
   },
   {
    "q": "Quel roi du Wakanda est le super-héros Black ___ ?",
    "c": [
     "Panther",
     "Widow",
     "Bolt",
     "Cat"
    ],
    "a": "Panther"
   },
   {
    "q": "En quelle année est sorti le tout premier film de l'univers Marvel, Iron Man ?",
    "a": "2008"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_006",
  "cat": "cinema",
  "name": "Films Titanic",
  "level": "classique",
  "levels": [
   {
    "q": "Quel grand paquebot insubmersible coule dans le film ?",
    "a": "Titanic"
   },
   {
    "q": "Quel jeune héros pauvre est joué par Leonardo DiCaprio ?",
    "a": "Jack"
   },
   {
    "q": "Quelle jeune femme de la haute société tombe amoureuse de Jack ?",
    "c": [
     "Rose",
     "Ruth",
     "Molly",
     "Cora"
    ],
    "a": "Rose"
   },
   {
    "q": "Contre quel obstacle flottant le Titanic heurte-t-il en pleine nuit ?",
    "c": [
     "Iceberg",
     "Rocher",
     "Récif",
     "Navire"
    ],
    "a": "Iceberg"
   },
   {
    "q": "Quel réalisateur d'Avatar a aussi réalisé Titanic ? James ___ ?",
    "c": [
     "Cameron",
     "Spielberg",
     "Nolan",
     "Scott"
    ],
    "a": "Cameron"
   },
   {
    "q": "Quel énorme diamant bleu porte le nom de « Cœur de l'___ » ?",
    "a": "Ocean"
   },
   {
    "q": "Quelle chanson de Céline Dion est le thème du film ? My Heart Will ___ On ?",
    "c": [
     "Go",
     "Live",
     "Stay",
     "Beat"
    ],
    "a": "Go"
   },
   {
    "q": "En quelle année, exactement, le vrai Titanic a-t-il coulé ?",
    "a": "1912"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_007",
  "cat": "cinema",
  "name": "Films Retour vers le futur",
  "level": "classique",
  "levels": [
   {
    "q": "Quel type de machine à voyager dans le temps est faite à partir d'une voiture ?",
    "a": "DeLorean"
   },
   {
    "q": "Quel adolescent voyage dans le temps ? Marty ___ ?",
    "c": [
     "McFly",
     "Brown",
     "Tannen",
     "Parker"
    ],
    "a": "McFly"
   },
   {
    "q": "Quel savant excentrique aux cheveux blancs a inventé la machine ? Doc ___ ?",
    "c": [
     "Brown",
     "Emmett",
     "Marty",
     "Biff"
    ],
    "a": "Brown"
   },
   {
    "q": "À quelle vitesse, en miles/h, la voiture doit-elle rouler pour voyager ?",
    "a": "88"
   },
   {
    "q": "Quel appareil permet le voyage temporel ? Le convecteur ___ ?",
    "c": [
     "temporel",
     "spatial",
     "quantique",
     "cosmique"
    ],
    "a": "temporel"
   },
   {
    "q": "Quelle brute harcèle la famille de Marty à travers les époques ? Biff ___ ?",
    "c": [
     "Tannen",
     "Strickland",
     "Parker",
     "Wilson"
    ],
    "a": "Tannen"
   },
   {
    "q": "En quelle année du passé Marty se retrouve-t-il coincé dans le premier film ?",
    "a": "1955"
   },
   {
    "q": "Quelle est la durée, en minutes, du premier film Retour vers le futur (1985) ?",
    "a": "116"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_008",
  "cat": "cinema",
  "name": "Films Indiana Jones",
  "level": "classique",
  "levels": [
   {
    "q": "Quel accessoire en cuir Indiana Jones manie-t-il comme une arme ?",
    "a": "Fouet"
   },
   {
    "q": "Quel type de couvre-chef en feutre porte toujours Indiana Jones ?",
    "c": [
     "Chapeau",
     "Casquette",
     "Béret",
     "Bonnet"
    ],
    "a": "Chapeau"
   },
   {
    "q": "Quel acteur de Star Wars incarne Indiana Jones ? Harrison ___ ?",
    "c": [
     "Ford",
     "Fisher",
     "Hamill",
     "Williams"
    ],
    "a": "Ford"
   },
   {
    "q": "Quel métier de professeur d'université exerce Indiana Jones ?",
    "c": [
     "Archéologue",
     "Historien",
     "Géologue",
     "Biologiste"
    ],
    "a": "Archéologue"
   },
   {
    "q": "Quel objet sacré recherche-t-il dans « Les Aventuriers de l'arche ___ » ?",
    "c": [
     "perdue",
     "sainte",
     "sacrée",
     "cachée"
    ],
    "a": "perdue"
   },
   {
    "q": "Quel réalisateur de Jurassic Park a aussi réalisé Indiana Jones ?",
    "c": [
     "Spielberg",
     "Lucas",
     "Cameron",
     "Zemeckis"
    ],
    "a": "Spielberg"
   },
   {
    "q": "Quels insectes remplissent le temple dans le Temple maudit ?",
    "c": [
     "Insectes",
     "Serpents",
     "Rats",
     "Scorpions"
    ],
    "a": "Insectes"
   },
   {
    "q": "En quelle année est sorti le premier film, Les Aventuriers de l'arche perdue ?",
    "a": "1981"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_009",
  "cat": "cinema",
  "name": "Films Forrest Gump",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle friandise Forrest compare-t-il à la vie ? La vie est une boîte de ___ ?",
    "c": [
     "chocolats",
     "bonbons",
     "biscuits",
     "caramels"
    ],
    "a": "chocolats"
   },
   {
    "q": "Quel acteur, deux fois oscarisé, incarne Forrest Gump ? Tom ___ ?",
    "c": [
     "Hanks",
     "Cruise",
     "Hopkins",
     "Cage"
    ],
    "a": "Hanks"
   },
   {
    "q": "Quel sport de raquette Forrest pratique-t-il pour la Chine ? Le ping-___ ?",
    "a": "pong"
   },
   {
    "q": "Quelle activité physique Forrest fait-il pendant des années à travers les USA ?",
    "c": [
     "Courir",
     "Nager",
     "Marcher",
     "Pédaler"
    ],
    "a": "Courir"
   },
   {
    "q": "Quel est le prénom de l'amour d'enfance de Forrest ?",
    "c": [
     "Jenny",
     "Sally",
     "Mary",
     "Susan"
    ],
    "a": "Jenny"
   },
   {
    "q": "Dans quelle guerre Forrest combat-il, y sauvant ses camarades ? La guerre du ___ ?",
    "c": [
     "Vietnam",
     "Golfe",
     "Corée",
     "Irak"
    ],
    "a": "Vietnam"
   },
   {
    "q": "Quelle entreprise de pêche Forrest fonde-t-il avec le lieutenant Dan ? Crevettes ___ ?",
    "c": [
     "Bubba Gump",
     "Red Lobster",
     "Long John",
     "Captain"
    ],
    "a": "Bubba Gump"
   },
   {
    "q": "Combien d'Oscars le film Forrest Gump a-t-il remportés en 1995 ?",
    "a": "6"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_010",
  "cat": "cinema",
  "name": "Films Le Parrain",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle organisation criminelle italo-américaine est au cœur du film ?",
    "a": "Mafia"
   },
   {
    "q": "Quel est le nom de la famille mafieuse du film ? Les ___ ?",
    "c": [
     "Corleone",
     "Soprano",
     "Gambino",
     "Barzini"
    ],
    "a": "Corleone"
   },
   {
    "q": "Quel acteur légendaire joue le parrain Vito Corleone ? Marlon ___ ?",
    "c": [
     "Brando",
     "Pacino",
     "De Niro",
     "Caan"
    ],
    "a": "Brando"
   },
   {
    "q": "Quel fils, d'abord réticent, devient le nouveau parrain ? Michael ___ ?",
    "c": [
     "Corleone",
     "Fredo",
     "Sonny",
     "Tom"
    ],
    "a": "Corleone"
   },
   {
    "q": "Quel réalisateur a mis en scène Le Parrain ? Francis Ford ___ ?",
    "c": [
     "Coppola",
     "Scorsese",
     "Leone",
     "De Palma"
    ],
    "a": "Coppola"
   },
   {
    "q": "Quel animal retrouve-t-on décapité dans un lit, scène culte du film ?",
    "c": [
     "Cheval",
     "Chien",
     "Taureau",
     "Cochon"
    ],
    "a": "Cheval"
   },
   {
    "q": "Dans quelle grande île italienne la famille Corleone a-t-elle ses racines ?",
    "c": [
     "Sicile",
     "Sardaigne",
     "Corse",
     "Capri"
    ],
    "a": "Sicile"
   },
   {
    "q": "En quelle année est sorti le premier film Le Parrain ?",
    "a": "1972"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_011",
  "cat": "cinema",
  "name": "Films Pulp Fiction",
  "level": "classique",
  "levels": [
   {
    "q": "Quel réalisateur, adepte des dialogues cultes, a réalisé Pulp Fiction ? Quentin ___ ?",
    "c": [
     "Tarantino",
     "Scorsese",
     "Fincher",
     "Coen"
    ],
    "a": "Tarantino"
   },
   {
    "q": "Quel acteur joue le tueur Vincent Vega ? John ___ ?",
    "c": [
     "Travolta",
     "Jackson",
     "Willis",
     "Roth"
    ],
    "a": "Travolta"
   },
   {
    "q": "Quel type de danse Vincent et Mia exécutent-ils dans le restaurant ? Le ___ ?",
    "c": [
     "Twist",
     "Rock",
     "Charleston",
     "Madison"
    ],
    "a": "Twist"
   },
   {
    "q": "Que contient la mystérieuse mallette qui brille dans le film ?",
    "c": [
     "Inconnu",
     "Or",
     "Argent",
     "Diamants"
    ],
    "a": "Inconnu"
   },
   {
    "q": "Quel acteur incarne le tueur biblique Jules Winnfield ? Samuel L. ___ ?",
    "c": [
     "Jackson",
     "Travolta",
     "Willis",
     "Rhames"
    ],
    "a": "Jackson"
   },
   {
    "q": "Quel boxeur, joué par Bruce Willis, refuse de perdre son combat ?",
    "c": [
     "Butch",
     "Marsellus",
     "Vincent",
     "Jules"
    ],
    "a": "Butch"
   },
   {
    "q": "Quel personnage « nettoyeur » vient régler les problèmes ? Monsieur ___ ? (The Wolf)",
    "c": [
     "Wolf",
     "Fox",
     "Bear",
     "Lion"
    ],
    "a": "Wolf"
   },
   {
    "q": "En quelle année Pulp Fiction a-t-il remporté la Palme d'or à Cannes ?",
    "a": "1994"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_012",
  "cat": "cinema",
  "name": "Films Inception",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel état, propice aux rêves, se déroule l'essentiel du film ?",
    "c": [
     "Sommeil",
     "Coma",
     "Transe",
     "Hypnose"
    ],
    "a": "Sommeil"
   },
   {
    "q": "Quel réalisateur d'Interstellar a réalisé Inception ? Christopher ___ ?",
    "c": [
     "Nolan",
     "Villeneuve",
     "Fincher",
     "Scott"
    ],
    "a": "Nolan"
   },
   {
    "q": "Quel acteur incarne l'extracteur de rêves Dom Cobb ? Leonardo ___ ?",
    "c": [
     "DiCaprio",
     "Pitt",
     "Damon",
     "Gosling"
    ],
    "a": "DiCaprio"
   },
   {
    "q": "Quel petit objet Cobb fait-il tourner pour savoir s'il rêve ? Une ___ ?",
    "c": [
     "toupie",
     "montre",
     "pièce",
     "clé"
    ],
    "a": "toupie"
   },
   {
    "q": "Comment nomme-t-on l'action d'implanter une idée dans un rêve, le titre du film ?",
    "c": [
     "Inception",
     "Extraction",
     "Projection",
     "Diversion"
    ],
    "a": "Inception"
   },
   {
    "q": "Combien de niveaux de rêve emboîtés l'équipe explore-t-elle en profondeur ?",
    "a": "3"
   },
   {
    "q": "Comment nomme-t-on les rêves imbriqués dans d'autres rêves ? Un rêve dans un ___ ?",
    "c": [
     "rêve",
     "songe",
     "coma",
     "monde"
    ],
    "a": "rêve"
   },
   {
    "q": "Quelle est la durée, en minutes, du film Inception (2010) ?",
    "a": "148"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_013",
  "cat": "cinema",
  "name": "Films Matrix",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle couleur est la pilule que Neo choisit pour connaître la vérité ?",
    "c": [
     "Rouge",
     "Bleue",
     "Verte",
     "Jaune"
    ],
    "a": "Rouge"
   },
   {
    "q": "Quel personnage élu est joué par Keanu Reeves ?",
    "a": "Neo"
   },
   {
    "q": "Quel mentor en lunettes noires guide Neo ?",
    "c": [
     "Morpheus",
     "Trinity",
     "Cypher",
     "Tank"
    ],
    "a": "Morpheus"
   },
   {
    "q": "Quel agent en costume et lunettes traque Neo dans la Matrice ? L'agent ___ ?",
    "c": [
     "Smith",
     "Brown",
     "Jones",
     "White"
    ],
    "a": "Smith"
   },
   {
    "q": "Quelle simulation informatique tient les humains prisonniers ? La ___ ?",
    "c": [
     "Matrice",
     "Grille",
     "Toile",
     "Sphère"
    ],
    "a": "Matrice"
   },
   {
    "q": "Quel effet visuel culte fige l'action et tourne la caméra ? Le ___ time ?",
    "c": [
     "Bullet",
     "Slow",
     "Freeze",
     "Stop"
    ],
    "a": "Bullet"
   },
   {
    "q": "Quelle héroïne en cuir noir, alliée de Neo, tombe amoureuse de lui ?",
    "c": [
     "Trinity",
     "Niobe",
     "Switch",
     "Sati"
    ],
    "a": "Trinity"
   },
   {
    "q": "En quelle année est sorti le premier film Matrix ?",
    "a": "1999"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_014",
  "cat": "cinema",
  "name": "Films Fight Club",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la première règle du Fight Club ? Il est interdit d'en ___ ?",
    "c": [
     "parler",
     "sortir",
     "rire",
     "partir"
    ],
    "a": "parler"
   },
   {
    "q": "Quel acteur au corps sculpté incarne Tyler Durden ? Brad ___ ?",
    "c": [
     "Pitt",
     "Norton",
     "Cruise",
     "Damon"
    ],
    "a": "Pitt"
   },
   {
    "q": "Quel réalisateur de Seven a réalisé Fight Club ? David ___ ?",
    "c": [
     "Fincher",
     "Nolan",
     "Aronofsky",
     "Scott"
    ],
    "a": "Fincher"
   },
   {
    "q": "Que fabrique et vend Tyler Durden à partir de graisse humaine ? Du ___ ?",
    "c": [
     "savon",
     "parfum",
     "beurre",
     "cirage"
    ],
    "a": "savon"
   },
   {
    "q": "Quelle est la nature de la relation entre le narrateur et Tyler Durden ? La même ___ ?",
    "c": [
     "personne",
     "famille",
     "équipe",
     "prison"
    ],
    "a": "personne"
   },
   {
    "q": "Quel prénom féminin porte la femme perturbée que fréquente le narrateur ?",
    "c": [
     "Marla",
     "Helena",
     "Sarah",
     "Chloe"
    ],
    "a": "Marla"
   },
   {
    "q": "Quel est le nom du projet final visant à détruire les immeubles ? Projet ___ ? (Chaos)",
    "c": [
     "Mayhem",
     "Chaos",
     "Zero",
     "Alpha"
    ],
    "a": "Mayhem"
   },
   {
    "q": "En quelle année est sorti le film Fight Club ?",
    "a": "1999"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_015",
  "cat": "cinema",
  "name": "Films Les Dents de la Mer",
  "level": "classique",
  "levels": [
   {
    "q": "Quel grand poisson prédateur terrorise les baigneurs dans le film ?",
    "a": "Requin"
   },
   {
    "q": "Quel réalisateur de Jurassic Park a réalisé Les Dents de la Mer ?",
    "c": [
     "Spielberg",
     "Cameron",
     "Scott",
     "Lucas"
    ],
    "a": "Spielberg"
   },
   {
    "q": "Sur quelle sorte de lieu balnéaire les attaques ont-elles lieu ? Une ___ ?",
    "c": [
     "plage",
     "piscine",
     "rivière",
     "port"
    ],
    "a": "plage"
   },
   {
    "q": "Quel métier exerce Brody, le héros qui traque le requin ? Chef de la ___ ?",
    "c": [
     "police",
     "plage",
     "mairie",
     "marine"
    ],
    "a": "police"
   },
   {
    "q": "Quel instrument à deux notes annonce l'arrivée du requin dans la musique culte ?",
    "c": [
     "Contrebasse",
     "Violon",
     "Piano",
     "Trompette"
    ],
    "a": "Contrebasse"
   },
   {
    "q": "Quel vieux marin bourru part chasser le requin sur son bateau ? Quint aussi appelé le ___ ?",
    "c": [
     "pêcheur",
     "capitaine",
     "marin",
     "chasseur"
    ],
    "a": "pêcheur"
   },
   {
    "q": "Sur quelle île fictive de Nouvelle-Angleterre se déroule le film ?",
    "c": [
     "Amity",
     "Nantucket",
     "Martha",
     "Cape Cod"
    ],
    "a": "Amity"
   },
   {
    "q": "En quelle année est sorti Les Dents de la Mer, considéré comme le premier blockbuster ?",
    "a": "1975"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_016",
  "cat": "cinema",
  "name": "Films E.T.",
  "level": "classique",
  "levels": [
   {
    "q": "Quel genre de créature est E.T., le héros du film ?",
    "c": [
     "Extraterrestre",
     "Robot",
     "Fantôme",
     "Mutant"
    ],
    "a": "Extraterrestre"
   },
   {
    "q": "Que veut faire E.T. tout au long du film ? Téléphoner ___ ?",
    "c": [
     "maison",
     "papa",
     "vaisseau",
     "école"
    ],
    "a": "maison"
   },
   {
    "q": "Quel réalisateur de Jurassic Park a réalisé E.T. en 1982 ?",
    "c": [
     "Spielberg",
     "Lucas",
     "Zemeckis",
     "Cameron"
    ],
    "a": "Spielberg"
   },
   {
    "q": "Quel jeune garçon recueille E.T. et s'en occupe ?",
    "c": [
     "Elliott",
     "Michael",
     "Gertie",
     "Steve"
    ],
    "a": "Elliott"
   },
   {
    "q": "Quelle friandise chocolatée sert à attirer E.T. hors de sa cachette ?",
    "c": [
     "Bonbons",
     "Chips",
     "Frites",
     "Popcorn"
    ],
    "a": "Bonbons"
   },
   {
    "q": "Quel effet marquant fait s'envoler les vélos devant la lune ? Ils ___ ?",
    "c": [
     "volent",
     "roulent",
     "sautent",
     "flottent"
    ],
    "a": "volent"
   },
   {
    "q": "De quelle couleur devient le doigt lumineux d'E.T. quand il guérit ?",
    "c": [
     "Rouge",
     "Bleu",
     "Vert",
     "Jaune"
    ],
    "a": "Rouge"
   },
   {
    "q": "Quelle est la durée, en minutes, du film E.T. l'extra-terrestre (1982) ?",
    "a": "115"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_017",
  "cat": "cinema",
  "name": "Films Alien",
  "level": "classique",
  "levels": [
   {
    "q": "Quel genre de créature hostile menace l'équipage du vaisseau ?",
    "c": [
     "Extraterrestre",
     "Robot",
     "Zombie",
     "Fantôme"
    ],
    "a": "Extraterrestre"
   },
   {
    "q": "Quelle héroïne courageuse, jouée par Sigourney Weaver, survit à la créature ?",
    "c": [
     "Ripley",
     "Sarah",
     "Leia",
     "Trinity"
    ],
    "a": "Ripley"
   },
   {
    "q": "Par quelle partie du corps le bébé alien fait-il une sortie sanglante et culte ?",
    "c": [
     "Ventre",
     "Tête",
     "Dos",
     "Bras"
    ],
    "a": "Ventre"
   },
   {
    "q": "Quel réalisateur de Blade Runner a réalisé le premier Alien ? Ridley ___ ?",
    "c": [
     "Scott",
     "Cameron",
     "Carpenter",
     "Fincher"
    ],
    "a": "Scott"
   },
   {
    "q": "Quel est le nom du vaisseau spatial du premier film ?",
    "c": [
     "Nostromo",
     "Sulaco",
     "Prometheus",
     "Covenant"
    ],
    "a": "Nostromo"
   },
   {
    "q": "Quel type de sang très corrosif coule dans les veines de l'alien ? De l'___ ?",
    "c": [
     "acide",
     "eau",
     "huile",
     "mercure"
    ],
    "a": "acide"
   },
   {
    "q": "Quel animal de compagnie Ripley sauve-t-elle du vaisseau ? Un ___ ?",
    "c": [
     "chat",
     "chien",
     "oiseau",
     "rat"
    ],
    "a": "chat"
   },
   {
    "q": "En quelle année est sorti le premier film Alien ?",
    "a": "1979"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_018",
  "cat": "cinema",
  "name": "Films Terminator",
  "level": "classique",
  "levels": [
   {
    "q": "Quel type de machine tueuse venue du futur est le Terminator ?",
    "c": [
     "Robot",
     "Extraterrestre",
     "Fantôme",
     "Mutant"
    ],
    "a": "Robot"
   },
   {
    "q": "Quel acteur musclé incarne le Terminator ? Arnold ___ ?",
    "c": [
     "Schwarzenegger",
     "Stallone",
     "Van Damme",
     "Norris"
    ],
    "a": "Schwarzenegger"
   },
   {
    "q": "Quelle phrase culte le Terminator prononce-t-il ? « I'll be ___ » ?",
    "c": [
     "back",
     "here",
     "there",
     "home"
    ],
    "a": "back"
   },
   {
    "q": "Quelle femme le Terminator est-il envoyé tuer ? Sarah ___ ?",
    "c": [
     "Connor",
     "Reese",
     "Ripley",
     "Weaver"
    ],
    "a": "Connor"
   },
   {
    "q": "Quelle intelligence artificielle militaire déclenche l'apocalypse ?",
    "c": [
     "Skynet",
     "HAL",
     "Matrix",
     "Ultron"
    ],
    "a": "Skynet"
   },
   {
    "q": "En quel métal liquide est fait le T-1000 du deuxième film ?",
    "c": [
     "Métal",
     "Verre",
     "Plastique",
     "Bois"
    ],
    "a": "Métal"
   },
   {
    "q": "Quel réalisateur de Titanic a créé Terminator ? James ___ ?",
    "c": [
     "Cameron",
     "Spielberg",
     "Scott",
     "Bay"
    ],
    "a": "Cameron"
   },
   {
    "q": "En quelle année est sorti le premier Terminator ?",
    "a": "1984"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_019",
  "cat": "cinema",
  "name": "Films Gladiator",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle grande arène de Rome les gladiateurs combattaient-ils ?",
    "c": [
     "Colisée",
     "Forum",
     "Panthéon",
     "Cirque"
    ],
    "a": "Colisée"
   },
   {
    "q": "Quel acteur incarne le général devenu gladiateur Maximus ? Russell ___ ?",
    "c": [
     "Crowe",
     "Bale",
     "Butler",
     "Gibson"
    ],
    "a": "Crowe"
   },
   {
    "q": "Quel empereur cruel, joué par Joaquin Phoenix, est l'ennemi de Maximus ?",
    "c": [
     "Commode",
     "Néron",
     "Caligula",
     "César"
    ],
    "a": "Commode"
   },
   {
    "q": "Quel geste du pouce décidait du sort du gladiateur vaincu ? Le pouce vers le ___ ?",
    "c": [
     "bas",
     "haut",
     "côté",
     "ciel"
    ],
    "a": "bas"
   },
   {
    "q": "Quel réalisateur d'Alien a réalisé Gladiator ? Ridley ___ ?",
    "c": [
     "Scott",
     "Nolan",
     "Cameron",
     "Spielberg"
    ],
    "a": "Scott"
   },
   {
    "q": "Quelle phrase Maximus lance-t-il ? « Êtes-vous pas ___ ? » (divertis)",
    "c": [
     "divertis",
     "contents",
     "prêts",
     "fiers"
    ],
    "a": "divertis"
   },
   {
    "q": "Dans quel empire antique se déroule le film Gladiator ?",
    "c": [
     "Romain",
     "Grec",
     "Égyptien",
     "Perse"
    ],
    "a": "Romain"
   },
   {
    "q": "Combien d'Oscars le film Gladiator a-t-il remportés en 2001 ?",
    "a": "5"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_020",
  "cat": "cinema",
  "name": "Films Avatar",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle couleur sont les Na'vi, habitants de la planète Pandora ?",
    "c": [
     "Bleus",
     "Verts",
     "Rouges",
     "Jaunes"
    ],
    "a": "Bleus"
   },
   {
    "q": "Sur quelle lune luxuriante se déroule le film Avatar ?",
    "c": [
     "Pandora",
     "Endor",
     "Naboo",
     "Krypton"
    ],
    "a": "Pandora"
   },
   {
    "q": "Quel réalisateur de Titanic a réalisé Avatar ? James ___ ?",
    "c": [
     "Cameron",
     "Spielberg",
     "Lucas",
     "Scott"
    ],
    "a": "Cameron"
   },
   {
    "q": "De quel handicap physique souffre Jake Sully au début du film ? Il est ___ ?",
    "c": [
     "paralysé",
     "aveugle",
     "sourd",
     "muet"
    ],
    "a": "paralysé"
   },
   {
    "q": "Comment nomme-t-on les corps hybrides pilotés à distance par les humains ? Des ___ ?",
    "c": [
     "avatars",
     "clones",
     "robots",
     "hologrammes"
    ],
    "a": "avatars"
   },
   {
    "q": "Quel ancien militaire en fauteuil est le héros ? Jake ___ ?",
    "c": [
     "Sully",
     "Quaritch",
     "Norm",
     "Grace"
    ],
    "a": "Sully"
   },
   {
    "q": "Quels grands arbres sacrés les Na'vi vénèrent-ils sur Pandora ? L'arbre-___ ?",
    "c": [
     "maison",
     "mère",
     "âmes",
     "vie"
    ],
    "a": "maison"
   },
   {
    "q": "En quelle année est sorti le premier film Avatar, longtemps plus gros succès du cinéma ?",
    "a": "2009"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_021",
  "cat": "cinema",
  "name": "Films Interstellar",
  "level": "classique",
  "levels": [
   {
    "q": "À travers quel objet cosmique les héros voyagent-ils vers d'autres galaxies ? Un trou ___ ?",
    "c": [
     "ver",
     "noir",
     "blanc",
     "bleu"
    ],
    "a": "ver"
   },
   {
    "q": "Quel réalisateur d'Inception a réalisé Interstellar ? Christopher ___ ?",
    "c": [
     "Nolan",
     "Villeneuve",
     "Scott",
     "Cuarón"
    ],
    "a": "Nolan"
   },
   {
    "q": "Quel acteur incarne l'astronaute Cooper ? Matthew ___ ?",
    "c": [
     "McConaughey",
     "Damon",
     "Affleck",
     "Cooper"
    ],
    "a": "McConaughey"
   },
   {
    "q": "Quel phénomène déforme le temps près d'une planète, une heure y valant 7 ans ?",
    "c": [
     "Gravité",
     "Vent",
     "Froid",
     "Lumière"
    ],
    "a": "Gravité"
   },
   {
    "q": "Quel robot rectangulaire et spirituel accompagne l'équipage ?",
    "c": [
     "TARS",
     "HAL",
     "R2D2",
     "Wall-E"
    ],
    "a": "TARS"
   },
   {
    "q": "Quel astre supermassif, nommé Gargantua, domine le film ? Un trou ___ ?",
    "c": [
     "noir",
     "ver",
     "blanc",
     "bleu"
    ],
    "a": "noir"
   },
   {
    "q": "Quel lien unit Cooper à Murph, qu'il tente de retrouver ? Il est son ___ ?",
    "c": [
     "père",
     "frère",
     "oncle",
     "ami"
    ],
    "a": "père"
   },
   {
    "q": "Quel physicien Nobel a été consultant scientifique du film ? Kip ___ ?",
    "c": [
     "Thorne",
     "Hawking",
     "Feynman",
     "Penrose"
    ],
    "a": "Thorne"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_022",
  "cat": "cinema",
  "name": "Films Casablanca",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle ville du Maroc se déroule ce film culte de 1942 ?",
    "a": "Casablanca"
   },
   {
    "q": "Quel acteur légendaire incarne Rick, le tenancier du café ? Humphrey ___ ?",
    "c": [
     "Bogart",
     "Grant",
     "Gable",
     "Cooper"
    ],
    "a": "Bogart"
   },
   {
    "q": "Comment s'appelle le bar tenu par Rick ? Le ___'s Café Américain ?",
    "c": [
     "Rick",
     "Sam",
     "Louis",
     "Victor"
    ],
    "a": "Rick"
   },
   {
    "q": "Quelle réplique culte Rick adresse-t-il à Ilsa ? « Joue-le encore, ___ » ?",
    "c": [
     "Sam",
     "Louis",
     "Rick",
     "Victor"
    ],
    "a": "Sam"
   },
   {
    "q": "Quelle actrice suédoise incarne Ilsa, l'amour perdu de Rick ? Ingrid ___ ?",
    "c": [
     "Bergman",
     "Garbo",
     "Kelly",
     "Hepburn"
    ],
    "a": "Bergman"
   },
   {
    "q": "Vers quel pays les réfugiés cherchent-ils à fuir depuis Casablanca via Lisbonne ?",
    "c": [
     "Amérique",
     "Angleterre",
     "Suisse",
     "Suède"
    ],
    "a": "Amérique"
   },
   {
    "q": "De quel instrument joue Sam en chantant « As Time Goes By » ?",
    "c": [
     "Piano",
     "Guitare",
     "Violon",
     "Trompette"
    ],
    "a": "Piano"
   },
   {
    "q": "Combien d'Oscars le film Casablanca a-t-il remportés en 1944 ?",
    "a": "3"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_023",
  "cat": "cinema",
  "name": "Films Psychose",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle pièce d'eau a lieu le meurtre le plus célèbre du film ? La ___ ?",
    "c": [
     "douche",
     "baignoire",
     "piscine",
     "cuisine"
    ],
    "a": "douche"
   },
   {
    "q": "Quel maître du suspense britannique a réalisé Psychose ? Alfred ___ ?",
    "c": [
     "Hitchcock",
     "Kubrick",
     "Welles",
     "Lang"
    ],
    "a": "Hitchcock"
   },
   {
    "q": "Quel type d'établissement tient le personnage de Norman Bates ? Un ___ ?",
    "c": [
     "motel",
     "hôtel",
     "bar",
     "cinéma"
    ],
    "a": "motel"
   },
   {
    "q": "Quel prénom porte le personnage inquiétant tenant le motel ? ___ Bates ?",
    "c": [
     "Norman",
     "Marion",
     "Sam",
     "Arbogast"
    ],
    "a": "Norman"
   },
   {
    "q": "Quel instrument à cordes stridentes accompagne la scène de la douche ?",
    "c": [
     "Violons",
     "Piano",
     "Guitare",
     "Flûte"
    ],
    "a": "Violons"
   },
   {
    "q": "Quel membre de sa famille Norman a-t-il naturalisé et fait « vivre » ? Sa ___ ?",
    "c": [
     "mère",
     "sœur",
     "femme",
     "fille"
    ],
    "a": "mère"
   },
   {
    "q": "De quelle couleur est le film Psychose, choix audacieux pour 1960 ?",
    "c": [
     "Noir et blanc",
     "Couleur",
     "Sépia",
     "Bleuté"
    ],
    "a": "Noir et blanc"
   },
   {
    "q": "En quelle année est sorti le film Psychose ?",
    "a": "1960"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_024",
  "cat": "cinema",
  "name": "Films Seven",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de péchés capitaux structurent les meurtres du film ?",
    "a": "7"
   },
   {
    "q": "Quel réalisateur de Fight Club a réalisé Seven ? David ___ ?",
    "c": [
     "Fincher",
     "Nolan",
     "Scott",
     "Aronofsky"
    ],
    "a": "Fincher"
   },
   {
    "q": "Quel jeune inspecteur, joué par Brad Pitt, enquête ? L'inspecteur ___ ?",
    "c": [
     "Mills",
     "Somerset",
     "Doe",
     "Tracy"
    ],
    "a": "Mills"
   },
   {
    "q": "Quel vétéran proche de la retraite fait équipe avec Mills ? Morgan ___ ?",
    "c": [
     "Freeman",
     "Pitt",
     "Spacey",
     "Kane"
    ],
    "a": "Freeman"
   },
   {
    "q": "Que découvre Mills dans la boîte livrée à la fin du film ? La tête de sa ___ ?",
    "c": [
     "femme",
     "sœur",
     "mère",
     "fille"
    ],
    "a": "femme"
   },
   {
    "q": "Quel acteur incarne le tueur en série John Doe ? Kevin ___ ?",
    "c": [
     "Spacey",
     "Costner",
     "Bacon",
     "Kline"
    ],
    "a": "Spacey"
   },
   {
    "q": "Quel temps fait-il quasiment tout le long du film, ajoutant à l'ambiance ? Il ___ ?",
    "c": [
     "pleut",
     "neige",
     "vente",
     "gèle"
    ],
    "a": "pleut"
   },
   {
    "q": "En quelle année est sorti le film Seven ?",
    "a": "1995"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_025",
  "cat": "cinema",
  "name": "Films La Guerre des Étoiles",
  "level": "classique",
  "levels": [
   {
    "q": "Quel jeune fermier de Tatooine devient un puissant Jedi ? Luke ___ ?",
    "c": [
     "Skywalker",
     "Solo",
     "Kenobi",
     "Antilles"
    ],
    "a": "Skywalker"
   },
   {
    "q": "Comment s'appelle le grand vaisseau-station capable de détruire une planète ? L'Étoile ___ ?",
    "c": [
     "Noire",
     "de la Mort",
     "Rouge",
     "Impériale"
    ],
    "a": "Noire"
   },
   {
    "q": "Quel grand humanoïde poilu est le copilote de Han Solo ?",
    "c": [
     "Chewbacca",
     "Yoda",
     "Jar Jar",
     "Ewok"
    ],
    "a": "Chewbacca"
   },
   {
    "q": "Quel maître Jedi âgé forme d'abord Luke ? Obi-Wan ___ ?",
    "c": [
     "Kenobi",
     "Windu",
     "Yoda",
     "Qui-Gon"
    ],
    "a": "Kenobi"
   },
   {
    "q": "Quelle force mystique lie tous les êtres vivants dans la saga ? La ___ ?",
    "c": [
     "Force",
     "Foi",
     "Lumière",
     "Énergie"
    ],
    "a": "Force"
   },
   {
    "q": "Quels petits êtres poilus vivent sur la lune forestière d'Endor ?",
    "c": [
     "Ewoks",
     "Jawas",
     "Wookiees",
     "Gungans"
    ],
    "a": "Ewoks"
   },
   {
    "q": "Quel chasseur de primes en armure Mandalorienne poursuit Han Solo ? Boba ___ ?",
    "c": [
     "Fett",
     "Solo",
     "Bane",
     "Maul"
    ],
    "a": "Fett"
   },
   {
    "q": "Combien d'épisodes numérotés compte la saga principale Skywalker ?",
    "a": "9"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_026",
  "cat": "cinema",
  "name": "Films Batman",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle ville sombre et corrompue Batman veille-t-il ? ___ City ?",
    "c": [
     "Gotham",
     "Metropolis",
     "Star",
     "Central"
    ],
    "a": "Gotham"
   },
   {
    "q": "Quel animal nocturne inspire le costume du héros ? Une chauve-___ ?",
    "c": [
     "souris",
     "araignée",
     "chatte",
     "grenouille"
    ],
    "a": "souris"
   },
   {
    "q": "Quel est le véritable nom de Batman ? Bruce ___ ?",
    "c": [
     "Wayne",
     "Kent",
     "Parker",
     "Stark"
    ],
    "a": "Wayne"
   },
   {
    "q": "Quel ennemi au visage blanc et sourire rouge est le pire ennemi de Batman ?",
    "c": [
     "Joker",
     "Pingouin",
     "Bane",
     "Sphinx"
    ],
    "a": "Joker"
   },
   {
    "q": "Quel fidèle majordome sert Bruce Wayne ?",
    "c": [
     "Alfred",
     "Lucius",
     "James",
     "Robin"
    ],
    "a": "Alfred"
   },
   {
    "q": "Quel jeune acrobate en costume est l'acolyte de Batman ?",
    "c": [
     "Robin",
     "Nightwing",
     "Batgirl",
     "Alfred"
    ],
    "a": "Robin"
   },
   {
    "q": "Quel acteur incarne le Joker dans The Dark Knight (2008) ? Heath ___ ?",
    "c": [
     "Ledger",
     "Nicholson",
     "Phoenix",
     "Leto"
    ],
    "a": "Ledger"
   },
   {
    "q": "En quelle année le personnage de Batman est-il apparu pour la première fois en BD ?",
    "a": "1939"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_027",
  "cat": "cinema",
  "name": "Films James Bond",
  "level": "classique",
  "levels": [
   {
    "q": "Quel numéro de matricule d'agent secret porte James Bond ? ___ ?",
    "c": [
     "007",
     "008",
     "001",
     "009"
    ],
    "a": "007"
   },
   {
    "q": "Quel cocktail Bond commande-t-il « au shaker, pas à la cuillère » ? Un ___ Martini ?",
    "c": [
     "Vodka",
     "Gin",
     "Rhum",
     "Dry"
    ],
    "a": "Vodka"
   },
   {
    "q": "Pour quel service secret britannique travaille James Bond ?",
    "c": [
     "MI6",
     "CIA",
     "KGB",
     "FBI"
    ],
    "a": "MI6"
   },
   {
    "q": "Quel gadget-fournisseur, ingénieur du MI6, équipe Bond de ses gadgets ?",
    "c": [
     "Q",
     "M",
     "R",
     "Z"
    ],
    "a": "Q"
   },
   {
    "q": "Quel acteur écossais fut le premier James Bond au cinéma ? Sean ___ ?",
    "c": [
     "Connery",
     "Moore",
     "Craig",
     "Brosnan"
    ],
    "a": "Connery"
   },
   {
    "q": "Comment appelle-t-on les héroïnes récurrentes des films ? Les ___ girls ?",
    "c": [
     "Bond",
     "Spy",
     "Gold",
     "Dr No"
    ],
    "a": "Bond"
   },
   {
    "q": "Quelle organisation criminelle dirigée par Blofeld affronte souvent Bond ?",
    "c": [
     "SPECTRE",
     "HYDRA",
     "KAOS",
     "COBRA"
    ],
    "a": "SPECTRE"
   },
   {
    "q": "En quelle année est sorti le premier film James Bond, Dr No ?",
    "a": "1962"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_028",
  "cat": "cinema",
  "name": "Films Toy Story",
  "level": "classique",
  "levels": [
   {
    "q": "De quel type d'objets, qui prennent vie, parle le film ? Des ___ ?",
    "c": [
     "jouets",
     "robots",
     "poupées",
     "peluches"
    ],
    "a": "jouets"
   },
   {
    "q": "Quel cow-boy à ficelle est le jouet préféré d'Andy ?",
    "c": [
     "Woody",
     "Buzz",
     "Rex",
     "Slinky"
    ],
    "a": "Woody"
   },
   {
    "q": "Quel ranger de l'espace au cri « Vers l'infini et au-delà » rejoint la bande ? Buzz l'___ ?",
    "c": [
     "Éclair",
     "Espace",
     "Étoile",
     "Astre"
    ],
    "a": "Éclair"
   },
   {
    "q": "Quel studio d'animation, pionnier de la 3D, a créé Toy Story ?",
    "c": [
     "Pixar",
     "Disney",
     "DreamWorks",
     "Ghibli"
    ],
    "a": "Pixar"
   },
   {
    "q": "Quel petit garçon est le propriétaire des jouets dans les trois premiers films ?",
    "c": [
     "Andy",
     "Sid",
     "Al",
     "Bonnie"
    ],
    "a": "Andy"
   },
   {
    "q": "Quel dinosaure vert et peureux fait partie des jouets ?",
    "c": [
     "Rex",
     "Woody",
     "Buzz",
     "Zurg"
    ],
    "a": "Rex"
   },
   {
    "q": "Quel voisin destructeur torture les jouets dans le premier film ?",
    "c": [
     "Sid",
     "Al",
     "Lotso",
     "Gabby"
    ],
    "a": "Sid"
   },
   {
    "q": "En quelle année est sorti Toy Story, premier long-métrage entièrement en 3D ?",
    "a": "1995"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_029",
  "cat": "cinema",
  "name": "Films Blanche-Neige",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de nains accueillent Blanche-Neige dans leur maison ?",
    "a": "7"
   },
   {
    "q": "Quel fruit empoisonné la sorcière offre-t-elle à Blanche-Neige ? Une ___ ?",
    "c": [
     "pomme",
     "poire",
     "cerise",
     "prune"
    ],
    "a": "pomme"
   },
   {
    "q": "Quel studio a produit ce premier long-métrage animé en 1937 ?",
    "c": [
     "Disney",
     "Pixar",
     "Warner",
     "MGM"
    ],
    "a": "Disney"
   },
   {
    "q": "Que demande la reine à son miroir ? « Qui est la plus ___ ? » ?",
    "c": [
     "belle",
     "forte",
     "riche",
     "sage"
    ],
    "a": "belle"
   },
   {
    "q": "Quel nain grincheux est nommé d'après son mauvais caractère ?",
    "c": [
     "Grincheux",
     "Joyeux",
     "Simplet",
     "Dormeur"
    ],
    "a": "Grincheux"
   },
   {
    "q": "Comment Blanche-Neige est-elle réveillée de son sommeil ? Par un ___ ?",
    "c": [
     "baiser",
     "cri",
     "bruit",
     "remède"
    ],
    "a": "baiser"
   },
   {
    "q": "Quel animal la reine envoie-t-elle chercher le cœur de Blanche-Neige, mais qui refuse ? Le ___ ?",
    "c": [
     "chasseur",
     "loup",
     "corbeau",
     "serpent"
    ],
    "a": "chasseur"
   },
   {
    "q": "En quelle année est sorti Blanche-Neige et les Sept Nains, tout premier long-métrage Disney ?",
    "a": "1937"
   }
  ],
  "rw": true
 },
 {
  "id": "cinema_030",
  "cat": "cinema",
  "name": "Films Shrek",
  "level": "classique",
  "levels": [
   {
    "q": "Quel genre de créature verte et grognon est le héros du film ?",
    "c": [
     "Ogre",
     "Troll",
     "Géant",
     "Gobelin"
    ],
    "a": "Ogre"
   },
   {
    "q": "Quel âne bavard accompagne Shrek dans son aventure ?",
    "c": [
     "Âne",
     "Chat",
     "Dragon",
     "Cheval"
    ],
    "a": "Âne"
   },
   {
    "q": "Quelle princesse Shrek doit-il d'abord aller délivrer ?",
    "c": [
     "Fiona",
     "Aurore",
     "Belle",
     "Raiponce"
    ],
    "a": "Fiona"
   },
   {
    "q": "Dans quel type d'habitat isolé vit Shrek au début ? Un ___ ?",
    "c": [
     "marais",
     "château",
     "forêt",
     "grotte"
    ],
    "a": "marais"
   },
   {
    "q": "Quel petit seigneur complexé par sa taille est le méchant ? Lord ___ ?",
    "c": [
     "Farquaad",
     "Charmant",
     "Hook",
     "Jafar"
    ],
    "a": "Farquaad"
   },
   {
    "q": "En quoi se transforme Fiona chaque nuit à cause d'un sortilège ? En ___ ?",
    "c": [
     "ogresse",
     "grenouille",
     "sorcière",
     "louve"
    ],
    "a": "ogresse"
   },
   {
    "q": "Quel studio, rival de Disney, a produit Shrek ?",
    "c": [
     "DreamWorks",
     "Pixar",
     "Disney",
     "Illumination"
    ],
    "a": "DreamWorks"
   },
   {
    "q": "En quelle année Shrek a-t-il remporté le tout premier Oscar du film d'animation ?",
    "a": "2002"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_001",
  "cat": "sport",
  "name": "Football",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de joueurs compte une équipe de football sur le terrain ?",
    "a": "11"
   },
   {
    "q": "Comment appelle-t-on le fait de marquer dans le but adverse ? Un ___ ?",
    "a": "But"
   },
   {
    "q": "De quelle couleur est le carton qui exclut un joueur ?",
    "c": [
     "Rouge",
     "Jaune",
     "Vert",
     "Bleu"
    ],
    "a": "Rouge"
   },
   {
    "q": "Quel joueur argentin au numéro 10 a remporté la Coupe du monde 2022 ?",
    "c": [
     "Messi",
     "Maradona",
     "Ronaldo",
     "Neymar"
    ],
    "a": "Messi"
   },
   {
    "q": "Tous les combien d'années a lieu la Coupe du monde de football ?",
    "a": "4"
   },
   {
    "q": "Quel club espagnol de Lionel Messi a dominé l'Europe dans les années 2010 ? Le FC ___ ?",
    "c": [
     "Barcelone",
     "Madrid",
     "Séville",
     "Valence"
    ],
    "a": "Barcelone"
   },
   {
    "q": "Quel joueur brésilien surnommé « O Rei » a gagné 3 Coupes du monde ?",
    "c": [
     "Pelé",
     "Ronaldo",
     "Zico",
     "Garrincha"
    ],
    "a": "Pelé"
   },
   {
    "q": "En quelle année, avant J.-C., un jeu de balle au pied ancêtre du football, le cuju, est-il attesté en Chine ?",
    "a": "206"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_002",
  "cat": "sport",
  "name": "Tennis",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quel type de terrain se joue le tournoi de Roland-Garros ? La ___ battue ?",
    "c": [
     "terre",
     "herbe",
     "dure",
     "moquette"
    ],
    "a": "terre"
   },
   {
    "q": "Combien de points valent le premier point marqué dans un jeu ? On dit ___ ?",
    "a": "15"
   },
   {
    "q": "Comment dit-on qu'un joueur a zéro point au tennis ? On dit ___ ?",
    "c": [
     "zéro",
     "nul",
     "rien",
     "blanc"
    ],
    "a": "zéro"
   },
   {
    "q": "Quel tournoi anglais sur gazon est le plus prestigieux du tennis ?",
    "c": [
     "Wimbledon",
     "US Open",
     "Roland-Garros",
     "Melbourne"
    ],
    "a": "Wimbledon"
   },
   {
    "q": "Quel joueur suisse élégant détient un record de titres du Grand Chelem ? Roger ___ ?",
    "c": [
     "Federer",
     "Nadal",
     "Djokovic",
     "Wawrinka"
    ],
    "a": "Federer"
   },
   {
    "q": "Comment appelle-t-on un service gagnant que l'adversaire ne touche pas ? Un ___ ?",
    "a": "Ace"
   },
   {
    "q": "Quel joueur espagnol surnommé « le taureau de Manacor » domine sur terre battue ?",
    "c": [
     "Nadal",
     "Federer",
     "Alcaraz",
     "Ferrer"
    ],
    "a": "Nadal"
   },
   {
    "q": "En quelle année a eu lieu la première édition du tournoi de Wimbledon ?",
    "a": "1877"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_003",
  "cat": "sport",
  "name": "Basket-ball",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de points vaut un panier marqué juste sous le cercle (hors lancers) ?",
    "a": "2"
   },
   {
    "q": "Combien de joueurs d'une même équipe sont sur le terrain au basket ?",
    "a": "5"
   },
   {
    "q": "Comment appelle-t-on l'action de faire rebondir le ballon en avançant ? Le ___ ?",
    "c": [
     "dribble",
     "smash",
     "service",
     "shoot"
    ],
    "a": "dribble"
   },
   {
    "q": "Quelle grande ligue professionnelle de basket domine aux États-Unis ?",
    "c": [
     "NBA",
     "NFL",
     "MLB",
     "NHL"
    ],
    "a": "NBA"
   },
   {
    "q": "Quel joueur des Chicago Bulls, numéro 23, est une légende mondiale ? Michael ___ ?",
    "c": [
     "Jordan",
     "James",
     "Bryant",
     "O'Neal"
    ],
    "a": "Jordan"
   },
   {
    "q": "Combien de points vaut un panier marqué au-delà de la ligne à trois points ?",
    "a": "3"
   },
   {
    "q": "Quel spectaculaire geste consiste à mettre le ballon dans le panier en sautant ? Un ___ ?",
    "c": [
     "dunk",
     "lay-up",
     "fadeaway",
     "floater"
    ],
    "a": "dunk"
   },
   {
    "q": "En quelle année James Naismith a-t-il inventé le basket-ball ?",
    "a": "1891"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_004",
  "cat": "sport",
  "name": "Rugby",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle est la forme du ballon de rugby ?",
    "c": [
     "Ovale",
     "Ronde",
     "Carrée",
     "Plate"
    ],
    "a": "Ovale"
   },
   {
    "q": "Comment appelle-t-on le fait d'aplatir le ballon dans l'en-but ? Un ___ ?",
    "a": "Essai"
   },
   {
    "q": "Combien de points vaut un essai au rugby à XV ?",
    "a": "5"
   },
   {
    "q": "Combien de joueurs compose une équipe de rugby à XV ?",
    "a": "15"
   },
   {
    "q": "Quelle mêlée regroupe les avants poussant les uns contre les autres ? La ___ ?",
    "c": [
     "mêlée",
     "touche",
     "ruck",
     "maul"
    ],
    "a": "mêlée"
   },
   {
    "q": "Quel pays de l'hémisphère sud, aux All Blacks, domine le rugby mondial ?",
    "c": [
     "Nouvelle-Zélande",
     "Australie",
     "Afrique du Sud",
     "Argentine"
    ],
    "a": "Nouvelle-Zélande"
   },
   {
    "q": "Comment appelle-t-on le coup de pied qui envoie le ballon entre les poteaux ? Un ___ ?",
    "c": [
     "drop",
     "punt",
     "grubber",
     "chandelle"
    ],
    "a": "drop"
   },
   {
    "q": "En quelle année, selon la légende, William Webb Ellis a-t-il inventé le rugby en prenant le ballon à la main ?",
    "a": "1823"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_005",
  "cat": "sport",
  "name": "Cyclisme",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle grande course cycliste française de trois semaines a lieu chaque été ? Le Tour de ___ ?",
    "a": "France"
   },
   {
    "q": "De quelle couleur est le maillot du leader du Tour de France ? Le maillot ___ ?",
    "c": [
     "jaune",
     "vert",
     "rouge",
     "blanc"
    ],
    "a": "jaune"
   },
   {
    "q": "Combien de roues compte un vélo de course classique ?",
    "a": "2"
   },
   {
    "q": "Quel maillot à pois récompense le meilleur grimpeur du Tour ? Le maillot à ___ ?",
    "c": [
     "pois",
     "rayures",
     "étoiles",
     "carreaux"
    ],
    "a": "pois"
   },
   {
    "q": "Quel coureur belge, recordman de victoires d'étapes, a gagné 5 Tours de France ? Eddy ___ ?",
    "c": [
     "Merckx",
     "Hinault",
     "Anquetil",
     "Indurain"
    ],
    "a": "Merckx"
   },
   {
    "q": "Sur quelle avenue parisienne s'achève traditionnellement le Tour de France ? Les Champs-___ ?",
    "c": [
     "Élysées",
     "Ternes",
     "Batignolles",
     "Invalides"
    ],
    "a": "Élysées"
   },
   {
    "q": "Quel maillot vert récompense le coureur le plus rapide au sprint ? Le maillot du meilleur ___ ?",
    "c": [
     "sprinteur",
     "grimpeur",
     "rouleur",
     "jeune"
    ],
    "a": "sprinteur"
   },
   {
    "q": "En quelle année a eu lieu le tout premier Tour de France ?",
    "a": "1903"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_006",
  "cat": "sport",
  "name": "Natation",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle nage se pratique sur le dos, dans l'eau ? La nage sur le ___ ?",
    "c": [
     "dos",
     "ventre",
     "côté",
     "flanc"
    ],
    "a": "dos"
   },
   {
    "q": "Quelle nage imite le mouvement d'une grenouille ? La ___ ?",
    "c": [
     "brasse",
     "papillon",
     "crawl",
     "dos"
    ],
    "a": "brasse"
   },
   {
    "q": "Quelle est la nage la plus rapide, sur le ventre, bras alternés ? Le ___ ?",
    "c": [
     "crawl",
     "brasse",
     "papillon",
     "dos"
    ],
    "a": "crawl"
   },
   {
    "q": "Quelle est la longueur, en mètres, d'un grand bassin olympique ?",
    "a": "50"
   },
   {
    "q": "Quel nageur américain a remporté 23 médailles d'or olympiques ? Michael ___ ?",
    "c": [
     "Phelps",
     "Spitz",
     "Lochte",
     "Thorpe"
    ],
    "a": "Phelps"
   },
   {
    "q": "Quelle nage spectaculaire fait sortir les deux bras de l'eau ensemble ? Le ___ ?",
    "c": [
     "papillon",
     "crawl",
     "brasse",
     "dos"
    ],
    "a": "papillon"
   },
   {
    "q": "Comment appelle-t-on le fait de se retourner contre le mur pour repartir ? Le ___ ?",
    "c": [
     "virage",
     "plongeon",
     "départ",
     "relais"
    ],
    "a": "virage"
   },
   {
    "q": "En quelle année la natation est-elle apparue aux Jeux olympiques modernes ?",
    "a": "1896"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_007",
  "cat": "sport",
  "name": "Athlétisme",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle épreuve reine consiste à courir 100 mètres le plus vite possible ? Le ___ mètres ?",
    "a": "100"
   },
   {
    "q": "Quelle épreuve consiste à sauter le plus loin possible ? Le saut en ___ ?",
    "c": [
     "longueur",
     "hauteur",
     "perche",
     "triple"
    ],
    "a": "longueur"
   },
   {
    "q": "Combien de mètres mesure la distance d'un marathon (arrondi) ?",
    "c": [
     "42",
     "26",
     "50",
     "21"
    ],
    "a": "42"
   },
   {
    "q": "Quel Jamaïcain surnommé « la Foudre » détient le record du 100 m ? Usain ___ ?",
    "c": [
     "Bolt",
     "Blake",
     "Powell",
     "Gatlin"
    ],
    "a": "Bolt"
   },
   {
    "q": "Quelle épreuve consiste à lancer un disque le plus loin possible ? Le lancer du ___ ?",
    "c": [
     "disque",
     "poids",
     "javelot",
     "marteau"
    ],
    "a": "disque"
   },
   {
    "q": "Combien de tours de piste de 400 m faut-il courir pour faire 1500 m ? Environ ___ tours ?",
    "c": [
     "4",
     "3",
     "5",
     "6"
    ],
    "a": "4"
   },
   {
    "q": "Quelle épreuve combine course, saut et lancers sur deux jours, en dix disciplines ? Le ___ ?",
    "c": [
     "décathlon",
     "pentathlon",
     "triathlon",
     "heptathlon"
    ],
    "a": "décathlon"
   },
   {
    "q": "Quel est le record du monde du 100 m d'Usain Bolt, en secondes (2009) ?",
    "a": "9.58"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_008",
  "cat": "sport",
  "name": "Boxe",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quelle surface carrée entourée de cordes se déroule un combat de boxe ? Le ___ ?",
    "c": [
     "ring",
     "tatami",
     "court",
     "octogone"
    ],
    "a": "ring"
   },
   {
    "q": "Comment appelle-t-on la mise à terre décisive de l'adversaire ? Un K.-___ ?",
    "c": [
     "O",
     "X",
     "P",
     "T"
    ],
    "a": "O"
   },
   {
    "q": "Que portent les boxeurs aux mains pour se protéger ? Des ___ ?",
    "c": [
     "gants",
     "bandes",
     "mitaines",
     "protections"
    ],
    "a": "gants"
   },
   {
    "q": "Quel boxeur américain se surnommait lui-même « The Greatest » ? Mohamed ___ ?",
    "c": [
     "Ali",
     "Tyson",
     "Frazier",
     "Foreman"
    ],
    "a": "Ali"
   },
   {
    "q": "Combien de minutes dure généralement un round de boxe professionnelle ?",
    "a": "3"
   },
   {
    "q": "Quel boxeur américain, surnommé « Iron Mike », a mordu l'oreille de Holyfield ?",
    "c": [
     "Tyson",
     "Ali",
     "Lewis",
     "Holmes"
    ],
    "a": "Tyson"
   },
   {
    "q": "Quel coup de poing remontant vertical vise le menton ? L'___ ?",
    "c": [
     "uppercut",
     "jab",
     "crochet",
     "direct"
    ],
    "a": "uppercut"
   },
   {
    "q": "En quelle année ont été rédigées les règles modernes de la boxe (règles du marquis de Queensberry) ?",
    "a": "1867"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_009",
  "cat": "sport",
  "name": "Ski",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quelle surface blanche et froide pratique-t-on le ski ? La ___ ?",
    "a": "Neige"
   },
   {
    "q": "Combien de skis chausse un skieur alpin classique ?",
    "a": "2"
   },
   {
    "q": "Comment appelle-t-on les bâtons plantés à contourner dans une course de slalom ? Des ___ ?",
    "c": [
     "piquets",
     "poteaux",
     "plots",
     "drapeaux"
    ],
    "a": "piquets"
   },
   {
    "q": "Quelle discipline consiste à descendre le plus vite possible une pente raide ? La ___ ?",
    "c": [
     "descente",
     "montée",
     "traversée",
     "boucle"
    ],
    "a": "descente"
   },
   {
    "q": "Quel engin mécanique remonte les skieurs en haut des pistes ? Le télé___ ?",
    "c": [
     "siège",
     "phone",
     "vision",
     "gramme"
    ],
    "a": "siège"
   },
   {
    "q": "Quelle discipline mêle ski de fond et tir à la carabine ?",
    "c": [
     "biathlon",
     "combiné",
     "slalom",
     "saut"
    ],
    "a": "biathlon"
   },
   {
    "q": "Quel sport de glisse sur une seule planche large est proche du ski ? Le ___ ?",
    "c": [
     "snowboard",
     "skateboard",
     "surf",
     "monoski"
    ],
    "a": "snowboard"
   },
   {
    "q": "En quelle année ont eu lieu les premiers Jeux olympiques d'hiver, à Chamonix ?",
    "a": "1924"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_010",
  "cat": "sport",
  "name": "Formule 1",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de roues compte une monoplace de Formule 1 ?",
    "a": "4"
   },
   {
    "q": "Quel drapeau agité annonce la fin de la course ? Le drapeau à ___ ?",
    "c": [
     "damier",
     "pois",
     "rayures",
     "croix"
    ],
    "a": "damier"
   },
   {
    "q": "Quelle écurie italienne rouge, la plus mythique, court en F1 depuis les débuts ?",
    "c": [
     "Ferrari",
     "McLaren",
     "Williams",
     "Renault"
    ],
    "a": "Ferrari"
   },
   {
    "q": "Comment appelle-t-on l'arrêt au stand pour changer les pneus ? Le pit-___ ?",
    "c": [
     "stop",
     "lane",
     "wall",
     "box"
    ],
    "a": "stop"
   },
   {
    "q": "Quel pilote allemand et quel pilote britannique détiennent 7 titres ? Schumacher et Lewis ___ ?",
    "c": [
     "Hamilton",
     "Button",
     "Russell",
     "Hill"
    ],
    "a": "Hamilton"
   },
   {
    "q": "En quelle position sur la grille de départ part le pilote en « pole position » ?",
    "c": [
     "1re",
     "2e",
     "3e",
     "dernière"
    ],
    "a": "1re"
   },
   {
    "q": "Quel jeune pilote néerlandais champion du monde court chez Red Bull ? Max ___ ?",
    "c": [
     "Verstappen",
     "Pérez",
     "Norris",
     "Leclerc"
    ],
    "a": "Verstappen"
   },
   {
    "q": "En quelle année a eu lieu le premier championnat du monde de Formule 1 ?",
    "a": "1950"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_011",
  "cat": "sport",
  "name": "Judo",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays est originaire le judo ?",
    "c": [
     "Japon",
     "Chine",
     "Corée",
     "Thaïlande"
    ],
    "a": "Japon"
   },
   {
    "q": "Comment appelle-t-on la tenue portée par les judokas ? Un ___ ?",
    "c": [
     "kimono",
     "peignoir",
     "maillot",
     "short"
    ],
    "a": "kimono"
   },
   {
    "q": "De quelle couleur est la ceinture du débutant en judo ?",
    "c": [
     "blanche",
     "noire",
     "jaune",
     "rouge"
    ],
    "a": "blanche"
   },
   {
    "q": "De quelle couleur est la ceinture d'un judoka expert de haut niveau ?",
    "c": [
     "noire",
     "blanche",
     "verte",
     "bleue"
    ],
    "a": "noire"
   },
   {
    "q": "Comment appelle-t-on le score maximal qui met fin au combat immédiatement ?",
    "c": [
     "ippon",
     "waza-ari",
     "yuko",
     "koka"
    ],
    "a": "ippon"
   },
   {
    "q": "Sur quelle surface molle se pratique le judo ? Le ___ ?",
    "c": [
     "tatami",
     "ring",
     "gazon",
     "sable"
    ],
    "a": "tatami"
   },
   {
    "q": "Quel maître japonais a fondé le judo à la fin du XIXe siècle ? Jigoro ___ ?",
    "c": [
     "Kano",
     "Ueshiba",
     "Funakoshi",
     "Mifune"
    ],
    "a": "Kano"
   },
   {
    "q": "En quelle année Jigoro Kano a-t-il fondé le judo (Kodokan) ?",
    "a": "1882"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_012",
  "cat": "sport",
  "name": "Golf",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quoi le joueur de golf doit-il faire entrer la balle ? Un ___ ?",
    "c": [
     "trou",
     "panier",
     "filet",
     "cercle"
    ],
    "a": "trou"
   },
   {
    "q": "Combien de trous compte un parcours de golf classique ?",
    "a": "18"
   },
   {
    "q": "Avec quel équipement frappe-t-on la balle de golf ? Un ___ ?",
    "c": [
     "club",
     "batte",
     "raquette",
     "maillet"
    ],
    "a": "club"
   },
   {
    "q": "Comment appelle-t-on un score d'un coup sous le par sur un trou ? Un ___ ?",
    "c": [
     "birdie",
     "bogey",
     "eagle",
     "par"
    ],
    "a": "birdie"
   },
   {
    "q": "Comment appelle-t-on le fait de rentrer la balle en un seul coup ? Un trou en ___ ?",
    "c": [
     "un",
     "deux",
     "or",
     "puissance"
    ],
    "a": "un"
   },
   {
    "q": "Quel golfeur américain surnommé « Tiger » a dominé le sport dans les années 2000 ? Tiger ___ ?",
    "c": [
     "Woods",
     "Mickelson",
     "Nicklaus",
     "Palmer"
    ],
    "a": "Woods"
   },
   {
    "q": "Comment appelle-t-on le petit support sur lequel on pose la balle au départ ? Un ___ ?",
    "c": [
     "tee",
     "green",
     "putt",
     "par"
    ],
    "a": "tee"
   },
   {
    "q": "En quelle année le golf est-il attesté pour la première fois en Écosse, son berceau ?",
    "a": "1457"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_013",
  "cat": "sport",
  "name": "Escrime",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quel type d'arme longue et fine pratique-t-on l'escrime ? Une ___ ?",
    "c": [
     "épée",
     "hache",
     "lance",
     "masse"
    ],
    "a": "épée"
   },
   {
    "q": "Que porte l'escrimeur sur le visage pour se protéger ? Un ___ ?",
    "c": [
     "masque",
     "casque",
     "voile",
     "bandeau"
    ],
    "a": "masque"
   },
   {
    "q": "Quelles sont les trois armes de l'escrime : le fleuret, l'épée et le ___ ?",
    "c": [
     "sabre",
     "poignard",
     "rapière",
     "glaive"
    ],
    "a": "sabre"
   },
   {
    "q": "Comment appelle-t-on le fait de toucher l'adversaire ? Une ___ ?",
    "c": [
     "touche",
     "prise",
     "faute",
     "botte"
    ],
    "a": "touche"
   },
   {
    "q": "Quel mot lance-t-on pour attaquer, célèbre cri d'escrime ? En ___ !",
    "c": [
     "garde",
     "avant",
     "action",
     "piste"
    ],
    "a": "garde"
   },
   {
    "q": "Sur quelle longue bande étroite se déroule un assaut d'escrime ? La ___ ?",
    "c": [
     "piste",
     "arène",
     "salle",
     "aire"
    ],
    "a": "piste"
   },
   {
    "q": "Quel héros de roman de cape et d'épée manie l'épée avec panache ? Cyrano de ___ ?",
    "c": [
     "Bergerac",
     "Bâle",
     "Bordeaux",
     "Beaune"
    ],
    "a": "Bergerac"
   },
   {
    "q": "En quelle année l'escrime figure-t-elle aux premiers Jeux olympiques modernes ?",
    "a": "1896"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_014",
  "cat": "sport",
  "name": "Handball",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quelle partie du corps joue-t-on principalement au handball ? Les ___ ?",
    "c": [
     "mains",
     "pieds",
     "genoux",
     "coudes"
    ],
    "a": "mains"
   },
   {
    "q": "Combien de joueurs de champ, plus le gardien, une équipe a-t-elle sur le terrain ?",
    "a": "7"
   },
   {
    "q": "Quelle nation, aux « Experts », a longtemps dominé le handball mondial ?",
    "c": [
     "France",
     "Allemagne",
     "Espagne",
     "Danemark"
    ],
    "a": "France"
   },
   {
    "q": "Comment appelle-t-on le fait de marquer dans la cage adverse ? Un ___ ?",
    "a": "But"
   },
   {
    "q": "Quel joueur se tient dans la cage pour arrêter les tirs ? Le ___ ?",
    "c": [
     "gardien",
     "pivot",
     "arrière",
     "ailier"
    ],
    "a": "gardien"
   },
   {
    "q": "Comment appelle-t-on le tir sanction accordé après une faute grave ? Un jet de ___ mètres ?",
    "c": [
     "7",
     "9",
     "6",
     "11"
    ],
    "a": "7"
   },
   {
    "q": "Quel joueur planté au centre de la défense adverse est le pivot : vrai poste ? Le ___ ?",
    "c": [
     "pivot",
     "libéro",
     "meneur",
     "ailier"
    ],
    "a": "pivot"
   },
   {
    "q": "En quelle année les règles modernes du handball à 7 ont-elles été fixées (années 1930-1940) : quelle année exacte de la 1re Coupe du monde masculine en salle ?",
    "a": "1938"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_015",
  "cat": "sport",
  "name": "Volley-ball",
  "level": "classique",
  "levels": [
   {
    "q": "Qu'est-ce qui sépare les deux équipes au volley-ball ? Un ___ ?",
    "c": [
     "filet",
     "mur",
     "trait",
     "poteau"
    ],
    "a": "filet"
   },
   {
    "q": "Combien de joueurs compose une équipe de volley sur le terrain ?",
    "a": "6"
   },
   {
    "q": "Combien de touches de balle maximum une équipe a-t-elle avant de renvoyer ?",
    "a": "3"
   },
   {
    "q": "Comment appelle-t-on l'attaque puissante frappée au-dessus du filet ? Un ___ ?",
    "c": [
     "smash",
     "service",
     "block",
     "passe"
    ],
    "a": "smash"
   },
   {
    "q": "Comment appelle-t-on le joueur défensif en maillot différent qui ne peut attaquer ? Le ___ ?",
    "c": [
     "libéro",
     "passeur",
     "central",
     "pointu"
    ],
    "a": "libéro"
   },
   {
    "q": "Sur quelle surface se pratique le beach-volley ? Le ___ ?",
    "c": [
     "sable",
     "gazon",
     "béton",
     "parquet"
    ],
    "a": "sable"
   },
   {
    "q": "Comment appelle-t-on le contre défensif au filet, mains levées ? Un ___ ?",
    "c": [
     "block",
     "smash",
     "dig",
     "set"
    ],
    "a": "block"
   },
   {
    "q": "En quelle année William Morgan a-t-il inventé le volley-ball aux États-Unis ?",
    "a": "1895"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_016",
  "cat": "sport",
  "name": "Surf",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quel élément naturel le surfeur glisse-t-il ? Les ___ ?",
    "c": [
     "vagues",
     "dunes",
     "nuages",
     "rochers"
    ],
    "a": "vagues"
   },
   {
    "q": "Sur quel objet le surfeur se tient-il debout ? Une ___ ?",
    "c": [
     "planche",
     "bouée",
     "flotteur",
     "barque"
    ],
    "a": "planche"
   },
   {
    "q": "Quel archipel américain du Pacifique est le berceau du surf moderne ?",
    "c": [
     "Hawaï",
     "Bali",
     "Tahiti",
     "Fidji"
    ],
    "a": "Hawaï"
   },
   {
    "q": "Comment appelle-t-on le tunnel formé par une vague qui déferle ? Le ___ ?",
    "c": [
     "tube",
     "creux",
     "rouleau",
     "mur"
    ],
    "a": "tube"
   },
   {
    "q": "Quel cordon relie la cheville du surfeur à sa planche ? Le ___ ?",
    "c": [
     "leash",
     "wax",
     "fin",
     "rail"
    ],
    "a": "leash"
   },
   {
    "q": "Comment appelle-t-on une très grosse vague, spot mythique ? Une vague ___ ?",
    "c": [
     "géante",
     "petite",
     "molle",
     "plate"
    ],
    "a": "géante"
   },
   {
    "q": "Que met-on sur la planche pour ne pas glisser ? De la ___ ?",
    "c": [
     "wax",
     "colle",
     "huile",
     "cire"
    ],
    "a": "wax"
   },
   {
    "q": "Quelle hauteur, en mètres, faisait la plus grosse vague jamais surfée (record à Nazaré, 2020) ?",
    "a": "26"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_017",
  "cat": "sport",
  "name": "Escalade",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quoi grimpe-t-on en escalade ? Une ___ ?",
    "c": [
     "paroi",
     "échelle",
     "corde",
     "pente"
    ],
    "a": "paroi"
   },
   {
    "q": "Quel équipement de sécurité relie le grimpeur à la corde ? Un ___ ?",
    "c": [
     "baudrier",
     "casque",
     "gant",
     "harnais"
    ],
    "a": "baudrier"
   },
   {
    "q": "Comment appelle-t-on l'escalade de blocs bas sans corde, sur tapis ? Le ___ ?",
    "c": [
     "bloc",
     "grande voie",
     "solo",
     "via"
    ],
    "a": "bloc"
   },
   {
    "q": "Que met-on sur les mains pour ne pas glisser en escalade ? De la ___ ?",
    "c": [
     "magnésie",
     "craie",
     "colle",
     "cire"
    ],
    "a": "magnésie"
   },
   {
    "q": "Comment appelle-t-on l'escalade sans corde ni protection, très dangereuse ? Le solo ___ ?",
    "c": [
     "intégral",
     "assisté",
     "sportif",
     "artificiel"
    ],
    "a": "intégral"
   },
   {
    "q": "Quel grimpeur américain a gravi El Capitan sans corde (film Free Solo) ? Alex ___ ?",
    "c": [
     "Honnold",
     "Ondra",
     "Sharma",
     "Caldwell"
    ],
    "a": "Honnold"
   },
   {
    "q": "Dans quel célèbre parc américain se dresse la paroi d'El Capitan ?",
    "c": [
     "Yosemite",
     "Yellowstone",
     "Zion",
     "Grand Canyon"
    ],
    "a": "Yosemite"
   },
   {
    "q": "Quelle est la hauteur, en mètres, de la paroi d'El Capitan à Yosemite ?",
    "a": "900"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_018",
  "cat": "sport",
  "name": "MMA",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie le sigle MMA : Mixed ___ Arts ?",
    "c": [
     "Martial",
     "Master",
     "Modern",
     "Major"
    ],
    "a": "Martial"
   },
   {
    "q": "Dans quelle enceinte grillagée à huit côtés se déroulent les combats de MMA ? L'___ ?",
    "c": [
     "octogone",
     "hexagone",
     "ring",
     "cage"
    ],
    "a": "octogone"
   },
   {
    "q": "Quelle est la plus grande organisation mondiale de MMA ?",
    "c": [
     "UFC",
     "WWE",
     "NBA",
     "PFL"
    ],
    "a": "UFC"
   },
   {
    "q": "Comment appelle-t-on une prise de soumission qui étrangle l'adversaire ? Un ___ ?",
    "c": [
     "étranglement",
     "crochet",
     "uppercut",
     "jab"
    ],
    "a": "étranglement"
   },
   {
    "q": "Comment abandonne-t-on un combat quand on est en difficulté ? On ___ (tape au sol) ?",
    "c": [
     "tape",
     "crie",
     "lève",
     "recule"
    ],
    "a": "tape"
   },
   {
    "q": "Quel combattant irlandais tapageur est une star mondiale du MMA ? Conor ___ ?",
    "c": [
     "McGregor",
     "Nurmagomedov",
     "Jones",
     "Adesanya"
    ],
    "a": "McGregor"
   },
   {
    "q": "Comment appelle-t-on la victoire par mise KO ou soumission avant la limite ? Un ___ avant la limite ?",
    "c": [
     "finish",
     "draw",
     "split",
     "points"
    ],
    "a": "finish"
   },
   {
    "q": "En quelle année a eu lieu le tout premier tournoi UFC 1 ?",
    "a": "1993"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_019",
  "cat": "sport",
  "name": "Badminton",
  "level": "classique",
  "levels": [
   {
    "q": "Quel projectile à plumes frappe-t-on au badminton ? Un ___ ?",
    "c": [
     "volant",
     "ballon",
     "palet",
     "disque"
    ],
    "a": "volant"
   },
   {
    "q": "Avec quel équipement frappe-t-on le volant ? Une ___ ?",
    "c": [
     "raquette",
     "batte",
     "crosse",
     "planche"
    ],
    "a": "raquette"
   },
   {
    "q": "Qu'y a-t-il au milieu du terrain de badminton ? Un ___ ?",
    "c": [
     "filet",
     "mur",
     "trait",
     "poteau"
    ],
    "a": "filet"
   },
   {
    "q": "Combien de points faut-il pour gagner un set en badminton (règle actuelle) ?",
    "a": "21"
   },
   {
    "q": "Quel continent domine largement le badminton mondial ?",
    "c": [
     "Asie",
     "Europe",
     "Amérique",
     "Afrique"
    ],
    "a": "Asie"
   },
   {
    "q": "Comment appelle-t-on le coup smashé puissant vers le bas ? Un ___ ?",
    "c": [
     "smash",
     "lob",
     "service",
     "drive"
    ],
    "a": "smash"
   },
   {
    "q": "À quelle vitesse, en km/h, peut voler un volant lors d'un smash record ?",
    "c": [
     "426",
     "150",
     "250",
     "600"
    ],
    "a": "426"
   },
   {
    "q": "En quelle année le badminton est-il devenu sport olympique officiel ?",
    "a": "1992"
   }
  ],
  "rw": true
 },
 {
  "id": "sport_020",
  "cat": "sport",
  "name": "Baseball",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quel objet en bois frappe-t-on la balle au baseball ? Une ___ ?",
    "c": [
     "batte",
     "raquette",
     "crosse",
     "planche"
    ],
    "a": "batte"
   },
   {
    "q": "Combien de bases doit parcourir un joueur pour marquer un point ?",
    "a": "4"
   },
   {
    "q": "Dans quel pays le baseball est-il le sport national par excellence ?",
    "c": [
     "États-Unis",
     "Canada",
     "Mexique",
     "Cuba"
    ],
    "a": "États-Unis"
   },
   {
    "q": "Comment appelle-t-on un coup de circuit envoyant la balle hors du terrain ? Un home ___ ?",
    "c": [
     "run",
     "base",
     "plate",
     "field"
    ],
    "a": "run"
   },
   {
    "q": "Quel joueur lance la balle vers le frappeur ? Le ___ ?",
    "c": [
     "lanceur",
     "receveur",
     "frappeur",
     "arbitre"
    ],
    "a": "lanceur"
   },
   {
    "q": "Quelle grande ligue professionnelle regroupe les meilleures équipes américaines ?",
    "c": [
     "MLB",
     "NBA",
     "NFL",
     "NHL"
    ],
    "a": "MLB"
   },
   {
    "q": "Comment appelle-t-on trois prises manquées par le frappeur ? Il est ___ (out) ?",
    "c": [
     "éliminé",
     "sauvé",
     "libre",
     "prêt"
    ],
    "a": "éliminé"
   },
   {
    "q": "En quelle année a eu lieu la première partie officielle de baseball à règles modernes (1846) ?",
    "a": "1846"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_001",
  "cat": "animaux",
  "name": "Les chiens",
  "level": "classique",
  "levels": [
   {
    "q": "Quel cri pousse le chien ? Il ___ ?",
    "c": [
     "aboie",
     "miaule",
     "hennit",
     "meugle"
    ],
    "a": "aboie"
   },
   {
    "q": "Comment appelle-t-on un bébé chien ?",
    "c": [
     "chiot",
     "chaton",
     "poulain",
     "veau"
    ],
    "a": "chiot"
   },
   {
    "q": "Combien de pattes a un chien ?",
    "a": "4"
   },
   {
    "q": "Quelle race de petit chien saucisse a de très courtes pattes ?",
    "c": [
     "teckel",
     "caniche",
     "bouledogue",
     "labrador"
    ],
    "a": "teckel"
   },
   {
    "q": "Quel sens est extrêmement développé chez le chien, bien plus que chez l'humain ? L'___ ?",
    "c": [
     "odorat",
     "vue",
     "goût",
     "toucher"
    ],
    "a": "odorat"
   },
   {
    "q": "Quelle grande race de chien de montagne suisse portait un tonnelet au cou ? Le saint-___ ?",
    "c": [
     "bernard",
     "hubert",
     "germain",
     "louis"
    ],
    "a": "bernard"
   },
   {
    "q": "Quel colley, star de cinéma et de télévision, porte un prénom féminin célèbre ?",
    "c": [
     "Lassie",
     "Rex",
     "Milou",
     "Rintintin"
    ],
    "a": "Lassie"
   },
   {
    "q": "Combien de récepteurs olfactifs, en millions, possède environ le nez d'un chien ?",
    "a": "220"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_002",
  "cat": "animaux",
  "name": "Les chats",
  "level": "classique",
  "levels": [
   {
    "q": "Quel cri pousse le chat ? Il ___ ?",
    "c": [
     "miaule",
     "aboie",
     "hennit",
     "coasse"
    ],
    "a": "miaule"
   },
   {
    "q": "Comment appelle-t-on un bébé chat ?",
    "c": [
     "chaton",
     "chiot",
     "agneau",
     "faon"
    ],
    "a": "chaton"
   },
   {
    "q": "Quel bruit fait un chat content quand on le caresse ? Il ___ ?",
    "c": [
     "ronronne",
     "grogne",
     "siffle",
     "crache"
    ],
    "a": "ronronne"
   },
   {
    "q": "Sur quelles parties de ses pattes le chat rentre-t-il ses griffes ? Ses ___ ?",
    "c": [
     "coussinets",
     "sabots",
     "palmes",
     "serres"
    ],
    "a": "coussinets"
   },
   {
    "q": "Quelle race de chat sans poils est reconnaissable à sa peau nue ?",
    "c": [
     "sphynx",
     "persan",
     "siamois",
     "maine coon"
    ],
    "a": "sphynx"
   },
   {
    "q": "Combien d'heures par jour un chat dort-il en moyenne ?",
    "c": [
     "16",
     "8",
     "12",
     "20"
    ],
    "a": "16"
   },
   {
    "q": "Dans quelle civilisation antique le chat était-il un animal sacré ?",
    "c": [
     "Égypte",
     "Grèce",
     "Rome",
     "Perse"
    ],
    "a": "Égypte"
   },
   {
    "q": "Combien de vibrisses (moustaches) un chat possède-t-il en moyenne de chaque côté du museau ?",
    "a": "12"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_003",
  "cat": "animaux",
  "name": "Les oiseaux",
  "level": "classique",
  "levels": [
   {
    "q": "Grâce à quoi les oiseaux peuvent-ils voler ? Leurs ___ ?",
    "c": [
     "ailes",
     "pattes",
     "becs",
     "queues"
    ],
    "a": "ailes"
   },
   {
    "q": "Dans quoi les oiseaux pondent-ils leurs petits ? Des ___ ?",
    "c": [
     "œufs",
     "cocons",
     "graines",
     "nids"
    ],
    "a": "œufs"
   },
   {
    "q": "Quel grand oiseau coureur africain est le plus grand du monde et ne vole pas ?",
    "c": [
     "autruche",
     "aigle",
     "pélican",
     "flamant"
    ],
    "a": "autruche"
   },
   {
    "q": "Quel oiseau nocturne au visage rond et hululant chasse la nuit ? La ___ ?",
    "c": [
     "chouette",
     "colombe",
     "pie",
     "grue"
    ],
    "a": "chouette"
   },
   {
    "q": "Quel minuscule oiseau bat des ailes très vite et butine les fleurs ? Le ___-mouche ?",
    "c": [
     "oiseau",
     "colibri",
     "martin",
     "gobe"
    ],
    "a": "oiseau"
   },
   {
    "q": "Quel oiseau noir et blanc de l'Antarctique nage mais ne vole pas ?",
    "c": [
     "manchot",
     "goéland",
     "héron",
     "cygne"
    ],
    "a": "manchot"
   },
   {
    "q": "Quel oiseau est réputé imiter la parole humaine ? Le ___ ?",
    "c": [
     "perroquet",
     "moineau",
     "pigeon",
     "corbeau"
    ],
    "a": "perroquet"
   },
   {
    "q": "Combien de plumes, environ, possède un cygne, l'un des oiseaux les plus emplumés ?",
    "a": "25000"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_004",
  "cat": "animaux",
  "name": "Les poissons",
  "level": "classique",
  "levels": [
   {
    "q": "Grâce à quel organe les poissons respirent-ils sous l'eau ? Leurs ___ ?",
    "c": [
     "branchies",
     "poumons",
     "nageoires",
     "écailles"
    ],
    "a": "branchies"
   },
   {
    "q": "Quel petit poisson orange est le héros du film « Le Monde de Nemo » ?",
    "c": [
     "poisson-clown",
     "requin",
     "raie",
     "thon"
    ],
    "a": "poisson-clown"
   },
   {
    "q": "De quoi est recouvert le corps de la plupart des poissons ? D'___ ?",
    "c": [
     "écailles",
     "poils",
     "plumes",
     "carapace"
    ],
    "a": "écailles"
   },
   {
    "q": "Quel poisson rouge est le plus commun des animaux de compagnie aquatiques ? Le poisson ___ ?",
    "c": [
     "rouge",
     "bleu",
     "chat",
     "lune"
    ],
    "a": "rouge"
   },
   {
    "q": "Quel poisson plat vit au fond de la mer, les deux yeux du même côté ? La ___ ?",
    "c": [
     "sole",
     "carpe",
     "truite",
     "anguille"
    ],
    "a": "sole"
   },
   {
    "q": "Quel énorme poisson au corps tacheté est le plus grand du monde ? Le requin-___ ?",
    "c": [
     "baleine",
     "marteau",
     "tigre",
     "blanc"
    ],
    "a": "baleine"
   },
   {
    "q": "Quel poisson électrique d'Amazonie peut envoyer des décharges ? L'anguille ___ ?",
    "c": [
     "électrique",
     "géante",
     "royale",
     "dorée"
    ],
    "a": "électrique"
   },
   {
    "q": "Combien d'espèces de poissons, environ, sont connues sur Terre ?",
    "a": "34000"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_005",
  "cat": "animaux",
  "name": "Les chevaux",
  "level": "classique",
  "levels": [
   {
    "q": "Quel cri pousse le cheval ? Il ___ ?",
    "c": [
     "hennit",
     "aboie",
     "miaule",
     "beugle"
    ],
    "a": "hennit"
   },
   {
    "q": "Comment appelle-t-on un bébé cheval ?",
    "c": [
     "poulain",
     "veau",
     "chiot",
     "agneau"
    ],
    "a": "poulain"
   },
   {
    "q": "Que met-on sur le dos du cheval pour le monter ? Une ___ ?",
    "c": [
     "selle",
     "bride",
     "housse",
     "couverture"
    ],
    "a": "selle"
   },
   {
    "q": "Comment appelle-t-on un cheval femelle adulte ? Une ___ ?",
    "c": [
     "jument",
     "vache",
     "brebis",
     "truie"
    ],
    "a": "jument"
   },
   {
    "q": "Quelle protection métallique cloue-t-on sous les sabots du cheval ? Un ___ ?",
    "c": [
     "fer",
     "clou",
     "patin",
     "sabot"
    ],
    "a": "fer"
   },
   {
    "q": "Quelle allure la plus rapide du cheval précède le trot dans le galop ? Le ___ ?",
    "c": [
     "galop",
     "pas",
     "trot",
     "amble"
    ],
    "a": "galop"
   },
   {
    "q": "Comment appelle-t-on les longs poils qui tombent sur le cou du cheval ? La ___ ?",
    "c": [
     "crinière",
     "toison",
     "fourrure",
     "barbe"
    ],
    "a": "crinière"
   },
   {
    "q": "Combien d'os, environ, compte le squelette d'un cheval ?",
    "a": "205"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_006",
  "cat": "animaux",
  "name": "Les dauphins",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel milieu vivent les dauphins ? La ___ ?",
    "c": [
     "mer",
     "montagne",
     "forêt",
     "désert"
    ],
    "a": "mer"
   },
   {
    "q": "Le dauphin est-il un poisson ou un mammifère ?",
    "c": [
     "mammifère",
     "poisson",
     "reptile",
     "amphibien"
    ],
    "a": "mammifère"
   },
   {
    "q": "Par quel orifice sur le dessus de sa tête le dauphin respire-t-il ? L'___ ?",
    "c": [
     "évent",
     "nez",
     "branchie",
     "bec"
    ],
    "a": "évent"
   },
   {
    "q": "Quel sens permet au dauphin de « voir » avec des sons ? L'écho___ ?",
    "c": [
     "location",
     "graphie",
     "logie",
     "scopie"
    ],
    "a": "location"
   },
   {
    "q": "Quelle grande espèce de dauphin, joueur et souriant, est la plus connue ? Le grand ___ ?",
    "c": [
     "dauphin",
     "cachalot",
     "narval",
     "béluga"
    ],
    "a": "dauphin"
   },
   {
    "q": "Le dauphin est réputé pour être très ___ (capable d'apprendre et résoudre des problèmes) ?",
    "c": [
     "intelligent",
     "lent",
     "sourd",
     "aveugle"
    ],
    "a": "intelligent"
   },
   {
    "q": "Quel très gros cousin du dauphin, noir et blanc, est appelé « baleine tueuse » ? L'___ ?",
    "c": [
     "orque",
     "requin",
     "morse",
     "phoque"
    ],
    "a": "orque"
   },
   {
    "q": "Combien de dents, environ, un grand dauphin possède-t-il ?",
    "a": "100"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_007",
  "cat": "animaux",
  "name": "Les insectes",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de pattes possède un insecte ?",
    "a": "6"
   },
   {
    "q": "Quel insecte produit du miel ? L'___ ?",
    "c": [
     "abeille",
     "guêpe",
     "mouche",
     "fourmi"
    ],
    "a": "abeille"
   },
   {
    "q": "Quel insecte coloré aux grandes ailes naît d'une chenille ? Le ___ ?",
    "c": [
     "papillon",
     "scarabée",
     "criquet",
     "moustique"
    ],
    "a": "papillon"
   },
   {
    "q": "Quel insecte rouge à points noirs porte bonheur ? La ___ ?",
    "c": [
     "coccinelle",
     "sauterelle",
     "libellule",
     "cigale"
    ],
    "a": "coccinelle"
   },
   {
    "q": "Quel insecte social vit en colonie et peut porter bien plus lourd que son poids ? La ___ ?",
    "c": [
     "fourmi",
     "abeille",
     "termite",
     "guêpe"
    ],
    "a": "fourmi"
   },
   {
    "q": "En combien de parties le corps d'un insecte est-il divisé (tête, thorax, abdomen) ?",
    "a": "3"
   },
   {
    "q": "Quel insecte chante en été en frottant ses ailes dans le sud de la France ? La ___ ?",
    "c": [
     "cigale",
     "grillon",
     "abeille",
     "mouche"
    ],
    "a": "cigale"
   },
   {
    "q": "Combien d'espèces d'insectes, environ en millions, les scientifiques estiment-ils qu'il existe sur Terre ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_008",
  "cat": "animaux",
  "name": "Les serpents",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de pattes possède un serpent ?",
    "a": "0"
   },
   {
    "q": "Comment le serpent goûte-t-il l'air autour de lui ? Avec sa ___ ?",
    "c": [
     "langue",
     "queue",
     "peau",
     "narine"
    ],
    "a": "langue"
   },
   {
    "q": "Comment appelle-t-on le venin injecté par certains serpents lors d'une morsure ? Du ___ ?",
    "c": [
     "venin",
     "poison",
     "acide",
     "nectar"
    ],
    "a": "venin"
   },
   {
    "q": "Quel grand serpent constricteur étouffe ses proies plutôt que de les mordre ? Le ___ ?",
    "c": [
     "boa",
     "cobra",
     "vipère",
     "python"
    ],
    "a": "boa"
   },
   {
    "q": "Quel serpent dresse un capuchon et est charmé par les fakirs en Inde ? Le ___ ?",
    "c": [
     "cobra",
     "boa",
     "python",
     "mamba"
    ],
    "a": "cobra"
   },
   {
    "q": "Que fait un serpent quand il change et perd sa vieille peau ? Il ___ ?",
    "c": [
     "mue",
     "fond",
     "gèle",
     "fane"
    ],
    "a": "mue"
   },
   {
    "q": "Quel est le serpent le plus venimeux du monde vit en Australie ? Le taïpan du ___ ?",
    "c": [
     "désert",
     "nord",
     "sud",
     "centre"
    ],
    "a": "désert"
   },
   {
    "q": "Quelle longueur, en mètres, peut atteindre un python réticulé, le plus long serpent ?",
    "a": "7"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_009",
  "cat": "animaux",
  "name": "Les ours",
  "level": "classique",
  "levels": [
   {
    "q": "Quel grand mammifère polaire est blanc et vit sur la banquise ? L'ours ___ ?",
    "c": [
     "blanc",
     "brun",
     "noir",
     "gris"
    ],
    "a": "blanc"
   },
   {
    "q": "Que font les ours pendant l'hiver, dans leur tanière ? Ils ___ ?",
    "c": [
     "hibernent",
     "migrent",
     "chantent",
     "nagent"
    ],
    "a": "hibernent"
   },
   {
    "q": "Quel aliment sucré les ours adorent-ils dérober aux abeilles ? Le ___ ?",
    "c": [
     "miel",
     "sucre",
     "sirop",
     "lait"
    ],
    "a": "miel"
   },
   {
    "q": "Quel ours noir et blanc de Chine se nourrit de bambou ? Le ___ ?",
    "c": [
     "panda",
     "grizzly",
     "koala",
     "kodiak"
    ],
    "a": "panda"
   },
   {
    "q": "Quel grand ours brun d'Amérique du Nord est réputé féroce ? Le ___ ?",
    "c": [
     "grizzly",
     "panda",
     "malais",
     "lippu"
    ],
    "a": "grizzly"
   },
   {
    "q": "Comment appelle-t-on un bébé ours ?",
    "c": [
     "ourson",
     "oursin",
     "faon",
     "veau"
    ],
    "a": "ourson"
   },
   {
    "q": "Combien de grandes espèces d'ours existent-elles dans le monde ?",
    "a": "8"
   },
   {
    "q": "Combien de kilos, au maximum, peut peser un grand ours polaire mâle ?",
    "a": "800"
   }
  ],
  "rw": true
 },
 {
  "id": "animaux_010",
  "cat": "animaux",
  "name": "Les requins",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel milieu vivent les requins ? La ___ ?",
    "c": [
     "mer",
     "montagne",
     "forêt",
     "rivière"
    ],
    "a": "mer"
   },
   {
    "q": "Qu'est-ce que les requins ont en grand nombre, en plusieurs rangées, dans la gueule ? Des ___ ?",
    "c": [
     "dents",
     "poils",
     "plumes",
     "pattes"
    ],
    "a": "dents"
   },
   {
    "q": "Quel grand requin blanc est le plus célèbre et le plus redouté ? Le grand requin ___ ?",
    "c": [
     "blanc",
     "bleu",
     "noir",
     "rouge"
    ],
    "a": "blanc"
   },
   {
    "q": "Quel requin a une tête en forme d'outil aplati ? Le requin-___ ?",
    "c": [
     "marteau",
     "scie",
     "épée",
     "tournevis"
    ],
    "a": "marteau"
   },
   {
    "q": "Quelle nageoire du requin dépasse souvent de l'eau, signe de sa présence ? La nageoire ___ ?",
    "c": [
     "dorsale",
     "caudale",
     "pectorale",
     "ventrale"
    ],
    "a": "dorsale"
   },
   {
    "q": "Le requin est-il un poisson ou un mammifère ?",
    "c": [
     "poisson",
     "mammifère",
     "reptile",
     "amphibien"
    ],
    "a": "poisson"
   },
   {
    "q": "Quel gigantesque requin filtreur, inoffensif, est le plus grand poisson du monde ? Le requin-___ ?",
    "c": [
     "baleine",
     "tigre",
     "bouledogue",
     "renard"
    ],
    "a": "baleine"
   },
   {
    "q": "Combien de dents, environ, un requin peut-il produire au cours de toute sa vie ?",
    "a": "30000"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_001",
  "cat": "musique",
  "name": "Le Rock",
  "level": "classique",
  "levels": [
   {
    "q": "Quel instrument à cordes électrique est emblématique du rock ? La ___ électrique ?",
    "c": [
     "guitare",
     "harpe",
     "flûte",
     "trompette"
    ],
    "a": "guitare"
   },
   {
    "q": "Quel groupe britannique des années 60 comptait John, Paul, George et Ringo ? Les ___ ?",
    "c": [
     "Beatles",
     "Stones",
     "Who",
     "Kinks"
    ],
    "a": "Beatles"
   },
   {
    "q": "Quel chanteur américain déhanché est surnommé « le King » du rock ? Elvis ___ ?",
    "c": [
     "Presley",
     "Cooper",
     "Costello",
     "Perkins"
    ],
    "a": "Presley"
   },
   {
    "q": "Quel groupe australien au titre « Highway to Hell » écrit son nom AC/___ ?",
    "c": [
     "DC",
     "BC",
     "TV",
     "PC"
    ],
    "a": "DC"
   },
   {
    "q": "Quel guitariste virtuose a brûlé sa guitare sur scène ? Jimi ___ ?",
    "c": [
     "Hendrix",
     "Clapton",
     "Page",
     "Richards"
    ],
    "a": "Hendrix"
   },
   {
    "q": "Quel groupe britannique mené par Mick Jagger est surnommé « les pierres qui roulent » ? Les Rolling ___ ?",
    "c": [
     "Stones",
     "Beatles",
     "Who",
     "Doors"
    ],
    "a": "Stones"
   },
   {
    "q": "Quel chanteur de Queen, à la voix puissante, a chanté Bohemian Rhapsody ? Freddie ___ ?",
    "c": [
     "Mercury",
     "Bowie",
     "Plant",
     "Daltrey"
    ],
    "a": "Mercury"
   },
   {
    "q": "En quelle année, considérée comme la naissance du rock'n'roll, sort « Rock Around the Clock » ?",
    "a": "1954"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_002",
  "cat": "musique",
  "name": "Le Jazz",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle ville américaine le jazz est-il né ? La Nouvelle-___ ?",
    "c": [
     "Orléans",
     "York",
     "Jersey",
     "Guinée"
    ],
    "a": "Orléans"
   },
   {
    "q": "Quel instrument à vent doré est une star du jazz ? Le ___ ?",
    "c": [
     "saxophone",
     "violon",
     "piano",
     "accordéon"
    ],
    "a": "saxophone"
   },
   {
    "q": "Quel trompettiste à la voix rauque a chanté « What a Wonderful World » ? Louis ___ ?",
    "c": [
     "Armstrong",
     "Ellington",
     "Davis",
     "Gillespie"
    ],
    "a": "Armstrong"
   },
   {
    "q": "Comment appelle-t-on l'art d'inventer la musique sur l'instant en jazz ? L'___ ?",
    "c": [
     "improvisation",
     "partition",
     "répétition",
     "notation"
    ],
    "a": "improvisation"
   },
   {
    "q": "Quelle chanteuse noire à la voix douce est surnommée « Lady Day » ? Billie ___ ?",
    "c": [
     "Holiday",
     "Fitzgerald",
     "Simone",
     "Vaughan"
    ],
    "a": "Holiday"
   },
   {
    "q": "Quel trompettiste, pionnier du jazz modal, a enregistré « Kind of Blue » ? Miles ___ ?",
    "c": [
     "Davis",
     "Armstrong",
     "Baker",
     "Marsalis"
    ],
    "a": "Davis"
   },
   {
    "q": "Quel style de chant jazz utilise des onomatopées sans paroles ? Le chant ___ ?",
    "c": [
     "scat",
     "yodel",
     "rap",
     "slam"
    ],
    "a": "scat"
   },
   {
    "q": "En quelle année, environ, le jazz émerge-t-il à La Nouvelle-Orléans (tournant du siècle) ?",
    "a": "1900"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_003",
  "cat": "musique",
  "name": "Le Rap",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on le fait de parler en rythme sur une musique ? ___ ?",
    "c": [
     "rapper",
     "chanter",
     "siffler",
     "crier"
    ],
    "a": "rapper"
   },
   {
    "q": "Quel mouvement culturel des années 70, né dans le Bronx, englobe le rap ? Le ___ ?",
    "c": [
     "hip-hop",
     "disco",
     "funk",
     "techno"
    ],
    "a": "hip-hop"
   },
   {
    "q": "Comment appelle-t-on le fait de faire crisser un disque vinyle à la main ? Le ___ ?",
    "c": [
     "scratch",
     "sample",
     "beat",
     "flow"
    ],
    "a": "scratch"
   },
   {
    "q": "Comment appelle-t-on le débit et le style d'un rappeur ? Son ___ ?",
    "c": [
     "flow",
     "beat",
     "drop",
     "hook"
    ],
    "a": "flow"
   },
   {
    "q": "Quel rappeur américain de Detroit, blond et blanc, a rappé « Lose Yourself » ?",
    "c": [
     "Eminem",
     "Drake",
     "Jay-Z",
     "Nas"
    ],
    "a": "Eminem"
   },
   {
    "q": "Dans quel arrondissement de New York le rap est-il né ? Le ___ ?",
    "c": [
     "Bronx",
     "Queens",
     "Brooklyn",
     "Harlem"
    ],
    "a": "Bronx"
   },
   {
    "q": "Comment appelle-t-on la boucle musicale sur laquelle rappe l'artiste ? L'___ ? (instrumental)",
    "c": [
     "instru",
     "refrain",
     "couplet",
     "pont"
    ],
    "a": "instru"
   },
   {
    "q": "En quelle année sort « Rapper's Delight », premier grand succès rap mondial ?",
    "a": "1979"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_004",
  "cat": "musique",
  "name": "La Pop",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie le mot « pop » en musique ? Musique ___ ?",
    "c": [
     "populaire",
     "puissante",
     "poétique",
     "parlée"
    ],
    "a": "populaire"
   },
   {
    "q": "Quel chanteur américain était surnommé « le roi de la pop » ? Michael ___ ?",
    "c": [
     "Jackson",
     "Bolton",
     "Bublé",
     "Stipe"
    ],
    "a": "Jackson"
   },
   {
    "q": "Quelle chanteuse américaine, ex-country, est devenue une superstar pop ? Taylor ___ ?",
    "c": [
     "Swift",
     "Grande",
     "Perry",
     "Gomez"
    ],
    "a": "Swift"
   },
   {
    "q": "Quelle chanteuse blonde, « Queen of Pop », a chanté « Like a Virgin » ?",
    "c": [
     "Madonna",
     "Cher",
     "Britney",
     "Kylie"
    ],
    "a": "Madonna"
   },
   {
    "q": "Quel groupe suédois des années 70 a chanté « Dancing Queen » ?",
    "c": [
     "ABBA",
     "Roxette",
     "Ace of Base",
     "A-ha"
    ],
    "a": "ABBA"
   },
   {
    "q": "Quelle danse-signature accompagne le tube « Thriller » de Michael Jackson ? Le ___ (moonwalk) ?",
    "c": [
     "moonwalk",
     "twist",
     "floss",
     "dab"
    ],
    "a": "moonwalk"
   },
   {
    "q": "Quelle chanteuse de la Barbade a chanté « Umbrella » ?",
    "c": [
     "Rihanna",
     "Beyoncé",
     "Adele",
     "Sia"
    ],
    "a": "Rihanna"
   },
   {
    "q": "En quelle année est sorti « Thriller », l'album le plus vendu de l'histoire ?",
    "a": "1982"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_005",
  "cat": "musique",
  "name": "Le Classique",
  "level": "classique",
  "levels": [
   {
    "q": "Quel grand instrument à touches noires et blanches est courant en musique classique ? Le ___ ?",
    "c": [
     "piano",
     "tambour",
     "banjo",
     "synthé"
    ],
    "a": "piano"
   },
   {
    "q": "Quel compositeur autrichien génie précoce a écrit « La Flûte enchantée » ?",
    "c": [
     "Mozart",
     "Beethoven",
     "Bach",
     "Haydn"
    ],
    "a": "Mozart"
   },
   {
    "q": "Comment appelle-t-on le groupe de nombreux musiciens jouant ensemble ? Un ___ ?",
    "c": [
     "orchestre",
     "chœur",
     "quatuor",
     "duo"
    ],
    "a": "orchestre"
   },
   {
    "q": "Qui dirige l'orchestre avec une baguette ? Le ___ ?",
    "c": [
     "chef",
     "premier",
     "soliste",
     "maître"
    ],
    "a": "chef"
   },
   {
    "q": "Quel compositeur allemand sourd a écrit la célèbre 5e Symphonie « pom pom pom pom » ?",
    "c": [
     "Beethoven",
     "Mozart",
     "Wagner",
     "Brahms"
    ],
    "a": "Beethoven"
   },
   {
    "q": "Quel compositeur italien du baroque a écrit « Les Quatre Saisons » ?",
    "c": [
     "Vivaldi",
     "Verdi",
     "Puccini",
     "Rossini"
    ],
    "a": "Vivaldi"
   },
   {
    "q": "Comment appelle-t-on une œuvre pour un soliste accompagné de l'orchestre ? Un ___ ?",
    "c": [
     "concerto",
     "opéra",
     "requiem",
     "prélude"
    ],
    "a": "concerto"
   },
   {
    "q": "En quelle année Mozart est-il né, à Salzbourg ?",
    "a": "1756"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_006",
  "cat": "musique",
  "name": "Le Blues",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle couleur, en anglais, est le nom de ce style né du chagrin ? Le ___ ?",
    "c": [
     "blue",
     "red",
     "black",
     "green"
    ],
    "a": "blue"
   },
   {
    "q": "Sur quel continent, dans les champs de coton du Sud américain, le blues est-il né ? Ancêtres venus d'___ ?",
    "c": [
     "Afrique",
     "Europe",
     "Asie",
     "Amérique"
    ],
    "a": "Afrique"
   },
   {
    "q": "Quel instrument à cordes est central dans le blues ? La ___ ?",
    "c": [
     "guitare",
     "trompette",
     "flûte",
     "harpe"
    ],
    "a": "guitare"
   },
   {
    "q": "Quel petit instrument à vent qu'on tient à la bouche est typique du blues ? L'___ ?",
    "c": [
     "harmonica",
     "sifflet",
     "kazoo",
     "ocarina"
    ],
    "a": "harmonica"
   },
   {
    "q": "Quel légendaire guitariste de blues appelait sa guitare « Lucille » ? B.B. ___ ?",
    "c": [
     "King",
     "Waters",
     "Johnson",
     "Guy"
    ],
    "a": "King"
   },
   {
    "q": "Quel bluesman aurait vendu son âme au diable à un carrefour ? Robert ___ ?",
    "c": [
     "Johnson",
     "King",
     "Waters",
     "Hooker"
    ],
    "a": "Johnson"
   },
   {
    "q": "Le long de quel grand fleuve le blues s'est-il diffusé, du Sud vers Chicago ? Le ___ ?",
    "c": [
     "Mississippi",
     "Colorado",
     "Hudson",
     "Missouri"
    ],
    "a": "Mississippi"
   },
   {
    "q": "En quelle année, environ, le blues émerge-t-il dans le Delta du Mississippi (tournant du siècle) ?",
    "a": "1900"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_007",
  "cat": "musique",
  "name": "Le Reggae",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle île des Caraïbes le reggae est-il originaire ? La ___ ?",
    "c": [
     "Jamaïque",
     "Cuba",
     "Haïti",
     "Barbade"
    ],
    "a": "Jamaïque"
   },
   {
    "q": "Quel chanteur aux dreadlocks est la légende mondiale du reggae ? Bob ___ ?",
    "c": [
     "Marley",
     "Tosh",
     "Cliff",
     "Perry"
    ],
    "a": "Marley"
   },
   {
    "q": "Quel mouvement spirituel et culturel est associé au reggae ? Le ___ ?",
    "c": [
     "rastafari",
     "vaudou",
     "candomblé",
     "santería"
    ],
    "a": "rastafari"
   },
   {
    "q": "Quelles longues mèches de cheveux emmêlées portent souvent les rastas ? Des ___ ?",
    "c": [
     "dreadlocks",
     "tresses",
     "chignons",
     "nattes"
    ],
    "a": "dreadlocks"
   },
   {
    "q": "Quelles sont les trois couleurs emblématiques du reggae ? Vert, jaune et ___ ?",
    "c": [
     "rouge",
     "bleu",
     "noir",
     "blanc"
    ],
    "a": "rouge"
   },
   {
    "q": "Quel groupe accompagnait Bob Marley ? The ___ ?",
    "c": [
     "Wailers",
     "Skatalites",
     "Maytals",
     "Heptones"
    ],
    "a": "Wailers"
   },
   {
    "q": "De quel style musical jamaïcain plus rapide le reggae est-il en partie issu ? Le ___ ?",
    "c": [
     "ska",
     "calypso",
     "salsa",
     "mambo"
    ],
    "a": "ska"
   },
   {
    "q": "En quelle année Bob Marley est-il décédé, prématurément ?",
    "a": "1981"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_008",
  "cat": "musique",
  "name": "La Soul",
  "level": "classique",
  "levels": [
   {
    "q": "Quel label de Detroit, écrit comme « Motor Town », a produit la soul des années 60 ?",
    "c": [
     "Motown",
     "Stax",
     "Atlantic",
     "Chess"
    ],
    "a": "Motown"
   },
   {
    "q": "Quel chanteur américain est le « Godfather of Soul » ? James ___ ?",
    "c": [
     "Brown",
     "Redding",
     "Gaye",
     "Charles"
    ],
    "a": "Brown"
   },
   {
    "q": "Quelle diva noire est surnommée « la Reine de la Soul » ? Aretha ___ ?",
    "c": [
     "Franklin",
     "Ross",
     "Knight",
     "Turner"
    ],
    "a": "Franklin"
   },
   {
    "q": "Quel chanteur aveugle, pianiste de génie, a marqué la soul ? Ray ___ ?",
    "c": [
     "Charles",
     "Wonder",
     "Gaye",
     "Cooke"
    ],
    "a": "Charles"
   },
   {
    "q": "Quel chanteur de la Motown, aveugle depuis l'enfance, s'appelle Stevie ___ ?",
    "c": [
     "Wonder",
     "Ross",
     "Robinson",
     "Gaye"
    ],
    "a": "Wonder"
   },
   {
    "q": "Quel tube d'Aretha Franklin épelle un mot signifiant « respect » ? R-E-S-P-E-C-___ ?",
    "c": [
     "T",
     "S",
     "O",
     "R"
    ],
    "a": "T"
   },
   {
    "q": "De quel genre religieux chanté à l'église la soul est-elle en partie issue ? Le ___ ?",
    "c": [
     "gospel",
     "blues",
     "jazz",
     "folk"
    ],
    "a": "gospel"
   },
   {
    "q": "En quelle année Berry Gordy a-t-il fondé le label Motown ?",
    "a": "1959"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_009",
  "cat": "musique",
  "name": "Le Metal",
  "level": "classique",
  "levels": [
   {
    "q": "Comment joue-t-on principalement la guitare metal ? Fort et ___ (distordu) ?",
    "c": [
     "saturé",
     "doux",
     "lent",
     "muet"
    ],
    "a": "saturé"
   },
   {
    "q": "Quel groupe britannique de Birmingham, avec Ozzy Osbourne, a fondé le metal ? Black ___ ?",
    "c": [
     "Sabbath",
     "Star",
     "Rose",
     "Flag"
    ],
    "a": "Sabbath"
   },
   {
    "q": "Quel geste de la main, index et auriculaire levés, est le signe des metalleux ? Les ___ du diable ?",
    "c": [
     "cornes",
     "griffes",
     "ailes",
     "crocs"
    ],
    "a": "cornes"
   },
   {
    "q": "Quel groupe américain de thrash metal a écrit « Master of Puppets » ?",
    "c": [
     "Metallica",
     "Slayer",
     "Megadeth",
     "Anthrax"
    ],
    "a": "Metallica"
   },
   {
    "q": "Comment appelle-t-on la danse violente en cercle dans la fosse d'un concert metal ? Le ___ pit ?",
    "c": [
     "mosh",
     "slam",
     "circle",
     "wall"
    ],
    "a": "mosh"
   },
   {
    "q": "Quel chanteur d'Iron Maiden ou plutôt : quel groupe anglais a pour mascotte le squelette « Eddie » ?",
    "c": [
     "Iron Maiden",
     "Judas Priest",
     "Motörhead",
     "Saxon"
    ],
    "a": "Iron Maiden"
   },
   {
    "q": "Comment appelle-t-on le fait de secouer la tête violemment en rythme ? Le ___ ?",
    "c": [
     "headbang",
     "moonwalk",
     "twist",
     "pogo"
    ],
    "a": "headbang"
   },
   {
    "q": "En quelle année sort « Black Sabbath », album fondateur du heavy metal ?",
    "a": "1970"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_010",
  "cat": "musique",
  "name": "Le Punk",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle attitude le punk revendique-t-il face à l'ordre établi ? La ___ (No Future) ?",
    "c": [
     "révolte",
     "obéissance",
     "prière",
     "sagesse"
    ],
    "a": "révolte"
   },
   {
    "q": "Quel groupe britannique provocateur a chanté « Anarchy in the UK » ? Les Sex ___ ?",
    "c": [
     "Pistols",
     "Guns",
     "Bullets",
     "Knives"
    ],
    "a": "Pistols"
   },
   {
    "q": "Quelle coiffure dressée en crête est typique des punks ? La ___ ?",
    "c": [
     "crête",
     "banane",
     "boule",
     "tresse"
    ],
    "a": "crête"
   },
   {
    "q": "Quel slogan pessimiste résume l'esprit punk ? « No ___ » ?",
    "c": [
     "Future",
     "Money",
     "Rules",
     "God"
    ],
    "a": "Future"
   },
   {
    "q": "Quel groupe américain de New York en blousons de cuir criait « Hey Ho Let's Go » ? Les ___ ?",
    "c": [
     "Ramones",
     "Clash",
     "Damned",
     "Cramps"
    ],
    "a": "Ramones"
   },
   {
    "q": "Quel groupe punk britannique engagé a chanté « London Calling » ? The ___ ?",
    "c": [
     "Clash",
     "Jam",
     "Buzzcocks",
     "Slits"
    ],
    "a": "Clash"
   },
   {
    "q": "Comment appelle-t-on la danse punk où l'on saute sur place ? Le ___ ?",
    "c": [
     "pogo",
     "moonwalk",
     "twist",
     "madison"
    ],
    "a": "pogo"
   },
   {
    "q": "En quelle année explose le mouvement punk, avec les Sex Pistols ?",
    "a": "1976"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_011",
  "cat": "musique",
  "name": "Le Folk",
  "level": "classique",
  "levels": [
   {
    "q": "De quel type d'instrument acoustique à cordes le folk fait-il grand usage ? La ___ ?",
    "c": [
     "guitare",
     "batterie",
     "trompette",
     "synthé"
    ],
    "a": "guitare"
   },
   {
    "q": "Quel chanteur folk américain à l'harmonica, prix Nobel de littérature, a écrit « Blowin' in the Wind » ? Bob ___ ?",
    "c": [
     "Dylan",
     "Young",
     "Guthrie",
     "Baez"
    ],
    "a": "Dylan"
   },
   {
    "q": "Le folk s'inspire des musiques ___ transmises de génération en génération ?",
    "c": [
     "traditionnelles",
     "électroniques",
     "militaires",
     "religieuses"
    ],
    "a": "traditionnelles"
   },
   {
    "q": "Quel petit instrument à cordes hawaïen, proche de la guitare, est utilisé en folk ? Le ___ ?",
    "c": [
     "ukulélé",
     "banjo",
     "sitar",
     "luth"
    ],
    "a": "ukulélé"
   },
   {
    "q": "Quel instrument à cordes pincées, typique de la country et du folk américain, a une caisse ronde ? Le ___ ?",
    "c": [
     "banjo",
     "violon",
     "piano",
     "accordéon"
    ],
    "a": "banjo"
   },
   {
    "q": "Quelle chanteuse folk engagée, amie de Dylan, s'appelle Joan ___ ?",
    "c": [
     "Baez",
     "Mitchell",
     "Collins",
     "Joplin"
    ],
    "a": "Baez"
   },
   {
    "q": "Quel duo folk-rock a chanté « The Sound of Silence » ? Simon & ___ ?",
    "c": [
     "Garfunkel",
     "Young",
     "Crosby",
     "Nash"
    ],
    "a": "Garfunkel"
   },
   {
    "q": "En quelle année Bob Dylan a-t-il reçu le prix Nobel de littérature ?",
    "a": "2016"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_012",
  "cat": "musique",
  "name": "L'Électro",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quel type d'instrument principal fait-on de la musique électro ? Des instruments ___ ?",
    "c": [
     "électroniques",
     "acoustiques",
     "à cordes",
     "à vent"
    ],
    "a": "électroniques"
   },
   {
    "q": "Quel duo français masqué en casques de robots a fait danser le monde ? Daft ___ ?",
    "c": [
     "Punk",
     "Rock",
     "Beat",
     "House"
    ],
    "a": "Punk"
   },
   {
    "q": "Comment appelle-t-on les grandes fêtes dansantes électro, souvent clandestines ? Des ___ ?",
    "c": [
     "raves",
     "bals",
     "galas",
     "kermesses"
    ],
    "a": "raves"
   },
   {
    "q": "Quel appareil permet à un DJ de mélanger deux morceaux ? La table de ___ ?",
    "c": [
     "mixage",
     "montage",
     "réglage",
     "mesure"
    ],
    "a": "mixage"
   },
   {
    "q": "Comment appelle-t-on le moment de montée puis lâcher rythmique en électro ? Le ___ ?",
    "c": [
     "drop",
     "flow",
     "beat",
     "riff"
    ],
    "a": "drop"
   },
   {
    "q": "Quel style électro répétitif est né à Détroit dans les années 80 ? La ___ ?",
    "c": [
     "techno",
     "salsa",
     "bossa",
     "polka"
    ],
    "a": "techno"
   },
   {
    "q": "Quel nombre de battements par minute (BPM) caractérise environ la techno ? Environ ___ BPM ?",
    "c": [
     "130",
     "60",
     "200",
     "90"
    ],
    "a": "130"
   },
   {
    "q": "En quelle année sort « Homework », premier album de Daft Punk ?",
    "a": "1997"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_013",
  "cat": "musique",
  "name": "Le R&B",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie le sigle R&B ? Rhythm and ___ ?",
    "c": [
     "Blues",
     "Beat",
     "Bass",
     "Ballad"
    ],
    "a": "Blues"
   },
   {
    "q": "Quelle chanteuse américaine, ex-Destiny's Child, est une reine du R&B ? ___ ?",
    "c": [
     "Beyoncé",
     "Rihanna",
     "Alicia",
     "Ciara"
    ],
    "a": "Beyoncé"
   },
   {
    "q": "Quel chanteur canadien de R&B masqué au début a chanté « Blinding Lights » ? The ___ ?",
    "c": [
     "Weeknd",
     "Dream",
     "Voice",
     "Sound"
    ],
    "a": "Weeknd"
   },
   {
    "q": "De quels genres afro-américains le R&B moderne est-il l'héritier ? Soul et ___ ?",
    "c": [
     "funk",
     "punk",
     "folk",
     "rock"
    ],
    "a": "funk"
   },
   {
    "q": "Quelle chanteuse et pianiste de R&B a chanté « Fallin' » ? Alicia ___ ?",
    "c": [
     "Keys",
     "Badu",
     "Blige",
     "Hill"
    ],
    "a": "Keys"
   },
   {
    "q": "Quel chanteur de R&B au falsetto a chanté « Ignition » et « I Believe I Can Fly » ? R. ___ ?",
    "c": [
     "Kelly",
     "City",
     "Ross",
     "Wave"
    ],
    "a": "Kelly"
   },
   {
    "q": "Quel girl group des années 90-2000 lançait la carrière de Beyoncé ? Destiny's ___ ?",
    "c": [
     "Child",
     "Girls",
     "Angels",
     "Voices"
    ],
    "a": "Child"
   },
   {
    "q": "En quelle année, environ, l'expression « rhythm and blues » remplace-t-elle « race records » (fin années 40) ?",
    "a": "1948"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_014",
  "cat": "musique",
  "name": "La Country",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle grande nation la musique country est-elle née et reine ? Les ___-Unis ?",
    "c": [
     "États",
     "Émirats",
     "Provinces",
     "Cantons"
    ],
    "a": "États"
   },
   {
    "q": "Quel couvre-chef à larges bords est associé aux chanteurs country ? Le chapeau de ___ ?",
    "c": [
     "cowboy",
     "paille",
     "feutre",
     "soleil"
    ],
    "a": "cowboy"
   },
   {
    "q": "Quel instrument à cordes rapide anime les morceaux country ? Le ___ ?",
    "c": [
     "banjo",
     "sitar",
     "orgue",
     "piano"
    ],
    "a": "banjo"
   },
   {
    "q": "Quelle chanteuse country à forte poitrine a écrit « Jolene » et « I Will Always Love You » ? Dolly ___ ?",
    "c": [
     "Parton",
     "Lynn",
     "Cline",
     "Twain"
    ],
    "a": "Parton"
   },
   {
    "q": "Quelle ville du Tennessee est la capitale mondiale de la country ?",
    "c": [
     "Nashville",
     "Memphis",
     "Austin",
     "Dallas"
    ],
    "a": "Nashville"
   },
   {
    "q": "Quel chanteur country en noir était surnommé « The Man in Black » ? Johnny ___ ?",
    "c": [
     "Cash",
     "Nelson",
     "Jennings",
     "Haggard"
    ],
    "a": "Cash"
   },
   {
    "q": "Quel instrument à cordes frottées, appelé aussi violon, est central en country ? Le ___ (fiddle) ?",
    "c": [
     "violon",
     "violoncelle",
     "alto",
     "contrebasse"
    ],
    "a": "violon"
   },
   {
    "q": "En quelle année ont eu lieu les premiers enregistrements country célèbres (Bristol Sessions) ?",
    "a": "1927"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_015",
  "cat": "musique",
  "name": "Le Funk",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle qualité rythmique, très dansante, définit le funk ? Le ___ (groove) ?",
    "c": [
     "groove",
     "silence",
     "calme",
     "lent"
    ],
    "a": "groove"
   },
   {
    "q": "Quel instrument à cordes graves porte le rythme du funk ? La ___ ?",
    "c": [
     "basse",
     "flûte",
     "harpe",
     "trompette"
    ],
    "a": "basse"
   },
   {
    "q": "Quel « Godfather of Soul » est aussi pionnier du funk ? James ___ ?",
    "c": [
     "Brown",
     "Clinton",
     "Wonder",
     "Prince"
    ],
    "a": "Brown"
   },
   {
    "q": "Quel artiste de Minneapolis, symbole ambigu, a fait fusionner funk, rock et pop ?",
    "c": [
     "Prince",
     "Bowie",
     "Michael",
     "Lenny"
    ],
    "a": "Prince"
   },
   {
    "q": "Quel collectif funk mené par George Clinton comprend Parliament et ___ ?",
    "c": [
     "Funkadelic",
     "Earth",
     "Chic",
     "Kool"
    ],
    "a": "Funkadelic"
   },
   {
    "q": "Quel groupe funk-rock californien a chanté « Californication » ? Red Hot Chili ___ ?",
    "c": [
     "Peppers",
     "Beans",
     "Onions",
     "Grapes"
    ],
    "a": "Peppers"
   },
   {
    "q": "Comment appelle-t-on la technique de basse claquée si typique du funk ? Le ___ (slap) ?",
    "c": [
     "slap",
     "tap",
     "pull",
     "clap"
    ],
    "a": "slap"
   },
   {
    "q": "En quelle année sort « Papa's Got a Brand New Bag » de James Brown, jalon du funk ?",
    "a": "1965"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_016",
  "cat": "musique",
  "name": "Le Disco",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel lieu de fête, avec boule à facettes, danse-t-on sur le disco ? La ___ ?",
    "c": [
     "discothèque",
     "bibliothèque",
     "cafétéria",
     "galerie"
    ],
    "a": "discothèque"
   },
   {
    "q": "Quel objet à facettes brillantes tourne au plafond des clubs disco ? La boule à ___ ?",
    "c": [
     "facettes",
     "neige",
     "cristal",
     "lumière"
    ],
    "a": "facettes"
   },
   {
    "q": "Quel film de 1977 avec John Travolta a popularisé le disco ? La ___ du samedi soir ?",
    "c": [
     "Fièvre",
     "Danse",
     "Nuit",
     "Folie"
    ],
    "a": "Fièvre"
   },
   {
    "q": "Quel groupe de frères aux voix aiguës a chanté « Stayin' Alive » ? Les Bee ___ ?",
    "c": [
     "Gees",
     "Boys",
     "Stars",
     "Cool"
    ],
    "a": "Gees"
   },
   {
    "q": "Quel groupe disco déguisé (Indien, policier, cowboy...) a chanté « Y.M.C.A. » ? Village ___ ?",
    "c": [
     "People",
     "Boys",
     "Stars",
     "Men"
    ],
    "a": "People"
   },
   {
    "q": "Quelle chanteuse est surnommée « la Reine du Disco » ? Donna ___ ?",
    "c": [
     "Summer",
     "Ross",
     "Gaynor",
     "Khan"
    ],
    "a": "Summer"
   },
   {
    "q": "Quel tube de Gloria Gaynor est un hymne disco de survie ? « I Will ___ » ?",
    "c": [
     "Survive",
     "Dance",
     "Love",
     "Live"
    ],
    "a": "Survive"
   },
   {
    "q": "En quelle année sort le film « La Fièvre du samedi soir » ?",
    "a": "1977"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_017",
  "cat": "musique",
  "name": "Le Gospel",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel lieu de culte le gospel est-il chanté à l'origine ? L'___ ?",
    "c": [
     "église",
     "stade",
     "théâtre",
     "cinéma"
    ],
    "a": "église"
   },
   {
    "q": "Quel thème central les chants gospel célèbrent-ils ? La foi en ___ ?",
    "c": [
     "Dieu",
     "l'argent",
     "l'amour",
     "la fête"
    ],
    "a": "Dieu"
   },
   {
    "q": "Comment appelle-t-on le groupe de chanteurs qui interprète le gospel ? La ___ (chorale) ?",
    "c": [
     "chorale",
     "fanfare",
     "troupe",
     "clique"
    ],
    "a": "chorale"
   },
   {
    "q": "De quelle communauté américaine le gospel est-il issu ? La communauté ___ ?",
    "c": [
     "afro-américaine",
     "amérindienne",
     "asiatique",
     "irlandaise"
    ],
    "a": "afro-américaine"
   },
   {
    "q": "Quel chant gospel très célèbre commence par « Amazing ___ » ?",
    "c": [
     "Grace",
     "Love",
     "God",
     "Day"
    ],
    "a": "Grace"
   },
   {
    "q": "De quel genre profane, né du gospel, la soul est-elle proche ? Le gospel a donné la ___ ?",
    "c": [
     "soul",
     "techno",
     "country",
     "polka"
    ],
    "a": "soul"
   },
   {
    "q": "Comment appelle-t-on l'échange chanté entre le meneur et le chœur ? Le ___ et réponse ?",
    "c": [
     "appel",
     "cri",
     "chant",
     "refrain"
    ],
    "a": "appel"
   },
   {
    "q": "En quel siècle le gospel afro-américain moderne prend-il forme ? Au ___e siècle ?",
    "c": [
     "20",
     "18",
     "17",
     "16"
    ],
    "a": "20"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_018",
  "cat": "musique",
  "name": "Le Flamenco",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays le flamenco est-il originaire ?",
    "c": [
     "Espagne",
     "Portugal",
     "Italie",
     "Mexique"
    ],
    "a": "Espagne"
   },
   {
    "q": "De quelle région du sud de l'Espagne le flamenco est-il le cœur ? L'___ ?",
    "c": [
     "Andalousie",
     "Catalogne",
     "Galice",
     "Aragon"
    ],
    "a": "Andalousie"
   },
   {
    "q": "Quel instrument à cordes accompagne le flamenco ? La ___ ?",
    "c": [
     "guitare",
     "harpe",
     "flûte",
     "trompette"
    ],
    "a": "guitare"
   },
   {
    "q": "Quels petits instruments à claquer entre les doigts rythment le flamenco ? Des ___ ?",
    "c": [
     "castagnettes",
     "maracas",
     "cymbales",
     "grelots"
    ],
    "a": "castagnettes"
   },
   {
    "q": "Comment appelle-t-on les frappes de pieds rythmées des danseurs ? Le ___ (zapateado) ?",
    "c": [
     "zapateado",
     "moonwalk",
     "tap",
     "pas"
    ],
    "a": "zapateado"
   },
   {
    "q": "Quel peuple, présent en Andalousie, a profondément influencé le flamenco ? Les ___ (gitans) ?",
    "c": [
     "gitans",
     "vikings",
     "berbères",
     "celtes"
    ],
    "a": "gitans"
   },
   {
    "q": "Comment appelle-t-on les claquements de mains rythmés du flamenco ? Les ___ ?",
    "c": [
     "palmas",
     "olé",
     "duende",
     "cante"
    ],
    "a": "palmas"
   },
   {
    "q": "En quelle année l'UNESCO a-t-elle inscrit le flamenco au patrimoine immatériel ?",
    "a": "2010"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_019",
  "cat": "musique",
  "name": "Le Salsa",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quel continent, dans les Caraïbes latines, la salsa a-t-elle pris son essor ? L'Amérique ___ ?",
    "c": [
     "latine",
     "du Nord",
     "asiatique",
     "africaine"
    ],
    "a": "latine"
   },
   {
    "q": "La salsa est avant tout une musique faite pour ___ ?",
    "c": [
     "danser",
     "dormir",
     "prier",
     "pleurer"
    ],
    "a": "danser"
   },
   {
    "q": "De quelle île des Caraïbes viennent beaucoup de rythmes de la salsa ?",
    "c": [
     "Cuba",
     "Islande",
     "Malte",
     "Chypre"
    ],
    "a": "Cuba"
   },
   {
    "q": "Quel instrument à deux fûts frappés à la main est typique de la salsa ? Les ___ ?",
    "c": [
     "congas",
     "timbales",
     "maracas",
     "claves"
    ],
    "a": "congas"
   },
   {
    "q": "Dans quelle ville américaine, capitale latino, la salsa moderne s'est-elle développée ? New ___ ?",
    "c": [
     "York",
     "Orleans",
     "Jersey",
     "Haven"
    ],
    "a": "York"
   },
   {
    "q": "Quelle chanteuse cubaine est surnommée « la Reine de la Salsa » ? Celia ___ ?",
    "c": [
     "Cruz",
     "Estefan",
     "Ronstadt",
     "Lupe"
    ],
    "a": "Cruz"
   },
   {
    "q": "Que signifie « salsa » en espagnol, mot qui a donné son nom au genre ?",
    "c": [
     "sauce",
     "danse",
     "fête",
     "soleil"
    ],
    "a": "sauce"
   },
   {
    "q": "En quelle année, environ, le mot « salsa » s'impose-t-il pour ce genre (années 1970) ?",
    "a": "1970"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_020",
  "cat": "musique",
  "name": "Le Calypso",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle île des Caraïbes le calypso est-il originaire ? ___-et-Tobago ?",
    "c": [
     "Trinité",
     "Cuba",
     "Jamaïque",
     "Haïti"
    ],
    "a": "Trinité"
   },
   {
    "q": "Quel instrument fait de bidons de métal accordés accompagne le calypso ? Le steel ___ ?",
    "c": [
     "drum",
     "guitar",
     "piano",
     "horn"
    ],
    "a": "drum"
   },
   {
    "q": "Pendant quelle grande fête populaire le calypso résonne-t-il ? Le ___ ?",
    "c": [
     "carnaval",
     "mariage",
     "baptême",
     "marché"
    ],
    "a": "carnaval"
   },
   {
    "q": "Les chansons de calypso sont réputées pour leurs paroles pleines d'___ (moqueries) ?",
    "c": [
     "humour",
     "tristesse",
     "colère",
     "silence"
    ],
    "a": "humour"
   },
   {
    "q": "Quel chanteur américano-jamaïcain a popularisé le calypso avec « Banana Boat » ? Harry ___ ?",
    "c": [
     "Belafonte",
     "Marley",
     "Cliff",
     "Tosh"
    ],
    "a": "Belafonte"
   },
   {
    "q": "Quel mot revient dans le refrain de « Banana Boat Song » ? « ___ » ?",
    "c": [
     "Day-O",
     "Hey-O",
     "Yo-Ho",
     "Ai-Ai"
    ],
    "a": "Day-O"
   },
   {
    "q": "De quel instrument de fortune le steel drum est-il fabriqué ? Un ___ de pétrole ?",
    "c": [
     "bidon",
     "seau",
     "tonneau",
     "pot"
    ],
    "a": "bidon"
   },
   {
    "q": "En quel siècle le calypso est-il né à Trinité-et-Tobago ? Au ___e siècle ?",
    "c": [
     "19",
     "17",
     "18",
     "20"
    ],
    "a": "19"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_021",
  "cat": "musique",
  "name": "Le Bhangra",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle région d'Asie du Sud le bhangra est-il originaire ? Le ___ (nord de l'Inde/Pakistan) ?",
    "c": [
     "Pendjab",
     "Bengale",
     "Kerala",
     "Tibet"
    ],
    "a": "Pendjab"
   },
   {
    "q": "Le bhangra est avant tout une musique de fête et de ___ ?",
    "c": [
     "danse",
     "prière",
     "deuil",
     "sieste"
    ],
    "a": "danse"
   },
   {
    "q": "Quel grand tambour à deux faces, joué avec des baguettes, rythme le bhangra ? Le ___ ?",
    "c": [
     "dhol",
     "sitar",
     "tabla",
     "veena"
    ],
    "a": "dhol"
   },
   {
    "q": "À l'origine, le bhangra célébrait quelle activité agricole ? Les ___ (récoltes) ?",
    "c": [
     "moissons",
     "semailles",
     "vendanges",
     "labours"
    ],
    "a": "moissons"
   },
   {
    "q": "Avec quelle musique occidentale le bhangra moderne fusionne-t-il souvent ? Le ___ (hip-hop/électro) ?",
    "c": [
     "hip-hop",
     "jazz",
     "opéra",
     "gospel"
    ],
    "a": "hip-hop"
   },
   {
    "q": "Dans quel pays, grâce à sa diaspora indienne, le bhangra moderne a-t-il explosé ? Le ___-Uni ?",
    "c": [
     "Royaume",
     "États",
     "Émirats",
     "Pays"
    ],
    "a": "Royaume"
   },
   {
    "q": "Pendant quel festival des récoltes du printemps danse-t-on le bhangra ? Le ___ ?",
    "c": [
     "Vaisakhi",
     "Diwali",
     "Holi",
     "Eid"
    ],
    "a": "Vaisakhi"
   },
   {
    "q": "En quelle décennie le bhangra fusion moderne émerge-t-il au Royaume-Uni ? Les années ___ ?",
    "c": [
     "1980",
     "1950",
     "2000",
     "1930"
    ],
    "a": "1980"
   }
  ],
  "rw": true
 },
 {
  "id": "musique_022",
  "cat": "musique",
  "name": "Le Fado",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays le fado est-il l'âme musicale ?",
    "c": [
     "Portugal",
     "Espagne",
     "Brésil",
     "Italie"
    ],
    "a": "Portugal"
   },
   {
    "q": "Dans quelle capitale, ses quartiers d'Alfama, le fado résonne-t-il surtout ?",
    "c": [
     "Lisbonne",
     "Porto",
     "Madrid",
     "Rome"
    ],
    "a": "Lisbonne"
   },
   {
    "q": "Quel sentiment de mélancolie et de nostalgie exprime le fado ? La ___ ?",
    "c": [
     "saudade",
     "alegria",
     "fiesta",
     "tristeza"
    ],
    "a": "saudade"
   },
   {
    "q": "Quel instrument à cordes en forme de poire accompagne le fado ? La ___ portugaise ?",
    "c": [
     "guitare",
     "harpe",
     "flûte",
     "mandoline"
    ],
    "a": "guitare"
   },
   {
    "q": "Quelle chanteuse en noir est la plus grande légende du fado ? Amália ___ ?",
    "c": [
     "Rodrigues",
     "Mouskouri",
     "Baker",
     "Gulbenkian"
    ],
    "a": "Rodrigues"
   },
   {
    "q": "De quel mot latin signifiant « destin » vient le mot « fado » ?",
    "c": [
     "fatum",
     "fadus",
     "vita",
     "sonus"
    ],
    "a": "fatum"
   },
   {
    "q": "Quelle chanteuse de fado contemporaine, prénommée Mariza, l'a modernisé et fait connaître au monde : de quel pays africain lusophone est-elle née ? Le ___ ?",
    "c": [
     "Mozambique",
     "Angola",
     "Cap-Vert",
     "Guinée"
    ],
    "a": "Mozambique"
   },
   {
    "q": "En quelle année l'UNESCO a-t-elle classé le fado au patrimoine immatériel ?",
    "a": "2011"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_001",
  "cat": "histoire",
  "name": "La Révolution française",
  "level": "classique",
  "levels": [
   {
    "q": "En quelle année a commencé la Révolution française ?",
    "a": "1789"
   },
   {
    "q": "Quelle forteresse-prison parisienne a été prise le 14 juillet 1789 ? La ___ ?",
    "c": [
     "Bastille",
     "Conciergerie",
     "Sorbonne",
     "Sainte-Chapelle"
    ],
    "a": "Bastille"
   },
   {
    "q": "Quelle machine à décapiter a été le symbole de la Terreur ? La ___ ?",
    "c": [
     "guillotine",
     "potence",
     "roue",
     "hache"
    ],
    "a": "guillotine"
   },
   {
    "q": "Quel roi de France a été guillotiné en 1793 ? Louis ___ ?",
    "c": [
     "XVI",
     "XIV",
     "XV",
     "XVII"
    ],
    "a": "XVI"
   },
   {
    "q": "Quels sont les trois mots de la devise républicaine née de la Révolution ? Liberté, Égalité, ___ ?",
    "c": [
     "Fraternité",
     "Prospérité",
     "Vérité",
     "Sécurité"
    ],
    "a": "Fraternité"
   },
   {
    "q": "Quelle reine, épouse de Louis XVI, a aussi été guillotinée ? Marie-___ ?",
    "c": [
     "Antoinette",
     "Thérèse",
     "Louise",
     "Adélaïde"
    ],
    "a": "Antoinette"
   },
   {
    "q": "Quel révolutionnaire, chef de la Terreur, a été surnommé « l'Incorruptible » ?",
    "c": [
     "Robespierre",
     "Danton",
     "Marat",
     "Saint-Just"
    ],
    "a": "Robespierre"
   },
   {
    "q": "En quelle année, jour pour jour le 9 Thermidor, Robespierre est-il tombé ? Année : ?",
    "a": "1794"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_002",
  "cat": "histoire",
  "name": "La Rome antique",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle ville était la capitale de l'Empire romain ?",
    "a": "Rome"
   },
   {
    "q": "Comment appelait-on le chef suprême de l'Empire romain ? Un ___ ?",
    "c": [
     "empereur",
     "roi",
     "pharaon",
     "sultan"
    ],
    "a": "empereur"
   },
   {
    "q": "Dans quel grand amphithéâtre romain combattaient les gladiateurs ? Le ___ ?",
    "c": [
     "Colisée",
     "Panthéon",
     "Forum",
     "Cirque"
    ],
    "a": "Colisée"
   },
   {
    "q": "Quel général romain a déclaré « Le sort en est jeté » en franchissant le Rubicon ? Jules ___ ?",
    "c": [
     "César",
     "Auguste",
     "Néron",
     "Trajan"
    ],
    "a": "César"
   },
   {
    "q": "Selon la légende, quels jumeaux allaités par une louve ont fondé Rome ? Romulus et ___ ?",
    "c": [
     "Remus",
     "Titus",
     "Marcus",
     "Brutus"
    ],
    "a": "Remus"
   },
   {
    "q": "Quel premier empereur romain, fils adoptif de César, a régné à partir de -27 ?",
    "c": [
     "Auguste",
     "Néron",
     "Caligula",
     "Tibère"
    ],
    "a": "Auguste"
   },
   {
    "q": "Quelles longues voies pavées les Romains ont-ils construites à travers l'empire ? Des ___ (routes) ?",
    "c": [
     "voies",
     "canaux",
     "murs",
     "ponts"
    ],
    "a": "voies"
   },
   {
    "q": "En quelle année, selon la tradition, Rome a-t-elle été fondée ? En -___ ?",
    "a": "753"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_003",
  "cat": "histoire",
  "name": "L'Égypte ancienne",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelait-on les rois de l'Égypte ancienne ? Des ___ ?",
    "c": [
     "pharaons",
     "empereurs",
     "califes",
     "sultans"
    ],
    "a": "pharaons"
   },
   {
    "q": "Quels immenses tombeaux de pierre les pharaons ont-ils fait construire ? Des ___ ?",
    "c": [
     "pyramides",
     "temples",
     "châteaux",
     "tours"
    ],
    "a": "pyramides"
   },
   {
    "q": "Comment appelle-t-on un corps embaumé et enveloppé de bandelettes ? Une ___ ?",
    "c": [
     "momie",
     "statue",
     "relique",
     "idole"
    ],
    "a": "momie"
   },
   {
    "q": "Quelle écriture faite de dessins les Égyptiens utilisaient-ils ? Les ___ ?",
    "c": [
     "hiéroglyphes",
     "runes",
     "idéogrammes",
     "cunéiformes"
    ],
    "a": "hiéroglyphes"
   },
   {
    "q": "Quel jeune pharaon a été retrouvé intact en 1922, avec son masque d'or ?",
    "c": [
     "Toutânkhamon",
     "Ramsès",
     "Khéops",
     "Néfertiti"
    ],
    "a": "Toutânkhamon"
   },
   {
    "q": "Quelle pierre gravée en trois écritures a permis de déchiffrer les hiéroglyphes ? La pierre de ___ ?",
    "c": [
     "Rosette",
     "Louxor",
     "Karnak",
     "Thèbes"
    ],
    "a": "Rosette"
   },
   {
    "q": "Quel dieu égyptien à tête de chacal veillait sur les morts ?",
    "c": [
     "Anubis",
     "Râ",
     "Horus",
     "Osiris"
    ],
    "a": "Anubis"
   },
   {
    "q": "En quelle année, avant J.-C., environ, débute l'Ancien Empire égyptien (pyramides) ?",
    "a": "2686"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_004",
  "cat": "histoire",
  "name": "La Guerre froide",
  "level": "classique",
  "levels": [
   {
    "q": "Quelles deux superpuissances s'opposaient pendant la Guerre froide ? Les USA et l'___ ?",
    "c": [
     "URSS",
     "Chine",
     "Inde",
     "Cuba"
    ],
    "a": "URSS"
   },
   {
    "q": "Quel mur, tombé en 1989, symbolisait la division Est-Ouest ? Le mur de ___ ?",
    "c": [
     "Berlin",
     "Chine",
     "Prague",
     "Varsovie"
    ],
    "a": "Berlin"
   },
   {
    "q": "De quelle « couleur » qualifie-t-on cette guerre sans combat direct entre grandes puissances ? La guerre ___ ?",
    "c": [
     "froide",
     "chaude",
     "grise",
     "noire"
    ],
    "a": "froide"
   },
   {
    "q": "Quelle course opposait les deux blocs pour aller sur la Lune ? La course à l'___ ?",
    "c": [
     "espace",
     "or",
     "armement",
     "pétrole"
    ],
    "a": "espace"
   },
   {
    "q": "Quelle crise de 1962, autour d'une île, faillit déclencher une guerre nucléaire ? La crise de ___ ?",
    "c": [
     "Cuba",
     "Corée",
     "Berlin",
     "Suez"
    ],
    "a": "Cuba"
   },
   {
    "q": "Quel « rideau » métaphorique séparait l'Europe de l'Ouest et de l'Est ? Le rideau de ___ ?",
    "c": [
     "fer",
     "feu",
     "verre",
     "brume"
    ],
    "a": "fer"
   },
   {
    "q": "Quel dirigeant soviétique des années 80 a lancé la perestroïka ? Mikhaïl ___ ?",
    "c": [
     "Gorbatchev",
     "Brejnev",
     "Staline",
     "Eltsine"
    ],
    "a": "Gorbatchev"
   },
   {
    "q": "En quelle année l'URSS a-t-elle officiellement cessé d'exister, marquant la fin de la Guerre froide ?",
    "a": "1991"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_005",
  "cat": "histoire",
  "name": "La Renaissance",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel pays européen la Renaissance est-elle née ? L'___ ?",
    "c": [
     "Italie",
     "France",
     "Espagne",
     "Angleterre"
    ],
    "a": "Italie"
   },
   {
    "q": "Quel génie italien a peint « La Joconde » ? Léonard de ___ ?",
    "c": [
     "Vinci",
     "Milan",
     "Rome",
     "Florence"
    ],
    "a": "Vinci"
   },
   {
    "q": "Quelle ville italienne, berceau de la Renaissance, était dominée par les Médicis ?",
    "c": [
     "Florence",
     "Venise",
     "Naples",
     "Milan"
    ],
    "a": "Florence"
   },
   {
    "q": "Quel artiste a peint le plafond de la chapelle Sixtine ?",
    "c": [
     "Michel-Ange",
     "Raphaël",
     "Titien",
     "Botticelli"
    ],
    "a": "Michel-Ange"
   },
   {
    "q": "Quelle invention de Gutenberg a permis de diffuser le savoir à la Renaissance ? L'___ ?",
    "c": [
     "imprimerie",
     "boussole",
     "lunette",
     "horloge"
    ],
    "a": "imprimerie"
   },
   {
    "q": "Quel navigateur génois a atteint l'Amérique en 1492, à l'aube de la Renaissance ?",
    "c": [
     "Christophe Colomb",
     "Magellan",
     "Vasco de Gama",
     "Vespucci"
    ],
    "a": "Christophe Colomb"
   },
   {
    "q": "Quel roi de France a fait venir Léonard de Vinci à Amboise ? François ___ ?",
    "c": [
     "Ier",
     "II",
     "III",
     "IV"
    ],
    "a": "Ier"
   },
   {
    "q": "En quelle année, environ, situe-t-on le début de la Renaissance italienne (Quattrocento) ?",
    "a": "1400"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_006",
  "cat": "histoire",
  "name": "Les Vikings",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle région d'Europe les Vikings étaient-ils originaires ? La ___ ?",
    "c": [
     "Scandinavie",
     "Méditerranée",
     "Balkans",
     "Ibérie"
    ],
    "a": "Scandinavie"
   },
   {
    "q": "Sur quel type de bateau long et effilé naviguaient les Vikings ? Un ___ (drakkar) ?",
    "c": [
     "drakkar",
     "galion",
     "radeau",
     "sous-marin"
    ],
    "a": "drakkar"
   },
   {
    "q": "Quel casque, à tort, imagine-t-on souvent sur la tête des Vikings ? Un casque à ___ ?",
    "c": [
     "cornes",
     "plumes",
     "pointes",
     "ailes"
    ],
    "a": "cornes"
   },
   {
    "q": "Quel explorateur viking aurait atteint l'Amérique bien avant Colomb ? Leif ___ ?",
    "c": [
     "Erikson",
     "Ragnar",
     "Bjorn",
     "Ivar"
    ],
    "a": "Erikson"
   },
   {
    "q": "Quel dieu viking du tonnerre porte un marteau ?",
    "c": [
     "Thor",
     "Odin",
     "Loki",
     "Freyr"
    ],
    "a": "Thor"
   },
   {
    "q": "Quel paradis guerrier viking accueillait les héros morts au combat ? Le ___ ?",
    "c": [
     "Valhalla",
     "Olympe",
     "Éden",
     "Nirvana"
    ],
    "a": "Valhalla"
   },
   {
    "q": "Quel dieu viking borgne, roi des dieux, régnait sur Asgard ?",
    "c": [
     "Odin",
     "Thor",
     "Loki",
     "Baldr"
    ],
    "a": "Odin"
   },
   {
    "q": "En quelle année le raid viking de Lindisfarne marque-t-il le début de l'ère viking ?",
    "a": "793"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_007",
  "cat": "histoire",
  "name": "La Chine ancienne",
  "level": "classique",
  "levels": [
   {
    "q": "Quel long ouvrage défensif la Chine ancienne a-t-elle construit contre les invasions ? La Grande ___ ?",
    "c": [
     "Muraille",
     "Digue",
     "Route",
     "Tour"
    ],
    "a": "Muraille"
   },
   {
    "q": "Quelle armée de statues garde le tombeau du premier empereur ? L'armée en terre ___ ?",
    "c": [
     "cuite",
     "or",
     "pierre",
     "bronze"
    ],
    "a": "cuite"
   },
   {
    "q": "Comment appelait-on les familles qui régnaient sur la Chine pendant des siècles ? Des ___ ?",
    "c": [
     "dynasties",
     "républiques",
     "tribus",
     "clans"
    ],
    "a": "dynasties"
   },
   {
    "q": "Quel penseur chinois, auteur des Entretiens, a fondé une grande philosophie morale ?",
    "c": [
     "Confucius",
     "Bouddha",
     "Lao Tseu",
     "Mencius"
    ],
    "a": "Confucius"
   },
   {
    "q": "Quelle précieuse étoffe, secret bien gardé, la Chine exportait-elle par une route célèbre ? La ___ ?",
    "c": [
     "soie",
     "laine",
     "toile",
     "dentelle"
    ],
    "a": "soie"
   },
   {
    "q": "Quel premier empereur a unifié la Chine en -221 ? Qin Shi ___ ?",
    "c": [
     "Huang",
     "Long",
     "Ping",
     "Kang"
    ],
    "a": "Huang"
   },
   {
    "q": "Quelle invention chinoise, faite de salpêtre, a servi aux feux d'artifice puis aux armes ? La ___ à canon ?",
    "c": [
     "poudre",
     "cendre",
     "sciure",
     "chaux"
    ],
    "a": "poudre"
   },
   {
    "q": "En quelle année, avant J.-C., Qin Shi Huang a-t-il unifié la Chine ? En -___ ?",
    "a": "221"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_008",
  "cat": "histoire",
  "name": "La Seconde Guerre mondiale",
  "level": "classique",
  "levels": [
   {
    "q": "En quelle année a commencé la Seconde Guerre mondiale ?",
    "a": "1939"
   },
   {
    "q": "Quel dictateur allemand a déclenché la Seconde Guerre mondiale ? Adolf ___ ?",
    "c": [
     "Hitler",
     "Mussolini",
     "Staline",
     "Franco"
    ],
    "a": "Hitler"
   },
   {
    "q": "Quel jour de 1944 les Alliés ont-ils débarqué en Normandie ? Le jour ___ (D-Day) ?",
    "c": [
     "J",
     "V",
     "H",
     "Z"
    ],
    "a": "J"
   },
   {
    "q": "Quelles deux villes japonaises ont subi la bombe atomique en 1945 ? Hiroshima et ___ ?",
    "c": [
     "Nagasaki",
     "Tokyo",
     "Kyoto",
     "Osaka"
    ],
    "a": "Nagasaki"
   },
   {
    "q": "Quel Premier ministre britannique a mené le pays contre l'Allemagne nazie ? Winston ___ ?",
    "c": [
     "Churchill",
     "Chamberlain",
     "Attlee",
     "Eden"
    ],
    "a": "Churchill"
   },
   {
    "q": "Quel général français a lancé l'appel du 18 juin 1940 à résister ? Charles de ___ ?",
    "c": [
     "Gaulle",
     "Lattre",
     "Leclerc",
     "Juin"
    ],
    "a": "Gaulle"
   },
   {
    "q": "Comment nomme-t-on le génocide des Juifs par les nazis ? La ___ (Shoah) ?",
    "c": [
     "Shoah",
     "purge",
     "rafle",
     "exode"
    ],
    "a": "Shoah"
   },
   {
    "q": "En quelle année, exactement, s'est terminée la Seconde Guerre mondiale ?",
    "a": "1945"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_009",
  "cat": "histoire",
  "name": "La Grèce antique",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle cité grecque, célèbre pour sa démocratie, était rivale de Sparte ?",
    "c": [
     "Athènes",
     "Thèbes",
     "Corinthe",
     "Argos"
    ],
    "a": "Athènes"
   },
   {
    "q": "Quelle cité grecque était réputée pour ses guerriers redoutables ?",
    "c": [
     "Sparte",
     "Athènes",
     "Delphes",
     "Milet"
    ],
    "a": "Sparte"
   },
   {
    "q": "Quel régime politique, « pouvoir du peuple », est né à Athènes ? La ___ ?",
    "c": [
     "démocratie",
     "monarchie",
     "tyrannie",
     "oligarchie"
    ],
    "a": "démocratie"
   },
   {
    "q": "Quel philosophe grec buvait la ciguë et enseignait par le questionnement ?",
    "c": [
     "Socrate",
     "Platon",
     "Aristote",
     "Thalès"
    ],
    "a": "Socrate"
   },
   {
    "q": "Quel jeune roi macédonien a conquis un immense empire jusqu'en Inde ? ___ le Grand ?",
    "c": [
     "Alexandre",
     "Philippe",
     "Léonidas",
     "Périclès"
    ],
    "a": "Alexandre"
   },
   {
    "q": "Quel poète aveugle aurait composé l'Iliade et l'Odyssée ?",
    "c": [
     "Homère",
     "Hésiode",
     "Sophocle",
     "Eschyle"
    ],
    "a": "Homère"
   },
   {
    "q": "Quelle bataille de 480 av. J.-C. vit 300 Spartiates résister aux Perses ? Les ___ ?",
    "c": [
     "Thermopyles",
     "Marathon",
     "Salamine",
     "Platées"
    ],
    "a": "Thermopyles"
   },
   {
    "q": "En quelle année, avant J.-C., eut lieu la bataille de Marathon contre les Perses ? En -___ ?",
    "a": "490"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_010",
  "cat": "histoire",
  "name": "L'Empire byzantin",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle ville était la capitale de l'Empire byzantin ?",
    "c": [
     "Constantinople",
     "Rome",
     "Athènes",
     "Antioche"
    ],
    "a": "Constantinople"
   },
   {
    "q": "De quel empire l'Empire byzantin est-il l'héritier oriental ? L'Empire ___ ?",
    "c": [
     "romain",
     "grec",
     "perse",
     "ottoman"
    ],
    "a": "romain"
   },
   {
    "q": "Quelle immense église-basilique était le joyau de Constantinople ? Sainte-___ ?",
    "c": [
     "Sophie",
     "Marie",
     "Anne",
     "Croix"
    ],
    "a": "Sophie"
   },
   {
    "q": "Quel grand empereur byzantin a fait rédiger un célèbre code de lois ?",
    "c": [
     "Justinien",
     "Constantin",
     "Basile",
     "Héraclius"
    ],
    "a": "Justinien"
   },
   {
    "q": "Quel nom portait Constantinople avant de devenir la capitale byzantine ?",
    "c": [
     "Byzance",
     "Nicée",
     "Éphèse",
     "Smyrne"
    ],
    "a": "Byzance"
   },
   {
    "q": "Quelle arme incendiaire secrète les Byzantins utilisaient-ils en mer ? Le feu ___ ?",
    "c": [
     "grégeois",
     "sacré",
     "noir",
     "royal"
    ],
    "a": "grégeois"
   },
   {
    "q": "Quel peuple a pris Constantinople en 1453, mettant fin à l'Empire ? Les ___ ?",
    "c": [
     "Ottomans",
     "Perses",
     "Arabes",
     "Mongols"
    ],
    "a": "Ottomans"
   },
   {
    "q": "En quelle année exacte Constantinople est-elle tombée, marquant la fin de l'Empire byzantin ?",
    "a": "1453"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_011",
  "cat": "histoire",
  "name": "La Guerre du Vietnam",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel pays d'Asie du Sud-Est s'est déroulée cette guerre ?",
    "c": [
     "Vietnam",
     "Corée",
     "Laos",
     "Cambodge"
    ],
    "a": "Vietnam"
   },
   {
    "q": "Quelle grande puissance occidentale s'est enlisée dans la guerre du Vietnam ? Les ___-Unis ?",
    "c": [
     "États",
     "Émirats",
     "Provinces",
     "Pays"
    ],
    "a": "États"
   },
   {
    "q": "En deux camps, le Nord communiste affrontait le ___ soutenu par les USA ?",
    "c": [
     "Sud",
     "Est",
     "Ouest",
     "Centre"
    ],
    "a": "Sud"
   },
   {
    "q": "Quel produit chimique défoliant les Américains ont-ils massivement répandu ? L'agent ___ ?",
    "c": [
     "orange",
     "bleu",
     "vert",
     "rouge"
    ],
    "a": "orange"
   },
   {
    "q": "Quel leader communiste vietnamien a donné son nom à l'ex-Saïgon ? Hô Chi ___ ?",
    "c": [
     "Minh",
     "Long",
     "Van",
     "Duc"
    ],
    "a": "Minh"
   },
   {
    "q": "Quelle offensive surprise du Têt en 1968 a marqué un tournant ? L'offensive du ___ ?",
    "c": [
     "Têt",
     "Nord",
     "Dragon",
     "Fleuve"
    ],
    "a": "Têt"
   },
   {
    "q": "Dans quelle ancienne capitale du Sud, tombée en 1975, la guerre s'est-elle achevée ?",
    "c": [
     "Saïgon",
     "Hanoï",
     "Hué",
     "Da Nang"
    ],
    "a": "Saïgon"
   },
   {
    "q": "En quelle année exacte la chute de Saïgon a-t-elle mis fin à la guerre du Vietnam ?",
    "a": "1975"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_012",
  "cat": "histoire",
  "name": "La Révolution industrielle",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel pays européen la Révolution industrielle a-t-elle commencé ? Le ___-Uni ?",
    "c": [
     "Royaume",
     "États",
     "Pays",
     "Émirats"
    ],
    "a": "Royaume"
   },
   {
    "q": "Quelle machine, alimentée au charbon, a été le moteur de cette révolution ? La machine à ___ ?",
    "c": [
     "vapeur",
     "eau",
     "vent",
     "air"
    ],
    "a": "vapeur"
   },
   {
    "q": "Quel combustible noir extrait des mines a alimenté l'industrie ? Le ___ ?",
    "c": [
     "charbon",
     "pétrole",
     "gaz",
     "bois"
    ],
    "a": "charbon"
   },
   {
    "q": "Quel nouveau moyen de transport sur rails a explosé au XIXe siècle ? Le ___ ?",
    "c": [
     "train",
     "avion",
     "métro",
     "tramway"
    ],
    "a": "train"
   },
   {
    "q": "Où travaillaient désormais des milliers d'ouvriers, dans de grands bâtiments ? Des ___ ?",
    "c": [
     "usines",
     "fermes",
     "églises",
     "châteaux"
    ],
    "a": "usines"
   },
   {
    "q": "Quel ingénieur écossais a grandement amélioré la machine à vapeur ? James ___ ?",
    "c": [
     "Watt",
     "Ford",
     "Bell",
     "Morse"
    ],
    "a": "Watt"
   },
   {
    "q": "Vers quelles villes, offrant du travail en usine, les populations ont-elles massivement migré ? L'___ (exode rural) ?",
    "c": [
     "ville",
     "campagne",
     "mer",
     "montagne"
    ],
    "a": "ville"
   },
   {
    "q": "En quelle année, environ, James Watt brevète-t-il sa machine à vapeur améliorée ?",
    "a": "1769"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_013",
  "cat": "histoire",
  "name": "Les Croisades",
  "level": "classique",
  "levels": [
   {
    "q": "Vers quelle ville sainte les croisés cherchaient-ils à marcher ?",
    "c": [
     "Jérusalem",
     "Rome",
     "La Mecque",
     "Constantinople"
    ],
    "a": "Jérusalem"
   },
   {
    "q": "Quel symbole religieux les croisés portaient-ils sur leurs vêtements ? Une ___ ?",
    "c": [
     "croix",
     "étoile",
     "lune",
     "colombe"
    ],
    "a": "croix"
   },
   {
    "q": "Quelle autorité religieuse a lancé la première croisade en 1095 ? Le ___ ?",
    "c": [
     "pape",
     "roi",
     "empereur",
     "sultan"
    ],
    "a": "pape"
   },
   {
    "q": "Quel sultan musulman a repris Jérusalem aux croisés en 1187 ?",
    "c": [
     "Saladin",
     "Soliman",
     "Baybars",
     "Nour ad-Din"
    ],
    "a": "Saladin"
   },
   {
    "q": "Quel ordre de moines-soldats protégeait les pèlerins ? Les ___ ?",
    "c": [
     "Templiers",
     "Bénédictins",
     "Franciscains",
     "Jésuites"
    ],
    "a": "Templiers"
   },
   {
    "q": "Quel roi de France, deux fois croisé et canonisé, est mort à Tunis ? ___ IX (Saint Louis) ?",
    "c": [
     "Louis",
     "Charles",
     "Philippe",
     "Henri"
    ],
    "a": "Louis"
   },
   {
    "q": "Combien de grandes croisades vers la Terre sainte compte-t-on traditionnellement ?",
    "a": "8"
   },
   {
    "q": "En quelle année le pape Urbain II a-t-il appelé à la première croisade au concile de Clermont ?",
    "a": "1095"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_014",
  "cat": "histoire",
  "name": "La Guerre de Cent Ans",
  "level": "classique",
  "levels": [
   {
    "q": "Quels deux royaumes s'affrontaient pendant la guerre de Cent Ans ? La France et l'___ ?",
    "c": [
     "Angleterre",
     "Espagne",
     "Écosse",
     "Bourgogne"
    ],
    "a": "Angleterre"
   },
   {
    "q": "Environ combien d'années a réellement duré ce long conflit ?",
    "c": [
     "116",
     "100",
     "50",
     "200"
    ],
    "a": "116"
   },
   {
    "q": "Quelle jeune héroïne française a bouté les Anglais hors d'Orléans ? Jeanne d'___ ?",
    "c": [
     "Arc",
     "Albret",
     "Anjou",
     "Aragon"
    ],
    "a": "Arc"
   },
   {
    "q": "Quelle arme anglaise, tirée à distance, a fait des ravages à Azincourt ? L'arc ___ (long) ?",
    "c": [
     "long",
     "court",
     "double",
     "royal"
    ],
    "a": "long"
   },
   {
    "q": "Dans quelle ville Jeanne d'Arc a-t-elle été brûlée vive en 1431 ?",
    "c": [
     "Rouen",
     "Orléans",
     "Reims",
     "Paris"
    ],
    "a": "Rouen"
   },
   {
    "q": "Quel supplice Jeanne d'Arc a-t-elle subi, condamnée pour hérésie ? Le ___ ?",
    "c": [
     "bûcher",
     "gibet",
     "cachot",
     "exil"
    ],
    "a": "bûcher"
   },
   {
    "q": "Dans quelle ville les rois de France étaient-ils sacrés, dont Charles VII grâce à Jeanne ?",
    "c": [
     "Reims",
     "Paris",
     "Lyon",
     "Tours"
    ],
    "a": "Reims"
   },
   {
    "q": "En quelle année a débuté la guerre de Cent Ans ?",
    "a": "1337"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_015",
  "cat": "histoire",
  "name": "La Chute de Berlin",
  "level": "classique",
  "levels": [
   {
    "q": "Quel mur séparait Berlin en deux jusqu'en 1989 ? Le mur de ___ ?",
    "c": [
     "Berlin",
     "Prague",
     "Fer",
     "Chine"
    ],
    "a": "Berlin"
   },
   {
    "q": "En quelle année le mur de Berlin est-il tombé ?",
    "a": "1989"
   },
   {
    "q": "Quelle ville allemande était coupée en deux par ce mur ?",
    "c": [
     "Berlin",
     "Munich",
     "Hambourg",
     "Cologne"
    ],
    "a": "Berlin"
   },
   {
    "q": "Berlin-Ouest était capitaliste, Berlin-Est était ___ ?",
    "c": [
     "communiste",
     "royaliste",
     "fasciste",
     "neutre"
    ],
    "a": "communiste"
   },
   {
    "q": "Quel célèbre point de passage entre les deux Berlins était surveillé ? Checkpoint ___ ?",
    "c": [
     "Charlie",
     "Bravo",
     "Delta",
     "Alpha"
    ],
    "a": "Charlie"
   },
   {
    "q": "Quelle porte monumentale, symbole de Berlin, s'est retrouvée près du mur ? La porte de ___ ?",
    "c": [
     "Brandebourg",
     "Berlin",
     "Prusse",
     "Saxe"
    ],
    "a": "Brandebourg"
   },
   {
    "q": "Quel dirigeant soviétique réformateur a laissé faire l'ouverture du mur ?",
    "c": [
     "Gorbatchev",
     "Brejnev",
     "Andropov",
     "Eltsine"
    ],
    "a": "Gorbatchev"
   },
   {
    "q": "En quelle année, un an après la chute du mur, l'Allemagne a-t-elle été officiellement réunifiée ?",
    "a": "1990"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_016",
  "cat": "histoire",
  "name": "La Conquête spatiale",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est le premier astre visité par l'homme, en 1969 ? La ___ ?",
    "c": [
     "Lune",
     "Mars",
     "Vénus",
     "Terre"
    ],
    "a": "Lune"
   },
   {
    "q": "Quel astronaute américain a marché le premier sur la Lune ? Neil ___ ?",
    "c": [
     "Armstrong",
     "Aldrin",
     "Glenn",
     "Collins"
    ],
    "a": "Armstrong"
   },
   {
    "q": "Quel premier satellite artificiel, soviétique, a été lancé en 1957 ?",
    "c": [
     "Spoutnik",
     "Apollo",
     "Vostok",
     "Mir"
    ],
    "a": "Spoutnik"
   },
   {
    "q": "Quel cosmonaute soviétique fut le premier homme dans l'espace en 1961 ? Youri ___ ?",
    "c": [
     "Gagarine",
     "Leonov",
     "Titov",
     "Komarov"
    ],
    "a": "Gagarine"
   },
   {
    "q": "Quel programme spatial américain a permis d'aller sur la Lune ? Le programme ___ ?",
    "c": [
     "Apollo",
     "Gemini",
     "Mercury",
     "Artemis"
    ],
    "a": "Apollo"
   },
   {
    "q": "Quelle agence spatiale américaine a organisé les missions lunaires ?",
    "c": [
     "NASA",
     "ESA",
     "CNES",
     "JAXA"
    ],
    "a": "NASA"
   },
   {
    "q": "Quel numéro portait la mission Apollo du premier alunissage ? Apollo ___ ?",
    "c": [
     "11",
     "13",
     "1",
     "17"
    ],
    "a": "11"
   },
   {
    "q": "En quelle année exacte l'homme a-t-il marché sur la Lune pour la première fois ?",
    "a": "1969"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_017",
  "cat": "histoire",
  "name": "L'Empire aztèque",
  "level": "classique",
  "levels": [
   {
    "q": "Sur le territoire de quel pays actuel se trouvait l'Empire aztèque ?",
    "c": [
     "Mexique",
     "Pérou",
     "Chili",
     "Brésil"
    ],
    "a": "Mexique"
   },
   {
    "q": "Comment s'appelait la capitale aztèque, bâtie sur un lac ?",
    "c": [
     "Tenochtitlan",
     "Cuzco",
     "Tikal",
     "Chichén"
    ],
    "a": "Tenochtitlan"
   },
   {
    "q": "Quel conquistador espagnol a détruit l'Empire aztèque ? Hernán ___ ?",
    "c": [
     "Cortés",
     "Pizarro",
     "Colomb",
     "Balboa"
    ],
    "a": "Cortés"
   },
   {
    "q": "Quel dernier empereur aztèque a été vaincu par les Espagnols ?",
    "c": [
     "Moctezuma",
     "Atahualpa",
     "Cuauhtémoc",
     "Nezahualcoyotl"
    ],
    "a": "Moctezuma"
   },
   {
    "q": "Quelle boisson sacrée, ancêtre du chocolat, les Aztèques appréciaient-ils ? Le ___ ?",
    "c": [
     "cacao",
     "café",
     "thé",
     "maté"
    ],
    "a": "cacao"
   },
   {
    "q": "Quels rituels sanglants les Aztèques pratiquaient-ils pour leurs dieux ? Des ___ humains ?",
    "c": [
     "sacrifices",
     "mariages",
     "banquets",
     "jeux"
    ],
    "a": "sacrifices"
   },
   {
    "q": "Quel dieu-serpent à plumes était vénéré par les Aztèques ?",
    "c": [
     "Quetzalcóatl",
     "Huitzilopochtli",
     "Tlaloc",
     "Xipe"
    ],
    "a": "Quetzalcóatl"
   },
   {
    "q": "En quelle année Cortés a-t-il pris Tenochtitlan, achevant l'Empire aztèque ?",
    "a": "1521"
   }
  ],
  "rw": true
 },
 {
  "id": "histoire_018",
  "cat": "histoire",
  "name": "La Révolution russe",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel pays s'est déroulée la révolution de 1917 ?",
    "c": [
     "Russie",
     "Chine",
     "Allemagne",
     "Pologne"
    ],
    "a": "Russie"
   },
   {
    "q": "Quel parti révolutionnaire, mené par Lénine, a pris le pouvoir ? Les ___ ?",
    "c": [
     "bolcheviks",
     "girondins",
     "jacobins",
     "mencheviks"
    ],
    "a": "bolcheviks"
   },
   {
    "q": "Quelle couleur symbolisait les révolutionnaires communistes ? Le ___ ?",
    "c": [
     "rouge",
     "bleu",
     "blanc",
     "vert"
    ],
    "a": "rouge"
   },
   {
    "q": "Quel dernier tsar de Russie a été renversé puis exécuté ? Nicolas ___ ?",
    "c": [
     "II",
     "Ier",
     "III",
     "IV"
    ],
    "a": "II"
   },
   {
    "q": "Quel révolutionnaire a dirigé la prise du pouvoir bolchevique en octobre 1917 ?",
    "c": [
     "Lénine",
     "Staline",
     "Trotski",
     "Kerenski"
    ],
    "a": "Lénine"
   },
   {
    "q": "Quel nouvel État est né de cette révolution en 1922 ? L'___ ?",
    "c": [
     "URSS",
     "CEI",
     "RDA",
     "OTAN"
    ],
    "a": "URSS"
   },
   {
    "q": "Dans quelle ville, alors capitale, la révolution d'Octobre a-t-elle éclaté ? ___ (ex-Saint-Pétersbourg) ?",
    "c": [
     "Petrograd",
     "Moscou",
     "Kiev",
     "Kazan"
    ],
    "a": "Petrograd"
   },
   {
    "q": "En quelle année exacte a eu lieu la révolution d'Octobre en Russie ?",
    "a": "1917"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_001",
  "cat": "sciences",
  "name": "L'Électricité",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle unité mesure-t-on la tension électrique ? Le ___ ?",
    "c": [
     "volt",
     "watt",
     "gramme",
     "mètre"
    ],
    "a": "volt"
   },
   {
    "q": "Quel phénomène électrique naturel zèbre le ciel pendant l'orage ? La ___ ?",
    "c": [
     "foudre",
     "pluie",
     "grêle",
     "brume"
    ],
    "a": "foudre"
   },
   {
    "q": "Quel savant américain a fait voler un cerf-volant sous l'orage ? Benjamin ___ ?",
    "c": [
     "Franklin",
     "Edison",
     "Tesla",
     "Volta"
    ],
    "a": "Franklin"
   },
   {
    "q": "Quel objet, inventé par Edison, a apporté la lumière électrique ? L'___ (à filament) ?",
    "c": [
     "ampoule",
     "bougie",
     "lampe à huile",
     "torche"
    ],
    "a": "ampoule"
   },
   {
    "q": "Comment appelle-t-on une particule chargée négativement qui circule dans un fil ? L'___ ?",
    "c": [
     "électron",
     "proton",
     "neutron",
     "photon"
    ],
    "a": "électron"
   },
   {
    "q": "Quel inventeur serbo-américain a développé le courant alternatif ? Nikola ___ ?",
    "c": [
     "Tesla",
     "Edison",
     "Marconi",
     "Bell"
    ],
    "a": "Tesla"
   },
   {
    "q": "Comment appelle-t-on l'opposition au passage du courant, mesurée en ohms ? La ___ ?",
    "c": [
     "résistance",
     "puissance",
     "tension",
     "charge"
    ],
    "a": "résistance"
   },
   {
    "q": "Quelle est, en km/s, la vitesse de propagation approximative de l'électricité dans un fil (proche de la lumière) ?",
    "a": "300000"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_002",
  "cat": "sciences",
  "name": "La Gravité",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle force fait tomber les objets vers le sol ? La ___ ?",
    "c": [
     "gravité",
     "lumière",
     "chaleur",
     "friction"
    ],
    "a": "gravité"
   },
   {
    "q": "Quel fruit serait tombé sur la tête de Newton selon la légende ? Une ___ ?",
    "c": [
     "pomme",
     "poire",
     "cerise",
     "orange"
    ],
    "a": "pomme"
   },
   {
    "q": "Quel savant anglais a formulé la loi de la gravitation universelle ? Isaac ___ ?",
    "c": [
     "Newton",
     "Einstein",
     "Galilée",
     "Hooke"
    ],
    "a": "Newton"
   },
   {
    "q": "Quel astre retient la Lune en orbite grâce à sa gravité ? La ___ ?",
    "c": [
     "Terre",
     "Soleil",
     "Mars",
     "Vénus"
    ],
    "a": "Terre"
   },
   {
    "q": "Comment appelle-t-on l'état de flottement des astronautes, où la gravité semble absente ? L'___ ?",
    "c": [
     "apesanteur",
     "lévitation",
     "flottaison",
     "gravitation"
    ],
    "a": "apesanteur"
   },
   {
    "q": "Sur quel astre la gravité est-elle environ six fois plus faible que sur Terre ? La ___ ?",
    "c": [
     "Lune",
     "Mars",
     "Vénus",
     "Jupiter"
    ],
    "a": "Lune"
   },
   {
    "q": "Quel savant italien aurait lâché des masses du haut de la tour de Pise ?",
    "c": [
     "Galilée",
     "Newton",
     "Copernic",
     "Kepler"
    ],
    "a": "Galilée"
   },
   {
    "q": "Quelle est, en m/s², la valeur approximative de l'accélération de la pesanteur sur Terre ?",
    "a": "9.81"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_003",
  "cat": "sciences",
  "name": "La Théorie de l'évolution",
  "level": "classique",
  "levels": [
   {
    "q": "Quel naturaliste anglais a formulé la théorie de l'évolution ? Charles ___ ?",
    "c": [
     "Darwin",
     "Newton",
     "Mendel",
     "Lamarck"
    ],
    "a": "Darwin"
   },
   {
    "q": "Selon Darwin, de quel animal l'homme est-il un lointain cousin ? Le ___ ?",
    "c": [
     "singe",
     "chien",
     "cheval",
     "loup"
    ],
    "a": "singe"
   },
   {
    "q": "Comment appelle-t-on la survie des mieux adaptés ? La ___ naturelle ?",
    "c": [
     "sélection",
     "création",
     "génération",
     "mutation"
    ],
    "a": "sélection"
   },
   {
    "q": "Sur quel archipel Darwin a-t-il observé pinsons et tortues géantes ? Les ___ ?",
    "c": [
     "Galápagos",
     "Canaries",
     "Açores",
     "Baléares"
    ],
    "a": "Galápagos"
   },
   {
    "q": "Sur quel bateau Darwin a-t-il fait son grand voyage d'exploration ? Le ___ ?",
    "c": [
     "Beagle",
     "Endeavour",
     "Victory",
     "Bounty"
    ],
    "a": "Beagle"
   },
   {
    "q": "Comment appelle-t-on un changement aléatoire dans le matériel génétique, moteur de l'évolution ? Une ___ ?",
    "c": [
     "mutation",
     "sélection",
     "adaptation",
     "digestion"
    ],
    "a": "mutation"
   },
   {
    "q": "Quel savant tchèque, avec ses pois, a fondé la génétique complétant Darwin ?",
    "c": [
     "Mendel",
     "Pasteur",
     "Watson",
     "Crick"
    ],
    "a": "Mendel"
   },
   {
    "q": "En quelle année Darwin a-t-il publié « L'Origine des espèces » ?",
    "a": "1859"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_004",
  "cat": "sciences",
  "name": "La Radioactivité",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle célèbre scientifique franco-polonaise a étudié la radioactivité ? Marie ___ ?",
    "c": [
     "Curie",
     "Lavoisier",
     "Meitner",
     "Joliot"
    ],
    "a": "Curie"
   },
   {
    "q": "Combien de prix Nobel Marie Curie a-t-elle remportés ?",
    "a": "2"
   },
   {
    "q": "Quel élément radioactif, découvert par Marie Curie, porte le nom de son pays natal ?",
    "c": [
     "polonium",
     "radium",
     "uranium",
     "césium"
    ],
    "a": "polonium"
   },
   {
    "q": "Quel autre élément radioactif Marie Curie a-t-elle découvert, qui brille dans le noir ?",
    "c": [
     "radium",
     "plomb",
     "fer",
     "zinc"
    ],
    "a": "radium"
   },
   {
    "q": "Quel combustible radioactif alimente les centrales nucléaires ? L'___ ?",
    "c": [
     "uranium",
     "charbon",
     "pétrole",
     "hydrogène"
    ],
    "a": "uranium"
   },
   {
    "q": "Comment appelle-t-on le temps au bout duquel la radioactivité est divisée par deux ? La ___ (période) ?",
    "c": [
     "demi-vie",
     "durée",
     "phase",
     "constante"
    ],
    "a": "demi-vie"
   },
   {
    "q": "Quel physicien français a découvert la radioactivité naturelle avec l'uranium ? Henri ___ ?",
    "c": [
     "Becquerel",
     "Ampère",
     "Coulomb",
     "Fresnel"
    ],
    "a": "Becquerel"
   },
   {
    "q": "En quelle année, exactement, Henri Becquerel a-t-il découvert la radioactivité ?",
    "a": "1896"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_005",
  "cat": "sciences",
  "name": "Les trous noirs",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle couleur, par définition, apparaît un trou noir ?",
    "c": [
     "noir",
     "blanc",
     "rouge",
     "bleu"
    ],
    "a": "noir"
   },
   {
    "q": "Qu'est-ce qu'un trou noir absorbe et dont rien ne s'échappe, même la ___ ?",
    "c": [
     "lumière",
     "chaleur",
     "gravité",
     "matière"
    ],
    "a": "lumière"
   },
   {
    "q": "Quel physicien britannique en fauteuil a théorisé le rayonnement des trous noirs ? Stephen ___ ?",
    "c": [
     "Hawking",
     "Newton",
     "Penrose",
     "Thorne"
    ],
    "a": "Hawking"
   },
   {
    "q": "De la mort de quel type d'astre naît souvent un trou noir ? Une ___ massive ?",
    "c": [
     "étoile",
     "planète",
     "comète",
     "lune"
    ],
    "a": "étoile"
   },
   {
    "q": "Comment appelle-t-on la frontière d'un trou noir, point de non-retour ? L'horizon des ___ ?",
    "c": [
     "événements",
     "étoiles",
     "temps",
     "mondes"
    ],
    "a": "événements"
   },
   {
    "q": "Quel trou noir supermassif se cache au centre de notre galaxie ? Sagittarius ___ ?",
    "c": [
     "A",
     "B",
     "X",
     "Z"
    ],
    "a": "A"
   },
   {
    "q": "Comment appelle-t-on le point central de densité infinie d'un trou noir ? La ___ ?",
    "c": [
     "singularité",
     "nébuleuse",
     "supernova",
     "galaxie"
    ],
    "a": "singularité"
   },
   {
    "q": "En quelle année a été publiée la toute première image d'un trou noir (M87) ?",
    "a": "2019"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_006",
  "cat": "sciences",
  "name": "La Photosynthèse",
  "level": "classique",
  "levels": [
   {
    "q": "Quels êtres vivants pratiquent la photosynthèse ? Les ___ ?",
    "c": [
     "plantes",
     "animaux",
     "champignons",
     "virus"
    ],
    "a": "plantes"
   },
   {
    "q": "Quel astre fournit l'énergie nécessaire à la photosynthèse ? Le ___ ?",
    "c": [
     "Soleil",
     "Lune",
     "Mars",
     "Vénus"
    ],
    "a": "Soleil"
   },
   {
    "q": "Quel gaz les plantes rejettent-elles grâce à la photosynthèse ? L'___ ?",
    "c": [
     "oxygène",
     "hydrogène",
     "azote",
     "méthane"
    ],
    "a": "oxygène"
   },
   {
    "q": "Quel pigment vert des feuilles capte la lumière ? La ___ ?",
    "c": [
     "chlorophylle",
     "mélanine",
     "kératine",
     "hémoglobine"
    ],
    "a": "chlorophylle"
   },
   {
    "q": "Quel gaz, expiré par les humains, les plantes absorbent-elles ? Le dioxyde de ___ ?",
    "c": [
     "carbone",
     "soufre",
     "azote",
     "chlore"
    ],
    "a": "carbone"
   },
   {
    "q": "Dans quelle partie de la plante se déroule surtout la photosynthèse ? Les ___ ?",
    "c": [
     "feuilles",
     "racines",
     "graines",
     "fleurs"
    ],
    "a": "feuilles"
   },
   {
    "q": "Quel sucre les plantes fabriquent-elles comme nourriture ? Le ___ (glucose) ?",
    "c": [
     "glucose",
     "fructose",
     "lactose",
     "amidon"
    ],
    "a": "glucose"
   },
   {
    "q": "Quel pourcentage, environ, de l'atmosphère terrestre est constitué d'oxygène issu (en partie) de la photosynthèse ?",
    "a": "21"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_007",
  "cat": "sciences",
  "name": "La Relativité",
  "level": "classique",
  "levels": [
   {
    "q": "Quel physicien génial à la coiffure ébouriffée a créé la relativité ? Albert ___ ?",
    "c": [
     "Einstein",
     "Newton",
     "Bohr",
     "Planck"
    ],
    "a": "Einstein"
   },
   {
    "q": "Quelle célèbre équation d'Einstein relie énergie et masse ? E = m___ ? (c au carré)",
    "c": [
     "c²",
     "g²",
     "v²",
     "t²"
    ],
    "a": "c²"
   },
   {
    "q": "Que représente le « c » dans la formule E=mc² ? La vitesse de la ___ ?",
    "c": [
     "lumière",
     "gravité",
     "chaleur",
     "matière"
    ],
    "a": "lumière"
   },
   {
    "q": "Selon Einstein, quelle grandeur peut se dilater si on va très vite ? Le ___ ?",
    "c": [
     "temps",
     "poids",
     "volume",
     "goût"
    ],
    "a": "temps"
   },
   {
    "q": "Quelle vitesse est une limite infranchissable dans l'univers ? La vitesse de la ___ ?",
    "c": [
     "lumière",
     "gravité",
     "onde",
     "pensée"
    ],
    "a": "lumière"
   },
   {
    "q": "Selon la relativité générale, quel tissu la masse déforme-t-elle ? L'espace-___ ?",
    "c": [
     "temps",
     "matière",
     "vide",
     "champ"
    ],
    "a": "temps"
   },
   {
    "q": "En quelle pays Einstein a-t-il émigré fuyant les nazis ? Les ___-Unis ?",
    "c": [
     "États",
     "Émirats",
     "Pays",
     "Provinces"
    ],
    "a": "États"
   },
   {
    "q": "En quelle année Einstein a-t-il publié sa théorie de la relativité restreinte ?",
    "a": "1905"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_008",
  "cat": "sciences",
  "name": "L'ADN",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle forme géométrique célèbre a la molécule d'ADN ? La double ___ ?",
    "c": [
     "hélice",
     "spirale",
     "boucle",
     "vague"
    ],
    "a": "hélice"
   },
   {
    "q": "Que porte l'ADN, transmis des parents aux enfants ? Les ___ (informations) ?",
    "c": [
     "gènes",
     "cellules",
     "organes",
     "muscles"
    ],
    "a": "gènes"
   },
   {
    "q": "Dans quelle partie de la cellule l'ADN est-il rangé ? Le ___ ?",
    "c": [
     "noyau",
     "cytoplasme",
     "membrane",
     "ribosome"
    ],
    "a": "noyau"
   },
   {
    "q": "Combien de lettres (bases) composent l'alphabet de l'ADN : A, T, G et ___ ?",
    "c": [
     "C",
     "B",
     "D",
     "X"
    ],
    "a": "C"
   },
   {
    "q": "Quels deux savants ont décrit la structure de l'ADN en 1953 ? Watson et ___ ?",
    "c": [
     "Crick",
     "Franklin",
     "Wilkins",
     "Pauling"
    ],
    "a": "Crick"
   },
   {
    "q": "À quoi sert l'analyse ADN en enquête criminelle ? À ___ une personne ?",
    "c": [
     "identifier",
     "soigner",
     "nourrir",
     "cacher"
    ],
    "a": "identifier"
   },
   {
    "q": "Quelle scientifique, par ses clichés aux rayons X, a été clé dans la découverte de l'ADN ? Rosalind ___ ?",
    "c": [
     "Franklin",
     "Curie",
     "Meitner",
     "Lovelace"
    ],
    "a": "Franklin"
   },
   {
    "q": "Combien de paires de chromosomes possède une cellule humaine normale ?",
    "a": "23"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_009",
  "cat": "sciences",
  "name": "Les volcans",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle matière brûlante et liquide sort d'un volcan en éruption ? La ___ ?",
    "c": [
     "lave",
     "boue",
     "neige",
     "sève"
    ],
    "a": "lave"
   },
   {
    "q": "Comment appelle-t-on le trou au sommet d'un volcan ? Le ___ ?",
    "c": [
     "cratère",
     "tunnel",
     "puits",
     "gouffre"
    ],
    "a": "cratère"
   },
   {
    "q": "Quelle poussière volcanique retombe du ciel après une éruption ? Les ___ ?",
    "c": [
     "cendres",
     "flocons",
     "graines",
     "gouttes"
    ],
    "a": "cendres"
   },
   {
    "q": "Comment appelle-t-on la roche en fusion tant qu'elle est sous terre ? Le ___ ?",
    "c": [
     "magma",
     "granit",
     "basalte",
     "silex"
    ],
    "a": "magma"
   },
   {
    "q": "Quelle ville romaine a été ensevelie par le Vésuve en l'an 79 ?",
    "c": [
     "Pompéi",
     "Rome",
     "Naples",
     "Ostie"
    ],
    "a": "Pompéi"
   },
   {
    "q": "Comment appelle-t-on un volcan qui n'est plus en activité ? Un volcan ___ ?",
    "c": [
     "éteint",
     "endormi",
     "mort",
     "gelé"
    ],
    "a": "éteint"
   },
   {
    "q": "Dans quel océan se trouve la fameuse « ceinture de feu » aux nombreux volcans ? Le ___ ?",
    "c": [
     "Pacifique",
     "Atlantique",
     "Indien",
     "Arctique"
    ],
    "a": "Pacifique"
   },
   {
    "q": "À quelle température, en degrés, environ, peut atteindre la lave la plus chaude ?",
    "a": "1200"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_010",
  "cat": "sciences",
  "name": "La Mécanique quantique",
  "level": "classique",
  "levels": [
   {
    "q": "La mécanique quantique décrit le monde de l'infiniment ___ ?",
    "c": [
     "petit",
     "grand",
     "chaud",
     "vieux"
    ],
    "a": "petit"
   },
   {
    "q": "Quelle particule de lumière est étudiée en physique quantique ? Le ___ ?",
    "c": [
     "photon",
     "neutron",
     "boson",
     "gluon"
    ],
    "a": "photon"
   },
   {
    "q": "Quel célèbre chat de pensée est à la fois mort et vivant ? Le chat de ___ ?",
    "c": [
     "Schrödinger",
     "Einstein",
     "Newton",
     "Pavlov"
    ],
    "a": "Schrödinger"
   },
   {
    "q": "Comment appelle-t-on le fait qu'une particule soit à plusieurs états à la fois ? La ___ ?",
    "c": [
     "superposition",
     "gravitation",
     "évaporation",
     "condensation"
    ],
    "a": "superposition"
   },
   {
    "q": "Quel physicien danois a modélisé l'atome avec ses orbites d'électrons ? Niels ___ ?",
    "c": [
     "Bohr",
     "Planck",
     "Fermi",
     "Dirac"
    ],
    "a": "Bohr"
   },
   {
    "q": "Quel principe d'Heisenberg dit qu'on ne peut tout connaître à la fois ? Le principe d'___ ?",
    "c": [
     "incertitude",
     "certitude",
     "relativité",
     "causalité"
    ],
    "a": "incertitude"
   },
   {
    "q": "Comment appelle-t-on le lien mystérieux entre deux particules à distance ? L'___ quantique ?",
    "c": [
     "intrication",
     "attraction",
     "fusion",
     "collision"
    ],
    "a": "intrication"
   },
   {
    "q": "En quelle année Max Planck pose-t-il les bases de la théorie quantique ?",
    "a": "1900"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_011",
  "cat": "sciences",
  "name": "Le système solaire",
  "level": "classique",
  "levels": [
   {
    "q": "Quel astre est au centre du système solaire ? Le ___ ?",
    "c": [
     "Soleil",
     "Terre",
     "Lune",
     "Jupiter"
    ],
    "a": "Soleil"
   },
   {
    "q": "Combien de planètes compte le système solaire depuis 2006 ?",
    "a": "8"
   },
   {
    "q": "Quelle est la planète rouge, voisine de la Terre ?",
    "c": [
     "Mars",
     "Vénus",
     "Jupiter",
     "Saturne"
    ],
    "a": "Mars"
   },
   {
    "q": "Quelle planète géante est entourée d'anneaux célèbres ?",
    "c": [
     "Saturne",
     "Jupiter",
     "Uranus",
     "Neptune"
    ],
    "a": "Saturne"
   },
   {
    "q": "Quelle est la plus grosse planète du système solaire ?",
    "c": [
     "Jupiter",
     "Saturne",
     "Terre",
     "Neptune"
    ],
    "a": "Jupiter"
   },
   {
    "q": "Quel astre, autrefois 9e planète, a été rétrogradé en planète naine ?",
    "c": [
     "Pluton",
     "Cérès",
     "Éris",
     "Charon"
    ],
    "a": "Pluton"
   },
   {
    "q": "Quelle planète, la plus proche du Soleil, est aussi la plus petite ?",
    "c": [
     "Mercure",
     "Vénus",
     "Mars",
     "Terre"
    ],
    "a": "Mercure"
   },
   {
    "q": "Combien de minutes met, environ, la lumière du Soleil pour atteindre la Terre ?",
    "a": "8"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_012",
  "cat": "sciences",
  "name": "Les aimants",
  "level": "classique",
  "levels": [
   {
    "q": "Quel métal courant est attiré par un aimant ? Le ___ ?",
    "c": [
     "fer",
     "bois",
     "verre",
     "plastique"
    ],
    "a": "fer"
   },
   {
    "q": "Combien de pôles possède un aimant ?",
    "a": "2"
   },
   {
    "q": "Quels sont les deux pôles d'un aimant : le nord et le ___ ?",
    "c": [
     "sud",
     "est",
     "ouest",
     "centre"
    ],
    "a": "sud"
   },
   {
    "q": "Deux pôles identiques d'aimants se repoussent, deux pôles opposés s'___ ?",
    "c": [
     "attirent",
     "ignorent",
     "cassent",
     "fondent"
    ],
    "a": "attirent"
   },
   {
    "q": "Quel instrument à aiguille aimantée indique le nord ? La ___ ?",
    "c": [
     "boussole",
     "horloge",
     "règle",
     "loupe"
    ],
    "a": "boussole"
   },
   {
    "q": "Quelle planète se comporte comme un gigantesque aimant avec ses pôles ? La ___ ?",
    "c": [
     "Terre",
     "Lune",
     "Mars",
     "Vénus"
    ],
    "a": "Terre"
   },
   {
    "q": "Comment appelle-t-on la zone d'influence invisible autour d'un aimant ? Le ___ magnétique ?",
    "c": [
     "champ",
     "trou",
     "flux",
     "pôle"
    ],
    "a": "champ"
   },
   {
    "q": "Combien de gauss, environ, vaut le champ magnétique moyen à la surface de la Terre ? (0,5)",
    "a": "0.5"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_013",
  "cat": "sciences",
  "name": "La Thermodynamique",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle grandeur, liée au chaud et au froid, la thermodynamique étudie-t-elle ? La ___ ?",
    "c": [
     "chaleur",
     "lumière",
     "masse",
     "vitesse"
    ],
    "a": "chaleur"
   },
   {
    "q": "Dans quelle unité mesure-t-on couramment la température en France ? Le degré ___ ?",
    "c": [
     "Celsius",
     "Fahrenheit",
     "Newton",
     "Pascal"
    ],
    "a": "Celsius"
   },
   {
    "q": "À quelle température, en °C, l'eau gèle-t-elle ?",
    "a": "0"
   },
   {
    "q": "À quelle température, en °C, l'eau bout-elle au niveau de la mer ?",
    "a": "100"
   },
   {
    "q": "Comment appelle-t-on la température la plus basse possible ? Le zéro ___ ?",
    "c": [
     "absolu",
     "relatif",
     "glacial",
     "polaire"
    ],
    "a": "absolu"
   },
   {
    "q": "Quelle grandeur mesure le désordre d'un système en thermodynamique ? L'___ ?",
    "c": [
     "entropie",
     "énergie",
     "enthalpie",
     "pression"
    ],
    "a": "entropie"
   },
   {
    "q": "Vers quel objet la chaleur se déplace-t-elle spontanément : du chaud vers le ___ ?",
    "c": [
     "froid",
     "chaud",
     "vide",
     "haut"
    ],
    "a": "froid"
   },
   {
    "q": "Quelle est la valeur du zéro absolu, en degrés Celsius (arrondi) ?",
    "a": "-273"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_014",
  "cat": "sciences",
  "name": "Les atomes",
  "level": "classique",
  "levels": [
   {
    "q": "De quoi tous les objets et êtres vivants sont-ils faits ? D'___ ?",
    "c": [
     "atomes",
     "cellules",
     "molécules",
     "pixels"
    ],
    "a": "atomes"
   },
   {
    "q": "Comment appelle-t-on le centre d'un atome ? Le ___ ?",
    "c": [
     "noyau",
     "cœur",
     "point",
     "pôle"
    ],
    "a": "noyau"
   },
   {
    "q": "Quelle particule chargée négativement tourne autour du noyau ? L'___ ?",
    "c": [
     "électron",
     "proton",
     "neutron",
     "photon"
    ],
    "a": "électron"
   },
   {
    "q": "Quelle particule du noyau porte une charge positive ? Le ___ ?",
    "c": [
     "proton",
     "électron",
     "neutron",
     "boson"
    ],
    "a": "proton"
   },
   {
    "q": "Quel élément chimique, le plus simple et le plus léger, n'a qu'un proton ? L'___ ?",
    "c": [
     "hydrogène",
     "hélium",
     "oxygène",
     "carbone"
    ],
    "a": "hydrogène"
   },
   {
    "q": "Quel tableau classe tous les éléments chimiques ? Le tableau ___ (de Mendeleïev) ?",
    "c": [
     "périodique",
     "logique",
     "numérique",
     "carré"
    ],
    "a": "périodique"
   },
   {
    "q": "Comment appelle-t-on la particule neutre du noyau ? Le ___ ?",
    "c": [
     "neutron",
     "proton",
     "électron",
     "gluon"
    ],
    "a": "neutron"
   },
   {
    "q": "Combien d'éléments chimiques, environ, le tableau périodique compte-t-il aujourd'hui ?",
    "a": "118"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_015",
  "cat": "sciences",
  "name": "Les virus",
  "level": "classique",
  "levels": [
   {
    "q": "Un virus est-il plus petit ou plus grand qu'une bactérie ?",
    "c": [
     "plus petit",
     "plus grand",
     "identique",
     "égal"
    ],
    "a": "plus petit"
   },
   {
    "q": "Quel virus a provoqué la pandémie mondiale de 2020 ? La ___ (Covid) ?",
    "c": [
     "Covid",
     "grippe",
     "peste",
     "rage"
    ],
    "a": "Covid"
   },
   {
    "q": "Comment appelle-t-on une injection qui protège contre un virus ? Un ___ ?",
    "c": [
     "vaccin",
     "sérum",
     "remède",
     "antibiotique"
    ],
    "a": "vaccin"
   },
   {
    "q": "Quel savant français a mis au point le vaccin contre la rage ? Louis ___ ?",
    "c": [
     "Pasteur",
     "Curie",
     "Lavoisier",
     "Ampère"
    ],
    "a": "Pasteur"
   },
   {
    "q": "Quel virus, transmis sexuellement, cause le sida ? Le ___ ?",
    "c": [
     "VIH",
     "VHB",
     "HPV",
     "EBV"
    ],
    "a": "VIH"
   },
   {
    "q": "Un virus a-t-il besoin d'une cellule hôte pour se multiplier ? Oui ou non ?",
    "c": [
     "oui",
     "non",
     "parfois",
     "jamais"
    ],
    "a": "oui"
   },
   {
    "q": "Quelle maladie virale, éradiquée en 1980 grâce au vaccin, faisait des ravages ? La ___ ?",
    "c": [
     "variole",
     "rougeole",
     "grippe",
     "polio"
    ],
    "a": "variole"
   },
   {
    "q": "Quelle taille, en nanomètres, environ, mesure un virus typique comme la grippe ?",
    "a": "100"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_016",
  "cat": "sciences",
  "name": "Les nombres premiers",
  "level": "classique",
  "levels": [
   {
    "q": "Un nombre premier n'est divisible que par 1 et par ___ ?",
    "c": [
     "lui-même",
     "zéro",
     "deux",
     "dix"
    ],
    "a": "lui-même"
   },
   {
    "q": "Quel est le plus petit nombre premier ?",
    "a": "2"
   },
   {
    "q": "Quel est le seul nombre premier qui soit pair ?",
    "a": "2"
   },
   {
    "q": "Le nombre 9 est-il premier ? (répondez oui ou non)",
    "c": [
     "non",
     "oui",
     "parfois",
     "jamais"
    ],
    "a": "non"
   },
   {
    "q": "Quel mathématicien grec a prouvé qu'il existe une infinité de nombres premiers ?",
    "c": [
     "Euclide",
     "Pythagore",
     "Thalès",
     "Archimède"
    ],
    "a": "Euclide"
   },
   {
    "q": "Quel est le nombre premier juste après 7 ?",
    "a": "11"
   },
   {
    "q": "Comment appelle-t-on deux premiers qui se suivent à 2 d'écart, comme 11 et 13 ? Des premiers ___ ?",
    "c": [
     "jumeaux",
     "voisins",
     "frères",
     "amis"
    ],
    "a": "jumeaux"
   },
   {
    "q": "Combien de chiffres compte le plus grand nombre premier connu (découvert en 2018, en millions arrondi) ?",
    "a": "24000000"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_017",
  "cat": "sciences",
  "name": "La Fission nucléaire",
  "level": "classique",
  "levels": [
   {
    "q": "Que fait-on subir au noyau d'un atome lors de la fission ? On le ___ (casse) ?",
    "c": [
     "casse",
     "colle",
     "chauffe",
     "peint"
    ],
    "a": "casse"
   },
   {
    "q": "Quel type de centrale produit de l'électricité grâce à la fission ? Une centrale ___ ?",
    "c": [
     "nucléaire",
     "solaire",
     "éolienne",
     "à charbon"
    ],
    "a": "nucléaire"
   },
   {
    "q": "Quel élément lourd est le combustible classique de la fission ? L'___ ?",
    "c": [
     "uranium",
     "carbone",
     "hélium",
     "fer"
    ],
    "a": "uranium"
   },
   {
    "q": "Comment appelle-t-on l'enchaînement de fissions successives ? La réaction en ___ ?",
    "c": [
     "chaîne",
     "boucle",
     "série",
     "cercle"
    ],
    "a": "chaîne"
   },
   {
    "q": "Quelle arme dévastatrice repose sur la fission nucléaire ? La bombe ___ ?",
    "c": [
     "atomique",
     "chimique",
     "sonique",
     "solaire"
    ],
    "a": "atomique"
   },
   {
    "q": "Dans quelle ville d'Ukraine a eu lieu la catastrophe nucléaire de 1986 ?",
    "c": [
     "Tchernobyl",
     "Kiev",
     "Fukushima",
     "Odessa"
    ],
    "a": "Tchernobyl"
   },
   {
    "q": "Quelle physicienne a coexpliqué la fission nucléaire, mais fut oubliée du Nobel ? Lise ___ ?",
    "c": [
     "Meitner",
     "Curie",
     "Franklin",
     "Noether"
    ],
    "a": "Meitner"
   },
   {
    "q": "En quelle année la fission nucléaire a-t-elle été découverte par Hahn et Meitner ?",
    "a": "1938"
   }
  ],
  "rw": true
 },
 {
  "id": "sciences_018",
  "cat": "sciences",
  "name": "Les cristaux",
  "level": "classique",
  "levels": [
   {
    "q": "Quel cristal transparent et dur est le plus précieux ? Le ___ ?",
    "c": [
     "diamant",
     "charbon",
     "verre",
     "sel"
    ],
    "a": "diamant"
   },
   {
    "q": "De quoi le diamant est-il fait, comme le charbon ? De ___ ?",
    "c": [
     "carbone",
     "silicium",
     "fer",
     "or"
    ],
    "a": "carbone"
   },
   {
    "q": "Quel cristal blanc, comestible, sale nos plats ? Le ___ ?",
    "c": [
     "sel",
     "sucre",
     "sable",
     "craie"
    ],
    "a": "sel"
   },
   {
    "q": "Comment appelle-t-on la forme régulière et géométrique d'un cristal ? Sa ___ ?",
    "c": [
     "structure",
     "couleur",
     "odeur",
     "masse"
    ],
    "a": "structure"
   },
   {
    "q": "Quel cristal violet est une pierre semi-précieuse très prisée ? L'___ ?",
    "c": [
     "améthyste",
     "émeraude",
     "rubis",
     "saphir"
    ],
    "a": "améthyste"
   },
   {
    "q": "Quel cristal de glace tombe du ciel en hiver, toujours unique ? Le ___ de neige ?",
    "c": [
     "flocon",
     "grêlon",
     "givre",
     "cristal"
    ],
    "a": "flocon"
   },
   {
    "q": "Quelle science étudie la structure des cristaux ? La ___ ?",
    "c": [
     "cristallographie",
     "minéralogie",
     "géologie",
     "chimie"
    ],
    "a": "cristallographie"
   },
   {
    "q": "Combien de systèmes cristallins fondamentaux les scientifiques distinguent-ils ?",
    "a": "7"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_001",
  "cat": "arts",
  "name": "La Peinture",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quel outil à poils applique-t-on la peinture sur la toile ? Un ___ ?",
    "c": [
     "pinceau",
     "marteau",
     "ciseau",
     "crayon"
    ],
    "a": "pinceau"
   },
   {
    "q": "Quel tableau de Léonard de Vinci, au sourire mystérieux, est le plus célèbre ? La ___ ?",
    "c": [
     "Joconde",
     "Cène",
     "Vénus",
     "Ronde"
    ],
    "a": "Joconde"
   },
   {
    "q": "Dans quel musée parisien la Joconde est-elle exposée ? Le ___ ?",
    "c": [
     "Louvre",
     "Orsay",
     "Pompidou",
     "Rodin"
    ],
    "a": "Louvre"
   },
   {
    "q": "Quel peintre néerlandais s'est coupé l'oreille ? Vincent van ___ ?",
    "c": [
     "Gogh",
     "Rijn",
     "Dyck",
     "Eyck"
    ],
    "a": "Gogh"
   },
   {
    "q": "Quel mouvement de Monet peint la lumière et les impressions ? L'___ ?",
    "c": [
     "impressionnisme",
     "cubisme",
     "réalisme",
     "baroque"
    ],
    "a": "impressionnisme"
   },
   {
    "q": "Quel peintre espagnol a cofondé le cubisme ?",
    "c": [
     "Picasso",
     "Dalí",
     "Miró",
     "Vélasquez"
    ],
    "a": "Picasso"
   },
   {
    "q": "Quelle peinture murale sur enduit frais, comme à la Sixtine, porte un nom italien ? La ___ ?",
    "c": [
     "fresque",
     "aquarelle",
     "gouache",
     "esquisse"
    ],
    "a": "fresque"
   },
   {
    "q": "Sur quel support la Joconde a-t-elle été peinte : quel bois ? Le ___ ?",
    "c": [
     "peuplier",
     "chêne",
     "noyer",
     "pin"
    ],
    "a": "peuplier"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_002",
  "cat": "arts",
  "name": "La Sculpture",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle matière blanche et noble sculpte-t-on souvent des statues ? Le ___ ?",
    "c": [
     "marbre",
     "carton",
     "tissu",
     "verre"
    ],
    "a": "marbre"
   },
   {
    "q": "Quelle célèbre statue nue de David a été sculptée par Michel-Ange ? Le ___ ?",
    "c": [
     "David",
     "Moïse",
     "Apollon",
     "Hercule"
    ],
    "a": "David"
   },
   {
    "q": "Quel sculpteur français a créé « Le Penseur » ? Auguste ___ ?",
    "c": [
     "Rodin",
     "Camille",
     "Bourdelle",
     "Maillol"
    ],
    "a": "Rodin"
   },
   {
    "q": "Quel outil, frappé au marteau, sert à tailler la pierre ? Le ___ ?",
    "c": [
     "ciseau",
     "pinceau",
     "crayon",
     "rabot"
    ],
    "a": "ciseau"
   },
   {
    "q": "De quel métal, coulé dans un moule, fait-on de nombreuses statues ? Le ___ ?",
    "c": [
     "bronze",
     "papier",
     "cuir",
     "sucre"
    ],
    "a": "bronze"
   },
   {
    "q": "Quelle statue grecque des bras manquants représente une déesse ? La Vénus de ___ ?",
    "c": [
     "Milo",
     "Samos",
     "Délos",
     "Naxos"
    ],
    "a": "Milo"
   },
   {
    "q": "Comment appelle-t-on une sculpture qui ne se détache que partiellement du fond ? Un bas-___ ?",
    "c": [
     "relief",
     "socle",
     "buste",
     "torse"
    ],
    "a": "relief"
   },
   {
    "q": "En quelle année, avant J.-C., environ, a été sculptée la Vénus de Milo ? En -___ ?",
    "a": "130"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_003",
  "cat": "arts",
  "name": "La Poésie",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on les lignes qui composent un poème ? Des ___ ?",
    "c": [
     "vers",
     "notes",
     "cases",
     "pages"
    ],
    "a": "vers"
   },
   {
    "q": "Comment appelle-t-on la répétition de sons à la fin des vers ? La ___ ?",
    "c": [
     "rime",
     "note",
     "clé",
     "voix"
    ],
    "a": "rime"
   },
   {
    "q": "Quel poème court japonais compte trois vers et 17 syllabes ? Le ___ ?",
    "c": [
     "haïku",
     "sonnet",
     "ode",
     "fable"
    ],
    "a": "haïku"
   },
   {
    "q": "Quel poète français, auteur des « Fleurs du mal », est célèbre ? Charles ___ ?",
    "c": [
     "Baudelaire",
     "Rimbaud",
     "Verlaine",
     "Hugo"
    ],
    "a": "Baudelaire"
   },
   {
    "q": "Quel vers de douze syllabes est le plus classique en poésie française ? L'___ ?",
    "c": [
     "alexandrin",
     "octosyllabe",
     "décasyllabe",
     "hexamètre"
    ],
    "a": "alexandrin"
   },
   {
    "q": "Quel poème à forme fixe compte 14 vers ? Le ___ ?",
    "c": [
     "sonnet",
     "haïku",
     "rondeau",
     "ballade"
    ],
    "a": "sonnet"
   },
   {
    "q": "Quel jeune poète prodige a écrit « Le Bateau ivre » avant 20 ans ? Arthur ___ ?",
    "c": [
     "Rimbaud",
     "Verlaine",
     "Musset",
     "Nerval"
    ],
    "a": "Rimbaud"
   },
   {
    "q": "Combien de syllabes compte, en tout, un haïku traditionnel ?",
    "a": "17"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_004",
  "cat": "arts",
  "name": "La Photographie",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quel appareil prend-on des photos ? Un appareil ___ ?",
    "c": [
     "photo",
     "radio",
     "vidéo",
     "audio"
    ],
    "a": "photo"
   },
   {
    "q": "Comment appelle-t-on la partie de l'appareil qui laisse entrer la lumière ? L'___ ?",
    "c": [
     "objectif",
     "écran",
     "bouton",
     "flash"
    ],
    "a": "objectif"
   },
   {
    "q": "Quel dispositif éclaire une scène sombre lors d'une photo ? Le ___ ?",
    "c": [
     "flash",
     "zoom",
     "filtre",
     "trépied"
    ],
    "a": "flash"
   },
   {
    "q": "Sur quel support argentique les photos étaient-elles imprimées avant le numérique ? La ___ ?",
    "c": [
     "pellicule",
     "toile",
     "plaque",
     "carte"
    ],
    "a": "pellicule"
   },
   {
    "q": "Quelle marque japonaise et « Kodak » sont célèbres pour la photo : citez Kodak ou ___ ?",
    "c": [
     "Nikon",
     "Sony",
     "Apple",
     "Bose"
    ],
    "a": "Nikon"
   },
   {
    "q": "Comment appelle-t-on un autoportrait pris à bout de bras au smartphone ? Un ___ ?",
    "c": [
     "selfie",
     "portrait",
     "cliché",
     "flou"
    ],
    "a": "selfie"
   },
   {
    "q": "Comment appelle-t-on le temps pendant lequel le capteur reçoit la lumière ? Le temps de ___ ?",
    "c": [
     "pose",
     "vol",
     "vie",
     "jeu"
    ],
    "a": "pose"
   },
   {
    "q": "En quelle année, environ, Nicéphore Niépce réalise-t-il la première photographie ?",
    "a": "1826"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_005",
  "cat": "arts",
  "name": "Le Théâtre",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quoi les acteurs jouent-ils au théâtre ? La ___ ?",
    "c": [
     "scène",
     "toile",
     "piste",
     "arène"
    ],
    "a": "scène"
   },
   {
    "q": "Comment appelle-t-on le texte qu'un acteur doit apprendre ? Son ___ ?",
    "c": [
     "rôle",
     "chant",
     "pas",
     "trait"
    ],
    "a": "rôle"
   },
   {
    "q": "Quel grand auteur de théâtre français a écrit « Le Malade imaginaire » ?",
    "c": [
     "Molière",
     "Racine",
     "Corneille",
     "Hugo"
    ],
    "a": "Molière"
   },
   {
    "q": "Quel genre théâtral cherche à faire rire ? La ___ ?",
    "c": [
     "comédie",
     "tragédie",
     "drame",
     "farce"
    ],
    "a": "comédie"
   },
   {
    "q": "Quel dramaturge anglais a écrit « Roméo et Juliette » ? William ___ ?",
    "c": [
     "Shakespeare",
     "Dickens",
     "Wilde",
     "Marlowe"
    ],
    "a": "Shakespeare"
   },
   {
    "q": "Quel tissu se lève et se baisse au début et à la fin d'une pièce ? Le ___ ?",
    "c": [
     "rideau",
     "drap",
     "voile",
     "store"
    ],
    "a": "rideau"
   },
   {
    "q": "Quel mot crie-t-on aux acteurs pour leur souhaiter bonne chance ? ___ (au lieu de bonne chance) ?",
    "c": [
     "merde",
     "bravo",
     "chut",
     "encore"
    ],
    "a": "merde"
   },
   {
    "q": "En quelle année est mort Molière, sur scène en jouant « Le Malade imaginaire » ?",
    "a": "1673"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_006",
  "cat": "arts",
  "name": "L'Architecture",
  "level": "classique",
  "levels": [
   {
    "q": "Quel professionnel conçoit les plans des bâtiments ? L'___ ?",
    "c": [
     "architecte",
     "maçon",
     "peintre",
     "notaire"
    ],
    "a": "architecte"
   },
   {
    "q": "Quel style médiéval présente de hautes voûtes et vitraux, comme Notre-Dame ? Le ___ ?",
    "c": [
     "gothique",
     "roman",
     "baroque",
     "moderne"
    ],
    "a": "gothique"
   },
   {
    "q": "Quelle célèbre tour de fer domine Paris ? La tour ___ ?",
    "c": [
     "Eiffel",
     "Montparnasse",
     "Pise",
     "Babel"
    ],
    "a": "Eiffel"
   },
   {
    "q": "Quelle partie triangulaire couvre le sommet d'une maison ? Le ___ ?",
    "c": [
     "toit",
     "sol",
     "mur",
     "seuil"
    ],
    "a": "toit"
   },
   {
    "q": "Quel architecte suisse-français, pionnier du modernisme, a conçu la Cité radieuse ? Le ___ ?",
    "c": [
     "Corbusier",
     "Niemeyer",
     "Gaudí",
     "Wright"
    ],
    "a": "Corbusier"
   },
   {
    "q": "Quel élément courbe soutient les ponts et portes anciennes ? L'___ ?",
    "c": [
     "arc",
     "pilier",
     "poutre",
     "dalle"
    ],
    "a": "arc"
   },
   {
    "q": "Quel style aux colonnes et symétrie s'inspire de la Grèce antique ? Le style ___ ?",
    "c": [
     "classique",
     "gothique",
     "roman",
     "art déco"
    ],
    "a": "classique"
   },
   {
    "q": "Combien de mètres de haut fait, environ, la tour Eiffel (avec antennes) ?",
    "a": "330"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_007",
  "cat": "arts",
  "name": "La Bande dessinée",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on chaque petite image d'une BD ? Une ___ ?",
    "c": [
     "case",
     "page",
     "ligne",
     "boîte"
    ],
    "a": "case"
   },
   {
    "q": "Dans quoi sont écrites les paroles des personnages de BD ? Une ___ ?",
    "c": [
     "bulle",
     "flèche",
     "étoile",
     "note"
    ],
    "a": "bulle"
   },
   {
    "q": "Quel reporter belge à la houppette, créé par Hergé, voyage avec son chien ?",
    "c": [
     "Tintin",
     "Spirou",
     "Gaston",
     "Astérix"
    ],
    "a": "Tintin"
   },
   {
    "q": "Quel petit Gaulois de Goscinny et Uderzo boit une potion magique ?",
    "c": [
     "Astérix",
     "Obélix",
     "Tintin",
     "Idéfix"
    ],
    "a": "Astérix"
   },
   {
    "q": "Comment appelle-t-on la BD japonaise ? Le ___ ?",
    "c": [
     "manga",
     "comic",
     "strip",
     "toon"
    ],
    "a": "manga"
   },
   {
    "q": "Quel gros compagnon d'Astérix livre des menhirs ?",
    "c": [
     "Obélix",
     "Panoramix",
     "Assurancetourix",
     "Idéfix"
    ],
    "a": "Obélix"
   },
   {
    "q": "Quel super-héros de comics américain vient de la planète Krypton ?",
    "c": [
     "Superman",
     "Batman",
     "Spider-Man",
     "Hulk"
    ],
    "a": "Superman"
   },
   {
    "q": "En quelle année est apparu Tintin pour la première fois dans un journal ?",
    "a": "1929"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_008",
  "cat": "arts",
  "name": "La Calligraphie",
  "level": "classique",
  "levels": [
   {
    "q": "La calligraphie est l'art de la belle ___ ?",
    "c": [
     "écriture",
     "peinture",
     "musique",
     "danse"
    ],
    "a": "écriture"
   },
   {
    "q": "Avec quel outil traditionnel, trempé dans l'encre, calligraphie-t-on ? Une ___ ?",
    "c": [
     "plume",
     "brosse",
     "craie",
     "gomme"
    ],
    "a": "plume"
   },
   {
    "q": "Quel liquide noir sert à écrire en calligraphie ? L'___ ?",
    "c": [
     "encre",
     "eau",
     "huile",
     "lait"
    ],
    "a": "encre"
   },
   {
    "q": "Dans quelle culture asiatique la calligraphie au pinceau est-elle un art majeur ? La ___ ?",
    "c": [
     "chinoise",
     "russe",
     "grecque",
     "romaine"
    ],
    "a": "chinoise"
   },
   {
    "q": "Quels moines du Moyen Âge copiaient et enluminaient les manuscrits ? Les ___ ?",
    "c": [
     "moines",
     "chevaliers",
     "rois",
     "marchands"
    ],
    "a": "moines"
   },
   {
    "q": "Quelle écriture arabe est célèbre pour ses courbes calligraphiées ? L'écriture ___ ?",
    "c": [
     "arabe",
     "latine",
     "cyrillique",
     "grecque"
    ],
    "a": "arabe"
   },
   {
    "q": "Quelle voie japonaise de la calligraphie porte le nom de « shodo » ? La voie de l'___ ?",
    "c": [
     "écriture",
     "épée",
     "thé",
     "fleur"
    ],
    "a": "écriture"
   },
   {
    "q": "En quel siècle l'imprimerie de Gutenberg a-t-elle concurrencé la calligraphie manuscrite ? Au ___e siècle ?",
    "c": [
     "15",
     "10",
     "18",
     "20"
    ],
    "a": "15"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_009",
  "cat": "arts",
  "name": "La Danse",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quoi danse-t-on généralement ? La ___ ?",
    "c": [
     "musique",
     "peinture",
     "sculpture",
     "photo"
    ],
    "a": "musique"
   },
   {
    "q": "Quelle danse classique se pratique sur les pointes en tutu ? Le ___ ?",
    "c": [
     "ballet",
     "hip-hop",
     "tango",
     "flamenco"
    ],
    "a": "ballet"
   },
   {
    "q": "Quelles chaussures à bout rigide portent les danseuses classiques ? Des ___ ?",
    "c": [
     "pointes",
     "claquettes",
     "sabots",
     "tongs"
    ],
    "a": "pointes"
   },
   {
    "q": "Quelle danse de rue née dans le hip-hop se pratique au sol ? Le break___ ?",
    "c": [
     "dance",
     "beat",
     "step",
     "move"
    ],
    "a": "dance"
   },
   {
    "q": "Quelle danse de couple argentine est très sensuelle ?",
    "c": [
     "tango",
     "valse",
     "salsa",
     "rumba"
    ],
    "a": "tango"
   },
   {
    "q": "Quel ballet de Tchaïkovski met en scène un cygne ? Le Lac des ___ ?",
    "c": [
     "Cygnes",
     "Fées",
     "Roses",
     "Ombres"
    ],
    "a": "Cygnes"
   },
   {
    "q": "Comment appelle-t-on la personne qui crée les mouvements d'un ballet ? Le ___ ?",
    "c": [
     "chorégraphe",
     "danseur",
     "musicien",
     "metteur"
    ],
    "a": "chorégraphe"
   },
   {
    "q": "En quel pays le ballet classique s'est-il codifié à la cour du Roi-Soleil ? La ___ ?",
    "c": [
     "France",
     "Russie",
     "Italie",
     "Espagne"
    ],
    "a": "France"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_010",
  "cat": "arts",
  "name": "L'Opéra",
  "level": "classique",
  "levels": [
   {
    "q": "À l'opéra, les artistes racontent l'histoire en ___ (plutôt qu'en parlant) ?",
    "c": [
     "chantant",
     "dansant",
     "peignant",
     "sifflant"
    ],
    "a": "chantant"
   },
   {
    "q": "Quelle est la voix féminine la plus aiguë à l'opéra ? La ___ ?",
    "c": [
     "soprano",
     "basse",
     "ténor",
     "alto"
    ],
    "a": "soprano"
   },
   {
    "q": "Quelle est la voix masculine la plus haute à l'opéra ? Le ___ ?",
    "c": [
     "ténor",
     "basse",
     "soprano",
     "alto"
    ],
    "a": "ténor"
   },
   {
    "q": "Comment appelle-t-on un chant solo célèbre d'un opéra ? Une ___ ?",
    "c": [
     "aria",
     "strophe",
     "gamme",
     "octave"
    ],
    "a": "aria"
   },
   {
    "q": "Quel opéra de Bizet met en scène une gitane à Séville ?",
    "c": [
     "Carmen",
     "Aïda",
     "Tosca",
     "Norma"
    ],
    "a": "Carmen"
   },
   {
    "q": "Quel célèbre opéra de Milan, à la façade néoclassique, est un temple du genre ? La ___ ?",
    "c": [
     "Scala",
     "Fenice",
     "Bastille",
     "Garnier"
    ],
    "a": "Scala"
   },
   {
    "q": "Quel compositeur italien a écrit « La Traviata » et « Aïda » ?",
    "c": [
     "Verdi",
     "Puccini",
     "Rossini",
     "Bellini"
    ],
    "a": "Verdi"
   },
   {
    "q": "Dans quel opéra parisien, coiffé d'un dôme doré, se déroule « Le Fantôme de l'Opéra » ? L'Opéra ___ ?",
    "c": [
     "Garnier",
     "Bastille",
     "Comique",
     "Royal"
    ],
    "a": "Garnier"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_011",
  "cat": "arts",
  "name": "Le Cinéma muet",
  "level": "classique",
  "levels": [
   {
    "q": "Que manquait-il aux films de cinéma muet ? Le ___ ?",
    "c": [
     "son",
     "couleur",
     "écran",
     "public"
    ],
    "a": "son"
   },
   {
    "q": "Quel acteur à moustache et canne, « Charlot », est la star du muet ? Charlie ___ ?",
    "c": [
     "Chaplin",
     "Keaton",
     "Laurel",
     "Lloyd"
    ],
    "a": "Chaplin"
   },
   {
    "q": "De quelle couleur générale étaient les films muets ? En noir et ___ ?",
    "c": [
     "blanc",
     "bleu",
     "rouge",
     "or"
    ],
    "a": "blanc"
   },
   {
    "q": "Comment appelle-t-on les textes affichés à l'écran pour les dialogues ? Des carton___ ?",
    "c": [
     "s",
     "nages",
     "pâtes",
     "neige"
    ],
    "a": "s"
   },
   {
    "q": "Quel acteur au visage impassible, roi du burlesque muet, s'appelait Buster ___ ?",
    "c": [
     "Keaton",
     "Chaplin",
     "Lloyd",
     "Arbuckle"
    ],
    "a": "Keaton"
   },
   {
    "q": "Quel instrument accompagnait souvent les projections de films muets en salle ? Le ___ ?",
    "c": [
     "piano",
     "violon",
     "tambour",
     "orgue"
    ],
    "a": "piano"
   },
   {
    "q": "Quel film de 2011, en noir et blanc et muet, a rendu hommage à cette époque et gagné l'Oscar ? The ___ ?",
    "c": [
     "Artist",
     "Silence",
     "Star",
     "Mute"
    ],
    "a": "Artist"
   },
   {
    "q": "En quelle année sort « Le Chanteur de jazz », premier film parlant qui met fin au muet ?",
    "a": "1927"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_012",
  "cat": "arts",
  "name": "La Céramique",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle matière modelée puis cuite sert à faire des poteries ? La ___ ?",
    "c": [
     "argile",
     "laine",
     "cire",
     "paille"
    ],
    "a": "argile"
   },
   {
    "q": "Sur quel outil rotatif le potier façonne-t-il ses pots ? Le tour de ___ ?",
    "c": [
     "potier",
     "force",
     "France",
     "magie"
    ],
    "a": "potier"
   },
   {
    "q": "Dans quel four très chaud cuit-on la céramique ? Un ___ ?",
    "c": [
     "four",
     "frigo",
     "moule",
     "bain"
    ],
    "a": "four"
   },
   {
    "q": "Quel vernis brillant recouvre et imperméabilise la céramique ? L'___ ?",
    "c": [
     "émail",
     "cire",
     "huile",
     "colle"
    ],
    "a": "émail"
   },
   {
    "q": "Quelle céramique fine et blanche, translucide, vient de Chine ? La ___ ?",
    "c": [
     "porcelaine",
     "faïence",
     "terre cuite",
     "brique"
    ],
    "a": "porcelaine"
   },
   {
    "q": "Quelle ville française de la Haute-Vienne est célèbre pour sa porcelaine ?",
    "c": [
     "Limoges",
     "Sèvres",
     "Vallauris",
     "Nevers"
    ],
    "a": "Limoges"
   },
   {
    "q": "Quel art japonais répare la céramique cassée avec de l'or ? Le ___ ?",
    "c": [
     "kintsugi",
     "origami",
     "ikebana",
     "bonsaï"
    ],
    "a": "kintsugi"
   },
   {
    "q": "En quel millénaire, avant J.-C., apparaissent les plus anciennes poteries connues (Asie de l'Est) ? Environ -___ 000 ?",
    "a": "18"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_013",
  "cat": "arts",
  "name": "La Mosaïque",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quoi assemble-t-on une mosaïque ? De petits ___ ?",
    "c": [
     "carreaux",
     "clous",
     "fils",
     "grains"
    ],
    "a": "carreaux"
   },
   {
    "q": "Comment appelle-t-on chaque petit morceau coloré d'une mosaïque ? Une ___ ?",
    "c": [
     "tesselle",
     "brique",
     "perle",
     "bille"
    ],
    "a": "tesselle"
   },
   {
    "q": "Quelle civilisation antique excellait dans les mosaïques de sol ? Les ___ ?",
    "c": [
     "Romains",
     "Vikings",
     "Aztèques",
     "Celtes"
    ],
    "a": "Romains"
   },
   {
    "q": "En quelles matières sont souvent faites les tesselles ? Pierre, verre ou ___ ?",
    "c": [
     "céramique",
     "papier",
     "tissu",
     "bois"
    ],
    "a": "céramique"
   },
   {
    "q": "Quel artiste français de rue signe des mosaïques de Space Invaders en ville ?",
    "c": [
     "Invader",
     "Banksy",
     "JR",
     "Miss.Tic"
    ],
    "a": "Invader"
   },
   {
    "q": "Quel matériau brillant et doré ornait les mosaïques byzantines ? La feuille d'___ ?",
    "c": [
     "or",
     "argent",
     "cuivre",
     "étain"
    ],
    "a": "or"
   },
   {
    "q": "Dans quelle ville italienne, capitale de la mosaïque byzantine, se trouvent de célèbres basiliques ?",
    "c": [
     "Ravenne",
     "Venise",
     "Rome",
     "Florence"
    ],
    "a": "Ravenne"
   },
   {
    "q": "En quel siècle, environ, les mosaïques byzantines de Ravenne ont-elles été réalisées ? Au ___e siècle ?",
    "c": [
     "6",
     "12",
     "2",
     "15"
    ],
    "a": "6"
   }
  ],
  "rw": true
 },
 {
  "id": "arts_014",
  "cat": "arts",
  "name": "Le Street art",
  "level": "classique",
  "levels": [
   {
    "q": "Où le street art s'expose-t-il, par définition ? Dans la ___ ?",
    "c": [
     "rue",
     "galerie",
     "maison",
     "église"
    ],
    "a": "rue"
   },
   {
    "q": "Avec quelle bombe colorée les graffeurs peignent-ils les murs ? La bombe de ___ ?",
    "c": [
     "peinture",
     "gaz",
     "crème",
     "mousse"
    ],
    "a": "peinture"
   },
   {
    "q": "Quel artiste britannique anonyme est la star mondiale du street art ?",
    "c": [
     "Banksy",
     "Warhol",
     "Basquiat",
     "Haring"
    ],
    "a": "Banksy"
   },
   {
    "q": "Comment appelle-t-on la signature stylisée d'un graffeur ? Un ___ ?",
    "c": [
     "tag",
     "logo",
     "sceau",
     "code"
    ],
    "a": "tag"
   },
   {
    "q": "Quel pochoir permet de reproduire vite un motif au mur ? Le ___ (stencil) ?",
    "c": [
     "pochoir",
     "rouleau",
     "pinceau",
     "tampon"
    ],
    "a": "pochoir"
   },
   {
    "q": "Quel artiste new-yorkais des années 80, aux personnages tracés, a marqué le street art ? Keith ___ ?",
    "c": [
     "Haring",
     "Basquiat",
     "Warhol",
     "Koons"
    ],
    "a": "Haring"
   },
   {
    "q": "Dans quelle ville, le long du mur, se trouve la fameuse East Side Gallery de street art ?",
    "c": [
     "Berlin",
     "Paris",
     "Londres",
     "New York"
    ],
    "a": "Berlin"
   },
   {
    "q": "En quelle année, environ, le graffiti moderne émerge-t-il à New York (métros) ? Les années ___ ?",
    "c": [
     "1970",
     "1990",
     "2010",
     "1950"
    ],
    "a": "1970"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_001",
  "cat": "cuisine",
  "name": "La Pizza",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays la pizza est-elle originaire ?",
    "c": [
     "Italie",
     "France",
     "Grèce",
     "Espagne"
    ],
    "a": "Italie"
   },
   {
    "q": "Quelle sauce rouge nappe la base d'une pizza classique ? La sauce ___ ?",
    "c": [
     "tomate",
     "blanche",
     "soja",
     "piment"
    ],
    "a": "tomate"
   },
   {
    "q": "Quel fromage fondant recouvre traditionnellement la pizza ? La ___ ?",
    "c": [
     "mozzarella",
     "gruyère",
     "roquefort",
     "brie"
    ],
    "a": "mozzarella"
   },
   {
    "q": "Quelle pizza aux couleurs du drapeau italien porte le nom d'une reine ? La ___ ?",
    "c": [
     "margherita",
     "regina",
     "napolitaine",
     "calzone"
    ],
    "a": "margherita"
   },
   {
    "q": "Dans quelle ville italienne la pizza moderne est-elle née ?",
    "c": [
     "Naples",
     "Rome",
     "Milan",
     "Turin"
    ],
    "a": "Naples"
   },
   {
    "q": "Quelle pizza fourrée et pliée en chausson porte ce nom italien ? La ___ ?",
    "c": [
     "calzone",
     "focaccia",
     "panini",
     "ciabatta"
    ],
    "a": "calzone"
   },
   {
    "q": "Dans quel type de four traditionnel cuit-on la vraie pizza napolitaine ? Un four à ___ ?",
    "c": [
     "bois",
     "gaz",
     "micro-ondes",
     "charbon"
    ],
    "a": "bois"
   },
   {
    "q": "À quelle température, en °C, environ, cuit un four à pizza napolitain ?",
    "a": "450"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_002",
  "cat": "cuisine",
  "name": "Le Chocolat",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle fève le chocolat est-il fabriqué ? La fève de ___ ?",
    "c": [
     "cacao",
     "café",
     "vanille",
     "soja"
    ],
    "a": "cacao"
   },
   {
    "q": "De quelle couleur est le chocolat « noir » ?",
    "c": [
     "noir",
     "blanc",
     "rouge",
     "vert"
    ],
    "a": "noir"
   },
   {
    "q": "Quel chocolat, sans cacao solide, est très clair et sucré ? Le chocolat ___ ?",
    "c": [
     "blanc",
     "noir",
     "brun",
     "gris"
    ],
    "a": "blanc"
   },
   {
    "q": "Quel pays africain est le premier producteur mondial de cacao ? La ___ d'Ivoire ?",
    "c": [
     "Côte",
     "Rive",
     "Terre",
     "Baie"
    ],
    "a": "Côte"
   },
   {
    "q": "Quelle civilisation précolombienne consommait le cacao en boisson sacrée ? Les ___ ?",
    "c": [
     "Aztèques",
     "Vikings",
     "Romains",
     "Égyptiens"
    ],
    "a": "Aztèques"
   },
   {
    "q": "Quel pays d'Europe est réputé pour son chocolat de haute qualité ? La ___ ?",
    "c": [
     "Suisse",
     "Grèce",
     "Pologne",
     "Irlande"
    ],
    "a": "Suisse"
   },
   {
    "q": "Comment appelle-t-on l'artisan qui fabrique le chocolat ? Le ___ ?",
    "c": [
     "chocolatier",
     "boulanger",
     "pâtissier",
     "confiseur"
    ],
    "a": "chocolatier"
   },
   {
    "q": "Quel pourcentage de cacao, environ, contient au minimum un chocolat noir digne de ce nom ?",
    "a": "70"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_003",
  "cat": "cuisine",
  "name": "Le Fromage",
  "level": "classique",
  "levels": [
   {
    "q": "À partir de quel liquide fabrique-t-on le fromage ? Le ___ ?",
    "c": [
     "lait",
     "vin",
     "jus",
     "sirop"
    ],
    "a": "lait"
   },
   {
    "q": "Quel pays est mondialement réputé pour ses centaines de fromages ? La ___ ?",
    "c": [
     "France",
     "Suède",
     "Japon",
     "Brésil"
    ],
    "a": "France"
   },
   {
    "q": "Quel fromage à trous vient de Suisse ? L'___ ?",
    "c": [
     "emmental",
     "camembert",
     "roquefort",
     "brie"
    ],
    "a": "emmental"
   },
   {
    "q": "Quel fromage normand à croûte blanche se vend en boîte ronde ?",
    "c": [
     "camembert",
     "gruyère",
     "cantal",
     "comté"
    ],
    "a": "camembert"
   },
   {
    "q": "Quel fromage bleu persillé de brebis vient de l'Aveyron ?",
    "c": [
     "roquefort",
     "bleu",
     "fourme",
     "gorgonzola"
    ],
    "a": "roquefort"
   },
   {
    "q": "Comment appelle-t-on les veines bleues de moisissure dans certains fromages ? Le ___ ?",
    "c": [
     "persillé",
     "quadrillé",
     "rayé",
     "moucheté"
    ],
    "a": "persillé"
   },
   {
    "q": "Quel morceau de lait caillé sépare-t-on du petit-lait pour faire le fromage ? Le ___ ?",
    "c": [
     "caillé",
     "beurre",
     "crème",
     "yaourt"
    ],
    "a": "caillé"
   },
   {
    "q": "Combien de sortes de fromages différents la France compterait-elle, environ (chiffre souvent cité) ?",
    "a": "1200"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_004",
  "cat": "cuisine",
  "name": "Le Vin",
  "level": "classique",
  "levels": [
   {
    "q": "À partir de quel fruit fabrique-t-on le vin ? Le ___ ?",
    "c": [
     "raisin",
     "pomme",
     "prune",
     "cerise"
    ],
    "a": "raisin"
   },
   {
    "q": "Quelles sont les deux couleurs principales de vin : rouge et ___ ?",
    "c": [
     "blanc",
     "vert",
     "noir",
     "bleu"
    ],
    "a": "blanc"
   },
   {
    "q": "Quel vin pétillant de fête vient d'une région française éponyme ? Le ___ ?",
    "c": [
     "champagne",
     "bordeaux",
     "muscadet",
     "beaujolais"
    ],
    "a": "champagne"
   },
   {
    "q": "Comment appelle-t-on la science et l'art de la dégustation du vin ? L'___ ?",
    "c": [
     "œnologie",
     "biologie",
     "géologie",
     "écologie"
    ],
    "a": "œnologie"
   },
   {
    "q": "Quelle région du sud-ouest est mondialement célèbre pour ses grands vins rouges ?",
    "c": [
     "Bordeaux",
     "Bretagne",
     "Alsace",
     "Normandie"
    ],
    "a": "Bordeaux"
   },
   {
    "q": "Comment appelle-t-on le professionnel du vin dans un restaurant ? Le ___ ?",
    "c": [
     "sommelier",
     "serveur",
     "chef",
     "caviste"
    ],
    "a": "sommelier"
   },
   {
    "q": "Dans quel récipient en bois vieillit souvent le vin ? Un ___ ?",
    "c": [
     "tonneau",
     "seau",
     "bidon",
     "verre"
    ],
    "a": "tonneau"
   },
   {
    "q": "Combien de bulles, en millions, environ, contient une flûte de champagne (chiffre souvent cité) ?",
    "a": "1"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_005",
  "cat": "cuisine",
  "name": "La Pâtisserie",
  "level": "classique",
  "levels": [
   {
    "q": "Quel ingrédient blanc sucré est essentiel en pâtisserie ? Le ___ ?",
    "c": [
     "sucre",
     "sel",
     "poivre",
     "vinaigre"
    ],
    "a": "sucre"
   },
   {
    "q": "Quelle viennoiserie française en forme de croissant est mondialement connue ? Le ___ ?",
    "c": [
     "croissant",
     "bagel",
     "muffin",
     "donut"
    ],
    "a": "croissant"
   },
   {
    "q": "Quel petit gâteau rond et coloré, à la coque craquante, est un délice parisien ? Le ___ ?",
    "c": [
     "macaron",
     "éclair",
     "cannelé",
     "financier"
    ],
    "a": "macaron"
   },
   {
    "q": "Quel pâtissier français aux boutiques mondiales est surnommé roi du macaron ? Pierre ___ ?",
    "c": [
     "Hermé",
     "Conticini",
     "Michalak",
     "Felder"
    ],
    "a": "Hermé"
   },
   {
    "q": "Comment appelle-t-on la crème fouettée sucrée qui décore les desserts ? La ___ ?",
    "c": [
     "chantilly",
     "ganache",
     "mousse",
     "glace"
    ],
    "a": "chantilly"
   },
   {
    "q": "Quel gâteau français en couronne, garni de fèves, se mange à l'Épiphanie ? La galette des ___ ?",
    "c": [
     "rois",
     "reines",
     "anges",
     "saints"
    ],
    "a": "rois"
   },
   {
    "q": "Quel chef pâtissier français a inventé de nombreuses pièces montées au XIXe siècle ? Antonin ___ ?",
    "c": [
     "Carême",
     "Escoffier",
     "Bocuse",
     "Ducasse"
    ],
    "a": "Carême"
   },
   {
    "q": "Combien de couches de pâte feuilletée, environ, compte un croissant bien réalisé ?",
    "a": "27"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_006",
  "cat": "cuisine",
  "name": "Le Pain",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle farine sert principalement à faire le pain ? La farine de ___ ?",
    "c": [
     "blé",
     "riz",
     "maïs",
     "soja"
    ],
    "a": "blé"
   },
   {
    "q": "Quel long pain français est un symbole national ? La ___ ?",
    "c": [
     "baguette",
     "brioche",
     "fougasse",
     "miche"
    ],
    "a": "baguette"
   },
   {
    "q": "Quel ingrédient vivant fait lever la pâte à pain ? La ___ ?",
    "c": [
     "levure",
     "farine",
     "eau",
     "huile"
    ],
    "a": "levure"
   },
   {
    "q": "Chez quel artisan achète-t-on le pain frais ? Le ___ ?",
    "c": [
     "boulanger",
     "boucher",
     "épicier",
     "pâtissier"
    ],
    "a": "boulanger"
   },
   {
    "q": "Quelle partie dorée et croustillante entoure le pain ? La ___ ?",
    "c": [
     "croûte",
     "mie",
     "graine",
     "peau"
    ],
    "a": "croûte"
   },
   {
    "q": "Quelle partie moelleuse se trouve à l'intérieur du pain ? La ___ ?",
    "c": [
     "mie",
     "croûte",
     "graine",
     "levain"
    ],
    "a": "mie"
   },
   {
    "q": "Quel levain naturel, sans levure industrielle, fait aussi lever le pain ? Le ___ ?",
    "c": [
     "levain",
     "sucre",
     "sel",
     "beurre"
    ],
    "a": "levain"
   },
   {
    "q": "Combien de grammes, environ, pèse une baguette de pain traditionnelle française ?",
    "a": "250"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_007",
  "cat": "cuisine",
  "name": "La Cuisine asiatique",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quels ustensiles mange-t-on souvent en Asie ? Des ___ ?",
    "c": [
     "baguettes",
     "fourchettes",
     "cuillères",
     "couteaux"
    ],
    "a": "baguettes"
   },
   {
    "q": "Quelle céréale blanche est la base de la cuisine asiatique ? Le ___ ?",
    "c": [
     "riz",
     "blé",
     "orge",
     "seigle"
    ],
    "a": "riz"
   },
   {
    "q": "Quelle bouchée japonaise de riz et poisson cru est mondialement connue ? Le ___ ?",
    "c": [
     "sushi",
     "wok",
     "nem",
     "dim sum"
    ],
    "a": "sushi"
   },
   {
    "q": "Quelle sauce brune et salée, à base de soja, assaisonne les plats asiatiques ? La sauce ___ ?",
    "c": [
     "soja",
     "tomate",
     "aigre",
     "curry"
    ],
    "a": "soja"
   },
   {
    "q": "Quelle grande poêle ronde chinoise sert à faire sauter les aliments ? Le ___ ?",
    "c": [
     "wok",
     "four",
     "gril",
     "bain"
    ],
    "a": "wok"
   },
   {
    "q": "Quelle pâte de soja fermenté, blanche et molle, est riche en protéines ? Le ___ ?",
    "c": [
     "tofu",
     "miso",
     "wasabi",
     "kimchi"
    ],
    "a": "tofu"
   },
   {
    "q": "Quelle soupe de nouilles japonaise, en bol fumant, est très populaire ? Le ___ ?",
    "c": [
     "ramen",
     "pho",
     "udon",
     "miso"
    ],
    "a": "ramen"
   },
   {
    "q": "Depuis combien de milliers d'années, environ, le riz est-il cultivé en Asie ?",
    "a": "9000"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_008",
  "cat": "cuisine",
  "name": "Le Café",
  "level": "classique",
  "levels": [
   {
    "q": "De quelle couleur est un café noir classique ?",
    "c": [
     "noir",
     "blanc",
     "rouge",
     "vert"
    ],
    "a": "noir"
   },
   {
    "q": "De quel grain torréfié fait-on le café ? Le grain de ___ ?",
    "c": [
     "café",
     "cacao",
     "blé",
     "poivre"
    ],
    "a": "café"
   },
   {
    "q": "Quel café italien court et serré est très fort ? L'___ ?",
    "c": [
     "expresso",
     "allongé",
     "filtre",
     "glacé"
    ],
    "a": "expresso"
   },
   {
    "q": "Quelle substance stimulante contient le café ? La ___ ?",
    "c": [
     "caféine",
     "nicotine",
     "théine",
     "morphine"
    ],
    "a": "caféine"
   },
   {
    "q": "Quel café italien mêle expresso et mousse de lait ? Le ___ ?",
    "c": [
     "cappuccino",
     "ristretto",
     "lungo",
     "corretto"
    ],
    "a": "cappuccino"
   },
   {
    "q": "De quel continent, région d'Éthiopie, le café serait-il originaire ? L'___ ?",
    "c": [
     "Afrique",
     "Asie",
     "Amérique",
     "Europe"
    ],
    "a": "Afrique"
   },
   {
    "q": "Quel pays d'Amérique du Sud est le premier producteur mondial de café ? Le ___ ?",
    "c": [
     "Brésil",
     "Chili",
     "Pérou",
     "Argentine"
    ],
    "a": "Brésil"
   },
   {
    "q": "Combien de tasses de café, en milliards, sont bues chaque jour dans le monde (estimation) ?",
    "a": "2"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_009",
  "cat": "cuisine",
  "name": "Les pâtes",
  "level": "classique",
  "levels": [
   {
    "q": "De quel pays européen les pâtes sont-elles emblématiques ?",
    "c": [
     "Italie",
     "France",
     "Espagne",
     "Grèce"
    ],
    "a": "Italie"
   },
   {
    "q": "Quelles longues pâtes fines sont les plus célèbres au monde ? Les ___ ?",
    "c": [
     "spaghetti",
     "ravioli",
     "lasagnes",
     "gnocchi"
    ],
    "a": "spaghetti"
   },
   {
    "q": "Quelle sauce rouge à base de tomate accompagne souvent les pâtes ? La sauce ___ ?",
    "c": [
     "tomate",
     "blanche",
     "verte",
     "brune"
    ],
    "a": "tomate"
   },
   {
    "q": "Comment dit-on qu'une pâte est cuite juste ce qu'il faut, encore ferme ? Al ___ ?",
    "c": [
     "dente",
     "forno",
     "pesto",
     "ragù"
    ],
    "a": "dente"
   },
   {
    "q": "Quelles pâtes en forme de nœud papillon portent le nom italien de « papillons » ? Les ___ ?",
    "c": [
     "farfalle",
     "penne",
     "fusilli",
     "rigatoni"
    ],
    "a": "farfalle"
   },
   {
    "q": "Quel plat de pâtes au four superpose couches de pâte, sauce et béchamel ? Les ___ ?",
    "c": [
     "lasagnes",
     "cannelloni",
     "raviolis",
     "tortellini"
    ],
    "a": "lasagnes"
   },
   {
    "q": "Quelle sauce à base de basilic, pignons et parmesan est ligure ? Le ___ ?",
    "c": [
     "pesto",
     "ragù",
     "carbonara",
     "arrabbiata"
    ],
    "a": "pesto"
   },
   {
    "q": "Combien de kilos de pâtes, environ, un Italien consomme-t-il par an ?",
    "a": "23"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_010",
  "cat": "cuisine",
  "name": "La Bière",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle céréale, maltée, est à la base de la bière ? L'___ ?",
    "c": [
     "orge",
     "maïs",
     "riz",
     "avoine"
    ],
    "a": "orge"
   },
   {
    "q": "Quelle plante grimpante donne son amertume à la bière ? Le ___ ?",
    "c": [
     "houblon",
     "lierre",
     "chanvre",
     "genêt"
    ],
    "a": "houblon"
   },
   {
    "q": "Quelle mousse blanche se forme au sommet d'un verre de bière ? La ___ ?",
    "c": [
     "mousse",
     "crème",
     "écume",
     "buée"
    ],
    "a": "mousse"
   },
   {
    "q": "Quel type de bière est généralement plus foncé, aux arômes de café ? La ___ ?",
    "c": [
     "brune",
     "blonde",
     "blanche",
     "ambrée"
    ],
    "a": "brune"
   },
   {
    "q": "Quelle fête bavaroise de la bière attire des millions de visiteurs à Munich ? L'___ ?",
    "c": [
     "Oktoberfest",
     "Carnaval",
     "Bierfest",
     "Maifest"
    ],
    "a": "Oktoberfest"
   },
   {
    "q": "Quel micro-organisme transforme le sucre en alcool lors de la fermentation ? La ___ ?",
    "c": [
     "levure",
     "moisissure",
     "algue",
     "bactérie"
    ],
    "a": "levure"
   },
   {
    "q": "Quelle célèbre bière brune irlandaise à mousse crémeuse est mondialement connue ?",
    "c": [
     "Guinness",
     "Heineken",
     "Corona",
     "Leffe"
    ],
    "a": "Guinness"
   },
   {
    "q": "En quelle année, avant J.-C., remontent les plus anciennes traces de brassage de bière en Mésopotamie ? En -___ ?",
    "a": "4000"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_011",
  "cat": "cuisine",
  "name": "La Gastronomie française",
  "level": "classique",
  "levels": [
   {
    "q": "Quel guide rouge décerne des étoiles aux grands restaurants ? Le guide ___ ?",
    "c": [
     "Michelin",
     "Gault",
     "Rouge",
     "Vert"
    ],
    "a": "Michelin"
   },
   {
    "q": "Quel pain long et croustillant est le symbole de la France ? La ___ ?",
    "c": [
     "baguette",
     "brioche",
     "fougasse",
     "miche"
    ],
    "a": "baguette"
   },
   {
    "q": "Quels petits mollusques de Bourgogne se mangent au beurre persillé ? Les ___ ?",
    "c": [
     "escargots",
     "moules",
     "huîtres",
     "praires"
    ],
    "a": "escargots"
   },
   {
    "q": "Quel foie d'oie ou de canard engraissé est un mets de fête ? Le ___ gras ?",
    "c": [
     "foie",
     "cœur",
     "gésier",
     "magret"
    ],
    "a": "foie"
   },
   {
    "q": "Combien de fromages différents la France compterait-elle, selon le mot de De Gaulle ? Plus de ___ ?",
    "c": [
     "365",
     "100",
     "50",
     "1000"
    ],
    "a": "365"
   },
   {
    "q": "Quel plat mijoté bourguignon associe bœuf et vin rouge ? Le bœuf ___ ?",
    "c": [
     "bourguignon",
     "wellington",
     "stroganoff",
     "carpaccio"
    ],
    "a": "bourguignon"
   },
   {
    "q": "Dans quelle liste de l'UNESCO le repas gastronomique des Français est-il inscrit depuis 2010 ? Le patrimoine de l'___ ?",
    "c": [
     "UNESCO",
     "OMS",
     "OTAN",
     "OCDE"
    ],
    "a": "UNESCO"
   },
   {
    "q": "Combien de restaurants, environ, ont obtenu 3 étoiles au guide Michelin en France (édition récente) ?",
    "a": "30"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_012",
  "cat": "cuisine",
  "name": "Les épices",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle épice jaune-orange colore le curry et le riz ? Le ___ ?",
    "c": [
     "curcuma",
     "paprika",
     "cumin",
     "safran"
    ],
    "a": "curcuma"
   },
   {
    "q": "Quelle épice noire, en grains, se moud dans un moulin à table ? Le ___ ?",
    "c": [
     "poivre",
     "sel",
     "sucre",
     "clou"
    ],
    "a": "poivre"
   },
   {
    "q": "Quelle épice rouge et douce, souvent hongroise, colore les plats ? Le ___ ?",
    "c": [
     "paprika",
     "curcuma",
     "gingembre",
     "carvi"
    ],
    "a": "paprika"
   },
   {
    "q": "Quelle épice, la plus chère du monde, provient des pistils du crocus ? Le ___ ?",
    "c": [
     "safran",
     "poivre",
     "vanille",
     "cannelle"
    ],
    "a": "safran"
   },
   {
    "q": "Quelle écorce d'arbre parfumée, roulée en bâton, aromatise desserts et vin chaud ? La ___ ?",
    "c": [
     "cannelle",
     "vanille",
     "muscade",
     "girofle"
    ],
    "a": "cannelle"
   },
   {
    "q": "Quelle racine piquante est utilisée fraîche ou en poudre en cuisine asiatique ? Le ___ ?",
    "c": [
     "gingembre",
     "wasabi",
     "raifort",
     "galanga"
    ],
    "a": "gingembre"
   },
   {
    "q": "Par quelle grande route commerciale antique les épices arrivaient-elles d'Orient ? La route des ___ ?",
    "c": [
     "épices",
     "soies",
     "sels",
     "ors"
    ],
    "a": "épices"
   },
   {
    "q": "En euros, combien coûte, environ, un gramme de safran au détail, l'épice la plus chère ?",
    "a": "30"
   }
  ],
  "rw": true
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
     "Japon",
     "Chine",
     "Corée",
     "Thaïlande"
    ],
    "a": "Japon"
   },
   {
    "q": "Quelle céréale, vinaigrée, est la base du sushi ? Le ___ ?",
    "c": [
     "riz",
     "blé",
     "orge",
     "maïs"
    ],
    "a": "riz"
   },
   {
    "q": "Quel aliment cru, souvent du saumon ou du thon, garnit les sushis ? Le ___ cru ?",
    "c": [
     "poisson",
     "porc",
     "poulet",
     "bœuf"
    ],
    "a": "poisson"
   },
   {
    "q": "Quelle feuille d'algue séchée enroule les makis ? La ___ ?",
    "c": [
     "nori",
     "wakamé",
     "kombu",
     "hijiki"
    ],
    "a": "nori"
   },
   {
    "q": "Quelle pâte verte très piquante accompagne les sushis ? Le ___ ?",
    "c": [
     "wasabi",
     "gingembre",
     "soja",
     "miso"
    ],
    "a": "wasabi"
   },
   {
    "q": "Dans quelle sauce sombre et salée trempe-t-on les sushis ? La sauce ___ ?",
    "c": [
     "soja",
     "huître",
     "poisson",
     "aigre"
    ],
    "a": "soja"
   },
   {
    "q": "Comment appelle-t-on le sushi où le poisson est simplement posé sur une boulette de riz ? Le ___ ?",
    "c": [
     "nigiri",
     "maki",
     "temaki",
     "sashimi"
    ],
    "a": "nigiri"
   },
   {
    "q": "En quel siècle la forme moderne du sushi (nigiri) est-elle apparue à Edo (Tokyo) ? Au ___e siècle ?",
    "c": [
     "19",
     "17",
     "18",
     "20"
    ],
    "a": "19"
   }
  ],
  "rw": true
 },
 {
  "id": "cuisine_014",
  "cat": "cuisine",
  "name": "Les barbecues",
  "level": "classique",
  "levels": [
   {
    "q": "Quel combustible noir est classiquement utilisé pour un barbecue ? Le ___ de bois ?",
    "c": [
     "charbon",
     "gaz",
     "pétrole",
     "papier"
    ],
    "a": "charbon"
   },
   {
    "q": "Sur quelle grille métallique pose-t-on les aliments au barbecue ? La ___ ?",
    "c": [
     "grille",
     "poêle",
     "planche",
     "plaque"
    ],
    "a": "grille"
   },
   {
    "q": "Quelle viande grillée en forme de cylindre est un classique du barbecue ? La ___ ?",
    "c": [
     "saucisse",
     "escalope",
     "côte",
     "brochette"
    ],
    "a": "saucisse"
   },
   {
    "q": "En quelle saison fait-on surtout des barbecues en extérieur ? L'___ ?",
    "c": [
     "été",
     "hiver",
     "automne",
     "carême"
    ],
    "a": "été"
   },
   {
    "q": "Quelle méthode de cuisson lente et fumée est typique du barbecue américain ? Le ___ ?",
    "c": [
     "smoking",
     "grilling",
     "roasting",
     "frying"
    ],
    "a": "smoking"
   },
   {
    "q": "Quelle sauce brune, sucrée et fumée nappe les grillades américaines ? La sauce ___ ?",
    "c": [
     "barbecue",
     "tartare",
     "béarnaise",
     "aigre"
    ],
    "a": "barbecue"
   },
   {
    "q": "Quel État américain est réputé pour son barbecue de bœuf (brisket) ? Le ___ ?",
    "c": [
     "Texas",
     "Alaska",
     "Vermont",
     "Ohio"
    ],
    "a": "Texas"
   },
   {
    "q": "À quelle température, en degrés, environ, cuit-on un brisket en barbecue « low and slow » ?",
    "a": "110"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_001",
  "cat": "tech",
  "name": "Les smartphones",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quel type d'écran tactile navigue-t-on avec un smartphone ? Un écran ___ ?",
    "c": [
     "tactile",
     "cathodique",
     "plasma",
     "papier"
    ],
    "a": "tactile"
   },
   {
    "q": "Quelle marque à la pomme croquée fabrique l'iPhone ?",
    "c": [
     "Apple",
     "Samsung",
     "Nokia",
     "Sony"
    ],
    "a": "Apple"
   },
   {
    "q": "Comment appelle-t-on les petits logiciels que l'on installe sur un smartphone ? Des ___ ?",
    "c": [
     "applis",
     "pilotes",
     "cookies",
     "widgets"
    ],
    "a": "applis"
   },
   {
    "q": "Quel système d'exploitation de Google équipe la majorité des smartphones ?",
    "c": [
     "Android",
     "iOS",
     "Windows",
     "Linux"
    ],
    "a": "Android"
   },
   {
    "q": "Quelle génération de réseau mobile, très rapide, a succédé à la 4G ?",
    "c": [
     "5G",
     "6G",
     "3G",
     "2G"
    ],
    "a": "5G"
   },
   {
    "q": "Comment appelle-t-on la petite carte qui identifie l'abonné dans le téléphone ? La carte ___ ?",
    "c": [
     "SIM",
     "SD",
     "PIN",
     "USB"
    ],
    "a": "SIM"
   },
   {
    "q": "Quel dirigeant d'Apple a présenté le premier iPhone en 2007 ? Steve ___ ?",
    "c": [
     "Jobs",
     "Wozniak",
     "Cook",
     "Gates"
    ],
    "a": "Jobs"
   },
   {
    "q": "En quelle année exacte le premier iPhone a-t-il été commercialisé ?",
    "a": "2007"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_002",
  "cat": "tech",
  "name": "Internet",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on le réseau mondial reliant les ordinateurs ? L'___ ?",
    "c": [
     "Internet",
     "Intranet",
     "Ethernet",
     "Extranet"
    ],
    "a": "Internet"
   },
   {
    "q": "Quel symbole sépare l'utilisateur du domaine dans une adresse e-mail ? L'___ (arobase) ?",
    "c": [
     "@",
     "#",
     "&",
     "%"
    ],
    "a": "@"
   },
   {
    "q": "Comment appelle-t-on une page web que l'on consulte dans un navigateur ? Un ___ ?",
    "c": [
     "site",
     "câble",
     "modem",
     "octet"
    ],
    "a": "site"
   },
   {
    "q": "Quel moteur de recherche est le plus utilisé au monde ?",
    "c": [
     "Google",
     "Bing",
     "Yahoo",
     "Qwant"
    ],
    "a": "Google"
   },
   {
    "q": "Que signifient les trois lettres « www » au début d'une adresse ? World Wide ___ ?",
    "c": [
     "Web",
     "Wire",
     "Wave",
     "Work"
    ],
    "a": "Web"
   },
   {
    "q": "Quel scientifique britannique a inventé le World Wide Web en 1989 ? Tim ___ ?",
    "c": [
     "Berners-Lee",
     "Turing",
     "Cerf",
     "Gates"
    ],
    "a": "Berners-Lee"
   },
   {
    "q": "Comment appelle-t-on l'adresse unique d'un site, commençant souvent par http ? L'___ ?",
    "c": [
     "URL",
     "IP",
     "DNS",
     "FTP"
    ],
    "a": "URL"
   },
   {
    "q": "En quelle année Tim Berners-Lee a-t-il inventé le World Wide Web au CERN ?",
    "a": "1989"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_003",
  "cat": "tech",
  "name": "L'Intelligence artificielle",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie le sigle IA ? Intelligence ___ ?",
    "c": [
     "artificielle",
     "avancée",
     "automatique",
     "analytique"
    ],
    "a": "artificielle"
   },
   {
    "q": "Quel agent conversationnel d'OpenAI a rendu l'IA populaire fin 2022 ?",
    "c": [
     "ChatGPT",
     "Siri",
     "Alexa",
     "Cortana"
    ],
    "a": "ChatGPT"
   },
   {
    "q": "Comment appelle-t-on l'apprentissage d'une IA à partir de données ? Le ___ learning ?",
    "c": [
     "machine",
     "deep",
     "quick",
     "smart"
    ],
    "a": "machine"
   },
   {
    "q": "Quel jeu de plateau asiatique a été maîtrisé par l'IA AlphaGo en 2016 ? Le ___ ?",
    "c": [
     "go",
     "échecs",
     "dames",
     "mahjong"
    ],
    "a": "go"
   },
   {
    "q": "Comment appelle-t-on les réseaux informatiques inspirés du cerveau ? Les réseaux de ___ ?",
    "c": [
     "neurones",
     "câbles",
     "capteurs",
     "serveurs"
    ],
    "a": "neurones"
   },
   {
    "q": "Quel test évalue si une machine peut se faire passer pour un humain ? Le test de ___ ?",
    "c": [
     "Turing",
     "Newton",
     "Einstein",
     "Pascal"
    ],
    "a": "Turing"
   },
   {
    "q": "Comment appelle-t-on une réponse fausse mais plausible inventée par une IA ? Une ___ ?",
    "c": [
     "hallucination",
     "erreur",
     "panne",
     "faute"
    ],
    "a": "hallucination"
   },
   {
    "q": "En quelle année le terme « intelligence artificielle » a-t-il été forgé, à la conférence de Dartmouth ?",
    "a": "1956"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_004",
  "cat": "tech",
  "name": "Les jeux vidéo",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quel appareil de salon joue-t-on branché à la télé ? Une ___ ?",
    "c": [
     "console",
     "cassette",
     "radio",
     "platine"
    ],
    "a": "console"
   },
   {
    "q": "Quel plombier moustachu est la mascotte de Nintendo ?",
    "c": [
     "Mario",
     "Sonic",
     "Link",
     "Kirby"
    ],
    "a": "Mario"
   },
   {
    "q": "Quel jeu de blocs à construire est le plus vendu de l'histoire ?",
    "c": [
     "Minecraft",
     "Tetris",
     "Fortnite",
     "Roblox"
    ],
    "a": "Minecraft"
   },
   {
    "q": "Quel jeu russe consiste à emboîter des pièces qui tombent ?",
    "c": [
     "Tetris",
     "Pac-Man",
     "Snake",
     "Pong"
    ],
    "a": "Tetris"
   },
   {
    "q": "Quelle entreprise japonaise fabrique la Switch et la Game Boy ?",
    "c": [
     "Nintendo",
     "Sony",
     "Microsoft",
     "Sega"
    ],
    "a": "Nintendo"
   },
   {
    "q": "Quel jeu de battle royale coloré d'Epic Games a explosé en 2018 ?",
    "c": [
     "Fortnite",
     "PUBG",
     "Apex",
     "Warzone"
    ],
    "a": "Fortnite"
   },
   {
    "q": "Comment appelle-t-on un joueur professionnel de compétition vidéo ? Un joueur ___ (esport) ?",
    "c": [
     "pro",
     "noob",
     "bot",
     "fan"
    ],
    "a": "pro"
   },
   {
    "q": "En quelle année est sorti « Pong », l'un des tout premiers jeux vidéo commerciaux ?",
    "a": "1972"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_005",
  "cat": "tech",
  "name": "La réalité virtuelle",
  "level": "classique",
  "levels": [
   {
    "q": "Que met-on sur les yeux pour plonger en réalité virtuelle ? Un ___ (VR) ?",
    "c": [
     "casque",
     "chapeau",
     "masque à gaz",
     "bandeau"
    ],
    "a": "casque"
   },
   {
    "q": "Que signifie le sigle VR (anglais) ? Virtual ___ ?",
    "c": [
     "Reality",
     "Room",
     "Racing",
     "Robot"
    ],
    "a": "Reality"
   },
   {
    "q": "Comment appelle-t-on un monde numérique où l'on s'immerge, popularisé par Meta ? Le ___ ?",
    "c": [
     "métavers",
     "cyberspace",
     "internet",
     "cloud"
    ],
    "a": "métavers"
   },
   {
    "q": "Quelle entreprise, ex-Facebook, a racheté le fabricant de casques Oculus ?",
    "c": [
     "Meta",
     "Google",
     "Apple",
     "Sony"
    ],
    "a": "Meta"
   },
   {
    "q": "Comment appelle-t-on la réalité qui superpose des éléments virtuels au monde réel ? La réalité ___ ?",
    "c": [
     "augmentée",
     "diminuée",
     "parallèle",
     "inversée"
    ],
    "a": "augmentée"
   },
   {
    "q": "Quel jeu mobile de 2016 a fait chercher des créatures en réalité augmentée ? Pokémon ___ ?",
    "c": [
     "Go",
     "Red",
     "Sun",
     "Arena"
    ],
    "a": "Go"
   },
   {
    "q": "Quel casque de réalité mixte Apple a-t-il lancé en 2024 ? L'Apple Vision ___ ?",
    "c": [
     "Pro",
     "Max",
     "Air",
     "One"
    ],
    "a": "Pro"
   },
   {
    "q": "En quelle année le terme « réalité virtuelle » a-t-il été popularisé par Jaron Lanier ?",
    "a": "1987"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_006",
  "cat": "tech",
  "name": "Les réseaux sociaux",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quel réseau social, à l'oiseau bleu à l'origine, publie-t-on de courts messages ? X (ex-___) ?",
    "c": [
     "Twitter",
     "Skype",
     "MSN",
     "Yahoo"
    ],
    "a": "Twitter"
   },
   {
    "q": "Quel réseau social de partage de photos appartient à Meta ?",
    "c": [
     "Instagram",
     "LinkedIn",
     "Pinterest",
     "Reddit"
    ],
    "a": "Instagram"
   },
   {
    "q": "Comment appelle-t-on un mot-clé précédé d'un dièse sur les réseaux ? Un ___ ?",
    "c": [
     "hashtag",
     "tweet",
     "post",
     "like"
    ],
    "a": "hashtag"
   },
   {
    "q": "Quelle appli chinoise de vidéos courtes et virales cartonne chez les jeunes ?",
    "c": [
     "TikTok",
     "Snapchat",
     "Vine",
     "Triller"
    ],
    "a": "TikTok"
   },
   {
    "q": "Comment appelle-t-on le bouton pour approuver une publication ? Un ___ (j'aime) ?",
    "c": [
     "like",
     "share",
     "poke",
     "tag"
    ],
    "a": "like"
   },
   {
    "q": "Qui a cofondé Facebook dans sa chambre d'étudiant à Harvard ? Mark ___ ?",
    "c": [
     "Zuckerberg",
     "Dorsey",
     "Musk",
     "Bezos"
    ],
    "a": "Zuckerberg"
   },
   {
    "q": "Comment appelle-t-on une personne très suivie qui fait la promotion de produits ? Un ___ ?",
    "c": [
     "influenceur",
     "abonné",
     "modérateur",
     "administrateur"
    ],
    "a": "influenceur"
   },
   {
    "q": "En quelle année Facebook a-t-il été créé par Mark Zuckerberg ?",
    "a": "2004"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_007",
  "cat": "tech",
  "name": "La robotique",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on une machine programmable qui exécute des tâches ? Un ___ ?",
    "c": [
     "robot",
     "moteur",
     "capteur",
     "câble"
    ],
    "a": "robot"
   },
   {
    "q": "Quel robot aspirateur autonome nettoie les sols tout seul ?",
    "c": [
     "aspirateur",
     "grille-pain",
     "réveil",
     "ventilateur"
    ],
    "a": "aspirateur"
   },
   {
    "q": "Comment appelle-t-on un robot à l'apparence humaine ? Un ___ ?",
    "c": [
     "androïde",
     "cyborg",
     "avatar",
     "clone"
    ],
    "a": "androïde"
   },
   {
    "q": "Dans quel secteur des usines les bras robotisés assemblent-ils les voitures ? L'___ ?",
    "c": [
     "industrie",
     "agriculture",
     "médecine",
     "école"
    ],
    "a": "industrie"
   },
   {
    "q": "Quel écrivain a énoncé les trois lois de la robotique ? Isaac ___ ?",
    "c": [
     "Asimov",
     "Verne",
     "Orwell",
     "Dick"
    ],
    "a": "Asimov"
   },
   {
    "q": "Quelle entreprise américaine est célèbre pour ses robots chien et humanoïdes ? Boston ___ ?",
    "c": [
     "Dynamics",
     "Robotics",
     "Motors",
     "Systems"
    ],
    "a": "Dynamics"
   },
   {
    "q": "Comment appelle-t-on la vallée du malaise face à un robot presque humain ? La vallée de l'___ ?",
    "c": [
     "étrange",
     "mort",
     "silence",
     "oubli"
    ],
    "a": "étrange"
   },
   {
    "q": "En quelle année le mot « robot » est-il apparu, dans la pièce R.U.R. de Karel Čapek ?",
    "a": "1920"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_008",
  "cat": "tech",
  "name": "Le cloud computing",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie « cloud » en anglais, ce mot désignant le stockage en ligne ? Le ___ ?",
    "c": [
     "nuage",
     "ciel",
     "brouillard",
     "orage"
    ],
    "a": "nuage"
   },
   {
    "q": "Où sont réellement stockées les données du cloud ? Dans des ___ (data centers) ?",
    "c": [
     "serveurs",
     "nuages",
     "satellites",
     "clés USB"
    ],
    "a": "serveurs"
   },
   {
    "q": "Quel service Google permet de stocker fichiers et documents en ligne ? Google ___ ?",
    "c": [
     "Drive",
     "Cloud",
     "Box",
     "Store"
    ],
    "a": "Drive"
   },
   {
    "q": "Quel géant du e-commerce est aussi le n°1 du cloud avec AWS ?",
    "c": [
     "Amazon",
     "Google",
     "Microsoft",
     "IBM"
    ],
    "a": "Amazon"
   },
   {
    "q": "Comment accède-t-on à ses données dans le cloud, de n'importe où ? Via ___ ?",
    "c": [
     "Internet",
     "le courrier",
     "la radio",
     "le fax"
    ],
    "a": "Internet"
   },
   {
    "q": "Quel service de Microsoft est le concurrent cloud d'Amazon AWS ? Microsoft ___ ?",
    "c": [
     "Azure",
     "Cloud",
     "One",
     "Sky"
    ],
    "a": "Azure"
   },
   {
    "q": "Comment appelle-t-on le modèle où un logiciel est loué en ligne par abonnement ? Le ___ (Software as a Service) ?",
    "c": [
     "SaaS",
     "PaaS",
     "IaaS",
     "DaaS"
    ],
    "a": "SaaS"
   },
   {
    "q": "Quel pourcentage, environ, du marché mondial du cloud AWS détient-il (leader) ?",
    "a": "31"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_009",
  "cat": "tech",
  "name": "La cryptographie",
  "level": "classique",
  "levels": [
   {
    "q": "À quoi sert la cryptographie ? À ___ des messages ?",
    "c": [
     "chiffrer",
     "afficher",
     "imprimer",
     "traduire"
    ],
    "a": "chiffrer"
   },
   {
    "q": "Comment appelle-t-on un message rendu illisible par chiffrement ? Un message ___ ?",
    "c": [
     "crypté",
     "clair",
     "public",
     "ouvert"
    ],
    "a": "crypté"
   },
   {
    "q": "Quelle machine allemande de chiffrement de la 2e Guerre mondiale a été cassée par les Alliés ?",
    "c": [
     "Enigma",
     "Colossus",
     "Bombe",
     "Lorenz"
    ],
    "a": "Enigma"
   },
   {
    "q": "Quel mathématicien britannique a cassé le code Enigma ? Alan ___ ?",
    "c": [
     "Turing",
     "Newton",
     "Babbage",
     "Lovelace"
    ],
    "a": "Turing"
   },
   {
    "q": "Quelle monnaie numérique repose sur la cryptographie et la blockchain ? Le ___ ?",
    "c": [
     "bitcoin",
     "dollar",
     "euro",
     "franc"
    ],
    "a": "bitcoin"
   },
   {
    "q": "Comment appelle-t-on la « clé » secrète qui permet de déchiffrer un message ? La ___ ?",
    "c": [
     "clé",
     "porte",
     "serrure",
     "carte"
    ],
    "a": "clé"
   },
   {
    "q": "Comment appelle-t-on le registre décentralisé et infalsifiable des cryptomonnaies ? La ___ ?",
    "c": [
     "blockchain",
     "cloud",
     "database",
     "mainframe"
    ],
    "a": "blockchain"
   },
   {
    "q": "En quelle année le bitcoin, première cryptomonnaie, a-t-il été créé par Satoshi Nakamoto ?",
    "a": "2009"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_010",
  "cat": "tech",
  "name": "Les drones",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel milieu se déplace principalement un drone ? Dans les ___ ?",
    "c": [
     "airs",
     "mers",
     "tunnels",
     "égouts"
    ],
    "a": "airs"
   },
   {
    "q": "Combien d'hélices possède un « quadricoptère », le drone grand public typique ?",
    "a": "4"
   },
   {
    "q": "À quoi sert souvent la caméra embarquée sous un drone de loisir ? À ___ ?",
    "c": [
     "filmer",
     "cuisiner",
     "chauffer",
     "peser"
    ],
    "a": "filmer"
   },
   {
    "q": "Comment pilote-t-on un drone à distance ? Avec une ___ ?",
    "c": [
     "télécommande",
     "manivelle",
     "pédale",
     "clé"
    ],
    "a": "télécommande"
   },
   {
    "q": "Quelle entreprise chinoise est le leader mondial des drones grand public ?",
    "c": [
     "DJI",
     "Parrot",
     "GoPro",
     "Yuneec"
    ],
    "a": "DJI"
   },
   {
    "q": "Dans quel domaine militaire les drones sont-ils très utilisés ? La ___ ?",
    "c": [
     "surveillance",
     "cuisine",
     "musique",
     "peinture"
    ],
    "a": "surveillance"
   },
   {
    "q": "Quel projet d'Amazon vise à livrer des colis par drone ? Prime ___ ?",
    "c": [
     "Air",
     "Now",
     "Fly",
     "Sky"
    ],
    "a": "Air"
   },
   {
    "q": "À quelle altitude maximale, en mètres, un drone de loisir peut-il légalement voler en France ?",
    "a": "120"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_011",
  "cat": "tech",
  "name": "L'impression 3D",
  "level": "classique",
  "levels": [
   {
    "q": "En combien de dimensions une imprimante 3D crée-t-elle un objet ?",
    "a": "3"
   },
   {
    "q": "Quelle matière l'imprimante 3D grand public fait-elle fondre couche par couche ? Le ___ ?",
    "c": [
     "plastique",
     "verre",
     "papier",
     "tissu"
    ],
    "a": "plastique"
   },
   {
    "q": "Comment appelle-t-on la superposition successive de fines couches en impression 3D ? La fabrication ___ ?",
    "c": [
     "additive",
     "soustractive",
     "massive",
     "négative"
    ],
    "a": "additive"
   },
   {
    "q": "Quel fichier de conception, réalisé sur ordinateur, l'imprimante 3D lit-elle ? Un modèle ___ ?",
    "c": [
     "3D",
     "2D",
     "PDF",
     "MP3"
    ],
    "a": "3D"
   },
   {
    "q": "Sous quelle forme le plastique arrive-t-il dans l'imprimante 3D grand public ? En ___ (fil) ?",
    "c": [
     "bobine",
     "poudre",
     "bloc",
     "liquide"
    ],
    "a": "bobine"
   },
   {
    "q": "Dans quel domaine médical imprime-t-on prothèses et modèles d'organes ? La ___ ?",
    "c": [
     "médecine",
     "cuisine",
     "musique",
     "mode"
    ],
    "a": "médecine"
   },
   {
    "q": "Quel matériau peut-on imprimer en 3D pour construire des maisons entières ? Le ___ ?",
    "c": [
     "béton",
     "bois",
     "verre",
     "cuir"
    ],
    "a": "béton"
   },
   {
    "q": "En quelle année le premier brevet d'impression 3D (stéréolithographie) a-t-il été déposé ?",
    "a": "1984"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_012",
  "cat": "tech",
  "name": "Les batteries",
  "level": "classique",
  "levels": [
   {
    "q": "À quoi sert une batterie ? À stocker de l'___ ?",
    "c": [
     "énergie",
     "eau",
     "air",
     "lumière"
    ],
    "a": "énergie"
   },
   {
    "q": "Quel métal léger équipe la plupart des batteries de smartphones ? Le ___ ?",
    "c": [
     "lithium",
     "plomb",
     "fer",
     "or"
    ],
    "a": "lithium"
   },
   {
    "q": "Comment appelle-t-on l'action de redonner de l'énergie à une batterie ? La ___ ?",
    "c": [
     "recharge",
     "décharge",
     "vidange",
     "fusion"
    ],
    "a": "recharge"
   },
   {
    "q": "Quelles bornes une pile possède-t-elle : une positive et une ___ ?",
    "c": [
     "négative",
     "neutre",
     "double",
     "verte"
    ],
    "a": "négative"
   },
   {
    "q": "Quel savant italien a inventé la première pile électrique ? Alessandro ___ ?",
    "c": [
     "Volta",
     "Galvani",
     "Fermi",
     "Marconi"
    ],
    "a": "Volta"
   },
   {
    "q": "Quel type de véhicule dépend surtout de grosses batteries lithium ? La voiture ___ ?",
    "c": [
     "électrique",
     "diesel",
     "essence",
     "hybride"
    ],
    "a": "électrique"
   },
   {
    "q": "En quelle unité mesure-t-on la capacité d'une batterie de smartphone ? Le ___ (mAh) ?",
    "c": [
     "milliampère-heure",
     "watt",
     "volt",
     "joule"
    ],
    "a": "milliampère-heure"
   },
   {
    "q": "En quelle année Alessandro Volta a-t-il inventé la pile électrique ?",
    "a": "1800"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_013",
  "cat": "tech",
  "name": "Les LED",
  "level": "classique",
  "levels": [
   {
    "q": "Que produit principalement une LED ? De la ___ ?",
    "c": [
     "lumière",
     "chaleur",
     "eau",
     "fumée"
    ],
    "a": "lumière"
   },
   {
    "q": "Que signifie le sigle LED : Diode Électro___ ? (Light Emitting Diode)",
    "c": [
     "luminescente",
     "magnétique",
     "statique",
     "thermique"
    ],
    "a": "luminescente"
   },
   {
    "q": "Quel gros avantage la LED a-t-elle face à l'ampoule classique ? Elle consomme ___ ?",
    "c": [
     "peu",
     "beaucoup",
     "de l'eau",
     "du gaz"
    ],
    "a": "peu"
   },
   {
    "q": "Quel composant électronique la LED est-elle ? Une ___ ?",
    "c": [
     "diode",
     "résistance",
     "pile",
     "bobine"
    ],
    "a": "diode"
   },
   {
    "q": "Quelle couleur de LED fut la plus difficile à inventer, récompensée par un Nobel ? La ___ ?",
    "c": [
     "bleue",
     "rouge",
     "verte",
     "jaune"
    ],
    "a": "bleue"
   },
   {
    "q": "Dans quels grands écrans plats les LED servent-elles de rétroéclairage ? Les ___ ?",
    "c": [
     "télévisions",
     "livres",
     "montres",
     "radios"
    ],
    "a": "télévisions"
   },
   {
    "q": "Combien d'heures, environ en milliers, une LED peut-elle fonctionner (durée de vie) ?",
    "c": [
     "50",
     "5",
     "500",
     "1"
    ],
    "a": "50"
   },
   {
    "q": "En quelle année la LED rouge, première LED visible, a-t-elle été inventée par Nick Holonyak ?",
    "a": "1962"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_014",
  "cat": "tech",
  "name": "Les panneaux solaires",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle source d'énergie les panneaux solaires captent-ils ? Le ___ ?",
    "c": [
     "soleil",
     "vent",
     "charbon",
     "gaz"
    ],
    "a": "soleil"
   },
   {
    "q": "En quoi les panneaux solaires transforment-ils la lumière ? En ___ ?",
    "c": [
     "électricité",
     "eau",
     "essence",
     "chaleur"
    ],
    "a": "électricité"
   },
   {
    "q": "Comment appelle-t-on la technologie qui transforme la lumière en courant ? Le ___ ?",
    "c": [
     "photovoltaïque",
     "hydraulique",
     "thermique",
     "nucléaire"
    ],
    "a": "photovoltaïque"
   },
   {
    "q": "Quel matériau semi-conducteur compose la plupart des panneaux solaires ? Le ___ ?",
    "c": [
     "silicium",
     "cuivre",
     "plomb",
     "zinc"
    ],
    "a": "silicium"
   },
   {
    "q": "Sur quelle partie de la maison installe-t-on souvent les panneaux ? Le ___ ?",
    "c": [
     "toit",
     "sous-sol",
     "garage",
     "jardin"
    ],
    "a": "toit"
   },
   {
    "q": "L'énergie solaire est-elle renouvelable ou fossile ?",
    "c": [
     "renouvelable",
     "fossile",
     "nucléaire",
     "chimique"
    ],
    "a": "renouvelable"
   },
   {
    "q": "Quel pays est le plus grand producteur d'énergie solaire au monde ?",
    "c": [
     "Chine",
     "France",
     "Brésil",
     "Canada"
    ],
    "a": "Chine"
   },
   {
    "q": "Quel pourcentage, environ, de rendement atteint un bon panneau solaire domestique récent ?",
    "a": "22"
   }
  ],
  "rw": true
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
 },
 {
  "id": "original_001",
  "cat": "insolite",
  "name": "Les essuie-glaces",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Contre quoi les essuie-glaces protègent-ils la visibilité du conducteur ? La ___ ?",
    "c": [
     "pluie",
     "neige",
     "boue",
     "grêle"
    ],
    "a": "pluie"
   },
   {
    "q": "Sur quelle partie de la voiture les essuie-glaces balaient-ils ? Le ___ ?",
    "c": [
     "pare-brise",
     "capot",
     "toit",
     "coffre"
    ],
    "a": "pare-brise"
   },
   {
    "q": "Combien d'essuie-glaces trouve-t-on généralement à l'avant d'une voiture ?",
    "a": "2"
   },
   {
    "q": "Quelle partie souple en caoutchouc racle l'eau sur la vitre ? La ___ ?",
    "c": [
     "lame",
     "brosse",
     "raclette",
     "éponge"
    ],
    "a": "lame"
   },
   {
    "q": "Quel liquide, projeté sur le pare-brise, aide au nettoyage ? Le lave-___ ?",
    "c": [
     "glace",
     "vitre",
     "phare",
     "moteur"
    ],
    "a": "glace"
   },
   {
    "q": "Comment appelle-t-on le rythme lent des essuie-glaces sous une pluie fine ? Le mode ___ ?",
    "c": [
     "intermittent",
     "continu",
     "rapide",
     "turbo"
    ],
    "a": "intermittent"
   },
   {
    "q": "Quel inventeur américain a breveté l'essuie-glace en 1903 ? Mary ___ ? (Anderson)",
    "c": [
     "Anderson",
     "Ford",
     "Benz",
     "Edison"
    ],
    "a": "Anderson"
   },
   {
    "q": "En quelle année exacte Mary Anderson a-t-elle breveté le premier essuie-glace ?",
    "a": "1903"
   }
  ]
 },
 {
  "id": "original_002",
  "cat": "insolite",
  "name": "Jean-Jacques Goldman",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Quel métier exerce Jean-Jacques Goldman ? Il est chanteur et ___ ?",
    "c": [
     "compositeur",
     "acteur",
     "peintre",
     "danseur"
    ],
    "a": "compositeur"
   },
   {
    "q": "De quelle nationalité est Jean-Jacques Goldman ?",
    "c": [
     "française",
     "belge",
     "suisse",
     "anglaise"
    ],
    "a": "française"
   },
   {
    "q": "Quel tube de Goldman évoque « il changeait la vie » sur un artisan ? « Il ___ la vie » ?",
    "c": [
     "changeait",
     "aimait",
     "rêvait",
     "gagnait"
    ],
    "a": "changeait"
   },
   {
    "q": "Quel trio Goldman a-t-il formé, avec Fredericks et Jones, dans les années 90 ?",
    "c": [
     "Fredericks Goldman Jones",
     "Téléphone",
     "Gold",
     "Indochine"
    ],
    "a": "Fredericks Goldman Jones"
   },
   {
    "q": "Pour quelle chanteuse québécoise Goldman a-t-il écrit « D'eux » ? Céline ___ ?",
    "c": [
     "Dion",
     "Farmer",
     "Fabian",
     "Cardin"
    ],
    "a": "Dion"
   },
   {
    "q": "Quelle chanson de Goldman commence par « Et si j'étais né en 17 à ___ » ?",
    "c": [
     "Leidenstadt",
     "Berlin",
     "Paris",
     "Varsovie"
    ],
    "a": "Leidenstadt"
   },
   {
    "q": "Quel spectacle caritatif Goldman a-t-il longtemps soutenu en écrivant sa chanson-hymne ? Les ___ du cœur ?",
    "c": [
     "Restos",
     "Amis",
     "Voix",
     "Enfants"
    ],
    "a": "Restos"
   },
   {
    "q": "En quelle année Jean-Jacques Goldman est-il né, à Paris ?",
    "a": "1951"
   }
  ]
 },
 {
  "id": "original_003",
  "cat": "insolite",
  "name": "La langue (l'organe)",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Dans quelle partie du corps se trouve la langue ? La ___ ?",
    "c": [
     "bouche",
     "main",
     "oreille",
     "narine"
    ],
    "a": "bouche"
   },
   {
    "q": "Quel sens principal la langue permet-elle grâce à ses papilles ? Le ___ ?",
    "c": [
     "goût",
     "toucher",
     "odorat",
     "ouïe"
    ],
    "a": "goût"
   },
   {
    "q": "Comment appelle-t-on les petites bosses sur la langue qui détectent les saveurs ? Les ___ ?",
    "c": [
     "papilles",
     "villosités",
     "alvéoles",
     "cellules"
    ],
    "a": "papilles"
   },
   {
    "q": "Combien de saveurs de base la langue distingue-t-elle traditionnellement (sucré, salé, acide, amer) ?",
    "a": "4"
   },
   {
    "q": "Quelle cinquième saveur, japonaise, s'ajoute aux quatre classiques ? L'___ ?",
    "c": [
     "umami",
     "wasabi",
     "yuzu",
     "dashi"
    ],
    "a": "umami"
   },
   {
    "q": "De quoi la langue est-elle essentiellement constituée, ce qui la rend très mobile ? De ___ ?",
    "c": [
     "muscles",
     "os",
     "cartilage",
     "graisse"
    ],
    "a": "muscles"
   },
   {
    "q": "Comme les empreintes digitales, quelle particularité l'empreinte de la langue possède-t-elle ? Elle est ___ ?",
    "c": [
     "unique",
     "lisse",
     "plate",
     "double"
    ],
    "a": "unique"
   },
   {
    "q": "De combien de muscles, environ, est composée la langue humaine ?",
    "a": "17"
   }
  ]
 },
 {
  "id": "original_004",
  "cat": "insolite",
  "name": "Les ronds-points",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "À quel type de croisement le rond-point sert-il d'alternative ? Le ___ ?",
    "c": [
     "carrefour",
     "tunnel",
     "pont",
     "péage"
    ],
    "a": "carrefour"
   },
   {
    "q": "Dans quel sens tourne-t-on sur un rond-point en France ?",
    "c": [
     "antihoraire",
     "horaire",
     "aléatoire",
     "reculons"
    ],
    "a": "antihoraire"
   },
   {
    "q": "Qui est prioritaire sur un rond-point français : ceux qui ___ ou ceux qui entrent ?",
    "c": [
     "y sont",
     "entrent",
     "attendent",
     "klaxonnent"
    ],
    "a": "y sont"
   },
   {
    "q": "Quel pays est célèbre pour avoir le plus de ronds-points au monde par habitant ?",
    "c": [
     "France",
     "Allemagne",
     "Italie",
     "Espagne"
    ],
    "a": "France"
   },
   {
    "q": "Quel mouvement social de 2018 a occupé les ronds-points français ? Les gilets ___ ?",
    "c": [
     "jaunes",
     "rouges",
     "verts",
     "bleus"
    ],
    "a": "jaunes"
   },
   {
    "q": "Comment appelle-t-on l'îlot central, souvent décoré, d'un rond-point ? Le terre-___ ?",
    "c": [
     "plein",
     "sol",
     "herbe",
     "fleur"
    ],
    "a": "plein"
   },
   {
    "q": "Dans quel pays la règle moderne du giratoire (priorité à l'anneau) a-t-elle été codifiée en 1966 ? Le ___-Uni ?",
    "c": [
     "Royaume",
     "États",
     "Pays",
     "Emirats"
    ],
    "a": "Royaume"
   },
   {
    "q": "Combien de ronds-points, environ, compte la France, championne du monde en la matière ?",
    "a": "50000"
   }
  ]
 },
 {
  "id": "original_005",
  "cat": "insolite",
  "name": "Le papier toilette",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Dans quelle pièce de la maison utilise-t-on surtout le papier toilette ? Les ___ ?",
    "c": [
     "toilettes",
     "cuisine",
     "chambre",
     "garage"
    ],
    "a": "toilettes"
   },
   {
    "q": "Sous quelle forme le papier toilette est-il vendu ? En ___ ?",
    "c": [
     "rouleaux",
     "feuilles",
     "boîtes",
     "tubes"
    ],
    "a": "rouleaux"
   },
   {
    "q": "Quel débat oppose les gens : le sens du rouleau, feuille devant ou ___ ?",
    "c": [
     "derrière",
     "dessus",
     "dessous",
     "côté"
    ],
    "a": "derrière"
   },
   {
    "q": "Quel pays asiatique a inventé le papier, puis le papier hygiénique ? La ___ ?",
    "c": [
     "Chine",
     "Inde",
     "Japon",
     "Corée"
    ],
    "a": "Chine"
   },
   {
    "q": "Quel équipement japonais high-tech remplace parfois le papier toilette ? Les toilettes à jet d'___ ?",
    "c": [
     "eau",
     "air",
     "mousse",
     "vapeur"
    ],
    "a": "eau"
   },
   {
    "q": "Quel événement mondial de 2020 a provoqué une pénurie et des ruées sur le papier toilette ? La ___ ?",
    "c": [
     "pandémie",
     "guerre",
     "canicule",
     "grève"
    ],
    "a": "pandémie"
   },
   {
    "q": "Comment appelle-t-on le nombre de couches superposées d'un papier toilette ? Le nombre d'___ ?",
    "c": [
     "épaisseurs",
     "plis",
     "bandes",
     "carrés"
    ],
    "a": "épaisseurs"
   },
   {
    "q": "Combien de feuilles, environ, une personne utilise-t-elle en moyenne par jour ?",
    "a": "57"
   }
  ]
 },
 {
  "id": "original_006",
  "cat": "insolite",
  "name": "Les moustaches",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Sur quelle partie du visage pousse la moustache ? Au-dessus de la ___ ?",
    "c": [
     "bouche",
     "oreille",
     "joue",
     "paupière"
    ],
    "a": "bouche"
   },
   {
    "q": "Avec quel outil taille-t-on une moustache ? Un ___ ?",
    "c": [
     "rasoir",
     "peigne",
     "ciseau à bois",
     "couteau"
    ],
    "a": "rasoir"
   },
   {
    "q": "Quel mois de sensibilisation à la santé masculine invite à porter la moustache ?",
    "c": [
     "Movember",
     "Noël",
     "Octobre",
     "Janvier"
    ],
    "a": "Movember"
   },
   {
    "q": "Quel dictateur allemand est tristement associé à une petite moustache carrée ?",
    "c": [
     "Hitler",
     "Staline",
     "Franco",
     "Mussolini"
    ],
    "a": "Hitler"
   },
   {
    "q": "Quel personnage de jeu vidéo plombier italien arbore une célèbre moustache ?",
    "c": [
     "Mario",
     "Sonic",
     "Link",
     "Kirby"
    ],
    "a": "Mario"
   },
   {
    "q": "Quel style de moustache est cirée et recourbée vers le haut aux extrémités ? La moustache à la ___ ? (Dalí)",
    "c": [
     "Dalí",
     "César",
     "gauloise",
     "hongroise"
    ],
    "a": "Dalí"
   },
   {
    "q": "Quel détective belge d'Agatha Christie est fier de sa moustache impeccable ?",
    "c": [
     "Poirot",
     "Holmes",
     "Maigret",
     "Columbo"
    ],
    "a": "Poirot"
   },
   {
    "q": "Combien de poils, environ, compte une moustache humaine masculine bien fournie ?",
    "a": "600"
   }
  ]
 },
 {
  "id": "original_007",
  "cat": "insolite",
  "name": "La sieste",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "À quel moment de la journée fait-on généralement la sieste ? L'après-___ ?",
    "c": [
     "midi",
     "soir",
     "aube",
     "nuit"
    ],
    "a": "midi"
   },
   {
    "q": "Quelle activité principale fait-on pendant une sieste ? On ___ ?",
    "c": [
     "dort",
     "court",
     "mange",
     "travaille"
    ],
    "a": "dort"
   },
   {
    "q": "Dans quel pays méditerranéen la sieste est-elle une tradition culturelle ?",
    "c": [
     "Espagne",
     "Suède",
     "Norvège",
     "Islande"
    ],
    "a": "Espagne"
   },
   {
    "q": "Comment appelle-t-on la sieste espagnole traditionnelle ? La ___ ?",
    "c": [
     "siesta",
     "pausa",
     "dormida",
     "reposo"
    ],
    "a": "siesta"
   },
   {
    "q": "Combien de minutes dure idéalement une « micro-sieste » réparatrice ?",
    "c": [
     "20",
     "90",
     "5",
     "120"
    ],
    "a": "20"
   },
   {
    "q": "Quel repas précède souvent la sieste, favorisant la somnolence ? Le ___ ?",
    "c": [
     "déjeuner",
     "petit-déjeuner",
     "dîner",
     "goûter"
    ],
    "a": "déjeuner"
   },
   {
    "q": "Quelle phase de sommeil profond faut-il éviter d'atteindre en sieste pour ne pas être groggy ? Le sommeil ___ ?",
    "c": [
     "profond",
     "léger",
     "paradoxal",
     "lent"
    ],
    "a": "profond"
   },
   {
    "q": "De combien de minutes, au maximum, une sieste dite « flash » ne doit-elle pas dépasser ?",
    "a": "10"
   }
  ]
 },
 {
  "id": "original_008",
  "cat": "insolite",
  "name": "Le Nutella",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Quelle est la couleur de la pâte à tartiner Nutella ?",
    "c": [
     "marron",
     "jaune",
     "rouge",
     "vert"
    ],
    "a": "marron"
   },
   {
    "q": "Quel fruit sec est l'un des ingrédients phares du Nutella ? La ___ ?",
    "c": [
     "noisette",
     "amande",
     "cacahuète",
     "noix"
    ],
    "a": "noisette"
   },
   {
    "q": "Sur quoi étale-t-on classiquement le Nutella au petit-déjeuner ? Une ___ ?",
    "c": [
     "tartine",
     "salade",
     "pizza",
     "soupe"
    ],
    "a": "tartine"
   },
   {
    "q": "De quel pays européen la marque Nutella est-elle originaire ?",
    "c": [
     "Italie",
     "France",
     "Belgique",
     "Suisse"
    ],
    "a": "Italie"
   },
   {
    "q": "Quelle entreprise italienne fabrique le Nutella ?",
    "c": [
     "Ferrero",
     "Barilla",
     "Lavazza",
     "Nestlé"
    ],
    "a": "Ferrero"
   },
   {
    "q": "Quelle autre saveur, avec la noisette, domine le goût du Nutella ? Le ___ ?",
    "c": [
     "cacao",
     "café",
     "caramel",
     "vanille"
    ],
    "a": "cacao"
   },
   {
    "q": "Quelle journée mondiale, non officielle, célèbre le Nutella chaque 5 février ? Le World Nutella ___ ?",
    "c": [
     "Day",
     "Time",
     "Fest",
     "Week"
    ],
    "a": "Day"
   },
   {
    "q": "En quelle année le Nutella, sous ce nom, a-t-il été commercialisé pour la première fois ?",
    "a": "1964"
   }
  ]
 },
 {
  "id": "original_009",
  "cat": "insolite",
  "name": "Les licornes",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Quel attribut unique la licorne porte-t-elle sur le front ? Une ___ ?",
    "c": [
     "corne",
     "plume",
     "crête",
     "antenne"
    ],
    "a": "corne"
   },
   {
    "q": "À quel animal ressemble le corps de la licorne ? Un ___ ?",
    "c": [
     "cheval",
     "cerf",
     "lion",
     "âne"
    ],
    "a": "cheval"
   },
   {
    "q": "De quelle couleur pure la licorne est-elle traditionnellement représentée ?",
    "c": [
     "blanche",
     "noire",
     "rouge",
     "verte"
    ],
    "a": "blanche"
   },
   {
    "q": "La licorne est un animal réel ou imaginaire ?",
    "c": [
     "imaginaire",
     "réel",
     "disparu",
     "microscopique"
    ],
    "a": "imaginaire"
   },
   {
    "q": "Sur le drapeau et les armoiries de quel pays figure une licorne ? L'___ ?",
    "c": [
     "Écosse",
     "Irlande",
     "Pays de Galles",
     "Angleterre"
    ],
    "a": "Écosse"
   },
   {
    "q": "Quel symbole moderne, arc-en-ciel et licorne, la licorne est-elle devenue ? Un symbole ___ (magie/positivité) ?",
    "c": [
     "féérique",
     "militaire",
     "religieux",
     "sportif"
    ],
    "a": "féérique"
   },
   {
    "q": "En économie, quel nom donne-t-on à une start-up valorisée à plus d'un milliard de dollars ? Une ___ ?",
    "c": [
     "licorne",
     "baleine",
     "gazelle",
     "panthère"
    ],
    "a": "licorne"
   },
   {
    "q": "À quel animal marin à longue défense torsadée la légende de la licorne serait-elle en partie liée ? Le ___ ?",
    "c": [
     "narval",
     "dauphin",
     "requin",
     "espadon"
    ],
    "a": "narval"
   }
  ]
 },
 {
  "id": "original_010",
  "cat": "insolite",
  "name": "La raclette",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Quel aliment principal fait-on fondre pour une raclette ? Le ___ ?",
    "c": [
     "fromage",
     "chocolat",
     "beurre",
     "pain"
    ],
    "a": "fromage"
   },
   {
    "q": "Quel féculent accompagne traditionnellement la raclette ? La pomme de ___ ?",
    "c": [
     "terre",
     "pin",
     "reinette",
     "air"
    ],
    "a": "terre"
   },
   {
    "q": "Dans quel appareil fait-on fondre le fromage à raclette ? L'appareil à ___ ?",
    "c": [
     "raclette",
     "fondue",
     "gaufre",
     "croque"
    ],
    "a": "raclette"
   },
   {
    "q": "De quel pays alpin la raclette est-elle originaire ?",
    "c": [
     "Suisse",
     "Italie",
     "Autriche",
     "Allemagne"
    ],
    "a": "Suisse"
   },
   {
    "q": "De quel canton suisse vient le fromage à raclette traditionnel ? Le ___ ?",
    "c": [
     "Valais",
     "Vaud",
     "Berne",
     "Zurich"
    ],
    "a": "Valais"
   },
   {
    "q": "Quelle charcuterie accompagne souvent la raclette ? La ___ ?",
    "c": [
     "charcuterie",
     "confiture",
     "moutarde",
     "salade"
    ],
    "a": "charcuterie"
   },
   {
    "q": "En quelle saison la raclette est-elle le plus appréciée ? L'___ ?",
    "c": [
     "hiver",
     "été",
     "printemps",
     "automne"
    ],
    "a": "hiver"
   },
   {
    "q": "À quelle température, en degrés, le fromage à raclette commence-t-il idéalement à fondre ?",
    "a": "55"
   }
  ]
 }
];
