// FileName = postulacionController.js

// Import postulacion model
Postulacion = require('./postulacionModel');

// Handle index actions
exports.index = function (req, res) {
    Postulacion.get(function (err, postulaciones) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'success',
            message: 'Postulaciones recuperado con exito',
            data: postulaciones
        });
    });
};

// Handle create postulacion actions (POST)
exports.new = function (req, res) {
    var postulacion = new Postulacion();
    postulacion.nombreProyecto = req.body.nombreProyecto ?  req.body.nombreProyecto : postulacion.nombreProyecto;
    postulacion.responsable = req.body.responsable;
    postulacion.objetivos = req.body.objetivos;
    postulacion.planTrabajo = req.body.planTrabajo;
    postulacion.descripcionEmpresa = req.body.descripcionEmpresa;
    // Save the postulacion and check for errors
    postulacion.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: 'Nuevo postulacion creado!',
            data: postulacion
        });
    });
};

// Handle view postulacion info (GET)
exports.view = function (req, res) {
    Postulacion.findById(req.params.postulacion_id, function (err, postulacion) {
        if (err){
            res.send(err);
        }
        res.json({
            message: 'Detalles de la postulacion cargando ...',
            data: postulacion
        });
    });
};

//Handle update pos info (PUT)
exports.update = function (req, res) {
    Postulacion.findById(req.params.postulacion_id, function (err, postulacion) {
        if (err) {
            res.send(err);
        }
        postulacion.nombreProyecto = req.body.nombreProyecto ?  req.body.nombreProyecto : postulacion.nombreProyecto;
        postulacion.responsable = req.body.responsable;
        postulacion.objetivos = req.body.objetivos;
        postulacion.planTrabajo = req.body.planTrabajo;
        postulacion.descripcionEmpresa = req.body.descripcionEmpresa;
        // Save the postulacion and check for errors
        postulacion.save(function (err) {
            if(err) {
                res.json(err);
            }
            res.json({
                message: 'Informacion de la postulacion actualizada',
                data: postulacion
            });
        });
    });
};

// Handle delete postulacion (DELETE)
exports.delete = function (req, res) {
    Postulacion.remove({ _id: req.params.postulacion_id }, function (err, postulacion) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: 'success',
            message: 'Postulacion eliminada!'
        });
    });
};

