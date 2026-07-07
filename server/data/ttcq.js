// =====================================================================
//  TTCQ — « Tu Te Cotes Combien ? » — banque de thèmes/questions.
//  363 thèmes, 8 questions progressives par thème (niveaux 1 à 8).
//  Réponse libre (saisie smartphone) OU QCM selon la question.
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
    "q": "Quelle génération de réseau mobile est la 5G ? La ___e ?",
    "c": [
     "5",
     "3",
     "4",
     "6"
    ],
    "a": "5"
   },
   {
    "q": "Quel grand avantage la 5G offre-t-elle par rapport à la 4G ? Plus de ___ ?",
    "c": [
     "vitesse",
     "poids",
     "bruit",
     "prix"
    ],
    "a": "vitesse"
   },
   {
    "q": "Sur quel appareil du quotidien profite-t-on surtout de la 5G ? Le ___ ?",
    "c": [
     "smartphone",
     "grille-pain",
     "aspirateur",
     "réveil"
    ],
    "a": "smartphone"
   },
   {
    "q": "Quelles installations émettent le signal 5G dans les villes ? Des ___ ?",
    "c": [
     "antennes",
     "moulins",
     "fontaines",
     "statues"
    ],
    "a": "antennes"
   },
   {
    "q": "Quelle très faible latence la 5G permet-elle, utile pour la voiture autonome ? Un temps de réponse ___ ?",
    "c": [
     "court",
     "long",
     "nul",
     "double"
    ],
    "a": "court"
   },
   {
    "q": "Quel objet connecté en réseau la 5G doit-elle faire exploser ? L'Internet des ___ ?",
    "c": [
     "objets",
     "gens",
     "idées",
     "rêves"
    ],
    "a": "objets"
   },
   {
    "q": "Quel pays a été pionnier du déploiement massif de la 5G ? La ___ du Sud ?",
    "c": [
     "Corée",
     "Chine",
     "Inde",
     "Afrique"
    ],
    "a": "Corée"
   },
   {
    "q": "En quelle année les premiers réseaux 5G commerciaux ont-ils été lancés ?",
    "a": "2019"
   }
  ],
  "rw": true
 },
 {
  "id": "tech_016",
  "cat": "tech",
  "name": "Les moteurs électriques",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle énergie alimente un moteur électrique ? L'___ ?",
    "c": [
     "électricité",
     "essence",
     "vapeur",
     "charbon"
    ],
    "a": "électricité"
   },
   {
    "q": "Quel phénomène invisible fait tourner un moteur électrique ? Le ___ (magnétisme) ?",
    "c": [
     "champ magnétique",
     "vent",
     "feu",
     "son"
    ],
    "a": "champ magnétique"
   },
   {
    "q": "Quel gros avantage écologique le moteur électrique a-t-il ? Il ne rejette pas de ___ à l'usage ?",
    "c": [
     "CO2",
     "eau",
     "lumière",
     "musique"
    ],
    "a": "CO2"
   },
   {
    "q": "Quelle partie tournante du moteur électrique porte ce nom ? Le ___ ?",
    "c": [
     "rotor",
     "piston",
     "carter",
     "vilebrequin"
    ],
    "a": "rotor"
   },
   {
    "q": "Quelle marque américaine de Elon Musk est pionnière de la voiture électrique ?",
    "c": [
     "Tesla",
     "Ford",
     "GM",
     "Toyota"
    ],
    "a": "Tesla"
   },
   {
    "q": "Quelle partie fixe du moteur, autour du rotor, porte ce nom ? Le ___ ?",
    "c": [
     "stator",
     "piston",
     "arbre",
     "carter"
    ],
    "a": "stator"
   },
   {
    "q": "Le moteur électrique est-il plus ou moins silencieux qu'un moteur thermique ?",
    "c": [
     "plus",
     "moins",
     "autant",
     "jamais"
    ],
    "a": "plus"
   },
   {
    "q": "Quel pourcentage de rendement, environ, peut atteindre un bon moteur électrique ?",
    "a": "95"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_001",
  "cat": "auto",
  "name": "Les moteurs essence",
  "level": "classique",
  "levels": [
   {
    "q": "Quel carburant liquide alimente un moteur essence ? L'___ ?",
    "c": [
     "essence",
     "eau",
     "lait",
     "vin"
    ],
    "a": "essence"
   },
   {
    "q": "Quelle pièce s'enfonce et remonte dans le cylindre du moteur ? Le ___ ?",
    "c": [
     "piston",
     "volant",
     "rétroviseur",
     "pare-choc"
    ],
    "a": "piston"
   },
   {
    "q": "Quelle petite pièce produit l'étincelle qui enflamme l'essence ? La ___ ?",
    "c": [
     "bougie",
     "batterie",
     "courroie",
     "durite"
    ],
    "a": "bougie"
   },
   {
    "q": "Combien de cylindres a un moteur « 4 cylindres » ?",
    "a": "4"
   },
   {
    "q": "Comment appelle-t-on le mélange air-essence brûlé dans le moteur ? La ___ ?",
    "c": [
     "combustion",
     "évaporation",
     "condensation",
     "fusion"
    ],
    "a": "combustion"
   },
   {
    "q": "En combien de « temps » fonctionne le moteur essence classique de voiture ?",
    "a": "4"
   },
   {
    "q": "Quel ingénieur allemand a donné son nom à un cycle de moteur essence ? Nikolaus ___ ?",
    "c": [
     "Otto",
     "Diesel",
     "Benz",
     "Daimler"
    ],
    "a": "Otto"
   },
   {
    "q": "Quel taux de compression, environ (rapport), a un moteur essence atmosphérique typique ? Environ ___ pour 1 ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_002",
  "cat": "auto",
  "name": "Les voitures électriques",
  "level": "classique",
  "levels": [
   {
    "q": "Par quoi remplace-t-on le plein d'essence sur une voiture électrique ? La ___ ?",
    "c": [
     "recharge",
     "vidange",
     "purge",
     "révision"
    ],
    "a": "recharge"
   },
   {
    "q": "Quel composant stocke l'énergie d'une voiture électrique ? La ___ ?",
    "c": [
     "batterie",
     "bougie",
     "durite",
     "courroie"
    ],
    "a": "batterie"
   },
   {
    "q": "Quelle marque américaine d'Elon Musk domine la voiture électrique ?",
    "c": [
     "Tesla",
     "Renault",
     "Fiat",
     "Ford"
    ],
    "a": "Tesla"
   },
   {
    "q": "Quel gaz d'échappement une voiture 100 % électrique n'émet-elle pas en roulant ? Le ___ ?",
    "c": [
     "CO2",
     "oxygène",
     "hélium",
     "azote"
    ],
    "a": "CO2"
   },
   {
    "q": "Où branche-t-on une voiture électrique pour la recharger ? À une ___ ?",
    "c": [
     "borne",
     "pompe",
     "prise d'eau",
     "citerne"
    ],
    "a": "borne"
   },
   {
    "q": "Quel métal léger est au cœur des batteries de voitures électriques ? Le ___ ?",
    "c": [
     "lithium",
     "plomb",
     "fer",
     "cuivre"
    ],
    "a": "lithium"
   },
   {
    "q": "Quel modèle Tesla, berline familiale, est le plus vendu ? La Model ___ ?",
    "c": [
     "3",
     "X",
     "S",
     "Y"
    ],
    "a": "3"
   },
   {
    "q": "Quelle autonomie, en km, environ, atteignent les meilleures voitures électriques récentes ?",
    "a": "600"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_003",
  "cat": "auto",
  "name": "Les pneus",
  "level": "classique",
  "levels": [
   {
    "q": "En quelle matière souple et noire les pneus sont-ils faits ? Le ___ ?",
    "c": [
     "caoutchouc",
     "métal",
     "bois",
     "verre"
    ],
    "a": "caoutchouc"
   },
   {
    "q": "Combien de pneus une voiture classique a-t-elle (hors secours) ?",
    "a": "4"
   },
   {
    "q": "Comment appelle-t-on les rainures du pneu qui évacuent l'eau ? Les ___ ?",
    "c": [
     "sculptures",
     "boulons",
     "jantes",
     "valves"
    ],
    "a": "sculptures"
   },
   {
    "q": "Quel gaz gonfle habituellement un pneu ? L'___ ?",
    "c": [
     "air",
     "hélium",
     "eau",
     "mousse"
    ],
    "a": "air"
   },
   {
    "q": "Quels pneus, cloutés ou à gomme spéciale, utilise-t-on en montagne l'hiver ? Les pneus ___ ?",
    "c": [
     "neige",
     "pluie",
     "sable",
     "boue"
    ],
    "a": "neige"
   },
   {
    "q": "Quelle marque française au bonhomme blanc en pneus est un géant du secteur ?",
    "c": [
     "Michelin",
     "Goodyear",
     "Pirelli",
     "Dunlop"
    ],
    "a": "Michelin"
   },
   {
    "q": "Comment appelle-t-on un pneu à plat, percé par un clou par exemple ? Une ___ ?",
    "c": [
     "crevaison",
     "vidange",
     "panne",
     "fuite"
    ],
    "a": "crevaison"
   },
   {
    "q": "Quelle pression, en bars, environ, gonfle-t-on un pneu de voiture de tourisme ?",
    "a": "2"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_004",
  "cat": "auto",
  "name": "Les boîtes de vitesses",
  "level": "classique",
  "levels": [
   {
    "q": "À quoi sert la boîte de vitesses ? À changer de ___ ?",
    "c": [
     "vitesse",
     "couleur",
     "musique",
     "siège"
    ],
    "a": "vitesse"
   },
   {
    "q": "Quelle pédale enfonce-t-on pour changer de vitesse en boîte manuelle ? L'___ ?",
    "c": [
     "embrayage",
     "frein",
     "accélérateur",
     "klaxon"
    ],
    "a": "embrayage"
   },
   {
    "q": "Comment appelle-t-on une boîte qui change les vitesses toute seule ? Une boîte ___ ?",
    "c": [
     "automatique",
     "manuelle",
     "libre",
     "double"
    ],
    "a": "automatique"
   },
   {
    "q": "Quelle vitesse enclenche-t-on pour reculer ? La marche ___ ?",
    "c": [
     "arrière",
     "avant",
     "lente",
     "haute"
    ],
    "a": "arrière"
   },
   {
    "q": "Avec quel levier change-t-on les vitesses à la main ? Le levier de ___ ?",
    "c": [
     "vitesses",
     "frein",
     "phares",
     "capot"
    ],
    "a": "vitesses"
   },
   {
    "q": "Quelles pièces dentées s'engrènent dans une boîte de vitesses ? Les ___ ?",
    "c": [
     "pignons",
     "pistons",
     "bougies",
     "durites"
    ],
    "a": "pignons"
   },
   {
    "q": "Quelle position de boîte automatique, marquée P, sert au stationnement ? Le mode ___ ?",
    "c": [
     "Parking",
     "Drive",
     "Neutral",
     "Reverse"
    ],
    "a": "Parking"
   },
   {
    "q": "Combien de rapports avant, au maximum, comptent souvent les boîtes automatiques modernes haut de gamme ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_005",
  "cat": "auto",
  "name": "Le rallye",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quels types de routes se court souvent le rallye, contrairement au circuit ? Des routes ___ ?",
    "c": [
     "ouvertes",
     "fermées à vie",
     "sous-marines",
     "aériennes"
    ],
    "a": "ouvertes"
   },
   {
    "q": "Qui, à côté du pilote, lit les notes et annonce les virages ? Le ___ ?",
    "c": [
     "copilote",
     "mécano",
     "arbitre",
     "médecin"
    ],
    "a": "copilote"
   },
   {
    "q": "Comment appelle-t-on chaque portion chronométrée d'un rallye ? Une ___ spéciale ?",
    "c": [
     "épreuve",
     "pause",
     "sieste",
     "réunion"
    ],
    "a": "épreuve"
   },
   {
    "q": "Quel célèbre rallye-raid reliait autrefois deux capitales, en Afrique ? Le ___-Dakar ?",
    "c": [
     "Paris",
     "Rome",
     "Berlin",
     "Madrid"
    ],
    "a": "Paris"
   },
   {
    "q": "Sur quelle surface glissante de terre se court souvent le rallye ? La ___ ?",
    "c": [
     "terre",
     "glace",
     "eau",
     "sable seul"
    ],
    "a": "terre"
   },
   {
    "q": "Quel pilote français, nonuple champion du monde des rallyes, est une légende ? Sébastien ___ ?",
    "c": [
     "Loeb",
     "Ogier",
     "Vettel",
     "Alonso"
    ],
    "a": "Loeb"
   },
   {
    "q": "Comment appelle-t-on le championnat du monde des rallyes (sigle anglais) ? Le ___ ?",
    "c": [
     "WRC",
     "F1",
     "WEC",
     "NBA"
    ],
    "a": "WRC"
   },
   {
    "q": "Combien de titres de champion du monde des rallyes Sébastien Loeb a-t-il remportés d'affilée ?",
    "a": "9"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_006",
  "cat": "auto",
  "name": "Les courses de dragsters",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quelle distance très courte et en ligne droite courent les dragsters ? Une ligne ___ ?",
    "c": [
     "droite",
     "courbe",
     "ronde",
     "brisée"
    ],
    "a": "droite"
   },
   {
    "q": "Que recherche avant tout un dragster ? L'___ maximale ?",
    "c": [
     "accélération",
     "endurance",
     "économie",
     "confort"
    ],
    "a": "accélération"
   },
   {
    "q": "Quelle distance classique, en mètres (quart de mile), fait une course de dragster ?",
    "c": [
     "402",
     "1000",
     "100",
     "50"
    ],
    "a": "402"
   },
   {
    "q": "Que déploient les dragsters à l'arrivée pour freiner ? Un ___ ?",
    "c": [
     "parachute",
     "ancre",
     "filet",
     "mur"
    ],
    "a": "parachute"
   },
   {
    "q": "Quels énormes pneus arrière équipent les dragsters ? Des pneus ___ (slicks) ?",
    "c": [
     "lisses",
     "cloutés",
     "fins",
     "carrés"
    ],
    "a": "lisses"
   },
   {
    "q": "Que font les pilotes avant le départ pour chauffer les pneus ? Un burn___ ?",
    "c": [
     "out",
     "in",
     "up",
     "off"
    ],
    "a": "out"
   },
   {
    "q": "De quel pays la culture des courses de dragsters est-elle originaire ? Les ___-Unis ?",
    "c": [
     "États",
     "Émirats",
     "Pays",
     "Provinces"
    ],
    "a": "États"
   },
   {
    "q": "En combien de secondes, environ, un Top Fuel dragster couvre-t-il les 402 m ?",
    "a": "4"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_007",
  "cat": "auto",
  "name": "Les motos",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de roues a une moto classique ?",
    "a": "2"
   },
   {
    "q": "Que porte obligatoirement un motard sur la tête pour sa sécurité ? Un ___ ?",
    "c": [
     "casque",
     "chapeau",
     "béret",
     "bonnet"
    ],
    "a": "casque"
   },
   {
    "q": "Avec quelle poignée droite accélère-t-on sur une moto ? La poignée d'___ ?",
    "c": [
     "accélérateur",
     "frein",
     "embrayage",
     "klaxon"
    ],
    "a": "accélérateur"
   },
   {
    "q": "Quelle grande marque américaine de grosses motos est mythique ? Harley-___ ?",
    "c": [
     "Davidson",
     "Johnson",
     "Wilson",
     "Anderson"
    ],
    "a": "Davidson"
   },
   {
    "q": "Quelle discipline se court sur terre avec sauts et bosses ? Le moto___ ?",
    "c": [
     "cross",
     "gp",
     "ball",
     "trial"
    ],
    "a": "cross"
   },
   {
    "q": "Quel championnat est la « Formule 1 » de la moto de vitesse ? Le ___ ?",
    "c": [
     "MotoGP",
     "WRC",
     "F1",
     "NBA"
    ],
    "a": "MotoGP"
   },
   {
    "q": "Quelle marque japonaise fabrique motos, ainsi que des instruments de musique ?",
    "c": [
     "Yamaha",
     "Honda",
     "Suzuki",
     "Kawasaki"
    ],
    "a": "Yamaha"
   },
   {
    "q": "Quelle cylindrée, en cm³, ont les motos de la catégorie reine MotoGP actuelle ?",
    "a": "1000"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_008",
  "cat": "auto",
  "name": "Le tuning",
  "level": "classique",
  "levels": [
   {
    "q": "Que cherche-t-on à faire à une voiture par le tuning ? La ___ ?",
    "c": [
     "personnaliser",
     "détruire",
     "vendre",
     "cacher"
    ],
    "a": "personnaliser"
   },
   {
    "q": "Quel dispositif lumineux coloré met-on souvent sous la caisse en tuning ? Des ___ (néons) ?",
    "c": [
     "néons",
     "bougies",
     "torches",
     "lasers"
    ],
    "a": "néons"
   },
   {
    "q": "Quel aileron arrière ajoute-t-on souvent en tuning ? Un ___ ?",
    "c": [
     "becquet",
     "coffre",
     "toit",
     "capot"
    ],
    "a": "becquet"
   },
   {
    "q": "Quel gros système audio les passionnés de tuning installent-ils ? Un ___ puissant ?",
    "c": [
     "caisson",
     "aquarium",
     "moteur",
     "radiateur"
    ],
    "a": "caisson"
   },
   {
    "q": "Quelle saga de films au monde du tuning et des courses illégales est culte ? Fast and ___ ?",
    "c": [
     "Furious",
     "Fast",
     "Speed",
     "Race"
    ],
    "a": "Furious"
   },
   {
    "q": "Comment appelle-t-on le fait de rendre le moteur plus puissant électroniquement ? La ___ ?",
    "c": [
     "reprogrammation",
     "vidange",
     "révision",
     "carrosserie"
    ],
    "a": "reprogrammation"
   },
   {
    "q": "Quels films et culture ont popularisé le tuning japonais des années 2000 ? Le style ___ (japonais) ?",
    "c": [
     "JDM",
     "USA",
     "GTI",
     "V8"
    ],
    "a": "JDM"
   },
   {
    "q": "Combien de watts, environ, peut atteindre un très gros système son de tuning de compétition ?",
    "a": "10000"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_009",
  "cat": "auto",
  "name": "Le Mans",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'heures dure la mythique course d'endurance du Mans ?",
    "a": "24"
   },
   {
    "q": "Dans quelle ville française se court cette course d'endurance ?",
    "c": [
     "Le Mans",
     "Reims",
     "Lyon",
     "Nice"
    ],
    "a": "Le Mans"
   },
   {
    "q": "Quel type d'épreuve automobile sont les 24 Heures du Mans ? Une course d'___ ?",
    "c": [
     "endurance",
     "sprint",
     "côte",
     "drift"
    ],
    "a": "endurance"
   },
   {
    "q": "Combien de pilotes, minimum, se relaient par voiture au Mans ?",
    "c": [
     "3",
     "1",
     "2",
     "5"
    ],
    "a": "3"
   },
   {
    "q": "Sur quel circuit, en partie sur routes, se court la course ? Le circuit de la ___ ?",
    "c": [
     "Sarthe",
     "Loire",
     "Marne",
     "Somme"
    ],
    "a": "Sarthe"
   },
   {
    "q": "Quelle marque française a longtemps dominé Le Mans dans les années 1970-80 et 2010 ? (aussi berlines) ___ ?",
    "c": [
     "Peugeot",
     "Renault",
     "Citroën",
     "Bugatti"
    ],
    "a": "Peugeot"
   },
   {
    "q": "Quel départ spectaculaire, où les pilotes couraient vers leur voiture, a rendu Le Mans célèbre ? Le départ en ___ ?",
    "c": [
     "épi",
     "ligne",
     "grille",
     "cercle"
    ],
    "a": "épi"
   },
   {
    "q": "En quelle année a eu lieu la toute première édition des 24 Heures du Mans ?",
    "a": "1923"
   }
  ],
  "rw": true
 },
 {
  "id": "auto_010",
  "cat": "auto",
  "name": "La Formule 1",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de roues a une monoplace de Formule 1 ?",
    "a": "4"
   },
   {
    "q": "Quelle écurie italienne rouge est la plus mythique de la F1 ?",
    "c": [
     "Ferrari",
     "McLaren",
     "Williams",
     "Renault"
    ],
    "a": "Ferrari"
   },
   {
    "q": "Quel drapeau à damier marque la fin d'un Grand Prix ?",
    "c": [
     "damier",
     "rouge",
     "jaune",
     "vert"
    ],
    "a": "damier"
   },
   {
    "q": "Comment appelle-t-on la première place sur la grille de départ ? La ___ position ?",
    "c": [
     "pole",
     "top",
     "super",
     "first"
    ],
    "a": "pole"
   },
   {
    "q": "Quel arrêt technique permet de changer les pneus en course ? Le ___ ?",
    "c": [
     "pit-stop",
     "check-up",
     "warm-up",
     "time-out"
    ],
    "a": "pit-stop"
   },
   {
    "q": "Quel pilote allemand détient 7 titres, record égalé par Hamilton ? Michael ___ ?",
    "c": [
     "Schumacher",
     "Vettel",
     "Rosberg",
     "Massa"
    ],
    "a": "Schumacher"
   },
   {
    "q": "Quel jeune pilote monégasque court pour Ferrari ? Charles ___ ?",
    "c": [
     "Leclerc",
     "Gasly",
     "Ocon",
     "Alonso"
    ],
    "a": "Leclerc"
   },
   {
    "q": "En quelle année a eu lieu le premier championnat du monde de Formule 1 ?",
    "a": "1950"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_001",
  "cat": "tv",
  "name": "Les séries télé françaises",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quel type d'écran regarde-t-on une série télé ? La ___ ?",
    "c": [
     "télévision",
     "radio",
     "montre",
     "boussole"
    ],
    "a": "télévision"
   },
   {
    "q": "Quelle série policière française suit l'équipe du « 36 » avec le capitaine Berthaud ? ___ ?",
    "c": [
     "Engrenages",
     "Braquo",
     "Profilage",
     "Section"
    ],
    "a": "Engrenages"
   },
   {
    "q": "Quelle longue série quotidienne suit les habitants d'un quartier de Marseille (France 3) ? Plus belle la ___ ?",
    "c": [
     "vie",
     "ville",
     "rue",
     "mer"
    ],
    "a": "vie"
   },
   {
    "q": "Quelle série d'espionnage française primée met en scène la DGSE ? Le Bureau des ___ ?",
    "c": [
     "Légendes",
     "Secrets",
     "Ombres",
     "Espions"
    ],
    "a": "Légendes"
   },
   {
    "q": "Quelle série humoristique médiévale de Alexandre Astier met en scène le roi Arthur ?",
    "c": [
     "Kaamelott",
     "Hero Corp",
     "Off Prime",
     "Platane"
    ],
    "a": "Kaamelott"
   },
   {
    "q": "Quelle série de zombies française, primée à l'international, se déroule dans un village de montagne ?",
    "c": [
     "Les Revenants",
     "Zone Blanche",
     "Marianne",
     "Vampires"
    ],
    "a": "Les Revenants"
   },
   {
    "q": "Quelle chaîne cryptée française a produit de nombreuses séries primées (Engrenages, Le Bureau) ?",
    "c": [
     "Canal+",
     "TF1",
     "M6",
     "Arte"
    ],
    "a": "Canal+"
   },
   {
    "q": "En quelle année la série « Plus belle la vie » a-t-elle été diffusée pour la première fois ?",
    "a": "2004"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_002",
  "cat": "tv",
  "name": "Les séries Netflix",
  "level": "classique",
  "levels": [
   {
    "q": "Sur quelle plateforme de streaming au logo rouge regarde-t-on ces séries ?",
    "c": [
     "Netflix",
     "YouTube",
     "Twitch",
     "Spotify"
    ],
    "a": "Netflix"
   },
   {
    "q": "Quelle série espagnole de braqueurs en combinaison rouge et masque de Dalí a cartonné ? La Casa de ___ ?",
    "c": [
     "Papel",
     "Campo",
     "Sol",
     "Mar"
    ],
    "a": "Papel"
   },
   {
    "q": "Quelle série coréenne de jeux mortels pour de l'argent a battu tous les records en 2021 ? ___ Game ?",
    "c": [
     "Squid",
     "Money",
     "Death",
     "Kill"
    ],
    "a": "Squid"
   },
   {
    "q": "Quelle série de science-fiction des années 80 avec des enfants et un « Upside Down » est culte ? ___ Things ?",
    "c": [
     "Stranger",
     "Weird",
     "Dark",
     "Odd"
    ],
    "a": "Stranger"
   },
   {
    "q": "Quelle série britannique sur la royauté raconte la vie d'Elizabeth II ? The ___ ?",
    "c": [
     "Crown",
     "Queen",
     "King",
     "Throne"
    ],
    "a": "Crown"
   },
   {
    "q": "Quelle série française sur un gentleman cambrioleur inspiré d'Arsène Lupin a cartonné en 2021 ?",
    "c": [
     "Lupin",
     "Arsène",
     "Voleur",
     "Masque"
    ],
    "a": "Lupin"
   },
   {
    "q": "Comment appelle-t-on le fait de regarder plusieurs épisodes d'affilée sur Netflix ? Le ___-watching ?",
    "c": [
     "binge",
     "speed",
     "night",
     "power"
    ],
    "a": "binge"
   },
   {
    "q": "En quelle année Netflix a-t-il lancé son service de streaming vidéo par abonnement ?",
    "a": "2007"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_003",
  "cat": "tv",
  "name": "Le Journal télévisé",
  "level": "classique",
  "levels": [
   {
    "q": "À quelle heure du soir est diffusé le grand JT en France ? À ___ heures ?",
    "c": [
     "20",
     "12",
     "18",
     "22"
    ],
    "a": "20"
   },
   {
    "q": "Qui présente et lit les informations à la télévision ? Le ___ ?",
    "c": [
     "présentateur",
     "acteur",
     "chanteur",
     "arbitre"
    ],
    "a": "présentateur"
   },
   {
    "q": "Comment appelle-t-on l'ensemble des informations du jour présentées ? Les ___ ?",
    "c": [
     "actualités",
     "publicités",
     "chansons",
     "recettes"
    ],
    "a": "actualités"
   },
   {
    "q": "Sur quel meuble le présentateur du JT est-il généralement assis ? Un ___ ?",
    "c": [
     "bureau",
     "canapé",
     "tabouret",
     "lit"
    ],
    "a": "bureau"
   },
   {
    "q": "Comment appelle-t-on le journaliste envoyé filmer sur le terrain ? L'envoyé ___ ?",
    "c": [
     "spécial",
     "royal",
     "secret",
     "national"
    ],
    "a": "spécial"
   },
   {
    "q": "Quelle rubrique clôt souvent le JT sur une note légère ou insolite ? Le ___ de la fin ?",
    "c": [
     "sujet",
     "cri",
     "buzz",
     "mot"
    ],
    "a": "sujet"
   },
   {
    "q": "Quel bandeau défilant en bas de l'écran affiche des infos brèves en continu ? Le ___ ?",
    "c": [
     "bandeau",
     "titre",
     "logo",
     "cadre"
    ],
    "a": "bandeau"
   },
   {
    "q": "En quelle année le premier journal télévisé a-t-il été diffusé en France (RTF) ?",
    "a": "1949"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_004",
  "cat": "tv",
  "name": "Les jeux télévisés",
  "level": "classique",
  "levels": [
   {
    "q": "Que gagne-t-on souvent en participant à un jeu télévisé ? De l'___ ?",
    "c": [
     "argent",
     "eau",
     "air",
     "temps"
    ],
    "a": "argent"
   },
   {
    "q": "Quel jeu de lettres et chiffres de France 2 est un classique de l'après-midi ? Des chiffres et des ___ ?",
    "c": [
     "lettres",
     "mots",
     "sons",
     "nombres"
    ],
    "a": "lettres"
   },
   {
    "q": "Dans « Qui veut gagner des millions », combien de jokers le candidat a-t-il au départ ?",
    "a": "3"
   },
   {
    "q": "Quel jeu fait deviner un mot en faisant tourner une roue et acheter des voyelles ? La ___ de la fortune ?",
    "c": [
     "roue",
     "roulette",
     "toupie",
     "boule"
    ],
    "a": "roue"
   },
   {
    "q": "Dans « Une famille en or », les candidats doivent deviner les réponses d'un ___ ?",
    "c": [
     "sondage",
     "livre",
     "juré",
     "expert"
    ],
    "a": "sondage"
   },
   {
    "q": "Quel présentateur emblématique a longtemps animé « Questions pour un champion » ? Julien ___ ?",
    "c": [
     "Lepers",
     "Foucault",
     "Sébastien",
     "Drucker"
    ],
    "a": "Lepers"
   },
   {
    "q": "Comment appelle-t-on la question finale à gros gain d'un jeu télé ? La question ___ ?",
    "c": [
     "finale",
     "bonus",
     "surprise",
     "cachée"
    ],
    "a": "finale"
   },
   {
    "q": "En quelle année « Questions pour un champion » a-t-il débuté sur Antenne 2 / France 3 ?",
    "a": "1988"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_005",
  "cat": "tv",
  "name": "Les talk-shows",
  "level": "classique",
  "levels": [
   {
    "q": "Autour de quoi les invités d'un talk-show discutent-ils ? Ils ___ ?",
    "c": [
     "parlent",
     "dorment",
     "courent",
     "nagent"
    ],
    "a": "parlent"
   },
   {
    "q": "Qui mène la discussion et pose les questions dans un talk-show ? L'___ ?",
    "c": [
     "animateur",
     "cameraman",
     "figurant",
     "spectateur"
    ],
    "a": "animateur"
   },
   {
    "q": "Comment appelle-t-on les gens assis dans le studio qui applaudissent ? Le ___ ?",
    "c": [
     "public",
     "jury",
     "casting",
     "conseil"
    ],
    "a": "public"
   },
   {
    "q": "Quel talk-show de fin de soirée américain est animé par Jimmy ___ ? (The Tonight Show)",
    "c": [
     "Fallon",
     "Kimmel",
     "Corden",
     "Meyers"
    ],
    "a": "Fallon"
   },
   {
    "q": "Sur quel meuble confortable s'assoient souvent les invités d'un talk-show ? Un ___ ?",
    "c": [
     "canapé",
     "tabouret",
     "trône",
     "hamac"
    ],
    "a": "canapé"
   },
   {
    "q": "Quelle animatrice américaine mythique a eu le talk-show le plus regardé, avec son club de lecture ? Oprah ___ ?",
    "c": [
     "Winfrey",
     "Williams",
     "DeGeneres",
     "Ripa"
    ],
    "a": "Winfrey"
   },
   {
    "q": "Quel petit orchestre accompagne souvent les talk-shows américains en direct ? Le ___ (house band) ?",
    "c": [
     "groupe",
     "chœur",
     "quatuor",
     "DJ"
    ],
    "a": "groupe"
   },
   {
    "q": "Pendant combien d'années, environ, l'émission d'Oprah Winfrey a-t-elle été diffusée (record) ?",
    "a": "25"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_006",
  "cat": "tv",
  "name": "Les séries animées",
  "level": "classique",
  "levels": [
   {
    "q": "Sous quelle forme dessinée sont faites les séries animées ? Des ___ animés ?",
    "c": [
     "dessins",
     "photos",
     "sculptures",
     "collages"
    ],
    "a": "dessins"
   },
   {
    "q": "Quelle famille jaune de Springfield est la plus célèbre des séries animées ? Les ___ ?",
    "c": [
     "Simpson",
     "Griffin",
     "Smith",
     "Belcher"
    ],
    "a": "Simpson"
   },
   {
    "q": "De quel pays viennent les séries animées appelées « animes » ?",
    "c": [
     "Japon",
     "Chine",
     "Corée",
     "France"
    ],
    "a": "Japon"
   },
   {
    "q": "Quel garçon de South Park porte un bonnet à pompon et « meurt » souvent ? ___ ?",
    "c": [
     "Kenny",
     "Cartman",
     "Stan",
     "Kyle"
    ],
    "a": "Kenny"
   },
   {
    "q": "Quel anime met en scène des ninjas et un héros blond au chakra du renard ?",
    "c": [
     "Naruto",
     "Bleach",
     "One Piece",
     "Dragon Ball"
    ],
    "a": "Naruto"
   },
   {
    "q": "Quel duo père-fils scientifique voyage entre les dimensions dans une série adulte ? ___ and Morty ?",
    "c": [
     "Rick",
     "Bob",
     "Tom",
     "Jack"
    ],
    "a": "Rick"
   },
   {
    "q": "Quel studio japonais de Miyazaki est célèbre pour ses films et l'esprit anime ? Studio ___ ?",
    "c": [
     "Ghibli",
     "Pixar",
     "Toei",
     "Madhouse"
    ],
    "a": "Ghibli"
   },
   {
    "q": "En quelle année la série animée « Les Simpson » a-t-elle démarré en tant que série à part entière ?",
    "a": "1989"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_007",
  "cat": "tv",
  "name": "La téléréalité",
  "level": "classique",
  "levels": [
   {
    "q": "Que filment en continu les caméras de téléréalité ? La ___ des candidats ?",
    "c": [
     "vie",
     "voiture",
     "maison vide",
     "télé"
    ],
    "a": "vie"
   },
   {
    "q": "Dans quel type de lieu clos les candidats de « Loft Story » vivaient-ils enfermés ? Un ___ ?",
    "c": [
     "loft",
     "château",
     "bateau",
     "train"
    ],
    "a": "loft"
   },
   {
    "q": "Comment sort-on un candidat de téléréalité que le public n'aime plus ? On l'___ ?",
    "c": [
     "élimine",
     "recrute",
     "engage",
     "félicite"
    ],
    "a": "élimine"
   },
   {
    "q": "Quelle émission suit des célibataires cherchant l'amour dans une villa au soleil ? Les Marseillais / L'île de la ___ ?",
    "c": [
     "tentation",
     "chance",
     "beauté",
     "musique"
    ],
    "a": "tentation"
   },
   {
    "q": "Par quel moyen le public soutient-il son candidat préféré ? Il ___ ?",
    "c": [
     "vote",
     "chante",
     "cuisine",
     "dort"
    ],
    "a": "vote"
   },
   {
    "q": "Quel télé-crochet de chant fait tourner les fauteuils des jurés dos aux candidats ? The ___ ?",
    "c": [
     "Voice",
     "Star",
     "Song",
     "Idol"
    ],
    "a": "Voice"
   },
   {
    "q": "Comment appelle-t-on la pièce où les candidats se confient seuls face caméra ? Le ___ ?",
    "c": [
     "confessionnal",
     "salon",
     "grenier",
     "jardin"
    ],
    "a": "confessionnal"
   },
   {
    "q": "En quelle année « Loft Story », première grande téléréalité française, a-t-elle été diffusée ?",
    "a": "2001"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_008",
  "cat": "tv",
  "name": "Les documentaires",
  "level": "classique",
  "levels": [
   {
    "q": "Un documentaire montre-t-il des faits réels ou de la fiction ?",
    "c": [
     "réels",
     "inventés",
     "magiques",
     "faux"
    ],
    "a": "réels"
   },
   {
    "q": "Quel type de documentaire filme les lions, éléphants et autres bêtes sauvages ? Un docu ___ ?",
    "c": [
     "animalier",
     "culinaire",
     "sportif",
     "musical"
    ],
    "a": "animalier"
   },
   {
    "q": "Comment appelle-t-on la voix qui commente un documentaire sans être vue ? La voix ___ ?",
    "c": [
     "off",
     "haute",
     "basse",
     "double"
    ],
    "a": "off"
   },
   {
    "q": "Quelle chaîne américaine est spécialisée dans les documentaires animaliers et nature ? National ___ ?",
    "c": [
     "Geographic",
     "History",
     "Science",
     "Nature"
    ],
    "a": "Geographic"
   },
   {
    "q": "Quel présentateur-naturaliste britannique légendaire narre les docus de la BBC ? David ___ ?",
    "c": [
     "Attenborough",
     "Beckham",
     "Bowie",
     "Bean"
    ],
    "a": "Attenborough"
   },
   {
    "q": "Comment appelle-t-on un documentaire qui suit un sujet sur une très longue durée ? Un docu au long ___ ?",
    "c": [
     "cours",
     "métrage",
     "terme",
     "temps"
    ],
    "a": "cours"
   },
   {
    "q": "Quelle série documentaire phare de la BBC filme la planète sous toutes ses facettes ? Planet ___ ?",
    "c": [
     "Earth",
     "Blue",
     "Life",
     "Green"
    ],
    "a": "Earth"
   },
   {
    "q": "En quelle année est sorti « Nanouk l'Esquimau », souvent cité comme premier grand documentaire ?",
    "a": "1922"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_009",
  "cat": "tv",
  "name": "Les publicités",
  "level": "classique",
  "levels": [
   {
    "q": "Que cherche à faire vendre une publicité ? Un ___ ?",
    "c": [
     "produit",
     "secret",
     "nuage",
     "silence"
    ],
    "a": "produit"
   },
   {
    "q": "Comment appelle-t-on la petite phrase accrocheuse qui résume une pub ? Un ___ ?",
    "c": [
     "slogan",
     "roman",
     "sermon",
     "dossier"
    ],
    "a": "slogan"
   },
   {
    "q": "Quand diffuse-t-on des publicités pendant un film à la télé ? Pendant la ___ de pub ?",
    "c": [
     "coupure",
     "fin",
     "musique",
     "sieste"
    ],
    "a": "coupure"
   },
   {
    "q": "Comment appelle-t-on une chanson courte et entêtante créée pour une pub ? Un ___ ?",
    "c": [
     "jingle",
     "opéra",
     "requiem",
     "prélude"
    ],
    "a": "jingle"
   },
   {
    "q": "Lors de quel grand match américain les pubs coûtent-elles une fortune ? Le Super ___ ?",
    "c": [
     "Bowl",
     "Ball",
     "Cup",
     "Star"
    ],
    "a": "Bowl"
   },
   {
    "q": "Quelle célébrité rémunérée vante un produit dans une pub ? Un ___ (ambassadeur) ?",
    "c": [
     "égérie",
     "figurant",
     "spectateur",
     "arbitre"
    ],
    "a": "égérie"
   },
   {
    "q": "Comment appelle-t-on la courte publicité vidéo avant une vidéo YouTube ? Un ___ ?",
    "c": [
     "spot",
     "clip",
     "trailer",
     "teaser"
    ],
    "a": "spot"
   },
   {
    "q": "Combien coûte, en millions de dollars environ, un spot de 30 s au Super Bowl (récent) ?",
    "a": "7"
   }
  ],
  "rw": true
 },
 {
  "id": "tv_010",
  "cat": "tv",
  "name": "Les séries policières",
  "level": "classique",
  "levels": [
   {
    "q": "Qui, dans une série policière, cherche à résoudre les crimes ? Un ___ ?",
    "c": [
     "enquêteur",
     "boulanger",
     "jardinier",
     "pilote"
    ],
    "a": "enquêteur"
   },
   {
    "q": "Que cherche-t-on à identifier dans une série policière ? Le ___ ?",
    "c": [
     "coupable",
     "cuisinier",
     "facteur",
     "voisin"
    ],
    "a": "coupable"
   },
   {
    "q": "Quel indice, laissé sur les lieux, trahit le criminel ? Une ___ (digitale) ?",
    "c": [
     "empreinte",
     "chanson",
     "recette",
     "photo de vacances"
    ],
    "a": "empreinte"
   },
   {
    "q": "Quelle série américaine sur la police scientifique de Las Vegas a lancé la mode des experts ? Les ___ ?",
    "c": [
     "Experts",
     "Génies",
     "Savants",
     "Pros"
    ],
    "a": "Experts"
   },
   {
    "q": "Quel lieu de crime les enquêteurs bouclent-ils avec un ruban jaune ? La scène de ___ ?",
    "c": [
     "crime",
     "ménage",
     "vie",
     "théâtre"
    ],
    "a": "crime"
   },
   {
    "q": "Quel détective en imperméable, à la 2CV, dit toujours « Juste une dernière question » ? ___ ?",
    "c": [
     "Columbo",
     "Poirot",
     "Maigret",
     "Derrick"
    ],
    "a": "Columbo"
   },
   {
    "q": "Comment appelle-t-on l'analyse scientifique des indices d'un crime ? La police ___ ?",
    "c": [
     "scientifique",
     "municipale",
     "montée",
     "secrète"
    ],
    "a": "scientifique"
   },
   {
    "q": "En quelle année la série « Les Experts » (CSI) a-t-elle démarré aux États-Unis ?",
    "a": "2000"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_001",
  "cat": "insolite",
  "name": "Les sitcoms",
  "level": "classique",
  "levels": [
   {
    "q": "Que cherche à provoquer une sitcom chez le spectateur ? Le ___ ?",
    "c": [
     "rire",
     "sommeil",
     "pleur",
     "silence"
    ],
    "a": "rire"
   },
   {
    "q": "Que signifie « sitcom » : comédie de ___ ? (situation comedy)",
    "c": [
     "situation",
     "salon",
     "science",
     "société"
    ],
    "a": "situation"
   },
   {
    "q": "Quelle sitcom américaine culte suit 6 amis dans un café à New York ?",
    "c": [
     "Friends",
     "Cheers",
     "Frasier",
     "Seinfeld"
    ],
    "a": "Friends"
   },
   {
    "q": "Quel café-restaurant est le lieu de rendez-vous des amis de « Friends » ? Le Central ___ ?",
    "c": [
     "Perk",
     "Park",
     "Perch",
     "Point"
    ],
    "a": "Perk"
   },
   {
    "q": "Quelle sitcom française culte se passe dans un immeuble avec Huguette et Raymond ? ___ contre M. ?",
    "c": [
     "Maguy",
     "Marc",
     "Salut",
     "Voisins"
    ],
    "a": "Maguy"
   },
   {
    "q": "Quel bruitage accompagne les blagues des sitcoms enregistrées ? Les ___ (rires) ?",
    "c": [
     "rires enregistrés",
     "sirènes",
     "cloches",
     "tambours"
    ],
    "a": "rires enregistrés"
   },
   {
    "q": "Quelle sitcom suit le scientifique Sheldon Cooper et ses amis geeks ? The Big Bang ___ ?",
    "c": [
     "Theory",
     "Show",
     "Story",
     "Club"
    ],
    "a": "Theory"
   },
   {
    "q": "Pendant combien de saisons la sitcom « Friends » a-t-elle été diffusée ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_002",
  "cat": "insolite",
  "name": "Les extrêmes météo",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on une tempête tournante en entonnoir qui touche le sol ? Une ___ ?",
    "c": [
     "tornade",
     "brise",
     "rosée",
     "éclaircie"
    ],
    "a": "tornade"
   },
   {
    "q": "Quel phénomène électrique frappe le sol pendant un orage ? La ___ ?",
    "c": [
     "foudre",
     "pluie",
     "neige",
     "brume"
    ],
    "a": "foudre"
   },
   {
    "q": "Comment appelle-t-on un violent cyclone tropical de l'Atlantique ? Un ___ ?",
    "c": [
     "ouragan",
     "zéphyr",
     "alizé",
     "mistral"
    ],
    "a": "ouragan"
   },
   {
    "q": "Quel désert est célèbre pour être l'endroit le plus chaud et sec ? La Vallée de la ___ ?",
    "c": [
     "Mort",
     "Lune",
     "Soif",
     "Fin"
    ],
    "a": "Mort"
   },
   {
    "q": "Quelles billes de glace tombent parfois violemment du ciel ? La ___ ?",
    "c": [
     "grêle",
     "rosée",
     "bruine",
     "buée"
    ],
    "a": "grêle"
   },
   {
    "q": "Sur quelle échelle mesure-t-on la puissance des tornades ? L'échelle de ___ ? (Fujita)",
    "c": [
     "Fujita",
     "Richter",
     "Beaufort",
     "Celsius"
    ],
    "a": "Fujita"
   },
   {
    "q": "Quel phénomène de vent glacial descend des Alpes vers le sud de la France ? Le ___ ?",
    "c": [
     "mistral",
     "sirocco",
     "foehn",
     "harmattan"
    ],
    "a": "mistral"
   },
   {
    "q": "Quelle température record, en degrés, a été mesurée dans la Vallée de la Mort en 1913 ?",
    "a": "56"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_003",
  "cat": "insolite",
  "name": "Les coïncidences",
  "level": "classique",
  "levels": [
   {
    "q": "Une coïncidence est un hasard qui semble avoir un ___ ? (mais n'en a pas)",
    "c": [
     "sens",
     "prix",
     "poids",
     "goût"
    ],
    "a": "sens"
   },
   {
    "q": "Quelle explication rationnelle rend compte des coïncidences ? Le ___ ?",
    "c": [
     "hasard",
     "destin",
     "complot",
     "miracle"
    ],
    "a": "hasard"
   },
   {
    "q": "Combien de personnes suffisent, dans une pièce, pour avoir 50 % de chances que deux aient le même anniversaire ? Le paradoxe des ___ ?",
    "c": [
     "anniversaires",
     "prénoms",
     "tailles",
     "âges"
    ],
    "a": "anniversaires"
   },
   {
    "q": "Quelle tendance de l'esprit humain nous fait voir des motifs partout ? La ___ ?",
    "c": [
     "paréidolie",
     "amnésie",
     "insomnie",
     "euphorie"
    ],
    "a": "paréidolie"
   },
   {
    "q": "Deux présidents américains, Lincoln et Kennedy, partagent d'étranges coïncidences : ils furent tous deux ___ ?",
    "c": [
     "assassinés",
     "réélus",
     "acquittés",
     "exilés"
    ],
    "a": "assassinés"
   },
   {
    "q": "Comment appelle-t-on notre tendance à ne retenir que ce qui confirme nos idées ? Le biais de ___ ?",
    "c": [
     "confirmation",
     "négation",
     "sélection",
     "répétition"
    ],
    "a": "confirmation"
   },
   {
    "q": "Combien de personnes suffisent pour dépasser 99 % de chances de partager un anniversaire ?",
    "a": "57"
   },
   {
    "q": "Dans le paradoxe des anniversaires, à partir de combien de personnes la probabilité dépasse-t-elle 50 % ?",
    "a": "23"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_004",
  "cat": "insolite",
  "name": "Les superstitions",
  "level": "classique",
  "levels": [
   {
    "q": "Quel chiffre porte malheur dans beaucoup de cultures occidentales ?",
    "c": [
     "13",
     "7",
     "3",
     "9"
    ],
    "a": "13"
   },
   {
    "q": "Quel animal noir traversant la route porte malheur, dit-on ? Le ___ noir ?",
    "c": [
     "chat",
     "chien",
     "cheval",
     "corbeau"
    ],
    "a": "chat"
   },
   {
    "q": "Sous quel objet passer porterait malheur, selon la superstition ? Une ___ ?",
    "c": [
     "échelle",
     "porte",
     "arche",
     "fenêtre"
    ],
    "a": "échelle"
   },
   {
    "q": "Quel objet en verre cassé annoncerait 7 ans de malheur ? Un ___ ?",
    "c": [
     "miroir",
     "verre",
     "vase",
     "bocal"
    ],
    "a": "miroir"
   },
   {
    "q": "Quelle plante à quatre feuilles porte bonheur ? Le ___ à quatre feuilles ?",
    "c": [
     "trèfle",
     "chêne",
     "lierre",
     "muguet"
    ],
    "a": "trèfle"
   },
   {
    "q": "Quel geste fait-on sur du bois pour conjurer le mauvais sort ? On ___ du bois ?",
    "c": [
     "touche",
     "brûle",
     "mange",
     "peint"
    ],
    "a": "touche"
   },
   {
    "q": "Quelle peur porte le nom savant de la crainte du chiffre 13 ? La triskaïdéka___ ?",
    "c": [
     "phobie",
     "manie",
     "philie",
     "pathie"
    ],
    "a": "phobie"
   },
   {
    "q": "Quel vendredi, associé au chiffre 13, est réputé porter malheur ? Le vendredi ___ ?",
    "c": [
     "13",
     "31",
     "7",
     "3"
    ],
    "a": "13"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_005",
  "cat": "insolite",
  "name": "Les records insolites",
  "level": "classique",
  "levels": [
   {
    "q": "Quel célèbre livre recense les records du monde ? Le livre ___ des records ?",
    "c": [
     "Guinness",
     "Michelin",
     "Rouge",
     "Vert"
    ],
    "a": "Guinness"
   },
   {
    "q": "Quel record cherche-t-on quand on veut être le plus ___ du monde ?",
    "c": [
     "grand",
     "moyen",
     "banal",
     "normal"
    ],
    "a": "grand"
   },
   {
    "q": "Quelle partie du corps l'homme aux ongles les plus longs n'a-t-il jamais coupée ? Les ___ ?",
    "c": [
     "ongles",
     "cheveux",
     "dents",
     "cils"
    ],
    "a": "ongles"
   },
   {
    "q": "Quel animal détient le record de l'être vivant le plus grand ? La ___ bleue ?",
    "c": [
     "baleine",
     "girafe",
     "otarie",
     "murène"
    ],
    "a": "baleine"
   },
   {
    "q": "Quelle est la partie du corps mesurée pour le record de la plus longue barbe ? La ___ ?",
    "c": [
     "barbe",
     "moustache",
     "frange",
     "natte"
    ],
    "a": "barbe"
   },
   {
    "q": "Combien de secondes environ tient le record d'apnée statique (retenir sa respiration), soit plus de 11 ___ ?",
    "c": [
     "minutes",
     "heures",
     "jours",
     "secondes"
    ],
    "a": "minutes"
   },
   {
    "q": "En quelle année le premier « Livre Guinness des records » a-t-il été publié ?",
    "a": "1955"
   },
   {
    "q": "Quelle taille, en centimètres, mesurait Robert Wadlow, l'homme le plus grand de l'histoire ?",
    "a": "272"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_006",
  "cat": "insolite",
  "name": "Les mystères",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle zone de l'Atlantique est réputée pour d'étranges disparitions ? Le triangle des ___ ?",
    "c": [
     "Bermudes",
     "Açores",
     "Canaries",
     "Baléares"
    ],
    "a": "Bermudes"
   },
   {
    "q": "Quelles immenses lignes tracées au sol, au Pérou, restent mystérieuses ? Les lignes de ___ ?",
    "c": [
     "Nazca",
     "Cuzco",
     "Lima",
     "Ica"
    ],
    "a": "Nazca"
   },
   {
    "q": "Quel monument préhistorique de pierres dressées, en Angleterre, intrigue toujours ?",
    "c": [
     "Stonehenge",
     "Carnac",
     "Avebury",
     "Newgrange"
    ],
    "a": "Stonehenge"
   },
   {
    "q": "Quel monstre légendaire hanterait un lac d'Écosse ? Le monstre du ___ Ness ?",
    "c": [
     "Loch",
     "Lake",
     "Sea",
     "Fjord"
    ],
    "a": "Loch"
   },
   {
    "q": "Quelle base militaire américaine secrète alimente les théories sur les extraterrestres ? La zone ___ ?",
    "c": [
     "51",
     "42",
     "7",
     "13"
    ],
    "a": "51"
   },
   {
    "q": "Quel homme des neiges velu hanterait l'Himalaya ? Le ___ ?",
    "c": [
     "yéti",
     "kraken",
     "griffon",
     "minotaure"
    ],
    "a": "yéti"
   },
   {
    "q": "Quelle civilisation engloutie, décrite par Platon, reste un mystère ? L'___ ?",
    "c": [
     "Atlantide",
     "Lémurie",
     "Mu",
     "Avalon"
    ],
    "a": "Atlantide"
   },
   {
    "q": "Combien de pierres dressées (mégalithes) compte environ le site principal de Stonehenge à l'origine ?",
    "a": "30"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_007",
  "cat": "insolite",
  "name": "Les fêtes insolites",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle fête espagnole se lance-t-on des tomates à Buñol ? La ___ ?",
    "c": [
     "Tomatina",
     "Fallas",
     "Feria",
     "Sanfermines"
    ],
    "a": "Tomatina"
   },
   {
    "q": "Quel légume-projectile est lancé pendant la Tomatina ? La ___ ?",
    "c": [
     "tomate",
     "patate",
     "courge",
     "carotte"
    ],
    "a": "tomate"
   },
   {
    "q": "Dans quelle ville espagnole lâche-t-on des taureaux dans les rues ? À ___ (San Fermín) ?",
    "c": [
     "Pampelune",
     "Madrid",
     "Séville",
     "Valence"
    ],
    "a": "Pampelune"
   },
   {
    "q": "Quelle fête hindoue voit les gens se couvrir de poudres colorées ? La fête des ___ ? (Holi)",
    "c": [
     "couleurs",
     "lumières",
     "eaux",
     "fleurs"
    ],
    "a": "couleurs"
   },
   {
    "q": "Dans quel pays fête-t-on la fête des morts avec des squelettes colorés ? Le ___ ? (Día de Muertos)",
    "c": [
     "Mexique",
     "Japon",
     "Inde",
     "Brésil"
    ],
    "a": "Mexique"
   },
   {
    "q": "Quelle grande fête de la bière a lieu à Munich chaque automne ?",
    "c": [
     "Oktoberfest",
     "Carnaval",
     "Fallas",
     "Diwali"
    ],
    "a": "Oktoberfest"
   },
   {
    "q": "Quelle fête irlandaise, tout en vert, célèbre un saint le 17 mars ? La Saint-___ ?",
    "c": [
     "Patrick",
     "Georges",
     "Nicolas",
     "Valentin"
    ],
    "a": "Patrick"
   },
   {
    "q": "Combien de tonnes de tomates, environ, sont lancées chaque année à la Tomatina ?",
    "a": "150"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_008",
  "cat": "insolite",
  "name": "Les musées étranges",
  "level": "classique",
  "levels": [
   {
    "q": "Que trouve-t-on principalement dans un musée ? Des ___ ?",
    "c": [
     "objets",
     "voitures",
     "clients",
     "élèves"
    ],
    "a": "objets"
   },
   {
    "q": "Quel musée parisien de cire présente des célébrités en statues ? Le musée ___ ?",
    "c": [
     "Grévin",
     "Rodin",
     "Orsay",
     "Cluny"
    ],
    "a": "Grévin"
   },
   {
    "q": "De quelle matière sont faites les statues du musée Grévin et de Madame Tussauds ? La ___ ?",
    "c": [
     "cire",
     "pierre",
     "glace",
     "bois"
    ],
    "a": "cire"
   },
   {
    "q": "Quel musée insolite de Zagreb expose des objets de relations amoureuses terminées ? Le musée des relations ___ ?",
    "c": [
     "rompues",
     "réussies",
     "cachées",
     "royales"
    ],
    "a": "rompues"
   },
   {
    "q": "Quel aliment sucré a son musée à plusieurs endroits, dont Cologne ? Le musée du ___ ?",
    "c": [
     "chocolat",
     "sel",
     "pain",
     "vinaigre"
    ],
    "a": "chocolat"
   },
   {
    "q": "Quelle célèbre chaîne de musées de cire porte le nom de Madame ___ ?",
    "c": [
     "Tussauds",
     "Grévin",
     "Bovary",
     "Curie"
    ],
    "a": "Tussauds"
   },
   {
    "q": "Dans quel musée insolite de Suède expose-t-on des aliments à l'odeur repoussante ? Le musée du ___ dégoûtant ?",
    "c": [
     "dégoûtant",
     "délicieux",
     "rare",
     "ancien"
    ],
    "a": "dégoûtant"
   },
   {
    "q": "En quelle année le musée Grévin a-t-il ouvert ses portes à Paris ?",
    "a": "1882"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_009",
  "cat": "insolite",
  "name": "Les traditions bizarres",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quel pays lance-t-on des bébés depuis un balcon sur un matelas (tradition religieuse) ? L'___ ?",
    "c": [
     "Inde",
     "France",
     "Japon",
     "Canada"
    ],
    "a": "Inde"
   },
   {
    "q": "Quel fromage sarde interdit contient des ___ vivantes ? (casu marzu)",
    "c": [
     "larves",
     "olives",
     "herbes",
     "épices"
    ],
    "a": "larves"
   },
   {
    "q": "En Finlande, quelle discipline sportive fait porter sa compagne sur le dos ? Le porter d'___ ?",
    "c": [
     "épouse",
     "sac",
     "tronc",
     "enfant"
    ],
    "a": "épouse"
   },
   {
    "q": "Dans quelle ville anglaise dévale-t-on une colline en poursuivant un fromage ? La course au ___ ?",
    "c": [
     "fromage",
     "tonneau",
     "ballon",
     "œuf"
    ],
    "a": "fromage"
   },
   {
    "q": "Quelle tradition espagnole voit un homme sauter par-dessus des bébés couchés au sol ? El ___ (le diable saute) ?",
    "c": [
     "Colacho",
     "Toro",
     "Fuego",
     "Salto"
    ],
    "a": "Colacho"
   },
   {
    "q": "Dans quel pays nordique organise-t-on des championnats de lancer de téléphone portable ?",
    "c": [
     "Finlande",
     "Espagne",
     "Grèce",
     "Portugal"
    ],
    "a": "Finlande"
   },
   {
    "q": "Quel insecte grillé et frit est une friandise de rue traditionnelle en Thaïlande ? Le ___ ?",
    "c": [
     "criquet",
     "escargot",
     "ver de terre",
     "papillon"
    ],
    "a": "criquet"
   },
   {
    "q": "En quelle année a débuté le championnat du monde de porter d'épouse en Finlande ?",
    "a": "1992"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_010",
  "cat": "insolite",
  "name": "Les phénomènes paranormaux",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on l'esprit d'un mort qui hanterait un lieu ? Un ___ ?",
    "c": [
     "fantôme",
     "robot",
     "clown",
     "voisin"
    ],
    "a": "fantôme"
   },
   {
    "q": "Quel pouvoir supposé permettrait de deviner les pensées d'autrui ? La ___ ?",
    "c": [
     "télépathie",
     "gravité",
     "photosynthèse",
     "digestion"
    ],
    "a": "télépathie"
   },
   {
    "q": "Quel pouvoir supposé permettrait de déplacer des objets par la pensée ? La ___ ?",
    "c": [
     "télékinésie",
     "photographie",
     "calligraphie",
     "chorégraphie"
    ],
    "a": "télékinésie"
   },
   {
    "q": "Comment appelle-t-on une maison hantée par des esprits ? Une maison ___ ?",
    "c": [
     "hantée",
     "chantée",
     "plantée",
     "montée"
    ],
    "a": "hantée"
   },
   {
    "q": "Quel objet à lettres et planchette sert prétendument à parler aux esprits ? La planche de ___ ? (Ouija)",
    "c": [
     "Ouija",
     "Scrabble",
     "Uno",
     "Ludo"
    ],
    "a": "Ouija"
   },
   {
    "q": "Comment appelle-t-on la personne qui prétend communiquer avec les morts ? Un ___ ?",
    "c": [
     "médium",
     "arbitre",
     "notaire",
     "plombier"
    ],
    "a": "médium"
   },
   {
    "q": "Quelle discipline étudie scientifiquement (et souvent démonte) ces phénomènes ? La ___ ?",
    "c": [
     "zététique",
     "botanique",
     "mécanique",
     "logistique"
    ],
    "a": "zététique"
   },
   {
    "q": "Combien de dollars James Randi offrait-il à qui prouverait un pouvoir paranormal (défi jamais remporté), en millions ?",
    "a": "1"
   }
  ],
  "rw": true
 },
 {
  "id": "societe_001",
  "cat": "societe",
  "name": "Les lois absurdes",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on une règle votée que tous doivent respecter ? Une ___ ?",
    "c": [
     "loi",
     "chanson",
     "recette",
     "rumeur"
    ],
    "a": "loi"
   },
   {
    "q": "Dans quel pays est-il interdit (loi ancienne) de mourir au Parlement, dit-on ? Le ___-Uni ?",
    "c": [
     "Royaume",
     "États",
     "Pays",
     "Emirats"
    ],
    "a": "Royaume"
   },
   {
    "q": "Quel animal aurait été « élu » maire dans certaines villes américaines pour l'insolite ? Un ___ ?",
    "c": [
     "chien",
     "poisson",
     "serpent",
     "aigle"
    ],
    "a": "chien"
   },
   {
    "q": "Dans quelle ville italienne serait-il interdit de mourir faute de place au cimetière (arrêté insolite) ? En ___ ?",
    "c": [
     "Italie",
     "France",
     "Espagne",
     "Grèce"
    ],
    "a": "Italie"
   },
   {
    "q": "Quelle activité bruyante est réglementée le dimanche dans beaucoup de communes ? La ___ (bricolage/jardin) ?",
    "c": [
     "tonte",
     "lecture",
     "sieste",
     "prière"
    ],
    "a": "tonte"
   },
   {
    "q": "En France, quel vêtement fut légalement interdit aux femmes (loi de 1800, abrogée tard) ? Le port du ___ ?",
    "c": [
     "pantalon",
     "chapeau",
     "manteau",
     "gant"
    ],
    "a": "pantalon"
   },
   {
    "q": "Comment appelle-t-on une loi tombée en désuétude mais jamais abrogée ? Une loi ___ ?",
    "c": [
     "obsolète",
     "récente",
     "urgente",
     "secrète"
    ],
    "a": "obsolète"
   },
   {
    "q": "En quelle année la loi française interdisant le pantalon aux femmes a-t-elle été officiellement abrogée ?",
    "a": "2013"
   }
  ],
  "rw": true
 },
 {
  "id": "societe_002",
  "cat": "societe",
  "name": "La Démocratie",
  "level": "classique",
  "levels": [
   {
    "q": "Que signifie « démocratie » : le pouvoir du ___ ?",
    "c": [
     "peuple",
     "roi",
     "prêtre",
     "juge"
    ],
    "a": "peuple"
   },
   {
    "q": "Comment les citoyens choisissent-ils leurs dirigeants en démocratie ? Par le ___ ?",
    "c": [
     "vote",
     "hasard",
     "combat",
     "silence"
    ],
    "a": "vote"
   },
   {
    "q": "Dans quelle cité antique la démocratie est-elle née ?",
    "c": [
     "Athènes",
     "Rome",
     "Sparte",
     "Thèbes"
    ],
    "a": "Athènes"
   },
   {
    "q": "Comment appelle-t-on l'urne dans laquelle on glisse son bulletin ? L'___ ?",
    "c": [
     "urne",
     "boîte aux lettres",
     "tirelire",
     "corbeille"
    ],
    "a": "urne"
   },
   {
    "q": "Quels trois pouvoirs sont séparés en démocratie : législatif, exécutif et ___ ?",
    "c": [
     "judiciaire",
     "militaire",
     "religieux",
     "médiatique"
    ],
    "a": "judiciaire"
   },
   {
    "q": "Comment appelle-t-on un vote direct du peuple sur une question précise ? Un ___ ?",
    "c": [
     "référendum",
     "sondage",
     "recensement",
     "concours"
    ],
    "a": "référendum"
   },
   {
    "q": "Quel philosophe français a théorisé la séparation des pouvoirs ?",
    "c": [
     "Montesquieu",
     "Voltaire",
     "Rousseau",
     "Diderot"
    ],
    "a": "Montesquieu"
   },
   {
    "q": "En quelle année, avant J.-C., environ, la démocratie athénienne fut-elle instaurée par Clisthène ? En -___ ?",
    "a": "508"
   }
  ],
  "rw": true
 },
 {
  "id": "societe_003",
  "cat": "societe",
  "name": "L'Écologie",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle couleur symbolise l'écologie et la nature ?",
    "c": [
     "vert",
     "rouge",
     "noir",
     "gris"
    ],
    "a": "vert"
   },
   {
    "q": "Quel geste consiste à trier ses déchets pour les réutiliser ? Le ___ ?",
    "c": [
     "recyclage",
     "gaspillage",
     "brûlage",
     "enfouissement"
    ],
    "a": "recyclage"
   },
   {
    "q": "Quel gaz, rejeté par les voitures, contribue au réchauffement ? Le dioxyde de ___ ?",
    "c": [
     "carbone",
     "oxygène",
     "azote",
     "hélium"
    ],
    "a": "carbone"
   },
   {
    "q": "Comment appelle-t-on la hausse des températures mondiales ? Le réchauffement ___ ?",
    "c": [
     "climatique",
     "local",
     "nocturne",
     "hivernal"
    ],
    "a": "climatique"
   },
   {
    "q": "Quelle énergie du vent est renouvelable et propre ? L'énergie ___ ?",
    "c": [
     "éolienne",
     "nucléaire",
     "fossile",
     "charbon"
    ],
    "a": "éolienne"
   },
   {
    "q": "Quel accord international de 2015 vise à limiter le réchauffement climatique ? L'accord de ___ ?",
    "c": [
     "Paris",
     "Kyoto",
     "Rome",
     "Genève"
    ],
    "a": "Paris"
   },
   {
    "q": "Comment appelle-t-on l'empreinte que laisse notre consommation sur la planète ? L'empreinte ___ ?",
    "c": [
     "carbone",
     "digitale",
     "sonore",
     "lumineuse"
    ],
    "a": "carbone"
   },
   {
    "q": "À combien de degrés, maximum, l'accord de Paris veut-il limiter le réchauffement (objectif ambitieux) ?",
    "a": "1.5"
   }
  ],
  "rw": true
 },
 {
  "id": "societe_004",
  "cat": "societe",
  "name": "L'Économie",
  "level": "classique",
  "levels": [
   {
    "q": "Avec quel objet paie-t-on couramment ses achats ? L'___ ?",
    "c": [
     "argent",
     "eau",
     "air",
     "sable"
    ],
    "a": "argent"
   },
   {
    "q": "Quelle est la monnaie unique de nombreux pays européens ?",
    "c": [
     "euro",
     "dollar",
     "yen",
     "livre"
    ],
    "a": "euro"
   },
   {
    "q": "Comment appelle-t-on la hausse générale des prix ? L'___ ?",
    "c": [
     "inflation",
     "déflation",
     "récession",
     "expansion"
    ],
    "a": "inflation"
   },
   {
    "q": "Comment appelle-t-on l'échange de biens entre pays ? Le ___ international ?",
    "c": [
     "commerce",
     "silence",
     "voyage",
     "sommeil"
    ],
    "a": "commerce"
   },
   {
    "q": "Quel indicateur mesure la richesse produite par un pays ? Le ___ ?",
    "c": [
     "PIB",
     "QI",
     "IMC",
     "ADN"
    ],
    "a": "PIB"
   },
   {
    "q": "Comment appelle-t-on une longue période de baisse de l'activité économique ? Une ___ ?",
    "c": [
     "récession",
     "expansion",
     "inflation",
     "croissance"
    ],
    "a": "récession"
   },
   {
    "q": "Quel économiste écossais est l'auteur de « La Richesse des nations » ? Adam ___ ?",
    "c": [
     "Smith",
     "Keynes",
     "Marx",
     "Ricardo"
    ],
    "a": "Smith"
   },
   {
    "q": "En quelle année a éclaté la grande crise financière mondiale des subprimes ?",
    "a": "2008"
   }
  ],
  "rw": true
 },
 {
  "id": "societe_005",
  "cat": "societe",
  "name": "Les droits humains",
  "level": "classique",
  "levels": [
   {
    "q": "Les droits humains sont les droits de tout être ___ ?",
    "c": [
     "humain",
     "vivant",
     "riche",
     "adulte"
    ],
    "a": "humain"
   },
   {
    "q": "Quel texte de 1789 déclare les droits de l'Homme et du citoyen ? La ___ ?",
    "c": [
     "Déclaration",
     "Constitution",
     "Loi",
     "Charte"
    ],
    "a": "Déclaration"
   },
   {
    "q": "Quelle organisation mondiale veille aux droits humains, créée en 1945 ? L'___ (ONU) ?",
    "c": [
     "ONU",
     "OTAN",
     "OMS",
     "FMI"
    ],
    "a": "ONU"
   },
   {
    "q": "Quel droit fondamental garantit de dire ce que l'on pense ? La liberté d'___ ?",
    "c": [
     "expression",
     "circulation",
     "réunion",
     "commerce"
    ],
    "a": "expression"
   },
   {
    "q": "Quel militant sud-africain a lutté contre l'apartheid pour l'égalité ? Nelson ___ ?",
    "c": [
     "Mandela",
     "Gandhi",
     "King",
     "Tutu"
    ],
    "a": "Mandela"
   },
   {
    "q": "Quel pasteur américain a rêvé d'égalité dans son discours « I have a dream » ? Martin Luther ___ ?",
    "c": [
     "King",
     "Parks",
     "Malcolm",
     "Ali"
    ],
    "a": "King"
   },
   {
    "q": "Comment appelle-t-on l'abolition de la distinction entre les êtres humains par la loi ? L'___ des droits ?",
    "c": [
     "égalité",
     "loterie",
     "hiérarchie",
     "vente"
    ],
    "a": "égalité"
   },
   {
    "q": "En quelle année l'ONU a-t-elle adopté la Déclaration universelle des droits de l'homme ?",
    "a": "1948"
   }
  ],
  "rw": true
 },
 {
  "id": "societe_006",
  "cat": "societe",
  "name": "La Mondialisation",
  "level": "classique",
  "levels": [
   {
    "q": "La mondialisation relie les pays du ___ entier ?",
    "c": [
     "monde",
     "quartier",
     "village",
     "jardin"
    ],
    "a": "monde"
   },
   {
    "q": "Quel réseau mondial a accéléré la mondialisation des échanges d'informations ? L'___ ?",
    "c": [
     "Internet",
     "métro",
     "canal",
     "sentier"
    ],
    "a": "Internet"
   },
   {
    "q": "Comment appelle-t-on une entreprise présente dans de nombreux pays ? Une ___ ?",
    "c": [
     "multinationale",
     "boulangerie",
     "mairie",
     "école"
    ],
    "a": "multinationale"
   },
   {
    "q": "Par quel moyen de transport voyagent la plupart des marchandises mondialisées ? Le ___ (bateau) ?",
    "c": [
     "cargo",
     "vélo",
     "traîneau",
     "char"
    ],
    "a": "cargo"
   },
   {
    "q": "Dans quelle grande boîte métallique standardisée transporte-t-on les marchandises ? Un ___ ?",
    "c": [
     "conteneur",
     "panier",
     "sac",
     "carton"
    ],
    "a": "conteneur"
   },
   {
    "q": "Quelle organisation mondiale régule le commerce entre pays ? L'___ (OMC) ?",
    "c": [
     "OMC",
     "OMS",
     "OTAN",
     "ONU"
    ],
    "a": "OMC"
   },
   {
    "q": "Quel pays est devenu « l'usine du monde » par sa production massive ?",
    "c": [
     "Chine",
     "Islande",
     "Malte",
     "Suisse"
    ],
    "a": "Chine"
   },
   {
    "q": "Combien de mètres, environ, de long fait un conteneur maritime standard (40 pieds) ? Environ ___ m ?",
    "a": "12"
   }
  ],
  "rw": true
 },
 {
  "id": "societe_007",
  "cat": "societe",
  "name": "Les migrations",
  "level": "classique",
  "levels": [
   {
    "q": "Comment appelle-t-on une personne qui quitte son pays pour s'installer ailleurs ? Un ___ ?",
    "c": [
     "migrant",
     "touriste",
     "voisin",
     "client"
    ],
    "a": "migrant"
   },
   {
    "q": "Comment appelle-t-on quelqu'un qui fuit la guerre ou les persécutions ? Un ___ ?",
    "c": [
     "réfugié",
     "vacancier",
     "champion",
     "artiste"
    ],
    "a": "réfugié"
   },
   {
    "q": "Quel oiseau, comme les humains, migre chaque année vers le sud ? L'___ ?",
    "c": [
     "hirondelle",
     "poule",
     "pingouin",
     "autruche"
    ],
    "a": "hirondelle"
   },
   {
    "q": "Comment appelle-t-on l'arrivée d'une personne dans un nouveau pays ? L'___ ?",
    "c": [
     "immigration",
     "exportation",
     "livraison",
     "évaporation"
    ],
    "a": "immigration"
   },
   {
    "q": "Comment appelle-t-on le départ hors de son propre pays ? L'___ ?",
    "c": [
     "émigration",
     "importation",
     "récréation",
     "hibernation"
    ],
    "a": "émigration"
   },
   {
    "q": "Par quelle grande île de New York transitaient les migrants vers les USA au XIXe-XXe s. ? ___ Island ?",
    "c": [
     "Ellis",
     "Long",
     "Rhode",
     "Coney"
    ],
    "a": "Ellis"
   },
   {
    "q": "Quel document officiel permet de voyager légalement à l'étranger ? Le ___ ?",
    "c": [
     "passeport",
     "ticket",
     "reçu",
     "diplôme"
    ],
    "a": "passeport"
   },
   {
    "q": "Combien de migrants, environ en millions, sont passés par Ellis Island entre 1892 et 1954 ?",
    "a": "12"
   }
  ],
  "rw": true
 },
 {
  "id": "societe_008",
  "cat": "societe",
  "name": "Les inégalités",
  "level": "classique",
  "levels": [
   {
    "q": "Une inégalité, c'est quand les gens ne sont pas traités de façon ___ ?",
    "c": [
     "égale",
     "rapide",
     "sonore",
     "colorée"
    ],
    "a": "égale"
   },
   {
    "q": "Quelle inégalité concerne l'écart de salaire entre hommes et femmes ? L'inégalité de ___ ?",
    "c": [
     "genre",
     "taille",
     "âge",
     "poids"
    ],
    "a": "genre"
   },
   {
    "q": "Comment appelle-t-on l'écart entre les très riches et les très pauvres ? Les inégalités de ___ ?",
    "c": [
     "richesse",
     "hauteur",
     "vitesse",
     "couleur"
    ],
    "a": "richesse"
   },
   {
    "q": "Quel service public gratuit aide à réduire les inégalités par le savoir ? L'___ ?",
    "c": [
     "école",
     "casino",
     "usine",
     "banque"
    ],
    "a": "école"
   },
   {
    "q": "Comment appelle-t-on l'impôt qui fait payer plus les riches pour réduire les écarts ? L'impôt ___ ?",
    "c": [
     "progressif",
     "gratuit",
     "secret",
     "unique"
    ],
    "a": "progressif"
   },
   {
    "q": "Quel mouvement dénonce que 1 % des gens possèdent une énorme part des richesses ? Occupy ___ ?",
    "c": [
     "Wall Street",
     "Main Street",
     "Baker Street",
     "Downing Street"
    ],
    "a": "Wall Street"
   },
   {
    "q": "Quel coefficient, entre 0 et 1, mesure les inégalités de revenus dans un pays ? Le coefficient de ___ ?",
    "c": [
     "Gini",
     "Pareto",
     "Nash",
     "Euler"
    ],
    "a": "Gini"
   },
   {
    "q": "Quel pourcentage, environ, de la richesse mondiale les 1 % les plus riches détiennent-ils (estimations récentes) ?",
    "a": "45"
   }
  ],
  "rw": true
 },
 {
  "id": "voyage_001",
  "cat": "societe",
  "name": "La Laïcité",
  "level": "classique",
  "levels": [
   {
    "q": "La laïcité sépare l'État et la ___ ?",
    "c": [
     "religion",
     "musique",
     "cuisine",
     "météo"
    ],
    "a": "religion"
   },
   {
    "q": "En France, quelle loi de 1905 fonde la laïcité ? La séparation des Églises et de l'___ ?",
    "c": [
     "État",
     "école",
     "armée",
     "usine"
    ],
    "a": "État"
   },
   {
    "q": "La laïcité garantit à chacun la liberté de ___ (croire ou non) ?",
    "c": [
     "conscience",
     "circulation",
     "commerce",
     "réunion"
    ],
    "a": "conscience"
   },
   {
    "q": "Dans quel lieu public la neutralité religieuse est-elle stricte en France ? L'___ ?",
    "c": [
     "école",
     "cinéma",
     "stade",
     "marché"
    ],
    "a": "école"
   },
   {
    "q": "La laïcité traite-t-elle toutes les religions de façon égale ou en favorise-t-elle une ?",
    "c": [
     "égale",
     "une seule",
     "aucune tolérée",
     "deux"
    ],
    "a": "égale"
   },
   {
    "q": "Comment appelle-t-on le fait de ne privilégier aucune religion ? La ___ de l'État ?",
    "c": [
     "neutralité",
     "richesse",
     "hauteur",
     "vitesse"
    ],
    "a": "neutralité"
   },
   {
    "q": "Quel principe de la République française figure sur les frontons avec Liberté et Fraternité et encadre la laïcité ? L'___ ?",
    "c": [
     "Égalité",
     "Sécurité",
     "Prospérité",
     "Autorité"
    ],
    "a": "Égalité"
   },
   {
    "q": "En quelle année a été votée la loi française de séparation des Églises et de l'État ?",
    "a": "1905"
   }
  ],
  "rw": true
 },
 {
  "id": "voyage_002",
  "cat": "voyage",
  "name": "L'Europe",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle monnaie unique partagent de nombreux pays européens ?",
    "c": [
     "euro",
     "dollar",
     "franc",
     "livre"
    ],
    "a": "euro"
   },
   {
    "q": "Dans quelle ville belge siègent de nombreuses institutions européennes ?",
    "c": [
     "Bruxelles",
     "Paris",
     "Berlin",
     "Rome"
    ],
    "a": "Bruxelles"
   },
   {
    "q": "Quel massif montagneux sépare la France de l'Italie et de la Suisse ? Les ___ ?",
    "c": [
     "Alpes",
     "Andes",
     "Rocheuses",
     "Oural"
    ],
    "a": "Alpes"
   },
   {
    "q": "Quel petit État, entouré par Rome, est le plus petit pays du monde ? Le ___ ?",
    "c": [
     "Vatican",
     "Monaco",
     "Andorre",
     "Malte"
    ],
    "a": "Vatican"
   },
   {
    "q": "Combien d'États membres compte l'Union européenne depuis le Brexit ?",
    "a": "27"
   },
   {
    "q": "Quel fleuve traverse plusieurs capitales dont Vienne et Budapest ? Le ___ ?",
    "c": [
     "Danube",
     "Rhin",
     "Volga",
     "Tage"
    ],
    "a": "Danube"
   },
   {
    "q": "Quel pays européen a quitté l'UE lors du « Brexit » ? Le ___-Uni ?",
    "c": [
     "Royaume",
     "Pays",
     "États",
     "Emirats"
    ],
    "a": "Royaume"
   },
   {
    "q": "En quelle année le traité de Maastricht a-t-il fondé l'Union européenne ?",
    "a": "1992"
   }
  ],
  "rw": true
 },
 {
  "id": "voyage_003",
  "cat": "voyage",
  "name": "L'Asie",
  "level": "classique",
  "levels": [
   {
    "q": "Quel est le continent le plus vaste et le plus peuplé du monde ?",
    "c": [
     "Asie",
     "Afrique",
     "Europe",
     "Océanie"
    ],
    "a": "Asie"
   },
   {
    "q": "Quel pays asiatique est le plus peuplé du monde (récemment devant la Chine) ?",
    "c": [
     "Inde",
     "Japon",
     "Vietnam",
     "Corée"
    ],
    "a": "Inde"
   },
   {
    "q": "Quelle plus haute montagne du monde se dresse entre le Népal et la Chine ? L'___ ?",
    "c": [
     "Everest",
     "Fuji",
     "Kilimandjaro",
     "Mont Blanc"
    ],
    "a": "Everest"
   },
   {
    "q": "Quel long mur défensif traverse le nord de la Chine ? La Grande ___ ?",
    "c": [
     "Muraille",
     "Digue",
     "Route",
     "Barrière"
    ],
    "a": "Muraille"
   },
   {
    "q": "Quel archipel japonais compte le mont Fuji comme symbole ? Le ___ ?",
    "c": [
     "Japon",
     "Népal",
     "Bhoutan",
     "Laos"
    ],
    "a": "Japon"
   },
   {
    "q": "Quel fleuve sacré traverse l'Inde du nord ? Le ___ ?",
    "c": [
     "Gange",
     "Nil",
     "Amazone",
     "Congo"
    ],
    "a": "Gange"
   },
   {
    "q": "Quelle est la plus haute altitude, en mètres, du mont Everest, toit du monde ?",
    "a": "8849"
   },
   {
    "q": "Combien de pays, environ, compte le continent asiatique ?",
    "a": "48"
   }
  ],
  "rw": true
 },
 {
  "id": "voyage_004",
  "cat": "voyage",
  "name": "L'Afrique",
  "level": "classique",
  "levels": [
   {
    "q": "Quel plus grand désert chaud couvre le nord de l'Afrique ? Le ___ ?",
    "c": [
     "Sahara",
     "Gobi",
     "Kalahari",
     "Atacama"
    ],
    "a": "Sahara"
   },
   {
    "q": "Quel long fleuve d'Afrique traverse l'Égypte ? Le ___ ?",
    "c": [
     "Nil",
     "Congo",
     "Niger",
     "Zambèze"
    ],
    "a": "Nil"
   },
   {
    "q": "Quel grand animal à long cou brun et jaune vit dans la savane africaine ? La ___ ?",
    "c": [
     "girafe",
     "vache",
     "chèvre",
     "brebis"
    ],
    "a": "girafe"
   },
   {
    "q": "Quel plus haut sommet d'Afrique, enneigé, se dresse en Tanzanie ? Le ___ ?",
    "c": [
     "Kilimandjaro",
     "Everest",
     "Cervin",
     "Mont Blanc"
    ],
    "a": "Kilimandjaro"
   },
   {
    "q": "Quelles célèbres chutes d'eau se trouvent entre la Zambie et le Zimbabwe ? Les chutes ___ ?",
    "c": [
     "Victoria",
     "Niagara",
     "Iguazú",
     "Angel"
    ],
    "a": "Victoria"
   },
   {
    "q": "Comment appelle-t-on les cinq grands animaux emblématiques des safaris ? Les Big ___ ?",
    "c": [
     "Five",
     "Four",
     "Six",
     "Ten"
    ],
    "a": "Five"
   },
   {
    "q": "Quel pays d'Afrique du Nord est traversé par la vallée du Nil et abrite les pyramides ?",
    "c": [
     "Égypte",
     "Maroc",
     "Libye",
     "Tunisie"
    ],
    "a": "Égypte"
   },
   {
    "q": "Combien de pays, environ, compte le continent africain ?",
    "a": "54"
   }
  ],
  "rw": true
 },
 {
  "id": "voyage_005",
  "cat": "voyage",
  "name": "L'Amérique latine",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle langue, avec le portugais, domine en Amérique latine ?",
    "c": [
     "espagnol",
     "anglais",
     "français",
     "allemand"
    ],
    "a": "espagnol"
   },
   {
    "q": "Quelle célèbre cité inca perchée se visite au Pérou ? Le Machu ___ ?",
    "c": [
     "Picchu",
     "Pacha",
     "Pichu",
     "Pisco"
    ],
    "a": "Picchu"
   },
   {
    "q": "Quel plus grand fleuve du monde traverse l'Amérique du Sud ? L'___ ?",
    "c": [
     "Amazone",
     "Nil",
     "Mississippi",
     "Congo"
    ],
    "a": "Amazone"
   },
   {
    "q": "Quelle danse et carnaval font la fierté du Brésil ? La ___ ?",
    "c": [
     "samba",
     "valse",
     "polka",
     "gigue"
    ],
    "a": "samba"
   },
   {
    "q": "Quelle longue chaîne de montagnes borde l'ouest de l'Amérique du Sud ? La cordillère des ___ ?",
    "c": [
     "Andes",
     "Alpes",
     "Rocheuses",
     "Vosges"
    ],
    "a": "Andes"
   },
   {
    "q": "Quel peuple ancien a bâti un empire au Pérou avant les Espagnols ? Les ___ ?",
    "c": [
     "Incas",
     "Vikings",
     "Romains",
     "Mongols"
    ],
    "a": "Incas"
   },
   {
    "q": "Quelle vaste forêt tropicale, poumon vert, couvre le nord du continent ? L'___ ?",
    "c": [
     "Amazonie",
     "Patagonie",
     "Pampa",
     "Sahel"
    ],
    "a": "Amazonie"
   },
   {
    "q": "À quelle altitude, en mètres, se trouve le Machu Picchu ?",
    "a": "2430"
   }
  ],
  "rw": true
 },
 {
  "id": "voyage_006",
  "cat": "voyage",
  "name": "L'Océanie",
  "level": "classique",
  "levels": [
   {
    "q": "Quel plus grand pays d'Océanie est aussi un continent ? L'___ ?",
    "c": [
     "Australie",
     "Fidji",
     "Samoa",
     "Tonga"
    ],
    "a": "Australie"
   },
   {
    "q": "Quel animal sauteur à poche est emblématique de l'Australie ? Le ___ ?",
    "c": [
     "kangourou",
     "lama",
     "renne",
     "bison"
    ],
    "a": "kangourou"
   },
   {
    "q": "Quel grand récif corallien borde la côte australienne ? La Grande ___ de corail ?",
    "c": [
     "Barrière",
     "Muraille",
     "Digue",
     "Île"
    ],
    "a": "Barrière"
   },
   {
    "q": "Quel peuple autochtone vit en Nouvelle-Zélande ? Les ___ ?",
    "c": [
     "Maoris",
     "Inuits",
     "Aztèques",
     "Zoulous"
    ],
    "a": "Maoris"
   },
   {
    "q": "Quel océan entoure les îles de l'Océanie ? L'océan ___ ?",
    "c": [
     "Pacifique",
     "Atlantique",
     "Indien",
     "Arctique"
    ],
    "a": "Pacifique"
   },
   {
    "q": "Quel petit animal grimpeur au régime d'eucalyptus vit en Australie ? Le ___ ?",
    "c": [
     "koala",
     "panda",
     "paresseux",
     "lémurien"
    ],
    "a": "koala"
   },
   {
    "q": "Quel grand rocher rouge sacré des Aborigènes se dresse au centre de l'Australie ?",
    "c": [
     "Uluru",
     "Everest",
     "Fuji",
     "Etna"
    ],
    "a": "Uluru"
   },
   {
    "q": "Combien d'îles, environ, compte l'Océanie au total (estimation) ? Plus de ___ mille ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "voyage_007",
  "cat": "voyage",
  "name": "Le Moyen-Orient",
  "level": "classique",
  "levels": [
   {
    "q": "Quelle ressource souterraine précieuse est abondante au Moyen-Orient ? Le ___ ?",
    "c": [
     "pétrole",
     "charbon",
     "or",
     "diamant"
    ],
    "a": "pétrole"
   },
   {
    "q": "Quel désert de sable couvre une grande partie de la péninsule arabique ? Le désert d'___ ?",
    "c": [
     "Arabie",
     "Gobi",
     "Kalahari",
     "Atacama"
    ],
    "a": "Arabie"
   },
   {
    "q": "Quelle ville sainte est vénérée par juifs, chrétiens et musulmans ?",
    "c": [
     "Jérusalem",
     "Le Caire",
     "Riyad",
     "Amman"
    ],
    "a": "Jérusalem"
   },
   {
    "q": "Quelle très haute tour de Dubaï est la plus haute du monde ? La Burj ___ ?",
    "c": [
     "Khalifa",
     "Dubai",
     "Arab",
     "Al Waha"
    ],
    "a": "Khalifa"
   },
   {
    "q": "Quels deux grands fleuves entouraient la Mésopotamie antique ? Le Tigre et l'___ ?",
    "c": [
     "Euphrate",
     "Nil",
     "Jourdain",
     "Oronte"
    ],
    "a": "Euphrate"
   },
   {
    "q": "Vers quelle ville sainte les musulmans se tournent-ils pour prier ? La ___ ?",
    "c": [
     "Mecque",
     "Médine",
     "Bagdad",
     "Damas"
    ],
    "a": "Mecque"
   },
   {
    "q": "Quelle cité antique rose, taillée dans la roche, se visite en Jordanie ?",
    "c": [
     "Pétra",
     "Babylone",
     "Palmyre",
     "Ninive"
    ],
    "a": "Pétra"
   },
   {
    "q": "Quelle hauteur, en mètres, atteint la Burj Khalifa à Dubaï ?",
    "a": "828"
   }
  ],
  "rw": true
 },
 {
  "id": "voyage_008",
  "cat": "voyage",
  "name": "Les Caraïbes",
  "level": "classique",
  "levels": [
   {
    "q": "Dans quelle mer chaude se trouvent les îles des Caraïbes ? La mer des ___ ?",
    "c": [
     "Caraïbes",
     "Baltique",
     "Noire",
     "Rouge"
    ],
    "a": "Caraïbes"
   },
   {
    "q": "Quel alcool de canne à sucre est typique des Caraïbes ? Le ___ ?",
    "c": [
     "rhum",
     "whisky",
     "vodka",
     "saké"
    ],
    "a": "rhum"
   },
   {
    "q": "Quelle grande île des Caraïbes a La Havane pour capitale ?",
    "c": [
     "Cuba",
     "Jamaïque",
     "Haïti",
     "Barbade"
    ],
    "a": "Cuba"
   },
   {
    "q": "Quelles plages de sable ___ font rêver dans les Caraïbes ?",
    "c": [
     "blanc",
     "noir",
     "rouge",
     "vert"
    ],
    "a": "blanc"
   },
   {
    "q": "Quelle musique jamaïcaine aux racines rasta est née dans les Caraïbes ? Le ___ ?",
    "c": [
     "reggae",
     "flamenco",
     "fado",
     "tango"
    ],
    "a": "reggae"
   },
   {
    "q": "Quels violents cyclones frappent parfois les Caraïbes ? Des ___ ?",
    "c": [
     "ouragans",
     "blizzards",
     "typhons",
     "moussons"
    ],
    "a": "ouragans"
   },
   {
    "q": "De quelle île des Caraïbes le chanteur Bob Marley est-il originaire ? La ___ ?",
    "c": [
     "Jamaïque",
     "Cuba",
     "Haïti",
     "Trinité"
    ],
    "a": "Jamaïque"
   },
   {
    "q": "Combien d'îles, environ, compte l'archipel des Caraïbes (îles et îlots) ? Plus de ___ mille ?",
    "a": "7"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_001",
  "cat": "sexe",
  "name": "La fellation",
  "level": "adulte",
  "levels": [
   {
    "q": "La fellation est une pratique sexuelle dite ___ ? (par la bouche)",
    "c": [
     "orale",
     "manuelle",
     "visuelle",
     "auditive"
    ],
    "a": "orale"
   },
   {
    "q": "Quel principe fondamental doit précéder toute pratique sexuelle entre partenaires ? Le ___ ?",
    "c": [
     "consentement",
     "silence",
     "paiement",
     "hasard"
    ],
    "a": "consentement"
   },
   {
    "q": "Quel moyen de protection réduit le risque d'IST lors du sexe oral ? Le ___ ?",
    "c": [
     "préservatif",
     "gant de toilette",
     "parapluie",
     "bandeau"
    ],
    "a": "préservatif"
   },
   {
    "q": "Les IST peuvent-elles se transmettre lors de rapports oraux ? ___ ?",
    "c": [
     "oui",
     "non",
     "seulement l'hiver",
     "seulement en couple"
    ],
    "a": "oui"
   },
   {
    "q": "Comment appelle-t-on la branche de la médecine qui traite la santé sexuelle ? La ___ ?",
    "c": [
     "sexologie",
     "cardiologie",
     "pédiatrie",
     "radiologie"
    ],
    "a": "sexologie"
   },
   {
    "q": "Quelle protection en latex peut être utilisée pour le sexe oral sur une vulve ? La digue ___ ?",
    "c": [
     "dentaire",
     "buccale",
     "murale",
     "barrière"
    ],
    "a": "dentaire"
   },
   {
    "q": "Le consentement doit pouvoir être retiré à tout moment : vrai ou faux ?",
    "c": [
     "vrai",
     "faux",
     "seulement au début",
     "seulement écrit"
    ],
    "a": "vrai"
   },
   {
    "q": "À quel âge, en France, la loi fixe-t-elle la majorité sexuelle (consentement) ?",
    "a": "15"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_002",
  "cat": "sexe",
  "name": "La sodomie",
  "level": "adulte",
  "levels": [
   {
    "q": "Comme toute pratique sexuelle, la sodomie requiert avant tout le ___ des partenaires ?",
    "c": [
     "consentement",
     "secret",
     "argent",
     "hasard"
    ],
    "a": "consentement"
   },
   {
    "q": "Quel moyen de protection est recommandé pour réduire le risque d'IST ? Le ___ ?",
    "c": [
     "préservatif",
     "foulard",
     "gant de jardin",
     "chapeau"
    ],
    "a": "préservatif"
   },
   {
    "q": "Pourquoi cette zone est-elle plus fragile, justifiant douceur et lubrifiant ? La muqueuse est ___ ?",
    "c": [
     "fine",
     "épaisse",
     "sèche par nature",
     "insensible"
    ],
    "a": "fine"
   },
   {
    "q": "Quel produit réduit les frictions et les risques de micro-lésions ? Le ___ ?",
    "c": [
     "lubrifiant",
     "vinaigre",
     "savon abrasif",
     "alcool"
    ],
    "a": "lubrifiant"
   },
   {
    "q": "Avec quel type de lubrifiant NE faut-il PAS utiliser un préservatif en latex ? Un lubrifiant à base d'___ ?",
    "c": [
     "huile",
     "eau",
     "silicone médical",
     "aloès pur"
    ],
    "a": "huile"
   },
   {
    "q": "Quelle IST virale grave le préservatif aide-t-il à prévenir ? Le ___ ?",
    "c": [
     "VIH",
     "rhume",
     "tétanos",
     "zona"
    ],
    "a": "VIH"
   },
   {
    "q": "Quel muscle circulaire contrôle cette zone du corps ? Le ___ ?",
    "c": [
     "sphincter",
     "biceps",
     "mollet",
     "trapèze"
    ],
    "a": "sphincter"
   },
   {
    "q": "Quel dépistage régulier est recommandé pour les personnes à risque d'IST ? Le ___ ?",
    "c": [
     "dépistage",
     "déménagement",
     "bilan comptable",
     "vaccin antigrippal seul"
    ],
    "a": "dépistage"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_003",
  "cat": "sexe",
  "name": "L'homosexualité",
  "level": "adulte",
  "levels": [
   {
    "q": "L'homosexualité désigne l'attirance envers une personne du ___ sexe ?",
    "c": [
     "même",
     "opposé",
     "aucun",
     "troisième"
    ],
    "a": "même"
   },
   {
    "q": "Quel drapeau multicolore est le symbole des communautés LGBT ? Le drapeau ___ ?",
    "c": [
     "arc-en-ciel",
     "noir",
     "blanc",
     "à damier"
    ],
    "a": "arc-en-ciel"
   },
   {
    "q": "Comment appelle-t-on le fait d'annoncer publiquement son homosexualité ? Le coming ___ ?",
    "c": [
     "out",
     "in",
     "up",
     "back"
    ],
    "a": "out"
   },
   {
    "q": "Que signifie la lettre « G » dans le sigle LGBT ? ___ ?",
    "c": [
     "gay",
     "genre",
     "groupe",
     "gender-fluid"
    ],
    "a": "gay"
   },
   {
    "q": "En quelle année l'OMS a-t-elle retiré l'homosexualité de sa liste des maladies mentales ?",
    "a": "1990"
   },
   {
    "q": "Quelles émeutes de 1969 à New York ont lancé le mouvement des droits LGBT ? Les émeutes de ___ ?",
    "c": [
     "Stonewall",
     "Central Park",
     "Harlem",
     "Brooklyn"
    ],
    "a": "Stonewall"
   },
   {
    "q": "Comment appelle-t-on la marche annuelle des fiertés LGBT ? La ___ ?",
    "c": [
     "Pride",
     "Fashion Week",
     "Techno Parade",
     "Fête des voisins"
    ],
    "a": "Pride"
   },
   {
    "q": "En quelle année la France a-t-elle dépénalisé l'homosexualité (égalité de la majorité sexuelle) ?",
    "a": "1982"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_004",
  "cat": "sexe",
  "name": "Le Kamasutra",
  "level": "adulte",
  "levels": [
   {
    "q": "De quel pays le Kamasutra est-il originaire ?",
    "c": [
     "Inde",
     "Chine",
     "Japon",
     "Grèce"
    ],
    "a": "Inde"
   },
   {
    "q": "Le Kamasutra est avant tout un ancien ___ ? (texte)",
    "c": [
     "traité",
     "film",
     "tableau",
     "opéra"
    ],
    "a": "traité"
   },
   {
    "q": "Dans quelle langue ancienne le Kamasutra a-t-il été écrit ? Le ___ ?",
    "c": [
     "sanskrit",
     "latin",
     "grec",
     "arabe"
    ],
    "a": "sanskrit"
   },
   {
    "q": "Le Kamasutra traite-t-il uniquement de sexe, ou aussi de l'art de vivre et d'aimer ? De l'art de ___ ?",
    "c": [
     "vivre",
     "cuisiner",
     "combattre",
     "naviguer"
    ],
    "a": "vivre"
   },
   {
    "q": "Quel sage indien est considéré comme l'auteur du Kamasutra ? ___ ?",
    "c": [
     "Vatsyayana",
     "Bouddha",
     "Gandhi",
     "Ashoka"
    ],
    "a": "Vatsyayana"
   },
   {
    "q": "Que signifie le mot « kama » en sanskrit, l'un des buts de la vie ? Le ___ ?",
    "c": [
     "désir",
     "travail",
     "silence",
     "sommeil"
    ],
    "a": "désir"
   },
   {
    "q": "Le Kamasutra décrit-il seulement des positions, ou aussi la séduction et le mariage ? Aussi le ___ ?",
    "c": [
     "mariage",
     "commerce",
     "jardinage",
     "voyage"
    ],
    "a": "mariage"
   },
   {
    "q": "Vers quel siècle, environ, le Kamasutra a-t-il été rédigé ? Le ___e siècle apr. J.-C. ?",
    "c": [
     "3",
     "12",
     "18",
     "1"
    ],
    "a": "3"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_005",
  "cat": "sexe",
  "name": "La contraception",
  "level": "adulte",
  "levels": [
   {
    "q": "À quoi sert la contraception ? À éviter une ___ non désirée ?",
    "c": [
     "grossesse",
     "maladie osseuse",
     "carie",
     "insomnie"
    ],
    "a": "grossesse"
   },
   {
    "q": "Quelle contraception orale féminine se prend chaque jour ? La ___ ?",
    "c": [
     "pilule",
     "gélule de fer",
     "vitamine",
     "tisane"
    ],
    "a": "pilule"
   },
   {
    "q": "Quel moyen protège à la fois d'une grossesse ET des IST ? Le ___ ?",
    "c": [
     "préservatif",
     "stérilet seul",
     "pilule seule",
     "patch"
    ],
    "a": "préservatif"
   },
   {
    "q": "Quel petit dispositif en T est posé dans l'utérus ? Le ___ (DIU) ?",
    "c": [
     "stérilet",
     "pacemaker",
     "plombage",
     "implant auditif"
    ],
    "a": "stérilet"
   },
   {
    "q": "Quelle contraception d'urgence se prend après un rapport à risque ? La pilule du ___ ?",
    "c": [
     "lendemain",
     "matin même",
     "mois",
     "hasard"
    ],
    "a": "lendemain"
   },
   {
    "q": "Quelle hormone est à la base de nombreuses pilules contraceptives ? Le ___ (et l'œstrogène) ?",
    "c": [
     "progestatif",
     "insuline",
     "adrénaline",
     "cortisol"
    ],
    "a": "progestatif"
   },
   {
    "q": "Quel petit bâtonnet posé sous la peau du bras diffuse une hormone contraceptive ? L'___ ?",
    "c": [
     "implant",
     "aimant",
     "capteur",
     "tatouage"
    ],
    "a": "implant"
   },
   {
    "q": "En quelle année la pilule contraceptive a-t-elle été légalisée en France (loi Neuwirth) ?",
    "a": "1967"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_006",
  "cat": "sexe",
  "name": "Les MST",
  "level": "adulte",
  "levels": [
   {
    "q": "Que signifie le sigle IST ? Infection ___ transmissible ?",
    "c": [
     "sexuellement",
     "socialement",
     "spontanément",
     "saisonnièrement"
    ],
    "a": "sexuellement"
   },
   {
    "q": "Quel moyen simple réduit fortement le risque d'attraper une IST ? Le ___ ?",
    "c": [
     "préservatif",
     "chapeau",
     "gant",
     "foulard"
    ],
    "a": "préservatif"
   },
   {
    "q": "Quel test permet de savoir si l'on a une IST ? Le ___ ?",
    "c": [
     "dépistage",
     "sondage",
     "casting",
     "recensement"
    ],
    "a": "dépistage"
   },
   {
    "q": "Quelle IST virale, autrefois mortelle, s'attaque au système immunitaire ? Le ___ ?",
    "c": [
     "VIH",
     "rhume",
     "grippe",
     "varicelle"
    ],
    "a": "VIH"
   },
   {
    "q": "Contre quelle IST responsable de cancers existe-t-il un vaccin (papillomavirus) ? Le ___ ?",
    "c": [
     "HPV",
     "VIH",
     "herpès",
     "chlamydia"
    ],
    "a": "HPV"
   },
   {
    "q": "Quel traitement préventif quotidien protège du VIH les personnes à risque ? La ___ ?",
    "c": [
     "PrEP",
     "PMA",
     "IVG",
     "FIV"
    ],
    "a": "PrEP"
   },
   {
    "q": "Beaucoup d'IST bactériennes se soignent avec quel type de médicament ? Des ___ ?",
    "c": [
     "antibiotiques",
     "vitamines",
     "vaccins",
     "sirops sucrés"
    ],
    "a": "antibiotiques"
   },
   {
    "q": "Combien de nouvelles IST curables, environ en millions, l'OMS recense-t-elle chaque jour dans le monde ?",
    "a": "1"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_007",
  "cat": "sexe",
  "name": "L'anatomie féminine",
  "level": "adulte",
  "levels": [
   {
    "q": "Comment appelle-t-on l'organe où se développe le bébé pendant la grossesse ? L'___ ?",
    "c": [
     "utérus",
     "estomac",
     "foie",
     "poumon"
    ],
    "a": "utérus"
   },
   {
    "q": "Comment appelle-t-on l'ensemble des organes génitaux externes féminins ? La ___ ?",
    "c": [
     "vulve",
     "rotule",
     "clavicule",
     "trachée"
    ],
    "a": "vulve"
   },
   {
    "q": "Quelles glandes produisent les ovules chez la femme ? Les ___ ?",
    "c": [
     "ovaires",
     "reins",
     "surrénales",
     "amygdales"
    ],
    "a": "ovaires"
   },
   {
    "q": "Quel cycle féminin dure en moyenne 28 jours ? Le cycle ___ ?",
    "c": [
     "menstruel",
     "lunaire exact",
     "circadien",
     "solaire"
    ],
    "a": "menstruel"
   },
   {
    "q": "Quels conduits relient les ovaires à l'utérus ? Les trompes de ___ ?",
    "c": [
     "Fallope",
     "Eustache",
     "Botal",
     "Henlé"
    ],
    "a": "Fallope"
   },
   {
    "q": "Quel organe exclusivement dédié au plaisir féminin possède des milliers de terminaisons nerveuses ? Le ___ ?",
    "c": [
     "clitoris",
     "coude",
     "talon",
     "lobe"
    ],
    "a": "clitoris"
   },
   {
    "q": "Quelle hormone féminine principale est produite par les ovaires ? L'___ ?",
    "c": [
     "œstrogène",
     "testostérone seule",
     "insuline",
     "adrénaline"
    ],
    "a": "œstrogène"
   },
   {
    "q": "Combien d'ovules, environ, une femme possède-t-elle à la naissance (en milliers) ? Environ ___ mille ?",
    "a": "1000"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_008",
  "cat": "sexe",
  "name": "L'anatomie masculine",
  "level": "adulte",
  "levels": [
   {
    "q": "Quels organes produisent les spermatozoïdes chez l'homme ? Les ___ ?",
    "c": [
     "testicules",
     "reins",
     "poumons",
     "amygdales"
    ],
    "a": "testicules"
   },
   {
    "q": "Dans quelle poche de peau se trouvent les testicules ? Le ___ ?",
    "c": [
     "scrotum",
     "sternum",
     "tympan",
     "diaphragme"
    ],
    "a": "scrotum"
   },
   {
    "q": "Quel liquide, éjaculé, transporte les spermatozoïdes ? Le ___ ?",
    "c": [
     "sperme",
     "plasma sanguin",
     "suc gastrique",
     "mucus nasal"
    ],
    "a": "sperme"
   },
   {
    "q": "Quelle glande, sous la vessie, produit une partie du liquide séminal ? La ___ ?",
    "c": [
     "prostate",
     "thyroïde",
     "rate",
     "hypophyse"
    ],
    "a": "prostate"
   },
   {
    "q": "Quel conduit transporte l'urine et le sperme hors du corps ? L'___ ?",
    "c": [
     "urètre",
     "uretère",
     "œsophage",
     "bronche"
    ],
    "a": "urètre"
   },
   {
    "q": "Quelle hormone masculine principale est produite par les testicules ? La ___ ?",
    "c": [
     "testostérone",
     "œstrogène seul",
     "insuline",
     "mélatonine"
    ],
    "a": "testostérone"
   },
   {
    "q": "Pourquoi les testicules sont-ils situés à l'extérieur du corps ? Pour être plus au ___ (température) ?",
    "c": [
     "frais",
     "chaud",
     "sec",
     "sombre"
    ],
    "a": "frais"
   },
   {
    "q": "Combien de spermatozoïdes, environ en millions, un homme produit-il chaque jour ? Environ ___ millions ?",
    "a": "100"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_009",
  "cat": "sexe",
  "name": "La pornographie",
  "level": "adulte",
  "levels": [
   {
    "q": "La pornographie est un contenu réservé à un public ___ ? (âge)",
    "c": [
     "adulte",
     "enfantin",
     "familial",
     "scolaire"
    ],
    "a": "adulte"
   },
   {
    "q": "Quel type de contrôle les sites pornographiques doivent-ils légalement mettre en place ? La vérification de l'___ ?",
    "c": [
     "âge",
     "adresse",
     "poids",
     "taille"
    ],
    "a": "âge"
   },
   {
    "q": "La pornographie donne-t-elle une image réaliste ou déformée de la sexualité ? ___ ?",
    "c": [
     "déformée",
     "réaliste",
     "scientifique",
     "médicale"
    ],
    "a": "déformée"
   },
   {
    "q": "Quelle notion essentielle est souvent absente ou mal représentée dans le porno ? Le ___ ?",
    "c": [
     "consentement",
     "décor",
     "éclairage",
     "montage"
    ],
    "a": "consentement"
   },
   {
    "q": "Quel type d'éducation aide les jeunes à décrypter ces images ? L'éducation à la ___ ?",
    "c": [
     "sexualité",
     "conduite",
     "musique",
     "cuisine"
    ],
    "a": "sexualité"
   },
   {
    "q": "Comment appelle-t-on une dépendance excessive à la consommation de porno ? Une ___ ?",
    "c": [
     "addiction",
     "allergie",
     "immunité",
     "carence"
    ],
    "a": "addiction"
   },
   {
    "q": "En France, montrer du contenu pornographique à un mineur est-il légal ou un délit ? Un ___ ?",
    "c": [
     "délit",
     "droit",
     "devoir",
     "usage"
    ],
    "a": "délit"
   },
   {
    "q": "En quelle année la loi française a-t-elle renforcé l'obligation de vérification d'âge sur les sites porno (loi SREN) ?",
    "a": "2024"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_010",
  "cat": "sexe",
  "name": "La virginité",
  "level": "adulte",
  "levels": [
   {
    "q": "La virginité désigne le fait de n'avoir jamais eu de rapport ___ ?",
    "c": [
     "sexuel",
     "verbal",
     "visuel",
     "écrit"
    ],
    "a": "sexuel"
   },
   {
    "q": "La « première fois » est une notion surtout ___ et personnelle ? (pas un état médical)",
    "c": [
     "culturelle",
     "chimique",
     "génétique",
     "climatique"
    ],
    "a": "culturelle"
   },
   {
    "q": "Quelle fine membrane a longtemps été associée à tort à un « test » de virginité ? L'___ ?",
    "c": [
     "hymen",
     "tympan",
     "rétine",
     "cornée"
    ],
    "a": "hymen"
   },
   {
    "q": "L'état de l'hymen est-il un indicateur fiable de virginité selon la médecine ? ___ ?",
    "c": [
     "non",
     "oui toujours",
     "seulement chez l'homme",
     "seulement à 18 ans"
    ],
    "a": "non"
   },
   {
    "q": "Quelle organisation dénonce les « tests de virginité » comme non scientifiques et attentatoires ? L'___ ?",
    "c": [
     "OMS",
     "OTAN",
     "FMI",
     "FIFA"
    ],
    "a": "OMS"
   },
   {
    "q": "La virginité concerne-t-elle uniquement les femmes, ou tout le monde ? ___ ?",
    "c": [
     "tout le monde",
     "les femmes",
     "les hommes",
     "personne"
    ],
    "a": "tout le monde"
   },
   {
    "q": "Quel principe rend la première fois valable et respectueuse ? Le ___ ?",
    "c": [
     "consentement",
     "hasard",
     "secret",
     "paiement"
    ],
    "a": "consentement"
   },
   {
    "q": "En quelle année l'OMS a-t-elle appelé à l'interdiction mondiale des tests de virginité ?",
    "a": "2018"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_011",
  "cat": "sexe",
  "name": "Les phéromones",
  "level": "adulte",
  "levels": [
   {
    "q": "Les phéromones sont des signaux ___ émis par le corps ? (odeur)",
    "c": [
     "chimiques",
     "sonores",
     "lumineux",
     "électriques"
    ],
    "a": "chimiques"
   },
   {
    "q": "Par quel sens perçoit-on essentiellement les phéromones ? L'___ ?",
    "c": [
     "odorat",
     "vue",
     "ouïe",
     "toucher"
    ],
    "a": "odorat"
   },
   {
    "q": "Chez les animaux, à quoi servent surtout les phéromones ? À la ___ ?",
    "c": [
     "communication",
     "digestion",
     "respiration",
     "vision"
    ],
    "a": "communication"
   },
   {
    "q": "Quel insecte social utilise énormément les phéromones pour organiser sa colonie ? La ___ ?",
    "c": [
     "fourmi",
     "girafe",
     "baleine",
     "truite"
    ],
    "a": "fourmi"
   },
   {
    "q": "L'existence de vraies phéromones sexuelles humaines est-elle prouvée ou débattue ? ___ ?",
    "c": [
     "débattue",
     "prouvée",
     "interdite",
     "brevetée"
    ],
    "a": "débattue"
   },
   {
    "q": "Quel organe nasal détecte les phéromones chez de nombreux animaux ? L'organe ___ (voméronasal) ?",
    "c": [
     "voméronasal",
     "olfactif seul",
     "auditif",
     "gustatif"
    ],
    "a": "voméronasal"
   },
   {
    "q": "Les phéromones sont souvent ajoutées, sans preuve d'efficacité, à quels produits ? Les ___ ?",
    "c": [
     "parfums",
     "shampoings antipoux",
     "dentifrices",
     "lessives"
    ],
    "a": "parfums"
   },
   {
    "q": "En quelle année le mot « phéromone » a-t-il été proposé par des scientifiques ?",
    "a": "1959"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_012",
  "cat": "sexe",
  "name": "L'orgasme",
  "level": "adulte",
  "levels": [
   {
    "q": "L'orgasme est le point culminant du ___ sexuel ?",
    "c": [
     "plaisir",
     "sommeil",
     "repas",
     "sport"
    ],
    "a": "plaisir"
   },
   {
    "q": "Quelle hormone du bien-être et de l'attachement est libérée lors de l'orgasme ? L'___ ?",
    "c": [
     "ocytocine",
     "insuline",
     "cortisol",
     "adrénaline seule"
    ],
    "a": "ocytocine"
   },
   {
    "q": "Quel phénomène musculaire rythmique accompagne l'orgasme ? Des ___ ?",
    "c": [
     "contractions",
     "fractures",
     "crampes durables",
     "paralysies"
    ],
    "a": "contractions"
   },
   {
    "q": "Comment appelle-t-on l'absence de capacité à atteindre l'orgasme ? L'___ ?",
    "c": [
     "anorgasmie",
     "amnésie",
     "aphasie",
     "apnée"
    ],
    "a": "anorgasmie"
   },
   {
    "q": "Les chercheurs Masters et ___ ont décrit les phases de la réponse sexuelle ? Johnson ou ___ ?",
    "c": [
     "Johnson",
     "Kinsey",
     "Freud",
     "Pavlov"
    ],
    "a": "Johnson"
   },
   {
    "q": "Quel neurotransmetteur du plaisir et de la récompense est impliqué dans l'orgasme ? La ___ ?",
    "c": [
     "dopamine",
     "kératine",
     "mélanine",
     "insuline"
    ],
    "a": "dopamine"
   },
   {
    "q": "Comment appelle-t-on la période de récupération après l'orgasme, surtout chez l'homme ? La période ___ ?",
    "c": [
     "réfractaire",
     "réflexe",
     "d'incubation",
     "d'éveil"
    ],
    "a": "réfractaire"
   },
   {
    "q": "En combien de phases Masters et Johnson ont-ils décrit le cycle de la réponse sexuelle humaine ?",
    "a": "4"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_013",
  "cat": "sexe",
  "name": "Le clitoris",
  "level": "adulte",
  "levels": [
   {
    "q": "Le clitoris est un organe dédié principalement au ___ féminin ?",
    "c": [
     "plaisir",
     "digestion",
     "équilibre",
     "sommeil"
    ],
    "a": "plaisir"
   },
   {
    "q": "Quelle est la seule fonction connue du clitoris ? Le ___ ?",
    "c": [
     "plaisir",
     "la reproduction directe",
     "la digestion",
     "la respiration"
    ],
    "a": "plaisir"
   },
   {
    "q": "La partie visible du clitoris n'est qu'une petite portion : la majeure partie est-elle interne ou externe ? ___ ?",
    "c": [
     "interne",
     "externe",
     "absente",
     "osseuse"
    ],
    "a": "interne"
   },
   {
    "q": "Combien de terminaisons nerveuses, environ, compte le clitoris, plus que le gland masculin ? Plus de ___ mille ?",
    "c": [
     "8",
     "1",
     "100",
     "500"
    ],
    "a": "8"
   },
   {
    "q": "Le clitoris et le pénis se développent-ils, chez l'embryon, à partir du même tissu d'origine ? ___ ?",
    "c": [
     "oui",
     "non",
     "seulement le pénis",
     "aucun des deux"
    ],
    "a": "oui"
   },
   {
    "q": "Comment appelle-t-on le petit repli de peau qui protège le clitoris ? Le ___ (prépuce clitoridien) ?",
    "c": [
     "capuchon",
     "casque",
     "voile",
     "bouclier"
    ],
    "a": "capuchon"
   },
   {
    "q": "En quelle année une anatomiste australienne (Helen O'Connell) a-t-elle cartographié en détail le clitoris complet ? En ___ ?",
    "c": [
     "1998",
     "1850",
     "2020",
     "1700"
    ],
    "a": "1998"
   },
   {
    "q": "Combien de centimètres, environ, mesure le clitoris dans sa totalité (partie interne comprise) ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_014",
  "cat": "sexe",
  "name": "Le vagin",
  "level": "adulte",
  "levels": [
   {
    "q": "Le vagin est un organe du corps ___ ?",
    "c": [
     "féminin",
     "masculin",
     "neutre",
     "animal seul"
    ],
    "a": "féminin"
   },
   {
    "q": "Le vagin relie la vulve à quel organe ? L'___ ?",
    "c": [
     "utérus",
     "estomac",
     "vessie",
     "rein"
    ],
    "a": "utérus"
   },
   {
    "q": "Le vagin est-il un organe musculaire capable de s'étirer ? ___ ?",
    "c": [
     "oui",
     "non",
     "seulement rigide",
     "osseux"
    ],
    "a": "oui"
   },
   {
    "q": "Comment appelle-t-on l'équilibre microbien naturel qui protège le vagin ? La flore ___ ?",
    "c": [
     "vaginale",
     "intestinale seule",
     "buccale",
     "cutanée"
    ],
    "a": "vaginale"
   },
   {
    "q": "Faut-il laver l'intérieur du vagin (douche vaginale) selon les médecins ? ___ ?",
    "c": [
     "non",
     "oui chaque jour",
     "au savon fort",
     "à l'alcool"
    ],
    "a": "non"
   },
   {
    "q": "Quelle infection fréquente due à un champignon touche le vagin ? La ___ (candidose) ?",
    "c": [
     "mycose",
     "carie",
     "otite",
     "sinusite"
    ],
    "a": "mycose"
   },
   {
    "q": "Quel type de bactéries « amies » maintient l'acidité protectrice du vagin ? Les ___ ?",
    "c": [
     "lactobacilles",
     "streptocoques",
     "staphylocoques",
     "salmonelles"
    ],
    "a": "lactobacilles"
   },
   {
    "q": "Quel pH, acide, protège naturellement le vagin ? Un pH d'environ ___ ?",
    "c": [
     "4",
     "7",
     "10",
     "14"
    ],
    "a": "4"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_015",
  "cat": "sexe",
  "name": "Le pénis",
  "level": "adulte",
  "levels": [
   {
    "q": "Le pénis est un organe du corps ___ ?",
    "c": [
     "masculin",
     "féminin",
     "neutre",
     "végétal"
    ],
    "a": "masculin"
   },
   {
    "q": "Quelles deux fonctions le pénis assure-t-il ? La reproduction et l'___ ?",
    "c": [
     "urine",
     "digestion",
     "respiration",
     "audition"
    ],
    "a": "urine"
   },
   {
    "q": "Grâce à quel afflux le pénis entre-t-il en érection ? L'afflux de ___ ?",
    "c": [
     "sang",
     "air",
     "eau",
     "lymphe seule"
    ],
    "a": "sang"
   },
   {
    "q": "Comment appelle-t-on l'extrémité sensible du pénis ? Le ___ ?",
    "c": [
     "gland",
     "talon",
     "lobe",
     "coude"
    ],
    "a": "gland"
   },
   {
    "q": "Quel repli de peau, parfois retiré par circoncision, recouvre le gland ? Le ___ ?",
    "c": [
     "prépuce",
     "tympan",
     "hymen",
     "capuchon clitoridien"
    ],
    "a": "prépuce"
   },
   {
    "q": "Comment appelle-t-on la difficulté à obtenir une érection ? La dysfonction ___ ?",
    "c": [
     "érectile",
     "cardiaque seule",
     "rénale",
     "auditive"
    ],
    "a": "érectile"
   },
   {
    "q": "Quel médicament bleu célèbre traite les troubles de l'érection ? Le ___ ?",
    "c": [
     "Viagra",
     "Doliprane",
     "Aspirine",
     "Smecta"
    ],
    "a": "Viagra"
   },
   {
    "q": "Quelle est la longueur moyenne, en centimètres, d'un pénis en érection selon les études ?",
    "a": "13"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_016",
  "cat": "sexe",
  "name": "Les testicules",
  "level": "adulte",
  "levels": [
   {
    "q": "Que produisent les testicules ? Des ___ ?",
    "c": [
     "spermatozoïdes",
     "globules rouges",
     "larmes",
     "salive"
    ],
    "a": "spermatozoïdes"
   },
   {
    "q": "Combien de testicules un homme possède-t-il généralement ?",
    "a": "2"
   },
   {
    "q": "Dans quelle poche de peau se trouvent les testicules ? Le ___ ?",
    "c": [
     "scrotum",
     "sternum",
     "abdomen fixe",
     "thorax"
    ],
    "a": "scrotum"
   },
   {
    "q": "Quelle hormone masculine les testicules produisent-ils ? La ___ ?",
    "c": [
     "testostérone",
     "insuline",
     "œstrogène seul",
     "mélatonine"
    ],
    "a": "testostérone"
   },
   {
    "q": "Pourquoi les testicules sont-ils à l'extérieur du corps ? Pour rester au ___ (bonne température) ?",
    "c": [
     "frais",
     "chaud",
     "sec",
     "sombre"
    ],
    "a": "frais"
   },
   {
    "q": "Quel geste d'auto-examen aide à détecter tôt une anomalie testiculaire ? La ___ ?",
    "c": [
     "palpation",
     "radiographie annuelle",
     "prise de sang seule",
     "échographie mensuelle"
    ],
    "a": "palpation"
   },
   {
    "q": "Quel cancer, touchant surtout les jeunes hommes, se dépiste par auto-palpation ? Le cancer des ___ ?",
    "c": [
     "testicules",
     "poumons",
     "reins",
     "os"
    ],
    "a": "testicules"
   },
   {
    "q": "Combien de spermatozoïdes, environ en millions, contient un millilitre de sperme sain ?",
    "a": "50"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_017",
  "cat": "sexe",
  "name": "La masturbation",
  "level": "adulte",
  "levels": [
   {
    "q": "La masturbation est une pratique ___ et naturelle ? (soi-même)",
    "c": [
     "solitaire",
     "collective obligatoire",
     "interdite",
     "dangereuse"
    ],
    "a": "solitaire"
   },
   {
    "q": "La masturbation est-elle nocive pour la santé, selon la médecine moderne ? ___ ?",
    "c": [
     "non",
     "oui",
     "seulement le matin",
     "seulement en hiver"
    ],
    "a": "non"
   },
   {
    "q": "La masturbation fait-elle partie du développement normal, y compris à l'adolescence ? ___ ?",
    "c": [
     "oui",
     "non",
     "seulement adulte",
     "seulement marié"
    ],
    "a": "oui"
   },
   {
    "q": "Quels vieux mythes (rendre sourd, aveugle...) sur la masturbation sont ___ ?",
    "c": [
     "faux",
     "vrais",
     "prouvés",
     "médicaux"
    ],
    "a": "faux"
   },
   {
    "q": "La masturbation peut aider à mieux connaître son propre ___ ?",
    "c": [
     "corps",
     "voisin",
     "quartier",
     "agenda"
    ],
    "a": "corps"
   },
   {
    "q": "Quelle hormone relaxante, libérée à l'orgasme, peut aider à l'endormissement ? L'___ ?",
    "c": [
     "ocytocine",
     "adrénaline",
     "cortisol",
     "insuline"
    ],
    "a": "ocytocine"
   },
   {
    "q": "Comment appelle-t-on la notion de respect de l'intimité, importante autour de la masturbation ? La ___ ?",
    "c": [
     "vie privée",
     "publicité",
     "célébrité",
     "comptabilité"
    ],
    "a": "vie privée"
   },
   {
    "q": "Selon le célèbre rapport Kinsey, quel pourcentage environ des hommes déclaraient s'être masturbés ?",
    "a": "90"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_018",
  "cat": "sexe",
  "name": "Les positions sexuelles",
  "level": "adulte",
  "levels": [
   {
    "q": "Quel principe doit toujours guider le choix d'une position à deux ? Le ___ mutuel ?",
    "c": [
     "consentement",
     "hasard",
     "record",
     "chronomètre"
    ],
    "a": "consentement"
   },
   {
    "q": "Quel ancien texte indien décrit de nombreuses positions ? Le ___ ?",
    "c": [
     "Kamasutra",
     "Coran",
     "Talmud",
     "Popol Vuh"
    ],
    "a": "Kamasutra"
   },
   {
    "q": "Qu'est-ce qui rend une position « bonne » avant tout ? Le ___ des deux partenaires ?",
    "c": [
     "confort",
     "prix",
     "bruit",
     "décor"
    ],
    "a": "confort"
   },
   {
    "q": "La communication entre partenaires est-elle utile pour trouver ce qui plaît ? ___ ?",
    "c": [
     "oui",
     "non",
     "seulement par écrit",
     "seulement au médecin"
    ],
    "a": "oui"
   },
   {
    "q": "Comment appelle-t-on une position où les partenaires se font face ? En ___ à ___ ? (face-à-face)",
    "c": [
     "face-à-face",
     "dos-à-dos",
     "côte perpendiculaire",
     "à l'envers"
    ],
    "a": "face-à-face"
   },
   {
    "q": "Quel accessoire de confort peut aider à soulager le dos ou le bassin ? Un ___ ?",
    "c": [
     "coussin",
     "casque",
     "gant",
     "parapluie"
    ],
    "a": "coussin"
   },
   {
    "q": "Existe-t-il UNE position « meilleure » universelle, ou cela dépend-il de chaque couple ? Cela ___ ?",
    "c": [
     "dépend",
     "est fixe",
     "est unique",
     "est interdit"
    ],
    "a": "dépend"
   },
   {
    "q": "Combien de positions principales le Kamasutra décrit-il environ (souvent cité) ?",
    "a": "64"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_019",
  "cat": "sexe",
  "name": "Le préservatif",
  "level": "adulte",
  "levels": [
   {
    "q": "Contre quoi le préservatif protège-t-il, en plus des grossesses ? Les ___ ?",
    "c": [
     "IST",
     "coups de soleil",
     "caries",
     "moustiques"
    ],
    "a": "IST"
   },
   {
    "q": "En quelle matière la plupart des préservatifs sont-ils faits ? Le ___ ?",
    "c": [
     "latex",
     "coton",
     "cuir",
     "papier"
    ],
    "a": "latex"
   },
   {
    "q": "Combien de fois peut-on réutiliser un préservatif ?",
    "a": "1"
   },
   {
    "q": "Que faut-il vérifier avant d'utiliser un préservatif ? La date de ___ ?",
    "c": [
     "péremption",
     "fabrication seule",
     "livraison",
     "vente"
    ],
    "a": "péremption"
   },
   {
    "q": "Quel type de lubrifiant est compatible avec un préservatif en latex ? À base d'___ ?",
    "c": [
     "eau",
     "huile",
     "beurre",
     "graisse"
    ],
    "a": "eau"
   },
   {
    "q": "Pour les personnes allergiques au latex, en quelle autre matière existe-t-il des préservatifs ? Le ___ ?",
    "c": [
     "polyuréthane",
     "laine",
     "soie",
     "lin"
    ],
    "a": "polyuréthane"
   },
   {
    "q": "Existe-t-il un préservatif conçu pour le vagin, en plus du préservatif externe ? Le préservatif ___ ?",
    "c": [
     "interne",
     "double",
     "réutilisable",
     "invisible"
    ],
    "a": "interne"
   },
   {
    "q": "Quel pourcentage d'efficacité, environ, atteint le préservatif contre la grossesse en usage correct ?",
    "a": "98"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_020",
  "cat": "sexe",
  "name": "La pilule",
  "level": "adulte",
  "levels": [
   {
    "q": "La pilule contraceptive se prend-elle plutôt chaque jour ou une fois par an ? Chaque ___ ?",
    "c": [
     "jour",
     "an",
     "mois",
     "semaine"
    ],
    "a": "jour"
   },
   {
    "q": "À quoi sert la pilule contraceptive ? À éviter une ___ ?",
    "c": [
     "grossesse",
     "grippe",
     "carie",
     "insomnie"
    ],
    "a": "grossesse"
   },
   {
    "q": "Que contient la pilule pour agir ? Des ___ ?",
    "c": [
     "hormones",
     "vitamines",
     "antibiotiques",
     "sucres"
    ],
    "a": "hormones"
   },
   {
    "q": "La pilule protège-t-elle des IST ? ___ ?",
    "c": [
     "non",
     "oui",
     "seulement du VIH",
     "seulement l'été"
    ],
    "a": "non"
   },
   {
    "q": "Comment appelle-t-on la pilule contraceptive d'urgence ? La pilule du ___ ?",
    "c": [
     "lendemain",
     "matin",
     "mois",
     "soir"
    ],
    "a": "lendemain"
   },
   {
    "q": "Quelle pilule ne contient qu'une hormone, sans œstrogène ? La pilule ___ ?",
    "c": [
     "progestative",
     "double",
     "vitaminée",
     "effervescente"
    ],
    "a": "progestative"
   },
   {
    "q": "Comment appelle-t-on l'oubli qui peut réduire l'efficacité de la pilule ? Un ___ de prise ?",
    "c": [
     "oubli",
     "surdosage",
     "recyclage",
     "renouvellement"
    ],
    "a": "oubli"
   },
   {
    "q": "En quelle année la première pilule contraceptive a-t-elle été commercialisée aux États-Unis ?",
    "a": "1960"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_021",
  "cat": "sexe",
  "name": "La stérilisation",
  "level": "adulte",
  "levels": [
   {
    "q": "La stérilisation est une méthode contraceptive ___ ? (durable)",
    "c": [
     "permanente",
     "quotidienne",
     "hebdomadaire",
     "saisonnière"
    ],
    "a": "permanente"
   },
   {
    "q": "Comment appelle-t-on la stérilisation masculine ? La ___ ?",
    "c": [
     "vasectomie",
     "vasodilatation",
     "vaccination",
     "circoncision"
    ],
    "a": "vasectomie"
   },
   {
    "q": "Quel conduit est bloqué lors d'une vasectomie ? Le canal ___ (déférent) ?",
    "c": [
     "déférent",
     "auditif",
     "lacrymal",
     "urinaire seul"
    ],
    "a": "déférent"
   },
   {
    "q": "Comment appelle-t-on la stérilisation féminine par blocage des trompes ? La ligature des ___ ?",
    "c": [
     "trompes",
     "veines",
     "nerfs",
     "tendons"
    ],
    "a": "trompes"
   },
   {
    "q": "La vasectomie empêche-t-elle l'éjaculation, ou seulement la présence de spermatozoïdes ? Seulement les ___ ?",
    "c": [
     "spermatozoïdes",
     "hormones",
     "érections",
     "plaisirs"
    ],
    "a": "spermatozoïdes"
   },
   {
    "q": "La stérilisation protège-t-elle des IST ? ___ ?",
    "c": [
     "non",
     "oui",
     "seulement du VIH",
     "totalement"
    ],
    "a": "non"
   },
   {
    "q": "Quel délai de réflexion légal est imposé en France avant une stérilisation volontaire ? Un délai de ___ mois ?",
    "c": [
     "4",
     "1",
     "12",
     "0"
    ],
    "a": "4"
   },
   {
    "q": "Après combien de semaines, environ, une vasectomie est-elle pleinement efficace (contrôle du sperme) ?",
    "a": "12"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_022",
  "cat": "sexe",
  "name": "L'avortement",
  "level": "adulte",
  "levels": [
   {
    "q": "Que signifie le sigle IVG ? Interruption ___ de grossesse ?",
    "c": [
     "volontaire",
     "vitale",
     "vaccinale",
     "veineuse"
    ],
    "a": "volontaire"
   },
   {
    "q": "En France, l'IVG est-elle un droit légal ? ___ ?",
    "c": [
     "oui",
     "non",
     "seulement à l'étranger",
     "sur autorisation d'un juge"
    ],
    "a": "oui"
   },
   {
    "q": "Quelle grande loi française de 1975 a légalisé l'IVG ? La loi ___ ?",
    "c": [
     "Veil",
     "Neuwirth",
     "Aubry",
     "Taubira"
    ],
    "a": "Veil"
   },
   {
    "q": "Quelle femme politique a porté la loi sur l'IVG en France ? Simone ___ ?",
    "c": [
     "Veil",
     "de Beauvoir",
     "Curie",
     "Weil"
    ],
    "a": "Veil"
   },
   {
    "q": "Quels sont les deux types principaux d'IVG ? Médicamenteuse et ___ ?",
    "c": [
     "chirurgicale",
     "chirologique",
     "thermique",
     "hormonale seule"
    ],
    "a": "chirurgicale"
   },
   {
    "q": "En 2024, dans quel texte fondamental la France a-t-elle inscrit la liberté de recourir à l'IVG ? La ___ ?",
    "c": [
     "Constitution",
     "Bible",
     "Déclaration de 1789 seule",
     "loi de finances"
    ],
    "a": "Constitution"
   },
   {
    "q": "Quelle femme, autrice du « Manifeste des 343 », a milité pour ce droit ? Simone de ___ ?",
    "c": [
     "Beauvoir",
     "Veil",
     "Signoret",
     "Weil"
    ],
    "a": "Beauvoir"
   },
   {
    "q": "En quelle année exacte la loi Veil a-t-elle légalisé l'IVG en France ?",
    "a": "1975"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_023",
  "cat": "sexe",
  "name": "La puberté",
  "level": "adulte",
  "levels": [
   {
    "q": "La puberté est le passage de l'enfance à l'âge ___ ?",
    "c": [
     "adulte",
     "mûr",
     "scolaire",
     "retraité"
    ],
    "a": "adulte"
   },
   {
    "q": "Quelles substances déclenchent les changements de la puberté ? Les ___ ?",
    "c": [
     "hormones",
     "vitamines",
     "bactéries",
     "enzymes digestives"
    ],
    "a": "hormones"
   },
   {
    "q": "Chez la fille, quel événement marque souvent le début de la puberté ? Les premières ___ ?",
    "c": [
     "règles",
     "rides",
     "dents",
     "canities"
    ],
    "a": "règles"
   },
   {
    "q": "Chez le garçon, quel changement affecte la voix à la puberté ? La voix ___ (mue) ?",
    "c": [
     "mue",
     "disparaît",
     "double",
     "s'éteint"
    ],
    "a": "mue"
   },
   {
    "q": "Quelle pilosité apparaît chez les deux sexes à la puberté ? Les poils ___ ?",
    "c": [
     "pubiens",
     "gris",
     "de sourcils seuls",
     "de cils"
    ],
    "a": "pubiens"
   },
   {
    "q": "Quelle poussée physique accompagne la puberté ? La poussée de ___ ?",
    "c": [
     "croissance",
     "fièvre",
     "tension seule",
     "poids uniquement"
    ],
    "a": "croissance"
   },
   {
    "q": "Quelle glande cérébrale (hypophyse) pilote le déclenchement de la puberté sous l'ordre de l'___ ?",
    "c": [
     "hypothalamus",
     "estomac",
     "foie",
     "rein"
    ],
    "a": "hypothalamus"
   },
   {
    "q": "Vers quel âge, en moyenne, débute la puberté chez les filles ? Environ ___ ans ?",
    "a": "11"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_024",
  "cat": "sexe",
  "name": "La ménopause",
  "level": "adulte",
  "levels": [
   {
    "q": "La ménopause marque la fin de quoi chez la femme ? Des ___ ?",
    "c": [
     "règles",
     "cheveux",
     "dents",
     "ongles"
    ],
    "a": "règles"
   },
   {
    "q": "La ménopause signifie la fin de la période de ___ ? (avoir des enfants)",
    "c": [
     "fertilité",
     "croissance",
     "scolarité",
     "activité"
    ],
    "a": "fertilité"
   },
   {
    "q": "Quel symptôme courant de la ménopause provoque des bouffées de ___ ?",
    "c": [
     "chaleur",
     "froid",
     "couleur",
     "bruit"
    ],
    "a": "chaleur"
   },
   {
    "q": "Quelle hormone féminine chute fortement à la ménopause ? L'___ ?",
    "c": [
     "œstrogène",
     "insuline",
     "testostérone seule",
     "adrénaline"
    ],
    "a": "œstrogène"
   },
   {
    "q": "Comment appelle-t-on la période de transition qui précède la ménopause ? La ___ ?",
    "c": [
     "préménopause",
     "postménopause",
     "andropause",
     "puberté"
    ],
    "a": "préménopause"
   },
   {
    "q": "Quel traitement peut soulager les symptômes de la ménopause ? Le traitement ___ substitutif ?",
    "c": [
     "hormonal",
     "antibiotique",
     "vitaminé seul",
     "chirurgical"
    ],
    "a": "hormonal"
   },
   {
    "q": "Quelle maladie osseuse, favorisée par la baisse d'œstrogènes, guette après la ménopause ? L'___ ?",
    "c": [
     "ostéoporose",
     "arthrite seule",
     "myopie",
     "anémie"
    ],
    "a": "ostéoporose"
   },
   {
    "q": "Vers quel âge, en moyenne, survient la ménopause ? Environ ___ ans ?",
    "a": "51"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_025",
  "cat": "sexe",
  "name": "Le VIH",
  "level": "adulte",
  "levels": [
   {
    "q": "Que signifie le V de VIH ? ___ de l'immunodéficience humaine ?",
    "c": [
     "Virus",
     "Vaccin",
     "Vecteur",
     "Voie"
    ],
    "a": "Virus"
   },
   {
    "q": "Quel système du corps le VIH attaque-t-il ? Le système ___ ?",
    "c": [
     "immunitaire",
     "digestif",
     "osseux",
     "auditif"
    ],
    "a": "immunitaire"
   },
   {
    "q": "Quel moyen simple réduit fortement le risque de transmission sexuelle du VIH ? Le ___ ?",
    "c": [
     "préservatif",
     "gant",
     "masque",
     "chapeau"
    ],
    "a": "préservatif"
   },
   {
    "q": "Quelle maladie le VIH peut-il provoquer à un stade avancé ? Le ___ ?",
    "c": [
     "SIDA",
     "diabète",
     "cancer du poumon",
     "asthme"
    ],
    "a": "SIDA"
   },
   {
    "q": "Quel traitement permet aujourd'hui de vivre avec le VIH et de le rendre indétectable ? Les ___ ?",
    "c": [
     "antirétroviraux",
     "antibiotiques",
     "vaccins",
     "vitamines"
    ],
    "a": "antirétroviraux"
   },
   {
    "q": "Que signifie « indétectable = ___ » (une personne traitée ne transmet plus) ?",
    "c": [
     "intransmissible",
     "immunisé",
     "invincible",
     "insensible"
    ],
    "a": "intransmissible"
   },
   {
    "q": "Quel traitement préventif quotidien protège du VIH ? La ___ ?",
    "c": [
     "PrEP",
     "PMA",
     "IVG",
     "TPE seule"
    ],
    "a": "PrEP"
   },
   {
    "q": "En quelle année le virus du SIDA (VIH) a-t-il été identifié par l'équipe de l'Institut Pasteur ?",
    "a": "1983"
   }
  ],
  "rw": true
 },
 {
  "id": "sexe_026",
  "cat": "sexe",
  "name": "La syphilis",
  "level": "adulte",
  "levels": [
   {
    "q": "La syphilis est une infection sexuellement ___ ?",
    "c": [
     "transmissible",
     "héréditaire",
     "alimentaire",
     "respiratoire"
    ],
    "a": "transmissible"
   },
   {
    "q": "Quel type de micro-organisme cause la syphilis ? Une ___ ?",
    "c": [
     "bactérie",
     "virus",
     "champignon",
     "parasite géant"
    ],
    "a": "bactérie"
   },
   {
    "q": "Avec quel type de médicament soigne-t-on la syphilis ? Des ___ ?",
    "c": [
     "antibiotiques",
     "vaccins",
     "vitamines",
     "sirops"
    ],
    "a": "antibiotiques"
   },
   {
    "q": "Quel moyen de protection limite la transmission de la syphilis ? Le ___ ?",
    "c": [
     "préservatif",
     "gant",
     "foulard",
     "casque"
    ],
    "a": "préservatif"
   },
   {
    "q": "Comment détecte-t-on la syphilis ? Par un ___ (prise de sang) ?",
    "c": [
     "dépistage",
     "scanner cérébral",
     "test respiratoire",
     "audiogramme"
    ],
    "a": "dépistage"
   },
   {
    "q": "Quel antibiotique historique reste efficace contre la syphilis ? La ___ ?",
    "c": [
     "pénicilline",
     "aspirine",
     "cortisone",
     "insuline"
    ],
    "a": "pénicilline"
   },
   {
    "q": "Comment appelle-t-on la petite lésion indolore du premier stade de la syphilis ? Le ___ ?",
    "c": [
     "chancre",
     "furoncle",
     "aphte",
     "durillon"
    ],
    "a": "chancre"
   },
   {
    "q": "En quel siècle une grande épidémie de syphilis a-t-elle déferlé sur l'Europe ? Le XV___ ?",
    "c": [
     "e",
     "Ier",
     "IIe",
     "IIIe"
    ],
    "a": "e"
   }
  ],
  "rw": true
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
    "a": "Dispositif Intra-Utérin contraceptif"
   },
   {
    "q": "Combien de types de stérilet existe-t-il ?",
    "c": [
     "Quatre",
     "Un seul",
     "Deux : au cuivre et hormonal",
     "Trois"
    ],
    "a": "Deux : au cuivre et hormonal"
   },
   {
    "q": "Combien de temps dure un stérilet au cuivre ?",
    "c": [
     "1 à 2 ans",
     "5 à 10 ans",
     "2 à 3 ans",
     "10 à 15 ans"
    ],
    "a": "5 à 10 ans"
   },
   {
    "q": "Combien de temps dure un stérilet hormonal ?",
    "c": [
     "3 à 5 ans",
     "5 à 10 ans",
     "1 à 2 ans",
     "10 ans"
    ],
    "a": "3 à 5 ans"
   },
   {
    "q": "Quel est le taux d'efficacité du stérilet ?",
    "c": [
     "Environ 85%",
     "Environ 95%",
     "Plus de 99%",
     "Environ 90%"
    ],
    "a": "Plus de 99%"
   },
   {
    "q": "Le stérilet peut-il être posé chez une femme n'ayant jamais accouché ?",
    "c": [
     "Oui, c'est possible",
     "Non, impossible",
     "Non, déconseillé",
     "Uniquement après 25 ans"
    ],
    "a": "Oui, c'est possible"
   },
   {
    "q": "Quels sont les effets secondaires possibles du stérilet ?",
    "c": [
     "Nausées",
     "Saignements, douleurs, infections",
     "Aucun effet secondaire",
     "Prise de poids"
    ],
    "a": "Saignements, douleurs, infections"
   },
   {
    "q": "Le stérilet protège-t-il des IST ?",
    "c": [
     "Oui, totalement",
     "Non",
     "Oui, partiellement",
     "Oui, comme le préservatif"
    ],
    "a": "Non"
   }
  ],
  "rw": true
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
    "a": "Bâtonnet hormonal placé sous la peau du bras"
   },
   {
    "q": "Combien de temps dure l'implant contraceptif ?",
    "c": [
     "5 ans",
     "1 an",
     "3 ans",
     "2 ans"
    ],
    "a": "3 ans"
   },
   {
    "q": "Quelle hormone contient l'implant contraceptif ?",
    "c": [
     "Oestrogènes et progestérone",
     "Oestrogènes seuls",
     "Testostérone",
     "Progestérone seule (étonogestrel)"
    ],
    "a": "Progestérone seule (étonogestrel)"
   },
   {
    "q": "Quelle est l'efficacité de l'implant ?",
    "c": [
     "Environ 90%",
     "Plus de 99%",
     "Environ 95%",
     "Environ 85%"
    ],
    "a": "Plus de 99%"
   },
   {
    "q": "Comment agit l'implant contraceptif ?",
    "c": [
     "En empêchant l'ovulation",
     "En empêchant la nidation",
     "En stérilisant",
     "En bloquant les spermatozoïdes"
    ],
    "a": "En empêchant l'ovulation"
   },
   {
    "q": "Où est placé l'implant exactement ?",
    "c": [
     "Dans le vagin",
     "Dans l'utérus",
     "Sous la peau du ventre",
     "Sous la peau du bras, face interne"
    ],
    "a": "Sous la peau du bras, face interne"
   },
   {
    "q": "Faut-il une prescription pour l'implant ?",
    "c": [
     "Oui, mais en pharmacie",
     "Non, acheté en ligne",
     "Oui, posé par un médecin",
     "Non, en vente libre"
    ],
    "a": "Oui, posé par un médecin"
   },
   {
    "q": "Quels sont les effets secondaires de l'implant ?",
    "c": [
     "Prise de poids importante",
     "Saignements irréguliers, maux de tête",
     "Aucun",
     "Nausées sévères"
    ],
    "a": "Saignements irréguliers, maux de tête"
   }
  ],
  "rw": true
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
    "a": "Anneau flexible inséré dans le vagin qui libère des hormones"
   },
   {
    "q": "Combien de temps l'anneau vaginal reste-t-il en place ?",
    "c": [
     "2 semaines",
     "3 semaines, puis 1 semaine de pause",
     "1 semaine",
     "1 mois"
    ],
    "a": "3 semaines, puis 1 semaine de pause"
   },
   {
    "q": "Quels hormones libère l'anneau vaginal ?",
    "c": [
     "Testostérone",
     "Oestrogènes et progestérone",
     "Progestérone seule",
     "Oestrogènes seuls"
    ],
    "a": "Oestrogènes et progestérone"
   },
   {
    "q": "Quelle est l'efficacité de l'anneau vaginal ?",
    "c": [
     "Environ 95%",
     "Plus de 99%",
     "Environ 90%",
     "Environ 85%"
    ],
    "a": "Plus de 99%"
   },
   {
    "q": "Comment agit l'anneau vaginal ?",
    "c": [
     "Chauffage local",
     "Libération de spermicide",
     "Barrière physique",
     "Libération d'hormones absorbées par la paroi vaginale"
    ],
    "a": "Libération d'hormones absorbées par la paroi vaginale"
   },
   {
    "q": "L'anneau vaginal peut-il être retiré temporairement ?",
    "c": [
     "Non, jamais",
     "Oui, jusqu'à 12 heures",
     "Oui, jusqu'à 3 heures",
     "Oui, jusqu'à 1 heure"
    ],
    "a": "Oui, jusqu'à 3 heures"
   },
   {
    "q": "L'anneau vaginal protège-t-il des IST ?",
    "c": [
     "Oui, comme le préservatif",
     "Oui, partiellement",
     "Oui, totalement",
     "Non"
    ],
    "a": "Non"
   },
   {
    "q": "Où se procurer l'anneau vaginal ?",
    "c": [
     "En ligne sans ordonnance",
     "En grande surface",
     "Sur prescription médicale en pharmacie",
     "En vente libre"
    ],
    "a": "Sur prescription médicale en pharmacie"
   }
  ],
  "rw": true
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
    "a": "Timbre cutané qui libère des hormones contraceptives"
   },
   {
    "q": "Où applique-t-on le patch contraceptif ?",
    "c": [
     "Sur la peau du ventre, fesse, bras ou dos",
     "Sur la poitrine",
     "Dans le vagin",
     "Sur le visage"
    ],
    "a": "Sur la peau du ventre, fesse, bras ou dos"
   },
   {
    "q": "Combien de temps dure un patch ?",
    "c": [
     "24 heures",
     "3 jours",
     "Deux semaines",
     "Une semaine"
    ],
    "a": "Une semaine"
   },
   {
    "q": "Quels hormones contient le patch ?",
    "c": [
     "Testostérone",
     "Progestérone seule",
     "Oestrogènes et progestérone",
     "Oestrogènes seuls"
    ],
    "a": "Oestrogènes et progestérone"
   },
   {
    "q": "Quelle est l'efficacité du patch contraceptif ?",
    "c": [
     "Environ 85%",
     "Environ 95%",
     "Environ 90%",
     "Plus de 99%"
    ],
    "a": "Plus de 99%"
   },
   {
    "q": "Combien de patchs par cycle ?",
    "c": [
     "2 patchs par cycle",
     "1 patch par mois",
     "3 patchs (3 semaines)",
     "4 patchs (1 mois)"
    ],
    "a": "3 patchs (3 semaines)"
   },
   {
    "q": "Le patch peut-il se décoller ?",
    "c": [
     "Uniquement lors du sport",
     "Oui, sous certaines conditions (eau, sudation)",
     "Oui, toujours",
     "Non, jamais"
    ],
    "a": "Oui, sous certaines conditions (eau, sudation)"
   },
   {
    "q": "Le patch protège-t-il des IST ?",
    "c": [
     "Oui, comme le préservatif",
     "Oui, totalement",
     "Oui, partiellement",
     "Non"
    ],
    "a": "Non"
   }
  ],
  "rw": true
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
    "a": "Substance qui détruit ou immobilise les spermatozoïdes"
   },
   {
    "q": "Sous quelle forme se présente le spermicide ?",
    "c": [
     "Crème, gel, mousse, ovule, film",
     "Comprimé",
     "Injection",
     "Patch"
    ],
    "a": "Crème, gel, mousse, ovule, film"
   },
   {
    "q": "Quel est l'ingrédient actif principal des spermicides ?",
    "c": [
     "Le latex",
     "Le paracétamol",
     "L'alcool",
     "Le nonoxynol-9"
    ],
    "a": "Le nonoxynol-9"
   },
   {
    "q": "Quelle est l'efficacité du spermicide seul ?",
    "c": [
     "Plus de 99%",
     "Environ 72%",
     "Environ 90%",
     "Environ 85%"
    ],
    "a": "Environ 72%"
   },
   {
    "q": "Le spermicide protège-t-il des IST ?",
    "c": [
     "Oui, totalement",
     "Oui, partiellement",
     "Non, il peut même irriter la peau",
     "Oui, comme le préservatif"
    ],
    "a": "Non, il peut même irriter la peau"
   },
   {
    "q": "Comment utiliser un spermicide ?",
    "c": [
     "Injection",
     "Appliquer dans le vagin avant les rapports",
     "Boire",
     "Appliquer sur le pénis"
    ],
    "a": "Appliquer dans le vagin avant les rapports"
   },
   {
    "q": "Combien de temps avant le rapport faut-il appliquer le spermicide ?",
    "c": [
     "24 heures avant",
     "1 heure avant",
     "5 à 30 minutes avant",
     "Immédiatement"
    ],
    "a": "5 à 30 minutes avant"
   },
   {
    "q": "Le spermicide est-il recommandé comme méthode contraceptive principale ?",
    "c": [
     "Oui, recommandé",
     "Non, interdit",
     "Non, son efficacité est insuffisante seule",
     "Oui, c'est très efficace"
    ],
    "a": "Non, son efficacité est insuffisante seule"
   }
  ],
  "rw": true
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
    "a": "Absence volontaire de relations sexuelles"
   },
   {
    "q": "L'abstinence sexuelle peut-elle être une méthode contraceptive ?",
    "c": [
     "Parfois",
     "Uniquement pour les femmes",
     "Non",
     "Oui, c'est la seule méthode à 100% efficace"
    ],
    "a": "Oui, c'est la seule méthode à 100% efficace"
   },
   {
    "q": "Quelles sont les raisons de l'abstinence ?",
    "c": [
     "Uniquement médicales",
     "Uniquement religieuses",
     "Uniquement personnelles",
     "Religieuses, personnelles, médicales"
    ],
    "a": "Religieuses, personnelles, médicales"
   },
   {
    "q": "L'abstinence est-elle dangereuse pour la santé ?",
    "c": [
     "Parfois",
     "Non, c'est un choix personnel sans danger",
     "Oui, elle est nocive",
     "Oui, elle cause des maladies"
    ],
    "a": "Non, c'est un choix personnel sans danger"
   },
   {
    "q": "Qu'est-ce que l'abstinence périodique ?",
    "c": [
     "Méthode naturelle basée sur l'observation du cycle",
     "Abstinence totale",
     "Retrait",
     "Méthode contraceptive chimique"
    ],
    "a": "Méthode naturelle basée sur l'observation du cycle"
   },
   {
    "q": "Quelle est l'efficacité des méthodes d'abstinence périodique ?",
    "c": [
     "Variable, de 75% à 99% selon la méthode",
     "100%",
     "Moins de 50%",
     "50%"
    ],
    "a": "Variable, de 75% à 99% selon la méthode"
   },
   {
    "q": "Comment fonctionne la méthode Ogino (rythme) ?",
    "c": [
     "Observation de la glaire",
     "Suppression des rapports",
     "Calcul de la période d'ovulation pour éviter les rapports",
     "Mesure de température"
    ],
    "a": "Calcul de la période d'ovulation pour éviter les rapports"
   },
   {
    "q": "Qu'est-ce que la méthode symptothermique ?",
    "c": [
     "Méthode hormonale",
     "Méthode chimique",
     "Méthode naturelle combinant température et glaire",
     "Méthode chirurgicale"
    ],
    "a": "Méthode naturelle combinant température et glaire"
   }
  ],
  "rw": true
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
    "a": "Fait de ne pas être en couple ou marié"
   },
   {
    "q": "Le célibat est-il un choix ou une situation subie ?",
    "c": [
     "Les deux cas existent",
     "Uniquement temporaire",
     "Toujours un choix",
     "Toujours subi"
    ],
    "a": "Les deux cas existent"
   },
   {
    "q": "Qu'est-ce que le célibat prolongé ?",
    "c": [
     "Retraite sexuelle",
     "Choix de vie",
     "Célibat définitif",
     "Célibat qui dure plusieurs années"
    ],
    "a": "Célibat qui dure plusieurs années"
   },
   {
    "q": "Le célibat a-t-il des effets sur la santé mentale ?",
    "c": [
     "Toujours négatifs",
     "Toujours positifs",
     "Cela dépend des personnes et du contexte",
     "Aucun effet"
    ],
    "a": "Cela dépend des personnes et du contexte"
   },
   {
    "q": "Qu'est-ce que le célibat religieux ?",
    "c": [
     "Voeu de chasteté pour des motifs religieux",
     "Choix de vie",
     "Mariage religieux",
     "Abstinence"
    ],
    "a": "Voeu de chasteté pour des motifs religieux"
   },
   {
    "q": "Quel pourcentage d'adultes sont célibataires en France ?",
    "c": [
     "Environ 20%",
     "Environ 10%",
     "Environ 30%",
     "Environ 50%"
    ],
    "a": "Environ 30%"
   },
   {
    "q": "Le célibat est-il plus fréquent dans certaines tranches d'âge ?",
    "c": [
     "Uniquement chez les jeunes",
     "Uniquement chez les seniors",
     "Non, uniforme",
     "Oui, chez les jeunes et les seniors"
    ],
    "a": "Oui, chez les jeunes et les seniors"
   },
   {
    "q": "Qu'est-ce que le célibat géographique ?",
    "c": [
     "Célibat choisi",
     "Célibat lié à l'isolement géographique",
     "Célibat temporaire",
     "Célibat professionnel"
    ],
    "a": "Célibat lié à l'isolement géographique"
   }
  ],
  "rw": true
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
    "a": "Attirance sexuelle et affective pour un genre"
   },
   {
    "q": "Quels sont les principaux types d'orientation sexuelle ?",
    "c": [
     "Toutes les orientations",
     "Hétérosexualité, homosexualité, bisexualité",
     "Homosexualité",
     "Hétérosexualité et homosexualité"
    ],
    "a": "Hétérosexualité, homosexualité, bisexualité"
   },
   {
    "q": "Qu'est-ce que l'hétérosexualité ?",
    "c": [
     "Absence d'attirance",
     "Attirance pour le sexe opposé",
     "Attirance pour le même sexe",
     "Attirance pour les deux sexes"
    ],
    "a": "Attirance pour le sexe opposé"
   },
   {
    "q": "Qu'est-ce que l'homosexualité ?",
    "c": [
     "Attirance pour les deux",
     "Attirance pour le sexe opposé",
     "Aucune attirance",
     "Attirance pour le même sexe"
    ],
    "a": "Attirance pour le même sexe"
   },
   {
    "q": "Qu'est-ce que la bisexualité ?",
    "c": [
     "Changement d'orientation",
     "Attirance pour les deux sexes",
     "Attirance pour aucun sexe",
     "Attirance pour le même sexe"
    ],
    "a": "Attirance pour les deux sexes"
   },
   {
    "q": "Depuis quand l'homosexualité n'est-elle plus considérée comme une maladie ?",
    "c": [
     "Depuis 2000",
     "Depuis 1990 (OMS)",
     "Depuis 1980",
     "Depuis 1970"
    ],
    "a": "Depuis 1990 (OMS)"
   },
   {
    "q": "Qu'est-ce que l'asexualité ?",
    "c": [
     "Refus de la sexualité",
     "Choix de célibat",
     "Maladie",
     "Absence ou faible désir sexuel envers autrui"
    ],
    "a": "Absence ou faible désir sexuel envers autrui"
   },
   {
    "q": "L'orientation sexuelle peut-elle changer ?",
    "c": [
     "Elle est généralement stable mais peut évoluer",
     "Non, jamais",
     "Elle change toujours",
     "Oui, volontairement"
    ],
    "a": "Elle est généralement stable mais peut évoluer"
   }
  ],
  "rw": true
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
    "a": "Union légale entre deux personnes"
   },
   {
    "q": "En quelle année le mariage homosexuel a-t-il été légalisé en France ?",
    "c": [
     "2015",
     "2010",
     "2013 (loi Taubira)",
     "2000"
    ],
    "a": "2013 (loi Taubira)"
   },
   {
    "q": "Quel pays a été le premier à légaliser le mariage homosexuel ?",
    "c": [
     "Belgique (2003)",
     "France (2013)",
     "Canada (2005)",
     "Pays-Bas (2001)"
    ],
    "a": "Pays-Bas (2001)"
   },
   {
    "q": "Qu'est-ce que le PACS en France ?",
    "c": [
     "Contrat de travail",
     "Contrat d'union civile entre deux adultes",
     "Mariage simplifié",
     "Union religieuse"
    ],
    "a": "Contrat d'union civile entre deux adultes"
   },
   {
    "q": "Combien de mariages sont célébrés chaque année en France ?",
    "c": [
     "Environ 230 000",
     "Environ 300 000",
     "Environ 100 000",
     "Environ 500 000"
    ],
    "a": "Environ 230 000"
   },
   {
    "q": "Qu'est-ce que le mariage civil ?",
    "c": [
     "Mariage célébré par un officier d'état civil",
     "Union libre",
     "Mariage symbolique",
     "Mariage religieux"
    ],
    "a": "Mariage célébré par un officier d'état civil"
   },
   {
    "q": "Quel âge minimum pour se marier en France ?",
    "c": [
     "21 ans",
     "18 ans",
     "15 ans",
     "16 ans"
    ],
    "a": "18 ans"
   },
   {
    "q": "Qu'est-ce que le divorce ?",
    "c": [
     "Séparation de fait",
     "Annulation",
     "Rupture",
     "Dissolution légale du mariage"
    ],
    "a": "Dissolution légale du mariage"
   }
  ],
  "rw": true
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
    "a": "Représentation explicite d'actes sexuels dans le but d'exciter"
   },
   {
    "q": "Depuis quand la pornographie moderne existe-t-elle ?",
    "c": [
     "Depuis le cinéma (années 1970)",
     "Depuis l'antiquité",
     "Depuis internet",
     "Depuis les années 1950"
    ],
    "a": "Depuis le cinéma (années 1970)"
   },
   {
    "q": "Quel est l'âge légal pour accéder à la pornographie en France ?",
    "c": [
     "18 ans",
     "16 ans",
     "15 ans",
     "21 ans"
    ],
    "a": "18 ans"
   },
   {
    "q": "Qu'est-ce que la pornographie montre-t-elle souvent de manière irréaliste ?",
    "c": [
     "Uniquement les émotions",
     "Les corps, les pratiques et les relations",
     "Tout est réaliste",
     "Les sentiments"
    ],
    "a": "Les corps, les pratiques et les relations"
   },
   {
    "q": "Quels sont les risques de la pornographie pour les jeunes ?",
    "c": [
     "Effets positifs",
     "Image irréaliste de la sexualité, addiction",
     "Développement normal",
     "Aucun risque"
    ],
    "a": "Image irréaliste de la sexualité, addiction"
   },
   {
    "q": "Qu'est-ce que le revenge porn ?",
    "c": [
     "Publicité",
     "Diffusion non consentie d'images intimes",
     "Pornographie professionnelle",
     "Film amateur"
    ],
    "a": "Diffusion non consentie d'images intimes"
   },
   {
    "q": "La pornographie est-elle légale en France ?",
    "c": [
     "Oui, sans restrictions",
     "Uniquement sur internet",
     "Non, interdite",
     "Oui, avec des restrictions (âge, consentement)"
    ],
    "a": "Oui, avec des restrictions (âge, consentement)"
   },
   {
    "q": "Qu'est-ce que la production éthique dans la pornographie ?",
    "c": [
     "Production gratuite",
     "Production respectant le consentement et les droits des acteurs",
     "Production artistique",
     "Production amateur"
    ],
    "a": "Production respectant le consentement et les droits des acteurs"
   }
  ],
  "rw": true
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
    "a": "Échange d'actes sexuels contre de l'argent ou des biens"
   },
   {
    "q": "La prostitution est-elle légale en France ?",
    "c": [
     "L'acte est légal, mais le proxénétisme est interdit",
     "Totalement illégale",
     "Uniquement dans les maisons closes",
     "Totalement légale"
    ],
    "a": "L'acte est légal, mais le proxénétisme est interdit"
   },
   {
    "q": "Qu'est-ce que le proxénétisme ?",
    "c": [
     "Le fait de tirer profit de la prostitution d'autrui",
     "Métier",
     "Prostitué",
     "Client de la prostitution"
    ],
    "a": "Le fait de tirer profit de la prostitution d'autrui"
   },
   {
    "q": "En quelle année la loi française a-t-elle pénalisé les clients ?",
    "c": [
     "2016",
     "2000",
     "2010",
     "2018"
    ],
    "a": "2016"
   },
   {
    "q": "Combien de personnes se prostituent en France ?",
    "c": [
     "Environ 200 000",
     "Environ 30 000 à 40 000",
     "Environ 100 000",
     "Environ 10 000"
    ],
    "a": "Environ 30 000 à 40 000"
   },
   {
    "q": "Qu'est-ce que l'exploitation sexuelle ?",
    "c": [
     "Prostitution forcée ou subie sous contrainte",
     "Travail du sexe",
     "Prostitution choisie",
     "Métier"
    ],
    "a": "Prostitution forcée ou subie sous contrainte"
   },
   {
    "q": "Quel est le lien entre prostitution et trafic d'êtres humains ?",
    "c": [
     "Lien uniquement à l'étranger",
     "Très faible",
     "Beaucoup de prostituées sont victimes de trafic",
     "Aucun lien"
    ],
    "a": "Beaucoup de prostituées sont victimes de trafic"
   },
   {
    "q": "Quelles sont les conséquences de la prostitution sur la santé ?",
    "c": [
     "Conséquences positives",
     "IST, traumatismes, dépendances",
     "Aucune conséquence",
     "Problèmes uniquement physiques"
    ],
    "a": "IST, traumatismes, dépendances"
   }
  ],
  "rw": true
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
    "a": "Accord libre et éclairé à un acte sexuel"
   },
   {
    "q": "Le consentement peut-il être donné sous l'emprise de l'alcool ?",
    "c": [
     "Oui, l'alcool n'a pas d'importance",
     "Oui, si la personne est consciente",
     "Oui, tant qu'il n'y a pas de violence",
     "Non, le consentement doit être libre et lucide"
    ],
    "a": "Non, le consentement doit être libre et lucide"
   },
   {
    "q": "Le consentement est-il réversible ?",
    "c": [
     "Non, cela n'existe pas",
     "Non, une fois donné il est définitif",
     "Oui, il peut être retiré à tout moment",
     "Parfois"
    ],
    "a": "Oui, il peut être retiré à tout moment"
   },
   {
    "q": "Peut-on présumer du consentement ?",
    "c": [
     "Oui, après un premier rendez-vous",
     "Oui, dans un couple",
     "Non, il doit être exprimé clairement",
     "Oui, par défaut"
    ],
    "a": "Non, il doit être exprimé clairement"
   },
   {
    "q": "Qu'est-ce que l'âge du consentement en France ?",
    "c": [
     "18 ans",
     "14 ans",
     "15 ans",
     "16 ans"
    ],
    "a": "15 ans"
   },
   {
    "q": "Le silence peut-il être considéré comme un consentement ?",
    "c": [
     "Oui",
     "Oui, parfois",
     "Oui, dans le couple",
     "Non, le consentement doit être explicite"
    ],
    "a": "Non, le consentement doit être explicite"
   },
   {
    "q": "Qu'est-ce que le consentement explicite ?",
    "c": [
     "Un accord supposé",
     "Un accord verbal ou gestuel clair",
     "Une signature",
     "Une absence de refus"
    ],
    "a": "Un accord verbal ou gestuel clair"
   },
   {
    "q": "Différence entre consentement et soumission ?",
    "c": [
     "Aucune différence",
     "La soumission est volontaire",
     "C'est la même chose",
     "Le consentement est libre, la soumission est contrainte"
    ],
    "a": "Le consentement est libre, la soumission est contrainte"
   }
  ],
  "rw": true
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
    "a": "Comportements à connotation sexuelle imposés de façon répétée"
   },
   {
    "q": "Quels sont les éléments constitutifs du harcèlement sexuel ?",
    "c": [
     "Consentement",
     "Un seul acte",
     "Répétition et caractère non désiré",
     "Intention humoristique"
    ],
    "a": "Répétition et caractère non désiré"
   },
   {
    "q": "Le harcèlement sexuel est-il un délit pénal en France ?",
    "c": [
     "Uniquement au travail",
     "Uniquement dans le privé",
     "Oui, puni par la loi",
     "Non, ce n'est pas un délit"
    ],
    "a": "Oui, puni par la loi"
   },
   {
    "q": "Quelle est la peine maximale pour harcèlement sexuel en France ?",
    "c": [
     "6 mois",
     "3 ans d'emprisonnement et 45 000 euros d'amende",
     "1 an",
     "5 ans"
    ],
    "a": "3 ans d'emprisonnement et 45 000 euros d'amende"
   },
   {
    "q": "Où peut avoir lieu le harcèlement sexuel ?",
    "c": [
     "Uniquement dans les lieux publics",
     "Uniquement en ligne",
     "Uniquement au travail",
     "Au travail, dans les transports, à l'école, en ligne"
    ],
    "a": "Au travail, dans les transports, à l'école, en ligne"
   },
   {
    "q": "Qu'est-ce que le harcèlement de rue ?",
    "c": [
     "Discussion",
     "Rencontre",
     "Comportements sexistes dans l'espace public",
     "Compliment"
    ],
    "a": "Comportements sexistes dans l'espace public"
   },
   {
    "q": "Comment réagir face au harcèlement sexuel ?",
    "c": [
     "Ne rien faire",
     "Accepter",
     "Signaler, porter plainte, témoigner",
     "Ignorer"
    ],
    "a": "Signaler, porter plainte, témoigner"
   },
   {
    "q": "Qu'est-ce que la loi sur le harcèlement sexuel en France ?",
    "c": [
     "Loi sur l'éducation",
     "Loi sur l'égalité",
     "Loi qui définit et punit le harcèlement sexuel",
     "Loi sur le travail"
    ],
    "a": "Loi qui définit et punit le harcèlement sexuel"
   }
  ],
  "rw": true
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
    "a": "Tous ces éléments"
   },
   {
    "q": "Comment la loi française définit-elle le viol ?",
    "c": [
     "Rapport non consenti",
     "Baiser forcé",
     "Attouchement",
     "Tout acte de pénétration sexuelle imposé par violence ou contrainte"
    ],
    "a": "Tout acte de pénétration sexuelle imposé par violence ou contrainte"
   },
   {
    "q": "Quelle est la peine maximale pour viol en France ?",
    "c": [
     "10 ans",
     "5 ans",
     "20 ans",
     "15 ans de réclusion criminelle"
    ],
    "a": "15 ans de réclusion criminelle"
   },
   {
    "q": "Qui peut être victime de viol ?",
    "c": [
     "Uniquement les femmes",
     "Toute personne, quel que soit son âge, sexe ou genre",
     "Uniquement les hommes",
     "Uniquement les enfants"
    ],
    "a": "Toute personne, quel que soit son âge, sexe ou genre"
   },
   {
    "q": "Que faire en cas de viol ?",
    "c": [
     "Dormir",
     "Prendre une douche",
     "Appeler les urgences, ne pas se laver, porter plainte",
     "Oublier"
    ],
    "a": "Appeler les urgences, ne pas se laver, porter plainte"
   },
   {
    "q": "Qu'est-ce que la prescription pour viol en France ?",
    "c": [
     "30 ans",
     "20 ans après la majorité de la victime",
     "10 ans",
     "5 ans"
    ],
    "a": "20 ans après la majorité de la victime"
   },
   {
    "q": "Quel est le pourcentage de plaintes pour viol classées sans suite ?",
    "c": [
     "Environ 50%",
     "Environ 80%",
     "Environ 30%",
     "Environ 10%"
    ],
    "a": "Environ 80%"
   },
   {
    "q": "Qu'est-ce qu'une agression sexuelle ?",
    "c": [
     "Harcèlement",
     "Atteinte sexuelle sans pénétration",
     "Viol",
     "Inceste"
    ],
    "a": "Atteinte sexuelle sans pénétration"
   }
  ],
  "rw": true
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
    "a": "Apprentissage sur le corps, les relations et la vie affective"
   },
   {
    "q": "Depuis quand l'éducation sexuelle est-elle obligatoire à l'école en France ?",
    "c": [
     "Depuis 1990",
     "Depuis 1970",
     "Depuis 2010",
     "Depuis 2001 (loi relative à la régulation des naissances)"
    ],
    "a": "Depuis 2001 (loi relative à la régulation des naissances)"
   },
   {
    "q": "Combien de séances d'éducation sexuelle sont prévues par an ?",
    "c": [
     "Au moins 3 séances",
     "1 séance",
     "5 séances",
     "Aucune"
    ],
    "a": "Au moins 3 séances"
   },
   {
    "q": "À quel âge commence l'éducation sexuelle à l'école ?",
    "c": [
     "À la maternelle",
     "À l'école primaire (cycle 3)",
     "Au collège",
     "Au lycée"
    ],
    "a": "À l'école primaire (cycle 3)"
   },
   {
    "q": "Quels sujets sont abordés dans l'éducation sexuelle ?",
    "c": [
     "Uniquement la contraception",
     "Uniquement la biologie",
     "Uniquement les IST",
     "Consentement, contraception, IST, relations"
    ],
    "a": "Consentement, contraception, IST, relations"
   },
   {
    "q": "Qui dispense les séances d'éducation sexuelle ?",
    "c": [
     "Uniquement les infirmières",
     "Uniquement les parents",
     "Enseignants et intervenants extérieurs spécialisés",
     "Uniquement les médecins"
    ],
    "a": "Enseignants et intervenants extérieurs spécialisés"
   },
   {
    "q": "L'éducation sexuelle réduit-elle les grossesses précoces ?",
    "c": [
     "Oui, c'est démontré",
     "Non, elle les augmente",
     "Effet variable",
     "Non, aucun effet"
    ],
    "a": "Oui, c'est démontré"
   },
   {
    "q": "Quel pays a l'un des meilleurs programmes d'éducation sexuelle ?",
    "c": [
     "France",
     "Pays-Bas",
     "Japon",
     "États-Unis"
    ],
    "a": "Pays-Bas"
   }
  ],
  "rw": true
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
    "a": "Ablation partielle ou totale des organes génitaux externes"
   },
   {
    "q": "Combien de femmes ont subi des MGF dans le monde ?",
    "c": [
     "Environ 100 millions",
     "Environ 50 millions",
     "Plus de 200 millions",
     "Environ 1 milliard"
    ],
    "a": "Plus de 200 millions"
   },
   {
    "q": "Dans quelles régions les MGF sont-elles pratiquées ?",
    "c": [
     "Partout dans le monde",
     "Afrique subsaharienne, Moyen-Orient, Asie",
     "Uniquement au Moyen-Orient",
     "Uniquement en Afrique"
    ],
    "a": "Afrique subsaharienne, Moyen-Orient, Asie"
   },
   {
    "q": "Les MGF sont-elles illégales en France ?",
    "c": [
     "Non, autorisées",
     "Uniquement pour les mineures",
     "Autorisées avec consentement",
     "Oui, interdites et sévèrement punies"
    ],
    "a": "Oui, interdites et sévèrement punies"
   },
   {
    "q": "Quelles sont les conséquences des MGF sur la santé ?",
    "c": [
     "Bénéfiques pour la santé",
     "Douleur, infections, complications obstétricales",
     "Esthétiques",
     "Aucunes"
    ],
    "a": "Douleur, infections, complications obstétricales"
   },
   {
    "q": "Pourquoi les MGF sont-elles pratiquées ?",
    "c": [
     "Raisons médicales",
     "Esthétique",
     "Hygiène",
     "Traditions culturelles et croyances religieuses"
    ],
    "a": "Traditions culturelles et croyances religieuses"
   },
   {
    "q": "Qu'est-ce que l'excision ?",
    "c": [
     "Rituel religieux",
     "Ablation du clitoris et parfois des petites lèvres",
     "Circoncision",
     "Opération chirurgicale"
    ],
    "a": "Ablation du clitoris et parfois des petites lèvres"
   },
   {
    "q": "Quelle organisation lutte contre les MGF ?",
    "c": [
     "Amnesty International",
     "UNICEF, OMS, ONU",
     "Croix-Rouge",
     "Toutes ces organisations"
    ],
    "a": "Toutes ces organisations"
   }
  ],
  "rw": true
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
    "a": "Association qui informe sur la contraception et la sexualité"
   },
   {
    "q": "En quelle année le Planning familial a-t-il été créé en France ?",
    "c": [
     "1956",
     "1970",
     "1960",
     "1980"
    ],
    "a": "1956"
   },
   {
    "q": "Quels services propose le Planning familial ?",
    "c": [
     "Consultations contraceptives, IST, IVG, informations",
     "Uniquement les tests IST",
     "Uniquement la contraception",
     "Uniquement les informations"
    ],
    "a": "Consultations contraceptives, IST, IVG, informations"
   },
   {
    "q": "Les consultations au Planning familial sont-elles gratuites ?",
    "c": [
     "Uniquement pour les étudiants",
     "Oui, et anonymes pour les mineurs",
     "Uniquement pour les adultes",
     "Non, payantes"
    ],
    "a": "Oui, et anonymes pour les mineurs"
   },
   {
    "q": "Qui peut consulter le Planning familial ?",
    "c": [
     "Uniquement les couples",
     "Toute personne, sans condition",
     "Uniquement les jeunes",
     "Uniquement les femmes"
    ],
    "a": "Toute personne, sans condition"
   },
   {
    "q": "Qu'est-ce que l'IVG au Planning familial ?",
    "c": [
     "Information",
     "Contraception",
     "Examen",
     "Interruption Volontaire de Grossesse"
    ],
    "a": "Interruption Volontaire de Grossesse"
   },
   {
    "q": "Depuis quand la contraception est-elle autorisée en France ?",
    "c": [
     "1975",
     "1970",
     "1967 (loi Neuwirth)",
     "1960"
    ],
    "a": "1967 (loi Neuwirth)"
   },
   {
    "q": "Depuis quand l'IVG est-elle légale en France ?",
    "c": [
     "1970",
     "1975 (loi Veil)",
     "1967",
     "1980"
    ],
    "a": "1975 (loi Veil)"
   }
  ],
  "rw": true
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
    "a": "Processus pour aligner son apparence et son identité de genre"
   },
   {
    "q": "Qu'est-ce qu'une personne transgenre ?",
    "c": [
     "Personne dont l'identité de genre diffère du sexe assigné",
     "Travesti",
     "Homosexuel",
     "Personne qui change de sexe"
    ],
    "a": "Personne dont l'identité de genre diffère du sexe assigné"
   },
   {
    "q": "Qu'est-ce que le parcours de transition médicale ?",
    "c": [
     "Opération unique",
     "Suivi par des spécialistes avec traitements possibles",
     "Simple changement administratif",
     "Traitement obligatoire"
    ],
    "a": "Suivi par des spécialistes avec traitements possibles"
   },
   {
    "q": "Quels traitements peuvent être suivis lors d'une transition ?",
    "c": [
     "Aucun traitement",
     "Hormones et/ou chirurgies",
     "Uniquement les hormones",
     "Uniquement la chirurgie"
    ],
    "a": "Hormones et/ou chirurgies"
   },
   {
    "q": "Depuis quand le changement de sexe à l'état civil est-il possible en France ?",
    "c": [
     "Depuis 2020",
     "Depuis 2016 (loi de modernisation de la justice)",
     "Depuis 2010",
     "Depuis 2000"
    ],
    "a": "Depuis 2016 (loi de modernisation de la justice)"
   },
   {
    "q": "Qu'est-ce que la dysphorie de genre ?",
    "c": [
     "Préférence personnelle",
     "Maladie mentale",
     "Malaise lié à la discordance entre identité de genre et sexe assigné",
     "Simple insatisfaction"
    ],
    "a": "Malaise lié à la discordance entre identité de genre et sexe assigné"
   },
   {
    "q": "La transidentité est-elle une maladie mentale ?",
    "c": [
     "Oui, c'est un trouble",
     "Oui, depuis 2018",
     "Non, mais autrefois",
     "Non, l'OMS ne la considère plus comme telle"
    ],
    "a": "Non, l'OMS ne la considère plus comme telle"
   },
   {
    "q": "Qu'est-ce que le coming out trans ?",
    "c": [
     "Changement de nom",
     "Transition médicale",
     "Révélation de son identité de genre à son entourage",
     "Sortir d'une boîte"
    ],
    "a": "Révélation de son identité de genre à son entourage"
   }
  ],
  "rw": true
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
    "a": "Sentiment intime et personnel d'appartenir à un genre"
   },
   {
    "q": "Quelle est la différence entre sexe et genre ?",
    "c": [
     "Le sexe est biologique, le genre est social et identitaire",
     "Le sexe est social",
     "Identiques",
     "Le genre est biologique"
    ],
    "a": "Le sexe est biologique, le genre est social et identitaire"
   },
   {
    "q": "Qu'est-ce que la cisidentité ?",
    "c": [
     "Personne dont l'identité de genre correspond au sexe assigné",
     "Personne trans",
     "Homosexuel",
     "Personne non-binaire"
    ],
    "a": "Personne dont l'identité de genre correspond au sexe assigné"
   },
   {
    "q": "Qu'est-ce qu'une personne non-binaire ?",
    "c": [
     "Personne cis",
     "Personne trans",
     "Personne qui ne se reconnaît pas dans la binarité homme/femme",
     "Personne androgyne"
    ],
    "a": "Personne qui ne se reconnaît pas dans la binarité homme/femme"
   },
   {
    "q": "L'identité de genre est-elle liée à l'orientation sexuelle ?",
    "c": [
     "Uniquement chez les trans",
     "Oui, directement liés",
     "Non, ce sont des concepts distincts",
     "Parfois"
    ],
    "a": "Non, ce sont des concepts distincts"
   },
   {
    "q": "Qu'est-ce que l'expression de genre ?",
    "c": [
     "Orientation",
     "Sexe biologique",
     "Identité de genre",
     "Façon dont une personne exprime son genre (vêtements, comportement)"
    ],
    "a": "Façon dont une personne exprime son genre (vêtements, comportement)"
   },
   {
    "q": "Quels sont les pronoms utilisés pour les personnes non-binaires ?",
    "c": [
     "Uniquement le prénom",
     "Iel, al, ol (ou autres selon la personne)",
     "Aucun pronom",
     "Il ou elle uniquement"
    ],
    "a": "Iel, al, ol (ou autres selon la personne)"
   },
   {
    "q": "L'identité de genre est-elle choisie ?",
    "c": [
     "Non, elle est ressentie et personnelle",
     "Parfois",
     "Oui, on la choisit",
     "Oui, comme un vêtement"
    ],
    "a": "Non, elle est ressentie et personnelle"
   }
  ],
  "rw": true
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
    "a": "Identité de genre différente du sexe assigné à la naissance"
   },
   {
    "q": "Quel est le terme médical utilisé dans les classifications internationales ?",
    "c": [
     "Trouble de l'identité de genre",
     "Transidentité",
     "Transsexualisme",
     "Dysphorie de genre"
    ],
    "a": "Dysphorie de genre"
   },
   {
    "q": "À quel âge une personne peut-elle ressentir une dysphorie de genre ?",
    "c": [
     "Dès l'enfance",
     "Uniquement à l'âge adulte",
     "Uniquement à l'adolescence",
     "Après 30 ans"
    ],
    "a": "Dès l'enfance"
   },
   {
    "q": "Quels sont les traitements possibles pour la dysphorie de genre ?",
    "c": [
     "Uniquement la chirurgie",
     "Uniquement les hormones",
     "THS, chirurgies, accompagnement psychologique",
     "Aucun traitement"
    ],
    "a": "THS, chirurgies, accompagnement psychologique"
   },
   {
    "q": "Qu'est-ce que le traitement hormonal substitutif (THS) dans la transition ?",
    "c": [
     "Traitement contre la dépression",
     "Antibiotiques",
     "Médicaments",
     "Hormones pour développer les caractères du genre souhaité"
    ],
    "a": "Hormones pour développer les caractères du genre souhaité"
   },
   {
    "q": "Qu'est-ce que la chirurgie de réassignation sexuelle ?",
    "c": [
     "Opérations chirurgicales pour modifier les caractéristiques sexuelles",
     "Chirurgie esthétique",
     "Chirurgie mammaire",
     "Lipoaspiration"
    ],
    "a": "Opérations chirurgicales pour modifier les caractéristiques sexuelles"
   },
   {
    "q": "Depuis quand la France rembourse-t-elle les opérations de changement de sexe ?",
    "c": [
     "Jamais",
     "Depuis les années 2000 (ALD)",
     "Depuis 1990",
     "Depuis 2010"
    ],
    "a": "Depuis les années 2000 (ALD)"
   },
   {
    "q": "La transidentité est-elle reconnue comme une affection de longue durée (ALD) ?",
    "c": [
     "Oui, dans certains cas",
     "Uniquement pour les opérations",
     "Non, jamais",
     "Oui, systématiquement"
    ],
    "a": "Oui, dans certains cas"
   }
  ],
  "rw": true
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
    "a": "Parents de même sexe qui élèvent des enfants"
   },
   {
    "q": "Qu'est-ce que la PMA pour les couples de femmes en France ?",
    "c": [
     "Adoption",
     "FIV",
     "Gestation pour autrui",
     "Procréation Médicalement Assistée pour couples lesbiens"
    ],
    "a": "Procréation Médicalement Assistée pour couples lesbiens"
   },
   {
    "q": "Depuis quand la PMA est-elle ouverte à toutes les femmes en France ?",
    "c": [
     "2021 (loi bioéthique)",
     "2015",
     "2023",
     "2013"
    ],
    "a": "2021 (loi bioéthique)"
   },
   {
    "q": "Qu'est-ce que l'adoption homoparentale ?",
    "c": [
     "Adoption simple",
     "Adoption plénière",
     "Adoption d'un enfant par un couple de même sexe",
     "Famille d'accueil"
    ],
    "a": "Adoption d'un enfant par un couple de même sexe"
   },
   {
    "q": "Qu'est-ce que l'adoption de l'enfant du conjoint ?",
    "c": [
     "Adoption internationale",
     "Adoption de l'enfant du partenaire par le beau-parent",
     "Adoption simple",
     "Adoption plénière"
    ],
    "a": "Adoption de l'enfant du partenaire par le beau-parent"
   },
   {
    "q": "Combien d'enfants vivent dans une famille homoparentale en France ?",
    "c": [
     "Environ 50 000",
     "Environ 1 million",
     "Environ 500 000",
     "Environ 200 000 à 300 000"
    ],
    "a": "Environ 200 000 à 300 000"
   },
   {
    "q": "Comment les enfants de familles homoparentales se développent-ils ?",
    "c": [
     "Mieux",
     "Aussi bien que les autres enfants",
     "Cela dépend de l'orientation des parents",
     "Moins bien"
    ],
    "a": "Aussi bien que les autres enfants"
   },
   {
    "q": "Quelle est la différence entre homoparentalité et parent seul ?",
    "c": [
     "Homoparentalité = couple hétéro",
     "Homoparentalité = couple de même sexe, parent seul = célibataire",
     "Parent seul = couple homosexuel",
     "C'est la même chose"
    ],
    "a": "Homoparentalité = couple de même sexe, parent seul = célibataire"
   }
  ],
  "rw": true
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
    "a": "Procréation Médicalement Assistée"
   },
   {
    "q": "Quelles techniques inclut la PMA ?",
    "c": [
     "Uniquement la FIV",
     "Uniquement l'insémination",
     "Insémination, FIV, ICSI",
     "La chirurgie"
    ],
    "a": "Insémination, FIV, ICSI"
   },
   {
    "q": "À qui s'adresse la PMA en France ?",
    "c": [
     "Uniquement couples hétéros",
     "Couples hétérosexuels, couples de femmes et femmes seules",
     "Uniquement couples de femmes",
     "Uniquement couples mariés"
    ],
    "a": "Couples hétérosexuels, couples de femmes et femmes seules"
   },
   {
    "q": "Qu'est-ce que l'insémination artificielle (IAC) ?",
    "c": [
     "Dépôt de sperme directement dans l'utérus",
     "Injection de spermatozoïdes",
     "Fécondation in vitro",
     "Transfert d'embryon"
    ],
    "a": "Dépôt de sperme directement dans l'utérus"
   },
   {
    "q": "Quel est l'âge limite pour la PMA en France ?",
    "c": [
     "45 ans",
     "40 ans",
     "50 ans",
     "43 ans pour la femme"
    ],
    "a": "43 ans pour la femme"
   },
   {
    "q": "Combien de tentatives de PMA sont remboursées en France ?",
    "c": [
     "8 inséminations et 6 FIV",
     "6 inséminations et 4 FIV",
     "4 inséminations et 2 FIV",
     "Tentatives illimitées"
    ],
    "a": "6 inséminations et 4 FIV"
   },
   {
    "q": "Qu'est-ce que la conservation des ovocytes ?",
    "c": [
     "Fécondation",
     "Conservation du sperme",
     "Stockage d'embryons",
     "Congélation des ovules pour préserver la fertilité"
    ],
    "a": "Congélation des ovules pour préserver la fertilité"
   },
   {
    "q": "Depuis quand les femmes peuvent-elles conserver leurs ovocytes sans raison médicale en France ?",
    "c": [
     "Depuis 2015",
     "Depuis 2010",
     "Ce n'est pas autorisé",
     "Depuis 2021"
    ],
    "a": "Depuis 2021"
   }
  ],
  "rw": true
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
    "a": "Gestation Pour Autrui (mère porteuse)"
   },
   {
    "q": "La GPA est-elle autorisée en France ?",
    "c": [
     "Oui, autorisée",
     "Autorisée sous conditions",
     "Uniquement pour les couples hétéros",
     "Non, interdite en France"
    ],
    "a": "Non, interdite en France"
   },
   {
    "q": "Pourquoi la GPA est-elle interdite en France ?",
    "c": [
     "Pour des raisons médicales",
     "Pour des raisons éthiques et juridiques",
     "Pour des raisons religieuses",
     "Pour des raisons économiques"
    ],
    "a": "Pour des raisons éthiques et juridiques"
   },
   {
    "q": "Dans quels pays la GPA est-elle autorisée ?",
    "c": [
     "Canada, Royaume-Uni, Belgique, Grèce, USA (certains états)",
     "Uniquement aux USA",
     "Partout dans le monde",
     "Uniquement en Europe"
    ],
    "a": "Canada, Royaume-Uni, Belgique, Grèce, USA (certains états)"
   },
   {
    "q": "Qu'est-ce que la GPA ?",
    "c": [
     "Adoption",
     "FIV",
     "Insémination",
     "Une femme porte un enfant pour un couple ou une personne"
    ],
    "a": "Une femme porte un enfant pour un couple ou une personne"
   },
   {
    "q": "Comment les parents d'intention récupèrent-ils la filiation ?",
    "c": [
     "Par déclaration",
     "Par procédure judiciaire dans leur pays",
     "Automatiquement",
     "Par contrat"
    ],
    "a": "Par procédure judiciaire dans leur pays"
   },
   {
    "q": "Quels sont les principaux débats éthiques autour de la GPA ?",
    "c": [
     "Économiques",
     "Marchandisation du corps, exploitation, filiation",
     "Religieux",
     "Médicaux"
    ],
    "a": "Marchandisation du corps, exploitation, filiation"
   },
   {
    "q": "La GPA est-elle autorisée en Belgique ?",
    "c": [
     "Oui, strictement encadrée",
     "Oui, payante",
     "Oui, mais non encadrée légalement",
     "Non"
    ],
    "a": "Oui, mais non encadrée légalement"
   }
  ],
  "rw": true
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
    "a": "Accouchement dans l'anonymat à l'hôpital"
   },
   {
    "q": "Depuis quand l'accouchement sous X existe-t-il en France ?",
    "c": [
     "Depuis 1960",
     "Depuis 1941 (loi de 1941)",
     "Depuis 1970",
     "Depuis 1900"
    ],
    "a": "Depuis 1941 (loi de 1941)"
   },
   {
    "q": "Quel est le but de l'accouchement sous X ?",
    "c": [
     "Éviter les frais",
     "Éviter les abandons dangereux et les infanticides",
     "Cacher la naissance",
     "Simplifier l'adoption"
    ],
    "a": "Éviter les abandons dangereux et les infanticides"
   },
   {
    "q": "La mère a-t-elle accès à un suivi médical ?",
    "c": [
     "Oui, elle bénéficie des mêmes soins",
     "Oui, mais payant",
     "Uniquement un suivi minimal",
     "Non, aucun"
    ],
    "a": "Oui, elle bénéficie des mêmes soins"
   },
   {
    "q": "L'enfant né sous X peut-il retrouver ses origines ?",
    "c": [
     "Oui, immédiatement",
     "Oui, à 16 ans",
     "Oui, à sa majorité via le CNAOP",
     "Non, jamais"
    ],
    "a": "Oui, à sa majorité via le CNAOP"
   },
   {
    "q": "Qu'est-ce que le CNAOP ?",
    "c": [
     "Organisme de suivi",
     "Hôpital",
     "Conseil National pour l'Accès aux Origines Personnelles",
     "Centre d'adoption"
    ],
    "a": "Conseil National pour l'Accès aux Origines Personnelles"
   },
   {
    "q": "Combien d'accouchements sous X par an en France ?",
    "c": [
     "Environ 2 000",
     "Environ 100",
     "Environ 5 000",
     "Environ 600 à 700"
    ],
    "a": "Environ 600 à 700"
   },
   {
    "q": "La mère peut-elle revenir sur sa décision ?",
    "c": [
     "Oui, pendant 2 mois après la naissance",
     "Oui, pendant 1 an",
     "Oui, jusqu'à la majorité de l'enfant",
     "Non, c'est définitif"
    ],
    "a": "Oui, pendant 2 mois après la naissance"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_001",
  "cat": "drogues",
  "name": "Le cannabis",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle plante provient le cannabis ? Le ___ ?",
    "c": [
     "chanvre",
     "pavot",
     "coca",
     "tabac"
    ],
    "a": "chanvre"
   },
   {
    "q": "Comment fume-t-on couramment le cannabis, roulé avec du tabac ? Un ___ ?",
    "c": [
     "joint",
     "cigare",
     "narguilé",
     "pipe à eau seule"
    ],
    "a": "joint"
   },
   {
    "q": "Quelle molécule psychoactive principale du cannabis provoque le « planant » ? Le ___ ?",
    "c": [
     "THC",
     "CBD",
     "LSD",
     "GHB"
    ],
    "a": "THC"
   },
   {
    "q": "Quelle molécule du cannabis, non planante, est vendue légalement en France ? Le ___ ?",
    "c": [
     "CBD",
     "THC",
     "MDMA",
     "DMT"
    ],
    "a": "CBD"
   },
   {
    "q": "Quelle forme résineuse et compacte du cannabis est appelée ___ ?",
    "c": [
     "haschich",
     "buvard",
     "cristal",
     "champignon"
    ],
    "a": "haschich"
   },
   {
    "q": "Dans quel usage médical encadré le cannabis est-il parfois prescrit ? Contre la ___ ?",
    "c": [
     "douleur",
     "fièvre",
     "carie",
     "myopie"
    ],
    "a": "douleur"
   },
   {
    "q": "Quel système de récepteurs du corps humain le THC active-t-il ? Le système ___ ?",
    "c": [
     "endocannabinoïde",
     "digestif",
     "lymphatique",
     "osseux"
    ],
    "a": "endocannabinoïde"
   },
   {
    "q": "En quelle année l'Uruguay est-il devenu le premier pays à légaliser totalement le cannabis récréatif ?",
    "a": "2013"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_002",
  "cat": "drogues",
  "name": "La cocaïne",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle plante d'Amérique du Sud la cocaïne est-elle extraite ? La ___ ?",
    "c": [
     "coca",
     "canne",
     "vigne",
     "menthe"
    ],
    "a": "coca"
   },
   {
    "q": "Sous quelle forme la cocaïne se présente-t-elle souvent ? Une ___ blanche ?",
    "c": [
     "poudre",
     "gélule",
     "feuille verte",
     "huile"
    ],
    "a": "poudre"
   },
   {
    "q": "Quel type d'effet stimulant la cocaïne produit-elle sur le système nerveux ? Un effet ___ ?",
    "c": [
     "excitant",
     "calmant",
     "endormant",
     "anesthésiant total"
    ],
    "a": "excitant"
   },
   {
    "q": "Quel organe la cocaïne met-elle gravement en danger par son action stimulante ? Le ___ ?",
    "c": [
     "cœur",
     "genou",
     "coude",
     "cheveu"
    ],
    "a": "cœur"
   },
   {
    "q": "Quel neurotransmetteur du plaisir la cocaïne fait-elle massivement augmenter ? La ___ ?",
    "c": [
     "dopamine",
     "insuline",
     "mélatonine",
     "kératine"
    ],
    "a": "dopamine"
   },
   {
    "q": "Dans quel massif montagneux d'Amérique du Sud la coca est-elle cultivée traditionnellement ? Les ___ ?",
    "c": [
     "Andes",
     "Alpes",
     "Rocheuses",
     "Oural"
    ],
    "a": "Andes"
   },
   {
    "q": "Comment appelle-t-on l'état de manque et de besoin irrépressible d'une drogue ? La ___ ?",
    "c": [
     "dépendance",
     "guérison",
     "immunité",
     "tolérance seule"
    ],
    "a": "dépendance"
   },
   {
    "q": "Vers quel siècle la cocaïne a-t-elle été isolée pour la première fois par un chimiste ? Le XIX___ ?",
    "c": [
     "e",
     "Ier",
     "IIe",
     "IIIe"
    ],
    "a": "e"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_003",
  "cat": "drogues",
  "name": "L'héroïne",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle fleur, le pavot, l'héroïne est-elle dérivée ? Le pavot à ___ ?",
    "c": [
     "opium",
     "parfum",
     "graines seules",
     "huile"
    ],
    "a": "opium"
   },
   {
    "q": "À quelle famille de drogues très addictives l'héroïne appartient-elle ? Les ___ ?",
    "c": [
     "opiacés",
     "stimulants",
     "psychédéliques",
     "solvants"
    ],
    "a": "opiacés"
   },
   {
    "q": "Quel mode d'usage de l'héroïne présente le plus de risques infectieux ? L'___ ?",
    "c": [
     "injection",
     "inhalation seule",
     "ingestion",
     "application"
    ],
    "a": "injection"
   },
   {
    "q": "Quel médicament d'urgence peut inverser une overdose d'opiacés ? La ___ ?",
    "c": [
     "naloxone",
     "aspirine",
     "insuline",
     "cortisone"
    ],
    "a": "naloxone"
   },
   {
    "q": "Quelle fonction vitale une overdose d'héroïne ralentit-elle dangereusement ? La ___ ?",
    "c": [
     "respiration",
     "digestion",
     "vue",
     "audition"
    ],
    "a": "respiration"
   },
   {
    "q": "Quel traitement de substitution est prescrit aux personnes dépendantes aux opiacés ? La ___ ?",
    "c": [
     "méthadone",
     "caféine",
     "nicotine",
     "mélatonine"
    ],
    "a": "méthadone"
   },
   {
    "q": "Quel virus l'usage d'aiguilles partagées peut-il transmettre, d'où le rôle des programmes d'échange ? Le ___ ?",
    "c": [
     "VIH",
     "rhume",
     "tétanos seul",
     "zona"
    ],
    "a": "VIH"
   },
   {
    "q": "Vers quelle fin de siècle l'héroïne a-t-elle d'abord été commercialisée comme médicament par Bayer ? Le XIX___ ?",
    "c": [
     "e",
     "Ier",
     "IIe",
     "IIIe"
    ],
    "a": "e"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_004",
  "cat": "drogues",
  "name": "L'ecstasy",
  "level": "adulte",
  "levels": [
   {
    "q": "Sous quelle forme colorée l'ecstasy se présente-t-elle souvent ? Un ___ ?",
    "c": [
     "comprimé",
     "liquide vert",
     "spray",
     "patch"
    ],
    "a": "comprimé"
   },
   {
    "q": "Dans quel milieu festif l'ecstasy est-elle surtout consommée ? Les soirées ___ ?",
    "c": [
     "techno",
     "classiques",
     "littéraires",
     "sportives"
    ],
    "a": "techno"
   },
   {
    "q": "Quelle molécule active se cache principalement dans l'ecstasy ? La ___ ?",
    "c": [
     "MDMA",
     "THC",
     "LSD",
     "GHB"
    ],
    "a": "MDMA"
   },
   {
    "q": "Quel effet émotionnel « d'amour » l'ecstasy provoque-t-elle, la rendant dangereuse socialement ? Un effet ___ ?",
    "c": [
     "empathogène",
     "anesthésiant",
     "somnifère",
     "laxatif"
    ],
    "a": "empathogène"
   },
   {
    "q": "Quel danger grave l'ecstasy provoque-t-elle en soirée surchauffée, faute d'hydratation ? L'___ (coup de chaleur) ?",
    "c": [
     "hyperthermie",
     "hypothermie",
     "myopie",
     "surdité"
    ],
    "a": "hyperthermie"
   },
   {
    "q": "Quel neurotransmetteur du bonheur la MDMA libère-t-elle massivement, provoquant un contrecoup ? La ___ ?",
    "c": [
     "sérotonine",
     "insuline",
     "adrénaline seule",
     "histamine"
    ],
    "a": "sérotonine"
   },
   {
    "q": "Comment appelle-t-on l'analyse d'un comprimé pour connaître sa composition, en réduction des risques ? Le ___ (drug checking) ?",
    "c": [
     "testing",
     "dosage médical",
     "recyclage",
     "compostage"
    ],
    "a": "testing"
   },
   {
    "q": "Dans quelle décennie l'ecstasy est-elle devenue emblématique de la culture rave ? Les années ___ ?",
    "c": [
     "1990",
     "1950",
     "2010",
     "1930"
    ],
    "a": "1990"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_005",
  "cat": "drogues",
  "name": "Le LSD",
  "level": "adulte",
  "levels": [
   {
    "q": "À quelle grande famille d'effets le LSD appartient-il ? Les ___ (hallucinogènes) ?",
    "c": [
     "psychédéliques",
     "stimulants",
     "opiacés",
     "sédatifs"
    ],
    "a": "psychédéliques"
   },
   {
    "q": "Sur quel petit support en papier le LSD est-il souvent déposé ? Un ___ ?",
    "c": [
     "buvard",
     "comprimé lourd",
     "sachet de poudre",
     "flacon"
    ],
    "a": "buvard"
   },
   {
    "q": "Quel type de perceptions déformées le LSD provoque-t-il ? Des ___ ?",
    "c": [
     "hallucinations",
     "fractures",
     "brûlures",
     "carences"
    ],
    "a": "hallucinations"
   },
   {
    "q": "Comment appelle-t-on une expérience très angoissante sous LSD ? Un bad ___ ?",
    "c": [
     "trip",
     "day",
     "dream",
     "mood"
    ],
    "a": "trip"
   },
   {
    "q": "Quel chimiste suisse a découvert le LSD par accident en 1943 ? Albert ___ ?",
    "c": [
     "Hofmann",
     "Sandoz",
     "Leary",
     "Huxley"
    ],
    "a": "Hofmann"
   },
   {
    "q": "De quel champignon parasite du seigle le LSD est-il dérivé ? L'___ ?",
    "c": [
     "ergot",
     "bolet",
     "amanite",
     "truffe"
    ],
    "a": "ergot"
   },
   {
    "q": "Quel phénomène de « retour » d'hallucinations peut survenir longtemps après la prise ? Un ___ (flashback) ?",
    "c": [
     "flashback",
     "blackout",
     "burnout",
     "comeback"
    ],
    "a": "flashback"
   },
   {
    "q": "En quelle année Albert Hofmann a-t-il synthétisé pour la première fois le LSD ?",
    "a": "1938"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_006",
  "cat": "drogues",
  "name": "Les champignons",
  "level": "adulte",
  "levels": [
   {
    "q": "Sous quelle forme naturelle ces champignons se consomment-ils ? Ils sont ___ ?",
    "c": [
     "cueillis",
     "distillés",
     "fumés en résine",
     "injectés"
    ],
    "a": "cueillis"
   },
   {
    "q": "Quel type d'effets ces champignons provoquent-ils comme le LSD ? Des effets ___ ?",
    "c": [
     "psychédéliques",
     "stimulants",
     "sédatifs",
     "opiacés"
    ],
    "a": "psychédéliques"
   },
   {
    "q": "Quelle molécule active contiennent les champignons hallucinogènes ? La ___ ?",
    "c": [
     "psilocybine",
     "caféine",
     "nicotine",
     "morphine"
    ],
    "a": "psilocybine"
   },
   {
    "q": "Comment appelle-t-on couramment ces champignons en argot anglais ? Les magic ___ ?",
    "c": [
     "mushrooms",
     "beans",
     "leaves",
     "seeds"
    ],
    "a": "mushrooms"
   },
   {
    "q": "Quel grand danger existe lors de la cueillette de ces champignons ? La ___ avec une espèce mortelle ?",
    "c": [
     "confusion",
     "cuisson",
     "congélation",
     "hydratation"
    ],
    "a": "confusion"
   },
   {
    "q": "Pour quel trouble la psilocybine est-elle étudiée en recherche médicale encadrée ? La ___ ?",
    "c": [
     "dépression",
     "myopie",
     "carie",
     "fracture"
    ],
    "a": "dépression"
   },
   {
    "q": "Quel genre de champignon regroupe la plupart des espèces à psilocybine ? Le genre ___ ?",
    "c": [
     "Psilocybe",
     "Amanita",
     "Boletus",
     "Cantharellus"
    ],
    "a": "Psilocybe"
   },
   {
    "q": "Depuis quel millénaire, environ, av. J.-C., certaines cultures utilisent-elles ces champignons rituellement ? Le ___e ?",
    "c": [
     "au moins 1000 av. J.-C.",
     "1990",
     "1800",
     "500 apr."
    ],
    "a": "au moins 1000 av. J.-C."
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_007",
  "cat": "drogues",
  "name": "Les amphétamines",
  "level": "adulte",
  "levels": [
   {
    "q": "Quel type d'effet général les amphétamines produisent-elles ? Un effet ___ ?",
    "c": [
     "stimulant",
     "calmant",
     "hallucinogène",
     "anesthésiant"
    ],
    "a": "stimulant"
   },
   {
    "q": "Sur quel besoin fondamental les amphétamines agissent-elles en le supprimant ? Le ___ ?",
    "c": [
     "sommeil",
     "toucher",
     "goût",
     "équilibre"
    ],
    "a": "sommeil"
   },
   {
    "q": "Dans quel contexte militaire les amphétamines ont-elles été distribuées pour tenir éveillé ? La ___ ?",
    "c": [
     "guerre",
     "paix",
     "récréation",
     "école"
    ],
    "a": "guerre"
   },
   {
    "q": "Quel trouble de l'attention certaines amphétamines encadrées traitent-elles médicalement ? Le ___ ?",
    "c": [
     "TDAH",
     "diabète",
     "asthme",
     "eczéma"
    ],
    "a": "TDAH"
   },
   {
    "q": "Quel effet secondaire cardiaque dangereux les amphétamines provoquent-elles ? Une accélération du ___ ?",
    "c": [
     "cœur",
     "foie",
     "rein",
     "poumon au repos"
    ],
    "a": "cœur"
   },
   {
    "q": "Quel surnom d'argent, « ___ », désignait les amphétamines chez les étudiants et routiers ? Les speed ?",
    "c": [
     "speed",
     "slow",
     "cool",
     "chill"
    ],
    "a": "speed"
   },
   {
    "q": "Quel neurotransmetteur les amphétamines libèrent-elles massivement, comme la cocaïne ? La ___ ?",
    "c": [
     "dopamine",
     "insuline",
     "mélatonine",
     "kératine"
    ],
    "a": "dopamine"
   },
   {
    "q": "En quelle année, environ, l'amphétamine a-t-elle été synthétisée pour la première fois (fin XIXe) ?",
    "a": "1887"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_008",
  "cat": "drogues",
  "name": "La méthamphétamine",
  "level": "adulte",
  "levels": [
   {
    "q": "À quelle famille de drogues la méthamphétamine appartient-elle ? Les ___ ?",
    "c": [
     "stimulants",
     "opiacés",
     "psychédéliques",
     "sédatifs"
    ],
    "a": "stimulants"
   },
   {
    "q": "Quelle série TV américaine culte a pour héros un professeur fabriquant de la méthamphétamine ? Breaking ___ ?",
    "c": [
     "Bad",
     "News",
     "Point",
     "Dawn"
    ],
    "a": "Bad"
   },
   {
    "q": "Sous quelle forme cristalline la méthamphétamine est-elle connue ? Le crystal ___ ?",
    "c": [
     "meth",
     "salt",
     "ice cube",
     "sugar"
    ],
    "a": "meth"
   },
   {
    "q": "Quel effet dévastateur la méthamphétamine a-t-elle sur les dents des usagers ? La « meth ___ » ?",
    "c": [
     "mouth",
     "hand",
     "eye",
     "foot"
    ],
    "a": "mouth"
   },
   {
    "q": "Quelle très forte propriété rend la méthamphétamine particulièrement dangereuse ? Une forte ___ ?",
    "c": [
     "dépendance",
     "immunité",
     "guérison",
     "nutrition"
    ],
    "a": "dépendance"
   },
   {
    "q": "Combien de temps, en heures, peuvent durer les effets stimulants de la méthamphétamine, très longs ?",
    "c": [
     "12",
     "1",
     "48 exact",
     "3"
    ],
    "a": "12"
   },
   {
    "q": "Quel organe, en plus du cœur, la consommation chronique de méthamphétamine endommage-t-elle gravement ? Le ___ ?",
    "c": [
     "cerveau",
     "genou",
     "coude",
     "ongle"
    ],
    "a": "cerveau"
   },
   {
    "q": "Dans quel pays d'Asie la méthamphétamine (« yaba ») circule-t-elle massivement, région du Triangle d'or ? Non : dans quelle région ? Le Triangle d'___ ?",
    "c": [
     "or",
     "argent",
     "feu",
     "sable"
    ],
    "a": "or"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_009",
  "cat": "drogues",
  "name": "La caféine",
  "level": "adulte",
  "levels": [
   {
    "q": "Dans quelle boisson chaude très courante trouve-t-on de la caféine ? Le ___ ?",
    "c": [
     "café",
     "lait",
     "eau",
     "jus"
    ],
    "a": "café"
   },
   {
    "q": "Quel effet la caféine produit-elle sur la vigilance ? Elle rend plus ___ ?",
    "c": [
     "éveillé",
     "endormi",
     "triste",
     "affamé"
    ],
    "a": "éveillé"
   },
   {
    "q": "Dans quelle autre boisson chaude, faite de feuilles, trouve-t-on aussi de la caféine ? Le ___ ?",
    "c": [
     "thé",
     "bouillon",
     "sirop",
     "cidre"
    ],
    "a": "thé"
   },
   {
    "q": "Quelles boissons sucrées « énergisantes » contiennent beaucoup de caféine ? Les ___ drinks ?",
    "c": [
     "energy",
     "soft",
     "milk",
     "still"
    ],
    "a": "energy"
   },
   {
    "q": "La caféine est-elle une substance légale ou illégale ?",
    "c": [
     "légale",
     "illégale",
     "sur ordonnance",
     "interdite aux adultes"
    ],
    "a": "légale"
   },
   {
    "q": "Quel neurotransmetteur du sommeil la caféine bloque-t-elle dans le cerveau ? L'___ ?",
    "c": [
     "adénosine",
     "dopamine",
     "insuline",
     "sérotonine"
    ],
    "a": "adénosine"
   },
   {
    "q": "Comment appelle-t-on le mal de tête ressenti quand un grand consommateur arrête le café ? Le ___ ?",
    "c": [
     "sevrage",
     "surdosage",
     "réveil",
     "jeûne"
    ],
    "a": "sevrage"
   },
   {
    "q": "Combien de milligrammes de caféine, environ, contient une tasse de café filtre ?",
    "a": "95"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_010",
  "cat": "drogues",
  "name": "Le tabac",
  "level": "adulte",
  "levels": [
   {
    "q": "Sous quelle forme roulée fume-t-on le plus souvent le tabac ? Une ___ ?",
    "c": [
     "cigarette",
     "bougie",
     "paille",
     "allumette"
    ],
    "a": "cigarette"
   },
   {
    "q": "Quelle substance du tabac rend fortement dépendant ? La ___ ?",
    "c": [
     "nicotine",
     "caféine",
     "vitamine C",
     "insuline"
    ],
    "a": "nicotine"
   },
   {
    "q": "Quelle grave maladie le tabac est-il le premier facteur de risque de provoquer ? Le ___ du poumon ?",
    "c": [
     "cancer",
     "rhume",
     "torticolis",
     "hoquet"
    ],
    "a": "cancer"
   },
   {
    "q": "Quel dispositif électronique est présenté comme alternative à la cigarette ? La ___ ?",
    "c": [
     "cigarette électronique",
     "montre",
     "radio",
     "lampe"
    ],
    "a": "cigarette électronique"
   },
   {
    "q": "Quel gaz toxique mortel la fumée de cigarette contient-elle ? Le monoxyde de ___ ?",
    "c": [
     "carbone",
     "silicium",
     "calcium",
     "sodium"
    ],
    "a": "carbone"
   },
   {
    "q": "Quel substitut, en patch ou gomme, aide à l'arrêt du tabac ? La ___ de substitution ?",
    "c": [
     "nicotine",
     "morphine",
     "caféine",
     "adrénaline"
    ],
    "a": "nicotine"
   },
   {
    "q": "Quelle substance résineuse et cancérigène se dépose dans les poumons des fumeurs ? Le ___ ?",
    "c": [
     "goudron",
     "plâtre",
     "ciment",
     "vernis"
    ],
    "a": "goudron"
   },
   {
    "q": "Combien de millions de décès, environ, le tabac cause-t-il chaque année dans le monde (OMS) ?",
    "a": "8"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_011",
  "cat": "drogues",
  "name": "La MDMA",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle drogue festive en comprimé la MDMA est-elle le principe actif ? L'___ ?",
    "c": [
     "ecstasy",
     "héroïne",
     "cocaïne",
     "cannabis"
    ],
    "a": "ecstasy"
   },
   {
    "q": "Quel type d'effet « d'ouverture aux autres » la MDMA provoque-t-elle ? Un effet ___ ?",
    "c": [
     "empathogène",
     "sédatif",
     "anesthésiant",
     "laxatif"
    ],
    "a": "empathogène"
   },
   {
    "q": "Sous quelle forme, autre que le comprimé, trouve-t-on la MDMA ? En ___ (cristaux) ?",
    "c": [
     "cristal",
     "spray",
     "patch",
     "gaz"
    ],
    "a": "cristal"
   },
   {
    "q": "Quel neurotransmetteur du bien-être la MDMA vide-t-elle, causant la « descente » les jours suivants ? La ___ ?",
    "c": [
     "sérotonine",
     "insuline",
     "adrénaline",
     "histamine"
    ],
    "a": "sérotonine"
   },
   {
    "q": "Quel danger vital menace en cas de forte chaleur et de déshydratation sous MDMA ? L'___ ?",
    "c": [
     "hyperthermie",
     "hypothermie",
     "myopie",
     "surdité"
    ],
    "a": "hyperthermie"
   },
   {
    "q": "En réduction des risques, que conseille-t-on de boire régulièrement mais sans excès sous MDMA ? De l'___ ?",
    "c": [
     "eau",
     "alcool fort",
     "café",
     "soda sucré"
    ],
    "a": "eau"
   },
   {
    "q": "Pour quel trouble post-traumatique la MDMA est-elle étudiée en thérapie encadrée ? Le ___ ?",
    "c": [
     "stress post-traumatique",
     "diabète",
     "asthme",
     "eczéma"
    ],
    "a": "stress post-traumatique"
   },
   {
    "q": "En quelle année la MDMA a-t-elle été synthétisée pour la première fois par le laboratoire Merck ?",
    "a": "1912"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_012",
  "cat": "drogues",
  "name": "Le GHB",
  "level": "adulte",
  "levels": [
   {
    "q": "Sous quelle forme le GHB se présente-t-il le plus souvent ? Un ___ incolore ?",
    "c": [
     "liquide",
     "comprimé",
     "poudre rouge",
     "gaz"
    ],
    "a": "liquide"
   },
   {
    "q": "Quel effet sédatif le GHB a-t-il à forte dose ? Il ___ (endort) ?",
    "c": [
     "endort",
     "réveille",
     "excite",
     "affame"
    ],
    "a": "endort"
   },
   {
    "q": "Pour quel usage criminel le GHB est-il tristement surnommé « drogue du ___ » ?",
    "c": [
     "violeur",
     "sommeil paisible",
     "rire",
     "génie"
    ],
    "a": "violeur"
   },
   {
    "q": "Pourquoi le GHB est-il particulièrement dangereux mélangé à l'alcool ? Le risque de ___ ?",
    "c": [
     "coma",
     "rhume",
     "acné",
     "crampe"
    ],
    "a": "coma"
   },
   {
    "q": "Quelle est la marge très étroite entre la dose active et la dose dangereuse du GHB ? Une faible marge de ___ ?",
    "c": [
     "sécurité",
     "prix",
     "goût",
     "couleur"
    ],
    "a": "sécurité"
   },
   {
    "q": "Comment se protéger d'un GHB versé à son insu en soirée ? Surveiller son ___ ?",
    "c": [
     "verre",
     "téléphone",
     "manteau",
     "sac seul"
    ],
    "a": "verre"
   },
   {
    "q": "Quel goût quasi imperceptible rend le GHB difficile à détecter dans un verre ? Un goût presque ___ ?",
    "c": [
     "neutre",
     "sucré fort",
     "piquant",
     "amer intense"
    ],
    "a": "neutre"
   },
   {
    "q": "Le GHB est-il naturellement présent en infime quantité dans le corps humain, vrai ou faux ?",
    "c": [
     "vrai",
     "faux",
     "seulement chez l'animal",
     "seulement synthétique"
    ],
    "a": "vrai"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_013",
  "cat": "drogues",
  "name": "La kétamine",
  "level": "adulte",
  "levels": [
   {
    "q": "À l'origine, dans quel domaine médical la kétamine est-elle utilisée ? Comme ___ ?",
    "c": [
     "anesthésique",
     "vaccin",
     "antibiotique",
     "vitamine"
    ],
    "a": "anesthésique"
   },
   {
    "q": "Sur quels patients, en plus des humains, la kétamine est-elle employée en médecine ? Les ___ ?",
    "c": [
     "animaux",
     "robots",
     "plantes",
     "poissons seuls"
    ],
    "a": "animaux"
   },
   {
    "q": "Quel état de déconnexion la kétamine provoque-t-elle à dose récréative ? Un état ___ ?",
    "c": [
     "dissociatif",
     "euphorique simple",
     "somnifère pur",
     "stimulant pur"
    ],
    "a": "dissociatif"
   },
   {
    "q": "Comment appelle-t-on l'expérience de coupure totale de la réalité sous forte kétamine ? Le « K-___ » ?",
    "c": [
     "hole",
     "trip",
     "boom",
     "shot"
    ],
    "a": "hole"
   },
   {
    "q": "Pour quel trouble psychiatrique la kétamine est-elle étudiée comme traitement innovant ? La ___ résistante ?",
    "c": [
     "dépression",
     "myopie",
     "surdité",
     "carie"
    ],
    "a": "dépression"
   },
   {
    "q": "Quel organe l'usage chronique de kétamine peut-il gravement endommager ? La ___ (cystite) ?",
    "c": [
     "vessie",
     "rate",
     "langue",
     "rétine"
    ],
    "a": "vessie"
   },
   {
    "q": "Sous quelle forme la kétamine de rue se sniffe-t-elle souvent ? Une ___ ?",
    "c": [
     "poudre",
     "feuille",
     "résine",
     "gaz"
    ],
    "a": "poudre"
   },
   {
    "q": "En quelle année la kétamine a-t-elle été synthétisée pour la première fois ?",
    "a": "1962"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_014",
  "cat": "drogues",
  "name": "Le crack",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle drogue le crack est-il une forme fumable ? La ___ ?",
    "c": [
     "cocaïne",
     "héroïne",
     "MDMA",
     "kétamine"
    ],
    "a": "cocaïne"
   },
   {
    "q": "Sous quelle forme solide le crack se présente-t-il ? Des petits ___ (cailloux) ?",
    "c": [
     "cailloux",
     "comprimés",
     "buvards",
     "cristaux liquides"
    ],
    "a": "cailloux"
   },
   {
    "q": "Comment consomme-t-on le crack ? On le ___ ?",
    "c": [
     "fume",
     "boit",
     "mange",
     "applique"
    ],
    "a": "fume"
   },
   {
    "q": "Quel bruit de craquement à la combustion a donné son nom au crack ? Le ___ ?",
    "c": [
     "craquement",
     "sifflement",
     "grésillement doux",
     "silence"
    ],
    "a": "craquement"
   },
   {
    "q": "Quelle très forte propriété rend le crack extrêmement dangereux ? Une ___ rapide et intense ?",
    "c": [
     "dépendance",
     "guérison",
     "immunité",
     "satiété"
    ],
    "a": "dépendance"
   },
   {
    "q": "Pourquoi les effets du crack sont-ils très brefs et poussent à reconsommer ? Ils sont ___ ?",
    "c": [
     "courts",
     "éternels",
     "d'une journée",
     "hebdomadaires"
    ],
    "a": "courts"
   },
   {
    "q": "Quel organe vital le crack met-il gravement en danger, comme la cocaïne ? Le ___ ?",
    "c": [
     "cœur",
     "genou",
     "coude",
     "cheveu"
    ],
    "a": "cœur"
   },
   {
    "q": "Dans quelle décennie le crack a-t-il ravagé les grandes villes américaines ? Les années ___ ?",
    "c": [
     "1980",
     "1950",
     "2010",
     "1930"
    ],
    "a": "1980"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_015",
  "cat": "drogues",
  "name": "L'opium",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle fleur l'opium est-il extrait ? Le ___ ?",
    "c": [
     "pavot",
     "tournesol",
     "rose",
     "tulipe"
    ],
    "a": "pavot"
   },
   {
    "q": "Quel suc laiteux du pavot est récolté pour faire l'opium ? Le ___ ?",
    "c": [
     "latex",
     "nectar",
     "pollen",
     "sève de tronc"
    ],
    "a": "latex"
   },
   {
    "q": "Dans quel type d'établissement, au XIXe s., fumait-on l'opium ? Une ___ à opium ?",
    "c": [
     "fumerie",
     "cave",
     "grange",
     "usine"
    ],
    "a": "fumerie"
   },
   {
    "q": "Quel effet principal l'opium procure-t-il ? Un effet ___ (antidouleur, euphorie) ?",
    "c": [
     "sédatif",
     "stimulant",
     "psychédélique",
     "diurétique"
    ],
    "a": "sédatif"
   },
   {
    "q": "Quels puissants antidouleurs médicaux sont dérivés de l'opium ? Les ___ ?",
    "c": [
     "opiacés",
     "antibiotiques",
     "vaccins",
     "vitamines"
    ],
    "a": "opiacés"
   },
   {
    "q": "Quelles guerres du XIXe s. ont opposé la Chine au Royaume-Uni à propos de ce commerce ? Les guerres de l'___ ?",
    "c": [
     "opium",
     "thé",
     "soie",
     "riz"
    ],
    "a": "opium"
   },
   {
    "q": "Quel puissant antidouleur, isolé de l'opium au XIXe s., est encore utilisé à l'hôpital ? La ___ ?",
    "c": [
     "morphine",
     "aspirine",
     "pénicilline",
     "insuline"
    ],
    "a": "morphine"
   },
   {
    "q": "En quel millénaire, avant J.-C., le pavot était-il déjà cultivé (Sumer) ? Le ___e millénaire av. J.-C. ?",
    "c": [
     "3",
     "1",
     "5",
     "10"
    ],
    "a": "3"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_016",
  "cat": "drogues",
  "name": "La morphine",
  "level": "adulte",
  "levels": [
   {
    "q": "Dans quel lieu la morphine est-elle utilisée pour soulager la douleur ? L'___ ?",
    "c": [
     "hôpital",
     "école",
     "stade",
     "cinéma"
    ],
    "a": "hôpital"
   },
   {
    "q": "Contre quel symptôme la morphine est-elle prescrite ? La ___ intense ?",
    "c": [
     "douleur",
     "fièvre",
     "toux légère",
     "démangeaison"
    ],
    "a": "douleur"
   },
   {
    "q": "De quelle substance végétale la morphine est-elle dérivée ? L'___ ?",
    "c": [
     "opium",
     "café",
     "cacao",
     "houblon"
    ],
    "a": "opium"
   },
   {
    "q": "À quelle famille d'antidouleurs puissants la morphine appartient-elle ? Les ___ ?",
    "c": [
     "opiacés",
     "anti-inflammatoires",
     "antibiotiques",
     "antihistaminiques"
    ],
    "a": "opiacés"
   },
   {
    "q": "Quel risque, en cas de surdosage de morphine, menace la respiration ? Une ___ respiratoire ?",
    "c": [
     "dépression",
     "accélération",
     "allergie cutanée",
     "crampe"
    ],
    "a": "dépression"
   },
   {
    "q": "De quel dieu grec du sommeil et des rêves la morphine tire-t-elle son nom ? ___ ?",
    "c": [
     "Morphée",
     "Zeus",
     "Apollon",
     "Hermès"
    ],
    "a": "Morphée"
   },
   {
    "q": "Quel médicament d'urgence peut inverser un surdosage de morphine ? La ___ ?",
    "c": [
     "naloxone",
     "aspirine",
     "insuline",
     "cortisone"
    ],
    "a": "naloxone"
   },
   {
    "q": "En quel début de siècle la morphine a-t-elle été isolée de l'opium ? Le XIX___ ?",
    "c": [
     "e",
     "Ier",
     "IIe",
     "IIIe"
    ],
    "a": "e"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_017",
  "cat": "drogues",
  "name": "Les benzodiazépines",
  "level": "adulte",
  "levels": [
   {
    "q": "Contre quel trouble les benzodiazépines sont-elles surtout prescrites ? L'___ ?",
    "c": [
     "anxiété",
     "myopie",
     "carie",
     "fracture"
    ],
    "a": "anxiété"
   },
   {
    "q": "Quel autre effet, favorisant le sommeil, ont les benzodiazépines ? Elles sont ___ ?",
    "c": [
     "somnifères",
     "stimulantes",
     "hallucinogènes",
     "diurétiques"
    ],
    "a": "somnifères"
   },
   {
    "q": "Ces médicaments ne s'obtiennent que sur ___ ? (délivrance encadrée)",
    "c": [
     "ordonnance",
     "internet libre",
     "au bar",
     "en boîte"
    ],
    "a": "ordonnance"
   },
   {
    "q": "Pourquoi ne faut-il pas mélanger benzodiazépines et alcool ? Risque de ___ respiratoire ?",
    "c": [
     "dépression",
     "excitation",
     "allergie",
     "acné"
    ],
    "a": "dépression"
   },
   {
    "q": "Que développe le corps à l'usage prolongé, imposant d'augmenter les doses ? Une ___ ?",
    "c": [
     "tolérance",
     "immunité totale",
     "guérison",
     "allergie"
    ],
    "a": "tolérance"
   },
   {
    "q": "Quel calmant célèbre, le Valium, appartient-il à cette famille ? Le ___ ?",
    "c": [
     "diazépam",
     "paracétamol",
     "ibuprofène",
     "amoxicilline"
    ],
    "a": "diazépam"
   },
   {
    "q": "Comment doit-on arrêter les benzodiazépines pour éviter un sevrage brutal ? De façon ___ (progressive) ?",
    "c": [
     "progressive",
     "immédiate",
     "aléatoire",
     "doublée"
    ],
    "a": "progressive"
   },
   {
    "q": "En quelle année la première benzodiazépine (le chlordiazépoxide) a-t-elle été commercialisée ?",
    "a": "1960"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_018",
  "cat": "drogues",
  "name": "Les antidépresseurs",
  "level": "adulte",
  "levels": [
   {
    "q": "Contre quelle maladie les antidépresseurs sont-ils prescrits ? La ___ ?",
    "c": [
     "dépression",
     "grippe",
     "otite",
     "entorse"
    ],
    "a": "dépression"
   },
   {
    "q": "Sur quel organe agissent les antidépresseurs ? Le ___ ?",
    "c": [
     "cerveau",
     "genou",
     "foie seul",
     "poumon"
    ],
    "a": "cerveau"
   },
   {
    "q": "Les antidépresseurs sont-ils des drogues récréatives ou des médicaments prescrits ?",
    "c": [
     "médicaments",
     "drogues festives",
     "compléments alimentaires",
     "vaccins"
    ],
    "a": "médicaments"
   },
   {
    "q": "Quel neurotransmetteur du bien-être les antidépresseurs les plus courants augmentent-ils ? La ___ ?",
    "c": [
     "sérotonine",
     "insuline",
     "kératine",
     "histamine"
    ],
    "a": "sérotonine"
   },
   {
    "q": "Au bout de combien de temps les antidépresseurs commencent-ils à agir ? Plusieurs ___ ?",
    "c": [
     "semaines",
     "secondes",
     "années",
     "minutes"
    ],
    "a": "semaines"
   },
   {
    "q": "Comment appelle-t-on la grande famille d'antidépresseurs « ISRS » ? Inhibiteurs de la recapture de la ___ ?",
    "c": [
     "sérotonine",
     "dopamine",
     "adrénaline",
     "insuline"
    ],
    "a": "sérotonine"
   },
   {
    "q": "Que ne faut-il jamais faire brutalement avec un antidépresseur, sous peine d'effets de sevrage ? L'___ ?",
    "c": [
     "arrêter",
     "diluer",
     "chauffer",
     "congeler"
    ],
    "a": "arrêter"
   },
   {
    "q": "En quelle année le Prozac (fluoxétine), antidépresseur emblématique, a-t-il été mis sur le marché américain ?",
    "a": "1987"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_019",
  "cat": "drogues",
  "name": "La mescaline",
  "level": "adulte",
  "levels": [
   {
    "q": "De quel type de plante la mescaline est-elle extraite ? Un ___ ?",
    "c": [
     "cactus",
     "champignon",
     "arbre",
     "algue"
    ],
    "a": "cactus"
   },
   {
    "q": "Quel type d'effets la mescaline provoque-t-elle ? Des effets ___ ?",
    "c": [
     "psychédéliques",
     "sédatifs",
     "stimulants purs",
     "opiacés"
    ],
    "a": "psychédéliques"
   },
   {
    "q": "Quel cactus mexicain contient de la mescaline et est utilisé rituellement ? Le ___ ?",
    "c": [
     "peyotl",
     "aloès",
     "figuier",
     "saguaro"
    ],
    "a": "peyotl"
   },
   {
    "q": "Par quels peuples la mescaline est-elle utilisée traditionnellement en Amérique ? Les peuples ___ ?",
    "c": [
     "amérindiens",
     "vikings",
     "romains",
     "mongols"
    ],
    "a": "amérindiens"
   },
   {
    "q": "Quel écrivain a raconté son expérience à la mescaline dans « Les Portes de la perception » ? Aldous ___ ?",
    "c": [
     "Huxley",
     "Orwell",
     "Tolkien",
     "Verne"
    ],
    "a": "Huxley"
   },
   {
    "q": "Quel autre cactus sud-américain, en colonne, contient aussi de la mescaline ? Le San ___ ?",
    "c": [
     "Pedro",
     "Juan",
     "Diego",
     "Carlos"
    ],
    "a": "Pedro"
   },
   {
    "q": "Combien d'heures, environ, peut durer un trip à la mescaline, particulièrement long ?",
    "c": [
     "12",
     "1",
     "48",
     "3"
    ],
    "a": "12"
   },
   {
    "q": "En quelle année, à la fin du XIXe s., la mescaline a-t-elle été isolée pour la première fois ?",
    "a": "1897"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_020",
  "cat": "drogues",
  "name": "Le DMT",
  "level": "adulte",
  "levels": [
   {
    "q": "Quel type d'effets le DMT provoque-t-il, très intenses et brefs ? Des effets ___ ?",
    "c": [
     "psychédéliques",
     "sédatifs",
     "stimulants doux",
     "opiacés"
    ],
    "a": "psychédéliques"
   },
   {
    "q": "Dans quelle boisson rituelle amazonienne le DMT est-il actif ? L'___ ?",
    "c": [
     "ayahuasca",
     "maté",
     "chicha",
     "guarana"
    ],
    "a": "ayahuasca"
   },
   {
    "q": "Comment consomme-t-on le DMT pur pour un effet éclair ? On le ___ ?",
    "c": [
     "fume",
     "boit seulement",
     "applique",
     "renifle en poudre sèche"
    ],
    "a": "fume"
   },
   {
    "q": "Combien de minutes, très peu, dure environ un trip de DMT fumé ?",
    "c": [
     "15",
     "180",
     "600",
     "1"
    ],
    "a": "15"
   },
   {
    "q": "Le DMT est-il présent naturellement, en traces, dans de nombreuses plantes ? Vrai ou faux ?",
    "c": [
     "vrai",
     "faux",
     "seulement synthétique",
     "seulement animal"
    ],
    "a": "vrai"
   },
   {
    "q": "Par quels peuples d'Amazonie l'ayahuasca est-elle utilisée traditionnellement ? Des peuples ___ ?",
    "c": [
     "autochtones",
     "vikings",
     "aztèques seuls",
     "coloniaux"
    ],
    "a": "autochtones"
   },
   {
    "q": "Quel type d'enzyme la liane d'ayahuasca inhibe-t-elle pour rendre le DMT actif par voie orale ? Une ___ ?",
    "c": [
     "MAO",
     "protéase",
     "lipase",
     "amylase"
    ],
    "a": "MAO"
   },
   {
    "q": "En quelle année le DMT a-t-il été synthétisé pour la première fois en laboratoire ?",
    "a": "1931"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_021",
  "cat": "drogues",
  "name": "Le poppers",
  "level": "adulte",
  "levels": [
   {
    "q": "Sous quelle forme le poppers se consomme-t-il ? En ___ (inhalation) ?",
    "c": [
     "vapeur",
     "comprimé",
     "injection",
     "poudre"
    ],
    "a": "vapeur"
   },
   {
    "q": "Quel effet bref le poppers provoque-t-il ? Une ___ des vaisseaux (bouffée de chaleur) ?",
    "c": [
     "dilatation",
     "contraction totale",
     "coagulation",
     "cristallisation"
    ],
    "a": "dilatation"
   },
   {
    "q": "À quelle famille chimique le poppers appartient-il ? Les nitrites d'___ ?",
    "c": [
     "alkyle",
     "sodium",
     "calcium",
     "potassium"
    ],
    "a": "alkyle"
   },
   {
    "q": "Combien de temps, très court, durent les effets du poppers ? Quelques ___ ?",
    "c": [
     "secondes",
     "heures",
     "jours",
     "semaines"
    ],
    "a": "secondes"
   },
   {
    "q": "Quel danger existe si l'on avale du poppers au lieu de l'inhaler ? Une ___ grave ?",
    "c": [
     "intoxication",
     "guérison",
     "immunité",
     "digestion normale"
    ],
    "a": "intoxication"
   },
   {
    "q": "Sur quel organe le poppers a-t-il un effet immédiat en dilatant les vaisseaux ? Le ___ ?",
    "c": [
     "cœur",
     "genou",
     "coude",
     "ongle"
    ],
    "a": "cœur"
   },
   {
    "q": "Avec quel médicament cardiaque (dérivés nitrés) le poppers est-il dangereusement incompatible ? Le ___ ?",
    "c": [
     "Viagra",
     "paracétamol",
     "aspirine",
     "insuline"
    ],
    "a": "Viagra"
   },
   {
    "q": "En quel siècle les nitrites, à l'origine du poppers, ont-ils été utilisés en médecine cardiaque ? Le XIX___ ?",
    "c": [
     "e",
     "Ier",
     "IIe",
     "IIIe"
    ],
    "a": "e"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_022",
  "cat": "drogues",
  "name": "La salvia",
  "level": "adulte",
  "levels": [
   {
    "q": "La salvia est une plante de la famille de quelle herbe aromatique ? La ___ ?",
    "c": [
     "sauge",
     "menthe seule",
     "thym",
     "basilic"
    ],
    "a": "sauge"
   },
   {
    "q": "De quel pays d'Amérique centrale la salvia est-elle originaire ? Le ___ ?",
    "c": [
     "Mexique",
     "Canada",
     "Chili",
     "Cuba"
    ],
    "a": "Mexique"
   },
   {
    "q": "Quel type d'effets, brefs mais intenses, la salvia provoque-t-elle ? Des effets ___ ?",
    "c": [
     "hallucinogènes",
     "sédatifs longs",
     "stimulants",
     "opiacés"
    ],
    "a": "hallucinogènes"
   },
   {
    "q": "Par quel peuple la salvia était-elle utilisée rituellement ? Les ___ (Mazatèques) ?",
    "c": [
     "chamans",
     "soldats",
     "marins",
     "rois"
    ],
    "a": "chamans"
   },
   {
    "q": "Comment consomme-t-on souvent les feuilles de salvia pour un effet rapide ? On les ___ ?",
    "c": [
     "fume",
     "plante",
     "arrose",
     "expose"
    ],
    "a": "fume"
   },
   {
    "q": "Combien de minutes, très peu, durent les effets les plus forts de la salvia fumée ?",
    "c": [
     "10",
     "120",
     "600",
     "1"
    ],
    "a": "10"
   },
   {
    "q": "Quel nom scientifique porte la salvia hallucinogène ? Salvia ___ ?",
    "c": [
     "divinorum",
     "officinalis",
     "vulgaris",
     "alba"
    ],
    "a": "divinorum"
   },
   {
    "q": "Quelle molécule active puissante contient la salvia ? La salvinorine ___ ?",
    "c": [
     "A",
     "B",
     "C",
     "Z"
    ],
    "a": "A"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_023",
  "cat": "drogues",
  "name": "Les opiacés",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle plante la plupart des opiacés sont-ils dérivés ? Le ___ ?",
    "c": [
     "pavot",
     "chanvre",
     "coca",
     "tabac"
    ],
    "a": "pavot"
   },
   {
    "q": "Contre quoi les opiacés sont-ils utilisés en médecine ? La ___ ?",
    "c": [
     "douleur",
     "fièvre légère",
     "toux sèche seule",
     "acné"
    ],
    "a": "douleur"
   },
   {
    "q": "Quel puissant opiacé médical est extrait directement de l'opium ? La ___ ?",
    "c": [
     "morphine",
     "aspirine",
     "pénicilline",
     "insuline"
    ],
    "a": "morphine"
   },
   {
    "q": "Quelle fonction vitale un surdosage d'opiacés ralentit-il dangereusement ? La ___ ?",
    "c": [
     "respiration",
     "digestion",
     "vue",
     "audition"
    ],
    "a": "respiration"
   },
   {
    "q": "Quel médicament d'urgence inverse une overdose d'opiacés ? La ___ ?",
    "c": [
     "naloxone",
     "aspirine",
     "insuline",
     "cortisone"
    ],
    "a": "naloxone"
   },
   {
    "q": "Quel opiacé de synthèse très puissant est responsable de nombreuses overdoses aux USA ? Le ___ ?",
    "c": [
     "fentanyl",
     "paracétamol",
     "ibuprofène",
     "diazépam"
    ],
    "a": "fentanyl"
   },
   {
    "q": "Comment appelle-t-on la crise sanitaire des opiacés aux États-Unis ? La crise des ___ ?",
    "c": [
     "opioïdes",
     "vitamines",
     "vaccins",
     "antibiotiques"
    ],
    "a": "opioïdes"
   },
   {
    "q": "Combien de fois plus puissant que la morphine le fentanyl est-il, environ ?",
    "a": "100"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_024",
  "cat": "drogues",
  "name": "La codéine",
  "level": "adulte",
  "levels": [
   {
    "q": "Dans quel médicament courant la codéine est-elle présente ? Un ___ (antitussif/antidouleur) ?",
    "c": [
     "sirop",
     "vaccin",
     "pansement",
     "collyre"
    ],
    "a": "sirop"
   },
   {
    "q": "Contre quels deux symptômes la codéine est-elle utilisée ? La toux et la ___ ?",
    "c": [
     "douleur",
     "fièvre seule",
     "fatigue",
     "faim"
    ],
    "a": "douleur"
   },
   {
    "q": "À quelle famille de substances la codéine appartient-elle ? Les ___ ?",
    "c": [
     "opiacés",
     "vitamines",
     "antibiotiques",
     "antihistaminiques"
    ],
    "a": "opiacés"
   },
   {
    "q": "En quel composé plus puissant le foie transforme-t-il une partie de la codéine ? La ___ ?",
    "c": [
     "morphine",
     "caféine",
     "nicotine",
     "insuline"
    ],
    "a": "morphine"
   },
   {
    "q": "Depuis 2017 en France, comment la codéine s'obtient-elle, pour limiter les abus ? Sur ___ ?",
    "c": [
     "ordonnance",
     "internet libre",
     "en boîte de nuit",
     "au supermarché"
    ],
    "a": "ordonnance"
   },
   {
    "q": "Quel mélange détourné de sirop codéiné et de soda est appelé « ___ » (purple drank) ?",
    "c": [
     "lean",
     "speed",
     "ice",
     "molly"
    ],
    "a": "lean"
   },
   {
    "q": "Quel risque, comme les autres opiacés, la codéine à forte dose fait-elle courir ? Une ___ respiratoire ?",
    "c": [
     "dépression",
     "excitation",
     "allergie cutanée",
     "crampe"
    ],
    "a": "dépression"
   },
   {
    "q": "En quel début de siècle la codéine a-t-elle été isolée de l'opium ? Le XIX___ ?",
    "c": [
     "e",
     "Ier",
     "IIe",
     "IIIe"
    ],
    "a": "e"
   }
  ],
  "rw": true
 },
 {
  "id": "drogues_025",
  "cat": "drogues",
  "name": "La nicotine",
  "level": "adulte",
  "levels": [
   {
    "q": "Dans quelle plante la nicotine est-elle naturellement présente ? Le ___ ?",
    "c": [
     "tabac",
     "chanvre",
     "pavot",
     "café"
    ],
    "a": "tabac"
   },
   {
    "q": "Quel puissant effet la nicotine a-t-elle, expliquant la difficulté à arrêter de fumer ? Une forte ___ ?",
    "c": [
     "dépendance",
     "immunité",
     "satiété",
     "guérison"
    ],
    "a": "dépendance"
   },
   {
    "q": "Dans quel dispositif électronique inhale-t-on de la nicotine sans combustion ? La ___ ?",
    "c": [
     "cigarette électronique",
     "montre",
     "radio",
     "lampe"
    ],
    "a": "cigarette électronique"
   },
   {
    "q": "Sous quelle forme collée sur la peau la nicotine aide-t-elle au sevrage ? Un ___ ?",
    "c": [
     "patch",
     "collier",
     "bracelet lumineux",
     "tatouage"
    ],
    "a": "patch"
   },
   {
    "q": "Quel effet la nicotine a-t-elle sur le rythme cardiaque ? Elle l'___ ?",
    "c": [
     "accélère",
     "arrête",
     "n'a aucun effet",
     "divise par deux"
    ],
    "a": "accélère"
   },
   {
    "q": "La nicotine est-elle le principal responsable des cancers du tabac, ou est-ce surtout la combustion et le goudron ? La ___ ?",
    "c": [
     "combustion",
     "nicotine seule",
     "salive",
     "chaleur douce"
    ],
    "a": "combustion"
   },
   {
    "q": "Quel neurotransmetteur du plaisir la nicotine libère-t-elle dans le cerveau ? La ___ ?",
    "c": [
     "dopamine",
     "insuline",
     "kératine",
     "mélatonine"
    ],
    "a": "dopamine"
   },
   {
    "q": "En combien de secondes, environ, la nicotine d'une bouffée atteint-elle le cerveau ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_001",
  "cat": "alcool",
  "name": "Le vin rouge",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle couleur est le vin rouge ?",
    "c": [
     "rouge",
     "blanc",
     "vert",
     "bleu"
    ],
    "a": "rouge"
   },
   {
    "q": "De quel fruit fait-on le vin ? Le ___ ?",
    "c": [
     "raisin",
     "pomme",
     "prune",
     "cassis"
    ],
    "a": "raisin"
   },
   {
    "q": "Quelle région du sud-ouest de la France est mondialement réputée pour ses vins rouges ?",
    "c": [
     "Bordeaux",
     "Bretagne",
     "Normandie",
     "Alsace"
    ],
    "a": "Bordeaux"
   },
   {
    "q": "Comment appelle-t-on la science et l'art de la dégustation du vin ? L'___ ?",
    "c": [
     "œnologie",
     "astrologie",
     "zoologie",
     "géologie"
    ],
    "a": "œnologie"
   },
   {
    "q": "Dans quel récipient en bois vieillissent souvent les grands vins rouges ? La ___ ?",
    "c": [
     "barrique",
     "bouteille",
     "citerne",
     "gourde"
    ],
    "a": "barrique"
   },
   {
    "q": "Quel cépage rouge, roi du Bordelais, est le plus planté au monde ? Le Cabernet ___ ?",
    "c": [
     "Sauvignon",
     "Franc",
     "Merlot",
     "Noir"
    ],
    "a": "Sauvignon"
   },
   {
    "q": "Quel antioxydant du vin rouge est étudié pour de possibles effets cardiovasculaires ? Le ___ ?",
    "c": [
     "resvératrol",
     "cholestérol",
     "paracétamol",
     "menthol"
    ],
    "a": "resvératrol"
   },
   {
    "q": "Combien de millions d'hectolitres de vin, environ, la France produit-elle par an ?",
    "a": "45"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_002",
  "cat": "alcool",
  "name": "Le vin blanc",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle couleur est le vin blanc ?",
    "c": [
     "jaune pâle",
     "rouge",
     "noir",
     "bleu"
    ],
    "a": "jaune pâle"
   },
   {
    "q": "À quelle température sert-on le vin blanc, plutôt que chambré ? ___ ?",
    "c": [
     "frais",
     "brûlant",
     "tiède",
     "bouillant"
    ],
    "a": "frais"
   },
   {
    "q": "Quel cépage blanc est le plus célèbre pour les vins de Bourgogne ? Le ___ ?",
    "c": [
     "chardonnay",
     "merlot",
     "syrah",
     "gamay"
    ],
    "a": "chardonnay"
   },
   {
    "q": "Quelle région du nord-est de la France est réputée pour ses vins blancs et son riesling ? L'___ ?",
    "c": [
     "Alsace",
     "Provence",
     "Corse",
     "Savoie"
    ],
    "a": "Alsace"
   },
   {
    "q": "Avec quels aliments accorde-t-on classiquement le vin blanc sec ? Les ___ ?",
    "c": [
     "fruits de mer",
     "steaks",
     "chocolats",
     "curry"
    ],
    "a": "fruits de mer"
   },
   {
    "q": "Quel vin blanc liquoreux de Bordeaux est un vin de dessert prestigieux ? Le ___ ?",
    "c": [
     "sauternes",
     "muscadet",
     "chablis",
     "sancerre"
    ],
    "a": "sauternes"
   },
   {
    "q": "Quel champignon « noble » concentre les sucres des raisins des grands liquoreux ? La pourriture ___ ?",
    "c": [
     "noble",
     "grise",
     "verte",
     "sèche"
    ],
    "a": "noble"
   },
   {
    "q": "À quelle température, en degrés, sert-on idéalement un vin blanc sec ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_003",
  "cat": "alcool",
  "name": "La bière",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelle céréale maltée est la base de la bière ? L'___ ?",
    "c": [
     "orge",
     "maïs",
     "riz",
     "seigle"
    ],
    "a": "orge"
   },
   {
    "q": "Quelle plante donne l'amertume et l'arôme de la bière ? Le ___ ?",
    "c": [
     "houblon",
     "lierre",
     "romarin",
     "basilic"
    ],
    "a": "houblon"
   },
   {
    "q": "Quelle mousse blanche couronne un verre de bière ? La ___ ?",
    "c": [
     "mousse",
     "crème",
     "buée",
     "écume rouge"
    ],
    "a": "mousse"
   },
   {
    "q": "Quel type de bière, fermentée à basse température, est doré et léger ? La ___ ?",
    "c": [
     "lager",
     "stout",
     "porter",
     "gueuze"
    ],
    "a": "lager"
   },
   {
    "q": "Quel micro-organisme transforme le sucre du moût en alcool ? La ___ ?",
    "c": [
     "levure",
     "algue",
     "moisissure",
     "bactérie"
    ],
    "a": "levure"
   },
   {
    "q": "Quelle unité mesure l'amertume d'une bière ? L'___ (International Bitterness Units) ?",
    "c": [
     "IBU",
     "ABV",
     "SRM",
     "EBC"
    ],
    "a": "IBU"
   },
   {
    "q": "Quel pays d'Europe centrale détient le record mondial de consommation de bière par habitant ? La ___ ?",
    "c": [
     "Tchéquie",
     "Grèce",
     "Italie",
     "Suède"
    ],
    "a": "Tchéquie"
   },
   {
    "q": "Combien de litres de bière, environ, un Tchèque boit-il en moyenne par an, record mondial ?",
    "a": "180"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_004",
  "cat": "alcool",
  "name": "Le champagne",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle région française le champagne tient-il son nom ?",
    "c": [
     "Champagne",
     "Bourgogne",
     "Provence",
     "Loire"
    ],
    "a": "Champagne"
   },
   {
    "q": "Qu'y a-t-il dans le champagne qui pétille dans le verre ? Des ___ ?",
    "c": [
     "bulles",
     "glaçons",
     "grumeaux",
     "graines"
    ],
    "a": "bulles"
   },
   {
    "q": "Dans quel type de verre allongé sert-on souvent le champagne ? La ___ ?",
    "c": [
     "flûte",
     "chope",
     "tasse",
     "louche"
    ],
    "a": "flûte"
   },
   {
    "q": "Quel gaz forme les bulles du champagne ? Le dioxyde de ___ ?",
    "c": [
     "carbone",
     "azote",
     "hélium",
     "oxygène"
    ],
    "a": "carbone"
   },
   {
    "q": "Quel moine bénédictin est légendairement associé à l'élaboration du champagne ? Dom ___ ?",
    "c": [
     "Pérignon",
     "Ruinart",
     "Bollinger",
     "Mercier"
    ],
    "a": "Pérignon"
   },
   {
    "q": "Comment appelle-t-on la méthode de double fermentation en bouteille du champagne ? La méthode ___ ?",
    "c": [
     "champenoise",
     "bourguignonne",
     "charmat",
     "solera"
    ],
    "a": "champenoise"
   },
   {
    "q": "Comment appelle-t-on l'opération d'éjection du dépôt avant bouchage final ? Le ___ ?",
    "c": [
     "dégorgement",
     "remuage",
     "collage",
     "soutirage"
    ],
    "a": "dégorgement"
   },
   {
    "q": "Combien de bars de pression, environ, règnent dans une bouteille de champagne ?",
    "a": "6"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_005",
  "cat": "alcool",
  "name": "Le whisky",
  "level": "adulte",
  "levels": [
   {
    "q": "À partir de quelles céréales distille-t-on le whisky ? Des ___ ?",
    "c": [
     "céréales",
     "fruits",
     "légumes",
     "fleurs"
    ],
    "a": "céréales"
   },
   {
    "q": "Quel pays, avec l'Irlande, revendique l'origine du whisky ? L'___ ?",
    "c": [
     "Écosse",
     "Espagne",
     "Grèce",
     "Portugal"
    ],
    "a": "Écosse"
   },
   {
    "q": "Dans quel récipient en bois le whisky vieillit-il pour se colorer ? Le fût de ___ ?",
    "c": [
     "chêne",
     "pin",
     "hêtre",
     "bambou"
    ],
    "a": "chêne"
   },
   {
    "q": "Comment appelle-t-on un whisky écossais issu d'une seule distillerie et d'orge maltée ? Un single ___ ?",
    "c": [
     "malt",
     "grain",
     "blend",
     "cask"
    ],
    "a": "malt"
   },
   {
    "q": "Quel goût fumé caractérise les whiskies de l'île d'Islay ? Le goût de ___ ?",
    "c": [
     "tourbe",
     "vanille",
     "miel",
     "menthe"
    ],
    "a": "tourbe"
   },
   {
    "q": "Quel whisky américain est fait majoritairement de maïs ? Le ___ ?",
    "c": [
     "bourbon",
     "scotch",
     "rye",
     "poitín"
    ],
    "a": "bourbon"
   },
   {
    "q": "Comment appelle-t-on la part du whisky qui s'évapore du fût pendant le vieillissement ? La part des ___ ?",
    "c": [
     "anges",
     "démons",
     "rois",
     "moines"
    ],
    "a": "anges"
   },
   {
    "q": "Combien d'années, au minimum, un whisky doit-il vieillir en fût pour être appelé « Scotch » ?",
    "a": "3"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_006",
  "cat": "alcool",
  "name": "La vodka",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle couleur est la vodka classique ?",
    "c": [
     "transparente",
     "brune",
     "verte",
     "rouge"
    ],
    "a": "transparente"
   },
   {
    "q": "Quels pays de l'Est revendiquent l'origine de la vodka ? La Russie et la ___ ?",
    "c": [
     "Pologne",
     "Grèce",
     "Italie",
     "Espagne"
    ],
    "a": "Pologne"
   },
   {
    "q": "À partir de quel tubercule, souvent, distille-t-on la vodka ? La ___ de terre ?",
    "c": [
     "pomme",
     "canne",
     "betterave rouge",
     "carotte"
    ],
    "a": "pomme"
   },
   {
    "q": "Dans quel cocktail rouge à base de jus de tomate trouve-t-on de la vodka ? Le Bloody ___ ?",
    "c": [
     "Mary",
     "Sunday",
     "Caesar",
     "Rose"
    ],
    "a": "Mary"
   },
   {
    "q": "Que signifie le mot russe « vodka », diminutif d'un mot voulant dire ___ ?",
    "c": [
     "eau",
     "feu",
     "glace",
     "or"
    ],
    "a": "eau"
   },
   {
    "q": "Quel procédé, répété, rend la vodka très pure et neutre ? La ___ ?",
    "c": [
     "distillation",
     "fermentation",
     "macération",
     "infusion"
    ],
    "a": "distillation"
   },
   {
    "q": "Quel cocktail associe vodka, liqueur de café et crème, cher au personnage « The Dude » ? Le White ___ ?",
    "c": [
     "Russian",
     "Lady",
     "Cosmo",
     "Sour"
    ],
    "a": "Russian"
   },
   {
    "q": "Quel degré d'alcool, en pourcentage, titre classiquement une vodka standard ?",
    "a": "40"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_007",
  "cat": "alcool",
  "name": "Le rhum",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle plante sucrée le rhum est-il distillé ? La canne à ___ ?",
    "c": [
     "sucre",
     "sel",
     "miel",
     "sève"
    ],
    "a": "sucre"
   },
   {
    "q": "Dans quelle zone tropicale, les Caraïbes, le rhum est-il roi ? Les ___ ?",
    "c": [
     "Antilles",
     "Alpes",
     "Andes",
     "Balkans"
    ],
    "a": "Antilles"
   },
   {
    "q": "Quel cocktail cubain associe rhum, menthe, citron vert et sucre ? Le ___ ?",
    "c": [
     "mojito",
     "spritz",
     "margarita",
     "negroni"
    ],
    "a": "mojito"
   },
   {
    "q": "Comment appelle-t-on le rhum vieilli en fût, ambré et rond ? Le rhum ___ ?",
    "c": [
     "vieux",
     "blanc",
     "agricole seulement",
     "bleu"
    ],
    "a": "vieux"
   },
   {
    "q": "Quel rhum est distillé directement à partir du jus de canne frais ? Le rhum ___ ?",
    "c": [
     "agricole",
     "industriel",
     "épicé",
     "arrangé"
    ],
    "a": "agricole"
   },
   {
    "q": "À quel univers, celui des flibustiers, le rhum est-il associé dans l'imaginaire ? Les ___ ?",
    "c": [
     "pirates",
     "chevaliers",
     "cosmonautes",
     "moines"
    ],
    "a": "pirates"
   },
   {
    "q": "De quel résidu de la fabrication du sucre est souvent tiré le rhum industriel ? La ___ ?",
    "c": [
     "mélasse",
     "farine",
     "cendre",
     "pulpe sèche"
    ],
    "a": "mélasse"
   },
   {
    "q": "Quel degré minimum, en pourcentage d'alcool, titre en général un rhum standard ?",
    "a": "40"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_008",
  "cat": "alcool",
  "name": "La tequila",
  "level": "adulte",
  "levels": [
   {
    "q": "De quel pays la tequila est-elle originaire ?",
    "c": [
     "Mexique",
     "Espagne",
     "Pérou",
     "Chili"
    ],
    "a": "Mexique"
   },
   {
    "q": "De quelle plante bleue épineuse distille-t-on la tequila ? L'___ ?",
    "c": [
     "agave",
     "cactus",
     "aloès",
     "yucca"
    ],
    "a": "agave"
   },
   {
    "q": "Que met-on souvent sur la main avant un shot de tequila ? Du ___ ?",
    "c": [
     "sel",
     "sucre",
     "poivre",
     "safran"
    ],
    "a": "sel"
   },
   {
    "q": "Quel agrume mord-on après le shot de tequila ? Le ___ vert ?",
    "c": [
     "citron",
     "pamplemousse",
     "orange",
     "kiwi"
    ],
    "a": "citron"
   },
   {
    "q": "Dans quel cocktail givré de sel trouve-t-on de la tequila ? La ___ ?",
    "c": [
     "margarita",
     "piña colada",
     "caipirinha",
     "daïquiri"
    ],
    "a": "margarita"
   },
   {
    "q": "Quelle ville mexicaine donne son nom à la tequila ?",
    "c": [
     "Tequila",
     "Cancún",
     "Oaxaca",
     "Puebla"
    ],
    "a": "Tequila"
   },
   {
    "q": "Quelle boisson mexicaine cousine, faite de divers agaves, est plus artisanale ? Le ___ ?",
    "c": [
     "mezcal",
     "pulque",
     "pisco",
     "cachaça"
    ],
    "a": "mezcal"
   },
   {
    "q": "Combien d'années, environ, met un agave bleu à mûrir avant d'être récolté pour la tequila ?",
    "a": "7"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_009",
  "cat": "alcool",
  "name": "Le gin",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelle petite baie violette parfume typiquement le gin ? La baie de ___ ?",
    "c": [
     "genièvre",
     "sureau",
     "cassis",
     "myrtille"
    ],
    "a": "genièvre"
   },
   {
    "q": "De quel pays le gin « London Dry » est-il emblématique ? Le ___-Uni ?",
    "c": [
     "Royaume",
     "États",
     "Pays",
     "Emirats"
    ],
    "a": "Royaume"
   },
   {
    "q": "Avec quelle eau gazeuse tonique mélange-t-on souvent le gin ? Le ___ ?",
    "c": [
     "tonic",
     "cola",
     "soda orange",
     "lait"
    ],
    "a": "tonic"
   },
   {
    "q": "Quel fruit garnit classiquement un gin tonic ? Une tranche de ___ ?",
    "c": [
     "citron",
     "banane",
     "melon",
     "pastèque"
    ],
    "a": "citron"
   },
   {
    "q": "Comment appelle-t-on les plantes et épices aromatisant le gin ? Les ___ ?",
    "c": [
     "botaniques",
     "minéraux",
     "colorants",
     "conservateurs"
    ],
    "a": "botaniques"
   },
   {
    "q": "Dans quel cocktail très sec, avec du vermouth, le gin est-il servi avec une olive ? Le ___ ?",
    "c": [
     "martini",
     "mojito",
     "spritz",
     "cuba libre"
    ],
    "a": "martini"
   },
   {
    "q": "De quel alcool néerlandais, le « genièvre », le gin descend-il historiquement ? Le ___ ?",
    "c": [
     "genever",
     "schnaps",
     "aquavit",
     "kirsch"
    ],
    "a": "genever"
   },
   {
    "q": "Quel degré d'alcool minimum, en pourcentage, un « London Dry Gin » doit-il titrer dans l'UE ?",
    "a": "37.5"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_010",
  "cat": "alcool",
  "name": "Le cognac",
  "level": "adulte",
  "levels": [
   {
    "q": "De quel fruit distillé le cognac est-il fait ? Le ___ (vin) ?",
    "c": [
     "raisin",
     "pomme",
     "poire",
     "prune"
    ],
    "a": "raisin"
   },
   {
    "q": "De quelle ville de Charente le cognac tient-il son nom ?",
    "c": [
     "Cognac",
     "Reims",
     "Dijon",
     "Cahors"
    ],
    "a": "Cognac"
   },
   {
    "q": "Quelle catégorie d'alcool est le cognac ? Une eau-de-___ ?",
    "c": [
     "vie",
     "rose",
     "source",
     "mer"
    ],
    "a": "vie"
   },
   {
    "q": "Dans quel type de fût le cognac vieillit-il ? Le fût de ___ ?",
    "c": [
     "chêne",
     "sapin",
     "olivier",
     "cerisier"
    ],
    "a": "chêne"
   },
   {
    "q": "Que signifie la mention « VS » sur une bouteille de cognac ? Very ___ ?",
    "c": [
     "Special",
     "Strong",
     "Sweet",
     "Smooth"
    ],
    "a": "Special"
   },
   {
    "q": "Que signifie le sigle « VSOP » : Very Superior Old ___ ?",
    "c": [
     "Pale",
     "Port",
     "Proof",
     "Peat"
    ],
    "a": "Pale"
   },
   {
    "q": "Comment appelle-t-on le maître qui assemble les eaux-de-vie du cognac ? Le maître de ___ ?",
    "c": [
     "chai",
     "cave",
     "cuisine",
     "cour"
    ],
    "a": "chai"
   },
   {
    "q": "Combien d'années, au minimum, un cognac « XO » doit-il désormais avoir vieilli ?",
    "a": "10"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_011",
  "cat": "alcool",
  "name": "La liqueur",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelle saveur dominante caractérise une liqueur, par rapport à un alcool sec ? Elle est ___ ?",
    "c": [
     "sucrée",
     "amère",
     "acide",
     "salée"
    ],
    "a": "sucrée"
   },
   {
    "q": "Quand boit-on souvent une liqueur, en petite quantité ? En ___ (après le repas) ?",
    "c": [
     "digestif",
     "apéritif seulement",
     "petit-déjeuner",
     "goûter"
    ],
    "a": "digestif"
   },
   {
    "q": "Quelle liqueur d'orange française est célèbre dans les cocktails ? Le ___ ?",
    "c": [
     "Grand Marnier",
     "Baileys",
     "Amaretto",
     "Limoncello"
    ],
    "a": "Grand Marnier"
   },
   {
    "q": "Quelle liqueur italienne au goût d'amande porte le nom d'« amer » adouci ? L'___ ?",
    "c": [
     "Amaretto",
     "Sambuca",
     "Campari",
     "Aperol"
    ],
    "a": "Amaretto"
   },
   {
    "q": "Quelle liqueur crémeuse irlandaise mêle whiskey et crème ? Le ___ ?",
    "c": [
     "Baileys",
     "Cointreau",
     "Chartreuse",
     "Kahlúa"
    ],
    "a": "Baileys"
   },
   {
    "q": "Quelle liqueur de citron jaune est typique du sud de l'Italie ? Le ___ ?",
    "c": [
     "Limoncello",
     "Curaçao",
     "Triple sec",
     "Malibu"
    ],
    "a": "Limoncello"
   },
   {
    "q": "Comment appelle-t-on le procédé de trempage des fruits ou plantes dans l'alcool pour aromatiser ? La ___ ?",
    "c": [
     "macération",
     "distillation",
     "fermentation",
     "pasteurisation"
    ],
    "a": "macération"
   },
   {
    "q": "Quel taux de sucre minimum, en grammes par litre, une « liqueur » doit-elle contenir dans l'UE ?",
    "a": "100"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_012",
  "cat": "alcool",
  "name": "Le cidre",
  "level": "adulte",
  "levels": [
   {
    "q": "De quel fruit fait-on le cidre ? La ___ ?",
    "c": [
     "pomme",
     "poire",
     "prune",
     "cerise"
    ],
    "a": "pomme"
   },
   {
    "q": "Quelle région française de l'ouest est réputée pour son cidre ? La ___ ?",
    "c": [
     "Normandie",
     "Provence",
     "Alsace",
     "Corse"
    ],
    "a": "Normandie"
   },
   {
    "q": "Le cidre est-il pétillant ou plat, en général ?",
    "c": [
     "pétillant",
     "plat",
     "gazeux au CO2 ajouté seulement",
     "gelé"
    ],
    "a": "pétillant"
   },
   {
    "q": "Avec quelle spécialité bretonne sucrée-salée boit-on souvent du cidre ? La ___ ?",
    "c": [
     "galette",
     "pizza",
     "paella",
     "raclette"
    ],
    "a": "galette"
   },
   {
    "q": "Comment appelle-t-on le cidre le moins sucré, plus alcoolisé ? Le cidre ___ ?",
    "c": [
     "brut",
     "doux",
     "rosé",
     "de glace"
    ],
    "a": "brut"
   },
   {
    "q": "Quel alcool fort est distillé à partir de cidre en Normandie ? Le ___ ?",
    "c": [
     "calvados",
     "cognac",
     "armagnac",
     "kirsch"
    ],
    "a": "calvados"
   },
   {
    "q": "De quel fruit fait-on le « poiré », cousin du cidre ? La ___ ?",
    "c": [
     "poire",
     "pêche",
     "figue",
     "datte"
    ],
    "a": "poire"
   },
   {
    "q": "Quel degré d'alcool, en pourcentage, titre en général un cidre brut ?",
    "a": "5"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_013",
  "cat": "alcool",
  "name": "Le pastis",
  "level": "adulte",
  "levels": [
   {
    "q": "Quelle plante donne au pastis son goût anisé ? L'___ ?",
    "c": [
     "anis",
     "menthe",
     "thym",
     "lavande"
    ],
    "a": "anis"
   },
   {
    "q": "Dans quelle région du sud de la France le pastis est-il un rituel ? La ___ ?",
    "c": [
     "Provence",
     "Bretagne",
     "Alsace",
     "Normandie"
    ],
    "a": "Provence"
   },
   {
    "q": "Que devient le pastis quand on ajoute de l'eau ? Il devient ___ (trouble) ?",
    "c": [
     "blanc",
     "rouge",
     "vert",
     "noir"
    ],
    "a": "blanc"
   },
   {
    "q": "Que met-on dans le pastis avant de le boire ? De l'___ fraîche ?",
    "c": [
     "eau",
     "huile",
     "lait",
     "vinaigre"
    ],
    "a": "eau"
   },
   {
    "q": "Quelle marque emblématique de pastis de Marseille est une institution ?",
    "c": [
     "Ricard",
     "Pernod à part",
     "Get 27",
     "Suze"
    ],
    "a": "Ricard"
   },
   {
    "q": "De quel apéritif interdit, à la même famille anisée, le pastis est-il l'héritier ? L'___ ?",
    "c": [
     "absinthe",
     "vermouth",
     "porto",
     "vin cuit"
    ],
    "a": "absinthe"
   },
   {
    "q": "Quel phénomène optique laiteux se produit à l'ajout d'eau ? L'effet ___ (louche) ?",
    "c": [
     "ouzo",
     "mirage",
     "arc-en-ciel",
     "halo"
    ],
    "a": "ouzo"
   },
   {
    "q": "Quel degré d'alcool, en pourcentage, titre classiquement un pastis avant dilution ?",
    "a": "45"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_014",
  "cat": "alcool",
  "name": "Le saké",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle céréale, fermentée, est fait le saké ? Le ___ ?",
    "c": [
     "riz",
     "blé",
     "orge",
     "maïs"
    ],
    "a": "riz"
   },
   {
    "q": "De quel pays le saké est-il la boisson traditionnelle ?",
    "c": [
     "Japon",
     "Chine",
     "Corée",
     "Thaïlande"
    ],
    "a": "Japon"
   },
   {
    "q": "À quelle température peut-on servir le saké, contrairement au vin ? ___ ou froid ?",
    "c": [
     "chaud",
     "gelé",
     "brûlé",
     "fumé"
    ],
    "a": "chaud"
   },
   {
    "q": "Dans quelle petite coupe traditionnelle boit-on le saké ? La ___ ?",
    "c": [
     "ochoko",
     "flûte",
     "chope",
     "timbale"
    ],
    "a": "ochoko"
   },
   {
    "q": "Quel champignon (koji) est utilisé pour transformer l'amidon du riz en sucre ? Le ___ ?",
    "c": [
     "koji",
     "shiitake",
     "enoki",
     "maitaké"
    ],
    "a": "koji"
   },
   {
    "q": "Comment le saké est-il classé selon le polissage du riz ? Le ___ (junmai, ginjo…) ?",
    "c": [
     "type",
     "millésime",
     "cru",
     "terroir"
    ],
    "a": "type"
   },
   {
    "q": "Le saké est-il techniquement plus proche d'un vin ou d'une bière (par la fermentation de céréale) ? Une ___ ?",
    "c": [
     "bière",
     "eau-de-vie",
     "liqueur",
     "soda"
    ],
    "a": "bière"
   },
   {
    "q": "Quel degré d'alcool, en pourcentage, titre en général un saké ?",
    "a": "15"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_015",
  "cat": "alcool",
  "name": "Le porto",
  "level": "adulte",
  "levels": [
   {
    "q": "De quel pays le porto est-il originaire ?",
    "c": [
     "Portugal",
     "Espagne",
     "Italie",
     "Grèce"
    ],
    "a": "Portugal"
   },
   {
    "q": "De quelle ville portugaise le porto tient-il son nom ?",
    "c": [
     "Porto",
     "Lisbonne",
     "Braga",
     "Faro"
    ],
    "a": "Porto"
   },
   {
    "q": "Le porto est un vin muté, c'est-à-dire enrichi en ___ ? (alcool ajouté)",
    "c": [
     "alcool",
     "sucre",
     "eau",
     "gaz"
    ],
    "a": "alcool"
   },
   {
    "q": "Le porto est-il plutôt un vin sec ou un vin doux ?",
    "c": [
     "doux",
     "sec",
     "amer",
     "salé"
    ],
    "a": "doux"
   },
   {
    "q": "Le long de quel fleuve poussent les vignes du porto ? Le ___ ?",
    "c": [
     "Douro",
     "Tage",
     "Guadiana",
     "Èbre"
    ],
    "a": "Douro"
   },
   {
    "q": "Comment appelle-t-on le porto rouge vieilli longuement en fût, aux arômes de fruits secs ? Le ___ ?",
    "c": [
     "tawny",
     "ruby",
     "blanc",
     "rosé"
    ],
    "a": "tawny"
   },
   {
    "q": "Quel porto rare porte le millésime d'une seule grande année ? Le porto ___ ?",
    "c": [
     "vintage",
     "tawny",
     "ruby",
     "colheita"
    ],
    "a": "vintage"
   },
   {
    "q": "Quel degré d'alcool, en pourcentage, titre en général un porto ?",
    "a": "20"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_016",
  "cat": "alcool",
  "name": "La sangria",
  "level": "adulte",
  "levels": [
   {
    "q": "Quel alcool est la base de la sangria ? Le ___ ?",
    "c": [
     "vin",
     "whisky",
     "vodka",
     "gin"
    ],
    "a": "vin"
   },
   {
    "q": "De quel pays la sangria est-elle une boisson emblématique ?",
    "c": [
     "Espagne",
     "Suède",
     "Russie",
     "Irlande"
    ],
    "a": "Espagne"
   },
   {
    "q": "Que met-on en morceaux dans la sangria en plus du vin ? Des ___ ?",
    "c": [
     "fruits",
     "cailloux",
     "bonbons",
     "biscuits"
    ],
    "a": "fruits"
   },
   {
    "q": "À quelle température, rafraîchissante, sert-on la sangria ? ___ ?",
    "c": [
     "fraîche",
     "brûlante",
     "tiède",
     "bouillante"
    ],
    "a": "fraîche"
   },
   {
    "q": "De quelle couleur est la sangria la plus classique ?",
    "c": [
     "rouge",
     "bleue",
     "noire",
     "dorée"
    ],
    "a": "rouge"
   },
   {
    "q": "De quel mot espagnol signifiant « sang » vient le nom « sangria » ? ___ ?",
    "c": [
     "sangre",
     "sabor",
     "sol",
     "sopa"
    ],
    "a": "sangre"
   },
   {
    "q": "Quelle version pétillante de la sangria utilise du vin mousseux ou du cava ? La sangria de ___ ?",
    "c": [
     "cava",
     "sidra",
     "agua",
     "leche"
    ],
    "a": "cava"
   },
   {
    "q": "Dans combien de pays de l'UE la « sangria » est-elle une appellation protégée (Espagne et Portugal) ?",
    "a": "2"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_017",
  "cat": "alcool",
  "name": "Le martini",
  "level": "adulte",
  "levels": [
   {
    "q": "Le cocktail Martini est un mélange de gin et de ___ ?",
    "c": [
     "vermouth",
     "cola",
     "jus d'orange",
     "lait"
    ],
    "a": "vermouth"
   },
   {
    "q": "Quel fruit vert garnit souvent un Martini ? Une ___ ?",
    "c": [
     "olive",
     "cerise",
     "fraise",
     "banane"
    ],
    "a": "olive"
   },
   {
    "q": "Dans quel verre à pied conique sert-on le Martini ? Le verre à ___ ?",
    "c": [
     "cocktail",
     "shot",
     "bière",
     "vin"
    ],
    "a": "cocktail"
   },
   {
    "q": "Quel espion célèbre commande son Martini « au shaker, pas à la cuillère » ? James ___ ?",
    "c": [
     "Bond",
     "Bourne",
     "Hunt",
     "Smiley"
    ],
    "a": "Bond"
   },
   {
    "q": "Comment dit-on qu'un Martini est très peu dosé en vermouth ? Un Martini ___ ?",
    "c": [
     "dry",
     "sweet",
     "wet",
     "dirty"
    ],
    "a": "dry"
   },
   {
    "q": "Quand on ajoute un peu de saumure d'olive, le Martini devient ___ ? (sale)",
    "c": [
     "dirty",
     "dry",
     "royal",
     "gold"
    ],
    "a": "dirty"
   },
   {
    "q": "Quel zeste d'agrume peut remplacer l'olive dans un Martini ? Le ___ ?",
    "c": [
     "citron",
     "pamplemousse",
     "orange sanguine",
     "cédrat"
    ],
    "a": "citron"
   },
   {
    "q": "Combien de millilitres de gin, environ, contient un Martini classique ?",
    "a": "60"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_018",
  "cat": "alcool",
  "name": "Le punch",
  "level": "adulte",
  "levels": [
   {
    "q": "Le punch est une boisson servie en grande quantité pour les ___ ? (soirées)",
    "c": [
     "fêtes",
     "enterrements",
     "examens",
     "réunions"
    ],
    "a": "fêtes"
   },
   {
    "q": "Quel alcool est souvent la base d'un punch antillais ? Le ___ ?",
    "c": [
     "rhum",
     "whisky",
     "vodka",
     "gin"
    ],
    "a": "rhum"
   },
   {
    "q": "Quels ingrédients colorés donnent son goût au punch ? Des jus de ___ ?",
    "c": [
     "fruits",
     "légumes",
     "viande",
     "poisson"
    ],
    "a": "fruits"
   },
   {
    "q": "Dans quel grand récipient sert-on le punch à la louche ? Le ___ ?",
    "c": [
     "bol",
     "dé à coudre",
     "flacon",
     "tube"
    ],
    "a": "bol"
   },
   {
    "q": "Le mot « punch » viendrait d'un mot hindi signifiant le chiffre ___ ? (cinq ingrédients)",
    "c": [
     "cinq",
     "trois",
     "dix",
     "sept"
    ],
    "a": "cinq"
   },
   {
    "q": "Quel punch antillais associe rhum, sirop de canne et citron vert ? Le ti'___ ?",
    "c": [
     "punch",
     "rhum",
     "sec",
     "sour"
    ],
    "a": "punch"
   },
   {
    "q": "Quel épice râpée parfume souvent le punch de Noël ? La ___ ?",
    "c": [
     "cannelle",
     "moutarde",
     "cumin",
     "curry"
    ],
    "a": "cannelle"
   },
   {
    "q": "Combien d'ingrédients de base, selon l'étymologie hindi, composent traditionnellement le punch ?",
    "a": "5"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_019",
  "cat": "alcool",
  "name": "La absinthe",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle couleur est l'absinthe traditionnelle ? La « fée ___ » ?",
    "c": [
     "verte",
     "rouge",
     "bleue",
     "noire"
    ],
    "a": "verte"
   },
   {
    "q": "Quelle plante amère donne son nom et son goût à l'absinthe ? La grande ___ ?",
    "c": [
     "absinthe",
     "menthe",
     "sauge",
     "ortie"
    ],
    "a": "absinthe"
   },
   {
    "q": "Quel objet troué pose-t-on sur le verre pour faire fondre le sucre ? La ___ ?",
    "c": [
     "cuillère",
     "fourchette",
     "louche",
     "pince"
    ],
    "a": "cuillère"
   },
   {
    "q": "Que verse-t-on goutte à goutte sur le sucre pour préparer l'absinthe ? De l'___ glacée ?",
    "c": [
     "eau",
     "huile",
     "lait",
     "sirop"
    ],
    "a": "eau"
   },
   {
    "q": "Quels peintres et poètes du XIXe s. étaient friands d'absinthe, dont Van Gogh et ___ ?",
    "c": [
     "Verlaine",
     "Molière",
     "Hugo réticent",
     "Racine"
    ],
    "a": "Verlaine"
   },
   {
    "q": "Quelle molécule de l'absinthe, longtemps accusée de rendre fou, provient de la plante ? La ___ ?",
    "c": [
     "thuyone",
     "caféine",
     "nicotine",
     "quinine"
    ],
    "a": "thuyone"
   },
   {
    "q": "En quel début de siècle l'absinthe a-t-elle été interdite en France (avant réhabilitation) ? Au XX___ ?",
    "c": [
     "e",
     "Ier",
     "IIe",
     "IIIe"
    ],
    "a": "e"
   },
   {
    "q": "En quelle année l'absinthe a-t-elle été interdite en France (interdiction levée en 2011) ?",
    "a": "1915"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_020",
  "cat": "alcool",
  "name": "La chartreuse",
  "level": "adulte",
  "levels": [
   {
    "q": "Quels religieux fabriquent la liqueur Chartreuse ? Des ___ ?",
    "c": [
     "moines",
     "soldats",
     "marins",
     "boulangers"
    ],
    "a": "moines"
   },
   {
    "q": "De quelle couleur vive est la Chartreuse la plus connue ?",
    "c": [
     "verte",
     "rouge",
     "bleue",
     "noire"
    ],
    "a": "verte"
   },
   {
    "q": "Dans quel massif alpin français est produite la Chartreuse ? Le massif de la ___ ?",
    "c": [
     "Chartreuse",
     "Vanoise",
     "Belledonne",
     "Vercors"
    ],
    "a": "Chartreuse"
   },
   {
    "q": "À base de quoi la Chartreuse est-elle élaborée ? De nombreuses ___ ?",
    "c": [
     "plantes",
     "viandes",
     "épices seules",
     "fleurs uniquement"
    ],
    "a": "plantes"
   },
   {
    "q": "Combien de plantes, environ, entrent dans la recette secrète de la Chartreuse ?",
    "c": [
     "130",
     "12",
     "50",
     "300"
    ],
    "a": "130"
   },
   {
    "q": "Une couleur a même été nommée d'après cette liqueur : le ___ ?",
    "c": [
     "chartreuse",
     "bordeaux",
     "indigo",
     "carmin"
    ],
    "a": "chartreuse"
   },
   {
    "q": "Quel ordre monastique fondé par saint Bruno produit la Chartreuse ? Les ___ ?",
    "c": [
     "Chartreux",
     "Bénédictins",
     "Trappistes",
     "Franciscains"
    ],
    "a": "Chartreux"
   },
   {
    "q": "Quel degré d'alcool, en pourcentage, titre la Chartreuse verte, particulièrement forte ?",
    "a": "55"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_021",
  "cat": "alcool",
  "name": "Le calvados",
  "level": "adulte",
  "levels": [
   {
    "q": "De quel fruit le calvados est-il distillé ? La ___ ?",
    "c": [
     "pomme",
     "poire",
     "raisin",
     "prune"
    ],
    "a": "pomme"
   },
   {
    "q": "De quelle région française le calvados est-il originaire ? La ___ ?",
    "c": [
     "Normandie",
     "Provence",
     "Alsace",
     "Corse"
    ],
    "a": "Normandie"
   },
   {
    "q": "De quelle boisson fermentée le calvados est-il distillé ? Le ___ ?",
    "c": [
     "cidre",
     "vin",
     "bière",
     "hydromel"
    ],
    "a": "cidre"
   },
   {
    "q": "Quelle catégorie d'alcool est le calvados ? Une eau-de-___ ?",
    "c": [
     "vie",
     "rose",
     "source",
     "cologne"
    ],
    "a": "vie"
   },
   {
    "q": "Comment appelle-t-on la tradition d'un verre de calvados au milieu d'un repas ? Le trou ___ ?",
    "c": [
     "normand",
     "breton",
     "gascon",
     "picard"
    ],
    "a": "normand"
   },
   {
    "q": "Dans quel type de fût le calvados vieillit-il pour se colorer ? Le fût de ___ ?",
    "c": [
     "chêne",
     "hêtre",
     "châtaignier seul",
     "acacia"
    ],
    "a": "chêne"
   },
   {
    "q": "Quelle mention indique un calvados vieilli au moins 6 ans ? ___ ?",
    "c": [
     "Hors d'âge",
     "VS",
     "Fine",
     "Réserve"
    ],
    "a": "Hors d'âge"
   },
   {
    "q": "Quel degré d'alcool minimum, en pourcentage, titre un calvados ?",
    "a": "40"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_022",
  "cat": "alcool",
  "name": "L'armagnac",
  "level": "adulte",
  "levels": [
   {
    "q": "De quel fruit distillé l'armagnac est-il fait ? Le ___ (vin) ?",
    "c": [
     "raisin",
     "pomme",
     "poire",
     "figue"
    ],
    "a": "raisin"
   },
   {
    "q": "De quelle région du sud-ouest de la France l'armagnac est-il originaire ? La ___ ?",
    "c": [
     "Gascogne",
     "Bretagne",
     "Alsace",
     "Savoie"
    ],
    "a": "Gascogne"
   },
   {
    "q": "Quelle catégorie d'alcool est l'armagnac ? Une eau-de-___ ?",
    "c": [
     "vie",
     "rose",
     "mer",
     "source"
    ],
    "a": "vie"
   },
   {
    "q": "L'armagnac est réputé être le plus ___ des alcools français (antérieur au cognac) ?",
    "c": [
     "ancien",
     "récent",
     "sucré",
     "léger"
    ],
    "a": "ancien"
   },
   {
    "q": "Quel type d'alambic, à colonne, l'armagnac utilise-t-il traditionnellement ? L'alambic ___ ?",
    "c": [
     "armagnacais",
     "charentais",
     "à repasse",
     "à bain-marie"
    ],
    "a": "armagnacais"
   },
   {
    "q": "Dans quel type de fût l'armagnac vieillit-il ? Le fût de ___ ?",
    "c": [
     "chêne",
     "pin",
     "olivier",
     "cerisier"
    ],
    "a": "chêne"
   },
   {
    "q": "Quelle mention désigne un armagnac d'une seule année de récolte ? Le ___ ?",
    "c": [
     "millésime",
     "assemblage",
     "blend",
     "solera"
    ],
    "a": "millésime"
   },
   {
    "q": "Quel degré d'alcool minimum, en pourcentage, titre en général un armagnac ?",
    "a": "40"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_023",
  "cat": "alcool",
  "name": "Le bourbon",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle céréale majoritaire le bourbon est-il distillé ? Le ___ ?",
    "c": [
     "maïs",
     "orge",
     "seigle",
     "blé"
    ],
    "a": "maïs"
   },
   {
    "q": "De quel pays le bourbon est-il le whiskey emblématique ? Les ___-Unis ?",
    "c": [
     "États",
     "Émirats",
     "Pays",
     "Provinces"
    ],
    "a": "États"
   },
   {
    "q": "Quel État américain est le berceau du bourbon ? Le ___ ?",
    "c": [
     "Kentucky",
     "Texas",
     "Alaska",
     "Ohio"
    ],
    "a": "Kentucky"
   },
   {
    "q": "Dans quels fûts neufs et brûlés le bourbon doit-il vieillir ? Des fûts de chêne ___ ?",
    "c": [
     "brûlés",
     "usagés",
     "peints",
     "vernis"
    ],
    "a": "brûlés"
   },
   {
    "q": "Quel pourcentage minimum de maïs le bourbon doit-il contenir dans sa recette ?",
    "c": [
     "51",
     "10",
     "80",
     "100"
    ],
    "a": "51"
   },
   {
    "q": "Quelle marque au chapeau noir « Old No. 7 » est un whiskey du Tennessee proche du bourbon ? Jack ___ ?",
    "c": [
     "Daniel's",
     "Beam",
     "Walker",
     "Turkey"
    ],
    "a": "Daniel's"
   },
   {
    "q": "Comment appelle-t-on la carbonisation intérieure des fûts qui donne sa couleur au bourbon ? Le ___ (char) ?",
    "c": [
     "brûlage",
     "collage",
     "soutirage",
     "ouillage"
    ],
    "a": "brûlage"
   },
   {
    "q": "Quel degré d'alcool minimum, en pourcentage, un bourbon doit-il titrer à la mise en bouteille ?",
    "a": "40"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_024",
  "cat": "alcool",
  "name": "La stout",
  "level": "adulte",
  "levels": [
   {
    "q": "De quelle couleur est une bière stout ?",
    "c": [
     "noire",
     "blonde",
     "rousse",
     "blanche"
    ],
    "a": "noire"
   },
   {
    "q": "Quelle stout irlandaise à mousse crémeuse est mondialement connue ?",
    "c": [
     "Guinness",
     "Heineken",
     "Corona",
     "Leffe"
    ],
    "a": "Guinness"
   },
   {
    "q": "Quel ingrédient torréfié donne à la stout sa couleur noire et son goût ? L'orge ___ ?",
    "c": [
     "torréfiée",
     "gelée",
     "germée seule",
     "crue"
    ],
    "a": "torréfiée"
   },
   {
    "q": "Quels arômes grillés évoquent souvent la stout ? Le café et le ___ ?",
    "c": [
     "chocolat",
     "citron",
     "melon",
     "romarin"
    ],
    "a": "chocolat"
   },
   {
    "q": "De quel pays la stout est-elle emblématique ? L'___ ?",
    "c": [
     "Irlande",
     "Espagne",
     "Grèce",
     "Portugal"
    ],
    "a": "Irlande"
   },
   {
    "q": "Quel gaz, en plus du CO2, donne à la Guinness pression sa mousse onctueuse ? L'___ ?",
    "c": [
     "azote",
     "hélium",
     "oxygène",
     "argon"
    ],
    "a": "azote"
   },
   {
    "q": "Comment appelle-t-on la version plus forte, historiquement exportée en Russie ? L'Imperial ___ ?",
    "c": [
     "Stout",
     "Ale",
     "Lager",
     "Porter"
    ],
    "a": "Stout"
   },
   {
    "q": "Quel degré d'alcool, en pourcentage, titre en général une Guinness Draught ?",
    "a": "4"
   }
  ],
  "rw": true
 },
 {
  "id": "alcool_025",
  "cat": "alcool",
  "name": "Le lambic",
  "level": "adulte",
  "levels": [
   {
    "q": "Le lambic est un type de quelle boisson ? Une ___ belge ?",
    "c": [
     "bière",
     "vin",
     "cidre",
     "liqueur"
    ],
    "a": "bière"
   },
   {
    "q": "De quel pays le lambic est-il une spécialité ? La ___ ?",
    "c": [
     "Belgique",
     "France",
     "Allemagne",
     "Irlande"
    ],
    "a": "Belgique"
   },
   {
    "q": "Quel mode de fermentation, sans levure ajoutée, caractérise le lambic ? La fermentation ___ ?",
    "c": [
     "spontanée",
     "haute",
     "basse",
     "forcée"
    ],
    "a": "spontanée"
   },
   {
    "q": "Quel goût surprenant, acidulé, caractérise le lambic ? Un goût ___ ?",
    "c": [
     "acide",
     "sucré",
     "salé",
     "amer intense"
    ],
    "a": "acide"
   },
   {
    "q": "Comment appelle-t-on l'assemblage de lambics jeunes et vieux, refermenté ? La ___ ?",
    "c": [
     "gueuze",
     "trappiste",
     "saison",
     "triple"
    ],
    "a": "gueuze"
   },
   {
    "q": "Quel fruit rouge ajoute-t-on pour faire un lambic à la cerise ? La ___ (kriek) ?",
    "c": [
     "cerise",
     "framboise",
     "fraise",
     "mûre"
    ],
    "a": "cerise"
   },
   {
    "q": "Autour de quelle ville belge la vallée de la Senne est-elle le berceau du lambic ? ___ ?",
    "c": [
     "Bruxelles",
     "Anvers",
     "Gand",
     "Liège"
    ],
    "a": "Bruxelles"
   },
   {
    "q": "Combien d'années, au maximum, un vieux lambic peut-il vieillir en fût avant assemblage ?",
    "a": "3"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_101",
  "cat": "insolite",
  "name": "Le corps humain insolite",
  "level": "classique",
  "levels": [
   {
    "q": "Combien d'os possède un squelette humain adulte ?",
    "a": "206"
   },
   {
    "q": "Quel est le muscle le plus puissant du corps, proportionnellement, dans la mâchoire ? Le ___ ?",
    "c": [
     "masséter",
     "biceps",
     "mollet",
     "fessier"
    ],
    "a": "masséter"
   },
   {
    "q": "Quel organe du corps humain est le plus grand ? La ___ ?",
    "c": [
     "peau",
     "foie",
     "rate",
     "langue"
    ],
    "a": "peau"
   },
   {
    "q": "Combien de litres de sang, environ, circulent dans le corps d'un adulte ?",
    "a": "5"
   },
   {
    "q": "Quel est le plus petit os du corps humain, situé dans l'oreille ? L'___ (étrier) ?",
    "c": [
     "étrier",
     "fémur",
     "radius",
     "tibia"
    ],
    "a": "étrier"
   },
   {
    "q": "Combien de fois par jour, environ, le cœur humain bat-il (en milliers) ?",
    "c": [
     "100",
     "10",
     "500",
     "20"
    ],
    "a": "100"
   },
   {
    "q": "Quelle est la seule partie du corps sans apport sanguin, nourrie par les larmes ? La ___ de l'œil ?",
    "c": [
     "cornée",
     "rétine",
     "pupille",
     "iris"
    ],
    "a": "cornée"
   },
   {
    "q": "Combien de kilomètres, environ, mesureraient tous les vaisseaux sanguins d'un adulte mis bout à bout (en milliers) ?",
    "a": "100000"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_102",
  "cat": "insolite",
  "name": "Animaux étonnants",
  "level": "classique",
  "levels": [
   {
    "q": "Combien de cœurs possède une pieuvre ?",
    "a": "3"
   },
   {
    "q": "De quelle couleur est le sang de la pieuvre ?",
    "c": [
     "bleu",
     "rouge",
     "vert",
     "jaune"
    ],
    "a": "bleu"
   },
   {
    "q": "Quel animal terrestre est le plus rapide du monde, à la course ? Le ___ ?",
    "c": [
     "guépard",
     "lion",
     "cheval",
     "lévrier"
    ],
    "a": "guépard"
   },
   {
    "q": "Quel mammifère est le seul à pouvoir vraiment voler ? La ___ ?",
    "c": [
     "chauve-souris",
     "taupe",
     "belette",
     "musaraigne"
    ],
    "a": "chauve-souris"
   },
   {
    "q": "Quel animal ne dort presque jamais et n'a jamais de sommeil profond comme nous ? Le ___ ? (dauphin dort un hémisphère à la fois)",
    "c": [
     "dauphin",
     "chat",
     "ours",
     "koala"
    ],
    "a": "dauphin"
   },
   {
    "q": "Quel petit animal peut survivre dans l'espace et à des conditions extrêmes ? Le ___ (ourson d'eau) ?",
    "c": [
     "tardigrade",
     "moustique",
     "cafard",
     "ver"
    ],
    "a": "tardigrade"
   },
   {
    "q": "Quel oiseau peut voler à reculons ? Le ___-mouche (colibri) ?",
    "c": [
     "colibri",
     "moineau",
     "aigle",
     "hibou"
    ],
    "a": "colibri"
   },
   {
    "q": "Combien de kilomètres par heure, environ, un guépard peut-il atteindre en pointe ?",
    "a": "110"
   }
  ],
  "rw": true
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
     "Mercure",
     "Vénus",
     "Mars",
     "Terre"
    ],
    "a": "Mercure"
   },
   {
    "q": "Quelle planète est surnommée la « planète rouge » ?",
    "c": [
     "Mars",
     "Vénus",
     "Jupiter",
     "Saturne"
    ],
    "a": "Mars"
   },
   {
    "q": "Quelle planète possède de spectaculaires anneaux ?",
    "c": [
     "Saturne",
     "Mars",
     "Vénus",
     "Mercure"
    ],
    "a": "Saturne"
   },
   {
    "q": "Quel astre éclaire nos nuits en reflétant la lumière du Soleil ? La ___ ?",
    "c": [
     "Lune",
     "Mars",
     "Vénus",
     "comète"
    ],
    "a": "Lune"
   },
   {
    "q": "Quelle est la plus grande planète du système solaire ?",
    "c": [
     "Jupiter",
     "Saturne",
     "Terre",
     "Neptune"
    ],
    "a": "Jupiter"
   },
   {
    "q": "Comment appelle-t-on une étoile qui explose en fin de vie ? Une ___ ?",
    "c": [
     "supernova",
     "comète",
     "nébuleuse",
     "météorite"
    ],
    "a": "supernova"
   },
   {
    "q": "Quelle galaxie abrite notre système solaire ? La Voie ___ ?",
    "c": [
     "lactée",
     "sombre",
     "dorée",
     "argentée"
    ],
    "a": "lactée"
   },
   {
    "q": "Combien de minutes, environ, met la lumière du Soleil pour atteindre la Terre ?",
    "a": "8"
   }
  ],
  "rw": true
 },
 {
  "id": "insolite_104",
  "cat": "insolite",
  "name": "Gourmandises : vrai ou faux",
  "level": "classique",
  "levels": [
   {
    "q": "Le miel peut-il se conserver des milliers d'années sans se périmer ?",
    "c": [
     "oui",
     "non",
     "seulement au froid",
     "seulement un an"
    ],
    "a": "oui"
   },
   {
    "q": "De quelle plante provient le chocolat ? Le ___ (cacaoyer) ?",
    "c": [
     "cacao",
     "café",
     "canne",
     "coco"
    ],
    "a": "cacao"
   },
   {
    "q": "La carotte a-t-elle toujours été orange, ou était-elle violette à l'origine ?",
    "c": [
     "violette",
     "orange",
     "blanche",
     "rouge"
    ],
    "a": "violette"
   },
   {
    "q": "Quel fruit est techniquement une baie : la banane ou la fraise ? La ___ ?",
    "c": [
     "banane",
     "fraise",
     "pomme",
     "cerise"
    ],
    "a": "banane"
   },
   {
    "q": "De quel insecte provient le miel ? L'___ ?",
    "c": [
     "abeille",
     "guêpe",
     "fourmi",
     "mouche"
    ],
    "a": "abeille"
   },
   {
    "q": "Quelle épice, plus chère que l'or au poids, provient d'une fleur ? Le ___ ?",
    "c": [
     "safran",
     "poivre",
     "sel",
     "cumin"
    ],
    "a": "safran"
   },
   {
    "q": "Le piment pique-t-il à cause d'une molécule nommée ___ ?",
    "c": [
     "capsaïcine",
     "caféine",
     "nicotine",
     "théine"
    ],
    "a": "capsaïcine"
   },
   {
    "q": "Combien de fèves de cacao, environ, faut-il pour faire 500 g de chocolat ?",
    "a": "400"
   }
  ],
  "rw": true
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
     "Everest",
     "Mont Blanc",
     "Kilimandjaro",
     "K2"
    ],
    "a": "Everest"
   },
   {
    "q": "Quel est le plus long fleuve du monde (selon la mesure classique) ? Le ___ ?",
    "c": [
     "Nil",
     "Amazone",
     "Yangtsé",
     "Mississippi"
    ],
    "a": "Nil"
   },
   {
    "q": "Quel est le plus grand océan de la planète ? L'océan ___ ?",
    "c": [
     "Pacifique",
     "Atlantique",
     "Indien",
     "Arctique"
    ],
    "a": "Pacifique"
   },
   {
    "q": "Quel est le plus grand pays du monde par sa superficie ?",
    "c": [
     "Russie",
     "Canada",
     "Chine",
     "États-Unis"
    ],
    "a": "Russie"
   },
   {
    "q": "Quel désert chaud est le plus grand du monde ? Le ___ ?",
    "c": [
     "Sahara",
     "Gobi",
     "Kalahari",
     "Atacama"
    ],
    "a": "Sahara"
   },
   {
    "q": "Quel est l'animal le plus grand ayant jamais existé, encore vivant aujourd'hui ? La ___ bleue ?",
    "c": [
     "baleine",
     "girafe",
     "otarie",
     "murène"
    ],
    "a": "baleine"
   },
   {
    "q": "Quel lac est le plus profond du monde, en Sibérie ? Le lac ___ ?",
    "c": [
     "Baïkal",
     "Victoria",
     "Léman",
     "Titicaca"
    ],
    "a": "Baïkal"
   },
   {
    "q": "Quelle profondeur, en mètres, atteint la fosse des Mariannes, point le plus profond des océans ?",
    "a": "11000"
   }
  ],
  "rw": true
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
 },
 {
  "id": "original_011",
  "cat": "insolite",
  "name": "Les chaussettes",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Sur quelle partie du corps enfile-t-on des chaussettes ? Les ___ ?",
    "c": [
     "pieds",
     "mains",
     "oreilles",
     "genoux"
    ],
    "a": "pieds"
   },
   {
    "q": "Comment appelle-t-on deux chaussettes identiques portées ensemble ? Une ___ ?",
    "c": [
     "paire",
     "botte",
     "meute",
     "grappe"
    ],
    "a": "paire"
   },
   {
    "q": "Dans quel appareil les chaussettes disparaissent-elles mystérieusement, dit-on ? La machine à ___ ?",
    "c": [
     "laver",
     "coudre",
     "café",
     "pain"
    ],
    "a": "laver"
   },
   {
    "q": "Quelle faute de goût consiste à porter des chaussettes dans des sandales ? Chaussettes-___ ?",
    "c": [
     "sandales",
     "bottes",
     "talons",
     "patins"
    ],
    "a": "sandales"
   },
   {
    "q": "Quelle matière naturelle et chaude sert souvent à tricoter des chaussettes d'hiver ? La ___ ?",
    "c": [
     "laine",
     "soie",
     "paille",
     "plume"
    ],
    "a": "laine"
   },
   {
    "q": "Quelles chaussettes hautes, montant au-dessus du genou, sont dites « chaussettes ___ » ?",
    "c": [
     "hautes",
     "basses",
     "plates",
     "rondes"
    ],
    "a": "hautes"
   },
   {
    "q": "Quel objet, autrefois, glissait-on dans la chaussette pour la repriser ? Un œuf à ___ ?",
    "c": [
     "repriser",
     "cuire",
     "peindre",
     "casser"
    ],
    "a": "repriser"
   },
   {
    "q": "Combien de chaussettes, environ, une personne perdrait-elle au cours de sa vie, selon une étude ?",
    "a": "1264"
   }
  ]
 },
 {
  "id": "original_012",
  "cat": "insolite",
  "name": "Les emojis",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Sur quel appareil utilise-t-on le plus les emojis ? Le ___ ?",
    "c": [
     "smartphone",
     "grille-pain",
     "réveil",
     "aspirateur"
    ],
    "a": "smartphone"
   },
   {
    "q": "Que représente le plus souvent un emoji ? Une ___ ?",
    "c": [
     "émotion",
     "recette",
     "adresse",
     "facture"
    ],
    "a": "émotion"
   },
   {
    "q": "Quel emoji jaune tout rond exprime la joie ? Le smiley qui ___ ?",
    "c": [
     "sourit",
     "pleure",
     "dort",
     "crie"
    ],
    "a": "sourit"
   },
   {
    "q": "De quel pays le mot et les premiers emojis sont-ils originaires ?",
    "c": [
     "Japon",
     "États-Unis",
     "Corée",
     "Chine"
    ],
    "a": "Japon"
   },
   {
    "q": "Quel emoji, élu mot de l'année 2015 par Oxford, montre un visage riant aux larmes ? Le rire aux ___ ?",
    "c": [
     "larmes",
     "éclats",
     "anges",
     "genoux"
    ],
    "a": "larmes"
   },
   {
    "q": "Quel organisme normalise officiellement les emojis pour tous les appareils ? Le consortium ___ ?",
    "c": [
     "Unicode",
     "Bluetooth",
     "Wi-Fi",
     "USB"
    ],
    "a": "Unicode"
   },
   {
    "q": "Que signifie littéralement « emoji » en japonais ? Image + ___ (caractère) ?",
    "c": [
     "lettre",
     "son",
     "chiffre",
     "code"
    ],
    "a": "lettre"
   },
   {
    "q": "En quelle année le tout premier jeu d'emojis a-t-il été créé au Japon par Shigetaka Kurita ?",
    "a": "1999"
   }
  ]
 },
 {
  "id": "original_013",
  "cat": "insolite",
  "name": "Le papier bulle",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Quel geste irrésistible fait-on avec les bulles du papier bulle ? On les ___ ?",
    "c": [
     "éclate",
     "mange",
     "peint",
     "coud"
    ],
    "a": "éclate"
   },
   {
    "q": "À quoi sert principalement le papier bulle ? À ___ les objets fragiles ?",
    "c": [
     "protéger",
     "peser",
     "salir",
     "cuire"
    ],
    "a": "protéger"
   },
   {
    "q": "Que contiennent les petites bulles du papier bulle ? De l'___ ?",
    "c": [
     "air",
     "eau",
     "gaz toxique",
     "mousse"
    ],
    "a": "air"
   },
   {
    "q": "Dans quel type d'envoi utilise-t-on beaucoup de papier bulle ? Les ___ (paquets) ?",
    "c": [
     "colis",
     "lettres",
     "mails",
     "SMS"
    ],
    "a": "colis"
   },
   {
    "q": "Quel effet apaisant beaucoup trouvent-ils à éclater du papier bulle ? Un effet ___ (déstressant) ?",
    "c": [
     "antistress",
     "grossissant",
     "chauffant",
     "collant"
    ],
    "a": "antistress"
   },
   {
    "q": "À l'origine, en 1957, pour quel usage inattendu le papier bulle avait-il été conçu ? Un ___ mural ?",
    "c": [
     "papier peint",
     "tapis",
     "rideau",
     "matelas"
    ],
    "a": "papier peint"
   },
   {
    "q": "Quelle journée insolite célèbre le papier bulle chaque dernier lundi de janvier ? Le Bubble Wrap ___ Day ?",
    "c": [
     "Appreciation",
     "Popping",
     "Cleaning",
     "Saving"
    ],
    "a": "Appreciation"
   },
   {
    "q": "En quelle année le papier bulle a-t-il été inventé par Fielding et Chavannes ?",
    "a": "1957"
   }
  ]
 },
 {
  "id": "original_014",
  "cat": "insolite",
  "name": "Le hoquet",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Quel petit bruit involontaire caractérise le hoquet ? Un « ___ » répété ?",
    "c": [
     "hic",
     "toc",
     "boum",
     "clac"
    ],
    "a": "hic"
   },
   {
    "q": "Quel muscle de la respiration se contracte brusquement lors du hoquet ? Le ___ ?",
    "c": [
     "diaphragme",
     "biceps",
     "mollet",
     "cœur"
    ],
    "a": "diaphragme"
   },
   {
    "q": "Quel remède populaire consiste à retenir sa ___ pour arrêter le hoquet ?",
    "c": [
     "respiration",
     "salive",
     "langue",
     "main"
    ],
    "a": "respiration"
   },
   {
    "q": "Que boit-on souvent, lentement, pour tenter de stopper le hoquet ? De l'___ ?",
    "c": [
     "eau",
     "huile",
     "vinaigre",
     "essence"
    ],
    "a": "eau"
   },
   {
    "q": "Le hoquet est-il un phénomène volontaire ou involontaire ?",
    "c": [
     "involontaire",
     "volontaire",
     "musical",
     "digestif seulement"
    ],
    "a": "involontaire"
   },
   {
    "q": "Quelle émotion ou surprise, dit-on, peut parfois faire cesser le hoquet ? La ___ ?",
    "c": [
     "peur",
     "joie",
     "faim",
     "colère"
    ],
    "a": "peur"
   },
   {
    "q": "Manger trop vite ou boire des boissons ___ favorise le hoquet ?",
    "c": [
     "gazeuses",
     "chaudes",
     "salées",
     "amères"
    ],
    "a": "gazeuses"
   },
   {
    "q": "Combien d'années a duré le plus long hoquet du monde, record de Charles Osborne ?",
    "a": "68"
   }
  ]
 },
 {
  "id": "original_015",
  "cat": "insolite",
  "name": "La barbe à papa",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "De quel ingrédient sucré la barbe à papa est-elle entièrement faite ? Le ___ ?",
    "c": [
     "sucre",
     "sel",
     "beurre",
     "miel"
    ],
    "a": "sucre"
   },
   {
    "q": "Dans quel lieu de fête achète-t-on typiquement une barbe à papa ? La ___ ?",
    "c": [
     "fête foraine",
     "banque",
     "pharmacie",
     "gare"
    ],
    "a": "fête foraine"
   },
   {
    "q": "Sur quel support en bois enroule-t-on la barbe à papa ? Un ___ ?",
    "c": [
     "bâton",
     "couteau",
     "verre",
     "bol"
    ],
    "a": "bâton"
   },
   {
    "q": "De quelle couleur est la barbe à papa la plus classique ?",
    "c": [
     "rose",
     "verte",
     "noire",
     "bleue"
    ],
    "a": "rose"
   },
   {
    "q": "Quel aspect aérien et léger a la barbe à papa ? Elle est comme un ___ ?",
    "c": [
     "nuage",
     "caillou",
     "mur",
     "bloc"
    ],
    "a": "nuage"
   },
   {
    "q": "Dans quelle machine tournante fabrique-t-on la barbe à papa ? Une machine à ___ ?",
    "c": [
     "filer",
     "coudre",
     "laver",
     "café"
    ],
    "a": "filer"
   },
   {
    "q": "Comment le sucre devient-il des fils si fins dans la machine ? Il est ___ puis projeté ?",
    "c": [
     "fondu",
     "gelé",
     "broyé",
     "séché"
    ],
    "a": "fondu"
   },
   {
    "q": "En quelle année la machine à barbe à papa moderne a-t-elle été brevetée aux États-Unis ?",
    "a": "1899"
   }
  ]
 },
 {
  "id": "original_016",
  "cat": "insolite",
  "name": "Le four à micro-ondes",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "À quoi sert surtout un four à micro-ondes ? À ___ les plats ?",
    "c": [
     "réchauffer",
     "peindre",
     "laver",
     "peser"
    ],
    "a": "réchauffer"
   },
   {
    "q": "Quel type d'ondes chauffe les aliments dans l'appareil ? Des micro-___ ?",
    "c": [
     "ondes",
     "billes",
     "vagues",
     "bulles"
    ],
    "a": "ondes"
   },
   {
    "q": "Quel matériau NE faut-il jamais mettre au micro-ondes ? Le ___ ?",
    "c": [
     "métal",
     "verre",
     "plastique adapté",
     "carton"
    ],
    "a": "métal"
   },
   {
    "q": "Quel encas gonflé prépare-t-on en sachet au micro-ondes ? Le ___ ?",
    "c": [
     "popcorn",
     "steak",
     "gâteau",
     "gratin"
    ],
    "a": "popcorn"
   },
   {
    "q": "Quelle molécule des aliments les micro-ondes font-elles surtout vibrer pour chauffer ? L'___ (eau) ?",
    "c": [
     "eau",
     "sel",
     "sucre",
     "huile"
    ],
    "a": "eau"
   },
   {
    "q": "Quel ingénieur a découvert par hasard le principe du micro-ondes en faisant fondre une barre chocolatée ? Percy ___ ?",
    "c": [
     "Spencer",
     "Edison",
     "Tesla",
     "Franklin"
    ],
    "a": "Spencer"
   },
   {
    "q": "Le micro-ondes chauffe-t-il les aliments de l'intérieur ou par agitation des molécules ? Par ___ des molécules ?",
    "c": [
     "agitation",
     "flamme",
     "vapeur",
     "friction externe"
    ],
    "a": "agitation"
   },
   {
    "q": "En quelle année Percy Spencer a-t-il déposé le brevet du four à micro-ondes ?",
    "a": "1945"
   }
  ]
 },
 {
  "id": "original_017",
  "cat": "insolite",
  "name": "Le canard de bain",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Dans quelle pièce joue-t-on avec un canard de bain ? La salle de ___ ?",
    "c": [
     "bain",
     "sport",
     "classe",
     "réunion"
    ],
    "a": "bain"
   },
   {
    "q": "De quelle couleur est le canard de bain classique ?",
    "c": [
     "jaune",
     "rouge",
     "vert",
     "noir"
    ],
    "a": "jaune"
   },
   {
    "q": "En quelle matière est fait le canard de bain ? Le ___ ?",
    "c": [
     "plastique",
     "bois",
     "métal",
     "verre"
    ],
    "a": "plastique"
   },
   {
    "q": "Que fait le canard de bain posé sur l'eau ? Il ___ ?",
    "c": [
     "flotte",
     "coule",
     "fond",
     "explose"
    ],
    "a": "flotte"
   },
   {
    "q": "Quel bruit fait un canard de bain quand on le presse ? Un ___ ?",
    "c": [
     "couic",
     "boum",
     "tic",
     "vroum"
    ],
    "a": "couic"
   },
   {
    "q": "Dans quelle célèbre émission pour enfants Ernie chante-t-il pour son canard ? ___ Street ?",
    "c": [
     "Sesame",
     "Baker",
     "Wall",
     "Main"
    ],
    "a": "Sesame"
   },
   {
    "q": "Quel géant gonflable de l'artiste Florentijn Hofman a voyagé dans les ports du monde ? Le Rubber ___ ?",
    "c": [
     "Duck",
     "Boat",
     "Ball",
     "Fish"
    ],
    "a": "Duck"
   },
   {
    "q": "Combien de canards en plastique, tombés d'un cargo en 1992, ont dérivé sur les océans ?",
    "a": "28000"
   }
  ]
 },
 {
  "id": "original_018",
  "cat": "insolite",
  "name": "Les cotons-tiges",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Pour nettoyer quelle partie du corps utilise-t-on (à tort) les cotons-tiges ? Les ___ ?",
    "c": [
     "oreilles",
     "yeux",
     "pieds",
     "cheveux"
    ],
    "a": "oreilles"
   },
   {
    "q": "Quelle matière douce se trouve aux deux bouts d'un coton-tige ? Le ___ ?",
    "c": [
     "coton",
     "papier",
     "plastique",
     "cuir"
    ],
    "a": "coton"
   },
   {
    "q": "Combien d'extrémités ouatées possède un coton-tige classique ?",
    "a": "2"
   },
   {
    "q": "Pourquoi les médecins déconseillent-ils le coton-tige dans l'oreille ? Il pousse le ___ au fond ?",
    "c": [
     "cérumen",
     "sang",
     "eau",
     "sel"
    ],
    "a": "cérumen"
   },
   {
    "q": "Pour des raisons écologiques, par quelle matière le bâtonnet plastique a-t-il été remplacé ? Le ___ ?",
    "c": [
     "papier",
     "métal",
     "verre",
     "os"
    ],
    "a": "papier"
   },
   {
    "q": "Dans quelle activité artistique et de maquillage les cotons-tiges sont-ils aussi utilisés ? Le ___ ?",
    "c": [
     "maquillage",
     "jardinage",
     "bricolage lourd",
     "cuisine"
    ],
    "a": "maquillage"
   },
   {
    "q": "Dans quelle union le coton-tige en plastique jetable est-il interdit à la vente depuis 2020 ? L'Union ___ ?",
    "c": [
     "européenne",
     "africaine",
     "asiatique",
     "américaine"
    ],
    "a": "européenne"
   },
   {
    "q": "En quelle année Leo Gerstenzang a-t-il inventé le coton-tige (Q-tips) ?",
    "a": "1923"
   }
  ]
 },
 {
  "id": "original_019",
  "cat": "insolite",
  "name": "Le Velcro",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Quel bruit caractéristique fait-on en ouvrant une bande Velcro ? Un ___ ?",
    "c": [
     "scratch",
     "clic",
     "pouf",
     "ding"
    ],
    "a": "scratch"
   },
   {
    "q": "À quoi sert le Velcro sur des chaussures d'enfant ? À les ___ sans lacets ?",
    "c": [
     "fermer",
     "peindre",
     "laver",
     "peser"
    ],
    "a": "fermer"
   },
   {
    "q": "De combien de bandes le Velcro est-il composé : les crochets et les ___ ?",
    "c": [
     "boucles",
     "clous",
     "aimants",
     "boutons"
    ],
    "a": "boucles"
   },
   {
    "q": "Quelle observation de la nature a inspiré le Velcro ? Les ___ accrochées aux poils du chien ?",
    "c": [
     "bardanes",
     "fleurs",
     "feuilles",
     "graines de pissenlit"
    ],
    "a": "bardanes"
   },
   {
    "q": "Le Velcro remplace avantageusement quel autre système de fermeture ? Les ___ (à nouer) ?",
    "c": [
     "lacets",
     "clous",
     "vis",
     "aimants"
    ],
    "a": "lacets"
   },
   {
    "q": "Dans quel domaine de pointe le Velcro a-t-il été très utilisé, en apesanteur ? L'___ (espace) ?",
    "c": [
     "astronautique",
     "plongée",
     "boulangerie",
     "musique"
    ],
    "a": "astronautique"
   },
   {
    "q": "De quelle nationalité était George de Mestral, l'inventeur du Velcro ?",
    "c": [
     "suisse",
     "française",
     "américaine",
     "belge"
    ],
    "a": "suisse"
   },
   {
    "q": "En quelle année George de Mestral a-t-il breveté le Velcro ?",
    "a": "1955"
   }
  ]
 },
 {
  "id": "original_020",
  "cat": "insolite",
  "name": "Les tongs",
  "level": "classique",
  "rw": true,
  "levels": [
   {
    "q": "Sur quelle partie du corps porte-t-on des tongs ? Les ___ ?",
    "c": [
     "pieds",
     "mains",
     "oreilles",
     "coudes"
    ],
    "a": "pieds"
   },
   {
    "q": "Entre quels orteils passe la lanière d'une tong ? Le gros orteil et le ___ ?",
    "c": [
     "deuxième",
     "petit",
     "talon",
     "genou"
    ],
    "a": "deuxième"
   },
   {
    "q": "Dans quel lieu de vacances porte-t-on typiquement des tongs ? La ___ ?",
    "c": [
     "plage",
     "banque",
     "église",
     "usine"
    ],
    "a": "plage"
   },
   {
    "q": "Quel bruit font les tongs quand on marche ? Un « ___ » caractéristique ?",
    "c": [
     "flip-flop",
     "toc-toc",
     "cric-crac",
     "bing"
    ],
    "a": "flip-flop"
   },
   {
    "q": "En quelle matière souple sont souvent faites les tongs bon marché ? Le ___ ?",
    "c": [
     "caoutchouc",
     "métal",
     "bois massif",
     "verre"
    ],
    "a": "caoutchouc"
   },
   {
    "q": "Dans quel pays la tong est-elle presque une chaussure nationale, portée partout ? Le ___ ?",
    "c": [
     "Brésil",
     "Canada",
     "Russie",
     "Islande"
    ],
    "a": "Brésil"
   },
   {
    "q": "Quelle grande marque brésilienne de tongs colorées est mondialement connue ?",
    "c": [
     "Havaianas",
     "Nike",
     "Adidas",
     "Crocs"
    ],
    "a": "Havaianas"
   },
   {
    "q": "De quand datent les plus anciennes sandales à lanière entre les orteils (Égypte antique), en années av. J.-C. environ ?",
    "a": "1500"
   }
  ]
 }
];
