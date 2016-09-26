import React, { Component } from 'react';
import axios from './utils/helpers.js';


class Search extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      searchText: "",
      response: [],
      err: ""
    };
    console.log("Where are the UNICORNS!");
  }

  //search for one unicorn
  handleSearchClick(event){
    axios.oneUnicorn(this.state.searchText)
    .then((res) => {
      this.setState({
        response: res.data
      });
      console.log(res.data);
    });
  }

  //search for all unicorns
  handleAllClick(event){
    event.preventDefault();
    axios.allUnicorns()
    .then((res) => {
      this.setState({
        response: res.data
      });
      console.log(res.data);
    });
  }

  //handle change
  handleChange(event){
    console.log(event.target.value);
    this.setState({
      searchText: event.target.value
    });
  }

  //render to page
  render(){
    const unicorns = this.state.response;
    return(
      <div>
        <h1>{this.props.children}</h1>
        <input placeholder="finding magical uni's..." onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleSearchClick.bind(this)}>Search</button>
        <button onClick={this.handleAllClick.bind(this)}>View All</button>

        <h3>{this.state.searchText}</h3>
        <ul>
          {unicorns.map(function(unicorn, index){
            return <li key={index}> Name:  {unicorn.name}, Tail:  {unicorn.tailColor}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Search
