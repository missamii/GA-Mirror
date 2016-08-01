import axios from 'axios';

export default
{
  getRecipes: function() {
    return axios.get('https://mighty-stream-47210.herokuapp.com/api/v1/recipes');
  },
  getRecipe: function(title){
    return axios.get('https://mighty-stream-47210.herokuapp.com/api/v1/recipes/'+ title);
  },
  addRecipe: function(recipe){
    return axios.post('https://mighty-stream-47210.herokuapp.com/api/v1/recipes/new', {recipe})
  },
  deleteRecipe: function(recipe){
    return axios.delete('https://mighty-stream-47210.herokuapp.com/api/v1/recipes/'+ recipe)
  },
  updateRecipe: function(title, recipe){
  }
};
