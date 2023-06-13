const express = require('express');
const adminAuthentication = require('../middlewares/adminAuthentication.middleware');
const {
  getAllCustomers,
  getAllBanks,
} = require('../controllers/admin.controller');
const adminRouter = express.Router();

adminRouter.get('/allcustomers', adminAuthentication, getAllCustomers);
adminRouter.get('/allbanks', adminAuthentication, getAllBanks);

module.exports = adminRouter;
