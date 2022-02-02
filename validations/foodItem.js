const Joi = require("joi");

const foodValidator = {
  foodItemValidation: {
    body: Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      categories: Joi.array().items(Joi.string()),
      price: Joi.number().required(),
      calories: Joi.number(),
      isFavourite: Joi.boolean(),
      imageUrl: Joi.string(),
      createAt: Joi.date(),
    }),
  },
};

module.exports = foodValidator;
