var Q = require('q');
var S = require('s');

Q.longStackSupport = true;

var q = {
  catch: function( fn ) { fn.catch = true; return fn; },
  done:  function( fn ) { fn.done = true; return fn; },
  all:   function( list ) { return Q.all( list ); },
};

exports = module.exports = q;
