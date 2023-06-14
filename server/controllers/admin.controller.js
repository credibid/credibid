const banks = require('../models/bank.model');
const customerKycs = require('../models/customerKYC.model');
const users = require('../models/user.model');
const { extractedInfo } = require('../utils/extractedInfo');

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

const deleteCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const currentCustomer = await customerKycs.findByIdAndDelete(id);
    if (!currentCustomer)
      return res.status(204).json({ info: 'No customer to delete' });
    return res.status(202).json({ info: 'Customer deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteBankById = async (req, res) => {
  try {
    const { id } = req.params;
    const currentBank = await banks.findByIdAndDelete(id);
    if (!currentBank)
      return res.status(204).json({ info: 'No bank to delete' });
    return res.status(202).json({ info: 'Bank deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const changeUserStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatus = ['active', 'pending'];
    if (!validStatus.includes(status))
      return res
        .status(200)
        .json({ info: 'Only active and pending status is accepted' });
    const currentUser = await users.findById(id);
    if (!currentUser) return res.status(400).json({ error: 'No user found' });
    currentUser.status = status;
    await currentUser.save();
    return res.status(200).json(extractedInfo(currentUser));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllCustomers,
  getAllBanks,
  deleteCustomerById,
  deleteBankById,
  changeUserStatusById,
};
