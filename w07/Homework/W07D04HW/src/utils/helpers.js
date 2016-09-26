import axios from 'axios';

export default {
  allUnicorns: function(){
    return axios.get('https://obscure-shelf-66446.herokuapp.com/unicorns');
  },

  oneUnicorn: function(name){
    return axios.get('https://obscure-shelf-66446.herokuapp.com/unicorns/' + name);
  }
};
