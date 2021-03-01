// FileName = clienteModel.js

var mongoose = require('mongoose');

// Setup schema
var clienteSchema = mongoose.Schema({
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
    rubroEmpresa: {
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

// Export Cliente model
var Cliente = module.exports = mongoose.model('cliente', clienteSchema);

module.exports.get = function (callback, limit) {
    Cliente.find(callback).limit(limit);
}

