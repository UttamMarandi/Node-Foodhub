//env
require("dotenv").config();
const port = process.env.PORT || 3000;

//express
const express = require("express");
const app = express();

const MongoConnect = require("./db/connect");
const foodItemRouter = require("./routes/foodItem");
const authRouter = require("./routes/auth");

const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(passport.initialize());
app.use(passport.session());
require("./controllers/passport");

//routes
app.get("/", (req, res) => {
  res.send("FoodHub API");
});

app.use("/api/v1/food", foodItemRouter);
app.use("/api/v1/auth", authRouter);

const start = async () => {
  try {
    await MongoConnect(process.env.MONGO_STRING);
    console.log("Connect to Db");
    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  } catch (err) {
    console.log("error in catch block start()", err);
  }
};

start();
