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
 fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}&units=imperial`)
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
         for (let i = 0; i < 1; i++) {
          let latAll = cityData[i].lat
          let lonAll = cityData[i].lon
          fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latAll}&lon=${lonAll}&appid=${apiKey}&units=imperial`)
          .then(function (response) {
            return response.json()
          })
           .then(function (data) {
               console.log(data);
    let  { city, list, weather } = data;

    for (let i = 0; i < 40; i+=8 ) {
    let icon = `https://openweathermap.org/img/wn/${list[i].weather[0]['icon']}@2x.png`;
   
    const li = document.createElement('li');
    const liContent = `
    <h3 class="city-name" data-name="${city.name}">
      <span>${city.name}</span>
      <span>${window.moment(list[i].dt*1000).format('ddd')}</span>
    </h3>
    <div class="city-temp-max">High Temp: ${Math.round(list[i].main.temp)}<sup>°F</sup>
    </div>
    <div> <img class="city-icon" src=${icon} alt="weather-icon"}>
          <p>${list[i].weather[0]["description"]}</p>
    </div> `;
    li.setAttribute('class', 'city');
    li.innerHTML = liContent;
    forecast.appendChild(li);
  } })} 
        })      
  })

