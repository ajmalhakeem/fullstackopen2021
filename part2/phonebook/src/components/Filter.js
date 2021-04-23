import React from 'react'


const Filter = ({text, changeState, changeShow}) => {
    const handleFilterChange = (event) => {
        changeState(event.target.value)
        if (event.target.value === '') 
        {
          changeShow(true)
        } else {
          changeShow(false)
        }
      }

    return (
        <div>
            filter shown with: <input value={text} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter 