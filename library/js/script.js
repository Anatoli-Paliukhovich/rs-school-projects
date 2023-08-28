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
//Popup_favourites_before_login
const popupBtns = document.querySelectorAll('.btn');
popupBtns.forEach(function (btn, index) {
	btn.dataset.index = index;
	btn.addEventListener('click', function (e) {
		modalLoginOpen(index + 1);
	})
})


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
		function: randomNumber(),
	}
	const userStr = JSON.stringify(userInfo);
	localStorage.setItem(`${userInfo.name} ${userInfo.lname}`, userStr);
	localStorage.setItem(regPass, userStr);
	modalRegClose();
	e.preventDefault();
}

const logForm = document.getElementById('log-form');
logForm.addEventListener('submit', getFromStorage);
function getFromStorage(e) {
	e.preventDefault();
	const logEmail = document.getElementById('log-email').value;
	const logPass = document.getElementById('log-password').value;
	const userData = localStorage.getItem(logPass);
	const userDataObj = JSON.parse(userData);
	if (userData === null) {
		alert('Password is wrong! Check password!');
	} else if (logPass === userDataObj.password && logEmail === userDataObj.email || logEmail === userDataObj.function && logPass === userDataObj.password) {
		modalLoginClose();
		dropMenuAfterLogin();
		popupFavoritesAfterLogin();
	} else if (logEmail !== userDataObj.email) {
		alert('Email is wrong! Check email');
	}
}
//Set initial letters in user-icon_after_login
logForm.addEventListener('submit', setInitialChar);
function setInitialChar(e) {
	const headerUserIcon = document.querySelector('.header__user-icon');
	const userIconText = document.querySelector('.user-icon__text');
	const dropMenuTitle = document.querySelector('.drop-menu__title');

	const logPassword = document.getElementById('log-password').value;
	const userData = localStorage.getItem(logPassword);
	const userDataObj = JSON.parse(userData);
	dropMenuTitle.innerHTML = `${userDataObj.function}`;
	dropMenuTitle.style.fontSize = '12px';
	userIconText.innerHTML = `${userDataObj.name[0]}${userDataObj.lname[0]}`;
	userIconText.setAttribute('title', `${userDataObj.name} ${userDataObj.lname}`);
	headerIcon.classList.add('hidden');
	headerUserIcon.classList.add('active');
}


