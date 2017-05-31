// // initial server
const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
  console.log(`request was made to ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/html' }) // browser parses content accurately
  // Streams perform better, esp(?) with larger file sizes
  const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
  myReadStream.pipe(res)
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
