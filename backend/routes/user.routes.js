const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");
const Poem = require("../models/Poem");

// ===============================
// GET LOGGED-IN USER PROFILE
// ===============================
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("email");

    const poems = await Poem.find({ author: req.user })
      .sort({ createdAt: -1 });

    res.json({ user, poems });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

module.exports = router;
