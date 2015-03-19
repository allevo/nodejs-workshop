'use strict';

var assert = require('assert');
var request = require('request');

var app = require('../index');
var PORT = 3001;

function startServer(done) {
  this.server = app.listen(PORT, done);
}
function stopServer() {
  this.server.close();
}
function getBaseUrl() {
  return 'http://localhost:' + PORT;
}

describe('test', function () {
  describe('GET 200', function() {
    before(startServer);
    before(function(done) {
      var self = this;
      request.get(getBaseUrl() + '/pippo', function(err, response) {
        self.response = response;
        done(err);
      });
    });
    after(stopServer);

    it('should return 200', function() {
      assert.equal(200, this.response.statusCode);
    });

    it('should return 3 object', function() {
      var body = JSON.parse(this.response.body);
      assert.equal(Array, body.constructor);
      assert.equal(3, body.length);
      for(var i=0; i < 3; i++) {
        assert.equal(i+1, body[i].a);
        assert.ok(body[i]._id);
      }
    });
  });
});
