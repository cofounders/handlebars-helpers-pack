'use strict';

exports['currency formatting'] = {

  setUp: function (callback) {
    var handlebars = require('handlebars');
    var helper = require('../helpers/currency');
    handlebars.registerHelper('$', helper);
    this.handlebars = handlebars;
    callback();
  },

  tearDown: function (callback) {
    callback();
  },

  'empty': function (test) {
    var template = '{{{$ amount }}}',
      context = {amount: undefined},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '');
    test.done();
  },

  'default': function (test) {
    var template = '{{{$ amount}}}',
      context = {amount: 123.45},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '$123.45');
    test.done();
  },

  'decimal': function (test) {
    var template = '{{{$ amount decimal=","}}}',
      context = {amount: 123.45},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '$123,45');
    test.done();
  },

  'trim precision': function (test) {
    var template = '{{{$ amount precision="3"}}}',
      context = {amount: 123.456789},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '$123.456');
    test.done();
  },

  'pad precision': function (test) {
    var template = '{{{$ amount precision="2"}}}',
      context = {amount: 123.4},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '$123.40');
    test.done();
  },

  'zero precision': function (test) {
    var template = '{{{$ amount precision="0"}}}',
      context = {amount: 123.4},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '$123');
    test.done();
  },

  'symbol': function (test) {
    var template = '{{{$ amount symbol="€"}}}',
      context = {amount: 123},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '€123.00');
    test.done();
  },

  'thousand': function (test) {
    var template = '{{{$ amount thousand="_"}}}',
      context = {amount: 1234567890},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '$1_234_567_890.00');
    test.done();
  },

  'zero': function (test) {
    var template = '{{{$ amount}}}',
      context = {amount: 0},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, '$0.00');
    test.done();
  }

};
