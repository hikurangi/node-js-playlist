const fs = require('fs')

// // Synchronous
// let readMe = fs.readFileSync('readme.txt', 'utf-8')
// console.log({readMe});
// fs.writeFileSync('writeme.txt', readMe)

// // Async
fs.readFile('readme.txt', 'utf-8', (err, data) => {
  fs.writeFile('writeme.txt', data) // works but is naughty and deprecated
})

console.log('test');
