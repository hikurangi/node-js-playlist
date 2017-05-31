const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use('/assets', express.static(path.join(__dirname, 'assets'))) // path.join was necessary because I used custom folders

// use middleware
// app.use('/assets', (req, res, next) => {
//   console.log(req.url);
//   next() // all done
// })



app.get('/', (req, res) => {
  res.render('index') // express knows what to set in the headers
})

app.get('/contact', (req, res) => {
  res.render('contact') // express knows what to set in the headers
})

app.get('/profile/:name', (req, res) => {
  let data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing'] }
  res.render('profile', {person: req.params.name, data})
})

app.get('*', (req, res) => { // catch all will catch only the exceptions if placed at the end of the route chain
  res.render('404')
})

app.listen(port)
console.log(`listening on port ${port}`);
