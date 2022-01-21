//env
require("dotenv").config();
const port = process.env.PORT || 5000;

//express
const express = require("express");
const app = express();

const MongoConnect = require("./db/connect");
const foodItemRouter = require("./routes/foodItem");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("FoodHub API");
});

app.use("/api/v1/food", foodItemRouter);

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
