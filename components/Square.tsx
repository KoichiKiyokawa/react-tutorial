// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {this.props.value}
//       </button>
//     );
//   }
// }

export type SquareState = null | "O" | "X"

type Props = {
  value: SquareState
  onClick: () => void
}

export function Square({ value, onClick }: Props) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  )
}
