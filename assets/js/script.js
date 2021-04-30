// main variables
var cityFormEl = document.querySelector("#city-search-form");
var weatherContainerEl = document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");
var searchButton = document.querySelector("#search-btn");
var displayWeather = document.getElementById("#display-weather");
const apiKey = "844421298d794574c100e3409cee0499";
// form submit handler

var formSumbitHandler = function (event) {
  event.preventDefault();
  var city = cityInputEl.value.trim();
  if (city) {
    getCityCampsite(city);
    getCityWeather(city);
    cities.unshift({ city });
    cityInputEl.value = "";
  } else {
    alert("Please enter a City");
  }
  saveSearch();
  pastSearch(city);
};

var saveSearch = function (city) {
  debugger;
  // localStorage.setItem("cities", JSON.stringify(cities));

  fetch("https://api.openbrewerydb.org/breweries?by_city=" + city)
    .then((response) => response.json())
    .then((data) => displayBrews(data));

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => weatherDisplay(data));
};

function weatherDisplay(data) {
  console.log(data);
  const { name } = data;
  const { temp } = data.main;
  const { icon } = data.weather[0];
  console.log(name, temp, icon);
  //Gives Element text.
  document.querySelector(".city").innerText = name;
  document.querySelector(".temp").innerText = temp;
  document.querySelector(".icon").src =
    "http://openweathermap.org/img/wn/" + icon + ".png";
  // weatherDisplay.removeClass("hide");
}

//Brewery Search

function displayBrews(data) {
  console.log(data);
  const { brewName } = data[0].name;
  const { street } = data[0].street;
  const { city } = data[0].city;
  const { phone } = data[0].phone;
  // var { website } = data[0].website_url;

  console.log(brewName, street, city, phone);

  brewContainer = $("#brew-container");

  var parentDiv = $('<div class="brew">');
  var brewNameEl = $('<h3 class="b-name"></h3>');
  var brewStreetEl = $('<p class= "b-street"></p>');
  var brewCityEl = $('<p class="b-city"></p>');
  var brewPhoneEl = $('<p class="b-phone"></p>');
  // var brewWebsiteEl = $('<p class="b-website"></p>');

  parentDiv.append(brewNameEl);
  brewNameEl.append(brewStreetEl);
  brewStreetEl.append(brewCityEl);
  brewCityEl.append(brewPhoneEl);
  // brewPhoneEl.append(brewWebsiteEl);
  brewContainer.append(parentDiv);
}

// ---- Past Searches Function----
var pastSearch = function (pastSearch) {
  // console.log(pastSearch)

  pastSearchEl = document.createElement("button");
  pastSearchEl.textContent = pastSearch;
  pastSearchEl.classList = "d-flex w-100 btn-light border p-2";
  pastSearchEl.setAttribute("data-city", pastSearch);
  pastSearchEl.setAttribute("type", "submit");

  pastSearchButtonEl.prepend(pastSearchEl);
};

var pastSearchHandler = function (event) {
  var city = event.target.getAttribute("data-city");
  if (city) {
    getCityWeather(city);
    getCityCampsite(city);
  }
};

$(searchButton).on("click", function (event) {
  event.preventDefault();
  var searchResult = $("#city").val();
  saveSearch(searchResult);
  console.log(searchResult);
});

// save search function

// camp site search

// weather display
//Downloaded from https://www.codeseek.co/Alaa--/local-weather-app-using-flexbox-gaMOWQ */

// image elements

// span to hold previous camp site elements

// span to hold weather elements

// containers

// create date element
