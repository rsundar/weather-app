const getData = (data, wind) => ({
  data,
  wind,
  getTemperature: () => data.temp,
  getMinTemperature: () => data.temp_min,
  getMaxTemperature: () => data.temp_max,
  getFeelsLike: () => data.feels_like,
  getHumidity: () => data.humidity,
  getWindSpeed: () => wind.speed,
  getWindDirection: () => wind.deg,
});

export default getData;
