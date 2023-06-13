const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email_address: {
    type: String,
    min: 3,
    max: 255,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    min: 8,
    max: 4096,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'bank'],
  },
  sub: {
    type: String,
  },
  name: {
    type: String,
  },
  picture: {
    type: String,
  },
});

const users = model('User', userSchema);

module.exports = users;
