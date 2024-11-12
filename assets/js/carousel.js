const carousel = document.querySelector('.carouselbox');
const prev = document.querySelector('.carouselPrev');
const next = document.querySelector('.carouselNext');


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