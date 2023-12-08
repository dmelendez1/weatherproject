class WeatherAPI {
    constructor() {
        this.baseURL = "https://api.weather.gov/";
    }

    async fetchWeather(coords) {
        const url = `${this.baseURL}points/${coords}`;
        const response = await fetch(url);
        let data = await response.json();
    
        const forecastResponse = await fetch(data.properties.forecast);
        data = await forecastResponse.json();
    
        const weatherInfo = data.properties.periods.map(period => {
            return {
                name: period.name, 
                temperature: period.temperature,
                winds: period.windSpeed,
                shortForecast: period.shortForecast
            }
        })

            

        return weatherInfo;
    }

    
}
