// FileName = especialistaController.js

// Import especialista model
Especialista = require('./especialistaModel');

// Handle index actions
exports.index = function (req, res) {
    Especialista.get(function (err, especialistas) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'success',
            message: 'Especialista recuperado con exito',
            data: especialistas
        });
    });
};

// Handle create especialista actions (POST)
exports.new = function (req, res) {
    var especialista = new Especialista();
    especialista.rutEmpresa = req.body.rutEmpresa ? req.body.rutEmpresa : especialista.rutEmpresa;
    especialista.nombreTrabajador = req.body.nombreTrabajador;
    especialista.nombreEmpresa = req.body.nombreEmpresa;
    especialista.correoTrabajador = req.body.correoTrabajador;
    especialista.servicioEmpresa = req.body.servicioEmpresa;
    especialista.contrasena = req.body.contrasena;
    // Save the especialista and check for errors
    especialista.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: 'Nuevo especialista creado!',
            data: especialista
        });
    });
};

// Handle view especialista info (GET)
exports.view = function (req, res) {
    Especialista.findById(req.params.especialista_id, function (err, especialista) {
        if (err){
            res.send(err);
        }
        res.json({
            message: 'Detalles del especialista cargando ...',
            data: especialista
        });
    });
};

//Handle update especialista info (PUT)
exports.update = function (req, res) {
    Especialista.findById(req.params.especialista_id, function (err, especialista) {
        if (err) {
            res.send(err);
        }
        especialista.rutEmpresa = req.body.rutEmpresa ? req.body.rutEmpresa : especialista.rutEmpresa;
        especialista.nombreTrabajador = req.body.nombreTrabajador;
        especialista.nombreEmpresa = req.body.nombreEmpresa;
        especialista.correoTrabajador = req.body.correoTrabajador;
        especialista.servicioEmpresa = req.body.servicioEmpresa;
        especialista.contrasena = req.body.contrasena;
        // Save the especialista and check for errors
        especialista.save(function (err) {
            if(err) {
                res.json(err);
            }
            res.json({
                message: 'Informacion del especialista actualizada',
                data: especialista
            });
        });
    });
};

// Handle delete especialista (DELETE)
exports.delete = function (req, res) {
    Especialista.remove({ _id: req.params.especialista_id }, function (err, especialista) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: 'success',
            message: 'Especialista eliminado!'
        });
    });
};
