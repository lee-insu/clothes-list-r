class Weather {
    constructor(key){
        this.key = key;
    };


getNowWeather() {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
    .then(res => res.json())
}

}

export default Weather;