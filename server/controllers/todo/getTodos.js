import User from "../../models/user.js";
import Todos from "../../models/todo.js";

export const getAllTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    const todoIds = user.todos;

    const todos = await Todos.find({ _id: { $in: todoIds } });

    res.status(200).json({
      success: true,
      data: todos,
      message: "User's todos fetched successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
