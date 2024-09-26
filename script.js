document.addEventListener("DOMContentLoaded", () => {

const openModalButtons = document.querySelectorAll('.open-modal'),
      modal = document.querySelector('.alert'),
      closeModalButtons = document.querySelectorAll('.close-icon');

openModalButtons.forEach(openBtn => {
  openBtn.addEventListener('click', openModal)
});

closeModalButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal)
});

function openModal() {
  modal.classList.add('visible');
}

function closeModal() {
  modal.style.display = 'none';
}

});
