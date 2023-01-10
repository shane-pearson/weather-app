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
                    for (var i = 0; i < data.length; i++) {
                        var mainTemp = document.createElement('p');
                            temp.textContent = data.list[0].main.temp;
                            // humidity.textContent = data.list[0].main.humidity;
                            // wind.textContent = data.list[0].wind.speed;
                                temp.append(mainTemp);
                                // humidity.append(humidity);
                                // wind.append(wind);
                                
                                    console.log(data)
                                    // console.log(data.list[0].main.temp)
                                    // console.log(data.list[0].main.humidity)
                                    // console.log(data.list[0].wind.speed)
                    }

    
            })
            
            // .catch(err => alert('You entered Wrong city name'))
        })
        

    button.addEventListener('submit', getWeather);