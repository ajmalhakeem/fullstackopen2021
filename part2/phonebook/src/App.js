import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneService from './services/phones'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum] = useState('')
  const [ showAll, setShowAll] = useState(true)
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    phoneService
      .getAll()
      .then(returnedPeople => {
        setPersons(returnedPeople)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text={filter} setFilter={setFilter} setShowAll={setShowAll}/> 
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} nameInput={newName} numInput={newNum} setNewName={setNewName} setNewNum={setNewNum} />
      <h2>Numbers</h2>
      <Persons personState={persons} changePerson={setPersons} showAllState={showAll} filterState={filter}/>
    </div>
  )
}

export default App