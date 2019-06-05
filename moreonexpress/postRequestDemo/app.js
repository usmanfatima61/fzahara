var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));// declaring body-parser
app.set("view engine", "ejs"); 

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", function(req,res){
    res.render("home")
});


app.post("/addfriend", function(req, res){// post request
console.log(req.body);// install body-parser
    res.send("You have reach the post route");
});

app.get("/friends", function(req, res){
    var friends =["adam", "ad","jeg", "hadiza", "rabi"];
    res.render("friends",{friends: friends});
})




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening Fzahara");
})