var PORT = process.env.PORT || 3000;

var express     = require('express');
var cors        = require('cors');
var fs          = require('fs');
// var bodyParser  = require('');
var app         = express();

//middleware
app.use(cors()); //cors
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

//routers
app.get('/', function(req, res) {
  console.log('incoming GET req to root');
  });
// fs.readFile('s.json','utf8', function (err, data) {
//     });
    // if (err) {
    //   console.log("ERROR: ", err);   To far ahead, I really followed on with the Lesson on this one
    // }                                Will add an else statement for the ERROR

app.post('/', function (req, res) {
  console.log('the post request');
})


console.log("in app.js");



//start server
app.listen(PORT, function(err){
  if (err){
    console.log("error starting up server: ", err);
  }
  else {
    console.log("server is up and running on port", PORT);
  }
});
