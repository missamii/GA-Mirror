prompt.get(['quote1', 'quote2'], function (err, result) {
  console.log(result);

  /* result object looks like this: */
  // var result = {
  //   quote1: 'liza',
  //   quote2: 'ramo'
  // }

  console.log('Input received:');
  console.log(' ---> quote1: ' + result.quote1);
  console.log(' ---> quote2: ' + result.quote2);

  // Write the quotes to a new file:
  var quotesText = '';
  for (var key in result) {
    console.log("key:", key);
    console.log("value:", result[key]);
    quotesText += result[key];
    quotesText += ' | ';
  }
  console.log("quotesText:", quotesText);

  fs.writeFile('quotes.txt', quotesText,  function(err) {
    // read newly created file:
    fs.readFile('quotes.txt', function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("reading the file:", data.toString());
    }); // end readFile

  }); // end writeFile

  // wise cow say:
  var quotesArr = [];
  for (var key in result) {
    console.log("key:", key);
    console.log("value:", result[key]);
    quotesArr.push(result[key]);
  }
  console.log(quotesArr);

  var selectedQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
  console.log(colors.rainbow(cowsay.think({
      text: selectedQuote,
      e: "oo",
      T: "U"
    })
  )); // end cowsay fxn

}); // end get fxn
