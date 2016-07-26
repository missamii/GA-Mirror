var express = require('express');
var cors = require('cors');
// var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

// json
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to the database server
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/marvel';
mongodb.MongoClient.connect(process.env.MONGODB_URI || url, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = database;
  console.log("Database connection ready");
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App is running on port", port);
  });
});//end mongo client

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
