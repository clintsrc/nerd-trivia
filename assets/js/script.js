let qI = 0;
let time = 60;
const questions = [
    {
        Q: 'question 1',
        A: ['a','b','c','d'],
        C: 'b'
    },
    {
        Q: 'question 2',
        A: ['a','b','c','d'],
        C: 'b'
    },
    {
        Q: 'question 3',
        A: ['a','b','c','d'],
        C: 'b'
    },
    {
        Q: 'question 4',
        A: ['a','b','c','d'],
        C: 'b'
    },
    {
        Q: 'question 5',
        A: ['a','b','c','d'],
        C: 'b'
    },
];

let timer = () => {
    setInterval(()=>{
        time--;
        clock.innerText = time;
    },1000)   
};

const main = document.querySelector('main');

const init = () => {
    timer();

    
    main.innerHTML = `<h1>${questions[qI].Q}<h1><div id="ans"></div>`;
    
    const ansDiv = document.getElementById('ans');
    
    questions[0].A.forEach(ans => {
        ansDiv.innerHTML += `<button>${ans}</button>`;
    });
};


init();