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

const userRouter = require('./routes/User')
app.use('/user',userRouter)

app.listen(5000, () => {
  console.log("express server started");
});
