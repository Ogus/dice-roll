var assert = require('assert');
var Dice = require('../index');

var dice;

describe('Dice', function() {

  beforeEach(function () {
    dice = new Dice();
  })

  describe('basic roll', function() {
    it('should return a value in range [0,5]', function() {
      var r = dice.roll();
      assert.ok(r >= 0, "Value below 0: "+String(r) );
      assert.ok(r <= 5, "Value above 5: "+String(r) );
    });
  });

});
