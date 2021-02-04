// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// Credit: Nat Tuck, CS4550 Lecture 04 Code
// https://github.com/NatTuck/scratch-2021-01.git
function App() {
  //TODO: randomize the number 
  const [number, setNumber] = useState("1234");
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState("");

  function updateGuess(ev) {
    let text=ev.target.value;
    if (text.length > 4) {
      text = text[0];
    }
    setGuess(text);
  }

  function makeGuess() {
    setGuesses(guesses.concat(guess));
    setGuess("");
  }

  function keypress(ev) {
    if (ev.key == "Enter") {
      makeGuess();
    }
  }

  return (
    <div className="App">
      <h1>Secret: {number}</h1>
      <h1>Guesses: {guesses.join(' ')}</h1>
      <p>
        <input type="text" value={guess} onChange={updateGuess} onKeyPress={keypress}/>
        <button onClick={makeGuess}>
          Guess
        </button>
      </p>
      <p>
        <button onClick={() => setGuesses([])}>
          Reset
        </button>
      </p>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
