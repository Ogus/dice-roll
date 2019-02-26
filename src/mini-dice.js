(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Dice = factory();
  }
}(this, function () {
  'use strict';

  const DEFAULT_NUMBER = 1;
  const DEFAULT_SIZE = 6;

  function random(size) {
    return 1 + Math.floor(Math.random() * size);
  }

  /**
   * Get the result pf a dice roll
   * @param number - The number of dice, or a string with the number and size if dices
   * @param size - The size of each dice (optionnal)
   */
  function roll(number, size) {
    var params = extractParameters(number, size);
    var result = 0;
    for (var i = 0; i <params.number; i++) {
      result += random(params.size);
    }
    return result;
  }

  /**
   * Get the highest roll
   */
  function maxRoll(number, size) {
    var params = extractParameters(number, size);
    var result = 0;
    for (var i = 0; i < params.number; i++) {
      result = Math.max(result, random(params.size));
    }
    return result;
  }

  /**
   * Get the lowest roll
   */
  function minRoll(number, size) {
    var params = extractParameters(number, size);
    var result = params.size;
    for (var i = 0; i < params.number; i++) {
      result = Math.min(result, random(params.size));
    }
    return result;
  }

  function extractParameters(n, s) {
    var params = {
      number: DEFAULT_NUMBER,
      size: DEFAULT_SIZE
    };
    var a = null, b = null;

    // n == "2" or n == "2d20"
    if (typeof(n) == 'string') {
      a = n.toUpperCase().split("D");
      b = parseInt(a[0]);
      if (!isNaN(b)) {
        params.number = b;
      }
      b = parseInt(a[1]);
      if (!isNaN(b)) {
        params.size = b;
      }
    }
    // n == 2
    else if (typeof(n) == 'number') {
      a = parseInt(n);
      if (!isNaN(a)) {
        params.number = a;
      }
    }
    // n == [2, 20]
    else if (Array.isArray(n)) {
      a = parseInt(n[0]);
      if (!isNaN(a)) {
        params.number = a;
      }
      a = parseInt(n[1]);
      if (!isNaN(a)) {
        params.size = a;
      }
    }
    // s == "20" or s == "20"
    if (typeof(s) == 'string' || typeof(s) == 'number') {
      a = parseInt(s);
      if (!isNaN(a)) {
        params.size = a;
      }
    }
    return params;
  }

  var Dice = {
    roll: roll,
    maxRoll: maxRoll,
    minRoll: minRoll,
    random: random
  };

  return Dice;
}));
