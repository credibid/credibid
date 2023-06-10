const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email_address: {
    type: String,
    min: 3,
    max: 255,
    required: true,
    unique: true,
  },
  celular: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    min: 8,
    max: 4096,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: [
      'male',
      'female',
      'transgender',
      'gender neutral',
      'non-binary',
      'agender',
      'pangender',
      'genderqueer',
      'two-spirit',
      'third gender',
    ],
  },
  nationality: {
    type: String,
    required: true,
  },
  civil_status: {
    type: String,
    required: true,
  },
  conjugal_regime: {
    type: String,
    required: true,
  },
  number_of_sons: {
    type: String,
    required: true,
  },
  housing_type: {
    type: String,
    required: true,
  },
  level_of_study: {
    type: String,
  },
  university: {
    type: String,
  },
  profession: {
    type: String,
  },
  particular_address: {
    type: {
      street_name: {
        type: String,
        require: true,
      },
      street_no: {
        type: String,
        require: true,
      },
      house: {
        type: String,
        require: true,
      },
      department: {
        type: String,
        require: true,
      },
      community: {
        type: String,
        require: true,
      },
      city: {
        type: String,
        require: true,
      },
      region: {
        type: String,
        require: true,
      },
    },
    required: true,
  },
});

const users = model('User', userSchema);

module.exports = users;
