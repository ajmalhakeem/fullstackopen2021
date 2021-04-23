import React from 'react'
import Person from './Person'

const Persons = ({personState, showAllState, filterState}) => {
    const peopleToShow = showAllState
    ? personState
    : personState.filter(person => person.name.includes(filterState))
    return (
    <ul>
        {peopleToShow.map((person,key) => <Person key={key} name={person.name} number={person.number}/>)}
    </ul>
    )
}

export default Persons