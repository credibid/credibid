const bcrypt = require('bcryptjs');

const encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }
};

const checkPassword = async (password, encryptedPassword) => {
  try {
    return await bcrypt.compare(password, encryptedPassword);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { encryptPassword, checkPassword };
