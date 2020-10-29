import { getData } from './dailyData.js'

const apiKey = '356c3c6429275ec5cc808b231f9c0064';
const url = 'https://api.openweathermap.org/data/2.5/weather?';

async function retrieveData(city, metric) {
  try {
    const newUrl = `${url}q=${city}&appid=${apiKey}&units=${metric}`;
    const request = await fetch(newUrl, { mode: 'cors' });
    const data = await request.json();
    const temp = getData(data.main, data.wind);
    return temp;
  } catch (error) {
    return error;
  }
}

export default { retrieveData };
