import { fetchData } from "../../Back/fetch.js";

const container = document.querySelector('.container');

const mainTitle = document.createElement('span');
mainTitle.className = 'mainTitle';
mainTitle.innerText = 'Personnages Principaux'

container.append(mainTitle)


fetchData('/characters').then((data) => {
    data.map((perso) => {
        const newDiv = document.createElement('div');
        newDiv.className = 'newDiv';

        const titleImg = document.createElement('div');
        titleImg.className = 'titleImg';

        const title = document.createElement('span');
        title.className = 'title';
        title.innerText = perso.name;

        const img = document.createElement('img');
        img.src = perso.image;

        const desc = document.createElement('p');
        desc.innerText = perso.description;

        container.append(newDiv, mainTitle2);
        titleImg.append(title, img)
        newDiv.append(titleImg, desc);
    });
})

const mainTitle2 = document.createElement('span');
mainTitle2.className = 'mainTitle';
mainTitle2.innerText = 'Personnages Secondaires'