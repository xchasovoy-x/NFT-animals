  const menuBtn = document.querySelector('.navigation__button');
  const menu = document.querySelector('.navigation__list');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('navigation__list--active');
  });

