var express = require('express');
var router = express.Router();
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads')
  }
})
var upload = multer({storage:storage})

var mongoose = require('mongoose');
var Publicaciones = mongoose.model('Publicaciones');
 var cloudinary = require('cloudinary');

cloudinary.config({
   cloud_name:"dybw3kdlj",
   api_key:"691982464752935",
   api_secret:"bi1sdhyElBkrW4eeFxB9a6Nkcik"
 });




//GET - Listar Todas las publicaciones
router.get('/publicaciones', function(req, res, next){
  Publicaciones.find(function(err, publicaciones){
    if(err){return next(err)}
    res.json(publicaciones)
  })
})

// listar todas las publicaciones por seccion
router.get('/publicaciones/:Seccion', function(req,res, next) {
        Publicaciones.find({Seccion: req.params.Seccion},function(err,publicaciones){
          if(err){return next(err)}
          res.json(publicaciones);
        })
})

//POST - Agregar Publicacion
router.post('/publicacion', upload.single('Imagen'),function(req, res, next){

  var data={
    Titulo:req.body.Titulo,
    Descripcion: req.body.Descripcion,
    //ImagenURL: req.file.path,
    Vendedor: req.body.Vendedor,
    Telefono: req.body.Telefono,
    Precio: req.body.Precio,
    Seccion: req.body.Seccion
  }

   var publicacion = new Publicaciones(data);
    cloudinary.uploader.upload(publicacion.ImagenURL,
     function(result) {
     publicacion.ImagenURL = result.url;
     publicacion.save(function(err, publicacion){
     if(err){return next(err)}
     res.json(publicacion);
      });
    }
  );
});
     /*
      publicacion.save(function(err, publicacion){
      if(err){return next(err)}
      res.json(publicacion);
    })*/


//DELETE - Eliminar publicacion
router.delete('/publicacion/:id', function(req, res){
  Publicaciones.findByIdAndRemove(req.params.id, function(err){
    if(err){res.send(err)}
    res.json({message: 'la publicacion se ha eliminado'});
  })
})

module.exports = router;
