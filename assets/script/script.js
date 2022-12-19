var button = document.querySelector('#button');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
var symbol = document.querySelector('#symbol');
var city = document.querySelector('#city');
var descrip = document.querySelector('#descrip');


// var getWeather = function (repo) {
//     var apiUrl = 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=f0d952a79869cf37ed59a5dec2aa36e9';
//     var apiGeo = 'http://api.openweathermap.org/geo/1.0/direct?q={san diego}&appid=f0d952a79869cf37ed59a5dec2aa36e9'
// }

btn.addEventListener('click', function() {
    
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
            .then(res => res.json())
    
            .then(data => {
    
                var nameval = data['name']
                var descrip = data['weather']['0']['description']
                var temp = data['main']['temp']
                var wind = data['wind']['speed']

                city.innerHTML=`Weather of <span>${nameval}<span>`
                temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
                description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
                wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
    
            })
    
            .catch(err => alert('You entered Wrong city name'))
        })
 




    // fetch(apiUrl).then(function (response) {
    //     if (response.ok) {
    //       response.json()
    // };


        list.main.temp
        list.wind.speed
        list.main.humidity
        forecast.symbol.var
        location.name 

    //store datat locally
    //if statement add style

    button.addEventListener('submit', getWeather);