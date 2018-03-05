var assert = require('assert');
var dice = require('../index');

describe('Dice', function() {

  describe('basic roll', function() {
    it('return a value in range [0,5]', function() {
      var r = dice.roll();
      assert.ok(false);
      assert.ok(r > 0, "Value below 1: "+String(r));
      assert.ok(r < 7, "Value above 6: "+String(r));
    });

    it('is an integer', function () {
      var r = dice.roll();
      assert.equal(r, Math.floor(r), "Not an integer: "+String(r));
    });
  });

  describe('parameters', function () {

    it("('NdS', undefined) working", function () {
      var r = dice.roll("10d6");
      assert.ok(r >= 10, "Value outside range: "+String(r));
      assert.ok(r <= 60, "Value outside range: "+String(r));

      r = dice.roll("5d20");
      assert.ok(r >= 5, "Value outside range: "+String(r));
      assert.ok(r <= 100, "Value outside range: "+String(r));

      for (var i = 0; i < 100; i++) {
        r = dice.roll("3d12");
        assert.ok(r >= 3, "Value outside range: "+String(r));
        assert.ok(r <= 36, "Value outside range: "+String(r));
      }
    });

    it("(N, undefined) working", function () {
      var r = dice.roll("10");
      assert.ok(r >= 10, "Value outside range: "+String(r));
      assert.ok(r <= 60, "Value outside range: "+String(r));

      r = dice.roll(5);
      assert.ok(r >= 5, "Value outside range: "+String(r));
      assert.ok(r <= 100, "Value outside range: "+String(r));

      r = dice.roll("wrong parameter");
      assert.ok(r >= 1, "Value outside range: "+String(r));
      assert.ok(r <= 6, "Value outside range: "+String(r));
    });

    it("(N, S) working", function () {
      var r = dice.roll("5", 100);
      assert.ok(r >= 5, "Value outside range: "+String(r));
      assert.ok(r <= 500, "Value outside range: "+String(r));

      r = dice.roll(2,12);
      assert.ok(r >= 2, "Value outside range: "+String(r));
      assert.ok(r <= 24, "Value outside range: "+String(r));

      r = dice.roll(4,"6");
      assert.ok(r >= 4, "Value outside range: "+String(r));
      assert.ok(r <= 24, "Value outside range: "+String(r));
    });
  });

  describe('roll distribution', function () {
    it('max is 6, min is 1, mean is ~3.5', function () {
      var r = 0;

      var mx = 0, mn = 0xffffffff, mean = 0;
      for (var i = 0; i < 1000; i++) {
        r = dice.roll();
        mx = Math.max(mx, r);
        mn = Math.min(mn, r);
        mean += r;
      }
      mean /= 1000;

      assert.ok(mn == 1, "Wrong min value: "+String(mn));
      assert.ok(mx == 6, "Wrong max value: "+String(mx));
      assert.ok((mean > 3 && mean < 4), "Wrong mean value: "+String(mean));
    });
  })

  describe('highest roll', function () {
    it('mean is higher than 5', function () {
      var r = 0;

      var mean = 0;
      for (var i = 0; i <= 1000; i++) {
        r = dice.highestRoll(100);
        mean += r;
      }
      mean /= 1000;

      assert.ok((mean > 5), "Wrong mean value: "+String(mean));
    });
  });

  describe('lowest roll', function () {
    it('mean is lower than 2', function () {
      var r = 0;

      var mx = 0, mn = 0xffffffff, mean = 0;
      for (var i = 0; i < 1000; i++) {
        r = dice.lowestRoll(100);
        mean += r;
      }
      mean /= 1000;

      assert.ok((mean <= 2), "Wrong mean value: "+String(mean));
    });
  })

});
