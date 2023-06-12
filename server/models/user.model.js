const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  // first_name: {
  //   type: String,
  // },
  // last_name: {
  //   type: String,
  // },
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
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'bank'],
  },
});

const users = model('User', userSchema);

module.exports = users;
