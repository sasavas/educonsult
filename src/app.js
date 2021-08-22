import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import cors from "cors";

import indexRouter from "./routes/index.js";
import schoolRouter from "./routes/schools.js";
import fieldRouter from "./routes/fields.js";
import studentRouter from "./routes/students.js";
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

app.use(cors());
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/", indexRouter);
app.use("/fields", fieldRouter);
app.use("/schools", schoolRouter);
app.use("/students", studentRouter);

export default app;
