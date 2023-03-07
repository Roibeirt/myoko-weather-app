const cwTopIcon = document.getElementById("current-weather-image-top");
const cwTopTemp = document.getElementById("current-weather-temp-top");
const cwTopDesc = document.getElementById("current-weather-description-top");
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
const cwLiftTopData = document.getElementById("current-weather-lift-top-data");
const cwTopSnow1h = document.getElementById("current-weather-snow1hr-top");

const cwBaseIcon = document.getElementById("current-weather-image-base");
const cwBaseTemp = document.getElementById("current-weather-temp-base");
const cwBaseDesc = document.getElementById("current-weather-description-base");
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
const cwLiftBaseData = document.getElementById("current-weather-base-data");
const cwBaseSnow1h = document.getElementById("current-weather-snow1hr-base");

// buttons

const akakurakankoButton = document.getElementById("akakurakanko-button");
const akakuraonsenButton = document.getElementById("akakuraonsen-button");
const suginoharaButton = document.getElementById("suginohara-button");
const ikenotairaButton = document.getElementById("ikenotaira-button");
const araiButton = document.getElementById("arai-button");
const kurohimeButton = document.getElementById("kurohime-button");
const sekiButton = document.getElementById("seki-button");

const kankoCall = () => {
  currentWeatherCall(36.886861, 138.177443, 36.893108, 138.140884, "metric");
};

const onsenCall = () => {
  currentWeatherCall(36.890995, 138.176503, 36.896176, 138.156155, "metric");
};

const sekiCall = () => {
  currentWeatherCall(36.906055, 138.160725, 36.906575, 138.152843, "metric");
};

const ikenotairaCall = () => {
  currentWeatherCall(36.872381, 138.17161, 36.878033, 138.140635, "metric");
};

const suginoharaCall = () => {
  currentWeatherCall(36.85659, 138.154716, 36.876923, 138.115566, "metric");
};

const kurohimeCall = () => {
  currentWeatherCall(36.826836, 138.161452, 36.824649, 138.146912, "metric");
};

const araiCall = () => {
  currentWeatherCall(36.990898, 138.180891, 36.993112, 138.138351, "metric");
};

akakurakankoButton.addEventListener("click", () => kankoCall());
akakuraonsenButton.addEventListener("click", () => onsenCall());
sekiButton.addEventListener("click", () => sekiCall());
ikenotairaButton.addEventListener("click", () => ikenotairaCall());
suginoharaButton.addEventListener("click", () => suginoharaCall());
kurohimeButton.addEventListener("click", () => kurohimeCall());
araiButton.addEventListener("click", () => araiCall());

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
    cwBaseTemp.innerHTML =
      Math.round(baseWeatherData.main.temp) + "<sup>°C</sup>";
    cwBaseDesc.textContent = baseWeatherData.weather[0].description;
    cwBaseMaxTemp.textContent =
      Math.round(baseWeatherData.main.temp_max) + " °C";
    cwBaseMinTemp.textContent =
      Math.round(baseWeatherData.main.temp_min) + " °C";
    cwBaseWindSpeed.textContent = baseWeatherData.wind.speed + " m/s";
    cwBaseWindDirection.textContent = baseWeatherData.wind.deg + " °";
    cwBaseWindDirection.textContent = baseWeatherData.visibility + " m";
    if (baseWeatherData.snow["1h"] != undefined) {
      cwBaseSnow1h.textContent =
        "Last hour snowfall: " + baseWeatherData.snow["1h"];
    }
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
    cwTopTemp.innerHTML =
      Math.round(topWeatherData.main.temp) + "<sup>°C</sup>";
    cwTopDesc.textContent = topWeatherData.weather[0].description;
    cwTopMaxTemp.textContent = Math.round(topWeatherData.main.temp_max) + " °C";
    cwTopMinTemp.textContent = Math.round(topWeatherData.main.temp_min) + " °C";
    cwTopWindSpeed.textContent = topWeatherData.wind.speed + " m/s";
    cwTopWindDirection.textContent = topWeatherData.wind.deg + " °";
    cwTopWindDirection.textContent = topWeatherData.visibility + " m";
    if (topWeatherData.snow["1h"] != undefined) {
      cwTopSnow1h.textContent =
        "Last hour snowfall: " + topWeatherData.snow["1h"];
    }
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

kankoCall();
