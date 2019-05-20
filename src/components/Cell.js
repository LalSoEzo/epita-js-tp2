import React, { Component } from "react";

const cellStyle = {
  display: "block",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseOver: false
    };
  }

  render() {
    return (
        <div style={{...cellStyle,
          backgroundColor: this.props.content ? (this.props.content === "X" ? "#32908F" : "#966B9D") : (this.state.mouseOver ? "#EBCFB2" : "white")
        }}
             onMouseOver={() => this.setState({mouseOver: true})}
             onMouseOut={() => this.setState({mouseOver: false})}
             onClick={this.props.cellClicked}
        >
          {this.props.content}
        </div>
    );
  }
}

export default Cell;
