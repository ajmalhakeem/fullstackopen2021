import React from 'react'
import phoneService from '../services/phones'

const PersonForm = ({persons, nameInput, numInput, setInputName, setInputNum, setPersons}) => {

    // on form submit, run this func
    const addPerson = (event) => {
    event.preventDefault() //prevent default action 

    if (nameInput === '' || numInput === '') {
      window.alert(`Please input a valid name and number.`)
    }
    else {
      const personObj = { //construct a new person object
        name: nameInput,
        number: numInput
			}
	

      //conditional operator
      if (persons.some(item => item.name === personObj.name)) {
				const res = window.confirm(`${nameInput} is already added to phonebook, are you sure you want to update the number?`)
				// if (res) {					
				// 	phoneService
				// 		.update(item.id, personObj)
				// 		.then(p)	
				// }
      }
      else {
        if (persons.some(item => item.number === personObj.number)) {
          window.alert(`${numInput} is already added to phonebook`)
        } else {
					phoneService
						.create(personObj)
						.then(results => {
							setPersons(persons.concat(results))
							console.log(results)
						} 
					)
        }
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