var express = require('express')
var app = express()

app.listen(3000, function(){
  console.log('express expresss')
})

app.get('/', function(req, res){
  res.send('hi practice8')
})
