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

app.get('/pippo', pippoHandler);
app.post('/pippo', pippoHandler);

var listenCallback = console.log.bind(console, 'listen to %d', PORT);
app.listen(PORT, listenCallback);
