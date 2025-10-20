import "./styles.css";
import { useState } from "react";

const waysToWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [next, setNext] = useState("X");

  const winnerPositions = getWinnerPositions(squares);
  const winner = winnerPositions ? (next === "X" ? "O" : "X") : null;
  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square !== "")
    ? "Draw"
    : `Next player: ${next}`;

  function handleClick(i) {
    const newSquares = [...squares];
    newSquares[i] = next;

    setSquares(newSquares);
    setNext(next === "X" ? "O" : "X");
  }

  function getWinnerPositions(squares) {
    const newWinnerPositions = [];
    waysToWin.forEach((way) => {
      const [a, b, c] = way;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        newWinnerPositions.push(...way);
      }
    });

    return newWinnerPositions.length ? newWinnerPositions : null;
  }

  function reset() {
    setSquares(Array(9).fill(""));
    setNext("X");
  }

  return (
    <div className="tic-container">
      {[...Array(3)].map((_, i) => (
        <div className="row" key={i}>
          {[...Array(3)].map((_, j) => {
            const position = i * 3 + j;
            const isWinner = winnerPositions?.includes(position);
            const isTaken = squares[position];
            const hasWinner = winner;
            return (
              <Square
                isWinner={isWinner}
                disabled={isTaken || hasWinner}
                content={squares[position]}
                onClick={() => handleClick(position)}
                key={position}
              />
            );
          })}
        </div>
      ))}

      <h3>{status}</h3>
      {status.includes("Winner") || status.includes("Draw") ? <button onClick={reset}>Play Again</button> : null}
    </div>
  );
}

function Square({ isWinner, disabled, content, onClick }) {
  return (
    <button disabled={disabled} className={"square" + (isWinner ? " winner" : "")} onClick={onClick}>
      {content}
    </button>
  );
}
