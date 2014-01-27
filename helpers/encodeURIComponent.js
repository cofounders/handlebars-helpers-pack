(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'handlebars'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('underscore'), require('handlebars'));
  } else {
    root.Handlebars.registerHelper(
      'encodeURIComponent',
      factory(root._, root.Handlebars)
    );
  }
}(this, function (_, Handlebars) {
  return function (input) {
    var output = encodeURIComponent(input);
    return new Handlebars.SafeString(output);
  };
}));
