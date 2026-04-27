const API_KEY = '02c20d28f39d6f1a249c5e3fd4d69cd1'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');

// Weather data elements
const cityName = document.getElementById('cityName');
const dateText = document.getElementById('date'); // Renamed to avoid conflict with Date object
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');
const visibility = document.getElementById('visibility');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const feelsLike = document.getElementById('feelsLike');

// Event listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Initialize with current date
updateDate();

function updateDate() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateText.textContent = now.toLocaleDateString('en-US', options);
}

async function handleSearch() {
    const city = cityInput.value.trim();

    if (!city) {
        showError('Please enter a city name');
        return;
    }

    showLoading();

    try {
        const weatherData = await fetchWeatherData(city);
        displayWeatherData(weatherData);
    } catch (error) {
        showError('City not found. Please try again.');
    }
}

async function fetchWeatherData(city) {
   const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Weather data not found');
    }

    return await response.json();
}

function displayWeatherData(data) {
    hideAllSections();

    // weather information
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temp.textContent = Math.round(data.main.temp);
    description.textContent = data.weather[0].description;

    // weather details
    visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;

    //weather icon
    updateWeatherIcon(data.weather[0].main, data.weather[0].id);

    weatherInfo.classList.add('show');
}

function updateWeatherIcon(weatherMain, weatherId) {
    let iconClass = 'fas fa-cloud';

    switch (weatherMain.toLowerCase()) {
        case 'clear':
            iconClass = 'fas fa-sun';
            break;
        case 'clouds':
            iconClass = weatherId === 801 ? 'fas fa-cloud-sun' : 'fas fa-cloud';
            break;
        case 'rain':
            iconClass = weatherId >= 500 && weatherId <= 504 ? 'fas fa-cloud-rain' : 'fas fa-cloud-showers-heavy';
            break;
        case 'drizzle':
            iconClass = 'fas fa-cloud-rain';
            break;
        case 'thunderstorm':
            iconClass = 'fas fa-bolt';
            break;
        case 'snow':
            iconClass = 'fas fa-snowflake';
            break;
        case 'mist':
        case 'smoke':
        case 'haze':
        case 'dust':
        case 'fog':
        case 'sand':
        case 'ash':
        case 'squall':
        case 'tornado':
            iconClass = 'fas fa-smog';
            break;
        default:
            iconClass = 'fas fa-cloud';
    }

    weatherIcon.className = iconClass;
}

function showLoading() {
    hideAllSections();
    loading.classList.add('show');
}

function showError(message) {
    hideAllSections();
    errorMessage.querySelector('p').textContent = message;
    errorMessage.classList.add('show');
}

function hideAllSections() {
    weatherInfo.classList.remove('show');
    errorMessage.classList.remove('show');
    loading.classList.remove('show');
}

