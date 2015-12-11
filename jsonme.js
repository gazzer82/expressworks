var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books',function(req,res){
    fs.readFile(process.argv[3],'utf8',function(err, data){
        if(err){
            res.end('error');
        } else {
            console.log(JSON.parse(data));
            res.json(JSON.parse(data));
        }
    });
})


app.listen(process.argv[2]);