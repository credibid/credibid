const express = require('express');
const passport = require('passport');
const { FRONTEND_CLIENT, SERVER_URL } = require('../config');
const { signupMiddleware } = require('../middlewares/signup.middleware');
const authRouter = express.Router();

// Local signup
authRouter.post(
  '/signup',
  signupMiddleware,
  passport.authenticate('local', {
    successRedirect: `${FRONTEND_CLIENT}/`,
    failureRedirect: `${FRONTEND_CLIENT}/login`,
  })
);

// Local signin
authRouter.post(
  '/signin',
  passport.authenticate('local', {
    successRedirect: `${FRONTEND_CLIENT}/`,
    failureRedirect: `${FRONTEND_CLIENT}/login`,
  })
);

// Google login
authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
authRouter.get(
  `/google/callback`,
  passport.authenticate('google', {
    successRedirect: `${FRONTEND_CLIENT}/`,
    failureRedirect: `${FRONTEND_CLIENT}/login`,
  })
);

// Facebook login
// authRouter.get(
//   '/facebook',
//   passport.authenticate('facebook', { scope: ['email'] })
// );
// authRouter.get(
//   '/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: `${FRONTEND_CLIENT}/`,
//     failureRedirect: `${FRONTEND_CLIENT}/login`,
//   })
// );

// Profile route

module.exports = authRouter;
