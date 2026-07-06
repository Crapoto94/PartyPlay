const fs = require('fs');
const content = fs.readFileSync(__dirname + '/ttcq.js', 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const themes = JSON.parse(content.substring(start, end + 1));
const r = {};

// ---------- TECH (16 themes) ----------
r.tech_001 = [ // Smartphones
  {q:"Quel système d'exploitation équipe la majorité des smartphones ?",c:["Android","iOS","Windows Mobile","HarmonyOS"],a:0},
  {q:"Qui a inventé le premier smartphone ?",c:["IBM (Simon)","Apple (iPhone)","BlackBerry","Nokia"],a:0},
  {q:"En quelle année le premier iPhone est-il sorti ?",c:["2007","2005","2008","2006"],a:0},
  {q:"Qu'est-ce qu'une application mobile ?",c:["Logiciel pour smartphone","Site web mobile","Jeu","Navigateur"],a:0},
  {q:"Quelle technologie permet de payer sans contact ?",c:["NFC","Bluetooth","Wi-Fi","5G"],a:0},
  {q:"Quel fabricant coréen domine le marché des smartphones ?",c:["Samsung","LG","Huawei","Xiaomi"],a:0},
  {q:"Qu'est-ce qu'un processeur mobile ?",c:["Puce qui exécute les calculs","Batterie","Écran","Appareil photo"],a:0},
  {q:"Combien de smartphones sont vendus chaque année dans le monde ?",c:["Environ 1,5 milliard","Environ 500 millions","Environ 3 milliards","Environ 800 millions"],a:0},
];
r.tech_002 = [ // Internet
  {q:"Quand Internet a-t-il été créé ?",c:["Années 1960 (ARPANET)","Années 1980","Années 1990","Années 1970"],a:0},
  {q:"Qui a inventé le World Wide Web ?",c:["Tim Berners-Lee","Vint Cerf","Robert Cailliau","Marc Andreessen"],a:0},
  {q:"Que signifie l'acronyme WWW ?",c:["World Wide Web","Web Wide World","World Web Wide","Wide World Web"],a:0},
  {q:"Quel protocole est utilisé pour les sites web ?",c:["HTTP","FTP","SMTP","TCP/IP"],a:0},
  {q:"En quelle année le premier site web a-t-il été mis en ligne ?",c:["1991","1990","1993","1989"],a:0},
  {q:"Qu'est-ce qu'un navigateur web ?",c:["Logiciel pour consulter des sites web","Moteur de recherche","Réseau social","Application"],a:0},
  {q:"Combien d'internautes y a-t-il dans le monde ?",c:["Environ 5,5 milliards","Environ 3 milliards","Environ 4 milliards","Environ 6 milliards"],a:0},
  {q:"Que signifie le 'S' dans HTTPS ?",c:["Secure","Safe","Server","Socket"],a:0},
];
r.tech_003 = [ // Intelligence artificielle
  {q:"Qu'est-ce que l'IA ?",c:["Simulation de l'intelligence humaine par des machines","Intelligence humaine","Robotique","Programmation"],a:0},
  {q:"Qui a organisé la conférence de Dartmouth en 1956 qui a fondé l'IA ?",c:["John McCarthy","Alan Turing","Marvin Minsky","Herbert Simon"],a:0},
  {q:"Qu'est-ce que l'apprentissage automatique (machine learning) ?",c:["Sous-domaine de l'IA qui apprend à partir de données","Programmation classique","Réseau de neurones","Raisonnement symbolique"],a:0},
  {q:"Quel jeu de plateau a été dominé par l'IA Deep Blue en 1997 ?",c:["Les échecs","Le go","Les dames","Le poker"],a:0},
  {q:"Que teste le test de Turing ?",c:["La capacité d'une machine à imiter un humain","L'intelligence d'un robot","La vitesse d'un ordinateur","La mémoire d'une IA"],a:0},
  {q:"Quel réseau social utilise le plus d'IA pour ses recommandations ?",c:["TikTok","Facebook","Instagram","Twitter"],a:0},
  {q:"Qu'est-ce que ChatGPT ?",c:["IA conversationnelle générative","Moteur de recherche","Réseau social","Navigateur"],a:0},
  {q:"Qui a créé le terme 'intelligence artificielle' ?",c:["John McCarthy","Alan Turing","Marvin Minsky","Norbert Wiener"],a:0},
];
r.tech_004 = [ // Jeux vidéo
  {q:"Quel est le premier jeu vidéo de l'histoire ?",c:["Pong","Space Invaders","Pac-Man","Tetris"],a:0},
  {q:"En quelle année Pong est-il sorti ?",c:["1972","1975","1970","1978"],a:0},
  {q:"Quelle console Nintendo a révolutionné le jeu vidéo en 1985 ?",c:["NES","SNES","Game Boy","Nintendo 64"],a:0},
  {q:"Quel jeu est le plus vendu de tous les temps ?",c:["Minecraft","Tetris","Grand Theft Auto V","Wii Sports"],a:0},
  {q:"Qu'est-ce qu'un FPS ?",c:["Jeu de tir à la première personne","Jeu de stratégie","Jeu de rôle","Jeu de sport"],a:0},
  {q:"Quelle société a créé la PlayStation ?",c:["Sony","Nintendo","Microsoft","Sega"],a:0},
  {q:"Quel jeu de Battle Royale est le plus populaire ?",c:["Fortnite","PUBG","Apex Legends","Call of Duty Warzone"],a:0},
  {q:"Combien de ventes totales pour la franchise Pokemon ?",c:["Plus de 500 millions","Plus de 300 millions","Plus de 800 millions","Plus de 1 milliard"],a:0},
];
r.tech_005 = [ // Réalité virtuelle
  {q:"Qu'est-ce que la réalité virtuelle (VR) ?",c:["Environnement simulé immersif","Jeu vidéo","Film 3D","Réalité augmentée"],a:0},
  {q:"Qui a créé le premier casque VR moderne ?",c:["Palmer Luckey (Oculus)","Sony","HTC","Valve"],a:0},
  {q:"En quelle année Oculus VR a-t-il été fondé ?",c:["2012","2010","2014","2008"],a:0},
  {q:"Qu'est-ce que la réalité augmentée (AR) ?",c:["Superposition d'éléments virtuels sur le monde réel","VR","Film 3D","Simulation"],a:0},
  {q:"Quel jeu mobile a popularisé la réalité augmentée ?",c:["Pokémon Go","Minecraft Earth","Harry Potter Wizards Unite","Ingress"],a:0},
  {q:"Quel casque VR est autonome (sans fil) ?",c:["Oculus Quest 2","HTC Vive","PlayStation VR","Valve Index"],a:0},
  {q:"Quelle différence entre VR et AR ?",c:["VR crée un monde virtuel, AR superpose au réel","AR est plus réaliste","VR utilise un casque","AR est moins cher"],a:0},
  {q:"Quelle entreprise a racheté Oculus en 2014 ?",c:["Facebook (Meta)","Google","Microsoft","Apple"],a:0},
];
r.tech_006 = [ // Réseaux sociaux
  {q:"Quel est le plus grand réseau social du monde ?",c:["Facebook","Instagram","TikTok","YouTube"],a:0},
  {q:"En quelle année Facebook a-t-il été créé ?",c:["2004","2006","2003","2005"],a:0},
  {q:"Qui a fondé Facebook ?",c:["Mark Zuckerberg","Eduardo Saverin","Andrew McCollum","Dustin Moskovitz"],a:0},
  {q:"Quel réseau social est basé sur des messages éphémères ?",c:["Snapchat","TikTok","Instagram","Twitter"],a:0},
  {q:"Quel réseau social a été racheté par Elon Musk en 2022 ?",c:["Twitter (devenu X)","Snapchat","Instagram","LinkedIn"],a:0},
  {q:"Quel réseau social est principalement professionnel ?",c:["LinkedIn","Facebook","Instagram","TikTok"],a:0},
  {q:"Combien d'utilisateurs actifs Facebook a-t-il ?",c:["Environ 3 milliards","Environ 2 milliards","Environ 1,5 milliard","Environ 4 milliards"],a:0},
  {q:"Quel pays a banni Facebook en 2009 ?",c:["Chine","Russie","Iran","Corée du Nord"],a:0},
];
r.tech_007 = [ // Robotique
  {q:"Que signifie le mot 'robot' ?",c:["Travail forcé en tchèque","Machine automatique","Androïde","Automate"],a:0},
  {q:"Qui a inventé le mot 'robot' ?",c:["Karel Čapek","Isaac Asimov","Alan Turing","Joseph Engelberger"],a:0},
  {q:"Qui a créé les trois lois de la robotique ?",c:["Isaac Asimov","Karel Čapek","Alan Turing","George Devol"],a:0},
  {q:"Quel robot industriel a été le premier ?",c:["Unimate","ASIMO","Roomba","Atlas"],a:0},
  {q:"En quelle année Unimate a-t-il été introduit ?",c:["1961","1950","1970","1980"],a:0},
  {q:"Quel robot humanoïde est fabriqué par Boston Dynamics ?",c:["Atlas","ASIMO","Nao","Pepper"],a:0},
  {q:"Qu'est-ce qu'un cobot ?",c:["Robot collaboratif travaillant avec les humains","Robot industriel","Robot autonome","Robot médical"],a:0},
  {q:"Dans quel secteur la robotique progresse-t-elle le plus ?",c:["Industrie manufacturière","Médecine","Agriculture","Services"],a:0},
];
r.tech_008 = [ // Cloud computing
  {q:"Que signifie le 'cloud' en informatique ?",c:["Stockage et services via Internet","Serveur local","Logiciel","Réseau"],a:0},
  {q:"Quels sont les trois principaux fournisseurs de cloud ?",c:["AWS, Azure, Google Cloud","Amazon, Microsoft, Apple","Google, IBM, Oracle","Salesforce, SAP, Adobe"],a:0},
  {q:"Qu'est-ce que le SaaS ?",c:["Logiciel en tant que service","Stockage en ligne","Serveur virtuel","Plateforme cloud"],a:0},
  {q:"Quelle entreprise domine le marché du cloud ?",c:["Amazon Web Services (AWS)","Microsoft Azure","Google Cloud","Alibaba Cloud"],a:0},
  {q:"Qu'est-ce que l'IaaS ?",c:["Infrastructure en tant que service","Internet en tant que service","Logiciel en tant que service","Plateforme en tant que service"],a:0},
  {q:"En quelle année AWS a-t-il été lancé ?",c:["2006","2008","2004","2010"],a:0},
  {q:"Qu'est-ce que le stockage cloud ?",c:["Stockage de données sur des serveurs distants","Disque dur externe","Mémoire vive","Stockage local"],a:0},
  {q:"Quel service cloud est utilisé pour le streaming vidéo ?",c:["Netflix","AWS","Azure","Google Drive"],a:0},
];
r.tech_009 = [ // Cryptographie
  {q:"Qu'est-ce que la cryptographie ?",c:["Science du codage secret des informations","Étude des codes","Programmation sécurisée","Mathématiques"],a:0},
  {q:"Quel type de cryptographie utilise la même clé pour chiffrer et déchiffrer ?",c:["Cryptographie symétrique","Cryptographie asymétrique","Chiffrement par bloc","Chiffrement par flux"],a:0},
  {q:"Qui a inventé la machine Enigma ?",c:["Arthur Scherbius","Alan Turing","Marian Rejewski","Gordon Welchman"],a:0},
  {q:"Qu'est-ce que le chiffrement RSA ?",c:["Algorithme à clé publique","Algorithme symétrique","Fonction de hachage","Protocole"],a:0},
  {q:"Qui a inventé le RSA ?",c:["Rivest, Shamir, Adleman","Diffie et Hellman","Shannon","Turing"],a:0},
  {q:"Qu'est-ce que la blockchain ?",c:["Base de données distribuée et sécurisée","Cryptomonnaie","Contrat intelligent","Registre"],a:0},
  {q:"Qu'est-ce qu'une fonction de hachage ?",c:["Fonction qui transforme des données en empreinte","Algorithme de chiffrement","Clé cryptographique","Code secret"],a:0},
  {q:"Quelle cryptomonnaie a été créée en 2009 ?",c:["Bitcoin","Ethereum","Litecoin","Ripple"],a:0},
];
r.tech_010 = [ // Drones
  {q:"Qu'est-ce qu'un drone ?",c:["Véhicule aérien sans pilote","Avion téléguidé","Hélicoptère miniature","Quadricoptère"],a:0},
  {q:"Quel pays utilise le plus de drones militaires ?",c:["États-Unis","Chine","Israël","Russie"],a:0},
  {q:"Quelle entreprise domine le marché des drones civils ?",c:["DJI","Parrot","Autel","Syma"],a:0},
  {q:"Comment s'appelle le pilote d'un drone ?",c:["Télépilote","Pilote","Navigateur","Opérateur"],a:0},
  {q:"Quelle est la réglementation pour les drones en France ?",c:["Déclaration obligatoire","Aucune restriction","Interdit","Permis requis"],a:0},
  {q:"Quel type de drone est utilisé pour les livraisons ?",c:["Drone multirotor","Drone à voilure fixe","Drone VTOL","Drone miniature"],a:0},
  {q:"Qu'est-ce qu'un drone FPV ?",c:["Drone piloté en vue subjective (First Person View)","Drone de course","Drone caméra","Drone professionnel"],a:0},
  {q:"Combien de moteurs un quadricoptère a-t-il ?",c:["4","3","6","8"],a:0},
];
r.tech_011 = [ // Impression 3D
  {q:"Qu'est-ce que l'impression 3D ?",c:["Fabrication additive par couches","Impression classique","Fraisage","Moulage"],a:0},
  {q:"Quel matériau est le plus utilisé en impression 3D domestique ?",c:["PLA (plastique biodégradable)","ABS","Résine","Métal"],a:0},
  {q:"En quelle année la première imprimante 3D a-t-elle été inventée ?",c:["1983","1990","1985","1978"],a:0},
  {q:"Qui a inventé l'impression 3D ?",c:["Chuck Hull","Scott Crump","Carl Deckard","S. Scott Crump"],a:0},
  {q:"Quel acronyme désigne la technique FDM ?",c:["Fused Deposition Modeling","3D Printing","Stereolithography","Selective Laser Sintering"],a:0},
  {q:"Quel secteur utilise le plus l'impression 3D ?",c:["Prototypage","Médical","Aérospatial","Automobile"],a:0},
  {q:"Qu'est-ce qu'un fichier STL ?",c:["Format de fichier pour l'impression 3D","Format image","Format vidéo","Format texte"],a:0},
  {q:"Combien de couches une impression 3D peut-elle avoir ?",c:["Des milliers","Quelques centaines","Une centaine","Une dizaine"],a:0},
];
r.tech_012 = [ // Batteries
  {q:"Quel type de batterie est le plus utilisé dans les appareils électroniques ?",c:["Lithium-ion","Nickel-cadmium","Plomb-acide","Nickel-hydrure métallique"],a:0},
  {q:"Qui a inventé la batterie lithium-ion ?",c:["John B. Goodenough","Akira Yoshino","Stanley Whittingham","Tous les trois (prix Nobel 2019)"],a:3},
  {q:"Quelle est la capacité typique d'une batterie de smartphone ?",c:["4000-5000 mAh","2000-3000 mAh","1000-2000 mAh","6000-7000 mAh"],a:0},
  {q:"Qu'est-ce que le temps de charge ?",c:["Temps pour recharger complètement","Temps de décharge","Durée de vie","Cycle de charge"],a:0},
  {q:"Combien de cycles peut supporter une batterie lithium-ion ?",c:["300-500 cycles","1000-2000 cycles","100-200 cycles","500-1000 cycles"],a:0},
  {q:"Quel matériau est utilisé dans les batteries des voitures électriques ?",c:["Lithium-ion","Plomb-acide","Nickel-cadmium","Sodium-ion"],a:0},
  {q:"Qu'est-ce que la recharge sans fil ?",c:["Transfert d'énergie par induction","Charge par câble","Charge par USB","Charge solaire"],a:0},
  {q:"Quelle entreprise produit le plus de batteries lithium-ion ?",c:["CATL (Chine)","Samsung SDI","LG Energy Solution","Panasonic"],a:0},
];
r.tech_013 = [ // LED
  {q:"Que signifie LED ?",c:["Diode électroluminescente","Diode émettrice de lumière","Lumière électrique","Diode lumineuse"],a:0},
  {q:"Qui a inventé la LED bleue (prix Nobel 2014) ?",c:["Isamu Akasaki, Hiroshi Amano, Shuji Nakamura","Thomas Edison","Nikola Tesla","James Watt"],a:0},
  {q:"Quelle est la couleur de la première LED ?",c:["Rouge","Bleue","Verte","Jaune"],a:0},
  {q:"En quelle année la première LED rouge a-t-elle été inventée ?",c:["1962","1955","1970","1980"],a:0},
  {q:"Quel avantage ont les LED par rapport aux ampoules classiques ?",c:["Efficacité énergétique et longue durée","Moins chères","Plus lumineuses","Plus légères"],a:0},
  {q:"Qu'est-ce que l'OLED ?",c:["LED organique","LED classique","LED bleue","LED rouge"],a:0},
  {q:"Combien de temps dure une LED en moyenne ?",c:["25 000-50 000 heures","10 000-20 000 heures","50 000-100 000 heures","5 000-10 000 heures"],a:0},
  {q:"Dans quel type d'écran utilise-t-on des LED ?",c:["Écrans LCD, OLED, QLED","Écrans CRT","Écrans plasma","Écrans à tubes"],a:0},
];
r.tech_014 = [ // Panneaux solaires
  {q:"Qu'est-ce qu'un panneau solaire photovoltaïque ?",c:["Dispositif qui convertit la lumière en électricité","Capteur thermique","Chauffe-eau","Batterie"],a:0},
  {q:"Quel matériau est le plus utilisé dans les panneaux solaires ?",c:["Silicium","Cuivre","Aluminium","Verre"],a:0},
  {q:"Qui a inventé la cellule photovoltaïque ?",c:["Charles Fritts","Albert Einstein","Alexander Becquerel","Russell Ohl"],a:2},
  {q:"En quelle année la première cellule solaire a-t-elle été fabriquée ?",c:["1883","1950","1900","1960"],a:0},
  {q:"Quelle est l'efficacité d'un panneau solaire standard ?",c:["15-22%","30-40%","50-60%","10-15%"],a:0},
  {q:"Quel pays est le plus grand producteur d'énergie solaire ?",c:["Chine","États-Unis","Allemagne","Inde"],a:0},
  {q:"Qu'est-ce qu'un onduleur solaire ?",c:["Convertit le courant continu en courant alternatif","Régulateur de tension","Batterie","Panneau"],a:0},
  {q:"Combien de panneaux faut-il pour alimenter une maison française moyenne ?",c:["8-12 panneaux","2-4 panneaux","15-20 panneaux","4-6 panneaux"],a:0},
];
r.tech_015 = [ // 5G
  {q:"Que signifie 5G ?",c:["Cinquième génération de réseau mobile","5 gigabits","5 GHz","5Giga"],a:0},
  {q:"Quelle est la différence principale entre 4G et 5G ?",c:["Débit plus élevé et latence plus faible","Même chose","Plus de couverture","Moins de consommation"],a:0},
  {q:"En quelle année la 5G a-t-elle été lancée commercialement ?",c:["2019","2020","2018","2021"],a:0},
  {q:"Quel pays a déployé la 5G le plus rapidement ?",c:["Chine","Corée du Sud","États-Unis","Japon"],a:1},
  {q:"Quelle bande de fréquences utilise la 5G ?",c:["Sub-6 GHz et mmWave","2,4 GHz","5 GHz","3,5 GHz"],a:0},
  {q:"Qu'est-ce que la latence 5G ?",c:["1-10 ms","20-30 ms","50-100 ms","100-200 ms"],a:0},
  {q:"Quels secteurs bénéficient le plus de la 5G ?",c:["Industrie, santé, transports","Jeux vidéo","Réseaux sociaux","Télétravail"],a:0},
  {q:"Quelle est la vitesse théorique maximale de la 5G ?",c:["Jusqu'à 20 Gbit/s","Jusqu'à 1 Gbit/s","Jusqu'à 5 Gbit/s","Jusqu'à 10 Gbit/s"],a:0},
];
r.tech_016 = [ // Moteurs électriques
  {q:"Qui a inventé le moteur électrique ?",c:["Michael Faraday","Nikola Tesla","Thomas Edison","James Watt"],a:0},
  {q:"En quelle année le premier moteur électrique a-t-il été inventé ?",c:["1821","1850","1800","1900"],a:0},
  {q:"Quel type de moteur est utilisé dans les voitures électriques ?",c:["Moteur synchrone à aimants permanents","Moteur à courant continu","Moteur pas à pas","Moteur universel"],a:0},
  {q:"Quelle est la différence entre moteur AC et DC ?",c:["AC utilise courant alternatif, DC courant continu","AC est plus petit","DC est plus efficace","AC est moins cher"],a:0},
  {q:"Quel véhicule électrique utilise un moteur dans chaque roue ?",c:["Voitures électriques modernes","Vélos électriques","Trottinettes","Bus électriques"],a:0},
  {q:"Qu'inventeur a développé le moteur à induction ?",c:["Nikola Tesla","Michael Faraday","Galileo Ferraris","Thomas Edison"],a:0},
  {q:"Qu'est-ce qu'un moteur brushless ?",c:["Moteur sans balais","Moteur à balais","Moteur à induction","Moteur synchrone"],a:0},
  {q:"Quel type de moteur équipe les robots industriels ?",c:["Moteurs pas à pas et servomoteurs","Moteurs à courant continu","Moteurs à induction","Moteurs universels"],a:0},
];

// ---------- AUTO (10 themes) ----------
r.auto_001 = [ // Moteurs essence
  {q:"Qui a inventé le moteur à essence ?",c:["Carl Benz","Nikolaus Otto","Gottlieb Daimler","Rudolf Diesel"],a:0},
  {q:"Quelle est la différence entre un moteur 2 temps et 4 temps ?",c:["Le nombre de cycles du piston","La puissance","La taille","La cylindrée"],a:0},
  {q:"Qu'est-ce que la cylindrée d'un moteur ?",c:["Volume total des cylindres","Puissance","Couple","Consommation"],a:0},
  {q:"En quelle année le premier moteur à essence a-t-il été fabriqué ?",c:["1876","1885","1890","1900"],a:0},
  {q:"Qu'est-ce que le rendement d'un moteur à essence ?",c:["Environ 30%","Environ 50%","Environ 70%","Environ 20%"],a:0},
  {q:"Quel type de carburant utilise un moteur essence ?",c:["Essence (SP95, SP98)","Diesel","GPL","Électricité"],a:0},
  {q:"Qu'est-ce qu'un turbo dans un moteur ?",c:["Compresseur entraîné par les gaz d'échappement","Soupape","Bougie","Injecteur"],a:0},
  {q:"Combien de bougies d'allumage a un moteur 4 cylindres ?",c:["4","2","6","8"],a:0},
];
r.auto_002 = [ // Voitures électriques
  {q:"Quelle entreprise domine le marché des voitures électriques ?",c:["Tesla","BYD","Volkswagen","Toyota"],a:0},
  {q:"Quel est l'avantage principal d'une voiture électrique ?",c:["Zéro émission directe","Autonomie","Prix","Vitesse"],a:0},
  {q:"Combien de temps faut-il pour recharger une voiture électrique ?",c:["30 min à 8h selon la borne","5 min","1h","15 min"],a:0},
  {q:"Qu'est-ce qu'une batterie lithium-ion dans une voiture électrique ?",c:["Source d'énergie","Moteur","Transmission","Système de refroidissement"],a:0},
  {q:"Quelle est l'autonomie moyenne d'une voiture électrique moderne ?",c:["300-500 km","100-200 km","500-700 km","700-900 km"],a:0},
  {q:"En quelle année Tesla a-t-elle sorti la Model S ?",c:["2012","2010","2014","2008"],a:0},
  {q:"Qu'est-ce qu'une borne de recharge rapide ?",c:["Borne délivrant une puissance élevée (50-350 kW)","Prise domestique","Câble de recharge","Chargeur mural"],a:0},
  {q:"Quel pays interdit la vente de voitures thermiques neuves en 2035 ?",c:["Union européenne","États-Unis","Chine","Japon"],a:0},
];
r.auto_003 = [ // Pneus
  {q:"Qui a inventé le pneu gonflable ?",c:["John Boyd Dunlop","André Michelin","Édouard Michelin","Charles Goodyear"],a:0},
  {q:"Qu'est-ce que l'indice de charge d'un pneu ?",c:["Poids maximal supporté","Vitesse maximale","Pression","Taille"],a:0},
  {q:"Quand faut-il changer ses pneus hiver ?",c:["De novembre à mars","Toute l'année","En été","En automne"],a:0},
  {q:"Quelle pression doit avoir un pneu de voiture ?",c:["2,0-2,5 bars","1,0-1,5 bars","3,0-3,5 bars","0,5-1,0 bars"],a:0},
  {q:"Qu'est-ce qu'un pneu 'runflat' ?",c:["Pneu qui roule à plat après une crevaison","Pneu hiver","Pneu été","Pneu sport"],a:0},
  {q:"Combien de pneus une voiture a-t-elle ?",c:["4","3","5","6"],a:0},
  {q:"Quel manufacturier a créé le pneu vert ?",c:["Michelin","Goodyear","Pirelli","Bridgestone"],a:0},
  {q:"Comment s'appelle la sculpture du pneu ?",c:["Bande de roulement","Semelle","Gomme","Profil"],a:0},
];
r.auto_004 = [ // Boîtes de vitesses
  {q:"Qu'est-ce qu'une boîte de vitesses ?",c:["Système qui transmet la puissance du moteur aux roues","Moteur","Embrayage","Différentiel"],a:0},
  {q:"Quelle est la différence entre boîte manuelle et automatique ?",c:["Manuelle nécessite un embrayage, automatique non","Manuelle est plus rapide","Automatique consomme plus","Manuelle est plus moderne"],a:0},
  {q:"Combien de vitesses a une boîte manuelle standard ?",c:["5 ou 6","3 ou 4","7 ou 8","2 ou 3"],a:0},
  {q:"Qui a inventé la boîte de vitesses synchronisée ?",c:["Charles Kettering","Henry Ford","Louis Renault","Ettore Bugatti"],a:0},
  {q:"Qu'est-ce qu'une boîte DSG ?",c:["Boîte à double embrayage","Boîte automatique","Boîte séquentielle","Boîte CVT"],a:0},
  {q:"Qu'est-ce que l'embrayage ?",c:["Dispositif qui accouple/désaccouple le moteur de la transmission","Pédale","Volant moteur","Frein"],a:0},
  {q:"Quelle est la fonction du point mort ?",c:["Aucune transmission de puissance","Freiner","Accélérer","Ralentir"],a:0},
  {q:"Qu'est-ce qu'une boîte CVT ?",c:["Transmission à variation continue","Boîte manuelle","Boîte automatique","Boîte séquentielle"],a:0},
];
r.auto_005 = [ // Rallye
  {q:"Quelle est la course de rallye la plus célèbre ?",c:["Rallye Monte-Carlo","Rallye Dakar","Rallye de Finlande","Rallye de Suède"],a:0},
  {q:"Qu'est-ce qu'un rallye automobile ?",c:["Course sur routes fermées avec des spéciales chronométrées","Course sur circuit","Course tout-terrain","Course de côte"],a:0},
  {q:"Quel pilote français a remporté le championnat du monde des rallyes ?",c:["Sébastien Loeb","Didier Auriol","Sébastien Ogier","Tous les trois"],a:3},
  {q:"Combien de titres Loeb a-t-il gagnés ?",c:["9","8","7","6"],a:0},
  {q:"Quel constructeur domine le WRC dans les années 2010-2020 ?",c:["Hyundai","Toyota","Ford","Citroën"],a:0},
  {q:"Comment s'appelle le copilote en rallye ?",c:["Navigateur","Coéquipier","Copilote","Guide"],a:0},
  {q:"Qu'est-ce qu'un 'spéciale' en rallye ?",c:["Section chronométrée sur route fermée","Étape de liaison","Parc d'assistance","Essai"],a:0},
  {q:"Quelle voiture emblématique a dominé le rallye dans les années 1980 ?",c:["Lancia Delta Integrale","Peugeot 205 T16","Audi Quattro","Toyota Celica"],a:0},
];
r.auto_006 = [ // Courses de dragsters
  {q:"Qu'est-ce qu'un dragster ?",c:["Voiture de course ultra-rapide sur 1/4 de mile","Voiture de rallye","Voiture de circuit","Voiture de drift"],a:0},
  {q:"Quelle distance parcourt un dragster ?",c:["402 mètres (1/4 mile)","1 km","100 mètres","200 mètres"],a:0},
  {q:"Quelle vitesse atteint un dragster Top Fuel ?",c:["Plus de 500 km/h","Plus de 300 km/h","Plus de 400 km/h","Plus de 600 km/h"],a:0},
  {q:"En combien de temps un dragster fait le 1/4 mile ?",c:["Moins de 4 secondes","Moins de 6 secondes","Moins de 8 secondes","Moins de 10 secondes"],a:0},
  {q:"Quel type de carburant utilise un dragster ?",c:["Nitrométhane","Essence","Méthanol","Gaz"],a:0},
  {q:"Qu'est-ce que le 'Christmas Tree' en dragster ?",c:["Feu de signalisation de départ","Arbre de Noël","Drapeau","Chronomètre"],a:0},
  {q:"Quel pays organise les plus grandes compétitions de dragster ?",c:["États-Unis","Australie","Royaume-Uni","Canada"],a:0},
  {q:"Qu'est-ce qu'un wheelie en dragster ?",c:["La roue avant se lève","La voiture dérape","Le moteur cale","La voiture vibre"],a:0},
];
r.auto_007 = [ // Motos
  {q:"Qui a inventé la première moto ?",c:["Gottlieb Daimler","Carl Benz","Wilhelm Maybach","Henry Ford"],a:0},
  {q:"En quelle année la première moto a-t-elle été fabriquée ?",c:["1885","1890","1880","1900"],a:0},
  {q:"Quelle est la cylindrée minimale pour passer le permis A2 ?",c:["395 cm³","250 cm³","500 cm³","600 cm³"],a:0},
  {q:"Quel constructeur japonais domine le marché mondial de la moto ?",c:["Honda","Yamaha","Kawasaki","Suzuki"],a:0},
  {q:"Qu'est-ce qu'un motard ?",c:["Personne qui conduit une moto","Passager","Pilote","Moniteur"],a:0},
  {q:"Quelle est la vitesse maximale d'une moto de sport ?",c:["Plus de 300 km/h","Plus de 200 km/h","Plus de 250 km/h","Plus de 350 km/h"],a:0},
  {q:"Qu'est-ce qu'un guidon de moto ?",c:["Pièce qui permet de diriger la moto","Selle","Poignée","Rétroviseur"],a:0},
  {q:"Quel pilote français est champion du monde MotoGP ?",c:["Fabio Quartararo","Johann Zarco","Randy de Puniet","Olivier Jacque"],a:0},
];
r.auto_008 = [ // Tuning
  {q:"Que signifie le tuning automobile ?",c:["Personnalisation et modification des véhicules","Réparation","Nettoyage","Conduite sportive"],a:0},
  {q:"Qu'est-ce qu'un kit carrosserie ?",c:["Ensemble de pièces esthétiques pour modifier l'apparence","Kit de réparation","Kit d'outils","Kit de peinture"],a:0},
  {q:"Qu'est-ce qu'un spoiler sur une voiture ?",c:["Aileron qui améliore l'appui aérodynamique","Pare-chocs","Rétroviseur","Feu"],a:0},
  {q:"Quelle modification est souvent recherchée en tuning ?",c:["Jantes, suspension, échappement","Peinture","Sièges","Autoradio"],a:0},
  {q:"Qu'est-ce qu'un 'lowrider' ?",c:["Voiture avec suspension abaissée","Voiture surélevée","Voiture rapide","Voiture ancienne"],a:0},
  {q:"Qu'est-ce qu'un néon sous une voiture ?",c:["Éclairage décoratif sous le châssis","Feu de détresse","Phare","Clignotant"],a:0},
  {q:"Quel film a popularisé le tuning dans les années 2000 ?",c:["Fast and Furious","Taxi","Need for Speed","2 Fast 2 Furious"],a:0},
  {q:"Qu'est-ce qu'une jante en tuning ?",c:["Roue modifiée pour l'esthétique et les performances","Pneu","Enjoliveur","Moyeu"],a:0},
];
r.auto_009 = [ // Le Mans
  {q:"Qu'est-ce que les 24 Heures du Mans ?",c:["Course d'endurance automobile de 24 heures","Course de Formule 1","Rallye","Course de vitesse"],a:0},
  {q:"En quelle année la première course du Mans a-t-elle eu lieu ?",c:["1923","1920","1930","1910"],a:0},
  {q:"Quel constructeur a le plus de victoires au Mans ?",c:["Porsche","Audi","Ferrari","Toyota"],a:0},
  {q:"Combien de kilomètres parcourt la voiture gagnante ?",c:["Environ 5 000 km","Environ 3 000 km","Environ 4 000 km","Environ 6 000 km"],a:0},
  {q:"Comment s'appelle le célèbre virage du circuit du Mans ?",c:["Les Hunaudières","Le Tertre Rouge","Mulsanne","Indianapolis"],a:0},
  {q:"Quel pilote français a gagné le Mans ?",c:["Henri Pescarolo","Yannick Dalmas","Romain Dumas","Sébastien Bourdais"],a:0},
  {q:"Qu'est-ce que la ligne droite des Hunaudières ?",c:["Longue ligne droite de 6 km","Virage","Stand","Chicane"],a:0},
  {q:"En quelle année les voitures hybrides ont-elles gagné le Mans pour la première fois ?",c:["2012","2010","2014","2008"],a:0},
];
r.auto_010 = [ // Formule 1
  {q:"Quel pilote a le plus de championnats du monde de F1 ?",c:["Lewis Hamilton et Michael Schumacher","Max Verstappen","Juan Manuel Fangio","Alain Prost"],a:0},
  {q:"Combien de titres ont Hamilton et Schumacher ?",c:["7","6","8","5"],a:0},
  {q:"Quel constructeur a le plus de titres en F1 ?",c:["Ferrari","Mercedes","Williams","McLaren"],a:0},
  {q:"En quelle année le premier championnat de F1 a-t-il eu lieu ?",c:["1950","1947","1955","1960"],a:0},
  {q:"Quel pilote français est quadruple champion du monde de F1 ?",c:["Alain Prost","Jackie Stewart","Niki Lauda","Jim Clark"],a:0},
  {q:"Quel est le circuit le plus célèbre de F1 ?",c:["Monaco","Silverstone","Monza","Spa-Francorchamps"],a:0},
  {q:"Combien de moteurs V6 turbo hybride une F1 utilise-t-elle par saison ?",c:["4","3","5","6"],a:0},
  {q:"Qui est le plus jeune champion du monde de F1 ?",c:["Sebastian Vettel","Lewis Hamilton","Max Verstappen","Fernando Alonso"],a:0},
];

// ---------- TV (10 themes) ----------
r.tv_001 = [ // Le Mans (séries policières - coté tv)
  {q:"Quelle série policière française est la plus ancienne ?",c:["Les Brigades du Tigre","Les Cinq Dernières Minutes","Inspecteur Leclerc","Commissaire Moulin"],a:1},
  {q:"Quel acteur joue le commissaire Maigret ?",c:["Bruno Cremer","Jean Richard","Pierre Renoir","Tous ces acteurs"],a:3},
  {q:"Quelle série policière américaine a eu le plus de saisons ?",c:["Law & Order","NCIS","Criminal Minds","CSI"],a:0},
  {q:"Quelle série française met en scène une brigade de police marseillaise ?",c:["Plus belle la vie","Julie Lescaut","Commissaire Magellan","Section de recherches"],a:3},
  {q:"Quel acteur joue Navarro ?",c:["Roger Hanin","Bruno Cremer","Pierre Mondy","André Dussollier"],a:0},
  {q:"Comment s'appelle l'inspecteur dans 'Les Cordier, juge et flic' ?",c:["Cordier","Navarro","Maigret","Boullier"],a:0},
  {q:"Quelle série policière britannique met en scène Sherlock Holmes moderne ?",c:["Sherlock","Midsomer Murders","Inspector Morse","Vera"],a:0},
  {q:"Qu'est-ce qu'un 'cold case' dans une série policière ?",c:["Affaire classée non résolue","Meurtre","Enquête","Procès"],a:0},
];
r.tv_002 = [ // Séries Netflix
  {q:"Quelle est la série la plus regardée sur Netflix en anglais ?",c:["Stranger Things","The Crown","Squid Game","Bridgerton"],a:0},
  {q:"En quelle année Netflix a-t-il lancé ses premières séries originales ?",c:["2013","2015","2011","2017"],a:0},
  {q:"Quelle série française Netflix a connu un succès mondial ?",c:["Lupin","Dix pour cent","Le Bazar de la Charité","Family Business"],a:0},
  {q:"Qui joue le rôle d'Assane Diop dans Lupin ?",c:["Omar Sy","Vincent Cassel","Jean Dujardin","Reda Kateb"],a:0},
  {q:"Quelle série sud-coréenne Netflix a battu tous les records en 2021 ?",c:["Squid Game","Hellbound","All of Us Are Dead","The Glory"],a:0},
  {q:"Combien de saisons compte 'Stranger Things' (2024) ?",c:["4","3","5","2"],a:0},
  {q:"Quel acteur joue le Prince Philip dans The Crown ?",c:["Matt Smith","Tobias Menzies","Jonathan Pryce","Tous"],a:3},
  {q:"Quelle série Netflix raconte l'histoire de la reine Elizabeth II ?",c:["The Crown","The Queen","Windsor","Royalty"],a:0},
];
r.tv_003 = [ // Journal télévisé
  {q:"Quel est le premier journal télévisé français ?",c:["JT de 20h","La Une","Le journal télévisé","Actualités télévisées"],a:0},
  {q:"Qui a présenté le JT de 20h le plus longtemps sur TF1 ?",c:["Jean-Pierre Pernaut","Claire Chazal","Patrick Poivre d'Arvor","Gilles Bouleau"],a:0},
  {q:"Quelle chaîne a le JT de 20h le plus regardé en France ?",c:["TF1","France 2","M6","CNews"],a:0},
  {q:"En quelle année le premier JT a-t-il été diffusé en France ?",c:["1949","1955","1960","1945"],a:0},
  {q:"Qu'est-ce qu'un duplex en journalisme ?",c:["Liaison en direct avec un reporter","Interview","Plateau","Reportage"],a:0},
  {q:"Qui a présenté le JT de France 2 pendant 20 ans ?",c:["David Pujadas","Marie Drucker","Béatrice Schönberg","Laurent Delahousse"],a:0},
  {q:"Qu'est-ce qu'un 'flash info' ?",c:["Brève interruption pour une information urgente","Bulletin complet","Journal du soir","Revue de presse"],a:0},
  {q:"Quelle chaîne d'info en continu a été lancée en 2017 ?",c:["CNews","BFMTV","LCI","Franceinfo"],a:0},
];
r.tv_004 = [ // Jeux télévisés
  {q:"Quel jeu télévisé français est le plus ancien ?",c:["Des chiffres et des lettres","Questions pour un champion","Jeopardy","Le mot le plus long"],a:0},
  {q:"Qui présente 'Questions pour un champion' ?",c:["Samuel Étienne","Julien Lepers","Michel Drucker","Laurent Ruquier"],a:0},
  {q:"Quel jeu animé par Nagui est diffusé sur France 2 ?",c:["Tout le monde veut prendre sa place","N'oubliez pas les paroles","Motus","Fort Boyard"],a:1},
  {q:"Quelle émission de TF1 animée par Jean-Pierre Foucault ?",c:["Qui veut gagner des millions ?","La Roue de la fortune","Le Juste Prix","Une famille en or"],a:0},
  {q:"Combien de questions faut-il répondre pour gagner à 'Qui veut gagner des millions ?'",c:["15","12","10","20"],a:0},
  {q:"Quel jeu télévisé se déroule dans un fort en Charente-Maritime ?",c:["Fort Boyard","Le Maillon faible","La Carte aux trésors","Les Jeux de 20 heures"],a:0},
  {q:"Qui présente 'Fort Boyard' depuis 2022 ?",c:["Olivier Minne","Patrice Laffont","Yann Barthès","Nagui"],a:0},
  {q:"Quel jeu télévisé britannique est adapté dans plus de 100 pays ?",c:["Who Wants to Be a Millionaire ?","Jeopardy","Family Feud","The Weakest Link"],a:0},
];
r.tv_005 = [ // Talk-shows
  {q:"Quel talk-show français est le plus ancien ?",c:["Le Grand Échiquier","Tout le monde en parle","On n'est pas couché","Rendez-vous avec Michel Drucker"],a:0},
  {q:"Qui anime 'Le Grand Échiquier' dans les années 1970-1990 ?",c:["Jacques Chancel","Michel Drucker","Bernard Pivot","Philippe Gildas"],a:0},
  {q:"Quel talk-show américain est le plus célèbre ?",c:["The Tonight Show","The Oprah Winfrey Show","Late Show","Jimmy Kimmel Live"],a:0},
  {q:"Qui anime 'Quotidien' sur TMC ?",c:["Yann Barthès","Cyril Hanouna","Laurent Ruquier","Nikos Aliagas"],a:0},
  {q:"Qui anime 'Touche pas à mon poste' sur C8 ?",c:["Cyril Hanouna","Yann Barthès","Michel Drucker","Arthur"],a:0},
  {q:"Quel animateur français présente 'Les Grosses Têtes' ?",c:["Laurent Ruquier","Philippe Bouvard","Michel Drucker","Nagui"],a:1},
  {q:"Quelle émission de télévision est un talk-show politique ?",c:["L'Émission politique","C à vous","On n'est pas couché","Les Terriens du samedi"],a:0},
  {q:"Qui anime 'C à vous' sur France 5 ?",c:["Anne-Élisabeth Lemoine","Alessandra Sublet","Maya Bazouni","Agathe Lecaron"],a:0},
];
r.tv_006 = [ // Séries animées
  {q:"Quelle série animée japonaise est la plus célèbre ?",c:["Dragon Ball","Naruto","One Piece","Pokémon"],a:0},
  {q:"Quel studio d'animation japonais est mondialement connu ?",c:["Studio Ghibli","Toei Animation","Madhouse","Kyoto Animation"],a:0},
  {q:"Qui a créé Dragon Ball ?",c:["Akira Toriyama","Masashi Kishimoto","Eiichiro Oda","Osamu Tezuka"],a:0},
  {q:"Quelle série animée française est diffusée internationalement ?",c:["Miraculous Ladybug","Totally Spies","Les Mystérieuses Cités d'or","Il était une fois..."],a:0},
  {q:"Combien d'épisodes compte One Piece (2024) ?",c:["Plus de 1 000","Plus de 500","Plus de 800","Plus de 1 200"],a:0},
  {q:"Quelle série animée américaine est la plus longue ?",c:["Les Simpson","South Park","Family Guy","Bob's Burgers"],a:0},
  {q:"Combien de saisons Les Simpson comptent-ils (2024) ?",c:["34","30","36","25"],a:0},
  {q:"Quel manga est le plus vendu de l'histoire ?",c:["One Piece","Dragon Ball","Naruto","Death Note"],a:0},
];
r.tv_007 = [ // Téléréalité
  {q:"Quelle est la première émission de téléréalité moderne ?",c:["Loft Story (2001)","Big Brother (1999)","Star Academy (2001)","Koh-Lanta (2001)"],a:1},
  {q:"Quel concept de téléréalité met en scène des candidats sur une île ?",c:["Koh-Lanta","Loft Story","Les Marseillais","Secret Story"],a:0},
  {q:"Qui présente 'Koh-Lanta' sur TF1 ?",c:["Denis Brogniart","Jean-Pierre Foucault","Christophe Dechavanne","Arthur"],a:0},
  {q:"Quelle émission de TF1 cherche le meilleur chanteur amateur ?",c:["The Voice","Star Academy","La France a un incroyable talent","Nouvelle Star"],a:0},
  {q:"Quelle émission de rencontres est la plus célèbre ?",c:["L'amour est aveugle","The Bachelor","Mariés au premier regard","Les princes de l'amour"],a:0},
  {q:"Combien d'aventuriers commencent Koh-Lanta chaque saison ?",c:["20","16","24","18"],a:0},
  {q:"Quelle émission de relooking est célèbre ?",c:["Les Reines du shopping","C'est mon choix","Ma vie est un enfer","Incroyable transformation"],a:0},
  {q:"Qui gagne la Star Academy ?",c:["Le candidat avec le plus de votes","Le jury","Le public","Les professeurs"],a:0},
];
r.tv_008 = [ // Documentaires
  {q:"Qu'est-ce qu'un documentaire ?",c:["Film non-fictif qui présente des faits réels","Film de fiction","Reportage","Journal télévisé"],a:0},
  {q:"Quelle chaîne française est spécialisée dans les documentaires ?",c:["Arte","TF1","M6","NRJ12"],a:0},
  {q:"Quel réalisateur a tourné 'Le Peuple Migrateur' ?",c:["Jacques Perrin","Yann Arthus-Bertrand","Nicolas Vanier","Claude Lelouch"],a:0},
  {q:"Quel documentaire de Al Gore sur le climat a eu un impact mondial ?",c:["An Inconvenient Truth","The Cove","Supersize Me","Earth"],a:0},
  {q:"Qu'est-ce qu'un documentaire animalier ?",c:["Documentaire sur les animaux et la nature","Film de fiction animalier","Série animée","Reportage sportif"],a:0},
  {q:"Quel documentaire a popularisé le réchauffement climatique ?",c:["An Inconvenient Truth","Before the Flood","The 11th Hour","Our Planet"],a:0},
  {q:"Quel réalisateur français est connu pour ses documentaires marins ?",c:["Jacques Cousteau","Jean-Michel Cousteau","Nicolas Hulot","François Sarano"],a:0},
  {q:"Combien d'épisodes compte la série documentaire 'Planète Terre' ?",c:["11","8","9","12"],a:0},
];
r.tv_009 = [ // Publicités
  {q:"Qu'est-ce qu'une publicité télévisée ?",c:["Message promotionnel diffusé à la télévision","Film","Sponsoring","Placement de produit"],a:0},
  {q:"Quel est le spot publicitaire le plus cher de l'histoire ?",c:["Super Bowl","Jeux olympiques","Cérémonie des Oscars","Coupe du monde"],a:0},
  {q:"Combien coûte un spot de 30 secondes au Super Bowl ?",c:["Plusieurs millions de dollars","Quelques centaines de milliers","Un milliard","1 million"],a:0},
  {q:"Qu'est-ce que le matraquage publicitaire ?",c:["Répétition excessive d'une publicité","Publicité créative","Campagne ciblée","Publicité comparative"],a:0},
  {q:"Quel est le slogan publicitaire le plus connu ?",c:["Just Do It (Nike)","I'm Lovin' It (McDonald's)","Think Different (Apple)","Tous ces slogans"],a:3},
  {q:"Qu'est-ce qu'un pubard en France ?",c:["Acteur de publicité","Publicité","Spot","Annonceur"],a:0},
  {q:"Quelle marque a le plus gros budget publicitaire mondial ?",c:["Amazon","Procter & Gamble","Coca-Cola","McDonald's"],a:0},
  {q:"En quelle année la première pub TV a-t-elle été diffusée en France ?",c:["1968","1960","1970","1965"],a:0},
];
r.tv_010 = [ // Séries policières
  {q:"Quelle série policière française est la plus longue ?",c:["Les Cinq Dernières Minutes","Commissaire Moulin","Julie Lescaut","Plus belle la vie"],a:0},
  {q:"Quelle série américaine met en scène des experts du FBI à Quantico ?",c:["Criminal Minds","NCIS","CSI","L'Agence tous risques"],a:0},
  {q:"Quelle série française se déroule à la PJ de Paris ?",c:["Le Bureau des légendes","Engrenages","Spiral","Les Hommes de l'ombre"],a:1},
  {q:"Quel acteur joue Columbo ?",c:["Peter Falk","Tony Musante","Telly Savalas","Dennis Weaver"],a:0},
  {q:"Combien de saisons compte 'New York Police Judiciaire' ?",c:["Plus de 20","15","25","10"],a:0},
  {q:"Quelle série allemande est un succès mondial ?",c:["Alarm für Cobra 11","Le Renard","Derrick","Inspecteur Derrick"],a:3},
  {q:"Qu'est-ce qu'un 'polar' ?",c:["Roman ou film policier","Série policière","Genre littéraire","Enquête"],a:0},
  {q:"Quel acteur joue l'inspecteur Barnaby dans 'Inspecteur Barnaby' ?",c:["John Nettles","Neil Dudgeon","David Jason","John Thaw"],a:0},
];

// ---------- INSOLITE (10 themes - excluding 101-105 which are already real) ----------
r.insolite_001 = [ // Sitcoms
  {q:"Quelle est la sitcom française la plus célèbre ?",c:["H","Caméra Café","Un gars, une fille","Kaamelott"],a:0},
  {q:"Quelle sitcom américaine a duré 10 saisons et 236 épisodes ?",c:["Friends","Seinfeld","The Big Bang Theory","How I Met Your Mother"],a:0},
  {q:"Qui a créé 'Friends' ?",c:["David Crane et Marta Kauffman","James Burrows","Larry David","Tous"],a:0},
  {q:"Comment s'appelle le café dans Friends ?",c:["Central Perk","Central Park","Coffee House","Java Joe's"],a:0},
  {q:"Quelle sitcom française met en scène des personnages dans un open space ?",c:["Caméra Café","H","Kaamelott","Les Cordier"],a:0},
  {q:"Quelle sitcom américaine a pour personnage principal Sheldon Cooper ?",c:["The Big Bang Theory","Young Sheldon","Friends","Seinfeld"],a:0},
  {q:"Combien de saisons compte 'The Office (US)' ?",c:["9","7","8","10"],a:0},
  {q:"Quel acteur joue Michael Scott dans The Office US ?",c:["Steve Carell","John Krasinski","Rainn Wilson","Jenna Fischer"],a:0},
];
r.insolite_002 = [ // Extrêmes météo
  {q:"Quel est l'endroit le plus froid habité sur Terre ?",c:["Oïmiakon (Sibérie)","Vostok (Antarctique)","Yellowknife (Canada)","Barrow (Alaska)"],a:0},
  {q:"Quelle température record a été enregistrée à Oïmiakon ?",c:["-67,7 °C","-50 °C","-70 °C","-60 °C"],a:0},
  {q:"Quel est l'endroit le plus chaud sur Terre ?",c:["Vallée de la Mort (USA)","Désert de Libye","Dallol (Éthiopie)","Awash (Éthiopie)"],a:0},
  {q:"Qu'est-ce qu'un ouragan de catégorie 5 ?",c:["Ouragan avec vents > 252 km/h","Ouragan léger","Tempête tropicale","Cyclone"],a:0},
  {q:"Quel pays a connu le plus de tornades ?",c:["États-Unis","Australie","Inde","Chine"],a:0},
  {q:"Qu'est-ce que le phénomène El Niño ?",c:["Réchauffement anormal du Pacifique","Refroidissement","Courant marin","Vent"],a:0},
  {q:"Quel désert reçoit le plus de précipitations ?",c:["Désert d'Atacama","Sahara","Gobi","Kalahari"],a:0},
  {q:"Quelle est la plus haute vague jamais surfée ?",c:["Plus de 30 mètres","Plus de 20 mètres","Plus de 25 mètres","Plus de 35 mètres"],a:0},
];
r.insolite_003 = [ // Coïncidences
  {q:"Qu'est-ce qu'une coïncidence ?",c:["Deux événements qui se produisent en même temps par hasard","Un miracle","Un signe","Une prédiction"],a:0},
  {q:"Quelle célèbre coïncidence implique Lincoln et Kennedy ?",c:["Élus en 1846 et 1960","Morts le même jour","Noms similaires","Même âge"],a:0},
  {q:"Comment s'appelle le phénomène de coïncidence significative ?",c:["Synchronicité","Hasard","Destin","Sérendipité"],a:0},
  {q:"Qui a inventé le terme 'synchronicité' ?",c:["Carl Jung","Sigmund Freud","Albert Einstein","Wolfgang Pauli"],a:0},
  {q:"Qu'est-ce que l'effet Barnum ?",c:["Descriptions vagues acceptées comme personnelles","Prédiction","Coïncidence","Hasard"],a:0},
  {q:"Quelle est la probabilité de gagner au Loto ?",c:["1 sur 19 millions","1 sur 5 millions","1 sur 10 millions","1 sur 50 millions"],a:0},
  {q:"Comment s'appelle la loi des séries ?",c:["Loi de Murphy","Loi des séries","Loi du hasard","Loi de la probabilité"],a:1},
  {q:"Qu'est-ce que la loi de Murphy ?",c:["Tout ce qui peut mal tourner va mal tourner","Loi du hasard","Coïncidence","Prédiction"],a:0},
];
r.insolite_004 = [ // Superstitions
  {q:"Quel nombre est considéré comme porte-bonheur dans la culture occidentale ?",c:["7","13","4","17"],a:0},
  {q:"Quel nombre est considéré comme malchanceux ?",c:["13","7","3","8"],a:0},
  {q:"Quel geste conjure le mauvais sort en France ?",c:["Toucher du bois","Croiser les doigts","Faire un signe de croix","Jeter du sel"],a:0},
  {q:"Quel animal noir est associé à la malchance ?",c:["Chat noir","Corbeau","Hibou","Chauve-souris"],a:0},
  {q:"Quel objet cassé apporte 7 ans de malheur ?",c:["Un miroir","Une vitre","Une assiette","Un verre"],a:0},
  {q:"Dans quelle culture le chiffre 4 est-il considéré comme malchanceux ?",c:["Japonaise","Indienne","Occidentale","Afrique"],a:0},
  {q:"Quelle superstition est associée au parapluie ?",c:["Ouvrir un parapluie à l'intérieur porte malheur","Perdre son parapluie","Prêter son parapluie","Acheter un parapluie"],a:0},
  {q:"Quel jour est considéré comme particulièrement malchanceux ?",c:["Vendredi 13","Mardi 13","Lundi 13","Jeudi 13"],a:0},
];
r.insolite_005 = [ // Records insolites
  {q:"Quel est l'homme le plus grand de l'histoire ?",c:["Robert Wadlow (2,72 m)","Sultan Kösen (2,51 m)","John Rogan (2,68 m)","Angus MacAskill (2,36 m)"],a:0},
  {q:"Quelle est la femme la plus grande du monde ?",c:["Zeng Jinlian (2,46 m)","Sandy Allen (2,32 m)","Yao Defen (2,34 m)","Uljana Semjonova (2,13 m)"],a:0},
  {q:"Quelle est la plus longue chanson jamais enregistrée ?",c:["The Rise and Fall of Bossanova","Thru These Walls","In C","4'33\""],a:0},
  {q:"Quel est le record du plus long nom de famille ?",c:["Hubert Blaine Wolfeschlegelsteinhausenbergerdorff...","Smith","Jones","Williams"],a:0},
  {q:"Combien de records du monde le Guinness World Records compte-t-il ?",c:["Plus de 40 000","Plus de 20 000","Plus de 60 000","Plus de 10 000"],a:0},
  {q:"Quelle est la durée du plus long baiser ?",c:["Plus de 58 heures","Plus de 24 heures","Plus de 12 heures","Plus de 48 heures"],a:0},
  {q:"Qui détient le record du plus grand nombre de tatouages ?",c:["Lucky Diamond Rich","Tom Leppard","Gregory McLaren","Ethan Franklin"],a:0},
  {q:"Quel est le record du monde de jonglage avec le plus d'objets ?",c:["14 anneaux","10 balles","12 massues","15 balles"],a:0},
];
r.insolite_006 = [ // Mystères
  {q:"Quel mystère entoure le Triangle des Bermudes ?",c:["Disparitions inexpliquées de navires et d'avions","Trésor caché","Monstre marin","Portail temporel"],a:0},
  {q:"Qu'est-ce que le monstre du Loch Ness ?",c:["Créature légendaire dans un lac écossais","Serpent de mer","Dinosaure","Poisson géant"],a:0},
  {q:"Où se trouve le Triangle des Bermudes ?",c:["Entre Floride, Bermudes et Porto Rico","Atlantique Nord","Pacifique","Caraïbes"],a:0},
  {q:"Qu'est-ce que le Yeti ?",c:["Créature légendaire de l'Himalaya","Homme des neiges","Ours","Singe"],a:0},
  {q:"Qu'est-ce que les lignes de Nazca au Pérou ?",c:["Géoglyphes anciens dans le désert","Routes","Canaux","Tombeaux"],a:0},
  {q:"Quelle civilisation a construit les lignes de Nazca ?",c:["La culture Nazca","Les Incas","Les Mayas","Les Paracas"],a:0},
  {q:"Qu'est-ce que le mystère de Stonehenge ?",c:["Cercle de pierres préhistorique dont la fonction est inconnue","Tombeau","Temple","Observatoire"],a:0},
  {q:"Où se trouve Stonehenge ?",c:["Angleterre","Écosse","Irlande","France"],a:0},
];
r.insolite_007 = [ // Fêtes insolites
  {q:"Quelle fête espagnole consiste à lancer des tomates ?",c:["La Tomatina","La San Fermín","Les Fallas","La Feria"],a:0},
  {q:"Où a lieu la Tomatina ?",c:["Buñol (Espagne)","Barcelone","Madrid","Valence"],a:0},
  {q:"Quelle fête thaïlandaise consiste à asperger d'eau les passants ?",c:["Songkran (Nouvel An thaï)","Loy Krathong","Yi Peng","Phi Ta Khon"],a:0},
  {q:"Quelle fête britannique célèbre l'échec du complot des poudres ?",c:["Guy Fawkes Night (Bonfire Night)","Halloween","May Day","Boxing Day"],a:0},
  {q:"En quelle année la conspiration des poudres a-t-elle eu lieu ?",c:["1605","1600","1610","1599"],a:0},
  {q:"Quelle fête allemande dure plusieurs jours et célèbre la bière ?",c:["Oktoberfest","Carnaval","Fête de la bière","Weihnachten"],a:0},
  {q:"Où se déroule l'Oktoberfest ?",c:["Munich","Berlin","Francfort","Hambourg"],a:0},
  {q:"Quelle fête japonaise honore les ancêtres avec des danses ?",c:["Obon","Hanami","Matsuri","Shogatsu"],a:0},
];
r.insolite_008 = [ // Musées étranges
  {q:"Où se trouve le Musée des Égouts de Paris ?",c:["Paris","Lyon","Marseille","Bordeaux"],a:0},
  {q:"Quel musée étrange existe au Japon ?",c:["Musée du caca (Unko Museum)","Musée du pain","Musée du fromage","Musée de l'eau"],a:0},
  {q:"Où se trouve le Musée de la Moutarde ?",c:["Dijon","Paris","Lyon","Bordeaux"],a:0},
  {q:"Qu'est-ce que le Musée des Momies de Guanajuato ?",c:["Musée présentant des corps momifiés naturellement","Musée de cire","Musée d'histoire","Musée d'art"],a:0},
  {q:"Où se trouve le Musée du Faux (de faux tableaux) ?",c:["Paris","Londres","New York","Bruxelles"],a:0},
  {q:"Quel musée insolite se trouve à Zagreb en Croatie ?",c:["Musée des Relations Brisées","Musée de l'amour","Musée du divorce","Musée du cœur"],a:0},
  {q:"Qu'est-ce que le Museum of Jurassic Technology à Los Angeles ?",c:["Musée éclectique et absurde","Musée d'histoire naturelle","Musée de la technologie","Musée d'art"],a:0},
  {q:"Où se trouve le Musée du Freesbee ?",c:["Massachusetts (USA)","New York","Californie","Floride"],a:0},
];
r.insolite_009 = [ // Traditions bizarres
  {q:"Quelle tradition écossaise consiste à lancer un tronc d'arbre ?",c:["Le lancer de tronc (Caber toss)","Le lancer de marteau","Le lancer de poids","Le lancer de disque"],a:0},
  {q:"Quelle tradition en Inde consiste à se jeter du lait sur la tête ?",c:["Fête du lait","Holi","Diwali","Pongal"],a:0},
  {q:"Quelle tradition japonaise consiste à manger du fugu (poisson-globe) ?",c:["Un plat dangereux nécessitant un chef certifié","Sushi","Sashimi","Tempura"],a:0},
  {q:"Quelle tradition française implique de s'embrasser sous le gui ?",c:["Le baiser sous le gui au Nouvel An","Le muguet du 1er mai","La galette des rois","Les crêpes de la Chandeleur"],a:0},
  {q:"Quelle tradition en Belgique consiste à jeter des chats du haut d'un beffroi ?",c:["Le Kattenstoet (fête des chats) à Ypres","Fête des chats","Carnaval","Procession"],a:0},
  {q:"Quelle tradition espagnole consiste à courir devant des taureaux ?",c:["Les San Fermín à Pampelune","La corrida","Les taureaux de feu","La feria"],a:0},
  {q:"Quelle tradition amérindienne implique une hutte de sudation ?",c:["Le sweat lodge","Le pow-wow","La danse du soleil","Le potlatch"],a:0},
  {q:"Quelle tradition tibétaine consiste à exposer les morts aux vautours ?",c:["L'enterrement céleste","L'incinération","L'inhumation","La crémation"],a:0},
];
r.insolite_010 = [ // Phénomènes paranormaux
  {q:"Qu'est-ce qu'un phénomène paranormal ?",c:["Événement qui dépasse les lois scientifiques connues","Miracle","Hasard","Coïncidence"],a:0},
  {q:"Qu'est-ce qu'une OVNI ?",c:["Objet volant non identifié","Soucoupe volante","Extraterrestre","Vaisseau spatial"],a:0},
  {q:"Qu'est-ce qu'un fantôme selon les croyances populaires ?",c:["Esprit d'un défunt qui apparaît aux vivants","Hallucination","Ombre","Apparition"],a:0},
  {q:"Qu'est-ce que la télépathie ?",c:["Communication par la pensée","Lire dans les pensées","Hypnose","Médium"],a:0},
  {q:"Qu'est-ce qu'un médium ?",c:["Personne qui prétend communiquer avec les esprits","Voyant","Magicien","Sorcier"],a:0},
  {q:"Quel événement de 1947 au Nouveau-Mexique est lié aux OVNIs ?",c:["L'incident de Roswell","L'incident de Rendlesham","L'incident d'Aurora","L'incident de Kecksburg"],a:0},
  {q:"Qu'est-ce que le triangle des Bermudes ?",c:["Zone de disparitions mystérieuses","Zone de formation","Zone militaire","Zone protégée"],a:0},
  {q:"Qu'est-ce que la voyance ?",c:["Prétention de prédire l'avenir","Médium","Télépathie","Clairvoyance"],a:0},
];

// ---------- SOCIETE (8 themes) ----------
r.societe_001 = [ // Lois absurdes
  {q:"En France, quelle loi absurde interdit d'appeler un cochon Napoléon ?",c:["Aucune, c'est une légende urbaine","Loi de 1804","Code civil","Arrêté municipal"],a:0},
  {q:"Dans quel pays est-il interdit de mâcher du chewing-gum ?",c:["Singapour","France","États-Unis","Japon"],a:0},
  {q:"Quelle loi française interdit aux femmes de porter un pantalon ?",c:["Abrogée en 2013","Toujours en vigueur","Jamais existé","Supprimée en 1900"],a:0},
  {q:"Dans quel pays est-il interdit de mourir dans certaines villes ?",c:["Longyearbyen (Norvège)","Paris","Londres","New York"],a:0},
  {q:"Quelle loi étrange existe en Arizona (USA) ?",c:["Interdiction de chasser les chameaux dans le désert","Interdiction de dormir","Interdiction de chanter","Interdiction de courir"],a:0},
  {q:"Quelle loi suisse interdit de... ?",c:["Tirer des coups de feu dans les élevages de poulets","Fumer dans les lieux publics","Conduire sans permis","Boire de l'alcool"],a:0},
  {q:"Dans quel état américain est-il interdit de vendre des voitures le dimanche ?",c:["Michigan","Californie","Texas","Floride"],a:0},
  {q:"Quelle loi absurde française interdisait d'embrasser dans le métro ?",c:["A existé jusqu'à la fin du XXe siècle","Toujours en vigueur","Jamais existé","Annulée en 1950"],a:0},
];
r.societe_002 = [ // Démocratie
  {q:"Qu'est-ce que la démocratie ?",c:["Système politique où le peuple est souverain","Dictature","Monarchie","Oligarchie"],a:0},
  {q:"Où la démocratie a-t-elle été inventée ?",c:["Athènes (Grèce antique)","Rome","Paris","Londres"],a:0},
  {q:"En quelle année la démocratie athénienne a-t-elle été établie ?",c:["508 av. J.-C.","400 av. J.-C.","600 av. J.-C.","300 av. J.-C."],a:0},
  {q:"Qu'est-ce qu'une démocratie représentative ?",c:["Les citoyens élisent des représentants","Démocratie directe","Suffrage universel","Dictature"],a:0},
  {q:"Quelles sont les cinq grandes démocraties occidentales ?",c:["France, Royaume-Uni, États-Unis, Allemagne, Canada","France, Chine, Russie, USA, UK","France, Algérie, Maroc, Tunisie, Sénégal","Allemagne, Autriche, Suisse, Belgique, Luxembourg"],a:0},
  {q:"Qu'est-ce que le suffrage universel ?",c:["Droit de vote pour tous les citoyens","Vote limité","Vote à bulletin secret","Vote obligatoire"],a:0},
  {q:"En quelle année les femmes ont-elles obtenu le droit de vote en France ?",c:["1944","1936","1948","1950"],a:0},
  {q:"Qu'est-ce qu'une république ?",c:["Régime politique sans monarque","Démocratie","Dictature","Monarchie"],a:0},
];
r.societe_003 = [ // Écologie
  {q:"Qu'est-ce que l'écologie ?",c:["Science des relations entre les êtres vivants et leur environnement","Protection de la nature","Économie verte","Développement durable"],a:0},
  {q:"Qu'est-ce que l'empreinte carbone ?",c:["Quantité de CO2 émise par une activité","Pollution","Déchet","Recyclage"],a:0},
  {q:"Qu'est-ce que l'effet de serre ?",c:["Gaz qui retiennent la chaleur dans l'atmosphère","Changement climatique","Pollution","Vague de chaleur"],a:0},
  {q:"Quel gaz à effet de serre est le plus émis par les activités humaines ?",c:["CO2","Méthane","Protoxyde d'azote","Vapeur d'eau"],a:0},
  {q:"Que signifie le recyclage ?",c:["Transformer des déchets en nouveaux produits","Jeter","Brûler","Enterrer"],a:0},
  {q:"Quel pays a produit le plus d'émissions de CO2 en 2023 ?",c:["Chine","États-Unis","Inde","Russie"],a:0},
  {q:"Qu'est-ce que la biodiversité ?",c:["Variété des espèces vivantes sur Terre","Nombre d'animaux","Forêts","Océans"],a:0},
  {q:"En quelle année l'Accord de Paris sur le climat a-t-il été signé ?",c:["2015","2012","2018","2020"],a:0},
];
r.societe_004 = [ // Économie
  {q:"Qu'est-ce que le PIB ?",c:["Produit intérieur brut (valeur des biens et services)","Revenu national","Impôt","Salaire"],a:0},
  {q:"Qu'est-ce que le taux de chômage ?",c:["Pourcentage de la population active sans emploi","Nombre de chômeurs","Population inactive","Emploi"],a:0},
  {q:"Que signifie l'inflation ?",c:["Hausse généralisée des prix","Baisse des prix","Augmentation des salaires","Crise économique"],a:0},
  {q:"Qu'est-ce qu'un impôt ?",c:["Prélèvement obligatoire pour financer l'État","Taxe","Contribution","Redevance"],a:0},
  {q:"Quelle est la monnaie officielle de l'Union européenne ?",c:["L'euro","Le dollar","Le franc","La livre"],a:0},
  {q:"En quelle année l'euro a-t-il été introduit ?",c:["1999 (virtuel) puis 2002 (pièces/billets)","2000","2001","1998"],a:0},
  {q:"Qu'est-ce qu'une banque centrale ?",c:["Institution qui gère la politique monétaire d'un pays","Banque commerciale","Caisse d'épargne","Assurance"],a:0},
  {q:"Quel économiste a écrit 'La Richesse des nations' ?",c:["Adam Smith","Karl Marx","John Maynard Keynes","Milton Friedman"],a:0},
];
r.societe_005 = [ // Droits humains
  {q:"Qu'est-ce que la Déclaration universelle des droits de l'homme ?",c:["Document proclamant les droits fondamentaux","Loi","Constitution","Traité"],a:0},
  {q:"En quelle année la DUDH a-t-elle été adoptée ?",c:["1948","1945","1950","1939"],a:0},
  {q:"Quelle organisation a adopté la DUDH ?",c:["ONU","UNESCO","Conseil de l'Europe","OTAN"],a:0},
  {q:"Combien d'articles contient la DUDH ?",c:["30","20","40","25"],a:0},
  {q:"Quel était le premier droit de l'homme proclamé en France en 1789 ?",c:["DDHC (Déclaration des droits de l'homme et du citoyen)","Droit de vote","Liberté d'expression","Égalité"],a:0},
  {q:"Qu'est-ce que la liberté d'expression ?",c:["Droit d'exprimer ses opinions sans censure","Droit de vote","Droit de manifester","Droit de se réunir"],a:0},
  {q:"Qu'est-ce que le droit d'asile ?",c:["Protection accordée à un réfugié politique","Droit de vote","Droit de travailler","Droit de voyager"],a:0},
  {q:"Quelle organisation défend les droits humains mondialement ?",c:["Amnesty International","Greenpeace","Médecins sans frontières","Croix-Rouge"],a:0},
];
r.societe_006 = [ // Mondialisation
  {q:"Qu'est-ce que la mondialisation ?",c:["Interdépendance croissante des économies et sociétés","Commerce international","Globalisation","Ouverture des frontières"],a:0},
  {q:"Quelle organisation régule le commerce mondial ?",c:["OMC (Organisation mondiale du commerce)","ONU","FMI","Banque mondiale"],a:0},
  {q:"Qu'est-ce qu'une multinationale ?",c:["Entreprise présente dans plusieurs pays","PME","Start-up","Entreprise locale"],a:0},
  {q:"Quel pays est le plus grand exportateur mondial ?",c:["Chine","États-Unis","Allemagne","Japon"],a:0},
  {q:"Qu'est-ce que la délocalisation ?",c:["Transfert d'activités vers un pays étranger","Importation","Exportation","Fermeture"],a:0},
  {q:"Quel accord commercial a été signé entre USA, Canada et Mexique ?",c:["USMCA (nouvel ALENA)","Trait","Partenariat transpacifique","Accord de libre-échange"],a:0},
  {q:"Qu'est-ce que le protectionnisme ?",c:["Politique qui protège l'économie nationale","Libre-échange","Mondialisation","Ouverture"],a:0},
  {q:"Quelle conférence a établi le système monétaire international en 1944 ?",c:["Bretton Woods","Yalta","Versailles","Genève"],a:0},
];
r.societe_007 = [ // Migrations
  {q:"Qu'est-ce qu'un migrant ?",c:["Personne qui se déplace d'un pays à un autre","Touriste","Réfugié","Expatrié"],a:0},
  {q:"Qu'est-ce qu'un réfugié ?",c:["Personne fuyant la guerre ou les persécutions","Migrant économique","Touriste","Étudiant"],a:0},
  {q:"Quelle organisation définit le statut de réfugié ?",c:["HCR (Haut Commissariat pour les Réfugiés)","ONU","UNESCO","Croix-Rouge"],a:0},
  {q:"Combien de réfugiés y a-t-il dans le monde ?",c:["Plus de 30 millions","Plus de 10 millions","Plus de 50 millions","Plus de 20 millions"],a:0},
  {q:"Quel pays accueille le plus de réfugiés ?",c:["Turquie","Allemagne","États-Unis","France"],a:0},
  {q:"Qu'est-ce que le droit d'asile ?",c:["Protection accordée aux réfugiés politiques","Droit de vote","Droit de travailler","Permis de séjour"],a:0},
  {q:"Qu'est-ce que la Convention de Genève de 1951 ?",c:["Traité définissant le statut de réfugié","Traité de paix","Convention sur le climat","Traité commercial"],a:0},
  {q:"Qu'est-ce qu'un passeport ?",c:["Document d'identité pour voyager à l'étranger","Visa","Carte d'identité","Permis"],a:0},
];
r.societe_008 = [ // Inégalités
  {q:"Qu'est-ce qu'une inégalité sociale ?",c:["Différence d'accès aux ressources et opportunités","Différence de taille","Différence d'âge","Différence de poids"],a:0},
  {q:"Qu'est-ce que le coefficient de Gini ?",c:["Mesure des inégalités de revenus","Indice de pauvreté","Taux de chômage","PIB"],a:0},
  {q:"Quel pourcentage des richesses mondiales possède le 1% le plus riche ?",c:["Près de 50%","Près de 30%","Près de 70%","Près de 20%"],a:0},
  {q:"Qu'est-ce que la pauvreté selon la Banque mondiale ?",c:["Vivre avec moins de 2,15 $ par jour","Vivre avec moins de 5 $ par jour","Vivre avec moins de 10 $ par jour","Vivre avec moins de 1 $ par jour"],a:0},
  {q:"Quel pays a le plus fort taux d'inégalités ?",c:["Afrique du Sud","États-Unis","Brésil","Inde"],a:0},
  {q:"Qu'est-ce que la discrimination ?",c:["Traitement inégal basé sur des critères injustes","Différence","Préjugé","Stéréotype"],a:0},
  {q:"Qu'est-ce que l'égalité des chances ?",c:["Principe où chacun peut réussir indépendamment de ses origines","Égalité des résultats","Égalité de traitement","Justice sociale"],a:0},
  {q:"Quelle organisation mesure les inégalités mondiales ?",c:["ONU (PNUD)","FMI","Banque mondiale","OCDE"],a:0},
];

// ---------- VOYAGE (8 themes) ----------
r.voyage_001 = [ // La Laïcité (note: societe category often has this)
  {q:"Qu'est-ce que la laïcité ?",c:["Séparation de l'État et des religions","Abolition des religions","Liberté religieuse","Athéisme d'État"],a:0},
  {q:"Quelle loi française de 1905 a établi la laïcité ?",c:["Loi de séparation des Églises et de l'État","Loi sur les associations","Loi sur l'école","Loi sur la liberté de conscience"],a:0},
  {q:"Quel pays a inventé la laïcité moderne ?",c:["France","États-Unis","Turquie","Mexique"],a:0},
  {q:"Qu'est-ce que la liberté de conscience ?",c:["Droit de croire ou ne pas croire","Droit de vote","Droit d'expression","Droit de réunion"],a:0},
  {q:"En quelle année la laïcité a-t-elle été inscrite dans la Constitution française ?",c:["1946 (IVe République)","1958 (Ve République)","1905","1789"],a:0},
  {q:"Quel pays est un exemple de laïcité stricte ?",c:["France","Royaume-Uni","Allemagne","Italie"],a:0},
  {q:"Qu'est-ce que le fait religieux dans l'espace public ?",c:["Expression de croyances dans la sphère publique","Prière","Culte","Rite"],a:0},
  {q:"Quelle école publique française a été au cœur du débat sur le voile ?",c:["L'école publique","L'école privée","L'école catholique","L'école laïque"],a:0},
];
r.voyage_002 = [ // L'Europe
  {q:"Combien de pays membres de l'Union européenne (2024) ?",c:["27","28","25","30"],a:0},
  {q:"Quelle est la capitale de l'Union européenne ?",c:["Bruxelles","Strasbourg","Luxembourg","Francfort"],a:0},
  {q:"En quelle année la CEE a-t-elle été fondée ?",c:["1957","1950","1960","1948"],a:0},
  {q:"Qu'est-ce que Schengen ?",c:["Espace de libre circulation sans frontières intérieures","Traité","Monnaie","Pays"],a:0},
  {q:"Combien de pays font partie de l'espace Schengen ?",c:["27","22","25","30"],a:0},
  {q:"Quelle monnaie utilise l'Union européenne ?",c:["L'euro","Le dollar","La livre","Le franc suisse"],a:0},
  {q:"Qu'est-ce que le Parlement européen ?",c:["Institution législative de l'UE élue au suffrage universel","Conseil de l'UE","Commission européenne","Cour de justice"],a:0},
  {q:"Quel pays n'est pas membre de l'UE mais utilise l'euro ?",c:["Monaco","Suisse","Norvège","Royaume-Uni"],a:0},
];
r.voyage_003 = [ // L'Asie
  {q:"Combien de pays compte l'Asie ?",c:["48","30","50","40"],a:0},
  {q:"Quel est le plus grand pays d'Asie ?",c:["Russie (partie asiatique)","Chine","Inde","Kazakhstan"],a:0},
  {q:"Quel est le plus haut sommet d'Asie ?",c:["L'Everest (8 849 m)","Le K2","L'Annapurna","Le Lhotse"],a:0},
  {q:"Quelle est la plus grande ville d'Asie ?",c:["Tokyo","Shanghai","Pékin","Mumbai"],a:0},
  {q:"Quel désert d'Asie est le plus grand ?",c:["Le désert de Gobi","Le Taklamakan","Le Karakoum","Le Rub al-Khali"],a:0},
  {q:"Quel fleuve asiatique est le plus long ?",c:["Le Yangtsé","Le Mékong","Le Gange","L'Indus"],a:0},
  {q:"Quel pays d'Asie du Sud-Est est un archipel de 17 000 îles ?",c:["Indonésie","Philippines","Japon","Malaisie"],a:0},
  {q:"Quelle est la religion la plus pratiquée en Asie ?",c:["Hindouisme","Bouddhisme","Islam","Christianisme"],a:2},
];
r.voyage_004 = [ // L'Afrique
  {q:"Combien de pays compte l'Afrique ?",c:["54","48","52","50"],a:0},
  {q:"Quel est le plus grand pays d'Afrique ?",c:["Algérie","République démocratique du Congo","Soudan","Libye"],a:0},
  {q:"Quel est le plus long fleuve d'Afrique ?",c:["Le Nil","Le Congo","Le Niger","Le Zambèze"],a:0},
  {q:"Quelle est la plus haute montagne d'Afrique ?",c:["Le Kilimandjaro","Le mont Kenya","Le mont Stanley","Le Ras Dashan"],a:0},
  {q:"Quelle est la plus grande ville d'Afrique ?",c:["Le Caire","Lagos","Kinshasa","Johannesburg"],a:1},
  {q:"Quel désert couvre une grande partie de l'Afrique du Nord ?",c:["Le Sahara","Le Kalahari","Le Namib","Le Désert du Sinaï"],a:0},
  {q:"Quel pays africain est le plus peuplé ?",c:["Nigeria","Éthiopie","République démocratique du Congo","Tanzanie"],a:0},
  {q:"Quel parc national africain est le plus célèbre pour les safaris ?",c:["Parc Kruger (Afrique du Sud)","Parc du Serengeti (Tanzanie)","Parc de Maasai Mara (Kenya)","Parc de Chobe (Botswana)"],a:0},
];
r.voyage_005 = [ // L'Amérique latine
  {q:"Combien de pays compte l'Amérique latine ?",c:["20","18","25","15"],a:0},
  {q:"Quelle est la plus grande forêt du monde en Amérique latine ?",c:["L'Amazonie","La forêt atlantique","Le Mato Grosso","La forêt des Andes"],a:0},
  {q:"Quelle langue est la plus parlée en Amérique latine ?",c:["Espagnol","Portugais","Français","Anglais"],a:0},
  {q:"Quel pays d'Amérique latine est le plus peuplé ?",c:["Brésil","Mexique","Colombie","Argentine"],a:0},
  {q:"Quel site archéologique inca est le plus visité ?",c:["Machu Picchu","Choquequirao","Sacsayhuamán","Ollantaytambo"],a:0},
  {q:"Quelle danse est emblématique de l'Amérique latine ?",c:["La salsa","Le tango","La samba","La bachata"],a:0},
  {q:"Quel désert d'Amérique latine est le plus aride du monde ?",c:["Atacama (Chili)","Patagonie (Argentine)","Sonora (Mexique)","Sechura (Pérou)"],a:0},
  {q:"Quel fleuve traverse l'Amazonie ?",c:["L'Amazone","L'Orénoque","Le Paraná","Le São Francisco"],a:0},
];
r.voyage_006 = [ // L'Océanie
  {q:"Combien de pays compte l'Océanie ?",c:["14","10","18","20"],a:0},
  {q:"Quel est le plus grand pays d'Océanie ?",c:["Australie","Nouvelle-Zélande","Papouasie-Nouvelle-Guinée","Fidji"],a:0},
  {q:"Quel est le plus petit pays d'Océanie ?",c:["Nauru","Tuvalu","Vanuatu","Palau"],a:0},
  {q:"Quel peuple autochtone habite la Nouvelle-Zélande ?",c:["Maoris","Aborigènes","Papous","Mélanésiens"],a:0},
  {q:"Quel peuple autochtone habite l'Australie ?",c:["Aborigènes","Maoris","Tasmaniens","Insulaires du Détroit de Torres"],a:0},
  {q:"Quel pays d'Océanie est un territoire français d'outre-mer ?",c:["Nouvelle-Calédonie","Fidji","Vanuatu","Samoa"],a:0},
  {q:"Où se trouve la Grande Barrière de Corail ?",c:["Australie","Nouvelle-Zélande","Papouasie","Indonésie"],a:0},
  {q:"Quel animal emblématique d'Australie est marsupial ?",c:["Kangourou","Koala","Wombat","Diable de Tasmanie"],a:0},
];
r.voyage_007 = [ // Le Moyen-Orient
  {q:"Combien de pays compte le Moyen-Orient ?",c:["17","15","12","20"],a:0},
  {q:"Quel pays du Moyen-Orient est le plus peuplé ?",c:["Iran","Arabie saoudite","Turquie","Irak"],a:0},
  {q:"Quelle est la capitale de l'Arabie saoudite ?",c:["Riyad","Djeddah","La Mecque","Médine"],a:0},
  {q:"Quel détroit relie la mer Méditerranée à la mer Rouge ?",c:["Le canal de Suez","Le Bosphore","Les Dardanelles","Le détroit d'Hormuz"],a:0},
  {q:"Quel fleuve traverse l'Irak ?",c:["Le Tigre et l'Euphrate","Le Jourdain","Le Nil","L'Indus"],a:0},
  {q:"Quel pays du Moyen-Orient est le plus grand producteur de pétrole ?",c:["Arabie saoudite","Iran","Irak","Émirats arabes unis"],a:0},
  {q:"Quelle ville du Moyen-Orient est sacrée pour l'islam ?",c:["La Mecque","Médine","Jérusalem","Toutes ces villes"],a:3},
  {q:"Quel conflit historique oppose Israéliens et Palestiniens ?",c:["Conflit israélo-palestinien","Guerre du Golfe","Guerre civile","Conflit sunnites-chiites"],a:0},
];
r.voyage_008 = [ // Les Caraïbes
  {q:"Combien d'îles compte les Caraïbes ?",c:["Plus de 700","Plus de 500","Plus de 1 000","Plus de 300"],a:0},
  {q:"Quel pays des Caraïbes est le plus visité ?",c:["République dominicaine","Cuba","Jamaïque","Porto Rico"],a:0},
  {q:"Quelle île des Caraïbes est partagée entre Haïti et la République dominicaine ?",c:["Hispaniola","Cuba","Porto Rico","Jamaïque"],a:0},
  {q:"Quelle boisson est originaire des Caraïbes ?",c:["Le rhum","La tequila","Le whisky","La vodka"],a:0},
  {q:"Quel est le plus petit pays des Caraïbes ?",c:["Saint-Kitts-et-Nevis","Grenade","Barbade","Antigua-et-Barbuda"],a:0},
  {q:"Quelle île des Caraïbes est un département français ?",c:["Martinique","Guadeloupe","Guyane","Réunion"],a:1},
  {q:"Quelle musique caribéenne est la plus célèbre ?",c:["Le reggae","La salsa","La soca","Le zouk"],a:0},
  {q:"Quel phénomène météo menace régulièrement les Caraïbes ?",c:["Les ouragans","Les tornades","Les tsunamis","Les cyclones"],a:0},
];

for (const [id, levels] of Object.entries(r)) {
  const theme = themes.find(t => t.id === id);
  if (!theme) { console.log('Theme not found:', id); continue; }
  let levelIdx = 0;
  for (let i = 0; i < theme.levels.length; i++) {
    const q = theme.levels[i].q;
    if (q.startsWith('Question niveau') || q.startsWith('Quelle est la question facile')) {
      if (levelIdx < levels.length) { theme.levels[i] = levels[levelIdx]; levelIdx++; }
    }
  }
  while (theme.levels.length < 8 && levelIdx < levels.length) {
    theme.levels.push(levels[levelIdx]); levelIdx++;
  }
}

const newJson = JSON.stringify(themes, null, 1);
const newContent = content.substring(0, start) + newJson + content.substring(end + 1);
fs.writeFileSync(__dirname + '/ttcq.js', newContent, 'utf8');
console.log('Done. Batch 3b (tech, auto, tv, insolite, societe, voyage) written:', Object.keys(r).length, 'themes');
