var express = require("express");// declearing express and app
var app = express();

app.get("/", function(req, res){
    res.send("home landing page"); /* res.render is to send html file.ejs stands for embedded javascript EJS is a simple 
   templating language that lets you generate HTML markup with plain JavaScript. */
});

app.get("/services", function(req, res){
    res.send("page for services"); /* res.render is to send html file.ejs stands for embedded javascript EJS is a simple 
   templating language that lets you generate HTML markup with plain JavaScript. */
});




app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening!!!"); 
});