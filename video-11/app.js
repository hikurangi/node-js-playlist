const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
  console.log(`request was made to ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hey ninjas')
})

server.listen(port, '127.0.0.1')

console.log(`Server now listening on port ${port}`);

// write script which checks the result of grep -q Microsoft /proc/version
// true = WSL
// false = native Linux

// launch server using explorer.exe `http://localhost:${port}`
