import { Router } from "express";
import { getSchools, postSchool } from "../controllers/school.js";

const router = Router();

router.get("/", getSchools);

router.post("/", postSchool);

export default router;
