// window.onload = function() {
  var jokeTeller = require('./badJokes.js');
  console.log(jokeTeller);
  var jokes = jokeTeller[Math.floor(Math.random() * jokeTeller.length)];
  console.log(jokes);
// };
