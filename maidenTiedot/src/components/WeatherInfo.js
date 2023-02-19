import weatherService from '../services/weather'
import { useState, useEffect } from 'react'

const WeatherInfo = (props) => {
  const [weather, setWeather] = useState(null) 

  const hook = () => {  
    weatherService
        .getAll(props)
        .then(initialWeather => {
          setWeather(initialWeather)
        })
        .catch(error => {
          console.log('Error in getting weather data')
        }) 
    }
  useEffect(hook, [])
  
  if (!weather){
    return <p>Weather information missing</p> 
  } else{
    const temperature = weather.current.temp
    const iconCode = weather.current.weather[0].icon
    const wind_speed = weather.current.wind_speed
    return(
      <div>
          <p>temperature {temperature} Celsius</p>
          <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} alt='Weather icon'/>
          <p>wind {wind_speed} m/s</p>
      </div>
    )
  } 
}

export default WeatherInfo