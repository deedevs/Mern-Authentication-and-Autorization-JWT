const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./db");
const dotenv = require("dotenv");

app.use(cookieParser());
app.use(express.json());

dotenv.config();

connectDB();

const User = require("./models/user");

const userInput = {
  username: "deevid45",
  password: 123456978,
  role: "admin",
};

const user = new User(userInput)
user.save((err,document)=>{
  if(err)
    console.log(err)
  console.log(document)
})

app.listen(5000, () => {
  console.log("express server started");
});
