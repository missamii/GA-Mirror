var express = require('express');
var cors = require('cors');
var app = express();
var fs = require('fs');

app.use(cors());

var contacts;
app.get('/', function(req, res){
  fs.readFile('contacts.json', function(err, data){
    contacts = JSON.parse(data);
    res.send(contacts);
  });
});

app.listen(3000, function(){
  console.log('our express server');
});
