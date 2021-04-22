import React from 'react'

const Total = (total) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const exercisesArray = total.total.parts.map(data => data.exercises)    
    
    return (
      <div>
        <p><b>Total number of exercises = {exercisesArray.reduce(reducer)}</b></p>
      </div>
    )
}

export default Total