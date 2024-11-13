const modal = document.getElementById("modalDialog");
const closeButton = document.querySelector(".close");
let dialogMessage = document.querySelector(".dialogMessage");

// add a css class that will display the modal
function showModal() {
  dialogMessage.innerHTML= `<p>YOUR SCORE HERE</p>`;
  modal.classList.add("show");
}

// remove the css class that displays the modal
function handleCloseModal() {
  modal.classList.remove("show");
}

// handle the modal's close button
closeButton.addEventListener('click', handleCloseModal);

