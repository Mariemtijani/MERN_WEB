const express = require('express');
const router = express.Router();
const serviceController = require('../../controllers/servicesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(serviceController.getAllServices)
    .post(verifyRoles(ROLES_LIST.Artisan), serviceController.createNewService)
    .put(verifyRoles(ROLES_LIST.Artisan), serviceController.updateService)
    .delete(verifyRoles(ROLES_LIST.Artisan),serviceController.deleteService)

router.route('/:id')
    .get(serviceController.getService)

module.exports = router;