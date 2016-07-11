var cowsay = require('cowsay');
var sayings = require('./sayings.js');
var colors = require('colors');

var quote = sayings[Math.floor(Math.random() * sayings.length)];
console.log( colors.rainbow( cowsay.say ({
  text: quote,
  e: "^ ^",
  T: "U"
})
)); //end log
