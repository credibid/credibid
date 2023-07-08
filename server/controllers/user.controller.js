const users = require('../models/user.model');
const customerKycs = require('../models/customerKYC.model');
const { decodeJWT, getPermanentAuthToken } = require('../utils/authentication');
const { encryptPassword, checkPassword } = require('../utils/password');
const { extractedInfo } = require('../utils/extractedInfo');
const AssetsKYC = require('../models/assetsKYC.model');

const createUser = async (req, res) => {
  try {
    const { email_address, password } = req.body;
    const existingUser = await users.findOne({ email_address });

    if (existingUser)
      return res
        .status(400)
        .json({ error: 'User with given email already exists!' });

    if (password.length < 8)
      return res
        .status(400)
        .json({ error: 'Password must be at least 8 character long' });

    const encryptedPassword = await encryptPassword(password);

    const newUser = await users.create({
      email_address,
      password: encryptedPassword,
    });

    return res.status(201).json({ info: 'User has been created' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email_address, password } = req.body;

    const currentUser = await users.findOne({ email_address });

    if (!currentUser) return res.status(400).json({ error: 'Invalid Login' });

    const passwordVerified = await checkPassword(
      password,
      currentUser.password
    );

    if (!passwordVerified)
      return res.status(400).json({ error: 'Invalid Login' });

    const token = getPermanentAuthToken(currentUser._id);
    const { role, status } = currentUser;

    return res
      .status(200)
      .json({ token, id: currentUser._id, email_address, role, status });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const currentUser = await users.findById(id);

    if (!currentUser)
      return res.status(400).json({ error: 'Could not find user' });

    return res.status(200).json(extractedInfo(currentUser));
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getUserByToken = async (req, res) => {
  try {
    const userId = req.authUser;
    const currentUser = await users.findById(userId);
    if (!currentUser)
      return res.status(400).json({ error: 'Could not find user' });

    return res.status(200).json(extractedInfo(currentUser));
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getThirdPartyUserOrCreate = async (sub, email, name, picture) => {
  try {
    const existingUser = await users.findOne({ email_address: email });
    if (existingUser) return existingUser;
    const newUser = await users.create({
      email_address: email,
      sub,
      name,
      picture,
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const thirdPartyLogin = async (req, res) => {
  try {
    let { token } = req.body;
    const decoded = decodeJWT(token);
    console.log(decoded);
    const { sub, email, name, picture } = decoded;
    const thirdPartyUser = await getThirdPartyUserOrCreate(
      sub,
      email,
      name,
      picture
    );

    token = getPermanentAuthToken(thirdPartyUser._id);

    return res.status(200).json({
      token,
      id: thirdPartyUser._id,
      email_address: email,
      role: thirdPartyUser.role,
      status: thirdPartyUser.status,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const createKyc = async (req, res) => {
  try {
    const userId = req.authUser;

    const existingKyc = await customerKycs.findOne({ userId });

    if (existingKyc)
      return res.status(200).json({
        info: 'KYC already exists. Contact admin to delete the current one',
      });

    const {
      firstName,
      lastName,
      gender,
      celular,
      nationality,
      dependants,
      civilStatus,
      conjugalRegime,
      numberOfSons,
      numberOfCargas,
      housingType,
      educationLevel,
      university,
      profession,
      street,
      number,
      house,
      department,
      community,
      city,
      region,
      documents,
    } = req.body;

    const particularAddress = {
      street,
      number,
      house,
      department,
      community,
      city,
      region,
    };

    const currentKyc = await customerKycs.create({
      userId,
      firstName,
      lastName,
      gender,
      celular,
      nationality,
      dependants,
      civilStatus,
      conjugalRegime,
      numberOfSons,
      numberOfCargas,
      housingType,
      educationLevel,
      university,
      profession,
      particularAddress,
      documents,
    });

    return res.status(200).json({ currentKyc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getCustomerKyc = async (req, res) => {
  try {
    const userId = req.authUser;
    console.log('userId', userId);
    const basicKyc = await customerKycs.findOne({ userId });
    const assetsKyc = await AssetsKYC.findOne({ userId });
    if (!basicKyc || !assetsKyc)
      return res.status(400).json({ error: 'No KYC found' });
    return res.status(200).json({ basicKyc, assetsKyc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const setUserRole = async (req, res) => {
  try {
    const userId = req.authUser;
    const { role } = req.body;
    const roles = ['admin', 'user', 'bank'];
    if (!roles.includes(role))
      return res.status(400).json({
        error: 'Invalid role. Valid roles are "admin", "user" and "bank"',
      });
    const currentUser = await users.findById(userId);
    currentUser.role = role;
    await currentUser.save();
    return res.status(200).json(extractedInfo(currentUser));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const assetsKYC = async (req, res) => {
  try {
    const userId = req.authUser;

    const processedObject = processObject(req.body);

    const myObject = new AssetsKYC({
      ...processedObject,
      userId: userId,
    });

    const savedObject = await myObject.save();
    res.status(200).json({ savedObject });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const processObject = (obj) => {
  const processedObj = { ...obj };

  processedObj.financialInvestment = convertNumberedPropertiesToArray(
    processedObj.financialInvestment
  );

  processedObj.companyParticipations = convertNumberedPropertiesToArray(
    processedObj.companyParticipations
  );

  processedObj.realEstateDetails = convertNumberedPropertiesToArray(
    processedObj.realEstateDetails
  );

  processedObj.vehicleDetails = convertNumberedPropertiesToArray(
    processedObj.vehicleDetails
  );

  processedObj.debtDetails = convertNumberedPropertiesToArray(
    processedObj.debtDetails
  );

  return processedObj;
};

const convertNumberedPropertiesToArray = (obj) => {
  const array = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const item = obj[key];
      item.id = key;
      array.push(item);
    }
  }
  return array;
};

module.exports = {
  createUser,
  loginUser,
  getUserById,
  getUserByToken,
  thirdPartyLogin,
  createKyc,
  setUserRole,
  getCustomerKyc,
  assetsKYC,
};
