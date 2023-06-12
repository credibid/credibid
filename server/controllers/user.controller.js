const users = require('../models/user.model');
const { encryptPassword } = require('../utils/password');

const createUser = async (req, res) => {
  try {
    const { email_address, password } = req.body;
    const existingUser = await users.findOne({ email_address });

    if (existingUser)
      return res
        .status(200)
        .json({ info: 'User with given email already exists!' });

    if (password.length < 8)
      return res
        .status(200)
        .json({ info: 'Password must be at least 8 character long' });

    const encryptedPassword = await encryptPassword(password);

    const newUser = await users.create({
      first_name,
      last_name,
      email_address,
      password: encryptedPassword,
      role,
    });

    return res.status(201).json({ info: 'User has been created' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createUser };
