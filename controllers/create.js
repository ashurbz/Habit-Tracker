//importing the mongodb habits model
const habitsCollection=require("../models/habits");

// controller function for adding a new habit
const controller=function(req,res){
  // getting newHabit from client
    let newHabit=req.body.newHabit;
    // taking a array to save status  for seven days 
    let status=new Array(7);
    // assigning "" value to each item
     for(let i=0 ;i<7 ;i++){
       status[i]=" ";
     }
    //  create function for creating a new document in mongo db
    habitsCollection.create({
        habit:newHabit,
        status:status
     })
// exporting creation method
     
     res.redirect("/");
}
// exporting the controller function
module.exports=controller;


