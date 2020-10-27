import './App.css';
import Score from './components/Score'
import Game from './components/Game'
import React, { useState } from 'react';

function App() {
  
  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const rock = () => {
    
  }

  const paper = () => {

  }

  const scissor = () => {
  }

  

  return (
    <div className="App">
      <div className="main_screen">
        <Score userScore={userScore} botScore={botScore}/>
        <Game />

        <div>
            <button onClick={rock}>Rock</button>
            <button onClick={paper}>Paper</button>
            <button onClick={scissor}>Scissor</button>
        </div>
      </div>
    </div>
  );
}

export default App;
