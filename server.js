const request = require('request')
const apiKey = '04242c837455d4d779c1d8ebd87c1f54'
let locations = [94040, 'Toronto', 'Portland', 'Oregon', 'Lagos']

function unixToDatetime(timestamp){
    let date = new Date(timestamp*1000)
    let hours = date.getHours()
    let minutes = "0" + date.getMinutes()
    let seconds = "0" + date.getSeconds()
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    return formattedTime
}

for (let i = 0; i < locations.length; i++){
    let location = locations[i],
        url;
    url = (isNaN(location)) ? 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=imperial&appid='+apiKey+'&units=metric' : 'http://api.openweathermap.org/data/2.5/weather?zip='+location+'&units=imperial&appid='+apiKey+'&units=metric'
    request(url, function (err, response, body){
        if(err){
            return error
        } else {
            let information = JSON.parse(body)
            let message = 'It is ' +information.main.temp+ 'degrees in '+information.name+' and the time is '+unixToDatetime(information.dt);
            console.log(message)
        }
    });
}


