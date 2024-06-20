import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, (error) => {
    error ? console.log(error) : console.log(`le serveur a démarré sur le port ${port}`);
});

app.get('/games', (req, res) => {
    const games = [
        {
            "name": "The Legend of Zelda",
            "description": "The Legend of Zelda is the first installment of the Zelda series. It centers its plot around a boy named Link, who becomes the central protagonist throughout the series. It came out as early as 1986 for the Famicom in Japan, and was later released in the western world, including Europe and the US in 1987. It has since then been re-released several times, for the Nintendo GameCube as well as the Game Boy Advance. The Japanese version of the game on the Famicom is known as The Hyrule Fantasy: The Legend of Zelda. ",
            "developer": "Nintendo R&D 4",
            "publisher": "Nintendo",
            "image": '../img/zelda0.jpg',
            "released_date": "21 février 1986",
            "console": "Nintendo Entertainment System",
            "id": "5f6ce9d805615a85623ec2b7"
        },
        {
            "name": "Zelda II: The Adventure of Link",
            "description": "A few years after the defeat of Ganon and the rescue of Princess Zelda, Link, now at the age of sixteen, is disturbed by the appearance of a mark on the back of his hand. Upon seeing this mark, Impa, the nurse of Princess Zelda, tells him the story of how, ages ago, the King of Hyrule had hidden a third part of the Triforce, the Triforce of Courage, in the Great Palace to safeguard it from evil. ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/zelda1.jpg",
            "released_date": "14 janvier 1987",
            "console": "Nintendo Entertainment System",
            "id": "5f6ce9d805615a85623ec2bd"
        },
        {
            "name": "A Link to the Past",
            "description": "One day, a band of evil thieves managed to open the gateway to the Sacred Realm, where the mystical Triforce was hidden. Upon finding the sacred golden relic, the leader of the thieves, Ganondorf, slew his followers and claimed it as his own. Before long, dark power began to flow forth from the Sacred Realm. People were drawn into this darkness, and never heard from again. As a result, the King of Hyrule ordered the seven sages to seal the entrance to the Sacred Realm. A great battle ensued—monsters poured into the Light World from the sacred land and attacked the castle. The Knights of Hyrule defended the sages during the great battle against evil, and, though most of them perished in the struggle, the sages were able to cast their seal, stopping the flow of darkness and trapping the evil king Ganon within. This battle became known as the Imprisoning War. ",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "image" : "../img/zeldalinkpast.jpg",
            "released_date": "13 avril 1992",
            "console": "Nintendo Game Boy",
            "id": "5f6ce9d805615a85623ec2b8"
        },
        {
            "name": "Ocarina of Time",
            "description": "The Legend of Zelda: Ocarina of Time is the fifth main installment of The Legend of Zelda series and the first to be released for the Nintendo 64. It was one of the most highly anticipated games of its age. It is listed among the greatest video games ever created by numerous websites and magazines. Released in the United States on November 23, 1998, it was the first game in The Legend of Zelda series that was visually displayed in 3D . ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/zeldaocarina.jpg",
            "released_date": "23 novembre 1998",
            "console": "Nintendo 64",
            "id": "5f6ce9d805615a85623ec2ba"
        },
        {
            "name": "Link's Awakening",
            "description": "The game was also made available on the Nintendo 3DS eShop on June 7, 2011 at the price of $5.99 US. ",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "image": "../img/linkawake.jpg",
            "released_date": "15 décembre 1998",
            "console": "Nintendo Game Boy",
            "id": "5f6ce9d805615a85623ec2bb"
        },
        {
            "name": "Majora's Mask",
            "description": "The Legend of Zelda: Majora's Mask is the sixth main installment of The Legend of Zelda series, first released on the Nintendo 64 in 2000. Unique among The Legend of Zelda series, the game includes a time system that spans three days, and this cycle must be reset periodically to progress through the game. Majora's Mask is one of the few Zelda games in which Ganon does not play any role whatsoever. In addition, Princess Zelda does not play a major role; she is only seen once in a flashback scene from Ocarina of Time. ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/majora.avif",
            "released_date": "26 octobre 2000",
            "console": "Nintendo 64",
            "id": "5f6ce9d805615a85623ec2bc"
        },
        {
            "name": "Oracle of Ages",
            "description": "The Legend of Zelda: Oracle of Ages is one of two The Legend of Zelda  titles released for the Game Boy Color, the other being Oracle of Seasons, both representing the seventh and eighth main installments of the series. Released near the end of the system's lifespan, Oracle of Ages and its counterpart were said to \"send the Game Boy Color out with a bang.\" In anticipation of the upcoming release of the Game Boy Color's successor, the Game Boy Advance, the games exhibited special features  when played on the new handheld system. ",
            "developer": "Capcom",
            "publisher": "Nintendo",
            "image": "../img/ages.jpg",
            "released_date": "14 mai 2001",
            "console": "Game Boy Color",
            "id": "5f6ce9d805615a85623ec2b9"
        },
        {
            "name": "Oracle of Seasons",
            "description": "The Legend of Zelda: Oracle of Seasons is one of two The Legend of Zelda  titles released for the Game Boy Color, the other being Oracle of Ages, both representing the seventh and eighth main installments of the series. Released near the end of the system's lifespan, Oracle of Seasons and its counterpart were said to \"send the Game Boy Color out with a bang.\" In anticipation of the upcoming release of the Game Boy Color's successor, the Game Boy Advance, the games exhibited special features  when played on the new handheld system. ",
            "developer": "Capcom",
            "publisher": "Nintendo",
            "image": "../img/seasons.jpg",
            "released_date": "14 mai 2001",
            "console": "Game Boy Color",
            "id": "5f6ce9d805615a85623ec2c0"
        },
        {
            "name": "The Wind Waker",
            "description": "The Legend of Zelda: The Wind Waker is the tenth main installment of The Legend of Zelda series. It is the first Zelda game for the Nintendo GameCube, and was released in Japan on December 13, 2002, in Canada and the United States on March 24, 2003, in South Korea on April 16, 2003, in Europe on May 2, 2003 and in Australia on May 7, 2003. ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/windwaker.jpg",
            "released_date": "24 mars 2003",
            "console": "Nintendo Gamecube",
            "id": "5f6ce9d805615a85623ec2bf"
        },
        {
            "name": "Four Swords Adventures",
            "description": "One night, an ominous cloud covers Hyrule, throwing fear into the people. Princess Zelda calls upon her most trusted childhood friend, Link. She wants to check up on the Four Sword, fearing that the seal that imprisoned the evil wind sorcerer Vaati inside of it at the end of Four Swords might have weakened. Inside the castle they meet up with the gathered six Maidens, whose purpose is to protect Hyrule as well as the Four Sword Sanctuary. With the help of the maidens Zelda summons a portal to the sanctuary.  ",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "image": "../img/four.jpg",
            "released_date": "7 juin 2004",
            "console": "Nintendo Gamecube",
            "id": "5f6ce9d805615a85623ec2c1"
        },
        {
            "name": "The Minish Cap",
            "description": "The Legend of Zelda: The Minish Cap is the twelfth main installment of The Legend of Zelda series. It was released for the Game Boy Advance in 2004. ",
            "developer": "Capcom",
            "publisher": "Nintendo",
            "image": "../img/minish.jpg",
            "released_date": "10 janvier 2005",
            "console": "Game Boy Advance",
            "id": "5f6ce9d805615a85623ec2c6"
        },
        {
            "name": "Twilight Princess",
            "description": "The Legend of Zelda: Twilight Princess is the thirteenth main installment of The Legend of Zelda series, released for both the Nintendo GameCube and Wii. It was highly anticipated by many members of the gaming community and was regarded as finally fulfilling the dreams of those who wanted a much more realistic and mature Zelda game, as seen in the SpaceWorld 2000 GameCube Tech Demo. This is the first Zelda game to be rated T by ESRB and 12+ by PEGI. The reason is probably because of violence, blood , and signs of nudity . This game is also notable for being the first console Zelda title released in the United States before Japan, as the Wii version was released in America on November 19, 2006, whereas the Japanese versions were released on December 2. Because of this, Twilight Princess was one of the launch titles for the Wii alongside Wii Sports in the United States. ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/twilight.jpg",
            "released_date": "19 novembre 2006",
            "console": "Nintendo Gamecube | Nintendo Wii",
            "id": "5f6ce9d805615a85623ec2be"
        },
        {
            "name": "Phantom Hourglass",
            "description": "",
            "developer":"",
            "publisher":"",
            "image": "../img/phantom.jpg",
            "released_date":"7 octobre 2007",
            "console": "Nintendo DS"
        },
        {
            "name": "Spirit Tracks",
            "description": " ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/spirit.jpg",
            "released_date": "7 décembre 2009",
            "console": "Nintendo DS",
            "id": "5f6ce9d805615a85623ec2c5"
        },
        {
            "name": "Skyward Sword",
            "description": "",
            "developer": "",
            "publisher": "",
            "image": "../img/skyward.jpg",
            "released_date": "18 novembre 2011",
            "console": "Nintendo Wii"
        },
        {
            "name": "A Link Between Worlds",
            "description": "",
            "developer": "",
            "publisher": "",
            "image": "../img/between.jpg",
            "released_date": "22 novembre 2013",
            "console": "Nintendo 3DS"
        },
        {
            "name": "Breath of the Wild",
            "description": "The Legend of Zelda: Breath of the Wild is the nineteenth main installment of The Legend of Zelda series. It was released simultaneously worldwide for the Wii U and Nintendo Switch on March 3, 2017",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "image": "../img/breath.jpg",
            "released_date": "3 mars 2017",
            "console": "Nintendo Switch",
            "id": "5f6ce9d805615a85623ec2c9"
        },
        {
            "name": "Tears of the Kingdom",
            "description": "",
            "developer": "",
            "publisher": "Nintendo",
            "image": "../img/tears.avif",
            "released_date": "12 mai 2023",
            "console": "Nintendo Switch",
            "id": "5f6ce9d805615a85623ec2cf"
        }
    ]
    res.send(games);
});


