// FileName = proyectoModel.js

var mongoose = require('mongoose');

// Setup schema
var proyectoSchema = mongoose.Schema({
    nombreProyecto: {
        type: String,
        required: true
    },
    responsable: {
        type: String,
        required: true
    },
    objetivos: {
        type: String
    },
    alcance: {
        type: String
    },
    criteriosEvaluacion: {
        type: String
    },
    duracionEstimada: {
        type: Number
    },
    requisitosFuncionales: {
        type: String
    },
    requisitosTecnicos: {
        type: String
    },
    visibilidad: {
        type: Boolean
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Proyecto model
var Proyecto = module.exports = mongoose.model('proyecto', proyectoSchema);

module.exports.get = function (callback, limit) {
    Proyecto.find(callback).limit(limit);
}