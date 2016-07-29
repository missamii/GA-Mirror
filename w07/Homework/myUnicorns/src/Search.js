import React, { Component } from 'react';
import getUnicorns from './utils/key.js';

class Search extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      searchText: "",
      response: []
    };
  }
  handleClick(event) {
    console.log(this);
    //this.setState({ searchText: event.target.value });
    getUnicorns()
    .then((res) => {
      this.setState({
        response: res.data
      });
      console.log(res.data);
    });
  }
  handleChange(event){
    console.log(event.target.value);
    this.setState({ searchText: event.target.value });
  }
  render(){
    const unicorns = this.state.response;
    const index = 0;
    return (
      <div>
        <h1>{this.props.unicorns}</h1>
        <input placeholder="search"
          onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>go</button>
        <h3>{this.state.searchText}</h3>
        <ol>
          {unicorns.map(function (unicorns) {
            return <li key={unicorns.tails}>{unicorns.dba}</li>
          })}
        </ol>
      </div>
    );
  }
}

export default Search;
