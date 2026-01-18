import express from "express";
import {
  addHealthRecord,
  deleteHealthRecord,
  getMyHealthRecords,
} from "../controllers/healthRecord.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addHealthRecord);
router.get("/my", protect, getMyHealthRecords);
router.delete("/:id", protect, deleteHealthRecord);

export default router;
