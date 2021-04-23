import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Eren Jaeger', number: '04348955663' },
    { name: 'Mikasa Ackermann', number: '04041954679' },
    { name: 'Levi Ackermann', number: '04938300193' },
    { name: 'Armin Arlet', number: '04889477901' },
  ]) 
  
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum] = useState('')
  const [ showAll, setShowAll] = useState(true)
  const [ filter, setFilter] = useState('')

  const peopleToShow = showAll
  ? persons
  : persons.filter(person => person.name.includes(filter))

  // on form submit, run this func
  const addName = (event) => {
    event.preventDefault() //prevent default action 

    if (newName === '' || newNum === '') {
      window.alert(`Please input a valid name and number.`)
    }
    else {
      const personObj = { //construct a new person object
        name: newName,
        number: newNum,
      }
      
      //conditional operator
      persons.some(item => item.name === newName) //condition 
      ? window.alert(`${newName} is already added to phonebook`) //runs if true
      : persons.some(item => item.number === newNum) ? window.alert(`${newNum} is already added to phonebook`): setPersons(persons.concat(personObj))
  
      setNewName('')
      setNewNum('')
    }
  }

  //handles input changing for name
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  //handles input changing for number
  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    if (event.target.value === '') 
    {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {peopleToShow.map((person,key) => <li key={key}>{person.name} - {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App