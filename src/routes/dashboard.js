import { getDashboardStatistics } from "../controllers/dashboard.js";

import { Router } from "express";
const router = Router();

router.get("/", getDashboardStatistics);

export default router;
