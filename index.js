
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World please')
})
app.get('/login', function (req, res) {
    res.send('<h1>Arshdeen khan<h1/>')
  })

app.listen(5000)

