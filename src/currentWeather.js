import { codeToWeather } from './weather.js';

// --- Today & Hourly Weather Builder ---
export const buildCurrentWeather = (city, weatherData) => {
    const rawDateTime = weatherData.current.time;
    const dateObj = new Date(rawDateTime);

    const formattedDate = new Intl.DateTimeFormat('en-In', {
        dateStyle: 'full',
        timeStyle: 'short',
        hour12: true
    }).format(dateObj);

    const temp = weatherData.current.temperature_2m;
    const apprantTemp = weatherData.current.apparent_temperature;
    
    const currentWeather = codeToWeather(weatherData.current.weather_code, weatherData.current.is_day);

    const currentlabel = currentWeather.label;
    const currentIcon = currentWeather.url;


    document.getElementById("place").innerHTML = `${city} <span id="datetime" style="font-size: 20px;">${formattedDate}</span>`;;
    document.getElementById("accurate").innerHTML = `${temp}${weatherData.current_units.temperature_2m} <span id= "feelslike" style = "font-size: 20px;"> but feels like ${apprantTemp}${weatherData.current_units.apparent_temperature}</span></p>`;
    document.getElementById("humidity").innerHTML = ` Humidity ${weatherData.current.relative_humidity_2m}${weatherData.current_units.relative_humidity_2m}`;
    document.getElementById("weatherIcon").innerHTML = `<img src="${currentIcon}">`
    
}