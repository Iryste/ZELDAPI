import { fetchData } from "../../Back/fetch.js";

fetchData('/characters').then((data) => {
    data.map((characters) => {
        const container = document.querySelector('.container')
        const p = document.createElement('p');
        p.innerText = characters.name;
        
        const imgContainer = document.createElement('div')
        const img = document.createElement('img')
        img.src = characters.image
        img.style.width = '50%';
        img.style.height = 'auto';
        container.append(p, imgContainer)
        imgContainer.append(img)
    })
})