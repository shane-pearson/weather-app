var button = document.querySelector('#add');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
var city = document.querySelector('#city');
var descrip = document.querySelector('#descrip');


var getWeather = function (repo) {
    var apiUrl = 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=f0d952a79869cf37ed59a5dec2aa36e9';
    var apiGeo = 'http://api.openweathermap.org/geo/1.0/direct?q={san diego}&appid=f0d952a79869cf37ed59a5dec2aa36e9'
}

// function getSavedCity() {
//    var savedCity = localStorage.getItem('city');
//    if (savedCity) {
//     var cityContainer = document.querySelector('#savedCity');
//     var cityElement = document.createElement('p');
//     cityElement.textContent = savedCity;
//     cityContainer.appendChild(cityElement);
//   }
// }

function getSavedCity() {
       var savedCity = localStorage.getItem('city');
       if (savedCity) {
        var cityContainer = document.querySelector('#savedCity');
        var cityButton = document.createElement('button');
        cityButton.textContent = savedCity;
        cityButton.classList.add('saved-city-button')
        cityContainer.appendChild(cityButton);
        cityContainer.style.display = 'block';
      }
    }

function currentWeather() {
    var city = document.querySelector('#city').value;
        console.log(city)

        localStorage.setItem('city', city);

            fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=f0d952a79869cf37ed59a5dec2aa36e9&units=imperial')
            // api.openweathermap.org/data/2.5/forecast?q=+city&appid={API key}
            .then(res => res.json())
                .then(data => {
                console.log(data)
                    var html =""
                    {
                        html += `<div class="card" style="width: 65rem;">
 
                    <div class="card-body">
                        <p class="card-text">${data.city.name} ${data.list[0].dt_txt} <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" class="card-img-top" alt="... "style="max-width:10%;"></p>
                        <p class="card-text">Temp: ${data.list[0].main.temp}</p>
                        <p class="card-text">Humidity: ${data.list[0].main.humidity}</p>
                        <p class="card-text">Wind speed: ${data.list[0].wind.speed}</p>
                    </div>
                    </div>`
                    } 

    document.querySelector("#currentforecast").innerHTML = html
            })
            // .catch(err => alert('You entered Wrong city name'))
        }


button.addEventListener('click', function() {
    var city = document.querySelector('#city').value;
        console.log(city)
            fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=f0d952a79869cf37ed59a5dec2aa36e9&units=imperial')
            // api.openweathermap.org/data/2.5/forecast?q=+city&appid={API key}
            .then(res => res.json())
                .then(data => {
                console.log(data)
                currentWeather()
                getSavedCity()
                    var html =""
                    for (var i = 1; i < data.list.length; i=i+8) {
                        html += `<div class="card" style="width: 12rem;">
 
                    <div class="card-body">
                        <p class="card-text"><img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" class="card-img-top" alt="... "style="max-width:50%;"></p>
                        <p class="card-text">Temp: ${data.list[i].main.temp}</p>
                        <p class="card-text">Humidity: ${data.list[i].main.humidity}</p>
                        <p class="card-text">Wind speed: ${data.list[i].wind.speed}</p>
                    </div>
                    </div>`
                    } 

    document.querySelector("#forecast").innerHTML = html
            })
            // .catch(err => alert('You entered Wrong city name'))
        })
        

    

    button.addEventListener('submit', getWeather);