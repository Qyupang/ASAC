const menuBar = document.querySelector('.fa-bars');

const handleMenuBar = () => console.log('hello');

menuBar.addEventListener('mouseover', handleMenuBar);

// const bannerDescript = document.querySelectorAll('.banner-descript');

// console.log(bannerDescript);

// const handlebanner = () => bannerDescript.classList.toggle('hidden');

// bannerDescript.
// addEventListener('mouseover', handlebanner);

setTimeout(() => {
  const hiddens = document.querySelectorAll('.hidden');
  hiddens.forEach((hidden) => hidden.classList.toggle('hidden'));
  const spinner = document.querySelector('.spinner');
  spinner.classList.toggle('hidden');
}, 3000);

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

  console.log(newModal);

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
