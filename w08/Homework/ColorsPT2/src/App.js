import React, { Component } from 'react';
import Helper from './utils/Helpers.js';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      results: []
    };
  }
  /* the event for colors api */
  getColors(event) {
    console.log(this);
    getColors()
    .then((res) => {
      this.setState({
        response: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="App">
        <div id="color-container">
          <h1>Colors YAY!</h1>
          <ol>
          {/* return colors here, will need to append the new ES6 way. */}
          </ol>
         <br /> <br />
        <button id="button" onClick={(event) => this.getColors(event)}>Get Colors!</button>
        </div>
      </div>
    );
  }
}

export default App;
