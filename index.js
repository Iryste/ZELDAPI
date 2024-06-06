import { fetchData } from "./fetch.js";


fetchData('?name=Skyward').then((data) => {
    console.log(data);
})