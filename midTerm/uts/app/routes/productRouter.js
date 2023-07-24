const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/:videoID', productController.getProductsByVideoID);

module.exports = router;