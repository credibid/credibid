const express = require('express');
const passport = require('passport');

const GoogleStrategy = require('passport-google-oidc');
const federated_credentials = require('../models/federatedCredentials.model');
const passportUsers = require('../models/passportUser.model');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../config');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/oauth2/redirect/google',
      scope: ['profile'],
    },
    async function verify(issuer, profile, cb) {
      try {
        const row = await federated_credentials.find({
          provider: issuer,
          subject: profile.id,
        });
        if (!row) {
          const currentUser = await passportUsers.create({
            name: profile.displayName,
          });
          const currentFederatedCredential = await federated_credentials.create(
            {
              user_id: currentUser._id,
              provider: issuer,
              subject: profile.id,
            }
          );
          return currentUser;
        } else {
          const currentUser = passportUsers.findById(row.user_id);
          return currentUser;
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  passportUsers.findById(id, (err, user) => {
    done(err, user);
  });
});

const federatedRouter = express.Router();

// federatedRouter.get('/login', (req, res, next) => {
//   res.render('login');
// });

federatedRouter.get('/login/federated/google', passport.authenticate('google'));
federatedRouter.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);
federatedRouter.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = federatedRouter;
