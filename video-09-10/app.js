const fs = require('fs')

// // Synchronous
// let readMe = fs.readFileSync('readme.txt', 'utf-8')
// console.log({readMe});
// fs.writeFileSync('writeme.txt', readMe)

// // Async
// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   fs.writeFile('writeme.txt', data) // works but is naughty and deprecated
// })
//
// console.log('test');

// // delete writeme.txt
// fs.unlink('writeme.txt')

// // Synchronous
// fs.mkdirSync('stuff')
// fs.rmdirSync('stuff')

// // Async
// fs.mkdir('stuff', () => {
//   fs.readFile('readme.txt', 'utf8', (err, data) => {
//     fs.writeFile('./stuff/writeme.txt', data)
//   })
// })

// // Async removal
// fs.unlink('./stuff/writeme.txt', () => {
//     fs.rmdir('stuff')
// })
