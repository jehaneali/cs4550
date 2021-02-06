// import logo from './logo.svg';
import "milligram";
import { useState } from 'react';
import { uniq, bad_guesses, word_view, lives_left, code_view, genRand } from './game';
import './App.css';

let codesList = [];

// Credit: Nat Tuck, CS4550 Lecture 04 Code
// https://github.com/NatTuck/scratch-2021-01.git
function App() {
  //TODO: randomize the number 
  //TODO: enforce 4 digit unique value etc
  // let rand = _.random(1234, 9876);

  // while(!checkUnique(rand)) {
  //   rand = _.random(1234, 9876);
  // }

  // function checkUnique(num) {
  //   let spl = (""+num).split('');
  //   let set = new Set(spl);
  //   return spl.length == set.size;
  // }
  
  const y = genRand();
  const [secret, setNumber] = useState(y);
  console.log("rand is" + y);
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState("");
  //const [codes, setCodes] = useState([]);

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
    let spl = (""+guess).split('');
    let set = new Set(spl);
    if(!(spl.length == set.size && spl.length == 4)) {
      setGuess("");
    }
    else {
      setGuesses(guesses.concat(guess));
      setGuess("");
    }
    
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

  console.log("Code is " + code)
  console.log(code === " 4A0B");
  let cc = code[0]; //maybe use lives
  console.log("cc is" + cc); 
  if (cc.substring(0,1) == "4") {
    return (
      <div className="App">
        <h1>You win!</h1>
        <p>
          <button onClick={() => setGuesses([])}>
            Reset
          </button>
        </p>
      </div>
    );
  }
  console.log("ok code is " + code);
  return (
    <div className="App">
      <h2>All guesses must be 4 unique digits.</h2>
      <h3>Lives left: {lives}</h3>
      <div class="container">
      
      {/* <h1>Word: {view.join(' ')}</h1> */}
      <div class = "row">
        <div class="column"><h1>Guesses: </h1></div>
        <div class="column"><h1>Results of Incorrect Guesses: </h1> </div>
      </div>
      <div class = "row">
        <div class="column"><h2>{guesses.join(' ')}</h2></div>
        
        <div class="column"><h2>{code.join(' ')}</h2></div>

      </div>
      {/* <h1>Guesses: </h1> */}
      
      {/* <h1>Incorrect Guesses: {bads.join(' ')}</h1> */}
      
      {/* <h2>{code.join(' ')}</h2>
      <h1>Guesses Left: {lives}</h1> */}
      
      <p>
        <input type="number" min="0123" max="9876" value={guess} onChange={updateGuess} onKeyPress={keypress}/>
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
