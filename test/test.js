var assert = require('assert');
var dice = require('../index');

describe('Dice', function() {

  describe('basic roll', function() {
    it('should return a value in range [0,5]', function() {
      var r = dice.roll();
      assert.ok(r > 0, "Value below 1: "+String(r) );
      assert.ok(r < 7, "Value above 6: "+String(r) );
    });
  });

});
