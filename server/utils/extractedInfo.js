const extractedInfo = (usr) => {
  const { _id, email_address, role, status } = usr;

  return {
    _id,
    email_address,
    role,
    status,
  };
};

module.exports = { extractedInfo };
