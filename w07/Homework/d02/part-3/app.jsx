var React = require('react');
import Container from './Container.jsx';
import products from './Products.js';

var App = React.createClass({
  render: function(){
    return(
      <Container products={products}/>
    );
  }
});



export default App
