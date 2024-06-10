import { fetchData } from "./fetch.js";


fetchData('/games').then((data) => {
    data.map((game) => {
        console.log(game)
        const boxes = document.querySelector('#boxes');
        const box = document.createElement('span');
        box.className = 'box';
        const p = document.createElement('p');
        const img = document.createElement('img');
        const divImg = document.createElement('div');
        p.textContent = game.name;
        img.src = data.image;
        img.style.width = '100%'
        p.style.textAlign = 'center'
        boxes.append(box)
        box.append(divImg)
        divImg.append(img)
        box.append(p);
})});
