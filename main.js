const NoteA = new Audio('audio/1.mp3');
const NoteS = new Audio('audio/2.mp3');
const NoteD = new Audio('audio/3.mp3');
const NoteF = new Audio('audio/4.mp3');
const NoteG = new Audio('audio/5.mp3');
const NoteH = new Audio('audio/6.mp3');
const NoteJ = new Audio('audio/7.mp3');
const NoteK = new Audio('audio/8.mp3');


const playSound = function(audio) {
    audio.play();
};

// Button A
const keyA = document.querySelector("#buttonA");
const musicA = function () {
    playSound(NoteA);
};
keyA.addEventListener('click', musicA);

// Button S
const keyS = document.querySelector("#buttonS");
const musicS = function () {
    playSound(NoteS);
};
keyS.addEventListener('click', musicS);

// Button D
const keyD = document.querySelector("#buttonD");
const musicD = function () {
    playSound(NoteD);
};
keyD.addEventListener('click', musicD);


// Button F
const keyF = document.querySelector("#buttonF");
const musicF = function () {
    playSound(NoteF);
};
keyF.addEventListener('click', musicF);

// Button G
const keyG = document.querySelector("#buttonG");
const musicG = function () {
    playSound(NoteG);
};
keyG.addEventListener('click', musicG);

// Button H
const keyH = document.querySelector("#buttonH");
const musicH = function () {
    playSound(NoteH);
};
keyH.addEventListener('click', musicH);

// Button J
const keyJ = document.querySelector("#buttonJ");
const musicJ = function () {
    playSound(NoteJ);
};
keyJ.addEventListener('click', musicJ);

// Button K
const keyK = document.querySelector("#buttonK");
const musicK = function () {
    playSound(NoteK);
};
keyK.addEventListener('click', musicK);

// Keypress
window.addEventListener('keydown', ({keyCode}) => {
	// Press A 
	if(keyCode === 65) {
		keyA.classList.add('active')
		return musicA();
		};
	// Press S 
	if(keyCode === 83) {
		keyS.classList.add('active')
		return musicS();
		};
	// Press D
	if(keyCode === 68) {
		keyD.classList.add('active')
		return musicD();
		};
	// Press F
	if(keyCode === 70) {
		keyF.classList.add('active')
		return musicF();
		};
	// Press G
	if(keyCode === 71) {
		keyG.classList.add('active')
		return musicG();
		};
	// Press H
	if(keyCode === 72) {
		keyH.classList.add('active')
		return musicH();
		};
	// Press J
	if(keyCode === 74) {
		keyJ.classList.add('active')
		return musicJ();
		};
	// Press K
	if(keyCode === 75) {
		keyK.classList.add('active')
		return musicK();
		};
});


window.addEventListener('keyup', ({keyCode}) => {
	// Press A 
	if(keyCode === 65) {
		keyA.classList.remove('active')
		};
	// Press S 
	if(keyCode === 83) {
		keyS.classList.remove('active')
		};
	// Press D
	if(keyCode === 68) {
		keyD.classList.remove('active')
		};
	// Press F
	if(keyCode === 70) {
		keyF.classList.remove('active')
		};
	// Press G
	if(keyCode === 71) {
		keyG.classList.remove('active')
		};
	// Press H
	if(keyCode === 72) {
		keyH.classList.remove('active')
		};
	// Press J
	if(keyCode === 74) {
		keyJ.classList.remove('active')
		};
	// Press K
	if(keyCode === 75) {
		keyK.classList.remove('active')
		};
});

