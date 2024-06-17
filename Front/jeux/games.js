import { fetchData } from "../../Back/fetch.js";


fetchData('/games').then((data) => {
    data.map((game) => {
        const boxes = document.querySelector('#boxes');

        const box = document.createElement('span');
        box.className = 'box';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'imgContainer';

        const titleContainer = document.createElement('div');
        titleContainer.className = 'textContainer';

        const p = document.createElement('p');
        p.className = 'gameName';
        p.textContent = game.name;
        p.style.textAlign = 'center';

        const img = document.createElement('img');
        img.src = game.image;
        img.style.width = '100%';
        img.style.height = 'auto';

        const dropDownConsole = document.createElement('p');
        dropDownConsole.id = 'dropDownConsole';
        dropDownConsole.style.borderTop = "2px solid green";
        dropDownConsole.textContent = game.console;

        const dropDownDate = document.createElement('p');
        dropDownDate.id = 'dropDownDate';
        dropDownDate.style.borderTop = "2px solid green";
        dropDownDate.textContent = game.released_date;

        box.append(imgContainer, titleContainer, dropDownConsole, dropDownDate);

        box.addEventListener('mouseenter', () => {
            box.classList.add('show');
        });

        box.addEventListener('mouseleave', () => {
            box.classList.remove('show');
        });

        boxes.append(box);
        imgContainer.append(img);
        titleContainer.append(p);
    });
});
