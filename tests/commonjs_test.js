'use strict';

var glob = require('glob');

exports['CommonJS compatibility'] = {

  'load all helpers with Node require': function (test) {
    glob('../helpers/*.js', {
      cwd: __dirname
    }, function (err, matches) {
      test.expect(matches.length);
      matches.forEach(function (match) {
        var helper = require(match);
        test.equal(typeof helper, 'function');
      });
      test.done();
    });
  }

};
