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
//Downloaded from https://www.codeseek.co/Alaa--/local-weather-app-using-flexbox-gaMOWQ */
    $(document).ready(function(){
 $("#ce").hide(); 
    
function success(Pos) {
 
  var crd = Pos.coords;
  var weatherAPI= "http://api.openweathermap.org/data/2.5/WEATHER?lat="+crd.latitude+"&lon="+crd.longitude+"&APPID=937d6338e3c49e2ec46b41cecf727a19";
  //2e4034ec96edc6277ddeb004dfe15838
$.getJSON(weatherAPI,function( r ) {
   var weather=r.weather[0].description;
    var weatherId=r.weather[0].id;
    var image="http://openweathermap.org/img/w/"+r.weather[0].icon+".png";
    
var temp=(r.main.temp-273.15).toFixed(1);

var city=r.sys.country+" / "+r.name;
  
$("#temp p").append(temp+" &deg; C");
$("#weather p").append(weather);
 $("#weather img").attr("src",image);   
$("#city p").append(city);

    $("#fa").click(function(){
var fa=(temp*1.8+32).toFixed(1);
$("#temp p").html(fa+" &deg; F");
$(this).hide();
$("#ce").show();
});


    $("#ce").click(function(){
$("#temp p").html(temp+" &deg; C");
$(this).hide();
$("#fa").show();
});  
var arr={2:"https://718be87de2f7403df3e8-1d1221e10f82d636f1f5dc20a850700a.ssl.cf5.rackcdn.com/files/Thunderstorm-IMG-1024x768.jpg",5:"http://hdwallnpics.com/wp-content/gallery/beautiful-rain-wallpaper/rain-13.jpg",6:"http://imageswow.com/wp-content/uploads/2015/08/Beautiful-HD-Wallpapers-4.jpg",7:"http://wallpaperose.com/wp-content/uploads/2013/08/Beautiful-Early-Morning-Mist-1024x576.jpg",8:"http://inspire.adobe.com/content/microsites/inspire/2013/10/1/long_exposure_photography_of_toby_harriman/_jcr_content/article-body/image_caption_stacked_2/image1.img.jpg/1424195848996.jpg",800:"http://7-themes.com/data_images/out/54/6953968-sunset-lake-landscape.jpg"
        
        };
    
    var background=function(){
        if (weatherId==800){
        return arr[800];
        }
        else{
    var digit =Number(weatherId.toString()[0]);
    return arr[digit];
    }};
    
    $("html").css("background-image","url("+background()+")");
 
})};

navigator.geolocation.getCurrentPosition(success);
});
// image elements

// span to hold previous camp site elements

// span to hold weather elements

// containers

// create date element

// past searches