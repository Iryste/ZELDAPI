const header = document.querySelector('.header');

const imgHeader = document.createElement('img');
imgHeader.id = 'banner';
imgHeader.src = './img/zelda-banner.png';

const h1 = document.createElement('h1');
h1.innerText = "BIENVENUE SUR ZELDAPI";

header.append(h1);
header.append(imgHeader);

const navBar = document.querySelector('#navbar');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const a = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');
const a4 = document.createElement('a');
const a5 = document.createElement('a');

a.innerText = 'lieux';
a.href = './lieux.html'
a2.innerText = 'personnages';
a5.innerText = 'objets';
a3.innerText = 'donjons';
a4.innerText = 'boss';
navBar.append(ul);
ul.append(li, li2, li3, li4, li5);
li.append(a);
li2.append(a2);
li3.append(a3);
li4.append(a4);
li5.append(a5);

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


const span = document.createElement('span');
const div = document.createElement('div')
span.id = 'bottom-text';
div.id = 'icons';
const footer = document.querySelector('.footer');
const bottomLinks = ['https://github.com/Iryste', 'https://github.com/Iryste', 'https://github.com/Iryste', './img/montage.png'];

const i = document.createElement('i');
const i2 = document.createElement('i');
const i3 = document.createElement('i');
const i4 = document.createElement('i')

span.innerText = 'retrouvez moi sur les reseaux'
i.className = 'fa-brands fa-github';
i2.className = 'fa-brands fa-linkedin';
i3.className = 'fa-brands fa-twitter';
i4.className = 'fa-solid fa-question';

bottomLinks.forEach(liens => {
    const aFooter = document.createElement('a');
    aFooter.href = liens;
    aFooter.setAttribute('target', '_blank');
    footer.append(span);
    span.append(div);
    div.append(aFooter);
    aFooter.append(i, i2, i3, i4);
    
})

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



