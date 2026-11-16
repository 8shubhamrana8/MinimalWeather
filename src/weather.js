const weatherCodes = {
  "0": "Clear sky",
  "1": "Mainly clear",
  "2": "Partly cloudy",
  "3": "Overcast",
  "45": "Fog",
  "48": "Depositing rime fog",
  "51": "Light drizzle",
  "53": "Moderate drizzle",
  "55": "Dense drizzle",
  "56": "Light freezing drizzle",
  "57": "Dense freezing drizzle",
  "61": "Slight rain",
  "63": "Moderate rain",
  "65": "Heavy rain",
  "66": "Light freezing rain",
  "67": "Heavy freezing rain",
  "71": "Slight snowfall",
  "73": "Moderate snowfall",
  "75": "Heavy snowfall",
  "77": "Snow grains",
  "80": "Slight rain showers",
  "81": "Moderate rain showers",
  "82": "Violent rain showers",
  "85": "Slight snow showers",
  "86": "Heavy snow showers",
  "95": "Thunderstorm",
  "96": "Thunderstorm with slight hail",
  "97": "Heavy thunderstorm",
  "99": "Thunderstorm with heavy hail"
};

// Map WMO codes to OpenWeather icon codes [dayIcon, nightIcon]
const openWeatherIconMap = {
  "0":  ["01d", "01n"],
  "1":  ["02d", "02n"],
  "2":  ["02d", "02n"],
  "3":  ["04d", "04n"],
  "45": ["50d", "50n"],
  "48": ["50d", "50n"],
  "51": ["09d", "09n"],
  "53": ["09d", "09n"],
  "55": ["09d", "09n"],
  "56": ["09d", "09n"],
  "57": ["09d", "09n"],
  "61": ["10d", "10n"],
  "63": ["10d", "10n"],
  "65": ["10d", "10n"],
  "66": ["10d", "10n"],
  "67": ["10d", "10n"],
  "71": ["13d", "13n"],
  "73": ["13d", "13n"],
  "75": ["13d", "13n"],
  "77": ["13d", "13n"],
  "80": ["09d", "09n"],
  "81": ["09d", "09n"],
  "82": ["11d", "11n"],
  "85": ["13d", "13n"],
  "86": ["13d", "13n"],
  "95": ["11d", "11n"],
  "96": ["11d", "11n"],
  "97": ["11d", "11n"],
  "99": ["11d", "11n"]
};

export const codeToWeather = (code, is_Day = true) => {
    const key = String(code);
    const label = weatherCodes[key] || "Unknown weather";
    const icons = openWeatherIconMap[key] || ["01d", "01n"];
    const iconCode = is_Day ? icons[0] : icons[1];
    
    return {
        "label": label,
        // Guaranteed working public icon URL endpoint
        url: `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    };
};