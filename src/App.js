import './App.css';
import Game from './components/Game'
import Score from './components/Score'
import React, { useRef, useState } from 'react';

function App() {
  
  const [userHand, setUserHand] = useState(0);
  const [botHand, setBotHand] = useState(0);

  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const [animFlag, setAnimFlag] = useState(false);
  const game_screen = useRef();

  const genUserHand = (e) => {
	  setAnimFlag(!animFlag);
    setUserHand(parseInt(e.target.value));
    genBotHand();
  }

  const genBotHand = () => {
    const botNum = Math.floor(Math.random() * 3) + 1;
    setBotHand(botNum);
    setScore();
  }

  const setScore = () => {
    if (userHand !== botHand) {
        if ((userHand === 1 && botHand === 3) || (userHand === 2 && botHand === 1) || (userHand === 3 && botHand === 2)) {
            setUserScore(userScore + 1);
        } else {
            setBotScore(botScore + 1);
        }
    }
  }

  const start = (e) => {
    e.target.classList.add('animate__flipOutX');
    setTimeout(() => {
      e.target.style.display = "none";
      game_screen.current.classList.add('animate__zoomIn');
      game_screen.current.style.display = "flex";
    }, 1000);
    setUserHand();
  }

  return (
    <div className="App">
        <button onClick={start} className="start animate__animated">Start</button>
      <div ref={game_screen} className="main_screen animate__animated">
        <Score userScore={userScore} botScore={botScore}/>
        <Game animFlag={animFlag}/>

        <div>
            <button onClick={genUserHand} value="1">Rock</button>
            <button onClick={genUserHand} value="2">Paper</button>
            <button onClick={genUserHand} value="3">Scissor</button>
        </div>
      </div>
    </div>
  );
}

export default App;
