const createUser = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email_address,
      celular,
      password,
      gender,
      nationality,
      civil_status,
      conjugal_regime,
      number_of_sons,
      housing_type,
      level_of_study,
      university,
      profession,
      type,
      street_name,
      street_no,
      house,
      department,
      community,
      city,
      region,
    } = req.body;
  } catch (error) {
    console.log(error);
  }
};
