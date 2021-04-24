import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({capital}) => {

	const api_key = process.env.REACT_APP_API_KEY
	const [location, setLocation] = useState({})

	useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + capital)
      .then(response => {
				setLocation(response.data.current)
      })
	}, [api_key, capital])
	
	return(
		<div>
			<h3>Weather in {capital}</h3>
			<p><b>temperature:</b>{location.temperature}</p>
			<p><b>wind:</b>{location.wind_speed} mph direction {location.wind_dir}</p>
		</div>
	)
}

export default Weather