import { renderWeatherData } from "./render";

//there is probably a safer way to export this object
export let currentWeatherObject;

//move these into the currentWeather function so they aren't in global scope?
const searchBar = document.getElementById('search');
const submitButton = document.getElementById('submitSearch');
const API_KEY = 'd5593e4a1e2f16160e3c632f71177701';

submitButton.addEventListener('click', currentWeather);

async function currentWeather() {
    //fetching current weather data and assigning the data i need to an object that is exported
    try {
        const city = searchBar.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` , {mode: 'cors'});
        const currentWeatherData = await response.json();
        const currentWeather = {
            temp: Math.round(currentWeatherData.main.temp),
            clouds: currentWeatherData.clouds.all, 
            humidity: currentWeatherData.main.humidity,
            wind: currentWeatherData.wind.speed,
            name: currentWeatherData.name
        }
        //exporting weather object
        currentWeatherObject = currentWeather;
        //calling the render function from render.js
        renderWeatherData();
    } catch (err) {
        console.log('error in fetching weather data' , err);
        alert("Please enter a valid city");
    }
}

//On inital load fetch the weather data for Sydney
async function initialLoad() {
    try {
        const city = searchBar.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${API_KEY}&units=metric` , {mode: 'cors'});
        const currentWeatherData = await response.json();
        const currentWeather = {
            temp: Math.round(currentWeatherData.main.temp),
            clouds: currentWeatherData.clouds.all, 
            humidity: currentWeatherData.main.humidity,
            wind: currentWeatherData.wind.speed,
            name: currentWeatherData.name
        }
        //exporting weather object
        currentWeatherObject = currentWeather;

        //calling the render function from render.js
        renderWeatherData();
    } catch (err) {
        console.log('error in fetching weather data' , err);
        alert("Please enter a valid city");
    }
}

initialLoad();