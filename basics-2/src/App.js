import Validation from "./Validation";
import Char from "./Char";
import "./App.css";
import { React, Component } from "react";

class App extends Component {
  state = {
    inputValue: "",
  };

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onDeleteChar = (index) => {
    const text = this.state.inputValue.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ inputValue: updatedText });
  };
  render() {
    const CharList = this.state.inputValue.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.onDeleteChar(index)}
        />
      );
    });
    return (
      <div className="App">
        <input onChange={this.onInputChange} value={this.state.inputValue} />
        <Validation validateText={this.state.inputValue} />
        {CharList}
      </div>
    );
  }
}

export default App;
