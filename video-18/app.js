// // initial server
const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
  console.log(`request was made to ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'application/json' })
  let myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  }
  res.end(JSON.stringify(myObj))
})

server.listen(port, '127.0.0.1')
console.log(`Server now listening on port ${port}`);

// // no pipe
// myReadStream.on('data', chunk => {
//   console.log('new chunk received');
//   myWriteStream.write(chunk)
// })

// // mit pipe
// myReadStream.pipe(myWriteStream)
