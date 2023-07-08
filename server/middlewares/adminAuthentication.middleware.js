const users = require('../models/user.model');
const { verifyAuthToken } = require('../utils/authentication');

async function adminAuthentication(req, res, next) {
  try {
    const token = req.headers['token'];

    const verified = verifyAuthToken(token);

    if (!verified) return res.status(401).json('Authentication required');
    const { userId } = verified;

    const currentUser = await users.findById(userId);
    if (currentUser.role != 'admin')
      return res.status(400).json({ error: 'You are not an admin' });

    req.authUser = userId;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

module.exports = adminAuthentication;
