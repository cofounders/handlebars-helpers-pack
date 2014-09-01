'use strict';

exports['date and time formatting'] = {

  setUp: function (callback) {
    var handlebars = require('handlebars');
    var helper = require('../helpers/date');
    handlebars.registerHelper('date', helper);
    this.handlebars = handlebars;
    callback();
  },

  tearDown: function (callback) {
    callback();
  },

  'date': function (test) {
    var template = '{{{date when}}}',
      context = {when: '1985-04-12'},
      html = this.handlebars.compile(template)(context).string;

    test.equals(html, 'Friday, April 12, 1985');
    test.done();
  }

};