app.get('/characters', (req, res) => {
    const characters = [
    {
        "name": "Link",
        "image": "../img/linkFrontPage.webp",
        "description": "Link est un personnage dont l’histoire, l'apparence et l’âge peuvent cours des jeux. De manière générale, on peut le décrire comme un jeune garçon, dont l'âge ne dépasse jamais dix-neuf ans, qui va être amené à quitter son foyer pour partir en voyage afin de combattre les forces du mal.\n Bien qu'il ne semble pas connaître très bien le maniement des armes au début des jeux, il maîtrise rapidement de nouvelles techniques et se constitue un arsenal varié (l'épée restant son arme fétiche), apprend quelques fois la magie, traverse des donjons, pour devenir finalement un héros légendaire."
    },
    {
        "name": "Zelda",
        "image": "../img/zeldaSmash.webp",
        "description": "La Princesse Zelda est un personnage central de la série The Legend of Zelda. Bien que la série doive son nom à ce personnage, il ne s'agit pas d'un personnage jouable dans la série principale et elle n'est pas non plus le personnage principal. Il y a même certains jeux où elle n'apparaît pas ou très peu (comme Majora's Mask ou encore Tri Force Heroes). Il s'agit d'un membre de la famille royale d'Hyrule.\n Elle est la plupart du temps enlevée par Ganondorf, Vaati ou un autre antagoniste et Link doit la secourir. Comme Link, elle a de nombreuses incarnations au fil des jeux."
    },
    {
        "name": "Ganondorf",
        "image": "../img/ganondorf.webp",
        "description": "Ganondorf est l'antagoniste principal de la série Zelda. Il est présent dans la saga depuis The Legend of Zelda sous sa forme bestiale Ganon, mais apparaît sous sa forme humaine pour la première fois dans Ocarina of Time, bien qu'elle ait été mentionnée dans A Link to the Past. Ganondorf fait son retour dans Tears of the Kingdom pour la première fois depuis Twilight Princess, après dix-sept années d'absence dans la série principale.\n Originaire des contrées Gerudos, Ganondorf est un homme fondamentalement mauvais qui n'a de cesse de vouloir soumettre Hyrule par tous les moyens. Sa nature dépravée ainsi que ses ambitions destructrices le désignent comme l'ennemi héréditaire de Link et Zelda, seuls à même de représenter une menace pour le Seigneur du Malin."
    },
    ]
    res.send(characters);
})



