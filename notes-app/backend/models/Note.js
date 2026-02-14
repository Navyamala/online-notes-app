import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId: String,
  title: String,
  content: String,
  color: String,
  pinned: { type: Boolean, default: false }
});

export default mongoose.model("Note", noteSchema);
