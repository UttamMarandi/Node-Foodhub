const asyncWrapper = require("../middleware/async");
const Menu = require("../models/Menu");
const UserMenu = require("../models/UserMenu");
const User = require("../models/User");
const {
  createMenuValidation,
  createMenuUserValidation,
} = require("../validations/menu");

// only admin can create these menu. For user specific menu check createMenuUser
const createMenu = asyncWrapper(async (req, res) => {
  const { value, error } = createMenuValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ msj: error.details[0].message });
  }
  const menu = await Menu.create(req.body);
  res.status(201).json({ menu });
});

const getAllMenus = asyncWrapper(async (req, res) => {
  const allMenus = await Menu.find({});
  res.status(400).json({ allMenus });
});

const createMenuUser = asyncWrapper(async (req, res) => {
  // req should contain the id of the logged in user
  const { value, error } = createMenuUserValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ msj: error.details[0].message });
  }
  const { userMenu } = req.body;
  const { user } = req.body;
  const { id: userId } = req.params;
  console.log("req.body.id", user);
  if (req.body.userId === userId) {
    if (userMenu) {
      const { id: userId } = req.params;
      const menu = await User.findByIdAndUpdate({ _id: userId }, req.body, {
        runValidators: true,
      });
      const { userMenu } = menu;
      res.status(201).json({ msj: "Menu added", userMenu: userMenu });

      if (!menu) {
        res
          .status(400)
          .json({ msj: "Unfortunatly cannot add Menu, Please try again" });
      }
    } else if (!userMenu) {
      res.status(400).json({ msj: "Please provide menu details" });
    }
  } else {
    res.status(400).json({ msj: "Unauthorised: Invalid user" });
  }
});
// menu will return the entire user

const getMenuUser = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const menu = await UserMenu.find({ userId: id });
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
  getMenuUser,
};
