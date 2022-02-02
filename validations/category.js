const Joi = require("joi");

const categoryValidation = Joi.object({
  categoryName: Joi.string().required().max(20).min(3),
});

module.exports = {
  categoryValidation,
};
