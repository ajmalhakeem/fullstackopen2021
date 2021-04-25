import React, {useEffect} from 'react'
import Person from './Person'
import phoneServices from '../services/phones'

const Persons = ({personState, showAllState, filterState, changePerson}) => {
    const peopleToShow = showAllState
    ? personState
		: personState.filter(person => person.name.includes(filterState))
	
		useEffect(() => {
			phoneServices
			.getAll()
			.then(returnedPeople => {
				changePerson(returnedPeople)
			})		
		}, [changePerson, personState])

    return (
    <ul>
        {peopleToShow.map((person) => <Person pid={person.id} name={person.name} number={person.number} changeState={changePerson}/>)}
    </ul>
    )
}

export default Persons