//Set initial letters in user-icon && randomNumber_in_Profile
regForm.addEventListener('submit', setInitials);
function setInitials(e) {
	const headerUserIcon = document.querySelector('.header__user-icon');
	const userIconText = document.querySelector('.user-icon__text');
	const dropMenuTitle = document.querySelector('.drop-menu__title');

	const regPassword = document.getElementById('reg-password').value;
	const userData = localStorage.getItem(regPassword);
	const userDataObj = JSON.parse(userData);
	dropMenuTitle.innerHTML = `${userDataObj.function}`;
	dropMenuTitle.style.fontSize = '12px';
	userIconText.innerHTML = `${userDataObj.name[0]}${userDataObj.lname[0]}`;
	userIconText.setAttribute('title', `${userDataObj.name} ${userDataObj.lname}`);
	headerIcon.classList.add('hidden');
	headerUserIcon.classList.add('active');
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

//Function_that_generates_a_random_number
function randomNumber(l) {
	l = 9;
	let result = '';
	for (let i = 0; i < l; i++) {
		result = result + (Math.floor(Math.random() * 16).toString(16));
	}
	return result;
}
//Drop_menu_after_log_in

function dropMenuAfterLogin(e) {
	const loginText = document.querySelector('.drop-menu__login');
	const registerText = document.querySelector('.drop-menu__register');
	const decor = document.querySelector('.drop-menu__decor');
	const dropMenu = document.querySelector('.header__drop-menu');
	loginText.innerHTML = `My profile`;
	registerText.innerHTML = `Log Out`;
	loginText.style.cssText = `
	color: #000;
	text-align: center;
	font-family: Inter;
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	line-height:  133.333%;
	margin: 0px 0px 10px 0px;
	cursor: pointer;
	`;
	registerText.style.cssText = `
	color: #000;
	font-family: Inter;
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	line-height: 133.333%;
	margin: 0px 0px 15px 0px;
	cursor: pointer;
	`;
	decor.style.cssText = `
	width: 40px;
	height: 1px;
	background-color: #BB945F;
	margin: 0px 0px 15px 0px;
	`;
	dropMenu.style.cssText = `
	display: flex;
	position: absolute;
	top: 100%;
	right: 0;
	padding: 5px 0px;
	flex-direction: column;
	height: 115px;
	width: 80px;
	background-color: #FFF;
	align-items: center;
	transition: all 0.7s ease 0s;
	`;
	//Drop_menu_links_after_log_in_


	//Drop_menu_profile_link_after_log_in_
	const profileLinks = document.querySelectorAll('.profile-link');
	const profileModal = document.querySelector('.profile');
	const popupCloseIcons = document.querySelectorAll('.modal-close');
	profileLinks.forEach(function (link, index) {
		link.addEventListener('click', function (e) {
			modalProfileOpen(index + 1);
		});
	})
	if (popupCloseIcons.length > 0) {
		for (let i = 0; i < popupCloseIcons.length; i++) {
			const popupCloseIcon = popupCloseIcons[i];
			popupCloseIcon.addEventListener('click', function (e) {
				modalProfileClose(popupCloseIcon.closest('.profile'));
			});
		}
	}
	function modalProfileClose(elem) {
		elem.classList.remove('active');
	}

	function modalProfileOpen(e) {
		profileModal.classList.add('active');
		modalLoginClose();
		profileModal.addEventListener('click', function (e) {
			if (!e.target.closest('.profile__content')) {
				modalProfileClose(e.target.closest('.profile'));
			}
		})
	}
	//Drop_menu_logout_link_after_log_in_
	
}
//Popup_favourites_after_login
function popupFavoritesAfterLogin(e) {
	const popupBtns = document.querySelectorAll('.btn');
	const body = document.querySelector('body');
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
		modalLoginClose();
		bodyLock();
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
}

//After_sign_up_digital_libary_card

const digLibrCardBtn = document.querySelector('.find-card__button');
digLibrCardBtn.addEventListener('click', setLibrCardForm);
function setLibrCardForm(e) {
	e.preventDefault();
	const readerName = document.getElementById('name').value;
	const readerNumber = document.getElementById('number').value;
	const readerData = localStorage.getItem(readerName);
	const readerDataObj = JSON.parse(readerData);

	if (readerData === null) {

	} else if (readerName === `${readerDataObj.name} ${readerDataObj.lname}` && readerNumber === readerDataObj.function) {
		showInfoInterval();
	} else {
		alert(`Number is wrong! Check number!`);
	}
}
//Set_10sec_info
function showInfoInterval() {
	setTimeout(function () {
		const digLibrCardInfo = document.querySelector('.find-card-info');
		digLibrCardBtn.classList.add('hidden');
		digLibrCardInfo.classList.add('active')
	})
	setTimeout(function (e) {
		const digLibrCardInfo = document.querySelector('.find-card-info');
		digLibrCardBtn.classList.remove('hidden');
		digLibrCardInfo.classList.remove('active');
		document.getElementById('name').value = '';
		document.getElementById('number').value = '';
	}, 10000)
}

//After_log_in_digital_libary_card
logForm.addEventListener('submit', showCardAfterLogin)
function showCardAfterLogin(e) {
	e.preventDefault();
	const cardBefore = document.querySelector('.page__cards');
	const cardAfter = document.querySelector('.cards-after');
	cardBefore.classList.add('hidden');
	cardAfter.classList.add('active');
}

























