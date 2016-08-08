// 1st create your unicorns db
// backend: run `nodemon` to begin listening to localhost:3000
// the BE listens for requests from the FE (localhost:8080)
// don't forget to run your mongo server in a separate Terminal tab: `mongod`

var PORT = process.env.PORT || 3333;
var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();
const unicornsController = require('./controllers/unicornsController.js');

/* let's add the ability ajax to our server from anywhere! */
app.use(cors());

/* extended:true = put it in an obj */
app.use(bodyParser.urlencoded({extended: true}));

/*** our backend routes ***/
/* depending on the kind of request, fire the right callback */
app.use('/unicorns', unicornsController);

/* welcome page */
app.get('/', function(request, response){
  response.json({"description":"uNiCoRnS API"});
});
/* tell our app where to listen */
app.listen(PORT, function(){
  console.log('listen to events on "port" ', PORT);
});
