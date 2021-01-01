const body = document.querySelector("body");

const IMG_NUMBER = 3;

function getRandom() {
	return Math.floor(Math.random() * 3);
}

function paintImage(imgNum) {
	const img = new Image();
	img.src = `images/${imgNum + 1}.jpg`;
	img.classList.add("bgImage");
	body.appendChild(img);
}

function init() {
	const randomNum = getRandom();
	paintImage(randomNum);
}

init();