'use strict';

var glob = require('glob');
var path = require('path');
var requirejs = require('requirejs');

requirejs.config({
  baseUrl: __dirname + '/..'
});

console.log(__dirname + '/..');

exports['AMD compatibility'] = {

  'load all helpers as AMD': function (test) {
    glob('../helpers/*.js', {
      cwd: __dirname
    }, function (err, matches) {
      test.expect(matches.length);
      var locations = matches.map(function (match) {
        var location = 'helpers/' + path.basename(match, '.js');
        return location;
      });
      requirejs(locations, function () {
        Array.prototype.slice.call(arguments).forEach(function (helper) {
          test.equal(typeof helper, 'function');
        });
        test.done();
      });
    });
  }

};
