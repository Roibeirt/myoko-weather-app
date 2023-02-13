const cwTopIcon = document.getElementById("current-weather-image-top");
const cwTopTemp = document.getElementById("current-weather-temp-top");
const cwTopDesc = document.getElementById("current-weather-decription-top");
const cwTopMaxTemp = document.getElementById("current-weather-max-temp-top");
const cwTopMinTemp = document.getElementById("current-weather-min-temp-top");
const cwTopWindSpeed = document.getElementById(
  "current-weather-wind-speed-top"
);
const cwTopWindDirection = document.getElementById(
  "current-weather-wind-direction-top"
);
const cwTopVisibility = document.getElementById(
  "current-weather-visibility-top"
);

const cwBaseIcon = document.getElementById("current-weather-image-base");
const cwBaseTemp = document.getElementById("current-weather-temp-base");
const cwBaseDesc = document.getElementById("current-weather-decription-base");
const cwBaseMaxTemp = document.getElementById("current-weather-max-temp-base");
const cwBaseMinTemp = document.getElementById("current-weather-min-temp-base");
const cwBaseWindSpeed = document.getElementById(
  "current-weather-wind-speed-base"
);
const cwBaseWindDirection = document.getElementById(
  "current-weather-wind-direction-base"
);
const cwBaseVisibility = document.getElementById(
  "current-weather-visibility-base"
);

const call = () => {
  currentWeatherCall(36.886861, 138.177443, 36.893108, 138.140884, "metric");
};

const currentWeatherCall = async (
  baseLat,
  baseLong,
  topLat,
  topLong,
  units
) => {
  (async () => {
    const baseResponse = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        baseLat +
        "&lon=" +
        baseLong +
        "&units=" +
        units +
        "&appid=7b3683382a3334888acbf0b14d740eb8&lang=en",
      { mode: "cors" }
    );
    const baseWeatherData = await baseResponse.json();

    cwBaseIcon.src =
      "http://openweathermap.org/img/wn/" +
      baseWeatherData.weather[0].icon +
      ".png";
    cwBaseTemp.innerHTML = toString(
      Math.round(baseWeatherData.main.temp) + "<sup>°C</sup>"
    );
    cwBaseDesc.textContent = baseWeatherData.weather[0].description;
    cwBaseMaxTemp.textContent = toString(
      Math.round(baseWeatherData.main.temp_max) + " °C"
    );
    cwBaseMinTemp.textContent = toString(
      Math.round(baseWeatherData.main.temp_min) + " °C"
    );
    cwBaseWindSpeed.textContent = toString(baseWeatherData.wind.speed) + " m/s";
    cwBaseWindDirection.textContent = toString(baseWeatherData.wind.deg) + " °";
    cwBaseWindDirection.textContent =
      toString(baseWeatherData.visibility) + " m";
  })();

  (async () => {
    const topResponse = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        topLat +
        "&lon=" +
        topLong +
        "&units=" +
        units +
        "&appid=7b3683382a3334888acbf0b14d740eb8&lang=en",
      { mode: "cors" }
    );
    const topWeatherData = await topResponse.json();

    cwTopIcon.src =
      "http://openweathermap.org/img/wn/" +
      topWeatherData.weather[0].icon +
      ".png";
    cwTopTemp.innerHTML = toString(
      Math.round(topWeatherData.main.temp) + "<sup>°C</sup>"
    );
    cwTopDesc.textContent = topWeatherData.weather[0].description;
    cwTopMaxTemp.textContent = toString(
      Math.round(topWeatherData.main.temp_max) + " °C"
    );
    cwTopMinTemp.textContent = toString(
      Math.round(topWeatherData.main.temp_min) + " °C"
    );
    cwTopWindSpeed.textContent = toString(topWeatherData.wind.speed) + " m/s";
    cwTopWindDirection.textContent = toString(topWeatherData.wind.deg) + " °";
    cwTopWindDirection.textContent = toString(topWeatherData.visibility) + " m";
  })();
};

const fiveDayForecastCall = async (lat, long, units) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      long +
      "&units=" +
      units +
      "&appid=7b3683382a3334888acbf0b14d740eb8",
    { mode: "cors" }
  );
  const weatherData = await response.json();
};
