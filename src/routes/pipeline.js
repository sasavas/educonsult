import { Router } from "express";
import {
  getPipeline,
  getPipelineById,
  patchPipline,
  postPipeline,
  getPipelineByName,
} from "../controllers/pipeline.js";

const router = Router();

router.get("/", getPipeline);

router.get("/:id", getPipelineById);

router.get("/name/:name", getPipelineByName);

router.post("/", postPipeline);

router.patch("/:id", patchPipline);

export default router;
