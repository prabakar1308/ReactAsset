const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var db;

MongoClient.connect('mongodb://employee:employee@ds015774.mlab.com:15774/employee-info', (err, database) => {
  if (err) return console.log(err)
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000')
  });  
 
    
});

 app.get('/', (req, res) => {
    console.log('get Method');
  var cursor = db.collection('EmployeeList').find({}, {_id:0}).toArray(function (err, items) {
      console.log(items);
                res.json(items);
            });
     console.log('cursor  === ' +cursor);
});

app.post('/insert', (req, res) => {
     console.log('Insert');
    console.log(req.body.name);
  db.collection('EmployeeList').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
//    res.redirect('/')
  })
});

/* app.listen(3000, function() {
  console.log('listening on 3000')
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the path to your current working directory. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});

app.post('/quotes', (req, res) => {
  console.log(req.body)
}); */