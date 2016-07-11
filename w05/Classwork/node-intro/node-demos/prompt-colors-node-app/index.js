
// require our packages:
var prompt = require('prompt');
var fs = require('fs');
var colors = require('colors');

prompt.start();
// change the defaults:
prompt.message = 'Question'.rainbow;
prompt.delimiter = "><".green;
// create empty user object:
var user = {};
prompt.get( ['name', 'height', 'age', 'neighborhood'], function(error, result) {
  user.name = result.name; // add properties to our user object
  user.height = result.height;
  user.neighborhood = result.neighborhood;
  user.age = result.age;
  console.log("USER OBJECT:", user);
  console.log("YOU SAID YOUR NAME IS: ".cyan + result.name.rainbow);
});



// get info from user
prompt.get( ['username', 'email', 'fave_color'], function( err, result ) {
  console.log( 'input received!' );
  console.log('RESULT:', result);

  // take info, create new file
  var username = result.username;
  var email = result.email;
  var faveColor = result.fave_color;
  var text = username + ' | ' + email + ' | ' + faveColor;

  // write a new file:
  fs.writeFile('userInfo.txt', text, function(err, data) {
    console.log("file has been written.");
    fs.readFile('userInfo.txt', function(err, data) {
      if (err) {
        console.log("ERROR:", err);
      }
      console.log(data.toString());
    });
  });
});
