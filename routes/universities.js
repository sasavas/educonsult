import { Router } from "express";
import University from "../models/university.js";

const router = Router();

router.get("/", function (req, res, next) {
  res.json({ universities: ["cambridge", "sapienza"] });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const university = new University({
    name: req.body.name,
    city: req.body.city,
  });
  university.save((err) => {
    if (err) {
      console.log("error occured while saving");
      res.status(500).send("could not be saved");
    }

    console.log("saved successfully");
    res.status(200).send("saved successfully");
  });
});

export default router;
