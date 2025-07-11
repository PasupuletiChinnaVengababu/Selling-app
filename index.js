require('dotenv').config()
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose")
const { userRouter } = require("./Routes/users");
const { adminRouter } = require("./Routes/admins");

const app=express();

mongoose.connect(process.env.Mongo_url)
//userProfile(app)
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.listen(3000)