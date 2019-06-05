var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/",function(req,res){
    res.send("hello Fzahara")
});

// ("/bye" =>"Goodbye")
app.get("/bye", function(req,res){
    res.send("Goodbye Fzahara")
})
app.get("/web", function(req,res){
    res.send(" Fzahara website")
})

 app.get("*", function(req,res){
    res.send(" YOU ARE AWESOME")
})




app.listen(process.env.PORT,process.env.IP, function(){
   console.log( "server is  on"); 
});
