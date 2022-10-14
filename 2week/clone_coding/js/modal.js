const loginButton = document.querySelector('.login-button');
const xmarks = document.querySelectorAll('.fa-xmark');
const emailButton = document.querySelector('.login-modal__body-button-email');

const handleModalWithBtn = function () {
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');
  const modalLogin = document.querySelector('.login-modal');

  modal.classList.toggle('modal-hidden');
  body.classList.toggle('modal-body');
  modalLogin.classList.toggle('modal-hidden');
};

const handelSecondModal = function () {
  const existModal = document.querySelector('.login-modal');
  const newModal = document.querySelector('.register-modal');

  existModal.classList.toggle('modal-hidden');
  newModal.classList.toggle('modal-hidden');
};

const handleModalWithX = function () {
  const modal = document.querySelector('.modal');
  const modalLogin = document.querySelector('.login-modal');
  const modalRegister = document.querySelector('.register-modal');
  const body = document.querySelector('body');

  modal.classList.add('modal-hidden');
  if (!modalLogin.classList.contains('modal-hidden')) {
    modalLogin.classList.toggle('modal-hidden');
  }
  if (!modalRegister.classList.contains('modal-hidden')) {
    modalRegister.classList.toggle('modal-hidden');
  }
  body.classList.toggle('modal-body');
};

loginButton.addEventListener('click', handleModalWithBtn);
for (xmark of xmarks) {
  xmark.addEventListener('click', handleModalWithX);
}
emailButton.addEventListener('click', handelSecondModal);
