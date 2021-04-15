import React from 'react'

const Header = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.name} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part name={part1} exercise={exercises1}/>
      <Part name={part2} exercise={exercises2}/>
      <Part name={part3} exercise={exercises3}/>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Header/>
      <Content />
      <Total />
    </div>
  )
}

export default App