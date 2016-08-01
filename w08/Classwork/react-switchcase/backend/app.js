// backend: run `nodemon app.js` to begin listening to localhost:8080
// FE will make requests to localhost:8080
// Resources: http://blog.modulus.io/mongodb-tutorial


var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

/* let's add the ability ajax to our server from anywhere! */
app.use(cors());
/* extended:true = put it in an obj */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// MongoClient lets us interface/connect to mongodb
var MongoClient = mongodb.MongoClient;
// Connection url where your mongodb server is running.
var mongoUrl = 'mongodb://localhost:27017/contacter_app';

/*** our backend routes ***/
/* depending on the kind of request, fire the right callback */

/* welcome page */
app.get('/', function(request, response){
  response.json({"description":"contactr api"});
});

/* get all contacts */
app.get('/contacts', function(request, response){
  MongoClient.connect(mongoUrl, function (err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      /* Get all */
      contactsCollection.find().toArray(function (err, result) {
        if (err) {
          console.log("ERROR!", err);
          response.json("error");
        } else if (result.length) {
          // console.log('Found:', result);
          response.json(result);
        } else { //
          console.log('No document(s) found with defined "find" criteria');
          response.json("no contacts found");
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end find

    } // end else
  }); // end mongo connect
}); // end get all

/* add new contact */
app.post('/contacts/new', function(request, response){
  // response.json({"description":"add new contact"});
  console.log("REQUEST.BODY", request.body);

  MongoClient.connect(mongoUrl, function (err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Connection established to', mongoUrl);
      console.log('Adding new user...');

      /* Insert */
      var newUser = request.body;
      contactsCollection.insert([newUser], function (err, result) {
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

/* find contact */
app.get('/contacts/:name', function(request, response){
  // response.json({"description":"find by name"});
  // console.log("request.params: ", request.params);
  MongoClient.connect(mongoUrl, function (err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Finding by name... ');
      var contactsCollection = db.collection('contacts');
      /* Get contact */
      contactsCollection.find(request.params).toArray(function (err, result) {
        if (err) {
          console.log("ERROR!", err);
          response.json("error");
        } else if (result.length) {
          console.log('Found:', result);
          response.json(result);
        } else { //
          console.log('No document(s) found with defined "find" criteria');
          response.json("no contacts found");
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end find
    } // end else
  }); // end mongo connect

});

/* delete contact */
app.delete('/contacts/:name', function(request, response) {
  // response.json({"description":"delete by name"});
  console.log("DELETING...");
  console.log("request.body:", request.body);
  console.log("request.params:", request.params);

  MongoClient.connect(mongoUrl, function (err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Deleting by name... ');

      /* Delete contact */
      contactsCollection.remove(request.params, function(err, numOfRemovedDocs) {
        console.log("numOfRemovedDocs:", numOfRemovedDocs);
        if(err) {
          console.log("error!", err);
        } else { // after delietion, retrieve list of all contacts
          contactsCollection.find().toArray(function (err, result) {
            if (err) {
              console.log("ERROR!", err);
              response.json("error");
            } else if (result.length) {
              console.log('Found:', result);
              response.json(result);
            } else { //
              console.log('No document(s) found with defined "find" criteria');
              response.json("no contacts found");
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

/* update contact */
app.put('/contacts/:name', function(request, response) {
  // response.json({"description":"update by name"});
  console.log("request.body", request.body);

  var old = {name: request.body.name};
  var updateTo = {name: request.body.newName, email: request.body.newEmail}

  MongoClient.connect(mongoUrl, function (err, db) {
    var contactsCollection = db.collection('contacts');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Updating by name... ');

      /* Update contact */
      contactsCollection.update(old,updateTo);

      // Wait a sec then fetch the modified doc
      setTimeout(function() {
        contactsCollection.find(updateTo).toArray(function (err, result) {
          if (err) {
            console.log("ERROR!", err);
            response.json("error");
          } else if (result.length) {
            console.log('Found:', result);
            response.json(result);
          } else { //
            console.log('No document(s) found with defined "find" criteria');
            response.json("no contacts found");
          }
          db.close(function() {
            console.log( "database CLOSED");
          }); // end db close
        }); // end find
      }, 1000);
    } // end else
  }); // end mongo connect
}); // end update

/* tell our app where to listen */
app.listen(8080, function(){
  console.log('listen to events on a "port".')
});
