const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
  number: String,
  value: String,
  mortgage: String,
});

const passiveSchema = new Schema({
  amountDebt: String,
  monthlyPayment: String,
});

const financialInvestmentSchema = new Schema({
  id: String,
  type: String,
  institution: String,
  value: String,
  pledge: String,
});

const companyParticipationSchema = new Schema({
  id: String,
  name: String,
  identifyingNumber: String,
  constitutionYear: String,
  percentage: String,
  value: String,
});

const realEstateDetailsSchema = new Schema({
  id: String,
  type: String,
  address: String,
  commune: String,
  fiscalAppraisal: String,
  rol: String,
  mortgages: String,
});

const vehicleDetailsSchema = new Schema({
  id: String,
  type: String,
  brand: String,
  model: String,
  numberPlate: String,
  fiscalAppraisal: String,
  pledged: String,
});

const debtDetailsSchema = new Schema({
  id: String,
  type: String,
  institution: String,
  monthlyPayment: String,
  totalDebt: String,
  finalMaturity: String,
  outstandingDebt: String,
});

const assetsKYCSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  assets: {
    savings: assetSchema,
    actions: assetSchema,
    financialInversions: assetSchema,
    participation: assetSchema,
    realEstate: assetSchema,
    vehicles: assetSchema,
    otherAssets: assetSchema,
  },
  passives: {
    creditCards: passiveSchema,
    linesOfCredit: passiveSchema,
    consumerCreditBalance: passiveSchema,
    mortgageCreditBalance: passiveSchema,
    balanceOtherCredits: passiveSchema,
    otherPassives: passiveSchema,
  },
  income: {
    fixedRent: String,
    variableIncome: String,
    otherIncome: String,
  },
  financialInvestment: [financialInvestmentSchema],
  companyParticipations: [companyParticipationSchema],
  realEstateDetails: [realEstateDetailsSchema],
  vehicleDetails: [vehicleDetailsSchema],
  debtDetails: [debtDetailsSchema],
});

const AssetsKYC = mongoose.model('AssetsKYC', assetsKYCSchema);

module.exports = AssetsKYC;
