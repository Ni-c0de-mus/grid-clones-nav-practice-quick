const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav__list');
const navItem = document.querySelector('.nav__item');

menu.addEventListener('click', () => {
 navList.classList.toggle('open');
});