var express = require('express');
var mongoose = require ('mongoose');
var recetas = require('./routes/recetas')
var app = express();
var bodyParser = require('body-parser');




// connect data base  mongodb
mongoose.connect("mongodb://localhost/recetario");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));  


// entidades
var recetaSchema= mongoose.Schema({
	name:{type:String},
	origen:{type: String},
	timeP:{type: String},
	imageUrl:{type: String},
	instrucciones:{type: String}
});

var RecetaModel = mongoose.model('receta',recetaSchema);
recetas.setModel(RecetaModel);






var ingredienteSchema={
	name:String,
	origen:String
}
var Ingrediente = mongoose.model("ingrediente",ingredienteSchema);

var ciudadSchema={
	name:String,
	pais:String
}
var ciudad = mongoose.model("ciudad",ciudadSchema);


app.set("view engine","pug");
app.use(express.static("public"));

// method get
app.get("/inicio", function(req,res){
	res.render("index");
});
app.get("/graphics", function(req,res){
	res.render("graphics");
});
app.get('/recetas', recetas.recetas);
app.get('/recetas/:id',recetas.show);

app.get('/recetas/:id', function(req,res){
	var id = req.params.id
})


// method post
app.post("/receta", function(req,res){

	var data ={
		name : req.body.name,
		origen : req.body.origen,
    	timeP : req.body.timeP,
    	imageUrl: req.body.imageUrl,
    	instrucciones : req.body.instrucciones
    	}

	var receta= new RecetaModel(data);
	receta.save(function(err){
	console.log(receta);	
	});  

});


app.listen(8080);