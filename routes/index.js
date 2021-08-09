import { Router } from "express";
var router = Router();

router.get("/", function (req, res, next) {
  res.send("<h2>Welcome to EduConsult App</h2>");
});

export default router;
