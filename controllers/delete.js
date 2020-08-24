//importing the mongodb habits model
const habitsCollection=require("../models/habits");
// controller function to delete a habit
const controller=function(req,res){
    habitsCollection.findByIdAndDelete({_id:req.query.id},function(){

    })
    // after deletion redirect to home page
     res.redirect("/");
}
// exporting deletion method
module.exports=controller;


