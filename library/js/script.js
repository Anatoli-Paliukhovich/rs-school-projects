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

//Drop menu в header
const headerIc = document.querySelector('.header__icon');
const headerIcon = document.querySelector('.header__icon-item');
const dropMenu = document.querySelector('.drop-menu');
document.addEventListener('click', menuDrop);
function menuDrop(e) {
	if (e.target.closest('.header__icon-item')) {
		dropMenu.classList.toggle('_active');
		menuHeader.classList.remove('_active');
		menuIcon.classList.remove('_active');
		e.preventDefault();
	}
	if (!e.target.closest('.header__icon')) {
		dropMenu.classList.remove('_active');
	}
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

let i = 0;

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
function nextSlide() {
	if (i === sliderItems.length - 1) {
		i = 0;
		combineFunc(i);
	} else {
		i++;
		combineFunc(i);
	}
}
sliderDots.forEach(function (dot, indexDot) {
	dot.addEventListener('click', function () {
		i = indexDot;
		combineFunc(i)
		clearInterval(setInt);
	})
});
function combineFunc(i) {
	activeSlide(i);
	activeLabel(i);
}
const setInt = setInterval(nextSlide, 3000);




//Popup
/*
const popup = document.querySelector('.popup');

document.addEventListener('click', showPopup);

function showPopup(e) {
	if (e.target.closest('.btn')) {
		popup.classList.add('open');
		e.preventDefault();
		document.body.classList.add('_lock');
	}
	if (!e.target.closest('.favorites') && !e.target.closest('.popup__content') || e.target.closest('.close-btn')) {
		popup.classList.remove('open');
		document.body.classList.remove('_lock');
	}
}
*/
//Popups

const popupBtns = document.querySelectorAll('.btn');
const body = document.querySelector('body');
const lock = document.querySelectorAll('.lock-padding');
const popupCloseIcons = document.querySelectorAll('.close-btn');
const popup = document.querySelector('.popup');

popupBtns.forEach(function (btn, index) {
	btn.dataset.index = index;
	btn.addEventListener('click', function (e) {
		popupOpen(index + 1);
	})
})

if (popupCloseIcons.length > 0) {
	for (let i = 0; i < popupCloseIcons.length; i++) {
		const popupCloseIcon = popupCloseIcons[i];
		popupCloseIcon.addEventListener('click', function (e) {
			popupClose(popupCloseIcon.closest('.popup'));
		});
	}
}
function popupClose(elems) {
	document.body.classList.remove('_lock');
	elems.classList.remove('open');
	bodyUnLock();
}

function popupOpen(e) {
	popup.classList.add('open');
	bodyLock();
	clearInterval(setInt);
	popup.addEventListener('click', function (e) {
		if (!e.target.closest('.popup__content')) {
			popupClose(e.target.closest('.popup'));
		}
	})
}

function bodyLock() {
	body.style.paddingRight = '17px';
	body.classList.add('_lock');
}

function bodyUnLock() {
	body.style.paddingRight = '0px';
	body.classList.remove('_lock');
}




//Modal-popups_logIn
const loginLinks = document.querySelectorAll('.log-link');
const loginPopup = document.querySelector('.modal__login');
const popupClos = document.querySelectorAll('.modal-close');

loginLinks.forEach(function (logLink, indexLink) {
	logLink.addEventListener('click', function (e) {
		modalLoginOpen(indexLink + 1);
	})
})
if (popupClos.length > 0) {
	for (let i = 0; i < popupClos.length; i++) {
		const popupCloseIcon = popupClos[i];
		popupCloseIcon.addEventListener('click', function (e) {
			modalLoginClose(popupCloseIcon.closest('.modal__login'));
		});
	}
}
function modalLoginClose(e) {
	loginPopup.classList.remove('open');
}

function modalLoginOpen(e) {
	loginPopup.classList.add('open');
	dropMenu.classList.remove('_active');
	loginPopup.addEventListener('click', function (e) {
		if (!e.target.closest('.modal__login-content')) {
			modalLoginClose(e.target.closest('.modal__login'));
		}
	})
}


//Modal-popups_Register

const regLinks = document.querySelectorAll('.reg-link');
const regPopup = document.querySelector('.modal__register');

regLinks.forEach(function (regLink, indexLink) {
	regLink.addEventListener('click', function (e) {
		modalRegOpen(indexLink + 1);
	})
})
if (popupClos.length > 0) {
	for (let i = 0; i < popupClos.length; i++) {
		const popupCloseIcon = popupClos[i];
		popupCloseIcon.addEventListener('click', function (e) {
			modalRegClose(popupCloseIcon.closest('.modal__register'));
		});
	}
}
function modalRegClose() {
	regPopup.classList.remove('open');
}

function modalRegOpen(e) {
	regPopup.classList.add('open');
	dropMenu.classList.remove('_active');
	regPopup.addEventListener('click', function (e) {
		if (!e.target.closest('.modal__register-content')) {
			modalRegClose(e.target.closest('.modal__register'));
		}
	})
}


//LocalStorage

const regForm = document.getElementById('reg-form');
const regBtn = document.querySelector('.modal__register-btn');


regForm.addEventListener('submit', setToStorage);
function setToStorage(e) {
	const regEmail = document.getElementById('reg-email').value;
	const regPass = document.getElementById('reg-password').value;
	const regName = document.getElementById('reg-name').value;
	const regLName = document.getElementById('reg-lname').value;
	let userInfo = {
		name: regName,
		lname: regLName,
		email: regEmail,
		password: regPass,
	}
	const userStr = JSON.stringify(userInfo);
	localStorage.setItem(regEmail, userStr);

	modalRegClose();
}

const logForm = document.getElementById('log-form');
logForm.addEventListener('submit', getFromStorage);
function getFromStorage(e) {
	e.preventDefault();
	const logEmail = document.getElementById('log-email').value;
	const logPass = document.getElementById('log-password').value;

	const userData = localStorage.getItem(logEmail);
	const userDataObj = JSON.parse(userData);
	if (userData === null) {
		alert('Email is wrong! Check email!');
	} else if (logEmail === userDataObj.email && logPass === userDataObj.password) {
		modalLoginClose();
	} else if (logPass !== userDataObj.password) {
		alert('Password is wrong! Check password!');
	}
}

//Set initial letters in user-icon
regForm.addEventListener('submit', setInitials);
function setInitials(e) {
	setToStorage();
	e.preventDefault();
	const headerUserIcon = document.querySelector('.header__user-icon');
	const userIconText = document.querySelector('.user-icon__text');

	const regEmail = document.getElementById('reg-email').value;
	const userData = localStorage.getItem(regEmail);
	const userDataObj = JSON.parse(userData);
	userIconText.innerHTML = `${userDataObj.name[0]}${userDataObj.lname[0]}`;
	userIconText.setAttribute('title', `${userDataObj.name} ${userDataObj.lname}`);
	headerIcon.classList.add('hidden');
	headerUserIcon.classList.add('active');
	e.target.reset();
}

//Drop menu in header after sign up
const headerUserIcon = document.querySelector('.header__user-icon');
const userIconText = document.querySelector('.user-icon__text');
headerUserIcon.addEventListener('click', menuDropAfterSignUp);
function menuDropAfterSignUp(e) {
	if (e.target.closest('.user-icon__text')) {
		dropMenu.classList.toggle('_active');
		menuHeader.classList.remove('_active');
		menuIcon.classList.remove('_active');
		e.preventDefault();
	}
	if (!e.target.closest('.header__user-icon')) {
		dropMenu.classList.remove('_active');
	}
}


















