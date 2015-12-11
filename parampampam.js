var express =  require('express');
var app = express();
var crypto = require('crypto');

app.put('/message/:MESSAGE',function(req,res){
    res.end(crypto.createHash('sha1').update(new Date().toDateString() + req.params.MESSAGE).digest('hex'));
});

app.listen(process.argv[2]);