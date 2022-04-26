// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square value={i} />;
//   }
// }

import { useState } from "react"
import { Square, SquareState } from "./Square"

type Props = {}

export const Board: React.FC = () => {
  const [squares, setSquares] = useState<SquareState[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = () => {
    console.log("handleClick")
  }

  return (
    <div>
      <div className="status">{"status"}</div>
      <div className="board">
        {squares.map((square, i) => (
          // keyにindexを使う
          <Square key={i} value={square} onClick={handleClick} />
        ))}
      </div>
    </div>
  )
}
