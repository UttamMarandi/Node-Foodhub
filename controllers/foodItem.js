const FoodItem = require("../models/FoodItem");
const asyncWrapper = require("../middleware/async");
const { createFoodItemValidator } = require("../validations/foodItem");

const getAllFoodItems = asyncWrapper(async (req, res) => {
  const foodItems = await FoodItem.find({});
  res.status(200).json({ foodItems });
});

const createFoodItem = asyncWrapper(async (req, res) => {
  const { value, error } = createFoodItemValidator.validate(req.body); //joi validation
  // joi validation works before entering to model
  //so it provides extra security

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  console.log("value", value);
  console.log("error", error);
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

const updateSingleFoodItem = asyncWrapper(async (req, res) => {
  const { id: foodItemId } = req.params;
  const updatedFoodItem = await FoodItem.findByIdAndUpdate(
    { _id: foodItemId },
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );
  if (!updatedFoodItem) {
    return res.status(400).json({ msj: `No food Item with id ${foodItemId}` });
  }
  res.status(200).json({ updatedFoodItem });
});

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
