import { buildCurrentWeather } from './currentWeather.js';
import { buildDayWeather } from './dayWeather.js';
import { buildWeekWeather } from './weekWeather.js';

// --- Loading & Visibility Helpers ---
export const showLoading = () => { document.getElementById('loading').style.display = "block"; }
export const hideLoading = () => { document.getElementById('loading').style.display = "none"; }

export const showForm = () => { document.getElementById('form').style.display = "block"; }
export const hideForm = () => { document.getElementById('form').style.display = "none"; }

export const showContent = () => { document.getElementById('content').style.display = "flex"; }
export const hideContent = () => { document.getElementById('content').style.display = "none"; }

// --- Main Content Orchestrator ---
export const buildContent = (city, weatherData) => {
    
    const contentEl = document.getElementById("content");
    
    contentEl.style.display = "flex";
    contentEl.style.flexDirection = "column";
    
    buildDayWeather(weatherData);
    buildWeekWeather(weatherData);
    buildCurrentWeather(city, weatherData)
}