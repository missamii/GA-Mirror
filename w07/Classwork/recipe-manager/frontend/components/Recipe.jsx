import React from 'react';

var Recipe = React.createClass({
  render: function() {
    return (
      <div className="recipe">
        <h3>{this.props.r.title}</h3>
        <h4>by {this.props.r.author}</h4>
        <ul>
          {this.props.ingreds}
        </ul>
        <p>{this.props.r.instructions}</p>
        <button>Favorite This Recipe</button>
      </div>
    );
  }
});

export default Recipe
