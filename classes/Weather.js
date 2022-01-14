class Weather {
    constructor(city) {
        this.city = city;
        this.key = 'b05a100c6e6c27146f81ad75c338bae4';
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const responseData = await response.json();
        return responseData;
    }

    changeCity(city) {
        this.city = city;
    }
}