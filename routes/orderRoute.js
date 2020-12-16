//jshint esversion: 10
const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const protected = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');

//@Route: Post /api/orders
//@Desc Create new order
//@Access Private

router
    .route('/')
    .get(protected,isAdmin, orderController.getAllOrders)
    .post(protected, orderController.addOrderItems);

//@Route: Post /api/orders
//@Desc Create new order
//@Access Private

router
    .route('/myorders')
    .get(protected, orderController.myOrders);

//@Route: Get /api/orders/:id
//@Desc Get orders by ID
//@Access Private

router
    .route('/:id')
    .get(protected, orderController.getOrderById);

//@Route: Get /api/orders/:id/pay
//@Desc Set payment status to true after payment
//@Access Private

router
    .route('/:id/pay')
    .get(protected, orderController.updateOrderToPaid);

//@Route: PUT /api/orders/:id/deliver
//@Desc Set deliver status to true
//@Access Private

router
    .route('/:id/deliver')
    .put(protected,isAdmin, orderController.updateOrderToDelivered);

module.exports = router;