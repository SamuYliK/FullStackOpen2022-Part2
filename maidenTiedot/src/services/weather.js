import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY

const baseUrl = `https://api.openweathermap.org/data/3.0/onecall?`

const baseUrlCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=`

const getAll = (props) => {
    
    const request = axios
    .get(`${baseUrlCoordinates}${props.capital},${props.countryCode}&limit=5&appid=${api_key}`)
    .then(response => {
        return [response.data[0].lat, response.data[0].lon]
    })
    .then( result => {
        const innerRequest = axios
        .get(`${baseUrl}lat=${result[0]}&lon=${result[1]}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${api_key}`)
        return innerRequest
    })
    return request.then(request => request.data)
}

export default {getAll} 

