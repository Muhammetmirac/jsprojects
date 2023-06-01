const searchIcon = document.querySelector(".search-icon");
const inputBox = document.querySelector("#input-box");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidityDetails = document.querySelector(".humidity-details span:first-child");
const windDetails = document.querySelector(".wind-details span:first-child");
let imgOfWeather = document.querySelector("#imgOfWeather");




const apiKey = "fa721b3dd0496ecffd2183d607bec2b7";



searchIcon.addEventListener("click", getWeather)

function getWeather(){
   let city = inputBox.value;
    if(!city){
        alert("Lütfen geçerli bir şehir ismi yazınız");
    }else{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&units=metric&appid=${apiKey}`;
    console.log(url)
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
          if(data=="404"){
            alert("Aradığınız şehir bulunamadı");
            return;
          }else{
            console.log(data);
            displayWeather(data);
            document.querySelector(".container").style.height="600px";
          }
        })
    }

    }

function displayWeather(data){
    inputBox.value = "";
    temperature.innerHTML = `${data.main.temp}°C`;
    description.innerHTML = data.weather[0].description;
    humidityDetails.innerHTML = `${data.main.humidity}%`;
    windDetails.innerHTML = `${data.wind.speed}km/s`;
    getImage(data.weather[0].main);
    console.log(data.weather[0].main)

    
}


function getImage(weatherDescription) {
    switch (weatherDescription) {
    case "Clear":
           imgOfWeather.setAttribute("src", "img/clear.png")
           break
        case "Rain":
    imgOfWeather.setAttribute("src", "img/rain.png")
            break
        case "Clouds":
            imgOfWeather.setAttribute("src", "img/cloud.png")
            break
        case "Haze":
            imgOfWeather.setAttribute("src", "img/mist.png")
            break
        case "Snow":
           imgOfWeather.setAttribute("src", "img/snow.png")
           break
     }
}


document.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        getWeather();
    }
})