app.get('/otherCharacters', (req, res) => {
    const otherCharacters = [
    {
        "name": "Roi d'Hyrule",
        "image": "../img/king.webp",
        "description": "Le Roi d’Hyrule est un personnage récurrent à la série Legend of Zelda. Pourtant, bien que son nom soit énoncé dans beaucoup d’épisodes de la saga, le Roi d’Hyrule n’est apparu que très rarement. On ressent tout du moins sa présence sur l’univers de la série, étant le père de la princesse Zelda."
    },
    {
        "name": "Épona",
        "image": "../img/epona.webp",
        "description": "Épona est une jument apparaissant dans Ocarina of Time, Majora's Mask, Four Swords Adventures, Twilight Princess et Breath of the Wild. Elle fait également une apparition dans The Minish Cap, à côté de Malon qui vend du lait dans la cité d'Hyrule.\nSon nom doit son origine à une divinité celtique gauloise, qui est représentée par un cheval."
    },
    {
        "name": "Impa",
        "image": "../img/impa.webp",
        "description": "Impa est un personnage récurrent de la saga The Legend of Zelda.\n Selon les jeux, son apparence, son âge et son rôle sont différents. Le plus souvent, elle est la nourrice ou le garde du corps de la Princesse Zelda."
    },
    {
        "name": "Terry",
        "image": "../img/terry.webp",
        "description": "Terry est un personnage récurent de la série The Legend of Zelda.\nIl s'agit d'un marchand itinérant chez qui Link peut acheter divers articles. Il prend soin de ses clients et offre souvent des réductions aux plus fidèles. Il est très connu parmi les fans de la série pour ses interjections : 'OOOOOOH!', 'Thank you!' et 'Bye!'"
    },
    ];
    res.send(otherCharacters);
});

