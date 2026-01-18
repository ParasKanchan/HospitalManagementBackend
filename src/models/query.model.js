import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true },

    message: { type: String, required: true },

    status: {
      type: String,
      enum: ["new", "resolved"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Query", querySchema);
