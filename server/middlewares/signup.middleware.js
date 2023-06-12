const authUsers = require('../models/authUser.model');
const bcrypt = require('bcrypt');

const signupMiddleware = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await authUsers.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: 'Email already exists' });
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = await authUsers.create({ email, password: hash });
    // console.log(`${FRONTEND_CLIENT}/`);
    return res.status(200).json({ info: 'User created' });
    // next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { signupMiddleware };
