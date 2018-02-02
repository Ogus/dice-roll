'use strict';

var DEFAULT_VALUE = 6;

function random(a,b) {
  return a + Math.floor(Math.random()*(b+1-a));
}

function extractParameters(n, s) {
  var type_n = typeof(n);
  var type_s = typeof(s);
  var a = undefined, b = undefined;
  var defined = false;

  if(!defined && (type_n == "string" || type_n == "number") && type_s == "undefined") {
    // parameters: ("2d6")
    var temp = String(n).toUpperString().split("D");
    if(temp.lengh == 2) {
      a = parseInt(temp[0]);
      b = parseInt(temp[1]);

      if( !(isNaN(a) || isNaN(b)) ) {
        defined = true;
      }
    }

    // parameters: ("2") or (2)
    else {
      a = parseInt(n);
      if(!isNaN(a)) {
        b = DEFAULT_VALUE;
        defined = true;
      }
    }
  }

  // parameters: ("2", "6") or ("2", 6) or (2, "6") or (2, 6)
  if(!defined && (type_n == "string" || type_n == "number") && (type_s == "string" || type_s == "number")) {
    a = parseInt(n);
    b = parseInt(s);

    if( !(isNaN(a) || isNaN(b)) ) {
      defined = true;
    }
  }

  // set to default
  if(!defined) {
    a = 1;
    b = DEFAULT_VALUE;
  }

  return [a, b];
}


function roll (n, s) {
  var a, b, r = 0;

  [a, b] = extractParameters(n, s);
  for (var i = 0; i < a; i++) {
    r += random(1, b);
  }
  return r;
}

function highestRoll (n, s) {
  var a, b, r = 0;

  [a, b] = extractParameters(n, s);
  for (var i = 0; i < a; i++) {
    r = Math.max(r, random(1, b));
  }
  return r;
}

function lowestRoll (n, s) {
  var a, b, r = 0xffffffff;

  [a, b] = extractParameters(n, s);
  for (var i = 0; i < a; i++) {
    r = Math.min(r, random(1, b));
  }
  return r;
}


module.exports = {
  roll: roll,
  lowestRoll: lowestRoll,
  highestRoll: highestRoll,
  random: random
};
