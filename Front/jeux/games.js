import { fetchData } from "../../Back/fetch.js";


fetchData('/games').then((data) => {
    data.map((game) => {
        console.log(game)
        const boxes = document.querySelector('#boxes');

        const box = document.createElement('span');
        box.className = 'box';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'imgContainer'

        const titleContainer = document.createElement('div');
        titleContainer.className = 'textContainer';

        const p = document.createElement('p');
        p.className = 'gameName';
        p.textContent = game.name;

        const img = document.createElement('img');
        img.src = game.image;
        img.style.width = '100%'
        p.style.textAlign = 'center'

        boxes.append(box)
        box.append(imgContainer)
        box.append(titleContainer)
        imgContainer.append(img)
        titleContainer.append(p)
})});
