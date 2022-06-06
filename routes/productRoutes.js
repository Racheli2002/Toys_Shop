var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController.js');

/*
 * GET
 */
router.get('/', productController.getAllProducts);

/*
 * GET
 */
router.get('/:category', productController.getProductsByCategory);



module.exports = router;
