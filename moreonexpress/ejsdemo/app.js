

var express = require("express");// declearing express and app
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("home"); /* res.render is to send html file.ejs stands for embedded javascript EJS is a simple 
   templating language that lets you generate HTML markup with plain JavaScript. */
});

app.get("/love/:thing",function(req, res){ // : is for 
     var thing = req.params.thing;
    res.render("love",{thingVar:thing});//passing the value of thing
});

app.get("/find/:some",function(req, res){ // : is for 
     var some = req.params.thing;
    res.render("find",{someVar:some});//passing the value of thing
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    
    res.render("post", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening!!!"); 
});