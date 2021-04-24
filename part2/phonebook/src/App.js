import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum] = useState('')
  const [ showAll, setShowAll] = useState(true)
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter state={filter} changeState={setFilter} changeShow={setShowAll}/> 
      <h2>add a new</h2>
      <PersonForm personState={persons} changePersons={setPersons} nameState={newName} numState={newNum} changeName={setNewName} changeNum={setNewNum} />
      <h2>Numbers</h2>
      <Persons personState={persons} showAllState={showAll} filterState={filter}/>
    </div>
  )
}

export default App