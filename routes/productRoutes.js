//jshint esversion: 10
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

//@Route: /api/products
//@Desc Get all products information
//@Access Public

router
    .route('/')
    .get(productController.getProducts);

//@Route: /api/product/:id
//@Desc Get product information by ID
//@Access Public

router
    .route('/:id')
    .get(productController.getProducts);


module.exports = router;