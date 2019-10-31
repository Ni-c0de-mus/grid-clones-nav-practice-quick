const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
 selectElement('.nav__list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
 selectElement('.nav__list').classList.remove('active');
});