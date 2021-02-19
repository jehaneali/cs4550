import React, { useState, useEffect } from 'react';
import "milligram";
import { lives_left, code_view, genRand } from './game';
import { ch_join, ch_push, ch_reset } from './socket';
//import './App.css';

/*
Design Decisions: 
- As an added challenge to the user, I opted to only have the results of the
  previous guess shown, instead of showing the entire list of past results
- I also chose to include digits 0-9 as possibilities for any of the 4 digits,
  unlike the Linux version; however, I did still keep the required uniqueness 
  between digits
*/


function Bulls() {


  const y = genRand();
  //credit for the following 5 lines: Nat Tuck's CS4550 Lecture 04 Code
  // https://github.com/NatTuck/scratch-2021-01.git
  const [secret, setNumber] = useState(y);
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState("");

//   const [state, setState] = useState({
//       secret: y,
//       guesses: [],
//   });

//   let {secret, guesses} = state;

  let code = code_view(secret, guesses);
  let lives = lives_left(secret, guesses);


  //credit: this was based on Nat Tuck's CS4550 Lecture 04 Code
  // https://github.com/NatTuck/scratch-2021-01.git
  function updateGuess(ev) {
    let text = ev.target.value;
    if (text.length > 4) {
      text = text[0].concat(text[1]).concat(text[2]).concat(text[3]);
    }
    setGuess(text);
    

  }

  function makeGuess() {
    let spl = ("" + guess).split('');
    let set = new Set(spl);
    if (!(spl.length == set.size && spl.length == 4)) {
      setGuess("");
    }
    else {
      setGuesses(guesses.concat(guess));
      setGuess("");
    }
  }

  //credit: Nat Tuck's CS4550 Lecture 04 Code
  // https://github.com/NatTuck/scratch-2021-01.git
  function keypress(ev) {
    if (ev.key == "Enter") {
      makeGuess();
    }
  }

  //credit: Nat Tuck's CS4550 Lecture 04 Code
  // https://github.com/NatTuck/scratch-2021-01.git
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


  let cc = code[0];
  if (cc.substring(0, 1) == "4") {
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
  console.log("code is " + code);
  console.log("guesses is " + guesses);
  return (
    <div className="App">
      <h2>All guesses must be 4 unique digits.</h2>
      <h3>Lives left: {lives}</h3>
      <div class="container">

        <div class="row">
          <div class="column"><h1>Guesses: </h1></div>
          <div class="column"><h1>Results of previous guess: </h1> </div>
        </div>
        <div class="row">
          <div class="column"><h2>{guesses.join(' ')}</h2></div>

          <div class="column"><h2>{code.join(' ')}</h2></div>

        </div>

        {/* credit for the rest of this html: Nat Tuck's CS4550 Lecture 04 Code
      https://github.com/NatTuck/scratch-2021-01.git */}
        <p>
          <input type="number" min="0123" max="9876" value={guess} onChange={updateGuess} onKeyPress={keypress} />
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
}

export default Bulls;
