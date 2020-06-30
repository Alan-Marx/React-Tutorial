import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { calculateWinner } from "./helperFunctions";

// Function components present a simpler syntax over class components
// that only have a render() method

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

const Board = (props) => {
  const squareElements = Array.from(Array(9).keys()).map(n => {
    return (
      <Square 
        value={props.squares[n]}
        onClick={() => props.onClick(n)}
      />
    )
  })

  return (
    <div>
      <div className="board-row">
        {squareElements.slice(0, 3)}
      </div>
      <div className="board-row">
        {squareElements.slice(3, 6)}
      </div>
      <div className="board-row">
        {squareElements.slice(6)}
      </div> 
    </div>
  );
}


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      history: history.concat([{
        squares
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];

    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);