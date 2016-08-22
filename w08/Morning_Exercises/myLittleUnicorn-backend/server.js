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
<<<<<<< HEAD
const unicornsController = require('./controllers/UnicornsController.js');
=======
const unicornsController = require('./controllers/unicornsController.js');
>>>>>>> 0f8cf03c1e00878ad9a02f504283c2e06ef46958

/* let's add the ability ajax to our server from anywhere! */
app.use(cors());

/* extended:true = put it in an obj */
app.use(bodyParser.urlencoded({extended: true}));


/*** our backend routes: ***/


/* depending on the kind of request, fire the right callback */
app.use('/unicorns', unicornsController);

/* welcome page */
app.get('/', function(request, response){
  response.json({"description":"uNiCoRnS API"});
});
<<<<<<< HEAD
<<<<<<< HEAD


  /* get all was here */


/* add new */
app.post('/unicorns/new', function(request, response){
  // response.json({"description":"add new"});
  console.log("request.body", request.body);

  MongoClient.connect(mongoUrl, function (err, db) {
    var unicornsCollection = db.collection('unicorns');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Connection established to', mongoUrl);
      console.log('Adding new user...');

      /* Insert */
      var newUser = request.body;
      unicornsCollection.insert([newUser], function (err, result) {
        if (err) {
          console.log(err);
          response.json("error");
        } else {
          console.log('Inserted.');
          console.log('RESULT!!!!', result);
          console.log("end result");
          response.json(result);
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end insert
    } // end else
  }); // end mongo connect
}); // end add new

//find was HERE
    } // end else
  }); // end mongo connect

});

/* delete */
app.delete('/unicorns/:name', function(request, response) {
  // response.json({"description":"delete by name"});

  console.log("request.body:", request.body);
  console.log("request.params:", request.params);

  MongoClient.connect(mongoUrl, function (err, db) {
    var unicornsCollection = db.collection('unicorns');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Deleting by name... ');

      /* Delete */
      unicornsCollection.remove(request.params, function(err, numOfRemovedDocs) {
        console.log("numOfRemovedDocs:", numOfRemovedDocs);
        if(err) {
          console.log("error!", err);
        } else { // after deletion, retrieve list of all
          unicornsCollection.find().toArray(function (err, result) {
            if (err) {
              console.log("ERROR!", err);
              response.json("error");
            } else if (result.length) {
              console.log('Found:', result);
              response.json(result);
            } else { //
              console.log('No document(s) found with defined "find" criteria');
              response.json("none found");
            }
            db.close(function() {
              console.log( "database CLOSED");
            });
          }); // end find

        } // end else
      }); // end remove

    } // end else
  }); // end mongo connect

}); // end delete

/* update */
app.put('/unicorns/:name', function(request, response) {
  // response.json({"description":"update by name"});
  console.log("request.body", request.body);
  console.log("request.params:", request.params);

  var old = {name: request.body.name};
  var updateTo = {name: request.body.newName, tailColor: request.body.newTailColor}

  MongoClient.connect(mongoUrl, function (err, db) {
    var unicornsCollection = db.collection('unicorns');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Updating by name... ');

      /* Update */
      unicornsCollection.update(old,updateTo);

      // Wait a sec then fetch the modified doc
      setTimeout(function() {
        unicornsCollection.find(updateTo).toArray(function (err, result) {
          if (err) {
            console.log("ERROR!", err);
            response.json("error");
          } else if (result.length) {
            console.log('Found:', result);
            response.json(result);
          } else { //
            console.log('No document(s) found with defined "find" criteria');
            response.json("none found");
          }
          db.close(function() {
            console.log( "database CLOSED");
          }); // end db close
        }); // end find
      }, 1000);
    } // end else
  }); // end mongo connect
}); // end update

=======
>>>>>>> 0f8cf03c1e00878ad9a02f504283c2e06ef46958
=======


>>>>>>> de54e8252a85c6e4c517b1729529228f1a2378b7
/* tell our app where to listen */
app.listen(PORT, function(){
  console.log('listen to events on "port" ', PORT);
});
