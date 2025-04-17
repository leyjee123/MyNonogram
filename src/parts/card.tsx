import { useState } from "react";
import Board from "./board.tsx";

export default function Card() {
  const [tileLock, setTileLock] = useState(false); //tile lock true: red, false: black
  const [size, setSize] = useState(6); //boardsize state

  const v = tileLock ? 2 : 1;
  const locked = v == 2 ? "yes" : "no";

  return (
    <>
      <label>
        Select Board Size:
        <select
          name="selectedSize"
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
        >
          <option value="3">3x3</option>
          <option value="4">4x4</option>
          <option value="5">5x5</option>
          <option value="6">6x6</option>
          <option value="7">7x7</option>
        </select>
      </label>
      <div>
        <button
          onClick={() => (tileLock ? setTileLock(false) : setTileLock(true))}
        >
          Lock square {locked}
        </button>
      </div>
      <div className="card">
        <Board squareVal={v} boardSize={size} />
      </div>
    </>
  );
}
