let idxQuestion = 0;
// let timeLimit = 60;
const numSelectedQuestions = 3;
// starting the score at 0.
let score = 0;
const ttlScore = numSelectedQuestions;

const showQuestions = document.querySelector('.containerQuests');
const showCorrectAnswer = document.querySelector('.displayAnswr');
const showScore = document.querySelector('.displayScore');
const showAllScores = document.querySelector('.displaySavedScores');
const usernameDisplay = document.querySelector('.displayName');


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
        answer: 'a5'
    },
];


/*
 *  Shuffle the available questions
 *
 *  This function uses a commonly availalble Fisher–Yates shuffle algorithm:
 *  1. Starting from the end of the array, the algorithm iterates backward.
 *  2. For each position i, it picks a random index j between 0 and i.
 *  3. It swaps the elements at positions i and j.
 * 
 *  (ref: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 * 
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// ///////// timer
// function updateClock() {
//     if (timeLimit > 0) {
//         timeLimit--;
//         clock.innerText = timeLimit;
//     } else {
//         clearInterval(interval);
//     }
// }

// function startClock() {
//     interval = setInterval(updateClock, 1000);
// }
// ///////// 

function init() {
    shuffleArray(questions);
    const selectedQuestions = questions.slice(0, numSelectedQuestions);

    displayNextQuestion(selectedQuestions);
    // startClock();
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
        // Changed the 'username input' to player.username and it stopped the button issue..
        showLastAnswer = `Incorrect. The correct answer is ${correctAnswer}`;
    }
// Incorrect: ${player.username}. 
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
    showQuestions.innerHTML= `<h1>${selectedQuestions[idxQuestion].question}</h1><div id="ans"></div>`;
    const ansDiv = document.getElementById('ans');
       
    // Show the buttons from the selected questions array
    selectedQuestions[idxQuestion].choices.forEach(ans => {
        ansDiv.innerHTML += `<button class="selection">${ans}</button><br/>`;
    });

    // add a click event listener to each button
    document.querySelectorAll('.selection').forEach(button => {
        button.addEventListener('click', (event) => handleAnswerClick(event, selectedQuestions));
    });
}

function endGame(selectedQuestions) {
    const username = localStorage.getItem('username');
    showQuestions.innerHTML = `<h1>Game Over.</h1><div>Well done ${username}. Your final score is: ${score}</div>`;
    scoreLocalStorage(username, score)
    showStoredScores();
};

function scoreLocalStorage(username, score){
    const scores = JSON.parse(localStorage.getItem('score')) || [];
    const playerResults = { username: username, score: score };
    scores.push(playerResults);
    localStorage.setItem('score', JSON.stringify(scores))
    };

function displayLocalStorage(){
    const scores = JSON.parse(localStorage.getItem('score'));
    return scores;
  };

// Shows the saved scores and usernames to localstorage. Crude, but it works soo

function showStoredScores() {
    const scores = displayLocalStorage();
    if (scores.length > 0) {
        showAllScores.innerHTML = `<h2>Previous Scores:</h2><ul>`;
        scores.forEach(player => {
            showAllScores.innerHTML += `<li>${player.username}: ${score}/${ttlScore}</li>`;
            showAllScores.innerHTML += `</ul>`;
        });

    }
}


init();

// // get the form element
// 

// // setup a listener
// frmSubmitEl.addEventListener('submit', handleSubmission);

// // setup the callback
// function handleSubmission(e) {
//     e.preventDefault();  // make sure this beast is here!
//     ...
// 