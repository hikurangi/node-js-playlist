const fs = require('fs')

let readMe = fs.readFileSync('readme.txt', 'utf-8')
// console.log({readMe});
fs.writeFileSync('writeme.txt', readMe)
// code
