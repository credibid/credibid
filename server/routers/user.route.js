const express = require('express');
const {
  createUser,
  loginUser,
  getUserById,
  getUserByToken,
  thirdPartyLogin,
  createKyc,
  setUserRole,
  getCustomerKyc,
  assetsKYC,
  worksKYC,
} = require('../controllers/user.controller');
const authentication = require('../middlewares/authenticaion.middleware');

const userRouter = express.Router();

userRouter.post('/createuser', createUser);
userRouter.post('/login', loginUser);
userRouter.get('/kyc', authentication, getCustomerKyc);
userRouter.get('/', authentication, getUserByToken);
userRouter.post('/thirdpartylogin', thirdPartyLogin);
userRouter.post('/createkyc', authentication, createKyc);
userRouter.post('/worksKyc', authentication, worksKYC);

userRouter.post('/assetskyc', authentication, assetsKYC);
userRouter.put('/setuserrole', authentication, setUserRole);

module.exports = userRouter;
