const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/cardController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(cardController.getCardItems)
    .post(cardController.addToCard)
    .delete(cardController.deleteCardItem);


module.exports = router;