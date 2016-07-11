window.onload = function() {
  // console.log('not very funny at all');
  // var cowsay = require('cowsay');
  var jokeTeller = require('./jokeTeller.js');

  var jokes = jokeTeller[Math.floor(Math.random() * jokeTeller.length)];
  

};
