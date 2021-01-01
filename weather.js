const weather = document.querySelector(".js-weather");

const API_KEY = "5d5f3ea7e6cc6f04f977a61f2f75c1a2";
const COORDS = 'coords';

function getWeather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	).then(function(response) {
		return response.json();
	}).then(function(json) {
		const temp = json.main.temp;
		const place = json.name;
		weather.innerText = `${temp} @ ${place}`;
	})
}

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

function handleGeoError() {
	consol.log("Can't access geo location");
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadedCoords === null) {
		askForCoords();
	}
	else {
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init() {
	loadCoords();
}

init();