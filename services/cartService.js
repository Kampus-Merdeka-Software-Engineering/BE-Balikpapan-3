
const { prisma } = require('../config/prisma');

//get all added products
async function getCart() {
  try {
    const addedProduct = await prisma.addedProduct.findMany(
      {
      include: {
        user: true,
        product: true
      }
    });
    return addedProduct;
  } catch (error) {
    console.log(error);
  }
}


//coba post
async function addProductToCart(userId, productId, quantity) {
  try {
    // Check if the user and product exist
    const thisUser = await prisma.user.findUnique({
      where: { 
        id: Number(userId) },
    });

    const thisProduct = await prisma.product.findUnique({
      where: { 
        id: Number(productId) },
    });

    if (!thisUser || !thisProduct) {
      throw new Error('please login to add product to cart');
    }

    // new entry
    const productAdded = await prisma.addedProduct.create({
      data: {
        user: { connect: { id: userId } },
        product: { connect: { id: productId } },
        quantity: Number(quantity)
      },
    });

    return productAdded;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getCart,
  addProductToCart
};
  