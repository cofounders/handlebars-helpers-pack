'use strict';

exports['URI component string escaping'] = {

  setUp: function (callback) {
    var handlebars = require('handlebars');
    var helper = require('../helpers/encodeURIComponent');
    handlebars.registerHelper('encodeURIComponent', helper);
    this.handlebars = handlebars;
    callback();
  },

  tearDown: function (callback) {
    callback();
  },

  'whitespace': function (test) {
    var template = '{{{encodeURIComponent name }}}',
      context = {name: 'Bruce Wayne'},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, 'Bruce%20Wayne');
    test.done();
  }

};
