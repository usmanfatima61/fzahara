landing page done


REFACTORING MY CODE





ROUTES
search routes in auth.js

WORK ON SEARCH

how to search 













create a folder
in the folder cretaed, install package 
jason buy runing (npm init, express,ejs,)

check install file (name of file install -v)
mutler(Multer adds a body object and a file or files object 
to the request object. The body object contains the values of the text
fields of the form, the file or files object contains the files uploaded via the form.)
 MORE INSTALL TOOLS OR PACKAGE
 mongo
 mongoose (npm install mongoose --save)
 
 *MONGO D command*
 db.filename.find() * to view*





<div class =container>
    <header class ="jumbotron">
        <h1> best women clothing</h1>
    </header>
</div>
 <% women_clothing.forEach(function(women){ %>
                <div>
             <h4> <%=  women.name%></h4>
             <img src = "<%= women.image%>">
        </div>
      <% });%>
   
   app.get("/women", function(req, res){
    var women = 
    [
    {name:"me", image:"https://images.pexels.com/photos/40502/rose-red-love-dew-40502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
     {name:"sals gowm", image:"../websites/rabiamoda/img/2.PNG"},
     {name:"sals gowm", image:"../websites/rabiamoda/img/2.PNG"},
     {name:"sals gowm", image:"../websites/rabiamoda/img/2.PNG"},
    {name:"sals gowm", image:"https://d2z4fd79oscvvx.cloudfront.net/0026178_heart_shape_arrangement_of_red_roses_385.jpeg"}
        
        
        ]
    res.render("women",{women_clothing:women});
});
   
    
    
    
              =============================
           <div class =container>
            <header class= jumbotron>
                <div class ="container">
                <h1>kids page</h1>
                <p> this is the best website for  clothing</p>
                <p>
                <a class="btn btn-success btn-lg" href="/Cart/new" > Add new picture</a>
                </p>
                </div>
            </header>
            
       <div class ="row text-center"style="display:flex;flex-wrap:wrap;">
             <% kidsPage.forEach(function(Web){ %>
           <div class="col-md-3 col-sm-6">
               <div class="thumbnail">
             <img src = "<%= Web.image%>">
             <div class="caption">
                 <h4> <%=  Web.name%></h4>
             </div>
             <p> <a href="/Cart/<%=Web.id %>" class ="btn btn-success "> More info</a> </p>
             </div>
          </div>
      <% });%>
    </div>
</div>
     