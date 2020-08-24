//importing the mongodb habits model
const habitsCollection=require("../models/habits");

// controller to perform changes when user click on submit button
const controller=function(req,res){
    habitsCollection.find({},function(err,habits){
       
    var j=0;
//     loop for itirating over the req.body object to get posted value
    for(let i in req.body){
           if(habits.length==1){
            
            if(req.body[i]!=req.body.id){
                     console.log(habits.length)
                     // if there is single habit user has
                     // updating values with new statuses
                     habitsCollection.update({_id:req.body.id},{status:req.body[i]},function(){
                     })
            }
                }
         
   
           else{
              //    if there are  multiple habits user has
                if(req.body[i]!=req.body.id){
           
                habitsCollection.update({_id:req.body.id[j]},{status:req.body[i]},function(){
     
               })
               j++; 
              }
       }
       }
       // after changes redirects to home

      return  res.redirect("/");

       })
      
   
       }
       // exporting controller changes
module.exports=controller;