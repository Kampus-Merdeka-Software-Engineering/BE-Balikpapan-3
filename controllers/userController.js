const userService = require('../services/userService');

// semua user 
async function getUsers(req, res) {
  try {
    const user = await userService.getUsers();
    res.status(200).json({
      message: "Successfully fetched all users",
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


// buat user baru
async function newUser(req, res) {
  try {
    const userCreated = await userService.newUser(req.body);
    res.status(201).json({ userCreated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// buat user by email
async function getSpecificUser(req, res) {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'Email query parameter is needed' });
  };

  try {
    const user = await userService.getSpecificUser(email);

    if (!user) {
      res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json({
      message: "successfully fetch user",
      data: user
      });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to return user.' });
  }
};


module.exports = {
  getUsers,
  newUser,
  getSpecificUser
};