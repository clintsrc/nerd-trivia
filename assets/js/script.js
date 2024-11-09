let idxQuestion = 0;
let timeLimit = 60;
const numSelectedQuestions = 3;

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
            } else {
                console.log('Incorrect');
            }
        });
    });
}

init();
