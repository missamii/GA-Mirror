var fs = require('fs');

var file = 'cat.txt';

var catText = "ipsum dolor sit amet, present belly, scratch hand when stroked yet find empty spot in cupboard and sleep all day but destroy couch for why must they do that. Claws in your leg pelt around the house and up and down stairs chasing phantoms yet damn that dog or stare at ceiling light hack up furballs.";

fs.writeFile( file, catText, function( err ) {
  console.log("err: ", err);
});

fs.stat(file, function(err, stats){
  if (err) {
    console.log("ERROR!", err);
  }
  console.log("STATS: ", stats);
  console.log("FILE SIZE: ", stats.size);
  console.log( "IS THIS A SIMPLE FILE?", stats.isFile() );
  console.log("IS THIS A DIR?", stats.isDirectory() );
});
