import React from 'react'
import Part from './Part'

const Content = ({course}) => {
    const contents = course.parts.map((data, key) => {
      return <Part key={key} name={data.name} exercise={data.exercises}></Part>
    })
    
    return (
      <div>
        {contents}
      </div>
    )
  }

export default Content