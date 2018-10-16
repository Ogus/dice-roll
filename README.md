Mini Dice
=========
[![Build Status](https://travis-ci.org/ogus/mini-dice.svg?branch=master)](https://travis-ci.org/ogus/mini-dice)

A mini tool to generate random dice roll :game_die:



## Installation

Install it with **npm**, or import the `index.js` file in your project.

>This tool require Node.js 4.2.4 or more.


## Usage

This module give access to a static class `Dice`.

By default, the rolled dice is a *single 6-sided die*

```js
var Dice = require('mini-dice');

var random = Dice.roll();  // Roll the dice !

var damage = Dice.roll("2d12");  // Roll two 12-sided dice
var escape = Dice.roll(3);  // Roll three small dice (6-sided)
var count = Dice.roll([5, 20]);  // Roll five 20-sided dice
var wtf = Dice.roll(100, 43);  // Roll a hundred dice with 43 sides

var critical = Dice.maxRoll('3D20') > 18;  // Find the maximum roll
var min = Dice.minRoll('4d10');  // Find the minimum roll
```

The list of acceptable input is as follow:

 +  A `String` with the format `NdS` will roll *N* dice with *S* sides (separator can be 'D' or 'd')

 Example: `roll("2d12")`

 + An Array with the format `[N, S]` will roll *N* dice with *S* sides

 Example: `roll([4, 8])`

 + Two arguments with the format `N, S` will roll *N* dice with *S* sides

 Example: `roll(3, 12)`

 +  A single argument with the format `N` will roll *N* dice with *6* sides

 Example: `roll("5")`

>All input need to be parsable as Integer to be valid

---

You can run the tests on this module (with Mocha) by using `npm test`


## License

This project is licensed under the WTFPL - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

This tool was used to test the creation of simple node module, and continuous integration with Travis
