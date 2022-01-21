const mongoose = require("mongoose");

const MongoConnect = (url) => {
  return mongoose.connect(url);
};

module.exports = MongoConnect;
