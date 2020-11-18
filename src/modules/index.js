import retrieveData from './fetch';
import unsplash from './unsplash';

const div = document.getElementById('weather-app');
const button = document.getElementById('submit');
const image = document.getElementById('photo');
let description = '';

const showData = (weatherData) => {
  div.innerHTML = '';
  const table = `
      <p class="title is-4"> Temperature: ${weatherData.getTemperature()} </p>
      <p class="subtitle is-6"> Feels Like: ${weatherData.getFeelsLike()} </p>
      <div class="content">
        <p class="content"> Min Temperature: ${weatherData.getMinTemperature()} </p>
        <p class="content"> Max Temperature: ${weatherData.getMaxTemperature()} </p>
        <p class="content"> Humidity: ${weatherData.getHumidity()} </p>
        <p class-"content"> Wind Speed: ${weatherData.getWindSpeed()} </p>
        <p class="content"> Wind Direction: ${weatherData.getWindDirection()} </p>
      </div>
    `;
  div.insertAdjacentHTML('beforeend', table);
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
  weather.then(value => { showData(value); description = value.weather[0].description; });
  const imgArray = unsplash(description, city);
  imgArray.then(value => {
    const random = Math.floor(Math.random() * (Object.keys(value.results).length - 1));
    image.src = value.results[random].urls.regular;
  });
};

button.addEventListener('click', submitForm);
