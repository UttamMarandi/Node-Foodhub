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

const getSingleFoodItem = asyncWrapper(async (req, res) => {
  const { id: foodItemId } = req.params;
  const foodItem = await FoodItem.findOne({ _id: foodItemId });

  if (!foodItem) {
    return res.status(404).json({ msj: `No food item with id ${foodItemId}` });
  }
  res.status(200).json({ foodItem });
});

const updateSingleFoodItem = asyncWrapper(async (req, res) => {});

const deleteSingleFoodItem = asyncWrapper(async (req, res) => {
  const { id: foodItemId } = req.params;
  const deleteFoodItem = await FoodItem.findOneAndDelete({ _id: foodItemId });

  if (!deleteFoodItem) {
    return res.status(400).json({ msj: `No food item with id ${foodItemId}` });
  }
  res.status(200).json({ msj: "Food Item deleted", foodItem: deleteFoodItem });
});

module.exports = {
  getAllFoodItems,
  createFoodItem,
  getSingleFoodItem,
  updateSingleFoodItem,
  deleteSingleFoodItem,
};
