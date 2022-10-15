const loginButton = document.querySelector('.login-button');
const xmarks = document.querySelectorAll('.fa-xmark');
const emailButton = document.querySelector('.login-modal__body-button-email');

const checkAll = document.getElementsByName('agree-all');

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

  if (!modalLogin.classList.contains('modal-hidden')) {
    modal.classList.add('modal-hidden');
    modalLogin.classList.toggle('modal-hidden');
    body.classList.toggle('modal-body');
  }
  if (!modalRegister.classList.contains('modal-hidden')) {
    if (confirm('회원가입을 취소하겠습니까?')) {
      modalRegister.classList.toggle('modal-hidden');
      modal.classList.add('modal-hidden');
      body.classList.toggle('modal-body');
    }
  }
};

const handleCheckAll = function () {
  console.log('clicked');
};

loginButton.addEventListener('click', handleModalWithBtn);
for (let xmark of xmarks) {
  xmark.addEventListener('click', handleModalWithX);
}
emailButton.addEventListener('click', handelSecondModal);

checkAll.addEventListener('click', handleCheckAll);
