// const {Router}=require("express");
const express=require("express")
const jwt=require("jsonwebtoken")
const JWT_SECRET="PCVB"
const Router=express.Router;
const { adminModel, courseModel } = require("../db");
const { Middleware } = require("../middleware/userMiddleware");

const adminRouter=Router();

adminRouter.post("/signup",async (req,res)=>{
    const Firstname=req.body.Firstname
    const Lastname=req.body.Lastname
    const email=req.body.email
    const password=req.body.paswword
    await adminModel.create({
        Firstname,
        Lastname,
        email,
        password
    })
    res.json("hello user admin")

})
adminRouter.post("/login",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const admin=await adminModel.findOne({email});
    if(admin){
        const token=jwt.sign({id:admin._id},JWT_SECRET)
        res.json(token)
    }
    
})
adminRouter.post("/create/course",Middleware, async (req,res)=>{
    const adminid=req.id;
    const {title,description,price,imageUrl}=req.body;
    await courseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId:adminid
    })
    res.json(adminid)

})
adminRouter.put("/course",Middleware,async (req,res)=>{
    const adminid=req.id;
    const {title,description,price,imageUrl,courseId}=req.body;
    const updated=await courseModel.updateOne({
        creatorId:adminid,
        _id:courseId
    },
    {
         title,
        description,
        price,
        imageUrl
    }
    )
    
    res.json(courseId)
})
adminRouter.delete("/course",(req,res)=>{

})
module.exports={
    adminRouter
}