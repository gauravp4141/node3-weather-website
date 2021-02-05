const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=58cce313ead724420d56ca4208d0bb5a&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. it feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%")
        }
    })

}

module.exports = forecast