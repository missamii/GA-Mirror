var fs = require ('fs')

fs.readFile('lorem.txt','utf8', function (error, data) {
  console.log('HERE IS MY WONDERFUL TEXT:');
})

fs.watch('lorem.txt', {
  persistant: true
},
  function (event, filename) {
    console.log(event + "event occured on:" + filename);
    console.log("this is where we'd write our callback code");
    console.log('===');
  }
);

fs.stat(file,function(err, stats){
  if (err){
    console.log("ERROR!", err);
  }
  console.log("STATS: ", stats);
  console.log("FILE SIZE:", stats.size);
  console.log("IS THIS A SIMPLE FILE?", stats,isFile() );
  console.log("IS THIS A DIRT?", stats).isDirectory() );
});
