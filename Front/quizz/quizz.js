import { fetchData } from "../../Back/fetch.js";

fetchData('/quizz').then((data) => {
        // const quizzContainer = document.querySelector('.quizz-container');
        const container = document.querySelector('.quizz-container');

        data.forEach((question) => {
            const questionSlot = document.createElement('div');
            questionSlot.innerHTML = question.question;
            container.append(questionSlot)
        })
        // question.innerHTML = data[0].question;
        // answer.innerHTML = 'réponse 1: ' + data[0].answers[0].text;
    });