
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
        alert("Can't be blank, nice try.")
    }}

usernameForm.addEventListener('submit', handleSubmission);

window.onload = loadUsernameFromLocalStorage;

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
            alert("Even alpha Chads have a name. Enter a username to proceed.")
            
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