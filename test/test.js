var assert = require('assert');
var dice = require('../index');

describe('Dice', function() {

  describe('basic roll', function() {
    it('return a value in range [0,5]', function() {
      var r = dice.roll();
      assert.ok(r > 0, "Value below 1: "+String(r));
      assert.ok(r < 7, "Value above 6: "+String(r));
    });

    it('is an integer', function () {
      var r = dice.roll();
      assert.equal(r, Math.floor(r), "Not an integer: "+String(r));
    });
  });

});
