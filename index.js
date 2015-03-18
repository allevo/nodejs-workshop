'use strict';

var PORT = 3000;

var express = require('express');
var app = express();

function pippoHandler(req, res) {
  console.log(req.url, req.query, req.body);
  res.status(200).json({res: 'ok'});
}

app.get('/pippo', pippoHandler);
app.post('/pippo', pippoHandler);

var listenCallback = console.log.bind(console, 'listen to %d', PORT);
app.listen(PORT, listenCallback);
