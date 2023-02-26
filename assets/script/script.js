var button = document.querySelector('#add');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
// var symbol = document.querySelector('#symbol');
var city = document.querySelector('#city').value;
var descrip = document.querySelector('#descrip');


var getWeather = function (repo) {
    var apiUrl = 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=f0d952a79869cf37ed59a5dec2aa36e9';
    var apiGeo = 'http://api.openweathermap.org/geo/1.0/direct?q={san diego}&appid=f0d952a79869cf37ed59a5dec2aa36e9'
}

// console.log(city);

button.addEventListener('click', function() {
    var city = document.querySelector('#city').value;
        console.log(city)
            fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=f0d952a79869cf37ed59a5dec2aa36e9&units=imperial')
            // api.openweathermap.org/data/2.5/forecast?q=+city&appid={API key}
            .then(res => res.json())
                .then(data => {
                console.log(data)
                    var html =""
                    for (var i = 0; i < data.list.length; i=i+8) {
                        html += `<div class="card" style="width: 12rem;">
 
                    <div class="card-body">
                        <p class="card-text">Temp: ${data.list[i].main.temp} <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" class="card-img-top" alt="... "style="max-width:50%;"></p>
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