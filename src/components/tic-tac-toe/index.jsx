import "./styles.css";
import { useState, useEffect } from "react";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [currentSymbol, setCurrentSymbol] = useState("X");
  const [winnerPositions, setWinnerPositions] = useState([]);

  const waysToWin = [
    { id: 0, name: "firstRow", positions: [0, 1, 2], available: true },
    { id: 1, name: "secondRow", positions: [3, 4, 5], available: true },
    { id: 2, name: "thirdRow", positions: [6, 7, 8], available: true },
    { id: 3, name: "firstColumn", positions: [0, 3, 6], available: true },
    { id: 4, name: "secondColumn", positions: [1, 4, 7], available: true },
    { id: 5, name: "thirdColumn", positions: [2, 5, 8], available: true },
    { id: 6, name: "slash", positions: [2, 4, 6], available: true },
    { id: 7, name: "backslash", positions: [0, 4, 8], available: true },
  ];

  function getOpponentSymbol(currentSymbol) {
    return currentSymbol === "X" ? "O" : "X";
  }

  function handleClick(i) {
    if (squares[i]) return;
    const newSquares = [...squares];
    newSquares[i] = currentSymbol;
    checkWinner(i, newSquares);
    setSquares(newSquares);
    setCurrentSymbol(getOpponentSymbol(currentSymbol));
  }

  function checkWinner(i, newSquares) {
    const opponentSymbol = getOpponentSymbol(currentSymbol);
    const availableWaysToWin = waysToWin.filter((way) => way.positions.indexOf(i) > -1 && way.available);
    const winnerPosition = [];
    availableWaysToWin.forEach((way) => {
      const actualSqaures = way.positions.map((position) => newSquares[position]);
      console.log(way);
      console.log(actualSqaures);
      if (actualSqaures.indexOf(opponentSymbol) === -1 && actualSqaures.indexOf("") === -1) {
        winnerPosition.push(...way.positions);
        console.log(winnerPosition);
      }
    });

    setWinnerPositions([...new Set(winnerPosition)]);
  }

  return (
    <div className="tic-container">
      <div className="row">
        <Square won={winnerPositions.indexOf(0) > -1} content={squares[0]} onClick={() => handleClick(0)} />
        <Square won={winnerPositions.indexOf(1) > -1} content={squares[1]} onClick={() => handleClick(1)} />
        <Square won={winnerPositions.indexOf(2) > -1} content={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square won={winnerPositions.indexOf(3) > -1} content={squares[3]} onClick={() => handleClick(3)} />
        <Square won={winnerPositions.indexOf(4) > -1} content={squares[4]} onClick={() => handleClick(4)} />
        <Square won={winnerPositions.indexOf(5) > -1} content={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square won={winnerPositions.indexOf(6) > -1} content={squares[6]} onClick={() => handleClick(6)} />
        <Square won={winnerPositions.indexOf(7) > -1} content={squares[7]} onClick={() => handleClick(7)} />
        <Square won={winnerPositions.indexOf(8) > -1} content={squares[8]} onClick={() => handleClick(8)} />
      </div>

      {winnerPositions.length > 0 ? (
        <h3>{`Winner: ${getOpponentSymbol(currentSymbol)}`}</h3>
      ) : (
        <h3>{`Current move: ${currentSymbol}`}</h3>
      )}
    </div>
  );
}

function Square({ won, content, onClick }) {
  return (
    <button className={"square" + (won ? " won" : "")} onClick={onClick}>
      {content}
    </button>
  );
}
