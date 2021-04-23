import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '04348955663' }
  ]) 
  
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum] = useState('')

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

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person,key) => <li key={key}>{person.name} - {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App