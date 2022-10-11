const form = document.querySelector('.form-block');
const input = document.querySelector('#citySearch')
const forecast = document.querySelector('.forecast-cards');
const searchBtn = document.querySelector('#searchBtn')
const apiKey ='ff1ee566a2d64f9629ab2d38b042b254'


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const forecastDays = document.querySelectorAll('ul .city');
    cityName = input.value;
    // getCityData();

// Return lat and long by city
// function getCityData () {
 fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}&units=imperial`)
    .then(function (response) {
      return response.json()
    })
     .then(function (cityData) {
        console.log(cityData)
        for (let i = 0; i < cityData.length; i++) {
          let latAll = cityData[i].lat
          let lonAll = cityData[i].lon
          console.log(latAll, lonAll)
         }
         for (let i = 0; i < 5; i++) {
          let latAll = cityData[i].lat
          let lonAll = cityData[i].lon
          fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latAll}&lon=${lonAll}&appid=${apiKey}&units=imperial`)
          .then(function (response) {
            return response.json()
          })
           .then(function (data) {
               console.log(data);
    let  { city, list, weather } = data;

    for (let i = 0; i < data.length; i++) {
    let icon = `https://openweathermap.org/img/wn${list[i].weather[i]['icon']}@2x.png`;
   
    const li = document.createElement('li');
    const liContent = `
    <h3 class="city-name" data-name="${city.name},${city.country}">
      <span>${city.name}</span>
    </h3>
    <div class="city-temp-max">${Math.round(list[i].main.temp_max)}<sup>°F</sup>
    </div>
    <div class="city-temp-min">${Math.round(list[i].main.temp_min)}<sup>°F</sup>
    </div>
    <div> <img class="city-icon" src=${icon} alt="weather-icon"}>
          <p>${list[i].weather[i]["description"]}</p>
    </div> `;
    li.setAttribute('class', 'city');
    li.innerHTML = liContent;
    forecast.appendChild(li);
  } })} 
        })      
  // }  
});

  // function showWeatherData(data) { 
    
  // }




//   <figure>
//   <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
//   <figcaption>${weather[0]["description"]}</figcaption>
// </figure>


// let currentTemp = document.createElement('p');
// let maxTemp = document.createElement('p');
// let minTemp = document.createElement('p');
// let weather = document.createElement('p');

// cityEl.textContent = data.main.name;
// currentTemp.textContent = data.main.temp;
// maxTemp.textContent =  data.main.temp_max;
// minTemp.textContent = data.main.temp_min;
// weather.innerHTML = data.weather

// tableCards.append(currentTemp);
// tableCards.append(maxTemp);
// tableCards.append(minTemp);
// tableCards.append(weather);
// });
// }