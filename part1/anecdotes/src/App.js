import React, { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = (props) =>{
  console.log(props)
  const{ onClick, text } = props
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const Display = props => <div>has {props.value} votes</div>

const App = () => {
  // State
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // Actions
  const handleNextAnecdote = () => {
    const randomNum = getRandomInt(anecdotes.length)
    setSelected(randomNum)
  }

  const handleUserVote = () => {
    const newVotes = [...votes]
    newVotes[selected]+= 1
    setVotes(newVotes)
  }
  
  return (
    <div>
      <h1>Anecodote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Display value={votes[selected]}/>
      <Button onClick={handleNextAnecdote} text='next anecdote'/>
      <Button onClick={handleUserVote} text='vote'/>
      <h1>Anecodote with most votes</h1>
      <p> {anecdotes[votes.indexOf(Math.max(...votes))]} </p>
      <p>has {Math.max(...votes)} votes </p>
    </div>
  )
}

export default App;
