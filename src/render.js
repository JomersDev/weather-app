import { currentWeatherObject } from "./index.js";

//function that renders the data obtained from the fetch API request
export function renderWeatherData() {
    let data = document.getElementById('data');
    let detailData = document.getElementById('detailData');

    clearDomElements();

    let tempRender = document.createElement('p');
    tempRender.textContent = currentWeatherObject.temp + '\u00B0';
    tempRender.className = "temp"
    data.appendChild(tempRender);

    let cloudRender = document.createElement('p');
    cloudRender.textContent = currentWeatherObject.clouds + '%';
    cloudRender.className = "cloudy";
    detailData.appendChild(cloudRender);

    let humidityRender = document.createElement('p');
    humidityRender.textContent = currentWeatherObject.humidity + '%';
    humidityRender.className = "humidity";
    detailData.appendChild(humidityRender);

    let windRender = document.createElement('p');
    windRender.textContent = currentWeatherObject.wind + 'm/s';
    windRender.className = "wind";
    detailData.appendChild(windRender);

    let nameRender = document.createElement('p');
    nameRender.textContent = currentWeatherObject.name;
    nameRender.className = "name";
    data.appendChild(nameRender);
} 

//function that clears all DOM elements
function clearDomElements() {
    while (data.firstChild) {
        data.removeChild(data.firstChild);
    } 
    while (detailData.firstChild) {
        detailData.removeChild(detailData.firstChild);
    } 
}
