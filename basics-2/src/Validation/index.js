import { Component, React } from "react";

class Validation extends Component {
  render() {
    let validatedText = "Text Too Short";
    if (this.props.validateText.length > 5) {
      validatedText = "Text Too Long";
    }
    return (
      <div>
        <p>{validatedText}</p>
      </div>
    );
  }
}

export default Validation;
