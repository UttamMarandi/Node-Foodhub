const Joi = require("joi");

const createMenuValidation = Joi.object({
  menuName: Joi.string().required(),
  menuItems: Joi.array().items(Joi.string()),
});

const userMenuValidation = Joi.object({
  menuName: Joi.string().required(),
  menuItems: Joi.array().items(Joi.string()).required(),
});

const createMenuUserValidation = Joi.object({
  userId: Joi.string().required(),
  userMenu: userMenuValidation,
});

module.exports = {
  createMenuValidation,
  createMenuUserValidation,
};
