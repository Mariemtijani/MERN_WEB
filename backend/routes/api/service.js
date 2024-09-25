const express = require('express');
const router = express.Router();
const serviceController = require('../../controllers/servicesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route('/')
    .get(serviceController.getAllServices)
    .post(serviceController.upload.single('image'),serviceController.createNewService)
    .put( serviceController.updateService)
    .delete(serviceController.deleteService)

router.route('/:id')
    .get(serviceController.getService)
    .put(serviceController.approveService)
    .put(serviceController.disapproveService)


module.exports = router;