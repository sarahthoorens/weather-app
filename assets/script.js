let url = 'http://api.openweathermap.org/data/2.5/weather?q=city&APPID=ff1ee566a2d64f9629ab2d38b042b254';
let searchBtn = document.getElementById('search-btn')
let cityEl = document.getElementById('city-name').value

let cityUrl = url.search('city')



function getApi () {
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
let currentTemp = document.createElement('p');
let maxTemp = document.createElement('p');
let minTemp = document.createElement('p');
let weather = document.createElement('p');
    cityEl.textContent = data.main.name;

    currentTemp.textContent = data.main.temp;
    maxTemp.textContent =  data.main.temp_max;
    minTemp.textContent = data.main.temp_min;
    weather.innerHTML = data.

    feels_like
    : 
    288.91
    humidity
    : 
    54
    pressure
    : 
    1014
    temp
    : 
    289.78
    temp_max
    : 
    290.98
    temp_min
    : 
    288.02


  }

}


searchBtn.addEventListener('click', function () {
    let cityEl = cityUrl;}
    getApi());

  // main > name = London
