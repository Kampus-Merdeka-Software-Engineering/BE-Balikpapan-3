const express = require('express');
const shopController = require('../controllers/shopController');
const shopRoutes = express.Router();

// get semua product
shopRoutes.get('/shop', shopController.getProducts);

// buat product baru
shopRoutes.post('/shop/created', shopController.createProduct);

// cari berdasarkan ID
shopRoutes.get('/shop/:productId', shopController.getProductById);

module.exports = { shopRoutes };