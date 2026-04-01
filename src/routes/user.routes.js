import express from "express";
import auth from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import {
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Admin only
router.get("/", auth, authorize("admin"), getUsers);

router.patch("/:id", auth, authorize("admin"), updateUser);

router.delete("/:id", auth, authorize("admin"), deleteUser);

export default router;