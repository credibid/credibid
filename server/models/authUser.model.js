const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const authUserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  name: { type: String },
});

authUserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

authUserSchema.methods.comparePassword = function (
  candidatePassword,
  callback
) {
  console.log(
    'candidatePassword, this.password',
    candidatePassword,
    this.password
  );
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const authUsers = mongoose.model('AuthUser', authUserSchema);

module.exports = authUsers;
