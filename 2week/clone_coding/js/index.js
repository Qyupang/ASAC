setTimeout(() => {
  const hiddens = document.querySelectorAll('.hidden');
  hiddens.forEach((hidden) => hidden.classList.toggle('hidden'));
  const spinner = document.querySelector('.spinner');
  spinner.classList.toggle('hidden');
}, 3000);
