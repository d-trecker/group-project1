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

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&radius=25&q-country_cont=north%20america&q-city_cont=san%20jose&limit=25",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c7f1244285msh0470b614c78c4f8p12d629jsn617e69934242",
		"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
	}
}

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

// image elements

// span to hold previous camp site elements

// span to hold weather elements

// containers

// create date element

// past searches