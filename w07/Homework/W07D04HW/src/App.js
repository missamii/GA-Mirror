import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Search>THE UNICORN FINDER!</Search>
      </div>
    );
  }
}

export default App;
