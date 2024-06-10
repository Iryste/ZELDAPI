import { fetchData } from "./fetch.js";


fetchData('/games').then(() => {
    document.querySelector('#boxes');
    const box1 = document.querySelector('#box1')
    const p = document.createElement('p')
    p.textContent = p.name;
    box1.append(p)
    console.log(p)
})


