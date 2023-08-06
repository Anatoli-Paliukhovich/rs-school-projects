'use strict'


console.log('1.Вёрстка валидная +10\n2.Вёрстка семантическая +16\n3.Вёрстка соответствует макету +54\n4.Общие требования к верстке +20\nTotal: 100');



//Меню бургер

const menuIcon = document.querySelector('.menu__icon');
const menuHeader = document.querySelector('.header__menu');
if (menuIcon) {
	menuIcon.addEventListener('click', function (e) {
		menuIcon.classList.toggle('_active');
		menuHeader.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}

//Плавный скролл

const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const menuBlock = document.querySelector(menuLink.dataset.goto);
			const menuValue = menuBlock.getBoundingClientRect().top + pageYOffset -
				document.querySelector('.header').offsetHeight;

			if (menuIcon.classList.contains('_active')) {
				menuIcon.classList.remove('_active');
				menuHeader.classList.remove('_active');
				document.body.classList.remove('_lock');
			}

			window.scrollTo({
				top: menuValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}