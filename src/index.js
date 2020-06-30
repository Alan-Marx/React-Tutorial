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

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      squares, 
      xIsNext: !this.state.xIsNext,
    });
  }
  
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    const squareElements = Array.from(Array(9).keys()).map(n => {
      return (
        <Square 
          value={this.state.squares[n]}
          onClick={() => this.handleClick(n)}
        />
      )
    })

    return (
      <div>
        <div className="status">{status}</div>
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
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history = [{
        squares = Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
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