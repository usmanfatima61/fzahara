var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");
   mongoose.connect("mongodb://localhost:27017/rabiamoda", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// MONGOOSE SCHEMA SETUP
var umSchema = new mongoose.Schema({
    name:         String,
    image:        String,
    description:  String
});

var um =mongoose.model("um", umSchema);// um is the name of the model.** ITS CAN BE CALL ANYTHING
// um.create(
//     {
//         name:"Romwe",
//         image:"data:image/webp;base64,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",
//          description: "beautiful Romwe for all ladies"
        
//     }, function(err, success){
//         if (err){ console.log(err)}
//         else {console.log(success ), console.log("successfully saved");
//         }});




app.get("/", function(req, res){
    res.render("home");
});

app.get("/men", function(req, res){
    res.render("men");
});

app.get("/women", function(req, res){
    res.render("women");
});
// INDEX- SHOW ALL PICTURE IN GALLERY
app.get("/gallery", function(req, res){
 //  Get all picture gallery from DB
um.find({},function(err,picture){
      if (err){
        console.log(err);
      }
    else {
        res.render("index",{image:picture});} /*{gallery:new_gallery_picture} gallery can 
    be called anything e.g picture. I USE GALLERY BECAUSE I WANT IT CALLED GALLERY IN THE GALLERY FILE("gallery") */
});
});

// CREATE - add new picture to gallery to DB

app.post("/gallery", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newGallery = {name: name, image: image, description:desc};
       // Create a new campground and save to DB
    um.create(newGallery, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/gallery");
        }
    });
});
  
//get data from form and add to gallery arrays
// redirect back to gallery page
 // NEW - SHOW FORM TO CREATE NEW PICTURE GALLERY
app.get("/gallery/new", function(req, res){
    res.render("new");
});

// SHOW- more information about picture
app.get("/gallery/:id", function(req, res){
    // find the picture with provided ID ( um.findById(id,callback ))
    um.findById(req.params.id,function(err, found_picture){
        if (err){
            console.log(err)}
            else
            {  // render show template with that picture
                 res.render("show",{um:found_picture});
            }
});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("rabiamoda server is on");
});