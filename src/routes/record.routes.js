import express from "express";
import auth from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "../controllers/record.controller.js";

const router = express.Router();

// ADMIN only
router.post("/", auth, authorize("admin"), createRecord);

// ANALYST + ADMIN
router.get("/", auth, authorize("analyst", "admin"), getRecords);

// ADMIN only
router.patch("/:id", auth, authorize("admin"), updateRecord);
router.delete("/:id", auth, authorize("admin"), deleteRecord);

export default router;