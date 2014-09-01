(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['handlebars'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('handlebars'));
  } else {
    root.Handlebars.registerHelper(
      'date',
      factory(root.Handlebars)
    );
  }
}(this, function (Handlebars) {
  return function (timestamp, options) {
    var output = new Date(timestamp)
      .toLocaleDateString(
        root.navigator && (
          root.navigator.languages ||
          root.navigator.language),
        options
      );
    return new Handlebars.SafeString(output);
  };
}));
