import React, { Component } from "react";
import Calculator from "./components/Calculator";
import { preformCalculation } from "./helpers";

class App extends Component {
  state = {
    currentValue: "0", // Displayed on the screen; String
    lastKey: "",
    memory: 0,
    operation: "",
    prevValue: 0
  };

  addToValue = key => {
    const { currentValue, lastKey } = this.state;
    let newValue;

    if (
      (key == 0 && key == currentValue) || // No multiply leading zeros
      (currentValue == 0 && lastKey !== ".")
    ) {
      newValue = key;
    } else {
      newValue = currentValue + key;
    }

    this.setState({
      currentValue: newValue
    });
  };

  updateValue = key => {
    this.setState({
      currentValue: key,
      prevValue: Number(this.state.currentValue)
    });
  };

  operation = key => {
    this.setState({
      operation: key
    });
  };

  addDot = () => {
    const { currentValue } = this.state;
    // Check if the dot already present and if currentValue is not empty
    if (!currentValue.includes(".") && currentValue) {
      this.setState({
        currentValue: currentValue + "."
      });
    }
  };

  allClear = () => {
    this.setState({
      currentValue: "0",
      prevValue: 0,
      operation: ""
    });
  };

  addPlusMinus = () => {
    const { currentValue } = this.state;
    if (currentValue) {
      this.setState({
        currentValue: currentValue * -1
      });
    }
  };

  calcRoot = () => {
    const { currentValue } = this.state;
    if (currentValue) {
      this.setState({
        currentValue: Math.sqrt(this.state.currentValue)
      });
    }
  };

  calcPercentage = () => {
    const { currentValue, prevValue, operation } = this.state;
    if (currentValue && prevValue && operation) {
      this.setState({
        currentValue: (Number(currentValue) / prevValue) * 100
      });
    }
  };

  calculate = () => {
    const { currentValue, prevValue, operation } = this.state;
    if (currentValue && prevValue && operation) {
      this.setState({
        currentValue: preformCalculation(prevValue, currentValue, operation)
      });
    }
  };

  performLogic = key => {
    this.setState({
      lastKey: key
    });

    console.log("Pressed key: " + key);

    switch (key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (["+", "-", "*", "/"].includes(this.state.lastKey)) {
          this.updateValue(key);
          console.log("updateValue");
        } else {
          this.addToValue(key);
          console.log("addToValue");
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        this.operation(key);
        break;
      case "ac":
        this.allClear();
        break;
      case "±":
        this.addPlusMinus();
        break;
      case "√":
        this.calcRoot();
        break;
      case "mr":
        this.setState({
          currentValue: this.state.memory
        });
        break;
      case "mc":
        this.setState({
          memory: 0
        });
        break;
      case "m+":
        this.setState({
          memory: this.state.memory + Number(this.state.currentValue)
        });
        break;
      case "m-":
        this.setState({
          memory: this.state.memory - Number(this.state.currentValue)
        });
        break;
      case "%":
        this.calcPercentage();
        break;
      case ".":
        this.addDot();
        break;
      case "=":
        this.calculate();
        break;
      default:
        break;
    }
  };

  handleKeyboardPress = e => {
    let newKey;
    if (
      (e.key >= 0 && e.key < 10) ||
      ["-", "+", "/", "=", ".", "*", "%", "±", "Backspace", "Enter"].includes(
        e.key
      )
    ) {
      if (e.key === "Backspace") {
        newKey = "ac";
      } else if (e.key === "Enter") {
        newKey = "=";
      } else {
        newKey = e.key;
      }
      this.performLogic(newKey);
    }
  };

  handleButtonClick = e => {
    this.performLogic(e.target.value);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyboardPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyboardPress, false);
  }

  render() {
    return (
      <Calculator
        lastKey={this.state.lastKey}
        currentValue={this.state.currentValue}
        onButtonClick={this.handleButtonClick}
      />
    );
  }
}

export default App;
