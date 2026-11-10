import { getLocation, getWeatherData } from './apiHandler.js';

const form = document.querySelector('form');
const input = document.getElementById('location-name');
const container = document.querySelector('.container');

async function displayWeatherData() {
    container.innerHTML = '';

    const locationName = input.value;

    const locationData = await getLocation(locationName);

    const weatherData = await getWeatherData(locationData);

    const locationNameElem = document.createElement('p');
    locationNameElem.textContent = `${locationData.name}, ${locationData.country}`;

    const dateElem = document.createElement('p');
    dateElem.textContent = `Date: ${weatherData.daily.time[0]}`;

    const minTempElem = document.createElement('p');
    minTempElem.textContent = `Minimum Temp: ${weatherData.daily.temperature_2m_min[0]}`;

    const maxTempElem = document.createElement('p');
    maxTempElem.textContent = `Maximum Temp: ${weatherData.daily.temperature_2m_max[0]}`;

    container.appendChild(locationNameElem);
    container.appendChild(dateElem);
    container.appendChild(minTempElem);
    container.appendChild(maxTempElem);
}

export default function addEventListeners() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        displayWeatherData();
    });
}
