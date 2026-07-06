const fs = require('fs');
const content = fs.readFileSync(__dirname + '/ttcq.js', 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const themes = JSON.parse(content.substring(start, end + 1));
const r = {};

// ---------- SCIENCES (18 themes) ----------
r.sciences_001 = [ // L'Électricité
  {q:"Quelle est l'unité de la tension électrique ?",c:["Le volt","L'ampère","L'ohm","Le watt"],a:0},
  {q:"Qui a découvert l'électricité statique ?",c:["Thalès de Milet","Benjamin Franklin","Nikola Tesla","Thomas Edison"],a:0},
  {q:"Quelle est la différence entre courant continu et alternatif ?",c:["Direction du flux","Tension","Fréquence","Puissance"],a:0},
  {q:"Qui a inventé la pile électrique ?",c:["Alessandro Volta","Luigi Galvani","Michael Faraday","André-Marie Ampère"],a:0},
  {q:"Combien de volts produit une prise domestique française ?",c:["230 V","110 V","120 V","380 V"],a:0},
  {q:"Quel métal est le meilleur conducteur d'électricité ?",c:["L'argent","Le cuivre","L'or","L'aluminium"],a:0},
  {q:"Qui a développé le système de courant alternatif ?",c:["Nikola Tesla","Thomas Edison","George Westinghouse","James Watt"],a:0},
  {q:"Comment s'appelle la loi reliant tension, courant et résistance ?",c:["Loi d'Ohm","Loi de Faraday","Loi de Coulomb","Loi de Kirchhoff"],a:0},
];
r.sciences_002 = [ // La Gravité
  {q:"Qui a découvert la loi de la gravitation universelle ?",c:["Isaac Newton","Albert Einstein","Galilée","Edmond Halley"],a:0},
  {q:"Quelle est la constante d'accélération due à la gravité sur Terre ?",c:["9,81 m/s²","9,8 m/s²","10 m/s²","8,81 m/s²"],a:0},
  {q:"En quelle année Newton a-t-il publié ses lois ?",c:["1687","1666","1700","1650"],a:0},
  {q:"Qui a proposé la relativité générale pour expliquer la gravité ?",c:["Albert Einstein","Max Planck","Niels Bohr","Werner Heisenberg"],a:0},
  {q:"Sur quel objet la gravité est-elle la plus faible dans notre système solaire ?",c:["Mercure","Pluton","Mars","La Lune"],a:1},
  {q:"Qu'est-ce qu'un trou noir ?",c:["Un objet dont la gravité est si forte que rien n'en sort","Une étoile morte","Un vortex spatial","Une étoile à neutrons"],a:0},
  {q:"Comment s'appelle la force qui s'oppose à la gravité dans un avion ?",c:["La portance","La traînée","La poussée","Le poids"],a:0},
  {q:"Qui a mesuré la constante gravitationnelle pour la première fois ?",c:["Henry Cavendish","Isaac Newton","John Michell","Pierre Bouguer"],a:0},
];
r.sciences_003 = [ // La Théorie de l'évolution
  {q:"Qui a proposé la théorie de l'évolution par sélection naturelle ?",c:["Charles Darwin","Jean-Baptiste Lamarck","Alfred Russel Wallace","Gregor Mendel"],a:0},
  {q:"En quelle année Darwin a-t-il publié 'L'Origine des espèces' ?",c:["1859","1850","1865","1845"],a:0},
  {q:"Quel archipel Darwin a-t-il étudié pour sa théorie ?",c:["Les Galápagos","Les Marquises","Les Fidji","Les Hawaï"],a:0},
  {q:"Qui a proposé une théorie de l'évolution avant Darwin ?",c:["Lamarck","Cuvier","Buffon","Malthus"],a:0},
  {q:"Quelle est l'idée centrale de la sélection naturelle ?",c:["Survie du mieux adapté","Usage et non-usage","Hérédité des caractères acquis","Mutation aléatoire"],a:0},
  {q:"Quel nom porte la théorie de Darwin ?",c:["Le darwinisme","Le lamarckisme","Le mendélisme","Le néo-darwinisme"],a:3},
  {q:"Quel oiseau des Galápagos est célèbre dans l'étude de Darwin ?",c:["Le pinson","L'iguane","La tortue","Le cormoran"],a:0},
  {q:"Qu'est-ce qu'une 'espèce' selon la biologie moderne ?",c:["Population capable de se reproduire entre elle","Groupe d'animaux semblables","Population vivant au même endroit","Groupe génétiquement identique"],a:0},
];
r.sciences_004 = [ // La Radioactivité
  {q:"Qui a découvert la radioactivité naturelle ?",c:["Henri Becquerel","Marie Curie","Pierre Curie","Ernest Rutherford"],a:0},
  {q:"Quelle particule est émise lors de la désintégration alpha ?",c:["Noyau d'hélium","Électron","Proton","Neutron"],a:0},
  {q:"Qui a découvert le radium et le polonium ?",c:["Marie et Pierre Curie","Henri Becquerel","Irène Joliot-Curie","Frédéric Joliot"],a:0},
  {q:"Combien de prix Nobel Marie Curie a-t-elle remportés ?",c:["2","1","3","4"],a:0},
  {q:"Qu'est-ce qu'un isotope radioactif ?",c:["Atome instable qui se désintègre","Atome stable","Molécule radioactive","Élément instable"],a:0},
  {q:"Quelle est l'unité de mesure de la radioactivité ?",c:["Le becquerel","Le sievert","Le gray","Le curie"],a:0},
  {q:"Quel élément est utilisé dans les centrales nucléaires ?",c:["L'uranium","Le plutonium","Le thorium","Le radium"],a:0},
  {q:"Comment s'appelle le processus de fission nucléaire ?",c:["Division du noyau d'un atome","Fusion de noyaux","Désintégration radioactive","Réaction en chaîne"],a:0},
];
r.sciences_005 = [ // Les trous noirs
  {q:"Qu'est-ce qu'un trou noir ?",c:["Région de l'espace où la gravité est si forte que rien ne s'en échappe","Étoile très dense","Portail interstellaire","Vortex cosmique"],a:0},
  {q:"Qui a prédit l'existence des trous noirs avec la relativité générale ?",c:["Albert Einstein","Stephen Hawking","Karl Schwarzschild","John Wheeler"],a:0},
  {q:"Qu'est-ce que l'horizon des événements d'un trou noir ?",c:["Le point de non-retour","La surface du trou noir","Le centre du trou noir","La singularité"],a:0},
  {q:"Comment s'appelle le centre d'un trou noir ?",c:["La singularité","L'horizon","La sphère de photons","Le disque d'accrétion"],a:0},
  {q:"Qui a inventé le terme 'trou noir' ?",c:["John Wheeler","Albert Einstein","Stephen Hawking","Karl Schwarzschild"],a:0},
  {q:"Quel type de trou noir est le plus massif ?",c:["Le trou noir supermassif","Le trou noir stellaire","Le mini trou noir","Le trou noir primordial"],a:0},
  {q:"Quel est le trou noir le plus proche de la Terre ?",c:["Gaia BH1","Sagittarius A*","Cygnus X-1","V616 Monocerotis"],a:0},
  {q:"Que rayonnent les trous noirs selon Hawking ?",c:["Rayonnement de Hawking","Lumière","Rayons X","Ondes gravitationnelles"],a:0},
];
r.sciences_006 = [ // La Photosynthèse
  {q:"Quel gaz les plantes absorbent-elles pendant la photosynthèse ?",c:["Le dioxyde de carbone","L'oxygène","L'azote","L'hydrogène"],a:0},
  {q:"Quel pigment est responsable de la couleur verte des plantes ?",c:["La chlorophylle","La xanthophylle","Le carotène","L'anthocyane"],a:0},
  {q:"Quels sont les produits de la photosynthèse ?",c:["Glucose et oxygène","Glucose et eau","Eau et oxygène","CO2 et eau"],a:0},
  {q:"Quelle énergie est utilisée dans la photosynthèse ?",c:["Lumière solaire","Chaleur","Électricité","Énergie chimique"],a:0},
  {q:"Dans quelle partie de la plante la photosynthèse a-t-elle lieu ?",c:["Les feuilles","Les racines","La tige","Les fleurs"],a:0},
  {q:"Quel organite cellulaire réalise la photosynthèse ?",c:["Le chloroplaste","La mitochondrie","Le noyau","Le ribosome"],a:0},
  {q:"En quelle année la photosynthèse a-t-elle été découverte ?",c:["1779 (Ingenhousz)","1643 (Van Helmont)","1804 (De Saussure)","1900"],a:0},
  {q:"Quel scientifique a découvert que les plantes produisent de l'oxygène ?",c:["Joseph Priestley","Jan Ingenhousz","Antoine Lavoisier","Jean Senebier"],a:0},
];
r.sciences_007 = [ // La Relativité
  {q:"Quel physicien a développé la théorie de la relativité ?",c:["Albert Einstein","Isaac Newton","Niels Bohr","Max Planck"],a:0},
  {q:"En quelle année Einstein a-t-il publié la relativité restreinte ?",c:["1905","1915","1900","1910"],a:0},
  {q:"Quelle équation célèbre découle de la relativité restreinte ?",c:["E=mc²","F=ma","E=hf","PV=nRT"],a:0},
  {q:"En quelle année la relativité générale a-t-elle été publiée ?",c:["1915","1905","1919","1920"],a:0},
  {q:"Qu'est-ce que la dilatation du temps ?",c:["Le temps passe plus lentement à grande vitesse","Le temps s'arrête","Le temps s'accélère","Le temps ne change pas"],a:0},
  {q:"Quelle expérience a confirmé la relativité générale en 1919 ?",c:["L'éclipse solaire et la déviation de la lumière","L'expérience Michelson-Morley","La mesure du décalage vers le rouge","L'expérience de Pound-Rebka"],a:0},
  {q:"Que prédit la relativité générale au sujet de la lumière près d'un objet massif ?",c:["Elle est déviée","Elle s'arrête","Elle accélère","Elle change de couleur"],a:0},
  {q:"Comment s'appelle le paradoxe célèbre de la relativité restreinte ?",c:["Le paradoxe des jumeaux","Le paradoxe d'Einstein-Podolsky-Rosen","Le paradoxe du chat de Schrödinger","Le paradoxe de l'information"],a:0},
];
r.sciences_008 = [ // L'ADN
  {q:"Quelle est la structure de l'ADN ?",c:["Double hélice","Simple brin","Triple hélice","En boucle"],a:0},
  {q:"Qui a découvert la structure de l'ADN en 1953 ?",c:["Watson et Crick","Mendel","Darwin","Pauling"],a:0},
  {q:"Quelles sont les quatre bases de l'ADN ?",c:["A, T, G, C","A, U, G, C","A, T, G, U","T, U, G, C"],a:0},
  {q:"Combien de paires de chromosomes l'humain possède-t-il ?",c:["23","24","22","46"],a:0},
  {q:"Qui a découvert l'ADN comme molécule de l'hérédité ?",c:["Avery, MacLeod, McCarty","Mendel","Watson et Crick","Griffith"],a:0},
  {q:"Comment s'appelle le processus de copie de l'ADN ?",c:["La réplication","La transcription","La traduction","La mutation"],a:0},
  {q:"Qui a découvert les rayons X utilisés pour visualiser l'ADN ?",c:["Rosalind Franklin","Linus Pauling","Maurice Wilkins","James Watson"],a:0},
  {q:"Quel pourcentage de l'ADN humain est identique à celui des chimpanzés ?",c:["Environ 99%","Environ 95%","Environ 98%","Environ 90%"],a:2},
];
r.sciences_009 = [ // Les volcans
  {q:"Comment s'appelle la roche en fusion à l'intérieur d'un volcan ?",c:["Le magma","La lave","La roche magmatique","Le basalte"],a:0},
  {q:"Quel célèbre volcan italien a détruit Pompéi en 79 ap. J.-C. ?",c:["Le Vésuve","L'Etna","Le Stromboli","Le Vulcano"],a:0},
  {q:"Quelle est la différence entre magma et lave ?",c:["Le magma est sous terre, la lave en surface"],a:0},
  {q:"Quel type de volcan a une forme conique ?",c:["Le stratovolcan","Le volcan bouclier","Le cône de cendres","Le dôme de lave"],a:0},
  {q:"Quel volcan hawaïen est le plus actif ?",c:["Kilauea","Mauna Loa","Mauna Kea","Hualālai"],a:0},
  {q:"Qu'est-ce que la ceinture de feu du Pacifique ?",c:["Zone de forte activité volcanique et sismique","Chaîne de volcans","Zone de subduction","Région volcanique"],a:0},
  {q:"Quel est le plus grand volcan du système solaire ?",c:["Olympus Mons sur Mars","Mauna Loa","L'Etna","Le Vésuve"],a:0},
  {q:"Quel volcan indonésien a causé l'éruption la plus meurtrière en 1815 ?",c:["Tambora","Krakatoa","Merapi","Toba"],a:0},
];
r.sciences_010 = [ // Mécanique quantique
  {q:"Qui a proposé le concept de quantum d'énergie ?",c:["Max Planck","Albert Einstein","Niels Bohr","Werner Heisenberg"],a:0},
  {q:"En quelle année Planck a-t-il introduit les quanta ?",c:["1900","1905","1910","1895"],a:0},
  {q:"Quel est le principe d'incertitude d'Heisenberg ?",c:["On ne peut connaître à la fois position et impulsion","Tout est incertain","L'énergie est quantifiée","La matière est une onde"],a:0},
  {q:"Qui a proposé la dualité onde-particule ?",c:["Louis de Broglie","Albert Einstein","Niels Bohr","Erwin Schrödinger"],a:0},
  {q:"Qu'est-ce que le chat de Schrödinger ?",c:["Un paradoxe quantique","Un vrai chat","Une expérience réelle","Un chat quantique"],a:0},
  {q:"Qui a développé la mécanique quantique matricielle ?",c:["Werner Heisenberg","Erwin Schrödinger","Paul Dirac","Max Born"],a:0},
  {q:"Qu'est-ce que l'intrication quantique ?",c:["Des particules corrélées instantanément","Des particules enchevêtrées","Des particules liées","Des particules jumelles"],a:0},
  {q:"Qui a remporté le prix Nobel pour l'effet photoélectrique ?",c:["Albert Einstein","Max Planck","Niels Bohr","Philipp Lenard"],a:0},
];
r.sciences_011 = [ // Système solaire
  {q:"Combien de planètes y a-t-il dans notre système solaire ?",c:["8","9","7","10"],a:0},
  {q:"Quelle est la plus grande planète du système solaire ?",c:["Jupiter","Saturne","Neptune","Uranus"],a:0},
  {q:"Quelle planète est la plus proche du Soleil ?",c:["Mercure","Vénus","Terre","Mars"],a:0},
  {q:"Quelle est la planète la plus éloignée du Soleil ?",c:["Neptune","Pluton","Uranus","Saturne"],a:0},
  {q:"Quelle planète est connue pour ses anneaux spectaculaires ?",c:["Saturne","Jupiter","Neptune","Uranus"],a:0},
  {q:"Quel est le plus grand volcan du système solaire ?",c:["Olympus Mons (Mars)","Mauna Loa (Terre)","Mont Everest","Montagne de Vénus"],a:0},
  {q:"Combien de temps met la Terre pour orbiter autour du Soleil ?",c:["365,25 jours","365 jours","364 jours","366 jours"],a:0},
  {q:"Quelle est la planète la plus chaude du système solaire ?",c:["Vénus","Mercure","Mars","Jupiter"],a:0},
];
r.sciences_012 = [ // Les aimants
  {q:"Quel métal est attiré par un aimant ?",c:["Le fer","L'aluminium","Le cuivre","Le plomb"],a:0},
  {q:"Quels sont les deux pôles d'un aimant ?",c:["Nord et Sud","Est et Ouest","Positif et négatif","Plus et moins"],a:0},
  {q:"Que se passe-t-il quand on approche deux pôles identiques ?",c:["Ils se repoussent","Ils s'attirent","Rien","Ils s'annulent"],a:0},
  {q:"Quelle planète possède le champ magnétique le plus puissant ?",c:["Jupiter","Terre","Saturne","Neptune"],a:0},
  {q:"Qu'est-ce qu'un électroaimant ?",c:["Un aimant créé par un courant électrique","Un aimant permanent","Une bobine","Un aimant naturel"],a:0},
  {q:"Qui a découvert le magnétisme terrestre ?",c:["William Gilbert","Michael Faraday","Hans Christian Oersted","André-Marie Ampère"],a:0},
  {q:"Comment s'appelle la boussole ?",c:["Boussole","Aiguille magnétique","Compas","Gyroscope"],a:0},
  {q:"Quelle roche est naturellement magnétique ?",c:["La magnétite","Le granit","Le basalte","Le calcaire"],a:0},
];
r.sciences_013 = [ // Thermodynamique
  {q:"Qu'est-ce que la température mesure ?",c:["L'énergie cinétique moyenne des molécules","La chaleur","L'énergie","La vitesse"],a:0},
  {q:"Qui a formulé la première loi de la thermodynamique ?",c:["Julius von Mayer","James Joule","Hermann von Helmholtz","Sadi Carnot"],a:0},
  {q:"Quels sont les trois modes de transfert de chaleur ?",c:["Conduction, convection, rayonnement","Conduction, convection, fusion","Rayonnement, fusion, évaporation","Conduction, évaporation, radiation"],a:0},
  {q:"Quel zéro absolu en degrés Celsius ?",c:["-273,15 °C","-200 °C","-300 °C","-250 °C"],a:0},
  {q:"Qui a inventé le moteur à vapeur ?",c:["James Watt","Thomas Newcomen","Denis Papin","George Stephenson"],a:0},
  {q:"Qu'est-ce que l'entropie ?",c:["Mesure du désordre d'un système","Mesure de la chaleur","Mesure de l'énergie","Mesure de la température"],a:0},
  {q:"Qui a inventé le réfrigérateur ?",c:["Jacob Perkins","John Gorrie","Carl von Linde","Albert Einstein"],a:0},
  {q:"Quelle loi relie pression, volume et température d'un gaz ?",c:["PV = nRT","F = ma","E = mc²","V = IR"],a:0},
];
r.sciences_014 = [ // Les atomes
  {q:"Qui a proposé le modèle atomique avec un noyau ?",c:["Ernest Rutherford","Niels Bohr","J.J. Thomson","John Dalton"],a:0},
  {q:"Combien de protons un atome de carbone a-t-il ?",c:["6","12","8","4"],a:0},
  {q:"Quelles sont les trois particules principales d'un atome ?",c:["Protons, neutrons, électrons","Protons, électrons, positrons","Neutrons, protons, photons","Électrons, neutrons, muons"],a:0},
  {q:"Qui a proposé le premier modèle atomique moderne ?",c:["John Dalton","Démocrite","Aristote","Leucippe"],a:0},
  {q:"Quelle est la charge d'un électron ?",c:["Négative","Positive","Neutre","Variable"],a:0},
  {q:"Qui a découvert l'électron ?",c:["J.J. Thomson","Ernest Rutherford","James Chadwick","Robert Millikan"],a:0},
  {q:"Qui a découvert le neutron ?",c:["James Chadwick","Ernest Rutherford","J.J. Thomson","Niels Bohr"],a:0},
  {q:"Quelle est la taille approximative d'un atome ?",c:["0,1 nanomètre","1 micromètre","1 millimètre","1 picomètre"],a:0},
];
r.sciences_015 = [ // Les virus
  {q:"Un virus est-il considéré comme vivant ?",c:["Non, il a besoin d'un hôte","Oui","Seulement dans certaines conditions","C'est une bactérie"],a:0},
  {q:"Quelle est la taille d'un virus par rapport à une bactérie ?",c:["Beaucoup plus petit","Beaucoup plus grand","À peu près égal","Variable"],a:0},
  {q:"Qu'est-ce qu'un virus ?",c:["Entité infectieuse qui se reproduit dans des cellules","Bactérie","Micro-organisme","Parasite"],a:0},
  {q:"Quels sont les principaux composants d'un virus ?",c:["Acide nucléique et capside","ADN et ARN","Protéines et lipides","Noyau et membrane"],a:0},
  {q:"Comment s'appelle la protéine qui entoure le matériel génétique d'un virus ?",c:["La capside","L'enveloppe","La membrane","La paroi"],a:0},
  {q:"Qui a découvert le premier virus ?",c:["Dmitri Ivanovsky","Louis Pasteur","Robert Koch","Martinus Beijerinck"],a:0},
  {q:"Quel virus est responsable de la variole ?",c:["Variole virus","Virus de la vaccine","Virus de la varicelle","Virus Ebola"],a:0},
  {q:"Comment les virus se reproduisent-ils ?",c:["En détournant la machinerie cellulaire de l'hôte","Par division","Par mitose","Par sporulation"],a:0},
];
r.sciences_016 = [ // Nombres premiers
  {q:"Qu'est-ce qu'un nombre premier ?",c:["Divisible seulement par 1 et lui-même","Divisible par 2","Impair","Nombre entier"],a:0},
  {q:"Quel est le seul nombre premier pair ?",c:["2","3","5","1"],a:0},
  {q:"Combien de nombres premiers existe-t-il ?",c:["Une infinité","100","10 000","1 000"],a:0},
  {q:"Qui a démontré l'infinité des nombres premiers ?",c:["Euclide","Pythagore","Eratosthène","Archimède"],a:0},
  {q:"Comment s'appelle la méthode pour trouver des nombres premiers ?",c:["Le crible d'Ératosthène","Le théorème de Pythagore","L'algorithme d'Euclide","La conjecture de Goldbach"],a:0},
  {q:"Quelle conjecture affirme que tout nombre pair est somme de deux nombres premiers ?",c:["La conjecture de Goldbach","Le théorème des nombres premiers","L'hypothèse de Riemann","Le dernier théorème de Fermat"],a:0},
  {q:"Quel est le plus grand nombre premier connu (2024) ?",c:["2^82589933 - 1","2^1000000 - 1","2^74207281 - 1","2^57885161 - 1"],a:0},
  {q:"Quel mathématicien a travaillé sur la répartition des nombres premiers ?",c:["Bernhard Riemann","Carl Friedrich Gauss","Leonhard Euler","Pierre de Fermat"],a:0},
];
r.sciences_017 = [ // Fission nucléaire
  {q:"Qu'est-ce que la fission nucléaire ?",c:["Division du noyau d'un atome lourd","Fusion de noyaux légers","Désintégration radioactive","Réaction chimique"],a:0},
  {q:"Qui a découvert la fission nucléaire ?",c:["Otto Hahn et Fritz Strassmann","Enrico Fermi","Lise Meitner","Marie Curie"],a:0},
  {q:"En quelle année la fission a-t-elle été découverte ?",c:["1938","1942","1935","1945"],a:0},
  {q:"Quel élément est le plus utilisé dans la fission ?",c:["L'uranium 235","Le plutonium 239","L'uranium 238","Le thorium"],a:0},
  {q:"Comment s'appelle la réaction en chaîne de la fission ?",c:["Réaction en chaîne","Fission multiple","Réaction nucléaire","Réaction atomique"],a:0},
  {q:"Quel projet a construit la première bombe atomique ?",c:["Projet Manhattan","Projet Tube Alloys","Projet Alsos","Projet Y"],a:0},
  {q:"Qui a construit le premier réacteur nucléaire ?",c:["Enrico Fermi","Otto Hahn","Niels Bohr","Robert Oppenheimer"],a:0},
  {q:"Quelle ville a été détruite par la première bombe atomique ?",c:["Hiroshima","Nagasaki","Tokyo","Osaka"],a:0},
];
r.sciences_018 = [ // Les cristaux
  {q:"Qu'est-ce qu'un cristal ?",c:["Solide dont les atomes sont arrangés de manière ordonnée","Verre","Roche transparente","Diamant"],a:0},
  {q:"Quel est le minéral le plus dur ?",c:["Le diamant","Le corindon","Le quartz","Le grenat"],a:0},
  {q:"Quelle est la forme d'un cristal de sel ?",c:["Cubique","Hexagonal","Rectangulaire","Sphérique"],a:0},
  {q:"Qui a reçu le prix Nobel pour la diffraction des rayons X par les cristaux ?",c:["Max von Laue","William Henry Bragg","William Lawrence Bragg","Les deux Bragg"],a:3},
  {q:"Combien de systèmes cristallins existe-t-il ?",c:["7","6","5","8"],a:0},
  {q:"Quel cristal est utilisé en électronique pour l'oscillation ?",c:["Le quartz","Le diamant","Le rubis","Le saphir"],a:0},
  {q:"Quel scientifique a découvert la diffraction des rayons X par les cristaux ?",c:["Max von Laue","William Bragg","Lawrence Bragg","Röntgen"],a:0},
  {q:"Comment s'appelle la science qui étudie les cristaux ?",c:["La cristallographie","La minéralogie","La géologie","La lithologie"],a:0},
];

// ---------- ARTS (14 themes) ----------
r.arts_001 = [ // Peinture
  {q:"Qui a peint la Joconde ?",c:["Léonard de Vinci","Michel-Ange","Raphaël","Botticelli"],a:0},
  {q:"Quel tableau de Van Gogh est le plus célèbre ?",c:["La Nuit étoilée","Les Tournesols","Les Iris","La Chambre"],a:0},
  {q:"Qui est le fondateur de l'impressionnisme ?",c:["Claude Monet","Édouard Manet","Auguste Renoir","Edgar Degas"],a:0},
  {q:"Quel peintre espagnol a peint 'Guernica' ?",c:["Pablo Picasso","Salvador Dalí","Francisco de Goya","Joan Miró"],a:0},
  {q:"Quel mouvement artistique a précédé la Renaissance ?",c:["Le gothique","Le roman","Le baroque","Le rococo"],a:0},
  {q:"Qui a peint 'Le Cri' ?",c:["Edvard Munch","Vincent van Gogh","James Ensor","Gustav Klimt"],a:0},
  {q:"Quel tableau de Vermeer est surnommé 'La Joconde du Nord' ?",c:["La Jeune Fille à la perle","La Laitière","La Vue de Delft","La Dentellière"],a:0},
  {q:"Quel mouvement pictural est caractérisé par des points de couleur ?",c:["Le pointillisme","Le fauvisme","Le cubisme","Le surréalisme"],a:0},
];
r.arts_002 = [ // Sculpture
  {q:"Qui a sculpté le David de Florence ?",c:["Michel-Ange","Donatello","Le Bernin","Verrocchio"],a:0},
  {q:"Quelle sculpture grecque antique est l'une des plus célèbres ?",c:["La Vénus de Milo","Le Discobole","La Victoire de Samothrace","Le Laocoon"],a:0},
  {q:"Qui a créé 'Le Penseur' ?",c:["Auguste Rodin","Camille Claudel","Antoine Bourdelle","Aristide Maillol"],a:0},
  {q:"Quel sculpteur français a créé 'Le Baiser' ?",c:["Auguste Rodin","Camille Claudel","Jean-Baptiste Carpeaux","François Rude"],a:0},
  {q:"Quel matériau est le plus utilisé en sculpture classique ?",c:["Le marbre","Le bronze","Le bois","L'argile"],a:0},
  {q:"Qui a sculpté 'La Pietà' au Vatican ?",c:["Michel-Ange","Le Bernin","Donatello","Raphaël"],a:0},
  {q:"Quel mouvement artistique du XXe siècle a révolutionné la sculpture ?",c:["Le cubisme","Le dadaïsme","Le surréalisme","Le constructivisme"],a:0},
  {q:"Qui a créé la sculpture 'L'Homme qui marche' ?",c:["Alberto Giacometti","Henry Moore","Constantin Brâncuși","Jean Arp"],a:0},
];
r.arts_003 = [ // Poésie
  {q:"Quel poète français a écrit 'Le Bateau ivre' ?",c:["Arthur Rimbaud","Charles Baudelaire","Paul Verlaine","Stéphane Mallarmé"],a:0},
  {q:"Qui a écrit 'Les Fleurs du mal' ?",c:["Charles Baudelaire","Arthur Rimbaud","Victor Hugo","Paul Verlaine"],a:0},
  {q:"Quelle forme poétique japonaise a 17 syllabes ?",c:["Le haïku","Le tanka","Le renga","Le senryū"],a:0},
  {q:"Qui est considéré comme le père de la poésie française ?",c:["François de Malherbe","Pierre de Ronsard","Joachim du Bellay","Clément Marot"],a:1},
  {q:"Quel poète a écrit 'Demain, dès l'aube' ?",c:["Victor Hugo","Charles Baudelaire","Arthur Rimbaud","Alphonse de Lamartine"],a:0},
  {q:"Comment s'appelle un poème de 14 vers avec un schéma de rimes spécifique ?",c:["Le sonnet","La ballade","Le rondeau","L'ode"],a:0},
  {q:"Qui a écrit 'Le Pont Mirabeau' ?",c:["Guillaume Apollinaire","Paul Éluard","André Breton","Louis Aragon"],a:0},
  {q:"Quel poète italien a écrit 'La Divine Comédie' ?",c:["Dante Alighieri","Pétrarque","Boccace","Arioste"],a:0},
];
r.arts_004 = [ // Photographie
  {q:"Qui a inventé la photographie en 1839 ?",c:["Louis Daguerre","Nicéphore Niépce","William Henry Fox Talbot","George Eastman"],a:0},
  {q:"Comment s'appelle la première photographie permanente ?",c:["Point de vue du Gras","Le daguerréotype","Le calotype","La camera obscura"],a:0},
  {q:"Quel paramètre contrôle la luminosité d'une photo ?",c:["L'ouverture","La vitesse d'obturation","L'ISO","Tous ces paramètres"],a:3},
  {q:"Qui a fondé l'agence Magnum Photos ?",c:["Henri Cartier-Bresson","Robert Capa","David Seymour","Tous ces photographes"],a:3},
  {q:"Qu'est-ce qu'un reflex numérique ?",c:["Appareil avec miroir et viseur optique","Appareil compact","Appareil télémétrique","Appareil moyen format"],a:0},
  {q:"Quel photographe est connu pour ses clichés de la guerre d'Espagne ?",c:["Robert Capa","Henri Cartier-Bresson","Gerda Taro","David Seymour"],a:0},
  {q:"Comment s'appelle le rapport entre la distance focale et le capteur ?",c:["Le facteur de crop","Le zoom","Le grand-angle","Le téléobjectif"],a:0},
  {q:"Quel procédé photographique ancien utilise un support en verre ?",c:["Le collodion humide","Le daguerréotype","Le calotype","L'ambrotype"],a:0},
];
r.arts_005 = [ // Théâtre
  {q:"Qui a écrit 'Roméo et Juliette' ?",c:["William Shakespeare","Molière","Jean Racine","Corneille"],a:0},
  {q:"Quel dramaturge français a écrit 'Le Misanthrope' ?",c:["Molière","Racine","Corneille","Marivaux"],a:0},
  {q:"Comment s'appelle la partie surélevée où les acteurs jouent ?",c:["La scène","L'avant-scène","Le plateau","Le planche"],a:0},
  {q:"Qui a écrit 'Antigone' ?",c:["Sophocle","Euripide","Eschyle","Aristophane"],a:0},
  {q:"Quel type de pièce se termine par un dénouement heureux ?",c:["La comédie","La tragédie","Le drame","Le vaudeville"],a:0},
  {q:"Quel dramaturge norvégien a écrit 'Une maison de poupée' ?",c:["Henrik Ibsen","August Strindberg","Anton Tchekhov","Georges Feydeau"],a:0},
  {q:"Comment s'appelle le rideau de scène ?",c:["Le rideau","La toile","Le velours","Le cyclorama"],a:0},
  {q:"Quel théâtre parisien est le plus célèbre ?",c:["La Comédie-Française","Le Théâtre de l'Odéon","Le Théâtre du Châtelet","Le Théâtre Mogador"],a:0},
];
r.arts_006 = [ // Architecture
  {q:"Quel est le plus haut building du monde ?",c:["Burj Khalifa","One World Trade Center","Shanghai Tower","Tour CN"],a:0},
  {q:"Qui a conçu la tour Eiffel ?",c:["Gustave Eiffel","Gustave Alexandre Eiffel","Jean Eiffel","Charles Eiffel"],a:0},
  {q:"Quel style architectural est caractérisé par les arcs-boutants ?",c:["Le gothique","Le roman","Le baroque","Le classique"],a:0},
  {q:"En quelle année la tour Eiffel a-t-elle été inaugurée ?",c:["1889","1887","1891","1900"],a:0},
  {q:"Quel architecte a conçu la Sagrada Familia ?",c:["Antoni Gaudí","Lluís Domènech i Montaner","Josep Puig i Cadafalch","Le Corbusier"],a:0},
  {q:"Qu'est-ce qu'un architecte ?",c:["Un professionnel qui conçoit des bâtiments","Un ingénieur","Un constructeur","Un designer"],a:0},
  {q:"Quel architecte français a révolutionné l'architecture moderne ?",c:["Le Corbusier","Jean Nouvel","Christian de Portzamparc","Renzo Piano"],a:0},
  {q:"Quel musée parisien est une pyramide de verre à son entrée ?",c:["Le Louvre","Orsay","Beaubourg","Le Quai Branly"],a:0},
];
r.arts_007 = [ // Bande dessinée
  {q:"Quel personnage de BD est un petit garçon à la houppe blonde ?",c:["Tintin","Lucky Luke","Astérix","Spirou"],a:0},
  {q:"Qui a créé les Schtroumpfs ?",c:["Peyo","Franquin","Morris","Goscinny"],a:0},
  {q:"Quel dessinateur belge a créé Tintin ?",c:["Hergé","Edgar P. Jacobs","Jacques Martin","Franquin"],a:0},
  {q:"Quel Gaulois est le héros de la BD créée par Goscinny et Uderzo ?",c:["Astérix","Obélix","Idéfix","Panoramix"],a:0},
  {q:"Quel cow-boy solitaire est dessiné par Morris ?",c:["Lucky Luke","Blueberry","Jerry Spring","Comanche"],a:0},
  {q:"Quel est le nom de la série de bande dessinée japonais ?",c:["Manga","Manhwa","Manhua","Comic"],a:0},
  {q:"Qui a créé 'Les Aventures de Tintin' ?",c:["Hergé","Edgar P. Jacobs","Alexandre Dumas","Jules Verne"],a:0},
  {q:"Quel festival de BD est le plus important en France ?",c:["Angoulême","Bruxelles","Paris","Lyon"],a:0},
];
r.arts_008 = [ // Calligraphie
  {q:"Qu'est-ce que la calligraphie ?",c:["L'art de la belle écriture","L'art de la peinture","L'art du dessin","L'art de l'impression"],a:0},
  {q:"Quel pays a une tradition de calligraphie à l'encre de Chine ?",c:["La Chine","Le Japon","La Corée","Tous ces pays"],a:3},
  {q:"Quel instrument traditionnel est utilisé dans la calligraphie arabe ?",c:["Le calame","Le pinceau","La plume","Le roseau"],a:0},
  {q:"Quel style d'écriture européen est associé à la calligraphie médiévale ?",c:["L'onciale","La gothique","La caroline","La romaine"],a:1},
  {q:"Qui a inventé l'imprimerie à caractères mobiles ?",c:["Gutenberg","Bi Sheng","Caxton","Alde Manuce"],a:0},
  {q:"Quel est le nom du système d'écriture japonais le plus ancien ?",c:["Le kanji","Le hiragana","Le katakana","Le rōmaji"],a:0},
  {q:"Quel calligraphe chinois est le plus célèbre ?",c:["Wang Xizhi","Yan Zhenqing","Ouyang Xun","Liu Gongquan"],a:0},
  {q:"Qu'est-ce que l'enluminure au Moyen Âge ?",c:["Décoration des manuscrits avec des couleurs et des dorures","Calligraphie","Peinture","Gravure"],a:0},
];
r.arts_009 = [ // Danse
  {q:"Quelle danse classique raconte une histoire sans paroles ?",c:["Le ballet","La danse contemporaine","Le modern jazz","Les claquettes"],a:0},
  {q:"Qui a composé 'Le Lac des cygnes' ?",c:["Tchaïkovski","Stravinsky","Prokofiev","Moussorgski"],a:0},
  {q:"Quelle danse cubaine est devenue populaire dans le monde ?",c:["La salsa","Le tango","Le flamenco","La rumba"],a:0},
  {q:"Quel danseur français est connu pour son rôle dans 'Billy Elliot' ?",c:["Michaël Jackson","Rudolf Noureev","Mikhail Barychnikov","Fred Astaire"],a:1},
  {q:"Comment s'appelle la position où le danseur tourne sur lui-même ?",c:["La pirouette","Le saut","L'arabesque","Le plié"],a:0},
  {q:"Quelle danse brésilienne est associée au carnaval ?",c:["La samba","La bossa nova","Le forró","Le frevo"],a:0},
  {q:"Quel chorégraphe français contemporain est célèbre ?",c:["Maurice Béjart","Rudolf Noureev","Serge Lifar","Pina Bausch"],a:0},
  {q:"En quelle année le breakdance devient-il olympique ?",c:["2024","2020","2028","2032"],a:0},
];
r.arts_010 = [ // Opéra
  {q:"Quel compositeur a écrit 'La Traviata' ?",c:["Giuseppe Verdi","Giacomo Puccini","Wolfgang Amadeus Mozart","Richard Wagner"],a:0},
  {q:"Qu'est-ce qu'un ténor ?",c:["Une voix masculine aiguë","Une voix grave","Une voix moyenne","Une voix de femme"],a:0},
  {q:"Quelle salle d'opéra parisienne est la plus célèbre ?",c:["L'Opéra Garnier","L'Opéra Bastille","Le Châtelet","La Scala"],a:0},
  {q:"Qui a composé 'Les Noces de Figaro' ?",c:["Mozart","Verdi","Rossini","Donizetti"],a:0},
  {q:"Quel mot désigne le texte d'un opéra ?",c:["Le livret","Le libretto","Le scénario","Le script"],a:0},
  {q:"Quel ténor italien est le plus célèbre du XXe siècle ?",c:["Luciano Pavarotti","Enrico Caruso","Plácido Domingo","José Carreras"],a:0},
  {q:"Qui a composé 'Carmen' ?",c:["Georges Bizet","Giuseppe Verdi","Giacomo Puccini","Charles Gounod"],a:0},
  {q:"Quel compositeur allemand a créé l'opéra 'L'Anneau du Nibelung' ?",c:["Richard Wagner","Richard Strauss","Johann Strauss","Ludwig van Beethoven"],a:0},
];
r.arts_011 = [ // Cinéma muet
  {q:"Qui est le roi du burlesque au cinéma muet ?",c:["Charlie Chaplin","Buster Keaton","Harold Lloyd","Mack Sennett"],a:0},
  {q:"En quelle année le cinéma sonore est-il apparu ?",c:["1927","1925","1930","1923"],a:0},
  {q:"Quel est le premier film de Charlie Chaplin ?",c:["Charlot est content de lui","Le Kid","La Ruée vers l'or","Les Temps modernes"],a:0},
  {q:"Quelle actrice du muet était surnommée 'La Petite fiancée de l'Amérique' ?",c:["Mary Pickford","Lillian Gish","Gloria Swanson","Clara Bow"],a:0},
  {q:"Quel réalisateur français a fait des films muets comme 'Napoléon' ?",c:["Abel Gance","Georges Méliès","Louis Feuillade","Jean Renoir"],a:0},
  {q:"Quel film muet allemand est un chef-d'œuvre expressionniste ?",c:["Le Cabinet du docteur Caligari","Nosferatu","Metropolis","M le Maudit"],a:0},
  {q:"Qu'est-ce que le slapstick ?",c:["Un type de comédie physique et burlesque","Un genre de drame","Un style de musique","Une technique de caméra"],a:0},
  {q:"Qui a réalisé 'Le Cuirassé Potemkine' ?",c:["Sergueï Eisenstein","Dziga Vertov","Vsevolod Poudovkine","Alexandre Dovjenko"],a:0},
];
r.arts_012 = [ // Céramique
  {q:"Qu'est-ce que la céramique ?",c:["L'art de créer des objets en argile cuite","L'art de la sculpture","L'art de la poterie","L'art du verre"],a:0},
  {q:"Quel type de céramique chinoise est le plus célèbre ?",c:["La porcelaine","Le grès","La faïence","Le biscuit"],a:0},
  {q:"Quelle est la température de cuisson de la porcelaine ?",c:["1200-1400 °C","800-1000 °C","600-800 °C","1000-1200 °C"],a:0},
  {q:"Qui a découvert la porcelaine en Europe ?",c:["Johann Friedrich Böttger","Josiah Wedgwood","Bernard Palissy","Augustus the Strong"],a:0},
  {q:"Comment s'appelle l'argile utilisée pour la poterie ?",c:["La terre cuite","La faïence","Le grès","La porcelaine"],a:0},
  {q:"Quelle technique consiste à vernir la céramique ?",c:["L'émaillage","La glaçure","La peinture","La cuisson"],a:0},
  {q:"Quel céramiste français est célèbre pour ses œuvres Art nouveau ?",c:["Émile Gallé","Théodore Deck","Jean Carriès","Auguste Delaherche"],a:0},
  {q:"Comment s'appelle le four utilisé pour cuire la céramique ?",c:["Le four","Le four de potier","Le four à céramique","Le four de cuisson"],a:0},
];
r.arts_013 = [ // Mosaïque
  {q:"Qu'est-ce qu'une mosaïque ?",c:["Un assemblage de petites pièces colorées","Une peinture","Une sculpture","Une fresque"],a:0},
  {q:"Comment s'appellent les petits cubes utilisés en mosaïque ?",c:["Des tesselles","Des carreaux","Des fragments","Des morceaux"],a:0},
  {q:"Quelle civilisation antique a excellé dans l'art de la mosaïque ?",c:["Romaine","Grecque","Égyptienne","Persane"],a:0},
  {q:"Quelle ville italienne est célèbre pour ses mosaïques byzantines ?",c:["Ravenne","Rome","Florence","Venise"],a:0},
  {q:"Où se trouve la plus grande mosaïque du monde antique ?",c:["Pompéi","Rome","Constantinople","Antioche"],a:0},
  {q:"Quel matériau est utilisé comme support pour la mosaïque ?",c:["Le mortier","La colle","Le ciment","La chaux"],a:0},
  {q:"Quel artiste catalan a utilisé la mosaïque dans ses œuvres ?",c:["Antoni Gaudí","Pablo Picasso","Salvador Dalí","Joan Miró"],a:0},
  {q:"Quelle basilique de Ravenne est célèbre pour ses mosaïques ?",c:["Basilique Saint-Vital","Basilique Saint-Apollinaire","Basilique Sainte-Marie","Basilique Saint-Jean"],a:0},
];
r.arts_014 = [ // Street art
  {q:"Quel artiste de street art est le plus célèbre ?",c:["Banksy","Shepard Fairey","JR","Keith Haring"],a:0},
  {q:"Qu'est-ce qu'un pochoir dans le street art ?",c:["Une technique utilisant un masque découpé","Une peinture","Un tag","Une fresque"],a:0},
  {q:"Quelle technique de street art utilise des affiches ?",c:["Le collage","La peinture","Le pochoir","Le graffiti"],a:0},
  {q:"Quel street artiste français est connu pour ses collages de visages ?",c:["JR","Banksy","Shepard Fairey","Keith Haring"],a:0},
  {q:"Quel quartier parisien est connu pour ses fresques murales ?",c:["Belleville","Montmartre","Le Marais","Saint-Germain"],a:0},
  {q:"Qu'est-ce qu'un tag ?",c:["Signature stylisée d'un graffeur","Une fresque","Un pochoir","Une affiche"],a:0},
  {q:"Quel artiste américain a commencé par le graffiti dans le métro new-yorkais ?",c:["Keith Haring","Jean-Michel Basquiat","Andy Warhol","Richard Hambleton"],a:0},
  {q:"Quel quartier londonien est célèbre pour le street art ?",c:["Shoreditch","Camden","Notting Hill","Borough"],a:0},
];

// ---------- CUISINE (14 themes) ----------
r.cuisine_001 = [ // Pizza
  {q:"De quel pays est originaire la pizza ?",c:["Italie","France","Grèce","Espagne"],a:0},
  {q:"Quelle ville italienne est associée à la pizza Margherita ?",c:["Naples","Rome","Milan","Florence"],a:0},
  {q:"Quels sont les ingrédients de la pizza Margherita ?",c:["Mozzarella, tomate, basilic","Mozzarella, tomate, origan","Mozzarella, tomate, jambon","Tomate, fromage, champignons"],a:0},
  {q:"En quelle année la pizza a-t-elle été inventée ?",c:["XIXe siècle","XVIIe siècle","XVIIIe siècle","XXe siècle"],a:0},
  {q:"Quelle est la pizza la plus chère du monde ?",c:["Pizza Louis XIII","Pizza Margherita","Pizza Regina","Pizza Capricciosa"],a:0},
  {q:"Comment s'appelle la pâte à pizza fine et croustillante ?",c:["Pâte fine","Pâte à pizza","Pâte napolitaine","Pâte romaine"],a:3},
  {q:"Quel fromage est traditionnellement utilisé sur la pizza ?",c:["Mozzarella","Parmesan","Gorgonzola","Ricotta"],a:0},
  {q:"Qui a inventé la pizza Margherita ?",c:["Raffaele Esposito","Pietro Pizzaiolo","Giuseppe Pizza","Antonio Napoletano"],a:0},
];
r.cuisine_002 = [ // Chocolat
  {q:"De quel arbre provient le cacao ?",c:["Cacaoyer","Caféier","Cocotier","Chocolatier"],a:0},
  {q:"Dans quelle région du monde le cacao est-il originaire ?",c:["Amérique centrale","Afrique","Asie","Europe"],a:0},
  {q:"Quel pays est le plus grand producteur de cacao ?",c:["Côte d'Ivoire","Ghana","Indonésie","Brésil"],a:0},
  {q:"Comment s'appelle la fève de cacao séchée ?",c:["Fève de cacao","Graîne","Cabosse","Pépin"],a:0},
  {q:"Qui a inventé le chocolat au lait ?",c:["Daniel Peter","Henri Nestlé","Milton Hershey","François-Louis Cailler"],a:0},
  {q:"Quelle est la différence entre chocolat noir et au lait ?",c:["Le lait en poudre","La teneur en cacao","Le sucre","Le beurre de cacao"],a:1},
  {q:"Quel chocolatier belge est le plus célèbre ?",c:["Godiva","Neuhaus","Leonidas","Gallien"],a:0},
  {q:"Quelle civilisation a consommé le cacao en premier ?",c:["Les Mayas","Les Aztèques","Les Incas","Les Olmèques"],a:0},
];
r.cuisine_003 = [ // Fromage
  {q:"Combien de types de fromages existe-t-il en France ?",c:["Plus de 1 000","Plus de 500","Plus de 300","Plus de 2 000"],a:0},
  {q:"Quel fromage est célèbre pour ses trous ?",c:["L'emmental","Le gruyère","Le comté","Le beaufort"],a:0},
  {q:"Quel fromage français est interdit aux États-Unis pour son lait cru ?",c:["Le roquefort","Le camembert","Le brie","Le munster"],a:1},
  {q:"Comment s'appelle la croûte du fromage ?",c:["La croûte","L'écorce","La peau","La fleur"],a:0},
  {q:"Quel fromage est fabriqué dans le Massif central ?",c:["Le saint-nectaire","Le camembert","Le reblochon","Le maroilles"],a:0},
  {q:"Quel petit fromage de chèvre est en forme de bûche ?",c:["Le chèvre","Le crottin de Chavignol","Le picodon","Le saint-marcellin"],a:1},
  {q:"Quel fromage italien est filé ?",c:["La mozzarella","Le parmesan","Le gorgonzola","Le pecorino"],a:0},
  {q:"Quel fromage suisse est connu pour ses arômes fruités ?",c:["Le gruyère","L'emmental","Le raclette","Le vacherin"],a:0},
];
r.cuisine_004 = [ // Vin
  {q:"Quels sont les trois cépages principaux du Bordeaux rouge ?",c:["Merlot, Cabernet Sauvignon, Cabernet Franc","Pinot, Gamay, Syrah","Chardonnay, Sauvignon, Riesling","Grenache, Syrah, Mourvèdre"],a:0},
  {q:"Qu'est-ce qu'un millésime ?",c:["L'année de récolte du raisin","L'âge du vin","La région","Le cépage"],a:0},
  {q:"Quelle région française produit du champagne ?",c:["Champagne","Bourgogne","Bordeaux","Alsace"],a:0},
  {q:"Quel est le cépage du vin rouge de Bourgogne ?",c:["Pinot noir","Cabernet Sauvignon","Merlot","Syrah"],a:0},
  {q:"Comment s'appelle la dégustation du vin ?",c:["La dégustation","L'analyse","Le goût","L'évaluation"],a:0},
  {q:"Qu'est-ce qu'un 'grand cru' ?",c:["Une parcelle viticole d'excellence","Un grand vin","Un cépage","Une marque"],a:0},
  {q:"Quelle région viticole produit des vins moelleux comme le Sauternes ?",c:["Bordeaux","Loire","Bourgogne","Alsace"],a:0},
  {q:"Quel pays est le plus grand producteur de vin au monde ?",c:["Italie","France","Espagne","États-Unis"],a:0},
];
r.cuisine_005 = [ // Pâtisserie
  {q:"Quelle pâtisserie française est faite de pâte feuilletée et de crème ?",c:["Le mille-feuille","L'éclair","Le Paris-Brest","La tarte Tatin"],a:0},
  {q:"Qui a créé le macaron moderne ?",c:["Pierre Desfontaines","Ladurée","Pierre Hermé","Gaston Lenôtre"],a:0},
  {q:"Qu'est-ce que la crème pâtissière ?",c:["Crème à base de lait, œufs et farine","Crème chantilly","Crème anglaise","Crème au beurre"],a:0},
  {q:"Quelle pâtisserie viennoise est un roulé à la confiture ?",c:["Le strudel","Le gâteau Sacher","La tarte Linzer","Le kugelhopf"],a:0},
  {q:"Comment s'appelle la crème au beurre utilisée en pâtisserie ?",c:["Crème au beurre","Crème mousseline","Crème Chiboust","Crème diplomate"],a:0},
  {q:"Quelle pâtissière française a créé le Paris-Brest ?",c:["Louis Durand","Gaston Lenôtre","Pierre Hermé","Antoine Carême"],a:0},
  {q:"Qu'est-ce que le fondant en pâtisserie ?",c:["Un glaçage lisse","Une pâte","Une crème","Une décoration"],a:0},
  {q:"Quel gâteau autrichien est au chocolat et à l'abricot ?",c:["Le Sachertorte","Le strudel","Le kaiserschmarrn","Le gâteau Esterházy"],a:0},
];
r.cuisine_006 = [ // Pain
  {q:"Quels sont les ingrédients de base du pain ?",c:["Farine, eau, levure, sel","Farine, eau, œufs, beurre","Farine, eau, sucre, sel","Farine, lait, levure, beurre"],a:0},
  {q:"Quelle est la baguette de pain traditionnelle française ?",c:["La baguette","La ficelle","Le pain de campagne","Le pain complet"],a:0},
  {q:"Comment s'appelle la croûte du pain ?",c:["La croûte","L'écorce","La croute","La coquille"],a:0},
  {q:"Quel pays a la plus grande variété de pains ?",c:["France","Allemagne","Italie","Belgique"],a:1},
  {q:"Qu'est-ce que le levain ?",c:["Ferment naturel à base de farine et d'eau","Levure chimique","Levure de boulanger","Bactérie"],a:0},
  {q:"Comment s'appelle la pâte avant la cuisson ?",c:["Le pâton","La boule","La miche","Le pain"],a:0},
  {q:"Quelle farine est utilisée pour le pain complet ?",c:["Farine complète (T150)","Farine blanche (T55)","Farine semi-complète (T80)","Farine de seigle"],a:0},
  {q:"Qui a inventé la baguette ?",c:["Les boulangers parisiens","Auguste Zang","Marie-Antoine Carême","Napoléon"],a:1},
];
r.cuisine_007 = [ // Cuisine asiatique
  {q:"Quel pays a inventé les sushis ?",c:["Japon","Chine","Corée","Thaïlande"],a:0},
  {q:"Quel plat chinois est composé de nouilles sautées ?",c:["Les nouilles sautées","Le riz cantonais","Les raviolis","Le dim sum"],a:0},
  {q:"Quel plat thaïlandais est une soupe de crevettes ?",c:["Tom yum","Pad thaï","Green curry","Som tam"],a:0},
  {q:"Quel pays asiatique utilise le plus de piment dans sa cuisine ?",c:["Thaïlande","Inde","Chine","Japon"],a:0},
  {q:"Qu'est-ce que le kimchi coréen ?",c:["Chou fermenté épicé","Plat de riz","Soupe","Galette de légumes"],a:0},
  {q:"Quel plat vietnamien est une soupe de nouilles et de bœuf ?",c:["Le phở","Le bánh mì","Le nems","Le bò bún"],a:0},
  {q:"Quels sont les ingrédients de base de la cuisine japonaise ?",c:["Riz, poisson, algues, soja","Riz, viande, légumes, épices","Nouilles, viande, huile","Riz, légumes, huile"],a:0},
  {q:"Qu'est-ce que le wasabi ?",c:["Racine de raifort japonais","Pâte de soja","Gingembre mariné","Piment vert"],a:0},
];
r.cuisine_008 = [ // Café
  {q:"De quel arbre provient le café ?",c:["Caféier","Cacaoyer","Théier","Cocotier"],a:0},
  {q:"Quel pays est le plus grand producteur de café au monde ?",c:["Brésil","Vietnam","Colombie","Indonésie"],a:0},
  {q:"Quels sont les deux principaux types de café ?",c:["Arabica et Robusta","Arabica et Liberica","Robusta et Excelsa","Arabica et Canephora"],a:0},
  {q:"Qu'est-ce qu'un expresso ?",c:["Café court et concentré","Café long","Café au lait","Café glacé"],a:0},
  {q:"Comment s'appelle la mousse du café expresso ?",c:["La crema","L'écume","La mousse","La crème"],a:0},
  {q:"Qui a inventé la machine à expresso ?",c:["Achille Gaggia","Luigi Bezzera","Pavoni","Illy"],a:0},
  {q:"Quelle boisson au café contient du lait chaud ?",c:["Le café latte","Le cappuccino","Le macchiato","L'americano"],a:0},
  {q:"Quel pays a inventé le café filtre ?",c:["France","Italie","États-Unis","Allemagne"],a:2},
];
r.cuisine_009 = [ // Pâtes
  {q:"De quel pays les pâtes sont-elles originaires ?",c:["Italie","Chine","Japon","Grèce"],a:0},
  {q:"Quel type de pâte est long et fin ?",c:["Les spaghetti","Les macaronis","Les fusilli","Les penne"],a:0},
  {q:"Quelle sauce accompagne traditionnellement les spaghetti ?",c:["Sauce bolognaise","Sauce carbonara","Sauce pesto","Sauce Alfredo"],a:0},
  {q:"Quel ingrédient est à la base de la pâte à pâtes ?",c:["Semoule de blé dur","Farine de blé tendre","Farine de blé complet","Farine de maïs"],a:0},
  {q:"Comment s'appelle la pâte farcie italienne ?",c:["Les raviolis","Les tortellinis","Les gnocchis","Les lasagnes"],a:1},
  {q:"Qu'est-ce que la carbonara ?",c:["Sauce à l'œuf, fromage, lard","Sauce tomate et viande","Sauce crème et champignons","Sauce huile d'olive et ail"],a:0},
  {q:"En quelle année les pâtes ont-elles été introduites en Italie ?",c:["XIIIe siècle","Antiquité","XVIe siècle","XVIIIe siècle"],a:0},
  {q:"Quelle forme de pâte est en forme de coquillage ?",c:["Les coquillettes","Les conchiglie","Les farfalle","Les rotini"],a:1},
];
r.cuisine_010 = [ // Bière (note: we also have alcool_003 La bière)
  {q:"Quels sont les quatre ingrédients de base de la bière ?",c:["Eau, malt, houblon, levure","Eau, orge, houblon, sucre","Eau, blé, houblon, levure","Eau, malt, sucre, levure"],a:0},
  {q:"Quel pays est le plus grand producteur de bière au monde ?",c:["Chine","États-Unis","Allemagne","Belgique"],a:0},
  {q:"Quelle est la différence entre une ale et une lager ?",c:["Type de fermentation (haute/basse)","Couleur","Taux d'alcool","Amertume"],a:0},
  {q:"Quelle bière belge est brassée par des moines trappistes ?",c:["Chimay","Stella Artois","Jupiler","Duvel"],a:0},
  {q:"Qu'est-ce qu'une bière artisanale ?",c:["Bière produite par une brasserie indépendante","Bière bio","Bière locale","Bière non filtrée"],a:0},
  {q:"Comment s'appelle la mousse de la bière ?",c:["La mousse","Le collet","Le chapeau","La couronne"],a:0},
  {q:"Quel pays organise l'Oktoberfest ?",c:["Allemagne","Autriche","Suisse","République tchèque"],a:0},
  {q:"Quelle est la plus ancienne brasserie du monde encore en activité ?",c:["Weihenstephan (Allemagne)","Brouwerij (Belgique)","Pilsner Urquell (République tchèque)","Guinness (Irlande)"],a:0},
];
r.cuisine_011 = [ // Gastronomie française
  {q:"Quel est le plat le plus célèbre de la gastronomie française ?",c:["Le coq au vin","Le bœuf bourguignon","La bouillabaisse","Le cassoulet"],a:0},
  {q:"Qui a créé la classification des sauces mères ?",c:["Auguste Escoffier","Marie-Antoine Carême","Paul Bocuse","Joël Robuchon"],a:0},
  {q:"Combien de sauces mères existe-t-il dans la cuisine classique ?",c:["5","4","6","3"],a:0},
  {q:"Quel chef français est surnommé 'le pape de la gastronomie' ?",c:["Paul Bocuse","Joël Robuchon","Alain Ducasse","Michel Guérard"],a:0},
  {q:"Qu'est-ce que le guide Michelin ?",c:["Guide gastronomique avec des étoiles","Guide des vins","Guide des fromages","Guide des hôtels"],a:0},
  {q:"Quelle soupe marseillaise est un plat traditionnel ?",c:["La bouillabaisse","Le pot-au-feu","Le velouté","La soupe à l'oignon"],a:0},
  {q:"Quel chef a inventé la cuisine moléculaire ?",c:["Hervé This","Pierre Gagnaire","Ferran Adrià","Joël Robuchon"],a:0},
  {q:"En quelle année la gastronomie française a-t-elle été inscrite à l'UNESCO ?",c:["2010","2005","2015","2012"],a:0},
];
r.cuisine_012 = [ // Épices
  {q:"Quelle épice est la plus chère du monde ?",c:["Le safran","La vanille","Le poivre","La cardamome"],a:0},
  {q:"De quelle plante provient le poivre ?",c:["Poivrier","Capsicum","Piper nigrum","Vanillier"],a:2},
  {q:"Quel pays est le plus grand producteur de vanille ?",c:["Madagascar","Inde","Indonésie","Mexique"],a:0},
  {q:"Quelle épice donne sa couleur jaune au curry ?",c:["Le curcuma","Le curry","Le safran","Le paprika"],a:0},
  {q:"Quelles sont les épices du mélange 'quatre épices' ?",c:["Poivre, girofle, muscade, gingembre","Poivre, cannelle, clou de girofle, gingembre","Poivre, curcuma, cumin, coriandre","Cannelle, muscade, girofle, poivre"],a:3},
  {q:"Quelle épice est utilisée dans la cuisine indienne et a des propriétés digestives ?",c:["Le cumin","Le curcuma","La coriandre","Le fenouil"],a:0},
  {q:"Quel explorateur a cherché la route des épices vers l'Inde ?",c:["Vasco de Gama","Christophe Colomb","Magellan","Cook"],a:0},
  {q:"Quelle épice est obtenue à partir d'une orchidée ?",c:["La vanille","Le safran","La cannelle","La cardamome"],a:0},
];
r.cuisine_013 = [ // Sushis
  {q:"De quel pays les sushis sont-ils originaires ?",c:["Japon","Chine","Corée","Vietnam"],a:0},
  {q:"Quel ingrédient est essentiel pour faire des sushis ?",c:["Riz vinaigré","Poisson cru","Algues","Soja"],a:0},
  {q:"Qu'est-ce que le nori ?",c:["Algue séchée utilisée pour les maki","Poisson cru","Riz","Sauce soja"],a:0},
  {q:"Quelle est la différence entre maki et nigiri ?",c:["Maki est roulé, nigiri est une boule","Nigiri est roulé, maki est une boule","Maki a du poisson, nigiri non","Nigiri a des légumes, maki non"],a:0},
  {q:"Quel poisson est le plus utilisé dans les sushis ?",c:["Le saumon","Le thon","La dorade","Le maquereau"],a:0},
  {q:"Qu'est-ce que le wasabi ?",c:["Racine de raifort japonaise","Pâte de soja","Gingembre mariné","Piment vert"],a:0},
  {q:"Comment s'appelle le vinaigre de riz utilisé pour les sushis ?",c:["Vinaigre de riz","Vinaigre de sushi","Vinaigre de saké","Vinaigre de vin"],a:0},
  {q:"En quelle année les sushis sont-ils devenus populaires en Occident ?",c:["Années 1980","Années 1970","Années 1990","Années 2000"],a:0},
];
r.cuisine_014 = [ // Barbecues
  {q:"Quel pays est célèbre pour le barbecue coréen ?",c:["Corée","Japon","Chine","Vietnam"],a:0},
  {q:"Quel est le nom du barbecue argentin ?",c:["L'asado","La parrilla","Le churrasco","Le rodizio"],a:0},
  {q:"Quelle technique de cuisson utilise une fumée aromatique ?",c:["Le smoking","Le gril","Le barbecue","La plancha"],a:0},
  {q:"Quel bois est utilisé pour fumer la viande ?",c:["Bois de fruitier (pommier, cerisier)","Bois de pin","Bois de peuplier","Bois de tilleul"],a:0},
  {q:"Quelle sauce est traditionnelle du barbecue américain ?",c:["Sauce barbecue","Ketchup","Moutarde","Mayonnaise"],a:0},
  {q:"Qu'est-ce qu'un gril ?",c:["Grille de cuisson au-dessus des braises","Four","Plancha","Fumoir"],a:0},
  {q:"Quel pays a inventé le barbecue moderne ?",c:["États-Unis","Australie","Argentine","Afrique du Sud"],a:0},
  {q:"Quelle viande est la plus cuite au barbecue ?",c:["Le bœuf","Le poulet","Le porc","L'agneau"],a:0},
];

// Write (the rest of categories - tech, auto, tv, insolite, societe, voyage - will be in another file)
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
console.log('Done. Batch 3a (sciences, arts, cuisine) written:', Object.keys(r).length, 'themes');
