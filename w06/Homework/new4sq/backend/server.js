// taken and edited from marvel
// create json file in terminal
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

var LOCATION = "locations";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var url = 'mongodb://localhost:27017/locations'
mongodb.MongoClient.connect(process.env.MONGODB_URI || url, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = database;
  console.log("Database connection ready");

  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// app.get/post below
app.get('/', function(request, response) {
  response.json({"description":"Check-In"});
});

// app.get('/')
// app.post('/')
