(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'handlebars'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('underscore'), require('handlebars'));
  } else {
    root.Handlebars.registerHelper(
      'json',
      factory(root._, root.Handlebars)
    );
  }
}(this, function (_, Handlebars) {
  return function (value, options) {
    var hash = options.hash || {};
    var output = JSON.stringify(value, hash.replacer, hash.space);
    return new Handlebars.SafeString(output);
  };
}));
