// FileName: api-routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API its working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

//---------------------------------------------------------

// Import cliente controller
var clienteController = require('./clienteController');

// Cliente routes
router.route('/clientes')
    .get(clienteController.index)
    .post(clienteController.new);

router.route('/clientes/:cliente_id')
    .get(clienteController.view)
    .patch(clienteController.update)
    .put(clienteController.update)
    .delete(clienteController.delete);


// Import especialista controller
var especialistaController = require('./especialistaController');

// Especialista routes
router.route('/especialistas')
    .get(especialistaController.index)
    .post(especialistaController.new);

router.route('/especialistas/:especialista_id')
    .get(especialistaController.view)
    .patch(especialistaController.update)
    .put(especialistaController.update)
    .delete(especialistaController.delete);

    
// Import postulacion controller
var postulacionController = require('./postulacionController');

// Postulacion routes
router.route('/postulaciones')
    .get(postulacionController.index)
    .post(postulacionController.new);

router.route('/postulaciones/:postulacion_id')
    .get(postulacionController.view)
    .patch(postulacionController.update)
    .put(postulacionController.update)
    .delete(postulacionController.delete);

    
// Import proyecto controller
var proyectoController = require('./proyectoController');

// Proyecto routes
router.route('/proyectos')
    .get(proyectoController.index)
    .post(proyectoController.new);

router.route('/proyectos/:proyecto_id')
    .get(proyectoController.view)
    .patch(proyectoController.update)
    .put(proyectoController.update)
    .delete(proyectoController.delete);


// Export API routes
module.exports = router;