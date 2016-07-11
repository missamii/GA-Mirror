var fs = require('fs');

var file = 'tiff.txt';

var tiffText = "Rawr!";

fs.writeFile(file, tiffText, function (err) {
  console.log("err:", err);
})

fs.stat(file,function(err, stats){
  if (err){
    console.log("ERROR!", err);
  }
  console.log("STATS: ", stats);
  console.log("FILE SIZE:", stats.size);
  console.log("IS THIS A SIMPLE FILE?", stats,isFile() );
  console.log("IS THIS A DIRT?", stats).isDirectory() );
});
