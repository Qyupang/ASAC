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
