const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employmentBackgroundSchema = new Schema({
  dependent: String,
  emloyerNumber: String,
  companyName: String,
  economicActivity: String,
  startOfContractDate: Date,
  position: String,
  monthlyIncome: String,
});

const previousEmploymentSchema = new Schema({
  emloyerNumber: String,
  companyName: String,
  businessLine: String,
  economicActivity: String,
  startOfEmploymentDate: Date,
  endOfEmploymentDate: Date,
});

const bankReferencesSchema = new Schema({
  bankName: String,
  product: String,
  number: String,
});

const partnerDataSchema = new Schema({
  clientRUT: String,
  clientName: String,
  fathersLastName: String,
  mothersLastName: String,
  dateOfBirth: Date,
  university: String,
  profession: String,
  gender: String,
  nationality: String,
  levelOfStudies: String,
});

const partnerEmploymentBgSchema = new Schema({
  dependent: String,
  emloyerNumber: String,
  companyName: String,
  economicActivity: String,
  startOfContractDate: Date,
  position: String,
  monthlyIncome: String,
});

const partnerAddressSchema = new Schema({
  street: String,
  number: String,
  house: String,
  department: String,
  commune: String,
  city: String,
  region: String,
  phone: String,
  email: String,
});

const worksKycSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  employmentBackground: employmentBackgroundSchema,
  previousEmployment: previousEmploymentSchema,
  bankReferences: bankReferencesSchema,
  partnerData: partnerDataSchema,
  partnerEmploymentBg: partnerEmploymentBgSchema,
  partnerAddress: partnerAddressSchema,
});

const WorksKyc = mongoose.model('WorksKyc', worksKycSchema);

module.exports = WorksKyc;
