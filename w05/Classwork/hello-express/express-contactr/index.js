var express = require('express');
var cors = require('cors');
var bp = require('body-parser');
var fs = require('fs');
var app = express();

app.use(cors());
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.get('/', function(req, res){
  console.log("this is get request");
  fs.readFile('contacts.json', function(err, data){
    var contacts = JSON.parse(data);
    res.send(contacts);
  });
});

app.post('/', function(req, res){
  console.log("this is a post request");
  console.log(req.body);
  fs.readFile('contacts.json', function(err, data){
    var currentContacts = JSON.parse(data);
    currentContacts.push(req.body);
    console.log("this is the thing: "+ currentContacts)
    fs.writeFile('contacts.json', JSON.stringify(currentContacts), function(err, data){
      console.log("data has been written");
      res.send({contacts: currentContacts});
    });
  });
});


app.listen(3000, function(){
  console.log('server is running on port 3000');
});
