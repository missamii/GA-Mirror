var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = mongodb.MongoClient;

/* Connection url where your mongodb server is running. */
var mongoUrl = 'mongodb://localhost:27017/marvel_db';

/*** our backend routes ***/
/* depending on the kind of req, fire the right callback */

/* welcome page */
app.get('/', function(req, res){
  res.json({"description":"MARVEL API"});
});

/* get all */
app.get('/favorite', function(req, res){
  MongoClient.connect(mongoUrl, function (err, db) {
    var favoriteCollection = db.collection('favorite');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      /* Get all */
      favoriteCollection.find().toArray(function (err, result) {
        if (err) {
          console.log("ERROR!", err);
          res.json("error");
        } else if (result.length) {
          console.log('Found:', result);
          res.json(result);
        } else { //
          console.log('No document(s) found with defined "find" criteria');
          res.json("none found");
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end find

    } // end else
  }); // end mongo connect
}); // end get all

/* add new */
app.post('/favorite/new', function(req, res){
  // res.json({"description":"add new"});
  console.log("req.body", req.body);

  MongoClient.connect(mongoUrl, function (err, db) {
    var favoriteCollection = db.collection('favorite');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Connection established to', mongoUrl);
      console.log('Adding new user...');

      /* Insert */
      var newUser = req.body;
      favoriteCollection.insert([newUser], function (err, result) {
        if (err) {
          console.log(err);
          res.json("error");
        } else {
          console.log('Inserted.');
          console.log('RESULT!!!!', result);
          console.log("end result");
          res.json(result);
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end insert
    } // end else
  }); // end mongo connect
}); // end add new

/* find */
app.get('/favorite/:name', function(req, res){
  // res.json({"description":"find by name"});
  console.log("req.params: ", req.params);
  MongoClient.connect(mongoUrl, function (err, db) {
    var favoriteCollection = db.collection('favorite');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Finding by name... ');
      /* Get */
      favoriteCollection.find(req.params).toArray(function (err, result) {
        if (err) {
          console.log("ERROR!", err);
          res.json("error");
        } else if (result.length) {
          console.log('Found:', result);
          res.json(result);
        } else { //
          console.log('No document(s) found with defined "find" criteria');
          res.json("none found");
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end find
    } // end else
  }); // end mongo connect

});

/* delete */
app.delete('/character/:name', function(req, res) {
  // res.json({"description":"delete by name"});

  console.log("req.body:", req.body);
  console.log("req.params:", req.params);

  MongoClient.connect(mongoUrl, function (err, db) {
    var favoriteCollection = db.collection('delete favorite character');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Deleting by name... ');

      /* Delete */
      favoriteCollection.remove(req.params, function(err, numOfRemovedDocs) {
        console.log("numOfRemovedDocs:", numOfRemovedDocs);
        if(err) {
          console.log("error!", err);
        } else { // after deletion, retrieve list of all
          favoriteCollection.find().toArray(function (err, result) {
            if (err) {
              console.log("ERROR!", err);
              res.json("error");
            } else if (result.length) {
              console.log('Found:', result);
              res.json(result);
            } else { //
              console.log('No document(s) found with defined "find" criteria');
              res.json("none found");
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
app.put('/:name', function(req, res) {
  console.log("req.body", req.body);
  console.log("req.params:", req.params);

  var old = {name: req.body.name};
  var updateTo = {name: req.body.newName};

  MongoClient.connect(mongoUrl, function (err, db) {
    var favoriteCollection = db.collection('favorite');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Updating by name... ');

      /* Update */
      favoriteCollection.update(old,UpdateTo);

      setTimeout(function() {
        favoriteCollection.find(UpdateTo).toArray(function (err, result) {
          if (err) {
            console.log("ERROR!", err);
            res.json("error");
          } else if (result.length) {
            console.log('Found:', result);
            res.json(result);
          } else { //
            console.log('No document(s) found with defined "find" criteria');
            res.json("none found");
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
app.listen(3000, function(){
  console.log('listen to events on a "port".');
});
