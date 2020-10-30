import './App.css';
import Game from './components/Game'
import React, { useRef, useState } from 'react';

function App() {
  
  const [userHand, setUserHand] = useState(0);
  const [botHand, setBotHand] = useState(0);

  const [animFlag, setAnimFlag] = useState(false);
  const game_screen = useRef();

  const genUserHand = (e) => {
	  setAnimFlag(true);
    setUserHand(parseInt(e.target.value));
    genBotHand();
  }

  const genBotHand = () => {
    const botNum = Math.floor(Math.random() * 3) + 1;
    setBotHand(botNum);
  }

  const start = (e) => {
    e.target.classList.add('animate__flipOutX');
    setTimeout(() => {
      e.target.style.display = "none";
      game_screen.current.classList.add('animate__zoomIn');
      game_screen.current.style.display = 'flex';
    }, 1000);
  }

  return (
    <div className="App">
      <button onClick={start} className="start animate__animated">Start</button>
      <div ref={game_screen} className="main_screen animate__animated">
        <Game animFlag={animFlag} setAnimFlag={setAnimFlag} userHand={userHand} botHand={botHand}/>
        <div className="buttons">
          <button id="button" onClick={genUserHand} value="1" className="far fa-hand-rock"></button>
          <button id="button" onClick={genUserHand} value="2" className="far fa-hand-paper"></button>
          <button id="button" onClick={genUserHand} value="3" className="far fa-hand-peace"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
