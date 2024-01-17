const apiKey = "af072e15e7b7f6bc4c29c77d364f8274";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data  = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rainy_4248789.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/rainy.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/rainy.png";
    }


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather();