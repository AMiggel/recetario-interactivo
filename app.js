var express = require('express');
var app = express();

//app.use(express.static("public"));

app.set("view engine","pug")
app.get("/", function(req,res){
	res.render("index");

});

app.listen(8080);