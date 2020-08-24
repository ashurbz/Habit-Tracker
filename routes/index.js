//importing express
const express=require("express")
// importing controller functions
const controller=require("../controllers/Home")
const controller2=require("../controllers/create");
const saveController=require("../controllers/changes")
const deleteController=require("../controllers/delete")
const { Router } = require("express");


//  express router

const router=express.Router();

//on get request calling home controller
router.get("/",controller)
//on post request create controller will be called 
router.post("/create",controller2)
// on post request save changes controller will be called
router.post("/save",saveController)
// on get request delete controller will be called
router.get("/delete",deleteController)

// exporting router
module.exports=router;

