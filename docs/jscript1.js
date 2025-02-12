const apikey = "9bd8f9e15e556ee9bde3dcb326957d86";     
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&unit=metric&q=";

const searchbox = document.querySelector(".search input");      /*without using jquery we can select the element by using querySelector method and then we can use it in our code*/ 
const searchbtn = document.querySelector(".search button");     /*here we are selecting the search box and search button so that we can use it in our code when we click on the search button we will get the value of the search box and then we will use it to get the weather of that city*/
const weatherIcon = document.querySelector(".weather-icon");      /*here we are selecting the weather icon so that we can change the icon according to the weather*/

async function checkwether(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = (data.main.temp - 273.15).toFixed(1) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src =  "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src =  "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src =  "iImages/Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src =  "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src =  "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src =  "images/snow.png";
    }
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src =  "images/humadity.png";
    }
    
    document.querySelector(".weather").style.display = "block";     /*here we are displaying the weather div when we get the weather of the city because initially the weather div is hidden due to display none in css*/
    document.querySelector(".error").style.display = "none";    
}

searchbtn.addEventListener("click", function(){
    checkwether(searchbox.value);
});

searchbox.addEventListener("keydown", function (event) {        
            if (event.key === "Enter") {        /*here we are checking if the enter key is pressed then we will get the value of the search box and then we will use it to get the weather of that city*/
                checkwether(searchbox.value);
            }
});
