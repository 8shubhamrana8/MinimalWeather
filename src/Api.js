import { cityUrlMaker, weatherUrlMaker } from './URLMaker.js'
import { hideLoading } from './Dom.js'

export const cityCoordinateFinder = async (city) => {

    const key = '87cc7f21088d2c270b8caf97ef0f7ffe';

    const cityURL = cityUrlMaker(city, key);

    try {
        const response = await fetch(cityURL);

        if (!response.ok) {
            console.log('Error fetching coordinates!');
            return;
        }

        const data = await response.json();

        const lat = data[0].lat;
        const lon = data[0].lon;

        const cityName = data[0].name;

        console.log(lat, lon, cityName);

        hideLoading()

        return {
            latitude: lat,
            longitude: lon,
            cityName: cityName,
            alldata: data
        }


    } catch (error) {
        console.error("Failed to fetch coordinates:", error);
    }
};

export const cityWeatherFetch = async (city) => {

    try {
        // find city
        const cityData = await cityCoordinateFinder(city)

        // find weather
        const latitude = cityData.latitude;
        const longitude = cityData.longitude;

        const response = await fetch(weatherUrlMaker(latitude, longitude));

        if (!response.ok) {
            console.log("Error fetching weather Data!")
        };

        const weatherData = await response.json();

        console.log(weatherData);

        return weatherData;

    } catch (error) {

        console.error("Failed to fetch weather", error);

    }
}
