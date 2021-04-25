import React from 'react'
import phoneServices from '../services/phones'

const Person = ({pid, name, number, changeState}) => {

	const handleDelete = () => {
		const res = window.confirm(`Are you sure you want to delete ${name}?`)
		console.log(pid)
		if (res === true) {
			phoneServices.deletePerson(pid)
		}
	}

	return(
		<li key={pid}>
				{name} - {number}
				<button onClick={handleDelete}>Delete</button>
		</li>
	)
}

export default Person