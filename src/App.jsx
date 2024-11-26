
const Hello = (props) => {
  /*
  const age = props.age
  const name = props.name
  */

  const {name, age} = props;
  console.log(props);

  //returns the year you were born in.
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Kaspar'
  const age = 277

  return (
    <div>
      <h1>Tere Kaspar</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App