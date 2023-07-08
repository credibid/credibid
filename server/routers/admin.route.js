const express = require('express');
const adminAuthentication = require('../middlewares/adminAuthentication.middleware');
const {
  getAllCustomers,
  getAllBanks,
  deleteCustomerById,
  deleteBankById,
  getUserById,
  changeUserStatusById,
  getCustomerKyc,
} = require('../controllers/admin.controller');
const adminRouter = express.Router();

adminRouter.get('/allcustomers', adminAuthentication, getAllCustomers);
adminRouter.get('/allbanks', adminAuthentication, getAllBanks);
adminRouter.delete(
  '/deletecustomer/:id',
  adminAuthentication,
  deleteCustomerById
);
adminRouter.delete('/deletebank/:id', adminAuthentication, deleteBankById);
adminRouter.put(
  '/changeuserstatus/:id',
  adminAuthentication,
  changeUserStatusById
);

adminRouter.get('/getcustomerkyc/:id', adminAuthentication, getCustomerKyc);

module.exports = adminRouter;
