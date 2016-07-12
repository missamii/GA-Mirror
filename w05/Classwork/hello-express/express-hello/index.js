var express = require('express');
var app = express();

app.get('/', function(req, res){
  var instructors = { instructors: ['syed', 'liza', 'ethan'] }
  res.send(instructors);
});

app.listen(3000, function(){
  console.log('server is running');
});
