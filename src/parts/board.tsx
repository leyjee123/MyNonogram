import { useState } from "react";

interface squareProps {
  v: number;
}

function Square({ v }: squareProps) {
  const [squareVal, setSquareVal] = useState(0);
  const squareClass = `square ${
    squareVal == 1 ? "clicked" : squareVal == 2 ? "flagged" : ""
  }`;
  const handleClick = () => {
    if (squareVal != 0) {
      setSquareVal(0);
    } else {
      setSquareVal(v);
    }
    logThis()
  };
  function logThis() {
    console.log(`${squareVal} ${squareClass}`); //for tracing
  }
  return <button className={squareClass} onClick={handleClick}></button>;
}

interface boardProps {
  squareVal: number;
  boardSize: number;
}
export default function Board({ squareVal, boardSize }: boardProps) {
  //   const [squareValues, setSquareValues] = useState<number[]>(
  //     createEmptyGrid(boardSize)
  //   );

  const rows: React.ReactNode[] = [];

  for (let row = 0; row < boardSize; row++) {
    const cols: React.ReactNode[] = [];

    for (let col = 0; col < boardSize; col++) {
      const index = row * boardSize + col;
      cols.push(<Square key={index} v={squareVal} />);
    }

    rows.push(
      <div key={row} className="board-row">
        {cols}
      </div>
    );
  }
  return <>{rows}</>;
}
