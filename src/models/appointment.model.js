import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    doctorName: { type: String, required: true },

    department: {
      type: String,
      enum: ["general", "cardiology", "dentistry", "dermatology", "orthopedic"],
      default: "general",
    },

    appointmentDate: { type: Date, required: true },

    timeSlot: { type: String, required: true },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },

    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
