const express = require('express');
const authentication = require('../middlewares/authenticaion.middleware');
const {
  createBank,
  getBankByToken,
  getAllCustomers,
} = require('../controllers/bank.controller');

const bankRouter = express.Router();

bankRouter.post('/createbank', authentication, createBank);
bankRouter.get('/', authentication, getBankByToken);
bankRouter.get('/allcustomers', authentication, getAllCustomers);

module.exports = bankRouter;
