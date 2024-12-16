import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td><p>{text}</p></td> 
      <td><p>{value}</p></td> 
    </tr>
  )
}

const Statistics  = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) { 
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
        <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <StatisticLine text='positive' value={(props.good / (props.good + props.neutral + props.bad)) * 100 + ' %'} />
      </table>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App