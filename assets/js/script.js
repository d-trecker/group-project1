<<<<<<< HEAD
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const registerButton = document.getElementById("secondButton");
const registerErrorMsg = document.getElementById("register-error-message")
var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("leftTab");
var regTab = document.getElementById("rightTab");

function regTabFun(){
    event.preventDefault();

    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function loginTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    loginTab.style.backgroundColor="rgb(12, 132, 189)";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function forTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";

    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

}


function register(){
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("register-email-form").value ="";
        document.getElementById("register-password-form").value="";
        document.getElementById("register-confirm-password-form").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}
function login(){
    event.preventDefault();

    var email = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(email + " yor are login Now \n welcome to our website.");

        document.getElementById("username-field").value ="";
        document.getElementById("password-field").value="";
        return ;
    }

}
function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})




=======
// main variables
var cityFormEl = document.querySelector("#city-search-form");
var weatherContainerEl = document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");
var searchButton = document.querySelector("#search-btn");
var displayWeather = document.getElementById("#display-weather");
brewContainer = $("#brew-container");
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
  // debugger;
  //brewContainer.reset();
  //brewContainer.innerHTML = "";
  // brewContainer = $("#brew-container");

  for (let i = 0; i < data.length; i++) {
    console.log(data);
    var brewName = data[i].name;
    var street = data[i].street;
    var city = data[i].city;
    var phone = data[i].phone;
    var website = data[i].website_url;

    console.log(brewName, street, city, phone, website);

    var parentDiv = $('<div class="brew">');
    var brewNameEl = $('<h3 class="b-name"></h3>').text(brewName);
    var brewStreetEl = $('<p class= "b-street"></p>').text(street);
    var brewCityEl = $('<p class="b-city"></p>').text(city);
    var brewPhoneEl = $('<p class="b-phone"></p>').text(phone);
    var brewWebsiteEl = $('<p class="b-website"></p>').text(website);

    parentDiv.append(brewNameEl);
    brewNameEl.append(brewStreetEl);
    brewStreetEl.append(brewCityEl);
    brewCityEl.append(brewPhoneEl);
    brewPhoneEl.append(brewWebsiteEl);
    brewContainer.append(parentDiv);
  }
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
  // brewContainer.reset();
});

// event.preventDefault();
// var searchResult = $("#city").val();
// saveSearch(searchResult);
// console.log(searchResult);

// save search function

// camp site search

// weather display
//Downloaded from https://www.codeseek.co/Alaa--/local-weather-app-using-flexbox-gaMOWQ */

// image elements

// span to hold previous camp site elements

// span to hold weather elements

// containers

// create date element
>>>>>>> 41ec32686ab7be0c17c02dca1850c65f01961ec9
