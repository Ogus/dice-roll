Mini Dice
=========
[![Build Status](https://travis-ci.org/Ogus/mini-dice.svg?branch=master)

A small and simple tool to generate random number, based on dice roll

## Installation

This tool require Node.js 4.2.4 or more.


## Usage

```js
  /* Import the library */
var dice = require('mini-dice');

  /* Roll the dice ! */
var random = dice.roll();

  /* Roll 2 12-sided dices */
var damage = dice.roll("2d12");

  /* Roll 3 classic dices (6-sided) */
var escape = dice.roll(3);

  /* Roll 100 dices with 43 sides */
var wtf = dice.roll(100, 43);
```

The default roll use a single 6-sided dice. However, you can easily change the number of dices and their type.

Here is a list of acceptable input:

- A single `String` with the format `NdS` (separator can be 'D' or 'd') will roll N dices with S sides: `roll("2d12")`

- A single value with the format `N`, parsable as an `Integer`, will roll N dices with 6 sides: `roll("5")`, `roll(2)`

-Two values with the format `N, S`, parsable as `Integer`, will roll N dices with S sides: `roll(3, 12)`, `roll(2, "20")`


## Tests

`npm test`


## License

This project is licensed under the WTFPL - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

This tool was used to test the creation of simple node module, and continuous integration with Travis
