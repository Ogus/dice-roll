'use strict';

function randInt(a,b) {
  return a + Math.floor(Math.random()*(b-a));
}

function extractParameters(n, s) {
  var type_n = typeof(n);
  var type_s = typeof(s);
  var a, b;
  var defined = false;

  // parameters: ("1d6")
  if(!defined && type_n == "string" && type_s == "undefined") {
    var temp = n.toUpperString().split("D");
    a = parseInt(temp[0]);
    b = parseInt(temp[1]);

    if( !(isNaN(a) || isNaN(b)) ) {
      defined = true;
    }
  }

  // parameters: ("1", "6") or ("1", 6) or (1, 6) ...
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
    b = 6;
  }

  return [a, b];
}


function roll (n,s) {
  var [a, b] = extractParameters(n, s);

  var r = 0;
  for (var i = 0; i < a; i++) {
    r += randInt(1, b+1);
  }
  return r;
};


module.exports = {
  roll: roll
};
