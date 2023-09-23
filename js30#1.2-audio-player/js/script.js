'use strict'

const player = document.querySelector('.player');
const prevBtn = document.querySelector('.prev');
const playBtn = document.querySelector('.img-play');
const pauseBtn = document.querySelector('.img-pause');
const nextBtn = document.querySelector('.next');
const songAuthor = document.querySelector('.player__song-author');
const songTitle = document.querySelector('.player__song-title');
const progress = document.querySelector('.player__progress');
const progressItem = document.querySelector('.player__progress-item');
const playerImg = document.querySelector('.palyer__img');
const songAudio = document.querySelector('.song');
const songCurrentTime = document.querySelector('.time-played');
const songDurationTime = document.querySelector('.time-total');
const repeatBtn = document.querySelector('.repeat-img1');
const repeatBtnActive = document.querySelector('.icon-repeat2');
const pageBackground = document.querySelector('.page__backgroung');



const playTitle = ['Лесник', 'По ветру', 'Давай сбежим', 'Плохая девочка'];
const playAuthor = ['Король и шут', 'Без билета', '5утра', 'Винтаж'];

let currentIndSong = 0;

function currentAuthor(author) {
	songAuthor.innerHTML = author;
}
currentAuthor(playAuthor[currentIndSong]);

function currentSong(song) {
	songTitle.innerHTML = song;
	songAudio.src = `audio/${song}.mp3`;
	playerImg.src = `img/logo${currentIndSong + 1}.jpg`;
	pageBackground.src = `img/logo${currentIndSong + 1}.jpg`;
}
currentSong(playTitle[currentIndSong]);

playBtn.addEventListener('click', playSong);
function playSong() {
	songAudio.play();
	playBtn.classList.add('hidden');
	pauseBtn.classList.add('active');
}

pauseBtn.addEventListener('click', pauseSong);
function pauseSong() {
	songAudio.pause();
	pauseBtn.classList.remove('active');
	playBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', nextSong);
function nextSong() {
	if (currentIndSong === playTitle.length - 1) {
		currentIndSong = 0;
	} else {
		currentIndSong++;
	}
	currentAuthor(playAuthor[currentIndSong]);
	currentSong(playTitle[currentIndSong]);
	playSong();
}

prevBtn.addEventListener('click', previousSong);
function previousSong() {
	if (!currentIndSong) {
		currentIndSong = playTitle.length - 1;
	} else {
		currentIndSong--;
	}
	currentAuthor(playAuthor[currentIndSong]);
	currentSong(playTitle[currentIndSong]);
	playSong();
}

songAudio.addEventListener('timeupdate', updateTime);
function updateTime() {
	setTime();
	progressUpdate();
}

function setTime() {
	songCurrentTime.innerHTML = new Date(songAudio.currentTime * 1000).toISOString().substr(11, 8).substr(3);
	songDurationTime.innerHTML = new Date(songAudio.duration * 1000).toISOString().substr(11, 8).substr(3);
}

function progressUpdate() {
	const updatedProgress = (songAudio.currentTime / songAudio.duration) * 100;
	progressItem.style.width = `${updatedProgress}%`;
}

songAudio.addEventListener('ended', endSong);
function endSong() {
	if (songAudio.currentTime === songAudio.duration) {
		nextSong();
	}
}

progress.addEventListener('click', setProgressPosition);
function setProgressPosition(event) {
	const progressBarWidth = progress.clientWidth;
	const clientX = event.offsetX;

	songAudio.currentTime = (clientX / progressBarWidth) * (songAudio.duration);
}

repeatBtn.addEventListener('click', setRepeat);
function setRepeat() {
	repeatBtn.classList.add('hidden');
	repeatBtnActive.classList.add('active');
	songAudio.loop = true;
}

repeatBtnActive.addEventListener('click', removeRepeat);
function removeRepeat() {
	repeatBtn.classList.remove('hidden');
	repeatBtnActive.classList.remove('active');
	songAudio.loop = false;
}

let mouseDownClick = false;
function move(event) {
	const moveTime = (event.offsetX / progress.clientWidth) * songAudio.duration
	songAudio.currentTime = moveTime;
}
progress.addEventListener("click", move)
progress.addEventListener("mousemove", function (e) {
	mouseDownClick && move(e);
});
progress.addEventListener("mousedown", function (e) {
	mouseDownClick = true
});
progress.addEventListener("mouseup", function (e) {
	mouseDownClick = false;
})