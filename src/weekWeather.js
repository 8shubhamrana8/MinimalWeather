import { codeToWeather } from "./weather";

export const buildWeekWeather = (weatherData) => {
    const weekDataContainer = document.getElementById("Week");
    weekDataContainer.innerHTML = ""; // Clear previous data to prevent duplication

    const dailyTimeArr = weatherData.daily.time;
    const dailyMinTempArr = weatherData.daily.temperature_2m_min;
    const dailyMaxTempArr = weatherData.daily.temperature_2m_max;
    const dailyWeather_Code = weatherData.daily.weather_code;

    for (let i = 0; i < 7; i++) {

        const weatherIcon = codeToWeather(dailyWeather_Code[i]);
        const dateObj = new Date(dailyTimeArr[i]);
        const date = new Intl.DateTimeFormat('en-In', {
            weekday: 'long',
            day: 'numeric',
            month: 'short'
        }).format(dateObj);

        const max = dailyMaxTempArr[i];
        const min = dailyMinTempArr[i];

        let dataDiv = document.createElement("div");
        
        dataDiv.style.cssText =
            "display: flex; flex-direction: column; margin: auto;";
        
        dataDiv.classList.add("weekDataDiv")    

        dataDiv.innerHTML = `
                <div style="justify-content: space-between ;height: 80%; display: flex; border: solid 2px white; border-radius: 10px">
                    <div class="weekIcon" style="margin: auto;"><img src="${weatherIcon.url}"></div>
                    <div style="justify-content: space-around; display: flex; flex-direction: column; padding-inline: 5px;">
                        <div style="margin: auto;">${max}</div>
                        <div style="margin: auto;">${min}</div>
                    </div>
                </div>
                <div style="height: 20%;">
                    <p style="text-align: center;">${date}</p>    
                </div>
                `;

        weekDataContainer.appendChild(dataDiv);
    }
};
