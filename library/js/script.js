'use strict'


console.log('1.Вёрстка валидная +10\n2.Вёрстка семантическая +16\n3.Вёрстка соответствует макету +54\n4.Общие требования к верстке +20\nTotal: 100');



//Меню бургер

const burgerMenu = document.querySelector('.menu__icon');
const headerMenu = document.querySelector('.header__menu');
if (burgerMenu) {
	burgerMenu.addEventListener('click', function (e) {
		burgerMenu.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}
if (burgerMenu.classList.contains('_active')) {
	burgerMenu.classList.remove('_active');
	headerMenu.classList.remove('_active');
	document.body.classList.remove('_lock');
}