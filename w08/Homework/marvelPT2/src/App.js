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
          <li><Link id="link" to="/">Home</Link></li>
          <li><Link id="link" to="/About">About</Link></li>
          <li><Link id="link" to="/Viewall">View All</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
