const express = require('express');
const authController = require('../controllers/authController');
const authRoutes = express.Router();

// create new user
authRoutes.post('/daftar', authController.newUser);

// login
authRoutes.post('/masuk', authController.Login);

module.exports = { authRoutes };