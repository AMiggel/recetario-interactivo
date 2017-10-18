var express = require('express');
var app = express();
app.set("view engine","pug");

app.use(express.static("public"));

app.get("/inicio", function(req,res){
	res.render("index");

});
app.get("/graphics", function(req,res){
	res.render("graphics")
});

app.listen(8080);