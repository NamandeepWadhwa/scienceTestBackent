const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const otp = require("./api/otp/index");
const passport = require("passport");
app.use(passport.initialize());
const user = require("./api/user/index");

app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());
app.use("/", otp);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.use("/", user);
 module.exports=app;