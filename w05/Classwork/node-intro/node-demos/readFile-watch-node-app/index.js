// require the 'fs' module:
var fs = require('fs');

fs.readFile('liza.txt', 'utf8', function(error, data) {
  console.log('ERROR:', error);
  console.log('DATA:', data);
});

fs.watch('liza.txt', {persistent: true}, function(event, filename) {
  console.log(event + " event occurred on: " + filename);
  console.log("this is where we'd write our callback code");
  console.log('====');
  }
);
