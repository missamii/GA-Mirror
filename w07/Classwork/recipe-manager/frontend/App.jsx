var React = require('react');
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AppStyles from './stylesheets/App.js';
import RecipesDisplay from './RecipesDisplay.jsx';
import recipes from './data/recipes.js';

var App = React.createClass({
  render: function() {
    return (
      <div style={AppStyles}>
        <Header />
        <RecipesDisplay recipes={recipes} cohort="WDI-ROBOTS"/>
        <Footer />
      </div>
    );
  }
});

export default App
