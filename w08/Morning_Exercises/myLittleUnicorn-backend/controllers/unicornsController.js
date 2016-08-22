
const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/unicorns_db';


// ALL PATHS IN THIS FILE: YOU SHOULD TAKE '/UNICORNS' AS BEING UNDERSTOOD TO BE ALREADY THERE


/* get all */
router.get('/', (request, response) => {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      /* Get all */
      const unicornsCollection = db.collection('unicorns');
      unicornsCollection.find().toArray(function (err, result) {
        if (err) {
          console.log("ERROR!", err);
          response.json("error");
        } else if (result.length) {
          console.log('Found:', result);
          response.json(result);
        } else { //
          console.log('No document(s) found with defined "find" criteria');
          response.json("no unicorns found");
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end find
    } // end else
  }); // end mongo connect
}); // end get all

/* find */
router.get('/:name', function(request, response){
  // response.json({"description":"find by name"});
  // console.log("request.params: ", request.params);
  MongoClient.connect(mongoUrl, function (err, db) {
    const unicornsCollection = db.collection('unicorns');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Finding by name... ');
      /* Get */
      unicornsCollection.find(request.params).toArray(function (err, result) {
        if (err) {
          console.log("ERROR!", err);
          response.json("error");
        } else if (result.length) {
          console.log('Found:', result);
          response.json(result);
        } else { //
          console.log('No document(s) found with defined "find" criteria');
          response.json("no unicorns found");
        }
        db.close(function() {
          console.log( "database CLOSED");
        });
      }); // end find
    } // end else
  }); // end mongo connect
});

/* add new */
router.post('/new', function(request, response){
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

/* delete */
router.delete('/:name', function(request, response) {
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
router.put('/:name', function(request, response) {
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





module.exports = router;
