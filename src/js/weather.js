const weatherCode = [
  {code : "01", style1 : "fas",style2 : "fa-sun", style3 : "fa-4x"},
  {code : "02", style1 : "fas",style2 : "fa-cloud-sun", style3 : "fa-4x"},
  {code : "03", style1 : "fas",style2 : "fa-cloud", style3 : "fa-4x"},
  {code : "04", style1 : "fas",style2 : "fa-cloud-meatball", style3 : "fa-4x"},
  {code : "09", style1 : "fas",style2 : "fa-cloud-sum-rain", style3 : "fa-4x"},
  {code : "10", style1 : "fas",style2 : "fa-cloud-showers-heavy", style3 : "fa-4x"},
  {code : "11", style1 : "fas",style2 : "fa-poo-storm", style3 : "fa-4x"},
  {code : "13", style1 : "fas",style2 : "fa-snowflake", style3 : "fa-4x"},
  {code : "50", style1 : "fas",style2 : "fa-smog", style3 : "fa-4x"},
];
const API_KEY = "3b9f9dab5de52a5498da660f5adfe008";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weatherIcon = document.querySelector("#weatherIcon");
      const weatherTemperature = document.querySelector("#weatherTemperature");
      const weatherCity = document.querySelector("#weatherCity");
      let iconCode = {};
      for(const item of weatherCode){
        if (item.code === data.weather[0].icon.substr(0, 2)) {
          iconCode = item;
        }
      };
      weatherIcon.classList.add(
        iconCode.style1,
        iconCode.style2,
        iconCode.style3,
      );
      weatherTemperature.innerHTML = `${data.weather[0].main} / ${data.main.temp}℃`;
      weatherCity.innerHTML = data.name;
    })
  );
  console.log(`openweather API url : ${url}`);
}
function onGeoError() {
  const weatherFrame = document.querySelector(".weather-frame");
  const createWeatherFrame = document.createElement("div");
  const taskColumn = document.querySelector("#taskColumn");

  weatherFrame.remove();
  createWeatherFrame.classList.add("weather-frame");
  const weatherFrameColumn = document.createElement("div");
  weatherFrameColumn.classList.add("weather-frame__div");
  weatherFrameColumn.innerHTML = "날씨 : 위치 확인 ❌";
  createWeatherFrame.appendChild(weatherFrameColumn);
  taskColumn.appendChild(createWeatherFrame);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
