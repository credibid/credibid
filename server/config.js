require('dotenv').config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  SESSION_SECRET: process.env.SESSION_SECRET,
  FRONTEND_CLIENT: process.env.FRONTEND_CLIENT,
  JWT_KEY: process.env.JWT_KEY,
};
