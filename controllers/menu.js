const asyncWrapper = require("../middleware/async");
const Menu = require("../models/Menu");

const createMenu = asyncWrapper(async (req, res) => {
  const menu = await Menu.create(req.body);
  res.status(201).json({ menu });
});

module.exports = {
  createMenu,
};
