const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const { JWT_KEY } = require('../config');

function getAuthToken(userId, expiresIn = '24h') {
  return jwt.sign({ userId }, JWT_KEY, {
    expiresIn,
  });
}

function getPermanentAuthToken(userId) {
  return jwt.sign({ userId }, JWT_KEY);
}

function verifyAuthToken(token) {
  return jwt.verify(token, JWT_KEY);
}

function decodeJWT(token) {
  return jwt_decode(token);
}

module.exports = {
  getAuthToken,
  getPermanentAuthToken,
  verifyAuthToken,
  decodeJWT,
};
