import "dotenv/config";
import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import cors from "cors";

import indexRouter from "./routes/index.js";
import schoolRouter from "./routes/schools.js";
import programRouter from "./routes/programs.js";
import studentRouter from "./routes/students.js";
import pipelineRouter from "./routes/pipeline.js";
import dashboardRouter from "./routes/dashboard.js";

var app = express();

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWD}@main.fzy7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

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
app.use("/programs", programRouter);
app.use("/schools", schoolRouter);
app.use("/students", studentRouter);
app.use("/pipelines", pipelineRouter);
app.use("/dashboard", dashboardRouter);

export default app;
