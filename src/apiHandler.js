const getLocation = async (name) => {
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`,
    );
    const locationData = await response.json();

    return {
        name: locationData.results[0].name,
        country: locationData.results[0].country,
        latitude: locationData.results[0].latitude,
        longitude: locationData.results[0].longitude,
    };
};

const getWeatherData = async (coords) => {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=temperature_2m_max,temperature_2m_mean,temperature_2m_min&timezone=Australia%2FSydney`,
    );
    const weatherData = await response.json();

    return weatherData;
};

export { getLocation, getWeatherData };
