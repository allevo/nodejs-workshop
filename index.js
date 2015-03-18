'use strict';

var PORT = 3000;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var async = require('async');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function pippoHandler(req, res) {
  console.log(req.url, req.query, req.body);

  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/myproject';

  async.waterfall([
      MongoClient.connect.bind(MongoClient, url),
      function(db, next) {
        next(null, db.collection('documents'));
      },
      function(collection, next) {
        collection.insert([
          {a : 1}, {a : 2}, {a : 3}
        ], next);
      },
      function(inserted, next) {
        console.log('inserted', inserted);
        next(inserted);
      }
    ], function(err, result) {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json(result);
    });
}

function authHeader(req, res, next) {
  console.log('auth middleware');
  console.log(req.headers);
  if (req.headers.no) {
    return res.json({res: 'Arg!'});
  }
  next();
}

app.get('/pippo', pippoHandler);
app.post('/pippo', authHeader, pippoHandler);

var listenCallback = console.log.bind(console, 'listen to %d', PORT);
app.listen(PORT, listenCallback);
