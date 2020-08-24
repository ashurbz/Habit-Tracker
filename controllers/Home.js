//importing the mongodb habits model
const habitsCollection=require("../models/habits");
//controller function to display habits and their statuses
const controller=function(req,res){
      // weekdays array to get name of day from a date
   let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//    months name array to get name of month from a date
   let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//    Date instance to get current date
   let date=new Date();
//    finding every row in db and send to views
   habitsCollection.find({},function(err,habitRow){
      //    rendering the home view
   res.render("home",{
         title:"Habit-tracker", 
         habits:habitRow,
         daysOfWeek:daysOfWeek,
         monthNames:monthNames,
         date:date,
         });});
}
// exporting the controller method
module.exports=controller;
