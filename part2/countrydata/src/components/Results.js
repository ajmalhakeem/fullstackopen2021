import React from 'react'

const Results = ({filter, countries, setCountries}) => {

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter))
  const countriesToShow = (filteredCountries.length <= 10)
  ? filteredCountries
  : countries 

  if (countriesToShow.length === 250) {
    return(<div></div>)
  }

  if (countriesToShow.length === 1) {
    return(
      <div>{countriesToShow.map((country, idx) => (
      <div key={idx}>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map((language, idx) => (<li key={idx}>{language.name}</li>))}
      </ul>
      <img src={country.flag} alt=""/>
      </div>
      ))}</div>
    )
  }
  return (
    <div>
      {(countriesToShow.length <= 10)
      ? <div>{countriesToShow.map((country, idx) => (<p key={idx}>{country.name}</p>))}</div>
      : <p>Too many countries, please specify further.</p>
      }
    </div>
  )
}             

export default Results 