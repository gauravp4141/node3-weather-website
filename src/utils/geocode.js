const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2F1cmF2NDE0MSIsImEiOiJja2s5Z2V4NWgweGN6MndwYnpvYXZjajB0In0.8pd8XOyg4uvqEF3lYBVowQ'

request({ url, json: true}, (error, {body} = {}) => {

    if (error) {
        callback('Unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
        callback('Unable to find location. Try another search.', undefined)
    } else {
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        })
    }

})

}

module.exports = geocode



