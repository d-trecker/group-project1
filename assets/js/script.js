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
    var apiKey = "UJYM85U5K477NDFKE52KDG6J"
    
    var apiURL = `"http://api.amp.active.com/camping/campgrounds?"=${city}"CO&siteType=2001&expwith=1&amenity=4005&pets=3010&"=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayCampsites(data, city);
        });
    });
};
// save search function

// camp site search

// weather display

// image elements

// span to hold previous camp site elements

// span to hold weather elements

// containers

// create date element

// past searches