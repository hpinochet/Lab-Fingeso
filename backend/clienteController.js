// FileName = clienteController.js

// Import cliente model
Cliente = require('./clienteModel');

// Handle index actions
exports.index = function (req, res) {
    Cliente.get(function (err, clientes) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'success',
            message: 'Clientes recuperado con exito',
            data: clientes
        });
    });
};

// Handle create cliente actions (POST)
exports.new = function (req, res) {
    var cliente = new Cliente();
    cliente.rutEmpresa = req.body.rutEmpresa ?  req.body.rutEmpresa : cliente.rutEmpresa;
    cliente.nombreTrabajador = req.body.nombreTrabajador;
    cliente.nombreEmpresa = req.body.nombreEmpresa;
    cliente.rutEmpresa = req.body.rutEmpresa;
    cliente.correoTrabajador = req.body.correoTrabajador;
    cliente.rubroEmpresa = req.body.rubroEmpresa;
    cliente.contrasena = req.body.contrasena;
    // Save the cliente and check for errors
    cliente.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: 'Nuevo cliente creado!',
            data: cliente
        });
    });
};

// Handle view cliente info (GET)
exports.view = function (req, res) {
    Cliente.findById(req.params.cliente_id, function (err, cliente) {
        if (err){
            res.send(err);
        }
        res.json({
            message: 'Detalles del cliente cargando ...',
            data: cliente
        });
    });
};

//Handle update cliente info (PUT)
exports.update = function (req, res) {
    Cliente.findById(req.params.cliente_id, function (err, cliente) {
        if (err) {
            res.send(err);
        }
        cliente.rutEmpresa = req.body.rutEmpresa ?  req.body.rutEmpresa : cliente.rutEmpresa;
        cliente.nombreTrabajador = req.body.nombreTrabajador;
        cliente.nombreEmpresa = req.body.nombreEmpresa;
        cliente.rutEmpresa = req.body.rutEmpresa;
        cliente.correoTrabajador = req.body.correoTrabajador;
        cliente.rubroEmpresa = req.body.rubroEmpresa;
        cliente.contrasena = req.body.contrasena;
        // Save the cliente and check for errors
        cliente.save(function (err) {
            if(err) {
                res.json(err);
            }
            res.json({
                message: 'Informacion del cliente actualizada',
                data: cliente
            });
        });
    });
};

// Handle delete cliente (DELETE)
exports.delete = function (req, res) {
    Cliente.remove({ _id: req.params.cliente_id }, function (err, cliente) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: 'success',
            message: 'Cliente eliminado!'
        });
    });
};

