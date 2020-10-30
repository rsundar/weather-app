export default function getData(data, wind) {
  return {
    data,
    wind,
    getTemperature() {
      return data.temp;
    },
    getMinTemperature() {
      return data.temp_min;
    },
    getMaxTemperature() {
      return data.temp_max;
    },
    getFeelsLike() {
      return data.feels_like;
    },
    getHumidity() {
      return data.humidity;
    },
    getWindSpeed() {
      return wind.speed;
    },
    getWindDirection() {
      return wind.deg;
    },
  };
}
