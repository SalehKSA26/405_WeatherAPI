let btnXHR = document.getElementById('xhrSearch');
let searchText = document.getElementsByTagName("input")[0];
let searchResults = document.getElementById("searchResults");

btnXHR.addEventListener("click", function () {
    searchResults.innerHTML = "";
    fetchWeatherAPI_UsingXHR(searchText.value);
});


function fetchWeatherAPI_UsingXHR(keyword) {
    if (!keyword) {
        return;
    }
    var apiKey = "62af2f00488143b6871212806242504";
    var url = "https://api.weatherapi.com/v1/forecast.json?key=62af2f00488143b6871212806242504&q="+keyword;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            let resptext = JSON.parse(xhr.responseText);
            processResponse(resptext);
        }
    };

    xhr.open("GET", url , true);
    xhr.send();
}

function processResponse(resp) {

    let city = document.createElement("p")
    city.innerText = "You are Searching weather for "+ resp.location.name
    searchResults.appendChild(city)
    let region = document.createElement("p")
    region.innerText = "The region is  "+ resp.location.region
    searchResults.appendChild(region)
    let country = document.createElement("p")
    country.innerText = "The country is  "+ resp.location.country
    searchResults.appendChild(country)
    let temp = document.createElement("p")
    temp.innerText= "The Temperature in "+resp.location.name+" is " +resp.current.temp_c
    searchResults.appendChild(temp)
}
