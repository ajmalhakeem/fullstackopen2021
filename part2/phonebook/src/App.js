import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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