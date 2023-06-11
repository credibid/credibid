const { Schema, model } = require('mongoose');

const passportUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const passportUsers = model('PassportUser', passportUserSchema);

module.exports = passportUsers;
