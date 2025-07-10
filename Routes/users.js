const express=require("express")
const Router=express.Router
const mongoose=require("mongoose");
const { userModels } = require("../db");
const jwt=require("jsonwebtoken")
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
    userRouter.post("/purchase/course",(req,res)=>{
        
    })
    userRouter.get("/courses",(req,res)=>{
        res.json({
            "name":"pcvb"
        })
    })

module.exports={
    userRouter
}