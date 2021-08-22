import { Router } from "express";
import {
  getStudents,
  getStudentById,
  postStudents,
  patchStudent,
  registerProgram,
} from "../controllers/student.js";

const router = Router();

router.get("/", getStudents);

router.get("/:id", getStudentById);

router.post("/", postStudents);

router.patch("/:id", patchStudent);

router.put("/:id/:programId", registerProgram);

export default router;
