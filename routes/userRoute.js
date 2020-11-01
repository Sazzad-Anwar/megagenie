//jshint esversion: 10
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const protected = require('../middleware/authMiddleware')

//@Route: POST /api/users
//@Desc   Auth user & get token
//@Access Public

router
    .route('/')
    .post(userController.registerUser);

//@Route: POST /api/users/login
//@Desc   Auth user & get token
//@Access Public 
router
    .route('/login')
    .post(userController.login);

//@Route: GET /api/users/profile && PUT /api/users/profile
//@Desc   Get user profile && Update user profile
//@Access Private

router
    .route('/profile')
    .get(protected, userController.getUserProfile)
    .put(protected, userController.updateUserProfile);


module.exports = router;