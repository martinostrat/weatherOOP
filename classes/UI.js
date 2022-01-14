class UI {
    constructor() {
        this.description = document.querySelector('#description');
        this.temp = document.querySelector('#temp');
        this.location = document.querySelector('#location');
    }

    drawWeather(data) {
        let cel = Math.round(parseFloat(data.main.temp) - 273.15);
        let desc = data.weather[0].description;
    
        this.description.innerHTML = desc;
        this.temp.innerHTML = cel + '&deg;';
        this.location.innerHTML = data.name;
    }
}