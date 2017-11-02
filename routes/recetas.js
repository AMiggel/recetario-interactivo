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
 
exports.show = function(req, res){

     receta.findById(req.params.id, function(err, recetas){
      if(err){
         res.send(err);
      }else{
         res.render('recetas/show', {
            recetas: recetas
         });
      }
   });
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