(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['handlebars'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('handlebars'));
  } else {
    root.Handlebars.registerHelper(
      'ifCond',
      factory(root.Handlebars)
    );
  }
}(this, function (Handlebars) {
  return function (v1, operator, v2, options) {
    var predicate;
    switch (operator) {
      case '==':
        predicate = v1 == v2; break;
      case '===':
        predicate = v1 === v2; break;
      case '<':
        predicate = v1 < v2; break;
      case '<=':
        predicate = v1 <= v2; break;
      case '>':
        predicate = v1 > v2; break;
      case '>=':
        predicate = v1 >= v2; break;
      case '&&':
        predicate = v1 && v2; break;
      case '||':
        predicate = v1 || v2; break;
      default:
        predicate = false;
    }
    return predicate ? options.fn(this) : options.inverse(this);
  };
}));
