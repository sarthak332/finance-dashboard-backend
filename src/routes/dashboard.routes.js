import express from "express";
import auth from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import {
  getSummary,
  getCategoryBreakdown,
  getRecentActivity,
  getMonthlyTrends,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

// Analyst + Admin
router.get("/summary", auth, authorize("analyst", "admin"), getSummary);

router.get(
  "/categories",
  auth,
  authorize("analyst", "admin"),
  getCategoryBreakdown
);

router.get(
  "/recent",
  auth,
  authorize("analyst", "admin"),
  getRecentActivity
);

router.get(
  "/trends",
  auth,
  authorize("analyst", "admin"),
  getMonthlyTrends
);

export default router;