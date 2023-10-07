const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();

// get all users
userRoutes.get('/user', userController.getUsers);
// Create new user (sign in)
userRoutes.post('/created/userr', userController.newUser);

// Get a user by email tampilan login
userRoutes.get('/user/:user', userController.getSpecificUser);

module.exports = { userRoutes };