const fs = require('fs');
const content = fs.readFileSync(__dirname + '/ttcq.js', 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const themes = JSON.parse(content.substring(start, end + 1));
const r = {};

// ---------- SEXE (50 themes) ----------
r.sexe_001 = [ // Anatomie sexuelle féminine
  {q:"Quels sont les organes génitaux internes de la femme ?",c:["Utérus, ovaires, trompes de Fallope, vagin","Vessie, utérus, anus","Reins, ovaires, utérus","Vagin, clitoris, anus"],a:0},
  {q:"Quel organe produit les ovules ?",c:["Les ovaires","Les trompes de Fallope","L'utérus","Le vagin"],a:0},
  {q:"Combien de trompes de Fallope une femme possède-t-elle ?",c:["2","1","3","4"],a:0},
  {q:"Quelle est la fonction du vagin ?",c:["Conduit pour les rapports et l'accouchement","Produire des ovules","Abriter le foetus","Produire des hormones"],a:0},
  {q:"Où se trouve le clitoris ?",c:["Partie supérieure de la vulve","À l'intérieur du vagin","Sur les grandes lèvres","Sur le col de l'utérus"],a:0},
  {q:"Qu'est-ce que le col de l'utérus ?",c:["Partie inférieure de l'utérus qui s'ouvre dans le vagin","L'entrée du vagin","Le fond de l'utérus","Une trompe"],a:0},
  {q:"Quelle est la taille moyenne de l'utérus ?",c:["7-8 cm de long","10-12 cm de long","4-5 cm de long","15-20 cm de long"],a:0},
  {q:"Combien d'ovocytes une femme a-t-elle à la naissance ?",c:["Environ 1 à 2 millions","Environ 100 000","Environ 10 millions","Environ 500 000"],a:0},
];
r.sexe_002 = [ // Anatomie sexuelle masculine
  {q:"Quels sont les principaux organes génitaux masculins ?",c:["Testicules, pénis, prostate","Vessie, testicules, pénis","Reins, prostate, pénis","Testicules, urètre, vessie"],a:0},
  {q:"Quel organe produit les spermatozoïdes ?",c:["Les testicules","La prostate","Le pénis","Les vésicules séminales"],a:0},
  {q:"Où sont situés les testicules ?",c:["Dans le scrotum","Dans l'abdomen","Dans le pénis","Dans la prostate"],a:0},
  {q:"Quelle est la fonction de la prostate ?",c:["Produire le liquide séminal","Produire des spermatozoïdes","Produire de l'urine","Produire des hormones"],a:0},
  {q:"Qu'est-ce que l'urètre masculin ?",c:["Canal qui conduit l'urine et le sperme","Vaisseau sanguin","Nerf","Muscle"],a:0},
  {q:"Combien de spermatozoïdes produit un homme par jour ?",c:["Plusieurs millions","Plusieurs centaines","Plusieurs milliers","Plusieurs milliards"],a:0},
  {q:"Quel est le rôle du scrotum ?",c:["Réguler la température des testicules","Protéger le pénis","Produire des hormones","Stocker le sperme"],a:0},
  {q:"Qu'est-ce que le prépuce ?",c:["Peau qui recouvre le gland du pénis","Base du pénis","Frein du pénis","Partie interne du pénis"],a:0},
];
r.sexe_003 = [ // Contraception
  {q:"Qu'est-ce que la contraception ?",c:["Moyen d'éviter une grossesse non désirée","Méthode pour tomber enceinte","Protection contre les MST","Traitement hormonal"],a:0},
  {q:"Quelle est la méthode contraceptive la plus efficace ?",c:["L'implant et le stérilet","La pilule","Le préservatif","Le retrait"],a:0},
  {q:"Combien de méthodes contraceptives existent ?",c:["Plus de 15","5","10","20"],a:0},
  {q:"Qu'est-ce que la contraception d'urgence ?",c:["Pilule du lendemain à prendre après un rapport","Pilule quotidienne","Stérilet","Implant"],a:0},
  {q:"Dans quel délai faut-il prendre la pilule du lendemain ?",c:["Jusqu'à 72 heures après le rapport","Jusqu'à 24 heures","Jusqu'à 48 heures","Jusqu'à une semaine"],a:0},
  {q:"Quelle méthode contraceptive est réversible ?",c:["Toutes les méthodes sauf la stérilisation","La stérilisation","Aucune","Seule la pilule"],a:0},
  {q:"Qu'est-ce que l'indice de Pearl ?",c:["Taux d'échec d'une méthode contraceptive","Taux de réussite","Nombre de grossesses","Âge de fertilité"],a:0},
  {q:"Quelle contraception nécessite une prescription médicale en France ?",c:["Pilule, implant, stérilet, patch, anneau","Préservatif","Spermicide","Retrait"],a:0},
];
r.sexe_004 = [ // Préservatifs
  {q:"À quoi sert un préservatif ?",c:["Protéger des IST et éviter une grossesse","Éviter uniquement une grossesse","Protéger uniquement des IST","Améliorer le plaisir"],a:0},
  {q:"Quel matériau est utilisé pour la plupart des préservatifs ?",c:["Latex","Polyuréthane","Silicone","Caoutchouc naturel"],a:0},
  {q:"Quelle est la fiabilité du préservatif contre les grossesses ?",c:["Environ 98% en utilisation parfaite","Environ 90%","Environ 85%","Environ 99,9%"],a:0},
  {q:"Le préservatif protège-t-il contre toutes les IST ?",c:["Non, certaines IST peuvent se transmettre par contact cutané","Oui, toutes","Non, seulement le VIH","Oui, à 100%"],a:0},
  {q:"Comment conserver les préservatifs ?",c:["Dans un endroit frais et sec","Au réfrigérateur","Dans la voiture","Dans la poche"],a:0},
  {q:"Peut-on utiliser un préservatif deux fois ?",c:["Non, jamais","Oui, une fois retourné","Oui, après l'avoir lavé","Oui, une deuxième fois"],a:0},
  {q:"Depuis quand le préservatif moderne existe-t-il ?",c:["Début du XXe siècle (latex)","XIXe siècle","Années 1950","Années 1970"],a:0},
  {q:"Quelle est la date de péremption typique d'un préservatif ?",c:["3 à 5 ans","1 an","2 ans","10 ans"],a:0},
];
r.sexe_005 = [ // Cycle menstruel
  {q:"Qu'est-ce que le cycle menstruel ?",c:["Période de préparation du corps à une éventuelle grossesse","Période des règles","Cycle hormonal","Période de fertilité"],a:0},
  {q:"Quelle est la durée moyenne d'un cycle menstruel ?",c:["28 jours","21 jours","35 jours","30 jours"],a:0},
  {q:"Qu'est-ce que l'ovulation ?",c:["Libération d'un ovule par l'ovaire","Début des règles","Fin du cycle","Montée d'hormones"],a:0},
  {q:"Quand a lieu l'ovulation dans un cycle de 28 jours ?",c:["Autour du 14e jour","Autour du 7e jour","Autour du 21e jour","Au 1er jour"],a:0},
  {q:"Combien de temps durent les règles en moyenne ?",c:["3 à 7 jours","1 à 2 jours","7 à 10 jours","10 à 14 jours"],a:0},
  {q:"Quelles hormones régulent le cycle menstruel ?",c:["Oestrogènes et progestérone","Testostérone et oestrogènes","LH et FSH uniquement","Adrénaline et cortisol"],a:0},
  {q:"Qu'est-ce que le syndrome prémenstruel (SPM) ?",c:["Ensemble de symptômes avant les règles","Pendant les règles","Après les règles","Pendant l'ovulation"],a:0},
  {q:"À quel âge survient la première menstruation ?",c:["Entre 11 et 14 ans en moyenne","Entre 8 et 10 ans","Entre 15 et 17 ans","Entre 18 et 20 ans"],a:0},
];
r.sexe_006 = [ // Puberté
  {q:"Qu'est-ce que la puberté ?",c:["Période de transition entre l'enfance et l'âge adulte","Début de l'adolescence","Croissance","Développement hormonal"],a:0},
  {q:"À quel âge commence la puberté chez les filles ?",c:["Entre 8 et 13 ans","Entre 10 et 15 ans","Entre 6 et 10 ans","Entre 12 et 16 ans"],a:0},
  {q:"À quel âge commence la puberté chez les garçons ?",c:["Entre 9 et 14 ans","Entre 11 et 16 ans","Entre 7 et 12 ans","Entre 13 et 17 ans"],a:0},
  {q:"Quel est le premier signe de la puberté chez les filles ?",c:["Le développement des seins","L'arrivée des règles","La pousse des poils","La croissance"],a:0},
  {q:"Quel est le premier signe de la puberté chez les garçons ?",c:["L'augmentation du volume des testicules","La mue de la voix","La pousse des poils","L'érection"],a:0},
  {q:"Quelles hormones déclenchent la puberté ?",c:["Les gonadotrophines (LH et FSH)","La testostérone","Les oestrogènes","L'hormone de croissance"],a:0},
  {q:"Combien de temps dure la puberté ?",c:["Environ 3 à 5 ans","1 à 2 ans","5 à 7 ans","6 mois à 1 an"],a:0},
  {q:"Qu'est-ce que la poussée de croissance à la puberté ?",c:["Accélération de la taille sur 2-3 ans","Prise de poids","Développement musculaire","Croissance des os"],a:0},
];
r.sexe_007 = [ // Grossesse
  {q:"Combien de temps dure une grossesse ?",c:["9 mois (environ 40 semaines)","8 mois","10 mois","7 mois"],a:0},
  {q:"Comment s'appelle la période de la grossesse ?",c:["La gestation","La parturition","La lactation","La fécondation"],a:0},
  {q:"Quels sont les trois trimestres de la grossesse ?",c:["3 périodes de 3 mois chacune","3 périodes de 2 mois","3 périodes de 4 mois","3 périodes égales"],a:0},
  {q:"Qu'est-ce que la nidation ?",c:["Implantation de l'embryon dans l'utérus","Fécondation","Début du travail","Formation du foetus"],a:0},
  {q:"Comment s'appelle le premier trimestre de la grossesse ?",c:["Phase embryonnaire","Phase foetale","Phase de nidation","Phase de croissance"],a:0},
  {q:"Qu'est-ce qu'une échographie obstétricale ?",c:["Examen pour visualiser le foetus","Analyse de sang","Test urinaire","IRM"],a:0},
  {q:"Combien d'échographies sont recommandées en France ?",c:["3","2","4","5"],a:0},
  {q:"Qu'est-ce que le congé maternité en France ?",c:["Congé pour la mère avant et après l'accouchement","Congé pour le père","Arrêt maladie","Congé parental"],a:0},
];
r.sexe_008 = [ // Accouchement
  {q:"Quels sont les trois phases de l'accouchement ?",c:["Travail, expulsion, délivrance","Contractions, poussée, repos","Dilatation, naissance, allaitement","Travail, naissance, récupération"],a:0},
  {q:"Qu'est-ce que le travail lors de l'accouchement ?",c:["Les contractions qui dilatent le col de l'utérus","La poussée","La sortie du bébé","La délivrance du placenta"],a:0},
  {q:"Combien de temps dure le travail en moyenne ?",c:["8 à 12 heures pour un premier enfant","2 à 4 heures","12 à 24 heures","24 à 48 heures"],a:0},
  {q:"Qu'est-ce qu'une péridurale ?",c:["Anesthésie locale pour accoucher sans douleur","Anesthésie générale","Piqûre de médicament","Massage"],a:0},
  {q:"Comment s'appelle la sortie du bébé ?",c:["L'expulsion","La délivrance","Le travail","La nidation"],a:0},
  {q:"Qu'est-ce que la délivrance ?",c:["L'expulsion du placenta","La naissance du bébé","La coupure du cordon","La fin des contractions"],a:0},
  {q:"Qu'est-ce qu'une césarienne ?",c:["Accouchement chirurgical par incision abdominale","Accouchement par voie basse","Accouchement déclenché","Accouchement sous eau"],a:0},
  {q:"Quel pourcentage d'accouchements se fait par césarienne en France ?",c:["Environ 20%","Environ 10%","Environ 30%","Environ 5%"],a:0},
];
r.sexe_009 = [ // Hormones sexuelles
  {q:"Quelle est la principale hormone sexuelle masculine ?",c:["La testostérone","Les oestrogènes","La progestérone","La LH"],a:0},
  {q:"Quelles sont les principales hormones sexuelles féminines ?",c:["Les oestrogènes et la progestérone","La testostérone","La LH et la FSH","L'adrénaline"],a:0},
  {q:"Où est produite la testostérone chez l'homme ?",c:["Dans les testicules","Dans la prostate","Dans les glandes surrénales","Dans le pénis"],a:0},
  {q:"Où sont produits les oestrogènes ?",c:["Dans les ovaires","Dans l'utérus","Dans les trompes","Dans le vagin"],a:0},
  {q:"Quelle hormone déclenche l'ovulation ?",c:["La LH (hormone lutéinisante)","La FSH","Les oestrogènes","La progestérone"],a:0},
  {q:"Quel est le rôle de la progestérone ?",c:["Préparer l'utérus à une grossesse","Déclencher l'ovulation","Produire du lait","Provoquer les règles"],a:0},
  {q:"À quoi sert la FSH ?",c:["Stimuler la maturation des follicules ovariens","Déclencher l'ovulation","Produire la testostérone","Réguler les règles"],a:0},
  {q:"Qu'est-ce qu'un dérèglement hormonal ?",c:["Production anormale d'hormones","Arrêt des hormones","Excès de sucre","Maladie génétique"],a:0},
];
r.sexe_010 = [ // Spermatozoïdes
  {q:"Où sont produits les spermatozoïdes ?",c:["Dans les testicules","Dans la prostate","Dans les vésicules séminales","Dans l'épididyme"],a:0},
  {q:"Combien de temps vit un spermatozoïde dans le corps féminin ?",c:["Jusqu'à 5 jours","Jusqu'à 24 heures","Jusqu'à 48 heures","Jusqu'à une semaine"],a:0},
  {q:"Quelle est la taille d'un spermatozoïde ?",c:["Environ 50 micromètres","Environ 10 micromètres","Environ 100 micromètres","Environ 1 micromètre"],a:0},
  {q:"De quoi est composé un spermatozoïde ?",c:["Tête, pièce intermédiaire et flagelle","Tête et corps","Tête et queue","Noyau et membrane"],a:0},
  {q:"Qu'est-ce qu'un spermogramme ?",c:["Analyse de la qualité du sperme","Test de fertilité féminine","Analyse de sang","Examen urinaire"],a:0},
  {q:"Combien de spermatozoïdes contient un éjaculat ?",c:["40 à 300 millions","1 à 10 millions","500 millions à 1 milliard","10 à 40 millions"],a:0},
  {q:"Qu'est-ce que l'azoospermie ?",c:["Absence de spermatozoïdes dans le sperme","Faible nombre de spermatozoïdes","Spermatozoïdes anormaux","Trop de spermatozoïdes"],a:0},
  {q:"Quelle température affecte la production de spermatozoïdes ?",c:["Une température trop élevée (au-dessus de 35°C)","Le froid","L'humidité","La pression"],a:0},
];
r.sexe_011 = [ // Ovulation
  {q:"Qu'est-ce que l'ovulation ?",c:["Libération d'un ovule mature par l'ovaire","Début des règles","Fécondation","Nidation"],a:0},
  {q:"Quand a lieu l'ovulation dans un cycle régulier de 28 jours ?",c:["Au 14e jour environ","Au 1er jour","Au 21e jour","Au 7e jour"],a:0},
  {q:"Combien d'ovules sont libérés à chaque ovulation ?",c:["Un seul en général","Plusieurs","Aucun","Deux toujours"],a:0},
  {q:"Quelle hormone déclenche l'ovulation ?",c:["La LH (hormone lutéinisante)","La FSH","Les oestrogènes","La progestérone"],a:0},
  {q:"Combien de temps l'ovule est-il viable après l'ovulation ?",c:["12 à 24 heures","48 à 72 heures","6 à 12 heures","2 à 3 jours"],a:0},
  {q:"Qu'est-ce qu'un test d'ovulation ?",c:["Test qui détecte le pic de LH","Test de grossesse","Prise de sang","Échographie"],a:0},
  {q:"Peut-on ressentir l'ovulation ?",c:["Certaines femmes ressentent une douleur légère","Oui, toujours","Non, jamais","Uniquement en cas de problème"],a:0},
  {q:"Qu'est-ce que la période fertile ?",c:["Fenêtre de quelques jours autour de l'ovulation","Tout le cycle","Uniquement le jour de l'ovulation","La semaine avant les règles"],a:0},
];
r.sexe_012 = [ // Fécondation
  {q:"Qu'est-ce que la fécondation ?",c:["Union d'un spermatozoïde et d'un ovule","Nidation","Début de la grossesse","Division cellulaire"],a:0},
  {q:"Où a lieu la fécondation ?",c:["Dans les trompes de Fallope","Dans l'utérus","Dans l'ovaire","Dans le vagin"],a:0},
  {q:"Combien de spermatozoïdes atteignent l'ovule ?",c:["Un seul féconde l'ovule","Des centaines","Des milliers","Aucun"],a:0},
  {q:"Que devient l'ovule après la fécondation ?",c:["Il devient un zygote","Il se divise en deux","Il meurt","Il reste dans la trompe"],a:0},
  {q:"Combien de temps après la fécondation a lieu la nidation ?",c:["Environ 6 à 10 jours","Immédiatement","24 heures","2 à 3 semaines"],a:0},
  {q:"Qu'est-ce qu'un zygote ?",c:["Cellule résultant de la fécondation","Embryon","Foetus","Ovule fécondé"],a:0},
  {q:"Qu'est-ce que la conception ?",c:["Le moment de la fécondation","La grossesse","L'accouchement","La nidation"],a:0},
  {q:"Combien de temps les spermatozoïdes mettent-ils pour atteindre l'ovule ?",c:["Quelques heures","Quelques minutes","24 heures","Quelques secondes"],a:0},
];
r.sexe_013 = [ // Pilule contraceptive
  {q:"Qu'est-ce que la pilule contraceptive ?",c:["Comprimé hormonal qui empêche l'ovulation","Comprimé qui tue les spermatozoïdes","Comprimé pour les règles","Médicament"],a:0},
  {q:"Quels hormones contient la pilule combinée ?",c:["Oestrogènes et progestérone","Testostérone et oestrogènes","Progestérone seule","LH et FSH"],a:0},
  {q:"Comment agit la pilule contraceptive ?",c:["En empêchant l'ovulation","En bloquant les spermatozoïdes","En empêchant la nidation","En stérilisant temporairement"],a:0},
  {q:"Quelle est l'efficacité de la pilule en utilisation parfaite ?",c:["Plus de 99%","Environ 95%","Environ 90%","Environ 85%"],a:0},
  {q:"Faut-il une prescription pour la pilule en France ?",c:["Oui, une ordonnance est nécessaire","Non, en vente libre","Uniquement pour les mineures","Non, sauf la pilule d'urgence"],a:0},
  {q:"Qu'est-ce que la pilule progestative (micro-pilule) ?",c:["Pilule sans oestrogènes","Pilule à double dose","Pilule d'urgence","Pilule du lendemain"],a:0},
  {q:"Que faire si on oublie une pilule ?",c:["La prendre dès que possible et utiliser un préservatif","Prendre deux le lendemain","Arrêter la plaquette","Ne rien faire"],a:0},
  {q:"La pilule protège-t-elle des IST ?",c:["Non, elle ne protège pas des IST","Oui, partiellement","Oui, totalement","Oui, comme le préservatif"],a:0},
];
r.sexe_014 = [ // VIH/SIDA
  {q:"Que signifie VIH ?",c:["Virus de l'Immunodéficience Humaine","Virus Infectieux Humain","Virus de l'Immunité","Virus International Humain"],a:0},
  {q:"Que signifie SIDA ?",c:["Syndrome d'ImmunoDéficience Acquise","Syndrome Infectieux Dangereux","Système Immunitaire Détruit","Maladie Immunitaire"],a:0},
  {q:"Comment se transmet le VIH ?",c:["Par le sang, les rapports sexuels et de la mère à l'enfant","Par la salive","Par l'air","Par les poignées de main"],a:0},
  {q:"Existe-t-il un vaccin contre le VIH ?",c:["Non, pas encore","Oui, depuis 2010","Oui, depuis 2020","Non et cela n'existera jamais"],a:0},
  {q:"Qu'est-ce qu'une charge virale indétectable ?",c:["Quantité de virus si faible qu'elle est indétectable","Absence totale de virus","Guérison du SIDA","Virus inactif"],a:0},
  {q:"Que signifie être séropositif ?",c:["Être porteur du VIH sans avoir développé le SIDA","Avoir le SIDA","Être immunisé","Être malade"],a:0},
  {q:"Comment se faire dépister du VIH ?",c:["Par prise de sang ou test rapide (TROD)","Par examen urinaire","Par radiographie","Par IRM"],a:0},
  {q:"Qu'est-ce que la Prep (PrEP) ?",c:["Traitement préventif avant exposition au VIH","Traitement curatif","Vaccin","Médicament contre le SIDA"],a:0},
];
r.sexe_015 = [ // HPV / Papillomavirus
  {q:"Qu'est-ce que le papillomavirus humain (HPV) ?",c:["Virus sexuellement transmissible très courant","Virus de la grippe","Bactérie","Maladie génétique"],a:0},
  {q:"Combien de types de HPV existent ?",c:["Plus de 100","Environ 50","Environ 200","Environ 20"],a:0},
  {q:"Le HPV peut-il causer le cancer du col de l'utérus ?",c:["Oui, certains types à haut risque","Non","Uniquement associé à d'autres facteurs","Rarement"],a:0},
  {q:"Existe-t-il un vaccin contre le HPV ?",c:["Oui, recommandé aux adolescents","Non","Oui, mais seulement pour les adultes","Oui, mais inefficace"],a:0},
  {q:"Comment se transmet le HPV ?",c:["Par contact sexuel (peau à peau)","Par la salive","Par le sang","Par l'air"],a:0},
  {q:"Le HPV est-il fréquent ?",c:["Oui, 80% des personnes sexuellement actives l'auront","Non, très rare","Assez rare","Uniquement dans certains pays"],a:0},
  {q:"Comment dépiste-t-on le HPV ?",c:["Par frottis cervical (test HPV)","Par prise de sang","Par examen urinaire","Par échographie"],a:0},
  {q:"À quel âge le vaccin HPV est-il recommandé en France ?",c:["Entre 11 et 14 ans","Entre 15 et 18 ans","Entre 18 et 25 ans","À tout âge"],a:0},
];
r.sexe_016 = [ // Hépatites virales
  {q:"Quelles hépatites sont sexuellement transmissibles ?",c:["Hépatites B et C","Hépatites A et B","Hépatites A, B et C","Hépatite B uniquement"],a:0},
  {q:"Existe-t-il un vaccin contre l'hépatite B ?",c:["Oui, obligatoire pour les enfants en France","Non","Uniquement pour les adultes","Oui, mais pas en France"],a:0},
  {q:"Comment se transmet l'hépatite B ?",c:["Par le sang et les rapports sexuels","Par l'alimentation","Par l'eau","Par la toux"],a:0},
  {q:"L'hépatite C se transmet-elle sexuellement ?",c:["Rarement, principalement par le sang","Oui, très fréquemment","Oui, comme l'hépatite B","Non, jamais"],a:0},
  {q:"Qu'est-ce que l'hépatite B chronique ?",c:["Infection persistante par le virus de l'hépatite B","Maladie aiguë","Cancer du foie","Cirrhose"],a:0},
  {q:"Combien de personnes vivent avec l'hépatite B dans le monde ?",c:["Environ 250 millions","Environ 100 millions","Environ 500 millions","Environ 50 millions"],a:0},
  {q:"Quels sont les symptômes des hépatites virales ?",c:["Fatigue, jaunisse, douleurs abdominales","Aucun symptôme","Fièvre et toux","Maux de tête"],a:0},
  {q:"Comment se protéger de l'hépatite B sexuelle ?",c:["Par la vaccination et le préservatif","Par le préservatif uniquement","Par la vaccination uniquement","Par l'hygiène"],a:0},
];
r.sexe_017 = [ // Chlamydia
  {q:"Qu'est-ce que la chlamydia ?",c:["Infection sexuellement transmissible bactérienne","Infection virale","Maladie génétique","Infection urinaire"],a:0},
  {q:"Quels sont les symptômes de la chlamydia ?",c:["Souvent aucun symptôme","Toujours des symptômes","Fièvre","Éruption cutanée"],a:0},
  {q:"Peut-on traiter la chlamydia ?",c:["Oui, avec des antibiotiques","Non, c'est incurable","Oui, avec des antiviraux","Oui, par chirurgie"],a:0},
  {q:"Que peut causer une chlamydia non traitée ?",c:["Stérilité et salpingite","Cancer","SIDA","Maladies cardiaques"],a:0},
  {q:"Comment se transmet la chlamydia ?",c:["Par relations sexuelles non protégées","Par la salive","Par les mains","Par l'eau"],a:0},
  {q:"Comment dépiste-t-on la chlamydia ?",c:["Par test urinaire ou prélèvement local","Par prise de sang","Par radiographie","Par échographie"],a:0},
  {q:"La chlamydia est-elle fréquente ?",c:["Oui, c'est l'IST bactérienne la plus fréquente","Non, assez rare","Très rare","Uniquement dans les pays tropicaux"],a:0},
  {q:"Combien de nouveaux cas de chlamydia par an dans le monde ?",c:["Environ 130 millions","Environ 50 millions","Environ 10 millions","Environ 500 millions"],a:0},
];
r.sexe_018 = [ // Herpès génital
  {q:"Qu'est-ce que l'herpès génital ?",c:["Infection virale sexuellement transmissible","Infection bactérienne","Maladie de peau","Allergie"],a:0},
  {q:"Quel virus cause l'herpès génital ?",c:["Le HSV (Herpes Simplex Virus)","Le VIH","Le HPV","Le VHB"],a:0},
  {q:"Existe-t-il un traitement curatif contre l'herpès ?",c:["Non, mais des traitements réduisent les poussées","Oui, un vaccin","Oui, des antibiotiques","Oui, la guérison est totale"],a:0},
  {q:"Comment se manifeste l'herpès génital ?",c:["Vésicules et ulcérations génitales","Fièvre","Toux","Éruption sur tout le corps"],a:0},
  {q:"Comment se transmet l'herpès génital ?",c:["Par contact direct avec les lésions","Par le sang","Par la salive","Par l'air"],a:0},
  {q:"Quelle est la différence entre HSV-1 et HSV-2 ?",c:["HSV-1 est souvent oral, HSV-2 souvent génital","HSV-1 est génital, HSV-2 est oral","Aucune différence","HSV-1 est plus dangereux"],a:0},
  {q:"Combien de personnes sont porteuses du HSV ?",c:["Plus de 3,7 milliards (HSV-1)","500 millions","1 milliard","2 milliards"],a:0},
  {q:"Qu'est-ce qui déclenche une poussée d'herpès ?",c:["Stress, fatigue, baisse d'immunité","Alimentation","Sport","Météo"],a:0},
];

r.sexe_019 = [ // Syphilis
  {q:"Qu'est-ce que la syphilis ?",c:["Infection sexuellement transmissible bactérienne","Maladie virale","Infection fongique","Maladie génétique"],a:0},
  {q:"Quelle bactérie cause la syphilis ?",c:["Treponema pallidum","Neisseria gonorrhoeae","Chlamydia trachomatis","Escherichia coli"],a:0},
  {q:"La syphilis est-elle curable ?",c:["Oui, avec des antibiotiques (pénicilline)","Non","Oui, mais très difficilement","Elle se guérit seule"],a:0},
  {q:"Comment se manifeste le premier stade de la syphilis ?",c:["Un chancre (ulcère) indolore","Des boutons","De la fièvre","Des douleurs musculaires"],a:0},
  {q:"Que peut causer la syphilis non traitée à long terme ?",c:["Atteintes neurologiques et cardiovasculaires graves","Cancer","SIDA","Diabète"],a:0},
  {q:"Comment se transmet la syphilis ?",c:["Par contact direct avec un chancre","Par le sang","Par la salive","Par l'air"],a:0},
  {q:"Qu'est-ce que la syphilis congénitale ?",c:["Transmission de la mère à l'enfant pendant la grossesse","Syphilis chez l'enfant","Syphilis héréditaire","Syphilis génétique"],a:0},
  {q:"La syphilis est-elle en recrudescence ?",c:["Oui, les cas augmentent depuis les années 2000","Non, elle a disparu","Elle est stable","Elle diminue"],a:0},
];
r.sexe_020 = [ // Gonorrhée
  {q:"Qu'est-ce que la gonorrhée ?",c:["IST bactérienne aussi appelée chaude-pisse","Infection virale","Maladie de peau","Infection urinaire"],a:0},
  {q:"Quelle bactérie cause la gonorrhée ?",c:["Neisseria gonorrhoeae","Chlamydia trachomatis","Treponema pallidum","Escherichia coli"],a:0},
  {q:"Quels sont les symptômes chez l'homme ?",c:["Écoulement urétral et douleur en urinant","Aucun symptôme","Fièvre","Éruption cutanée"],a:0},
  {q:"Quels sont les symptômes chez la femme ?",c:["Souvent asymptomatique","Écoulement vaginal","Douleurs abdominales","Tous ces symptômes possibles"],a:3},
  {q:"La gonorrhée est-elle curable ?",c:["Oui, avec des antibiotiques","Non","Oui, mais résistante","Guérison spontanée"],a:0},
  {q:"Que peut causer une gonorrhée non traitée ?",c:["Stérilité et infections pelviennes","Cancer","Maladies cardiaques","Diabète"],a:0},
  {q:"Qu'est-ce que la résistance aux antibiotiques de la gonorrhée ?",c:["La bactérie devient moins sensible aux traitements","La bactérie disparaît","Le traitement est plus fort","La maladie est plus grave"],a:0},
  {q:"Combien de cas de gonorrhée par an dans le monde ?",c:["Environ 87 millions","Environ 10 millions","Environ 200 millions","Environ 50 millions"],a:0},
];
r.sexe_021 = [ // Ménopause
  {q:"Qu'est-ce que la ménopause ?",c:["Arrêt définitif des menstruations","Arrêt temporaire des règles","Ralentissement des règles","Fin de l'ovulation"],a:0},
  {q:"À quel âge survient la ménopause en moyenne ?",c:["Vers 51 ans","Vers 45 ans","Vers 55 ans","Vers 48 ans"],a:0},
  {q:"Qu'est-ce que la périménopause ?",c:["Période de transition avant la ménopause","Après la ménopause","Début de la ménopause","Trouble de la ménopause"],a:0},
  {q:"Quels sont les symptômes fréquents de la ménopause ?",c:["Bouffées de chaleur, troubles du sommeil","Aucun symptôme","Douleurs musculaires","Maux de tête"],a:0},
  {q:"Qu'est-ce que le traitement hormonal substitutif (THS) ?",c:["Traitement qui compense la baisse d'hormones","Traitement contre l'ostéoporose","Vitamines","Antidépresseurs"],a:0},
  {q:"La ménopause est-elle réversible ?",c:["Non, c'est un processus naturel définitif","Oui, avec un traitement","Oui, naturellement","Parfois"],a:0},
  {q:"Quelles complications de santé sont liées à la ménopause ?",c:["Ostéoporose et risques cardiovasculaires","Cancer","Diabète","Obésité"],a:0},
  {q:"À partir de combien de temps sans règles parle-t-on de ménopause ?",c:["12 mois sans règles","6 mois sans règles","3 mois sans règles","24 mois sans règles"],a:0},
];
r.sexe_022 = [ // Andropause
  {q:"Qu'est-ce que l'andropause ?",c:["Baisse progressive de la testostérone chez l'homme","Arrêt total de la production de testostérone","Ménopause masculine","Arrêt de la production de spermatozoïdes"],a:0},
  {q:"À quel âge commence l'andropause ?",c:["Vers 40-50 ans, progressivement","Vers 60-70 ans","Vers 55 ans, brutalement","Vers 30-40 ans"],a:0},
  {q:"L'andropause est-elle comparable à la ménopause ?",c:["Non, c'est plus progressif et moins brutal","Oui, identique","Oui, mais plus tardif","Non, ce n'est pas lié aux hormones"],a:0},
  {q:"Quels sont les symptômes de l'andropause ?",c:["Baisse de libido, fatigue, irritabilité","Bouffées de chaleur","Arrêt des règles","Nausées"],a:0},
  {q:"Quel traitement existe pour l'andropause ?",c:["Testostérone en gel ou injections","Aucun traitement","Oestrogènes","Antidépresseurs"],a:0},
  {q:"L'andropause affecte-t-elle la fertilité ?",c:["Elle diminue la fertilité mais ne l'arrête pas","Oui, stérilité totale","Non, aucun effet","Oui, irréversible"],a:0},
  {q:"Qu'est-ce que la DHEA ?",c:["Hormone précurseur qui diminue avec l'âge","Testostérone","Oestrogène","Progestérone"],a:0},
  {q:"Le traitement à la testostérone est-il sans risque ?",c:["Non, il a des effets secondaires potentiels","Oui, totalement sûr","Oui, sans aucun risque","Non, très dangereux"],a:0},
];
r.sexe_023 = [ // Libido
  {q:"Qu'est-ce que la libido ?",c:["Désir sexuel","Performance sexuelle","Attirance physique","Fréquence des rapports"],a:0},
  {q:"Qu'est-ce qui influence la libido ?",c:["Hormones, stress, santé, émotions","Uniquement les hormones","Uniquement l'âge","Uniquement l'alimentation"],a:0},
  {q:"La libido est-elle la même chez les hommes et les femmes ?",c:["Elle varie selon les individus, pas selon le genre","Les hommes ont plus de libido","Les femmes ont plus de libido","Elle est identique"],a:0},
  {q:"Qu'est-ce qu'une baisse de libido ?",c:["Diminution du désir sexuel","Impuissance","Absence d'érection","Dépression"],a:0},
  {q:"Quels facteurs peuvent diminuer la libido ?",c:["Stress, fatigue, dépression, médicaments","Uniquement l'âge","Uniquement les hormones","Uniquement l'alimentation"],a:0},
  {q:"Qu'est-ce que la libido élevée ?",c:["Désir sexuel fort et fréquent","Addiction sexuelle","Hypersexualité","Trouble mental"],a:0},
  {q:"Existe-t-il des traitements pour la baisse de libido ?",c:["Traitements hormonaux, thérapie, changement de mode de vie","Aucun traitement","Uniquement des médicaments","Uniquement la chirurgie"],a:0},
  {q:"La libido diminue-t-elle avec l'âge ?",c:["Elle peut diminuer mais pas forcément","Oui, toujours","Non, jamais","Uniquement après 70 ans"],a:0},
];
r.sexe_024 = [ // Érection
  {q:"Qu'est-ce qu'une érection ?",c:["Rigidification du pénis par afflux sanguin","Contraction musculaire","Émission de sperme","Excitation sexuelle"],a:0},
  {q:"Quel mécanisme provoque l'érection ?",c:["Afflux de sang dans les corps caverneux","Contraction des muscles","Stimulation nerveuse","Production d'hormones"],a:0},
  {q:"Qu'est-ce que la dysfonction érectile ?",c:["Incapacité à obtenir ou maintenir une érection","Manque d'érection matinale","Érection douloureuse","Éjaculation précoce"],a:0},
  {q:"Quels facteurs peuvent causer des troubles de l'érection ?",c:["Stress, diabète, maladies cardiovasculaires","Uniquement le stress","Uniquement l'âge","Uniquement l'alimentation"],a:0},
  {q:"Quels médicaments traitent la dysfonction érectile ?",c:["Viagra, Cialis (inhibiteurs de PDE5)","Antibiotiques","Antidépresseurs","Anti-inflammatoires"],a:0},
  {q:"À partir de quel âge les troubles de l'érection sont-ils fréquents ?",c:["Après 40 ans, de façon croissante","Après 60 ans","Après 50 ans","À tout âge"],a:0},
  {q:"L'érection est-elle contrôlée par le système nerveux ?",c:["Oui, par le système nerveux autonome","Non, c'est un réflexe","Uniquement par le cerveau","Non, c'est hormonal"],a:0},
  {q:"Qu'est-ce qu'un priapisme ?",c:["Érection prolongée et douloureuse sans stimulation","Érection normale","Absence d'érection","Éjaculation"],a:0},
];
r.sexe_025 = [ // Éjaculation
  {q:"Qu'est-ce que l'éjaculation ?",c:["Émission de sperme par le pénis lors de l'orgasme","Contraction du pénis","Émission d'urine","Début de l'érection"],a:0},
  {q:"Qu'est-ce que l'éjaculation précoce ?",c:["Éjaculation survenant trop rapidement","Absence d'éjaculation","Éjaculation tardive","Éjaculation douloureuse"],a:0},
  {q:"Qu'est-ce que l'éjaculation retardée ?",c:["Difficulté ou impossibilité d'éjaculer","Éjaculation lente","Éjaculation tardive","Éjaculation sans orgasme"],a:0},
  {q:"Qu'est-ce que l'éjaculation rétrograde ?",c:["Le sperme va dans la vessie au lieu de sortir","Absence de sperme","Éjaculation sans sensation","Sperme liquide"],a:0},
  {q:"Combien de spermatozoïdes dans une éjaculation moyenne ?",c:["40 à 300 millions","1 à 10 millions","500 millions à 1 milliard","10 à 40 millions"],a:0},
  {q:"Quel volume de sperme est éjaculé en moyenne ?",c:["2 à 5 ml","0,5 à 1 ml","5 à 10 ml","10 à 15 ml"],a:0},
  {q:"L'éjaculation est-elle toujours accompagnée d'orgasme ?",c:["Non, les deux peuvent être dissociés","Oui, toujours","Parfois","Rarement"],a:0},
  {q:"Qu'est-ce que l'orgasme ?",c:["Point culminant du plaisir sexuel avec contractions musculaires","Éjaculation","Érection","Excitation maximale"],a:0},
];
r.sexe_026 = [ // Fécondation in vitro (FIV)
  {q:"Que signifie FIV ?",c:["Fécondation In Vitro","Fécondation Intra-Vaginale","Fertilité In Vitro","Fusion In Vitro"],a:0},
  {q:"Qui a réalisé la première FIV réussie ?",c:["Robert Edwards et Patrick Steptoe","René Frydman","Jacques Testart","Alan Trounson"],a:0},
  {q:"En quelle année est née Louise Brown, premier bébé FIV ?",c:["1978","1980","1975","1985"],a:0},
  {q:"Quelles sont les étapes d'une FIV ?",c:["Stimulation, ponction, fécondation, transfert","Fécondation puis transfert","Ponction puis fécondation","Stimulation puis transfert"],a:0},
  {q:"Quel est le taux de réussite moyen d'une FIV ?",c:["Environ 30% par tentative","Environ 50%","Environ 10%","Environ 70%"],a:0},
  {q:"Qu'est-ce que l'ICSI en FIV ?",c:["Injection directe d'un spermatozoïde dans l'ovule","Fécondation classique","Culture d'embryon","Transfert d'embryon"],a:0},
  {q:"Combien de bébés sont nés par FIV dans le monde ?",c:["Plus de 8 millions","Plus de 2 millions","Plus de 5 millions","Plus de 10 millions"],a:0},
  {q:"La FIV est-elle remboursée par la Sécurité sociale en France ?",c:["Oui, sous conditions","Non","Uniquement la première tentative","Uniquement dans le privé"],a:0},
];
r.sexe_027 = [ // Stérilet (DIU)
  {q:"Qu'est-ce qu'un stérilet (DIU) ?",c:["Dispositif Intra-Utérin contraceptif","Dispositif Intra-Urinaire","Dispositif d'hygiène","Implant sous-cutané"],a:0},
  {q:"Combien de types de stérilet existe-t-il ?",c:["Deux : au cuivre et hormonal","Un seul","Trois","Quatre"],a:0},
  {q:"Combien de temps dure un stérilet au cuivre ?",c:["5 à 10 ans","1 à 2 ans","2 à 3 ans","10 à 15 ans"],a:0},
  {q:"Combien de temps dure un stérilet hormonal ?",c:["3 à 5 ans","5 à 10 ans","1 à 2 ans","10 ans"],a:0},
  {q:"Quel est le taux d'efficacité du stérilet ?",c:["Plus de 99%","Environ 95%","Environ 90%","Environ 85%"],a:0},
  {q:"Le stérilet peut-il être posé chez une femme n'ayant jamais accouché ?",c:["Oui, c'est possible","Non, déconseillé","Non, impossible","Uniquement après 25 ans"],a:0},
  {q:"Quels sont les effets secondaires possibles du stérilet ?",c:["Saignements, douleurs, infections","Aucun effet secondaire","Prise de poids","Nausées"],a:0},
  {q:"Le stérilet protège-t-il des IST ?",c:["Non","Oui, partiellement","Oui, totalement","Oui, comme le préservatif"],a:0},
];
r.sexe_028 = [ // Implant contraceptif
  {q:"Qu'est-ce que l'implant contraceptif ?",c:["Bâtonnet hormonal placé sous la peau du bras","Dispositif intra-utérin","Anneau vaginal","Patch"],a:0},
  {q:"Combien de temps dure l'implant contraceptif ?",c:["3 ans","1 an","5 ans","2 ans"],a:0},
  {q:"Quelle hormone contient l'implant contraceptif ?",c:["Progestérone seule (étonogestrel)","Oestrogènes et progestérone","Oestrogènes seuls","Testostérone"],a:0},
  {q:"Quelle est l'efficacité de l'implant ?",c:["Plus de 99%","Environ 95%","Environ 90%","Environ 85%"],a:0},
  {q:"Comment agit l'implant contraceptif ?",c:["En empêchant l'ovulation","En bloquant les spermatozoïdes","En empêchant la nidation","En stérilisant"],a:0},
  {q:"Où est placé l'implant exactement ?",c:["Sous la peau du bras, face interne","Dans l'utérus","Dans le vagin","Sous la peau du ventre"],a:0},
  {q:"Faut-il une prescription pour l'implant ?",c:["Oui, posé par un médecin","Non, en vente libre","Oui, mais en pharmacie","Non, acheté en ligne"],a:0},
  {q:"Quels sont les effets secondaires de l'implant ?",c:["Saignements irréguliers, maux de tête","Aucun","Prise de poids importante","Nausées sévères"],a:0},
];
r.sexe_029 = [ // Anneau vaginal
  {q:"Qu'est-ce que l'anneau vaginal (NuvaRing) ?",c:["Anneau flexible inséré dans le vagin qui libère des hormones","Anneau contraceptif oral","Dispositif intra-utérin","Implant vaginal"],a:0},
  {q:"Combien de temps l'anneau vaginal reste-t-il en place ?",c:["3 semaines, puis 1 semaine de pause","1 mois","1 semaine","2 semaines"],a:0},
  {q:"Quels hormones libère l'anneau vaginal ?",c:["Oestrogènes et progestérone","Progestérone seule","Oestrogènes seuls","Testostérone"],a:0},
  {q:"Quelle est l'efficacité de l'anneau vaginal ?",c:["Plus de 99%","Environ 95%","Environ 90%","Environ 85%"],a:0},
  {q:"Comment agit l'anneau vaginal ?",c:["Libération d'hormones absorbées par la paroi vaginale","Barrière physique","Libération de spermicide","Chauffage local"],a:0},
  {q:"L'anneau vaginal peut-il être retiré temporairement ?",c:["Oui, jusqu'à 3 heures","Non, jamais","Oui, jusqu'à 12 heures","Oui, jusqu'à 1 heure"],a:0},
  {q:"L'anneau vaginal protège-t-il des IST ?",c:["Non","Oui, comme le préservatif","Oui, partiellement","Oui, totalement"],a:0},
  {q:"Où se procurer l'anneau vaginal ?",c:["Sur prescription médicale en pharmacie","En vente libre","En ligne sans ordonnance","En grande surface"],a:0},
];
r.sexe_030 = [ // Patch contraceptif
  {q:"Qu'est-ce que le patch contraceptif ?",c:["Timbre cutané qui libère des hormones contraceptives","Pansement","Dispositif intra-utérin","Implant"],a:0},
  {q:"Où applique-t-on le patch contraceptif ?",c:["Sur la peau du ventre, fesse, bras ou dos","Dans le vagin","Sur le visage","Sur la poitrine"],a:0},
  {q:"Combien de temps dure un patch ?",c:["Une semaine","24 heures","3 jours","Deux semaines"],a:0},
  {q:"Quels hormones contient le patch ?",c:["Oestrogènes et progestérone","Progestérone seule","Oestrogènes seuls","Testostérone"],a:0},
  {q:"Quelle est l'efficacité du patch contraceptif ?",c:["Plus de 99%","Environ 95%","Environ 90%","Environ 85%"],a:0},
  {q:"Combien de patchs par cycle ?",c:["3 patchs (3 semaines)","4 patchs (1 mois)","1 patch par mois","2 patchs par cycle"],a:0},
  {q:"Le patch peut-il se décoller ?",c:["Oui, sous certaines conditions (eau, sudation)","Non, jamais","Uniquement lors du sport","Oui, toujours"],a:0},
  {q:"Le patch protège-t-il des IST ?",c:["Non","Oui, totalement","Oui, partiellement","Oui, comme le préservatif"],a:0},
];
r.sexe_031 = [ // Spermicide
  {q:"Qu'est-ce qu'un spermicide ?",c:["Substance qui détruit ou immobilise les spermatozoïdes","Hormone contraceptive","Lubrifiant","Antibiotique"],a:0},
  {q:"Sous quelle forme se présente le spermicide ?",c:["Crème, gel, mousse, ovule, film","Comprimé","Patch","Injection"],a:0},
  {q:"Quel est l'ingrédient actif principal des spermicides ?",c:["Le nonoxynol-9","Le latex","Le paracétamol","L'alcool"],a:0},
  {q:"Quelle est l'efficacité du spermicide seul ?",c:["Environ 72%","Plus de 99%","Environ 90%","Environ 85%"],a:0},
  {q:"Le spermicide protège-t-il des IST ?",c:["Non, il peut même irriter la peau","Oui, totalement","Oui, partiellement","Oui, comme le préservatif"],a:0},
  {q:"Comment utiliser un spermicide ?",c:["Appliquer dans le vagin avant les rapports","Appliquer sur le pénis","Boire","Injection"],a:0},
  {q:"Combien de temps avant le rapport faut-il appliquer le spermicide ?",c:["5 à 30 minutes avant","Immédiatement","1 heure avant","24 heures avant"],a:0},
  {q:"Le spermicide est-il recommandé comme méthode contraceptive principale ?",c:["Non, son efficacité est insuffisante seule","Oui, c'est très efficace","Oui, recommandé","Non, interdit"],a:0},
];
r.sexe_032 = [ // Abstinence sexuelle
  {q:"Qu'est-ce que l'abstinence sexuelle ?",c:["Absence volontaire de relations sexuelles","Impossibilité d'avoir des relations","Stérilité","Frigidité"],a:0},
  {q:"L'abstinence sexuelle peut-elle être une méthode contraceptive ?",c:["Oui, c'est la seule méthode à 100% efficace","Non","Parfois","Uniquement pour les femmes"],a:0},
  {q:"Quelles sont les raisons de l'abstinence ?",c:["Religieuses, personnelles, médicales","Uniquement religieuses","Uniquement médicales","Uniquement personnelles"],a:0},
  {q:"L'abstinence est-elle dangereuse pour la santé ?",c:["Non, c'est un choix personnel sans danger","Oui, elle cause des maladies","Oui, elle est nocive","Parfois"],a:0},
  {q:"Qu'est-ce que l'abstinence périodique ?",c:["Méthode naturelle basée sur l'observation du cycle","Abstinence totale","Méthode contraceptive chimique","Retrait"],a:0},
  {q:"Quelle est l'efficacité des méthodes d'abstinence périodique ?",c:["Variable, de 75% à 99% selon la méthode","100%","50%","Moins de 50%"],a:0},
  {q:"Comment fonctionne la méthode Ogino (rythme) ?",c:["Calcul de la période d'ovulation pour éviter les rapports","Mesure de température","Observation de la glaire","Suppression des rapports"],a:0},
  {q:"Qu'est-ce que la méthode symptothermique ?",c:["Méthode naturelle combinant température et glaire","Méthode chimique","Méthode chirurgicale","Méthode hormonale"],a:0},
];
r.sexe_033 = [ // Célibat
  {q:"Qu'est-ce que le célibat ?",c:["Fait de ne pas être en couple ou marié","Absence de relations sexuelles","Vie solitaire","Choix de ne pas avoir d'enfants"],a:0},
  {q:"Le célibat est-il un choix ou une situation subie ?",c:["Les deux cas existent","Toujours un choix","Toujours subi","Uniquement temporaire"],a:0},
  {q:"Qu'est-ce que le célibat prolongé ?",c:["Célibat qui dure plusieurs années","Célibat définitif","Choix de vie","Retraite sexuelle"],a:0},
  {q:"Le célibat a-t-il des effets sur la santé mentale ?",c:["Cela dépend des personnes et du contexte","Toujours négatifs","Toujours positifs","Aucun effet"],a:0},
  {q:"Qu'est-ce que le célibat religieux ?",c:["Voeu de chasteté pour des motifs religieux","Choix de vie","Abstinence","Mariage religieux"],a:0},
  {q:"Quel pourcentage d'adultes sont célibataires en France ?",c:["Environ 30%","Environ 10%","Environ 50%","Environ 20%"],a:0},
  {q:"Le célibat est-il plus fréquent dans certaines tranches d'âge ?",c:["Oui, chez les jeunes et les seniors","Non, uniforme","Uniquement chez les jeunes","Uniquement chez les seniors"],a:0},
  {q:"Qu'est-ce que le célibat géographique ?",c:["Célibat lié à l'isolement géographique","Célibat choisi","Célibat temporaire","Célibat professionnel"],a:0},
];
r.sexe_034 = [ // Orientation sexuelle
  {q:"Qu'est-ce que l'orientation sexuelle ?",c:["Attirance sexuelle et affective pour un genre","Choix sexuel","Préférence","Habitude"],a:0},
  {q:"Quels sont les principaux types d'orientation sexuelle ?",c:["Hétérosexualité, homosexualité, bisexualité","Hétérosexualité et homosexualité","Homosexualité","Toutes les orientations"],a:0},
  {q:"Qu'est-ce que l'hétérosexualité ?",c:["Attirance pour le sexe opposé","Attirance pour le même sexe","Attirance pour les deux sexes","Absence d'attirance"],a:0},
  {q:"Qu'est-ce que l'homosexualité ?",c:["Attirance pour le même sexe","Attirance pour le sexe opposé","Attirance pour les deux","Aucune attirance"],a:0},
  {q:"Qu'est-ce que la bisexualité ?",c:["Attirance pour les deux sexes","Attirance pour le même sexe","Attirance pour aucun sexe","Changement d'orientation"],a:0},
  {q:"Depuis quand l'homosexualité n'est-elle plus considérée comme une maladie ?",c:["Depuis 1990 (OMS)","Depuis 1970","Depuis 2000","Depuis 1980"],a:0},
  {q:"Qu'est-ce que l'asexualité ?",c:["Absence ou faible désir sexuel envers autrui","Choix de célibat","Refus de la sexualité","Maladie"],a:0},
  {q:"L'orientation sexuelle peut-elle changer ?",c:["Elle est généralement stable mais peut évoluer","Oui, volontairement","Non, jamais","Elle change toujours"],a:0},
];
r.sexe_035 = [ // Mariage
  {q:"Qu'est-ce que le mariage ?",c:["Union légale entre deux personnes","Contrat religieux","Simple cohabitation","Engagement informel"],a:0},
  {q:"En quelle année le mariage homosexuel a-t-il été légalisé en France ?",c:["2013 (loi Taubira)","2010","2015","2000"],a:0},
  {q:"Quel pays a été le premier à légaliser le mariage homosexuel ?",c:["Pays-Bas (2001)","France (2013)","Canada (2005)","Belgique (2003)"],a:0},
  {q:"Qu'est-ce que le PACS en France ?",c:["Contrat d'union civile entre deux adultes","Mariage simplifié","Contrat de travail","Union religieuse"],a:0},
  {q:"Combien de mariages sont célébrés chaque année en France ?",c:["Environ 230 000","Environ 100 000","Environ 500 000","Environ 300 000"],a:0},
  {q:"Qu'est-ce que le mariage civil ?",c:["Mariage célébré par un officier d'état civil","Mariage religieux","Mariage symbolique","Union libre"],a:0},
  {q:"Quel âge minimum pour se marier en France ?",c:["18 ans","16 ans","21 ans","15 ans"],a:0},
  {q:"Qu'est-ce que le divorce ?",c:["Dissolution légale du mariage","Séparation de fait","Annulation","Rupture"],a:0},
];
r.sexe_036 = [ // Pornographie
  {q:"Qu'est-ce que la pornographie ?",c:["Représentation explicite d'actes sexuels dans le but d'exciter","Film érotique","Éducation sexuelle","Art érotique"],a:0},
  {q:"Depuis quand la pornographie moderne existe-t-elle ?",c:["Depuis le cinéma (années 1970)","Depuis l'antiquité","Depuis internet","Depuis les années 1950"],a:0},
  {q:"Quel est l'âge légal pour accéder à la pornographie en France ?",c:["18 ans","16 ans","21 ans","15 ans"],a:0},
  {q:"Qu'est-ce que la pornographie montre-t-elle souvent de manière irréaliste ?",c:["Les corps, les pratiques et les relations","Tout est réaliste","Uniquement les émotions","Les sentiments"],a:0},
  {q:"Quels sont les risques de la pornographie pour les jeunes ?",c:["Image irréaliste de la sexualité, addiction","Aucun risque","Effets positifs","Développement normal"],a:0},
  {q:"Qu'est-ce que le revenge porn ?",c:["Diffusion non consentie d'images intimes","Pornographie professionnelle","Film amateur","Publicité"],a:0},
  {q:"La pornographie est-elle légale en France ?",c:["Oui, avec des restrictions (âge, consentement)","Non, interdite","Oui, sans restrictions","Uniquement sur internet"],a:0},
  {q:"Qu'est-ce que la production éthique dans la pornographie ?",c:["Production respectant le consentement et les droits des acteurs","Production amateur","Production gratuite","Production artistique"],a:0},
];
r.drogues_013 = [ // Sevrage
  {q:"Qu'est-ce que le sevrage ?",c:["Arrêt ou réduction de la consommation d'une substance addictive","Remplacement par une autre substance","Traitement médical","Désintoxication forcée"],a:0},
  {q:"Quels sont les symptômes du sevrage ?",c:["Anxiété, irritabilité, insomnie, sueurs, douleurs","Aucun symptôme","Bien-être","Euphorie"],a:0},
  {q:"Combien de temps dure un sevrage aigu ?",c:["Quelques jours à quelques semaines selon la substance","24 heures","Plusieurs mois","1 an"],a:0},
  {q:"Qu'est-ce que le syndrome de sevrage alcoolique ?",c:["Ensemble de symptômes après arrêt de l'alcool (parfois mortel)","Simple gueule de bois","Fatigue","Nostalgie"],a:0},
  {q:"Qu'est-ce qu'un sevrage médicalisé ?",c:["Sevrage supervisé par des professionnels de santé","Sevrage à domicile","Auto-sevrage","Sevrage brutal"],a:0},
  {q:"Le sevrage peut-il être dangereux ?",c:["Oui, pour l'alcool et les benzodiazépines, il peut être mortel","Non, jamais","Légèrement","Seulement psychologiquement"],a:0},
  {q:"Qu'est-ce que la cure de désintoxication ?",c:["Programme intensif pour arrêter une addiction en milieu spécialisé","Traitement à domicile","Médicaments","Hospitalisation courte"],a:0},
  {q:"Quelle est la première étape d'un sevrage réussi ?",c:["La reconnaissance du problème et la demande d'aide","L'arrêt brutal","Le traitement médical","L'isolement"],a:0},
];
r.drogues_014 = [ // Overdose
  {q:"Qu'est-ce qu'une overdose ?",c:["Prise d'une dose toxique qui peut entraîner la mort","Fort effet","Dose thérapeutique","Prise régulière"],a:0},
  {q:"Quels sont les signes d'une overdose aux opioïdes ?",c:["Respirations lentes, pupilles contractées, inconscience","Agitation","Convulsions","Hallucinations"],a:0},
  {q:"Quels sont les signes d'une overdose aux stimulants ?",c:["Crise cardiaque, AVC, hyperthermie, convulsions","Somnolence","Bradycardie","Hypothermie"],a:0},
  {q:"Que faire en cas d'overdose présumée ?",c:["Appeler les urgences, administrer naloxone si opioïdes","Donner à boire","Faire marcher la personne","Attendre"],a:0},
  {q:"Qu'est-ce que la naloxone ?",c:["Antidote qui réverse une overdose aux opioïdes","Vaccin","Antibiotique","Stimulant"],a:0},
  {q:"Combien de personnes meurent d'overdose chaque année dans le monde ?",c:["Environ 500 000","Environ 50 000","Environ 100 000","Environ 1 million"],a:0},
  {q:"Qu'est-ce qu'une overdose retardée ?",c:["Overdose qui survient plusieurs heures après la prise","Overdose légère","Fausse overdose","Réaction allergique"],a:0},
  {q:"Qui peut administrer la naloxone ?",c:["Toute personne formée, y compris les proches","Uniquement les médecins","Uniquement les ambulanciers","Uniquement à l'hôpital"],a:0},
];
r.drogues_015 = [ // Alcoolisme
  {q:"Qu'est-ce que l'alcoolisme (trouble de l'usage d'alcool) ?",c:["Maladie caractérisée par une consommation excessive et compulsive d'alcool","Simple ivresse","Consommation modérée","Usage occasionnel"],a:0},
  {q:"Combien de personnes souffrent d'alcoolisme en France ?",c:["Environ 5 millions","Environ 1 million","Environ 10 millions","Environ 500 000"],a:0},
  {q:"Qu'est-ce qu'un verre standard d'alcool ?",c:["10 g d'alcool pur","5 g d'alcool","20 g d'alcool","30 g d'alcool"],a:0},
  {q:"Quelles sont les limites de consommation recommandées par l'OMS ?",c:["Pas plus de 2 verres par jour et jours de pause","10 verres par jour","Pas de limite","5 verres par jour"],a:0},
  {q:"Quelles maladies sont causées par l'alcoolisme chronique ?",c:["Cirrhose, pancréatite, cancers, neuropathies","Uniquement la cirrhose","Maladies cardiaques","Diabète"],a:0},
  {q:"Qu'est-ce que le syndrome de sevrage alcoolique ?",c:["Symptômes après arrêt brutal: tremblements, hallucinations, convulsions","Simple gueule de bois","Fatigue","Irritabilité"],a:0},
  {q:"Qu'est-ce que le delirium tremens ?",c:["Forme grave du sevrage alcoolique avec confusion et hallucinations","Ivresse","Trouble léger","Intoxication"],a:0},
  {q:"Existe-t-il des traitements médicamenteux pour l'alcoolisme ?",c:["Oui, comme le baclofène, le naltrexone, l'acamprosate","Non, aucun","Uniquement la psychothérapie","Uniquement les groupes de parole"],a:0},
];
r.drogues_016 = [ // Drogues de synthèse
  {q:"Qu'est-ce qu'une drogue de synthèse ?",c:["Substance psychoactive créée chimiquement en laboratoire","Drogue naturelle","Plante","Champignon"],a:0},
  {q:"Pourquoi les drogues de synthèse sont-elles dangereuses ?",c:["Composition inconnue, dosage imprévisible, effets graves","Elles sont sûres","Peu d'effets","Bien connues"],a:0},
  {q:"Qu'est-ce qu'un NPS (Nouveau Produit de Synthèse) ?",c:["Molécule modifiée pour contourner les lois","Médicament","Drogue naturelle","Complément alimentaire"],a:0},
  {q:"Quels sont les types de drogues de synthèse ?",c:["Amphétamines, cathinones, cannabinoïdes synthétiques, benzodiazépines","Uniquement les amphétamines","Uniquement les cannabinoïdes","Uniquement les opioïdes"],a:0},
  {q:"Qu'est-ce que le GHB ?",c:["Drogue de synthèse sédative utilisée comme drogue du viol","Stimulant","Hallucinogène","Cannabinoïde"],a:0},
  {q:"Qu'est-ce que le 2CB ?",c:["Drogue de synthèse aux effets hallucinogènes et empathogènes","Opiacé","Stimulant","Sédatif"],a:0},
  {q:"Comment sont fabriquées les drogues de synthèse ?",c:["Dans des laboratoires clandestins avec des précurseurs chimiques","Dans des usines pharmaceutiques","Dans des laboratoires naturels","Dans des cuisines"],a:0},
  {q:"Quels sont les risques d'overdose avec les drogues de synthèse ?",c:["Élevés car la pureté et le dosage sont inconnus","Faibles","Nuls","Faibles si testées"],a:0},
];
r.drogues_017 = [ // Drogues douces
  {q:"Qu'est-ce que la distinction entre drogues douces et dures ?",c:["Classification basée sur la dangerosité et le potentiel addictif","Légalité","Prix","Origine naturelle ou synthétique"],a:0},
  {q:"Quelle drogue est généralement classée comme 'douce' ?",c:["Le cannabis","La cocaïne","L'héroïne","Le crack"],a:0},
  {q:"Le terme 'drogue douce' est-il utilisé par les autorités scientifiques ?",c:["Non, il est contesté car toute drogue comporte des risques","Oui, officiellement","Oui, par l'OMS","Oui, validé"],a:0},
  {q:"Quels sont les risques du cannabis considéré comme drogue douce ?",c:["Dépendance psychique, troubles de la mémoire, anxiété","Aucun risque","Risques vitaux","Risques physiques uniquement"],a:0},
  {q:"Quelle est la position de la France sur le cannabis ?",c:["C'est illégal mais le débat sur la légalisation existe","Totalement légal","En cours de légalisation","Autorisé médicalement"],a:0},
  {q:"Qu'est-ce que la dépénalisation ?",c:["Absence de sanction pénale pour la consommation personnelle","Légalisation totale","Autorisation","Vente libre"],a:0},
  {q:"Dans quels pays le cannabis est-il dépénalisé ou légalisé ?",c:["Pays-Bas (dépénalisé), Canada (légal), Portugal (dépénalisé)","Partout en Europe","Aucun","Uniquement aux USA"],a:0},
  {q:"Les drogues dites douces peuvent-elles mener aux drogues dures ?",c:["C'est un facteur de risque parmi d'autres, pas une fatalité","Oui, systématiquement","Non, jamais","C'est un mythe"],a:0},
];
r.drogues_018 = [ // Drogues dures
  {q:"Quelles drogues sont classées comme 'dures' ?",c:["Héroïne, cocaïne, crack, méthamphétamine","Cannabis, tabac","Caféine, théine","LSD, champignons"],a:0},
  {q:"Qu'est-ce qui caractérise une drogue dure ?",c:["Potentiel addictif élevé et risques graves pour la santé","Prix élevé","Illégalité","Origine synthétique"],a:0},
  {q:"Quels sont les risques d'une dépendance à l'héroïne ?",c:["Dépendance physique intense, overdoses, infections","Dépendance légère","Aucun risque physique","Peu de conséquences"],a:0},
  {q:"Quels sont les risques à long terme de la cocaïne ?",c:["Cardiaques, neurologiques, ORL, psychiatriques","Aucun","Uniquement cardiaques","Uniquement psychologiques"],a:0},
  {q:"Qu'est-ce que la polyconsommation de drogues dures ?",c:["Consommation simultanée ou alternée de plusieurs drogues dures","Consommation modérée","Consommation régulière","Traitement"],a:0},
  {q:"Pourquoi le mélange héroïne-cocaïne (speedball) est-il dangereux ?",c:["Risque d'overdose mortel car effets opposés masquent les symptômes","Moins dangereux","Effets annulés","Sans risque"],a:0},
  {q:"Quels sont les signes de l'addiction aux drogues dures ?",c:["Perte de contrôle, craving, isolement, problèmes financiers","Bonne humeur","Réussite sociale","Santé stable"],a:0},
  {q:"Quels traitements existent pour les addictions aux drogues dures ?",c:["Traitements de substitution, thérapies, communautés thérapeutiques","Aucun","Uniquement l'hôpital","Uniquement les médicaments"],a:0},
];
r.drogues_019 = [ // Légalisation
  {q:"Qu'est-ce que la légalisation d'une drogue ?",c:["Autorisation légale de produire, vendre et consommer une substance","Simple dépénalisation","Autorisation médicale","Autorisation partielle"],a:0},
  {q:"Quelle est la différence entre légalisation et dépénalisation ?",c:["Légalisation = cadre légal complet, dépénalisation = pas de sanction pénale","Identique","Légalisation = moins strict","Dépénalisation = plus strict"],a:0},
  {q:"Quel pays a le premier légalisé le cannabis récréatif ?",c:["Uruguay (2013)","Canada (2018)","Pays-Bas","Portugal"],a:0},
  {q:"Quels sont les arguments pour la légalisation ?",c:["Contrôle qualité, réduction du marché noir, taxes, liberté individuelle","Augmentation de la consommation","Risques pour la santé","Moralité"],a:0},
  {q:"Quels sont les arguments contre la légalisation ?",c:["Augmentation de la consommation, risques sanitaires","Diminution des risques","Avantages économiques","Meilleur contrôle"],a:0},
  {q:"Le Portugal a-t-il dépénalisé toutes les drogues ?",c:["Oui, depuis 2001, avec des résultats positifs sur la santé","Non, uniquement le cannabis","Oui, mais échec","Uniquement les drogues douces"],a:0},
  {q:"Qu'est-ce que la réduction des risques (RDR) ?",c:["Politique visant à réduire les conséquences négatives de la consommation","Promotion de la consommation","Répression","Traitement obligatoire"],a:0},
  {q:"Quels sont les résultats de la légalisation du cannabis au Canada ?",c:["Baisse du marché noir, mais augmentation de la consommation","Échec total","Aucun effet","Uniquement des effets négatifs"],a:0},
];
r.drogues_020 = [ // Trafic de drogue
  {q:"Qu'est-ce que le trafic de drogue ?",c:["Production, transport et vente illégale de substances","Consommation personnelle","Prescription médicale","Usage récréatif"],a:0},
  {q:"Quel est le chiffre d'affaires du trafic de drogue dans le monde ?",c:["Plus de 300 milliards de dollars par an","Moins de 100 millions","Environ 50 milliards","Environ 1 000 milliards"],a:0},
  {q:"Quelles sont les principales routes du trafic de drogue ?",c:["Amérique du Sud vers USA/Europe, Asie du Sud-Est, Afghanistan","Uniquement entre l'Amérique et l'Europe","Routes locales","Routes maritimes uniquement"],a:0},
  {q:"Quels sont les cartels de la drogue les plus puissants ?",c:["Cartels mexicains (Sinaloa, Jalisco), mafia italienne","Cartels français","Réseaux chinois","Mafias russes"],a:0},
  {q:"Qu'est-ce que le blanchiment d'argent dans le trafic ?",c:["Dissimulation de l'origine illicite des profits","Investissement légal","Épargne","Dépense"],a:0},
  {q:"Quel pays est le plus grand producteur d'opium ?",c:["Afghanistan","Colombie","Mexique","Birmanie"],a:0},
  {q:"Quelles sont les peines pour trafic de drogue en France ?",c:["Jusqu'à 30 ans de réclusion et 7,5 millions € d'amende","5 ans","10 ans","Perpétuité"],a:0},
  {q:"Qu'est-ce que l'Office anti-stupéfiants (OFAST) ?",c:["Police française spécialisée dans la lutte contre le trafic","Agence européenne","ONU","ONG"],a:0},
];
r.drogues_021 = [ // Réhabilitation
  {q:"Qu'est-ce que la réhabilitation des toxicomanes ?",c:["Processus pour aider une personne à se rétablir de l'addiction","Punition","Isolement","Soins médicaux uniquement"],a:0},
  {q:"Qu'est-ce qu'une communauté thérapeutique ?",c:["Structure d'hébergement et de soins pour personnes addictes","Hôpital","Prison","Centre médical"],a:0},
  {q:"Combien de temps dure un programme de réhabilitation ?",c:["Quelques mois à plusieurs années selon les besoins","Quelques jours","Un mois","Toute la vie"],a:0},
  {q:"Qu'est-ce que le suivi post-cure ?",c:["Accompagnement après la sortie d'une cure de désintoxication","Traitement initial","Prévention","Évaluation"],a:0},
  {q:"Qu'est-ce que les groupes de parole (Narcotiques Anonymes) ?",c:["Groupes d'entraide entre personnes addictes","Groupes médicaux","Thérapie de groupe","Réunions d'information"],a:0},
  {q:"Qu'est-ce que la thérapie cognitivo-comportementale (TCC) ?",c:["Thérapie qui aide à modifier les pensées et comportements liés à l'addiction","Médicaments","Hypnose","Hospitalisation"],a:0},
  {q:"Quels sont les facteurs clés de succès d'une réhabilitation ?",c:["Motivation, soutien social, accompagnement professionnel","Médicaments","Isolement","Traitement forcé"],a:0},
  {q:"Qu'est-ce que la prévention de la rechute ?",c:["Stratégies pour éviter de retomber dans l'addiction","Retour à la consommation","Traitement continu","Arrêt des soins"],a:0},
];
r.drogues_022 = [ // Drogues dans l'histoire
  {q:"Quelles drogues étaient utilisées dans l'Antiquité ?",c:["Opium, cannabis, alcool, champignons hallucinogènes","Cocaïne","Amphétamines","LSD"],a:0},
  {q:"Quel peuple utilisait des champignons hallucinogènes (teonanácatl) ?",c:["Les Aztèques","Les Égyptiens","Les Grecs","Les Romains"],a:0},
  {q:"Quand l'opium a-t-il été découvert ?",c:["Utilisé depuis 3 400 av. J.-C. par les Sumériens","Au Moyen Âge","XIXe siècle","XXe siècle"],a:0},
  {q:"Qu'est-ce que la guerre de l'opium (1839-1860) ?",c:["Conflit entre la Chine et le Royaume-Uni sur le commerce d'opium","Guerre en Afghanistan","Guerre en Colombie","Conflit entre cartels"],a:0},
  {q:"Quand la cocaïne a-t-elle été isolée pour la première fois ?",c:["1859 par Albert Niemann","1900","1910","1800"],a:0},
  {q:"Qui a popularisé le LSD dans les années 1960 ?",c:["Timothy Leary et le mouvement psychédélique","Albert Hofmann","Sigmund Freud","Aldous Huxley"],a:0},
  {q:"Quand l'héroïne a-t-elle été synthétisée ?",c:["1874 par C.R. Wright, commercialisée en 1898 par Bayer","1900","1920","1880"],a:0},
  {q:"Quelle drogue était utilisée comme médicament pour enfants au XIXe siècle ?",c:["La morphine et l'opium (sirops pour enfants)","Le LSD","La cocaïne","L'ecstasy"],a:0},
];
r.drogues_023 = [ // Dépresseurs
  {q:"Que sont les dépresseurs du système nerveux ?",c:["Substances qui ralentissent l'activité cérébrale et corporelle","Stimulants","Hallucinogènes","Psychédéliques"],a:0},
  {q:"Quels sont les principaux dépresseurs ?",c:["Alcool, benzodiazépines, opioïdes, barbituriques","Cocaïne, amphétamines","LSD, champignons","Cannabis, CBD"],a:0},
  {q:"Comment agissent les dépresseurs sur le système nerveux ?",c:["En renforçant l'action du GABA, un neurotransmetteur inhibiteur","En bloquant la dopamine","En activant la sérotonine","En stimulant l'adrénaline"],a:0},
  {q:"Quels sont les effets des dépresseurs ?",c:["Relaxation, somnolence, diminution de l'anxiété","Excitation","Hallucinations","Hyperactivité"],a:0},
  {q:"Quels sont les risques des dépresseurs ?",c:["Dépression respiratoire, dépendance, overdose","Hypertension","Crise cardiaque","Psychose"],a:0},
  {q:"Qu'est-ce que les benzodiazépines ?",c:["Médicaments anxiolytiques et sédatifs qui agissent sur le GABA","Stimulants","Antidépresseurs","Antipsychotiques"],a:0},
  {q:"Quels sont les risques du mélange alcool-benzodiazépines ?",c:["Dépression respiratoire mortelle","Effet nul","Anxiété","Insomnie"],a:0},
  {q:"Qu'est-ce que les barbituriques ?",c:["Anciens sédatifs très dangereux, aujourd'hui peu prescrits","Stimulants","Antidouleurs","Antibiotiques"],a:0},
];
r.drogues_024 = [ // Stimulants
  {q:"Que sont les stimulants du système nerveux ?",c:["Substances qui augmentent l'éveil, l'énergie et l'attention","Sédatifs","Hallucinogènes","Dépresseurs"],a:0},
  {q:"Quels sont les principaux stimulants ?",c:["Cocaïne, amphétamines, caféine, nicotine","Héroïne, morphine","LSD, champignons","Alcool, GHB"],a:0},
  {q:"Comment agissent les stimulants ?",c:["En augmentant la dopamine, noradrénaline et sérotonine","En bloquant le GABA","En activant les récepteurs opioïdes","En réduisant l'activité cérébrale"],a:0},
  {q:"Quels sont les effets des stimulants ?",c:["Énergie, vigilance, euphorie, diminution de l'appétit","Somnolence","Relaxation","Ralentissement"],a:0},
  {q:"Quels sont les risques des stimulants ?",c:["Problèmes cardiaques, dépendance, anxiété, psychose","Aucun risque","Hypotension","Bradycardie"],a:0},
  {q:"Qu'est-ce que la cocaïne ?",c:["Stimulant puissant dérivé des feuilles de coca","Opiacé","Hallucinogène","Sédatif"],a:0},
  {q:"Qu'est-ce que la nicotine ?",c:["Stimulant légal présent dans le tabac, très addictif","Sédatif","Hallucinogène","Anxiolytique"],a:0},
  {q:"Quelle différence entre stimulants légaux et illégaux ?",c:["Les légaux (caféine, nicotine) sont régulés mais peuvent aussi être dangereux","Les légaux sont sans danger","Les illégaux sont tous mortels","Aucune différence"],a:0},
];
r.drogues_025 = [ // Hallucinogènes
  {q:"Que sont les hallucinogènes ?",c:["Substances qui modifient la perception, la pensée et les émotions","Stimulants","Sédatifs","Opiacés"],a:0},
  {q:"Quels sont les principaux hallucinogènes ?",c:["LSD, psilocybine, mescaline, DMT","Cocaïne, héroïne","Cannabis, tabac","Alcool, GHB"],a:0},
  {q:"Comment agissent les hallucinogènes ?",c:["En agissant sur les récepteurs sérotoninergiques 5-HT2A","En bloquant la dopamine","En activant le GABA","En inhibant la noradrénaline"],a:0},
  {q:"Quels sont les effets des hallucinogènes ?",c:["Hallucinations visuelles, auditives, altération de la conscience","Euphorie physique","Sédation","Agitation"],a:0},
  {q:"Le LSD peut-il provoquer des flashbacks ?",c:["Oui, des réminiscences imprévisibles des effets","Non, jamais","Uniquement en cas de surdose","Oui, systématiquement"],a:0},
  {q:"Qu'est-ce que les champignons hallucinogènes (psilocybine) ?",c:["Champignons contenant de la psilocybine, un hallucinogène naturel","Champignons comestibles","Champignons vénéneux","Médicaments"],a:0},
  {q:"Les hallucinogènes sont-ils utilisés en recherche médicale ?",c:["Oui, pour traiter la dépression, l'anxiété et les addictions","Non, jamais","Uniquement dans les années 1960","Oui, très courants"],a:0},
  {q:"Qu'est-ce que la mescaline ?",c:["Hallucinogène naturel extrait du cactus peyotl utilisé par les Amérindiens","Amphétamine","Opiacé","Stimulant"],a:0},
];

// ---------- ALCOOL (25 themes) ----------
r.alcool_001 = [ // Histoire du vin
  {q:"Depuis quand le vin est-il produit ?",c:["Depuis environ 8 000 ans (Caucase)","Depuis l'Antiquité grecque","Depuis le Moyen Âge","Depuis 2 000 ans"],a:0},
  {q:"Quel pays est le plus grand producteur de vin au monde ?",c:["Italie","France","Espagne","États-Unis"],a:0},
  {q:"Quels étaient les principaux producteurs de vin dans l'Antiquité ?",c:["Grèce et Rome","Égypte et Perse","Chine et Inde","Gaule et Bretagne"],a:0},
  {q:"Qu'est-ce que le vin ?",c:["Boisson alcoolisée obtenue par fermentation du raisin","Jus de raisin","Alcool distillé","Boisson gazeuse"],a:0},
  {q:"Comment le vin s'est-il répandu en Europe ?",c:["Par les Romains et les Grecs","Par les Vikings","Par les Croisés","Par les Arabes"],a:0},
  {q:"Qu'est-ce que l'amphore dans l'histoire du vin ?",c:["Récipient antique pour transporter le vin","Cépage","Vin grec","Rituel"],a:0},
  {q:"Qui a introduit la culture de la vigne en Gaule ?",c:["Les Romains","Les Grecs","Les Phéniciens","Les Gaulois"],a:0},
  {q:"Quand la Champagne est-elle devenue une région viticole ?",c:["À l'époque médiévale","Au Ier siècle","Au XVIe siècle","Au XIXe siècle"],a:0},
];
r.alcool_002 = [ // Types de vins
  {q:"Quels sont les principaux types de vin ?",c:["Rouge, blanc, rosé, effervescent","Rouge et blanc uniquement","Sec, doux, moelleux","Vin de table, AOC, IGP"],a:0},
  {q:"Qu'est-ce qu'un vin rouge ?",c:["Vin issu de raisins noirs fermentés avec la peau","Vin coloré","Vin de garde","Vin corsé"],a:0},
  {q:"Qu'est-ce qu'un vin blanc ?",c:["Vin issu de raisins blancs ou noirs sans la peau","Vin clair","Vin sec","Vin léger"],a:0},
  {q:"Qu'est-ce qu'un vin rosé ?",c:["Vin obtenu par une macération courte des raisins noirs","Mélange de rouge et blanc","Vin clair","Vin fruité"],a:0},
  {q:"Comment est produit le champagne ?",c:["Par double fermentation en bouteille (méthode champenoise)","Par fermentation unique","Par gazéification","Par ajout de sucre"],a:0},
  {q:"Qu'est-ce qu'un vin moelleux ?",c:["Vin contenant du sucre résiduel (plus sucré)","Vin pétillant","Vin sans alcool","Vin jeune"],a:0},
  {q:"Qu'est-ce qu'un vin AOC ?",c:["Appellation d'Origine Contrôlée, garantissant l'origine","Alcool Ordinaire de Consommation","Vin artisanal","Vin de cépage"],a:0},
  {q:"Quels sont les cépages principaux pour le vin rouge ?",c:["Merlot, Cabernet Sauvignon, Pinot Noir, Syrah","Chardonnay, Sauvignon, Riesling","Pinot Gris, Gewurztraminer","Ugni Blanc, Colombard"],a:0},
];
r.alcool_003 = [ // Bière
  {q:"Quels sont les ingrédients de base de la bière ?",c:["Eau, malt, houblon, levure","Eau, orge, sucre, levure","Eau, blé, houblon, sel","Eau, malt, riz, levure"],a:0},
  {q:"Quel pays est le plus grand consommateur de bière par habitant ?",c:["République tchèque","Allemagne","Belgique","Irlande"],a:0},
  {q:"Qu'est-ce que le houblon ?",c:["Plante qui donne l'amertume et l'arôme à la bière","Céréale","Levure","Additif"],a:0},
  {q:"Quels sont les principaux types de bière ?",c:["Lager, Ale, Stout, IPA, Blonde","Rouge, blanche, rosée","Brune, rousse, dorée","Bière pression, bouteille, canette"],a:0},
  {q:"Qu'est-ce qu'une bière IPA ?",c:["India Pale Ale, bière très houblonnée","Bière d'abbaye","Bière blanche","Bière légère"],a:0},
  {q:"Qu'est-ce que la fermentation haute ?",c:["Fermentation à température ambiante pour les Ales","Fermentation au froid","Fermentation rapide","Fermentation en bouteille"],a:0},
  {q:"Quelle est la teneur en alcool moyenne d'une bière standard ?",c:["4-6% vol.","2-3% vol.","7-9% vol.","10-12% vol."],a:0},
  {q:"Quelle est la plus ancienne brasserie encore en activité ?",c:["Weihenstephan (Allemagne, 1040)","Heineken","Guinness","Budweiser"],a:0},
];
r.alcool_004 = [ // Spiritueux
  {q:"Qu'est-ce qu'un spiritueux ?",c:["Boisson alcoolisée obtenue par distillation","Boisson fermentée","Vin","Bière"],a:0},
  {q:"Quelle est la teneur en alcool minimale d'un spiritueux ?",c:["15% vol.","5% vol.","10% vol.","20% vol."],a:0},
  {q:"Quels sont les principaux spiritueux ?",c:["Whisky, vodka, rhum, gin, tequila, cognac","Vin, bière, cidre","Champagne, mousseux","Porto, Xérès, Muscat"],a:0},
  {q:"Qu'est-ce que la distillation ?",c:["Procédé qui concentre l'alcool par chauffage et condensation","Fermentation","Macération","Filtration"],a:0},
  {q:"Qu'est-ce qu'un alambic ?",c:["Appareil utilisé pour la distillation","Fût de vieillissement","Bouteille","Verre"],a:0},
  {q:"Qu'est-ce que le vieillissement en fût ?",c:["Maturation du spiritueux en fût de chêne pour développer les arômes","Stockage en bouteille","Fermentation longue","Distillation lente"],a:0},
  {q:"Quelle est la différence entre cognac et armagnac ?",c:["Région et méthode de distillation différentes","Couleur différente","Teneur en alcool","Cépage utilisé"],a:0},
  {q:"Qu'est-ce qu'une eau-de-vie ?",c:["Spiritueux issu de la distillation de fruits fermentés","Vieil alcool","Alcool pur","Boisson sucrée"],a:0},
];
r.alcool_005 = [ // Whisky
  {q:"De quoi est fait le whisky ?",c:["Céréales fermentées et distillées (orge, maïs, seigle)","Raisin","Pomme de terre","Canne à sucre"],a:0},
  {q:"Quels sont les principaux pays producteurs de whisky ?",c:["Écosse, États-Unis, Canada, Japon, Irlande","France, Italie, Espagne","Allemagne, Belgique","Russie, Pologne"],a:0},
  {q:"Qu'est-ce que le Scotch whisky ?",c:["Whisky produit en Écosse","Whisky de luxe","Whisky vieux","Whisky tourbé"],a:0},
  {q:"Qu'est-ce que le Bourbon ?",c:["Whisky américain à base de maïs (au moins 51%)","Whisky canadien","Whisky irlandais","Whisky japonais"],a:0},
  {q:"Combien d'années un whisky doit-il vieillir minimum ?",c:["3 ans pour le Scotch","1 an","5 ans","10 ans"],a:0},
  {q:"Qu'est-ce que le single malt ?",c:["Whisky d'une seule distillerie à base de pur malt d'orge","Whisky en grain","Mélange de whiskies","Whisky haut de gamme"],a:0},
  {q:"Qu'est-ce que le blended whisky ?",c:["Assemblage de whiskies de différentes distilleries","Whisky aromatisé","Whisky allégé","Whisky de luxe"],a:0},
  {q:"Qu'est-ce que la tourbe dans le whisky écossais ?",c:["Combustible utilisé pour sécher le malt, donnant un goût fumé","Type d'orge","Fût spécial","Région écossaise"],a:0},
];
r.alcool_006 = [ // Vodka
  {q:"De quoi est faite la vodka traditionnelle ?",c:["Blé, seigle ou pommes de terre","Raisin","Canne à sucre","Orge"],a:0},
  {q:"Quels pays sont les plus réputés pour la vodka ?",c:["Russie et Pologne","France et Italie","Écosse et Irlande","Japon et Chine"],a:0},
  {q:"Quelle est la teneur en alcool typique de la vodka ?",c:["40% vol.","30% vol.","50% vol.","35% vol."],a:0},
  {q:"Qu'est-ce que la filtration au charbon dans la vodka ?",c:["Procédé qui purifie la vodka et adoucit le goût","Méthode de fermentation","Ajout d'arôme","Distillation"],a:0},
  {q:"Qui a standardisé la vodka à 40° ?",c:["Dmitri Mendeleïev","Pierre le Grand","Léon Tolstoï","Ivan le Terrible"],a:0},
  {q:"Qu'est-ce qu'une vodka premium ?",c:["Vodka haut de gamme distillée plusieurs fois et filtrée","Vodka aromatisée","Vodka importée","Vodka ancienne"],a:0},
  {q:"Quelle est la différence entre vodka et vodka aromatisée ?",c:["La vodka aromatisée contient des arômes ajoutés","La vodka est plus forte","La vodka aromatisée est moins chère","Elles sont identiques"],a:0},
  {q:"Comment boit-on traditionnellement la vodka en Russie ?",c:["Glacée, en un shot, accompagnée de zakouskis","Avec du cola","En cocktail","Toujours à température ambiante"],a:0},
];
r.alcool_007 = [ // Rhum
  {q:"De quoi est fait le rhum ?",c:["De la canne à sucre (jus, mélasse ou sirop)","Du raisin","De l'orge","De la pomme de terre"],a:0},
  {q:"Quels pays sont les plus grands producteurs de rhum ?",c:["Caraïbes (Cuba, Porto Rico, Jamaïque, Barbade)","France, Italie","Brésil, Argentine","États-Unis, Canada"],a:0},
  {q:"Quels sont les principaux types de rhum ?",c:["Rhum blanc, rhum ambré, rhum vieux","Rhum sec, rhum doux","Rhum léger, rhum fort","Rhum agricole, rhum industriel"],a:0},
  {q:"Qu'est-ce que le rhum agricole ?",c:["Rhum produit à partir du pur jus de canne à sucre","Rhum de mélasse","Rhum vieux","Rhum aromatisé"],a:0},
  {q:"Qu'est-ce que le rhum arrangé ?",c:["Rhum dans lequel on fait macérer des fruits ou épices","Rhum mélangé","Cocktail","Rhum sucré"],a:0},
  {q:"Qu'est-ce que le rhum vieux ?",c:["Rhum vieilli en fût de chêne pendant plusieurs années","Rhum foncé","Rhum épicé","Rhum de luxe"],a:0},
  {q:"Qu'est-ce que le Ti'Punch ?",c:["Cocktail antillais traditionnel à base de rhum blanc","Rhum sucré","Rhum épicé","Rhum chaud"],a:0},
  {q:"Qu'est-ce que la mélasse ?",c:["Sous-produit sucré de la fabrication du sucre de canne","Type de canne","Alambic","Ferment"],a:0},
];
r.alcool_008 = [ // Tequila
  {q:"De quoi est faite la tequila ?",c:["De l'agave bleu (agave tequilana)","Du cactus","De la canne à sucre","Du raisin"],a:0},
  {q:"Où est produite la tequila ?",c:["Au Mexique (région de Jalisco)","En Espagne","Au Pérou","Au Texas"],a:0},
  {q:"Quels sont les types de tequila ?",c:["Blanco, Reposado, Añejo, Extra Añejo","Blanche, rouge, rosée","Légère, forte, sucrée","Jeune, vieille, aromatisée"],a:0},
  {q:"Qu'est-ce que la tequila 100% agave ?",c:["Tequila faite uniquement avec du sucre d'agave","Tequila pure","Tequila non diluée","Tequila biologique"],a:0},
  {q:"Qu'est-ce que le mezcal ?",c:["Boisson mexicaine similaire à la tequila mais faite avec différentes espèces d'agave","Tequila fumée","Tequila bon marché","Liqueur"],a:0},
  {q:"Comment se boit traditionnellement la tequila ?",c:["Avec sel et citron (dégustation) ou en cocktail","Avec du cola","Pure et chaude","Avec de la glace"],a:0},
  {q:"Qu'est-ce que le ver dans la bouteille de mezcal ?",c:["Larve ajoutée dans certaines bouteilles de mezcal comme tradition","Larve naturelle","Décoration","Insecte comestible"],a:0},
  {q:"Quelle est la teneur en alcool typique de la tequila ?",c:["38-40% vol.","30-35% vol.","45-50% vol.","35% vol."],a:0},
];
r.alcool_009 = [ // Gin
  {q:"Quel est l'ingrédient principal qui donne son goût au gin ?",c:["Les baies de genièvre","Le genévrier","Le houblon","Les agrumes"],a:0},
  {q:"De quoi est fait le gin ?",c:["Alcool neutre redistillé avec des baies de genièvre et botaniques","Céréales fermentées","Raisin distillé","Canne à sucre"],a:0},
  {q:"Quels pays sont réputés pour le gin ?",c:["Royaume-Uni, Pays-Bas, Espagne, France","Russie, Pologne","Japon, Chine","Italie, Grèce"],a:0},
  {q:"Qu'est-ce que le London Dry Gin ?",c:["Style de gin sans sucre ajouté, traditionnellement anglais","Gin de Londres","Gin bon marché","Gin aromatisé"],a:0},
  {q:"Qu'est-ce que le Gin Tonic ?",c:["Cocktail classique à base de gin et d'eau tonique","Boisson au gin","Mélange gin-bière","Gin avec soda"],a:0},
  {q:"Quelles épices sont souvent utilisées dans le gin ?",c:["Coriandre, cardamome, angélique, écorces d'agrumes","Cannelle, vanille, chocolat","Poivre, sel, paprika","Gingembre, curcuma"],a:0},
  {q:"Qu'est-ce que le genièvre ?",c:["Baie du genévrier, ingrédient obligatoire du gin","Céréale","Fruit tropical","Épice"],a:0},
  {q:"Quel est l'ancêtre du gin moderne ?",c:["Le genièvre hollandais (jenever)","Le whisky","La vodka","Le rhum"],a:0},
];
r.alcool_010 = [ // Champagne
  {q:"Où est produit le champagne ?",c:["Dans la région Champagne (France)","En Bourgogne","En Alsace","En Italie"],a:0},
  {q:"Quels cépages sont utilisés pour le champagne ?",c:["Pinot Noir, Pinot Meunier, Chardonnay","Merlot, Cabernet Sauvignon","Syrah, Grenache","Sauvignon, Sémillon"],a:0},
  {q:"Qu'est-ce que la méthode champenoise ?",c:["Double fermentation en bouteille pour créer les bulles","Fermentation en cuve","Ajout de gaz carbonique","Distillation"],a:0},
  {q:"Qui est considéré comme le père du champagne ?",c:["Dom Pérignon","Louis XIV","Veuve Clicquot","Moët"],a:0},
  {q:"Qu'est-ce que le brut ?",c:["Champagne sec avec peu de sucre ajouté","Champagne sucré","Champagne pétillant","Champagne rosé"],a:0},
  {q:"Combien de bulles y a-t-il dans une bouteille de champagne ?",c:["Environ 50 millions","Environ 1 million","Environ 10 millions","Environ 100 millions"],a:0},
  {q:"Qu'est-ce que le champagne rosé ?",c:["Champagne obtenu par macération ou assemblage de vin rouge","Champagne coloré","Champagne fruité","Champagne léger"],a:0},
  {q:"Qu'est-ce qu'un millésime en champagne ?",c:["Champagne d'une seule année, produit lors des grandes années","Champagne vieux","Champagne rare","Année de production"],a:0},
];
r.alcool_011 = [ // Cocktails
  {q:"Qu'est-ce qu'un cocktail ?",c:["Mélange de boissons alcoolisées et/ou non alcoolisées","Boisson unique","Shot d'alcool","Jus de fruits"],a:0},
  {q:"Quel est le cocktail le plus connu au monde ?",c:["Margarita","Mojito","Martini","Old Fashioned"],a:0},
  {q:"Quels sont les ingrédients d'un Mojito ?",c:["Rhum, menthe, citron, sucre, eau gazeuse","Vodka, jus de cranberry","Gin, tonic","Tequila, citron, sel"],a:0},
  {q:"Qu'est-ce qu'un Martini ?",c:["Cocktail à base de gin et vermouth","Marque de vodka","Apéritif italien","Boisson gazeuse"],a:0},
  {q:"Qu'est-ce qu'une Margarita ?",c:["Cocktail à base de tequila, triple sec et citron","Cocktail à la mangue","Smoothie","Punch"],a:0},
  {q:"Qu'est-ce qu'un cocktail 'sans alcool' ?",c:["Cocktail sans alcool appelé 'mocktail'","Jus de fruits","Boisson gazeuse","Soda"],a:0},
  {q:"Qui a inventé le cocktail moderne ?",c:["Jerry Thomas (XIXe siècle)","Donn Beach","Harry Craddock","Ernest Hemingway"],a:0},
  {q:"Qu'est-ce qu'un shaker dans la confection de cocktails ?",c:["Récipient pour mélanger et refroidir les ingrédients","Verre","Bouteille","Passoire"],a:0},
];
r.alcool_012 = [ // Alcoolémie
  {q:"Qu'est-ce que l'alcoolémie ?",c:["Taux d'alcool dans le sang","Quantité d'alcool dans une boisson","Alcool dans l'haleine","Effet de l'alcool"],a:0},
  {q:"En France, quel est le taux d'alcoolémie maximal autorisé pour conduire ?",c:["0,5 g/L de sang","0,2 g/L","0,8 g/L","1,0 g/L"],a:0},
  {q:"Pour les jeunes conducteurs, quelle est la limite ?",c:["0,2 g/L","0,0 g/L","0,5 g/L","0,3 g/L"],a:0},
  {q:"Combien de temps faut-il pour éliminer un verre d'alcool ?",c:["Environ 1 heure","Environ 30 minutes","Environ 2 heures","Environ 3 heures"],a:0},
  {q:"Qu'est-ce qu'un éthylotest ?",c:["Appareil pour mesurer l'alcoolémie","Verre doseur","Alcoomètre","Breathalyzer"],a:0},
  {q:"Quels facteurs influencent l'alcoolémie ?",c:["Poids, sexe, nourriture, vitesse de consommation","Uniquement le poids","Uniquement le sexe","Uniquement la quantité"],a:0},
  {q:"Qu'est-ce que l'alcoolémie à jeun ?",c:["Taux d'alcool plus élevé car l'absorption est plus rapide","Taux normal","Taux faible","Taux nul"],a:0},
  {q:"Quelle est la peine pour conduite en état d'ivresse en France ?",c:["Amende et suspension de permis, possible prison","Amende uniquement","Avertissement","Retrait de points"],a:0},
];
r.alcool_013 = [ // Gueule de bois
  {q:"Qu'est-ce que la gueule de bois ?",c:["Ensemble de symptômes après une consommation excessive d'alcool","Ivresse","Allergie","Sevrage"],a:0},
  {q:"Quels sont les symptômes de la gueule de bois ?",c:["Maux de tête, nausées, fatigue, déshydratation","Euphorie","Énergie","Faim"],a:0},
  {q:"Quelle est la cause principale de la gueule de bois ?",c:["Déshydratation et accumulation de toxines","Manque de sucre","Allergie","Intoxication alimentaire"],a:0},
  {q:"Existe-t-il un remède miracle contre la gueule de bois ?",c:["Non, seuls le repos et l'hydratation aident","Oui, le café","Oui, l'aspirine","Oui, les boissons énergisantes"],a:0},
  {q:"Quels types d'alcool provoquent les pires gueules de bois ?",c:["Les alcools foncés (whisky, vin rouge, rhum)","La vodka","Le gin","La bière"],a:0},
  {q:"Combien de temps dure une gueule de bois ?",c:["12 à 24 heures","2 à 4 heures","24 à 48 heures","Quelques heures"],a:0},
  {q:"L'alcool déshydrate-t-il le corps ?",c:["Oui, car il inhibe l'hormone antidiurétique","Non","Parfois","Uniquement en grande quantité"],a:0},
  {q:"Peut-on prévenir la gueule de bois ?",c:["En buvant de l'eau entre les verres et en mangeant","Non, impossible","En prenant des médicaments","En buvant du lait"],a:0},
];
r.alcool_014 = [ // Dégustation
  {q:"Quelles sont les étapes de la dégustation du vin ?",c:["Examen visuel, olfactif, gustatif","Boire et apprécier","Sentir et boire","Regarder et boire"],a:0},
  {q:"Qu'est-ce que le 'nez' d'un vin ?",c:["L'odeur et les arômes du vin","La couleur","Le goût","La texture"],a:0},
  {q:"Qu'est-ce que la robe d'un vin ?",c:["L'apparence visuelle et la couleur du vin","L'étiquette","La bouteille","La texture"],a:0},
  {q:"Quels sont les arômes primaires du vin ?",c:["Arômes du raisin (fruits, fleurs)","Arômes du bois","Arômes de vieillissement","Arômes ajoutés"],a:0},
  {q:"Qu'est-ce que la longueur en bouche ?",c:["Persistance des saveurs après avoir avalé","Durée de dégustation","Quantité bue","Ampleur du goût"],a:0},
  {q:"Qu'est-ce qu'une dégustation à l'aveugle ?",c:["Dégustation sans connaître l'identité du vin","Dégustation les yeux fermés","Dégustation sans parler","Dégustation debout"],a:0},
  {q:"Quelle température pour déguster un vin rouge ?",c:["16-18°C","8-10°C","20-22°C","12-14°C"],a:0},
  {q:"Quelle température pour déguster un vin blanc ?",c:["8-12°C","16-18°C","4-6°C","14-16°C"],a:0},
];
r.alcool_015 = [ // Alcool dans le monde
  {q:"Quel pays consomme le plus d'alcool par habitant ?",c:["Biélorussie","France","États-Unis","Japon"],a:0},
  {q:"Quelle est la boisson alcoolisée la plus consommée dans le monde ?",c:["La bière","Le vin","Les spiritueux","Le saké"],a:0},
  {q:"Qu'est-ce que le saké ?",c:["Boisson alcoolisée japonaise à base de riz fermenté","Vin de riz","Alcool distillé","Bière japonaise"],a:0},
  {q:"Qu'est-ce que la chicha ?",c:["Alcool de maïs traditionnel d'Amérique latine","Bière andine","Vin argentin","Spiritueux mexicain"],a:0},
  {q:"Qu'est-ce que le vin de palme ?",c:["Boisson alcoolisée africaine issue de la sève de palmier","Vin fruité","Spiritueux","Bière africaine"],a:0},
  {q:"Dans quels pays la consommation d'alcool est-elle interdite ?",c:["Arabie saoudite, Koweït, Iran, Libye","Chine, Inde","Russie, Japon","Brésil, Argentine"],a:0},
  {q:"Quel pays est le plus grand exportateur de vin ?",c:["Espagne (en volume)","France","Italie","Chili"],a:0},
  {q:"Qu'est-ce que le whisky irlandais ?",c:["Whisky distillé trois fois, plus doux que le Scotch","Whisky parfumé","Whisky sucré","Whisky de luxe"],a:0},
];
r.alcool_016 = [ // Alcool en France
  {q:"Quel est le niveau de consommation d'alcool en France ?",c:["Parmi les plus élevés d'Europe","Moyen","Faible","Très faible"],a:0},
  {q:"Quelle boisson alcoolisée est la plus associée à la France ?",c:["Le vin","La bière","Le champagne","Le cognac"],a:0},
  {q:"Qu'est-ce que l'apéritif (apéro) dans la culture française ?",c:["Moment de convivialité avant le repas avec des boissons","Vin","Cocktail","Digestif"],a:0},
  {q:"Quels sont les principaux vignobles français ?",c:["Bordeaux, Bourgogne, Vallée du Rhône, Alsace, Loire","Paris, Lyon, Marseille","Nord, Est, Ouest","Cognac, Armagnac, Calvados"],a:0},
  {q:"Qu'est-ce qu'un digestif en France ?",c:["Boisson alcoolisée prise après le repas","Vin","Apéritif","Liqueur"],a:0},
  {q:"Combien de litres d'alcool pur un Français consomme-t-il par an en moyenne ?",c:["Environ 10-12 litres","Environ 5 litres","Environ 20 litres","Environ 15 litres"],a:0},
  {q:"Qu'est-ce qu'une cave à vin en France ?",c:["Lieu de stockage et de vieillissement du vin","Magasin de vin","Bar à vin","Caveau"],a:0},
  {q:"Quelle loi française réglemente l'IVresse publique ?",c:["Ivresse publique et manifeste est une contravention","Loi sur l'alcool","Loi de 1905","Arrêté préfectoral"],a:0},
];
r.alcool_017 = [ // Effets de l'alcool
  {q:"Comment l'alcool agit-il sur le cerveau ?",c:["En déprimant le système nerveux central","En le stimulant","En l'activant","En le régulant"],a:0},
  {q:"Quels sont les effets à court terme de l'alcool ?",c:["Désinhibition, euphorie, baisse des réflexes","Concentration","Mémoire améliorée","Vigilance"],a:0},
  {q:"Qu'est-ce que l'ivresse ?",c:["État de perturbation dû à l'alcool","Maladie","Allergie","Intoxication"],a:0},
  {q:"Quels sont les stades de l'ivresse ?",c:["Excitation, désinhibition, confusion, stupeur, coma","Léger, moyen, fort","Débutant, confirmé, avancé","Simple, double, triple"],a:0},
  {q:"Qu'est-ce que le coma éthylique ?",c:["Perte de conscience due à une intoxication alcoolique aiguë","Ivresse","Sommeil profond","Gueule de bois"],a:0},
  {q:"Quels sont les effets de l'alcool sur le sommeil ?",c:["Il perturbe le sommeil profond et la qualité du repos","Il améliore le sommeil","Il n'a pas d'effet","Il augmente la durée du sommeil"],a:0},
  {q:"L'alcool peut-il causer des trous noirs (blackouts) ?",c:["Oui, à forte dose, il peut empêcher la formation de souvenirs","Non, c'est un mythe","Oui, chez tout le monde","Non, seulement chez les alcooliques"],a:0},
  {q:"Qu'est-ce que l'intoxication alcoolique aiguë ?",c:["Surconsommation rapide d'alcool pouvant mettre la vie en danger","Ivresse","Gueule de bois","Consommation modérée"],a:0},
];
r.alcool_018 = [ // Alcool et santé
  {q:"Quels sont les risques de l'alcool sur le foie ?",c:["Stéatose, hépatite alcoolique, cirrhose","Aucun","Cancer uniquement","Calculs biliaires"],a:0},
  {q:"L'alcool est-il classé comme cancérogène ?",c:["Oui, par l'OMS (groupe 1)","Non","Uniquement pour le cancer du foie","Oui, mais faiblement"],a:0},
  {q:"À quels cancers l'alcool est-il lié ?",c:["Cancers de la bouche, gorge, foie, sein, côlon","Uniquement au cancer du foie","Aucun","Uniquement au cancer de l'estomac"],a:0},
  {q:"Qu'est-ce que le syndrome d'alcoolisation fœtale (SAF) ?",c:["Ensemble de malformations chez l'enfant dues à l'alcool pendant la grossesse","Maladie génétique","Trouble alimentaire","Allergie"],a:0},
  {q:"L'alcool est-il bon pour le cœur à petite dose ?",c:["Le débat est controversé, les risques l'emportent","Oui, très bon","Non, toxique même à petite dose","Oui, recommandé"],a:0},
  {q:"Qu'est-ce que la cardiomyopathie alcoolique ?",c:["Maladie du muscle cardiaque due à l'alcool","Infarctus","AVC","Trouble du rythme"],a:0},
  {q:"Combien de maladies sont liées à l'alcool ?",c:["Plus de 200 maladies et troubles","Environ 50","Environ 20","Moins de 10"],a:0},
  {q:"Qu'est-ce que la pancréatite alcoolique ?",c:["Inflammation du pancréas due à la consommation d'alcool","Cancer du pancréas","Diabète","Calculs"],a:0},
];
r.alcool_019 = [ // Conduite en état d'ivresse
  {q:"Combien de personnes meurent chaque année en France dans des accidents liés à l'alcool ?",c:["Plus de 1 000","Plus de 500","Plus de 2 000","Plus de 3 000"],a:0},
  {q:"Quel est le risque d'accident avec 0,5 g/L d'alcoolémie ?",c:["Risque multiplié par 2","Risque multiplié par 1,5","Pas de risque","Risque multiplié par 5"],a:0},
  {q:"À partir de combien de verres le taux d'alcoolémie dépasse-t-il 0,5 g/L ?",c:["2 verres pour une femme, 3 pour un homme","1 verre","3 verres pour une femme, 4 pour un homme","4 verres"],a:0},
  {q:"Quelles sont les sanctions pour alcoolémie entre 0,5 et 0,8 g/L ?",c:["Amende forfaitaire et retrait de 6 points","Prison","Suspension à vie","Avertissement"],a:0},
  {q:"Qu'est-ce qu'un éthylotest anti-démarrage (EAD) ?",c:["Dispositif qui empêche le démarrage si l'alcoolémie est positive","Alcoomètre","Test salivaire","Verrouillage automatique"],a:0},
  {q:"Quel pourcentage des accidents mortels impliquent l'alcool en France ?",c:["Environ 30%","Environ 10%","Environ 50%","Environ 20%"],a:0},
  {q:"Que risque-t-on pour un refus de se soumettre à un dépistage d'alcoolémie ?",c:["Les mêmes peines que pour conduite en état d'ivresse","Amende","Retrait de permis","Rien"],a:0},
  {q:"Quel est le taux d'alcoolémie considéré comme un délit en France ?",c:["Au-dessus de 0,8 g/L","Au-dessus de 0,5 g/L","Au-dessus de 1,0 g/L","Au-dessus de 0,3 g/L"],a:0},
];
r.alcool_020 = [ // Vinification
  {q:"Qu'est-ce que la vinification ?",c:["Processus de transformation du raisin en vin","Mise en bouteille","Dégustation","Culture de la vigne"],a:0},
  {q:"Quelles sont les étapes de la vinification en rouge ?",c:["Foulage, fermentation, macération, élevage","Pressurage, fermentation, élevage","Fermentation, distillation, vieillissement","Récolte, pressurage, filtration"],a:0},
  {q:"Qu'est-ce que la fermentation alcoolique ?",c:["Transformation du sucre en alcool par les levures","Ajout d'alcool","Distillation","Macération"],a:0},
  {q:"Qu'est-ce que la macération en vinification ?",c:["Contact du jus avec les peaux pour extraire couleur et tanins","Fermentation","Pressurage","Filtration"],a:0},
  {q:"Qu'est-ce que l'élevage du vin ?",c:["Vieillissement en cuve ou en fût avant la mise en bouteille","Culture de la vigne","Récolte","Vinification"],a:0},
  {q:"Qu'est-ce qu'une cave de vinification ?",c:["Lieu où le vin est élaboré et élevé","Cave à vin","Chai","Entrepôt"],a:0},
  {q:"Qu'est-ce que les tanins dans le vin ?",c:["Composés naturels qui donnent de la structure et de l'astringence","Arômes","Couleur","Sucre"],a:0},
  {q:"Qu'est-ce qu'un vin nature (sans sulfites ajoutés) ?",c:["Vin produit sans additifs chimiques, notamment sans soufre ajouté","Vin bio","Vin non alcoolisé","Vin artisanal"],a:0},
];
r.alcool_021 = [ // Brassage
  {q:"Qu'est-ce que le brassage de la bière ?",c:["Processus de fabrication de la bière","Fabrication du malt","Mise en bouteille","Filtration"],a:0},
  {q:"Quelles sont les étapes du brassage ?",c:["Empâtage, filtration, ébullition, fermentation, garde","Macération, pressurage, élevage","Récolte, séchage, broyage","Distillation, vieillissement"],a:0},
  {q:"Qu'est-ce que l'empâtage ?",c:["Mélange du malt concassé avec de l'eau chaude pour extraire les sucres","Ajout de houblon","Filtration","Fermentation"],a:0},
  {q:"Qu'est-ce que le malt ?",c:["Orge germée puis séchée pour le brassage","Houblon","Levure","Céréale"],a:0},
  {q:"Qu'est-ce que le moût de bière ?",c:["Liquide sucré extrait du malt avant fermentation","Bière finie","Bière non filtrée","Résidu de brassage"],a:0},
  {q:"À quoi sert l'ébullition du moût ?",c:["Stérilisation et extraction des saveurs du houblon","Refroidissement","Fermentation","Filtration"],a:0},
  {q:"Qu'est-ce que la garde de la bière ?",c:["Période de maturation après fermentation","Stockage","Filtration","Mise en bouteille"],a:0},
  {q:"Qu'est-ce qu'une microbrasserie ?",c:["Petite brasserie artisanale produisant des volumes limités","Grande brasserie","Brasserie industrielle","Bar à bière"],a:0},
];
r.alcool_022 = [ // Distillation
  {q:"Qu'est-ce que la distillation ?",c:["Procédé de séparation de l'alcool par chauffage et condensation","Fermentation","Macération","Filtration"],a:0},
  {q:"Qui a inventé l'alambic ?",c:["Les Arabes au Moyen Âge","Les Grecs antiques","Les Chinois","Les Romains"],a:0},
  {q:"Qu'est-ce qu'un alambic ?",c:["Appareil de distillation composé d'un bouilleur et d'un réfrigérant","Fût","Fermenteur","Cuve"],a:0},
  {q:"Qu'est-ce que la double distillation ?",c:["Distillation effectuée deux fois pour obtenir un alcool plus pur","Deux alambics","Distillation longue","Distillation lente"],a:0},
  {q:"Quels spiritueux sont doublement distillés ?",c:["Cognac, whisky écossais, armagnac","Vodka, gin","Rhum, tequila","Bière, vin"],a:0},
  {q:"Qu'est-ce que le degré d'alcool (% vol) ?",c:["Pourcentage d'alcool pur dans un volume de boisson","Quantité d'alcool","Force de l'alcool","Densité"],a:0},
  {q:"Qu'est-ce que la tête, le cœur et la queue en distillation ?",c:["Fractions du distillat recueillies à différents moments","Parties de l'alambic","Étapes de distillation","Qualités de l'alcool"],a:0},
  {q:"Qu'est-ce que le calvados ?",c:["Eau-de-vie de cidre produite en Normandie","Alcool de vin","Alcool de fruits","Liqueur"],a:0},
];
r.alcool_023 = [ // Alcool et religion
  {q:"Quelle est la position de l'islam sur l'alcool ?",c:["Interdit (haram)","Autorisé avec modération","Autorisé","Uniquement le vin interdit"],a:0},
  {q:"Quelle est la position du christianisme sur l'alcool ?",c:["Généralement autorisé avec modération","Interdit","Uniquement le vin autorisé","Autorisé sans limite"],a:0},
  {q:"Quelle est la position du judaïsme sur l'alcool ?",c:["Autorisé avec modération, le vin a un rôle rituel","Interdit","Uniquement la bière autorisée","Autorisé sans restriction"],a:0},
  {q:"Qu'est-ce que le vin de messe ?",c:["Vin utilisé dans la liturgie chrétienne","Vin bénit","Vin sucré","Vin sans alcool"],a:0},
  {q:"Qu'est-ce que le Kiddouch dans le judaïsme ?",c:["Bénédiction sur le vin lors du Shabbat et des fêtes","Rituel juif","Prière","Chant"],a:0},
  {q:"Dans quelle religion l'alcool est-il totalement prohibé ?",c:["Islam","Christianisme","Judaïsme","Hindouisme"],a:0},
  {q:"Qu'est-ce que la bière sans alcool ?",c:["Bière dont l'alcool a été retiré après fermentation","Jus de malt","Soda","Boisson gazeuse"],a:0},
  {q:"Quels pays musulmans autorisent la production d'alcool ?",c:["Maroc, Tunisie, Liban, Turquie","Arabie saoudite, Koweït","Iran, Yémen","Soudan, Libye"],a:0},
];
r.alcool_024 = [ // Prohibition
  {q:"Qu'est-ce que la prohibition ?",c:["Interdiction légale de la production et vente d'alcool","Régulation de l'alcool","Taxe sur l'alcool","Limitation de l'alcool"],a:0},
  {q:"Quand la prohibition a-t-elle eu lieu aux États-Unis ?",c:["1920-1933","1910-1920","1930-1940","1900-1910"],a:0},
  {q:"Qu'est-ce que le 18e amendement américain ?",c:["Loi qui a instauré la prohibition aux États-Unis","Fin de la prohibition","Droit de vote","Liberté d'expression"],a:0},
  {q:"Qui a aboli la prohibition aux USA ?",c:["Le 21e amendement (1933)","Le président Hoover","Le Congrès","La Cour suprême"],a:0},
  {q:"Quelles ont été les conséquences de la prohibition ?",c:["Marché noir, contrebande, mafia, alambics clandestins","Diminution de la consommation","Santé publique améliorée","Paix sociale"],a:0},
  {q:"Qui était Al Capone ?",c:["Célèbre gangster ayant profité du marché noir de l'alcool","Agent du FBI","Chef de la police","Homme politique"],a:0},
  {q:"Qu'est-ce qu'un speakeasy ?",c:["Bar clandestin pendant la prohibition américaine","Bar légal","Disco","Restaurant"],a:0},
  {q:"Quels pays ont eu une période de prohibition ?",c:["USA, Finlande, Norvège, Islande, Canada (certaines provinces)","France, Italie, Espagne","Allemagne, Autriche","Japon, Chine"],a:0},
];
r.alcool_025 = [ // Modération
  {q:"Qu'est-ce que la consommation modérée d'alcool ?",c:["Pas plus de 2 verres par jour et pas tous les jours","Pas plus de 5 verres par jour","Pas plus d'un verre par semaine","Pas de limite"],a:0},
  {q:"Quelles sont les recommandations françaises pour la consommation d'alcool ?",c:["Maximum 10 verres par semaine, 2 verres par jour","Maximum 3 verres par jour","Pas de limite","1 verre par jour"],a:0},
  {q:"Qu'est-ce qu'un verre standard d'alcool ?",c:["10 grammes d'alcool pur","5 grammes","20 grammes","15 grammes"],a:0},
  {q:"Qu'est-ce qu'une unité d'alcool ?",c:["Mesure standard correspondant à un verre","Litre","Pourcentage","Degré"],a:0},
  {q:"Quels sont les bienfaits possibles d'une consommation modérée ?",c:["Controversés, les risques l'emportent sur les bénéfices","Protection cardiaque","Prévention du cancer","Longévité"],a:0},
  {q:"Qu'est-ce qu'un jour sans alcool ?",c:["Journée sans consommation d'alcool recommandée régulièrement","Jeûne","Régime","Jour d'abstinence"],a:0},
  {q:"Les Français suivent-ils les recommandations de modération ?",c:["Non, une partie importante dépasse les recommandations","Oui, majoritairement","Oui, à 80%","Non, personne"],a:0},
  {q:"Qu'est-ce que le Dry January (Mois sans alcool) ?",c:["Défi d'abstinence d'alcool pendant le mois de janvier","Mois de la modération","Nouvelle année sans alcool","Régime"],a:0},
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
console.log('Done. Batch 4 (sexe, drogues, alcool) written:', Object.keys(r).length, 'themes');
r.sexe_037 = [ // Prostitution
  {q:"Qu'est-ce que la prostitution ?",c:["Échange d'actes sexuels contre de l'argent ou des biens","Harcèlement sexuel","Liberté sexuelle","Commerce"],a:0},
  {q:"La prostitution est-elle légale en France ?",c:["L'acte est légal, mais le proxénétisme est interdit","Totalement illégale","Totalement légale","Uniquement dans les maisons closes"],a:0},
  {q:"Qu'est-ce que le proxénétisme ?",c:["Le fait de tirer profit de la prostitution d'autrui","Client de la prostitution","Prostitué","Métier"],a:0},
  {q:"En quelle année la loi française a-t-elle pénalisé les clients ?",c:["2016","2010","2000","2018"],a:0},
  {q:"Combien de personnes se prostituent en France ?",c:["Environ 30 000 à 40 000","Environ 10 000","Environ 100 000","Environ 200 000"],a:0},
  {q:"Qu'est-ce que l'exploitation sexuelle ?",c:["Prostitution forcée ou subie sous contrainte","Prostitution choisie","Travail du sexe","Métier"],a:0},
  {q:"Quel est le lien entre prostitution et trafic d'êtres humains ?",c:["Beaucoup de prostituées sont victimes de trafic","Aucun lien","Très faible","Lien uniquement à l'étranger"],a:0},
  {q:"Quelles sont les conséquences de la prostitution sur la santé ?",c:["IST, traumatismes, dépendances","Aucune conséquence","Conséquences positives","Problèmes uniquement physiques"],a:0},
];
const fs = require('fs');
const content = fs.readFileSync(__dirname + '/ttcq.js', 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const themes = JSON.parse(content.substring(start, end + 1));
const r = {};

r.sexe_037 = [ // Prostitution
  {q:"Qu'est-ce que la prostitution ?",c:["Échange d'actes sexuels contre de l'argent ou des biens","Harcèlement sexuel","Liberté sexuelle","Commerce"],a:0},
  {q:"La prostitution est-elle légale en France ?",c:["L'acte est légal, mais le proxénétisme est interdit","Totalement illégale","Totalement légale","Uniquement dans les maisons closes"],a:0},
  {q:"Qu'est-ce que le proxénétisme ?",c:["Le fait de tirer profit de la prostitution d'autrui","Client de la prostitution","Prostitué","Métier"],a:0},
  {q:"En quelle année la loi française a-t-elle pénalisé les clients ?",c:["2016","2010","2000","2018"],a:0},
  {q:"Combien de personnes se prostituent en France ?",c:["Environ 30 000 à 40 000","Environ 10 000","Environ 100 000","Environ 200 000"],a:0},
  {q:"Qu'est-ce que l'exploitation sexuelle ?",c:["Prostitution forcée ou subie sous contrainte","Prostitution choisie","Travail du sexe","Métier"],a:0},
  {q:"Quel est le lien entre prostitution et trafic d'êtres humains ?",c:["Beaucoup de prostituées sont victimes de trafic","Aucun lien","Très faible","Lien uniquement à l'étranger"],a:0},
  {q:"Quelles sont les conséquences de la prostitution sur la santé ?",c:["IST, traumatismes, dépendances","Aucune conséquence","Conséquences positives","Problèmes uniquement physiques"],a:0},
];
r.sexe_038 = [ // Consentement
  {q:"Qu'est-ce que le consentement ?",c:["Accord libre et éclairé à un acte sexuel","Absence de refus","Autorisation","Simple politesse"],a:0},
  {q:"Le consentement peut-il être donné sous l'emprise de l'alcool ?",c:["Non, le consentement doit être libre et lucide","Oui, tant qu'il n'y a pas de violence","Oui, l'alcool n'a pas d'importance","Oui, si la personne est consciente"],a:0},
  {q:"Le consentement est-il réversible ?",c:["Oui, il peut être retiré à tout moment","Non, une fois donné il est définitif","Parfois","Non, cela n'existe pas"],a:0},
  {q:"Peut-on présumer du consentement ?",c:["Non, il doit être exprimé clairement","Oui, par défaut","Oui, dans un couple","Oui, après un premier rendez-vous"],a:0},
  {q:"Qu'est-ce que l'âge du consentement en France ?",c:["15 ans","16 ans","18 ans","14 ans"],a:0},
  {q:"Le silence peut-il être considéré comme un consentement ?",c:["Non, le consentement doit être explicite","Oui","Oui, parfois","Oui, dans le couple"],a:0},
  {q:"Qu'est-ce que le consentement explicite ?",c:["Un accord verbal ou gestuel clair","Un accord supposé","Une absence de refus","Une signature"],a:0},
  {q:"Différence entre consentement et soumission ?",c:["Le consentement est libre, la soumission est contrainte","Aucune différence","C'est la même chose","La soumission est volontaire"],a:0},
];
r.sexe_039 = [ // Harcèlement sexuel
  {q:"Qu'est-ce que le harcèlement sexuel ?",c:["Comportements à connotation sexuelle imposés de façon répétée","Compliment","Drague","Relation consentie"],a:0},
  {q:"Quels sont les éléments constitutifs du harcèlement sexuel ?",c:["Répétition et caractère non désiré","Un seul acte","Consentement","Intention humoristique"],a:0},
  {q:"Le harcèlement sexuel est-il un délit pénal en France ?",c:["Oui, puni par la loi","Non, ce n'est pas un délit","Uniquement dans le privé","Uniquement au travail"],a:0},
  {q:"Quelle est la peine maximale pour harcèlement sexuel en France ?",c:["3 ans d'emprisonnement et 45 000 euros d'amende","1 an","5 ans","6 mois"],a:0},
  {q:"Où peut avoir lieu le harcèlement sexuel ?",c:["Au travail, dans les transports, à l'école, en ligne","Uniquement au travail","Uniquement dans les lieux publics","Uniquement en ligne"],a:0},
  {q:"Qu'est-ce que le harcèlement de rue ?",c:["Comportements sexistes dans l'espace public","Compliment","Discussion","Rencontre"],a:0},
  {q:"Comment réagir face au harcèlement sexuel ?",c:["Signaler, porter plainte, témoigner","Ne rien faire","Accepter","Ignorer"],a:0},
  {q:"Qu'est-ce que la loi sur le harcèlement sexuel en France ?",c:["Loi qui définit et punit le harcèlement sexuel","Loi sur l'égalité","Loi sur le travail","Loi sur l'éducation"],a:0},
];
r.sexe_040 = [ // Viol
  {q:"Qu'est-ce que le viol ?",c:["Acte sexuel imposé sans consentement","Rapport non désiré","Relation forcée","Tous ces éléments"],a:3},
  {q:"Comment la loi française définit-elle le viol ?",c:["Tout acte de pénétration sexuelle imposé par violence ou contrainte","Rapport non consenti","Baiser forcé","Attouchement"],a:0},
  {q:"Quelle est la peine maximale pour viol en France ?",c:["15 ans de réclusion criminelle","5 ans","10 ans","20 ans"],a:0},
  {q:"Qui peut être victime de viol ?",c:["Toute personne, quel que soit son âge, sexe ou genre","Uniquement les femmes","Uniquement les enfants","Uniquement les hommes"],a:0},
  {q:"Que faire en cas de viol ?",c:["Appeler les urgences, ne pas se laver, porter plainte","Prendre une douche","Dormir","Oublier"],a:0},
  {q:"Qu'est-ce que la prescription pour viol en France ?",c:["20 ans après la majorité de la victime","10 ans","5 ans","30 ans"],a:0},
  {q:"Quel est le pourcentage de plaintes pour viol classées sans suite ?",c:["Environ 80%","Environ 50%","Environ 30%","Environ 10%"],a:0},
  {q:"Qu'est-ce qu'une agression sexuelle ?",c:["Atteinte sexuelle sans pénétration","Viol","Harcèlement","Inceste"],a:0},
];
r.sexe_041 = [ // Éducation sexuelle
  {q:"Qu'est-ce que l'éducation à la sexualité ?",c:["Apprentissage sur le corps, les relations et la vie affective","Apprentissage des techniques sexuelles","Cours de biologie","Information médicale"],a:0},
  {q:"Depuis quand l'éducation sexuelle est-elle obligatoire à l'école en France ?",c:["Depuis 2001 (loi relative à la régulation des naissances)","Depuis 1970","Depuis 1990","Depuis 2010"],a:0},
  {q:"Combien de séances d'éducation sexuelle sont prévues par an ?",c:["Au moins 3 séances","1 séance","5 séances","Aucune"],a:0},
  {q:"À quel âge commence l'éducation sexuelle à l'école ?",c:["À l'école primaire (cycle 3)","Au lycée","Au collège","À la maternelle"],a:0},
  {q:"Quels sujets sont abordés dans l'éducation sexuelle ?",c:["Consentement, contraception, IST, relations","Uniquement la biologie","Uniquement la contraception","Uniquement les IST"],a:0},
  {q:"Qui dispense les séances d'éducation sexuelle ?",c:["Enseignants et intervenants extérieurs spécialisés","Uniquement les médecins","Uniquement les parents","Uniquement les infirmières"],a:0},
  {q:"L'éducation sexuelle réduit-elle les grossesses précoces ?",c:["Oui, c'est démontré","Non, aucun effet","Non, elle les augmente","Effet variable"],a:0},
  {q:"Quel pays a l'un des meilleurs programmes d'éducation sexuelle ?",c:["Pays-Bas","États-Unis","France","Japon"],a:0},
];
r.sexe_042 = [ // Mutilations génitales
  {q:"Qu'est-ce que la mutilation génitale féminine (MGF) ?",c:["Ablation partielle ou totale des organes génitaux externes","Opération esthétique","Circoncision","Rituel"],a:0},
  {q:"Combien de femmes ont subi des MGF dans le monde ?",c:["Plus de 200 millions","Environ 50 millions","Environ 100 millions","Environ 1 milliard"],a:0},
  {q:"Dans quelles régions les MGF sont-elles pratiquées ?",c:["Afrique subsaharienne, Moyen-Orient, Asie","Uniquement en Afrique","Partout dans le monde","Uniquement au Moyen-Orient"],a:0},
  {q:"Les MGF sont-elles illégales en France ?",c:["Oui, interdites et sévèrement punies","Non, autorisées","Uniquement pour les mineures","Autorisées avec consentement"],a:0},
  {q:"Quelles sont les conséquences des MGF sur la santé ?",c:["Douleur, infections, complications obstétricales","Aucunes","Bénéfiques pour la santé","Esthétiques"],a:0},
  {q:"Pourquoi les MGF sont-elles pratiquées ?",c:["Traditions culturelles et croyances religieuses","Raisons médicales","Hygiène","Esthétique"],a:0},
  {q:"Qu'est-ce que l'excision ?",c:["Ablation du clitoris et parfois des petites lèvres","Circoncision","Opération chirurgicale","Rituel religieux"],a:0},
  {q:"Quelle organisation lutte contre les MGF ?",c:["UNICEF, OMS, ONU","Amnesty International","Croix-Rouge","Toutes ces organisations"],a:3},
];
r.sexe_043 = [ // Planning familial
  {q:"Qu'est-ce que le Planning familial ?",c:["Association qui informe sur la contraception et la sexualité","Méthode de planning","Calendrier","Structure médicale"],a:0},
  {q:"En quelle année le Planning familial a-t-il été créé en France ?",c:["1956","1970","1960","1980"],a:0},
  {q:"Quels services propose le Planning familial ?",c:["Consultations contraceptives, IST, IVG, informations","Uniquement la contraception","Uniquement les tests IST","Uniquement les informations"],a:0},
  {q:"Les consultations au Planning familial sont-elles gratuites ?",c:["Oui, et anonymes pour les mineurs","Non, payantes","Uniquement pour les adultes","Uniquement pour les étudiants"],a:0},
  {q:"Qui peut consulter le Planning familial ?",c:["Toute personne, sans condition","Uniquement les femmes","Uniquement les jeunes","Uniquement les couples"],a:0},
  {q:"Qu'est-ce que l'IVG au Planning familial ?",c:["Interruption Volontaire de Grossesse","Contraception","Examen","Information"],a:0},
  {q:"Depuis quand la contraception est-elle autorisée en France ?",c:["1967 (loi Neuwirth)","1970","1960","1975"],a:0},
  {q:"Depuis quand l'IVG est-elle légale en France ?",c:["1975 (loi Veil)","1980","1970","1967"],a:0},
];
r.sexe_044 = [ // Transition de genre
  {q:"Qu'est-ce que la transition de genre ?",c:["Processus pour aligner son apparence et son identité de genre","Opération chirurgicale","Traitement hormonal","Changement de nom"],a:0},
  {q:"Qu'est-ce qu'une personne transgenre ?",c:["Personne dont l'identité de genre diffère du sexe assigné","Homosexuel","Personne qui change de sexe","Travesti"],a:0},
  {q:"Qu'est-ce que le parcours de transition médicale ?",c:["Suivi par des spécialistes avec traitements possibles","Opération unique","Traitement obligatoire","Simple changement administratif"],a:0},
  {q:"Quels traitements peuvent être suivis lors d'une transition ?",c:["Hormones et/ou chirurgies","Uniquement la chirurgie","Uniquement les hormones","Aucun traitement"],a:0},
  {q:"Depuis quand le changement de sexe à l'état civil est-il possible en France ?",c:["Depuis 2016 (loi de modernisation de la justice)","Depuis 2000","Depuis 2010","Depuis 2020"],a:0},
  {q:"Qu'est-ce que la dysphorie de genre ?",c:["Malaise lié à la discordance entre identité de genre et sexe assigné","Maladie mentale","Simple insatisfaction","Préférence personnelle"],a:0},
  {q:"La transidentité est-elle une maladie mentale ?",c:["Non, l'OMS ne la considère plus comme telle","Oui, depuis 2018","Oui, c'est un trouble","Non, mais autrefois"],a:0},
  {q:"Qu'est-ce que le coming out trans ?",c:["Révélation de son identité de genre à son entourage","Sortir d'une boîte","Changement de nom","Transition médicale"],a:0},
];
r.sexe_045 = [ // Identité de genre
  {q:"Qu'est-ce que l'identité de genre ?",c:["Sentiment intime et personnel d'appartenir à un genre","Sexe biologique","Orientation sexuelle","Rôle social"],a:0},
  {q:"Quelle est la différence entre sexe et genre ?",c:["Le sexe est biologique, le genre est social et identitaire","Identiques","Le genre est biologique","Le sexe est social"],a:0},
  {q:"Qu'est-ce que la cisidentité ?",c:["Personne dont l'identité de genre correspond au sexe assigné","Personne trans","Personne non-binaire","Homosexuel"],a:0},
  {q:"Qu'est-ce qu'une personne non-binaire ?",c:["Personne qui ne se reconnaît pas dans la binarité homme/femme","Personne trans","Personne cis","Personne androgyne"],a:0},
  {q:"L'identité de genre est-elle liée à l'orientation sexuelle ?",c:["Non, ce sont des concepts distincts","Oui, directement liés","Parfois","Uniquement chez les trans"],a:0},
  {q:"Qu'est-ce que l'expression de genre ?",c:["Façon dont une personne exprime son genre (vêtements, comportement)","Identité de genre","Sexe biologique","Orientation"],a:0},
  {q:"Quels sont les pronoms utilisés pour les personnes non-binaires ?",c:["Iel, al, ol (ou autres selon la personne)","Il ou elle uniquement","Aucun pronom","Uniquement le prénom"],a:0},
  {q:"L'identité de genre est-elle choisie ?",c:["Non, elle est ressentie et personnelle","Oui, on la choisit","Oui, comme un vêtement","Parfois"],a:0},
];
r.sexe_046 = [ // Transsexualisme
  {q:"Qu'est-ce que le transsexualisme (transidentité) ?",c:["Identité de genre différente du sexe assigné à la naissance","Attirance pour le même sexe","Maladie","Choix de vie"],a:0},
  {q:"Quel est le terme médical utilisé dans les classifications internationales ?",c:["Dysphorie de genre","Transsexualisme","Transidentité","Trouble de l'identité de genre"],a:0},
  {q:"À quel âge une personne peut-elle ressentir une dysphorie de genre ?",c:["Dès l'enfance","Uniquement à l'adolescence","Uniquement à l'âge adulte","Après 30 ans"],a:0},
  {q:"Quels sont les traitements possibles pour la dysphorie de genre ?",c:["THS, chirurgies, accompagnement psychologique","Uniquement la chirurgie","Aucun traitement","Uniquement les hormones"],a:0},
  {q:"Qu'est-ce que le traitement hormonal substitutif (THS) dans la transition ?",c:["Hormones pour développer les caractères du genre souhaité","Traitement contre la dépression","Antibiotiques","Médicaments"],a:0},
  {q:"Qu'est-ce que la chirurgie de réassignation sexuelle ?",c:["Opérations chirurgicales pour modifier les caractéristiques sexuelles","Chirurgie esthétique","Lipoaspiration","Chirurgie mammaire"],a:0},
  {q:"Depuis quand la France rembourse-t-elle les opérations de changement de sexe ?",c:["Depuis les années 2000 (ALD)","Depuis 1990","Depuis 2010","Jamais"],a:0},
  {q:"La transidentité est-elle reconnue comme une affection de longue durée (ALD) ?",c:["Oui, dans certains cas","Non, jamais","Uniquement pour les opérations","Oui, systématiquement"],a:0},
];
r.sexe_047 = [ // Homoparentalité
  {q:"Qu'est-ce que l'homoparentalité ?",c:["Parents de même sexe qui élèvent des enfants","Parent isolé","Famille nombreuse","Adoption"],a:0},
  {q:"Qu'est-ce que la PMA pour les couples de femmes en France ?",c:["Procréation Médicalement Assistée pour couples lesbiens","Adoption","FIV","Gestation pour autrui"],a:0},
  {q:"Depuis quand la PMA est-elle ouverte à toutes les femmes en France ?",c:["2021 (loi bioéthique)","2013","2015","2023"],a:0},
  {q:"Qu'est-ce que l'adoption homoparentale ?",c:["Adoption d'un enfant par un couple de même sexe","Adoption simple","Adoption plénière","Famille d'accueil"],a:0},
  {q:"Qu'est-ce que l'adoption de l'enfant du conjoint ?",c:["Adoption de l'enfant du partenaire par le beau-parent","Adoption simple","Adoption internationale","Adoption plénière"],a:0},
  {q:"Combien d'enfants vivent dans une famille homoparentale en France ?",c:["Environ 200 000 à 300 000","Environ 50 000","Environ 500 000","Environ 1 million"],a:0},
  {q:"Comment les enfants de familles homoparentales se développent-ils ?",c:["Aussi bien que les autres enfants","Moins bien","Mieux","Cela dépend de l'orientation des parents"],a:0},
  {q:"Quelle est la différence entre homoparentalité et parent seul ?",c:["Homoparentalité = couple de même sexe, parent seul = célibataire","C'est la même chose","Homoparentalité = couple hétéro","Parent seul = couple homosexuel"],a:0},
];
r.sexe_048 = [ // PMA
  {q:"Que signifie PMA ?",c:["Procréation Médicalement Assistée","Paternité et Maternité Assistée","Préparation Médicale à l'Accouchement","Prémédication Assistée"],a:0},
  {q:"Quelles techniques inclut la PMA ?",c:["Insémination, FIV, ICSI","Uniquement la FIV","Uniquement l'insémination","La chirurgie"],a:0},
  {q:"À qui s'adresse la PMA en France ?",c:["Couples hétérosexuels, couples de femmes et femmes seules","Uniquement couples hétéros","Uniquement couples de femmes","Uniquement couples mariés"],a:0},
  {q:"Qu'est-ce que l'insémination artificielle (IAC) ?",c:["Dépôt de sperme directement dans l'utérus","Fécondation in vitro","Injection de spermatozoïdes","Transfert d'embryon"],a:0},
  {q:"Quel est l'âge limite pour la PMA en France ?",c:["43 ans pour la femme","45 ans","40 ans","50 ans"],a:0},
  {q:"Combien de tentatives de PMA sont remboursées en France ?",c:["6 inséminations et 4 FIV","4 inséminations et 2 FIV","8 inséminations et 6 FIV","Tentatives illimitées"],a:0},
  {q:"Qu'est-ce que la conservation des ovocytes ?",c:["Congélation des ovules pour préserver la fertilité","Fécondation","Conservation du sperme","Stockage d'embryons"],a:0},
  {q:"Depuis quand les femmes peuvent-elles conserver leurs ovocytes sans raison médicale en France ?",c:["Depuis 2021","Depuis 2010","Depuis 2015","Ce n'est pas autorisé"],a:0},
];
r.sexe_049 = [ // GPA
  {q:"Que signifie GPA ?",c:["Gestation Pour Autrui (mère porteuse)","Grossesse à Procréation Assistée","Gynécologie et Procréation Assistée","Grossesse Pour Autrui"],a:0},
  {q:"La GPA est-elle autorisée en France ?",c:["Non, interdite en France","Oui, autorisée","Autorisée sous conditions","Uniquement pour les couples hétéros"],a:0},
  {q:"Pourquoi la GPA est-elle interdite en France ?",c:["Pour des raisons éthiques et juridiques","Pour des raisons médicales","Pour des raisons économiques","Pour des raisons religieuses"],a:0},
  {q:"Dans quels pays la GPA est-elle autorisée ?",c:["Canada, Royaume-Uni, Belgique, Grèce, USA (certains états)","Partout dans le monde","Uniquement aux USA","Uniquement en Europe"],a:0},
  {q:"Qu'est-ce que la GPA ?",c:["Une femme porte un enfant pour un couple ou une personne","Adoption","FIV","Insémination"],a:0},
  {q:"Comment les parents d'intention récupèrent-ils la filiation ?",c:["Par procédure judiciaire dans leur pays","Automatiquement","Par contrat","Par déclaration"],a:0},
  {q:"Quels sont les principaux débats éthiques autour de la GPA ?",c:["Marchandisation du corps, exploitation, filiation","Religieux","Médicaux","Économiques"],a:0},
  {q:"La GPA est-elle autorisée en Belgique ?",c:["Oui, mais non encadrée légalement","Non","Oui, strictement encadrée","Oui, payante"],a:0},
];
r.sexe_050 = [ // Accouchement sous X
  {q:"Qu'est-ce que l'accouchement sous X ?",c:["Accouchement dans l'anonymat à l'hôpital","Césarienne","Accouchement à domicile","Accouchement sans douleur"],a:0},
  {q:"Depuis quand l'accouchement sous X existe-t-il en France ?",c:["Depuis 1941 (loi de 1941)","Depuis 1970","Depuis 1900","Depuis 1960"],a:0},
  {q:"Quel est le but de l'accouchement sous X ?",c:["Éviter les abandons dangereux et les infanticides","Cacher la naissance","Simplifier l'adoption","Éviter les frais"],a:0},
  {q:"La mère a-t-elle accès à un suivi médical ?",c:["Oui, elle bénéficie des mêmes soins","Non, aucun","Uniquement un suivi minimal","Oui, mais payant"],a:0},
  {q:"L'enfant né sous X peut-il retrouver ses origines ?",c:["Oui, à sa majorité via le CNAOP","Non, jamais","Oui, à 16 ans","Oui, immédiatement"],a:0},
  {q:"Qu'est-ce que le CNAOP ?",c:["Conseil National pour l'Accès aux Origines Personnelles","Centre d'adoption","Hôpital","Organisme de suivi"],a:0},
  {q:"Combien d'accouchements sous X par an en France ?",c:["Environ 600 à 700","Environ 100","Environ 2 000","Environ 5 000"],a:0},
  {q:"La mère peut-elle revenir sur sa décision ?",c:["Oui, pendant 2 mois après la naissance","Non, c'est définitif","Oui, jusqu'à la majorité de l'enfant","Oui, pendant 1 an"],a:0},
];
