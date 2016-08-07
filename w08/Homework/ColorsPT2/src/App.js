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
  /* the event button for colors api */
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
      <div id="box" className="App">
        <div id="color-container">
          <h1>Colors YAY!</h1>
         <br /> <br /><br /> <br />
         <p>
           Color display palette will go here
         </p>
        </div>
        <button id="button" onClick={(event) => this.getColors(event)}>Get Colors!</button>
      </div>
    );
  }
}

export default App;
