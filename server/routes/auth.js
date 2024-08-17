const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { registerValidation } = require('../middleware/validationMiddleware')

//route to register
router.post("/register", registerValidation ,register);

//route to login
router.post("/login", login);

module.exports = router;
