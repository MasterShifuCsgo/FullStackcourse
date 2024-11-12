const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

//git

const App = () => {
  const name = "Aleks"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Kaupo" age={26 + 10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App