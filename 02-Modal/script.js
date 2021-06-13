'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// selecting multiple elements
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  //  why modal.classList ??
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // open
  btnsOpenModal[i].addEventListener('click', openModal);

  // close
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
