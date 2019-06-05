var express = require("express");
var app = express();

app.get("/" ,function(req, res){
    res.send("Welcome to Fzahara")
});

app.get("/speak/pig" ,function(req, res){
    res.send("Oink")
});

app.get("/speak/cow" ,function(req, res){
    res.send("Moo")
});

app.get("/speak/dog" ,function(req, res){
    res.send("Woof")
});




app.listen(process.env.PORT,process.env.IP, function(){
   console.log( "server is  on"); 
});

