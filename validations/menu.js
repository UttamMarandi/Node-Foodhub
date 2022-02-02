const Joi = require("joi");

const createMenuValidation = Joi.object({
  menuName: Joi.string().required(),
  menuItems: Joi.array().items(Joi.string()),
});

module.exports = {
  createMenuValidation,
};
