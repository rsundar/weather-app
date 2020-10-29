import { retrieveData } from './fetch.js'

function showData(weatherData) {
  const ul = document.getElementById('weather-data');
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
}

function submitForm() {
  const city = document.forms.cityForm.city.value;
  let metric = '';
  if (document.forms.cityForm.i.checked) {
    metric = 'imperial';
  } else {
    metric = 'metric';
  }
  const weather = retrieveData(city, metric);
  weather.then(value => showData(value));
}

export default { submitForm };
