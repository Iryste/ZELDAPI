import { fetchData } from "../../Back/fetch.js";

// fetchData('/games').then((data) => {
//     data.map((game) => {
//         // console.log(game)
//         const boxes = document.querySelector('#boxes');

//         const box = document.createElement('span');
//         box.className = 'box';

//         const imgContainer = document.createElement('div');
//         imgContainer.className = 'imgContainer'

//         const titleContainer = document.createElement('div');
//         titleContainer.className = 'textContainer';

//         const p = document.createElement('p');
//         p.className = 'gameName';
//         p.textContent = game.name;
//         p.style.textAlign = 'center'

//         const img = document.createElement('img');
//         img.src = game.image;
//         img.style.width = '100%'

        
//         box.addEventListener('mouseenter', () => {
//             const dropDownConsole = document.createElement('p');
//             dropDownConsole.id = 'dropDownConsole';
//             // box.classList.toggle('animateEnter');
//             const dropDownDate = document.createElement('p');
//             dropDownDate.id = 'dropDownDate'

//             dropDownConsole.style.borderTop = "2px solid green"
//             dropDownDate.style.borderTop = "2px solid green"

//             dropDownDate.textContent = game.released_date;
//             dropDownConsole.textContent = game.console;

//             dropDownConsole.style.display = 'block';
//             dropDownDate.style.display = 'block';

//         box.append(dropDownDate, dropDownConsole);
//             })

//         box.addEventListener('mouseleave', () => {
//             const dropDownConsole = document.querySelector('#dropDownConsole');
//             const dropDownDate = document.querySelector('#dropDownDate')

//             dropDownConsole.style.display = 'none'
//             dropDownDate.style.display = 'none'

//             box.removeChild(dropDownConsole)
//             box.removeChild(dropDownDate)
//         })

//         boxes.append(box);
//         box.append(imgContainer, titleContainer);
//         imgContainer.append(img);
//         titleContainer.append(p);
// })});

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
