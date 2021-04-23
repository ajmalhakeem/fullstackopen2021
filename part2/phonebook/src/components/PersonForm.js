import React from 'react'

const PersonForm = ({personState, nameState, numState, changeName, changeNum, changePersons}) => {

    // on form submit, run this func
    const addName = (event) => {
    event.preventDefault() //prevent default action 

    if (nameState === '' || numState === '') {
      window.alert(`Please input a valid name and number.`)
    }
    else {
      const personObj = { //construct a new person object
        name: nameState,
        number: numState,
      }
      
      //conditional operator
      personState.some(item => item.name === nameState) //condition 
      ? window.alert(`${nameState} is already added to phonebook`) //runs if true
      : personState.some(item => item.number === numState) ? window.alert(`${numState} is already added to phonebook`): changePersons(personState.concat(personObj))
  
      changeName('')
      changeNum('')
    }
    }

    //handles input changing for name
    const handleNoteChange = (event) => {
        changeName(event.target.value)
    }

    //handles input changing for number
    const handleNumChange = (event) => {
        changeNum(event.target.value)
    }

    return (
    <form onSubmit={addName}>
        <div>
          name: <input value={nameState} onChange={handleNoteChange} />
        </div>
        <div>
          number: <input value={numState} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )

}

export default PersonForm