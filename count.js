const counter = arr => {
  return 'There are ' + arr.length + ' elements in this array'
}

console.log(counter(['this one', 'another one', 'the most recent one']));

module.exports = counter
