import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Markdown.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Markdown />
      </div>
    );
  }
}

export default App;
