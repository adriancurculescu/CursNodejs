var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

// Console will print the  server info
console.log('Server running at http://127.0.0.1:3000');