const header = document.querySelector('.header')

const imgHeader = document.createElement('img')
imgHeader.id = 'banner'
imgHeader.src = './img/zelda-banner.png'

const h1 = document.createElement('h1')
h1.innerText = "BIENVENUE SUR ZELDAPI"

header.append(h1)
header.append(imgHeader)

const navBar = document.querySelector('#navbar')
const ul = document.createElement('ul')
const li = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')
const li5 = document.createElement('li')
const a = document.createElement('a')
const a2 = document.createElement('a')
const a3 = document.createElement('a')
const a4 = document.createElement('a')
const a5 = document.createElement('a')

a.innerText = 'lieux'
a2.innerText = 'boss'
a3.innerText = 'donjons'
a4.innerText = 'personnages'
a5.innerText = 'objets'
console.log(a)
navBar.append(ul)
ul.append(li, li2, li3, li4, li5)
li.append(a)
li2.append(a2)
li3.append(a3)
li4.append(a4)
li5.append(a5)

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



