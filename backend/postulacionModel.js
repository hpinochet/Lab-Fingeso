// FileName = postulacionModel.js

var mongoose = require('mongoose');

// Setup schema
var postulacionSchema = mongoose.Schema({
    nombreProyecto: {
        type: String,
        required: false
    },
    responsable: {
        type: String,
        required: true
    },
    objetivos: {
        type: String,
        required: true
    },
    planTrabajo: {
        type: String,
        required: true
    },
    descripcionEmpresa: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Postulacion model
var Postulacion = module.exports = mongoose.model('postulacion', postulacionSchema);

module.exports.get = function (callback, limit) {
    Postulacion.find(callback).limit(limit);
}