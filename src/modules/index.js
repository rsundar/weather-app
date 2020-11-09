import retrieveData from './fetch';

const ul = document.getElementById('weather-app');
const button = document.getElementById('submit');

const showData = (weatherData) => {
  ul.innerHTML = '';
  const table = `
      <li> Temperature: ${weatherData.getTemperature()} </li>
      <li> Feels Like: ${weatherData.getFeelsLike()} </li>
      <li> Min Temperature: ${weatherData.getMinTemperature()} </li>
      <li> Max Temperature: ${weatherData.getMaxTemperature()} </li>
      <li> Humidity: ${weatherData.getHumidity()} </li>
      <li> Wind Speed: ${weatherData.getWindSpeed()} </li>
      <li> Wind Direction: ${weatherData.getWindDirection()} </li>
    `;
  ul.insertAdjacentHTML('beforeend', table);
};

const submitForm = () => {
  const city = document.forms.cityForm.city.value;
  let metric = '';
  if (document.forms.cityForm.i.checked) {
    metric = 'imperial';
  } else {
    metric = 'metric';
  }
  const weather = retrieveData(city, metric);
  weather.then(value => showData(value));
};

button.addEventListener('click', submitForm);
