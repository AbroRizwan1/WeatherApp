const apiKey = "7664138fb84dda54e2449d96e82d8a7f";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather? units=metric&q=";

const searchBox = document.querySelector(".search");
const searchbtn = document.querySelector(".button");

const icon = document.querySelector("#icon");
const weatherName = document.querySelector(".weather");

searchbtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  var data = await response.json();

  console.log(data);


  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;

  

if (data.weather[0].main === "Clear") {
  icon.className = "fas fa-sun"; 
  weatherName.textContent = "Clear";
} else if (data.weather[0].main === "Drizzle") {
  icon.className = "fas fa-cloud-showers-heavy"; 
  weatherName.textContent = "Drizzle";
} else if (data.weather[0].main === "Rain") {
  icon.className = "fas fa-cloud-rain"; 
  weatherName.textContent = "Rain";
}



const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector(".dateData").innerHTML = currentDate.toLocaleDateString('en-US', options);
document.querySelector(".timeData").innerHTML = currentDate.toLocaleTimeString('en-US');

}
