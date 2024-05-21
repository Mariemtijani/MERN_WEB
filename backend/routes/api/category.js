const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/categoriesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(categoriesController.getAllCategories)
    .post(verifyRoles(ROLES_LIST.Admin), categoriesController.createNewCategory)
    .put(verifyRoles(ROLES_LIST.Admin),categoriesController.updateCategory)
    .delete(verifyRoles(ROLES_LIST.Admin),categoriesController.deleteCategory)

router.route('/:id')
    .get(categoriesController.getCategory)

module.exports = router;