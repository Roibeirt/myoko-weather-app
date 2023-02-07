const ApiTestCall = async (lat, long, units) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      long +
      "&units=" +
      units +
      "&appid=7b3683382a3334888acbf0b14d740eb8",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
};
