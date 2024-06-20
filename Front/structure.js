//header
const header = document.querySelector('.header');

const imgHeader = document.createElement('img');
imgHeader.id = 'banner';
imgHeader.src = '../img/zelda-banner.png';

const h1 = document.createElement('h1');
h1.innerText = "PROJET ZELDAPI";

header.append(h1);
header.append(imgHeader);

//navbar
const navBar = document.querySelector('#navbar');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li')
const a = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');
const a4 = document.createElement('a')

a.innerText = 'Jeux';
a.href = '../jeux/games.html'
a2.innerText = 'Personnages';
a2.href = '../personnages/personnages.html'
a3.innerText = 'Objets';
a3.href = '../objets/objets.html'
a4.innerText = 'Lieux';
a4.href = '../lieux/lieux.html'
navBar.append(ul);
ul.append(li, li2, li3, li4);
li.append(a);
li2.append(a2)
li3.append(a3);
li4.append(a4);


//footer
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



