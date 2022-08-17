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

    

    function showTemperature(response) {
      console.log(response.data);
      let temperatureElement = document.querySelector("#currentTemperature");
      let temperature = Math.round(response.data.main.temp);
      let description = document.querySelector("#weather-description");
      let wind = document.querySelector("#wind-speed");
      let humidity = document.querySelector("#humidity");
      let iconElement = document.querySelector("#icon");

      /*celsiusTemperature = response.data.main.temp;*/

      humidity.innerHTML = `${response.data.main.humidity}%`;
      humidity.classList.add("current-degrees");
      temperatureElement.innerHTML = temperature;
      temperatureElement.classList.add("current-degrees");
      description.innerHTML = response.data.weather[0].description;
      wind.innerHTML = `${response.data.wind.speed} km/h`;
      wind.classList.add("current-degrees");
      iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
      iconElement.setAttribute("alt", response.data.weather[0].description);
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
  
/*function showFahrenheit (event) {
  event.preventDefault ();
  let fahrenheitTemp = (14 * 9) / 5 + 32;
  alert("fahrenheitTemp");
}*/

let form = document.querySelector("#search-form");
    form.addEventListener("submit", search);

    /*let fahrenheitLink = document.querySelector("#currentTemperature");
    fahrenheitLink.addEventListener("click", showFahrenheit);*/

    
    /*   function showPosition (position) {
        let apiKey = "afaec91559c493020719c8b714fb9e8b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
    }
    
    function getCurrentPosition (event) {
       event.preventDefault();
navigator.geolocation.getCurrentPosition(ShowPosition);
    }
    
    let buttonLocation = document.querySelector("#location");
    buttonLocation.addEventListener("click", getCurrentPosition);*/

    searchCity ("Pokrovsk");



 


