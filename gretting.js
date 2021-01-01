const form = document.querySelector(".js-form"),
	input = form.querySelector("input"),
	greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_ON = "showing";

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
	event.preventDefault(); // event 기본 동작 막기
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName() {
	form.classList.remove("form");
	form.classList.add(SHOWING_ON);
	form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
	form.classList.remove(SHOWING_ON);
	form.classList.add("form");

	greeting.classList.remove("greetings");
	greeting.classList.add(SHOWING_ON);
	greeting.innerText = `Hello ${text}`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null)
		askForName();
	else
		paintGreeting(currentUser);
}

function init() {
	loadName();
}

init();