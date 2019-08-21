import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 15
    };
  }

  render() {
    return (
      <div className={this.H2OState(this.state.temp)}>
        <h2>
          phase: {this.H2OState(this.state.temp)} : {this.state.temp} ℃
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }
  H2OState(temp) {
    if (temp <= 0) return "ice";
    if (100 <= temp) return "steam";
    return "water";
  }
  onPlusClick = () => {
    this.setState({ temp: this.state.temp + 1 });
  };
  onMinusClick = () => {
    this.setState({ temp: this.state.temp - 1 });
  };
  onPlus10Click = () => {
    this.setState({ temp: this.state.temp + 10 });
  };
  onMinus10Click = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<H2O />, rootElement);
