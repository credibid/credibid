const express = require('express');
const passport = require('passport');
const authRouter = express.Router();

// Local signup
authRouter.post(
  '/signup',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
  })
);

// Local signin
authRouter.post(
  '/signin',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
  })
);

// Google login
authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
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
//     successRedirect: '/profile',
//     failureRedirect: '/signin',
//   })
// );

// Profile route
authRouter.get('/profile', (req, res) => {
  res.send('Welcome to your profile');
});

module.exports = authRouter;
