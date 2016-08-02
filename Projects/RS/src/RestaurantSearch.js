import React, { Component } from 'react';

class RestaurantSearch extends Component {
  constructor(){
    super();
    this.state = {
      text: ""
    };
  }

  onChangeText(e){
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    });
  }

  onClick(e){
    console.log("click");
    // route goes here, i think
  }

  render(){
    return(
      <div>
        <h1>restaurant search</h1>
        <input type="text" onChange={(e) => this.onChangeText(e)} value={this.state.text} />
        <button onClick={(e) => this.onClick(e)}>go</button>
      </div>
    );
  }
}

export default RestaurantSearch;
