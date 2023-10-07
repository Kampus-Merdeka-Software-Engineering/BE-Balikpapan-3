const productService = require('../services/shopService');

// get all products
async function getProducts(req, res) {
  try {
    const product = await productService.getProducts();
    res.status(200).json({
      message: "Successfully fetched all products",
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Create a new product
async function createProduct(req, res) {
  try {
    const productCreated = await productService.createProduct(req.body);
    res.status(201).json({ productCreated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a product by ID
async function getProductById(req, res) {
  const { productId } = req.params;
  try {
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'product not found' });
    }
    res.status(200).json({
      message: "Successfully fetched product",
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductById
};