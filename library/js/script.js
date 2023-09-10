'use strict';


console.log('Этап 1: Пользователь не зарегистрирован\nОграниченная карусель в блоке About\n1.Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15\n2.На экране шириной 1440px доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2\n3.Выделенная кнопка под каруселью (соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2\n4.Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, картинка не зависает в промежуточном состоянии. +2\n5.На экране шириной 768px доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2\n6.Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2\nСлайдер в блоке Favorites\n1."Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15\n2.На любой ширине экрана все 4 карточки с книгами одновременно затухают, а затем плавно проявляются следующие. +2\n3.Анимация может быть прервана следующим нажатием на кнопку выбора поры года, и при этом анимация не застывает в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она отрабатывает до конца. +2\n4.Во время анимаций высота блока Favorites не меняется. +2\n5.Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. +2\nДо регистрации\nНажатие на кнопку Check the card ни к чему не приведёт.\nДо авторизации\nИконка юзера в хедере отображается в виде силуэта.\nВ блоке Favorites все кнопки имеют имя Buy, а не Own. +2\nTotal за Этап 1:\nВСЕ ТАСКИ ВЫПОЛНЕНЫ - 50 БАЛЛОВ\nЭтап 2: Пользователь на этапе регистрации\nМеню авторизации при нажатии на иконку пользователя\n1.Нажатие на иконку пользователя в хедере открывает меню, которое находится под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой.(Обратите, плиз, внимание, что в задании указано, что правый верхний угол меню находится в той же точке, что и нижний правый угол КОНТЕЙНЕРА с иконкой(иконке даны паддинги сверху/снизу)) +2\n2.На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2\n3.То же верно и в обратную сторону, кнопка бургер-меню доступна при открытом меню авторизации. +2\n4.Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2\nМодальное окно REGISTER\n1.Дизайн модального окна соответствует макету. +15\n2.При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2\n3.При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER. +2\n4.Окно центрировано, а область вокруг затемнена. +2\n5.При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n6.В данном случае, ограничения по полям - все поля должны быть не пустыми. +2\n7.Пароль должен быть не короче 8 символов. +2\n8.В поле E-mail валидация типа email. +2\nОкончание регистрации\n1.Данные сохраняются в хранилище localStorage. +2\n2.Иконка пользователя меняется на заглавные буквы имени. +2\n3.Отображение страницы приходит в состояние после авторизации (этап 4). +2\n4.Cгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2\nПри наличии регистрации, но будучи не авторизованным\n1.Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2\n2.Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2\nTotal за Этап 2:\nВСЕ ТАСКИ ВЫПОЛНЕНЫ - 49 БАЛЛОВ\nЭтап 3: Пользователь на этапе входа в учётную запись после регистрации.\nМодальное окно LOGIN\n1.Дизайн модального окна соответствует макету. +15\n2.При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2\n3.При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN. +2\n4.Окно центрировано, а область вокруг затемнена. +2\n5.При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n6.Для авторизации все поля должны быть не пустыми. +2\n7.Пароль должен быть не короче 8 символов. +2\nБлок Favorites\nЕсли пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2\nTotal за Этап 3:\nВСЕ ТАСКИ ВЫПОЛНЕНЫ - 29 БАЛЛОВ\nЭтап 4: Пользователь после входа в учётную запись\nМеню профиля при нажатии на иконку с инициалами пользователя\n1.При наведении курсором на иконку пользователя отображается полное имя пользователя. +2\n2.Нажатие на иконку пользователя в хедере открывает меню, которое находится под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2\n3.На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2\n4.То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2\n5.Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2\n6.Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер, +2\n7.Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2\n8.Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2\nМодальное окно MY PROFILE\n1.Дизайн модального окна соответствует макету. +15\n2.В случае если имя и фамилия слишком длинные и не влазят в блок то происходит перенос фамилии на следующую строку.\n3.Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2\n4.Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. +2\n5.Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2\n6.Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n7.При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2\nБлок Favorites\n1.При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD. +2\n2.При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле. +2\n3.После нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен +2\nМодальное окно BUY A LIBRARY CARD\n1.Модальное окно нужно сделать шириной 640px. +2\n2.Дизайн модального окна соответствует макету. +15\n3.При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n4.Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми. +2\n5.❗Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +0\n6.❗Expiration code содержит 2 поля с ограничением в 2 цифры. +0\n7.❗CVC должен содержать 3 цифры. +0\n8.После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.\nБлок Digital Library Cards\n1.При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. +2\nTotal за Этап 4:\n  3 ТАСКА НЕ ВЫПОЛНЕНЫ (ПОМЕЧЕНЫ ❗) - 70 БАЛЛОВ\nTOTAL ЗА ВСЕ ЭТАПЫ: 50 + 49 + 29 + 70 = 198 БАЛЛОВ');


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
		logForm.removeEventListener('submit', setCount);
		regForm.removeEventListener('submit', setCount);
	} else if (logPass === userDataObj.password && logEmail === userDataObj.email || logEmail === userDataObj.function && logPass === userDataObj.password) {
		modalLoginClose();
		popupFavoritesAfterLogin();
		showCardAfterLogin();
		setCount();
		hideDropMenu();
	} else if (logEmail !== userDataObj.email) {
		alert('Email is wrong! Check email');
		logForm.removeEventListener('submit', setCount);
		regForm.removeEventListener('submit', setCount);
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

	//Book count
	const bookCount = document.querySelectorAll('.book');
	popupForm.addEventListener('submit', setCount);
	function setCount(e) {
		let countNum = JSON.parse(localStorage.getItem("count"));
		if (countNum === null) {
			countNum = 0;
		}
		countNum += 1;
		localStorage.setItem("count", countNum);
		bookCount.forEach(function (item) {
			item.innerHTML = countNum;
		})
	}
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
						setCount();
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