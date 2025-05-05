require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const passport = require("passport");
app.use(passport.initialize());
const cors = require("cors");
app.use(cors());

// importing routes
const user = require("./api/user/index");
const profile = require("./api/profile/index");
const otp = require("./api/otp/index");
const nasa=require('./api/nasa/index');
const blogs=require('./api/blogs/index');
const comments=require('./api/comments/index');
const messages=require("./api/messages/index");

// routes

//health check
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
//otp
app.use("/", otp);
//user
app.use("/", user);
//profile
app.use("/", profile);
//nasa api
app.use("/",nasa);

//blogs
app.use("/",blogs);

//comments
app.use("/",comments);

//messages
app.use("/",messages);

module.exports = app;
