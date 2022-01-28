const Category = require("../models/Category");
const asyncWrapper = require("../middleware/async");

const createCategory = asyncWrapper(async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
});

const getAllCategory = asyncWrapper(async (req, res) => {
  const allCategory = await Category.find({});
  res.status(200).json({ allCategory });
});

const deleteCategory = asyncWrapper(async (req, res) => {
  const { id: deleteCategoryId } = req.params;
  const deleteItem = await Category.findByIdAndDelete({
    _id: deleteCategoryId,
  });
  res.status(200).json({ msJ: "Category delted", item: deleteItem });
});

module.exports = {
  createCategory,
  getAllCategory,
  deleteCategory,
};
