import React, { Component } from 'react';
import Search from './Search';
import getThis from './utils/key.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Search hello="hello from search" />
      </div>
    );
  }
}

export default App;
