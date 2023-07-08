const banks = require('../models/bank.model');
const customerKycs = require('../models/customerKYC.model');
const users = require('../models/user.model');

const createBank = async (req, res) => {
  try {
    const { bankName, routingNumber } = req.body;
    const userId = req.authUser;
    const currentUser = await users.findById(userId);
    if (currentUser.role && currentUser.role != 'bank')
      return res
        .status(400)
        .json({ error: 'Only bank role user can create a bank' });
    currentUser.role = 'bank';
    await currentUser.save();
    const newBank = await banks.create({
      userId,
      bankName,
      routingNumber,
    });
    return res.status(200).json(newBank);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getBankByToken = async (req, res) => {
  try {
    res.status(200).json('ok');
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await customerKycs.find({});
    return res.status(200).json(allCustomers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getBankData = async (req, res) => {
  try {
    const userId = req.authUser;
    const currentBank = await banks.findOne({ userId });
    if (!currentBank) return res.status(412).json({ info: 'No bank found' });
    return res.status(200).json(currentBank);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createBank, getBankByToken, getAllCustomers, getBankData };
