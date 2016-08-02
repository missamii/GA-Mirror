import React, { Component } from 'react';
import './index.css';
import './cal.css';



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
        // console.log(currentValue);
      });
    }

  }

  setAdd() {
    this.setState({
      lastButton: '+',
      lastOperator: '+'
    });
  }

  setSub() {
    this.setState({
      lastButton: '-',
      lastOperator: '-'
    });
  }

  setMulti() {
    this.setState({
      lastButton: '*',
      lastOperator: '*'
    });
  }

  setDiv() {
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
      // console.log(performOperation);
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

    // Tiffany remember this: I can do this!
    // DOM elements vs React components
    // DOM elements have attributes, while React components have props
    return (
      <div className="Calculator">
        <input
          type="text"
          id="input"
          value={currentValue} />
        <div className="row">
          <button id="button" onClick={() => this.addDigit(7)}>7</button>
          <button id="button" onClick={() => this.addDigit(8)}>8</button>
          <button id="button" onClick={() => this.addDigit(9)}>9</button>
          <button id="button" onClick={() => this.setAdd()}>+</button>
        </div>
        <div className="row">
          <button id="button" onClick={() => this.addDigit(4)}>4</button>
          <button onClick={() => this.addDigit(5)}>5</button>
          <button onClick={() => this.addDigit(6)}>6</button>
          <button onClick={() => this.setSub()}>-</button>
        </div>
        <div className="row">
          <button onClick={() => this.addDigit(1)}>1</button>
          <button onClick={() => this.addDigit(2)}>2</button>
          <button onClick={() => this.addDigit(3)}>3</button>
          <button onClick={() => this.setMulti()}>x</button>
        </div>
        <div className="row">
          <button onClick={() => this.addDigit(0)}>0</button>
          <button onClick={() => this.calculate()}>=</button>
          <button onClick={() => this.setDiv()}>/</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
