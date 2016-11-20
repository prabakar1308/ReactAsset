const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PUT, PATCH');

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
    console.log(req);
  db.collection('EmployeeList').save(req.body, (err, result) => {
    if (err) return console.log(err)
    else
        res.json({ message: 'Data Added Successfully!' });

    console.log('saved to database')
//    res.redirect('/')
  })
});

app.post('/delete', (req, res) => {
     console.log('Delete');
    console.log(req);
  db.collection('EmployeeList').remove({id: req.body[0]},(err, result) => {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});

app.post('/update', (req, res) => {
     console.log('Save');
    console.log(req);
  db.collection('EmployeeList').update({id: req.body.id}, 
                                       {$set: {name : req.body.name,level:req.body.level}},(err, result) => {
  if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully saved' });
});
});

 app.get('/getYorbitDetails', (req, res) => {
    console.log('get Method');
  var cursor = db.collection('EmployeeList').aggregate([{
    $lookup: {
            from: "EmployeeYorbit",
            localField: "id",
            foreignField: "id",
            as: "yorbit_details"
        }
}]).toArray(function (err, items) {
      console.log(items);
                res.json(items);
            });
     console.log('cursor  === ' +cursor);
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