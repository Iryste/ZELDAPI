const header = document.querySelector('.header');

const imgHeader = document.createElement('img');
imgHeader.id = 'banner';
imgHeader.src = '../img/zelda-banner.png';

const h1 = document.createElement('h1');
h1.innerText = "PROJET ZELDAPI";

header.append(h1);
header.append(imgHeader);

const navBar = document.querySelector('#navbar');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li')
const a = document.createElement('a');
const a4 = document.createElement('a');
const a5 = document.createElement('a');
const a6 = document.createElement('a')

a.innerText = 'Jeux';
a.href = '../jeux/games.html'
a4.innerText = 'Objets';
a5.innerText = 'Lieux';
a5.href = '../lieux/lieux.html'
a6.innerText = 'Personnages';
navBar.append(ul);
ul.append(li, li4, li5, li6);
li.append(a);
li4.append(a4);
li5.append(a5);
li6.append(a6)

// const navBar = document.querySelector('#navbar')
// const ul = document.createElement('ul')
// const linksText = ['lieux', 'boss', 'donjons', 'personnages', 'objets']

// linksText.forEach(text => {
//     const li = document.createElement('li')
//     const a = document.createElement('a')
//     a.innerText = text
//     li.appendChild(a)
//     ul.appendChild(li)
// })
// navBar.appendChild(ul)


const footer = document.querySelector('.footer');
const span = document.createElement('span');
span.innerText = 'retrouvez moi sur les reseaux';

const div = document.createElement('div')
span.id = 'bottom-text';
div.id = 'icons';



const i = document.createElement('i');
i.className = 'fa-brands fa-github';
const aGit = document.createElement('a');
aGit.href = 'https://github.com/Iryste';
aGit.setAttribute('target', '_blank');

const i2 = document.createElement('i');
i2.className = 'fa-brands fa-linkedin';
const aLink = document.createElement('a');
aLink.href = 'https://www.linkedin.com/in/jean-baptiste-hamel-b111a0302/';
aLink.setAttribute('target', '_blank');

const i3 = document.createElement('i');
i3.className = 'fa-brands fa-twitter';
const aX = document.createElement('a');
aX.href = 'https://x.com/Iryste119790';
aX.setAttribute('target', '_blank');

footer.append(span, div);
div.append(aGit, aLink, aX);
aGit.append(i)
aLink.append(i2)
aX.append(i3)


// bottomLinks.forEach(liens => {
//     const aFooter = document.createElement('a');
//     i.className = 'fa-brands fa-github';
//     i2.className = 'fa-brands fa-linkedin';
//     i3.className = 'fa-brands fa-twitter';
//     aFooter.href = liens;
    // aFooter.setAttribute('target', '_blank');
//     div.append(aFooter);
//     aFooter.append(i, i2, i3);
    
// })

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const boxes = document.querySelector('#boxes')

menuBtn.addEventListener('click', () => {
menu.classList.toggle('active');
if (menu.classList.contains('active')) {
    boxes.style.filter = 'blur(10px)'
} else {
    boxes.style.filter = 'none'
}
});



