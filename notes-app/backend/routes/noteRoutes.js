import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// Create note
router.post("/", async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
});

// Get notes by user
router.get("/:userId", async (req, res) => {
  const notes = await Note.find({ userId: req.params.userId });
  res.json(notes);
});

// Delete note
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;
