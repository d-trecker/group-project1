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
};
var getCityCampsite = function(city){
    var apiKey = "aht3r7x5mj9ggeh433hdysk6"

    var apiURL = `"http://api.amp.active.com/search?"${city}"&api_key="${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayCampsites(data, city);
        });
    });
};

var displayCampsite = function(weather, campsite, searchCity){
    
    
    campsiteContainerEl.textContent="";
    weatherContainerEl.textContent= "";  
    citySearchInputEl.textContent=searchCity;
}
 
// save search function

// camp site search

// weather display

// image elements

// span to hold previous camp site elements

// span to hold weather elements

// containers

// create date element

// past searches