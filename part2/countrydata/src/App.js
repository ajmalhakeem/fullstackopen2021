import React, {useState, useEffect} from 'react'
import Search from './components/Search'
import Results from './components/Results'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Search setFilter={setFilter}></Search>
      <Results filter={filter} countries={countries} setCountries={setCountries}></Results>
    </div>
  )

}

export default App