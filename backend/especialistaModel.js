// FileName = especialistaModel.js

var mongoose = require('mongoose');

// Setup schema
var especialistaSchema = mongoose.Schema({
    nombreTrabajador: {
        type: String,
        required: true
    },
    nombreEmpresa: {
        type: String,
        required: true
    },
    rutEmpresa: {
        type: String,
        required: true
    },
    correoTrabajador: {
        type: String,
        required: true
    },
    servicioEmpresa: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Especialista model
var Especialista = module.exports = mongoose.model('especialista', especialistaSchema);

module.exports.get = function (callback, limit) {
    Especialista.find(callback).limit(limit);
}