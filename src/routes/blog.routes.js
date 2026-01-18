import express from "express";
import { createBlog, getAllBlogs } from "../controllers/blog.controller.js";
import { adminOnly, protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", protect, adminOnly, createBlog);

export default router;
