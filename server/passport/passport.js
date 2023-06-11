const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../config');
const authUsers = require('../models/authUser.model');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    authUsers.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // Local Strategy
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      authUsers.findOne({ email: email }, (err, user) => {
        if (err) return done(err);
        if (!user)
          return done(null, false, { message: 'Invalid email or password' });
        user.comparePassword(password, (err, isMatch) => {
          if (err) return done(err);
          if (!isMatch)
            return done(null, false, { message: 'Invalid email or password' });
          return done(null, user);
        });
      });
    })
  );

  // Google Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        authUsers.findOne({ googleId: profile.id }, (err, user) => {
          if (err) return done(err);
          if (user) return done(null, user);
          const newUser = new authUsers({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
          });
          newUser.save((err) => {
            if (err) return done(err);
            return done(null, newUser);
          });
        });
      }
    )
  );

  // Facebook Strategy
  // passport.use(
  //   new FacebookStrategy(
  //     {
  //       clientID: process.env.FACEBOOK_APP_ID,
  //       clientSecret: process.env.FACEBOOK_APP_SECRET,
  //       callbackURL: '/auth/facebook/callback',
  //       profileFields: ['id', 'emails', 'name'],
  //     },
  //     (accessToken, refreshToken, profile, done) => {
  //       User.findOne({ facebookId: profile.id }, (err, user) => {
  //         if (err) return done(err);
  //         if (user) return done(null, user);
  //         const newUser = new User({
  //           facebookId: profile.id,
  //           email: profile.emails[0].value,
  //           name: profile.displayName,
  //         });
  //         newUser.save((err) => {
  //           if (err) return done(err);
  //           return done(null, newUser);
  //         });
  //       });
  //     }
  //   )
  // );
};
