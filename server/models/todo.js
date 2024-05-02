const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
            maxLength:50
        },
        description:{
            type:String,
            required: true,
            maxLength:50
        },
        status:{
            type: Boolean,
            default : false        
        },

    }
);

const Todo=  mongoose.model("Todo",todoSchema);

module.exports = Todo; 