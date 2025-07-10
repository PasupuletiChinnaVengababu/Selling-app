const express=require("express")
const Router=express.Router
const mongoose=require("mongoose");
const { userModels } = require("../db");
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