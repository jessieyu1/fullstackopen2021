import { useState, useEffect } from "react"
import axios from 'axios'
import CountryToShow from "./components/CountryToShow"



const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')


  useEffect(() => {       
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
        setCountries(response.data)
      })
  }, [])



  const countryMatch =
    filter.length === 0
      ? []
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(filter.toLowerCase())
        );

  const handleFilterChange = (event) =>{
    setFilter(event.target.value)
  } 

  return (
    <div>
      <p>find countries</p> 
      <input value={filter} onChange={handleFilterChange} /> 
      <CountryToShow countryToShow={countryMatch} setFilter={setFilter}/>
      
    </div>
  )
}

export default App
