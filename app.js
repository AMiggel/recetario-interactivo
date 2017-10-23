var express = require('express');
var mongoose = require ('mongoose');
var app = express();

mongoose.connect("mongodb://localhost/recetario");

var productSchema= {
	//estructura
};
var ciudad = mongoose.model("ciudad",productSchema);

app.set("view engine","pug");

app.use(express.static("public"));

app.get("/inicio", function(req,res){
	res.render("index");

});
app.get("/graphics", function(req,res){
	res.render("graphics");
});

app.listen(8080);