const asyncWrapper = require("../middleware/async");
const Menu = require("../models/Menu");

const createMenu = asyncWrapper(async (req, res) => {
  const menu = await Menu.create(req.body);
  res.status(201).json({ menu });
});

const getAllMenus = asyncWrapper(async (req, res) => {
  const allMenus = await Menu.find({});
  res.status(400).json({ allMenus });
});

const deleteMenu = asyncWrapper(async (req, res) => {
  const { id: menuId } = req.params;
  const menuDeleted = await Menu.findOneAndDelete({ _id: menuId });
  res.status(400).json({ msj: "menu item delted", item: menuDeleted });
});

module.exports = {
  createMenu,
  deleteMenu,
  getAllMenus,
};
