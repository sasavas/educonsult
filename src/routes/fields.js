import { Router } from "express";
import { getFields, postFields } from "../controllers/field.js";

const router = Router();

router.get("/", getFields);

router.post("/", postFields);

export default router;
