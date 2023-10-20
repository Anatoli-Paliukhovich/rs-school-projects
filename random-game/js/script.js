'use strict'


const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const message = document.querySelector('.game__message');
const messageStart = document.querySelector('.game__start');
const gameBtn = document.querySelector('.game__btn');

let backgroung = new Image();
backgroung.src = `img/background.jpg`;
let bird = new Image();
bird.src = `img/birdwingsup.png`;
bird.classList.add(`bird`);
let pipeTop = new Image();
pipeTop.src = `img/pipeup.png`;
let pipeBottom = new Image();
pipeBottom.src = `img/pipedown.png`;
let birdSound = new Audio();
birdSound.src = `audio/music.mp3`;
let birdScore = new Audio();
birdScore.src = `audio/score.mp3`;
let gameOver = new Audio();
gameOver.src = `audio/gameover.mp3`


let count = 0;
let gap = 240;
let gravity = 2;
let birdX = 480;
let birdY = 150;
let pipes = [];

pipes[0] = {
	x: canvas.width,
	y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height,
}
function showImg() {
	context.drawImage(backgroung, 0, 0, 1470, 520);
	context.drawImage(bird, birdX, birdY, 55, 50);

	for (let i = 0; i < pipes.length; i++) {
		context.drawImage(pipeBottom, pipes[i].x, pipes[i].y);
		context.drawImage(pipeTop, pipes[i].x, pipes[i].y + pipeBottom.height + gap);
		pipes[i].x--;
		if (pipes[i].x == canvas.width - 170) {
			pipes.push({
				x: canvas.width,
				y: Math.floor((Math.random() * pipeTop.height) - pipeTop.height),
			})
		}
		if (pipes[i].x == 430) {
			count++;
			birdScore.play();
		}

		context.font = '34px Arial';
		context.fillStyle = `#ff0000`;
		context.fontWeight = 'bold';
		context.fillText(`Score:` + `${count}`, 10, 50)
		if ((birdY + 50 <= pipes[i].y + pipeBottom.height || birdY + 25 >= pipes[i].y + pipeBottom.height + gap) && birdX + 55 >= pipes[i].x && birdX <= pipes[i].x + pipeBottom.width || (birdY + 55 >= canvas.height || birdY + 10 <= 0)) {
			message.style.display = `block`;
			addScore(count);
			gameOver.play();
			birdSound.pause();

			return;
		}
	}
	birdY += gravity;
	requestAnimationFrame(showImg);
}
window.onload = showImg;

document.addEventListener('keyup', reStart);
function reStart(e) {
	if (e.key == 'Enter') {
		message.style.display = `none`;
		location.reload();
	}
}

document.addEventListener('keydown', function (e) {
	if (e.key == 'ArrowUp') {
		bird.src = `img/birdwingsdown.png`;
		moveBird();
	}
});
document.addEventListener('keyup', function (e) {
	if (e.key == 'ArrowUp') {
		bird.src = `img/birdwingsup.png`;
		moveBird();
	}
});
function moveBird() {
	birdY -= 35;
	birdSound.play();
}
const scoreResult = JSON.parse(localStorage.getItem('gameScore')) || [];
function addScore() {
	scoreResult.push(count);
	if (scoreResult.length > 10) {
		scoreResult.shift(0);
	}
	localStorage.setItem('gameScore', JSON.stringify(scoreResult));
}

function showScore() {
	const gameScore = document.querySelector('.game__score');
	for (let i = 0; i < scoreResult.length; i++) {
		const gameRes = document.createElement('p');
		if (i == 9) {
			gameRes.innerHTML = `Last Game : ${scoreResult[i]}`;
		} else {
			gameRes.innerHTML = `Game : ${scoreResult[i]}`;
		}
		gameRes.style.fontSize = `18px`;
		gameRes.style.textAlign = `left`;
		gameRes.style.padding = `0 0 0 20px`;
		gameScore.append(gameRes);
	}
}
showScore();