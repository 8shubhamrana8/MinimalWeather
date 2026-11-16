export const weatherUrlMaker = (lat, lon) => {
  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code,is_day&current=temperature_2m,apparent_temperature,is_day,precipitation,weather_code,relative_humidity_2m&temporal_resolution=hourly_6&past_hours=1&forecast_hours=24`;
};

export const cityUrlMaker = (city, key) => {
  return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
};