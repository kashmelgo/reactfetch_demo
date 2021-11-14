import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [trivia, setTrivia] = useState(0);
var number;

useEffect(() => {
  fetch('http://numbersapi.com/random/trivia',)
  .then(response => response.text())
  .then( response => {
    setTrivia(response)
  })
}, [])

const generateTrivia = () => {
  fetch('http://numbersapi.com/random/trivia',)
  .then(response => response.text())
  .then( response => {
    setTrivia(response)
  })
}

  return (
    <div className="App">
      <h1> Random Number Trivia </h1>
      <h3> {trivia} </h3>
      <button onClick = {generateTrivia}> Generate another Trivia </button>

      <h5> Powered by: http://numbersapi.com/ </h5>
    </div>
  );
}

export default App;
