import React, { Component } from 'react';


class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {recipes: [], list: "loading..."};
  }

  componentDidMount() {
    let self = this;
    this.props.getRecipes().then( function(recipes) {
      console.log(recipes);
      let list = self.createRecipes(recipes.data);
      self.setState({recipes: recipes.data, list: list})
      console.log(list);
      console.log(recipes.data);
    } ).catch((err) => {
      console.log(err);
    });
  }

  createRecipes(recipes) {
    let list = [];
    for (let i = 0; i < recipes.length; i++) {
      let recipe = recipes[i];
      list.push(<li key={i}>
        <h1>{recipe.title}</h1>
        <p>{recipe.instructions}</p>
        </li>
      )

    }
    return list
  }

  render() {
    return (
      <div className="Recipes">
      <ul>
      {this.state.list}
      </ul>
      </div>
    );
  }
}

export default Recipes;
