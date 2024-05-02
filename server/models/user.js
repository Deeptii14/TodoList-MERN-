import mongoose from "mongoose";

const Todo = require("./todo"); // 'Todo' is declared but its value is never read.

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    maxLength: 50,
  },
  password: {
    type: String,
    default: false,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
