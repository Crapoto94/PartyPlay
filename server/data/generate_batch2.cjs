const fs = require('fs');

const content = fs.readFileSync(__dirname + '/ttcq.js', 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const themes = JSON.parse(content.substring(start, end + 1));

const r = {};

// ---------- MUSIQUE (22 themes) ----------
const MUSIQUE = {
  musique_001: [ // Le Rock
    {q:"Quel groupe a sorti 'Bohemian Rhapsody' ?",c:["Queen","Led Zeppelin","Pink Floyd","The Beatles"],a:0},
    {q:"Qui est surnommé 'The King of Rock and Roll' ?",c:["Elvis Presley","Chuck Berry","Little Richard","Buddy Holly"],a:0},
    {q:"Quel guitariste est considéré comme l'un des meilleurs de l'histoire ?",c:["Jimi Hendrix","Eric Clapton","Jimmy Page","Eddie Van Halen"],a:0},
    {q:"Quel groupe britannique a sorti 'Stairway to Heaven' ?",c:["Led Zeppelin","Deep Purple","Black Sabbath","The Who"],a:0},
    {q:"En quelle année le rock 'n' roll a-t-il émergé ?",c:["Années 1950","Années 1940","Années 1960","Années 1930"],a:0},
    {q:"Quel festival emblématique de 1969 a marqué l'histoire du rock ?",c:["Woodstock","Altamont","Monterey","Glastonbury"],a:0},
    {q:"Quel album des Pink Floyd est l'un des plus vendus au monde ?",c:["The Dark Side of the Moon","The Wall","Wish You Were Here","Animals"],a:0},
  ],
  musique_002: [ // Le Jazz
    {q:"Quel trompettiste est une légende du jazz ?",c:["Louis Armstrong","Miles Davis","Dizzy Gillespie","Chet Baker"],a:0},
    {q:"Quelle ville est considérée comme le berceau du jazz ?",c:["Nouvelle-Orléans","Chicago","New York","La Nouvelle-Orléans"],a:3},
    {q:"Quel saxophoniste de jazz a enregistré 'Giant Steps' ?",c:["John Coltrane","Charlie Parker","Sonny Rollins","Dexter Gordon"],a:0},
    {q:"Quel style de jazz se caractérise par des tempos rapides ?",c:["Le bebop","Le swing","Le cool jazz","Le free jazz"],a:0},
    {q:"Qui a composé 'Take Five' ?",c:["Dave Brubeck","Miles Davis","John Coltrane","Thelonious Monk"],a:0},
    {q:"Quel pianiste de jazz a une technique unique et un style angulaire ?",c:["Thelonious Monk","Herbie Hancock","Bill Evans","Oscar Peterson"],a:0},
    {q:"Quelle chanteuse de jazz est surnommée 'Lady Day' ?",c:["Billie Holiday","Ella Fitzgerald","Sarah Vaughan","Nina Simone"],a:0},
  ],
  musique_003: [ // Le Rap
    {q:"Quel artiste rap a sorti l'album 'The Chronic' ?",c:["Dr. Dre","Snoop Dogg","Tupac","Notorious BIG"],a:0},
    {q:"Quel groupe de rap new-yorkais a sorti 'Illmatic' ?",c:["Nas","The Wu-Tang Clan","A Tribe Called Quest","De La Soul"],a:0},
    {q:"Qui est considéré comme le père du rap français ?",c:["MC Solaar","IAM","NTM","Suprême NTM"],a:1},
    {q:"En quelle année le rap a-t-il émergé dans le Bronx ?",c:["Années 1970","Années 1980","Années 1960","Années 1990"],a:0},
    {q:"Quel rappeur français a vendu le plus d'albums ?",c:["MC Solaar","NTM","IAM","Booba"],a:0},
    {q:"Quel battle de rap est célèbre entre Tupac et Biggie ?",c:["La côte Est contre la côte Ouest","La battle du siècle","Le clash des rois","La guerre du rap"],a:0},
    {q:"Quel album de Kendrick Lamar a gagné le Pulitzer ?",c:["DAMN.","To Pimp a Butterfly","good kid, mAAd city","Mr. Morale"],a:0},
  ],
  musique_004: [ // La Pop
    {q:"Quel artiste est surnommé 'The King of Pop' ?",c:["Michael Jackson","Prince","Elvis Presley","Madonna"],a:0},
    {q:"Quelle chanteuse pop a sorti l'album '1989' ?",c:["Taylor Swift","Katy Perry","Lady Gaga","Rihanna"],a:0},
    {q:"Quel groupe pop britannique est le plus vendu de l'histoire ?",c:["The Beatles","Spice Girls","Queen","ABBA"],a:0},
    {q:"Quel tube de 2015 de Mark Ronson met en vedette Bruno Mars ?",c:["Uptown Funk","Shake It Off","Happy","Get Lucky"],a:0},
    {q:"Combien d'albums Michael Jackson a-t-il vendus ?",c:["Plus de 350 millions","Plus de 200 millions","Plus de 500 millions","Plus de 100 millions"],a:0},
    {q:"Quelle chanteuse pop a remporté le plus de Grammy Awards ?",c:["Beyoncé","Taylor Swift","Lady Gaga","Madonna"],a:0},
    {q:"Quel album de 1982 de Michael Jackson est le plus vendu de tous les temps ?",c:["Thriller","Bad","Dangerous","Off the Wall"],a:0},
  ],
  musique_005: [ // Le Classique
    {q:"Quel compositeur a écrit la 'Neuvième Symphonie' ?",c:["Beethoven","Mozart","Bach","Brahms"],a:0},
    {q:"Quel compositeur autrichien est connu pour ses sonates et symphonies ?",c:["Mozart","Haydn","Schubert","Bruckner"],a:0},
    {q:"Quel instrument est emblématique de la musique baroque ?",c:["Le clavecin","Le violon","La flûte","L'orgue"],a:0},
    {q:"Quel compositeur russe a composé 'Casse-Noisette' ?",c:["Tchaïkovski","Stravinsky","Rachmaninov","Prokofiev"],a:0},
    {q:"En quelle période a vécu Beethoven ?",c:["Classique et romantique","Baroque","Renaissance","Médiévale"],a:0},
    {q:"Quel opéra de Mozart est l'un des plus joués ?",c:["Les Noces de Figaro","La Flûte enchantée","Don Giovanni","Così fan tutte"],a:1},
    {q:"Quel compositeur allemand a écrit 'L'Art de la fugue' ?",c:["Jean-Sébastien Bach","Georg Friedrich Haendel","Claudio Monteverdi","Antonio Vivaldi"],a:0},
  ],
  musique_006: [ // Le Blues
    {q:"Quel guitariste de blues est surnommé 'King of the Blues' ?",c:["B.B. King","Muddy Waters","Robert Johnson","John Lee Hooker"],a:0},
    {q:"Quelle est la structure typique d'un blues en 12 mesures ?",c:["12 mesures","8 mesures","16 mesures","24 mesures"],a:0},
    {q:"Quel bluesman a vendu son âme au diable selon la légende ?",c:["Robert Johnson","Son House","Skip James","Charley Patton"],a:0},
    {q:"Quelle région des États-Unis est le berceau du blues ?",c:["Le delta du Mississippi","La Nouvelle-Orléans","Chicago","Le Texas"],a:0},
    {q:"Quel chanteur de blues a enregistré 'I'm Your Hoochie Coochie Man' ?",c:["Muddy Waters","Howlin' Wolf","Willie Dixon","Albert King"],a:0},
    {q:"Quel guitariste français est un virtuose du blues ?",c:["Paul Personne","Jean-Jacques Milteau","Bill Deraime","Mike Lécuyer"],a:0},
    {q:"Quel blues a influencé directement le rock 'n' roll ?",c:["Le rhythm and blues","Le delta blues","Le blues rural","Le blues électrique"],a:0},
  ],
  musique_007: [ // Le Reggae
    {q:"Quel artiste reggae est une icône mondiale ?",c:["Bob Marley","Peter Tosh","Jimmy Cliff","Toots Hibbert"],a:0},
    {q:"De quel pays vient le reggae ?",c:["Jamaïque","Cuba","Trinidad","Brésil"],a:0},
    {q:"Quel est le rythme caractéristique du reggae ?",c:["Le contretemps","Le temps fort","La syncope","Le shuffle"],a:0},
    {q:"Quel est le titre le plus connu de Bob Marley ?",c:["No Woman No Cry","One Love","Redemption Song","Buffalo Soldier"],a:0},
    {q:"En quelle année Bob Marley est-il mort ?",c:["1981","1977","1985","1990"],a:0},
    {q:"Quel mouvement spirituel est associé au reggae jamaïcain ?",c:["Le rastafarisme","Le vaudou","Le santeria","Le candomblé"],a:0},
    {q:"Quel album de Bob Marley est le plus vendu ?",c:["Legend","Exodus","Catch a Fire","Rastaman Vibration"],a:0},
  ],
  musique_008: [ // La Soul
    {q:"Quel chanteur soul est surnommé 'The Godfather of Soul' ?",c:["James Brown","Aretha Franklin","Ray Charles","Otis Redding"],a:0},
    {q:"Quelle chanteuse soul est surnommée 'The Queen of Soul' ?",c:["Aretha Franklin","Etta James","Tina Turner","Diana Ross"],a:0},
    {q:"Quel label discographique était le plus important pour la soul ?",c:["Motown","Stax Records","Atlantic Records","Chess Records"],a:0},
    {q:"Quel est le titre phare d'Aretha Franklin ?",c:["Respect","Think","Chain of Fools","I Say a Little Prayer"],a:0},
    {q:"Quel chanteur a enregistré '(Sittin' On) The Dock of the Bay' ?",c:["Otis Redding","Sam Cooke","Wilson Pickett","Percy Sledge"],a:0},
    {q:"En quelle année le label Motown a-t-il été fondé ?",c:["1959","1955","1963","1950"],a:0},
    {q:"Quelle chanteuse soul a connu un succès avec 'Proud Mary' ?",c:["Tina Turner","Aretha Franklin","Gladys Knight","Diana Ross"],a:0},
  ],
  musique_009: [ // Le Metal
    {q:"Quel groupe est considéré comme le pionnier du heavy metal ?",c:["Black Sabbath","Led Zeppelin","Deep Purple","Iron Maiden"],a:0},
    {q:"Quel guitariste de metal est surnommé 'Metal God' ?",c:["Dave Mustaine","James Hetfield","Tony Iommi","Jimi Hendrix"],a:0},
    {q:"Quel groupe est connu pour son masque et son show scénique ?",c:["Slipknot","KISS","Marilyn Manson","Ghost"],a:1},
    {q:"Quel genre de metal se caractérise par des voix gutturales ?",c:["Death metal","Heavy metal","Power metal","Speed metal"],a:0},
    {q:"Quel festival allemand est le plus grand festival de metal au monde ?",c:["Wacken Open Air","Hellfest","Download Festival","Bloodstock"],a:0},
    {q:"Quel groupe de metal a sorti l'album 'Master of Puppets' ?",c:["Metallica","Megadeth","Slayer","Anthrax"],a:0},
    {q:"Quel est le sous-genre le plus rapide du metal ?",c:["Le thrash metal","Le death metal","Le black metal","Le power metal"],a:0},
  ],
  musique_010: [ // Le Punk
    {q:"Quel groupe punk est le plus célèbre ?",c:["The Ramones","Sex Pistols","The Clash","Dead Kennedys"],a:0},
    {q:"En quelle année le punk a-t-il émergé ?",c:["Milieu des années 1970","Début des années 1960","Années 1980","Années 1990"],a:0},
    {q:"Quel groupe punk britannique a sorti 'God Save the Queen' ?",c:["Sex Pistols","The Clash","Buzzcocks","Damned"],a:0},
    {q:"Quel est le style vestimentaire associé au punk ?",c:["Cuir et clous","Chemises hawaïennes","Costumes cravates","Vêtements fluo"],a:0},
    {q:"Quel groupe punk français est le plus connu ?",c:["Bérurier Noir","Les Wampas","La Souris Déglinguée","Oberkampf"],a:0},
    {q:"Quel album des Ramones est leur premier ?",c:["Ramones","Leave Home","Rocket to Russia","Road to Ruin"],a:0},
    {q:"Quel mouvement punk a influencé le grunge ?",c:["Le punk hardcore","Le punk rock","L'anarcho-punk","Le pop punk"],a:0},
  ],
  musique_011: [ // Le Folk
    {q:"Quel chanteur folk américain a écrit 'Blowin' in the Wind' ?",c:["Bob Dylan","Woody Guthrie","Pete Seeger","Johnny Cash"],a:0},
    {q:"Quel instrument est emblématique de la musique folk ?",c:["La guitare acoustique","Le banjo","Le violon","L'harmonica"],a:0},
    {q:"Quelle chanteuse folk canadienne est mondialement connue ?",c:["Joni Mitchell","Joan Baez","Carole King","Carly Simon"],a:0},
    {q:"Quel festival de 1969 a marqué l'apogée du folk ?",c:["Woodstock","Newport Folk Festival","Glastonbury","Coachella"],a:0},
    {q:"En quelle année Bob Dylan est-il passé à l'électrique ?",c:["1965","1963","1967","1969"],a:0},
    {q:"Quel groupe français chante 'Le métèque' dans le style folk ?",c:["Georges Moustaki","Maxime Le Forestier","Francis Cabrel","Alain Souchon"],a:0},
    {q:"Quelle chanson folk est un hymne mondial pour la paix ?",c:["Imagine","Blowin' in the Wind","The Times They Are A-Changin'","Give Peace a Chance"],a:0},
  ],
  musique_012: [ // L'Électro
    {q:"Quel genre de musique électronique est né à Détroit ?",c:["La techno","La house","Le dubstep","Le drum and bass"],a:0},
    {q:"Quel DJ français est mondialement connu ?",c:["David Guetta","Daft Punk","Martin Solveig","Bob Sinclar"],a:0},
    {q:"Quelle ville allemande est le berceau de la techno ?",c:["Berlin","Francfort","Munich","Hambourg"],a:0},
    {q:"Quel groupe français a sorti 'Around the World' ?",c:["Daft Punk","Justice","Air","M83"],a:0},
    {q:"Quel instrument est essentiel à la musique électronique ?",c:["Le synthétiseur","La guitare électrique","La batterie","Le piano"],a:0},
    {q:"Quel festival est le plus grand festival de musique électronique ?",c:["Tomorrowland","Ultra Music Festival","Electric Daisy Carnival","Creamfields"],a:0},
    {q:"Quel sous-genre de l'électro se caractérise par des BPM très élevés ?",c:["Le hardstyle","La house","La techno","Le trance"],a:0},
  ],
  musique_013: [ // Le R&B
    {q:"Quel chanteur R&B est surnommé 'The King of R&B' ?",c:["R. Kelly","Usher","Chris Brown","Stevie Wonder"],a:0},
    {q:"Quelle chanteuse R&B a sorti 'Crazy in Love' ?",c:["Beyoncé","Rihanna","Alicia Keys","Mary J. Blige"],a:0},
    {q:"Quel label est à l'origine du R&B moderne ?",c:["Motown","Def Jam","Bad Boy","Roc-A-Fella"],a:2},
    {q:"Quel groupe R&B des années 1990 a connu un énorme succès ?",c:["TLC","Destiny's Child","En Vogue","Boyz II Men"],a:3},
    {q:"Quelle chanteuse R&B est connue pour 'No Scrubs' ?",c:["TLC","Destiny's Child","Enya","Beyoncé"],a:0},
    {q:"Quel chanteur R&B a collaboré avec Daft Punk sur 'Get Lucky' ?",c:["Pharrell Williams","Bruno Mars","Justin Timberlake","The Weeknd"],a:0},
    {q:"En quelle année le terme R&B a-t-il été inventé ?",c:["1949","1955","1960","1930"],a:0},
  ],
  musique_014: [ // La Country
    {q:"Quel chanteur country est surnommé 'The Man in Black' ?",c:["Johnny Cash","Willie Nelson","Waylon Jennings","Merle Haggard"],a:0},
    {q:"Quelle chanteuse country est la plus vendue de tous les temps ?",c:["Shania Twain","Dolly Parton","Carrie Underwood","Taylor Swift"],a:0},
    {q:"Quel instrument est emblématique de la musique country ?",c:["Le banjo","La mandoline","La steel guitar","L'harmonica"],a:2},
    {q:"Quelle ville du Tennessee est la capitale de la country ?",c:["Nashville","Memphis","Knoxville","Chattanooga"],a:0},
    {q:"Quel chanteur country a écrit 'Ring of Fire' ?",c:["Johnny Cash","June Carter","Merle Kilgore","Harlan Howard"],a:0},
    {q:"En quelle année le Grand Ole Opry a-t-il été fondé ?",c:["1925","1930","1920","1935"],a:0},
    {q:"Quel chanteur français est connu pour sa country ?",c:["Joe Dassin","Hugues Aufray","Michel Sardou","Eddy Mitchell"],a:1},
  ],
  musique_015: [ // Le Funk
    {q:"Quel musicien est considéré comme le père du funk ?",c:["James Brown","George Clinton","Sly Stone","Bootsy Collins"],a:0},
    {q:"Quel riff de basse est le plus célèbre du funk ?",c:["Good Times de Chic","Super Freak de Rick James","Flash Light de Parliament","Get Up Offa That Thing de James Brown"],a:0},
    {q:"Quelle chanson funk de 1976 est devenue un hymne disco ?",c:["Le Freak de Chic","Super Freak de Rick James","Flash Light de Parliament","Pick Up the Pieces d'Average White Band"],a:2},
    {q:"Quel groupe a fusionné funk et rock dans les années 1980 ?",c:["Red Hot Chili Peppers","Prince","Parliament","Earth, Wind & Fire"],a:0},
    {q:"Quel bassiste de funk est connu pour son style slap ?",c:["Larry Graham","Bootsy Collins","Stanley Clarke","Marcus Miller"],a:0},
    {q:"En quelle année James Brown a-t-il enregistré 'Papa's Got a Brand New Bag' ?",c:["1965","1963","1968","1970"],a:0},
    {q:"Quel groupe de funk a une section de cuivres légendaire ?",c:["Tower of Power","Earth, Wind & Fire","Kool & the Gang","The Commodores"],a:0},
  ],
  musique_016: [ // Le Disco
    {q:"Quel groupe suédois a dominé l'ère disco ?",c:["ABBA","Bee Gees","Chic","Earth, Wind & Fire"],a:0},
    {q:"Quelle chanson des Bee Gees est emblématique du disco ?",c:["Stayin' Alive","Night Fever","How Deep Is Your Love","More Than a Woman"],a:0},
    {q:"Quel film de 1977 a popularisé le disco ?",c:["Saturday Night Fever","Grease","The Sound of Music","Flashdance"],a:0},
    {q:"Quelle discothèque new-yorkaise était mythique ?",c:["Studio 54","Paradise Garage","Studio One","The Loft"],a:0},
    {q:"Quel mouvement a tué le disco en 1979 ?",c:["Disco Demolition Night","Le punk","Le nouveau romantisme","La new wave"],a:0},
    {q:"Quelle chanteuse disco a eu un tube avec 'I Will Survive' ?",c:["Gloria Gaynor","Donna Summer","Diana Ross","Cher"],a:0},
    {q:"En quelle année le disco a-t-il culminé ?",c:["1978","1976","1980","1974"],a:0},
  ],
  musique_017: [ // Le Gospel
    {q:"Quel chanteur de gospel légendaire a écrit 'Oh Happy Day' ?",c:["Edwin Hawkins","Mahalia Jackson","Thomas A. Dorsey","Aretha Franklin"],a:0},
    {q:"Quelle chanteuse de gospel est surnommée 'The Queen of Gospel' ?",c:["Mahalia Jackson","Aretha Franklin","Shirley Caesar","CeCe Winans"],a:0},
    {q:"Quel instrument accompagne traditionnellement le gospel ?",c:["L'orgue Hammond","Le piano","La guitare","La batterie"],a:0},
    {q:"Quel chanteur de gospel a influencé Elvis Presley ?",c:["The Soul Stirrers","The Dixie Hummingbirds","The Blind Boys of Alabama","The Staple Singers"],a:0},
    {q:"En quelle année le gospel a-t-il émergé ?",c:["Début du XXe siècle","Fin du XIXe siècle","Années 1930","Années 1950"],a:0},
    {q:"Quel style musical dérive du gospel ?",c:["La soul","Le blues","Le jazz","Le rock"],a:0},
    {q:"Quel chanteur de gospel a remporté un Grammy pour 'Amazing Grace' ?",c:["Aretha Franklin","Mahalia Jackson","CeCe Winans","Yolanda Adams"],a:0},
  ],
  musique_018: [ // Le Flamenco
    {q:"De quelle région d'Espagne vient le flamenco ?",c:["L'Andalousie","La Catalogne","La Galice","Le Pays basque"],a:0},
    {q:"Quel instrument est essentiel au flamenco ?",c:["La guitare flamenca","Le cajón","Les castagnettes","La guitare classique"],a:0},
    {q:"Comment s'appelle le chant dans le flamenco ?",c:["El cante","El baile","El toque","El jaleo"],a:0},
    {q:"Quel danseur de flamenco est mondialement connu ?",c:["Joaquín Cortés","Antonio Gades","Sara Baras","Paco de Lucía"],a:0},
    {q:"Quel guitariste de flamenco est une légende ?",c:["Paco de Lucía","Tomatito","Vicente Amigo","Manolo Sanlúcar"],a:0},
    {q:"Quels sont les trois éléments du flamenco ?",c:["Chant, danse, guitare","Chant, danse, percussions","Chant, guitare, castagnettes","Danse, guitare, palmas"],a:0},
    {q:"En quelle année le flamenco a-t-il été déclaré patrimoine de l'UNESCO ?",c:["2010","2015","2005","2020"],a:0},
  ],
  musique_019: [ // La Salsa
    {q:"De quel pays vient la salsa ?",c:["Cuba et Porto Rico","Brésil","République dominicaine","Colombie"],a:0},
    {q:"Quel musicien est surnommé 'El Rey de la Salsa' ?",c:["Celia Cruz","Héctor Lavoe","Willie Colón","Marc Anthony"],a:0},
    {q:"Quelle chanteuse de salsa est surnommée 'La Guarachera de Cuba' ?",c:["Celia Cruz","La India","Gloria Estefan","Milly Quezada"],a:0},
    {q:"Quel instrument donne le rythme à la salsa ?",c:["Les claves","La trompette","Le piano","La basse"],a:0},
    {q:"Quel groupe de salsa new-yorkais est le plus célèbre ?",c:["Fania All-Stars","El Gran Combo","Sonora Ponceña","Mongo Santamaria"],a:0},
    {q:"En quelle année la salsa est-elle devenue populaire aux États-Unis ?",c:["Années 1970","Années 1960","Années 1980","Années 1950"],a:0},
    {q:"Quel danseur de salsa est connu pour ses acrobaties ?",c:["Eddie Torres","Johnny Vazquez","Frankie Martinez","Mambo"],a:0},
  ],
  musique_020: [ // Le Calypso
    {q:"De quelle île des Caraïbes vient le calypso ?",c:["Trinidad-et-Tobago","Jamaïque","Barbade","Cuba"],a:0},
    {q:"Quel instrument est typique du calypso ?",c:["Le steel drum","Le ukulélé","Les maracas","Le bongo"],a:0},
    {q:"Quel chanteur de calypso est le plus célèbre ?",c:["Harry Belafonte","Mighty Sparrow","Lord Kitchener","King Radio"],a:0},
    {q:"Quelle chanson de Belafonte est un standard calypso ?",c:["Day-O (The Banana Boat Song)","Jamaica Farewell","Calypso Blues","Island in the Sun"],a:0},
    {q:"Quelle fête annuelle de Trinidad est inséparable du calypso ?",c:["Le carnaval","Le festival de jazz","La fête du rhum","La fête de l'indépendance"],a:0},
    {q:"Quel style de musique dérive du calypso ?",c:["Le soca","Le reggae","Le ska","Le dancehall"],a:0},
    {q:"En quelle année le calypso a-t-il connu son âge d'or ?",c:["Années 1930-1940","Années 1950-1960","Années 1970-1980","Années 1920-1930"],a:1},
  ],
  musique_021: [ // Le Bhangra
    {q:"De quelle région de l'Inde vient le bhangra ?",c:["Le Pendjab","Le Rajasthan","Le Gujarat","L'Haryana"],a:0},
    {q:"Quel instrument à percussion est essentiel au bhangra ?",c:["Le dhol","Le tabla","Le sitar","Le tambour"],a:0},
    {q:"Quelle fête agricole est associée au bhangra ?",c:["Vaisakhi","Diwali","Holi","Durga Puja"],a:0},
    {q:"Quel groupe britannico-pendjabi a popularisé le bhangra ?",c:["Panjabi MC","Alaap","Bally Sagoo","Malkit Singh"],a:0},
    {q:"Quel DJ a samplé 'Mundian To Bach Ke' dans un hit mondial ?",c:["Panjabi MC","Dillon Francis","Diplo","Skrillex"],a:0},
    {q:"En quelle année le bhangra a-t-il été popularisé au Royaume-Uni ?",c:["Années 1980","Années 1970","Années 1990","Années 2000"],a:0},
    {q:"Quel instrument indien classique est parfois ajouté au bhangra ?",c:["Le sitar","le sarod","le harmonium","le tabla"],a:2},
  ],
  musique_022: [ // Le Fado
    {q:"De quel pays vient le fado ?",c:["Portugal","Espagne","Italie","Grèce"],a:0},
    {q:"Quelle chanteuse de fado est une légende ?",c:["Amália Rodrigues","Mariza","Carminho","Dulce Pontes"],a:0},
    {q:"Quel instrument est indispensable au fado ?",c:["La guitare portugaise","La guitare classique","Le violon","Le piano"],a:0},
    {q:"Que signifie le mot 'fado' en portugais ?",c:["Destin","Fatalité","Chanson","Tristesse"],a:0},
    {q:"Dans quelle ville portugaise le fado est-il né ?",c:["Lisbonne","Porto","Coimbra","Faro"],a:0},
    {q:"Quels sont les deux styles principaux de fado ?",c:["Fado de Lisbonne et de Coimbra","Fado classique et contemporain","Fado triste et joyeux","Fado vocal et instrumental"],a:0},
    {q:"En quelle année le fado a-t-il été classé patrimoine de l'UNESCO ?",c:["2011","2013","2008","2015"],a:0},
  ],
};
for (const [id, levels] of Object.entries(MUSIQUE)) {
  // Add first level (will replace template)
  const theme = themes.find(t => t.id === id);
  if (theme && theme.levels.length > 0) {
    // Also replace level 1 (the 'Quelle est la question facile' template)
    // We need all 8, so prepend a good level 1
    r[id] = [
      {q: "Quel est le premier tube de Queen ?", c:["Bohemian Rhapsody","Another One Bites the Dust","We Will Rock You","Don't Stop Me Now"], a:0},
      {q: "Qui est le chanteur de Queen ?", c:["Freddie Mercury","Brian May","Roger Taylor","John Deacon"], a:0},
      ...levels.slice(0,6) // Use first 6 (we need total of 8, with 2 prepended)
    ];
  } else {
    r[id] = [{q: "Question?", c:["A","B","C","D"], a:0}, ...levels.slice(0,7)];
  }
}

// Fix musique_022 (Fado) - it has 7 levels provided, need to adjust final count
r.musique_001 = [
  {q:"Quel groupe britannique a connu un succès planétaire dans les années 1970 ?",c:["Queen","The Beatles","Led Zeppelin","Pink Floyd"],a:0},
  {q:"Quel chanteur de rock était surnommé 'The King' ?",c:["Elvis Presley","Little Richard","Chuck Berry","Buddy Holly"],a:0},
  {q:"Quel groupe a sorti 'Bohemian Rhapsody' ?",c:["Queen","Led Zeppelin","Pink Floyd","The Beatles"],a:0},
  {q:"Qui est surnommé 'The King of Rock and Roll' ?",c:["Elvis Presley","Chuck Berry","Little Richard","Buddy Holly"],a:0},
  {q:"Quel guitariste est considéré comme l'un des meilleurs de l'histoire ?",c:["Jimi Hendrix","Eric Clapton","Jimmy Page","Eddie Van Halen"],a:0},
  {q:"Quel groupe britannique a sorti 'Stairway to Heaven' ?",c:["Led Zeppelin","Deep Purple","Black Sabbath","The Who"],a:0},
  {q:"En quelle année le rock 'n' roll a-t-il émergé ?",c:["Années 1950","Années 1940","Années 1960","Années 1930"],a:0},
  {q:"Quel album des Pink Floyd est l'un des plus vendus au monde ?",c:["The Dark Side of the Moon","The Wall","Wish You Were Here","Animals"],a:0},
];
r.musique_002 = [
  {q:"Dans quelle ville américaine le jazz est-il né ?",c:["Nouvelle-Orléans","Chicago","New York","La Nouvelle-Orléans"],a:3},
  {q:"Quel trompettiste est une légende du jazz ?",c:["Louis Armstrong","Miles Davis","Dizzy Gillespie","Chet Baker"],a:0},
  {q:"Quel saxophoniste de jazz a enregistré 'Giant Steps' ?",c:["John Coltrane","Charlie Parker","Sonny Rollins","Dexter Gordon"],a:0},
  {q:"Quel style de jazz se caractérise par des tempos rapides ?",c:["Le bebop","Le swing","Le cool jazz","Le free jazz"],a:0},
  {q:"Qui a composé 'Take Five' ?",c:["Dave Brubeck","Miles Davis","John Coltrane","Thelonious Monk"],a:0},
  {q:"Quel pianiste de jazz a une technique unique et un style angulaire ?",c:["Thelonious Monk","Herbie Hancock","Bill Evans","Oscar Peterson"],a:0},
  {q:"Quelle chanteuse de jazz est surnommée 'Lady Day' ?",c:["Billie Holiday","Ella Fitzgerald","Sarah Vaughan","Nina Simone"],a:0},
  {q:"Quel musicien de jazz a composé 'So What' ?",c:["Miles Davis","John Coltrane","Thelonious Monk","Dizzy Gillespie"],a:0},
];
// Directly define all remaining musique themes
r.musique_003 = [
  {q:"Quel groupe de rap français a sorti 'Ma Benz' ?",c:["NTM","IAM","Suprême NTM","MC Solaar"],a:1},
  {q:"Quel artiste rap a sorti l'album 'The Chronic' ?",c:["Dr. Dre","Snoop Dogg","Tupac","Notorious BIG"],a:0},
  {q:"Quel groupe de rap new-yorkais a sorti 'Illmatic' ?",c:["Nas","Wu-Tang Clan","A Tribe Called Quest","De La Soul"],a:0},
  {q:"Qui est considéré comme le père du rap français ?",c:["MC Solaar","IAM","NTM","Suprême NTM"],a:1},
  {q:"En quelle année le rap a-t-il émergé dans le Bronx ?",c:["Années 1970","Années 1980","Années 1960","Années 1990"],a:0},
  {q:"Quel rappeur français a vendu le plus d'albums ?",c:["MC Solaar","NTM","IAM","Booba"],a:0},
  {q:"Quel battle de rap est célèbre entre Tupac et Biggie ?",c:["La côte Est contre la côte Ouest","La battle du siècle","Le clash des rois","La guerre du rap"],a:0},
  {q:"Quel album de Kendrick Lamar a gagné le Pulitzer ?",c:["DAMN.","To Pimp a Butterfly","good kid, mAAd city","Mr. Morale"],a:0},
];
r.musique_004 = [
  {q:"Quel chanteur pop est surnommé 'The King of Pop' ?",c:["Michael Jackson","Prince","Elvis Presley","Madonna"],a:0},
  {q:"Quelle chanteuse pop a sorti l'album '1989' ?",c:["Taylor Swift","Katy Perry","Lady Gaga","Rihanna"],a:0},
  {q:"Quel groupe pop britannique est le plus vendu de l'histoire ?",c:["The Beatles","Spice Girls","Queen","ABBA"],a:0},
  {q:"Quel tube de 2015 de Mark Ronson met en vedette Bruno Mars ?",c:["Uptown Funk","Shake It Off","Happy","Get Lucky"],a:0},
  {q:"Combien d'albums Michael Jackson a-t-il vendus ?",c:["Plus de 350 millions","Plus de 200 millions","Plus de 500 millions","Plus de 100 millions"],a:0},
  {q:"Quelle chanteuse pop a remporté le plus de Grammy Awards ?",c:["Beyoncé","Taylor Swift","Lady Gaga","Madonna"],a:0},
  {q:"Quel album de 1982 de Michael Jackson est le plus vendu de tous les temps ?",c:["Thriller","Bad","Dangerous","Off the Wall"],a:0},
  {q:"Quelle pop star américaine a commencé dans la série Hannah Montana ?",c:["Miley Cyrus","Selena Gomez","Demi Lovato","Britney Spears"],a:0},
];
r.musique_005 = [
  {q:"Quel compositeur allemand est devenu sourd mais a continué à composer ?",c:["Beethoven","Mozart","Bach","Brahms"],a:0},
  {q:"Quel compositeur autrichien est connu pour ses sonates et symphonies ?",c:["Mozart","Haydn","Schubert","Bruckner"],a:0},
  {q:"Quel instrument est emblématique de la musique baroque ?",c:["Le clavecin","Le violon","La flûte","L'orgue"],a:0},
  {q:"Quel compositeur russe a composé 'Casse-Noisette' ?",c:["Tchaïkovski","Stravinsky","Rachmaninov","Prokofiev"],a:0},
  {q:"En quelle période a vécu Beethoven ?",c:["Classique et romantique","Baroque","Renaissance","Médiévale"],a:0},
  {q:"Quel opéra de Mozart est l'un des plus joués ?",c:["Les Noces de Figaro","La Flûte enchantée","Don Giovanni","Così fan tutte"],a:1},
  {q:"Quel compositeur allemand a écrit 'L'Art de la fugue' ?",c:["Jean-Sébastien Bach","Georg Friedrich Haendel","Claudio Monteverdi","Antonio Vivaldi"],a:0},
  {q:"Quel compositeur a écrit la 'Neuvième Symphonie' avec le chœur final 'Ode à la joie' ?",c:["Beethoven","Mozart","Schubert","Bruckner"],a:0},
];
r.musique_006 = [
  {q:"Quel chanteur de blues est surnommé 'King of the Blues' ?",c:["B.B. King","Muddy Waters","Robert Johnson","John Lee Hooker"],a:0},
  {q:"Quelle est la structure typique d'un blues en 12 mesures ?",c:["12 mesures","8 mesures","16 mesures","24 mesures"],a:0},
  {q:"Quel bluesman a vendu son âme au diable selon la légende ?",c:["Robert Johnson","Son House","Skip James","Charley Patton"],a:0},
  {q:"Quelle région des États-Unis est le berceau du blues ?",c:["Le delta du Mississippi","La Nouvelle-Orléans","Chicago","Le Texas"],a:0},
  {q:"Quel chanteur de blues a enregistré 'I'm Your Hoochie Coochie Man' ?",c:["Muddy Waters","Howlin' Wolf","Willie Dixon","Albert King"],a:0},
  {q:"Quel guitariste français est un virtuose du blues ?",c:["Paul Personne","Jean-Jacques Milteau","Bill Deraime","Mike Lécuyer"],a:0},
  {q:"Quel blues a influencé directement le rock 'n' roll ?",c:["Le rhythm and blues","Le delta blues","Le blues rural","Le blues électrique"],a:0},
  {q:"Quel bluesman a enregistré 'Cross Road Blues' ?",c:["Robert Johnson","Son House","Muddy Waters","Charley Patton"],a:0},
];
r.musique_007 = [
  {q:"De quel pays vient le reggae ?",c:["Jamaïque","Cuba","Trinidad","Brésil"],a:0},
  {q:"Quel artiste reggae est une icône mondiale ?",c:["Bob Marley","Peter Tosh","Jimmy Cliff","Toots Hibbert"],a:0},
  {q:"Quel est le rythme caractéristique du reggae ?",c:["Le contretemps","Le temps fort","La syncope","Le shuffle"],a:0},
  {q:"Quel est le titre le plus connu de Bob Marley ?",c:["No Woman No Cry","One Love","Redemption Song","Buffalo Soldier"],a:0},
  {q:"En quelle année Bob Marley est-il mort ?",c:["1981","1977","1985","1990"],a:0},
  {q:"Quel mouvement spirituel est associé au reggae jamaïcain ?",c:["Le rastafarisme","Le vaudou","Le santeria","Le candomblé"],a:0},
  {q:"Quel album de Bob Marley est le plus vendu ?",c:["Legend","Exodus","Catch a Fire","Rastaman Vibration"],a:0},
  {q:"Quel chanteur reggae a écrit 'The Harder They Come' ?",c:["Jimmy Cliff","Bob Marley","Peter Tosh","Burning Spear"],a:0},
];
r.musique_008 = [
  {q:"Quelle chanteuse soul est surnommée 'The Queen of Soul' ?",c:["Aretha Franklin","Etta James","Tina Turner","Diana Ross"],a:0},
  {q:"Quel label discographique était le plus important pour la soul ?",c:["Motown","Stax Records","Atlantic Records","Chess Records"],a:0},
  {q:"Quel est le titre phare d'Aretha Franklin ?",c:["Respect","Think","Chain of Fools","I Say a Little Prayer"],a:0},
  {q:"Quel chanteur a enregistré '(Sittin' On) The Dock of the Bay' ?",c:["Otis Redding","Sam Cooke","Wilson Pickett","Percy Sledge"],a:0},
  {q:"En quelle année le label Motown a-t-il été fondé ?",c:["1959","1955","1963","1950"],a:0},
  {q:"Quelle chanteuse soul a connu un succès avec 'Proud Mary' ?",c:["Tina Turner","Aretha Franklin","Gladys Knight","Diana Ross"],a:0},
  {q:"Quel chanteur soul est surnommé 'The Godfather of Soul' ?",c:["James Brown","Aretha Franklin","Ray Charles","Otis Redding"],a:0},
  {q:"Quel chanteur a écrit 'A Change Is Gonna Come' ?",c:["Sam Cooke","Otis Redding","Ray Charles","James Brown"],a:0},
];
r.musique_009 = [
  {q:"Quel groupe est considéré comme le pionnier du heavy metal ?",c:["Black Sabbath","Led Zeppelin","Deep Purple","Iron Maiden"],a:0},
  {q:"Quel guitariste de metal est surnommé 'Metal God' ?",c:["Dave Mustaine","James Hetfield","Tony Iommi","Jimi Hendrix"],a:0},
  {q:"Quel groupe est connu pour son masque et son show scénique ?",c:["Slipknot","KISS","Marilyn Manson","Ghost"],a:1},
  {q:"Quel genre de metal se caractérise par des voix gutturales ?",c:["Death metal","Heavy metal","Power metal","Speed metal"],a:0},
  {q:"Quel festival allemand est le plus grand festival de metal au monde ?",c:["Wacken Open Air","Hellfest","Download Festival","Bloodstock"],a:0},
  {q:"Quel groupe de metal a sorti l'album 'Master of Puppets' ?",c:["Metallica","Megadeth","Slayer","Anthrax"],a:0},
  {q:"Quel est le sous-genre le plus rapide du metal ?",c:["Le thrash metal","Le death metal","Le black metal","Le power metal"],a:0},
  {q:"Quel groupe de metal allemand est le plus célèbre ?",c:["Rammstein","Scorpions","Helloween","Accept"],a:0},
];
r.musique_010 = [
  {q:"Quel groupe punk est le plus célèbre ?",c:["The Ramones","Sex Pistols","The Clash","Dead Kennedys"],a:0},
  {q:"En quelle année le punk a-t-il émergé ?",c:["Milieu des années 1970","Début des années 1960","Années 1980","Années 1990"],a:0},
  {q:"Quel groupe punk britannique a sorti 'God Save the Queen' ?",c:["Sex Pistols","The Clash","Buzzcocks","Damned"],a:0},
  {q:"Quel est le style vestimentaire associé au punk ?",c:["Cuir et clous","Chemises hawaïennes","Costumes cravates","Vêtements fluo"],a:0},
  {q:"Quel groupe punk français est le plus connu ?",c:["Bérurier Noir","Les Wampas","La Souris Déglinguée","Oberkampf"],a:0},
  {q:"Quel album des Ramones est leur premier ?",c:["Ramones","Leave Home","Rocket to Russia","Road to Ruin"],a:0},
  {q:"Quel mouvement punk a influencé le grunge ?",c:["Le punk hardcore","Le punk rock","L'anarcho-punk","Le pop punk"],a:0},
  {q:"Quel chanteur punk français est connu pour ses paroles engagées ?",c:["Didier Wampas","François Hadji-Lazaro","Guido","Lorant"],a:0},
];
r.musique_011 = [
  {q:"Quel instrument est emblématique de la musique folk ?",c:["La guitare acoustique","Le banjo","Le violon","L'harmonica"],a:0},
  {q:"Quelle chanteuse folk canadienne est mondialement connue ?",c:["Joni Mitchell","Joan Baez","Carole King","Carly Simon"],a:0},
  {q:"Quel festival de 1969 a marqué l'apogée du folk ?",c:["Woodstock","Newport Folk Festival","Glastonbury","Coachella"],a:0},
  {q:"En quelle année Bob Dylan est-il passé à l'électrique ?",c:["1965","1963","1967","1969"],a:0},
  {q:"Quel groupe français chante 'Le métèque' dans le style folk ?",c:["Georges Moustaki","Maxime Le Forestier","Francis Cabrel","Alain Souchon"],a:0},
  {q:"Quelle chanson folk est un hymne mondial pour la paix ?",c:["Imagine","Blowin' in the Wind","The Times They Are A-Changin'","Give Peace a Chance"],a:0},
  {q:"Quel chanteur folk américain a écrit 'Blowin' in the Wind' ?",c:["Bob Dylan","Woody Guthrie","Pete Seeger","Johnny Cash"],a:0},
  {q:"Quel chanteur folk français est connu pour 'Amsterdam' ?",c:["Jacques Brel","Georges Brassens","Léo Ferré","Serge Gainsbourg"],a:0},
];
r.musique_012 = [
  {q:"Quel genre de musique électronique est né à Détroit ?",c:["La techno","La house","Le dubstep","Le drum and bass"],a:0},
  {q:"Quel DJ français est mondialement connu ?",c:["David Guetta","Daft Punk","Martin Solveig","Bob Sinclar"],a:0},
  {q:"Quelle ville allemande est le berceau de la techno ?",c:["Berlin","Francfort","Munich","Hambourg"],a:0},
  {q:"Quel groupe français a sorti 'Around the World' ?",c:["Daft Punk","Justice","Air","M83"],a:0},
  {q:"Quel instrument est essentiel à la musique électronique ?",c:["Le synthétiseur","La guitare électrique","La batterie","Le piano"],a:0},
  {q:"Quel festival est le plus grand festival de musique électronique ?",c:["Tomorrowland","Ultra Music Festival","Electric Daisy Carnival","Creamfields"],a:0},
  {q:"Quel sous-genre de l'électro se caractérise par des BPM très élevés ?",c:["Le hardstyle","La house","La techno","Le trance"],a:0},
  {q:"Quel pionnier de la musique électronique a sorti 'Autobahn' ?",c:["Kraftwerk","Jean-Michel Jarre","Tangerine Dream","Brian Eno"],a:0},
];
r.musique_013 = [
  {q:"Quelle chanteuse R&B a sorti 'Crazy in Love' ?",c:["Beyoncé","Rihanna","Alicia Keys","Mary J. Blige"],a:0},
  {q:"Quel label est à l'origine du R&B moderne ?",c:["Motown","Def Jam","Bad Boy","Roc-A-Fella"],a:2},
  {q:"Quel groupe R&B des années 1990 a connu un énorme succès ?",c:["TLC","Destiny's Child","En Vogue","Boyz II Men"],a:3},
  {q:"Quelle chanteuse R&B est connue pour 'No Scrubs' ?",c:["TLC","Destiny's Child","Enya","Beyoncé"],a:0},
  {q:"Quel chanteur R&B a collaboré avec Daft Punk sur 'Get Lucky' ?",c:["Pharrell Williams","Bruno Mars","Justin Timberlake","The Weeknd"],a:0},
  {q:"En quelle année le terme R&B a-t-il été inventé ?",c:["1949","1955","1960","1930"],a:0},
  {q:"Quel chanteur R&B est surnommé 'The King of R&B' ?",c:["R. Kelly","Usher","Chris Brown","Stevie Wonder"],a:0},
  {q:"Quel musicien R&B a remporté le plus de Grammy Awards ?",c:["Stevie Wonder","Ray Charles","Aretha Franklin","Beyoncé"],a:0},
];
r.musique_014 = [
  {q:"Quel instrument est emblématique de la musique country ?",c:["Le banjo","La mandoline","La steel guitar","L'harmonica"],a:2},
  {q:"Quelle ville du Tennessee est la capitale de la country ?",c:["Nashville","Memphis","Knoxville","Chattanooga"],a:0},
  {q:"Quel chanteur country a écrit 'Ring of Fire' ?",c:["Johnny Cash","June Carter","Merle Kilgore","Harlan Howard"],a:0},
  {q:"En quelle année le Grand Ole Opry a-t-il été fondé ?",c:["1925","1930","1920","1935"],a:0},
  {q:"Quel chanteur français est connu pour sa country ?",c:["Joe Dassin","Hugues Aufray","Michel Sardou","Eddy Mitchell"],a:1},
  {q:"Quel chanteur country est surnommé 'The Man in Black' ?",c:["Johnny Cash","Willie Nelson","Waylon Jennings","Merle Haggard"],a:0},
  {q:"Quelle chanteuse country est la plus vendue de tous les temps ?",c:["Shania Twain","Dolly Parton","Carrie Underwood","Taylor Swift"],a:0},
  {q:"Quel chanteur country a eu un tube avec 'Achy Breaky Heart' ?",c:["Billy Ray Cyrus","Garth Brooks","Tim McGraw","Blake Shelton"],a:0},
];
r.musique_015 = [
  {q:"Quel musicien est considéré comme le père du funk ?",c:["James Brown","George Clinton","Sly Stone","Bootsy Collins"],a:0},
  {q:"Quel riff de basse est le plus célèbre du funk ?",c:["Good Times de Chic","Super Freak de Rick James","Flash Light de Parliament","Get Up Offa That Thing de James Brown"],a:0},
  {q:"Quel groupe a fusionné funk et rock dans les années 1980 ?",c:["Red Hot Chili Peppers","Prince","Parliament","Earth, Wind & Fire"],a:0},
  {q:"Quel bassiste de funk est connu pour son style slap ?",c:["Larry Graham","Bootsy Collins","Stanley Clarke","Marcus Miller"],a:0},
  {q:"En quelle année James Brown a-t-il enregistré 'Papa's Got a Brand New Bag' ?",c:["1965","1963","1968","1970"],a:0},
  {q:"Quel groupe de funk a une section de cuivres légendaire ?",c:["Tower of Power","Earth, Wind & Fire","Kool & the Gang","The Commodores"],a:0},
  {q:"Quel chanteur funk a sorti 'Super Freak' ?",c:["Rick James","James Brown","Prince","George Clinton"],a:0},
  {q:"Quelle chanson funk de 1976 est devenue un hymne disco ?",c:["Le Freak de Chic","Super Freak de Rick James","Flash Light de Parliament","Pick Up the Pieces d'Average White Band"],a:2},
];
r.musique_016 = [
  {q:"Quel groupe suédois a dominé l'ère disco ?",c:["ABBA","Bee Gees","Chic","Earth, Wind & Fire"],a:0},
  {q:"Quelle chanson des Bee Gees est emblématique du disco ?",c:["Stayin' Alive","Night Fever","How Deep Is Your Love","More Than a Woman"],a:0},
  {q:"Quel film de 1977 a popularisé le disco ?",c:["Saturday Night Fever","Grease","The Sound of Music","Flashdance"],a:0},
  {q:"Quelle discothèque new-yorkaise était mythique ?",c:["Studio 54","Paradise Garage","Studio One","The Loft"],a:0},
  {q:"Quel mouvement a tué le disco en 1979 ?",c:["Disco Demolition Night","Le punk","Le nouveau romantisme","La new wave"],a:0},
  {q:"Quelle chanteuse disco a eu un tube avec 'I Will Survive' ?",c:["Gloria Gaynor","Donna Summer","Diana Ross","Cher"],a:0},
  {q:"En quelle année le disco a-t-il culminé ?",c:["1978","1976","1980","1974"],a:0},
  {q:"Quel groupe disco a sorti 'Good Times' ?",c:["Chic","Bee Gees","ABBA","Kool & the Gang"],a:0},
];
r.musique_017 = [
  {q:"Quel chanteur de gospel légendaire a écrit 'Oh Happy Day' ?",c:["Edwin Hawkins","Mahalia Jackson","Thomas A. Dorsey","Aretha Franklin"],a:0},
  {q:"Quelle chanteuse de gospel est surnommée 'The Queen of Gospel' ?",c:["Mahalia Jackson","Aretha Franklin","Shirley Caesar","CeCe Winans"],a:0},
  {q:"Quel instrument accompagne traditionnellement le gospel ?",c:["L'orgue Hammond","Le piano","La guitare","La batterie"],a:0},
  {q:"Quel chanteur de gospel a influencé Elvis Presley ?",c:["The Soul Stirrers","The Dixie Hummingbirds","The Blind Boys of Alabama","The Staple Singers"],a:0},
  {q:"En quelle année le gospel a-t-il émergé ?",c:["Début du XXe siècle","Fin du XIXe siècle","Années 1930","Années 1950"],a:0},
  {q:"Quel style musical dérive du gospel ?",c:["La soul","Le blues","Le jazz","Le rock"],a:0},
  {q:"Quel chanteur de gospel a remporté un Grammy pour 'Amazing Grace' ?",c:["Aretha Franklin","Mahalia Jackson","CeCe Winans","Yolanda Adams"],a:0},
  {q:"Quel gospel américain est connu pour sa chorale ?",c:["The Harlem Gospel Choir","The Blind Boys of Alabama","The Staple Singers","The Dixie Hummingbirds"],a:0},
];
r.musique_018 = [
  {q:"De quelle région d'Espagne vient le flamenco ?",c:["L'Andalousie","La Catalogne","La Galice","Le Pays basque"],a:0},
  {q:"Quel instrument est essentiel au flamenco ?",c:["La guitare flamenca","Le cajón","Les castagnettes","La guitare classique"],a:0},
  {q:"Comment s'appelle le chant dans le flamenco ?",c:["El cante","El baile","El toque","El jaleo"],a:0},
  {q:"Quel danseur de flamenco est mondialement connu ?",c:["Joaquín Cortés","Antonio Gades","Sara Baras","Paco de Lucía"],a:0},
  {q:"Quel guitariste de flamenco est une légende ?",c:["Paco de Lucía","Tomatito","Vicente Amigo","Manolo Sanlúcar"],a:0},
  {q:"Quels sont les trois éléments du flamenco ?",c:["Chant, danse, guitare","Chant, danse, percussions","Chant, guitare, castagnettes","Danse, guitare, palmas"],a:0},
  {q:"En quelle année le flamenco a-t-il été déclaré patrimoine de l'UNESCO ?",c:["2010","2015","2005","2020"],a:0},
  {q:"Quel chanteur de flamenco est surnommé 'El Camarón' ?",c:["Camarón de la Isla","José Mercé","El Fary","Enrique Morente"],a:0},
];
r.musique_019 = [
  {q:"De quel pays vient la salsa ?",c:["Cuba et Porto Rico","Brésil","République dominicaine","Colombie"],a:0},
  {q:"Quel musicien est surnommé 'El Rey de la Salsa' ?",c:["Celia Cruz","Héctor Lavoe","Willie Colón","Marc Anthony"],a:0},
  {q:"Quelle chanteuse de salsa est surnommée 'La Guarachera de Cuba' ?",c:["Celia Cruz","La India","Gloria Estefan","Milly Quezada"],a:0},
  {q:"Quel instrument donne le rythme à la salsa ?",c:["Les claves","La trompette","Le piano","La basse"],a:0},
  {q:"Quel groupe de salsa new-yorkais est le plus célèbre ?",c:["Fania All-Stars","El Gran Combo","Sonora Ponceña","Mongo Santamaria"],a:0},
  {q:"En quelle année la salsa est-elle devenue populaire aux États-Unis ?",c:["Années 1970","Années 1960","Années 1980","Années 1950"],a:0},
  {q:"Quel danseur de salsa est connu pour ses acrobaties ?",c:["Eddie Torres","Johnny Vazquez","Frankie Martinez","Mambo"],a:0},
  {q:"Quel musicien de salsa new-yorkais a composé 'El Cantante' ?",c:["Héctor Lavoe","Willie Colón","Ruben Blades","Marc Anthony"],a:0},
];
r.musique_020 = [
  {q:"De quelle île des Caraïbes vient le calypso ?",c:["Trinidad-et-Tobago","Jamaïque","Barbade","Cuba"],a:0},
  {q:"Quel instrument est typique du calypso ?",c:["Le steel drum","Le ukulélé","Les maracas","Le bongo"],a:0},
  {q:"Quel chanteur de calypso est le plus célèbre ?",c:["Harry Belafonte","Mighty Sparrow","Lord Kitchener","King Radio"],a:0},
  {q:"Quelle chanson de Belafonte est un standard calypso ?",c:["Day-O (The Banana Boat Song)","Jamaica Farewell","Calypso Blues","Island in the Sun"],a:0},
  {q:"Quelle fête annuelle de Trinidad est inséparable du calypso ?",c:["Le carnaval","Le festival de jazz","La fête du rhum","La fête de l'indépendance"],a:0},
  {q:"Quel style de musique dérive du calypso ?",c:["Le soca","Le reggae","Le ska","Le dancehall"],a:0},
  {q:"En quelle année le calypso a-t-il connu son âge d'or ?",c:["Années 1930-1940","Années 1950-1960","Années 1970-1980","Années 1920-1930"],a:1},
  {q:"Quel chanteur de calypso a remporté un Grammy ?",c:["Harry Belafonte","Mighty Sparrow","Lord Kitchener","Calypso Rose"],a:0},
];
r.musique_021 = [
  {q:"De quelle région de l'Inde vient le bhangra ?",c:["Le Pendjab","Le Rajasthan","Le Gujarat","L'Haryana"],a:0},
  {q:"Quel instrument à percussion est essentiel au bhangra ?",c:["Le dhol","Le tabla","Le sitar","Le tambour"],a:0},
  {q:"Quelle fête agricole est associée au bhangra ?",c:["Vaisakhi","Diwali","Holi","Durga Puja"],a:0},
  {q:"Quel groupe britannico-pendjabi a popularisé le bhangra ?",c:["Panjabi MC","Alaap","Bally Sagoo","Malkit Singh"],a:0},
  {q:"Quel DJ a samplé 'Mundian To Bach Ke' dans un hit mondial ?",c:["Panjabi MC","Dillon Francis","Diplo","Skrillex"],a:0},
  {q:"En quelle année le bhangra a-t-il été popularisé au Royaume-Uni ?",c:["Années 1980","Années 1970","Années 1990","Années 2000"],a:0},
  {q:"Quel instrument indien classique est parfois ajouté au bhangra ?",c:["Le sitar","Le sarod","Le harmonium","Le tabla"],a:2},
  {q:"Quel chanteur pendjabi est connu comme 'The King of Bhangra' ?",c:["Malkit Singh","Gurdas Maan","Daler Mehndi","Kuldeep Manak"],a:0},
];
r.musique_022 = [
  {q:"De quel pays vient le fado ?",c:["Portugal","Espagne","Italie","Grèce"],a:0},
  {q:"Quelle chanteuse de fado est une légende ?",c:["Amália Rodrigues","Mariza","Carminho","Dulce Pontes"],a:0},
  {q:"Quel instrument est indispensable au fado ?",c:["La guitare portugaise","La guitare classique","Le violon","Le piano"],a:0},
  {q:"Que signifie le mot 'fado' en portugais ?",c:["Destin","Fatalité","Chanson","Tristesse"],a:0},
  {q:"Dans quelle ville portugaise le fado est-il né ?",c:["Lisbonne","Porto","Coimbra","Faro"],a:0},
  {q:"Quels sont les deux styles principaux de fado ?",c:["Fado de Lisbonne et de Coimbra","Fado classique et contemporain","Fado triste et joyeux","Fado vocal et instrumental"],a:0},
  {q:"En quelle année le fado a-t-il été classé patrimoine de l'UNESCO ?",c:["2011","2013","2008","2015"],a:0},
  {q:"Quel chanteur de fado a popularisé le genre hors du Portugal ?",c:["Amália Rodrigues","Mariza","Carlos do Carmo","Camane"],a:2},
];

// ---------- HISTOIRE (18 themes) ----------
const HISTOIRE = {
  histoire_001: [ // Révolution française
    {q:"En quelle année la Révolution française a-t-elle commencé ?",c:["1789","1791","1787","1793"],a:0},
    {q:"Quelle prison a été prise le 14 juillet 1789 ?",c:["La Bastille","Le Châtelet","La Conciergerie","Vincennes"],a:0},
    {q:"Qui était le roi de France au début de la Révolution ?",c:["Louis XVI","Louis XV","Louis XIV","Louis XVIII"],a:0},
    {q:"Quel document proclame les droits de l'homme en 1789 ?",c:["La Déclaration des droits de l'homme","La Constitution","Le Code civil","La Charte"],a:0},
    {q:"Comment s'appelle la période la plus violente de la Révolution ?",c:["La Terreur","Le Directoire","Le Consulat","La Convention"],a:0},
    {q:"Quel outil de mort est emblématique de la Révolution ?",c:["La guillotine","La potence","Le bûcher","L'épée"],a:0},
    {q:"Qui a dirigé le Comité de salut public en 1793 ?",c:["Robespierre","Danton","Marat","Saint-Just"],a:0},
    {q:"En quelle année la Révolution française a-t-elle officiellement pris fin ?",c:["1799","1794","1795","1800"],a:0},
  ],
  histoire_002: [ // Rome antique
    {q:"Quel fleuve traverse Rome ?",c:["Le Tibre","Le Pô","L'Adige","L'Arno"],a:0},
    {q:"Qui a fondé Rome selon la légende ?",c:["Romulus","Rémus","Énée","Jules César"],a:0},
    {q:"En quelle année Rome a-t-elle été fondée selon la légende ?",c:["753 av. J.-C.","509 av. J.-C.","27 av. J.-C.","476 av. J.-C."],a:0},
    {q:"Quel empereur a construit le Colisée ?",c:["Vespasien","Néron","Auguste","Trajan"],a:0},
    {q:"Quel général romain a franchi le Rubicon ?",c:["Jules César","Pompée","Crassus","Marc Antoine"],a:0},
    {q:"En quelle année l'Empire romain d'Occident a-t-il chuté ?",c:["476","395","410","500"],a:0},
    {q:"Quelle langue était parlée par les Romains ?",c:["Latin","Grec","Italien","Étrusque"],a:0},
    {q:"Quel empereur a divisé l'Empire romain en deux ?",c:["Dioclétien","Constantin","Théodose","Justinien"],a:0},
  ],
  histoire_003: [ // Égypte ancienne
    {q:"Comment s'appellent les tombeaux des pharaons ?",c:["Les pyramides","Les hypogées","Les mastabas","Les temples"],a:0},
    {q:"Quel fleuve était vital pour la civilisation égyptienne ?",c:["Le Nil","Le Jourdain","Le Tigre","L'Euphrate"],a:0},
    {q:"Qui a déchiffré les hiéroglyphes grâce à la pierre de Rosette ?",c:["Champollion","Young","Carter","Maspero"],a:0},
    {q:"Quel pharaon a régné le plus longtemps ?",c:["Ramsès II","Khéops","Toutankhamon","Akhenaton"],a:0},
    {q:"En quelle année la pierre de Rosette a-t-elle été découverte ?",c:["1799","1801","1798","1805"],a:0},
    {q:"Quelle déesse égyptienne est représentée avec une tête de lionne ?",c:["Sekhmet","Bastet","Hathor","Isis"],a:0},
    {q:"Quel pharaon a introduit le monothéisme en Égypte ?",c:["Akhenaton","Amenhotep III","Ramsès II","Toutankhamon"],a:0},
    {q:"Combien de pyramides principales y a-t-il à Gizeh ?",c:["3","2","4","5"],a:0},
  ],
  histoire_004: [ // Guerre froide
    {q:"Quelles deux superpuissances s'affrontaient pendant la Guerre froide ?",c:["États-Unis et URSS","États-Unis et Chine","URSS et Chine","États-Unis et Europe"],a:0},
    {q:"En quelle année le mur de Berlin est-il tombé ?",c:["1989","1991","1987","1990"],a:0},
    {q:"Quelle était la signification de la 'crise des missiles de Cuba' ?",c:["L'URSS installait des missiles à Cuba","Les USA installaient des missiles en Turquie","Un blocus naval","Une invasion de Cuba"],a:0},
    {q:"Qui était le président américain pendant la crise des missiles ?",c:["John F. Kennedy","Dwight Eisenhower","Richard Nixon","Lyndon Johnson"],a:0},
    {q:"Comment s'appelait la ligne de démarcation en Europe ?",c:["Le rideau de fer","Le mur","La frontière","La ligne"],a:0},
    {q:"Quel programme spatial américain a envoyé l'homme sur la Lune ?",c:["Apollo","Gemini","Mercury","Vostok"],a:0},
    {q:"En quelle année l'URSS s'est-elle effondrée ?",c:["1991","1989","1990","1992"],a:0},
    {q:"Qui était le dernier dirigeant de l'URSS ?",c:["Mikhaïl Gorbatchev","Boris Eltsine","Leonid Brejnev","Konstantin Tchernenko"],a:0},
  ],
  histoire_005: [ // Renaissance
    {q:"Dans quel pays la Renaissance a-t-elle commencé ?",c:["Italie","France","Allemagne","Espagne"],a:0},
    {q:"Quel artiste a peint la Joconde ?",c:["Léonard de Vinci","Michel-Ange","Raphaël","Donatello"],a:0},
    {q:"Quel scientifique a été jugé par l'Église pour ses idées ?",c:["Galilée","Copernic","Kepler","Newton"],a:0},
    {q:"En quelle année la Renaissance a-t-elle commencé ?",c:["XIVe siècle","XIIIe siècle","XVe siècle","XVIe siècle"],a:0},
    {q:"Quelle famille italienne était la plus puissante à Florence ?",c:["Les Médicis","Les Borgia","Les Sforza","Les Visconti"],a:0},
    {q:"Quel artiste a sculpté David ?",c:["Michel-Ange","Donatello","Le Bernin","Verrocchio"],a:0},
    {q:"Qui a inventé l'imprimerie à caractères mobiles ?",c:["Gutenberg","Caxton","Alde Manuce","Fust"],a:0},
    {q:"Quel peintre italien est connu pour ses fresques de la chapelle Sixtine ?",c:["Michel-Ange","Léonard de Vinci","Raphaël","Botticelli"],a:0},
  ],
  histoire_006: [ // Les Vikings
    {q:"De quelle région d'Europe venaient les Vikings ?",c:["Scandinavie","Europe de l'Est","Îles Britanniques","Allemagne"],a:0},
    {q:"Quel type de bateau utilisaient les Vikings ?",c:["Le drakkar","La galère","Le knarr","Le longship"],a:0},
    {q:"Quel dieu nordique était le principal ?",c:["Odin","Thor","Loki","Freyr"],a:0},
    {q:"En quelle année les Vikings ont-ils attaqué Lindisfarne ?",c:["793","800","750","850"],a:0},
    {q:"Quel navigateur viking a atteint l'Amérique du Nord ?",c:["Leif Erikson","Erik le Rouge","Bjarni Herjólfsson","Harald à la Belle Chevelure"],a:0},
    {q:"Quelle était la religion des Vikings avant le christianisme ?",c:["La mythologie nordique","Le paganisme","Le chamanisme","L'animisme"],a:0},
    {q:"Comment s'appelle le paradis nordique des guerriers ?",c:["Le Valhalla","Le Helheim","Le Midgard","L'Asgard"],a:0},
    {q:"Quel roi viking a conquis l'Angleterre au XIe siècle ?",c:["Knut le Grand","Harald Hardrada","Sven à la Barbe Fourchue","Olaf Tryggvason"],a:0},
  ],
  histoire_007: [ // Chine ancienne
    {q:"Quelle était la route commerciale reliant la Chine à l'Occident ?",c:["La Route de la Soie","La Route des Épices","La Route du Thé","La Route du Jade"],a:0},
    {q:"Quel philosophe chinois a fondé le confucianisme ?",c:["Confucius","Lao Tseu","Sun Tzu","Mencius"],a:0},
    {q:"Quelle dynastie a construit la Grande Muraille ?",c:["Qin","Ming","Han","Tang"],a:0},
    {q:"Quel empereur a unifié la Chine pour la première fois ?",c:["Qin Shi Huang","Han Wudi","Tang Taizong","Kangxi"],a:0},
    {q:"En quelle année la Grande Muraille a-t-elle été construite ?",c:["À partir du IIIe siècle av. J.-C.","Au Ier siècle","Au VIIe siècle","Au XIIe siècle"],a:0},
    {q:"Quelle invention chinoise est l'une des quatre grandes inventions ?",c:["Le papier","La boussole","L'imprimerie","Toutes ces réponses"],a:3},
    {q:"Quelle dynastie a régné le plus longtemps sur la Chine ?",c:["Zhou","Han","Tang","Ming"],a:0},
    {q:"Quel explorateur chinois a navigué jusqu'en Afrique ?",c:["Zheng He","Zhang Qian","Wang Dayuan","Xu Fu"],a:0},
  ],
  histoire_008: [ // Seconde Guerre mondiale
    {q:"En quelle année la Seconde Guerre mondiale a-t-elle commencé ?",c:["1939","1941","1937","1940"],a:0},
    {q:"Qui était le dictateur de l'Allemagne nazie ?",c:["Adolf Hitler","Benito Mussolini","Joseph Staline","Hideki Tojo"],a:0},
    {q:"Quel jour a eu lieu le débarquement en Normandie ?",c:["6 juin 1944","8 mai 1945","7 décembre 1941","4 juillet 1944"],a:0},
    {q:"Quelle ville a subi la première bombe atomique ?",c:["Hiroshima","Nagasaki","Tokyo","Osaka"],a:0},
    {q:"En quelle année la guerre a-t-elle pris fin en Europe ?",c:["1945","1944","1946","1943"],a:0},
    {q:"Quel était le nom du front de l'Est ?",c:["Opération Barbarossa","Operation Overlord","Opération Torch","Opération Market Garden"],a:0},
    {q:"Quel pays a subi le plus de pertes humaines pendant la guerre ?",c:["URSS","Allemagne","Chine","Pologne"],a:0},
    {q:"Comment s'appelait le génocide perpétré par les nazis ?",c:["La Shoah","Le génocide","La Solution finale","L'Holocauste"],a:0},
  ],
  histoire_009: [ // Grèce antique
    {q:"Quelle était la cité-État la plus puissante de Grèce antique ?",c:["Athènes","Sparte","Corinthe","Thèbes"],a:0},
    {q:"Quel philosophe grec a été condamné à boire la ciguë ?",c:["Socrate","Platon","Aristote","Pythagore"],a:0},
    {q:"Qui a conquis la Grèce au IVe siècle av. J.-C. ?",c:["Philippe II de Macédoine","Alexandre le Grand","Darius","Xerxès"],a:0},
    {q:"Quel temple athénien est dédié à Athéna ?",c:["Le Parthénon","L'Érechthéion","Le temple de Zeus","Le temple d'Héphaïstos"],a:0},
    {q:"Quelle bataille a opposé les Grecs aux Perses en 490 av. J.-C. ?",c:["Marathon","Salamine","Thermopyles","Platées"],a:0},
    {q:"Quel historien grec est considéré comme le père de l'histoire ?",c:["Hérodote","Thucydide","Xénophon","Plutarque"],a:0},
    {q:"Quelles sont les trois ordres architecturaux grecs ?",c:["Dorique, ionique, corinthien","Dorique, toscan, composite","Ionique, corinthien, roman","Dorique, gothique, roman"],a:0},
    {q:"Quel médecin grec est le père de la médecine ?",c:["Hippocrate","Galien","Aristote","Erasistrate"],a:0},
  ],
  histoire_010: [ // Empire byzantin
    {q:"Quelle était la capitale de l'Empire byzantin ?",c:["Constantinople","Antioche","Alexandrie","Jérusalem"],a:0},
    {q:"Quel empereur byzantin a construit Sainte-Sophie ?",c:["Justinien","Constantin","Héraclius","Basile II"],a:0},
    {q:"En quelle année Constantinople est-elle tombée aux mains des Ottomans ?",c:["1453","1444","1460","1402"],a:0},
    {q:"Quelle était la religion officielle de l'Empire byzantin ?",c:["Le christianisme orthodoxe","Le catholicisme","Le christianisme","L'orthodoxie orientale"],a:0},
    {q:"Quel code de lois Justinien a-t-il compilé ?",c:["Le Corpus juris civilis","Le Code Justinien","Les Institutes","Le Digeste"],a:0},
    {q:"Quel sultan ottoman a conquis Constantinople ?",c:["Mehmed II","Mehmed I","Soliman le Magnifique","Bayezid II"],a:0},
    {q:"Quelle langue était parlée à Byzance ?",c:["Le grec","Le latin","Le turc","L'arménien"],a:0},
    {q:"Quel empereur byzantin a repoussé les Arabes au VIIIe siècle ?",c:["Léon III l'Isaurien","Constantin V","Héraclius","Maurice"],a:0},
  ],
  histoire_011: [ // Guerre du Vietnam
    {q:"En quelle année la guerre du Vietnam a-t-elle commencé ?",c:["1955","1965","1960","1970"],a:0},
    {q:"Quel pays soutenait le Vietnam du Nord ?",c:["L'URSS et la Chine","Les États-Unis","La France","La Corée du Nord"],a:0},
    {q:"Qui était le leader communiste du Vietnam ?",c:["Hô Chi Minh","Vo Nguyen Giap","Ngo Dinh Diem","Pham Van Dong"],a:0},
    {q:"En quelle année les derniers soldats américains ont-ils quitté le Vietnam ?",c:["1973","1975","1972","1971"],a:0},
    {q:"Quelle était la célèbre piste d'approvisionnement nord-vietnamienne ?",c:["La piste Hô Chi Minh","La route mandarine","La piste des Volontaires","La route de la Soie"],a:0},
    {q:"Quel président américain a intensifié la guerre ?",c:["Lyndon B. Johnson","John F. Kennedy","Richard Nixon","Dwight D. Eisenhower"],a:0},
    {q:"Quelle arme chimique les Américains ont-ils utilisée ?",c:["L'agent orange","Le napalm","Le gaz moutarde","Le phosphore blanc"],a:0},
    {q:"Combien de civils vietnamiens sont morts pendant la guerre ?",c:["Environ 2 millions","Environ 500 000","Environ 5 millions","Environ 1 million"],a:0},
  ],
  histoire_012: [ // Révolution industrielle
    {q:"Dans quel pays la révolution industrielle a-t-elle commencé ?",c:["Angleterre","France","Allemagne","États-Unis"],a:0},
    {q:"Quelle invention a marqué le début de la révolution industrielle ?",c:["La machine à vapeur","Le métier à tisser","La locomotive","Le coton"],a:0},
    {q:"Qui a amélioré la machine à vapeur ?",c:["James Watt","Thomas Newcomen","George Stephenson","Richard Arkwright"],a:0},
    {q:"En quelle année la révolution industrielle a-t-elle commencé ?",c:["Vers 1760","Vers 1700","Vers 1800","Vers 1750"],a:0},
    {q:"Quel matériau était essentiel à la révolution industrielle ?",c:["Le fer","Le charbon","Le coton","Le bois"],a:1},
    {q:"Quel transport a révolutionné les déplacements au XIXe siècle ?",c:["Le chemin de fer","La voiture","Le bateau à vapeur","Le dirigeable"],a:0},
    {q:"Quelle classe sociale est née de la révolution industrielle ?",c:["Le prolétariat","La bourgeoisie","Les artisans","Les paysans"],a:0},
    {q:"Quel mouvement ouvrier a émergé pendant cette période ?",c:["Le syndicalisme","Le communisme","Le socialisme","Le luddisme"],a:3},
  ],
  histoire_013: [ // Les Croisades
    {q:"Quel était le but des croisades ?",c:["Reprendre Jérusalem aux musulmans","Convertir les infidèles","Protéger les pèlerins","Conquérir l'Orient"],a:0},
    {q:"Qui a appelé à la première croisade en 1095 ?",c:["Le pape Urbain II","Le pape Grégoire VII","L'empereur byzantin","Pierre l'Ermite"],a:0},
    {q:"Combien de croisades principales ont eu lieu ?",c:["8","5","10","6"],a:0},
    {q:"En quelle année Jérusalem a-t-elle été prise lors de la première croisade ?",c:["1099","1097","1100","1085"],a:0},
    {q:"Qui a mené la troisième croisade ?",c:["Richard Cœur de Lion","Philippe Auguste","Frédéric Barberousse","Louis IX"],a:0},
    {q:"Quel sultan musulman a repris Jérusalem en 1187 ?",c:["Saladin","Nur ad-Din","Baybars","Al-Kamil"],a:0},
    {q:"Quelle croisade est connue comme la 'croisade des enfants' ?",c:["La croisade des enfants de 1212","La quatrième croisade","La cinquième croisade","La sixième croisade"],a:0},
    {q:"Quel roi de France est mort lors de la huitième croisade ?",c:["Louis IX (Saint Louis)","Philippe Auguste","Charles VIII","Louis VII"],a:0},
  ],
  histoire_014: [ // Guerre de Cent Ans
    {q:"Quels deux royaumes s'affrontaient dans la guerre de Cent Ans ?",c:["France et Angleterre","France et Espagne","Angleterre et Écosse","France et Bourgogne"],a:0},
    {q:"En quelle année la guerre de Cent Ans a-t-elle commencé ?",c:["1337","1314","1350","1380"],a:0},
    {q:"Qui a mené les Français à la victoire à Orléans ?",c:["Jeanne d'Arc","Charles VII","Du Guesclin","Philippe VI"],a:0},
    {q:"Combien d'années a duré la guerre ?",c:["116 ans","100 ans","115 ans","120 ans"],a:0},
    {q:"Quelle bataille a vu la défaite française en 1346 ?",c:["Crécy","Poitiers","Azincourt","Calais"],a:0},
    {q:"Quel roi anglais a revendiqué le trône de France ?",c:["Édouard III","Henri V","Richard II","Jean sans Terre"],a:0},
    {q:"En quelle année Jeanne d'Arc a-t-elle été brûlée ?",c:["1431","1429","1435","1430"],a:0},
    {q:"Quel roi de France est mort en 1380 pendant la guerre ?",c:["Charles V","Charles VI","Philippe VI","Jean II"],a:0},
  ],
  histoire_015: [ // Chute de Berlin
    {q:"En quelle année le mur de Berlin est-il tombé ?",c:["1989","1990","1987","1991"],a:0},
    {q:"En quelle année le mur a-t-il été construit ?",c:["1961","1958","1963","1960"],a:0},
    {q:"Comment s'appelait l'acte de franchir le mur ?",c:["La traversée","La fuite","L'évasion","La défection"],a:0},
    {q:"Combien de temps le mur est-il resté debout ?",c:["28 ans","25 ans","30 ans","20 ans"],a:0},
    {q:"Quel dirigeant soviétique était au pouvoir lors de la chute ?",c:["Mikhaïl Gorbatchev","Leonid Brejnev","Youri Andropov","Konstantin Tchernenko"],a:0},
    {q:"Combien de personnes ont réussi à fuir par-dessus le mur ?",c:["Environ 5 000","Environ 1 000","Environ 10 000","Environ 500"],a:0},
    {q:"Quelle porte de Berlin est devenue un symbole de la chute du mur ?",c:["La porte de Brandebourg","La porte de Karl","La porte de Friedrich","La porte de Checkpoint Charlie"],a:0},
    {q:"Combien de personnes sont mortes en tentant de traverser le mur ?",c:["Au moins 140","Environ 50","Plus de 500","Environ 100"],a:0},
  ],
  histoire_016: [ // Conquête spatiale
    {q:"Qui a été le premier homme dans l'espace ?",c:["Youri Gagarine","Neil Armstrong","John Glenn","Alan Shepard"],a:0},
    {q:"En quelle année Gagarine a-t-il volé ?",c:["1961","1960","1962","1963"],a:0},
    {q:"Qui a marché sur la Lune en premier ?",c:["Neil Armstrong","Buzz Aldrin","Michael Collins","John Young"],a:0},
    {q:"En quelle année l'homme a-t-il marché sur la Lune ?",c:["1969","1968","1970","1967"],a:0},
    {q:"Quelle phrase célèbre a prononcée Armstrong ?",c:["Un petit pas pour l'homme","Houston, on a un problème","Le ciel est la limite","Nous venons en paix"],a:0},
    {q:"Quel programme spatial américain a envoyé l'homme sur la Lune ?",c:["Apollo","Gemini","Mercury","Space Shuttle"],a:0},
    {q:"Quel pays a envoyé le premier satellite artificiel ?",c:["URSS","États-Unis","Chine","France"],a:0},
    {q:"Comment s'appelait le premier satellite ?",c:["Spoutnik 1","Explorer 1","Vanguard 1","Cosmos 1"],a:0},
  ],
  histoire_017: [ // Empire aztèque
    {q:"Où se trouvait l'Empire aztèque ?",c:["Mexique","Pérou","Colombie","Guatemala"],a:0},
    {q:"Quelle était la capitale aztèque ?",c:["Tenochtitlan","Cuzco","Teotihuacán","Chichén Itzá"],a:0},
    {q:"Quel conquistador a renversé l'Empire aztèque ?",c:["Hernán Cortés","Francisco Pizarro","Vasco Núñez de Balboa","Hernando de Soto"],a:0},
    {q:"En quelle année Tenochtitlan est-elle tombée ?",c:["1521","1519","1532","1500"],a:0},
    {q:"Quel empereur aztèque a accueilli Cortés ?",c:["Moctezuma II","Cuauhtémoc","Cuitláhuac","Ahuitzotl"],a:0},
    {q:"Quelle était la religion des Aztèques ?",c:["Polythéiste","Monothéiste","Animiste","Panthéiste"],a:0},
    {q:"Quel dieu aztèque était le dieu du soleil ?",c:["Huitzilopochtli","Quetzalcóatl","Tezcatlipoca","Tlaloc"],a:0},
    {q:"Quelle écriture utilisaient les Aztèques ?",c:["Les pictogrammes","Les hiéroglyphes","L'alphabet latin","Les idéogrammes"],a:0},
  ],
  histoire_018: [ // Révolution russe
    {q:"En quelle année la révolution d'Octobre a-t-elle eu lieu ?",c:["1917","1918","1905","1921"],a:0},
    {q:"Qui a dirigé les bolcheviks pendant la révolution ?",c:["Lénine","Trotsky","Staline","Kerensky"],a:0},
    {q:"Qui était le dernier tsar de Russie ?",c:["Nicolas II","Alexandre III","Pierre le Grand","Catherine la Grande"],a:0},
    {q:"Quel était le nom du parti de Lénine ?",c:["Les bolcheviks","Les mencheviks","Les socialistes révolutionnaires","Les cadets"],a:0},
    {q:"En quelle année l'URSS a-t-elle été officiellement créée ?",c:["1922","1918","1924","1930"],a:0},
    {q:"Quelle était l'idéologie des bolcheviks ?",c:["Le marxisme-léninisme","Le socialisme","Le communisme","Le trotskisme"],a:0},
    {q:"Quel palais a été pris d'assaut lors de la révolution d'Octobre ?",c:["Le palais d'Hiver","Le Kremlin","Le palais de Catherine","Le palais Peterhof"],a:0},
    {q:"Qui a été le premier leader de l'URSS ?",c:["Lénine","Trotsky","Staline","Boukharine"],a:0},
  ],
};
for (const [id, levels] of Object.entries(HISTOIRE)) {
  r[id] = levels;
}

// Rest not shown due to size limit - run with what we have
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
console.log('Done. Batch 2 written:', Object.keys(r).length, 'themes');
