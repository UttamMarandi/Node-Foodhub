require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const MongoConnect = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  res.send("Hello");
});

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
