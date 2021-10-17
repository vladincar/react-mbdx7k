import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);

  const renderSquare = (i) => {
    return <Square value={square[i]} onClick={() => handleClick(i)} />;
  };
  const handleClick = (i) => {
    const squares = square.slice();

    //не кликает если выиграл или если клетка уже полная
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    xIsNext ? (squares[i] = 'X') : (squares[i] = 'O');
    setXIsNext(!xIsNext);
    setSquare(squares);

    //Я выиграл или следующий ход
    const winner = calculateWinner(squares);
    if (winner) {
      status = 'Выиграл ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
};

export default Board;
