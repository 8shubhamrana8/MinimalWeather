import { codeToWeather } from "./weather";

export const buildDayWeather = (weatherData) => {

    const dayWeather = document.getElementById("allDay")

    dayWeather.innerHTML = `<h3 style="text-decoration: underline; text-align: center; margin-bottom: 5px;">Today's Weather</h3>`;

    for (let i = 0; i <= 4; i++) {

        const temp = weatherData.hourly.temperature_2m[i];
        const rawDateTime = weatherData.hourly.time[i];
        const dateObj = new Date(rawDateTime);

        const formattedDate = new Intl.DateTimeFormat('en-In', {
            timeStyle: 'short',
            hour12: true
        }).format(dateObj);
        
        const thenWeather = codeToWeather(weatherData.current.weather_code, weatherData.current.is_day);
        const weatherIcon = thenWeather.url;
        
        const dayDiv = document.createElement("div");
        dayDiv.style.cssText = "gap: 5px; width: 90%; height: 20%; margin: auto; display: flex; justify-content: space-around; align-items: center; border: solid 2px white; border-radius: 10px;"
        dayDiv.innerHTML = `
                    <div class="info">${formattedDate}</div>
                    <div class="info">${temp}</div>
                    <img style="width: 70px" src="${weatherIcon}">`

        dayWeather.appendChild(dayDiv);
    }

}

