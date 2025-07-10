// const {Router}=require("express");
const express=require("express")
const jwt=require("jsonwebtoken")
const JWT_SECRET="PCVB"
const Router=express.Router;
const { adminModel } = require("../db");

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
adminRouter.post("/create/course",(req,res)=>{

})
adminRouter.delete("/course",(req,res)=>{

})
module.exports={
    adminRouter
}