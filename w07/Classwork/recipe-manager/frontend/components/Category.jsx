import React from 'react';
import Recipe from './Recipe.jsx';

export default React.createClass({
  render: function() {
    var recipes = this.props.recipes.map((r,index) => {
      var ingredients = r.ingredients.map((ingredient, i) => {
        return <li key={i}>{ingredient}</li>
      });
      return (
        <Recipe key={index} r={r} ingreds={ingredients}/>
      );
    });

    return (
      <div className="category" id={this.props.category}>
        <h2>{this.props.category}</h2>
        {recipes}
      </div>
    );
  }
});
