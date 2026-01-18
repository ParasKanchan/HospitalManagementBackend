import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import healthRecordRoutes from "./routes/healthRecord.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import queryRoutes from "./routes/query.routes.js";

import { errorHandler, notFound } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "✅ Healthcare Wellness Portal API running..." });
});

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/health", healthRecordRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/queries", queryRoutes);
console.log("routes loaaded");

app.use(notFound);
app.use(errorHandler);

export default app;
