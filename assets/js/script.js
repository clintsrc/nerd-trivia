let idxQuestion = 0;
let timeLimit = 60;
const numSelectedQuestions = 3;
// starting the score at 0.
let score = 0;
const ttlScore = numSelectedQuestions;


const questions = [
    {
        question: 'question index1',
        choices: ['a','b','c','d'],
        answer: 'a'
    },
    {
        question: 'question index2',
        choices: ['a','b','c'],
        answer: 'b'
    },
    {
        question: 'question index3',
        choices: ['a','b','c','d','e'],
        answer: 'c'
    },
    {
        question: 'question index4',
        choices: ['a','b','c','d'],
        answer: 'd'
    },
    {
        question: 'question index5',
        choices: ['a','b','c','d'],
        answer: 'a'
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


const main = document.querySelector('main');

function init() {
    shuffleArray(questions);
    const selectedQuestions = questions.slice(0, numSelectedQuestions);

    startClock();

    // Show the question and create a div for the choices
    main.innerHTML = `<h1>${selectedQuestions[idxQuestion].question}</h1><div id="ans"></div>`;
    
    const ansDiv = document.getElementById('ans');
    
    // Show the buttons from the selected questions array
    selectedQuestions[0].choices.forEach(ans => {
        ansDiv.innerHTML += `<button>${ans}</button><br/>`;
    });

    // add a click event listener to each button
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            // 
            const isCorrect = button.textContent === selectedQuestions[idxQuestion].answer;
            if(isCorrect){
                console.log('Correct!');
                score++;
            } else {
                console.log('Incorrect');
            }

// Collects and keeps the score
    document.getElementById('score').innerText = `Score: ${score}/${ttlScore}`;
        if (idxQuestion < numSelectedQuestions - 1){
            idxQuestion++;
            displayNextQuestion(selectedQuestions);
        } else {
            endGame();
        }
        });
    });
}

// display the next question and answer choices
function displayNextQuestion(selectedQuestions){
    const main =document.querySelector('main');
    main.innerHTML= `<h1>${selectedQuestions[idxQuestion].question}</h1><div id="ans"></div>`;
    const ansDiv = document.getElementById('ans');

selectedQuestions[idxQuestion].choices.forEach(ans => {
    ansDiv.innerHTML += `<button>${ans}</button><br/>`;
});


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const isCorrect = button.textContent === selectedQuestions[idxQuestion].answer;

        if (isCorrect) {
            console.log('Correct!');
            score++;
        } else {
            console.log('Incorrect');
        }

        // Update the score display
        document.getElementById('score').innerText = `Score: ${score} / ${ttlScore}`;

        // Move to the next question or end the game if it's the last question
        if (idxQuestion < numSelectedQuestions - 1) {
            idxQuestion++;
            displayNextQuestion(selectedQuestions);
        } else {
            endGame();
        }
    });
});
}

// ends game and displays final score, could possibly add unique ending text after MVP is launched.
function endGame(){
    const main = document.querySelector('main');
    main.innerHTML = `<h1>Yay it worked!!!!</h1><p>Final score: ${score}/${ttlScore}</p>`;
}

init();
