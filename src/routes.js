const express = require('express');
const { verifyJWT } = require('./Utils/functionsJWT');

const routes = express.Router();
const RolesController = require('./Controllers/RolesController');

routes.post('/role', RolesController.putRole);
routes.get('/role/:id', RolesController.getRole);
routes.patch('/role/:id', RolesController.patchRole);
routes.delete('/role/:id', RolesController.deleteRole);
routes.post('/role/query', RolesController.queryRole);

module.exports = routes;