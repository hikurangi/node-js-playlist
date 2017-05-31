const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
  console.log(`request was made to ${req.url}`);
  // routing
  if (req.url === 'home' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res)
  } else if (req.url ==='/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res)
  } else if (req.url ==='/api/ninjas') {
    const ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}]
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.end(JSON.stringify(ninjas))
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html'})
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
  }
})

server.listen(port, '127.0.0.1')
console.log(`Server now listening on port ${port}`);
