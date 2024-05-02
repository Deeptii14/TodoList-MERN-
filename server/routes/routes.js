import express from "express";
import { auth } from "../middleware/Auth.js";
import { addTodo } from "../controllers/todo/createTodos.js";
import { getAllTodos } from "../controllers/todo/getTodos.js";
import { deleteTodo } from "../controllers/todo/deleteTodos.js";
import { updateTodo } from "../controllers/todo/updateTodos.js";
import { login } from "../controllers/user/login.js";
import { signup } from "../controllers/user/signup.js";

const router = express.Router();

// User login and signup routes
router.post("/signup", signup);
router.post("/login", login);

// Todo routes
router.get("/getTodos", auth, getAllTodos);
router.post("/addTodo", auth, addTodo);
router.patch("/updateTodo/:id", auth, updateTodo);
router.delete("/deleteTodo/:id", auth, deleteTodo);

export default router;
