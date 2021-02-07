const weather = document.querySelector(".js-weather");

const API_KEY = "00a04eb4a23b311b310ae9d6e8b83298"; //https://home.openweathermap.org/api_keys
const COORDS = 'coords';
//How to get specific URL using JS
function getWeather(lat,lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        })
        //가져올 데이터를 넣음 / &units=metric => 단위 추가 / then : 데이터가 완전히 들어온 다음 함수 호출
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,   //=>latitude: latitude,
        longitude   //=>longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log('Cant access geo location')
}

function askForCoords(){    //navigator API 사용
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);  //getCurrentPosition 첫번째 인자 => 좌표를 가져오는데 성공했을때 처리하는 함수
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();

}

init();