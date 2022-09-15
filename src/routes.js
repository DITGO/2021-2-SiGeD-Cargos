const express = require('express');

const routes = express.Router();
const ctrl = require('./Controllers/RolesController');

routes.post('/role', ctrl.create);
routes.get('/role', ctrl.getAllActive);
routes.get('/role/:id', ctrl.getById);
routes.patch('/role/:id', ctrl.patch);
routes.patch('/role/:id/deactivate', ctrl.deactivate);
routes.delete('/role/:id', ctrl.delete);
routes.post('/role/query', ctrl.queryActive);

module.exports = routes;
