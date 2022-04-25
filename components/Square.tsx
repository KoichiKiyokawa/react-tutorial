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
}

export function Square(props: Props) {
  const [value, setValue] = useState<Props["value"]>(null)

  return (
    <button onClick={() => setValue("X")} className="square">
      {value}
    </button>
  )
}
