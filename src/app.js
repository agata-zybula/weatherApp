import { Notify } from "notiflix/build/notiflix-notify-aio";

const apiKey = "925a0a84b4634431833161143232702";
const preEl = document.getElementById("data");
const searchEl = document.getElementById("search-city");
const inputEl = document.getElementById("search-input");
const informationsEl = document.getElementById("weather-content");

function getWeatherData(city) {
  preEl.textContent = "";
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=925a0a84b4634431833161143232702&q=${city}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        Notify.failure(`${data.error.message}`);
      } else {
        preEl.textContent = JSON.stringify(data, null, 2);
        // preEl.textContent = console.log(data);
        // for (const [key, value] of Object.entries(data.location)) {
        //   informationsEl.innerHTML = `<p>key</p><p>value</p>`;
        // }
      }
    })
    .catch(() => {
      console.log("IT DOESN'T WORK!");
    });
}

searchEl.addEventListener("click", () => {
  const city = inputEl.value;
  getWeatherData(city);
});
