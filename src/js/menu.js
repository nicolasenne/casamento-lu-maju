const menuButton = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');

  const icon = menuButton.querySelector('i');

  if (menu.classList.contains('active')) {
    icon.classList.replace('bi-list', 'bi-x');
  } else {
    icon.classList.replace('bi-x', 'bi-list');
  }
});

