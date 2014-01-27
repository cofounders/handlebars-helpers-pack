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
