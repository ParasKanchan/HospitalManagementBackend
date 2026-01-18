import express from "express";
import { createQuery, getAllQueries } from "../controllers/query.controller.js";
import { adminOnly, protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", createQuery);
router.get("/", protect, adminOnly, getAllQueries);

export default router;
