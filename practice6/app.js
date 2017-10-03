var express = require('express')
var app = express()

app.listen(3000, function(){
  console.log('yayayayayay express')
})

app.get('/', function(req, res){
  res.send('hi practice6')
})
