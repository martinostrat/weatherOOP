const ls = new LS();
const initCity = ls.getCity();
const weather = new Weather(initCity);
const ui = new UI();

const form = document.querySelector('#change-city');
form.addEventListener('submit', changeCity);

function changeCity(event) {
    const cityName = document.querySelector('#city-name').value;
    weather.changeCity(cityName);
    getWeather();
    document.querySelector('#city-name').value = '';
    event.preventDefault();
    ls.setCity(cityName);
}

function getWeather() {
    weather.getWeather()
    .then(data => {
        ui.drawWeather(data);
    })
    .catch(error => {
        console.log(error);
    })
}


getWeather();