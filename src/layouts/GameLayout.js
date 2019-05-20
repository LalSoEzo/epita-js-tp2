import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "Player 1"
    };
  }

  checkWin = (player) => {
    let win = false;
    let symbol = player === "Player 1" ? "X" : "O";

    for (let i = 0; i < this.state.cells.length / 3; i++){
      let line = 0;
      for (let j = 0; j < this.state.cells.length / 3; j++)
        if (this.state.cells[3 * i + j] && this.state.cells[3 * i + j] === symbol)
          line += 1;

      let col = 0;
      for (let j = 0; j < this.state.cells.length / 3; j++)
        if (this.state.cells[i + 3 * j] && this.state.cells[i + 3 * j] === symbol)
          col += 1;

      if (line === 3 || col === 3){
        win = true;
        alert("WIN " + player);
        return;
      }
    }
  };

  handleCellClicked = (index) => {
    let NState = this.state;
    let symbol = (this.state.currentPlayer === "Player 1" ? "X" : "O");

    if (!NState.cells[index]){
      NState.cells[index] = symbol;
      NState.currentPlayer = (this.state.currentPlayer === "Player 1" ? "Player 2" : "Player 1");
      this.setState(NState, () => this.checkWin((this.state.currentPlayer === "Player 1" ? "Player 2" : "Player 1")));
    }
  };

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {
    return (
        <div
            style={gameLayoutStyle}
        >
          <GameInfo currentPlayer={this.state.currentPlayer} />
          <Board cells={this.state.cells} onCellClicked={this.handleCellClicked}/>
        </div>
    );
  }
}

export default GameLayout;
