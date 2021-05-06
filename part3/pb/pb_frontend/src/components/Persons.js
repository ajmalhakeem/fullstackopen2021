import React, {useEffect} from 'react'
import Person from './Person'
import phoneServices from '../services/phones'

const Persons = ({persons, showAll, filter, setPersons}) => {
    const peopleToShow = showAll
    ? persons
		: persons.filter(person => person.name.includes(filter))
	
		useEffect(() => {
			phoneServices
			.getAll()
			.then(returnedPeople => {
				setPersons(returnedPeople)
			})		
		}, [setPersons])

    return (
    <ul>
        {peopleToShow.map((person) => <Person pid={person.id} name={person.name} number={person.number} persons={persons} setPersons={setPersons}/>)}
    </ul>
    )
}

export default Persons