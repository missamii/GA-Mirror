import React, { Component } from 'react';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search unicorns="unicorns here" />
      </div>
    );
  }
}

export default App;
