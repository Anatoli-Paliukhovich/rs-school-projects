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
		//clearInterval(setInt);
	})
});
function combineFunc(i) {
	activeSlide(i);
	activeLabel(i);
}
//const setInt = setInterval(nextSlide, 3000);

//Popup_favourites_before_login
const popupBtns = document.querySelectorAll('.item-favorites__btn');
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
	const dropMenuTitle = document.querySelectorAll('.drop-menu__title');

	const logPassword = document.getElementById('log-password').value;
	const userData = localStorage.getItem(logPassword);
	const userDataObj = JSON.parse(userData);
	dropMenuTitle.forEach(function (title) {
		title.innerHTML = `${userDataObj.function}`;
		title.style.fontSize = '12px';
	})
	userIconText.innerHTML = `${userDataObj.name[0]}${userDataObj.lname[0]}`;
	userIconText.setAttribute('title', `${userDataObj.name} ${userDataObj.lname}`);
	headerIcon.classList.add('hidden');
	headerUserIcon.classList.add('active');

	//Set__user_name_and_number_to_Digital_card_after_login
	document.getElementById('cardName').value = `${userDataObj.name} ${userDataObj.lname}`;
	document.getElementById('cardNumber').value = `${userDataObj.function}`;
	//Set_initial_letters_and_user_name_and_number_to_PROFILE_modal
	const logoItem = document.querySelector('.logo-item>span');
	const logoUser = document.querySelector('.logo-user');
	const randomNumber = document.querySelector('.card-num__digits');
	randomNumber.innerHTML = `${userDataObj.function}`;
	logoItem.innerHTML = `${userDataObj.name[0]}${userDataObj.lname[0]}`;
	logoUser.innerHTML = `${userDataObj.name} ${userDataObj.lname}`;
	//Copy_on_click
	const profileCopyBtn = document.querySelector('.card-num__btn');
	const alertText = document.querySelector('.alert');
	profileCopyBtn.addEventListener('click', function () {
		profileCopyBtn.classList.add('clicked');
		alertText.classList.add('active');
		setTimeout(function (e) {
			profileCopyBtn.classList.remove('clicked');
		}, 300);
		setTimeout(function (e) {
			alertText.classList.remove('active');
		}, 1000);
		navigator.clipboard.writeText(`${userDataObj.function}`);
	})
}


