const { Schema, model } = require('mongoose');

const userKycSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  celular: {
    type: String,
  },
  gender: {
    type: String,

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
  },
  nationality: {
    type: String,
  },
  civilStatus: {
    type: String,
  },
  conjugalRegime: {
    type: String,
  },
  numberOfSons: {
    type: String,
  },
  numberOfCargas: {
    type: String,
  },
  housingType: {
    type: String,
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
      },
      number: {
        type: String,
      },
      house: {
        type: String,
      },
      department: {
        type: String,
      },
      community: {
        type: String,
      },
      city: {
        type: String,
      },
      region: {
        type: String,
      },
    },
  },
  documents: {
    type: [
      {
        name: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
  },
});

const customerKycs = model('UserKYC', userKycSchema);

module.exports = customerKycs;
