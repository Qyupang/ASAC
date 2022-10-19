const loginButton = document.querySelector('.login-button');
const xmarks = document.querySelectorAll('.fa-xmark');
const emailButton = document.querySelector('.login-modal__body-button-email');
const modal = document.querySelector('.modal');
const more = document.querySelector(
  '.job-detail__warning-right .fa-chevron-down'
);

const checkAll = document.querySelector('input[name=agreeAll]');
const checkFirst = document.querySelector('input[name=agreeFirst]');
const checkSecond = document.querySelector('input[name=agreeSecond]');

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
  const checkFirst = document.querySelector('input[name=agreeFirst]');
  const checkSecond = document.querySelector('input[name=agreeSecond]');

  checkFirst.checked = true;
  checkSecond.checked = true;
};

const handleUncheckAll = function () {
  const checkFirst = document.querySelector('input[name=agreeFirst]');
  const checkSecond = document.querySelector('input[name=agreeSecond]');

  checkFirst.checked = false;
  checkSecond.checked = false;
};

loginButton.addEventListener('click', handleModalWithBtn);
for (let xmark of xmarks) {
  xmark.addEventListener('click', handleModalWithX);
}
emailButton.addEventListener('click', handelSecondModal);

checkAll.addEventListener('change', function () {
  if (this.checked) {
    console.log('Checkbox is checked..');
    handleCheckAll();
  } else {
    console.log('Checkbox is not checked..');
    handleUncheckAll();
  }
});

checkFirst.addEventListener('change', function () {
  if (checkFirst.checked == checkSecond.checked) {
    if (checkFirst.checked == true) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }
  } else {
    checkAll.checked = false;
  }
});

checkSecond.addEventListener('change', function () {
  if (checkFirst.checked == checkSecond.checked) {
    if (checkSecond.checked == true) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }
  } else {
    checkAll.checked = false;
  }
});

window.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == modal) {
    console.log('true');
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
  }
});

more.addEventListener('click', () => {
  const moreSection = document.querySelector('.job-detail__warning-bottom');
  const jobDetail = document.querySelector('.job-detail');
  moreSection.classList.toggle('detail-hidden');
  let height = jobDetail.style.offsetHeight;
  console.log(height);
});
