const express = require("express");
const router = express.Router();
const Poem = require("../models/Poem");
const auth = require("../middleware/authMiddleware");

// CREATE POEM
router.post("/", auth, async (req, res) => {
  const poem = await Poem.create({
    content: req.body.content,
    author: req.user,
  });
  res.status(201).json(poem);
});

// GET ALL POEMS
router.get("/", async (req, res) => {
  const poems = await Poem.find()
    .populate("author", "email")
    .populate("comments.user", "email")
    .sort({ createdAt: -1 });

  res.json(poems);
});

// LIKE / UNLIKE
router.post("/:id/like", auth, async (req, res) => {
  const poem = await Poem.findById(req.params.id);
  if (!poem) return res.status(404).json({ error: "Not found" });

  const userId = req.user;

  if (poem.likes.includes(userId)) {
    poem.likes.pull(userId);
  } else {
    poem.likes.push(userId);
  }

  await poem.save();
  res.json(poem);
});

// ADD COMMENT
router.post("/:id/comment", auth, async (req, res) => {
  const poem = await Poem.findById(req.params.id);
  poem.comments.push({
    user: req.user,
    text: req.body.text,
  });
  await poem.save();
  res.json(poem);
});

// EDIT POEM (OWNER ONLY)
router.put("/:id", auth, async (req, res) => {
  const poem = await Poem.findById(req.params.id);
  if (poem.author.toString() !== req.user)
    return res.status(403).json({ error: "Not authorized" });

  poem.content = req.body.content;
  await poem.save();
  res.json(poem);
});

// DELETE POEM (OWNER ONLY)
router.delete("/:id", auth, async (req, res) => {
  const poem = await Poem.findById(req.params.id);
  if (poem.author.toString() !== req.user)
    return res.status(403).json({ error: "Not authorized" });

  await poem.deleteOne();
  res.json({ message: "Poem deleted" });
});

module.exports = router;
