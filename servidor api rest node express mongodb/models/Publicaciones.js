var mongoose = require('mongoose');

var PublicacionesSchema = new mongoose.Schema({
    Titulo: String,
    Descripcion: String,
    ImagenURL:  String,
    Vendedor: String,
    Telefono: Number,
    Seccion: String,
    Precio: Number
});
mongoose.model('Publicaciones', PublicacionesSchema);
