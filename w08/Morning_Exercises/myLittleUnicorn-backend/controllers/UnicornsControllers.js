const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoUrl = process.env.MONGODB_URI ||
'mongodb://localhost:27017/unicorns_db';
// ALL PATHS IN THIS FILE - YOU SHOULD TAKE '/UNICORNS'
// AS  BEING UNDERSTOOD TO  BE ALREADY THERE

/* get all */
router.get('/', (request, response) => {
  MongoClient.connect(mongoUrl, (err, db) => {
    const unicornsCollection = db.collection('unicorns');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
/* Get all */
unicornsCollection.find().toArray((err, result) => {
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
router.get('/unicorns/:name', (request, response) => {
  // response.json({"description":"find by name"});
  // console.log("request.params: ", request.params);
  MongoClient.connect(mongoUrl, (err, db) => {
    const unicornsCollection = db.collection('unicorns');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      // We are connected!
      console.log('Finding by name... ');
      /* Get */
      unicornsCollection.find(request.params).toArray((err, result) => {
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
      /* add new */
      app.post('/unicorns/new', (request, response) => {
        // response.json({"description":"add new"});
        console.log("request.body", request.body);

        MongoClient.connect(mongoUrl, (err, db) => {
          const unicornsCollection = db.collection('unicorns');
          if (err) {
            console.log('Unable to connect to the mongoDB server. ERROR:', err);
          } else {
            // We are connected!
            console.log('Connection established to', mongoUrl);
            console.log('Adding new user...');
          }); // end add new

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
                  } // end else
                }); // end remove

              } // end else

          }); // end delete

module.exports = router;
