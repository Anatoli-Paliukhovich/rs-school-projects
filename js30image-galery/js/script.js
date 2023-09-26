'use strict'

const inputField = document.querySelector('.search-input');
const inputFieldValue = document.querySelector('.search-input').value;
const clearBtn = document.querySelector('.clear-button');
const imgSrs = document.querySelector('.test');
const url = `https://api.unsplash.com/photos/random?query=${inputFieldValue}&client_id=kzwiJQz-L95b2MwhyG9y_bKoqVJ8aN9X_9JrtKm5JSs`;

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
	showData(data);
}
getData();

function showData(data) {
	imgSrs.src = data.urls.regular;
}