app.get('/objets', (req, res) => {
    const items = [
        {
            "name": "Triforce",
            "image": "../img/triforce.webp",
            "description": "La Triforce est un artefact sacré et mystique, constitué de trois triangles d'or qui se combinent pour former un triangle plus grand. Chacun des trois triangles représente une vertu divine : la Puissance, la Sagesse et le Courage. Ensemble, ils forment un symbole de l'équilibre et de l'harmonie dans le royaume d'Hyrule.\nLorsqu'une personne possède les trois parties de la Triforce, elle obtient un pouvoir quasi divin, capable de réaliser n'importe quel souhait. Cependant, la Triforce ne fait que révéler le vrai cœur de son porteur, ne pouvant être utilisée pleinement que par ceux dont les intentions sont pures et équilibrées."
        },
        {
            "name": "Épée de Légende",
            "image": "../img/mastersword.png",
            "description": "La Master Sword, également connue sous le nom d'Épée de légende, est l'une des armes les plus emblématiques de la série The Legend of Zelda. Forgée pour éradiquer le mal, elle est souvent le seul moyen de vaincre Ganon ou d'autres forces maléfiques menaçant Hyrule.\nLa lame est reconnaissable à son éclat bleu vif, et son garde en croix est orné de motifs dorés et bleus.\nLa Master Sword est souvent trouvée dans un sanctuaire ou un temple, reposant sur un piédestal en attente d'un héros digne de la brandir."
        },
        {
            "name": "Bouclier Hylien",
            "image": "../img/shield.webp",
            "description": "Le Bouclier Hylien est l'un des boucliers les plus reconnaissables et emblématiques de la série The Legend of Zelda. Il s'agit d'un grand bouclier en métal, de forme rectangulaire avec un sommet pointu, souvent décoré du symbole de la Triforce et d'un aigle rouge stylisé. Le bouclier est principalement bleu avec des bordures argentées, renforçant son apparence royale et prestigieuse.\nCe bouclier offre une excellente protection contre les attaques physiques et magiques, et il est souvent le choix de prédilection de Link pour affronter des ennemis puissants et traverser des terrains dangereux. Ce bouclier est non seulement un outil défensif crucial, mais il symbolise également le courage et la détermination de Link, marquant son statut de héros et de protecteur d'Hyrule."
        },
        {
            "name": "Ocarina du Temps",
            "image": "../img/ocarina.png",
            "description": "L'Ocarina du Temps est un instrument magique et légendaire dans la série The Legend of Zelda. C'est une ocarina bleue à six trous, souvent ornée d'un symbole sacré. Cet instrument joue un rôle central dans le jeu éponyme, permettant à Link de voyager dans le temps, de manipuler la météo, de téléporter vers des lieux spécifiques et de résoudre divers puzzles.\nL'ocarina n'est pas seulement un outil puissant, mais aussi un symbole de la connexion entre Link et la princesse Zelda, souvent donnée à Link par Zelda elle-même comme un moyen de communication et de protection."
        },
    ];
    res.send(items);
});