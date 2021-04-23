import React from 'react'

const Person = ({key, name, number}) => {
    return(
        <li key={key}>{name} - {number}</li>
    )
}

export default Person