'use strict';


console.log('1.Вёрстка соответствует макету. Ширина экрана 768px +26\n2.Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n3.На ширине экрана 768рх реализовано адаптивное меню +12 \nTotal: 50');



//Меню бургер
const menuIcon = document.querySelector('.menu__icon');
const menuHeader = document.querySelector('.header__menu');
const logoHeader = document.querySelector('.header__logo')
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
			const menuValue = menuBlock.getBoundingClientRect().top + pageYOffset;

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

//Слайдер
new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	spaceBetween: 25,
	breakpoints: {
		767: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
		1300: {
			slidesPerView: 3,
		}
	}
});

//Slider-Favourites
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.favorites__body');
const sliderDots = Array.from(document.querySelectorAll('.dot'));
const sliderLabels = document.querySelectorAll('.label-bold');

let index = 0;

function activeSlide(n) {
	for (let item of sliderItems) {
		item.classList.remove('active');
	}
	sliderItems[n].classList.add('active');
}
function activeLabel(n) {
	for (let label of sliderLabels) {
		label.classList.remove('active');
	}
	sliderLabels[n].classList.add('active');
}

sliderDots.forEach(function (dot, indexDot) {
	dot.addEventListener('click', function () {
		index = indexDot;
		activeSlide(index);
		activeLabel(index);
	})
});





