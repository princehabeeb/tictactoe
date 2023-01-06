import Board from "./Board";

const Game = () => {
 const handleClick = () => {

 };

  <div className="game">
     <div className="game-board">
       <Board Square={[...Array(9).fill(null)]} boardClick= {handleClick} />
     </div>
     <div className="game-info">
      {/* <p>Turns indicator</p> */}
      {/* <p>History moves</p> */}
     </div>
  </div>
};

export default Game