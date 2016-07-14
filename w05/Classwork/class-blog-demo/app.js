// variable declarations
var express    = require('express'),
    cors       = require('cors'),
    bodyParser = require('body-parser'),
    fs         = require('fs'),
    PORT       = process.env.PORT || 3000,
    morgan     = require('morgan'),
    app        = express();

//middleware
app.use(cors()); //cors
app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
app.get('/', function(req, res) {
    console.log('incoming GET request to root');
    fs.readFile('posts.json', 'utf8', function(err, data) {
      if (err) {
        console.log('error reading posts.json', err);
      } else {
        console.log(data);
        res.send(data);
      }
    });
});

app.post('/', function(req, res) {
  console.log('incoming POST req to root');
  var newPost = req.body;
  fs.readFile('posts.json', 'utf8', function(err, data) {
    if (err) {
      console.log('error reading posts.json', err);
    } else {
      console.log(data);
      data = JSON.parse(data);
      data.push(newPost);
      var newData = JSON.stringify(data);
      fs.writeFile('posts.json', newData, function(err, data) {
        res.send(newData);
      });
    }
  });
});

// start server
app.listen(PORT, function(err) {
  if (err) {
    console.log('error starting up server', err);
  } else {
    console.log('server up and running on port', PORT);
  }
});
