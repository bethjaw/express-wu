var express = require('express')
var app = express()

app.listen(3000, function(){
  console.log('check 1 2')
})

app.get('/', function(req, res){
  res.send('hi practice9')
})
