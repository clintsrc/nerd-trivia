let idxQuestion = 0;
// let timeLimit = 60;
const numSelectedQuestions = 10;
// starting the score at 0.
let score = 0;
const ttlScore = numSelectedQuestions;

const showQuestions = document.querySelector('.containerQuests');
const showCorrectAnswer = document.querySelector('.displayAnswr');
const showScore = document.querySelector('.displayScore');
const showAllScores = document.querySelector('.displaySavedScores');
const homePage = document.querySelector('#backB');
// const usernameDisplay = document.querySelector('.displayName'); <-- is on the carousel.js


const questions = [
    {
        question: 'Which video game console released in 2006 pioneered the use of motion controls in its gameplay?',
        choices: ['Game-Boy','SuperNES','Nintendo Wii','Atari'],
        answer: 'Nintendo Wii'
    },
    {
        question: 'What Nintendo console was codenamed NX while under development and featured controllers called "Joy-Cons" upon release?',
        choices: ['Nintendo GameCube','Nintendo Wii U','Nintendo 3DS','Nintendo Switch'],
        answer: 'Nintendo Switch'
    },
    {
        question: 'The first Star Wars video game, made for the Atari 2600, was based on which film in the original trilogy?',
        choices: ['Return of the Jedi','The Empire Strikes Back','The Phantom Menace'],
        answer: 'The Empire Strikes Back'
    },
    {
        question: 'Which popular video game franchise features the ally Sergeant Bananas?',
        choices: ['Fortnite','Halo','Call of Duty','Teenage Mutant Ninja Turtles (TMNT)'],
        answer: 'Teenage Mutant Ninja Turtles (TMNT)'
    },
    {
        question: 'What is the maximum number of Power Stars a player can collect in Super Mario 64?',
        choices: ['150','120','100','95'],
        answer: '120'
    },

    {
        question: 'Originally given the Japanese title “Puckman”, what 1980s arcade game was inducted into the Guinness Book of Records as the "Most Successful Coin-Operated Game" in 2005?',
        choices: ['Donkey Kong','Space Invaders','Pac-Man','Asteroids'],
        answer: 'Pac-Man'
    },
    {
        question: 'The word Tetris is a combination of the Greek word Tetra (meaning four) and what 6-letter sport that was a favorite of game creator Alexy Pajitnov?',
        choices: ['Soccer','Basketball','Baseball','Tennis'],
        answer: 'Tennis'
    },

    {
        question: 'Which company created the PlayStation gaming console?',
        choices: ['Sony','Microsoft','Nintendo','Sega'],
        answer: 'Sony'
    },
    {
        question: 'Which video game series features the Master Chief?',
        choices: ['Halo','Gears of War','Doom','Battlefield'],
        answer: 'Halo'
    },
    
    {
        question: 'With what type of computer file can users play older video games on new computers? ',
        choices: ['EXE','PDF','MP3','ROM'],
        answer: 'ROM'
    },
    {
        question: 'In what year was the Playstation 3 platform released?',
        choices: ['2005','2006','2009','2007'],
        answer: '2006'
    },
    
    {
        question: 'Call of Duty was first released in the year?',
        choices: ['2000','2003','2005','2007'],
        answer: '2003'
    },

    {
        question: "In the Super Mario Bros. video games, what is Mario's brother called?",
        choices: ['Luiginho','Mario Jr','Luigi','Luigius'],
        answer: 'Luigi'
    },
    
    {
        question: 'In the United States, what is the term used to describe the Sega Mega Drive console? ',
        choices: ['Sega Genesis','Sega Genesis 2','Sega Saturn','Sega Dreamcast'],
        answer: 'Sega Genesis'
    },
    {
        question: 'In Prince of Persia: The Sands of Time, Farah uses what kind of weapons? ',
        choices: ['Crossbow','Bow and Arrow','Bow','Magic Staff'],
        answer: 'Bow'
    },
    
    {
        question: 'What is the nickname of Markus Persson, creator of Minecraft?',
        choices: ['Notchzilla','Blockmaster','PixelKing','Notch'],
        answer: 'Notch'
    },

    {
        question: 'What gaming content platform was the most watched in 2022 on a viewership basis?',
        choices: ['Vimeo','Twitch','Dailymotion'],
        answer: 'Twitch'
    },

    {
        question: 'Who developed the Android OS powering major mobile and tablet devices like the Nvidia Shield or Samsung Galaxy?',
        choices: ['Apple','Microsoft','Nokia','Google'],
        answer: 'Google'
    },

    {
        question: 'What mode introduced co-op campaign play to the Halo franchise starting with Halo 3?',
        choices: ['Firefight','Cooperative mode','Warzone','Big Team Battle'],
        answer: 'Cooperative mode'
    },

    {
        question: "Space Invaders invented the shoot 'em up genre while which Nintendo classic popularized platformers?",
        choices: ['Donkey Kong Jr.','Metroid','The Legend of Zelda','Super Mario Bros'],
        answer: 'Super Mario Bros'
    },
    ];




/*
 *  Shuffle the available questions
 *
 *  This function uses a commonly available Fisher–Yates shuffle algorithm:
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

function endGame() {
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
            showAllScores.innerHTML += `<li>${player.username}: ${player.score}/${ttlScore}</li>`;
            showAllScores.innerHTML += `</ul>`;
        });

    }
 
}

document.addEventListener('DOMContentLoaded', function() {
    const storedUsername = localStorage.getItem('username');
    
    if (storedUsername) {
 
        const usernameDisplay = document.querySelector('.displayName');
        usernameDisplay.innerText = storedUsername;
    }
    
    init();
});

homePage.addEventListener('click',function(){
    window.location.href = 'file:///C:/Bootcamp/challenges/portfolio/Project-1/Nerd-Trivia/nerd-trivia/index.html';
    localStorage.removeItem('username');
});






// // get the form element
// 

// // setup a listener
// frmSubmitEl.addEventListener('submit', handleSubmission);

// // setup the callback
// function handleSubmission(e) {
//     e.preventDefault();  // make sure this beast is here!
//     ...
// 