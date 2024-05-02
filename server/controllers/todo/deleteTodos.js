import User from "../../models/user.js";
import Todos from "../../models/todo.js";

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const todo = await Todos.findById(id);

    if (!todo) {
      console.log("not found!!");
      return res.status(404).json({
        success: false,
        message: "Todo with provided id is not found!!",
      });
    }

    await Todos.findByIdAndDelete(id);

    await User.findByIdAndUpdate({ _id: userId }, { $pull: { todos: id } });

    console.log("Successfully deleted!!");
    res.status(200).json({
      success: true,
      message: "Todo Deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
