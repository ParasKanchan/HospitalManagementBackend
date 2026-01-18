import mongoose from "mongoose";

const healthRecordSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    date: { type: Date, default: Date.now },

    weight: Number,
    height: Number,

    bpSystolic: Number,
    bpDiastolic: Number,

    sugarLevel: Number,
    heartRate: Number,

    sleepHours: Number,
    stepsWalked: Number,

    mood: {
      type: String,
      enum: ["good", "normal", "sad", "stressed"],
      default: "normal",
    },
  },
  { timestamps: true }
);

export default mongoose.model("HealthRecord", healthRecordSchema);
