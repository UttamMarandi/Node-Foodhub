const bcrypt = require("bcryptjs");

// generate hash password

const genHashPassword = (password) => {
  const hash = bcrypt.hashSync(password, 12);
  return {
    hash,
  };
};

const verifyPassword = (password, hash) => {
  const verify = bcrypt.compare(password, hash); //verify is a boolean

  return {
    verify,
  };
};

module.exports = { genHashPassword, verifyPassword };
