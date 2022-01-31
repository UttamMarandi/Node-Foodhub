const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  menuName: {
    type: String,
    required: [true, "Please provide menu Name"],
  },
  menuItems: [String],
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [5, "User Name has to be 5 characters length"],
    maxlength: [20, "User Name should be less than 20 chars"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  profileImg: {
    type: String,
  },
  userMenu: menuSchema,
});

module.exports = mongoose.model("User", userSchema);
