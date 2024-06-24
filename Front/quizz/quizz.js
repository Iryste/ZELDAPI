import { fetchData } from "../../Back/fetch.js";

fetchData('/quizz').then((data) => {
    data.map((quizz) => {
        const quizzContainer = document.querySelector('.quizz-container');
        const question = document.querySelector('#question')
        const answer = document.querySelector('#answer')

        question.innerHTML = quizz.question;
    })
})