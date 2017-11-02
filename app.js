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
	name:{type:String,required: true},
	origen:{type: String,required:true},
	timeP:{type: String,required:true},
	instrucciones:{type: String,required:true}
});

var RecetaModel = mongoose.model('receta',recetaSchema);
recetas.setModel(RecetaModel);

app.get('/recetas', recetas.index);
app.get('/recetas/create', recetas.create);
app.post('/recetas', recetas.store);
app.get('/recetas/:id', recetas.show);
app.get('/recetas/:id/edit', recetas.edit);





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

// app.get("/recetas",function(req,res){
// 	Receta.find(function(err,documento){
// 	if(err){console.log(error)}
// 	res.render("/inicio",{ recetas:documento})

// 	});
// 	res.render("recetas");

// });
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