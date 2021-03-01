// FileName = proyectoController.js

// Import proyecto model
Proyecto = require('./proyectoModel');

// Handle index actions
exports.index = function (req, res) {
    Proyecto.get(function (err, proyectos) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'success',
            message: 'Proyectos recuperado con exito',
            data: proyectos
        });
    });
};

// Handle create proyecto actions (POST)
exports.new = function (req, res) {
    var proyecto = new Proyecto();
    proyecto.nombreProyecto = req.body.nombreProyecto ?  req.body.nombreProyecto : proyecto.nombreProyecto;
    proyecto.responsable = req.body.responsable;
    proyecto.objetivos = req.body.objetivos;
    proyecto.alcance = req.body.alcance;
    proyecto.criteriosEvaluacion = req.body.criteriosEvaluacion;
    proyecto.duracionEstimada = req.body.duracionEstimada;
    proyecto.requisitosFuncionales = req.body.requisitosFuncionales;
    proyecto.requisitosTecnicos = req.body.requisitosTecnicos;
    proyecto.visibilidad = req.body.visibilidad;
    // Save the proyecto and check for errors
    proyecto.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: 'Nuevo proyecto creado!',
            data: proyecto
        });
    });
};

// Handle view proyecto info (GET)
exports.view = function (req, res) {
    Proyecto.findById(req.params.proyecto_id, function (err, proyecto) {
        if (err){
            res.send(err);
        }
        res.json({
            message: 'Detalles del proyecto cargando ...',
            data: proyecto
        });
    });
};

//Handle update proyecto info (PUT)
exports.update = function (req, res) {
    Proyecto.findById(req.params.proyecto_id, function (err, proyecto) {
        if (err) {
            res.send(err);
        }
        proyecto.nombreProyecto = req.body.nombreProyecto ?  req.body.nombreProyecto : proyecto.nombreProyecto;
        proyecto.responsable = req.body.responsable;
        proyecto.objetivos = req.body.objetivos;
        proyecto.alcance = req.body.alcance;
        proyecto.criteriosEvaluacion = req.body.criteriosEvaluacion;
        proyecto.duracionEstimada = req.body.duracionEstimada;
        proyecto.requisitosFuncionales = req.body.requisitosFuncionales;
        proyecto.requisitosTecnicos = req.body.requisitosTecnicos;
        proyecto.visibilidad = req.body.visibilidad;        
        // Save the proyecto and check for errors
        proyecto.save(function (err) {
            if(err) {
                res.json(err);
            }
            res.json({
                message: 'Informacion del proyecto actualizado',
                data: proyecto
            });
        });
    });
};

// Handle delete proyecto (DELETE)
exports.delete = function (req, res) {
    Proyecto.remove({ _id: req.params.proyecto_id }, function (err, proyecto) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: 'success',
            message: 'Proyecto eliminado!'
        });
    });
};
