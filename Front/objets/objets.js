import { fetchData } from "../../Back/fetch.js";

const container = document.querySelector('.container')

fetchData('/objets').then((data) => {
    data.map((objet) => {
        const newDiv = document.createElement('div');
        newDiv.className = 'newDiv';

        const titleImg = document.createElement('div');
        titleImg.className = 'titleImg';
        
        const title = document.createElement('span');
        title.className = 'title';
        title.innerText = objet.name;
        
        const img = document.createElement('img');
        img.src = objet.image;
        
        const desc = document.createElement('p');
        desc.innerText = objet.description;
        
        container.append(newDiv);
        titleImg.append(title, img);
        newDiv.append(titleImg, desc);
    });
});