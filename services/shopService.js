const { prisma } = require('../config/prisma');

//get all products
async function getProducts() {
  try {
    const product = await prisma.product.findMany();
    return product;
  } catch (error) {
    console.log(error);
  }
}

//create product (non accessable for user || admin only)
async function createProduct(product) {
  try {
    const createdProduct = await prisma.product.create({
      data: {
        productname: product.productname,
        brandname: product.brandname,
        description: product.description,
        price: product.price,
        image: product.image
      }
    })
    return createdProduct;
  } catch (error) {
    throw new Error(error)
  }
}

// get a product by ID
async function getProductById(productId) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId)
      }
    })
    return product
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductById
};