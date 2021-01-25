import { React, Component } from "react";

class Char extends Component {
  render() {
    const charStyle = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
    };
    return (
      <span style={charStyle} onClick={this.props.clicked}>
        {this.props.character}
      </span>
    );
  }
}

export default Char;
