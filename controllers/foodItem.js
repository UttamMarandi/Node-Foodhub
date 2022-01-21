const FoodItem = require("../models/FoodItem");
const asyncWrapper = require("../middleware/async");

const getAllFoodItems = asyncWrapper(async (req, res) => {
  const foodItems = await FoodItem.find({});
  res.status(200).json({ foodItems });
});

const createFoodItem = asyncWrapper(async (req, res) => {
  const foodItem = await FoodItem.create(req.body);
  res.status(201).json(foodItem);
});

const getSingleFoodItem = () => {};

const patchSingleFoodItem = () => {};

const deleteSingleFoodItem = () => {};

module.exports = {
  getAllFoodItems,
  createFoodItem,
  getSingleFoodItem,
  patchSingleFoodItem,
  deleteSingleFoodItem,
};
