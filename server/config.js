require('dotenv').config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};
