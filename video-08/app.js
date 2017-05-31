const events = require('events')
const util = require('util')

// let myEmitter = new events.EventEmitter()
//
// myEmitter.on('someEvent', msg => {
//   console.log(msg);
// })
//
// myEmitter.emit('someEvent', 'the event was emitted')

let Person = function(name) { // pls no arrow in constructor functions!
  this.name = name
}

util.inherits(Person, events.EventEmitter)

let james = new Person('james')
let mary = new Person('mary')
let ryu = new Person('ryu')

let people = [james, mary, ryu]

people.forEach(person => {
  person.on('speak', msg => {
    console.log(`${person.name} said: ${msg}`);
  })
})

james.emit('speak', 'hey dudes')
ryu.emit('speak', 'I want a curry')
