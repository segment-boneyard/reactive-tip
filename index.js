var tip = require('tip');
var tips = [];

module.exports = function(reactive) {
  reactive.bind('tip', function(el, value){
    tip(el, {
      value: value,
      delay: -1
    });

    // Stops it from ever rendering another
    // tip on this element
    el.removeAttribute('tip');
  });
};