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
            "released_date": "February 21, 1986",
            "console": "Console: Nintendo Entertainment System",
            "id": "5f6ce9d805615a85623ec2b7"
        },
        {
            "name": "Zelda II: The Adventure of Link",
            "description": "A few years after the defeat of Ganon and the rescue of Princess Zelda, Link, now at the age of sixteen, is disturbed by the appearance of a mark on the back of his hand. Upon seeing this mark, Impa, the nurse of Princess Zelda, tells him the story of how, ages ago, the King of Hyrule had hidden a third part of the Triforce, the Triforce of Courage, in the Great Palace to safeguard it from evil. ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/zelda1.jpg",
            "released_date": " January 14, 1987",
            "console": "Console: Nintendo Entertainment System",
            "id": "5f6ce9d805615a85623ec2bd"
        },
        {
            "name": "The Legend of Zelda: A Link to the Past",
            "description": "One day, a band of evil thieves managed to open the gateway to the Sacred Realm, where the mystical Triforce was hidden. Upon finding the sacred golden relic, the leader of the thieves, Ganondorf, slew his followers and claimed it as his own. Before long, dark power began to flow forth from the Sacred Realm. People were drawn into this darkness, and never heard from again. As a result, the King of Hyrule ordered the seven sages to seal the entrance to the Sacred Realm. A great battle ensued—monsters poured into the Light World from the sacred land and attacked the castle. The Knights of Hyrule defended the sages during the great battle against evil, and, though most of them perished in the struggle, the sages were able to cast their seal, stopping the flow of darkness and trapping the evil king Ganon within. This battle became known as the Imprisoning War. ",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "image" : "../img/zeldalinkpast.jpg",
            "released_date": " April 13, 1992",
            "console": "Console: Nintendo GameBoy",
            "id": "5f6ce9d805615a85623ec2b8"
        },
        {
            "name": "The Legend of Zelda: Ocarina of Time",
            "description": "The Legend of Zelda: Ocarina of Time is the fifth main installment of The Legend of Zelda series and the first to be released for the Nintendo 64. It was one of the most highly anticipated games of its age. It is listed among the greatest video games ever created by numerous websites and magazines. Released in the United States on November 23, 1998, it was the first game in The Legend of Zelda series that was visually displayed in 3D . ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/zeldaocarina.jpg",
            "released_date": " November 23, 1998",
            "console": "Console: Nintendo 64",
            "id": "5f6ce9d805615a85623ec2ba"
        },
        {
            "name": "The Legend of Zelda: Link's Awakening",
            "description": "The game was also made available on the Nintendo 3DS eShop on June 7, 2011 at the price of $5.99 US. ",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "image": "../img/linkawake.jpg",
            "released_date": " December 15, 1998",
            "id": "5f6ce9d805615a85623ec2bb"
        },
        {
            "name": "The Legend of Zelda: Majora's Mask",
            "description": "The Legend of Zelda: Majora's Mask is the sixth main installment of The Legend of Zelda series, first released on the Nintendo 64 in 2000. Unique among The Legend of Zelda series, the game includes a time system that spans three days, and this cycle must be reset periodically to progress through the game. Majora's Mask is one of the few Zelda games in which Ganon does not play any role whatsoever. In addition, Princess Zelda does not play a major role; she is only seen once in a flashback scene from Ocarina of Time. ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/majora.avif",
            "released_date": " October 26, 2000",
            "id": "5f6ce9d805615a85623ec2bc"
        },
        {
            "name": "The Legend of Zelda: Oracle of Ages",
            "description": "The Legend of Zelda: Oracle of Ages is one of two The Legend of Zelda  titles released for the Game Boy Color, the other being Oracle of Seasons, both representing the seventh and eighth main installments of the series. Released near the end of the system's lifespan, Oracle of Ages and its counterpart were said to \"send the Game Boy Color out with a bang.\" In anticipation of the upcoming release of the Game Boy Color's successor, the Game Boy Advance, the games exhibited special features  when played on the new handheld system. ",
            "developer": "Capcom",
            "publisher": "Nintendo",
            "image": "../img/ages.jpg",
            "released_date": " May 14, 2001",
            "id": "5f6ce9d805615a85623ec2b9"
        },
        {
            "name": "The Legend of Zelda: Oracle of Seasons",
            "description": "The Legend of Zelda: Oracle of Seasons is one of two The Legend of Zelda  titles released for the Game Boy Color, the other being Oracle of Ages, both representing the seventh and eighth main installments of the series. Released near the end of the system's lifespan, Oracle of Seasons and its counterpart were said to \"send the Game Boy Color out with a bang.\" In anticipation of the upcoming release of the Game Boy Color's successor, the Game Boy Advance, the games exhibited special features  when played on the new handheld system. ",
            "developer": "Capcom",
            "publisher": "Nintendo",
            "image": "../img/seasons.jpg",
            "released_date": " May 14, 2001",
            "id": "5f6ce9d805615a85623ec2c0"
        },
        {
            "name": "The Legend of Zelda: The Wind Waker",
            "description": "The Legend of Zelda: The Wind Waker is the tenth main installment of The Legend of Zelda series. It is the first Zelda game for the Nintendo GameCube, and was released in Japan on December 13, 2002, in Canada and the United States on March 24, 2003, in South Korea on April 16, 2003, in Europe on May 2, 2003 and in Australia on May 7, 2003. ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/windwaker.jpg",
            "released_date": " March 24, 2003",
            "id": "5f6ce9d805615a85623ec2bf"
        },
        {
            "name": "The Legend of Zelda: Four Swords Adventures",
            "description": "One night, an ominous cloud covers Hyrule, throwing fear into the people. Princess Zelda calls upon her most trusted childhood friend, Link. She wants to check up on the Four Sword, fearing that the seal that imprisoned the evil wind sorcerer Vaati inside of it at the end of Four Swords might have weakened. Inside the castle they meet up with the gathered six Maidens, whose purpose is to protect Hyrule as well as the Four Sword Sanctuary. With the help of the maidens Zelda summons a portal to the sanctuary.  ",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "image": "../img/four.jpg",
            "released_date": " June 7, 2004",
            "id": "5f6ce9d805615a85623ec2c1"
        },
        {
            "name": "The Legend of Zelda: The Minish Cap",
            "description": "The Legend of Zelda: The Minish Cap is the twelfth main installment of The Legend of Zelda series. It was released for the Game Boy Advance in 2004. ",
            "developer": "Capcom",
            "publisher": "Nintendo",
            "image": "../img/minish.jpg",
            "released_date": " January 10, 2005",
            "id": "5f6ce9d805615a85623ec2c6"
        },
        {
            "name": "The Legend of Zelda: Twilight Princess",
            "description": "The Legend of Zelda: Twilight Princess is the thirteenth main installment of The Legend of Zelda series, released for both the Nintendo GameCube and Wii. It was highly anticipated by many members of the gaming community and was regarded as finally fulfilling the dreams of those who wanted a much more realistic and mature Zelda game, as seen in the SpaceWorld 2000 GameCube Tech Demo. This is the first Zelda game to be rated T by ESRB and 12+ by PEGI. The reason is probably because of violence, blood , and signs of nudity . This game is also notable for being the first console Zelda title released in the United States before Japan, as the Wii version was released in America on November 19, 2006, whereas the Japanese versions were released on December 2. Because of this, Twilight Princess was one of the launch titles for the Wii alongside Wii Sports in the United States. ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/twilight.jpg",
            "released_date": " November 19, 2006",
            "id": "5f6ce9d805615a85623ec2be"
        },
        {
            "name": "The Legend of Zelda : Phantom Hourglass",
            "description": "",
            "developer":"",
            "publisher":"",
            "image": "../img/phantom.jpg",
            "release_date":"October 7, 2007"
        },
        {
            "name": "The Legend of Zelda: Spirit Tracks",
            "description": " ",
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "image": "../img/spirit.jpg",
            "released_date": " December 7, 2009",
            "id": "5f6ce9d805615a85623ec2c5"
        },
        {
            "name": "The Legend of Zelda : Skyward Sword",
            "description": "",
            "developer": "",
            "publisher": "",
            "image": "../img/skyward.jpg",
            "released_date": "November 18, 2011",
        },
        {
            "name": "The Legend of Zelda : A Link Between Worlds",
            "description": "",
            "developer": "",
            "publisher": "",
            "image": "../img/between.jpg",
            "released_date": "November 22, 2013"
        },
        {
            "name": "The Legend of Zelda: Breath of the Wild",
            "description": "The Legend of Zelda: Breath of the Wild is the nineteenth main installment of The Legend of Zelda series. It was released simultaneously worldwide for the Wii U and Nintendo Switch on March 3, 2017",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "image": "../img/breath.jpg",
            "released_date": " March 3, 2017",
            "id": "5f6ce9d805615a85623ec2c9"
        },
        {
            "name": "The Legend of Zelda : Tears of the Kingdom",
            "description": "",
            "developer": "",
            "publisher": "Nintendo",
            "image": "../img/tears.avif",
            "released_date": "May 12, 2023 ",
            "id": "5f6ce9d805615a85623ec2cf"
        }
    ]
    res.send(games);
})