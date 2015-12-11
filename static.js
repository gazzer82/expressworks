var express = require('express');
var app = express();
var path = require('path');
//console.log(process.argv[3]));
app.use(express.static(process.argv[3]));
//app.get('/home',function(req,res){
//    res.end('Hello World!');
//})
console.log(process.argv[2]);
app.listen(process.argv[2]);