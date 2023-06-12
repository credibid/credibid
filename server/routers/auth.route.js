const express = require('express');
const { thridPartyLogin } = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/thirdpartylogin', thridPartyLogin);

module.exports = authRouter;
