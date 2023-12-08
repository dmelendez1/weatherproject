let weatherAPI 

let cities = [
    {   name: "Phoenix, AZ", 
        latitude: 33.4484, 
        longitude: -112.0740 
    },
    {   name: "Tucson, AZ", 
        latitude: 32.2226, 
        longitude: -110.9747 
    },
    {   name: "Mesa, AZ", 
        latitude: 33.4152, 
        longitude: -111.8315 
    },
    {   name: "Chandler, AZ", 
        latitude: 33.3062, 
        longitude: -111.8413 
    },
    {   name: "Glendale, AZ", 
            latitude: 33.5387, 
            longitude: -112.1850 
    },
  ];


  document.addEventListener('DOMContentLoaded', () => {
    weatherAPI = new WeatherAPI()
    populateDropdown();
  
    let dropdown = document.getElementById('cityDropdown');
    dropdown.addEventListener("change", selectionChange);
});

function populateDropdown() {
    let dropdown = document.getElementById('cityDropdown');
    cities.forEach(city => {
        let option = document.createElement('option');
        option.textContent = city.name;
        option.value= city.latitude+ "," + city.longitude;
        dropdown.appendChild(option);
    });
}

async function selectionChange() {
    let table = document.getElementById('weatherInfo');
    table.innerHTML = '';
    let dropdown = document.getElementById('cityDropdown');
    let forecast = await weatherAPI.fetchWeather(dropdown.value);
    forecast.forEach(weatherInfo => displayWeatherInfo(weatherInfo))
}


    
    function displayWeatherInfo(weatherInfo) {
        let table = document.getElementById('weatherInfo');
        
        let row = table.insertRow();
        
        // Name
        let nameCell = row.insertCell();
        nameCell.textContent = weatherInfo.name;
    
        //Temperature
        let tempCell = row.insertCell();
        tempCell.textContent = `Temperature: ${weatherInfo.temperature} ${weatherInfo.temperatureUnit}`;
    
        // Winds
        let windsCell = row.insertCell();
        windsCell.textContent = `Winds: ${weatherInfo.winds}`;
    
        // shortForecast
        let forecastCell = row.insertCell();
        forecastCell.textContent = weatherInfo.shortForecast;
    }
    
   


 