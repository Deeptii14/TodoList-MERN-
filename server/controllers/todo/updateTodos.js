const User = require('../../models/user');
const Todos= require('../../models/todo');

exports.updateTodo= async(req,res)=>{
    try {
      const {id} = req.params;

      const todo = await Todos.findById({_id : id});

          if(!todo){
            return res.status(404).json({
                success:false,
                message:"Error 404 Found!, No data found with given id"
            })
          }

          todo.status = !todo.status;

          await todo.save();

          res.status(200).json({
            success:true,
            data:todo,
            message:`updated Successfully`
        })
    } catch (error) {
      console.log(error);
      res.status(500).json({
          success:false,
          data:"Internal Server Error",
      });
    }
}