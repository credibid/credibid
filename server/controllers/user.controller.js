const users = require('../models/user.model');
const userKycs = require('../models/userKYC.model');
const { decodeJWT, getPermanentAuthToken } = require('../utils/authentication');
const { encryptPassword, checkPassword } = require('../utils/password');

const createUser = async (req, res) => {
  try {
    const { email_address, password } = req.body;
    const existingUser = await users.findOne({ email_address });

    if (existingUser)
      return res
        .status(200)
        .json({ info: 'User with given email already exists!' });

    if (password.length < 8)
      return res
        .status(200)
        .json({ info: 'Password must be at least 8 character long' });

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

    return res.status(200).json({ token, id: currentUser._id, email_address });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const extractedInfo = (usr) => {
  const { _id, email_address } = usr;

  return {
    _id,
    email_address,
  };
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

    return res
      .status(200)
      .json({ token, id: thirdPartyUser._id, email_address: email });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const createKyc = async (req, res) => {
  try {
    const userId = req.authUser;

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

    const currentKyc = await userKycs.create({
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

module.exports = {
  createUser,
  loginUser,
  getUserById,
  getUserByToken,
  thirdPartyLogin,
  createKyc,
};
