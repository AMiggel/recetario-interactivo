var express = require('express');
var mongoose = require ('mongoose');
var app = express();
var bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/recetario");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true }));  

// var ciudadSchema= {
// 	nombre: String,
// 	pais: String
// };

//  var Ciudad = mongoose.model("ciudad",ciudadSchema);

app.set("view engine","pug");

app.use(express.static("public"));

app.get("/inicio", function(req,res){
	res.render("index");

	// var data ={
	// 	nombre:"Medellin",
	// 	pais: "Colombia"
	// }
	// var ciudad = new Ciudad(data);
	// ciudad.save(function(err){
	// 	console.log(ciudad);
	// });


});
app.get("/graphics", function(req,res){
	res.render("graphics");
});

app.post("/receta", function(req,res){

    var usuario = req.body.usuario;
    var pass= req.body.pass;
       res.send(usuario + ' ' +pass + ' ');
       console.log("posted")

});

app.listen(8080);