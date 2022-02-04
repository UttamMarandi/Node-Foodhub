const Joi = require("joi");

const registerValidation = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  isAdmin: Joi.boolean(),
});

const loginValidation = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
});

module.exports = {
  registerValidation,
  loginValidation,
};
