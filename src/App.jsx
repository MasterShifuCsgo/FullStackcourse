import { useState } from 'react'
import './App.css'




const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div id="container">
      <h1>Give feedback</h1>

      <button onClick={() => {setGood(good+1)}}>good</button>
      <button onClick={() => {setNeutral(neutral+1)}}>neutral</button>
      <button onClick={() => {setBad(bad+1)}}>bad</button>

      <h1>statistics</h1>

    <table>
      <tr>
      <td>Good</td>
      <td>{good}</td>
    </tr>
    <tr>
      <td>Neutral</td>
      <td>{neutral}</td>
    </tr>
    <tr>
      <td>Bad</td>
      <td>{bad}</td>
    </tr>
    <tr>
      <td>All (Total)</td>
      <td>{good + neutral + bad}</td>
    </tr>
    <tr>
      <td>Average Feedback</td>
      <td>{Math.round((good + neutral + bad) / 3)}</td>
    </tr>
    <tr>
      <td>Positive Feedback: </td>
      <td>{Math.round((good / (good + neutral + bad)) * 100)}%</td>
    </tr>
      </table>
    </div>
  )
}

export default App