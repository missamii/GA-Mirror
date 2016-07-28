var  React = require('react');

import Header from '../components/Header.jsx';
import Product from '../components/Product.jsx';
import Category from '../stylesheets/Category.js';
import recipes from '../data/data.js';


var App = React.createClass({
  render: function() {
    return (
        <div>
         <Header />
         <Category />
         <Product />
        </div>
      );
    }
 });

export default App
