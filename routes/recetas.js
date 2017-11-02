var receta;
exports.setModel = function(modelo){
	receta = modelo;
	};

exports.recetas = function(req, res){
   receta.find({},function(err,recetas){
   	if(err){
   		res.send('ha surgido un error')
   	}else{
   		res.render('recetas',{
   			recetas: recetas
   		});
   	}
   })
};
   //

exports.create = function(req, res){
   //
};
exports.store = function(req, res){
   //
};
exports.show = function(req, res){
   //
};
exports.edit = function(req, res){
   //
};
exports.update = function(req, res){
   //
};
exports.destroy = function(req, res){
   //
};