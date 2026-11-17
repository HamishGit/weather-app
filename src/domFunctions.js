import { getLocation, getWeatherData } from './apiHandler.js';
import { getFormattedDate } from './utils.js';

const form = document.querySelector('form');
const input = document.getElementById('location-name');
const container = document.querySelector('.container');
const searchIcon = document.getElementById('search-icon');

async function displayWeatherData() {
    container.innerHTML = '';

    const locationName = input.value;

    const locationData = await getLocation(locationName);

    const weatherData = await getWeatherData(locationData);

    const locationNameElem = document.createElement('h1');
    locationNameElem.textContent = `${locationData.name}, ${locationData.country}`;

    const dateElem = document.createElement('h3');
    dateElem.textContent = getFormattedDate(weatherData.daily.time[0]);

    const minTempElem = document.createElement('p');
    minTempElem.textContent = `Minimum Temp: ${weatherData.daily.temperature_2m_min[0]}`;

    const maxTempElem = document.createElement('p');
    maxTempElem.textContent = `Maximum Temp: ${weatherData.daily.temperature_2m_max[0]}`;

    container.appendChild(locationNameElem);
    container.appendChild(dateElem);
    container.appendChild(minTempElem);
    container.appendChild(maxTempElem);
}

function validateInput(value) {
    const strLen = String(value.length);

    if (strLen <= 2) {
        container.innerHTML = '';
        const invalidInputLengthElem = document.createElement('p');
        invalidInputLengthElem.textContent = `Invalid Input Length: Location must be of length > 2, received ${strLen}`;
        container.appendChild(invalidInputLengthElem);
        return false;
    }
    if (value === '') {
        return false;
    }

    return true;
}

function validateInputAndDisplayWeatherData() {
    if (validateInput(input.value)) {
        displayWeatherData();
    }
}

export default function addEventListeners() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        validateInputAndDisplayWeatherData();
    });

    searchIcon.addEventListener('click', validateInputAndDisplayWeatherData);
}
