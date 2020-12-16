//jshint esversion: 10
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const protected = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');
 
//@Route: POST /api/users
//@Desc   Auth user & get token
//@Access Public

router
    .route('/')
    .get(protected,isAdmin, userController.getUsers) //get all users for admin
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

//@Route: DELETE /api/users/:id
//@Route: GET /api/users/:id
//@Route: PUT /api/users/:id
//@Desc   Delete user
//@Desc   Get user by ID
//@Access Private Admin 
//@Desc   PUT user details
//@Access Private Admin 
router
    .route('/:id')
    .get(protected, isAdmin, userController.getUserById)
    .delete(protected,isAdmin, userController.deleteUser)
    .put(protected,isAdmin, userController.updateUser);


module.exports = router;