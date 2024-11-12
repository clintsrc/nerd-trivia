let idxQuestion = 0;
let timeLimit = 60;
const numSelectedQuestions = 3;
// starting the score at 0.
let score = 0;
const ttlScore = numSelectedQuestions;

const main = document.querySelector('main');
const showCorrectAnswer = document.querySelector('.soln');
const showScore = document.querySelector('.score');

const questions = [
    {
        question: 'question index1',
        choices: ['a1','b1','c1','d1'],
        answer: 'a1'
    },
    {
        question: 'question index2',
        choices: ['a2','b2','c2'],
        answer: 'b2'
    },
    {
        question: 'question index3',
        choices: ['a3','b3','c3','d3','e3'],
        answer: 'c3'
    },
    {
        question: 'question index4',
        choices: ['a4','b4','c4','d4'],
        answer: 'd4'
    },
    {
        question: 'question index5',
        choices: ['a5','b5','c5','d5'],
        answer: 'a1'
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


///////// timer
function updateClock() {
    if (timeLimit > 0) {
        timeLimit--;
        clock.innerText = timeLimit;
    } else {
        clearInterval(interval);
    }
}

function startClock() {
    interval = setInterval(updateClock, 1000);
}
///////// 

function init() {
    shuffleArray(questions);
    const selectedQuestions = questions.slice(0, numSelectedQuestions);

    displayNextQuestion(selectedQuestions);
    startClock();
}

function handleAnswerClick (event, selectedQuestions) {
    const button = event.target;
    let correctAnswer = selectedQuestions[idxQuestion].answer;
    let showLastAnswer = "";

    // does the answer (button text) match the expected answer?
    if(button.textContent === correctAnswer) {
        score++;
        showLastAnswer = `Correct: ${correctAnswer}!`
    } else {
        showLastAnswer = `Incorrect: ${button.textContent}. The correct answer is ${correctAnswer}`;
    }

    showCorrectAnswer.innerText = showLastAnswer;
    console.log(showLastAnswer);
    showScore.innerText = `Score: ${score}/${ttlScore}`;
    if (idxQuestion < numSelectedQuestions - 1){
        idxQuestion++;
        displayNextQuestion(selectedQuestions);
    } else {
        endGame();
    }

}

// display the next question and answer choices
function displayNextQuestion(selectedQuestions){
    // Show the question and create a div for the choices
    main.innerHTML= `<h1>${selectedQuestions[idxQuestion].question}</h1><div id="ans"></div>`;
    const ansDiv = document.getElementById('ans');
       
    // Show the buttons from the selected questions array
    selectedQuestions[idxQuestion].choices.forEach(ans => {
        ansDiv.innerHTML += `<button>${ans}</button><br/>`;
    });

    // add a click event listener to each button
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => handleAnswerClick(event, selectedQuestions));
    });
}

// ends game and displays final score, could possibly add unique ending text after MVP is launched.
function endGame() {
    main.innerHTML = `<h1>Yay it worked!!!!</h1><div>Final score: ${score}/${ttlScore}</div>`;
}

init();
