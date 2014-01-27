(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'handlebars'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('underscore'), require('handlebars'));
  } else {
    root.Handlebars.registerHelper(
      '$',
      factory(root._, root.Handlebars)
    );
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

    var before = Math.floor(amount).toString();
    var split = before.replace(/\B(?=(\d{3})+(?!\d))/g, hash.thousand);
    var toFixed = Number.prototype.toFixed;
    var after = toFixed.call(amount, hash.precision).split('.')[1];

    var output = hash.precision > 0 ?
      hash.symbol + split + hash.decimal + after :
      hash.symbol + split;

    return new Handlebars.SafeString(output);
  };
}));
