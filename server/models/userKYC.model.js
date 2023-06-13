const { Schema, model } = require('mongoose');

const userKycSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  celular: {
    type: String,
    require: true,
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
  dependants: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  civilStatus: {
    type: String,
    required: true,
  },
  conjugalRegime: {
    type: String,
    required: true,
  },
  numberOfSons: {
    type: String,
    required: true,
  },
  numberOfCargas: {
    type: String,
    require: true,
  },
  housingType: {
    type: String,
    required: true,
  },
  educationLevel: {
    type: String,
  },
  university: {
    type: String,
  },
  profession: {
    type: String,
  },
  particularAddress: {
    type: {
      street: {
        type: String,
        require: true,
      },
      number: {
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
  documents: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        link: {
          type: String,
        },
      },
    ],
    required: true,
  },
});

const userKycs = model('UserKYC', userKycSchema);

module.exports = userKycs;
