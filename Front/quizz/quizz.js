import { fetchData } from "../../Back/fetch.js";

fetchData('/quizz').then((data) => {
    
    let currentQuestionIndex = 0;
    const quizzData = data;
    let points = 0;

function showQuestion(questionIndex) {
    const container = document.querySelector('.quizz-container');
    container.innerHTML = '';

    const questionSlot = document.createElement('div');
    questionSlot.id = 'question';
    questionSlot.innerHTML = quizzData[questionIndex].question;
    container.append(questionSlot);
    
    if (quizzData[questionIndex].image) {
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        img.classList = 'img';
        img.src = quizzData[questionIndex].image;
        img.style.display = 'flex';
        imgContainer.append(img);
        container.append(imgContainer);
    }

    const answersContainer = document.createElement('div');
    answersContainer.id = 'answers';
    quizzData[questionIndex].answers.forEach((answer) => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('answer');
        answerButton.innerHTML = answer.text;
        answerButton.addEventListener('click', () => answerClick(answer.correct));
        answersContainer.append(answerButton);
        // console.log(questionIndex)
    })
    container.append(answersContainer);
}
const nextButton = document.createElement('button');
nextButton.id = 'next';
nextButton.innerHTML = "Question suivante";
nextButton.style.display = 'none'

function answerClick(isCorrect) {
    const existingFeedback = document.getElementById('feedback');
    if (existingFeedback) {
        return
    };

    const buttons = document.querySelectorAll('.answer');
    buttons.forEach(button => {
        const isCorrectAnswer = quizzData[currentQuestionIndex].answers.find(answer => answer.text === button.innerHTML).correct;
        if (isCorrectAnswer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });
    
    const feedback = document.createElement('div');
    feedback.id = 'feedback';
    feedback.innerHTML = isCorrect ? "Bonne réponse !" : "Mauvaise réponse !";
    const score = document.querySelector('#score')
    if (isCorrect) {
        feedback.style.color = 'green'; 
        points += quizzData[currentQuestionIndex].points;
        score.innerHTML = points;
        currentQuestionIndex++;
    } else {
        feedback.style.color = 'red';
        score.innerHTML = points;
        currentQuestionIndex++;
    }
    
    score.innerHTML = points;
    nextButton.style.display = 'flex'
    nextButton.addEventListener('click', () => {
        console.log(currentQuestionIndex)
        if (currentQuestionIndex < quizzData.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showEndMessage();
        };

    });

    const container = document.querySelector('.quizz-container');
    const result = document.querySelector('#result')
    container.append(feedback);
    container.append(nextButton);
    result.append(score)
}

function showEndMessage() {
    const score = document.querySelector('#score')
    const container = document.querySelector('.quizz-container');
    container.innerHTML = '';

    const endMessage = document.createElement('div');
    endMessage.id = 'end-message';
    endMessage.innerHTML = `Quizz terminé ! Votre score est de ${points}/30 !`;

    container.append(endMessage);
}

    const container = document.querySelector('.quizz-container')
    const textStart = document.createElement('span');
    textStart.id = 'start';
    textStart.innerHTML = 'Bienvenue sur QuizZelda !';
    
    const btnStart = document.createElement('button');
    btnStart.id = 'btnStart';
    btnStart.innerHTML = 'Commencer';
    btnStart.addEventListener('click', () => {
        showQuestion(currentQuestionIndex);
    })
    container.append(textStart, btnStart)
});