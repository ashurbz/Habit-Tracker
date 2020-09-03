const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/habitTracker");

// accquring connection to check for errors
const connection=mongoose.connection;
// on error it display in console
connection.on('error',function(err){

   if(err){
       console.log(err);
   }
})
//once running well gets success message in console
connection.once('open',function(){

    console.log("Database successfully connected");

})
 

module.exports=connection;