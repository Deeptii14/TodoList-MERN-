import User from "../../models/user.js";
import Todos from "../../models/todo.js";

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todos.findById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Error 404 Found! No data found with the given id",
      });
    }

    todo.status = !todo.status;

    await todo.save();

    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
    });
  }
};
