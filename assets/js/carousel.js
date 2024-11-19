
// This is only storing the username in localstorage and displaying it. This is assuming we are doing another page for the game (which we are)
// Testing to see how to carry this over to another page
const usernameDisplay = document.querySelector('.displayName');
const usernameInput = document.getElementById('username');
const usernameForm = document.getElementById('usernameForm');
// carousel items
const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.carousel-control-prev');
const next = document.querySelector('.carousel-control-next');


/*
 * Username and localStorage functions
 */
function saveUsernameToLocalStorage(username){
  
    localStorage.setItem('username', username);
}

function loadUsernameFromLocalStorage() {
    const storedUsername = localStorage.getItem('username'); 
    if (storedUsername) {
        usernameDisplay.innerText = storedUsername; 
    }
}

function handleSubmission(e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    if (username){
        saveUsernameToLocalStorage(username);
        usernameDisplay.innerText = username;
        usernameInput.value = ''; //clears the current submit from the display
    } else {
        showModal("Can't be blank, nice try.");
    }}

usernameForm.addEventListener('submit', handleSubmission);

function getHighestScore() {
    // Retrieve the scores from localStorage
    const scores = JSON.parse(localStorage.getItem('score')) || [];
    
    // If there are no scores, return 0
    if (scores.length === 0) return 0;

    // Find the highest score
    const highestScore = scores.reduce((max, player) => {
        return player.score > max.score ? player : max;
    });

    return highestScore;
}

function displayHighestScore() {
    const highestScorePlayer = getHighestScore();
    const highScoreDisplay = document.querySelector('.highScoreDisplay');

    if (highestScorePlayer) {
        highScoreDisplay.innerHTML = `<h3>Highest Score: ${highestScorePlayer.username}   ${highestScorePlayer.score}/10</h3>`;
    } else {
        highScoreDisplay.innerHTML = `<h3>No scores yet.</h3>`;
    }
}

window.onload = function() {
    loadUsernameFromLocalStorage();
    displayHighestScore();

} 

// This will handle the page redirect for every carousel image (made minor adjustments to index.html. plx review)

document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelectorAll('#carouselExampleIndicators .carousel-item img');

    carouselImages.forEach(image => {
        image.addEventListener('click', handleImageClick);
    });

    function handleImageClick(event) {
        event.preventDefault();
        const redirectUrl = event.target.getAttribute('data-redirect');
        const username = localStorage.getItem('username');

        if (!username) {
            showModal("Even alpha Chads have a name. Enter a username to proceed.");
        } else if (redirectUrl){
            window.location.href = redirectUrl;
        }
    }
});


/*
 * Carousel functions
 */
prev.addEventListener('click', (event) => {
    // Prevent default navigation
    event.preventDefault();
  
    // Do something
    console.log('prev Link clicked!');
});


next.addEventListener('click', (event) => {
    // Prevent default navigation
    event.preventDefault();
  
    // Do something
    console.log('next Link clicked!');
});