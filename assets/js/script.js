// main variables
var cityFormEl=document.querySelector("#city-search-form");
var weatherContainerEl=document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");

// form submit handler

var formSumbitHandler = function(event){
    event.preventDefault();
    var city = cityInputEl.value.trim();
    if(city){
        getCityCampsite(city);
        getCityWeather(city);
        cities.unshift({city});
        cityInputEl.value = "";
    } else{
        alert("Please enter a City");
    }
    saveSearch();
    pastSearch(city);
}

var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));

    const response = await fetch("https://cryptic-castle-96421.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=camping&location=california", {
    method: 'GET',
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin":"*",
        Authorization: `Bearer xRK7QJkZKuvEejlJZ7xTjEJ03Vls_YJgj5dW4Ah110WMRcrCypZe_2ONCtFeuUZT7yKB88Xb2rzMEIQO8TNJfeLt6U1i7TU3w935Eq_usonrRs1nthQCdVguDPKIYHYx`,
        "Content-type": "application/json",
    },
  }).then(response => response.json())
  .then(response => console.log(response));

};

var get5Day = function(city){
    var apiKey = "844421298d794574c100e3409cee0499"
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
           display5Day(data);
        });
    });
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

var displayCampsite = function(_cityWeather, _cityCampsite, searchCity){
    
    
    campsiteContainerEl.textContent="";
    weatherContainerEl.textContent= "";  
    citySearchInputEl.textContent=searchCity;
}

 
// save search function

// camp site search

// weather display
//Downloaded from https://www.codeseek.co/Alaa--/local-weather-app-using-flexbox-gaMOWQ */
 
// image elements

// span to hold previous camp site elements

// span to hold weather elements

// containers

// create date element

// past searches

var pastSearch = function(pastSearch){
 
    // console.log(pastSearch)

    pastSearchEl = document.createElement("button");
    pastSearchEl.textContent = pastSearch;
    pastSearchEl.classList = "d-flex w-100 btn-light border p-2";
    pastSearchEl.setAttribute("data-city",pastSearch)
    pastSearchEl.setAttribute("type", "submit");

    pastSearchButtonEl.prepend(pastSearchEl);
}


var pastSearchHandler = function(event){
    var city = event.target.getAttribute("data-city")
    if(city){
        getCityWeather(city);
        getCityCampsite(city);
    }
}