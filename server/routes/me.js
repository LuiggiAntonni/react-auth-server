const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/user");

router.get("/", authMiddleware, async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.json({
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
  });
});

module.exports = router;
