const express = require('express');
const router = express.Router();
const artisansController = require('../../controllers/artisansController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(artisansController.getAllArtisan)
    .post(verifyRoles(ROLES_LIST.Admin), artisansController.createNewArtisan)
    .put(verifyRoles(ROLES_LIST.Admin),artisansController.updateArtisan)
    .delete(verifyRoles(ROLES_LIST.Admin),artisansController.deleteArtisan)

router.route('/:id')
    .get(artisansController.getArtisan)

module.exports = router;