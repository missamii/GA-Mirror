import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Helper from './utils/helpers.js';


class Viewall extends Component {
constructor(){
  super()
  this.state = {
    results: []
  };
}
  onClick(e) {
    Helper.getMarvel()
      .then((value) => {
        this.setState({
          results: value
        });
      });
    console.log(this.state.results);
  }
  render() {
    return(
      <div className="Viewall">
        <button id="button" onClick={(event) => this.onClick(event)}>see all!</button>
      </div>
    )
  }
}
export default Viewall
