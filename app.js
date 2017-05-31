const fs = require('fs')

// // Synchronous
// let readMe = fs.readFileSync('readme.txt', 'utf-8')
// console.log({readMe});
// fs.writeFileSync('writeme.txt', readMe)

// // Async
fs.readFile('readme.txt', 'utf-8', (err, data) => {
  console.log({data});
})
