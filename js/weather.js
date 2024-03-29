const cityInput = document.querySelector('#cityInput');
const getWeatherBtn = document.querySelector('#getWeatherBtn');
const citySpan = document.querySelector('.city');
const temperatureSpan = document.querySelector('.temperature');
const descriptionSpan = document.querySelector('.description');
const humiditySpan = document.querySelector('.humidity');

const API_KEY = '3bdc559d5a52c44a97bec3f428a63209'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (!city) return;

  fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      citySpan.textContent = data.name;
      temperatureSpan.textContent = data.main.temp;
      descriptionSpan.textContent = data.weather[0].description;
      humiditySpan.textContent = data.main.humidity;
    })
    .catch(error => {
      console.error('Ошибка при получении данных о погоде:', error);
    });
});