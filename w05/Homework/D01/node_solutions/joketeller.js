var badJokes = require('./badjokes.js');
var joke = badJokes[Math.floor(Math.random() * badJokes.length)];

console.log(joke);
