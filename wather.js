const weather = document.querySelector(".js-weather");


const API_KEY = "d5c20d7886a2124c98daa21645d70990";
const COORDS = 'coords';

function getWeater(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `기온: ${temperature}'C
             장소: ${place} City`;
        });
    }

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
       latitude,
       longitude
    };
    saveCoords(coordsObj);
    getWeater(latitude, longitude);
}

function handleGeoError(position){
    
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeater(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();