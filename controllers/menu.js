const asyncWrapper = require("../middleware/async");
const Menu = require("../models/Menu");
const UserMenu = require("../models/UserMenu");

// only admin can create these menu. For user specific menu check createMenuUser
const createMenu = asyncWrapper(async (req, res) => {
  const menu = await Menu.create(req.body);
  res.status(201).json({ menu });
});

const getAllMenus = asyncWrapper(async (req, res) => {
  const allMenus = await Menu.find({});
  res.status(400).json({ allMenus });
});

const createMenuUser = asyncWrapper(async (req, res) => {
  // req should contain the id of the logged in user
  const menu = await UserMenu.create(req.body);
  res.status(400).json({ menu });
});

const getSingleMenu = asyncWrapper(async (req, res) => {
  const { id: menuId } = req.params;
  const singleMenu = await Menu.find({ _id: menuId });
  res.status(400).json({ singleMenu });
});

const deleteMenu = asyncWrapper(async (req, res) => {
  const { id: menuId } = req.params;
  const menuDeleted = await Menu.findOneAndDelete({ _id: menuId });
  res.status(400).json({ msj: "menu item delted", item: menuDeleted });
});

// To delete food item from the menu , in front end we display all the menu items , user deletes the items from array ,we save it back to db.
//So, I don't think we need to do anything to delete food items within Menus.

module.exports = {
  createMenu,
  deleteMenu,
  getAllMenus,
  getSingleMenu,
  createMenuUser,
};