//Set initial letters in user-icon && randomNumber_in_Profile
regForm.addEventListener('submit', setInitials);
function setInitials(e) {
	const headerUserIcon = document.querySelector('.header__user-icon');
	const userIconText = document.querySelector('.user-icon__text');
	const dropMenuTitle = document.querySelectorAll('.drop-menu__title');

	const regPassword = document.getElementById('reg-password').value;
	const userData = localStorage.getItem(regPassword);
	const userDataObj = JSON.parse(userData);
	dropMenuTitle.forEach(function (title) {
		title.innerHTML = `${userDataObj.function}`;
		title.style.fontSize = '12px';
	});
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




//Popup_favourites_after_login
function popupFavoritesAfterLogin(e) {
	const popupBtns = document.querySelectorAll('.item-favorites__btn');
	const popupCloseIcons = document.querySelectorAll('.close-btn');
	const popup = document.querySelector('.popup');
	const popupForm = document.querySelector('.popup__form');
	const favoritesBlock = document.querySelector('.page__favorites');

	let lastClickedBtn = null;

	popupBtns.forEach((button, index) => {
		button.addEventListener('click', () => {
			lastClickedBtn = button;
		});
	});
	popupForm.addEventListener('submit', function (e) {
		e.preventDefault();

		if (lastClickedBtn) {
			const infoBlock = lastClickedBtn.closest('.favorites__content');
			const autorInfo = infoBlock.querySelector('.item-favorites__author>span').textContent;
			const titleInfo = infoBlock.querySelector('.item-favorites__title').textContent;
			const profileInfo = document.querySelector('.books__list');
			const newElem = document.createElement('li');
			newElem.classList.add('books__item');
			newElem.innerHTML = `${titleInfo}, ${autorInfo}`;
			profileInfo.append(newElem);
			lastClickedBtn.outerHTML = `<button class="item-favorites__btn-disabled" disabled>Own</button>`;
			lastClickedBtn.setAttribute('disabled', 'disabled');
		}
	});

	favoritesBlock.addEventListener('click', showPopupOnClick);
	function showPopupOnClick(event) {
		if (event.target.closest('.item-favorites__btn')) {
			popupOpen();
			popupForm.addEventListener('submit', function (e) {
				e.preventDefault();
				popupClose();
				popup.classList.add('hidden');
				popupBtns.forEach(function (btn, index) {
					btn.addEventListener('click', function (e) {
						const infoBlock = btn.closest('.favorites__content');
						const autorInfo = infoBlock.querySelector('.item-favorites__author>span').textContent;
						const titleInfo = infoBlock.querySelector('.item-favorites__title').textContent;
						const profileInfo = document.querySelector('.books__list');
						const newElem = document.createElement('li');
						newElem.classList.add('books__item');
						newElem.innerHTML = `${titleInfo}, ${autorInfo}`;
						profileInfo.append(newElem);
						btn.outerHTML = `<button class="item-favorites__btn-disabled" disabled>Own</button>`;
						btn.setAttribute('disabled', 'disabled');
					})
				});
			})
		}
	}
	if (popupCloseIcons.length > 0) {
		for (let i = 0; i < popupCloseIcons.length; i++) {
			const popupCloseIcon = popupCloseIcons[i];
			popupCloseIcon.addEventListener('click', function (e) {
				popupClose(popupCloseIcon.closest('.popup'));
			});
		}
	}
	function popupClose(e) {
		document.body.classList.remove('_lock');
		popup.classList.remove('open');
	}

	function popupOpen(e) {
		popup.classList.add('open');
		modalLoginClose();
		popup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		})
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
const cardBefore = document.querySelector('.page__cards');
const cardAfter = document.querySelector('.cards-after');
logForm.addEventListener('submit', showCardAfterLogin)
function showCardAfterLogin(e) {
	e.preventDefault();
	cardBefore.classList.add('hidden');
	cardAfter.classList.add('active');
}

//Drop menu в header after login
const menuAfterLogin = document.querySelector('.drop-menu-after-login');
const userIcon = document.querySelector('.header__user-icon');
const iconText = document.querySelector('.user-icon__text')
logForm.addEventListener('submit', hideDropMenu);
function hideDropMenu(e) {
	dropMenu.classList.add('hidden');
	document.addEventListener('click', openMenuAfterLogIn);
	function openMenuAfterLogIn(e) {
		if (e.target.closest('.user-icon__text')) {
			menuAfterLogin.classList.toggle('active');
			menuHeader.classList.remove('_active');
			menuIcon.classList.remove('_active');
			e.preventDefault();
		}
		if (!e.target.closest('.header__user-icon')) {
			menuAfterLogin.classList.remove('active');
		}
	}
}

//menu_profile_link_after_log_in_
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
	profileModal.classList.remove('active');
}

function modalProfileOpen(e) {
	profileModal.classList.add('active');
	menuAfterLogin.classList.remove('active');
	profileModal.addEventListener('click', function (e) {
		if (!e.target.closest('.profile__content')) {
			modalProfileClose(e.target.closest('.profile'));
		}
	})
}
//Drop_menu_logout_link_after_log_in_
const profileLogoutLink = document.querySelector('.profile-logout');
profileLogoutLink.addEventListener('click', function (e) {
	window.location.reload();
})

//Add_count_visits_after_login
logForm.addEventListener('submit', setCount);
function setCount(e) {
	let countNum = JSON.parse(localStorage.getItem("counter"));
	if (countNum === null) {
		countNum = 0;
	}
	countNum += 1;
	localStorage.setItem("counter", countNum);
	const visit = document.querySelectorAll('.visit');
	visit.forEach(function (item) {
		item.innerHTML = countNum;
	})
}
//Add_count_visits_after_register
regForm.addEventListener('submit', setCount);
function setCount(e) {
	let countNum = JSON.parse(localStorage.getItem("counter"));
	if (countNum === null) {
		countNum = 0;
	}
	countNum += 1;
	localStorage.setItem("counter", countNum);
	const visit = document.querySelectorAll('.visit');
	visit.forEach(function (item) {
		item.innerHTML = countNum;
	})
}

//Disable_favourites-btn_after_submiting_form



























