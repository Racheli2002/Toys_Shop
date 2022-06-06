var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController.js');


/*
 * GET
 */
router.get('/:id', orderController.getOrderByUserId);

/*
 * POST
 */
router.post('/', orderController.postOrder);


module.exports = router;
