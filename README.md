# Mini Dice

A *mini* tool to generate random number based on dice roll :game_die:

[![Build Status](https://travis-ci.org/ogus/mini-dice.svg?branch=master)](https://travis-ci.org/ogus/mini-dice)


## Usage

```js
var Dice = require('mini-dice');

// Roll the dice !
var random = Dice.roll();  

 // Roll two 12-sided dice
var damage = Dice.roll("2d12");
// Roll five 20-sided dice
var ennemies = Dice.roll([5, 20]);

// Find the minimum roll
var minScore = Dice.minRoll('4d10');
// Find the maximum roll
var criticalStrike = Dice.maxRoll(3, 20) > 18;
```


## API

```js
var Dice = require('mini-dice');
```
This module give access to a static class `Dice`, whith 3 methods

 + `roll` compute the sum of successive dice roll
 + `maxRoll` compute the maximum value obtained from successive dice roll
 + `minRoll` compute the minimum value obtained from successive dice roll


### Accepted Input

All three methods accept the same type of input, which describes the number of dice to roll and the number of sides of the dice.

#### String

You can use a single `String` as input.

It should be formatted as `"NdS"` where *N* is the number of dice, *d* is the separator, and *S* the number of sides.

**Example:** `roll("4D20")`

**Note:** You can use either lower-case or upper-case *d* as a separator

#### Array

You can use a single `Array` as input.

The first two values will be used as *N* the number of dice and *S* the number of sides, respectively.

** Example:** `roll([4, 20])`

#### Number & String

You can use two `Number` or `String` as input.  

The first value will be used as *N* the number of dice, and the second value as *S* the number of sides.

** Example:** `roll(4,20)`

**Note:** Both values can have different types, but they need to parsable as integers.

#### One Number / String

If you are feeling lazy, and only wants to give one input, you can.

The `Number` or `String` will be used as *N* the number of dice, and the number of sides is `6` by default.


## Installation

The module can be installed from `npm`

```js
npm install mini-dice
```

It can also be installed by including the `mini-dice.js` file in your project

## License

This project is licensed under the WTFPL - see [LICENSE](LICENSE.md) for more details


## Acknowledgments

This tool was used to test the creation of a simple node module, and continuous integration with Travis. Since it is used by some people, it should stay here for a while.
