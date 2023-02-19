import { useState, useEffect } from 'react'
import countryService from './services/countries'

import ShowInfo from './components/ShowInfo'

const Filter = ({value, handleFilter}) => {
  return(
    <div>
      find countries
      <input value={value} onChange={handleFilter}/>
    </div>
  )
}

const App = () => {
  const [countryFilter, setCountryFilter ] = useState('')
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState([])
  

  const hook = () => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      }) 
  }
  useEffect(hook, [])
  
  const handleCountryFilter = (event) => {
    setCountryFilter(event.target.value)
    setSelected([])
  }

  const handleCountryClick = (props) => {
    const muodonMuutos = countries.filter((x) => x.name.common.toLowerCase().includes(props.name.common.toLowerCase()))
    setSelected(muodonMuutos)
  }

  let filteredCountryList = countries.filter((x) => x.name.common.toLowerCase().includes(countryFilter.toLowerCase()))

  let whichWay = 0
  if (filteredCountryList.length < 11){
    if (filteredCountryList.length > 1){
      if (selected.length === 0){
        whichWay = 1
      }
    }
  }

  if (whichWay === 1) {
    return (
      <div>
      <Filter
      value={countryFilter} 
      handleFilter = {handleCountryFilter} 
      />
      {filteredCountryList.map(c => 
      <p key={c.name.common}>
      {c.name.common}
      <button onClick={() => handleCountryClick(c)}>
        show
      </button>
      </p>)}
      </div>
    )
  } else{
    return(
      <div>
      <Filter
      value={countryFilter} 
      handleFilter = {handleCountryFilter} 
      />
      <ShowInfo 
      clickedCountry={selected}
      filteredCountryList={filteredCountryList}
      handleCountryClick={() => console.log('Oops.. Something wrong')}
      />
      </div>
    )
  }
}

export default App