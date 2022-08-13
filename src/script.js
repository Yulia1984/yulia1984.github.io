    let date = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let actualDay = document.querySelector("#currentDay");
    actualDay.innerHTML = `${day}`;

    let actualTime = document.querySelector("#currentTime");
    actualTime.innerHTML = `${hours}:${minutes}`;

    let form = document.querySelector("#search-form");
    form.addEventListener("submit", search);

    function showTemperature(response) {
      console.log(response.data);
      let temperatureElement = document.querySelector("#currentTemperature");
      let temperature = Math.round(response.data.main.temp);
      temperatureElement.innerHTML = `${temperature}<span class="degrees"> &deg; C | &deg; F</span>`;
      let description = document.querySelector("#weather-description");
      description.innerHTML = response.data.weather[0].description;
      let wind = document.querySelector("#wind-speed");
      wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
      let humidity = document.querySelector("#humidity");
      humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
    }

    function searchCity(city) {
      let apiKey = "afaec91559c493020719c8b714fb9e8b";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      axios.get(apiUrl).then(showTemperature);
    }

    function search(event) {
      event.preventDefault();
      let searchInput = document.querySelector("#search-text-input");
      let currentCity = document.querySelector("#currentCity");
      let cityInput = searchInput.value;
      currentCity.innerHTML = cityInput;
      searchCity(searchInput.value);
    }

    function saveCity(event) {
      event.preventDefault();
      let city = document.querySelector("#search-text-input").value;
    }
  
let showCityFirst = document.querySelector("#barcelona");
let showCitySecond = document.querySelector("#kyiv");
let showCityThird = document.querySelector("#kharkiv");
let showCityFourth = document.querySelector("#lviv");
    showCityFirst.addEventListener("click", showFirst);
    showCitySecond.addEventListener("click", showSecond);
    showCityThird.addEventListener("click", showThird);
    showCityFourth.addEventListener("click", showFourth);

    function showFirst () {
       currentCity = document.querySelector("#currentCity");
      currentCity.innerHTML = "Barcelona";
        searchCity("Barcelona");
    }

    function showSecond () {
       currentCity = document.querySelector("#currentCity");
      currentCity.innerHTML = "Kyiv";
        searchCity("Kyiv");
    }

    function showThird () {
       currentCity = document.querySelector("#currentCity");
      currentCity.innerHTML = "Kharkiv";
        searchCity("Kharkiv");
    }

    function showFourth () {
       currentCity = document.querySelector("#currentCity");
      currentCity.innerHTML = "Lviv";
        searchCity("Lviv");
    }