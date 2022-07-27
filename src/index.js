const searchBar = document.getElementById('search');
const submitButton = document.getElementById('submitSearch');
const API_KEY = 'd5593e4a1e2f16160e3c632f71177701';

submitButton.addEventListener('click', currentWeather);

async function currentWeather() {
    try {
        const city = searchBar.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` , {mode: 'cors'});
        const currentWeatherData = await response.json();
        const currentWeather = {
            temp: Math.round(currentWeatherData.main.temp),
            clouds: currentWeatherData.clouds.all, 
            humidity: currentWeatherData.main.humidity,
            wind: currentWeatherData.wind.speed
        }
        console.log(currentWeatherData);
        console.log(`${city} is currently:`, currentWeather.temp);
        console.log(currentWeather);
    } catch (err) {
        console.log('error in fetching weather data' , err);
    }
}






//5 day forecast API => will attempt to incorporate once current weather sections is done


/* async function weatherForecast() {
    try {
        const city = searchBar.value;
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric` , {mode: 'cors'});
        const weatherData = await response.json();
        const forecast = weatherData.list;
        console.log(forecast);
    } catch (err) {
        console.log('error in fetching weather data' , err);
    }
} */
