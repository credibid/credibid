const { Schema, model } = require('mongoose');

const bankSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  routingNumber: {
    type: String,
    required: true,
  },
});

const banks = model('Bank', bankSchema);

module.exports = banks;
