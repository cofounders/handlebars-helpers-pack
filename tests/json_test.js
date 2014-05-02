'use strict';

exports['URI component string escaping'] = {

  setUp: function (callback) {
    var handlebars = require('handlebars');
    var helper = require('../helpers/json');
    handlebars.registerHelper('json', helper);
    this.handlebars = handlebars;
    callback();
  },

  tearDown: function (callback) {
    callback();
  },

  'stringify': function (test) {
    var template = '{{{json data}}}',
      context = {
        data: {
          foo: 'bar',
          lol: [1, 2, 3]
        }
      },
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, JSON.stringify(context.data));
    test.done();
  },

  'whitespace': function (test) {
    var template = '{{{json data space=2}}}',
      context = {
        data: {
          foo: 'bar',
          lol: [1, 2, 3]
        }
      },
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, JSON.stringify(context.data, null, 2));
    test.done();
  }

};
