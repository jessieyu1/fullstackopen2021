import React, { useState } from 'react'

const StatisticLine = (props) => {
	return(
		<tr>
				<th scope="row">{props.text}</th>
				<td>{props.value}</td>
		</tr>
	)
}

const Statistics = (props) => {
    if(props.allClicks === 0){
        return(
        <div>
        No feedback given.
        </div>
        )
    }
    return (
			<table>
					<tbody>
							<StatisticLine text='good' value={props.good} />
							<StatisticLine text='neutral' value={props.neutral} />
							<StatisticLine text='bad' value={props.bad} />
							<StatisticLine text='all' value={props.allClicks} />
							<StatisticLine text='average' value={props.average} />
							<StatisticLine text='positive' value={props.positive + '%'}/>
					</tbody>
			</table>
    )
}


const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const[allClicks,setAll] = useState(0)

const handleGoodClick = () =>{
    setAll(allClicks + 1)
    setGood(good + 1)
}

const handleNeutralClick = () =>{
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
}

const handleBadClick = () =>{
    setAll(allClicks + 1)
    setBad(bad + 1)
}

    return (
        <div>
        <h1>Give Feedback</h1>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
        <h1>Statistics</h1>
        <Statistics  
					allClicks={allClicks} 
					good={good}  
					neutral={neutral} 
					bad={bad} 
					average={allClicks/3} 
					positive={good * 100/allClicks}
			/>
        
        </div>
    )
}

export default App
