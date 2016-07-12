var colors = require('colors');
var prompt = require('prompt');
var cowsay = require('cowsay');
var fs = require('fs');

// 1- get quotes from user:
prompt.get( ['quote1', 'quote2', 'quote3'], function(err, result) {
  console.log("RESULT:", result);

  // 2- loop over result obj
  var quotesText = '';
  for (var key in result) {
    console.log("KEY:", key);
    console.log("VALUE: ", result[key]);
    quotesText += result[key];
    quotesText += ' | ';
  }
  console.log(quotesText);

  // 3- write to 'quotes.txt'
  fs.writeFile('quotes.txt', quotesText, function(err) {
    console.log('done writing new file.');
  });

  // 4- loop & store in quotes array
  var quotesArr = [];
  for (var key in result) {
    quotesArr.push(result[key]);
  }
  console.log("quotesArr: ", quotesArr);

  // 5- Cowsay!
  var selectedQuote = quotesArr[Math.floor(Math.random() * quotesArr.length )];
  console.log( colors.rainbow(cowsay.think({
    text: selectedQuote,
    e: 'oo',
    T: "U"
  })
));



}); // end prompt.get
