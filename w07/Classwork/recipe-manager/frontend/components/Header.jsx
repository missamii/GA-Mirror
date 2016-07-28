var React = require('react');
import HeaderStyles from '../stylesheets/Header.js';

var Header = React.createClass({
  render: function() {
    return (
      <header style={HeaderStyles}>
        <h1>Robotic Recipes</h1>
        <h3>by WDI-Robots!</h3>
      </header>
    );
  }
});

export default Header
