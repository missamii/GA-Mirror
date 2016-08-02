import React, { Component } from 'react';

class RestaurantComponent extends Component {

  constructor(props){
    super();
  }

  render() {

    //do data marshalling here:
    console.log(this.props.restaurants);
    return (
      <div>
        <h1>name</h1>
        <p></p>
      </div>
    );
  }
}

RestaurantComponent.defaultProps = {
  name: "loading..."
};

export default RestaurantComponent;
