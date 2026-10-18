import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    author: { type: String, required: true, trim: true, maxlength: 50 },
    text: { type: String, required: true, trim: true, maxlength: 280 },
  },
  { timestamps: true }
);

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
