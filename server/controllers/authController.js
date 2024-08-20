const User = require("../models/user");
const jwt = require("jsonwebtoken");
const tokenUtils = require("../utils/tokenUtils");

// register new user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const finalUsername = username || "usernameUndefined"; //default username, username is not required

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({
        error: "Email already in use. Please choose a different email.",
      });
    }

    const user = new User({
      username: finalUsername,
      email: email,
      password: password,
    });

    await user.save();

    const token = tokenUtils.generateToken(user.id);

    res
      .status(201)
      .json({ message: "User registered successfully", token: token });
  } catch (error) {
    console.error("Registration Error: ", error);
    res.status(500).json({
      error: "Internal Server Error. Please try again later.",
    });
  }
};

//Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ error: "The email or password you entered is incorrect." });
    }

    const token = tokenUtils.generateToken(user.id);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
