import React, { Component } from 'react';
import './index.css';


class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0,
      previousValue: 0
    };
  }

  addDigit(digit) {
    const {
      currentValue = 0,
      previousValue,
      lastButton,
      lastOperator
    } = this.state;

    if (/[\+\-\*\/]/.test(lastButton)) {
      this.setState({
        lastButton: digit,
        previousValue: currentValue,
        currentValue: digit // calculatedValue + digit
      });
    } else {
      this.setState({
        // lastOperator: null,
        lastButton: digit,
        currentValue: parseFloat(`${currentValue}${digit}`) // calculatedValue + digit
      });
    }

  }

  setOperatorAddition() {
    this.setState({
      lastButton: '+',
      lastOperator: '+'
    });
  }

  setOperatorSubtraction() {
    this.setState({
      lastButton: '-',
      lastOperator: '-'
    });
  }

  setOperatorMultiplication() {
    this.setState({
      lastButton: '*',
      lastOperator: '*'
    });
  }

  setOperatorDivision() {
    this.setState({
      lastButton: '/',
      lastOperator: '/'
    });
  }

  calculate() {
    const {
      previousValue = 0,
      currentValue = 0,
      lastOperator,
      lastButton
    } = this.state;
    const performOperation = (a, b) => {
      if (lastOperator === '+') {
        return a + b;
      } else if (lastOperator === '-') {
        return a - b;
      } else if (lastOperator === '*') {
        return a * b;
      } else if (lastOperator === '/') {
        return b ? a / b : 'Not a number';
      }
    };

    if (lastButton !== '=') {
      this.setState({
        lastButton: '=',
        currentValue: performOperation(previousValue, currentValue),
        previousValue: currentValue
      });
    } else {
      this.setState({
        lastButton: '=',
        currentValue: performOperation(currentValue, previousValue)
      });
    }
  }

  render() {
    const {
      currentValue
    } = this.state;

    // DOM elements vs React components
    // DOM elements have attributes, while React components have props
    return (
      <div className="Calculator">
        <input
          type="text"
          value={currentValue} />
        <div className="row">
          <button onClick={() => this.addDigit(7)}>7</button>
          <button onClick={() => this.addDigit(8)}>8</button>
          <button onClick={() => this.addDigit(9)}>9</button>
          <button onClick={() => this.setOperatorAddition()}>+</button>
        </div>
        <div className="row">
          <button onClick={() => this.addDigit(4)}>4</button>
          <button onClick={() => this.addDigit(5)}>5</button>
          <button onClick={() => this.addDigit(6)}>6</button>
          <button onClick={() => this.setOperatorSubtraction()}>-</button>
        </div>
        <div className="row">
          <button onClick={() => this.addDigit(1)}>1</button>
          <button onClick={() => this.addDigit(2)}>2</button>
          <button onClick={() => this.addDigit(3)}>3</button>
          <button onClick={() => this.setOperatorMultiplication()}>x</button>
        </div>
        <div className="row">
          <button onClick={() => this.addDigit(0)}>0</button>
          <button onClick={() => this.calculate()}>=</button>
          <button onClick={() => this.setOperatorDivision()}>/</button>
        </div>

      </div>
    );
    // <Button text="recall" clickHandler={this._showMemoryBank} />
  }
}

export default Calculator;
