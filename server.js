const express = require("express");
const app = express();

app.get("/", function(request, response){
    //console.log(request);
    response.send("<h1>Hello World!</h1>");
});

app.get("/about", function(req,res){
    res.send("<h1>Page about</h1>");
});

app.listen(3000, function(){
    console.log("Server is running on Port 3000.");
});

app.get("/contacts", function(req1,res1){
    res1.send("<h1>blablabla@gmail.com</h1>");
});