import React from 'react'
import phoneService from '../services/phones'

const PersonForm = ({persons, nameInput, numInput, setInputName, setInputNum, setPersons, setNotificationMsg, setError}) => {

    // on form submit, run this func
    const addPerson = (event) => {
    event.preventDefault() //prevent default action 

    if (nameInput === '' || numInput === '') {
      window.alert(`Please input a valid name and number.`)
    }
    else {
      const newPerson = { //construct a new person object
        name: nameInput,
        number: numInput
			}
	

      //conditional operator
      const match = persons.some(person => person.name === newPerson.name)
      if (match) {
				const res = window.confirm(`${nameInput} is already added to phonebook, are you sure you want to update the number?`)
        phoneService.getAll().then(people => {
          const targetPerson = people.filter((target) => {
            return target.name === newPerson.name
          })  
          
          if (targetPerson.length === 0) 
          {
            setNotificationMsg("Error. Person has been deleted from the database")
            setError(true)
          }
          else {
            if (res) {					
              phoneService
                .update(targetPerson[0].id, newPerson)
                .then(newPersons => {
                  setPersons(persons.map((person) => person.id !== newPersons.id ? person : newPerson))
                })
                .catch(error => {
                  console.log('fail')
                })	
            }
          }
        })
      }
      else {
        phoneService
          .create(newPerson)
          .then(results => {
            setPersons(persons.concat(results))
            setNotificationMsg(`Success! Added ${newPerson.name}`)
            setError(false)
            console.log(results)
          } 
        )
        .catch(error => {
          setNotificationMsg(error.response.data.error)
          setError(true)
          console.log(error.response.data.error)
        })
      }
  
      setInputName('')
      setInputNum('')
    }
    }

    //handles input changing for name
    const handleNoteChange = (event) => {
        setInputName(event.target.value)
    }

    //handles input changing for number
    const handleNumChange = (event) => {
        setInputNum(event.target.value)
    }

    return (
    <form onSubmit={addPerson}>
        <div>
          name: <input value={nameInput} onChange={handleNoteChange} />
        </div>
        <div>
          number: <input value={numInput} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )

}

export default PersonForm