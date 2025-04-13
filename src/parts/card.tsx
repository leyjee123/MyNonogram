import { useState } from "react";
import Board from "./board.tsx";

export default function Card() {
  const [count, setCount] = useState(false);
  const v = count ? 1 : 0;
  return (
    <div className="card">
      <button onClick={() => (count ? setCount(false) : setCount(true))}>
        Reset {v}
      </button>
      <Board squareVal={v} boardSize={3}/>
    </div>
  );
}
