import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));

  const renderSquare = (i) => {
    return <Square value={square[i]} onClick={() => handleClick(i)} />;
  };
  const handleClick = (i) => {
    const squares = square.slice();
    squares[i] = 'X';
    setSquare(squares);
  };

  const status = 'Next player: X';

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
};

export default Board;
