const User = require("../models/User");

const isAdminstratorMiddleware = (req, res, next) => {
  console.log("req.user", req.user);
  const { user } = req;
  if (req.user) {
    User.findOne({ email: user.email }, (err, doc) => {
      console.log("doc", doc.isAdmin);
      if (err) throw err;
      if (doc?.isAdmin) {
        next();
      }
      if (doc?.isAdmin === false) {
        return res
          .status(400)
          .json({ msj: "Unauthorized, Please login as admin" });
      }
    });
  }
  if (typeof req.user == "undefined") {
    res.status(400).json({ msj: "Please login As admin" });
  }
};

const isUser = (req, res, next) => {
  const { user } = req;
  if (user) {
    console.log("user", user);
    next();
  } else if (typeof req.user == "undefined") {
    res.status(400).json({ msj: "Please log in" });
  }
};

// cannot use isUser and isAdminstratorMiddleware together

module.exports = {
  isAdminstratorMiddleware,
  isUser,
};
