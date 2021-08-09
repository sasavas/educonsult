import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";

import indexRouter from "./routes/index.js";
import universityRouter from "./routes/universities.js";
import secrets from "./secrets.js";

var app = express();

const uri = `mongodb+srv://appicient:${secrets.Mongodb.password}@main.fzy7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/universities", universityRouter);

export default app;
