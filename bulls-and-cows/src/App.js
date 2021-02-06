// import logo from './logo.svg';
import { useState } from 'react';
import { uniq, bad_guesses, word_view, lives_left, code_view } from './game';
import './App.css';

// Credit: Nat Tuck, CS4550 Lecture 04 Code
// https://github.com/NatTuck/scratch-2021-01.git
function App() {
  //TODO: randomize the number 
  //TODO: enforce 4 digit unique value etc 
  const [secret, setNumber] = useState("1234");
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState("");

  //let view = word_view(secret, guesses);
  //let bads = bad_guesses(secret, guesses);
  let code = code_view(secret, guesses);
  let lives = lives_left(secret, guesses);


  function updateGuess(ev) {
    let text=ev.target.value;
    if (text.length > 4) {
      text = text[0].concat(text[1]).concat(text[2]).concat(text[3]);
    }
    // if (text.length == 4) {
    //   setGuess(text);
    // }
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

  if (lives <= 0) {
    return (
      <div className="App">
        <h1>Game Over</h1>
        <p>
          <button onClick={() => setGuesses([])}>
            Reset
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* <h1>Word: {view.join(' ')}</h1> */}
      <h1>Guesses: {guesses.join(' ')}</h1>
      {/* <h1>Incorrect Guesses: {bads.join(' ')}</h1> */}
      <h1>Results of Incorrect Guesses: {code.join(' ')}</h1>
      <h1>Guesses Left: {lives}</h1>
      
      <p>
        <input type="text" min="1023" max="9999" value={guess} onChange={updateGuess} onKeyPress={keypress}/>
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
