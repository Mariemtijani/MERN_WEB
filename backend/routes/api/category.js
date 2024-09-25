const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/categoriesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route('/')
    .get(categoriesController.getAllCategories)
    .post(categoriesController.upload.single('image'), categoriesController.createNewCategory)
    .put(categoriesController.upload.single('image'),categoriesController.updateCategory)
    .delete(categoriesController.deleteCategory)

router.route('/:id')
    .get(categoriesController.getCategory)

module.exports = router;