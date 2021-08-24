import { Router } from "express";
import {
  getPrograms,
  postPrograms,
  getProgramById,
} from "../controllers/program.js";

const router = Router();

router.get("/", getPrograms);

router.get("/:id", getProgramById);

router.post("/", postPrograms);

export default router;
