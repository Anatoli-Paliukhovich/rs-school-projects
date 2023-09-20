'use strict'

const player = document.querySelector('.player');
const prevBtn = document.querySelector('.prev');
const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.next');
const songAuthor = document.querySelector('.player__song-author');
const songTitle = document.querySelector('.player__song-title');
const progress = document.querySelector('.player__progress');
const progressItem = document.querySelector('.player__progress-item');
const playerImg = document.querySelector('.palyer__img');
const audio = document.querySelector('.song');


const playTitle = ['Eminem - Just Lose It', 'Eminem - The Real Slim Shady', 'Sia Eminem - Beautiful Pain'];
const playAuthor = ['Em', 'Sia', '50cent'];
let currentIndSong = 2;

function currentSong(song) {
	songTitle.innerHTML = song;
	audio.src = `audio/${song}.mp3`;
	playerImg.src = `img/logo${currentIndSong + 1}.png`;
}
currentSong(playTitle[currentIndSong]);

function currentAuthor(author) {
	songAuthor.innerHTML = author;
}
currentAuthor(playAuthor[currentIndSong]);


playBtn.addEventListener('click', function () {
	audio.play();
});
