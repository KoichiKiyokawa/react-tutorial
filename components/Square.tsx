// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {this.props.value}
//       </button>
//     );
//   }
// }

import { useState } from "react"

export type SquareState = null | "O" | "X"

type Props = {
  value: SquareState
  onClick: () => void
}

export function Square({ onClick }: Props) {
  const [value, setValue] = useState<Props["value"]>(null)

  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  )
}
