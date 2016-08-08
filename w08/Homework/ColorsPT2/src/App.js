import React, { Component } from 'react';
// import Helpers from './utils/Helpers.js';
import fetchJsonp from 'fetch-jsonp';
import './App.css';

window.fj = fetchJsonp;

class App extends Component {
  constructor(){
    super()
    this.state = {
      colors: [],
      results: [],
      listyle: []
    };
  }
  /* the event button for colors api */
  getColors(event) {
    event.preventDefault();

    this.setState({
      isFetching: true
    });

    // fetch('http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=callback', {
    fetchJsonp('http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=callback', {
      jsonpCallbackFunction: 'callback'
    }).then(response => response.json()).then((response) => {
      console.log('response:', response);
      this.setState({
        isFetching: false,
        colors: response[0].colors
      });
    }).catch(error => {
      this.setState({
        isFetching: false
      });
    });
    // console.log(this);
    // Helpers()
    // .then((res) => {
    //   this.setState({
    //     response: res.data
    //   });
    //   console.log(res.data);
    // });
  }

  render() {
    const {
      colors,
      isFetching
    } = this.state;

    return (
      <div id="box" className="App">
        <h1>Colors YAY!</h1>
        <div id="color-container">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{
                backgroundColor: `#${color}`
              }} />
          ))}
        </div>
        <button
          id="button"
          disabled={isFetching}
          onClick={(event) => this.getColors(event)}>
          Get Colors!
        </button>
      </div>
    );
  }
}

export default App;
