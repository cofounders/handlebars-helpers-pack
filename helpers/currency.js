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
  return function (amount, options) {
    if (isNaN(amount)) {
      return new Handlebars.SafeString('');
    }

    var hash = _.extend({
      decimal: '.',
      precision: 2,
      symbol: '$',
      thousand: ','
    }, options.hash);

    var significand = amount * Math.pow(10, hash.precision);
    var digits = amount === 0 ?
      new Array(1 + hash.precision).join('0') :
      parseInt(significand, 10).toString();
    var until = digits.length - hash.precision;
    var before = digits.substr(0, until) || '0';
    var split = before.replace(/\B(?=(\d{3})+(?!\d))/g, hash.thousand);
    var after = digits.substr(-1 * hash.precision);

    var output = hash.precision > 0 ?
      hash.symbol + split + hash.decimal + after :
      hash.symbol + split;

    return new Handlebars.SafeString(output);
  };
}));
