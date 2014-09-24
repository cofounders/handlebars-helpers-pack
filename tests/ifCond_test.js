'use strict';

exports['logic for logicless templates'] = {

  setUp: function (callback) {
    var handlebars = require('handlebars');
    var helper = require('../helpers/ifCond');
    handlebars.registerHelper('ifCond', helper);
    this.handlebars = handlebars;
    callback();
  },

  tearDown: function (callback) {
    callback();
  },

  'strictEquals': function (test) {
    var template = '{{#ifCond foo "===" "123"}}Success!{{/ifCond}}',
      context = {foo: '123'},
      html = this.handlebars.compile(template)(context);

    test.equals(html, 'Success!');
    test.done();
  }

};
