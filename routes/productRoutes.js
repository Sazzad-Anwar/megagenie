//jshint esversion: 10
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const protected = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');

//@Route: /api/products
//@Desc Get all products information
//@Access Public

router
    .route('/')
    .get(productController.getProducts)
    .post(protected,isAdmin, productController.createProduct);

//@Route: /api/product/:id
//@Desc Get product information by ID
//@Desc DELETE product by ID
//@Access Public Get product information by ID
//@Access Delete product by ID

router
    .route('/:id')
    .get(productController.getProducts)
    .delete(protected,isAdmin,productController.deleteProduct)
    .put(protected,isAdmin, productController.updateProduct);

//@Route: POST /api/products/:id/reviews
//@Desc Post a review of a product
//@Access Private

router
    .route('/:id/reviews')
    .post(protected, productController.createProductReview)

module.exports = router;