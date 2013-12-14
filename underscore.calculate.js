// Underscore Calculate v0.0.3
// (c) 2013 MIT License

_.mixin({
  
  calculate: function(collection, method) {
    collection = _.select(collection, _.isNumber);
    if (collection.length) return method(collection);
  },

  sum: function(collection) {
    function add(a, b) { return a + b; }
    function sum(xs) { return _.reduce(xs, add); }
    return _.calculate(collection, sum);
  },
  
  average: function(collection) {
    function average(xs) { return _.sum(xs) / _.size(xs); }
    return _.calculate(collection, average);
  },
  
  maximum: function(collection) {
    return _.calculate(collection, _.max);
  },
  
  minimum: function(collection) {
    return _.calculate(collection, _.min);
  }
  
});
