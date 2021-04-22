import React from 'react'
import Part from './Part'

const Content = (content) => {
    const parts = content.content.parts.map((data, key) => {
      return <Part key={key} name={data.name} exercise={data.exercises}></Part>
    })
    
    return (
      <div>
        {parts}
      </div>
    )
  }

export default Content