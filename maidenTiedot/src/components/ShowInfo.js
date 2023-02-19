import WeatherInfo from './WeatherInfo'

const ShowInfo = ({clickedCountry, filteredCountryList, handleCountryClick}) => {
    if (filteredCountryList.length > 10){
      return(
        <p>Too many matches, specify another filter</p>
      )
    } else if(filteredCountryList.length > 1){
        if (clickedCountry.length !== 0){
          const countryCode =clickedCountry[0].cca2
          const maa = clickedCountry[0].name.common
          const capital = clickedCountry[0].capital
          const area = clickedCountry[0].area
          const languages = Object.values(clickedCountry[0].languages).map(x => <li key={x}>{x}</li>)  
          const flag_src = clickedCountry[0].flags.png   
          return(
            <div>
              <h2>{maa}</h2>
              <p> capital {capital} </p>
              <p> area {area} </p>
              <h3>languages:</h3>
              <ul>
                {languages}
              </ul>
              <img src={flag_src} alt='Flag of {maa}'/>
              <h2>Weather in {capital}</h2>
              <WeatherInfo
              capital={capital}
              country={maa}
              countryCode={countryCode}
              />
            </div>
          )
        } else {
          return(
            <p>Should not be here </p>
          )
        }
    } else if(filteredCountryList.length === 1){
        const countryCode =filteredCountryList[0].cca2
        const maa = filteredCountryList[0].name.common
        const capital = filteredCountryList[0].capital
        const area = filteredCountryList[0].area
        const languages = Object.values(filteredCountryList[0].languages).map(x => <li key={x}>{x}</li>)  
        const flag_src = filteredCountryList[0].flags.png
        return(
          <div>
            <h2>{maa}</h2>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h3>languages:</h3>
            <ul>
              {languages}
            </ul>
            <img src={flag_src} alt='Flag of {maa}'/>
            <h2>Weather in {capital}</h2>
            <WeatherInfo
              capital={capital}
              country={maa}
              countryCode={countryCode}
            />
          </div>)
    } else {
      return(
        <p>Too strict search phrase. No country found. Please remove something from your search.</p>
      )
  }
  }

  export default ShowInfo