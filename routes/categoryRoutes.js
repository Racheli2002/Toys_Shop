const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');

/*
 * GET
 */
router.get('/', categoryController.getAllCategories);

module.exports = router;
