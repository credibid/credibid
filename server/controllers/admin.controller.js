const banks = require('../models/bank.model');
const customerKycs = require('../models/customerKYC.model');

const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await customerKycs.find({});
    return res.status(200).json(allCustomers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllBanks = async (req, res) => {
  try {
    const allBanks = await banks.find({});
    return res.status(200).json(allBanks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllCustomers, getAllBanks };
