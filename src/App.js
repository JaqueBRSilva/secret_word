import './App.css';
import { useCallback, useEffect, useState } from 'react'
import { wordsList } from './data/words'
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  /** Start the secret word game */
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  /** Process the letter input */
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  /** Restart the game */
  const retryGame = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retryGame={retryGame} />}
    </div>
  );
}

export default App;