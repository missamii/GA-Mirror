import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Remarkable from 'remarkable';


class Markdown extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

handleChange(event)
  this.state = {
    value:
    this.
  }

  render() {
    return (
      <div className="Markdown">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.rawMarkup()}
        />
      </div>
    );
  }
}

export default Markdown;
