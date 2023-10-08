const cartService = require('../services/cartService');

// get all added products
async function getCart(req, res) {
  try {
    const addedProduct = await cartService.getCart();
    res.status(200).json({
      message: "Successfully fetched all added products in cart",
      data: addedProduct
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


// menambahkan produk ke keranjang
async function addProductToCart(req, res) {
  try {
    const addedProduct = await cartService.addProductToCart(req.body);
    res.status(201).json({ addedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  getCart,
  addProductToCart
};