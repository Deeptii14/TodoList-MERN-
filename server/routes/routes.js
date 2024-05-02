const express = require("express");
const router = express.Router();
const {auth}= require("../middleware/Auth")
const { addTodo}=require("../controllers/todo/createTodos")
const {getAllTodos}=require("../controllers/todo/getTodos");
const{deleteTodo} =require("../controllers/todo/deleteTodos");
const{updateTodo} =require("../controllers/todo/updateTodos");
const {  
    login,
  } = require("../controllers/user/login");
  const {
    signup,
  } = require("../controllers/user/signup");


//user login signup
router.post("/signup", signup);
router.post("/login", login);

//todo routes
router.get("/getTodos",auth,getAllTodos);
router.post("/addTodo",auth,addTodo);
router.patch("/updateTodo/:id",auth,updateTodo);
router.delete("/deleteTodo/:id",auth,deleteTodo)

module.exports = router;