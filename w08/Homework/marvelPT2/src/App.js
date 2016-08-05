import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import './App.css';

class App extends Component {


  render() {
    return (
      <div id="box" className="App">
        <ul role="nav">
          <h1>Marvel React</h1>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About.js">About</Link></li>
          <li><Link to="/Viewall.js">View All</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
