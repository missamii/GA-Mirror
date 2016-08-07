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
              {
                colors.map((img, i) => {
                  return <img alt="" src={img} key={i}></img>

                })
              }
         <br /> <br />
        <button id="button" onClick={(event) => this.getColors(event)}>Get Colors!</button>
        </div>
      </div>
    );
  }
}

export default App;
