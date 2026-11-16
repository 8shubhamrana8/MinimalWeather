import './styles.css';
import { cityWeatherFetch } from './Api.js';
import { hideForm, showForm, showLoading, hideLoading, showContent, hideContent, buildContent } from './Dom.js';


const goBtn = document.getElementById('go');
const city = document.getElementById('city');

goBtn.addEventListener('click', async() => {
  hideForm()
  showLoading();
  const cityName = city.value;
  if (cityName) {
    const weatherData = await cityWeatherFetch(cityName);
    if (weatherData) {
      buildContent(cityName, weatherData);
      showContent();
    }
  } else {
    alert("Invalid City!");
    hideLoading();
    showForm();
  }
})