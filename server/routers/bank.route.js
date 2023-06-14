const express = require('express');
const authentication = require('../middlewares/authenticaion.middleware');
const {
  createBank,
  getBankByToken,
  getAllCustomers,
  getBankData,
} = require('../controllers/bank.controller');

const bankRouter = express.Router();

bankRouter.post('/createbank', authentication, createBank);
bankRouter.get('/', authentication, getBankByToken);
bankRouter.get('/allcustomers', authentication, getAllCustomers);
bankRouter.get('/bankdata', authentication, getBankData);

module.exports = bankRouter;
