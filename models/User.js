const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [5, "User Name has to be 5 characters length"],
    maxlength: [20, "User Name should be less than 20 chars"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  profileImg: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);