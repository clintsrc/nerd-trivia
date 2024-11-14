const modal = document.getElementById("modalDialog");
const closeButton = document.querySelector(".close");
let dialogMessage = document.querySelector(".dialogMessage");

// add a css class to show the modal
function showModal(message) {
  // default message
  if (! message) {
    message = "Unexpected showModal() message is empty";
  }

  dialogMessage.innerHTML= `<p>${message}</p>`;

  modal.classList.add("show");
}

// remove the css class indicates the modal is visible
function handleCloseModal() {
  modal.classList.remove("show");
}

// handle the modal's close button
closeButton.addEventListener('click', handleCloseModal);

showModal("testing");