var express = require('express');
var mongoose = require ('mongoose');
var app = express();
var bodyParser = require('body-parser');

// connect data base  mongodb
// mongoose.connect("mongodb://localhost/recetario");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true }));  

// entidades
var recetaSchema={
	name:String,
	origen:String,
	timeP:String,
	instrucciones:String
};
var Receta = mongoose.model("receta",recetaSchema);

var ingredienteSchema={
	name:String,
	origen:String,
}
 var Ingrediente = mongoose.model("ingrediente",ingredienteSchema);

var ciudadSchema={
	name:String;
	pais:String;
}


app.set("view engine","pug");
app.use(express.static("public"));

// method get
app.get("/inicio", function(req,res){
	res.render("index");
});
app.get("/graphics", function(req,res){
	res.render("graphics");
});

// method post
app.post("/receta", function(req,res){

	var data ={
		name : req.body.name,
		origen : req.body.origen,
    	timeP : req.body.timeP,
    	instrucciones : req.body.instrucciones
    	}
	var receta= new Receta(data);
	receta.save(function(err){
	console.log(receta);	
	});  

});


app.listen(8080);