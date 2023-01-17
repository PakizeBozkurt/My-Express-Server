const express = require("express");
const app = express();

app.use = express();

const port = 3007; 

app.get("/", function(request, response){
    response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: pakiozi@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Pakize and I love learn something new!")
})

app.listen(port, function() {
    console.log(`Server started on part ${port}`);
});
