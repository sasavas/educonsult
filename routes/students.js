import { Router } from "express";
import {
  getStudents,
  getStudentById,
  postStudents,
  updateStudent,
} from "../controllers/student.js";

const router = Router();

router.get("/", getStudents);

router.get("/:id", getStudentById);

router.post("/", postStudents);

router.put("/:id", updateStudent);

export default router;
