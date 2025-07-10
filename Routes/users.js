const express=require("express")
const Router=express.Router
const mongoose=require("mongoose");
const { userModels, courseModel, purchaseModel } = require("../db");
const jwt=require("jsonwebtoken");
const { Middleware } = require("../middleware/userMiddleware");
const JWT_SECRET="PCVB"
const userRouter=Router();

    userRouter.post("/signup", async (req,res)=>{
        const Firstname=req.body.Firstname;
        const Lastname=req.body.Lastname;
        const email=req.body.email;
        const password=req.body.password

        await userModels.create({
            Firstname,
            Lastname,
            email,
            password
        })
        res.json("USer Created")

    })
    userRouter.post("/login",(req,res)=>{
        const{email,password}=req.body;
        const suser=userModels.findOne({email});
        if(suser){
            const token=jwt.sign({id:suser._id},JWT_SECRET)
            console.log(token)
            res.json(token)
        }
        
    })
    userRouter.get("/preview",async (req,res)=>{
       //const id=req.id;
       const courses=await courseModel.find({})
       res.json(courses)
    })
    userRouter.post("/purchase/course",Middleware,async(req,res)=>{
        const userId=req.id;
        const courseId=req.body.courseId;
        await purchaseModel.create({
            userId,
            courseId
        })
        res.json("course purchased")
        
    })
    userRouter.get("/courses",async(req,res)=>{
        const purchasecourses=await purchaseModel.findOne({})
        const coursesList=await courseModel.find({})
        const purchasedcourses=coursesList.find(i=>i._id=="686f9c08dd39500f30d3b5af")
        res.json({purchasedcourses})
    })

module.exports={
    userRouter
}