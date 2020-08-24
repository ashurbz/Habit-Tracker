// importing mongoose
const mongoose=require("mongoose");

// creating new  schema for habits
const schema=new mongoose.Schema({
    habit:{
        type:String,
        required:true
          },

    status:{
        type:Array,
           }
        });

// creating new model
const habit=mongoose.model("habits",schema);

module.exports=habit;
