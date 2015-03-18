'use strict';

var PORT = 3000;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function pippoHandler(req, res) {
  console.log(req.url, req.query, req.body);
  res.status(200).json({res: 'ok'});
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
