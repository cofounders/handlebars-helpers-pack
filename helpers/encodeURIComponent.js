(function (root, factory) {
  var dependencies = ['underscore', 'handlebars'];
  if (typeof define === 'function' && define.amd) {
    define(dependencies, factory);
  } else if (typeof exports === 'object') {
    module.exports = factory.apply(null, dependencies.map(require));
  } else {
    root.registerHelper = factory(root._, root.Handlebars);
  }
}(this, function (_, Handlebars) {
  return function (input) {
    var output = encodeURIComponent(input);
    return new Handlebars.SafeString(output);
  };
}));
