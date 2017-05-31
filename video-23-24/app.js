const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html') // express knows what to set in the headers
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html') // express knows what to set in the headers
})

app.get('/profile/:name', (req, res) => {
  res.send(`You requested to see a profile with id of ${req.params.name}`)
})

app.get('*', (req, res) => { // catch all will catch only the exceptions if placed at the end of the route chain
  res.sendFile(__dirname + '/404.html')
})

app.listen(port)
