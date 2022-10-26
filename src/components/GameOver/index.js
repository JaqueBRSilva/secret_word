import './style.css';

const GameOver = ({ retryGame }) => {
   return (
      <div>
         <h1> GameOver </h1>
         <button onClick={retryGame}>Resetar jogo</button>
      </div>
   )
}

export default GameOver