import express from "express";
import { getMe, loginUser, registerUser, getDoctors } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/doctors", getDoctors);

export default router;
