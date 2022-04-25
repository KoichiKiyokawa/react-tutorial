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

  const renderSquare = (i: number) => <Square value={squares[i]} />

  return (
    <div>
      <div className="status">{"status"}</div>
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
  )
}
