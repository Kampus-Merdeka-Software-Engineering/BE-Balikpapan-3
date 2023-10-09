const { prisma } = require('../config/prisma');

//create user (for sign in)
async function daftar(user) {
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

//form Login 
async function Login(user) {
    try {
        const findEmail = await prisma.user.findUnique({
            where: {
                email: user.email
            }
        })
        if (!findEmail) {
            throw new Error(`username ${user.email} not found`);
        }
        if (findEmail.password != user.password) {
            throw new Error(`password yang anda masukkan salah`);
        }
        return findEmail;

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    daftar,
    Login
}