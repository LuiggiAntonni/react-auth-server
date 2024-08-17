const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      allowNull: true,
      maxLength: 30
    },
    email: {
      type: String,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      allowNull: false
    },
  },
  { timestamps: true } //time created and last update time
);

// Hashing password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); //if password is not modified

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {  
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema); //create model as schema

module.exports = User;
