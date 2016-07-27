import React from 'react';
import Recipe from './Recipe.jsx';

var RecipesDisplay = React.createClass({
  render: function() {
    // var mainCourses = this.props.recipes.filter(function(item) {
    //   return item.category === "main courses";
    // });
    //
    // var desserts = this.props.recipes.filter((recipe, index) => recipe.category === "desserts");
    //
    // function filterMyArray(arr, callback) {
    //   var result = [];
    //   for (var i = 0; i < arr.length; i++) {
    //     if (callback(arr[i])) {
    //       result.push(arr[i]);
    //     }
    //   }
    //   return result;
    // }
    //
    // var desserts = filterMyArray(this.props.recipes, function(recipe) {
    //   return recipe.category === "desserts";
    // });
    var recipes = this.props.recipes.map(function(r, index) {
      var ingredients = r.ingredients.map(function(ingredient, i) {
        return <li key={i}>{ingredient}</li>
      });
      return (
        <Recipe key={index} r={r} ingreds={ingredients}/>
      );
    });

    return (
      <div>{recipes}</div>
    );
  }
});

export default RecipesDisplay
