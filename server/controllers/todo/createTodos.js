// const User = require('../../models/user');
// const Todos= require('../../models/todo');

// exports.addTodo = async (req, res) => {
// try {
//     const userId = req.user.id;
//     const {title,description,status,deadline} = req.body;

//     if(!(title && description && status && deadline)){
//         res.json({
//             success:false,
//             message:"All fields are required"
//         })
//     }
    
//    const newTodo =  await Todos.create({title,description,status,deadline});
//    const updateUser = await Course.findByIdAndUpdate(
//      { _id: userId },
//      {
//        $push: { todos: newTodo._id },
//      },
//      {
//        new: true,
//      }
//    );
//    return res.status(200).json({
//      success: true,
//      message: "Section created succesfully",
//      newTodo,
//    });
//  } catch (error) {
//    return res.status(500).json({
//      success: false,
//      message: "Unable to create section",
//      error: error.message,
//    });
//  }
 

// }

import User from '../../models/user.js';
import Todos from '../../models/todo.js';

const addTodo = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, description, status } = req.body;

    if (!title || !description) {
      console.log("Enter details carefully!!");
      return res.status(422).json({
        success: false,
        message: "Enter details carefully!"
      });
    }

    const newTodo = await Todos.create({ title, description, status });

    const updateUser = await User.findByIdAndUpdate( // declared but not used
      { _id: userId },
      {
        $push: { todos: newTodo._id },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Todo created successfully",
      newTodo,
    });
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create todo",
      error: error.message,
    });
  }
}

export default addTodo;
