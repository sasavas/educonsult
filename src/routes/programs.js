import { Router } from "express";
import { getPrograms, postPrograms } from "../controllers/program.js";

const router = Router();

router.get("/", getPrograms);

router.post("/", postPrograms);

export default router;
