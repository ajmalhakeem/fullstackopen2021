import React from 'react'


const Filter = ({text, setFilter, setShowAll}) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        if (event.target.value === '') 
        {
          setShowAll(true)
        } else {
          setShowAll(false)
        }
      }

    return (
        <div>
            filter shown with: <input value={text} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter 