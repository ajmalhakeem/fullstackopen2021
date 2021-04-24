import React from 'react'

const Search = ({setFilter}) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <form>
        find countries: <input onChange={handleFilterChange}/>
      </form>
    </div>
  )
}

export default Search