import React, { Component } from 'react';
import Recipes from './Recipes';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      newRecipe: {
        title: ''
      }
    };
    this.newRecipeTitleChange = this.newRecipeTitleChange.bind(this);
    this.handleNewRecipe = this.handleNewRecipe.bind(this);
  }

  // getRecipes(){
  //   const recipes = axios.get('https://mighty-stream-47210.herokuapp.com/api/v1/recipes');
  //   return recipes;
  // }

//post recipes
  newRecipe() {
    let recipe = {
      "title": "",
      "author": "",
        "difficulty": "",
        "time": 0,
        "ingredients": [ "", "", "", "", "" ],
      "instructions": ""
    };


    const recipes = axios.put("https://mighty-stream-47210.herokuapp.com/api/v1/recipes/" + recipe.title, recipe).catch((err) => {
      console.log('error', err);
    });
    return recipes;
  }
  handleNewRecipe(e) {
    this.newRecipe(this.state.newRecipe);
    e.preventDefault();
  }
  newRecipeTitleChange(e) {
    this.setState({
      newRecipe: {
        title: e.target.value
      }
    });
  }
  // render to the screen
  render() {
    return (
      <div className="App">
      <Recipes getRecipes={this.getRecipes}></Recipes>
    <form onSubmit={this.handleNewRecipe}>
      //title of recipe code
      <label>Title: </label>
        <input type="text" name="title" value="" placeholder="update recipe" /><br />

      //author of recipe code
      <label>Author: </label>
        <input placeholder="author" value=""></input><br />

      // difficulty of recipe code
      <label>Difficulty:</label>
       <input placeholder="difficulty" value=""></input><br />

      //code for length of time to do recipe
      <label>Time: </label>
        <input placeholder="time" value=""></input> <br />

      //ingredients code
      <label>Ingredients:</label>
       <textarea placeholder="insert , after each incredient" value=""></textarea><br />

      //description of recipe code
      <label>Description of Recipe:</label>
        <input type="text" name="description" value="" placeholder="update description" /><br />

      // instructions code
      <label>Instructions:</label>
        <textarea placeholder="instructions"></textarea> <br />

      //button code
      <button onClick={(event) => this.props.update(event, this.state)}>update</button>
        <input type="submit" value="Add Recipe" />
    </form>
      </div>
    );
  }
}

export default App;
