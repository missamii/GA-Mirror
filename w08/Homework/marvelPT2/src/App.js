import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import './App.css';


class App extends Component {

  render() {
    return (
        <div id="box" className="App">
          <ul role="nav">
              <h3>Marvel React</h3>
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
