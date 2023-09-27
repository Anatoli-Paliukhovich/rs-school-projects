'use strict'

const inputField = document.querySelector('.search-input');
const inputFieldValue = document.getElementById('search').value;
const clearBtn = document.querySelector('.clear-button');
const searchBtn = document.getElementById('searchBtn');
const galleryRow = document.querySelector('.gallery__row');
const imgSrs = document.querySelector('.gallery-image');
let url = `https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=7js_hdk6-l838D_UDUSoxpNw64QGy_fol5HOyyJ7i6I`;


document.addEventListener('DOMContentLoaded', showFocus);
function showFocus() {
	inputField.focus();
}

inputField.addEventListener('input', showClearBtn);
function showClearBtn() {
	if (inputField.value !== '') {
		clearBtn.style.display = 'block';
	} else {
		clearBtn.style.display = 'none';
	}
}

clearBtn.addEventListener('click', clearInput);
function clearInput() {
	inputField.value = '';
	clearBtn.style.display = 'none';
	inputField.focus();
}

async function getData() {
	const res = await fetch(url);
	const data = await res.json();
	let subArr = data.results;
	showData(subArr);
}
getData();

function showData(subArr) {
	subArr.map(function (item) {
		const newColumn = document.createElement('div');
		newColumn.className = `gallery__column`;
		const newImage = document.createElement('img')
		newImage.className = `gallery-image`;
		newImage.src = item.urls.regular;
		newImage.alt = `image`;
		newColumn.append(newImage);
		galleryRow.append(newColumn);
	})
}

searchBtn.addEventListener('click', getSearchData)
async function getSearchData() {
	let inputFieldVal = document.getElementById('search').value;
	if (inputFieldVal !== "") {
		let searchUrl = `https://api.unsplash.com/search/photos?query=${inputFieldVal}&per_page=30&orientation=landscape&client_id=7js_hdk6-l838D_UDUSoxpNw64QGy_fol5HOyyJ7i6I`;
		const res = await fetch(searchUrl);
		const data = await res.json();
		let subArr = data.results;
		showSearchData(subArr);
	}
}
getSearchData();

function showSearchData(subArr) {
	for (let i = 0; i < subArr.length; i++) {
		const getElem = document.getElementsByClassName('gallery-image');
		for (let i = 0; i < getElem.length; i++) {
			getElem[i].src = subArr[i].urls.regular;
		}
	}
}

document.addEventListener('keyup', function (event) {
	if (event.code === 'Enter') {
		getSearchData();
	}
})

