const bcrypt = require('bcryptjs');
const authUsers = require('../models/authUser.model');
const passport = require('passport');
const { encryptPassword, checkPassword } = require('../utils/password');
const LocalStrategy = require('passport-local').Strategy;

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
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        // Match User
        const currentUser = authUsers.findOne({ email });
        if (!currentUser) {
          const newUser = await authUsers.create({ email, password });
          const encryptedPassword = await encryptPassword(password);
          newUser.password = encryptedPassword;
          await newUser.save();
          return done(null, user);
        } else {
          const matched = checkPassword(password, currentUser.password);
          if (matched) return done(null, user);
          return done(null, false, { message: 'Wrong password' });
        }
      } catch (error) {
        console.log(error);
        return done(null, false, { message: error });
      }
    }
  )
);

module.exports = passport;
