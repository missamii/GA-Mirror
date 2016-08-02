import React, { Component } from 'react';
import RestaurantComponent from './RestaurantComponent';
import RestaurantSearch from './RestaurantSearch';
import getRestaurant from './util/helpers.js';
import { Router, Route, Link, BrowserHistory } from 'react-router'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      restaurantData: {},
      featuredName: ""
    };

  }

  componentDidMount(){
    //do all ajax here
    getRestaurant.byName(this.state.featuredName).then((json) => {
      this.setState({
        restaurantData: json
      });
    });

  }

  render() {
    return (
      <div className="App">
        <RestaurantSearch />
        <RestaurantComponent restaurants={this.state.restaurantData} />
      </div>
    );
  }
}

export default App;
