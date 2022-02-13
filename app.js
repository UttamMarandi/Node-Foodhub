//env
require("dotenv").config();
const port = process.env.PORT || 5000;

//express
const express = require("express");
const app = express();

const MongoConnect = require("./db/connect");
const foodItemRouter = require("./routes/foodItem");
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/category");
const menuRouter = require("./routes/menu");

const passport = require("passport");
const usePassport = require("./controllers/passport");
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
    origin: "http://localhost:3000",
  })
);
// app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser(process.env.SESSION_SECRET));
usePassport(app);

//routes
app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.sendFile(__dirname + "/index.html");
});

app.use("/api/v1/food", foodItemRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/menu", menuRouter);

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
