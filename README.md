Dice Roll
=========

A small and simple tool to generate random number, based on dice roll

## Installation

This tool require Node.js 4.2.4 or more.


## Usage

```js
  /* Import the library */
var diceGenerator = require('dice-roll');

  /* Create a new dice object */
var dice = new diceGenerator();

  /* Roll the dice ! */
var random = dice.roll();
```

Output should be an integer between 0 and 5.


## Tests

`npm test`


## License

This project is licensed under the WTFPL - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

This tool was used to test the creation of simple node module, and continuous integration with Travis
