import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    email: { type: String, required: true, unique: true, lowercase: true },

    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["patient", "doctor", "admin"],
      default: "patient",
    },

    age: Number,

    gender: { type: String, enum: ["male", "female", "other"] },

    phone: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
