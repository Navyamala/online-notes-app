import express from "express";
const router = express.Router()

let notes = [
  { id: 1, title: "First Note", content: "This is your first note." },
  { id: 2, title: "Second Note", content: "This is your second note." }
];

// ✅ GET all notes
router.get("/", (req, res) => {
  res.json(notes);
});

// ✅ POST a new note
router.post("/", (req, res) => {
  const { title, content } = req.body;
  const newNote = { id: notes.length + 1, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// ✅ PUT - Update a note by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const note = notes.find(n => n.id === parseInt(id));
  if (!note) {
    return res.status(404).json({ msg: "Note not found" });
  }

  note.title = title !== undefined ? title : note.title;
  note.content = content !== undefined ? content : note.content;

  res.json(note);
});

// ✅ DELETE - Remove a note by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex(n => n.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ msg: "Note not found" });
  }

  const deletedNote = notes.splice(index, 1);
  res.json({ msg: "Note deleted", note: deletedNote[0] });
});

export default router;
