const stuff = require('./stuff')

console.log(stuff.counter(['this one', 'another one', 'the most recent one']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));
