const { prisma } = require('../config/prisma');

//create user (for sign in)
async function newUser(user) {
  try {
    const userCreated = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
    return userCreated;
  } catch (error) {
    throw new Error(error)
  }
}

//get all users
async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
}

async function getSpecificUser(email) {
  try {
    const userEmail = await prisma.user.findUnique({
      where: {
        email: String(email)
      }
    })
    return userEmail
  } catch (error) {
    throw new Error(error)
  }
}



module.exports = {
  getUsers,
  newUser,
  getSpecificUser

};