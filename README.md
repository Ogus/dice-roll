# Mini Dice

A *mini* tool to generate random number based on dice roll :game_die:

[![Build Status](https://travis-ci.org/ogus/mini-dice.svg?branch=master)](https://travis-ci.org/ogus/mini-dice)


## Installation

Install it with **npm**, or use the `index.js` file in your project.

*This tool require Node.js 4.2.4 or higher, and has no dependencies*


## Usage

This module give access to a static class `Dice`, whith 3 basic methods

 + `roll` will compute the total dice roll
 + `maxRoll` will compute the maximum among all dice roll
 + `minRoll` will compute the minimum among all dice roll


## Examples

```js
var Dice = require('mini-dice');

// Roll the dice !
var random = Dice.roll();  

 // Roll two 12-sided dice
var damage = Dice.roll("2d12");
// Roll three small dice (6-sided)
var escape = Dice.roll(3);
// Roll five 20-sided dice
var count = Dice.roll([5, 20]);
// Roll a hundred dice with 43 sides
var wtf = Dice.roll(100, 43);


// Find the minimum roll
var minScore = Dice.minRoll('4d10');
// Find the maximum roll
var criticalStrike = Dice.maxRoll('3D20') > 18;
```

## Acceptable Input

#### String

 `roll("NdS")` will roll *N* dice with *S* sides.

#### Array

`roll([N, S])` will roll *N* dice with *S* sides.

#### Two Number / String

`roll(N, S)` will roll *N* dice with *S* sides.

#### One Number / String

`roll(N)` will roll *N* dice with *6* sides.

#### Notes

 + Input parameters should parsable as Integer
 + String separator can be either "D" or "d"


## Tests

You can run the tests on this module (with Mocha) by using `npm test`


## License

This project is licensed under the WTFPL - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

This tool was used to test the creation of a simple node module, and continuous integration with Travis. Since it is used by some people, it will stay here for a while.
