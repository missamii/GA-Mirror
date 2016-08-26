import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {

    //* OMDB *//
    // const method = 'post';
    // const url = 'http://localhost:3000/omdb';
    // const dataObj = {title: 'titanic'};
    //
    // axios({
    //   method: method,
    //   url: url,
    //   data: dataObj
    // }).then(function (response) {
    //   console.log(response.data);
    // });

    //* MARVEL *//
    const method = 'post';
    const url = 'http://localhost:3000/marvel';
    const dataObj = {name: "wolverine"};

    axios({
      method: method,
      url: url,
      data: dataObj
    }).then(function (response) {
      console.log(response.data);
    });

  } // end componentDidMount

  render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
      </div>
    );
  }

}

export default App;
