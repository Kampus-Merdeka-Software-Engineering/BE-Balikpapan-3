const express = require('express');
const cartController = require('../controllers/cartController');
const cartRoutes = express.Router();

// get cart
cartRoutes.get('/cart', cartController.getCart);

// add product to cart
cartRoutes.post('/cart/addproduct', cartController.addProductToCart);

module.exports = { cartRoutes };