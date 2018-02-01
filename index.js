'use strict';

function randInt(a,b) {
  return a + Math.floor(Math.random()*(b-a));
}

function DiceGenerator() {
  this.DEFAULT_N = 1;
  this.DEFAULT_DICE = 6;
}

DiceGenerator.prototype.roll = function () {
  var n = this.DEFAULT_N;
  var m = this.DEFAULT_DICE;

  var r = 0;
  for (var i = 0; i < n; i++) {
    r += randInt(0, m);
  }
  return r;
};


module.exports = DiceGenerator;
