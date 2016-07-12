var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  console.log("get request");

});

app.post('/', function(req, res){
  console.log("post request");
  console.log(req.body);
  fs.writeFile('contacts.json', JSON.stringify(req.body), function(err, data){
    console.log("data writ");
  });
});


app.listen(3000, function(){
  console.log("express server started");
});
