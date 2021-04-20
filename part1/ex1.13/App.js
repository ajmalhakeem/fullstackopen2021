import React, { useState } from 'react'


const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const initVote = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initVote)

  const handleNext = () => {
    const min = 0
    const max = anecdotes.length - 1
    const rand = Math.floor(min + Math.random() * (max - min));
    console.log(rand)
    setSelected(rand)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    console.log(newVotes[selected])
    setVotes(newVotes)
  }

  return (
    <div>
      <div>
        <p>{anecdotes[selected]}</p>
      </div>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text="vote"></Button>
      <Button handleClick={handleNext} text="next anecdote"></Button>
    </div>
  )
}

export default App