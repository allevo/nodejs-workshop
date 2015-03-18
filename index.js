'use strict';


var http = require('http');

var PORT = 3000;

var listenCallback = console.log.bind(console, 'listen to %d', PORT);

var server = http.createServer(function(req, res) {
  console.log('Request %s is coming', req.url);

  res.end('ok\n');
});
server.listen(PORT, listenCallback);
